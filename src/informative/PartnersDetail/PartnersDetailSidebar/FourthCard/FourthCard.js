import React from 'react'
import './FourthCard.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const FourthCard = () => {
    return (
        <>
            <div div className='d-flex justify-content-between partners-fourth__card rounded-3 align-items-end' >
                <div style={{ width: '100%' }} className='d-flex flex-column'>
                    <span className='fourth-card__span-2 w-100'>Property Sahi, Services Sabhi</span>
                    <span className='fourth-card__span-3' style={{ width: '100%' }}>Do more much with 15+ Property Services</span>
                    <Link to='/' className='fourth-card__link'>View our services <FaLongArrowAltRight /> </Link>
                </div>
            </div>
        </>
    )
}

export default FourthCard