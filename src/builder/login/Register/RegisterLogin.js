import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import Header from "../../header/Header";
import loginImage from "../../Images/Rectangle-34624401.png";
import Requirement from "./Requirement";
import Successful from "./Successful";
import "./RegisterLogin.css";

const RegisterLogin = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");
  // const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [referral, setReferral] = useState("");
  const [showSucess, setShowSucess] = useState(false);

  const onContinueHandler = () => {
    //
    setShowModal(true);
  };
  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };
  const handleReferralChange = (e) => {
    setReferral(e.target.value);
  };
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const emailPhoneRegex = /^[0-9\b]+$/;

    const isMatch = emailPhoneRegex.test(inputText);

    setInputValue(inputText);
    // setInputName(input.text);
    //     if (isMatch) {
    //       setShowErrorMessage(false);
    //       event.target.classList.remove("is-invalid");
    //       event.target.classList.add("is-valid");
    //     } else {
    //       setShowErrorMessage(true);
    //       event.target.classList.remove("is-valid");
    //       event.target.classList.add("is-invalid");
    //     }
    //   };
  };
  return (
    <>
      {showModal && (
        <Requirement
          phone={inputValue}
          show={true}
          name={inputName}
          onHide={setShowModal}
          onSucess={setShowSucess}
        />
      )}
      {showSucess && <Successful show={true} />}
      <Header />
      <Container className="container-md my-5">
        <Row className="g-0 login__form login-shadow">
          <Col md={6}>
            <Image className="h-100" src={loginImage} fluid alt="login img" />
          </Col>
          <Col md={6} className="p-5 d-flex flex-column justify-content-center">
            <Container fluid className="mb-4 login__user">
              <h1 className="fw-bold text-center mb-3">
                Hello!
                <br /> Register to get started!
              </h1>
            </Container>

            <Form>
              <InputGroup className="mb-0">
                <Form.Control
                  name="Name"
                  className="rounded input"
                  required
                  type="text"
                  value={inputName}
                  onChange={handleNameChange}
                  placeholder=" "
                />
                <Form.Label className="placeholder">Name</Form.Label>
              </InputGroup>
              <br />
              <InputGroup className="mb-0">
                <Form.Control
                  name="phone"
                  className="rounded input"
                  required
                  type="text"
                  value={inputValue}
                  maxLength="10"
                  onChange={handleInputChange}
                  placeholder=" "
                />
                
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
                  className="rounded input"
                  required
                  type="text"
                  value={referral}
                  onChange={handleReferralChange}
                  placeholder=" "
                />
                <Form.Label className="placeholder">Enter Referral Code</Form.Label>
              </InputGroup>
              
              <br />

              <div className="d-grid mt-3">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2"
                  onClick={onContinueHandler}
                >
                  Continue
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterLogin;
