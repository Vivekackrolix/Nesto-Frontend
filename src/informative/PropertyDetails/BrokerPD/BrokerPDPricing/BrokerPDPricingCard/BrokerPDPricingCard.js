import React from 'react'
import './BrokerPDPricingCard.css'
import Slider from 'react-slick';

const BrokerPDPricingCard = () => {
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
        autoplay: false,
        arrows: true,
        speed: 600,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const localitySliderData =
        [
            {
                img: '/assets/informative/propertyDetails/location.svg',
                name: 'Super Built-Up Area',
                size: '1413 Sq.ft.',
                price: '₹ 3.94 Cr',
                pricePer: '(5,000/sq.ft.)',
                size2: '(130.6 sq.m.)',
                bhk: '2BHK',
                id: 1
            },
            {
                img: '/assets/informative/propertyDetails/location.svg',
                name: 'Super Built-Up Area',
                size: '1413 Sq.ft.',
                price: '₹ 3.94 Cr',
                pricePer: '(5,000/sq.ft.)',
                size2: '(130.6 sq.m.)',
                bhk: '4BHK',
                id: 2
            },
            {
                img: '/assets/informative/propertyDetails/location.svg',
                name: 'Super Built-Up Area',
                size: '1413 Sq.ft.',
                price: '₹ 3.94 Cr',
                pricePer: '(5,000/sq.ft.)',
                size2: '(130.6 sq.m.)',
                bhk: '3BHK',
                id: 3
            },
            {
                img: '/assets/informative/propertyDetails/location.svg',
                name: 'Super Built-Up Area',
                size: '1413 Sq.ft.',
                price: '₹ 3.94 Cr',
                pricePer: '(5,000/sq.ft.)',
                size2: '(130.6 sq.m.)',
                bhk: '6BHK',
                id: 4
            },
            {
                img: '/assets/informative/propertyDetails/location.svg',
                name: 'Super Built-Up Area',
                size: '1413 Sq.ft.',
                price: '₹ 3.94 Cr',
                pricePer: '(5,000/sq.ft.)',
                size2: '(130.6 sq.m.)',
                bhk: '2BHK',
                id: 5
            },
        ]
    return (
        <div className='container BrokerPDPricingCard'>
            <Slider {...settings}>
                {localitySliderData?.map((item) => (
                    <>
                        <div className='container'>
                            <div className='col-lg-12 BrokerPDPricingCard-col d-flex gap-4'>
                                <div className='BrokerPDPricingCard-div_1'>
                                    <div className='BrokerPDPricingCard-div_2'>
                                        <img src={item.img} alt='img' className='BrokerPDPricingCard-location_img' />
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-between mt-3'>
                                            <div>
                                                <span className='BrokerPDPricingCard-span_1'>{item.name}</span>
                                                <span className='BrokerPDPricingCard-span_2'>{item.size}</span>
                                                <span className='BrokerPDPricingCard-span_4'>{item.size2}</span>
                                            </div>
                                            <div className='text-right'>
                                                <span className='BrokerPDPricingCard-span_1'>Price</span>
                                                <span className='BrokerPDPricingCard-span_2'>{item.price}</span>
                                                <span className='BrokerPDPricingCard-span_3'> {item.pricePer}</span>
                                                <span className='BrokerPDPricingCard-span_4'>+Govt. Charges</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='BrokerPDPricingCard-div_3'>
                                        <span className='BrokerPDPricingCard-span_5'>{item.bhk} #{item.id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </Slider>
        </div>
    )
}

export default BrokerPDPricingCard