// import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { RiStarSFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

const VisitDetailItem = (props) => {
  const [data, setData] = useState([]); //Later use redux
  useEffect(() => {
    const getVisit = async () => {
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",
        "http://localhost:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",
        // formData,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data);
      setData(response.data.data);
    };

    getVisit();
  }, []);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Row className={props.className}>
      <Col>{data._id}</Col>
      {/* <Col>{data._id.brokerId.name}</Col> */}
      <Col>{data.date}</Col>
      <Col>{data.visitStatus}</Col>
      <Col>{data.clientName}</Col>
      <Col>
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
      </Col>
    </Row>
  );
};
export default VisitDetailItem;
