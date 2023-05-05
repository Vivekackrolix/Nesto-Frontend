import React from 'react'
import './BuilderPDbrochure.css'
import Aos from 'aos'
import { useEffect } from 'react'

const BuilderPDbrochure = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BuilderPDbrochure' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>View official brochure</span>
                <div className='col-lg-12 BuilderPDbrochure-col'>
                    <div className='col-lg-12'>
                        <img src='/assets/informative/propertyDetails/brochure.svg' className='BuilderPDbrochure-col_img' />
                        <span className='BuilderPDbrochure-col_span'>Sky Apartment Brochure</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuilderPDbrochure