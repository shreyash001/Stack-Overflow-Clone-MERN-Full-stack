import Questions from "../models/Questions.js";
import mongoose from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  const userId = req.userId;
  const postQuestion = new Questions({ ...postQuestionData, userId });

  try {
    await postQuestion.save();
    res.status(200).json("Posted a question Successfully");
  } catch (error) {
    // await console.log(error);
    console.log(error); // no await is required
    res.status(501).json("Couldn't post a new question");
  }
};
