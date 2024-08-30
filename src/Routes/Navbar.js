import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


import "./Navbar_Styles.css"
import Logo from "../Images/Logo.png"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [status, setStatus] = useState(false);


  return (
    <div>
      <div class="main-header ">
        <Link style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}><img src={Logo} style={{ width: "70px", height: "70px" }} /></Link>
        <ul class={click ? "nav-menu active " : "nav-menu"}>
          <li className='mt-3'><Link to="/" class="link p-3">Home</Link></li>
          <li className='mt-3'><Link to="/About" class="link p-3">About</Link></li>
          <li className='mt-3'><Link to="/Project" class="link  p-3">Project</Link></li>
          <li className='mt-3'><Link to="/Contact" class="link  p-3">Contact</Link></li>

        </ul>

       
        <div class="bars" onClick={handleClick}>
          {click ? (<FontAwesomeIcon icon={faXmark} style={{ width: "100px", height: "30px", color: "white" }} />) : (<FontAwesomeIcon icon={faBars} style={{ width: "100px", height: "30px", color: "white" }} />)}
        </div>
      </div>
    </div>
  )
}

