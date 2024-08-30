import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArchway, faArrowAltCircleDown, faPaperPlane, faPaperclip, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../Images/Logo.png"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import "./FooterStyles.css"

export default function Footer() {

  return (
    <div className='Footer-container'>
      <div class="row">
        <div class="col-xl-3 col-3">
          <img src={logo} style={{ width: "60px", height: "60px" }} />
          <div className='d-flex flex-column mt-3'>
            <div className='d-flex flex-row p-2'>
              <FontAwesomeIcon icon={faEnvelope} className='ms-2 ' style={{ height: "20px", width: "20px", color: "white" }}></FontAwesomeIcon>
              <p className='ms-2 footer-p'>crowdfund@gmail.com</p>
            </div>
            <div className='d-flex flex-row p-2'>
              <FontAwesomeIcon icon={faPhone} className='ms-2' style={{ height: "20px", width: "20px", color: "white" }}></FontAwesomeIcon>
              <p className='ms-2 footer-p'>9087654321</p>
            </div>
          </div>

        </div>
        <div class="col-xl-3 col-3">
          <h1 className='footer-h1'>Explore</h1>
          <p className='footer-p'>About</p>
          <p className='footer-p'>Services</p>
          <p className='footer-p'>Products</p>
          <p className='footer-p'>Contact</p>
        </div>
        <div class="col-xl-3 col-3">
          <h1 className='footer-h1'>Fundraising</h1>
          <p className='footer-p'>Education</p>
          <p className='footer-p'>Technology</p>
          <p className='footer-p'>Games</p>
          <p className='footer-p'>Fashion</p>
        </div>
        <div class="col-xl-3">
          <h1 className='footer-h1'>News letter</h1>
          <p className='footer-p'>Subscribe newsletter to get updates.</p>
          <div class="d-flex p-2 ">
            <input style={{ width: "200px" }} type="text" class="p-2" placeholder="Enter your email"></input>
            <button style={{ width: "50px" }} ><img src="https://cdn-icons-png.flaticon.com/512/60/60525.png" style={{ width: "30px", height: "30px" }} /></button>
          </div>
          <p class="p-2"><FontAwesomeIcon icon={faFacebook} class="mt-1" style={{ height: "30px", width: "40px", color: "white" }}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} class="mt-2" style={{ height: "30px", width: "40px", color: "white" }}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin} class="mt-1" style={{ height: "30px", width: "40px", color: "white" }}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faYoutube} class="mt-1" style={{ height: "30px", width: "40px", color: "white" }}></FontAwesomeIcon></p>

        </div>
        <div class="row text-center">
          <hr style={{ color: "#bfbfbf" }} />
          <p style={{ color: "#bfbfbf" }} className='footer-h1'>Copyright ©2024 All rights reserved | This template is made with 	&#10084; by <span style={{ color: "green" }}>Crowdfunding</span></p>
        </div>
      </div>
    </div>
  )
}
