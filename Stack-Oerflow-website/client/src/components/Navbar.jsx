import './Navbar.css'
import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch }  from 'react-redux'
import decode from 'jwt-decode'


import logo from '../assets/logo.png'
import search from '../assets/search.png'
import Avatar from './Avatar/Avatar' 
import { setCurrentUser } from '../actions/currentUser.js'

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const User = useSelector( (state) => (state.currentUserReducer))

  useEffect( () => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
  }, [User?.token, dispatch])

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
    navigate("/")
    dispatch(setCurrentUser(null))
  }

  return (
    <nav className='main-navbar'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' width="175"/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn '>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} alt="search-icon" className='search-icon' width='15px'/>
            </form>

            {User === null ? 
              <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
              <>
                <Avatar 
                  backgroundColor= '#73c2fb' 
                  borderRadius= '50%' 
                  px='10px' py='15px'
                  textAlign='center' 
                  cursor='pointer' 
                  ><Link to={`/Users/${User?.result._id}`} style={{color:'white' ,textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                </Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
              </>
            }

        </div>
    </nav>
  )
}

export default Navbar
