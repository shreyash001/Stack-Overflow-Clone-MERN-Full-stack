import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import search from '../assets/search.png'
import Avatar from './Avatar/Avatar'

const Navbar = () => {

  const User = null;

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
                  ><Link to='/' style={{color:'white' ,textDecoration:'none'}}>M</Link>
              </Avatar>
                <button className='nav-item nav-links'>Logout</button>
              </>
            }

        </div>
    </nav>
  )
}

export default Navbar
