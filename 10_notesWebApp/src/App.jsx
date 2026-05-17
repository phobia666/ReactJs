import React from 'react'
import { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [data, setData] = useState([])

  const submitHandler = (e)=>{
    console.log('form submitted')
    const copyTask = [...data]

    copyTask.push({title, details})
    setData(copyTask)

    setDetails('')
    setTitle('')
    console.log(copyTask);
  }

  return (
    <div className='h-screen lg:flex '>
      <form className='p-10 flex flex-col gap-5 items-start lg:w-1/2' onSubmit={(e)=>{
        e.preventDefault()
        submitHandler(e)
      }}>
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          {/* title wala input */}
          <input className='w-full px-5 py-2 font-medium rounded'
          type="text"
          placeholder='Enter title'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value) 
          }}
          />

          {/* details wala input */}
          <textarea className='w-full h-25 px-5 py-2 font-medium rounded'
          placeholder='Enter details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          >
          </textarea>
          <button  className='w-full px-5 py-2 font-medium bg-white active:bg-gray-200 active:scale-99   text-black rounded'>
          Add Note
          </button>
      </form>
      <div className='lg:w-1/2 h-full flex flex-col lg:border-l-3 p-10 bg-gray-900'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex gap-5 flex-wrap py-5 h-full overflow-auto text-black'>
          {data.map((elem)=>{
            return(
              <div className='h-52 w-42 bg-white rounded-2xl px-5 py-2 flex flex-col items-center '>
                <h1 className='text-xl' >{elem.title}</h1>
                <div>
                  <p>{elem.details}</p>
                </div>
                
            </div>
            )
          })}
          
        </div>
        
      </div>
    </div>
  )
}

export default App
