import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, InputGroup, Button } from 'react-bootstrap';
import SocialMedia from './SocialMedia';
import CopyrightText from './CopyrightText';
import './Footer.css';

const footerLinks = [
  { companyInfo: ['About us', 'Category', 'FAQ', 'Blog', 'Contact Us'] },
  {
    quickLink: [
      'Terms & Condition',
      'Terms of Use',
      'Privacy Policy',
      'Help',
      'Support',
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-color-primary mt-5 login__footer mt-auto">
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
            <ul className="list-unstyled text-white mt-3">
              {footerLinks[0].companyInfo.map((ftLink, index) => (
                <li key={index}>
                  <Link className="fw-light" to="/">
                    {ftLink}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold">Quick Link</h5>
            <ul className="list-unstyled mt-3">
              {footerLinks[1].quickLink.map(ftLink => (
                <li>
                  <Link className="fw-light" to="/">
                    {ftLink}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Get in Touch With Us</h5>
            <p className="mt-3">
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
                  className="form-control-sm"
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="bg-color-primary-darker"
                >
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
