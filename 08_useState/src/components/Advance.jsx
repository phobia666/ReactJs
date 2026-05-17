import React, { useState } from 'react'

const Advance = () => {

    const [num, setnum] = useState({name: 'Abhya', role: 'Backend Developer'})
    const [arr, setarr] = useState([10, 20, 30])
    const [val, setval] = useState(10)

    const Clicked = ()=>{
        //making changes to the copied array changes the orig. array as well or object
        //becuz they share the same reference over different variables
        // const newNum = num;
        // newNum.name = 'Ace'
        // setnum(newNum);
        // there are 2 methods to avoid this 
        setval(val+1)
        setval(val+1)
        setval(val+1)

    }
    //1. Destructuring
    const destructure = ()=>{
        // const newNum = {...num}
        // newNum.name = 'Ace' 
        // setnum(newNum)


        // const newArr = [...arr]
        // newArr.push(65)
        // setarr(newArr)
        // console.log(newArr);

    }
    //2. prev used for batch updation

    const prevNum = ()=>{
        setnum(prev =>({...prev, name: 'luffy'}))
        setval(prev =>(prev + 1))
        setval(prev =>(prev + 1))
        setval(prev =>(prev + 1))

        //normally nahi hota bhai

    }




  return (
    <div>
        {/* <h1>My name is {num.name} and i am a {num.role} </h1> */}
        {/* <h1>{arr}</h1> */}
        <h1>{val}</h1>
        <button onClick={Clicked}>Normal</button>
        <br />
        <button onClick={destructure}>Destructure</button>
        <br />
        <button onClick={prevNum}>prev</button>
    </div>
  )
}

export default Advance