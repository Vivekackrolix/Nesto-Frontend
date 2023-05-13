import { Container } from "react-bootstrap";

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
          {data?.locationAdvantagesId?.map((itm) => (
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
        </div>
      </Container>
      {/* <br></br> */}
      <br></br>
    </>
  );
};
export default Location;
