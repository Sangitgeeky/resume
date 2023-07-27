import React from 'react'
import Navbar from '../Component/Navbar'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Interest from './Interest'

const Home = () => {
  return (
    <>
      <div className='page-top'>
        <Navbar/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Interest/>
      </div>
    </>
  )
}

export default Home
