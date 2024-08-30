import React from 'react'


import "./AbtconStyles.css"
import Campaign_fetch from '../Campaign/Campaign_fetch'

export default function Abtcon() {
    return (
        <div>
            <div className='About-content'>
                <div className='About-header'>
                    <div className='About-text'>
                        <h2>Available Products</h2>
                    </div>
                    <div className='row gap-3'>
                        <div className='col-3'>
                            <div className='card '>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw8qWrbxaLRHKaAMo14PcNxuqeneK9Ka22Q&s" class="img-fluid rounded img" alt="..." />
                                </div>
                                <div className='card-body'>
                                    <p class="card-text ms-3">Vegetables</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='card '>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaB4CfdpehM4mzx6avwe6dBvgAl1QnuQkxA&s" class="img-fluid rounded-start img " alt="..." />
                                <div className='card-body'>
                                    <p class="card-text ms-3">Fruits</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className='card'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBwSpmlzU4v6gdoU9A1DyMyaWdrrXDgeDvA&s" class="img-fluid rounded img" alt="..." />
                                <div className='card-body'>
                                    <p class="card-text ms-3 ">Nuts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Campaign_fetch></Campaign_fetch>
        </div>
    )
}
