import Card from 'react-bootstrap/Card';

function ShadowCard() {
  return (
    <Card className="shadow border-0">
      <Card.Header className="border-0 bg-transparent">
        Title of Card
      </Card.Header>
      <Card.Body>
        <Card.Text>
          This is the description of the card. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ShadowCard;
