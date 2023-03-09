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
import { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import ResetPasswordModal from './ResetPasswordModal';
import EnterOtp from './EnterOtp';
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../../components';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [showModal, setShowModal] = useState({
    forgetPassword: false,
    resetPassword: false,
    enterOtp: true,
  });

  const handleInputChange = event => {
    const inputText = event.target.value;
    const emailPhoneRegex =
      /^(?:\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b|\b(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})\b)?$/;
    const isMatch = emailPhoneRegex.test(inputText);

    setInputValue(inputText);

    if (isMatch) {
      setShowErrorMessage(false);
      event.target.classList.remove('is-invalid');
      event.target.classList.add('is-valid');
    } else {
      setShowErrorMessage(true);
      event.target.classList.remove('is-valid');
      event.target.classList.add('is-invalid');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!showErrorMessage) {
      setShowModal(prevShowModal => ({
        ...prevShowModal,
        enterOtp: true,
      }));

      // Redirect to /dsa/home-dashboard
      navigate('/dsa/home-dashboard');
      setShowErrorMessage(false);
    }
  };

  return (
    <>
      {/* modal */}
      {showModal.forgetPassword && <ForgetPassword show={true} />}
      {showModal.resetPassword && <ResetPasswordModal show={true} />}
      {showModal.enterOtp && <EnterOtp show={true} />}

      <Header />
      <LoginUser />

      <Container fluid="lg" className="container-md my-5">
        <Row className="g-0 login__form">
          <Col md={6} className="d-none d-md-block">
            <Image
              className="h-100"
              src="https://via.placeholder.com/800x500.png"
              fluid
              alt="login img"
            />
          </Col>
          <Col
            md={6}
            className="p-4 shadow-sm d-flex flex-column justify-content-center"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="fw-light">
                  Mobile Number/Email
                </Form.Label>
              </Form.Group>

              <InputGroup className="mb-0">
                <Form.Control
                  name="emailPhone"
                  className="rounded-0"
                  required
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter your email address or phone number"
                  isInvalid={showErrorMessage}
                  isValid={!showErrorMessage && inputValue !== ''}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address or phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Input is valid!
                </Form.Control.Feedback>
              </InputGroup>

              <div className="d-grid mt-5">
                <Button
                  type="submit"
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
            <div className="d-flex align-item-center gap-2 nes__google__facebook">
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
