import { Button, Card, Row, Col, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Rating from '../property-details/Rating';

const overdueColumnsData = [
  { label: 'Unity type', value: '3 BHK' },
  { label: 'Client Name', value: 'Tisha' },
  { label: 'Broker Name', value: 'Vinit' },
  { label: 'Broker ID', value: 'BR01211' },
  { label: 'Query No.', value: '3234' },
  { label: 'Bank Name', value: 'HDFC' },
  { label: 'Disbursed Amt', value: '3.94 Cr' },
  { label: 'Disbursed Date', value: '12/01/23' },
  { label: 'Invoice No', value: '34454' },
  { label: 'Invoice Date', value: '14/01/23' },
  { label: 'Invoice Amt', value: '3.94 Cr' },
];

const assignedColumnsData = [
  { label: 'Property Type', value: '3 BHK' },
  { label: 'Demanding Cost', value: '₹ 3.94 Cr' },
  { label: 'Broker Name', value: 'Tisha' },
  { label: 'Broker ID', value: '7865432' },
];

const acceptedLoanQueriesData = [
  { label: 'Property Type', value: '3 BHK' },
  { label: 'Demanding Cost', value: '₹ 3.94 Cr' },
  { label: 'Broker Name', value: 'Tisha' },
  { label: 'Broker ID', value: '7865432' },
  { label: 'Broker ID', value: '7865432' },
  { label: 'Broker ID', value: '7865432' },
];

const DashboardChildCard = ({ cardType }) => {
  const location = useLocation();

  // Check if the current URL contains the string "/home-dashboard/property-details"
  const isPropertyDetailsPage = location.pathname.includes(
    '/home-dashboard/property-details'
  );

  // Set the path dynamically based on the condition
  const path = isPropertyDetailsPage
    ? '/home-dashboard/property-details-info'
    : '/home-dashboard/property-details';

  return (
    <Card
      className="border-0 shadow-sm mt-3 text-decoration-none"
      as={Link}
      // to="/home-dashboard/property-details"
      to={path}
    >
      {/* /home-dashboard/property-details-info */}
      <Card.Body
        className={`p-0 ${cardType === `propertyDetailsProfile` && `p-3`}`}
      >
        <Row>
          {location.pathname === '/home-dashboard/property-details-info' && (
            <Col xs={12} className="d-flex justify-content-end">
              <div className="d-flex gap-2 bg-transparent">
                <Button
                  className="btn-color-primary"
                  style={{ width: '150px' }}
                >
                  Accept
                </Button>
                <Button className="btn-color-danger" style={{ width: '150px' }}>
                  Deny
                </Button>
              </div>
            </Col>
          )}

          <Col className="d-flex col-auto">
            <Card.Img
              className={`align-self-stretch d-flex ${
                cardType === `propertyDetailsProfile` &&
                `rounded-circle property__details__profileimg`
              }`}
              src={`${
                cardType === 'overdue'
                  ? `/assets/dashboard-img-content.png`
                  : `/assets/dashboard-img-content-small.png`
              }`}
            />
          </Col>
          <Col
            className={`col dash-content ${
              cardType === `propertyDetailsProfile` &&
              'd-flex flex-column justify-content-center'
            }`}
          >
            <Row className="g-3 align-items-start">
              <Col xs={12}>
                {cardType === 'overdue' && (
                  <Button className="card-label bg-color-red btn-sm">
                    Overdue
                  </Button>
                )}

                {cardType === 'acceptedLoanQueries' && (
                  <Button className="card-label bg-color-primary btn-sm">
                    Assigned
                  </Button>
                )}

                {cardType === 'propertyDetailsProfile' &&
                  location.pathname === '/home-dashboard/property-details' && (
                    <>
                      <div className="card-label d-flex justify-content-end align-items-center bg-transparent text-dark">
                        05/01/23
                      </div>
                    </>
                  )}
              </Col>
              <Col
                xs={12}
                className="bg-transparent gap-2 dashboard-cards-title"
              >
                <Card.Title className="d-flex align-items-center justify-content-start fw-bold">
                  Sky Dandelions Apartment
                  {/* rating */}
                  <Rating cardType="propertyDetailsProfile" />
                </Card.Title>
                <Card.Subtitle className="d-flex justify-content-start text-muted mt-1">
                  Sector-29,Gurugram
                </Card.Subtitle>
              </Col>
              {cardType === 'overdue' &&
                overdueColumnsData.map(({ label, value }, index) => (
                  <Col key={index} xs={12} md={4} className="text-truncate">
                    <span className="fw-semibold text-dark">{label}</span> :{' '}
                    <span className="text-dark">{value}</span>
                  </Col>
                ))}
              {cardType === 'overdue' && (
                <Col
                  xs={12}
                  md={4}
                  className="d-grid gap-3 bg-transparent px-3"
                >
                  <Button className="d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                    Download Invoice
                    <Image
                      className="h-100"
                      fluid
                      src="/assets/upload-icon.svg"
                      alt="upload"
                    />
                  </Button>
                  <Button className="btn-color-primary rounded-100">
                    Pay Now
                  </Button>
                </Col>
              )}

              {/* assigned cards */}
              {cardType === 'assigned' &&
                assignedColumnsData.map(({ label, value }, index) => (
                  <Col key={index} xs={12} md={6}>
                    <span className="fw-semibold text-dark">{label}</span> :{' '}
                    <span className="text-dark">{value}</span>
                  </Col>
                ))}

              {cardType === 'acceptedLoanQueries' &&
                acceptedLoanQueriesData.map(({ label, value }, index) => (
                  <Col key={index} xs={12} md={4} className="text-truncate">
                    <span className="fw-semibold text-dark">{label}</span> :{' '}
                    <span className="text-dark">{value}</span>
                  </Col>
                ))}
            </Row>
          </Col>
          {cardType === 'assigned' && (
            <Col className="col-3 border-start d-flex justify-content-center align-items-center">
              <div>
                <Card.Text>Lorem Ipsum Dummy text</Card.Text>
                <div className="d-grid px-4 gap-2">
                  <Button className="btn-color-primary">Accept</Button>
                  <Button className="btn-color-danger">Deny</Button>
                  <Button
                    variant="link"
                    as={Link}
                    className="text-decoration-none color-blue"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>

        {cardType === `propertyDetailsProfile` && (
          <Row className="mt-3 dashboard-parent-card g-2">
            {overdueColumnsData.map(({ label, value }, index) => (
              <Col
                key={index}
                xs={12}
                md={3}
                className="text-truncate wild-sand-bg"
              >
                <span className="fw-semibold text-dark">{label}</span> :
                <span className="text-dark">{value}</span>
              </Col>
            ))}
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default DashboardChildCard;
