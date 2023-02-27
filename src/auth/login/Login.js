import LoginUser from './LoginUser';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { RiEyeOffFill, RiEyeFill } from 'react-icons/ri';
import { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import ResetPasswordModal from './ResetPasswordModal';
import EnterOtp from './EnterOtp';
import { Footer, Header } from '../../components';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState({
    forgetPassword: false,
    resetPassword: false,
    enterOtp: false,
  });

  return (
    <>
      {/* modal */}
      {showModal.forgetPassword && <ForgetPassword show={true} />}
      {showModal.resetPassword && <ResetPasswordModal show={true} />}
      {showModal.enterOtp && <EnterOtp show={true} />}

      <Header />
      <LoginUser />

      <Container className="container-md mt-5">
        <Row className="g-0 login__form">
          <Col md={6}>
            <Image
              className="h-100"
              src="https://via.placeholder.com/800x500.png"
              fluid
              alt="login img"
            />
          </Col>
          <Col
            md={6}
            className="p-5 shadow-sm d-flex flex-column justify-content-center"
          >
            <Form>
              <Form.Group>
                <Form.Label className="fw-light">
                  Mobile Number/Email
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  className="rounded-0"
                  required
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label className="fw-light">Password</Form.Label>
              </Form.Group>

              <InputGroup className="mb-0">
                <Form.Control
                  type={`${showPassword ? 'text' : `password`}`}
                  name="password"
                  aria-label="Password"
                  className="rounded-0 border-end-0"
                />
                <Button
                  variant="transparent"
                  type="button"
                  className="border border-start-0 rounded-0"
                  onClick={() =>
                    setShowPassword(prevShowPassword => !prevShowPassword)
                  }
                >
                  {showPassword && <RiEyeFill color="#fc5c67" />}
                  {!showPassword && <RiEyeOffFill color="#fc5c67" />}
                </Button>
              </InputGroup>
              <div className="d-flex justify-content-between align-items-center">
                <div className="invalid-feedback">Incorrect Password</div>
                <div className="w-100 d-flex justify-content-end">
                  <Button
                    onClick={() =>
                      setShowModal(prevShowModal => ({
                        ...prevShowModal,
                        forgetPassword: true,
                      }))
                    }
                    variant="link"
                    to="/forgetPassword"
                    className="login__form__forgetpassword p-0"
                  >
                    Forget Password?
                  </Button>
                </div>
              </div>

              <Form.Group className="mt-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="form-check-inline"
                  type="checkbox"
                  label="Remember Me"
                />
              </Form.Group>

              <div className="d-grid mt-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-0 border-0 bg-color-primary"
                >
                  Login
                </Button>
              </div>
            </Form>
            <div className="d-flex align-items-center my-5">
              <div className="divider flex-grow-1"></div>
              <p className="m-0 px-1">Or Login Using</p>
              <div className="divider flex-grow-1"></div>
            </div>
            <div className="d-flex gap-2">
              <div className="flex-grow-1 d-flex justify-content-center">
                <Button variant="link" className="border-0 p-0 mr-3">
                  <img src="/assets/google.svg" alt="google" />
                </Button>
              </div>
              <div className="flex-grow-1 d-flex justify-content-center border-start">
                <Button variant="link" className="border-0 p-0 mr-3">
                  <img src="/assets/facebook.svg" alt="facebook" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
