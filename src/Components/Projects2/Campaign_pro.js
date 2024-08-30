import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Pro2Styles.css"

function Campaign_pro() {

    const [Camp_details, setCampdetails] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8001/Campaign/')
            .then((response) => {
                setCampdetails(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    })


    return (
        <div className='Project-container'>
            <div className='Project-contant'>
                <div className='project-card'>
                    {Camp_details.map((e) => ((
                        <div>
                            <h4 class="text-dark project-title">{e.title}</h4>
                            <p class="text-dark project-title">{e.description}</p>
                            <h4 class="text-dark project-title">{e.deadline}</h4>
                            <div class="button">
                                <Link to="/Donate" target='_blank' className='btn2 text-center'>Donate</Link>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Campaign_pro
