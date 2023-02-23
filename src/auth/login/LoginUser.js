import { Container, Row, Col, Image, Figure } from 'react-bootstrap';

const LoginUser = () => {
  return (
    <Container fluid className="bg-pattens-blue p-3">
      <h1 className="fw-bold text-center mb-4">Login</h1>
      <Row className="justify-content-center align-items-center gap-2">
        <Col xs="auto">
          <Image
            src="/assets/profile.svg"
            fluid
            className="rounded user-img"
            alt="profile"
          />
        </Col>
        <Col xs="auto">
          <Figure.Caption className="text-center mb-0">
            Login as a DSA
          </Figure.Caption>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
