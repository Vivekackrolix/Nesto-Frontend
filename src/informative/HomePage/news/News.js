import { Link } from "react-router-dom";
import "./News.css";
import Heading from "../heading/Heading";
import { CiCalendar } from 'react-icons/ci'

export default function News() {
  const data = [
    {
      img: '/assets/informative/news.png',
      date: '05 Dec 2022',
      heading: 'New Apartment Nice in the Best Canadian Cities',
      desc: 'Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...'
    },
    {
      img: '/assets/informative/news.png',
      date: '05 Dec 2022',
      heading: 'New Apartment Nice in the Best Canadian Cities',
      desc: 'Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...'
    },
    {
      img: '/assets/informative/news.png',
      date: '05 Dec 2022',
      heading: 'New Apartment Nice in the Best Canadian Cities',
      desc: 'Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed ...'
    },
  ]
  return (
    <>
      <div class="news">
        <Heading title="Blogs & News" sub="Latest Blogs and News" />
        <div className="container news-container" data-aos='fade-up'>
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-4 text-left">
                  <div className="news-box">
                    <div>
                      <img src={item.img} className="news-image" />
                    </div>
                    <div className="news-box-2">
                      <div className="news-date">
                        <span><CiCalendar className="date-icon" /></span>
                        <span className="news-date-span"> {item.date}</span>
                      </div>
                      <div className="">
                        <h2 className="news-heading">{item.heading}</h2>
                      </div>
                      <div>
                        <p className="news-desc">{item.desc}</p>
                      </div>
                      <Link to='/blog-list' className="news-btn" >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
