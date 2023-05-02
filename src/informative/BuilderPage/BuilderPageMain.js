import React, {useEffect} from 'react'
import HowWork from '../AboutUs/HowWork/HowWork'
import Residency from '../HomePage/residency/Residency'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import InformativeNavbar from '../Navbar/Navbar'
import BuilderBanner from './BuilderBanner/BuilderBanner'
import ChooseUs from './../HomePage/chooseus/Chooseus';
import Testimonials from '../HomePage/testimonials/Testimonials'
import Aos from 'aos'
import HowWorkBuilder from './../AboutUs/HowWork/HowWorkBuilder/HowWorkBuilder';

const BuilderPageMain = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <InformativeNavbar />
      <BuilderBanner />
      {/* <Residency/> */}
      <HowWorkBuilder />
      <ChooseUs />
      <Testimonials />
      <InformativeFooter />
    </>
  )
}

export default BuilderPageMain