import { Container, Col, Table, Button } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import brochure from "../../../Images/brochure.png";
import DashboardHeader from "../../header/DashboardHeader";
import Axis from "../../../Images/Axis.png";
import HDFC from "../../../Images/HDFC.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AmenitiesPop from "./Amenitiespop";
import LocationPop from "./LocationPop";
import Footer from "../../Footer/Footer";
import sqft from "../../../Images/sqft.png";
import beds from "../../../Images/beds.png";
import bath from "../../../Images/bath.png";
import garage from "../../../Images/garage.png";
import market from "../../../Images/market.png";
import canteen from "../../../Images/canteen.png";
import hospital from "../../../Images/hospital.png";
import station from "../../../Images/station.png";
import img from "../../../Images/img.png";
import loc from "../../../Images/loc.png";
import FileUpload from "../../Fileupload/Fileupload";
import blank from "../../../Images/blank.png";

const PropertyEdit = () => {
  const [show, setShow] = useState(false);
  const onContinueHandler = () => {
    setShow(true);
  };

  return (
    <>
      <AmenitiesPop show={show} />
      <LocationPop show={show} />
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h2>Property Edit</h2> <br></br>
        <br></br>
        <h2> Images</h2>
        <br></br>
        <div
          className="d-flex gap-4"
          style={{ border: "5.72244px solid #FFFFFF" }}
        >
          <img src={img} className="rounded my-3 mx-3" alt="img" />
          <img src={img} className="rounded my-3" alt="img" />
          <img src={img} className="rounded my-3" alt="img" />
          <img src={img} className="rounded my-3" alt="img" />
          <img src={img} className="rounded my-3" alt="img" />
          <img src={img} className="rounded my-3" alt="img" />
          <img src={blank} className="rounded my-3" alt="img" />
          <div className="rounded my-3">
            <FileUpload />
          </div>
        </div>
        <br></br>
        <br></br>
        <h2>Name</h2>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-3 d-flex justify-content-between ">
            <h4>Reet</h4>
          </div>
        </Container>
        <br></br>
        <br></br>
        <h2>Location</h2>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-3 d-flex justify-content-between">
            <h4>Lorem Ipsum</h4>
            <img src={loc} className="rounded my-3" alt="loc" />
          </div>
        </Container>
        <br></br>
        <br></br>
        <h2>Property category</h2>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm">
          <div className="p-3 d-flex justify-content-between">
            <h4>Lorem Ipsum</h4>
          </div>
        </Container>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <h2> Amenities</h2>
          <Button
            variant="primary"
            size="md"
            className="rounded-circle bg-color-primary"
            onClick={onContinueHandler}
          >
            +
          </Button>
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div
            className="p-4 d-flex justify-content-around "
            style={{ opacity: 0.5 }}
          >
            <div className="text-center d-flex flex-column ">
              <span>
                <img src={sqft} className="rounded my-3" alt="Search" />
              </span>
              <span>2110 Sqft</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={beds} className="rounded my-3" alt="Search" />
              </span>
              <span>3 Beds</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={bath} className="rounded my-3" alt="Search" />
              </span>

              <span>1 Bath</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={garage} className="rounded my-3" alt="Search" />
              </span>
              <span>1 Garages</span>
            </div>
          </div>
        </Container>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <h2>Location Advantage</h2>
          <Button
            variant="primary"
            size="md"
            className="rounded-circle  bg-color-primary "
            onClick={onContinueHandler}
          >
            +
          </Button>
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div
            className="p-4 d-flex justify-content-around "
            style={{ opacity: 0.5 }}
          >
            <div className="text-center d-flex flex-column ">
              <span>
                <img src={market} className="rounded my-3" alt="Search" />
              </span>
              <span>
                Mini Market<br></br>200m
              </span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={canteen} className="rounded my-3" alt="Search" />
              </span>
              <span>
                Canteen<br></br>200m
              </span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={hospital} className="rounded my-3" alt="Search" />
              </span>

              <span>
                Hospital <br></br> 200m
              </span>
            </div>
            <div className="text-center d-flex flex-column">
              <span>
                <img src={station} className="rounded my-3" alt="Search" />
              </span>
              <span>
                Station <br></br> 200m
              </span>
            </div>
          </div>
        </Container>
        <br></br>
        <br></br>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-2 d-flex justify-content-between">
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
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm ">
          <div className="p-2 d-flex justify-content-around"></div>
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
          <Button
            variant="primary"
            size="md"
            className="rounded-circle  bg-color-primary "
          >
            +
          </Button>
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
      <div className="d-grid mt-5">
        <Button
          variant="primary"
          size="sm"
          className="w-70 rounded-pill border-0 bg-color-primary py-4 my-3 mx-5"
          //   onClick={onContinueHandler}
        >
          Submit
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default PropertyEdit;
