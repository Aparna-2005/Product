import React from 'react'
import Navbar from './Navbar'
import ProjHero from '../Components/Project/ProjHero'
import ProCon from '../Components/Project/ProCon'
import Projpg from '../Components/Project/Prjpg'
import Footer from './Footer'


export default function Projects() {
  return (
    <div>
      <Navbar/>
       <ProjHero/>
      <Projpg/>
      <Footer/>
    </div>
  )
}
