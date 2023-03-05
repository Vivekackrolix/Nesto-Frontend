import { Container } from "react-bootstrap";
import "./PropertyAnalytics.css";

const PropertyAnalytics = () => {
  return (
    <>
      <h3>Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Listed <br></br> Properties
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Listed <br></br> Properties
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Listed <br></br> Properties
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Listed <br></br> Properties
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyAnalytics;
