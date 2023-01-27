import Questions from "../models/Questions.js";
import mongoose, { Mongoose } from "mongoose";

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  // const userId = req.userId;
  const postQuestion = new Questions(postQuestionData);

  try {
    await postQuestion.save();
    res.status(200).json("Posted a question Successfully");
  } catch (error) {
    // await console.log(error);
    console.log(error); // no await is required
    res.status(501).json("Couldn't post a new question");
  }
};

export const getAllQuestions = async(req, res) => {
  try {
    const questionList = await Questions.find();
    res.status(200).json(questionList);
  } catch (error) {
    console.log("error in server-controller-questions")
    res.status(404).json({ message: error.message});
  }
}

export const deleteQuestion = async(req,res) => {
  const{ id:_id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable");
  }
  try {
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({message: "Succesfully deleted"});
  } catch (error) {
    console.log(error);
    res.status(404).json({message: error.message})
  } 
}