import React from 'react'
import InformativeNavbar from '../../Navbar/Navbar'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'
import BrokerPDbanner from './BrokerPDbanner/BrokerPDbanner'
import BrokerPDapartment from './BrokerPDapartment/BrokerPDapartment';
import BrokerPDamenities from './BrokerPDamenities/BrokerPDamenities'
import BrokerPDlocationAdvantage from './BrokerPDlocationAdvantage/BrokerPDlocationAdvantage'
import BrokerPDbrokerage from './BrokerPDbrokerage/BrokerPDbrokerage'
import BrokerPDtC from './BrokerPDtC/BrokerPDtC'
import BrokerPDbrochure from './BrokerPDbrochure/BrokerPDbrochure'
import BrokerPDabout from './BrokerPDabout/BrokerPDabout'
import BrokerPDPricing from './BrokerPDPricing/BrokerPDPricing';

const BrokerPD = () => {
  return (
    <>
      <InformativeNavbar />
      <BrokerPDbanner />
      <BrokerPDapartment />
      <BrokerPDPricing />
      <BrokerPDamenities />
      <BrokerPDlocationAdvantage />
      <BrokerPDbrokerage />
      <BrokerPDabout />
      <BrokerPDbrochure />
      <BrokerPDtC />
      <InformativeFooter />
    </>
  )
}

export default BrokerPD