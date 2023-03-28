import React from 'react'
import Footer from '../../../components/footer/Footer'
import './Tips.css'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import InformativeFooter from '../../InformativeFooter/InformativeFooter'

const Tips = () => {
    const liData = [
        {
            para: 'A portfolio demonstrating well thought through and polished end to end customer'
        },
        {
            para: '5+ years of industry experience in interactive design and / or visual design'
        },
        {
            para: 'Excellent interpersonal skills'
        },
        {
            para: 'Aware of trends in mobile, communications, and collaboration'
        },
        {
            para: 'Ability to create highly polished design prototypes, mockups, and other'
        },
        {
            para: 'The ability to scope and estimate efforts accurately and prioritize tasks and'
        },
        {
            para: 'History of impacting shipping products with your work'
        },
        {
            para: 'A Bachelor\’s Degree in Design (or related field) or equivalent professional experience'
        },
        {
            para: 'Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch'
        },
    ]
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
        <>
            <div className='container tips-container' data-aos='fade-up' style={{ overflowX: 'hidden' }}>
                <div className='tips-header'>
                    <div className='tips-header_box text-center'>
                        <span className='tips-header_heading'>
                            Tips to buy your dream home
                            in minutes
                        </span>
                        <div className='tips_box-1'>
                            <div>
                                <img className='tips_user-img' src='/assets/informative/articleImg4.png' />
                                <span className='tips_user-name'> Sarah Harding</span>
                            </div>
                            <div>
                                <span className='tips_user-date'>14 Nov 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className='tips_box-2'>
                        <div className='tips_box-3'>
                            <span className='tips_box-2-span'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque
                                sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet apien nec, finibus
                                malesuada mi. Proin at turpis eget sapien pulvinar luctus. estibulum bibendum pharetra
                                lorem eu aliquam. In feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
                                vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id iaculis risus,
                                quis ullamcorper augue. Nunc ristique.
                            </span>
                        </div>
                        <div className='tips_box-4' data-aos='zoom-in'>
                            <img className='tips_box-4-img' src='/assets/informative/tipsImg.png' />
                        </div>
                        <div className='tips_box-3'>
                            <span className='tips_box-2-span'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque
                                sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet apien nec, finibus
                                malesuada mi. Proin at turpis eget sapien pulvinar luctus. estibulum bibendum pharetra
                                lorem eu aliquam. In feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
                                vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id iaculis risus,
                                quis ullamcorper augue. Nunc ristique.
                            </span>
                        </div>
                    </div>
                    <div className='tips_box-5'>
                        <div>
                            <span className='tips_box-5-heading'>Inut odio libero</span>
                        </div>
                        {liData.map((item) => {
                            return (
                                <>
                                    <div className='d-flex gap-3 align-items-center mt-3'>
                                        <img src='/assets/informative/line.png' className='tips_box-5-line' data-aos='fade-right' />
                                        <li className='tips_box-5-li' data-aos='fade-right'>{item.para}</li>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='tips_box-3 mt-5'>
                        <span className='tips_box-2-span'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque
                            sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet apien nec, finibus
                            malesuada mi. Proin at turpis eget sapien pulvinar luctus. estibulum bibendum pharetra
                            lorem eu aliquam. In feugiat placerat risus, ed rutrum neque mattis sit amet. Nullam
                            vestibulum ante ac quam tempor, d venenatis velit eleifend. Duis id iaculis risus,
                            quis ullamcorper augue. Nunc ristique.
                        </span>
                    </div>
                    <div className='tips_box-6'>
                        <span className='tips_box-6-span'>Was this information helpful?</span>
                        <div className='mt-4'>
                            <button className='tips_box-6-btn'>YES</button>
                            <button className='tips_box-6-btn'>NO</button>
                        </div>
                    </div>
                </div>
                {/* Share Box */}
                <div className='share-box d-flex justify-content-between align-items-center'>
                    <div></div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <span className='share-box_span1'>Share</span>
                        </div>
                        <div className='d-flex gap-3'>
                            <Link to='/'>
                                <span className='share-box_span2'><BsFacebook /></span>
                            </Link>
                            <Link to='/'>
                                <span className='share-box_span2'><BsInstagram /></span>
                            </Link>
                            <Link to='/'>
                                <span className='share-box_span2'><BsTwitter /></span>
                            </Link>
                            <Link to='/'>
                                <span className='share-box_span2'><BsLinkedin /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* RecentPost */}
            {/* Css coming from BlogList/LatestPostLeft/LatestPostLeft.css*/}
            <div className='container mb-5' style={{ overflowX: 'hidden' }}>
                <div className='row'>
                    <div className='recent-post_box'>
                        <div data-aos='fade-right'>
                            <span className='recent-post_span3'>Recent Post</span>
                        </div>
                        <div data-aos='fade-left'>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <span className='recent-post_span4'>Browse All Article</span>
                            </Link>
                        </div>
                    </div>
                    {data.map((item) => {
                        return (
                            <div className='col-lg-4 left-col mt-4' data-aos='fade-right'>
                                <div className='left-col_box'>
                                    <img className='left-col_img' src='/assets/informative/latest-news1.png' />
                                    <p className='left-col_date'>{item.date}</p>
                                    <p className='left-col_para'>{item.para1}</p>
                                    <p className='left-col_para-2'>{item.para2}</p>
                                    <div className='d-flex align-items-center justify-content-between mt-4'>
                                        <div>
                                            <span>
                                                <img src={item.userImg} />
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
            {/* RecentPostEnd */}
            <InformativeFooter />
        </>
    )
}

export default Tips