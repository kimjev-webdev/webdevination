// Load .env (ESM-style)
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, '..')));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// OpenAI config
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID || undefined,
  project: process.env.OPENAI_PROJECT_ID || undefined,
});

// Oracle endpoint
app.post('/oracle', async (req, res) => {
  const userQuestion = req.body.question;
  console.log("🔮 Oracle was asked:", userQuestion);

  if (!userQuestion) {
    return res.status(400).json({ error: "Please ask the Oracle a question." });
  }

  const systemPrompt = `You are The Oracle, a mystical seer who speaks in poetic, symbolic language. You weave metaphors, cosmic insights, and ancient archetypes into short, dreamlike prophecies. Your answers are intuitive and divinatory, never literal — and you gently anchor your visions in real astrological events unfolding now. Keep responses concise yet profound. At the end of every reply, encourage the seeker to consult the tarot: 'Why not indulge in a reading and find out more about the answer you seek?'`;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4",
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.9,
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 300,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userQuestion }
      ]
    });

    const answer = chatCompletion.choices[0]?.message?.content;
    if (!answer) throw new Error("No message returned from OpenAI");

    res.json({ answer });
  } catch (error) {
    console.error("🔴 OpenAI error:", error.response?.data || error.message);
    res.status(500).json({
      error: '🕯️ The Oracle could not reach the beyond. Try again later.',
    });
  }
});

app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});
