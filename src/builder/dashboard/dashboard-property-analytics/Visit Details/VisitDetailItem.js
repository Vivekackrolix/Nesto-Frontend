import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { RiStarSFill } from "react-icons/ri";

const VisitDetailItem = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <Row className={props.className}>
      <Col>{props.itm._id.slice(-10)}</Col>
      <Col>
        {props.itm.brokerId === null ? "no data Name" : props.itm.brokerId.name}
      </Col>
      <Col>{props.itm.date}</Col>
      <Col>{props.itm.visitStatus}</Col>
      <Col>{props.itm.clientName}</Col>
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
{
  /* <Col>{props.itm._id.substring(props.itm._id.length - 10)}</Col> */
}
{
  /* str.substring(str.length - n) */
}
