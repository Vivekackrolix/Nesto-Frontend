import React from 'react'
import './CpPropertyDetailsBrochure.css'

const CpPropertyDetailsBrochure = () => {
    return (
        <>
            <div className='container CpPropertyDetailsBrochure'>
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