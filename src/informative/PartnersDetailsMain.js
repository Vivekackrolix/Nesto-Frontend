import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PartnersDetailLeft from './PartnersDetail/PartnersDetailLeft';
import PartnersDetailSidebar from './PartnersDetail/PartnersDetailSidebar/PartnersDetailSidebar';
export default function PartnersDetailsMain() {
    return (
        <>
            <Header />
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <PartnersDetailLeft />
                        </div>
                        <div className='col-lg-4'>
                            <PartnersDetailSidebar />
                        </div>
                    </div>    
                </div>
            <Footer />
        </>
    );
}