import React from 'react'
import "./HeroBgStyles.css"
import { Link } from 'react-router-dom'

export default function HeroBg(props) {
  return (
      <div>
        <div className='mask'>
          <div class="content">
            <h1 class="head_text" style={{ color: 'white' }}>{props.head}</h1>
            <p >{props.text}</p>
          </div>
        </div>
      </div>
  )
}
