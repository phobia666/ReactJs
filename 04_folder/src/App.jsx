import React from 'react'
import Card from "./components/card"
import Navbar from "./components/navbar"
import Personalities from './components/personalities'
//ese component ko add krte pura app.js me hoch poch nhi karte
//component based architecture
function user(){
  return "Hello guys"
}
// we are just exporting this function to main.jsx and executing it from there and rendering it inside the root div. THAT'S IT
// export default user;

const username = "Abhyanshu Shah"
const App = () => {
  // console.log(Person[0]);
  return (
    
// fragments - empty tags serve as containers they wont be visible in the html code
<div>
  <div id="parent">
    {Personalities.map((person) =>(
      <Card 
      key = {person.name}
      name = {person.name}
      backImage = {person.backgroundImage}
      photo = {person.photo}
      likes = {person.likes}
      posts = {person.posts}
      views = {person.views}
      />

      
    ))}
  </div>
  
</div>
  )
}
export default App