import React from 'react'
import './CpPropertyDetailsLocationAdvantage.css'
import LocationAdvantageLocations from './LocationAdvantageLocations/LocationAdvantageLocations'

const CpPropertyDetailsLocationAdvantage = () => {
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
    return (
        <>
            <div className='container CpPropertyDetailsLocationAdvantage'>
                <span className='PropertyDetails-heading'>Location Advantages</span>
                <div className='col-lg-12 CpPropertyDetailsLocationAdvantage-col_12'>
                    <div className='row'>
                        {data.map((item) => {
                            return (
                                <div className='col-lg-3 col-md-3 col-sm-6 CpPropertyDetailsLocationAdvantage-col'>
                                    <img src={item.img} className='CpPropertyDetailsLocationAdvantage-col_icon' alt='icon' />
                                    <span className='CpPropertyDetailsLocationAdvantage-col_name'>
                                        {item.nearLocation}
                                    </span>
                                    <span className='CpPropertyDetailsLocationAdvantage-col_size'>
                                        {item.size}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <iframe
                    className='CpPropertyDetailsLocationAdvantage_map'
                    width='100%'
                    height='340px'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.621621626714!2d77.2263881420838!3d28.665382902586973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd08c16bad3b%3A0x26668a270e9365b7!2sKashmere%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1682425730846!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <LocationAdvantageLocations />
            </div>
        </>
    )
}

export default CpPropertyDetailsLocationAdvantage