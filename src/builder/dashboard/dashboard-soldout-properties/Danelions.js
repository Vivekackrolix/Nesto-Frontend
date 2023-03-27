import { Container, Button, Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import sky from "../../Images/Sky.png";
import build from "../../Images/build.png";
import { BsPencilFill } from "react-icons/bs";
import { useState } from "react";

const Danelions = () => {
  const [rating, setRating] = useState(0);
  // const [over, setOver] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <Container
        className="dashboard__wrapper border border-light rounded shadow-sm my-2"         
      >
        <Row className="align-items-center">
          <Col md={3} sm={12}>
            <img src={sky} className="rounded" alt="Sky" />
          </Col>
          <Col md={4} sm={12}>
          <h3 className="heading">Sky Danelions Apartment</h3>
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

            <Row className="mt-3">
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
          </Col>
          <Col md={5} sm={12} className="text-center">          
            <h4 className="heading">
              Rs. 3.94L - 6.01Cr
            </h4>
            <p style={{ color: "#7D7F88"}}>Book now & get 5% Discount</p>
            <br></br>

            <Button
              variant="transparent"
              type="button"
              className="rounded-pill border-primary btn-lg justify-content-center px-4 gap-3 py-1"
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
          </Col>
        </Row>        
      </Container>
    </>
  );
};

export default Danelions;
