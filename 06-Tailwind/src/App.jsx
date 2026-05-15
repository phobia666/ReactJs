import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/section2'

const App = () => {

  const users =[
    {
      id: 1,
      image: 'https://images.pexels.com/photos/7518995/pexels-photo-7518995.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Satisfied'

    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Underserved'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/8145349/pexels-photo-8145349.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Underbanked'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/7190898/pexels-photo-7190898.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Underwear',

    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/8374304/pexels-photo-8374304.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Tired'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/6964066/pexels-photo-6964066.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Overwhelmed'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/8145333/pexels-photo-8145333.jpeg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo non unde, aut aliquam eius.',
      bottom: 'Undertaken'
    }
  ]
  return (
    <div>
       <Section1 users={users}/>
       <Section2/>
    </div>
  )
}
export default App