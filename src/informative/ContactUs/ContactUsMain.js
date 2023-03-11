import React from 'react'
import './ContactUsMain.css'
import Footer from '../../components/footer/Footer'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactForm from './ContactForm/ContactForm'
import InformativeNavbar from '../Navbar/Navbar'

const ContactUsMain = () => {
    return (
        <>
            {/* Navbar */}
            <InformativeNavbar/>
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