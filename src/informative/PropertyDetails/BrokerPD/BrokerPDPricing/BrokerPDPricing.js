import React from 'react'
import './BrokerPDPricing.css'
import BrokerPDPricingCard from './BrokerPDPricingCard/BrokerPDPricingCard'

const BrokerPDPricing = () => {
    return (
        <>
            <div className='container BrokerPDPricing'>
                <span className='PropertyDetails-heading'>Floor Plans & Pricing</span>
                <span className='BrokerPDPricing-subHeading'>in Arocon Rainbow</span>
                <div className='row'>
                    <div className='BrokerPDPricing-div'>
                        <span className='BrokerPDPricing-btns'>All</span>
                        <span className='BrokerPDPricing-btns'>2BHK</span>
                        <span className='BrokerPDPricing-btns'>3BHK</span>
                        <span className='BrokerPDPricing-btns'>4BHK</span>
                        <span className='BrokerPDPricing-btns'>5BHK</span>
                        <span className='BrokerPDPricing-btns'>6BHK</span>
                        <span className='BrokerPDPricing-btns'>7BHK</span>
                    </div>
                </div>
                <BrokerPDPricingCard />
            </div>
        </>
    )
}

export default BrokerPDPricing