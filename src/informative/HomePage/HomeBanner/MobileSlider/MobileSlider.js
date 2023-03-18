import React from 'react'
import Slider from "react-slick";
import './MobileSlider.css'
import MobileTextSlider from '../MobileTextSlider/MobileTextSlider'
// import { baseUrl } from "./config";

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
            <div>
                <div className='mobile-slider_div'>
                    <Slider {...settings}>
                        <div className='mobile-slider_div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='mobile-arrow' />
                            <img src='/assets/informative/Mobilecartoon.png' className='mobile-cartoon-img' />
                            <img src="/assets/informative/homeSlider-1.png" className='mobile-slider-img' />
                        </div>
                        <div className='mobile-slider_div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='mobile-arrow' />
                            <img src='/assets/informative/Mobilecartoon.png' className='mobile-cartoon-img' />
                            <img src="/assets/informative/homeSlider-2.jpg" className='mobile-slider-img' />
                        </div>
                        <div className='mobile-slider_div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='mobile-arrow' />
                            <img src='/assets/informative/Mobilecartoon.png' className='mobile-cartoon-img' />
                            <img src="/assets/informative/homeSlider-3.jpg" className='mobile-slider-img' />
                        </div>
                        <div className='mobile-slider_div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='mobile-arrow' />
                            <img src='/assets/informative/Mobilecartoon.png' className='mobile-cartoon-img' />
                            <img src="/assets/informative/homeSlider-4.jpeg" className='mobile-slider-img' />
                        </div>
                    </Slider>
                </div>
            </div>
            <MobileTextSlider />
        </>
    )
}

export default MobileSlider