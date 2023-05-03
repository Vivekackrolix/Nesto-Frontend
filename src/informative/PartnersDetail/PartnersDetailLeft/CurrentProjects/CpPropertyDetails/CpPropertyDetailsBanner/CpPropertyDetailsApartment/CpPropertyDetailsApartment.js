import React, { useEffect } from 'react'
import './CpPropertyDetailsApartment.css'
import { ImStarEmpty, ImStarFull } from 'react-icons/im'
import Aos from 'aos'

const CpPropertyDetailsApartment = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
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
        <div className='container CpPropertyDetailsApartment' data-aos='fade-up'>
            <div className='col-lg-12 CpPropertyDetailsApartment-col'>
                <div className='CpPropertyDetailsApartment-div-1'>
                    <div className='CpPropertyDetailsApartment-div-2 align-items-start gap-3'>
                        <div className=''>
                            <img src='/assets/informative/partner-2.png' className='CpPropertyDetailsApartment-div-2_img' />
                        </div>
                        <div className=''>
                            <span className='div-2_child_heading'>Sky Dandelions Apartment</span>
                            <span className='div-2_child_stars gap-2'>
                                <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarEmpty />
                            </span>
                            <span className='div-2_child_address'>Luxury Apartment in Sector-29, Gurugram</span>
                            <div className='d-flex mt-3'>
                                {data.map((item) => {
                                    return (
                                        <div className='CpPropertyDetailsApartment-div-2_child justify-content-start'>
                                            <img src={item.img} className='CpPropertyDetailsApartment-div-2_child-img' />
                                            <span className='CpPropertyDetailsApartment-div-2_child-span'>{item.detail}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* CpPropertyDetailsApartment-div-3 only visible in Mobile View */}
                            <div className='CpPropertyDetailsApartment-div-3'>
                                <span className='CpPropertyDetailsApartment-div-3-span'>₹ 3.94 L - 6.01 Cr</span>
                            </div>
                        </div>
                    </div>
                    <div className='CpPropertyDetailsApartment-div-4'>
                        <span className='CpPropertyDetailsApartment-div-4-span'>₹ 3.94 L - 6.01 Cr</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CpPropertyDetailsApartment