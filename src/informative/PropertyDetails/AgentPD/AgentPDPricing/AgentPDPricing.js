import React from 'react'
import './AgentPDPricing.css'
import AgentPDPricingCard from './AgentPDPricingCard/AgentPDPricingCard'

const AgentPDPricing = () => {
    return (
        <>
            <div className='container AgentPDPricing' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>Floor Plans & Pricing</span>
                <span className='AgentPDPricing-subHeading'>in Arocon Rainbow</span>
                <div className='row'>
                    <div className='AgentPDPricing-div'>
                        <span className='AgentPDPricing-btns-active'>All</span>
                        <span className='AgentPDPricing-btns'>2BHK</span>
                        <span className='AgentPDPricing-btns'>3BHK</span>
                        <span className='AgentPDPricing-btns'>4BHK</span>
                        <span className='AgentPDPricing-btns'>5BHK</span>
                        <span className='AgentPDPricing-btns'>6BHK</span>
                        <span className='AgentPDPricing-btns'>7BHK</span>
                    </div>
                </div>
                <AgentPDPricingCard />
            </div>
        </>
    )
}

export default AgentPDPricing