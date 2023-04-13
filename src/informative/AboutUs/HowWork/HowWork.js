import React from 'react'
import './HowWork.css'
import Heading from '../../HomePage/heading/Heading'
import RowTwo from './RowTwo/RowTwo'
import RowFour from './RowFour/RowFour'
import RowFive from './RowFive/RowFive'
import RowSix from './RowSix/RowSix'

const HowWork = () => {
    return (
        <>
            <Heading title="How NestoHub Works For Brokers" sub="We Follow A Simple Process To Streamline Broker’s Process" />
            <div className='container how-container' style={{ overflowX: 'hidden' }}>
                <div className='row pt-4'>
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-col-1' data-aos='fade-right'>
                        <span className='how-col-1-span-1'>
                            Register Yourself
                        </span>
                        <span className='how-col-1-span-2'>
                            Create your Broker account free of cost with NestoHub by filling out simple details.
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
                        <img src='/assets/informative/howWorks/gif1.gif' className='how-work_img' alt='how-work' />
                    </div>
                    {/* ============================= */}
                    <RowTwo />
                    {/* RowThree */}
                    <div className='col-lg-5 col-md-5 col-sm-5 col-5 how-col-1' data-aos='fade-right'>
                        <span className='how-col-1-span-1'>
                            Manage Customer Visits
                        </span>
                        <span className='how-col-1-span-2'>
                            NestoHub enables you to manage and update the status of your customers' visits, allowing for more efficient planning.
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
                        <img src='/assets/informative/howWorks/gif3.gif' className='how-work_img' alt='how-work_img' />
                    </div>
                    {/* RowFour */}
                    <RowFour />
                    {/* RowFive */}
                    <RowFive />
                    {/* RowSix */}
                    <RowSix />
                </div>
            </div>
        </>
    )
}

export default HowWork