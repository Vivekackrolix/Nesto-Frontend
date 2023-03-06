import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../Images/propertyadded.png";

const RecentlyAdded = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Card className="m-4" style={{ width: "23rem" }}>
        <Card.Img variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}
          <Card.Text>
            <Row>
              <Row>Sky Danelions Apartment</Row>
              <Row style={{ opacity: 0.5 }}>
                Luxury Apartment in Sector-29,Gurugram
              </Row>
            </Row>
            <Row className="pt-3">
              <Col>
                <Row>Unit Type</Row>
                <Row>2BHK</Row>
              </Col>
              <Col>
                <Row>Unit Number</Row>
                <Row>123456789</Row>
              </Col>
              <Col>
                <Row>Selling Price</Row>
                <Row>Rs. 3.94 Cr</Row>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <Row>Client Name</Row>
                <Row>Lorem Ipsum</Row>
              </Col>
              <Col>
                <Row>Broker ID</Row>
                <Row>1234456</Row>
              </Col>
              <Col>
                <Row>Selling Date</Row>
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
        <h3 className="col-4">Recently Added</h3>
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

export default RecentlyAdded;
