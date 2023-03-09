import Heading from "../heading/Heading";
import "./news.css";
export default function News() {
  return (
    <>
      <div class="top-body pb-3">
        <Heading title="Blogs & News" sub="Latest Blogs and News" />
      </div>
      <div className="container">
        <div className="row  mb-5 gx-3">
          <div className="col-md-4 text-left">
            <div className="shadow news-box pb-4">
              <div className="news-image">
                <img src="./assets/news.png" alt="" />
              </div>
              <div className="date mx-3 my-2">
                <p>05 Dec 2022</p>
              </div>
              <div className="">
                <h2 className="news-heading mx-3">
                  New Apartment Nice in the Best Canadian Cities
                </h2>
              </div>
              <div>
                <p className="news-desc mx-3">
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed ...
                </p>
              </div>
              <div>
                <a href="" className="btn mx-3 btn-color-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-left">
            <div className="shadow news-box pb-4">
              <div className="news-image">
                <img src="./assets/news.png" alt="" />
              </div>
              <div className="date mx-3 my-2">
                <p>05 Dec 2022</p>
              </div>
              <div className="">
                <h2 className="news-heading mx-3">
                  New Apartment Nice in the Best Canadian Cities
                </h2>
              </div>
              <div>
                <p className="news-desc mx-3">
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed ...
                </p>
              </div>
              <div>
                <a href="" className="btn mx-3 btn-color-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-left">
            <div className="shadow news-box pb-4">
              <div className="news-image">
                <img src="./assets/news.png" alt="" />
              </div>
              <div className="date mx-3 my-2">
                <p>05 Dec 2022</p>
              </div>
              <div className="">
                <h2 className="news-heading mx-3">
                  New Apartment Nice in the Best Canadian Cities
                </h2>
              </div>
              <div>
                <p className="news-desc mx-3">
                  Duis mattis laoreet neque, et ornare neque sollicitudin at.
                  Proin sagittis dolor sed ...
                </p>
              </div>
              <div>
                <a href="" className="btn mx-3 btn-color-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
