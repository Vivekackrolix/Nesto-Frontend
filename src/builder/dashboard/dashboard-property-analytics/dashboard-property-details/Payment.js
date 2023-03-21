import { Col, Container, Row, Table } from "react-bootstrap";
import Axis from "../../../Images/Axis.png";
import HDFC from "../../../Images/HDFC.png";
import dlf from "../../../Images/dlf.png";

const Payment = () => {
  return (
    <>
      <div className=" d-flex justify-content-around rounded">
        <div className=" border border_light rounded container mx-4">
          <div className="d-flex bd-highlight mb-3">
            <div className="me-auto p-1 bd-highlight">
              {" "}
              <img src={dlf} alt="" />
            </div>
            <span className="me-auto p-2 bd-highlight">
              <h4>DLF Tower</h4>

              <h6 style={{ color: "#8B9199" }}>Shivaji Nagar</h6>

              <h6 style={{ color: "#8B9199" }}>0.06 KM distance</h6>
            </span>
          </div>
        </div>

        <div className=" border border_light rounded container mx-4">
          <div className="d-flex bd-highlight mb-3">
            <div className="me-auto p-1 bd-highlight">
              {" "}
              <img src={dlf} alt="" />
            </div>
            <span className="me-auto p-2 bd-highlight">
              <h4>DLF Tower</h4>

              <h6 style={{ color: "#8B9199" }}>Shivaji Nagar</h6>

              <h6 style={{ color: "#8B9199" }}>0.06 KM distance</h6>
            </span>
          </div>
        </div>

        <div className=" border border_light rounded container mx-4">
          <div className="d-flex bd-highlight mb-3">
            <div className="me-auto p-1 bd-highlight">
              {" "}
              <img src={dlf} alt="" />
            </div>
            <span className="me-auto p-2 bd-highlight">
              <h4>DLF Tower</h4>

              <h6 style={{ color: "#8B9199" }}>Shivaji Nagar</h6>

              <h6 style={{ color: "#8B9199" }}>0.06 KM distance</h6>
            </span>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <h3>Brockrage Payout plan</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <br></br>
        <h4>Brockrage 5%</h4>
        <p style={{ color: "#7D7F88" }}>
          Platform charges & applicable taxes shall be deducted
        </p>

        <br></br>
      </Container>

      <br></br>
      <br></br>
      <h3>Milestone</h3>
      <br></br>

      <div className="p-1 d-flex justify-content-between  rounded">
        <Container
          className="dashboard_wrapper_filter border border_light rounded container p-3 mx-5 "
          style={{ border: "2.94206px solid #E3E3E7" }}
        >
          <h4>Milestone 1</h4>
          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Condition</h5>
              <h5>10%</h5>
            </span>
            <span>
              <h5 style={{ color: "#8B9199" }}>Brokerage%</h5>
              <h5>20%</h5>
            </span>
          </div>
        </Container>
        <Container
          className="dashboard_wrapper_filter border border_light rounded p-3 mx-5"
          style={{ border: "2.94206px solid #E3E3E7" }}
        >
          {" "}
          <h4>Milestone 2</h4>
          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Condition</h5>
              <h5>10%</h5>
            </span>
            <span>
              <h5 style={{ color: "#8B9199" }}>Brokerage%</h5>
              <h5>20%</h5>
            </span>
          </div>
        </Container>
        <Container
          className="dashboard_wrapper_filter border border_light rounded p-3 mx-5"
          style={{ border: "2.94206px solid #E3E3E7" }}
        >
          <h4>Milestone 3</h4>
          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Condition</h5>
              <h5>10%</h5>
            </span>
            <span>
              <h5 style={{ color: "#8B9199" }}>Brokerage%</h5>
              <h5>20%</h5>
            </span>
          </div>
        </Container>
      </div>
      <br></br>

      <br></br>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-2 d-flex justify-content-between">
          <h4>About the Project</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <h3>Payment Plan</h3>
      <Container className="  border-light rounded shadow-sm ">
        <div className=" d-flex justify-content-around"></div>
        <Table className=" table table-hover profile__transaction ">
          <thead>
            <tr>
              <th>Payment %</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
            <tr>
              <td>10%</td>
              <td>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <br></br>
      <br></br>
      <div className="p-4 d-flex justify-content-between">
        <h3>Loan Approved By</h3>
        <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
          View All
        </i>
      </div>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <img src={Axis} className="rounded my-3" alt="Home" />
          <img src={HDFC} className="rounded my-3" alt="Home" />
          <img src={Axis} className="rounded my-3" alt="Home" />
          <img src={HDFC} className="rounded my-3" alt="Home" />
        </div>
      </Container>
      <br></br>
      <br></br>

      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-3 d-flex justify-content-between">
          <h4>About the Builder</h4>
          <i style={{ color: "#FC5C67", textDecorationLine: "underline" }}>
            View Details
          </i>
        </div>
        <hr />
        <span style={{ color: "#7D7F88", alignitems: "cente" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
    </>
  );
};
export default Payment;
