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
import OurPartner from '../OurPartner/OurPartner';
import HowWork from '../../AboutUs/HowWork/HowWork';
import Footer from '../../../components/footer/Footer'
import HomeVideo from '../HomeVideo/HomeVideo';


const HomeBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div style={{ overflowX: 'hidden' }}>
                <InformativeNavbar />
                <Banner />
                <AboutUs />
                <Stats />
                <Residency />
                <ChooseUs />
                <HomeVideo/>
                <HowWork />
                <OurPartner />
                <GetStarted />
                <News />
                <Testimonials />
                <Footer />
            </div>
        </>
    )
}

export default HomeBanner