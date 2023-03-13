import React, {useEffect} from 'react'
import './ContactUsMain.css'
import Footer from '../../components/footer/Footer'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactForm from './ContactForm/ContactForm'
import InformativeNavbar from '../Navbar/Navbar'
import Aos from 'aos'

const ContactUsMain = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            {/* Navbar */}
            <InformativeNavbar />
            {/* ContactBanner */}
            <ContactBanner />
            {/* ContactForm */}
            <ContactForm />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default ContactUsMain