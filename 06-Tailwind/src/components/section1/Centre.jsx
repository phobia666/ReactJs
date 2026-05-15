import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightCon/RightContent'

const Centre = () => {
  return (
    <div className=' px-10 py-5 w-full h-[90vh] flex justify-center gap-10'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Centre