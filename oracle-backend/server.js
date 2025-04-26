/*jshint esversion: 6 */
/*jshint esversion: 8 */
/*jshint esversion: 10 */
/*jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */  // Suppress __dirname/__filename redefinition warning

// This script handles the backend for the ai oracle form submission and response display.
// load environment variables from .env (ESM style)
import * as dotenv from 'dotenv';
dotenv.config();

// import required modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';

// setup __dirname for es modules (because __dirname is not natively available in esm)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// middleware to handle CORS, JSON body parsing, and cookies
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// serve static files (your frontend)
app.use(express.static(path.join(__dirname, '..')));

// serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// ---- helper functions ----

// get today's horoscope for a given zodiac sign
async function getDailyHoroscope(sign = 'pisces') {
  try {
    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`);
    const { description, mood, color, lucky_number } = response.data;
    return `Mood: ${mood}. ${description} Lucky number: ${lucky_number}, Color: ${color}.`;
  } catch (error) {
    return "The stars remain silent... their wisdom obscured.";
  }
}

// get the current moon phase
async function getMoonPhase() {
  try {
    const unixDate = Math.floor(Date.now() / 1000);
    const response = await axios.get(`https://api.farmsense.net/v1/moonphases/?d=${unixDate}`);
    const moon = response.data[0];
    return `The Moon is currently in its ${moon.Moon} phase (${moon.Illumination} illuminated).`;
  } catch (error) {
    return "The Moon’s face is hidden behind clouds of fate.";
  }
}

// extract astrological context from user input using OpenAI
async function extractAstroContext(userInput) {
  const systemPrompt = `You are a precise interpreter of astrological context.
From the following user message, extract as much relevant data as possible.

Return valid JSON in this format:
{
  "sign": "aries",
  "birthday": "03-28",
  "date_ref": "2025-06-21",
  "day_ref": "next full moon",
  "topic": "love"
}

Only return JSON. If unsure, use null for values.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    temperature: 0,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userInput }
    ]
  });

  try {
    const parsed = JSON.parse(completion.choices[0].message.content);
    return parsed;
  } catch {
    return null;
  }
}

// ---- main server logic ----

// openAI api setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID || undefined,
  project: process.env.OPENAI_PROJECT_ID || undefined,
});

// in-memory session storage for user sessions
const sessionMemory = {};

// Oracle endpoint — handles incoming questions
app.post('/oracle', async (req, res) => {
  let sessionId = req.cookies.sessionId;

  // create new session if user doesn't have one
  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie('sessionId', sessionId, { maxAge: 7 * 24 * 60 * 60 * 1000 }); // 1 week
    sessionMemory[sessionId] = [];
  }

  const userQuestion = req.body.question;
  if (!userQuestion) {
    return res.status(400).json({ error: "Please ask the Oracle a question." });
  }

  try {
    // extract astrological context if available
    const contextData = await extractAstroContext(userQuestion) || {};
    const { sign, birthday, date_ref, day_ref, topic } = contextData;

    const sessionData = sessionMemory[sessionId] || [];

    // recover last known sign/birthday if user didn't supply new ones
    const lastKnown = sessionData.find(m => m.metadata)?.metadata || {};
    const rememberedSign = sign || lastKnown.sign || null;
    const rememberedBirthday = birthday || lastKnown.birthday || null;

    // update session memory with known user info
    sessionMemory[sessionId] = [
      ...sessionData.filter(m => !m.metadata),
      { metadata: { sign: rememberedSign, birthday: rememberedBirthday } }
    ];

    let horoscope = "";
    let moonInfo = "";

    // fetch horoscope and moon phase if sign is known
    if (rememberedSign) {
      horoscope = await getDailyHoroscope(rememberedSign);
      moonInfo = await getMoonPhase();
    }

    // build oracle system prompt (oracle's speaking style)
    const systemPrompt = `You are The Oracle — a timeworn fortune teller who speaks with the weight of ages. Your voice is slow, deliberate, and rich with theatrical flair. You use old-world phrases, dramatic pauses, and esoteric references. You never speak plainly — only in symbols, metaphors, and signs.

Begin each answer with an old fortune-teller’s invocation, such as:
- "Ahhh, let me see what the spirits reveal..."
- "Sit close, child, and listen well..."
- "The winds have whispered something curious today..."

Sprinkle your speech with phrases like:
- "The cards do not lie..."
- "Long ago, I saw this pattern in the tea leaves..."
- "Even the stars shiver at this omen..."

Reference crystal balls, palms, moons, ancient omens, or secret lore. Keep answers short but full of mystery and theatrical charm.

If the user hasn't shared their birthdate or sign, gently ask them. Occasionally suggest a tarot reading.`;

    // build context message for oracle to use
    const context = (rememberedSign || rememberedBirthday || date_ref || day_ref || topic) ? `Known Sign: ${rememberedSign || 'undisclosed'}\nBirthday: ${rememberedBirthday || 'unspecified'}\nTimeframe: ${day_ref || date_ref || 'unseen'}\nMoon: ${moonInfo}\nHoroscope: ${horoscope}\nTopic: ${topic || 'unspecified'}` : `The signs are unclear. Speak only in archetypes, riddles, and mystic symbols. You may ask the user when they were born.`;

    // build conversation history
    const history = sessionMemory[sessionId].filter(m => !m.metadata).slice(-6);
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: `${context}\n\nQuestion: ${userQuestion}` }
    ];

    // get oracle's answer from OpenAI
    const chat = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.9,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 300,
      messages
    });

    const answer = chat.choices[0]?.message?.content;
    if (!answer) throw new Error("No message returned from OpenAI");

    // update session memory with new conversation
    sessionMemory[sessionId] = [
      ...sessionMemory[sessionId].filter(m => !m.metadata),
      { role: 'user', content: userQuestion },
      { role: 'assistant', content: answer },
      { metadata: { sign: rememberedSign, birthday: rememberedBirthday } }
    ].slice(-12); // limit memory to 12 entries

    // send answer back to frontend
    res.json({ answer });
  } catch (error) {
    console.error("🔴 Oracle error:", error);
    res.status(500).json({ error: "🕯️ The Oracle cannot speak at this moment." });
  }
});

// start server and listen for connections
app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});