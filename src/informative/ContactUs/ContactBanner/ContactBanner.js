import React from 'react'
import './ContactBanner.css'
import { Link } from 'react-router-dom'

const ContactBanner = () => {
    return (
        <div className='contact-us' style={{ overflowX: 'hidden' }}>
            <div className='container'>
                <div className='row contact-us_row'>
                    <div className='col-lg-6 contact-us_col' data-aos='fade-right'>
                        <span className='contact-us_span1'>We're always Eager to Hear from you!</span>
                        <hr className='contact-us_hr' />
                        <span className='contact-us_span2'>Borem ipsum dolor sit amet conse ctetur adipisicing
                            elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</span>
                        <Link to='/' className='contact-us_link'>
                            <span className='contact-us_span3'>Contact Us</span>
                        </Link>
                    </div>
                    <div className='col-lg-6 contact-us_col' data-aos='fade-left'>
                        <img src='/assets/informative/ContactUsImg1.png' className='contact-us_img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner