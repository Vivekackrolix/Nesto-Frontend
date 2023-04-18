import React from 'react'
import { Link } from 'react-router-dom'
import './FifthCard.css'

const FifthCard = () => {
    return (
        <>
            <div className='d-flex flex-column justify-content-between partners-fifth__card rounded-3' data-aos='fade-left'>
                <div className='fifth-card__box rounded-3'>
                    <div className='text-center'>
                        <span className='fifth-card__span-1'>Sell Your Property With Us For
                            <span style={{ color: 'var(--primary-color)', display: 'block' }}>FREE</span>
                        </span>
                    </div>
                </div>
                <div className='fifth-card__box-2'>
                    <span className='fifth-card__span-2'>Find Buyers & Tenants Easily</span>
                    <Link to='/' className='fifth-card__link rounded-5 w-100'>
                        <span className='fifth-card__link-span rounded'>Post a Property</span>
                    </Link>
                </div>
                <div className='fifth-card__box-3'>
                    <span className='fifth-card__span-3'>Here's why NestoHub:</span>
                    <div className='fifth-card__box-4 mt-5'>
                        <div className='d-flex gap-3 align-items-center pb-5'>
                            <img src='/assets/informative/square-dot.png' alt='square-dot' className='fifth-card__dot' />
                            <li className='fifth-card__li'>Get Access to 4 Lakh + Buyers</li>
                        </div>
                        <div className='d-flex gap-3 align-items-center pb-5'>
                            <img src='/assets/informative/square-dot.png' alt='square-dot' className='fifth-card__dot' />
                            <li className='fifth-card__li'>Sell Faster with Premium Service</li>
                        </div>
                        <div className='d-flex gap-3 align-items-center pb-5'>
                            <img src='/assets/informative/square-dot.png' alt='square-dot' className='fifth-card__dot' />
                            <li className='fifth-card__li'>Find only Genuine Leads</li>
                        </div>
                        <div className='d-flex gap-3 align-items-center pb-5'>
                            <img src='/assets/informative/square-dot.png' alt='square-dot' className='fifth-card__dot' />
                            <li className='fifth-card__li'>Get Expert advice on Market Trends & insights</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FifthCard