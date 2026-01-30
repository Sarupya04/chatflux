import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/chat", async (req, res) => {
  console.log("GROQ ENDPOINT HIT:", req.body.message);

  try {
    const messages = req.body.messages;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: messages,
    });

    const botReply = completion.choices[0].message.content;

    res.json({ reply: botReply });

  } catch (error) {
    console.error("GROQ ERROR:", error);
    res.status(500).json({ reply: "Error talking to AI" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
