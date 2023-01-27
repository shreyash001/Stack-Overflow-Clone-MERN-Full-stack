import React from "react";
import "./HomeMainbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {
  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)

  // const questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is javascript",
  //     questionBody: "It is meant to be",
  //     questionTags: ["javascript", "java", "css"],
  //     userPosted: "mona",
  //     userId: 1,
  //     askedOn: "jan 01",
  //     answers: [
  //       {
  //         answers: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "jan 02",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     questionTags: ["html", "java", "css"],
  //     userPosted: "Rahul",

  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is java",
  //     questionBody: "It is meant to be",
  //     userId: 2,
  //     askedOn: "jan 01",
  //     answers: [
  //       {
  //         answers: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "jan 02",
  //         userId: 5,
  //       },
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     questionTags: ["DevOps", "html", "css"],
  //     userPosted: "Ajay",

  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is DevOps",
  //     questionBody: "It is meant to be",
  //     userId: 3,
  //     askedOn: "jan 01",
  //     answers: [
  //       {
  //         answers: "Answer",
  //         userAnswered: "Kumar",
  //         answeredOn: "jan 02",
  //         userId: 4,
  //       },
  //     ],
  //   },
  // ];


  const askButtonRedirect = () => {
    if (user === null) {
      alert("Login to Ask Question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={askButtonRedirect} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionsList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
