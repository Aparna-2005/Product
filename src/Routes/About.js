import React from 'react'
import Abtcon from '../Components/AboutContent/Abtcon'
import Navbar from './Navbar'
import HeroBg from '../Components/HeroBg.js/HeroBg'
import Footer from './Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <HeroBg head="About" text="Know more about our products" btnn="Contact"/>
        <Abtcon/>
        <Footer/>
    </div>
  )
}
