import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiTimerLine } from 'react-icons/ri';
import './OtpContent.css';
const OtpContent = () => {
  const otpInputs = useRef([]);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);

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
    } else if (e.key === 'Backspace' && !otpInputs.current[index].value) {
      e.preventDefault();
      otpInputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/dsa/home-dashboard');
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  return (
    <>
      <Form.Group className="mb-3">
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
            <div className="d-flex align-items-center justify-content-center gap-1">
              <RiTimerLine color="#278FD9" />
              <span className="otp-timer nes__dashboard__resend">
                {formattedTime}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span>Didn't received code?</span>
              <Button
                color="Resend"
                variant="transparent"
                className="fw-semibold nes__dashboard__resend"
              >
                Resend
              </Button>
            </div>
          </Form.Text>
        </div>
        <Button
          variant="primary"
          className="w-100 rounded-pill bg-color-primary"
          onClick={() => {
            if (otpInputs.current.every(input => input.value)) {
              navigate('/dsa/home-dashboard');
            }
          }}
        >
          Verify
        </Button>
      </Form.Group>
    </>
  );
};

export default OtpContent;
