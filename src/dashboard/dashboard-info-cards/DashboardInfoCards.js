import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DashboardInfoCards.css';

const ContentCard = ({ icon, title, active, path }) => {
  return (
    <Card
      as={Link}
      to={path}
      border="0"
      className={`dashboard__infocard shadow-sm ${active ? 'card-blue' : ''}`}
    >
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <img
            src={`${icon}${active ? `white` : `black`}.svg`}
            alt={title}
            className="img-fluid"
          />
          {active && <Card.Title className="mt-3">{title}</Card.Title>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;
