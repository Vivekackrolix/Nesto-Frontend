import React, { useEffect } from 'react'
import './BuilderPDbrokerage.css'
import Aos from 'aos'

const BuilderPDbrokerage = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BuilderPDbrokerage' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>Brokerage Payout Plan</span>
                <div className='col-lg-12 BuilderPDbrokerage-col'>
                    <span className='BuilderPDbrokerage-col_span-1'>Brokerage 5%</span>
                    <span className='BuilderPDbrokerage-col_span-2'>
                        Platform charges & applicable taxes shall be deducted
                    </span>
                </div>
            </div>
        </>
    )
}

export default BuilderPDbrokerage