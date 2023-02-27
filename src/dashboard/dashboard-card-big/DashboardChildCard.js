import { Button, Card, Row, Col, Image } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
  return (
    <Card className="border-0 shadow-sm mt-3">
      <Card.Body className="p-0">
        <Row>
          <Col className="d-flex col-auto">
            <Card.Img
              className="align-self-stretch d-flex"
              src={`${
                cardType === 'overdue'
                  ? `/assets/dashboard-img-content.png`
                  : `/assets/dashboard-img-content-small.png`
              }`}
            />
          </Col>
          <Col className="col dash-content">
            <Row className="g-3 align-items-start">
              <Col xs={12}>
                {cardType === 'overdue' && (
                  <Button className="overdue-btn bg-color-red btn-sm">
                    Overdue
                  </Button>
                )}

                {cardType === 'acceptedLoanQueries' && (
                  <Button className="overdue-btn bg-color-primary btn-sm">
                    Assigned
                  </Button>
                )}
              </Col>
              <Col
                xs={12}
                className="bg-transparent gap-2 dashboard-cards-title"
              >
                <Card.Title className="d-flex justify-content-start fw-bold">
                  Sky Dandelions Apartment
                </Card.Title>
                <Card.Subtitle className="d-flex justify-content-start text-muted mt-1">
                  Sector-29,Gurugram
                </Card.Subtitle>
              </Col>
              {cardType === 'overdue' &&
                overdueColumnsData.map(({ label, value }, index) => (
                  <Col key={index} xs={12} md={4} className="text-truncate">
                    <span className="fw-semibold">{label}</span> :{' '}
                    <span>{value}</span>
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
                    <span className="fw-semibold">{label}</span> :{' '}
                    <span>{value}</span>
                  </Col>
                ))}

              {cardType === 'acceptedLoanQueries' &&
                acceptedLoanQueriesData.map(({ label, value }, index) => (
                  <Col key={index} xs={12} md={4} className="text-truncate">
                    <span className="fw-semibold">{label}</span> :{' '}
                    <span>{value}</span>
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
      </Card.Body>
    </Card>
  );
};

export default DashboardChildCard;
