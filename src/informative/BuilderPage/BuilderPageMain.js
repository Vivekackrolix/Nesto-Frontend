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
      personName: 'Raghav Bindra',
      desc: 'NestoHub is a unique platform for builders and brokers. It makes property listing and selling super easy and convenient. I highly recommend NestoHub to my fellow builders.',
      role: '',
      personImg: '/assets/profile-page/profile-mg-big.png'
    },
    {
      personName: 'Satakshi Sinha',
      desc: 'Their team was patient and professional while teaching me how to utilize the platform for my property listing. The best part is that I no longer have to handle the stress of managing brokers.',
      role: '',
      personImg: '/assets/profile-page/profile-mg-big.png'
    },
    {
      personName: 'Jamshed Khan',
      desc: 'I really like working with NestoHub, as they are skilled professionals and reliable for selling my properties. This digital platform is a big yes for every builder and broker from my side.',
      role: '',
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