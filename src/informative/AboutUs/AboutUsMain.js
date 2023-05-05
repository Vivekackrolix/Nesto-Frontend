import React, { useEffect } from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import './AboutUsMain.css'
import Aos from 'aos'
import AboutUsDesc from './AboutUsDesc/AboutUsDesc'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import HowWorkSelectBar from './HowWork/HowWorkSelectBar/HowWorkSelectBar'
import { Zoom } from 'react-reveal'

const AboutUsMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <InformativeNavbar />
            <div className="about-us-banner">
                <Zoom duration={1300} delay={100}>
                    <span className='about-us-banner-heading'>About Us</span>
                </Zoom>
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