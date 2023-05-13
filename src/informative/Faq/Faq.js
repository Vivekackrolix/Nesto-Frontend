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
                                        How to register on NestoHub?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 1 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 2 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(2)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 2 ? 'circle-icon_active' : ''}`} />
                                        What does NestoHub have for brokers?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 2 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 3 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(3)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 3 ? 'circle-icon_active' : ''}`} />
                                        What does NestoHub have for builders?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 3 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 4 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(4)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 4 ? 'circle-icon_active' : ''}`} />
                                        How NestoHub meets the loan requirements and why?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 4 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                                <span className={`faq-span ${showFaq === 5 ? 'faq-span_active' : ''}`} onClick={() => setShowFaq(5)}>
                                    <span><VscCircleLargeFilled className={`circle-icon ${showFaq === 5 ? 'circle-icon_active' : ''}`} />
                                        Why am I not able to register as a loan agent on NestoHub?
                                    </span>
                                    <span><MdArrowForwardIos className={`arrow-icon ${showFaq === 5 ? 'arrow-icon_active' : ''}`} /></span>
                                </span>
                            </div>
                        </div>
                        {showFaq === 1 ?
                            <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                                <span className='faq-span-2'>How to register on NestoHub?</span>
                                <span className='faq-span-3'>Registering on NestoHub is very simple and free for brokers. The users just have to visit our website or download our application, click the login button, and follow the easy steps.</span>
                                <span className='faq-span-3'>Please note that the Builders and loan agents are on board by the NestoHub team, and if you want to join our community, contact us. Our team will contact you and collect relevant details to create your loan agent account and share the login credentials. We need to authorize the credibility of Builders and loan agents, which makes us follow these steps.</span>
                            </div>
                            : ''
                        }
                        {showFaq === 2 ?
                            <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                                <span className='faq-span-2'>What does NestoHub have for brokers?</span>
                                <span className='faq-span-3'>NestoHub is a digital platform connecting brokers and builders, making real estate easier and more effective. Our application allows brokers to connect with prominent and reliable builders with an exclusive inventory. NestoHub Brokers have,</span>
                                <div className='t-c_box'>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Vast Inventory.</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Higher Brokerage.</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Professional Nesto Advisors.</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Community build-up.</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Digital Marketing.</li>
                                    </div>
                                </div>
                                <span className='faq-span-3'>To know more about the benefits for Nesto Brokers, visit the Broker’s page on our website.</span>
                            </div>
                            : ''
                        }
                        {showFaq === 3 ?
                            <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                                <span className='faq-span-2'>What does NestoHub have for builders?</span>
                                <span className='faq-span-3'>NestoHub is a digital platform connecting brokers and builders, making real estate straightforward and more effective. Our application allows builders to share their inventory with a vast pool of brokers for quick sales with less hassle.</span>
                                <span className='faq-span-3'>NestoHub Builders have,</span>
                                <div className='t-c_box'>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Access to numerous brokers</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>No worries about handling brokers</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>A user-friendly dashboard for easy management</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Quick inventory sales</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Streamlined property management</li>
                                    </div>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/square-dot.png' alt='square-dot' className='t-c_span_dot' />
                                        <li className='t-c_li'>Promotional packages</li>
                                    </div>
                                </div>
                                <span className='faq-span-3'>To learn more about the benefits of Nesto Builders, visit the Builders page on our website.</span>
                            </div>
                            : ''
                        }
                        {showFaq === 4 ?
                            <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                                <span className='faq-span-2'>How NestoHub meets the loan requirements and why?</span>
                                <span className='faq-span-3'>NestoHub is a platform to revolutionize the real estate market with faster sales that profit everyone. We have tie-ups with credible loan agents who can get the most suitable financial assistance for the broker’s clients and help them buy the property ASAP.</span>
                                <span className='faq-span-3'>This helps our builders achieve quick sales and our brokers achieve higher brokerage.</span>
                            </div>
                            : ''
                        }
                        {showFaq === 5 ?
                            <div className='col-lg-6 col-md-12 col-sm-12 faq-col-2'>
                                <span className='faq-span-2'>Why am I not able to register as a loan agent on NestoHub?</span>
                                <span className='faq-span-3'>NestoHub is creating the accounts for loan agents via a rigid process that requires the loan agent to directly generate a query from the contact us page or reach out to us via any means. After following the procedure and gaining the credibility of the loan agent, the team will create the loan agent’s account and share the login credentials with them, via which they can log in to their NestoHub account.</span>
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