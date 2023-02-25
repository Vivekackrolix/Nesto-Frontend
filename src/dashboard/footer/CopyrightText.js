import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CopyrightText = () => {
  return (
    <div className="bg-color-primary-darker py-3">
      <Container>
        <Row>
          <Col
            xs={8}
            className="text-white text-opacity-75 d-flex align-items-center"
          >
            © {new Date().getFullYear()}
            <span className="text-white fw-bold">&nbsp;Nesto Hub&nbsp;</span> |
            All Rights Reserved | Design & Develop by
            <span className="text-white fw-bold"> &nbsp;Bizzeonline </span>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Button
              variant="link"
              as={Link}
              className="text-decoration-none text-white text-opacity-75 fw-light"
            >
              Terms & Conditions
            </Button>
            <Button
              variant="link"
              as={Link}
              className="text-decoration-none text-white text-opacity-75 fw-light"
            >
              Privacy
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyrightText;
