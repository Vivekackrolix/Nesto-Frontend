import { Form, Button } from 'react-bootstrap';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
// import CreatableSelect from "react-select/creatable";
import FileUpload from '../file-upload/FileUpload';
// const options = [
//   { value: "sector 28", label: "Sector 28" },
//   { value: "hDFC Bank", label: "HDFC Bank" },
// ];
const tabKey2 = ['Personal Info', 'Bank Info'];

// personal info
const PersonalInfo = ({ getBrokerByIdResponse }) => {
  return (
    <Form className="profile__form ps-2">
      <Form.Group className="mb-4" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="rounded-0"
          type="email"
          placeholder="enter you email"
          value={getBrokerByIdResponse.email ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="enter you phone number"
          value={getBrokerByIdResponse.phoneNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="enter your address"
          value={getBrokerByIdResponse.address ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="address">
        <Form.Label>Pan Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="pan number"
          value={getBrokerByIdResponse.panNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="address">
        <Form.Label>RERA Registration Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="rera register number"
          value={getBrokerByIdResponse.reraRegistrationNumber ?? ''}
          onChange={() => {}}
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

const BankInfo = ({ getBrokerByIdResponse }) => {
  return (
    <Form className="profile__form ps-2">
      <Form.Group className="mb-4">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          className="rounded-0"
          type="text"
          placeholder="Bank Name"
          value={getBrokerByIdResponse.bankName ?? ''}
          onChange={() => {}}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="account number"
          value={getBrokerByIdResponse.accountNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>Confirm Account Number</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="confirm account number"
          value={getBrokerByIdResponse.accountNumber ?? ''}
          onChange={() => {}}
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="phoneNumber">
        <Form.Label>IFSC Code</Form.Label>
        <Form.Control
          className="rounded-0"
          type="tel"
          placeholder="IFSC CODE"
          value={getBrokerByIdResponse.ifscCode ?? ''}
          onChange={() => {}}
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

const PersonalDetailsForm = ({ getBrokerByIdResponse }) => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}>
        <PersonalInfo
          tabKey={tabKey2[0]}
          getBrokerByIdResponse={getBrokerByIdResponse}
        />
        <BankInfo
          tabKey={tabKey2[1]}
          getBrokerByIdResponse={getBrokerByIdResponse}
        />
      </DashboardTabs>
    </>
  );
};

export default PersonalDetailsForm;
