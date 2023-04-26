import React, { useEffect } from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './AboutUsMain.css'
import Aos from 'aos'
import AboutUsDesc from './AboutUsDesc/AboutUsDesc'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import HowWorkSelectBar from './HowWork/HowWorkSelectBar/HowWorkSelectBar'

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
            {/* How Work Select Bar */}
            <HowWorkSelectBar />
            {/* Footer */}
            <InformativeFooter />
        </>
    )
}

export default AboutUsMain