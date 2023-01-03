import React from 'react'

import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route path="/Auth" element= {<Auth/>} />
        {/* <Route exact path= "/" components  /> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
