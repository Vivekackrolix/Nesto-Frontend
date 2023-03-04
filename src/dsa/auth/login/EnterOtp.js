import { Form } from 'react-bootstrap';
// import { CustomModal } from '../../components';
import { CustomModal } from '../../../components';
import OtpContent from './OtpContent';

const EnterOtp = ({ show }) => {
  return (
    <CustomModal show={show} title="Enter OTP">
      <Form>
        <OtpContent />
      </Form>
    </CustomModal>
  );
};

export default EnterOtp;
