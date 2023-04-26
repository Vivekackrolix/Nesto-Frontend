import React, { useEffect } from 'react'
import './CpPropertyDetailsBrokerage.css'
import Aos from 'aos'

const CpPropertyDetailsBrokerage = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container CpPropertyDetailsBrokerage' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>Brokerage Payout Plan</span>
                <div className='col-lg-12 CpPropertyDetailsBrokerage-col'>
                    <span className='CpPropertyDetailsBrokerage-col_span-1'>Brokerage 5%</span>
                    <span className='CpPropertyDetailsBrokerage-col_span-2'>
                        Platform charges & applicable taxes shall be deducted
                    </span>
                </div>
            </div>
        </>
    )
}

export default CpPropertyDetailsBrokerage