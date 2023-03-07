import { Col, Container, Row } from "react-bootstrap";

const Amenities = () => {
  return (
    <>
      <h3>Project Amenities</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div
          className="p-4 d-flex justify-content-around "
          style={{ opacity: 0.5 }}
        >
          <div className="text-center d-flex flex-column ">
            <span>10</span>
            <span>2110 Sqft</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>

            <span>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>1 Balcony</span>
          </div>
        </div>
        <div
          className="p-4 d-flex justify-content-around"
          style={{ opacity: 0.5 }}
        >
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>2110 Sqft</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>3 Beds</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>

            <span>1 Bath</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>1 Garages</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>1 Balcony</span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Amenities;
