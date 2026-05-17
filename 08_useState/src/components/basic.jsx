import React,{ useState } from 'react'

const basic = () => {
    
    const [counter, setcounter] = useState(0)

  function increaseNum(){
    console.log("hello");
    setcounter(counter+1)
  }

  function decreaseNum(){
    setcounter(counter-1)
  }

  function jump5(){
    setcounter(counter + 5)
  }
  return (
    <div>
        <h1>{counter}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button> 
      <br />
      <button onClick={jump5}>increase by 5</button>
    </div>
  )
}

export default basic