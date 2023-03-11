import { Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import bot from "../../../Images/bot.png";

const PromotedVisitItem = (props) => {
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
        <img src={bot} alt="" />
      </Col>

      <Col>
        {Array.from({ length: 5 }, (_, index) => (
          <RiStarSFill color="#FFB630" />
        ))}
      </Col>
    </Row>
  );
};
export default PromotedVisitItem;
