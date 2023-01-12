import React from 'react'
import './AskQuestion.css'

const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1>Ask a public question</h1>
            <form>
              <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                  <h4>Title</h4>
                  <p>Be specific and imagine you're asking a question to another person</p>
                  <input type="text" id='ask-ques-title' placeholder='e.g there is a R function'/>
                </label>
                <label htmlFor="ask-question-body">
                  <h4>Body</h4>
                  <p>Include all the information someone need to answer your question</p>
                  <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
                </label>
                <label htmlFor="ask-question-tags">
                  <h4>Tags</h4>
                  <p>Add upto 5 tags to describe what about your question</p>
                  <input type="text" id='ask-ques-tags' placeholder='ex (html,typescript)'/>
                </label>
              </div>
              <input type="submit" className='review-btn' value='Review your Question' />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
