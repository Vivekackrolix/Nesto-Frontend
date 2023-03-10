import { Container } from "react-bootstrap";
import { Button, Card, Col, Row } from "react-bootstrap";
import tick from "../../Images/tick.png";
const PendingInvoice = () => {
  return (
    <>
      <h3>Pending Invoice</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-2 "
        style={{ boxShadow: "0px 4.21262px 18.9568px rgba(0, 112, 192, 0.3)" }}
      >
        <div className=" d-flex justify-content-xl-between gap-5 ">
          <Row className="justify-content-center lg-2 ml-2">
            <div style={{ background: "#D8D9DB", alignContent: "center" }}>
              <br />
              <Col style={{ fontWeight: "bold" }}>Silver Plan</Col>
              <br />
              <Col style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                The perfect all-rounder
              </Col>
              <br />
              <Col style={{ fontWeight: "bold" }}>₹ 99/per-month</Col>
            </div>
          </Row>
          <Row>
            <div className="p-2 my-2">
              <Col className="d-flex">
                <img src={tick} alt="" />
                Lorem Ipsum dummy
              </Col>{" "}
              <br />
              <Col className="d-flex">
                <img src={tick} alt="" />
                Lorem Ipsum dummy
              </Col>
              <br />
              <Col className="d-flex">
                <img src={tick} alt="" />
                Lorem Ipsum dummy
              </Col>
              <br />
              <Col className="d-flex">
                <img src={tick} alt="" />
                Lorem Ipsum dummy
              </Col>
            </div>
          </Row>
          <hr />
          <Row>
            <div className="justify-content-center">
              <Col
                style={{
                  color: "#0070C0",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  textAlign: "center",
                }}
              >
                6 Days Left
              </Col>
              <br />
              <Col style={{ textAlign: "center" }}>(12/24 Visits Left)</Col>

              <Col>
                <span className="d-grid mt-3 d-flex justify-content-between gap-4 p-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className=" border-0 bg-color-primary py-1 wd-120 "
                  >
                    Renew
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className=" border-0 bg-color-primary py-1 wd-120"
                  >
                    Upgrade
                  </Button>
                </span>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
      <br></br>
    </>
  );
};

export default PendingInvoice;
