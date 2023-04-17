import React, { useState } from "react";
import "./LatestPostLeft.css";
import { Link } from "react-router-dom";
import LatestPostPagination from "../LatestPostPagination/LatestPostPagination";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const LatestPostLeft = () => {
  const [data, setData] = useState([
    {
      id: 0,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 1,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 2,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 3,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 4,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 5,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 6,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 7,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 8,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 9,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 10,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 11,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
    {
      id: 12,
      date: "Sept 05, 2022",
      para1: "Tips to buy your dream home in minutes",
      para2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      userImg: "/assets/informative/articleImg4.png",
      name: "Sarah Harding",
    },
  ]);
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  return (
    <div className="latest-post-left" style={{ overflowX: "hidden" }}>
      <div data-aos="fade-right">
        <span className="latest-left_heading">Latest Post</span>
        <span className="latest-left_para">Don't miss the trending news</span>
      </div>
      <div className="row mt-3">
        {data.slice(pagination.start, pagination.end).map((item) => {
          return (
            <div
              className="col-lg-6 left-col"
              key={item.id}
              data-aos="fade-right"
            >
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
                  #{item.id} {item.para1}
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
          );
        })}
        <LatestPostPagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={data.length}
        />
      </div>
    </div>
  );
};

export default LatestPostLeft;
