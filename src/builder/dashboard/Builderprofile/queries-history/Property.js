import { Col, Container, Row } from "react-bootstrap";
import ManageRole from "../queries-history/ManageRole";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const tabelData = arr.map((itm) => (
  <ManageRole className={"mb-3 py-3 border rounded"} />
));

const Property = () => {
  return (
    <>
      <Container className="dashboard__wrapper__filter">
        <Row>
          <Col>Assigned To</Col>
          <Col>Phone Number</Col>
          <Col>Email</Col>
          <Col>Properties </Col>
          <Col>Action</Col>
        </Row>
        <br />
        {tabelData}
      </Container>
    </>
  );
};
export default Property;
