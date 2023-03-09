import { Form, Button } from 'react-bootstrap';

const OtpContent = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>OTP</Form.Label>
        <div className="d-flex justify-content-between align-items-center gap-4 mb-3">
          <Form.Control type="text" maxLength={1} />
          <Form.Control type="text" maxLength={1} />
          <Form.Control type="text" maxLength={1} />
          <Form.Control type="text" maxLength={1} />
          <Form.Control type="text" maxLength={1} />
          <Form.Control type="text" maxLength={1} />
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Form.Text className="text-muted me-3">
            Didn't get OTP. Resend In 30 Sec
          </Form.Text>
        </div>
        <Button variant="primary" className="w-100 rounded-0 bg-color-primary">
          Submit
        </Button>
      </Form.Group>
    </>
  );
};

export default OtpContent;
