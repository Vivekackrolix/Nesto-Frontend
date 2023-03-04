import { Container, Row, Col } from 'react-bootstrap';

const CopyrightText = () => {
  return (
    <div className="bg-color-primary-darker py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto" className="login__footer__copyright">
            © {new Date().getFullYear()} All rights reserved by
            <span className="text-white fw-semibold"> Nesto Hub</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyrightText;
