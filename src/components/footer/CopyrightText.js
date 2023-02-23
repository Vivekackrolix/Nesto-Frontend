import { Container, Row, Col } from 'react-bootstrap';

const CopyrightText = () => {
  return (
    <div className="bg-color-primary-darker py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto" className="text-white text-opacity-75 text-center">
            © 2022 <span className="text-white fw-bold">Nesto Hub</span> | All
            Rights Reserved | Design & Develop by
            <span className="text-white fw-bold"> Bizzeonline </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CopyrightText;
