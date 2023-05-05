import React, { useEffect, useState } from 'react'
import './BrokerPDbanner.css'
import { RxCheck } from 'react-icons/rx'
import Aos from 'aos';
import BrokerPDImgPopUp from '../BrokerPDImgPopUp/BrokerPDImgPopUp';

const BrokerPDbanner = () => {
    const [imgPopUp, SetImgPopUp] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BrokerPDbanner' data-aos='zoom-in'>
                <span className='PropertyDetails-heading'>Property Details</span>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 BrokerPDbanner-col'>
                        {/* BrokerPDbanner-col_div-1, BrokerPDbanner-col_div-2, 
                        BrokerPDbanner-col_div-3, BrokerPDbanner-col_div-4 */}
                        <div className='BrokerPDbanner-col_div-1'>
                            <img src='/assets/informative/propertyImage.jpg' alt='img' className='BrokerPDbanner-col_div_img' />
                            <div className='BrokerPDbanner-col_div-2'>
                                <div className='BrokerPDbanner-col_div-3'>
                                    <span className='BrokerPDbanner-col_div-3_span-1'>
                                        <RxCheck className='BrokerPDbanner-col_div-3_span-1-icon' /> Rera
                                    </span>
                                </div>
                                <div className='BrokerPDbanner-col_div-9'>
                                    <span className='BrokerPDbanner-col_div-9_span-1'>
                                        5% Brokerage
                                    </span>
                                </div>
                                <div className='BrokerPDbanner-col_div-4'>
                                    <span className='BrokerPDbanner-col_div-4_span-1'>Best Seller</span>
                                </div>
                            </div>
                            {/* BrokerPDbanner-col_div-5, BrokerPDbanner-col_div-6, BrokerPDbanner-col_div-7 */}
                            <div className='BrokerPDbanner-col_div-5 justify-content-start gap-4'>
                                <div className='BrokerPDbanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' alt='img' className='BrokerPDbanner-col_div-6_img' />
                                </div>
                                <div className='BrokerPDbanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' alt='img' className='BrokerPDbanner-col_div-6_img' />
                                </div>
                                <div className='BrokerPDbanner-col_div-6' onClick={() => SetImgPopUp(true)}>
                                    <img src='/assets/informative/homeSlider-2.jpg' alt='img' className='BrokerPDbanner-col_div-6_img' />
                                    <div className='BrokerPDbanner-col_div-7'>
                                        <span className='BrokerPDbanner-col_div-7-span'>
                                            +3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BrokerPDbanner-col_div-8 */}
                    <div className='BrokerPDbanner-col_div-8 justify-content-start gap-2'>
                        <span className='BrokerPDbanner-col_div-8-span'>Under Constructions</span>
                        <span className='BrokerPDbanner-col_div-8-span'>Possession in Dec,2023</span>
                    </div>
                </div>
            </div>
            <BrokerPDImgPopUp
                show={imgPopUp}
                onHide={() => SetImgPopUp(false)}
            />
        </>
    )
}

export default BrokerPDbanner