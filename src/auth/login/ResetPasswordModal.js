import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CustomModal } from '../../components';
import OtpContent from './OtpContent';

const ResetPasswordModal = ({ show }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <CustomModal show={show} title="Reset Password?">
      <p className="text-text-muted text-center">
        An OTP has been sent to your mobile number.
      </p>
      <Form>
        <OtpContent />
        <Form.Group className="mb-3" controlId="formNewPassword">
          <Form.Label>New Password</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="password"
              placeholder="New Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <i className="bi bi-eye-slash ms-2"></i>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
            />
            <i className="bi bi-eye-slash ms-2"></i>
          </div>
        </Form.Group>
        <Button variant="primary" className="w-100 rounded-0 bg-color-primary">
          Submit
        </Button>
      </Form>
    </CustomModal>
  );
};

export default ResetPasswordModal;
