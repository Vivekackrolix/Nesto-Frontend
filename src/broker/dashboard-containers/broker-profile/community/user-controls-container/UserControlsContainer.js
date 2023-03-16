import { Card, Image } from 'react-bootstrap';
import { RiEditBoxFill } from 'react-icons/ri';

const UserControlsContainer = ({ numAnswers }) => {
  return (
    <Card.Footer className="user-controls-container bg-white border-0 d-flex gap-5 pt-0">
      <div className="user-control-item d-flex align-items-center gap-2">
        <Image src="/assets/broker/stockUp.png" fluid />
        <span className="control-text">29</span>
        <Image src="/assets/broker/stockDown.png" fluid />
      </div>
      <div className="user-control-item d-flex align-items-center gap-2">
        <span className="control-text">{numAnswers} </span>
      </div>
      <div className="user-control-item d-flex align-items-center gap-2 border rounded-pill px-3 py-1">
        <RiEditBoxFill size={20} />
        <span className="control-text">Write Answer</span>
      </div>
    </Card.Footer>
  );
};

export default UserControlsContainer;
