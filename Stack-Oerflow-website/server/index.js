import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answer.js"

const app = express();
dotenv.config();
app.use(express.json({ limt: "30mb", extended: true }));
app.use(express.urlencoded({ limt: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack Overflow clone API");
});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL
  // "mongodb+srv://admin:admin@stack-overflow-clone.mtxispg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));


const port = 3080;

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const responce = await openai.listModels()
// const response = await openai.retrieveModel("text-davinci-003");

app.post("/", async(req,res) => {
  const response = await openai.createCompletion(
    {
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens:7,
      temperature:0,
    }
  )
  console.log(response.data.choices[0].text)
  res.json({
    data:response.data
  })
})
app.listen(port, () => {
  console.log(`OpenAI is listening to port ${port}`)
})