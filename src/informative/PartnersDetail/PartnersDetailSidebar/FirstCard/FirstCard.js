import React from 'react'
import './FirstCard.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const FirstCard = () => {
    return (
        <>
            {/* First Card */}
            <div div className='d-flex justify-content-between partners-first__card rounded-3' data-aos='fade-left' >
                <div style={{ width: '60%' }}>
                    <span className='first-card__span-1'>NEW</span>
                    <span className='first-card__span-2'>Explore Insight</span>
                    <span className='first-card__span-3'>Price Trends, Resident Reviews, Locality Insight & more...</span>
                    <Link to='/' className='first-card__link'>Check Now <FaLongArrowAltRight /> </Link>
                </div>
                <div style={{ width: '40%' }}>
                    <img src='/assets/exploreImg.png' alt='explore-img' className='first-card__img' />
                </div>
            </div>
        </>
    )
}

export default FirstCard