import React from 'react';
import CustomModal from '../../../components/common/CustomModal';
import './LoginModal.css';
// import { Link } from 'react-router-dom';

const LoginModal = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      title="Login"
      closeBtn
      modalHeader
      size="md"
      onHide={onHide}
    >
      <div className="login-modal">
        <span className="login-modal-heading">New Place, New Home!</span>
        <span className="login-modal-sub-heading">
          Are you ready to uproot and start over in a new area?
        </span>
        {/* Broker Link */}
        <div className="login-modal-broker-link">
          <div>
            <span>
              <img
                src="./assets/informative/profile.png"
                className="login-modal-img"
                alt='login-modal'
              />
            </span>
          </div>
          <div>
            <span className="login-modal-borker-text">Broker</span>
          </div>
        </div>
        {/* Builder Link */}
        <div className="login-modal-broker-link">
          <div>
            <span>
              <img
                src="./assets/informative/profile.png"
                className="login-modal-img"
                alt='login-modal'
              />
            </span>
          </div>
          <div>
            <span className="login-modal-borker-text">Builder</span>
          </div>
        </div>
        {/* Loan Agent Link */}
        <div className="login-modal-broker-link">
          <div>
            <span>
              <img
                src="./assets/informative/profile.png"
                className="login-modal-img"
                alt='login-modal'
              />
            </span>
          </div>
          <div>
            <span className="login-modal-borker-text">Loan Agent</span>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default LoginModal;
