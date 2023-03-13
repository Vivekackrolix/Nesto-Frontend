import React, { useEffect } from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './AboutUsMain.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import HowWork from './HowWork/HowWork'
import Aos from 'aos'
import AboutUsDesc from './AboutUsDesc/AboutUsDesc'

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
            <AboutUsDesc /> 
            {/* How Nesto Work */}
            <HowWork />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default AboutUsMain