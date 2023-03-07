import { Button, Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../Images/propertyimage.png";
import { Link } from "react-router-dom";

const SoldOut = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Card className="m-4" style={{ width: "23rem" }}>
        <Card.Img variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}
          <Card.Text>
            <Row>
              <Row>
                {" "}
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                    textDecoration: "none",
                  }}
                  to="/builder/home-dashboard/sold"
                >
                  Sky Danelions Apartment
                </Link>
              </Row>
              <Row style={{ opacity: 0.5 }}>Farmhouse in Sector 63 Gurgaon</Row>
            </Row>
            <Row className="pt-3">
              <Col>
                <Row style={{ opacity: 0.5 }}>Unit Type</Row>
                <Row>2BHK</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Unit Number</Row>
                <Row>123456789</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Selling Price</Row>
                <Row>₹ 3.94 Cr</Row>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Row style={{ opacity: 0.5 }}>Client Name</Row>
                <Row>Lorem Ipsum</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Broker ID</Row>
                <Row>1234456</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Selling Date</Row>
                <Row>10/11/22</Row>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Container className="mt-5">
      <div className="row justify-content-between">
        <h3 className="col-4">Recently Sold Out Property</h3>
        <i className="col-1" style={{ color: "#FC5C67" }}>
          View all
        </i>
      </div>
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div className="mt-4 row row-cols-2 justify-content-center">
        {propertyListing}
      </div>
    </Container>
  );
};

export default SoldOut;
