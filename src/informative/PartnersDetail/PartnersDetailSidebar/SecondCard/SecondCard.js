import React from 'react'
import './SecondCard.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const SecondCard = () => {
    return (
        <>
            {/* First Card */}
            <div className='d-flex justify-content-between partners-second__card rounded-3'>
                <div className=''>
                    <div className='second-card__box rounded-3'>
                        <div className='text-center'>
                            <span className='second-card__span-1'>Download Nestohub Mobile App</span>
                        </div>
                        <div className='d-flex gap-2 second-card__btn-div'>
                            <Link to='/' className='second-card__btn d-flex align-items-center rounded-3'>
                                <div>
                                    <img src='/assets/google-play.png' className='second-card__icon' />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='second-card__icon-span-1'>GET IT ON</span>
                                    <span className='second-card__icon-span-2'>Google Play</span>
                                </div>
                            </Link>
                            <Link to='/' className='second-card__btn d-flex align-items-center rounded-3'>
                                <div>
                                    <img src='/assets/apple.png' className='second-card__icon' />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='second-card__icon-span-1'>Download on the</span>
                                    <span className='second-card__icon-span-2'>App Store</span>
                                </div>
                            </Link>
                        </div>
                        <div className='second-card__box-2'>
                            <img src='/assets/device.png' className='second-card__img-1' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondCard