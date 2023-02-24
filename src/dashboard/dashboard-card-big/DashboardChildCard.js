import { Button, Card, Row, Col } from 'react-bootstrap';
import { BsCreditCard, BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const overdueColumnsData = [
  'Unity type  :  3 BHK',
  'Client  Name : Tisha',
  'Broker  Name :  Vinit',
  'Broker ID  :  BR01211',
  'Query No. : 3234',
  'Bank  Name :  HDFC',
  'Disbursed Amt :  3.94 Cr',
  'Disbursed Date : 12/01/23',
  'Invoice  No :  34454',
  'Invoice Date  :  14/01/23',
  'Invoice Amt : 3.94 Cr',
];

const assignedColumnsData = [
  'Property Type : 3 BHK',
  'Demanding Cost : ₹ 3.94 Cr',
  'Broker Name :  Tisha',
  'Broker ID :  7865432',
];

const DashboardChildCard = ({ cardType }) => {
  return (
    <Card className="border-0 shadow-sm mt-3">
      {/* <Card.Body className="d-flex p-0"> */}
      <Card.Body className="row p-0">
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
          {cardType === 'overdue' && (
            <Button className="overdue-btn bg-color-red btn-sm">Overdue</Button>
          )}

          {cardType === 'acceptedLoanQueries' && (
            <Button className="overdue-btn bg-color-primary btn-sm">
              Assigned
            </Button>
          )}

          <Row className="g-3">
            <Col xs={12} className="bg-transparent gap-2">
              <Card.Title className="d-flex justify-content-start fw-bold">
                Title
              </Card.Title>
              <Card.Subtitle className="d-flex justify-content-start text-muted">
                Subtitle
              </Card.Subtitle>
            </Col>
            {cardType === 'overdue' &&
              overdueColumnsData.map((content, index) => (
                <Col key={index} xs={12} md={4} className="text-truncate">
                  {content}
                </Col>
              ))}
            {cardType === 'overdue' && (
              <Col xs={12} md={4} className="d-grid gap-3 bg-transparent px-3">
                <Button className="d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100">
                  Download Invoice
                  <BsDownload size={20} className="mr-2" />
                </Button>
                <Button className="d-flex align-items-center justify-content-center gap-2 btn-color-primary rounded-100">
                  Pay Now
                  <BsCreditCard size={20} className="ml-2" />
                </Button>
              </Col>
            )}

            {/* assigned cards */}
            {cardType === 'assigned' &&
              assignedColumnsData.map((content, index) => (
                <Col key={index} xs={12} md={6}>
                  {content}
                </Col>
              ))}

            {cardType === 'acceptedLoanQueries' &&
              assignedColumnsData.map((content, index) => (
                <Col key={index} xs={12} md={4} className="text-truncate">
                  {content}
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
      </Card.Body>
    </Card>
  );
};

export default DashboardChildCard;
