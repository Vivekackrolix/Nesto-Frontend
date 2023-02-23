import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, InputGroup, Button } from 'react-bootstrap';
import SocialMedia from './SocialMedia';
import CopyrightText from './CopyrightText';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-color-primary mt-5">
      <Container className="py-5">
        <Row className="gx-5">
          <Col md={3}>
            <img src="/assets/nesto-logo-white.png" alt="logo 2" />
            <p className="mt-2">
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </p>
            <SocialMedia />
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">Company Info</h5>
            <ul className="list-unstyled text-white">
              <li>
                <Link className="fw-light" to="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="fw-light" to="/">
                  Faq
                </Link>
              </li>
              <li>
                <Link className="fw-light" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="fw-light" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="fw-light" to="/">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link className="fw-light" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="fw-light" to="/">
                  Help & Support
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Get in Touch</h5>
            <p>
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed ...
            </p>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <CopyrightText />
    </footer>
  );
};

export default Footer;
