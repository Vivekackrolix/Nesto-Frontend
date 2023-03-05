import { Button, Card, Container } from "react-bootstrap";

const SoldOut = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Card className="m-4" style={{ width: "23rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Container className="mt-5">
      <div className="row justify-content-between">
        <h3 className="col-4">Recently Sold Out Property</h3>
        <i className="col-1">View all</i>
      </div>
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div className="mt-4 row row-cols-2 justify-content-center">
        {propertyListing}
      </div>
    </Container>
  );
};

export default SoldOut;
