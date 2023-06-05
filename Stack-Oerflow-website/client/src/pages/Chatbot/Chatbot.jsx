import {React, useState} from 'react' 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import "./Chatbot.css"
import Auth from "../Auth/Auth"

const Chatbot = () => {

    const User = useSelector((state) => (state.currentUserReducer))
    const [input,setInput] = useState("")
    const [chatLog,setChatLog] = useState([{
         user: "Hello this is User",
         bot: "Hello this is Ai"
    }]);
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

    const handleSubmit = async(e) => {
        e.preventDefault();
        setInput("");
        setChatLog([...chatLog,{ user:`${input}`, bot:"This is AI generated message"}])
        console.log(chatLog)

        

    }

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

                        {chatLog.map( (message,index) => (
                            <ChatMessage message={message} key={index}/>
                        ))}
                        
                        <div className='ask-question-container'>
                            <form onSubmit={handleSubmit} className='ask-question-form'>
                                <input name="" 
                                rows="1" 
                                placeholder='Enter Your Question here'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                ></input>
                                <button type='submit' className='ask-question-btn'>Ask</button>
                            </form>
                        </div>

                    </section>
                </>
        )}
      
    </div >
  )
}

const ChatMessage = ({message, index}) => {

    return(
        <div className='ai-user-message-container'>
            <div key={index}>
                <div className='user-message'>
                    {/* <p>Hellow This is user</p> */}
                    <p>{message.user}</p>
                </div>
                <div className='ai-message'>
                    {/* <p>Hellow This is chatBot</p> */}
                    <p>{message.bot}</p>
                </div>
            </div>
        </div>
    )
}

export default Chatbot
