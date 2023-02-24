import { Button, Card, Row, Col } from 'react-bootstrap';
import { BsCreditCard, BsDownload } from 'react-icons/bs';

const columns = [
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

const DashboardChildCard = () => {
  return (
    <div>
      <Card className="border-0 shadow-sm">
        <Card.Body className="d-flex p-0">
          <Card.Img
            // src={childCardImg}
            src="/assets/dashboard-img-content.png"
            style={{ width: '200px', alignSelf: 'stretch' }}
          />
          <div className="dash-content p-4">
            <Button className="overdue-btn bg-color-red btn-sm">Overdue</Button>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
            <Row className="justify-content-center g-3">
              {columns.map((content, index) => (
                <Col key={index} xs={12} md={4}>
                  {content}
                </Col>
              ))}
              <Col xs={12} md={4} className="d-grid gap-3">
                <Button
                  block
                  className="d-flex align-items-center justify-content-center gap-2 btn-color-outline-primary rounded-100"
                >
                  Download Invoice
                  <BsDownload size={20} className="mr-2" />
                </Button>
                <Button
                  block
                  className="d-flex align-items-center justify-content-center gap-2 btn-color-primary rounded-100"
                >
                  Pay Now
                  <BsCreditCard size={20} className="ml-2" />
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DashboardChildCard;
