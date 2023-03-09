import { Container } from "react-bootstrap";

const Anlytics = () => {
  return (
    <>
      <h3>Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              2<br></br>Sold
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              20<br></br>Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>

            <span>
              200 <br></br> Search
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              100 <br></br> Views
            </span>
          </div>{" "}
          <div className="text-center d-flex flex-column">
            <span>10</span>
            <span>
              40 <br></br> Shared
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Anlytics;
