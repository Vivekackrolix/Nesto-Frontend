import React from 'react'
import InformativeNavbar from '../../../../Navbar/Navbar'
import InformativeFooter from '../../../../InformativeFooter/InformativeFooter'
import CpPropertyDetailsSearch from './CpPropertyDetailsSearch/CpPropertyDetailsSearch'
import CpPropertyDetailsBanner from './CpPropertyDetailsBanner/CpPropertyDetailsBanner'
import CpPropertyDetailsApartment from './CpPropertyDetailsBanner/CpPropertyDetailsApartment/CpPropertyDetailsApartment';

const CpPropertyDetailsMain = () => {
  return (
    <>
      <InformativeNavbar />
      <CpPropertyDetailsSearch />
      <CpPropertyDetailsBanner />
      <CpPropertyDetailsApartment />
      <InformativeFooter />
    </>
  )
}

export default CpPropertyDetailsMain