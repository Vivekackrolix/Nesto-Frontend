import { Col, Container, Row } from "react-bootstrap";
import sqft from "../../../Images/sqft.png";
import beds from "../../../Images/beds.png";
import bath from "../../../Images/bath.png";
import garage from "../../../Images/garage.png";
import balcony from "../../../Images/Balcony.png";

const Amenities = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h3>Project Amenities</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div
          className="p-4 d-flex justify-content-around "
          style={{ opacity: 0.5 }}
        >
          <div className="text-center d-flex flex-column ">
            <span>
              {" "}
              <img src={sqft} className="rounded my-3" alt="Search" />
            </span>
            <span>2110 Sqft</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={beds} className="rounded my-3" alt="Search" />
            </span>
            <span>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={bath} className="rounded my-3" alt="Search" />
            </span>

            <span>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={garage} className="rounded my-3" alt="Search" />
            </span>
            <span>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={balcony} className="rounded my-3" alt="Search" />
            </span>
            <span>1 Balcony</span>
          </div>
        </div>
        <div
          className="p-4 d-flex justify-content-around"
          style={{ opacity: 0.5 }}
        >
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={sqft} className="rounded my-3" alt="Search" />
            </span>
            <span>2110 Sqft</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={beds} className="rounded my-3" alt="Search" />
            </span>
            <span>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={bath} className="rounded my-3" alt="Search" />
            </span>

            <span>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={garage} className="rounded my-3" alt="Search" />
            </span>
            <span>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              {" "}
              <img src={balcony} className="rounded my-3" alt="Search" />
            </span>
            <span>1 Balcony</span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Amenities;
