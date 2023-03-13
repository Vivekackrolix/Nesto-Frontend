import { Form } from 'react-bootstrap';
import { CustomModal } from '../../../components';
import OtpContent from './OtpContent';

const EnterOtp = ({ show, onHide }) => {
  return (
    <CustomModal
      title="OTP Verification"
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
        Enter the verification code we just sent on your email address.
      </p>
      <Form>
        <OtpContent />
      </Form>
    </CustomModal>
  );
};

export default EnterOtp;
