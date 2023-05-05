import React from 'react'
import './BuilderPDlocation.css'
import Slider from 'react-slick';

const BuilderPDlocation = () => {
    
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
        centerMode: true,
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
                img: '/assets/informative/propertyDetails/dlfTower.svg',
                localities: 'DLF Tower',
                nickName: 'Shivaji Nagar',
                distance: '0.06 KM distance',
            },
            {
                img: '/assets/informative/propertyDetails/dlfTower.svg',
                localities: 'DLF Tower',
                nickName: 'Shivaji Nagar',
                distance: '0.06 KM distance',
            },
            {
                img: '/assets/informative/propertyDetails/dlfTower.svg',
                localities: 'DLF Tower',
                nickName: 'Shivaji Nagar',
                distance: '0.06 KM distance',
            },
            {
                img: '/assets/informative/propertyDetails/dlfTower.svg',
                localities: 'DLF Tower',
                nickName: 'Shivaji Nagar',
                distance: '0.06 KM distance',
            },
            {
                img: '/assets/informative/propertyDetails/dlfTower.svg',
                localities: 'DLF Tower',
                nickName: 'Shivaji Nagar',
                distance: '0.06 KM distance',
            },
        ]
    return (
        <div className='container BuilderPDlocation'>
            <Slider {...settings}>
                {localitySliderData.map((item) => (
                    <div className='container'>
                        <div className='col-lg-12 BuilderPDlocation-col gap-3'>
                            <div className='BuilderPDlocation-col_child-div'>
                                <img src={item.img} className='BuilderPDlocation-col_child-div_img' />
                            </div>
                            <div className='BuilderPDlocation-col_child-div'>
                                <span className='BuilderPDlocation-child-div_span-1'>{item.localities}</span>
                                <span className='BuilderPDlocation-child-div_span-2'>{item.nickName}</span>
                                <span className='BuilderPDlocation-child-div_span-3'>{item.distance}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BuilderPDlocation