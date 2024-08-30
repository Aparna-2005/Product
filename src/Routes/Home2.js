import React from 'react'
import Navbar from './Navbar'
import About from './About'
import { Link } from 'react-router-dom'
import Abtcon from '../Components/AboutContent/Abtcon'
import Footer from './Footer'
import Projpg from '../Components/Project/Prjpg'
import Campaign_pro from '../Components/Projects2/Campaign_pro'


export default function Home2() {
  return (
    <>
      <div className='mask'>
        <Navbar />
        <div class="content">
          <h6 style={{ color: 'white', fontSize: "25px" }}>Now grocery at your home</h6>
          <h1 class="head_text" style={{ color: 'white' }}>Start to buy in online</h1>
          <div>
            <Link to="/Project" class="btn1">BUY</Link>
          </div>
        </div>
      </div>
     <Abtcon/>
     <Projpg/>
     <Campaign_pro/>
     <Footer/>
    </>

  )
}
