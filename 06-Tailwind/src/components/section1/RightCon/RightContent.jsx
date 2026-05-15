import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id='right' className='w-2/3 flex flex-nowrap overflow-x-auto  gap-10 py-8'>
      {props.users.map(function(user){
        return <RightCard
        image={user.image}
        id={user.id}
        bottom={user.bottom}/>
      })}
    </div>
  )
}

export default RightContent