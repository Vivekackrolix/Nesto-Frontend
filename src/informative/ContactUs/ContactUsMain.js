import React from 'react'
import './ContactUsMain.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactForm from './ContactForm/ContactForm'

const ContactUsMain = () => {
    return (
        <>
            {/* Header */}
            <Header />
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