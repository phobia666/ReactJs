import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log((response.data));
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem, idx){
        return <h2>hello {elem.name}, {idx} </h2>
      })}
      </div>
    </div>
  )
}

export default App