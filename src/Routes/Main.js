import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import "./Navbar_Styles.css"
import Contact from './Contact'
import Footer from './Footer'
import Campaign from '../Components/Campaign/Campaign'
import Campaign_fetch from '../Components/Campaign/Campaign_fetch'
import Campaign_pro from '../Components/Projects2/Campaign_pro'
import Home2 from './Home2'


export default function Main() {

  return (
    <div>
         <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Project" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Footer" element={<Footer/>}/>

            <Route path='/Campaign' element={<Campaign/>} />
            <Route path="/Campaign_fetch" element={<Campaign_fetch/>} />
            <Route path="Campaign_pro" element={<Campaign_pro/>}  />
            {/* <Route path="Home2" element={<Home2/>}  /> */}
        </Routes>
    </div>
  )
}
