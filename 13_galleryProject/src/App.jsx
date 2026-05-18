import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [imageData, setImageData] = useState([])
  const [index, setIndex] = useState(1)

  const getImages = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setImageData(response.data)
  }

  useEffect(function(){
    setImageData([])
    getImages()
    // console.log('hello');
  }, [index])


  let printImages = <h3 className='absolute top-1/2 left-1/2 text-gray-600'>loading...</h3>

  if(imageData.length > 0){
    printImages = imageData.map(function(elem, idx){
      return (
        <a href={elem.url}>
          <div className='w-52 h-62'>
          <img className='object-cover w-full h-full rounded-2xl' src={elem.download_url} alt="" />
          <h3 className='text-xl font-semibold'>{elem.author}</h3>
          </div>
        </a>
        
      )
    })
  }


  return (
    <div className='h-full text-white p-5'>
      <h1 className='fixed top-0 font-bold text-4xl'>IMAGE COLLECTION</h1>
      <div 
      className='px-2 py-10 flex flex-wrap gap-15 relative w-full h-screen'>
        {printImages}
      </div>
      <div className='py-10  flex items-center justify-center gap-10'>
        <button 
        onClick={()=>{
          if(index > 1){
            setIndex(index - 1)
            // setImageData([])
          }
        }}
        className='bg-amber-500 cursor-pointer text-black px-7 py-3 text-xl font-semibold active:scale-95'>
          Prev
          </button>

          <h2>Page {index }</h2>

        <button onClick={()=>{
          setIndex(index + 1)
          // setImageData([])
        }}
        className='bg-amber-500 cursor-pointer text-black px-7 py-3 text-xl font-semibold active:scale-95'>
          Next
          </button>
      </div>
      
    </div>
  )
}

export default App