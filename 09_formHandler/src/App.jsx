import React, { useState } from 'react'

const App = () => {

  const submitHandler = (elem)=>{
    elem.preventDefault()
    console.log('Form Submitted by', title)

    setTitle('') // so convenient
    // console.log(elem.target.children[0].value);
  }// lekin mai ye khud se kar rha hu merko react ke throught karwana h
  

  //TWO WAY BINDING
  const [title, setTitle] = useState('')
  //bhai hame react ko involve karna tha so we did this nothing else
  // mai react ko bol rha title change kar
  // we dynamically sends the new value to the title and react changes it
  // and displays in the UI 



  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter name' 
        value={title} // it wont on the typing box becuz it is not a hardcoded value
        // although you can change it
        onChange={(e)=>{ 
          setTitle(e.target.value);
        }} 

        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App