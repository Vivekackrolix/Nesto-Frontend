import React, { useEffect } from 'react'
import InformativeNavbar from '../Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Aos from 'aos'
import './Faq.css'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import {MdArrowForwardIos} from 'react-icons/md'
import InformativeFooter from '../InformativeFooter/InformativeFooter'

const Faq = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            {/* Navbar */}
            < InformativeNavbar />
            <div className="faq-banner">
                <span className='faq-banner-heading' data-aos='zoom-in'>Frequently Asked Questions</span>
            </div>
            <div className='container faq-container' style={{overflowX: 'hidden'}}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 faq-col-1'>
                        <div className='faq-col_box-1'>
                            <span className='faq-span'>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span'>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span'>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span'>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span'>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 faq-col-2'>
                        <span className='faq-span-2'>Lorem Ipsum is simply dummy text?</span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <InformativeFooter />
        </>
    )
}

export default Faq