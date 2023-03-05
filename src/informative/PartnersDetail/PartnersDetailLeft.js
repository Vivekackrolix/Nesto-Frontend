import React from 'react'
import './PartnersDetailLeft.css';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md'

export default function PartnersDetailLeft() {
    return (
        <>
            <div className='container-fluid partners-container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        {/* <img src='/assets/property-screen-img1.png' className='partners-img' /> */}
                        <div className='partners-container_box-3'>
                            <span className='partners-container_span-1'>All Photos & Videos</span>
                            <span className='partners-container_span-1'>16 Photos</span>
                        </div>
                    </div>
                    <div className='col-lg-6 rounded-3'>
                        <div className='partners-container_box-1'>
                            <span className='partners-container_span-1'>Indoor</span>
                            <span className='partners-container_span-1'>10 Photos</span>
                        </div>
                        <div className='partners-container_box-2'>
                            <span className='partners-container_span-1'>Outdoor</span>
                            <span className='partners-container_span-1'>14 Photos</span>
                        </div>
                        {/* <img src='/assets/property-screen-img2.png' className='partners-img partners-img-2 pb-3' /> */}
                        {/* <img src='/assets/property-screen-img3.png' className='partners-img partners-img-2' /> */}
                    </div>
                </div>
                <div className='mt-5 col-lg-12 d-flex justify-content-start gap-2 align-items-center'>
                    <div>
                        <img src='/assets/profile-card-img.png' />
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
                <div className='partners-container_box shadow-sm rounded-4 mt-5'>
                    <span className='partners-container_span-5'>Description</span>
                    <hr />
                    <span className='partners-container_span-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </span>
                </div>
            </div>
        </>
    );
}