import { Container, Col, Table } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import brochure from "../../../Images/brochure.png";
import DashboardHeader from "../../header/DashboardHeader";
import Axis from "../../../Images/Axis.png";
import HDFC from "../../../Images/HDFC.png";

const PropertyEdit = () => {
  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h2>Property Edit</h2> <br></br>
        <br></br>
        <h2> Amenities</h2>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div
            className="p-4 d-flex justify-content-around "
            style={{ opacity: 0.5 }}
          >
            <div className="text-center d-flex flex-column ">
              <span>10</span>
              <span>2110 Sqft</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>10</span>
              <span>3 Beds</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>10</span>

              <span>1 Bath</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>10</span>
              <span>1 Garages</span>
            </div>
          </div>
        </Container>
        <br></br>
        <br></br>
        <h2>Location Advantage</h2>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div
            className="p-4 d-flex justify-content-around "
            style={{ opacity: 0.5 }}
          >
            <div className="text-center d-flex flex-column ">
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
        <br></br>
        <br></br>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-4 d-flex justify-content-between">
            <h4>About the Project</h4>
          </div>
          <hr />
          <span style={{ color: "#7D7F88", alignitems: "cente" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <br></br>
          <br></br>
        </Container>
        <br></br>
        <br></br>
        <h3>Payment Plan</h3>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-4 d-flex justify-content-around"></div>
          <Table className="profile__transaction">
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
          <div className="p-4 d-flex justify-content-between">
            <h4>About the Builder</h4>
          </div>
          <hr />
          <span style={{ color: "#7D7F88", alignitems: "cente" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <br></br>
          <br></br>
        </Container>
        <br></br>
        <br></br>
        <Col>
          <h2> View official brochure</h2>
          <img src={brochure} className="rounded my-3" alt="Home" />
        </Col>
      </Container>
    </>
  );
};

export default PropertyEdit;
