import { Card } from 'react-bootstrap';
import './DashboardInfoCards.css';
import { useState } from 'react';

const ContentCard = ({ icon, title, active }) => {
  return (
    <Card border="0" className={`shadow-sm ${active ? 'card-blue' : ''}`}>
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
