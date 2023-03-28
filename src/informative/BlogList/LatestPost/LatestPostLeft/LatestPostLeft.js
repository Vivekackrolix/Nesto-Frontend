import React from 'react'
import './LatestPostLeft.css'
import { Link } from 'react-router-dom'

const LatestPostLeft = () => {
    const data = [
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
        {
            date: 'Sept 05, 2022',
            para1: 'Tips to buy your dream home in minutes',
            para2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            userImg: '/assets/informative/articleImg4.png',
            name: 'Sarah Harding',
        },
    ]
    return (
        <div className='latest-post-left' style={{overflowX: 'hidden'}}>
            <div data-aos='fade-right'>
                <span className='latest-left_heading'>Latest Post</span>
                <span className='latest-left_para'>Don't miss the trending news</span>
            </div>
            <div className='row mt-3'>
                {data.map((item) => {
                    return (
                        <div className='col-lg-6 left-col' data-aos='fade-right'>
                            <div className='left-col_box'>
                                <img className='left-col_img' src='/assets/informative/latest-news1.png' alt='news' />
                                <p className='left-col_date'>{item.date}</p>
                                <p className='left-col_para'>{item.para1}</p>
                                <p className='left-col_para-2'>{item.para2}</p>
                                <div className='d-flex align-items-center justify-content-between mt-4'>
                                    <div>
                                        <span>
                                            <img src={item.userImg} alt='user' />
                                            <span> {item.name}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <Link to='/blog-detail' className='left-col_link'>
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestPostLeft