import React from 'react'

const App = () => {

  function buttonClick(){
    console.log('button is clicked');
  }


  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Hello Bro</h1>
      <button className='bg-gray-400 text-5xl' onDoubleClick={buttonClick}>Click Here</button>
    </div>
  )
}

export default App