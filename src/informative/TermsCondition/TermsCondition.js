import React, { useEffect } from 'react'
import Terms from './Terms/Terms';
import './TermsCondition.css'
import Aos from 'aos';
import InformativeNavbar from './../Navbar/Navbar';
import InformativeFooter from './../InformativeFooter/InformativeFooter';
import { Fade } from 'react-reveal'

const TermsCondition = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <InformativeNavbar />
            <div style={{ overflowX: 'hidden' }}>
                <div className='t-c_heading-box'>
                    <div className='container'>
                        <span className='t-c_heading'>Terms of Use</span>
                    </div>
                </div>
                <div className='container t-c_container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Fade up duration={1000} delay={100}>
                                <span className='t-c_span'>
                                    These terms of use ("Terms") constitute a legally binding agreement between you and Magicbricks Realty Services Limited (the "Company")
                                    regarding your use of the website www.magicbricks.com (the "Site") and any services offered by the Company including but not limited to
                                    delivery of content via the Site, any mobile or internet connected device or otherwise (the "the Service").
                                </span>
                            </Fade>
                            <Fade up duration={1000} delay={100}>
                                <span className='t-c_span'>
                                    Your use of the Site and services and tools are governed by the following Terms as applicable to the Company including the applicable policies which are incorporated herein by way of reference. By mere use of the Site, You shall be contracting with Magicbricks Realty Services Limited, the owner of the Platform. These terms and conditions including the policies constitute Your binding obligations, with Magicbricks.
                                </span>
                            </Fade>
                            <Fade up duration={1000} delay={100}>
                                <span className='t-c_span'>
                                    When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms and shall be considered as part and parcel of this Terms.
                                </span>
                            </Fade>
                            <Terms />
                        </div>
                    </div>
                </div>
            </div>
            <InformativeFooter />
        </>
    )
}

export default TermsCondition