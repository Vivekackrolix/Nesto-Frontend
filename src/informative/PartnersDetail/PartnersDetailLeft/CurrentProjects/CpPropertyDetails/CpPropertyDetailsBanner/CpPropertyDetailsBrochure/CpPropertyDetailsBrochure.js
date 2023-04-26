import React from 'react'
import './CpPropertyDetailsBrochure.css'
import Aos from 'aos'
import { useEffect } from 'react'

const CpPropertyDetailsBrochure = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container CpPropertyDetailsBrochure' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>View official brochure</span>
                <div className='col-lg-12 CpPropertyDetailsBrochure-col'>
                    <div className='col-lg-12'>
                        <img src='/assets/informative/propertyDetails/brochure.svg' className='CpPropertyDetailsBrochure-col_img' />
                        <span className='CpPropertyDetailsBrochure-col_span'>Sky Apartment Brochure</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CpPropertyDetailsBrochure