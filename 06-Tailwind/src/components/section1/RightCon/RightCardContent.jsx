import React from 'react'

const RightCardContent = () => {
  return (
    <div className='h-full w-full absolute p-6 flex flex-col justify-between'>
        <h1 className='h-10 w-10 bg-white flex gap-10 items-center justify-center rounded-full'>1</h1>
        <div className='flex flex-col gap-15'>
            <div className='w-3/4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.</div>
            <button className='flex mx-10 justify-between bg-blue-500 rounded-full p-3'>
              <div className=''>Satisfied</div>
              <i class="ri-arrow-right-line"></i>
            </button>   
        </div>
    </div>
  )
}

export default RightCardContent