import React, {useEffect} from 'react'
import ContactBanner from './ContactBanner/ContactBanner'
import InformativeNavbar from '../Navbar/Navbar'
import Aos from 'aos'
import InformativeFooter from './../InformativeFooter/InformativeFooter';

const ContactUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            {/* Navbar */}
            <InformativeNavbar />
            {/* ContactBanner */}
            <ContactBanner />
            {/* Footer */}
            <InformativeFooter />
        </>
    )
}

export default ContactUs