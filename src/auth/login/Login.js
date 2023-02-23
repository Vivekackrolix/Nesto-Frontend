import LoginUser from './LoginUser';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import ResetPasswordModal from './ResetPasswordModal';
import EnterOtp from './EnterOtp';
import ForgetPassword from './ForgetPassword';

const Login = () => {
  return (
    <>
      {/* login modals */}
      <ResetPasswordModal show={false} />
      <EnterOtp show={false} />
      <ForgetPassword show={false} />

      {/* login user name */}
      <LoginUser />

      <Container className="mt-5">
        <Row className="g-0">
          <Col md={6}>
            <Image
              src="https://via.placeholder.com/800x500.png"
              fluid
              alt="login img"
            />
          </Col>
          <Col
            md={6}
            className="px-5 shadow-sm d-flex flex-column justify-content-center"
          >
            <Form>
              <Form.Group>
                <Form.Label>Mobile Number/Email</Form.Label>
                <Form.Control type="email" required />
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
                  <img src="/assets/google.svg" alt="" />
                </Button>
              </div>
              <div className="flex-grow-1 d-flex justify-content-center border-start">
                <Button variant="link" className="border-0 p-0 mr-3">
                  <img src="/assets/facebook.svg" alt="" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
