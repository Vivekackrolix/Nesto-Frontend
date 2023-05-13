import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './AppDownModal.css';
// import { Link } from 'react-router-dom';

const AppDownModal = ({ show, onHidePop }) => {
  return (
    <CustomModal
      show={show}
      title="Login"
      closeBtn
      modalHeader
      size="md"
      onHide={onHidePop}
    >
      <div className="login-modal">
        <h3 className="login-modal-heading">Welcome Back Netso User!</h3>
        <span className="login-modal-sub-heading">
          Login to your Nesto account and keep growing with NestoHub 
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
        {/* <div className="login-modal-broker-link">
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
        </div> */}
      </div>
    </CustomModal>
  );
};

export default AppDownModal;