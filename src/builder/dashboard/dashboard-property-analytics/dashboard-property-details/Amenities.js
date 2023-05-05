import { Col, Container, Row } from "react-bootstrap";
import sqft from "../../../Images/sqft.png";
import beds from "../../../Images/beds.png";
import bath from "../../../Images/bath.png";
import garage from "../../../Images/garage.png";
import balcony from "../../../Images/Balcony.png";

const Amenities = ({ data }) => {
  // const unitType = data.unitType ? data.unitType : [];
  console.log(data);
  return (
    <>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Project Amenities</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
        style={{ border: "2.94206px solid #E3E3E7", boxSizing: "border-box" }}
      >
        <div
          className="p-1 d-flex justify-content-around "
          style={{ opacity: 0.5 }}
        >
          {data?.amenities?.map((itm) => (
            <div className="text-center d-flex flex-column ">
              <span>
                <img
                  src={itm?.iconUrl}
                  className="rounded my-3"
                  alt="Amenities"
                />
              </span>
              <span style={{ fontFamily: "Bahnschrift" }}>
                {itm?.name}
                {/* {data.amenities[1].name} */}
              </span>
            </div>
          ))}
          {/* <div className="text-center d-flex flex-column">
            <span>
              <img src={beds} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={bath} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={garage} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={balcony} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>1 Balcony</span>
          </div> */}
        </div>
        {/* <div
          className="p-1 d-flex justify-content-around"
          style={{ opacity: 0.5 }}
        >
          <div className="text-center d-flex flex-column">
            <span>
              <img src={sqft} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>2110 Sqft</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={beds} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={bath} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={garage} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={balcony} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>1 Balcony</span>
          </div>
        </div> */}
      </Container>
    </>
  );
};
export default Amenities;
