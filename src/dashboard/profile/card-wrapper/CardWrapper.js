import { Card } from 'react-bootstrap';

const CardWrapper = ({ title, children }) => {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <Card.Header
        className={`bg-transparent border-0 ${
          title ? `bg-transparent py-3` : `p-0`
        } `}
      >
        <h5 className="mb-0 fw-semibold">{title}</h5>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default CardWrapper;
