import { Container } from "react-bootstrap";
import { Button, Card, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import tick from "../../Images/tick.png";
const RecentPackage = () => {
  return (
    <>
      <h3>Recent Package</h3>
      <Container className="shadow-recent mt-2 mb-5 rounded">
        <Row className=" ">
          <Col md={3} className="p-4 plan rounded-start">
            <h5 className="fw-bold">Silver Plan</h5>
            <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
            <p className="fw-bold">₹ 99/per-month</p>
          </Col>
          <Col md={3} className="p-4">
            <ListGroup as="ul">
              <ListGroup.Item as="li">Lorem Ipsum dummy</ListGroup.Item>
              <ListGroup.Item as="li">Lorem Ipsum dummy</ListGroup.Item>
              <ListGroup.Item as="li">Lorem Ipsum dummy</ListGroup.Item>
              <ListGroup.Item as="li">Lorem Ipsum dummy</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} className="p-4">
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
          </Col>
        </Row>
      </Container>
     
    </>
  );
};

export default RecentPackage;
