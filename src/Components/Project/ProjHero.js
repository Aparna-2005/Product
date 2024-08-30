import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjHero() {
  return (
    <div>
         <div className='mask'>
        <div class="content">
          <h6 style={{ color: 'white', fontSize: "25px" }}>Buying through online is easy now!</h6>
          <h1 class="head_text" style={{ color: 'white' }}>Get update with the  market</h1>
          <div>
            <Link to="/Campaign_fetch" class="btn1">Start buying</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
