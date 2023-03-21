// import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import './Testimonials.css'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Heading from "../Heading/Heading";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", borderRadius: "50%", padding: "1px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", borderRadius: "50%", padding: "1px" }}
            onClick={onClick}
        />
    );
}

const review = [
    {
        id: 1,
        testname: "Jacob William",
        desc: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    },
    {
        id: 2,
        testname: "Jacob William",
        desc: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    },
    {
        id: 3,
        testname: "Jacob William",
        desc: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    },
];

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 7000,
        accessibility: true,
        cssEase: "linear",
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <>
            <div className=" main-testimonial-body py-5">
                <div className="quote-image d-flex flex-row-reverse ">
                    <img src="./assets/quote.png" alt="" />
                </div>
                <div className="heading">
                    <Heading className="mt-4" title="Our Testimonial"
                        sub="What Our Customer Say About Us"
                    />
                </div>
                <div className="container">
                    <div className="slider">
                        <Slider {...settings} className="mx-auto">
                            {review.map((obj, e) => {
                                return (
                                    <>
                                        <div key={e} className="px-3 pb-4" data-aos='fade-up' >
                                            <div className="test-card">
                                                <p className="testimonial-desc">{obj.desc}</p>
                                                <div className="d-flex mt-4 gap-3 justify-content-end">
                                                    <div className="card-box">
                                                        <span className="test-name justify-content-end"> {obj.testname}</span>
                                                        <span className="test-company justify-content-end">CEO of Google</span>
                                                        <div className="d-flex justify-content-end">
                                                            {Array.from({ length: 5 }, (_, index) => {
                                                                if (index < 4) {
                                                                    return <FaStar key={index} fill="#FFB630" size={16} />;
                                                                }
                                                                return <AiOutlineStar color="#FFB630" size={18} />
                                                            })}

                                                        </div>
                                                    </div>
                                                    <img className="person-image" src="./assets/person.png" alt="" />
                                                    {/* <Image src={testimonialimage} className="w-16 h-16" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
