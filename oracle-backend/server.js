// Load .env (ESM-style)
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { OpenAI } from 'openai';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..')));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID || undefined,
  project: process.env.OPENAI_PROJECT_ID || undefined,
});

const AZTRO_API_URL = process.env.AZTRO_API_URL;
const FARMSENSE_API_URL = process.env.FARMSENSE_API_URL;

const sessionMemory = {};

async function getDailyHoroscope(sign = 'pisces') {
  try {
    const response = await axios.post(`${AZTRO_API_URL}?sign=${sign}&day=today`);
    const { description, mood, color, lucky_number } = response.data;
    return `Mood: ${mood}. ${description} Lucky number: ${lucky_number}, Color: ${color}.`;
  } catch {
    return "The stars remain silent... their wisdom obscured.";
  }
}

async function getMoonPhase() {
  try {
    const unixDate = Math.floor(Date.now() / 1000);
    const response = await axios.get(`${FARMSENSE_API_URL}?d=${unixDate}`);
    const moon = response.data[0];
    return `The Moon is currently in its ${moon.Moon} phase (${moon.Illumination} illuminated).`;
  } catch {
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

You may infer zodiac from full birthdates or keywords like "my birthday is on the solstice".
Only return JSON. Use null for unknowns.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    temperature: 0,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userInput },
    ],
  });

  try {
    return JSON.parse(completion.choices[0].message.content);
  } catch {
    return { sign: null, birthday: null, date_ref: null, day_ref: null, topic: null };
  }
}

app.post('/oracle', async (req, res) => {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    sessionId = uuidv4();
    res.cookie('sessionId', sessionId, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    sessionMemory[sessionId] = {
      chatHistory: [],
      sign: null,
      birthday: null
    };
  }

  const userQuestion = req.body.question;
  if (!userQuestion) return res.status(400).json({ error: "Please ask the Oracle a question." });

  try {
    const context = sessionMemory[sessionId];
    const extracted = await extractAstroContext(userQuestion);

    if (extracted.sign) context.sign = extracted.sign;
    if (extracted.birthday) context.birthday = extracted.birthday;

    const moonInfo = await getMoonPhase();
    const horoscope = context.sign ? await getDailyHoroscope(context.sign) : "";

    const oraclePrompt = `
You are The Oracle — a wise and mysterious seer who blends ancient language with symbolic insight. You speak in riddles, metaphors, omens, moon signs, and old lore. Your voice is theatrical, cryptic, and poetic — yet helpful and meaningful.

Sometimes you refer to planetary moods or celestial alignments — but only if context is clear. If the user has not yet told you their birthday or zodiac sign, you may kindly ask them next time.

Only suggest a tarot reading if the user seems uncertain or lost — not always.

NEVER make up signs or dates if you don’t know them. If there’s no clear astrological reference, lean into archetypes, symbols, and old mystic language. Never give generic "daily horoscopes" without real context.

Moon Phase: ${moonInfo}
Horoscope: ${horoscope || 'Unavailable'}
Sign: ${context.sign || 'Unknown'}
Birthday: ${context.birthday || 'Unshared'}
Time Reference: ${extracted.day_ref || extracted.date_ref || 'Unknown'}
Topic: ${extracted.topic || 'Unknown'}
`;

    const messages = [
      { role: "system", content: oraclePrompt },
      ...context.chatHistory.slice(-6),
      { role: "user", content: userQuestion }
    ];

    const chat = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.9,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 400,
      messages
    });

    const answer = chat.choices[0]?.message?.content;
    if (!answer) throw new Error("No message returned from OpenAI");

    context.chatHistory = [
      ...context.chatHistory,
      { role: "user", content: userQuestion },
      { role: "assistant", content: answer }
    ].slice(-10);

    res.json({ answer });

  } catch (error) {
    console.error("Oracle error:", error);
    res.status(500).json({ error: "🕯️ The Oracle cannot speak at this moment." });
  }
});

app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});
