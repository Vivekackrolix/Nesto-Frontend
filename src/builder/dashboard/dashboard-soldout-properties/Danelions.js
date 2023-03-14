import { Container, Button } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import sky from "../../Images/Sky.png";
import building from "../../Images/building.png";
import editbutton from "../../Images/editbutton.png";

const Danelions = () => {
  return (
    <>
      <Container
        className="pt-1   dashboard__wrapper border border-light rounded shadow-sm"
        style={{
          boxShadow: "0px 7.86258px 44.4353px rgba(0, 0, 0, 0.07)",
          boxSizing: "border-box",
        }}
      >
        <div className="d-flex ">
          <div
          // style={{
          //   border: "1.20506px solid #EBECF0",
          //   filter:
          //     "drop-shadow(0px 7.77264px 44.3583px rgba(0, 0, 0, 0.07))",
          // }}
          >
            <img src={sky} className="rounded my-3" alt="Sky" />
          </div>
          <div className="p-2">
            <h3>Sky Danelions Apartment</h3>
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
            <p style={{ color: "#7D7F88" }}>
              Luxury Apartment in Sector-29,Gurugram
            </p>

            <div className="d-flex mx-2">
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
              <img src={building} className="rounded my-3 mx-2" alt="Sky" />
            </div>
          </div>

          <div className="ms-auto p-2  ">
            <h4 style={{ text: "bold", fontFamily: "Bahnschrift" }}>
              Rs. 3.94L - 6.01Cr
            </h4>
            <p style={{ color: "#7D7F88" }}>Book now & get 5% Discount</p>
            <br></br>

            <Button
              //   variant="primary"
              type="button"
              className=" d-flex rounded-pill col-5 btn btn-light justify-content-center   mx-5 gap-2"
              as={Link}
              to="/builder/home-dashboard/propertyedit"
            >
              <img src={editbutton} alt="" />
              Edit
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Danelions;
