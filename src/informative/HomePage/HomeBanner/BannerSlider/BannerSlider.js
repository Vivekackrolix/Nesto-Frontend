import React from 'react'
import Slider from "react-slick";
import './BannerSlider.css'

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
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/characterNew.svg' className='cartoon_img' />
                            <img src="/assets/informative/1.png" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/characterNew.svg' className='cartoon_img' />
                            <img src="/assets/informative/2.png" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/characterNew.svg' className='cartoon_img' />
                            <img src="/assets/informative/3.png" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/characterNew.svg' className='cartoon_img' />
                            <img src="/assets/informative/4.png" className='slider-img' />
                        </div>
                        <div className='d-flex slider-div-2'>
                            <img src='/assets/informative/curve-arrow.png' className='arrow-img' />
                            <img src='/assets/informative/characterNew.svg' className='cartoon_img' />
                            <img src="/assets/informative/5.png" className='slider-img' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default BannerSlider