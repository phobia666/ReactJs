import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightCon/RightContent'

const Centre = (props) => {
  // console.log(props);
  return (
    <div className=' px-10 py-5 w-full h-[90vh] flex justify-center gap-10'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Centre