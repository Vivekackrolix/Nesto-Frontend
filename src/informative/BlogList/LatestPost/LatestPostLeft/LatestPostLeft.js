import React, { useEffect, useState } from "react";
import "./LatestPostLeft.css";
import { Link } from "react-router-dom";
import LatestPostPagination from "../LatestPostPagination/LatestPostPagination";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { getAPI } from "../../BlogListApi/ApiRequest";
import { apiEndpoints } from "../../BlogListApi/ApiEndpoint";

const LatestPostLeft = () => {
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  useEffect(() => {
    const getPage = async () => {
      const response = await getAPI(apiEndpoints.getAllBlog);
      console.log(response.data);
      setData(response.data);
    };
    getPage();
  }, []);

  return (
    <div className="latest-post-left" style={{ overflowX: "hidden" }}>
      <div data-aos="fade-right">
        <span className="latest-left_heading">Latest Post</span>
        <span className="latest-left_para">Don't miss the trending news</span>
      </div>
      <div className="row mt-3">
        {data.slice(pagination.start, pagination.end).map((item) => {
          return (
            <>
              <div
                className="col-lg-6 latest-post-left-col"
                key={item?._id}
                data-aos="fade-right"
              >
                <div className="left-col_box">
                  <div className="left-col_box_child-box">
                    <Link to="/blog-detail">
                      <img
                        className="left-col_img"
                        src="/assets/informative/latest-news1.png"
                        // src={item?.thumbnailImage}
                        alt="news"
                      />
                    </Link>
                  </div>

                  <p className="left-col_date">{item?.blogDate}</p>
                  <Link to="/blog-detail" className="left-col_para">
                    {item?.blogName}
                  </Link>
                  <p className="left-col_para-2">{item?.excerpt}</p>
                  <div className="d-flex align-items-center justify-content-between mt-4">
                    <div>
                      <span>
                        <img
                          src="/assets/informative/profile.png"
                        // src={item?.profileImage} 
                        />
                        <span> {item?.postedByName}</span>
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
            </>
          );
        })}
        <LatestPostPagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={data.length}
        />
      </div>
    </div >
  );
};

export default LatestPostLeft;
