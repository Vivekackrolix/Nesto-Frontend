import { Col, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";

const VisitDetailItem = (props) => {
  return (
    <Row className={props.className}>
      <Col>2111321321</Col>
      <Col>Lorem Ipsum</Col>
      <Col>12 Jan 2023</Col>
      <Col>Bought</Col>
      <Col>Lorem Ipsum</Col>
      <Col>
        {Array.from({ length: 5 }, (_, index) => (
          <RiStarSFill color="#FFB630" />
        ))}
      </Col>
    </Row>
  );
};
export default VisitDetailItem;
