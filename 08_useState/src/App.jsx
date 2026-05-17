import React, { useState } from 'react'
import Basic from './components/basic';
import Advance from './components/Advance';
const App = () => {

  //num is the read only value and 
  // setnum is the write only value
  // you cannot use num in the write only value setnum(num) X

  const [num, setnum] = useState(10)
  const [name, setname] = useState('Ace')
  function changeNum(){
    console.log(num)
    setnum(50) // this runs asynchronously
    console.log(num);
    //console me thoda piche chalta hai lekin UI me turant update aata hai
    setname('Abhya')
  }

  


  return (
    <div>
      {/* <h1>The value of a = {num} <br /> My name is {name}</h1>
      <button onClick={changeNum}>click here</button> */}
      {/* <Basic/> */}
      <Advance />
    </div>
  )
}

export default App