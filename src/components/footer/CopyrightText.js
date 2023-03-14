import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CopyrightText = ({ broker }) => {
  return (
    <div className="bg-color-primary-darker py-3">
      <Container>
        <Row
          className={`justify-content-center ${
            broker && `justify-content-between`
          }`}
        >
          <Col xs="auto" className="login__footer__copyright">
            © {new Date().getFullYear()} All rights reserved by
            <span className="text-white fw-semibold"> Nesto Hub</span>
          </Col>

          {broker && (
            <Col className="flex-grow-1 text-end">
              <Link className="fw-light text-white text-decoration-none" to="/">
                Support
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CopyrightText;
