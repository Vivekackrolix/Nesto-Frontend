import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import bot from "../../../Images/bot.png";
import Rating from "./Property claim/Rating";
import Report from "./Property claim/Report";

const PromotedVisitItem = (props) => {
  const [report, setReport] = useState(false);
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);
  const [review, setReview] = useState(false);
  const [show, setShow] = useState(false);

  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getPromoted = async () => {
      const response = await axios.get(
        "http://13.233.149.97:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );

      setData(response.data.data);
    };

    getPromoted();
  }, []);

  const onReport = () => {
    setReport(true);
  };
  const onRating = () => {
    setReview(true);
  };

  return (
    <Row className={props.className}>
      <Col>2111321321</Col>
      <Col>Lorem Ipsum</Col>
      <Col>Lorem Ipsum</Col>
      <Col>12 Jan 2023</Col>
      <Col as={Link} to="/builder/home-dashboard/promoted/claim">
        Bought
      </Col>
      <Col>
        <img src={bot} alt="" onClick={onReport} />
        <Report show={report} onHide={setReport} />
      </Col>

      <Col>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => {
                  setRating(index);
                  onRating();
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733; </span>
              </button>
            );
          })}
        </div>
        <Rating show={review} onHide={setReview} />
      </Col>
    </Row>
  );
};
export default PromotedVisitItem;
