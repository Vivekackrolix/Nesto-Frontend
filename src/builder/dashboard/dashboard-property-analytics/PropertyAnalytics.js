import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PropertyAnalytics.css";
import { useEffect, useState } from "react";
import axios from "axios";

const PropertyAnalytics = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getSubscription = async () => {
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/builder/getPropertyAnalytics?id=64107bce7b4c4240671aeb94",
        "http://localhost:3000/api/v1/builder/getPropertyAnalytics?id=64107bce7b4c4240671aeb94",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data);
      setData(response.data.data);
    };

    getSubscription();
  }, []);

  // const plans = data.map((itm) => {
  return (
    <>
      <h3 className="heading">Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded-4 shadow-sm mt-2">
        <Row className="p-4 align-items-center text-center">
          <Col md={3} sm={6} className="d-grid my-2">
            {/* {plans} */}
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data.listedProperties}
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
              {data.soldOutUnits}
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
              {data.totalVisit}
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
              {data.averageTimeToSell} Days
            </span>
            <span style={{ opacity: 0.5 }}>
              Average <br></br> time to sell
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
  // });
};

export default PropertyAnalytics;
