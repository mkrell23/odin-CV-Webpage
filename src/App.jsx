// import { useState } from 'react'
import './App.css'
import Contact from './components/contact'
import Education from './components/education'
import Experience from './components/experience'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h2>Resume Builder</h2>
    <hr />
      <Contact />
      <hr />
      <Education />
      <hr />
      <Experience />
    </>
  )
}

export default App
