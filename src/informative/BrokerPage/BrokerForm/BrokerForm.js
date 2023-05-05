import React from 'react'
import './BrokerForm.css'
import { Fade } from 'react-reveal'

const BrokerForm = () => {
    return (
        <Fade bottom duration={1000} distance="100px" delay={100}>
            <div className='col-lg-4 broker-banner-col-3 align-items-end'>
                <div className='broker-banner-col-3-div'>
                    <div className='broker-banner-col-3_title_div'>
                        <span className='broker-banner-col-3_title'>Best Platform For Broker</span>
                        <span className='broker-banner-col-3_sub_title'>Register Now For Free!</span>
                    </div>
                    <form action='#' className='broker-banner-col-3_form'>
                        <input type='text' placeholder='Name*' className='broker-banner-col-3_input' required />
                        <input type='tel' placeholder='Phone Number*' className='broker-banner-col-3_input' required />
                        <input type='tel' placeholder='Referal Code' className='broker-banner-col-3_input' required />
                        <button type='submit' className='broker-banner-col-3_btn'>Submit</button>
                    </form>
                </div>
            </div>
        </Fade>
    )
}

export default BrokerForm