import React, { useEffect } from 'react'
import InformativeNavbar from '../../Navbar/Navbar';
import Residency from '../residency/Residency';
import GetStarted from '../getStarted/GetStarted';
import News from '../news/News';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../chooseus/Chooseus';
import Testimonials from '../testimonials/Testimonials';
import Stats from '../stats/Stats';
import Aos from 'aos';
import Banner from './Banner/Banner';

const HomeBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div style={{overflowX: 'hidden'}}>
                <InformativeNavbar />
                {/* Banner */}
                {/* <Banner /> */}
                {/* About Us */}
                <AboutUs />
                {/* Stats */}
                <Stats />
                {/* Residency */}
                <Residency />
                {/* ChooseUs */}
                <ChooseUs />
                {/* GetStarted */}
                {/* <GetStarted /> */}
                {/* News */}
                {/* <News /> */}
                {/* Testimonials */}
                {/* <Testimonials /> */}
            </div>
        </>
    )
}

export default HomeBanner