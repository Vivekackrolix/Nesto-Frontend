import { Container } from "react-bootstrap";
import market from "../../../Images/market.png";
import canteen from "../../../Images/canteen.png";
import hospital from "../../../Images/hospital.png";
import station from "../../../Images/station.png";
const Location = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Location Advantage</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
        style={{ border: "2.94206px solid #E3E3E7", boxSizing: "border-box" }}
      >
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>
              <img src={market} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Mini Market<br></br>200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={canteen} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Canteen<br></br>200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={hospital} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Hospital<br></br>200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={station} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Station <br></br> 200m
            </span>
          </div>
        </div>
      </Container>
      <br></br>
      <br></br>
    </>
  );
};
export default Location;
