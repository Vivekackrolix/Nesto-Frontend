import { Container, Table, Button, Form, Row } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import brochure from "../../../Images/brochure.png";
import DashboardHeader from "../../header/DashboardHeader";
import Axis from "../../../Images/Axis.png";
import HDFC from "../../../Images/HDFC.png";
// import { Link } from "react-router-dom";
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
import { RiAddFill } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";
import edit from "../../../Images/edit.png";
import SubmitPop from "./Submitpop";
import CreatableSelect from "react-select/creatable";
import BankPop from "./BankPop";
const sort = [
  { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  { value: "Lorem ipsum", label: "Lorem Ipsum" },
];
const PropertyEdit = () => {
  // const [show, setShow] = useState({
  //   amenities: false,
  //   location: false,
  //   submit: false,
  // });
  // console.log(show);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showBank, setShowBank] = useState(false);

  const onAmenitiesClick = () => {
    setShowAmenities(true);
  };
  const onLocationClick = () => {
    setShowLocation(true);
  };
  const onBankClick = () => {
    setShowBank(true);
  };

  // const UploadAndDisplayImage = () => {
  //   const [images, setImages] = useState([] as any);
  //   const [imageURLS, setImageURLs] = useState([]);
  //   useEffect(() => {
  //     if (images.length < 1) return;
  //     const newImageUrls: any = [];
  //     images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image)));
  //     setImageURLs(newImageUrls);
  //   }, [images]);

  //   function onImageChange(e: any) {
  //     setImages([...e.target.files]);
  //   }
  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3 className="heading">Property Edit</h3> <br></br>
        <br></br>
        <h3> Images</h3>
        <br></br>
        <Row className="gx-4 dashboard-cards align-items-center">
          <div
            className="d-flex gap-2"
            style={{ border: "5.72244px solid #FFFFFF" }}
          >
            <img src={img} className="rounded my-3 mx-3" alt="img" />
            <img src={img} className="rounded my-3  " alt="img" />
            <img src={img} className="rounded my-3" alt="img" />
            <img src={img} className="rounded my-3" alt="img" />
            <img src={img} className="rounded my-3" alt="img" />
            <img src={img} className="rounded my-3" alt="img" />
            <img src={blank} className="rounded my-3" alt="img" />
            <div className="rounded my-3">
              <FileUpload />
            </div>
          </div>
        </Row>
        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>
            <h5>Name</h5>
          </Form.Label>
          <Form.Control
            size="lg"
            className="rounded-0"
            type="text"
            placeholder="Reet"
          />
        </Form.Group>
        <br></br>
        <br></br>
        <h4>Location</h4>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{ background: "#F8F8F8" }}
        >
          <div className="p-2 d-flex justify-content-between">
            <h4>Lorem Ipsum</h4>
            <img src={loc} className="rounded my-3" alt="loc" />
          </div>
        </Container>
        <br></br>
        <br></br>
        <Form className="profile__form">
          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              <h3 className="heading">Property Category</h3>
            </Form.Label>
            <CreatableSelect
              size="lg"
              isMulti
              placeholder="Lorem Ipsum"
              options={sort}
              className="rounded-0 "
              styles={{ background: "#F8F8F8" }}
            />
            <br />
          </Form.Group>
        </Form>
        <br></br>
        <div className="d-flex justify-content-between">
          <h3 className="heading"> Amenities</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="sm"
            className="rounded-circle bg-color-primary p-3"
            onClick={onAmenitiesClick}
          >
            <RiAddFill size={20} />
          </Button>
          <AmenitiesPop
            onSubmit={setShowSubmit}
            show={showAmenities}
            onHide={setShowAmenities}
          />
        </div>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{ boxShadow: "0px 6.86709px 30.0435px rgba(0, 0, 0, 0.07)" }}
        >
          <div
            className="p-2 d-flex justify-content-around "
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
          <h3 className="heading">Location Advantage</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="sm"
            className="rounded-circle  bg-color-primary p-3"
            onClick={onLocationClick}
          >
            <RiAddFill size={20} />
          </Button>
          <LocationPop
            onSubmit={setShowSubmit}
            show={showLocation}
            onHide={setShowLocation}
          />
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
                Mini Market
                <br />
                200m
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
        <h3 className="heading">About the Project</h3>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Container>
        <br></br>
        <br></br>
        <h3 className="heading">Payment Plan</h3>
        <Table
          className=" table table-secondary profile__transaction table"
          style={{ background: "#F8F8F8" }}
        >
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
        {/* </div> */}
        <br></br>
        <br></br>
        <div className="p-4 d-flex justify-content-between">
          <h3 className="heading">Loan Approved By</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="md"
            className="rounded-circle  bg-color-primary p-3"
            onClick={onBankClick}
          >
            <RiAddFill size={20} />
          </Button>
          <BankPop
            onSubmit={setShowSubmit}
            show={showBank}
            onHide={setShowBank}
          />
        </div>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3"
        >
          <div className="p-4 d-flex justify-content-around">
            <img src={Axis} className="rounded my-3" alt="Home" />
            <img src={HDFC} className="rounded my-3" alt="Home" />
            <img src={Axis} className="rounded my-3" alt="Home" />
            <img src={HDFC} className="rounded my-3" alt="Home" />
          </div>
        </Container>
        <br></br>
        <br></br>
        <h3 className="heading">About the Builder</h3>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 "
          style={{ background: "#F8F8F8" }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Container>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <h3 className="heading"> View Official Brochure</h3>
          <BsPencilFill
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "8px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
        </div>
        <br />
        <div className="gx-4 dashboard-cards align-items-center">
          <img src={brochure} className="rounded my-3 w-100" alt="Home" />
        </div>
      </Container>
      <div className="container text-center">
        <Button
          variant="primary"
          size="sm"
          className="rounded-pill border-0 py-2 px-5 my-3"
        >
          Submit
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default PropertyEdit;
