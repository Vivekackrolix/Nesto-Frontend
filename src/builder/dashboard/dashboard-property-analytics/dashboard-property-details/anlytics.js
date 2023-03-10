import { Container } from "react-bootstrap";
import Search from "../../../Images/search.png";
import Sold from "../../../Images/sold.png";
import visit from "../../../Images/visits.png";
import view from "../../../Images/views.png";
import Share from "../../../Images/share.png";
import Two from "../../../Images/2BHK.png";
import Three from "../../../Images/3BHK.png";

const Anlytics = () => {
  return (
    <>
      <br></br>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Sold} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              2<br></br>Sold
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={visit} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              20<br></br>Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Search} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              200 <br></br> Search
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={view} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              100 <br></br> Views
            </span>
          </div>{" "}
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Share} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              40 <br></br> Shared
            </span>
          </div>
        </div>
      </Container>
      <br></br>
      <br></br>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Floor Plane & Pricing</h3>
      <p style={{ fontFamily: "Bahnschrift" }}>in Arocon Rainbow</p>
      <div
        className="d-flex rounded-pill gap-4 p-2    col"
        style={{ fontFamily: "Bahnschrift" }}
      >
        <button type="button" className="btn btn-primary rounded-pill">
          All
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          2 BHK
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          3 BHK
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          4 BHK
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          5 BHK
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          6 BHK
        </button>
        <button type="button" className="btn btn-light rounded-pill">
          7 BHK
        </button>
      </div>
      <div className="d-flex">
        <img src={Two} className="rounded my-3" alt="2-BHK" />
        <img src={Three} className="rounded my-3" alt="3-BHK" />
        <img src={Three} className="rounded my-3" alt="3-BHK" />
      </div>
    </>
  );
};
export default Anlytics;
