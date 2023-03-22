import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './ReffrelRegister.css';
import { Link } from 'react-router-dom';

const ReffrelRegister = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      closeBtn
      modalHeader
      size="md"
      onHide={onHide}
    >
      <span className='reffrel-register-heading'>
        Hello! Register to get started
      </span>
      <hr />
      <div className="reffrel-register">
        <div className="reffrel-register-input-div">
          <form>
            <input
              type="text"
              placeholder="Name"
              className="reffrel-register-input"
              required
            />
            <input
              type="number"
              placeholder="Enter Referral Code"
              className="reffrel-register-input"
              required
            />
            {/* css coming from (contactUs.css) */}
            <div className="d-flex align-items-center gap-2 mt-4">
              <input
                required
                id="check-save"
                type="checkbox"
                className="contact-form_checkbox"
              />
              <label className="contact-form_checkbox-label" for="check-save">
                I agree to the{' '}
                <Link to="/terms-condition">Terms of Service</Link> and
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </label>
            </div>
            <button className="reffrel-register-btn">Register</button>
          </form>
        </div>
      </div>
    </CustomModal>
  );
};

export default ReffrelRegister;
