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
                            <img src="/assets/informative/homeSlider-1.png" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/homeSlider-2.jpg" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/homeSlider-3.jpg" className='mobile-slider-img' />
                        </div>
                        <div className='d-flex mobile-slider-div-2'>
                            <img src="/assets/informative/homeSlider-4.jpeg" className='mobile-slider-img' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default MobileSlider