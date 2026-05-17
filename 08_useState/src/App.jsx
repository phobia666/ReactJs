import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState(10)
  // const [name, setname] = useState('Ace')
  // function changeNum(){
  //   setnum(50)
  //   setname('Abhya')
  // }

  const [counter, setcounter] = useState(0)

  function increaseNum(){
    console.log("hello");
    setcounter(counter+1)
  }

  function decreaseNum(){
    setcounter(counter-1)
  }


  return (
    <div>
      {/* <h1>The value of a = {num} <br /> My name is {name}</h1>
      <button onClick={changeNum}>click here</button> */}

      <h1>{counter}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App