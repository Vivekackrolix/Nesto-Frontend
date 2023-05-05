import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import { Link } from 'react-router-dom';
import './SuccessfulLogin.css';

const SuccessfulLogin = ({ show, onHide }) => {
  return (
    <CustomModal show={show} closeBtn modalHeader size="md" onHide={onHide}>
      <div className="successful-login">
        <img
          src="./assets/informative/success.png"
          className="successful-login-img"
          alt='success'
        />
        <div>
          <span className="successful-login-heading">Successful</span>
          <span className="successful-login-sub-heading">
            Your requirement is submitted! NestoHub team will contact you soon.
          </span>
          <Link to='/contact-us'>
            <button className="reffrel-register-btn">Back to Login</button>
          </Link>
        </div>
      </div>
    </CustomModal>
  );
};

export default SuccessfulLogin;
