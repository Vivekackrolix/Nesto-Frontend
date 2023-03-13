import React from 'react';
import {
  Button,
  Col,
  Container,
  Figure,
  Form,
  Image,
  InputGroup,
  Row,
} from 'react-bootstrap';
import loanAgentImg from '../assets/images/loan-agent.svg';
import builderImg from '../assets/images/builder.svg';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <Container fluid="lg" className=" my-5 nes__login__form">
      <Row className="g-0 nes__login__form__row">
        <Col xs={12} lg={6} className="d-none d-md-block">
          <Image
            className="h-100 nes__dsa__login__img"
            src="/assets/dsa/login-page.jpg"
            fluid
            alt="login img"
          />
        </Col>
        <Col
          xs={12}
          lg={6}
          className="p-2 p-lg-5 nes__dsa__login__formwrapper d-flex flex-column justify-content-center"
        >
          <Row className="justify-content-center align-items-center">
            <Col xs={12}>
              <h1>Welcome back! Glad to see you, Again!</h1>
            </Col>
            <Col xs="auto" className="d-flex align-items-center gap-2 my-5">
              <Image
                src="/assets/profile.svg"
                fluid
                className="rounded user-img"
                alt="profile"
              />
              <Figure.Caption className="text-center mb-0">
                Login as a Broker
              </Figure.Caption>
            </Col>
          </Row>

          <Form className="px-3">
            <InputGroup className="mb-0">
              <Form.Control
                size={`lg`}
                name="emailPhone"
                required
                type="text"
                placeholder="Enter your phone number"
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
                size="lg"
                className="py-3 rounded-pill bg-color-primary"
              >
                Continue
              </Button>
            </div>
          </Form>
          <div className="d-flex align-items-center my-5">
            <div className="divider flex-grow-1"></div>
            <p className="m-0 px-1">Or Login</p>
            <div className="divider flex-grow-1"></div>
          </div>
          <Row className="g-lg-2 g-4">
            <Col xs={12} md={6}>
              <Button
                as={Link}
                to="/builder/login"
                type="submit"
                variant="primary"
                size="md"
                className="w-100 py-2 rounded-pill bg-color-primary d-flex shadow"
              >
                <div className="m-auto d-flex gap-2 align-items-center m-auto">
                  <div className="nes__login__form__btnimg d-flex rounded-circle">
                    <img
                      src={builderImg}
                      alt="builder img"
                      className="m-auto"
                    />
                  </div>
                  Builder
                </div>
              </Button>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-end">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-100 py-2 rounded-pill bg-color-primary d-flex shadow"
              >
                <div className="m-auto d-flex gap-2 align-items-center m-auto">
                  <div className="nes__login__form__btnimg d-flex rounded-circle">
                    <img
                      src={loanAgentImg}
                      alt="loan agent img"
                      className="m-auto"
                    />
                  </div>
                  Loan Agent
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
