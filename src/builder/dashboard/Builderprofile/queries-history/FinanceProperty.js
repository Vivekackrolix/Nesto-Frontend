import { Col, Container, Row } from "react-bootstrap";
// import ManageRole from "../queries-history/ManageRole";
import Finance from "./Finance";
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const tabelData = arr.map((itm) => (
  <Finance className={"mb-3 py-3 border rounded"} />
));

const FinanceProperty = () => {
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
export default FinanceProperty;
