import { Link } from "react-router-dom";
import "./news.css";
import Heading from "../heading/Heading";
import { CiCalendar } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function News() {
  const data = [
    {
      img: "/assets/informative/news.png",
      date: "05 Dec 2022",
      heading: "New Apartment Nice in the Best Canadian Cities",
      desc: "Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...",
    },
    {
      img: "/assets/informative/news.png",
      date: "05 Dec 2022",
      heading: "New Apartment Nice in the Best Canadian Cities",
      desc: "Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...",
    },
    {
      img: "/assets/informative/news.png",
      date: "05 Dec 2022",
      heading: "New Apartment Nice in the Best Canadian Cities",
      desc: "Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...",
    },
  ];
  return (
    <>
      <div class="news" style={{ overflowX: 'hidden' }}>
        <Heading title="Blogs & News" sub="Latest Blogs and News" />
        <div className="container news-container" data-aos="fade-up">
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 text-left">
                  <div className="news-box">
                    <Link to="/blog-detail">
                      <img
                        src={item.img}
                        className="news-image"
                        alt="news"
                      />
                    </Link>
                    <div className="news-box-2">
                      <div className="news-date align-items-end">
                        <span>
                          <CiCalendar className="date-icon" />
                        </span>
                        <span className="news-date-span"> {item.date}</span>
                      </div>
                      <div className="">
                        <Link to="/blog-detail" className="news-heading">
                          {item.heading}
                        </Link>
                      </div>
                      <div>
                        <p className="news-desc">{item.desc}</p>
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
      </div>
    </>
  );
}
