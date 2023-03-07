import { Container } from "react-bootstrap";

const Location = () => {
  return (
    <>
      <h3>Location Advantage</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Mini Market<br></br>200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Canteen<br></br>200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>

            <span>
              Hospital <br></br> 200m
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              Station <br></br> 200m
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Location;
