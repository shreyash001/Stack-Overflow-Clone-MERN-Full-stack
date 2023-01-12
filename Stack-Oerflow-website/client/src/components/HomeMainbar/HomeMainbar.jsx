import React from 'react'

import './HomeMainbar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import QuestionsList from './QuestionsList'



const HomeMainbar = () => {

  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();

  const questionsList = [{
    id:1,
    question:'What is javascript',
    votes:2,
    answers:5,
    questionTitle: 'What is javascript',
    questionTags: ['javascript', 'java', 'css'],
    askedOn: 'jan 01',
    userPosted: 'mona',
  },{
    id:2,
    question:'What is java',
    votes:3,
    answers:2,
    questionTitle: 'What is java',
    questionTags: ['html', 'java', 'css'],
    askedOn: 'jan 01',
    userPosted: 'Rahul',


  },{
    id:3,
    question:'What is DevOps',
    votes:1,
    answers:4,
    questionTitle: 'What is DevOps',
    questionTags: ['DevOps', 'html', 'css'],
    askedOn: 'jan 01',
    userPosted: 'Ajay',

  }

]
  
  const askButtonRedirect = () => {
    if(user === null){
      alert("Login to Ask Question");
      navigate('/Auth');
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <button onClick={askButtonRedirect} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList === null ? 
          <h1>Loading....</h1>: 
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList}/>
          </>
          
        }
      </div>
    </div>
  )
}

export default HomeMainbar
