import { Container } from "react-bootstrap";
import { Button, Card, Col, Row } from "react-bootstrap";
const PendingInvoice = () => {
  return (
    <>
      <h3>Pending Invoice</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 align-self-stretch">
        <div className=" d-flex justify-content-between align-self-stretch">
          <Row>
            <div style={{ background: "#D8D9DB" }}>
              <br />
              <Col>Silver Plan</Col>
              <br />
              <Col>The perfect all-rounder</Col>
              <br />
              <Col>₹ 99/per-month</Col>
              <br />
            </div>
          </Row>
          <Row>
            <div>
              <Col>Lorem Ipsum dummy</Col> <br />
              <Col>Lorem Ipsum dummy</Col>
              <br />
              <Col>Lorem Ipsum dummy</Col> <br />
              <Col>Lorem Ipsum dummy</Col>
            </div>
          </Row>
          <hr />
          <Row>
            <div>
              <Col
                style={{
                  color: "#0070C0",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                6 Days Left
              </Col>
              <br />
              <Col>(12/24 Visits Left)</Col>
              <br />
              <Col>
                <span className="d-grid mt-3 d-flex justify-content-between">
                  <Button
                    variant="primary"
                    size="md"
                    className="rounded-pill border-0 bg-color-primary py-1 wd-120"
                  >
                    Renew
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="rounded-pill border-0 bg-color-primary py-1 wd-120"
                  >
                    Upgrade
                  </Button>
                </span>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default PendingInvoice;
