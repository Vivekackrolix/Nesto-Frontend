import React from 'react';
import InformativeNavbar from '../Navbar/Navbar'
import PartnersDetailLeft from './PartnersDetailLeft/PartnersDetailLeft';
import PartnersDetailSidebar from './PartnersDetailSidebar/PartnersDetailSidebar';
import InformativeFooter from '../InformativeFooter/InformativeFooter'

export default function PartnersDetailsMain() {
    return (
        <>
            <InformativeNavbar />
            <div className="container" style={{ overflowX: 'hidden' }}>
                <div className='row'>
                    <div className='col-lg-8'>
                        <PartnersDetailLeft />
                    </div>
                    <div className='col-lg-4'>
                        <PartnersDetailSidebar />
                    </div>
                </div>
            </div>
            <InformativeFooter />
        </>
    );
}