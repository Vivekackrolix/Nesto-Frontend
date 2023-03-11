import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PropertyAnalytics.css";

const PropertyAnalytics = () => {
  return (
    <>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Property Analytics</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
        style={{
          boxShadow: "0px 10.7036px 46.8282px rgba(0, 0, 0, 0.07)",
          borderRadius: "26px",
        }}
      >
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Listed <br></br> Properties
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Sold Out <br></br> Units
            </span>
          </div>
          <div className="text-center d-flex flex-column">
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
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Total <br></br> Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Average <br></br> time to sell
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyAnalytics;
