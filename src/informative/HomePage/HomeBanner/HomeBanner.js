import React, { useEffect } from 'react';
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
import HomeVideo from '../HomeVideo/HomeVideo'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'

const HomeBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <div>
        <InformativeNavbar />
        <Banner />
        <AboutUs />
        <Stats />
        {/* <Residency /> */}
        <ChooseUs />
        <HomeVideo />
        <HowWork />
        <OurPartner />
        <GetStarted />
        <News />
        <Testimonials />
        <InformativeFooter />
      </div>
    </>
  );
};

export default HomeBanner;
