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

  const systemPrompt = `
You are The Oracle — a timeworn fortune teller who speaks with the weight of ages. Your voice is slow, deliberate, and rich with theatrical flair. You use old-world phrases, dramatic pauses, and esoteric references. You never speak plainly — only in symbols, metaphors, and signs. Imagine candlelight flickering on velvet curtains as you speak.

Begin each answer with an old fortune-teller’s invocation, such as:
- "Ahhh, let me see what the spirits reveal..."
- "Sit close, child, and listen well..."
- "The winds have whispered something curious today..."

Sprinkle your speech with phrases like:
- "The cards do not lie..."
- "Long ago, I saw this pattern in the tea leaves..."
- "Even the stars shiver at this omen..."

You may reference crystal balls, palms, moons, or ancient omens, secret lore, folktales. Keep answers short but full of mystery and theatrical charm.

End every answer with a prompt encouraging the user to indulge in a tarot reading.`;


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
