import { Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpContent = () => {
  const otpInputs = useRef([]);
  const navigate = useNavigate();

  const handleOtpInputChange = (e, index) => {
    const otpInput = e.target;
    otpInput.value = otpInput.value.replace(/[^0-9]/g, '');

    if (otpInput.value && otpInput.nextSibling) {
      otpInput.nextSibling.focus();
    }

    if (index === 5 && otpInputs.current.every(input => input.value)) {
      navigate('/dsa/home-dashboard');
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      otpInputs.current[index + 1]?.focus();
    } else if (e.key === 'ArrowRight' && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && otpInputs.current[index - 1]) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>OTP</Form.Label>
        <div className="d-flex justify-content-between align-items-center gap-4 mb-3">
          {[...Array(6)].map((_, index) => (
            <Form.Control
              key={index}
              type="text"
              maxLength={1}
              onChange={e => handleOtpInputChange(e, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              ref={ref => (otpInputs.current[index] = ref)}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Form.Text className="text-muted me-3">
            Didn't get OTP. Resend In 30 Sec
          </Form.Text>
        </div>
        <Button
          variant="primary"
          className="w-100 rounded-0 bg-color-primary"
          onClick={() => {
            if (otpInputs.current.every(input => input.value)) {
              navigate('/dsa/home-dashboard');
            }
          }}
        >
          Claim
        </Button>
      </Form.Group>
    </>
  );
};

export default OtpContent;
