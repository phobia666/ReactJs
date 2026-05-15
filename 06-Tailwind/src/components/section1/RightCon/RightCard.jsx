import React from 'react'
import RightCardContent from './RightCardContent'
import 'remixicon/fonts/remixicon.css'

const imageContainer = () => {
  return (
    <div className='w-70 h-full overflow-hidden relative rounded-4xl flex flex-col '>
        <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/7518995/pexels-photo-7518995.jpeg" alt="" />
        <RightCardContent />
    </div>
  )
}

export default imageContainer