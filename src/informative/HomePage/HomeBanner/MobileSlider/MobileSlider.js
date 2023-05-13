import React from 'react'
import Slider from "react-slick";
import './MobileSlider.css'

const MobileSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <>
            <div className='mobile-slider'>
                <div className='mobile-slider-div'>
                    <Slider {...settings}>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/1.png" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/2.png" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/2.png" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/2.png" className='mobile-slider-img' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default MobileSlider