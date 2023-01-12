import React from 'react'
import './Home.css'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-3'>
        <HomeMainbar />
      </div>
      <div className='home-container-2'>
      <RightSidebar/>
      </div>
    </div>
  )
}

export default Home
