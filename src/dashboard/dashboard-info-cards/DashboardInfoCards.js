import { Card } from 'react-bootstrap';

const ContentCard = ({ icon, title }) => (
  <Card border="primary" className="shadow-sm">
    <Card.Body>
      <div className="d-flex align-items-center justify-content-center flex-column">
        {icon}
        <Card.Title>{title}</Card.Title>
      </div>
    </Card.Body>
  </Card>
);

export default ContentCard;
