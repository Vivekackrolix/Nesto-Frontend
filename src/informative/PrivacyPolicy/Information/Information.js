import React from 'react'
import './Information.css'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const Information = () => {
    return (
        <>
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>1. Information We Collect</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We may collect the following information from you:
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Personal information: This may include your name, address, email address, phone number, bank account, and other contact details.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2 mt-2'>
                                Property information: This may include information about the properties you are interested in, such as their location, size, and price.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2 mt-2'>
                                Usage data: We may collect information about how you use our platform, such as the pages you visit, the searches you conduct, and the listings you view.
                            </span>
                        </Fade>
                        {/* <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Voluntary information
                            </span>
                        </Fade> */}
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2 mt-2'>
                                Cookies: We may use cookies and similar technologies to collect information about your device and how you interact with our platform.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>2. How We Use Your Information</span>
                    </div>
                </Fade>
            </div>
            {/* Container 3 */}
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We may use your personal information to:
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Provide you with access to our platform and the properties listed on it.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span mt-2'>
                                Communicate with you about your listings, offers, and other inquiries.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Improve our platform and services.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2 mt-2'>
                                Conduct market research and analysis.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2 mt-2'>
                                Comply with legal and regulatory requirements.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>3. How We Share Your Information</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We may share your personal information with:
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Brokers and builders who have listed properties on our platform.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span mt-2'>
                                Third-party service providers who help us operate our platform and provide related services.
                            </span>
                        </Fade>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span2'>
                                Government authorities, regulators, or law enforcement officials when required by law.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Container Four */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>4. Your Rights</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                You have the right to access, modify, or delete your personal information at any time. If you would like to exercise any of these rights, please contact us at
                                <Link to='/'> info@nestohub.in.</Link>
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Countainer Five */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>5. Data Retention</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We will retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Countainer Six */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>6. Security</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee the security of your information.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Countainer Seven */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>7. Children's Data</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                Our platform is not intended for use by children under the age of 13. We do not knowingly collect or process personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will take steps to delete the information as soon as possible. If you believe that we may have collected personal information from a child under the age of 13, please contact us at
                                <Link> info@nestohub.in</Link>
                                so we can take appropriate action.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Countainer Eight */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>8. Changes to This Policy</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our platform.
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
            {/* Countainer Nine */}
            <div className='info_title-box'>
                <Fade up duration={1000} delay={100}>
                    <div className='container'>
                        <span className='info_title'>9. Contact Us</span>
                    </div>
                </Fade>
            </div>
            <div className='container p-p_info-container-2'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Fade up duration={1000} delay={100}>
                            <span className='info_span'>
                                If you have any questions or concerns about this Privacy Policy, please contact us at <Link to=''> info@nestohub.in.</Link>
                            </span>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information