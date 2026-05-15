import React from 'react'
import RightCardContent from './RightCardContent'
import 'remixicon/fonts/remixicon.css'

const RightCard = (props) => {

  return (
    <div className='w-70 h-full shrink-0 overflow-hidden relative rounded-4xl flex flex-col '>
        <img className='h-full w-full object-cover' src= {props.image} alt="" />
        <RightCardContent
        id={props.id}
        bottom={props.bottom}/>
    </div>
  )
}

export default RightCard