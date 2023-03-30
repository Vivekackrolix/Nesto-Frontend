import React, { useEffect, useState } from 'react'
import './Faq.css'
import InformativeNavbar from '../Navbar/Navbar'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { MdArrowForwardIos } from 'react-icons/md'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import Aos from 'aos'

const Faq = () => {
    const [showFaq, setShowFaq] = useState(1)

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
            <div className='container faq-container' data-aos='fade-up' style={{ overflowX: 'hidden' }}>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 faq-col-1'>
                        <div className='faq-col_box-1'>
                            <span className='faq-span' onClick={() => setShowFaq(1)}>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span' onClick={() => setShowFaq(2)}>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span' onClick={() => setShowFaq(3)}>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span' onClick={() => setShowFaq(4)}>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                            <span className='faq-span' onClick={() => setShowFaq(5)}>
                                <span><VscCircleLargeFilled className='circle-icon' /> Lorem Ipsum is simply dummy text?</span>
                                <span><MdArrowForwardIos className='arrow-icon' /></span>
                            </span>
                        </div>
                    </div>
                    {showFaq === 1 ?
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                            <span className='faq-span-2'>Lorem Ipsum is simply dummy text?</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                        : ''
                    }
                    {showFaq === 2 ?
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                            <span className='faq-span-2'>Ipsum is simply dummy text 222</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                        : ''
                    }
                    {showFaq === 3 ?
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                            <span className='faq-span-2'>Lorem is simply dummy text 333</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                        : ''
                    }
                    {showFaq === 4 ?
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                            <span className='faq-span-2'>Lorem Ipsum is simply dummy 444</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                        : ''
                    }
                    {showFaq === 5 ?
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                            <span className='faq-span-2'>Lorem Ipsum is dummy text 555</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <span className='faq-span-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                        : ''
                    }
                </div>
            </div>
            {/* Footer */}
            <InformativeFooter />
        </>
    )
}

export default Faq