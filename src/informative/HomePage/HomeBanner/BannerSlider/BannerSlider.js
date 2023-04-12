import React from 'react'
import Slider from "react-slick";
import TextSlider from '../TextSlider/TextSlider';
import './BannerSlider.css'
// import { baseUrl } from "./config";

const BannerSlider = () => {
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
                <div className='slider-div'>
                    <Slider {...settings}>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img'/>
                            <img src='/assets/informative/cartoon.png' className='cartoon_img' />
                            <img src="/assets/informative/homeSlider-1.png" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/cartoon.png' className='cartoon_img' />
                            <img src="/assets/informative/homeSlider-2.jpg" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/cartoon.png' className='cartoon_img' />
                            <img src="/assets/informative/homeSlider-3.jpg" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/cartoon.png' className='cartoon_img' />
                            <img src="/assets/informative/homeSlider-4.jpeg" className='slider-img' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default BannerSlider