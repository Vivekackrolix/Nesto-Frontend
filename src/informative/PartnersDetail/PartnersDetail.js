import React from 'react'
import './PartnersDetail.css';
export default function PartnersDetail() {
    return (
        <>
            <div className='container-fluid partners-container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src='./assets/property-screen-img1.png' className='partners-img' />
                    </div>
                    <div className='col-lg-6'>
                        <img src='./assets/property-screen-img2.png' className='partners-img partners-img-2 pb-3' />
                        <img src='./assets/property-screen-img3.png' className='partners-img partners-img-2' />
                    </div>
                </div>
                <div className='col-lg-12 d-flex justify-content-start'>
                    <div>
                        <img src='./assets/realEstate.png' />
                    </div>
                    <div>
                        <p>Puri Construction</p>
                        <p>Gurgaon | Noida | Gujarat | Delhi NCR | Kolkata | Punjab</p>
                    </div>
                </div>
            </div>
        </>
    );
}