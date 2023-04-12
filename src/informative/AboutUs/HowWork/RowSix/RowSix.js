import React from 'react'

const RowSix = () => {
    return (
        <>
            <div className='col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1' data-aos='fade-right'>
                <img src='/assets/informative/howWorks/gif6.gif' className='how-work_img' alt='how-work_img' />
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2' data-aos='zoom-in'>
                <span className='row-two-col-2-span-1'>
                    06
                </span>
                <div className='line-div'>
                    <span className='line-1'></span>
                    <span className='line-2'></span>
                    <span className='line-3'></span>
                </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-3' data-aos='fade-left'>
                <span className='row-two-col-3-span-1'>
                    Enjoy Hassle-Free Payment
                </span>
                <span className='row-two-col-3-span-2'>
                    Once you've completed the sale of your property, NestoHub will send you your commission as soon as possible.
                </span>
            </div>
        </>
    )
}

export default RowSix