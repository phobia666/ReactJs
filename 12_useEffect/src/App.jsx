import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {


  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = ()=>{
    console.log('A is changing');
  }
  const bChanging = ()=>{
    console.log('B is changing');
  }



  useEffect(function(){
    console.log('');
  },[]) // dependency array jod do done
  //use effect ka actual example h ye

  useEffect(function(){
    aChanging()
  },[a])

  useEffect(function(){
    bChanging()
  },[b])


  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={function(){
        setA(a + 1)
      }}>
        change a
      </button>
      <button onClick={function(){
        setB(b - 1)
      }}>
        change b
      </button>
    </div>
  )
}

export default App