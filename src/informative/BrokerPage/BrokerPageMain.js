import React, { useEffect } from 'react'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import InformativeNavbar from '../Navbar/Navbar'
import BrokerBanner from './BrokerBanner/BrokerBanner'
import ChooseUs from '../HomePage/chooseus/Chooseus';
import Testimonials from '../HomePage/testimonials/Testimonials'
import Aos from 'aos'

const BuilderPageMain = () => {
  const testData = [
    {
      personName: 'Jacob William',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/informative/builder1.png'
    },
    {
      personName: 'Jacob William2',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/informative/builder1.png'
    },
    {
      personName: 'Jacob William3',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/informative/builder1.png'
    },
  ]

  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <InformativeNavbar />
      <BrokerBanner />
      <ChooseUs />
      <Testimonials testData={testData} />
      <InformativeFooter />
    </>
  )
}

export default BuilderPageMain