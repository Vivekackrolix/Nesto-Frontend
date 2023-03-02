import { Form, Button } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
// import CreatableSelect from 'react-select/creatable';

const PersonalDetailsForm = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter company name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group controlId="areaOfOperation">
          <Form.Label>Area of Operation</Form.Label>
          {/* <CreatableSelect isMulti placeholder="Add more" options={[]} /> */}
        </Form.Group>

        <Form.Group controlId="bankAssociation">
          <Form.Label>Bank Association</Form.Label>
          {/* <CreatableSelect isMulti placeholder="Add more" options={[]} /> */}
        </Form.Group>

        <Form.Group controlId="loanRange">
          <Form.Label>Loan Range</Form.Label>
          <div className="d-flex align-items-center">
            <FiMinus />
            <Form.Control
              type="range"
              min={0}
              max={10000}
              className="flex-grow-1 mx-3"
            />
            <FiPlus />
          </div>
          <div className="text-center">
            <span className="font-weight-bold">0 - 10000</span>
          </div>
        </Form.Group>

        {/* <Form.Group controlId="uploadDocument">
          <Form.Label>Upload Document</Form.Label>
          <Form.File id="uploadDocument" />
        </Form.Group> */}

        <div className="d-flex justify-content-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </>
  );
};

export default PersonalDetailsForm;
