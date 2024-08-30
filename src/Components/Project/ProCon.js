import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectStyles.css'

export default function ProCon(props) {

    return (
        <>
            <div className='Project-content'>
                <div className='Project-content2'>
                    <div className='project-card'>
                        <img src={props.img} />
                        <h4 class="text-dark project-title">{props.title}</h4>
                        <p class="pro-details text-dark" >{props.text}</p>
                        <div class="button">
                            <Link to="/Donate" target='_blank' className='btn2 text-center'>{props.para1}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
