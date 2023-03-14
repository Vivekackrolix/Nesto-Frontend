import React from 'react'
import Slider from "react-slick";
import './TextSlider.css'

const TextSlider = () => {
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
        <div>
            <div className='text-slider'>
                <Slider {...settings}>
                    <div className='d-flex'>
                        <div className='text-slider-div'>
                            <span className='text-slider-div-span'>Looking for the Best broker for your New Home</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-slider-div'>
                            <span className='text-slider-div-span'>Looking for the Best broker for your</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-slider-div'>
                            <span className='text-slider-div-span'>Looking for the New Home</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='text-slider-div'>
                            <span className='text-slider-div-span'>Looking for the broker for your New Home</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default TextSlider