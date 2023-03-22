import { Container } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecentPackage = () => {
  return (
    <>
      <h3 className="heading">Recent Package</h3>
      <Container className="shadow-sm mt-2 mb-5 rounded">
        <Row>
          <Col
            md={3}
            className="plan rounded-start text-center"
            style={{ padding: "40px" }}
          >
            <h4 className="fw-bold">Silver Plan</h4>
            <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
            <p className="fw-bold">₹ 99/per-month</p>
          </Col>
          <Col md={3} className="p-4">
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#278fd9" className="me-2" />
                Lorem Ipsum dummy
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#278fd9" className="me-2" />
                Lorem Ipsum dummy
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#278fd9" className="me-2" />
                Lorem Ipsum dummy
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#278fd9" className="me-2" />
                Lorem Ipsum dummy
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} className="p-4 text-center">
            <div style={{ borderLeft: "1px solid #d4d4d4" }}>
              <h5
                style={{
                  color: "#0070C0",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                6 Days Left
              </h5>
              <p>(12/24 Visits Left)</p>
              <span className="p-3 gap-4 d-flex justify-content-center">
                <Button
                  type="button"
                  variant="transparent"
                  size="lg"
                  className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  as={Link}
                  to="/builder/home-dashboard/subscription"
                >
                  Renew
                </Button>
                <Button
                  type="button"
                  variant="transparent"
                  size="lg"
                  className="rounded-2 border-0 bg-color-primary px-4 py-2 wd-120"
                  as={Link}
                  to="/builder/home-dashboard/subscription"
                >
                  Upgrade
                </Button>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecentPackage;
