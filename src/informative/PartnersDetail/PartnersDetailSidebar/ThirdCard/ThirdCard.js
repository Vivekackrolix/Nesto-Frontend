import React from 'react'
import './ThirdCard.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ThirdCard = () => {
    return (
        <>
            {/* First Card */}
            <div div className='d-flex partners-third__card rounded-3' >
                <div style={{ width: '100%' }}>
                    <p className='third-card__p-1'>Get Assured
                        <span className='third-card__span-1'> ₹90K Cashback </span>
                        on Home Loans & avail<span className='third-card__span-1'> FREE MB Prime</span>
                    </p>
                    <Link to='/' className='third-card__link'>I'm Interested <FaLongArrowAltRight /> </Link>
                    <span className='third-card__span-2'>T&C Apply</span>
                </div>
            </div>
        </>
    )
}

export default ThirdCard