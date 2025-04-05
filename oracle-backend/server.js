import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config(); // Load .env variables

const app = express();
const port = 3000;

// ✅ Create the OpenAI client with project support
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  project: process.env.OPENAI_PROJECT_ID,
  organization: process.env.OPENAI_ORG_ID, // Optional
});

app.use(cors());
app.use(bodyParser.json());

app.post('/oracle', async (req, res) => {
  const userQuestion = req.body.question;

  const messages = [
    {
      role: "system",
      content: `You are The Oracle, a mystical fortune teller who speaks in poetic, symbolic language. Use metaphors, celestial references, ancient archetypes, and intuitive wisdom. Your responses are never literal — they are divinatory, dreamlike, and rich with esoteric guidance. At the end of every answer, encourage the user to consult the tarot - ask them 'why not indulge in a reading and find out more about the answer you seek?'`
    },
    {
      role: "user",
      content: userQuestion
    }
  ];

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4", // or gpt-4/gpt-4o if you have access
      messages,
      temperature: 0.9,
    });

    const answer = chatCompletion.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ error: '🕯️ The Oracle could not reach the beyond. Try again later.' });
  }
});

app.listen(port, () => {
  console.log(`🔮 The Oracle is listening at http://localhost:${port}`);
});
