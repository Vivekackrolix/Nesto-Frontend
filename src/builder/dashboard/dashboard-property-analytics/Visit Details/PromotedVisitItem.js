import { useState } from "react";
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
  // const [show, setShow] = useState({
  //   rating: false,
  //   submit: true,
  // });
  // console.log(show);
  const onReport = () => {
    setReport(true);
  };
  const onRating = () => {
    setReview(true);
  };
  // const onLocationClick = () => {
  //   setShow((prev) => ({ ...prev, rating: true }));
  // };
  // const onReport = () => {
  //   setAbuse((prev) => ({ ...prev, report: true }));
  // };

  return (
    <Row className={props.className}>
      <Col>2111321321</Col>
      <Col>Lorem Ipsum</Col>
      <Col>Lorem Ipsum</Col>
      <Col>12 Jan 2023</Col>
      <Col as={Link} to="/builder/home-dashboard/promoted/claim">
        Bought
      </Col>
      <Col onClick={onReport}>
        <img src={bot} alt="" />
        <Report show={report} onHide={setReport} />
      </Col>

      <Col onClick={onRating}>
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
        <Rating show={review} onHide={setReview} />
      </Col>
    </Row>
  );
};
export default PromotedVisitItem;
