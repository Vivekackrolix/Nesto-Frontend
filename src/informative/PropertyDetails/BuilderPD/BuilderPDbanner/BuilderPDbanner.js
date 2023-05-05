import React, { useEffect, useState } from 'react'
import './BuilderPDbanner.css'
import { RxCheck } from 'react-icons/rx'
import Aos from 'aos';
import BuilderPDImgPopUp from '../BuilderPDImgPopUp/BuilderPDImgPopUp';

const BuilderPDbanner = () => {
    const [imgPopUp, SetImgPopUp] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container BuilderPDbanner' data-aos='zoom-in'>
                <span className='PropertyDetails-heading'>Property Details</span>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 BuilderPDbanner-col'>
                        {/* BuilderPDbanner-col_div-1, BuilderPDbanner-col_div-2, 
                        BuilderPDbanner-col_div-3, BuilderPDbanner-col_div-4 */}
                        <div className='BuilderPDbanner-col_div-1'>
                            <img src='/assets/informative/propertyImage.jpg' className='BuilderPDbanner-col_div_img' />
                            <div className='BuilderPDbanner-col_div-2'>
                                <div className='BuilderPDbanner-col_div-3'>
                                    <span className='BuilderPDbanner-col_div-3_span-1'>
                                        <RxCheck className='BuilderPDbanner-col_div-3_span-1-icon' /> Rera
                                    </span>
                                </div>
                                <div className='BuilderPDbanner-col_div-4'>
                                    <span className='BuilderPDbanner-col_div-4_span-1'>Listing Date: 05/01/2023</span>
                                </div>
                            </div>
                            {/* BuilderPDbanner-col_div-5, BuilderPDbanner-col_div-6, BuilderPDbanner-col_div-7 */}
                            <div className='BuilderPDbanner-col_div-5 justify-content-start gap-4'>
                                <div className='BuilderPDbanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='BuilderPDbanner-col_div-6_img' />
                                </div>
                                <div className='BuilderPDbanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='BuilderPDbanner-col_div-6_img' />
                                </div>
                                <div className='BuilderPDbanner-col_div-6' onClick={() => SetImgPopUp(true)}>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='BuilderPDbanner-col_div-6_img' />
                                    <div className='BuilderPDbanner-col_div-7'>
                                        <span className='BuilderPDbanner-col_div-7-span'>
                                            +3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BuilderPDbanner-col_div-8 */}
                    <div className='BuilderPDbanner-col_div-8 justify-content-start gap-2'>
                        <span className='BuilderPDbanner-col_div-8-span'>Under Constructions</span>
                        <span className='BuilderPDbanner-col_div-8-span'>Possession in Dec,2023</span>
                    </div>
                </div>
            </div>
            <BuilderPDImgPopUp
                show={imgPopUp}
                onHide={() => SetImgPopUp(false)}
            />
        </>
    )
}

export default BuilderPDbanner