import React from 'react';
import InformativeNavbar from '../../Navbar/Navbar';
import GetStarted from '../getStarted/GetStarted';
import News from '../news/News';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../chooseus/Chooseus';
import Testimonials from '../testimonials/Testimonials';
import Stats from '../stats/Stats';
import Banner from './Banner/Banner';
import OurPartner from '../OurPartner/OurPartner';
import HowWork from '../../AboutUs/HowWork/HowWork';
import HomeVideo from '../HomeVideo/HomeVideo'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'

const HomeBanner = () => {
  return (
    <>
      <div>
        <InformativeNavbar />
        <Banner />
        <AboutUs />
        <Stats />
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
