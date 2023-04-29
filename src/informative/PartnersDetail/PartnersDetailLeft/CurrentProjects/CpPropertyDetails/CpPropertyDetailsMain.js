import React from 'react'
import InformativeNavbar from '../../../../Navbar/Navbar'
import InformativeFooter from '../../../../InformativeFooter/InformativeFooter'
import CpPropertyDetailsSearch from './CpPropertyDetailsSearch/CpPropertyDetailsSearch'
import CpPropertyDetailsBanner from './CpPropertyDetailsBanner/CpPropertyDetailsBanner'
import CpPropertyDetailsApartment from './CpPropertyDetailsBanner/CpPropertyDetailsApartment/CpPropertyDetailsApartment';
import CpPropertyDetailsPricing from './CpPropertyDetailsBanner/CpPropertyDetailsPricing/CpPropertyDetailsPricing'
import CpPropertyDetailsProjectAmenities from './CpPropertyDetailsBanner/CpPropertyDetailsProjectAmenities/CpPropertyDetailsProjectAmenities'
import CpPropertyDetailsLocationAdvantage from './CpPropertyDetailsBanner/CpPropertyDetailsLocationAdvantage/CpPropertyDetailsLocationAdvantage'
import CpPropertyDetailsBrokerage from './CpPropertyDetailsBanner/CpPropertyDetailsBrokerage/CpPropertyDetailsBrokerage'
import CpPropertyDetailsTC from './CpPropertyDetailsBanner/CpPropertyDetailsTC/CpPropertyDetailsTC'
import CpPropertyDetailsBrochure from './CpPropertyDetailsBanner/CpPropertyDetailsBrochure/CpPropertyDetailsBrochure'
import CpPropertyDetailsAboutBuilder from './CpPropertyDetailsBanner/CpPropertyDetailsAboutBuilder/CpPropertyDetailsAboutBuilder'

const CpPropertyDetailsMain = () => {
  return (
    <>
      <InformativeNavbar />
      {/* <CpPropertyDetailsSearch /> */}
      <CpPropertyDetailsBanner />
      <CpPropertyDetailsApartment />
      {/* <CpPropertyDetailsPricing /> */}
      <CpPropertyDetailsProjectAmenities />
      <CpPropertyDetailsLocationAdvantage />
      <CpPropertyDetailsBrokerage />
      <CpPropertyDetailsAboutBuilder />
      <CpPropertyDetailsBrochure />
      <CpPropertyDetailsTC />
      <InformativeFooter />
    </>
  )
}

export default CpPropertyDetailsMain