import React from 'react'
import './PuriConstruction.css'
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';

const PuriConstruction = () => {
    return (
        <div className='mt-5 col-lg-12 d-flex justify-content-start gap-2 align-items-center' data-aos='fade-right'>
            <div>
                <img src='/assets/profile-card-img.png' alt='profile-card' />
            </div>
            <div>
                <div className=''>
                    <span className='d-flex align-items-center gap-2'>
                        <span className='d-flex align-items-start partners-container_span-2'>Puri Construction</span>
                        <span className='partners-container_span-3'>
                            <MdOutlineStarPurple500 className='partners-container_star' />
                            <MdOutlineStarPurple500 className='partners-container_star' />
                            <MdOutlineStarPurple500 className='partners-container_star' />
                            <MdOutlineStarPurple500 className='partners-container_star' />
                            <MdOutlineStarOutline className='partners-container_star' />
                        </span>
                    </span>
                    <span className='partners-container_span-4'>Gurgaon | Noida | Gujarat | Delhi NCR | Kolkata | Punjab</span>
                </div>
            </div>
        </div>
    )
}

export default PuriConstruction