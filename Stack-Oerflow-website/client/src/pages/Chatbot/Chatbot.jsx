import React from 'react' 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import "./Chatbot.css"
import Auth from "../Auth/Auth"

const Chatbot = () => {

    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();

    const AiUserChat = [
        {
            _id: 0,
            user: "THis is User 1 message",
            bot: "This is Ai generated message"
        },{
            _id:1,
            user:"This is User 2 message",
            bot:"THis is AI generated message 2"
        },{
            _id:2,
            user:"This is User 3 message",
            bot:"THis is AI generated message 3"
        }
    ]

    return (
        <div className='chatbot-container'>
            {User === null ? (
                <h1>Login to acess</h1>
            ): (
                <>
                    <aside className='side-menu'>
                        <button className='newchat-btn' type='button'>+ New Chat</button>
                    </aside>
                    <section className='chatbot'>
                        <h2>Welcome to AI Assistance</h2>
                        <div className='ai-user-message-container'>
                            {AiUserChat.map((AiUserChat) => (
                                <div key={AiUserChat._id}>
                                    <div className='user-message'>
                                        <p>{AiUserChat.user}</p>
                                    </div>
                                    <div className='ai-message'>
                                        <p>{AiUserChat.bot}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='ask-question-container'>
                                <textarea name="" rows="1" placeholder='Enter Your Question here'></textarea>
                                <button type='button' className='ask-question-btn'>Ask</button>
                        </div>
                    </section>
                </>
        )}
      
    </div >
  )
}

export default Chatbot
