import React from 'react'
import './ContactBanner.css'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'

const ContactBanner = () => {
    return (
        <div className='contact-us' style={{ overflowX: 'hidden' }}>
            <div className=''>
                <div className='row contact-us_row'>
                    <div className='col-lg-5 contact-us_col' data-aos='fade-right'>
                        <img src='/assets/informative/ContactUsImg1.png' alt='contact' className='contact-us_img' />
                        <div className='contact-us_text-div'>
                            <span className='contact-us_span1'>Contact Us</span>
                            <span className='contact-us_span2'>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</span>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                            <div>
                                <img src='/assets/informative/ContactMail.svg' alt='mail' />
                            </div>
                            <div>
                                <Link to='/'><span className='contact-us_span3'>info@webmail.com</span></Link>
                                <Link to='/'><span className='contact-us_span3'>jobs@webexample.com</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner