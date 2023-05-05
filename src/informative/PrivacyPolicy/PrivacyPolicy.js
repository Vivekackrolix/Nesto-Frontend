import React from 'react'
import Information from './Information/Information';
import './PrivacyPolicy.css'
import InformativeFooter from '../InformativeFooter/InformativeFooter';
import InformativeNavbar from '../Navbar/Navbar';
import { Fade } from 'react-reveal';

const PrivacyPolicy = () => {
    return (
        <>
            <InformativeNavbar />
            <div style={{ overflowX: 'hidden' }}>
                <Fade up duration={1000} delay={100}>
                    <div className='p-p_heading-box'>
                        <div className='container'>
                            <span className='p-p_heading'>Privacy Policy</span>
                        </div>
                    </div>
                </Fade>
                <div className='container p-p_container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Fade up duration={1000} delay={100}>
                                <span className='p-p_span'>
                                    This privacy policy ("Policy") explains the policy regarding the collection, use, disclosure and transfer of your information by Magicbricks Realty Services Limited and/or its subsidiary(ies) and/or affiliate(s) (collectively referred to as the "Company"), which operates various websites, including sub-sites, platforms, applications, m-web platforms and other platforms (collectively referred to as "Sites") for delivery of information, products, offerings and content via any mobile or internet connected device or otherwise (collectively the "Services"). This Policy forms part and parcel of the Terms of Use and other terms on the Site ("Terms of Use"). Capitalized terms which have been used here but are undefined shall have the same meaning as attributed to them in the Terms of Use. This policy is effective from the date and time a user registers with Site and accept the terms and conditions laid out in the Site. Please read this Privacy Policy and our Terms of Use carefully before using our Services.
                                </span>
                            </Fade>
                            <Fade up duration={1000} delay={100}>
                                <span className='p-p_span'>
                                    Magicbricks respects the privacy of its users and is committed to protect it in all respects. With a view to offer most enriching and holistic internet experience to its users Magicbricks offers a vast repository of Online Sites and variety of community services. The information about the user as collected by Magicbricks is: (a) information supplied by users and (b) information automatically tracked while navigation
                                </span>
                            </Fade>
                            <Fade up duration={1000} delay={100}>
                                <span className='p-p_span2'>
                                    <span className='p-p_span2'>(Information).</span>
                                    By using Magicbricks website or its services, you consent to collection, storage, use, transfer, share and distribute the personal information you provide (including any changes thereto as provided by you) for any of the services that we offer.
                                </span>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Information />
            </div>
            <InformativeFooter />
        </>
    )
}

export default PrivacyPolicy