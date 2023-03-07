import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Danelions = () => {
  return (
    <>
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <div className="d-flex justify-content-around">
          <div className="p-2">Icon</div>
          <div className="p-4">
            <h3>Sky Danelions Apartment</h3>
            <p style={{ color: "#7D7F88" }}>
              Luxury Apartment in Sector-29,Gurugram
            </p>
          </div>

          <div className="ml-auto p-1   ">
            Book now<br></br>
            <Button
              //   variant="primary"
              type="button"
              className="rounded-pill col-5 btn btn-primary   border-0 justify-content-center   mx-5 col"
              as={Link}
              to="/builder/home-dashboard/propertyedit"
            >
              Edit
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Danelions;
