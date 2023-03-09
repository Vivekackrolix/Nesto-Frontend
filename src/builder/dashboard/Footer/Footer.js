import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-color-primary-darker py-3 mt-auto">
      <Container fluid="lg">
        <Row>
          <Col
            md={12}
            lg={8}
            className="text-white text-opacity-75 d-flex justify-content-center justify-content-lg-start align-items-center"
          >
            <span className="text-center">
              {" "}
              © {new Date().getFullYear()}
              <span className="text-white fw-bold">
                &nbsp;Nesto Hub&nbsp;
              </span>{" "}
              | All Rights Reserved | Design & Develop by
              <span className="text-white fw-bold"> &nbsp;Bizzeonline </span>
            </span>
          </Col>
          <Col
            md={12}
            lg={4}
            className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end align-items-center nes__dashboard__footersm"
          >
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
              Privacy Policy
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
