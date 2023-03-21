import { Form, Button, Col } from "react-bootstrap";
// import CreatableSelect from "react-select/creatable";

import FileUpload from "../file-upload/FileUpload";

// const options = [
//   { value: "sector 28", label: "Sector 28" },
//   { value: "hDFC Bank", label: "HDFC Bank" },
// ];

const PersonalDetailsForm = () => {
  return (
    <>
      <h3>
        Personal Details
      </h3>
      <br />
      <Form className="profile__form row">
        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control className="rounded-2" type="text" placeholder="DLF" />
          </Form.Group>
        </Col>
        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="rounded-2"
              type="email"
              placeholder="jack.s@gmail.com"
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="rounded-2"
              type="tel"
              placeholder="4857788898"
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="Sector 13,Karnal"
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Company Type</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>GST</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
            />
          </Form.Group>
        </Col>

        <Col md={12} sm={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>PAN of the Company</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
            />
          </Form.Group>
        </Col>
        <Col md={12} sm={12}>
          <Form.Label className="mb-0">Upload Documents</Form.Label>
          <FileUpload />
        </Col>

        <div className="d-flex gap-4 mt-2">
          <Button className="btn-color-outline-primary rounded-100 btn-rounded">
            Cancel
          </Button>
          <Button className="btn-color-primary rounded-100 btn-rounded">
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default PersonalDetailsForm;
