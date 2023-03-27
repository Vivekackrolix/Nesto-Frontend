import { Container, Button, Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import sky from "../../Images/Sky.png";
import editbutton from "../../Images/editbutton.png";
import build from "../../Images/build.png";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";

const Danelions = ({ data }) => {
  const [rating, setRating] = useState(0);
  // const [over, setOver] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <Container
        className="dashboard__wrapper border border-light rounded shadow-sm mt-2"         
      >
        <div className="d-flex ">
          <div>
            <img src={sky} className="rounded my-3" alt="Sky" />
          </div>
          <div className="p-2">
            <h3>Sky Danelions Apartment</h3>
            {/* {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))} */}
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733; </span>
                  </button>
                );
              })}
            </div>
            <p style={{ color: "#7D7F88" }}>
              Luxury Apartment in Sector-29,Gurugram
            </p>

            <Row>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>2BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>3BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>4BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>5BHK</p>
              </Col>
            </Row>
          </div>

          <div className="ms-auto p-2  ">
            <h4 style={{ text: "bold", fontFamily: "Bahnschrift" }}>
              Rs. 3.94L - 6.01Cr
            </h4>
            <p style={{ color: "#7D7F88" }}>Book now & get 5% Discount</p>
            <br></br>

            <Button
              variant="transparent"
              type="button"
              className="rounded-pill border-primary btn-lg justify-content-center px-4 mx-3 gap-3 py-1"
              as={Link}
              to="/builder/home-dashboard/propertyedit"
            >
              <BsPencilFill
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "4px",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
              Edit
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Danelions;
