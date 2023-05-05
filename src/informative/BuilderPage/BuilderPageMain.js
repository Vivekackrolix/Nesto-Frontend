import React, { useEffect } from 'react'
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
  const testData = [
    {
      personName: 'Jacob William',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/profile-page/profile-mg-big.png'
    },
    {
      personName: 'Jacob William2',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/profile-page/profile-mg-big.png'
    },
    {
      personName: 'Jacob William3',
      desc: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte',
      role: 'CEO of Google',
      personImg: '/assets/profile-page/profile-mg-big.png'
    },
  ]

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
      <Testimonials testData={testData} title='Builders On NestoHub' subtitle='Our Achievements In Your Words' />
      <InformativeFooter />
    </>
  )
}

export default BuilderPageMain