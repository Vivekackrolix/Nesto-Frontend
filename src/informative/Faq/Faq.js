import React, { useEffect, useState } from 'react'
import './Faq.css'
import InformativeNavbar from '../Navbar/Navbar'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { MdArrowForwardIos } from 'react-icons/md'
import InformativeFooter from '../InformativeFooter/InformativeFooter'
import { Fade, Zoom } from 'react-reveal'

const Faq = () => {
    const [showFaq, setShowFaq] = useState(1)
    return (
        <>
            {/* Navbar */}
            < InformativeNavbar />
            <div className="faq-banner">
                <Zoom duration={1300} delay={100}>
                    <span className='faq-banner-heading'>Frequently Asked Questions</span>
                </Zoom>
            </div>
            <Fade up duration={1000} distance="100px" delay={100}>
                <div className='container faq-container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 faq-col-1'>
                            <div className='faq-col_box-1'>
                                <span className={`faq-span ${showFaq === 1 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(1)}>
                                    <span>
                                        <VscCircleLargeFilled className={`circle-icon ${showFaq === 1 ? 'circle-icon_active' : ''}`} />
                                        Lorem Ipsum is simply dummy text?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 1 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 2 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(2)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 2 ? 'circle-icon_active' : ''}`} />
                                        Lorem Ipsum is simply dummy text?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 2 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 3 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(3)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 3 ? 'circle-icon_active' : ''}`} /> Lorem Ipsum is simply dummy text?</span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 3 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 4 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(4)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 4 ? 'circle-icon_active' : ''}`} /> Lorem Ipsum is simply dummy text?</span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 4 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 5 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(5)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 5 ? 'circle-icon_active' : ''}`} /> Lorem Ipsum is simply dummy text?</span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 5 ? 'arrow-icon_active' : ''}`} /></span>
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
            </Fade>
            {/* Footer */}
            <InformativeFooter />
        </>
    )
}

export default Faq