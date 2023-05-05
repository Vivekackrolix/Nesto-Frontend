import React, { useEffect } from 'react'
import './BrokerPDbrokerage.css'
import Aos from 'aos'

const BrokerPDbrokerage = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BrokerPDbrokerage' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>Brokerage Payout Plan</span>
                <div className='col-lg-12 BrokerPDbrokerage-col'>
                    <span className='BrokerPDbrokerage-col_span-1'>Brokerage 5%</span>
                    <span className='BrokerPDbrokerage-col_span-2'>
                        Platform charges & applicable taxes shall be deducted
                    </span>
                </div>
            </div>
        </>
    )
}

export default BrokerPDbrokerage