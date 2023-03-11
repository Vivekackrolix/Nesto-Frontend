import LoginUser from "./LoginUser";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";

import { useState } from "react";
import EnterOtp from "./EnterOtp";

import "./Login.css";
import loginImage from "../Images/Rectangle-34624401.png";
import Header from "../header/Header";
import builder from "../Images/builder.png";
import loan from "../Images/loan.png";
const Login = () => {
  // email phone number validation

  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const onContinueHandler = () => {
    if (inputValue.length === 10) {
      setShowModal((prev) => {
        return (prev = true);
      });
    } else {
      console.log("Error");
    }
  };

  const handleInputChange = (event) => {
    // debugger;
    const inputText = event.target.value;
    const emailPhoneRegex = /^[0-9\b]+$/;
    // /^(?:\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b|\b(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})\b)?$/;
    const isMatch = emailPhoneRegex.test(inputText);

    setInputValue(inputText);

    if (isMatch) {
      setShowErrorMessage(false);
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    } else {
      setShowErrorMessage(true);
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    }
  };

  return (
    <>
      {showModal && <EnterOtp show={true} />}

      <Header />

      <Container className="container-md my-5">
        <Row className="g-0 login__form">
          <Col md={6}>
            <Image className="h-100" src={loginImage} fluid alt="login img" />
          </Col>
          <Col
            md={6}
            className="p-5 shadow-sm d-flex flex-column justify-content-center"
          >
            <LoginUser />

            <Form>
              <InputGroup className="mb-0">
                <Form.Control
                  name="phone"
                  className="rounded"
                  required
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  isInvalid={showErrorMessage}
                  isValid={!showErrorMessage && inputValue !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  Please your phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Input is valid!
                </Form.Control.Feedback>
              </InputGroup>

              <div className="d-grid mt-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-3"
                  onClick={onContinueHandler}
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
            <div className="d-flex justify-content-between">
              <div className="d-grid mt-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 wd-200"
                >
                  <Image
                    src={builder}
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="profile"
                  />
                  Builder
                </Button>
              </div>
              <div className="d-grid mt-5">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 wd-200"
                >
                  <Image
                    src={loan}
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="profile"
                  />
                  Loan Agent
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
