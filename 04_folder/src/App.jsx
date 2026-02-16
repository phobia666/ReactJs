function user(){
  return "Hello guys"
}
// we are just exporting this function to main.jsx and executing it from there and rendering it inside the root div. THAT'S IT
// export default user;

import React from 'react'

const App = () => {
  return (
// fragments - empty tags serve as containers they wont be visible in the html code
    <>
      <div id='parent'>
      <h1 id='child1'>App</h1>
      <h2 id='child2'>div</h2>
    </div>
    <div id='parent2'>
      <p>this is inside another div</p>
    </div>
    </>

  )
}
export default App