import React from 'react';
import InformativeNavbar from '../Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import PartnersDetailLeft from './PartnersDetailLeft/PartnersDetailLeft';
import PartnersDetailSidebar from './PartnersDetailSidebar/PartnersDetailSidebar';

export default function PartnersDetailsMain() {
    return (
        <>
            <InformativeNavbar/>
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