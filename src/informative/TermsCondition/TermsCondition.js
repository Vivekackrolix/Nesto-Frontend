import React, { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import Terms from './Terms/Terms';
import './TermsCondition.css'
import Aos from 'aos';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div style={{ overflowX: 'hidden' }}>
                <Navbar expand="lg" bg='light' className="t-c_navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to='/'> <img src="/assets/nesto-logo.png" className="t-c_brand-img" alt='nesto-logo' /></Link>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                {/* Navbar-end=================
            =========================== */}
                <div className='t-c_heading-box' data-aos='fade-up'>
                    <div className='container'>
                        <span className='t-c_heading'>Terms of Use</span>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <span className='t-c_span' data-aos='fade-up'>
                                These terms of use ("Terms") constitute a legally binding agreement between you and Magicbricks Realty Services Limited (the "Company")
                                regarding your use of the website www.magicbricks.com (the "Site") and any services offered by the Company including but not limited to
                                delivery of content via the Site, any mobile or internet connected device or otherwise (the "the Service").
                            </span>
                            <span className='t-c_span' data-aos='fade-up'>
                                Your use of the Site and services and tools are governed by the following Terms as applicable to the Company including the applicable policies which are incorporated herein by way of reference. By mere use of the Site, You shall be contracting with Magicbricks Realty Services Limited, the owner of the Platform. These terms and conditions including the policies constitute Your binding obligations, with Magicbricks.
                            </span>
                            <span className='t-c_span' data-aos='fade-up'>
                                When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms and shall be considered as part and parcel of this Terms.
                            </span>
                            <Terms />
                        </div>
                    </div>
                </div>
                <div className='t-c_heading-box mt-5 text-center' data-aos='fade-up'>
                    <div className='container'>
                        <span className='t-c_heading'>Your Trusted Partner in Property Search</span>
                    </div>
                </div>
                <div className='t-c_footer-box'> 
                    <span className='t-c_footer'>All trademarks, logos and names are properties of their respective owners. All Rights Reserved.© Copyright 2023 NestHub Realty Services Limited. Terms of use</span>
                </div>
            </div>
        </>
    )
}

export default TermsCondition