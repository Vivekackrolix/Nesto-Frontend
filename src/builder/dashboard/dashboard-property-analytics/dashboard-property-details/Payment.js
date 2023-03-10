import { Col, Container, Row, Table } from "react-bootstrap";
import Axis from "../../../Images/Axis.png";
import HDFC from "../../../Images/HDFC.png";

const Payment = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h3>Brockrage Payout plan</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <br></br>
        <h4>Brockrage 5%</h4>
        <p style={{ color: "#7D7F88" }}>
          Platform charges & application taxes shall be deducted
        </p>

        <br></br>
      </Container>
      <br></br>
      <br></br>
      <h3>Milestone</h3>
      <br></br>
      <br></br>
      <div className="p-1 d-flex justify-content-between  rounded">
        <Container className="dashboard_wrapper_filter border border_light rounded container p-3 mx-5 ">
          <Col>
            <h4>Milestone 1</h4>
            <Row>
              <Col style={{ color: "#8B9199" }}>condition</Col>
              <Col style={{ color: "#8B9199" }}>Brockrage%</Col>
            </Row>
            <Row>
              <Col>10%</Col>
              <Col>20%</Col>
            </Row>
          </Col>
        </Container>
        <Container className="dashboard_wrapper_filter border border_light rounded p-3 mx-5">
          <Col>
            {" "}
            <h4>Milestone 2</h4>
            <Row>
              <Col style={{ color: "#8B9199" }}>condition</Col>
              <Col style={{ color: "#8B9199" }}>Brockrage%</Col>
            </Row>
            <Row>
              <Col>10%</Col>
              <Col>20%</Col>
            </Row>
          </Col>
        </Container>
        <Container className="dashboard_wrapper_filter border border_light rounded p-3 mx-5">
          <Col>
            <h4>Milestone 3</h4>
            <Row>
              <Col style={{ color: "#8B9199" }}>condition</Col>
              <Col style={{ color: "#8B9199" }}>Brockrage%</Col>
            </Row>
            <Row>
              <Col>10%</Col>
              <Col>20%</Col>
            </Row>
          </Col>
        </Container>
      </div>
      <br></br>

      <br></br>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-2 d-flex justify-content-between">
          <h4>About the Project</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <h3>Payment Plan</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around"></div>
        <Table className="profile__transaction mx-3 p-4">
          <thead>
            <tr>
              <th>Payment %</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <br></br>
      <br></br>
      <div className="p-4 d-flex justify-content-between">
        <h3>Loan Approved By</h3>
        <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
          View All
        </i>
      </div>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <img src={Axis} className="rounded my-3" alt="Home" />
          <img src={HDFC} className="rounded my-3" alt="Home" />
          <img src={Axis} className="rounded my-3" alt="Home" />
          <img src={HDFC} className="rounded my-3" alt="Home" />
        </div>
      </Container>
      <br></br>
      <br></br>

      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-between">
          <h4>About the Builder</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
    </>
  );
};
export default Payment;