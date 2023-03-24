import { Button, Card } from 'react-bootstrap';
import './Refer.css';

const Refer = () => {
  return (
    <Card border="0" className="refer">
      <Card.Img
        variant="top"
        src="/assets/broker/Refer-a-friend-rafiki.svg"
        className="img-fluid w-75 mx-auto my-3"
      />
      <Card.Body>
        <ul className="card-text mt-5">
          <li>Invite your friends to Nesto Hub.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        <Button className="btn-color-primary rounded-100 btn-rounded mt-5 w-100">
          Refer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Refer;
