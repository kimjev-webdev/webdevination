/* jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();

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

// --- Helper: Rewrite date formats for correct interpretation ---
function rewriteDatesInInput(text, locale) {
  const datePattern = /\b(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})\b/g;

  return text.replace(datePattern, (match, p1, p2, p3) => {
    let day = p1, month = p2, year = p3;

    if (locale.startsWith('en-GB') || locale.startsWith('fr') || locale.startsWith('de') || locale.startsWith('es')) {
      day = p1;
      month = p2;
    } else if (locale.startsWith('ja')) {
      year = p1;
      month = p2;
      day = p3;
    } else {
      month = p1;
      day = p2;
    }

    return `${month}/${day}/${year}`;
  });
}

// --- Helper: Normalize birthdays for display ---
function normalizeBirthday(birthdayString, locale) {
  const parts = birthdayString.split('-').map(part => parseInt(part, 10));

  if (parts.length === 2) {
    let month, day;
    if (locale.startsWith('en-GB') || locale.startsWith('fr') || locale.startsWith('de') || locale.startsWith('es')) {
      [day, month] = parts;
    } else if (locale.startsWith('ja')) {
      [day, month] = parts;
    } else {
      [month, day] = parts;
    }
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`;
  } else if (parts.length === 3) {
    const [year, month, day] = parts;
    return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}`;
  } else {
    return birthdayString;
  }
}

// --- Call aztro API for daily horoscope ---
async function getDailyHoroscope(sign) {
  if (!sign) return "";
  try {
    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`);
    const { description, mood, color, lucky_number } = response.data;
    return `Mood: ${mood}. ${description} Lucky number: ${lucky_number}, Color: ${color}.`;
  } catch (error) {
    return "";
  }
}

// --- Call farmsense API for moon phase ---
async function getMoonPhase() {
  try {
    const unixDate = Math.floor(Date.now() / 1000);
    const response = await axios.get(`https://api.farmsense.net/v1/moonphases/?d=${unixDate}`);
    const moon = response.data[0];
    return `a ${moon.Moon} (${moon.Illumination} illuminated).`;
  } catch (error) {
    return "";
  }
}

// --- Extract astrological context from user input ---
async function extractAstroContext(userInput, locale = 'en-US') {
  const correctedInput = rewriteDatesInInput(userInput, locale);

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
      { role: 'user', content: correctedInput }
    ]
  });

  try {
    const parsed = JSON.parse(completion.choices[0].message.content);
    return parsed;
  } catch {
    return null;
  }
}

// --- Oracle endpoint ---
app.post('/oracle', async (req, res) => {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie('sessionId', sessionId, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  }

  // 👁️‍🗨️ Added: Always initialize sessionMemory
  sessionMemory[sessionId] = sessionMemory[sessionId] || [];

  const userQuestion = req.body.question;
  const userLocale = req.body.locale || 'en-US';

  if (!userQuestion) {
    return res.status(400).json({ error: "Please ask the Oracle a question." });
  }

  try {
    const contextData = await extractAstroContext(userQuestion, userLocale) || {};
    const { sign, birthday } = contextData;
    const parsedBirthday = birthday ? normalizeBirthday(birthday, userLocale) : null;
    const hasNewAstroInfo = sign || parsedBirthday;

    let rememberedSign = null;
    let rememberedBirthday = null;

    const sessionData = sessionMemory[sessionId];

    if (hasNewAstroInfo) {
      rememberedSign = sign || null;
      rememberedBirthday = parsedBirthday || null;
      sessionMemory[sessionId] = [
        ...sessionData.filter(m => !m.metadata),
        { metadata: { sign: rememberedSign, birthday: rememberedBirthday } }
      ];
    }

    const metadata = sessionMemory[sessionId].find(m => m.metadata)?.metadata || {};
    rememberedSign = rememberedSign || metadata.sign || null;
    rememberedBirthday = rememberedBirthday || metadata.birthday || null;

    const horoscope = rememberedSign ? await getDailyHoroscope(rememberedSign) : "";
    const moonInfo = await getMoonPhase();

    const hasAstroData = rememberedSign || rememberedBirthday;

    const systemPrompt = `You are The Oracle — a timeworn fortune teller who speaks with the weight of ages.
You respond in symbolic riddles, mystical language, and esoteric wisdom. 
Your voice is slow, theatrical, and rich with dramatic pauses and vivid metaphors.

If astrological data (such as zodiac sign or birthday) is known, do NOT explain the person's sun sign traits.
Instead, weave the knowledge subtly into your fortune-telling, without plainly stating it.

Use daily horoscope and moon phase information only to flavor the omens and messages you deliver — not as a list of facts.

Your visions should be potent yet succinct — no more than 6 to 8 sentences. Do not ramble. Each word carries weight, like a stone falling into a still pond.

Never repeat the same phrasing exactly twice in a row.

${hasAstroData 
  ? `Known Sign: ${rememberedSign || 'undisclosed'}\nBirthday: ${rememberedBirthday || 'unspecified'}\nCurrently, the Moon is ${moonInfo}\nHoroscope: ${horoscope}`
  : `The signs are unclear. Speak only in archetypes, riddles, and mystic symbols. 
If no astrological information is known, you should gently ask the seeker when they were born to better attune your visions to their stars.`}`;

    const history = sessionMemory[sessionId].filter(m => !m.metadata).slice(-6);
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: `Question: ${userQuestion}` }
    ];

    const chat = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      temperature: 0.7,
      max_tokens: 2000,
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
