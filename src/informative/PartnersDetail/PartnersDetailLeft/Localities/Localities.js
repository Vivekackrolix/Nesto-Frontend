import React from 'react'
import './Localities.css'
import Slider from 'react-slick';

const PastProjects = () => {
    // =============================
    // ========= Slick Customization
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    borderRadius: '50%',
                    padding: '1px 0px',
                }}
                onClick={onClick}
            >
                <img className="next-image" src="/assets/next.png" alt="next" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    borderRadius: '50%',
                    padding: '1px 0px',
                }}
                onClick={onClick}
            >
                <img className="prev-image" src="/assets/next.png" alt="next" />
            </div>
        );
    }
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }]
    };
    const localitySliderData =
        [
            {
                localities: 'Sector 49, Gurgaon',
                price: ' Land from ₹95,000',
                img: '/assets/informative/locality1.png',
                rating: 4.3,
            },
            {
                localities: 'Sector 49, Gurgaon',
                price: ' Land from ₹95,000',
                img: '/assets/informative/locality1.png',
                rating: 4.3,
            },
            {
                localities: 'Sector 49, Gurgaon',
                price: ' Land from ₹95,000',
                img: '/assets/informative/locality1.png',
                rating: 4.3,
            },
            {
                localities: 'Sector 49, Gurgaon',
                price: ' Land from ₹95,000',
                img: '/assets/informative/locality1.png',
                rating: 4.3,
            },
            {
                localities: 'Sector 49, Gurgaon',
                price: ' Land from ₹95,000',
                img: '/assets/informative/locality1.png',
                rating: 4.3,
            },
        ]
    return (
        <div className='container locality_slider mt-5 shdow-sm rounded-4' data-aos='zoom-in'>
            <p className='partners-sections_headings'>Localities you may like</p>
            <Slider {...settings}>
                {localitySliderData.map((item) => (
                    <div className='container'>
                        <div className='row locality_slider_row'>
                            <div className='col-lg-6 rounded-3 p-3 locality-slider_col-2 gap-4'>
                                <div className=''>
                                    <img src={item.img} className='locality-slider_img' alt='locality-slider' />
                                </div>
                                <div className=''>
                                    <span className='locality-slider_span-1'>{item.localities}</span>
                                    <span className='locality-slider_span-2'>{item.price}</span>
                                </div>
                                <div className='locality-slider_box'>
                                    <span className='locality-slider_span-3'>
                                        {item.rating} ☆
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PastProjects