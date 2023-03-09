import { Container, Button } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import sky from "../../Images/Sky.png";
import building from "../../Images/building.png";

const Danelions = () => {
  return (
    <>
      <Container className="pt-2  dashboard__wrapper border border-light rounded shadow-sm">
        <div className="d-flex ">
          <div>
            <img src={sky} className="rounded my-3" alt="Sky" />
          </div>
          <div className="p-2">
            <h3>Sky Danelions Apartment</h3>
            <p style={{ color: "#7D7F88" }}>
              Luxury Apartment in Sector-29,Gurugram
            </p>
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
            <div className="d-flex mx-2">
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
            </div>
          </div>

          <div className="ms-auto p-2   ">
            <h5 style={{ text: "bold" }}> Rs. 3.94L - 6.01Cr</h5>
            <p style={{ color: "#7D7F88" }}>Book now & get 5% Discount</p>
            <br></br>
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
