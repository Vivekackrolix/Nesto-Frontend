import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './news.css';
import Heading from '../heading/Heading';
import { CiCalendar } from 'react-icons/ci';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Fade } from 'react-reveal';
import { getAPI } from '../../BlogList/BlogListApi/ApiRequest';
import { apiEndpoints } from '../../BlogList/BlogListApi/ApiEndpoint';

export default function News() {
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     img: '/assets/informative/blogs/blog-4.png',
  //     date: '12 May 2023',
  //     heading: 'How Can New Brokers Contact Well-Known Builders?',
  //     desc: 'The real estate market is a deep pool based on trust and sources. Everyone is attracted to this ...',
  //   },
  //   {
  //     img: '/assets/informative/blogs/blog-2.png',
  //     date: '1 May 2023',
  //     heading: 'Looking To Skyrocket Your Property Sales?',
  //     desc: 'Who doesn\'t want to earn more? Who doesn\'t want to invest more? Who doesn\'t want ...',
  //   },
  //   {
  //     img: '/assets/informative/blogs/blog-3.png',
  //     date: '25 April 2023',
  //     heading: 'Learn The Secret To Earning Higher Brokerage With NestoHub',
  //     desc: 'NestoHub is an all-around platform for all builders and brokers to connect and professionalize ...',
  //   },
  // ];

  useEffect(() => {
    const getPage = async () => {
      const response = await getAPI(apiEndpoints.getAllBlog);
      console.log(response.data);
      setData(response?.data);
    };
    getPage();
  }, []);

  const firstThreeElements = data?.slice(0, 3);

  console.log("home blogs", firstThreeElements);
  return (
    <>
      <div class="news">
        <Heading title="Blogs & News" sub="Latest Blogs and News" />
        <Fade up duration={1000} distance="100px" delay={100}>
          <div className="container news-container">
            <div className="row">
              {firstThreeElements && firstThreeElements.map(item => {
                return (
                  <div className="col-lg-4 col-md-6 text-left">
                    <div className="news-box">
                      <Link to={"/blog-detail/" + item.slug}>
                        <img
                          src={item.profileImage}
                          className="news-image"
                          alt="news"
                        />
                      </Link>
                      <div className="news-box-2">
                        <div className="news-date align-items-end">
                          <span>
                            <CiCalendar className="date-icon" />
                          </span>
                          <span className="news-date-span"> {item.blogDate}</span>
                        </div>
                        <div className="">
                          <Link to="/blog-detail" className="news-heading">
                            {item.blogName}
                          </Link>
                        </div>
                        <div>
                          <p className="news-desc">{item.excerpt}</p>
                        </div>
                        <Link to="/blog-detail" className="primary_button">
                          Read More
                          <MdKeyboardDoubleArrowRight
                            size={20}
                            className="move-arrow"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="text-center" data-aos="fade-up">
              <Link to="/blog-list" className="primary_button">
                Explore More
                <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
              </Link>
            </div> */}
          </div>
        </Fade>
      </div>
    </>
  );
}
