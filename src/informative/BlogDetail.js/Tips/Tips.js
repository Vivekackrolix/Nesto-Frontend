import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import "./Tips.css";
import { Link, useLocation } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import InformativeFooter from "../../InformativeFooter/InformativeFooter";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Fade, Zoom } from "react-reveal";
import axios from "axios";
import { apiEndpoints } from "../../BlogList/BlogListApi/ApiEndpoint";
import { getAPI } from "../../BlogList/BlogListApi/ApiRequest";
import { useParams } from "react-router-dom";



const Tips = () => {
  const { state } = useLocation();
  const params = useParams();
  const [blogDetails, setBlogsDetails] = useState([]);

  // useEffect(() => {
  //   fetchBlogDetails();
  // }, [])

  const liData = [
    {
      para: "Connect with a wide range of brokers.",
    },
    {
      para: "Sell their inventory faster.",
    },
    {
      para: "Build their professional profile",
    },
    {
      para: "Market their properties and themselves digitally.",
    },
    {
      para: "Manage multiple brokers easily.",
    },
    {
      para: "Keep a record of customer visits to the properties",
    },
    {
      para: "Utilize their remaining time to increase their efficiency.",
    }
  ];
  const data = [
    {
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
  ];
  const liDataTwo = [
    {
      para: "Earn higher brokerage rates.",
    },
    {
      para: "Connect with renowned builders.",
    },
    {
      para: "Build a network and community with other brokers.",
    },
    {
      para: "Create their professional digital profile.",
    },
    {
      para: "Digitally manage their property visits.",
    },
    {
      para: "Keep digital records through a user-friendly dashboard.",
    },
    {
      para: "Get their client's financial assistance.",
    },
    {
      para: "Utilize their remaining time to grab more customers and close many deals together.",
    }
  ];

  // const fetchBlogDetails = async () => {
  //   await getAPI`$(apiEndpoints.getBlogByID)$()`
  //     .then(function (res) {
  //       setBlogsDetails(res?.data)
  //     })
  //     .catch(function (error) {
  //       // console.log(error);
  //     })
  // }

  useEffect(() => {
    const getPropertyById = async () => {
      const response = await getAPI(`${apiEndpoints.getBlogByID}?id=${params._id}`
      );
      setBlogsDetails(response?.data?.[0]);
    };
    getPropertyById();
  }, []);

  console.log("blogssss", params,blogDetails);
  return (
    <>
      <Fade up duration={1000} delay={100}>
        <div
          className="mb-5 container tips-container"
          style={{ overflowX: "hidden" }}>
          <div className="tips-header">
            <div className="tips-header_box text-center">
              <span className="tips-header_heading">
                {blogDetails?.blogName}
              </span>
              <div className="tips_box-1">
                <div>
                  <img
                    className="tips_user-img"
                    src="/assets/profle.png"
                    alt="article"
                  />
                  <span className="tips_user-name"> {blogDetails?.postedByName}</span>
                </div>
                <div>
                  <span className="tips_user-date"> {blogDetails?.blogDate}</span>
                </div>
              </div>
            </div>
            <div className="tips_box-2">
              <div className="tips_box-3">
                <span className="tips_box-2-span">
                  The real estate market is a deep pool based on trust and sources. Everyone is attracted to this market to invest or earn more, but they are tied down due to the fraud and limited reach.
                </span>
                <span className="tips_box-2-span" style={{ display: 'block' }}>
                  While studying the audience of the real estate market, the studies found that both builders and brokers need to gain their customers’ trust, as it is the root of the relationship on which they close the deal. Therefore, any broker in the market is also looking forward to having tie-ups with big giants and wishes to sell their properties.
                </span>
              </div>
              {/* <Zoom duration={1000} delay={100}>
                <div className="tips_box-4">
                  <img
                    className="tips_box-4-img"
                    src="/assets/informative/tipsImg.png"
                    alt="tips"
                  />
                </div>
              </Zoom> */}
              {/* <div className="tips_box-3">
                <span className="tips_box-2-span">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  ornare pellentesque sollicitudin. Suspendisse potenti. Fusce ex
                  risus, iaculis sit amet apien nec, finibus malesuada mi. Proin
                  at turpis eget sapien pulvinar luctus. estibulum bibendum
                  pharetra lorem eu aliquam. In feugiat placerat risus, ed rutrum
                  neque mattis sit amet. Nullam vestibulum ante ac quam tempor, d
                  venenatis velit eleifend. Duis id iaculis risus, quis
                  ullamcorper augue. Nunc ristique.
                </span>
              </div> */}
            </div>
            {/* <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">Can a new broker be entrusted with a big builder?</span>
                </div>
                {liData.map((item) => {
                  return (
                    <>
                      <div className="d-flex gap-3 align-items-center mt-3">
                        <img
                          src="/assets/informative/line.png"
                          className="tips_box-5-line"
                          alt="line"
                        />
                        <li className="tips_box-5-li">
                          {item.para}
                        </li>
                      </div >
                    </>
                  );
                })}
              </div>
            </Fade> */}
            {/* <Fade left duration={1000} delay={100}>
              <div className="tips_box-3 mt-5">
                <span className="tips_box-2-span">
                  The larger the builder, the greater the risk of fraud on their property; thus, it is extremely difficult for builders to disclose their network to many random brokers. Otherwise, it may receive negative publicity and scare people about the scams on their property names, causing property prices to fall.
                </span>
                <span className="tips_box-2-span mt-2" style={{ display: 'block' }}>
                  As a result, builders require assurance that the brokers selling their inventory are trustworthy and will not commit fraud in the builder's name.
                </span>
              </div>
            </Fade> */}

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">Can a new broker be entrusted with a big builder?</span>
                </div>
                <span className="tips_box-2-span">
                  The larger the builder, the greater the risk of fraud on their property; thus, it is extremely difficult for builders to disclose their network to many random brokers. Otherwise, it may receive negative publicity and scare people about the scams on their property names, causing property prices to fall.
                </span>
                <span className="tips_box-2-span d-block">
                  As a result, builders require assurance that the brokers selling their inventory are trustworthy and will not commit fraud in the builder's name.
                </span>
              </div>
            </Fade>

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">How can brokers build trust and networks?</span>
                </div>
                <span className="tips_box-2-span">
                  The brokers are well aware of the selling tactics; they need to build their strong network as the risk of fraud is on both sides, and therefore, NestoHub brings the best on board.
                </span>
                <span className="tips_box-2-span d-block">
                  Builders and brokers can simply connect on our NestoHub platform and become advantageous to each other. At NestoHub, brokers can find a vast pool of inventory from various builders. These builders are renowned for their extreme experience and established trust in the market.
                </span>
                <span className="tips_box-2-span d-block">
                  Even a limited or new broker can access a huge property list and sell it through their client network.
                </span>
                <span className="tips_box-2-span d-block">
                  NestoHub welcomes all brokers and builders to expand their connections with each other. We help them grow their business and stand out in the real estate market.
                </span>
              </div>
            </Fade>

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">Looking To Skyrocket Your Property Sales?</span>
                </div>
                <span className="tips_box-2-span">
                  Who doesn't want to earn more? Who doesn't want to invest more? Who doesn't want to sell their property before it gets damaged? Who wouldn't want NestHub to help them grow their real estate business? We're guessing it's not you because we're bringing a game-changing digital platform to connect brokers and builders. We have the best offerings for our users to help them distinguish themselves in the market and stand out from the rest of the crowd.
                </span>
              </div>
            </Fade>

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">NestoHub For Builders</span>
                </div>
                <span className="tips_box-2-span d-block">
                  Builders are always looking for a skilled and professional team of brokers to reach their potential clients and sell their inventory. The longer their property remains in their possession, the more they have to maintain it; therefore, selling it as soon as possible returns their investment in profit.
                </span>
                <span className="tips_box-2-span">
                  NestoHub is a platform to provide a professional platform for builders to expand their reach, remove the hassle of managing brokers, and maintain an online inventory for brokers. With our platform, the builders can,
                </span>
                {liData.map((item) => {
                  return (
                    <>
                      <div className="d-flex gap-3 align-items-center mt-3">
                        <img
                          src="/assets/informative/line.png"
                          className="tips_box-5-line"
                          alt="line"
                        />
                        <li className="tips_box-5-li">
                          {item.para}
                        </li>
                      </div >
                    </>
                  );
                })}
              </div>
            </Fade>

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-5">
                <div>
                  <span className="tips_box-5-heading">NestoHub For Brokers</span>
                </div>
                <span className="tips_box-2-span">
                  Currently, the market is experiencing a huge hike in the number of new brokers joining the real estate market. However, they face challenges in acquiring it as their full-time profession and earning a higher income. The biggest challenge is building the trust of big builders and getting access to their vast and expensive inventory, which gets them higher selling rates and brokerage.
                </span>
                <span className="tips_box-2-span d-block">
                  NestoHub is a platform that connects these new and established brokers with a large inventory of reputable builders. It broadens their reach and establishes them in a competitive market. Brokers can use our platform to
                </span>
                {liDataTwo.map((item) => {
                  return (
                    <>
                      <div className="d-flex gap-3 align-items-center mt-3">
                        <img
                          src="/assets/informative/line.png"
                          className="tips_box-5-line"
                          alt="line"
                        />
                        <li className="tips_box-5-li">
                          {item.para}
                        </li>
                      </div >
                    </>
                  );
                })}
              </div>
            </Fade>

            <Fade left duration={1000} delay={100}>
              <div className="tips_box-6">
                <span className="tips_box-6-span">
                  Was this information helpful?
                </span>
                <div className="mt-3">
                  <button className="tips_box-6-btn">YES</button>
                  <button className="tips_box-6-btn">NO</button>
                </div>
              </div>
            </Fade>
          </div>
          {/* Share Box */}
          <Fade right duration={1000} delay={100}>
            <div className="share-box d-flex justify-content-between align-items-center">
              <div></div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="share-box_span1">Share :</span>
                </div>
                <div className="d-flex gap-3">
                  <Link to="/">
                    <span className="share-box_span2">
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="share-box_span2">
                      <BsInstagram />
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="share-box_span2">
                      <BsTwitter />
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="share-box_span2">
                      <BsLinkedin />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Fade >
      {/* RecentPost ===================
      ============================== */}
      {/* Css coming from BlogList/LatestPostLeft/LatestPostLeft.css*/}
      {/* <div className="container mb-5" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="recent-post_box">
            <Fade left duration={1000} delay={100}>
              <div>
                <span className="recent-post_span3">Recent Post</span>
              </div>
            </Fade>
            <Fade right duration={1000} delay={100}>
              <div>
                <Link to="/blog-list" style={{ textDecoration: "none" }}>
                  <span className="recent-post_span4">Browse All Article</span>
                </Link>
              </div>
            </Fade>
          </div>
          {data.map((item) => {
            return (
              <Fade up duration={1000} delay={100}>
                <div className="col-lg-4 left-col mt-4" style={{ overflowY: 'hidden' }}>
                  <div className="left-col_box">
                    <Link to="/blog-detail">
                      <img
                        className="left-col_img"
                        src="/assets/informative/latest-news1.png"
                        alt="news"
                      />
                    </Link>
                    <p className="left-col_date">{item.date}</p>
                    <Link to="/blog-detail" className="left-col_para">
                      {item.para1}
                    </Link>
                    <p className="left-col_para-2">{item.para2}</p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div>
                        <span>
                          <img src={item.userImg} alt="user" />
                          <span> {item.name}</span>
                        </span>
                      </div>
                      <div>
                        <Link to="/blog-detail" className="left-col_link">
                          <span>
                            Read More<MdKeyboardDoubleArrowRight
                              size={20}
                              className="move-arrow"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div> */}
      {/* RecentPostEnd ========
      ====================== */}
      <InformativeFooter />
    </>
  );
};

export default Tips;
