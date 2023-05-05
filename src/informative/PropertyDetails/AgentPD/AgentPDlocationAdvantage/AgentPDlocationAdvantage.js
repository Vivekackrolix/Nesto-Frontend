import React from 'react'
import './AgentPDlocationAdvantage.css'
import AgentPDlocation from './AgentPDlocation/AgentPDlocation'
import Aos from 'aos'
import { useEffect } from 'react'

const AgentPDlocationAdvantage = () => {
    const data = [
        {
            size: '2110 Sqft',
            nearLocation: 'Mini Market',
            img: '/assets/informative/propertyDetails/cart.svg'
        },
        {
            size: '3 Beds',
            nearLocation: 'Canteen',
            img: '/assets/informative/propertyDetails/kitchen.svg'
        },
        {
            size: '1 Baths',
            nearLocation: 'Hospital',
            img: '/assets/informative/propertyDetails/hospital.svg'
        },
        {
            size: '1 Garages',
            nearLocation: 'Station',
            img: '/assets/informative/propertyDetails/train.svg'
        }
    ]
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container AgentPDlocationAdvantage' data-aos='fade-up'>
                <span className='PropertyDetails-heading'>Location Advantages</span>
                <div className='col-lg-12 AgentPDlocationAdvantage-col_12'>
                    <div className='row'>
                        {data.map((item) => {
                            return (
                                <div className='col-lg-3 col-md-3 col-sm-6 AgentPDlocationAdvantage-col'>
                                    <img src={item.img} className='AgentPDlocationAdvantage-col_icon' alt='icon' />
                                    <span className='AgentPDlocationAdvantage-col_name'>
                                        {item.nearLocation}
                                    </span>
                                    <span className='AgentPDlocationAdvantage-col_size'>
                                        {item.size}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentPDlocationAdvantage