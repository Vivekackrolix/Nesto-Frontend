import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import BannerSlider from '../BannerSlider/BannerSlider'
import TextSlider from '../TextSlider/TextSlider'
import MobileSlider from '../MobileSlider/MobileSlider'

const Banner = () => {
    return (
        <>
            <div className='banner' style={{ overflowX: 'hidden' }}>
                <div className='banner-container-div'>
                    <div className='row'>
                        <div className='col-lg-5 banner-col-5' data-aos='fade-right'>
                            <div>
                                <h4 className='banner-h4'>
                                    Professional Network For Real Estate Brokers
                                </h4>
                                <hr className='banner-hr' />
                                <p className='banner-p'>Broker Network app is a suite of services specifically designed for Indian real
                                    estate brokers and developers to maximize their business.</p>
                                <Link to='/contact-us' className='banner-link'>
                                    Join Us
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-7 desktop-col' data-aos='fade-left'>
                            <BannerSlider />
                        </div>
                        {/* <div className='col-lg-7 mobile-col'>
                            <MobileSlider />
                        </div> */}
                    </div>
                </div>
                <TextSlider />
            </div>
        </>
    )
}

export default Banner