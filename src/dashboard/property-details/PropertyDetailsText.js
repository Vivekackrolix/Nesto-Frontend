import { Card } from 'react-bootstrap';
import IconsCard from './IconsCard';

const PropertyDetailsText = () => {
  return (
    <>
      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white">
          <Card.Title>Description</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <IconsCard />
    </>
  );
};

export default PropertyDetailsText;
