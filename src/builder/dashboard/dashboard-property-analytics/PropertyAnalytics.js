import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PropertyAnalytics.css";

const PropertyAnalytics = () => {
  return (
    <>
      <h3 className="heading">Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded-4 shadow-sm mt-2">
        <Row className="p-4 align-items-center text-center">
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5 }}>
              Listed <br></br> Properties
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5 }}>
              Sold Out <br></br> Units
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <Link
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
                textDecoration: "none",
              }}
              to="/builder/home-dashboard/visit"
            >
              10
            </Link>
            <span style={{ opacity: 0.5 }}>
              Total <br></br> Visits
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5 }}>
              Average <br></br> time to sell
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropertyAnalytics;
