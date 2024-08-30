import React from 'react'
import "./ContactStyles.css"

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactDet() {
    return (
        <div className='cont'>
            <div className="contact-container">
                <div className="contact-header">
                    <div className="text">Contact</div>
                </div>
                <div className="contact-inputs">
                    <div className=" contact-input">
                        <FontAwesomeIcon className='icon' icon={faPerson}></FontAwesomeIcon>
                        <input type="text" id="name" placeholder="name" required />
                    </div>
                    <div className="contact-input">
                        <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                        <input type="email" id="email" placeholder="email" required />
                    </div>
                    <div className="contact-input">
                        <FontAwesomeIcon className='icon' icon={faLock}></FontAwesomeIcon>
                        <input type="text" id="pswd" placeholder="feedback" required />
                    </div>
                </div>
                <div className="contact-submit_container">
                    <div className="contact-submit">Submit</div>
                </div>
            </div>
        </div>
    )
}
