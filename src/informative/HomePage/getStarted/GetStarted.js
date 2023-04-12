import { Link } from "react-router-dom";
import "./GetStarted.css";

export default function GetStarted() {
  return (
    <>
      <div className="get-started">
        <div className="container get-started_container">
          <div className="row get-started_row">
            <div className="col-md-6 get-started_col-1">
              <span className="get-started_heading">
                Hurry Up! Find NestoHub <br></br><span>Serving You With The Best In Real Estate.</span>
              </span>
              <div className="">
                <Link to="/builder-page" className="get-started_btn rounded-3">
                  Let's get Started
                </Link>
              </div>
            </div>
            <div className="col-md-6 get-started_col-2">
              <img src="./assets/getStarted.png" className="get-started_img" alt="get-started" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
