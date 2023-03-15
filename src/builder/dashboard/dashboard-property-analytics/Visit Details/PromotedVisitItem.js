import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import bot from "../../../Images/bot.png";
import Rating from "./Property claim/Rating";
import Report from "./Property claim/Report";

const PromotedVisitItem = (props) => {
  const [abuse, setAbuse] = useState(false);
  const [show, setShow] = useState({
    rating: false,
    submit: true,
  });
  console.log(show);
  const onLocationClick = () => {
    setShow((prev) => ({ ...prev, rating: true }));
  };
  const onReport = () => {
    setAbuse((prev) => ({ ...prev, report: true }));
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
      <Col onClick={onReport}>
        <img src={bot} alt="" />
        <Report show={abuse.report} onChange={setAbuse} />
      </Col>

      <Col onClick={onLocationClick}>
        {Array.from({ length: 5 }, (_, index) => (
          <RiStarSFill color="#FFB630" />
        ))}
        <Rating show={show.rating} onChange={setShow} />
      </Col>
    </Row>
  );
};
export default PromotedVisitItem;
