import React, {useEffect} from 'react'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import InformativeNavbar from '../Navbar/Navbar'
import BrokerBanner from './BrokerBanner/BrokerBanner'
import ChooseUs from '../HomePage/chooseus/Chooseus';
import Testimonials from '../HomePage/testimonials/Testimonials'
import Aos from 'aos'

const BuilderPageMain = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <InformativeNavbar />
      <BrokerBanner />
      <ChooseUs />
      <Testimonials />
      <InformativeFooter />
    </>
  )
}

export default BuilderPageMain