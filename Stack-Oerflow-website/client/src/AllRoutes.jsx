import React from 'react'

import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route path= "/Auth" element= {<Auth/>} />
        <Route path= "/Questions" element={<Questions/>} />
        <Route path= "/AskQuestion" element={<AskQuestion/>} />
        <Route path= '/Questions/:id' element={<DisplayQuestion/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
