import React from 'react'
import InformativeNavbar from '../../Navbar/Navbar'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'
import BuilderPDbanner from './BuilderPDbanner/BuilderPDbanner'
import BuilderPDapartment from './BuilderPDapartment/BuilderPDapartment';
import BuilderPDamenities from './BuilderPDamenities/BuilderPDamenities'
import BuilderPDlocationAdvantage from './BuilderPDlocationAdvantage/BuilderPDlocationAdvantage'
import BuilderPDbrokerage from './BuilderPDbrokerage/BuilderPDbrokerage'
import BuilderPDtC from './BuilderPDtC/BuilderPDtC'
import BuilderPDbrochure from './BuilderPDbrochure/BuilderPDbrochure'
import BuilderPDabout from './BuilderPDabout/BuilderPDabout'

const BuilderPD = () => {
  return (
    <>
      <InformativeNavbar />
      <BuilderPDbanner />
      <BuilderPDapartment />
      <BuilderPDamenities />
      <BuilderPDlocationAdvantage />
      <BuilderPDbrokerage />
      <BuilderPDabout />
      <BuilderPDbrochure />
      <BuilderPDtC />
      <InformativeFooter />
    </>
  )
}

export default BuilderPD