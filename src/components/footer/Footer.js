import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, InputGroup, Button } from 'react-bootstrap';
import SocialMedia from './SocialMedia';
import CopyrightText from './CopyrightText';
import './Footer.css';

const footerLinks = [
  { companyInfo: [{ link: 'About us', to: '/about-us' }, { link: 'Category', to: '/' }, { link: 'FAQ', to: '/faq' }, { link: 'Blog', to: '/blog-list' }, { link: 'Contact us', to: '/contact-us' }] },
  // {
  //   quickLink: [
  //     'Terms & Condition',
  //     'Terms of Use',
  //     'Privacy Policy',
  //     'Help',
  //     'Support',
  //   ],
  { quickLink: [{ link: 'Terms & Condition', to: '/terms-condition' }, { link: 'Terms of Use', to: '/' }, { link: 'Privacy Policy', to: '/privacy-policy' }, { link: 'Help', to: '/' }, { link: 'Support', to: '/contact-us' }] },
];

const Footer = () => {
  return (
    // bg-color-primary
    <footer className="bg-primary mt-5 login__footer mt-auto">
      <Container className="py-5">
        <Row className="gy-sm-2 gx-lg-4">
          <Col sm={12} lg={3}>
            <img src="/assets/nesto-logo-white.png" alt="logo 2" />
            <p className="mt-2">
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </p>
            <SocialMedia />
          </Col>
          <Col sm={12} lg={3}>
            <h5 className="fw-bold mt-sm-5 my-4 my-lg-0">Company Info</h5>
            <ul className="list-unstyled text-white mt-3">
              {footerLinks[0].companyInfo.map(({ link, to }, index) => (
                <li key={index}>
                  <Link className="fw-light" to={to}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col sm={12} lg={3}>
            <h5 className="fw-bold">Quick Link</h5>
            <ul className="list-unstyled mt-3">
              {footerLinks[1].quickLink.map(({link, to}, index) => (
                <li key={index}>
                  <Link className="fw-light" to={to}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col sm={12} lg={3}>
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
