import React, { useEffect, useState } from 'react';
import "./CampaignStyles.css"

export default function Campaign() {
    const [campaignData, setcampaignData] = useState({
        title: '',
        description: '',
        amt: '',
        deadline: '',
        category: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8001/Campaign/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(campaignData)
        })
            .then((response) => {
                if (response.ok) {
                    console.log('details is added');
                    alert('Details added successfully');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target; // Destructuring the event target correctly
        setcampaignData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='container1'>
<div className='cam_container'>
            <form onSubmit={handleSubmit}>
                <div className='input_field'>
                    <label>Enter Title for campaign : </label>
                    <input type="text" placeholder="Enter Title" value={campaignData.title} name="title" onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label >Enter description : </label>
                    <textarea placeholder="Enter description" value={campaignData.description} name="description" onChange={handleChange}></textarea>
                </div>
                <div className='input_field'>
                    <label>Enter total amount to be required : </label>
                    <input type="number" placeholder="Enter amount" value={campaignData.amt} name="amt" onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label>Enter Deadline for the project : </label>
                    <input type="date" placeholder="Enter deadline" value={campaignData.deadline} name="deadline" onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label>Enter category : </label>
                    <input type="text" placeholder="Enter category" value={campaignData.category} name="category" onChange={handleChange} />
                </div>
                <div className='submit_btn'>
                    <button className='btn11'>Submit</button>
                </div>

            </form>
        </div>
        </div>
        
    )
}

