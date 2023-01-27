import React, { useState } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"
import copy from "copy-to-clipboard"


import upVote from '../../assets/upVote.png'
import downVote from '../../assets/downVote.png'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';
import './Question.css'
import { postAnswer, deleteQuestions } from "../../actions/question.js";


const QuestionDetails = () => {

  const { id } = useParams()
  const questionsList = useSelector(state => state.questionsReducer)

  
  
  // const questionsList = [
  //   {
  //     _id: '1',
  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers:2,
  //     questionTitle: "What is javascript",
  //     questionBody: "It is meant to be",
  //     questionTags: ["javascript", "java", "css"],
  //     userPosted: "mona",
  //     userId:1,
  //     askedOn: "jan 01",
  //     answers: [{
  //       answers: "Answer",
  //       userAnswered:'Kumar',
  //       answeredOn: "jan 02",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     questionTags: ["html", "java", "css"],
  //     userPosted: "Rahul",

  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers:2,
  //     questionTitle: "What is java",
  //     questionBody: "It is meant to be",
  //     userId:1,
  //     askedOn: "jan 01",
  //     answers: [{
  //       answers: "Answer",
  //       userAnswered:'Kumar',
  //       answeredOn: "jan 02",
  //       userId:5,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     questionTags: ["DevOps", "html", "css"],
  //     userPosted: "Ajay",

  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers:2,
  //     questionTitle: "What is DevOps",
  //     questionBody: "It is meant to be",
  //     userId:1,
  //     askedOn: "jan 01",
  //     answers: [{
  //       answers: "Answer",
  //       userAnswered:'Kumar',
  //       answeredOn: "jan 02",
  //       userId:4,
  //     }]
  //   },
  // ];
  
  const[Answer,setAnswer] = useState('')
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector( (state) => (state.currentUserReducer))
  const location = useLocation();
  const url = "https://localhost:3000/";

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if(User === null){
      alert("Login or SigUp to answer")
      Navigate('/Auth')
    }else{
      if(Answer === ''){
        alert("Enter an answer before Submitting")
      }else{
        dispatch(postAnswer(
          {
            id,
            noOfAnswers:answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id
          }
        ))
      }
    }
  }

  const handleShare = () => {
    copy(url + location.pathname)
    alert("Copied url: " + url + location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestions(id,Navigate))
    alert("Question Deleted")
  }

  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
          <h1>Loading...</h1>:
          <>
            {
              questionsList.data.filter(question => question._id === id).map(
                question => (
                  <div key={question._id} >
                    <section className='question-details-container'>
                      <h1>{question.questionTitle}</h1>
                      <div className='question-details-container-2'>
                        <div className='question-votes'>
                          <img src={upVote} alt="" className='votes-icon'/>
                          <p>{question.upVotes - question.downVotes}</p>
                          <img src={downVote} alt=""  className='votes-icon'/>
                        </div>
                        <div style={{width:'100%'}} className='question-body-1'>
                          <p className='question-body-2'>{question.questionBody}</p>
                          <div className="question-details-tags">
                            {
                              question.questionTags.map( (tags) => (
                                <p key={tags}>{tags}</p>
                              ))
                            }
                          </div>
                          <div className="question-actions-user">
                            <div>
                              <button type='button' onClick={handleShare}>Share</button>
                              {
                                User?.result?._id === question?.userId && (
                                  <button type='button' onClick={handleDelete}>Delete</button>
                                )
                              }
                              
                            </div>
                            <div>
                              <p>asked on {moment(question.askedOn).fromNow()}</p>
                              <Link to={`/User/${question.userId}`} className='user-link' style={{
                                color:'#0086d8'
                              }}> <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                              <div>
                                {question.userPosted}
                              </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {
                      question.noOfAnswers !== 0 &&(
                        <section>
                          <h3>{question.noOfAnswers} Answers</h3>
                          <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                        </section>
                      )
                    }
                    <section className='post-ans-container'>
                      <h3>Your Answers</h3>
                      <form onSubmit={ (e) => {handlePostAnswer(e, question.answer.length)}}>
                        <textarea name="" id="" cols="30" rows="10" onChange={ e => setAnswer(e.target.value)}></textarea>
                        <br />
                        <button type='submit' className='post-ans-btn'>Post Your Answer</button>
                      </form>
                      <p>Browse other Question tagged
                        {
                          question.questionTags.map( (tag) => (
                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                          ))
                        } or {
                          <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff' }}>ask your Question.</Link>
                        }
                      </p>
                    </section>
                  </div>
                )
              )
            }
          </>
      }
      
    </div>
  )
}

export default QuestionDetails
