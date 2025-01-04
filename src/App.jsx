import React from 'react'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import FeaturesSection from './Components/FeatureSection'
import BenefitPage from './Components/BenefitPage'
import DemoToday from './Components/DemoToday'
import CountdownTimerPage from './Components/CountdownTimerPage'
import Testimonial from './Components/Testimonial'


function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <FeaturesSection/>
    <BenefitPage/>
    <DemoToday/>
    <CountdownTimerPage/>
    <Testimonial/>

    
    </>
  )
}

export default App
