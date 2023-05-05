import React from 'react'
import InformativeNavbar from '../../Navbar/Navbar'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'
import AgentPDbanner from './AgentPDbanner/AgentPDbanner'
import AgentPDapartment from './AgentPDapartment/AgentPDapartment';
import AgentPDamenities from './AgentPDamenities/AgentPDamenities'
import AgentPDlocationAdvantage from './AgentPDlocationAdvantage/AgentPDlocationAdvantage'
import AgentPDtC from './AgentPDtC/AgentPDtC'
import AgentPDbrochure from './AgentPDbrochure/AgentPDbrochure'
import AgentPDabout from './AgentPDabout/AgentPDabout'
import AgentPDPricing from './AgentPDPricing/AgentPDPricing';

const AgentPD = () => {
  return (
    <>
      <InformativeNavbar />
      <AgentPDbanner />
      <AgentPDapartment />
      <AgentPDamenities />
      <AgentPDlocationAdvantage />
      <AgentPDPricing />
      <AgentPDabout />
      <AgentPDbrochure />
      <AgentPDtC />
      <InformativeFooter />
    </>
  )
}

export default AgentPD