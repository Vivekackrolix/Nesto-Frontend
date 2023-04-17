import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './ReffrelRegister.css';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
const ReffrelRegister = ({ show, onHide }) => {
  return (
    <CustomModal
      title="Register to get started"
      show={show}
      closeBtn
      modalHeader
      size="md"
      onHide={onHide}
    >
      
      <div className="reffrel-register">
        <div className="reffrel-register-input-div">

        <Form>
              <InputGroup className="mb-0">
                <Form.Control
                  name="Name"
                  className="rounded input reffrel-register-input-label"
                  required
                  type="text"
                  placeholder=" "
                />
                <Form.Label className="placeholder">Name</Form.Label>
              </InputGroup>
              <br />
              <InputGroup className="mb-0">
                <Form.Control
                  name="phone"
                  className="rounded input reffrel-register-input-label"
                  required
                  type="text"
                  maxLength="10"
                  placeholder=" "
                />
                <Form.Label className="placeholder">Phone Number</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Input is valid!
                </Form.Control.Feedback>                
              </InputGroup>              
              <br />
              <InputGroup className="mb-0">
                <Form.Control
                  name="Referral"
                  className="rounded input reffrel-register-input-label"
                  required
                  type="text"                  
                  placeholder=" "
                />
                <Form.Label className="placeholder">Referral Code</Form.Label>
              </InputGroup>              
              <br />
              <Form.Check className="contact-form_checkbox-label" type="checkbox">
                I agree to the{' '}
                <Link to="/terms-condition">Terms of Service</Link> and
                <Link to="/privacy-policy"> Privacy Policy</Link>
              </Form.Check>
              <br />
              <div className="d-grid mt-3">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded border-0 bg-color-primary py-2"
                >
                  Continue
                </Button>
              </div>
            </Form>
{/* 
          <form>
            <div className='mt-1'>
              <label for='reffrel-register-input-1' className='reffrel-register-input-label'>Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="reffrel-register-input"
                required
                id='reffrel-register-input-1'
              />
            </div>
            <label for='reffrel-register-input-2' className='reffrel-register-input-label mt-4'>Referral Code</label>
            <input
              type="tel"
              placeholder="Enter Referral Code"
              className="reffrel-register-input"
              required
              id='reffrel-register-input-2'
            />
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
          </form> */}
        </div>
      </div>
    </CustomModal>
  );
};

export default ReffrelRegister;
