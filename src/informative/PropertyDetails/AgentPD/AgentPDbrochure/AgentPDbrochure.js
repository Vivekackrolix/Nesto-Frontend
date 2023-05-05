import React from 'react'
import './AgentPDbrochure.css'
import Aos from 'aos'
import { useEffect } from 'react'

const AgentPDbrochure = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container AgentPDbrochure' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>View official brochure</span>
                <div className='col-lg-12 AgentPDbrochure-col'>
                    <div className='col-lg-12'>
                        <img src='/assets/informative/propertyDetails/brochure.svg' className='AgentPDbrochure-col_img' />
                        <span className='AgentPDbrochure-col_span'>Sky Apartment Brochure</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentPDbrochure