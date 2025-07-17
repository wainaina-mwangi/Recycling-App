import React from 'react'
import Navbar from './Components/Navbar'
import HeroSlider from './Components/HeroSlider'
import About from './Components/About'
import HowItWorks from './Components/HowItWorks'
import RecyclerMap from './Components/RecyclerMap'
import RecyclerCard from './Components/RecyclerCard'
import Sponsors from "./Components/Sponsors";
import FAQs from './Components/FAQs';


import { createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {


  return (
    <div className ='overflow-x-hidden'>
      <Navbar/>
       <HeroSlider />
       <About/>
      < HowItWorks/>
      <RecyclerMap/>
      <RecyclerCard/>
      <Sponsors />
      <FAQs/>
      


    </div>
  )
}

export default App