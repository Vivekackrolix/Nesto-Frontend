import React from 'react'
import './BrokerPDbrochure.css'
import Aos from 'aos'
import { useEffect } from 'react'

const BrokerPDbrochure = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BrokerPDbrochure' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>View official brochure</span>
                <div className='col-lg-12 BrokerPDbrochure-col'>
                    <div className='col-lg-12'>
                        <img src='/assets/informative/propertyDetails/brochure.svg' className='BrokerPDbrochure-col_img' />
                        <span className='BrokerPDbrochure-col_span'>Sky Apartment Brochure</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrokerPDbrochure