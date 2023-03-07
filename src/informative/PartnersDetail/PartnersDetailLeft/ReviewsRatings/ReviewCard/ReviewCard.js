import React, { useState } from 'react'
import './ReviewCard.css'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ReviewCard = () => {
    const [showMore, setShowMore] = useState(false)
    function show() {
        setShowMore(true)
    }
    function hide() {
        setShowMore(false)
    }
    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        // centerMode: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    };
    const projectSliderData =
        [
            {
                img: "/assets/property-img.png",
                review: 'Good area lighting proper light installation on the road. good hospital schools and colleges are nearby from locality. vegetable markets are at walkable distance',
                createdDate: 'Vimal Thakur, Tenant | 28/12/2022',
            },
            {
                img: "/assets/property-img.png",
                review: 'Good area lighting proper light installation on the road. good hospital schools and colleges are nearby from locality. vegetable markets are at walkable distance',
                createdDate: 'Vimal Thakur, Tenant | 28/12/2022',
            },
            {
                img: "/assets/property-img.png",
                review: 'Good area lighting proper light installation on the road. good hospital schools and colleges are nearby from locality. vegetable markets are at walkable distance',
                createdDate: 'Vimal Thakur, Tenant | 28/12/2022',
            },
            {
                img: "/assets/property-img.png",
                review: 'Good area lighting proper light installation on the road. good hospital schools and colleges are nearby from locality. vegetable markets are at walkable distance',
                createdDate: 'Vimal Thakur, Tenant | 28/12/2022',
            },
            {
                img: "/assets/property-img.png",
                review: 'Good area lighting proper light installation on the road. good hospital schools and colleges are nearby from locality. vegetable markets are at walkable distance',
                createdDate: 'Vimal Thakur, Tenant | 28/12/2022',
            },
        ]
    return (
        <div className='container reviews_slider mt-5 shdow-sm rounded-4'>
            <Slider {...settings}>
                {projectSliderData.map((item) => (
                    <div className='container'>
                        <div className='row p-2'>
                            <div className='d-flex shadow-sm p-0 rounded-3'>
                                <div className='col-lg-6 reviews_slider-col'>
                                    <div className='reviews_slider-box1'>
                                        <img src='/assets/informative/userRating1.png' className='reviews_slider-userImg' />
                                    </div>
                                    <div className='reviews_slider-box2'>
                                        <span className='reviews_slider-span1'>{item.review}</span>
                                        {showMore === true ?
                                            <span className='reviews_slider-span1'> {item.review}</span>
                                            : ''
                                        }
                                        {showMore === true ?
                                            <span
                                                onClick={hide}
                                                className='reviews_slider-span2'> Hide More
                                            </span>
                                            :
                                            <span
                                                onClick={show}
                                                className='reviews_slider-span2'> Show More
                                            </span>
                                        }
                                    </div>
                                    <div className='reviews_slider-box3'>
                                        <span className='reviews_slider-span3'>
                                            {item.createdDate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ReviewCard