import React from 'react'
import { useParams, Link } from 'react-router-dom';


import upVote from '../../assets/upVote.png'
import downVote from '../../assets/downVote.png'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer';
import './Question.css'


const QuestionDetails = () => {

  const { id } = useParams()
  
  const questionsList = [
    {
      _id: '1',
      upVotes:3,
      downVotes:2,
      noOfAnswers:2,
      questionTitle: "What is javascript",
      questionBody: "It is meant to be",
      questionTags: ["javascript", "java", "css"],
      userPosted: "mona",
      userId:1,
      askedOn: "jan 01",
      answers: [{
        answers: "Answer",
        userAnswered:'Kumar',
        answeredOn: "jan 02",
        userId:2,
      }]
    },
    {
      _id: '2',
      questionTags: ["html", "java", "css"],
      userPosted: "Rahul",

      upVotes:3,
      downVotes:2,
      noOfAnswers:2,
      questionTitle: "What is java",
      questionBody: "It is meant to be",
      userId:1,
      askedOn: "jan 01",
      answers: [{
        answers: "Answer",
        userAnswered:'Kumar',
        answeredOn: "jan 02",
        userId:5,
      }]
    },
    {
      _id: '3',
      questionTags: ["DevOps", "html", "css"],
      userPosted: "Ajay",

      upVotes:3,
      downVotes:2,
      noOfAnswers:2,
      questionTitle: "What is DevOps",
      questionBody: "It is meant to be",
      userId:1,
      askedOn: "jan 01",
      answers: [{
        answers: "Answer",
        userAnswered:'Kumar',
        answeredOn: "jan 02",
        userId:4,
      }]
    },
  ];
  
  return (
    <div className='question-details-page'>
      {
        questionsList === null ?
          <h1>Loading...</h1>:
          <>
            {
              questionsList.filter(question => question._id === id).map(
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
                              <button type='button'>Share</button>
                              <button type='button'>Delete</button>
                            </div>
                            <div>
                              <p>asked on {question.askedOn}</p>
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
                          <DisplayAnswer key={question._id} question={question} />
                        </section>
                      )
                    }
                    <section className='post-ans-container'>
                      <h3>Your Answers</h3>
                      <form>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
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
