import { Row, Col } from 'react-bootstrap';
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri';

const SocialMediaIcons = [
  { icon: RiFacebookCircleFill },
  { icon: RiTwitterFill },
  { icon: RiInstagramLine },
  { icon: RiLinkedinBoxFill },
];

const SocialMedia = () => {
  return (
    <Row>
      {SocialMediaIcons.map((item, index) => (
        <Col xs="auto" key={index}>
          <div className="icon-container d-flex bg-white rounded-circle">
            <item.icon className="m-auto" size={16} color="#278FD9" />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SocialMedia;
