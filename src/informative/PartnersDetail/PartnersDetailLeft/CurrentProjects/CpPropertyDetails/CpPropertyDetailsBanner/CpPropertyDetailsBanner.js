import React from 'react'
import './CpPropertyDetailsBanner.css'
import { RxCheck } from 'react-icons/rx'

const CpPropertyDetailsBanner = () => {
    return (
        <>
            <div className='container CpPropertyDetailsBanner'>
                <span className='PropertyDetails-heading'>Property Details</span>
                <div className='row'>
                    <div className='col-lg-12 CpPropertyDetailsBanner-col'>
                        {/* CpPropertyDetailsBanner-col_div-1, CpPropertyDetailsBanner-col_div-2, 
                        CpPropertyDetailsBanner-col_div-3, CpPropertyDetailsBanner-col_div-4 */}
                        <div className='CpPropertyDetailsBanner-col_div-1'>
                            <img src='/assets/informative/propertyImage.jpg' className='CpPropertyDetailsBanner-col_div_img' />
                            <div className='CpPropertyDetailsBanner-col_div-2'>
                                <div className='CpPropertyDetailsBanner-col_div-3'>
                                    <span className='CpPropertyDetailsBanner-col_div-3_span-1'>
                                        <RxCheck className='CpPropertyDetailsBanner-col_div-3_span-1-icon' /> Rera
                                    </span>
                                </div>
                                <div className='CpPropertyDetailsBanner-col_div-4'>
                                    <span className='CpPropertyDetailsBanner-col_div-4_span-1'>Listing Date: 05/01/2023</span>
                                </div>
                            </div>
                            {/* CpPropertyDetailsBanner-col_div-5, CpPropertyDetailsBanner-col_div-6, 
                        CpPropertyDetailsBanner-col_div-7 */}
                            <div className='CpPropertyDetailsBanner-col_div-5 gap-4'>
                                <div className='CpPropertyDetailsBanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='CpPropertyDetailsBanner-col_div-6_img' />
                                </div>
                                <div className='CpPropertyDetailsBanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='CpPropertyDetailsBanner-col_div-6_img' />
                                </div>
                                <div className='CpPropertyDetailsBanner-col_div-6'>
                                    <img src='/assets/informative/homeSlider-2.jpg' className='CpPropertyDetailsBanner-col_div-6_img' />
                                    <div className='CpPropertyDetailsBanner-col_div-7'>
                                        <span className='CpPropertyDetailsBanner-col_div-7-span'>
                                            +3
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CpPropertyDetailsBanner-col_div-8 */}
                    <div className='CpPropertyDetailsBanner-col_div-8 gap-2'>
                        <span className='CpPropertyDetailsBanner-col_div-8-span'>Under Constructions</span>
                        <span className='CpPropertyDetailsBanner-col_div-8-span'>Possession in Dec,2023</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CpPropertyDetailsBanner