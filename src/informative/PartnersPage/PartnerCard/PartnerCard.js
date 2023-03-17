import React from 'react'
import './PartnerCard.css'
import { ImStarEmpty, ImStarFull } from 'react-icons/im'

const PartnerCard = () => {
    const data = [
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-1.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-2.png'
        },
        {
            heading : 'Puri Construction',
            subHeading : '134 properties listed',
            img: './assets/informative/partner-3.png'
        },
    ]
    return (
        <div className="container partner-card">
            <div className="row">
                {data.map((item) => {
                    return (
                        <div className="col-md-4">
                            <div className="partner-card-div" >
                                <div className="">
                                    <img className="partner-card-img-div" src={item.img} />
                                    <span className='partner-card-heading'>{item.heading}</span>
                                    <span className="partner-card-span">{item.subHeading}</span>
                                    <div className="flex partner-star-div">
                                        <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                                        <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                                        <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                                        <ImStarFull className="mx-1" fill="#FFB630" size={20} />
                                        <ImStarEmpty className="mx-1" fill="#FFB630" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default PartnerCard