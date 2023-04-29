import { Container } from "react-bootstrap";
import market from "../../../Images/market.png";
import canteen from "../../../Images/canteen.png";
import hospital from "../../../Images/hospital.png";
import station from "../../../Images/station.png";
const Location = ({ data }) => {
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
          {data?.locationAdvantages?.map((itm) => (
            <div className="text-center d-flex flex-column">
              <span>
                <img
                  src={itm?.iconUrl}
                  className="rounded my-3"
                  alt="location"
                />
              </span>
              <span style={{ fontFamily: "Bahnschrift" }}>
                {itm?.name}
                <br></br>
                <span style={{ opacity: "0.5" }}>{itm?.distance}</span>
              </span>
            </div>
          ))}
          {/* <div className="text-center d-flex flex-column">
            <span>
              <img src={canteen} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Canteen<br></br>
              <span style={{ opacity: "0.5" }}>200m</span>
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={hospital} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Hospital<br></br>
              <span style={{ opacity: "0.5" }}>200m</span>
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={station} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              Station <br></br>
              <span style={{ opacity: "0.5" }}> 200m</span>
            </span>
          </div> */}
        </div>
      </Container>
      <br></br>
      <br></br>
    </>
  );
};
export default Location;
