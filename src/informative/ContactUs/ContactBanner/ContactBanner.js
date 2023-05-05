import React from 'react'
import './ContactBanner.css'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import { Fade } from 'react-reveal';

const ContactBanner = () => {
    return (
        <div className='contact-us' style={{ overflowX: 'hidden' }}>
            <div className=''>
                <div className='row contact-us_row'>
                    <Fade left duration={1000} distance="100px" delay={100}>
                        <div className='col-lg-5 contact-us_col'>
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
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner