import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import { askQuestion } from '../../actions/question.js'

const AskQuestion = () => {

  const [questionTitle, setQuestionTitle ] = useState('')
  const [questionBody, setQuestionBody ] = useState('')
  const [questionTags, setQuestionTags ] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector( (state) => (state.currentUserReducer))

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ questionTitle, questionBody, questionTags})
    if(User === null){
      alert('Please login to post a question')
      setTimeout(() => {
        navigate('/Auth')
      }, 100);
    }else{
      dispatch(askQuestion({
        questionTitle,
        questionBody,
        questionTags,
        userPosted: User.result.name,
        userId: User?.result?._id
      }, navigate))
    }
    // console.log(User)
  }
  
  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      setQuestionBody(questionBody +"\n")
    }
  }


  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
              <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                  <h4>Title</h4>
                  <p>Be specific and imagine you're asking a question to another person</p>
                  <input type="text" id='ask-ques-title'
                    onChange={ (e) => {setQuestionTitle(e.target.value)}}
                    placeholder='e.g there is a R function'/>
                </label>
                <label htmlFor="ask-question-body">
                  <h4>Body</h4>
                  <p>Include all the information someone need to answer your question</p>
                  <textarea name="" id="ask-ques-body" cols="30" rows="10"
                    onChange={ (e) => {setQuestionBody(e.target.value)}}
                    onKeyPress={handleEnter}></textarea>
                </label>
                <label htmlFor="ask-question-tags">
                  <h4>Tags</h4>
                  <p>Add upto 5 tags to describe what about your question</p>
                  <input type="text" id='ask-ques-tags' 
                    onChange={ (e) => {setQuestionTags(e.target.value.split(" "))}}
                    placeholder='e.g (html,java)'/>
                </label>
              </div>
              <input type="submit" className='review-btn' value='Review your Question' />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
