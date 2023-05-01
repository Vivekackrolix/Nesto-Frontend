import React from 'react'
import './BrokerForm.css'

const BrokerForm = () => {
    return (
        <div className='col-lg-4 broker-banner-col-3 align-items-end' data-aos='fade-up'>
            <div className='broker-banner-col-3-div'>
                <div className='broker-banner-col-3_title_div'>
                    <span className='broker-banner-col-3_title'>Hello! List your Property / Requirement</span>
                </div>
                <form action='#' className='broker-banner-col-3_form'>
                    <input type='text' placeholder='Name*' className='broker-banner-col-3_input' required />
                    <input type='tel' placeholder='Phone Number*' className='broker-banner-col-3_input' required />
                    <input type='tel' placeholder='Referal Code' className='broker-banner-col-3_input' required />
                    <button type='submit' className='broker-banner-col-3_btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BrokerForm