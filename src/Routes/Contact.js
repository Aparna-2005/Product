import React from 'react'
import Navbar from './Navbar'
import HeroBg from '../Components/HeroBg.js/HeroBg'
import ContactDet from '../Components/ContactDetails.js/ContactDet'
import Footer from './Footer'



export default function Contact() {
  return (
    <div>
         <Navbar/>
      <HeroBg head="Contact" text="Contact us for further details."/>
      <ContactDet/>
      <Footer/>
    </div>
  )
}
