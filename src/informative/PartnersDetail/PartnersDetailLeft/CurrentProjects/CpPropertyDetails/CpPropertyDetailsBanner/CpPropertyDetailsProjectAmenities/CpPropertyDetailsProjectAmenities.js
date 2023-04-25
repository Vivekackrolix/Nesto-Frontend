import React from 'react'
import './CpPropertyDetailsProjectAmenities.css'
import { BiBed } from 'react-icons/bi'

const CpPropertyDetailsProjectAmenities = () => {
    const data = [
        {
            size: '2110 Sqft',
            img: '/assets/informative/propertyDetails/ruler.svg'
        },
        {
            size: '3 Beds',
            img: '/assets/informative/propertyDetails/bed.svg'
        },
        {
            size: '1 Baths',
            img: '/assets/informative/propertyDetails/shower.svg'
        },
        {
            size: '1 Garages',
            img: '/assets/informative/propertyDetails/car.svg'
        },
        {
            size: '1 Balcony',
            img: '/assets/informative/propertyDetails/balcony.svg'
        },
        {
            size: '2110 Sqft',
            img: '/assets/informative/propertyDetails/ruler.svg'
        },
        {
            size: '3 Beds',
            img: '/assets/informative/propertyDetails/bed.svg'
        },
        {
            size: '1 Baths',
            img: '/assets/informative/propertyDetails/shower.svg'
        }
    ]
    return (
        <>
            <div className='container CpPropertyDetailsProjectAmenities'>
                <span className='PropertyDetails-heading'>Project Amenities</span>
                <div className='col-lg-12 CpPropertyDetailsProjectAmenities-col_12'>
                    <div className='row'>
                        {data.map((item) => {
                            return (
                                <div className='col-lg-3 col-md-3 col-sm-6 CpPropertyDetailsProjectAmenities-col'>
                                    <img src={item.img} className='CpPropertyDetailsProjectAmenities-col_icon' />
                                    <span className='CpPropertyDetailsProjectAmenities-col_size'>
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

export default CpPropertyDetailsProjectAmenities