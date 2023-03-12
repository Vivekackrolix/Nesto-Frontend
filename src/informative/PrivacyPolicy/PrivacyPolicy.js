import React, { useState, useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Information from './Information/Information';
import './PrivacyPolicy.css'
import Aos from 'aos';

const PrivacyPolicy = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div style={{ overflowX: 'hidden' }}>
                <Navbar expand="lg" bg='light' className="t-c_navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="/assets/nesto-logo.png" className="t-c_brand-img" />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                {/* Navbar-end=================
            =========================== */}
                <div className='p-p_heading-box' data-aos='fade-right'>
                    <div className='container'>
                        <span className='p-p_heading'>Privacy Policy</span>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <span className='p-p_span' data-aos='fade-left'>
                                This privacy policy ("Policy") explains the policy regarding the collection, use, disclosure and transfer of your information by Magicbricks Realty Services Limited and/or its subsidiary(ies) and/or affiliate(s) (collectively referred to as the "Company"), which operates various websites, including sub-sites, platforms, applications, m-web platforms and other platforms (collectively referred to as "Sites") for delivery of information, products, offerings and content via any mobile or internet connected device or otherwise (collectively the "Services"). This Policy forms part and parcel of the Terms of Use and other terms on the Site ("Terms of Use"). Capitalized terms which have been used here but are undefined shall have the same meaning as attributed to them in the Terms of Use. This policy is effective from the date and time a user registers with Site and accept the terms and conditions laid out in the Site. Please read this Privacy Policy and our Terms of Use carefully before using our Services.
                            </span>
                            <span className='p-p_span' data-aos='fade-right'>
                                Magicbricks respects the privacy of its users and is committed to protect it in all respects. With a view to offer most enriching and holistic internet experience to its users Magicbricks offers a vast repository of Online Sites and variety of community services. The information about the user as collected by Magicbricks is: (a) information supplied by users and (b) information automatically tracked while navigation
                            </span>
                            <span className='p-p_span2' data-aos='fade-right'>
                                <span className='p-p_span2'>(Information).</span>
                                By using Magicbricks website or its services, you consent to collection, storage, use, transfer, share and distribute the personal information you provide (including any changes thereto as provided by you) for any of the services that we offer.
                            </span>
                        </div>
                    </div>
                </div>
                <Information />
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

export default PrivacyPolicy