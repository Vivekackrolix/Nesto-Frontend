import React, { useEffect, useState } from 'react'
import './PartnersDetailLeft.css';
import PuriConstruction from './PuriConstruction/PuriConstruction'
import CurrentProjects from './CurrentProjects/CurrentProjects';
import PastProjects from './PastProjects/PastProjects';
import Localities from './Localities/Localities'
import AboutBuilder from './AboutBuilder/AboutBuilder'
import ReviewCard from './ReviewsRatings/ReviewCard/ReviewCard';
import RatingChart from './ReviewsRatings/RatingChart/RatingChart';
import ListProperty from '../ListProperty/ListProperty';
import Aos from 'aos';
import 'aos/dist/aos.css'
import AllimageVideosPopUp from './AllimageVideosPopUp/AllimageVideosPopUp';
import IndoorImagePopUp from './IndoorImagePopUp/IndoorImagePopUp';
import OutdoorImagePopUp from './OutdoorImagePopUp/OutdoorImagePopUp';

export default function PartnersDetailLeft() {
    const [firstPopUp, setFirstPopUp] = useState(false)
    const [secondPopUp, setSecondPopUp] = useState(false)
    const [thirdPopUp, setThirdPopUp] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <>
            <div className='container-fluid partners-container'>
                <div className='row' data-aos='fade-right'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div className='partners-container_box-3' onClick={() => setFirstPopUp(true)}>
                            <span className='partners-container_span-1'>All Photos & Videos</span>
                            <span className='partners-container_span-1'>16 Photos</span>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div className='partners-container_box-1' onClick={() => setSecondPopUp(true)}>
                            <span className='partners-container_span-1'>Indoor</span>
                            <span className='partners-container_span-1'>10 Photos</span>
                        </div>
                        <div className='partners-container_box-2' onClick={() => setThirdPopUp(true)}>
                            <span className='partners-container_span-1'>Outdoor</span>
                            <span className='partners-container_span-1'>14 Photos</span>
                        </div>
                    </div>
                </div>
                {/*Puri Construction=============
                ============================= */}
                <PuriConstruction />
                {/*Description==================
                ============================= */}
                <div className='partners-container_box border rounded-4 mt-5' data-aos='fade-right'>
                    <span className='partners-container_span-5'>Description</span>
                    <hr className='partners-container-hr' />
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
                {/* List Property ====================== */}
                <ListProperty />
                {/*About the Builder ==================
                =================================== */}
                <AboutBuilder />
                {/* Ratings ===========
                =================== */}
                <RatingChart />
                {/* Reviews ========
                ================ */}
                <ReviewCard />
                {/* Modal ****************************
                ********************************** */}
                <AllimageVideosPopUp
                    show={firstPopUp}
                    onHide={() => setFirstPopUp(false)}
                />
                <IndoorImagePopUp
                    show={secondPopUp}
                    onHide={() => setSecondPopUp(false)}
                />
                <OutdoorImagePopUp
                    show={thirdPopUp}
                    onHide={() => setThirdPopUp(false)}
                />
            </div>
        </>
    );
}