import React from 'react'
import './RowTwo.css'

const RowTwo = () => {
    return (
        <>
            <div className='col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1' data-aos='fade-right'>
                <img src='/assets/informative/howImg2.png' className='how-work_img' alt='how-work_img' />
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2' data-aos='zoom-in'>
                <span className='row-two-col-2-span-1'>
                    02
                </span>
                <div className='line-div'>
                    <span className='line-1'></span>
                    <span className='line-2'></span>
                    <span className='line-3'></span>
                </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-3' data-aos='fade-left'>
                <span className='row-two-col-3-span-1'>
                    List your Property
                </span>
                <span className='row-two-col-3-span-2'>
                    Real Estate agents are Property cting of land the buildings on it, ong with its seds naturals resources such.
                </span>
            </div>
        </>
    )
}

export default RowTwo