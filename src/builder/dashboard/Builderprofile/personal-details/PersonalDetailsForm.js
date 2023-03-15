import { Form, Button } from "react-bootstrap";
// import CreatableSelect from "react-select/creatable";

import FileUpload from "../file-upload/FileUpload";

// const options = [
//   { value: "sector 28", label: "Sector 28" },
//   { value: "hDFC Bank", label: "HDFC Bank" },
// ];

const PersonalDetailsForm = () => {
  return (
    <>
      <h2 style={{ fontWeight: "Bold", color: " #000000" }}>
        Personal Details
      </h2>
      <br />
      <Form className="profile__form ps-2">
        <Form.Group className="mb-4" controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control className="rounded-0" type="text" placeholder="DLF" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="rounded-0"
            type="email"
            placeholder="jack.s@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            className="rounded-0"
            type="tel"
            placeholder="4857788898"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="Sector 13,Karnal"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="address">
          <Form.Label>Company Type</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="WD3 12 3321D"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="address">
          <Form.Label>GST</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="WD3 12 3321D"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="address">
          <Form.Label>PAN of the Company</Form.Label>
          <Form.Control
            className="rounded-0"
            type="text"
            placeholder="WD3 12 3321D"
          />
        </Form.Group>
        <Form.Label>Upload Documents</Form.Label>

        <FileUpload />

        <div className="d-flex gap-4 mt-5">
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
