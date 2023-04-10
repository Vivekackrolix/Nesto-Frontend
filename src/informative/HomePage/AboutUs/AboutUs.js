import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='home-page-about'>
            <div className='container' style={{ overflow: 'hidden' }}>
                <div className='row align-items-center'>
                    <div className='col-lg-6' data-aos='fade-right'>
                        <img className='about-us_box1-img' src='/assets/informative/device.svg' alt='about' />
                        <div className='about-us_box1_btn-div'>
                            <div className='d-flex gap-4'>
                                <div>
                                    <Link to='/' className='about-us_box1_btn d-flex align-items-center'>
                                        <div>
                                            <img src='/assets/google-play.png' className='second-card__icon' alt='google-play' />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='about-us_box1_icon-span-1'>GET IT ON</span>
                                            <span className='about-us_box1_icon-span-2'>Google Play</span>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/' className='about-us_box1_btn d-flex align-items-center'>
                                        <div>
                                            <img src='/assets/apple.png' className='second-card__icon' alt='apple' />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='about-us_box1_icon-span-1'>Download on the</span>
                                            <span className='about-us_box1_icon-span-2'>App Store</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className='text-center'>
                                    <img src='/assets/informative/scan.png' alt='scan' />
                                    <span className='about-us_box1_icon-span-3'>Scan Me</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6' data-aos='fade-left'>
                        <div className='about-us_box2'>
                            <span className='sections-heading'>ABOUT US</span>
                            <span className='about-us_box-span2 sections-sub-heading'>Inspiring Brokers & Builders With Innovative Empowerment</span>
                            <span className='about-us_box-span3'>NestoHub is a platform that makes it simple for brokers and builders
                                to connect, creating a vast network of possibilities for both. With the help of NestoHub, a
                                broker can benefit from an exclusive inventory from well-known builders, and the builders
                                can take advantage of quicker sales with greater transparency.</span>
                            <span className='about-us_box-span4'>We significantly provide automation, trust, and
                                digitalization for brokers and builders across PAN India.</span>
                        </div>
                        <div className=''>
                            <Link to='/about-us' className='about-us-read-more'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs