import { Card } from 'react-bootstrap';
import './DashboardInfoCards.css';
import { Link } from 'react-router-dom';

const ContentCard = ({ icon, title, active, path }) => {
  return (
    <Card
      as={Link}
      to={path}
      border="0"
      className={`shadow-sm ${active ? 'card-blue' : ''}`}
    >
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {icon}
          <Card.Title className="mt-4">{title}</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;
