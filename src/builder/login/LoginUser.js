import { Container, Row, Col, Image, Figure } from "react-bootstrap";

const LoginUser = () => {
  return (
    <Container fluid className="mb-4 login__user">
      <h1 className="fw-bold  mb-3">Welcome back! Glad to see you, Again!</h1>
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="d-flex align-items-center gap-2">
          <Image
            src="/assets/profile.svg"
            fluid
            className="rounded my-3 user-img"
            alt="profile"
          />
          <Figure.Caption className="text-center mb-0">
            Login as a Builder
          </Figure.Caption>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
