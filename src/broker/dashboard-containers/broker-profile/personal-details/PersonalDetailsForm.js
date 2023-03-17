import { Form, Button } from "react-bootstrap";
import DashboardTabs from "../dashboard-tabs/DashboardTabs";
// import CreatableSelect from "react-select/creatable";
import FileUpload from "../file-upload/FileUpload";
// const options = [
//   { value: "sector 28", label: "Sector 28" },
//   { value: "hDFC Bank", label: "HDFC Bank" },
// ];
const tabKey2 = ["Personal Info", "Bank Info"];

// personal info
const PersonalInfo = () => {
  return (
    <Form className="profile__form ps-2">
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
        <Form.Label>Pan Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="WD3 12 3321D"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Label>RERA Registration Number</Form.Label>
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
  );
};

const BankInfo = () => {
  return (
    <Form className="profile__form ps-2">
      <Form.Group className="mb-4">
        <Form.Label>Bank Name</Form.Label>
        <Form.Select className="form-control-sm rounded-0">
          <option>HDFC</option>
          <option>HDFC</option>
          <option>HDFC</option>
          <option>HDFC</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="48577888980000000"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Confirm Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="48577888980000000"
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>IFSC Code</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="HD01FC0023"
        />
      </Form.Group>

      <div className="d-flex gap-4 mt-5">
        <Button className="btn-color-outline-primary rounded-100 btn-rounded">
          Cancel
        </Button>
        <Button className="btn-color-primary rounded-100 btn-rounded">
          Save
        </Button>
      </div>
    </Form>
  );
};

const PersonalDetailsForm = () => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}>
        <PersonalInfo tabKey={tabKey2[0]} />
        <BankInfo tabKey={tabKey2[1]} />
      </DashboardTabs>
    </>
  );
};

export default PersonalDetailsForm;
