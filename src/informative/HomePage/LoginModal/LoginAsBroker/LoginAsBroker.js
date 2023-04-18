import React from "react";
import CustomModal from "../../../../components/common/CustomModal";
import "./LoginAsBroker.css";
import { Button, Form, InputGroup} from "react-bootstrap";
// import { Link } from 'react-router-dom'

const LoginAsBroker = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      title="Login"
      closeBtn
      modalHeader
      size="md"
      onHide={onHide}
    >
      <div className="login-as-broker">
        <h3 className="fw-bold text-center mb-0">
          Embark On Your New Beginning
        </h3>
        <div className="login-as-broker-div">
          <div>
            <span>
              <img
                src="./assets/informative/profile.png"
                alt="profile"
                className="login-as-broker-img"
              />
            </span>
          </div>
          <div>
            <span className="login-as-broker-text">Login As A Broker</span>
          </div>
        </div>
        <div className="login-as-broker-input-div">
          {/* <form>
                        <label for='login-as-broker-input' className='login-as-broker-label'>Mobile Number</label>
                        <input type='tel' placeholder='Mobile Number' className='login-as-broker-input' required id='login-as-broker-input' />
                        <input type='submit' className='login-as-broker-btn' />
                    </form> */}

          <Form>
            <InputGroup className="mb-0">
              <Form.Control
                name="phone"
                className="rounded input"
                required
                type="text"
                maxLength="10"
                placeholder=" "
              />
              <Form.Label className="placeholder">Phone Number</Form.Label>
            </InputGroup>
            <div className="d-grid mt-3">
              <Button
                variant="primary"
                size="md"
                className="rounded-pill border-0 bg-color-primary py-2"
                //   onClick={}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </CustomModal>
  );
};

export default LoginAsBroker;
