import React, { useState } from 'react'
import './CurrentProjects.css'
import Slider from 'react-slick';
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from 'react-icons/md';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

const CurrentProjects = () => {
    const [heart, setHeart] = useState(false)
    function heartChange() {
        setHeart(true)
    }
    function heartUndo() {
        setHeart(false)
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
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
            {
                img: "/assets/property-img.png",
                propertyName: "Eaton Garth Penthouse",
                rating: "images",
                address: "2,3 BHK Apartment in Sector 104, Gurgaon",
                price: "Price Range ₹ 90 Lac - 1.7 Crore",
                tag: 'Rera'
            },
        ]
    return (
        <div className='container current-project_slider mt-5 shdow-sm rounded-4'>
            <p className='partners-sections_headings'>Current Projects</p>
            <Slider {...settings}>
                {projectSliderData.map((item) => (
                    <div className='container'>
                        <div className='row p-2'>
                            <div className='d-flex shadow-sm p-0 rounded-3'>
                                <div className='col-lg-6 current-project-slider_col-1'>
                                    <div className='h-100'>
                                        <span className='current-project-slider_tag'>{item.tag}</span>
                                        <img src={item.img} className='current-project-slider_img' />
                                        <span
                                            className='current-project-slider_icon1'
                                            onClick={heartChange}
                                        > <AiOutlineHeart />
                                        </span>
                                        {heart == true
                                            ?
                                            <span
                                                className='current-project-slider_icon2'
                                                onClick={heartUndo}
                                            > <AiTwotoneHeart /></span>
                                            : ''
                                        }
                                    </div>
                                </div>
                                <div className='col-lg-6 current-project_col-2'>
                                    <span className='current-project_span-1'>{item.propertyName}</span>
                                    <span>
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarPurple500 className='current-project_star' />
                                        <MdOutlineStarOutline className='current-project_star' />
                                    </span>
                                    <span className='current-project_span-2'>{item.address}</span>
                                    <span className='current-project_span-3'>{item.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CurrentProjects