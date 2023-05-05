import { Link } from 'react-router-dom';
import './GetStarted.css';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function GetStarted() {
  return (
    <>
      <div className="get-started" data-aos="false">
        <div className="container get-started_container">
          <div className="row get-started_row align-items-end">
            <div className="col-lg-6 col-md-12 get-started_col-1">
              <span className="get-started_heading">
                Hurry Up! Find NestoHub <br />
                <span>Serving You With The Best In Real Estate.</span>
              </span>
              <div className="">
                <Link
                  to="/builder-page"
                  className="get-started_btn primary_button"
                >
                  List Your Property
                  <MdKeyboardDoubleArrowRight
                    size={20}
                    className="move-arrow"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 get-started_col-2">
              <img
                src="./assets/get-started.png"
                className="get-started_img"
                alt="get-started"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
