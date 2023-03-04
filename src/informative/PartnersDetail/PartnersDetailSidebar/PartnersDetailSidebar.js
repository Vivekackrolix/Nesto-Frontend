import React from 'react'
import './PartnersDetailSidebar.css';
import FirstCard from '../PartnersDetailSidebar/FirstCard/FirstCard'
import SecondCard from '../PartnersDetailSidebar/SecondCard/SecondCard'
import ThirdCard from '../PartnersDetailSidebar/ThirdCard/ThirdCard'

export default function PartnersDetailSidebar() {
    return (
        <>
            <div className='container-fluid partners-container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <FirstCard />
                            <SecondCard />
                            <ThirdCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}