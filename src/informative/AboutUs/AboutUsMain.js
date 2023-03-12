import React, { useEffect } from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './AboutUsMain.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import HowWork from './HowWork/HowWork'
import Aos from 'aos'

const AboutUsMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <InformativeNavbar />
            <div className="about-us-banner">
                <span className='about-us-banner-heading' data-aos='zoom-in'>About Us</span>
            </div>
            <div className='about-us_box1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6' data-aos='fade-right'>
                            <img className='about-us_box1-img' src='/assets/informative/device.png' />
                            <div className='about-us_box1_btn-div'>
                                <div className='d-flex gap-4'>
                                    <div>
                                        <Link to='/' className='about-us_box1_btn d-flex align-items-center'>
                                            <div>
                                                <img src='/assets/google-play.png' className='second-card__icon' />
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
                                                <img src='/assets/apple.png' className='second-card__icon' />
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <span className='about-us_box1_icon-span-1'>Download on the</span>
                                                <span className='about-us_box1_icon-span-2'>App Store</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='text-center'>
                                        <img src='/assets/informative/scan.png' />
                                        <span className='about-us_box1_icon-span-3'>Scan Me</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6' data-aos='fade-left'>
                            <div className='about-us_box2'>
                                <span className='about-us_box-span1'>ABOUT US</span>
                                <span className='about-us_box-span2'>Dream Living Spaces Setting New Build</span>
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
            {/* How Nesto Work */}
            <HowWork />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default AboutUsMain