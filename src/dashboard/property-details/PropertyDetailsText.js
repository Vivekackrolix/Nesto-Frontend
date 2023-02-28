import { Card } from 'react-bootstrap';
import IconsCard from './IconsCard';

const PropertyDetailsText = () => {
  return (
    <>
      <Card className="border-0 shadow-sm property__details__text mb-4">
        <Card.Header className="bg-white">
          <Card.Title>Description</Card.Title>
        </Card.Header>
        <Card.Body className="py-4">
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Card.Text>
        </Card.Body>
      </Card>

      <IconsCard
        length={10}
        title="Project Amenities"
        iconTitle={false}
        col={5}
      />
      <IconsCard
        length={4}
        title="Location Advantages"
        col={4}
        iconTitle={true}
      />
    </>
  );
};

export default PropertyDetailsText;
