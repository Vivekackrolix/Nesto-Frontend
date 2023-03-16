import { Container, Button, Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import sky from "../../Images/Sky.png";
// import building from "../../Images/building.png";
import editbutton from "../../Images/editbutton.png";
import buld from "../../Images/buld.png";
import { useState } from "react";

const Danelions = () => {
  const [rating, setRating] = useState(0);
  // const [over, setOver] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <>
      <Container
        className="pt-1   dashboard__wrapper border border-light rounded shadow-sm"
        style={{
          boxShadow: "0px 7.86258px 44.4353px rgba(0, 0, 0, 0.07)",
          boxSizing: "border-box",
        }}
      >
        <div className="d-flex ">
          <div
          // style={{
          //   border: "1.20506px solid #EBECF0",
          //   filter:
          //     "drop-shadow(0px 7.77264px 44.3583px rgba(0, 0, 0, 0.07))",
          // }}
          >
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

            <div className="d-flex mx-3">
              <h1>
                <img src={buld} className="rounded " alt="bulding" />
              </h1>
              {/* <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" /> */}
            </div>
            {/* <div className="d-flex mx-2">
              <p className="rounded my-3 mx-2">1</p>
              <p className="rounded my-3 mx-2">1</p>
              <p className="rounded my-3 mx-2">1</p>
              <p className="rounded my-3 mx-2">1</p>
            </div> */}
          </div>

          <div className="ms-auto p-2  ">
            <h4 style={{ text: "bold", fontFamily: "Bahnschrift" }}>
              Rs. 3.94L - 6.01Cr
            </h4>
            <p style={{ color: "#7D7F88" }}>Book now & get 5% Discount</p>
            <br></br>

            <Button
              //   variant="primary"
              type="button"
              className=" d-flex rounded-pill  btn btn-outline-primary btn-lg justify-content-center mx-3 gap-3"
              as={Link}
              to="/builder/home-dashboard/propertyedit"
            >
              <img src={editbutton} alt="" />
              Edit
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Danelions;
