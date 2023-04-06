import React from 'react'
import { Link } from 'react-router-dom'

const AboutUsDesc = () => {
    return (
        <div className='about-us_box1' style={{overflowX: 'hidden'}}>
            <div className='container'>
                <div className='row'>
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
                            <span className='sections-sub-heading'>Dream Living Spaces Setting New Build</span>
                            <span className='about-us_box-span3'>Over 39,000 people work for us in more than 70 countries all
                                over the This breadth of global coverage, combined with
                                specialist services. Over 39,000 people work for us in more
                                than 70 countries all over the This breadth of global
                                coverage, combined with specialist services.Over 39,000 people
                                work for us in more than 70 countries all over the</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsDesc