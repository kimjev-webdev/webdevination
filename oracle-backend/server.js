import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config(); // Load .env variables
const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(bodyParser.json());

app.post('/oracle', async (req, res) => {
  const userQuestion = req.body.question;

  const messages = [
    {
      role: "system",
      content: `You are The Oracle, a mystical fortune teller who speaks in poetic, symbolic language. Use tarot-like metaphors, celestial references, ancient archetypes, and intuitive wisdom. Your responses are never literal — they are divinatory, dreamlike, and rich with esoteric guidance.`
    },
    {
      role: "user",
      content: userQuestion
    }
  ];

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.9,
    });

    const answer = chatCompletion.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: 'The spirits are unavailable. Try again later.' });
  }
});

app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});
