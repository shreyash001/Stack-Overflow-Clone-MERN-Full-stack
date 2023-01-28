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

export const voteQuestion = async(req,res)  => {
  const {id: _id} = req.params;
  const {value} = req.body;
  const userId = req.userId;

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable");
  }
  try {
    const question = await Questions.findById(_id)
    const upIndex = question.upVote.findIndex( (id) => id === String(userId))
    const downIndex = question.downVote.findIndex( (id) => id === String(userId))

    if(value === 'upVote'){
      if(downIndex !== -1){
        question.downVote = question.downVote.filter( (id) => id !== String(userId))
      }
      if(upIndex === -1){
        question.upVote.push(userId)
      }else{
        question.upVote = question.upVote.filter( (id) => id !== String(userId))
      }
    }

    else if(value === 'downVote'){
      if(upIndex !== -1){
        question.upVote = question.upVote.filter( (id) => id !== String(userId))
      }
      if(downIndex === -1){
        question.downVote.push(userId)
      }else{
        question.downVote = question.downVote.filter( (id) => id !== String(userId))
      }
    }

    await Questions.findByIdAndUpdate(_id, question)
    res.status(200).json({message: "Vote Sucessful"})
  } catch (error) {
    res.status(404).json({message: "Id Not Found"})
  }
}