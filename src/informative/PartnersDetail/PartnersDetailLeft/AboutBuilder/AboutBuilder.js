import React from 'react'
import './AboutBuilder.css'
import { MdOutlineStarPurple500 } from 'react-icons/md'

const AboutBuilder = () => {
    return (
        <div className='about-builder shadow-sm rounded-4 mt-5' data-aos='fade-right'>
            <span className='about-builder_span-1'>About The Builder</span>
            <hr />
            <div className='about-builder_box'>
                <div className='d-flex align-items-center gap-3'>
                    <div className=''>
                        <img src='/assets/informative/builder1.png' />
                    </div>
                    <div>
                        <span className='about-builder_span-2'>Sky Dandelions Apartment</span>
                        <MdOutlineStarPurple500 className='about-builder_star' />
                        <MdOutlineStarPurple500 className='about-builder_star' />
                        <MdOutlineStarPurple500 className='about-builder_star' />
                        <MdOutlineStarPurple500 className='about-builder_star' />
                        <MdOutlineStarPurple500 className='about-builder_star' />
                    </div>

                </div>
                <span className='about-builder_span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </span>
            </div>
        </div>
    )
}

export default AboutBuilder