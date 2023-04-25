import React from 'react'
import './CpPropertyDetailsLocationAdvantage.css'

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
            </div>
        </>
    )
}

export default CpPropertyDetailsLocationAdvantage