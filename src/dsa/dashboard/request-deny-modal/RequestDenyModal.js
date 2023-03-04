import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { CustomModal } from '../../components';
import './RequestDenyModal.css';
const RequestDenyModal = ({ show }) => {
  return (
    <CustomModal show={show} title="Request Deny">
      <p
        className="text-text-muted text-center mb-0"
        style={{ lineHeight: '1.6' }}
      >
        Are you sure you want to Deny this lead. Please Share the Reason
      </p>
      <Form className="request__deny__form">
        <div className="d-grid">
          <Form.Group className="mt-4 mb-1">
            <FloatingLabel
              controlId="select1Input"
              label="Reason"
              className="mb-3"
            >
              <Form.Select required className="rounded-0 border-0">
                <option>Select option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              controlId="commentInput"
              label="Comment"
              className="mb-3"
            >
              <Form.Control
                className="form-control-sm rounded-0 border-0"
                as="textarea"
                placeholder="Enter comment"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </Form.Group>
        </div>
      </Form>
      <Button
        variant="primary"
        className="w-100 rounded-100 bg-color-primary my-4"
      >
        Deny
      </Button>
    </CustomModal>
  );
};

export default RequestDenyModal;
