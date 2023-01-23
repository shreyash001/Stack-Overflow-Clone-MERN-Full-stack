import React from 'react'
import './Auth.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth'

import  { signup, login } from '../../actions/auth.js'

const Auth = () => {

  const [isSignup,setIsSignup] = useState(false)

  const [ name, setName] = useState('')
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert("Enter Email and Password")
    }
    if(isSignup){
      if(!name){
        alert("Enter a name to continue.")
      }
      dispatch(signup({name, email, password}, navigate))
    }else{
      dispatch(login({email, password}, navigate))
    }
    // console.log({name, email, password})
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='Stack Overflow' className='login-logo' height='35px'/>}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              {/* Using password in braces because of css with respect to the login and signup page */}
              {!isSignup && <h4 style={{marginTop:'21px'}}>Password</h4>}
              {isSignup && <h4>Password</h4>}
              {!isSignup && <p style={{fontSize:'13px', color:'#007ac6', margin:'24px 5px'}}>forgot password?</p>}
            </div>
            <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" style={{height:'15px',width:'20px'}} />
                <p style={{fontSize:'13px'}}>
                  Opt-in to receive occasional product <br/>
                  updates, user research invitations, company <br/>
                  announcements, and digests.
                </p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'> {isSignup ? 'Sign up' : 'Log in'}</button>
        </form>
        <div>
          {isSignup ? 'Already have an account?': "Don't have an account" }
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? "Log in": "Sign up"}
          </button>
          {isSignup && 
            <p style={{fontSize:'10px'}}>
              By clicking “Sign up”, you agree to our 
              <span style={{color:'#007ac6'}}> terms of <br/>service</span> , 
              <span style={{color:'#007ac6'}}> privacy policy</span> and 
              <span style={{color:'#007ac6'}}> cookie policy</span>
            </p>
          }
        </div>
      </div>
    </section>
  )
}

export default Auth
