import React from 'react'
import { Link } from 'react-router-dom'
import './InformativeFooter.css'

const InformativeFooter = () => {
    return (
        <>
            <div className='informative-footer' style={{ overflowX: 'hidden' }}>
                <div className='informative-footer-div' >
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3 footer-col-1'>
                                <Link to='/'>
                                    <img src='/assets/informative/informative-footer-logo.svg' alt='footer-logo' className='informative-footer_logo' />
                                </Link>

                                <span className='footer-col-1-span'>We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.</span>
                                <div className='informative-footer-icons-div'>
                                    <Link to='/'><img src='/assets/informative/footerSocialIcon4.svg' alt='social' className='footer-col-1-icons' /></Link>
                                    <Link to='/'><img src='/assets/informative/footerSocialIcon3.svg' alt='social' className='footer-col-1-icons' /></Link>
                                    <Link to='/'><img src='/assets/informative/footerSocialIcon2.svg' alt='social' className='footer-col-1-icons' /></Link>
                                    <Link to='/'><img src='/assets/informative/footerSocialIcon1.svg' alt='social' className='footer-col-1-icons' /></Link>
                                </div>
                            </div>
                            <div className='col-lg-3 footer-col-2'>
                                <span className='footer-col-2-span'>Company Info</span>
                                <Link to='/about-us' className='informative-footer-link'>About Us</Link>
                                <Link to='/partners/details' className='informative-footer-link'>Partner Details</Link>
                                <Link to='/faq' className='informative-footer-link'>FAQ</Link>
                                <Link to='/blog-list' className='informative-footer-link'>Blog</Link>
                            </div>
                            <div className='col-lg-3 footer-col-3'>
                                <span className='footer-col-2-span'>Our Policies</span>
                                <Link to='/terms-condition' className='informative-footer-link'>Terms & Condition</Link>
                                <Link to='/privacy-policy' className='informative-footer-link'>Privacy Policy</Link>
                                <Link to='/contact-us' className='informative-footer-link'>Contact Us</Link>
                            </div>
                            <div className='col-lg-3 footer-col-1 footer-col-4'>
                                <span className='footer-col-2-span'>Get In Touch With Us</span>
                                <span className='footer-col-1-span'>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed...</span>
                                <div className='footer-mail-div gap-3'>
                                    <div className=''>
                                        <img src='/assets/informative/ContactMail.svg' alt='footer-mail' className='footer-mail-img' />
                                    </div>
                                    <div>
                                        <Link to='/'><span className='footer-mail-span'>info@nestohub.com</span></Link>
                                        <Link to='/'><span className='footer-mail-span'>jobs@nestohub.com</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='informative-footer_rights'>
                <p className='informative-footer_rights_p'>© 2023 Nesto Hub | All Rights Reserved | Design & Develop by Bizzeonline </p>
            </div>
        </>
    )
}

export default InformativeFooter