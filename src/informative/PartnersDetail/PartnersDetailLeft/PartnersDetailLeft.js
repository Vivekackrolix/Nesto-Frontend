import React, { useState } from 'react'
import './PartnersDetailLeft.css';
import PuriConstruction from './PuriConstruction/PuriConstruction'
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Localities from './Localities/Localities'
import AboutBuilder from './AboutBuilder/AboutBuilder'
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewsRatings/ReviewCard/ReviewCard';
import RatingChart from './ReviewsRatings/RatingChart/RatingChart';

export default function PartnersDetailLeft() {
    return (
        <>
            <div className='container-fluid partners-container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='partners-container_box-3'>
                            <span className='partners-container_span-1'>All Photos & Videos</span>
                            <span className='partners-container_span-1'>16 Photos</span>
                        </div>
                    </div>
                    <div className='col-lg-6 rounded-3'>
                        <div className='partners-container_box-1'>
                            <span className='partners-container_span-1'>Indoor</span>
                            <span className='partners-container_span-1'>10 Photos</span>
                        </div>
                        <div className='partners-container_box-2'>
                            <span className='partners-container_span-1'>Outdoor</span>
                            <span className='partners-container_span-1'>14 Photos</span>
                        </div>
                    </div>
                </div>
                {/*Puri Construction==================
                ============================= */}
                <PuriConstruction />
                {/*Description==================
                ============================= */}
                <div className='partners-container_box shadow-sm rounded-4 mt-5'>
                    <span className='partners-container_span-5'>Description</span>
                    <hr />
                    <span className='partners-container_span-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </span>
                </div>
                {/* Current Projects========================
                ======================================== */}
                <CurrentProjects />
                {/* Past Projects========================
                ======================================== */}
                <PastProjects />
                {/* Localities========================
                ================================== */}
                <Localities />
                {/* Listing Button */}
                <div className='listing-container shadow-sm rounded-4 mt-5 d-flex'>
                    <div className='col-lg-7 listing-container_col-1'>
                        <span className='listing-container_span'>Start listing or Selling a Property with NestoHub</span>
                        <Link to='/' className='listing-container_link rounded-3'>
                            <span>List your Property</span>
                        </Link>
                    </div>
                    <div className='col-lg-5 listing-container_col-2'>
                        <img src='/assets/informative/listing1.png' className='listing-container_img' />
                    </div>
                </div>
                {/*About the Builder ==================
                =================================== */}
                <AboutBuilder />
                {/* Reviews&Ratings ===========
                =========================== */}
                <RatingChart />
                <ReviewCard />
            </div>
        </>
    );
}