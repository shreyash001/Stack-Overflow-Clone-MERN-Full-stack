import React from 'react'
import LeftSidebar from './../../components/LeftSidebar/LeftSidebar'
import RightSidebar from './../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'



const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-3'>
        <QuestionDetails/>
      </div>
      <div className='home-container-2'>
      <RightSidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestion
