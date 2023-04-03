import { useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { RiTimerLine } from 'react-icons/ri';
import { useVisitVerifyOtpMutation } from '../../../../hooks/LoginQuery';
import { CustomModal } from '../../../../../components';
import SuccessModal from '../success-modal/SuccessModal';
import { useDispatch } from 'react-redux';
import { hideBookAVisit } from '../../../../store/ModalsSlice';

const VisitVerification = ({ show, onHide, visitId, visitOTP }) => {
  const dispatch = useDispatch();
  const otpInputs = useRef([]);

  const {
    visitVerifyOtp,
    isVisitVerifyOtpLoading,
    isVisitVerifyOtpSuccess,
    isVisitVerifyOtpIsError,
    visitVerifyOtpResponse,
    isVisitVerifyOtpError,
  } = useVisitVerifyOtpMutation();

  const handleOtpInputChange = (e, index) => {
    const otpInput = e.target;
    otpInput.value = otpInput.value.replace(/[^0-9]/g, '');

    if (otpInput.value && otpInput.nextSibling) {
      otpInput.nextSibling.focus();
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

  const resetOtpInputs = () => {
    otpInputs.current.forEach(input => {
      input.value = '';
    });
    otpInputs.current[0].focus();
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(visitId);
    if (visitId) {
      visitVerifyOtp({
        visitId: visitId,
        otp: otpInputs.current.map(el => el.value).join(''),
      });
    }
  };

  useEffect(() => {
    otpInputs.current[0]?.focus();
  }, []);

  if (isVisitVerifyOtpSuccess) {
    dispatch(hideBookAVisit());
  }

  return (
    <>
      {!isVisitVerifyOtpSuccess && (
        <CustomModal
          title="Visit Verification Code"
          show={show}
          border
          closeBtn
          onHide={onHide}
          cssClassName="nes__dashboard__modal"
          modalHeader
        >
          <p
            className="text-text-muted text-center mb-4"
            style={{ lineHeight: '1.6' }}
          >
            Enter the verification code we just sent on your phone number.
            {visitVerifyOtpResponse?.data?.status ? (
              'hello'
            ) : (
              <div>{visitVerifyOtpResponse?.message}</div>
            )}
          </p>
          <Form onSubmit={handleSubmit}>
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
                    <span className="otp-timer">
                      {/* {timer >= 10 ? `00:${timer}` : `00:0${timer}`} */}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span>Didn't received code?</span>
                    <Button
                      color="Resend"
                      variant="transparent"
                      // onClick={() => {
                      //   resetOtpInputs();
                      //   startTimer();
                      // }}
                    >
                      Resend
                    </Button>
                  </div>
                </Form.Text>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-100 rounded-pill bg-color-primary"
                disabled={isVisitVerifyOtpLoading}
              >
                {isVisitVerifyOtpLoading ? (
                  <>
                    <span>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Verify...
                    </span>
                  </>
                ) : (
                  'Claim'
                )}
              </Button>
            </Form.Group>
          </Form>
        </CustomModal>
      )}
      {isVisitVerifyOtpSuccess && (
        <SuccessModal show={true} path="/broker/clientManagement" />
      )}
    </>
  );
};

export default VisitVerification;
