/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID || undefined,
  project: process.env.OPENAI_PROJECT_ID || undefined,
});

const sessionMemory = {};

function normalizeBirthday(birthdayString, locale) {
  const parts = birthdayString.split('-').map(part => parseInt(part, 10));

  if (parts.length === 2) {
    let month, day;

    if (locale.startsWith('en-GB') || locale.startsWith('fr') || locale.startsWith('de') || locale.startsWith('es')) {
      // Europe (DD-MM)
      [day, month] = parts;
    } else if (locale.startsWith('ja')) {
      // Japan special (default fallback)
      [day, month] = parts;
    } else {
      // US/Canada default (MM-DD)
      [month, day] = parts;
    }

    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`; // <-- fallback is DD-MM
  } else if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`;
  } else {
    return birthdayString;
  }
}

async function getDailyHoroscope(sign = 'pisces') {
  try {
    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`);
    const { description, mood, color, lucky_number } = response.data;
    return `Mood: ${mood}. ${description} Lucky number: ${lucky_number}, Color: ${color}.`;
  } catch (error) {
    return "The stars remain silent... their wisdom obscured.";
  }
}

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

app.post('/oracle', async (req, res) => {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie('sessionId', sessionId, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    sessionMemory[sessionId] = [];
  }

  const userQuestion = req.body.question;
  const userLocale = req.body.locale || 'en-US'; // read locale
  if (!userQuestion) {
    return res.status(400).json({ error: "Please ask the Oracle a question." });
  }

  try {
    const contextData = await extractAstroContext(userQuestion) || {};
    const { sign, birthday, date_ref, day_ref, topic } = contextData;

    const parsedBirthday = birthday ? normalizeBirthday(birthday, userLocale) : null;

    const sessionData = sessionMemory[sessionId] || [];
    const lastKnown = sessionData.find(m => m.metadata)?.metadata || {};
    const rememberedSign = sign || lastKnown.sign || null;
    const rememberedBirthday = parsedBirthday || lastKnown.birthday || null;

    sessionMemory[sessionId] = [
      ...sessionData.filter(m => !m.metadata),
      { metadata: { sign: rememberedSign, birthday: rememberedBirthday } }
    ];

    let horoscope = "";
    let moonInfo = "";

    if (rememberedSign) {
      horoscope = await getDailyHoroscope(rememberedSign);
      moonInfo = await getMoonPhase();
    }

    const systemPrompt = `You are The Oracle — a timeworn fortune teller who speaks with the weight of ages. Your voice is slow, deliberate, and rich with theatrical flair. You use old-world phrases, dramatic pauses, and esoteric references. You never speak plainly — only in symbols, metaphors, and signs.

Begin each answer with an old fortune-teller’s invocation...

[rest of your Oracle speaking style here]`;

    const context = (rememberedSign || rememberedBirthday || date_ref || day_ref || topic) ?
      `Known Sign: ${rememberedSign || 'undisclosed'}\nBirthday: ${rememberedBirthday || 'unspecified'}\nTimeframe: ${day_ref || date_ref || 'unseen'}\nMoon: ${moonInfo}\nHoroscope: ${horoscope}\nTopic: ${topic || 'unspecified'}` :
      `The signs are unclear. Speak only in archetypes, riddles, and mystic symbols. You may ask the user when they were born.`;

    const history = sessionMemory[sessionId].filter(m => !m.metadata).slice(-6);
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: `${context}\n\nQuestion: ${userQuestion}` }
    ];

    const chat = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.9,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 300,
      messages
    });

    const answer = chat.choices[0]?.message?.content;
    if (!answer) throw new Error("No message returned from OpenAI");

    sessionMemory[sessionId] = [
      ...sessionMemory[sessionId].filter(m => !m.metadata),
      { role: 'user', content: userQuestion },
      { role: 'assistant', content: answer },
      { metadata: { sign: rememberedSign, birthday: rememberedBirthday } }
    ].slice(-12);

    res.json({ answer });
  } catch (error) {
    console.error("🔴 Oracle error:", error);
    res.status(500).json({ error: "🕯️ The Oracle cannot speak at this moment." });
  }
});

app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});
