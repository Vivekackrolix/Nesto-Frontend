import React from 'react'
import InformativeNavbar from '../../../../Navbar/Navbar'
import InformativeFooter from '../../../../InformativeFooter/InformativeFooter'
import CpPropertyDetailsSearch from './CpPropertyDetailsSearch/CpPropertyDetailsSearch'

const CpPropertyDetailsMain = () => {
  return (
    <>
      <InformativeNavbar />
      <CpPropertyDetailsSearch />
      <InformativeFooter />
    </>
  )
}

export default CpPropertyDetailsMain