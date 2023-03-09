// import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import './testimonials.css'
// import testimonialimage from "../../public/assets/testimonialimage.png";
// import quote from "../../public/assets/quote.png"
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Heading from "../heading/Heading";
// import Heading from "./common/Heading";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Heading from "../common/Heading";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red",borderRadius:"50%",padding:"1px" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red",borderRadius:"50%",padding:"1px" }}
//       onClick={onClick}
//     />
//   );
// }

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
    {
        id: 4,
        testname: "Jacob William",
        desc: "Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    },
    {
        id: 5,
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
        // autoplay: true,
        // centerMode: true,
        // centerPadding: "60px",
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,

        loop: true,
        autoplay: true,
        autoplaySpeed: 0,
        accessibility: true,
        cssEase: "linear",
        swipeToSlide: true,
        // nextArrow: <SampleNextArrow />,
        //   prevArrow: <SamplePrevArrow />,

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
        <div className=" main-testimonial-body py-5">
            <div className="inner-body  d-flex flex-row-reverse ">
                {/* <Image src={quote} className="w-36 h-36 opacity-20" /> */}

                <img src="./assets/quote.png" alt="" />
            </div>
            <div className="pt-12 heading">
            {/* <
               title="Our Testimonial"
               sub="What Our Customer Say About Us"
               /> */}
               <Heading className="mt-4" title="Our Testimonial"
               sub="What Our Customer Say About Us"
               />
            </div>
            <div className="space-y-12 slider ">
                <Slider {...settings} className="max-w-5xl mx-auto">
                    {review.map((obj, e) => {
                        return (
                            <div key={e} className="px-4 py-8">
                                <div className="test-card    card outer border-1 border-[#1d1c1c] p-5 space-y-12 rounded-xl drop-shadow-sm shadow-lg  bg-white group hover:bg-primary">
                                    <p className="text-sm text-black/50 group-hover:text-white">{obj.desc}</p>
                                    <div className="d-flex gap-2 justify-end">
                                        <div className="font-semibold group-hover:text-white">
                                            <h2 className="text-sm"> {obj.testname}</h2>
                                            <p className="text-black/50 text-xs">CEO of Google</p>
                                            <div className="flex">
                                                <FaStar fill="#FFB630" size={12} />
                                                <FaStar fill="#FFB630" size={12} />
                                                <FaStar fill="#FFB630" size={12} />
                                                <FaStar fill="#FFB630" size={12} />
                                                <AiOutlineStar color="#FFB630" size={14} />
                                            </div>
                                        </div>
                                        <img className="person-image" src="./assets/person.png" alt="" />
                                        {/* <Image src={testimonialimage} className="w-16 h-16" /> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
