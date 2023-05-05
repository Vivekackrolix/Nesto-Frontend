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
      personName: 'Sagar Pant',
      desc: 'With NestoHub on my side, I don’t need to worry about reaching out to big names in the market. They have everyone I want with a higher brokerage, which helps me earn and sell better.',
      role: '',
      personImg: '/assets/informative/builder1.png'
    },
    {
      personName: 'Suhail Siddiqui',
      desc: 'I was a new broker in the market, and NestoHub was the perfect platform for me to start selling properties with higher earnings and the finest properties. They advised me on gaining profits and quick sales.',
      role: '',
      personImg: '/assets/informative/builder1.png'
    },
    {
      personName: 'Suresh Rastogi',
      desc: 'I highly recommend NestoHub to all brokers, as it has made finding properties with higher selling chances and outstanding brokerage simple. It was superb working with the professional Nesto advisors.',
      role: '',
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
      <Testimonials testData={testData} title='Brokers On NestoHub' subtitle='Our Achievements In Your Words' />
      <InformativeFooter />
    </>
  )
}

export default BuilderPageMain