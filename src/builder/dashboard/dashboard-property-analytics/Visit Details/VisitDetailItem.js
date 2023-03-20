import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";

const VisitDetailItem = (props) => {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);
  return (
    <Row className={props.className}>
      <Col>2111321321</Col>
      <Col>Lorem Ipsum</Col>
      <Col>12 Jan 2023</Col>
      <Col>Bought</Col>
      <Col>Lorem Ipsum</Col>
      <Col>
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
      </Col>
    </Row>
  );
};
export default VisitDetailItem;
