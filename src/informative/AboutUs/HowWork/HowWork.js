import React from 'react'
import './HowWork.css'
import RowTwo from './RowTwo/RowTwo'
import RowFour from './RowFour/RowFour'

const HowWork = () => {
    return (
        <>
            <div className="how-box" style={{overflowX: 'hidden'}}>
                <span className='how-heading-1' data-aos='fade-left'>How Nesto Works</span>
                <span className='how-heading-2' data-aos='fade-right'>We are Offering The Best Real Estate Property</span>
            </div>
            <div className='container how-container' style={{overflowX: 'hidden'}}>
                <div className='row pt-4'>
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-col-1' data-aos='fade-right'>
                        <span className='how-col-1-span-1'>
                            Register Yourself
                        </span>
                        <span className='how-col-1-span-2'>
                            Real Estate agents are Property cting of land the buildings on it, ong with its seds naturals resources such.
                        </span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 how-col-2' data-aos='zoom-in'>
                        <span className='how-col-2-span-1'>
                            01
                        </span>
                        <div className='line-div'>
                            <span className='line-1'></span>
                            <span className='line-2'></span>
                            <span className='line-3'></span>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3' data-aos='fade-left'>
                        <img src='/assets/informative/howImg1.png' className='how-work_img' />
                    </div>
                    {/* ============================= */}
                    <RowTwo />
                    {/* RowThree */}
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-col-1' data-aos='fade-right'>
                        <span className='how-col-1-span-1'>
                            Sale/Purchase
                        </span>
                        <span className='how-col-1-span-2'>
                            Real Estate agents are Property cting of land the buildings on it, ong with its seds naturals resources.
                        </span>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 how-col-2' data-aos='zoom-in'>
                        <span className='how-col-2-span-1'>
                            03
                        </span>
                        <div className='line-div'>
                            <span className='line-1'></span>
                            <span className='line-2'></span>
                            <span className='line-3'></span>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3' data-aos='fade-left'>
                        <img src='/assets/informative/howImg3.png' className='how-work_img' />
                    </div>
                    {/* RowFour */}
                    <RowFour />
                </div>
            </div>
        </>
    )
}

export default HowWork