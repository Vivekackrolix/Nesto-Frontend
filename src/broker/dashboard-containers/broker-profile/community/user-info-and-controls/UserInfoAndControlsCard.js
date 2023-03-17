import { Card } from 'react-bootstrap';
import Avatar from '../avatar/Avatar';
import UserControlsContainer from '../user-controls-container/UserControlsContainer';
import './UserInfoAndControlsCard.css';

const UserInfoAndControlsCard = ({
  avatarSrc,
  username,
  date,
  text,
  numAnswers,
}) => {
  return (
    <Card className="user-card-container border-0 custom__card__shadow mt-5">
      <Card.Body>
        <div className="user-info-container d-flex align-items-center gap-3">
          <Avatar avatarSrc={avatarSrc} size={60} />
          <div className="user-info-text-container flex-fill">
            <div className="user-info-text">
              <Card.Title className="username">{username}</Card.Title>
              <Card.Subtitle className="user-date">{date}</Card.Subtitle>
            </div>
          </div>
        </div>
        <Card.Text className="user-text text-dark mt-4">{text}</Card.Text>
      </Card.Body>
      <UserControlsContainer numAnswers={numAnswers} />
    </Card>
  );
};

export default UserInfoAndControlsCard;
