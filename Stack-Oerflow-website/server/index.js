import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answer.js"

const app = express();
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

const CONNECTION_URL =
  "mongodb+srv://admin:admin@stack-overflow-clone.mtxispg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
