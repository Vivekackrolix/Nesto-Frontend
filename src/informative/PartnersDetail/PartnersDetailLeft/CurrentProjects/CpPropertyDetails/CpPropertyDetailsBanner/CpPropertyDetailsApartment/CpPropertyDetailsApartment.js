import React from 'react'
import './CpPropertyDetailsApartment.css'
import { ImStarEmpty, ImStarFull } from 'react-icons/im'

const CpPropertyDetailsApartment = () => {
    const data = [
        {
            img: '/assets/informative/building.svg',
            detail: '2 BHK'
        },
        {
            img: '/assets/informative/building.svg',
            detail: '3 BHK'
        },
        {
            img: '/assets/informative/building.svg',
            detail: '4 BHK'
        },
        {
            img: '/assets/informative/building.svg',
            detail: '6 BHK'
        },
    ]
    return (
        <div className='container CpPropertyDetailsApartment'>
            <div className='col-lg-12 CpPropertyDetailsApartment-col'>
                <div className='CpPropertyDetailsApartment-div-1'>
                    <div className='CpPropertyDetailsApartment-div-2 gap-4'>
                        <div className=''>
                            <img src='/assets/informative/partner-2.png' className='CpPropertyDetailsApartment-div-2_img' />
                        </div>
                        <div className=''>
                            <span className='div-2_child_heading'>Sky Dandelions Apartment</span>
                            <span className='div-2_child_stars gap-2'>
                                <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarEmpty />
                            </span>
                            <span className='div-2_child_address'>Luxury Apartment in Sector-29, Gurugram</span>
                            <div className='d-flex gap-5 mt-3'>
                                {data.map((item) => {
                                    return (
                                        <div className='CpPropertyDetailsApartment-div-2_child'>
                                            <img src={item.img} className='CpPropertyDetailsApartment-div-2_child-img' />
                                            <span className='CpPropertyDetailsApartment-div-2_child-span'>{item.detail}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='CpPropertyDetailsApartment-div-3'>
                        <span className='CpPropertyDetailsApartment-div-3-span-1'>₹ 3.94 L - 6.01 Cr</span>
                        <span className='CpPropertyDetailsApartment-div-3-span-2'>Book now & get 5% Discount</span>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default CpPropertyDetailsApartment