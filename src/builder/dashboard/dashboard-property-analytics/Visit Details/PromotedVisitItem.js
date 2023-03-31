import { useState } from "react";
// import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";

import Rating from "./Property claim/Rating";
import Report from "./Property claim/Report";

const PromotedVisitItem = (props) => {
  const [report, setReport] = useState(false);
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);
  const [review, setReview] = useState(false);
  // const [show, setShow] = useState(false);

  const onReport = () => {
    setReport(true);
  };
  const onRating = () => {
    setReview(true);
  };

  return (
    <Row className={props.className}>
      <Col>{props.itm._id.slice(-10)}</Col>
      <Col>
        {props.itm.brokerId === null ? "no data Name" : props.itm.brokerId.name}
      </Col>
      <Col>{props.itm.clientName}</Col>
      <Col>{props.itm.date}</Col>
      {/* <Col>{props.itm.visitStatus}</Col> */}

      <Col as={Link} to="/builder/home-dashboard/promoted/claim">
        {props.itm.visitStatus}
      </Col>
      <Col>
        <FaHeadset size="20" className="cursor" onClick={onReport} />
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
