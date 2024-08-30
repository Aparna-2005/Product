import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Procon from './ProCon'
import projectData from './projectData'
import Campaign_fetch from '../Campaign/Campaign_fetch'


export default function Projpg() {


  return (
    <div className='pro-con'>
      <div className='Project-text '>
        Product

      </div>
      <div className='work-container text-dark'>
        <div className='project-container '>
          {projectData.map((val, ind) => {
            return (
              <Procon
                key={ind}
                img={val.img}
                title={val.title}
                text={val.text}
                para1={val.para1}
                deadline={val.deadline}
              />
            )
          })}
        </div>
      </div>

    </div>
  )
}
