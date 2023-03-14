import React from 'react'
import './RatingChart.css'
import { MdOutlineStarPurple500, MdOutlineStarOutline } from 'react-icons/md'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RatingChart = () => {
    const ratingData = [
        {
            number: '5',
            percentage: '95%'
        },
        {
            number: '4',
            percentage: '80%'
        },
        {
            number: '3',
            percentage: '30%'
        },
        {
            number: '2',
            percentage: '13%'
        },
        {
            number: '1',
            percentage: '6%'
        },
    ]
    const ChartData = [
        {
            number: 4.3,
            percentage: 66,
            name: 'Environment',
            outOf: '4.3 Out of 5'
        },
        {
            number: 2.3,
            percentage: 30,
            name: 'Safety',
            outOf: '4.3 Out of 5'
        },
        {
            number: 5.3,
            percentage: 89,
            name: 'Lifestyle',
            outOf: '3.8 Out of 5'
        },
        {
            number: 3.3,
            percentage: 12,
            name: 'Connectivity',
            outOf: '4.7 Out of 5'
        },
        {
            number: 4.3,
            percentage: 44,
            name: 'Lifestyle    ',
            outOf: '2.3 Out of 5'
        },
    ]
    const percentage = 66;
    return (
        <>
            <div className='container rating-chart'>
                <p className='partners-sections_headings' data-aos='fade-right'>Rating & Review</p>
                <div className='row rating-chart_box1'>
                    {/* <div className='rating-chart_box1'> */}
                    <div className='col-lg-6' data-aos='fade-right'>
                        <div className='rating-chart_box2'>
                            <div className='rating-chart_box3'>
                                <span className='rating-chart_span1'>4.0<span className='rating-chart_span2'>/5</span></span>
                                <div className='rating-chart_box4'>
                                    <MdOutlineStarPurple500 className='rating-chart_star' />
                                    <MdOutlineStarPurple500 className='rating-chart_star' />
                                    <MdOutlineStarPurple500 className='rating-chart_star' />
                                    <MdOutlineStarPurple500 className='rating-chart_star' />
                                    <span><MdOutlineStarOutline className='rating-chart_star' /></span>
                                </div>
                                <span className='rating-chart_span3'>(893 Reviews)</span>
                            </div>
                            <div className='rating-chart_box5'>
                                {ratingData.map((item) => {
                                    return (
                                        <div className='rating-chart_box6'>
                                            <span className='rating-chart_span4'>{item.number}</span>
                                            <div className="rating-chart_box7">
                                                <div className="rating-chart_box8" style={{ width: `${item.percentage}` }}></div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 rating-chart_box9' data-aos='fade-right'>
                        <span className='rating-chart_span5'>Ratings by Features</span>
                        {/* <div className='row'> */}
                        <div className='col-lg-12 d-flex flex-wrap rating-chart_box10 gap-2'>
                            {ChartData.map((item, index) => {
                                return (
                                    <div className='col-lg-4 rating-chart_box11 gap-2'>
                                        <div className='rating-chart_box12'>
                                            <CircularProgressbar value={item.percentage} text={item.number} strokeWidth={10} />
                                        </div>
                                        <div>
                                            <span className='rating-chart_span6'>{item.name}</span>
                                            <span className='rating-chart_span7'>{item.outOf}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* </div> */}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default RatingChart