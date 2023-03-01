import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ViewDetailsCard.css';

const ViewDetailsCard = ({ title, link, bg, media, img }) => {
  return (
    <Card
      className={`border-0 shadow-sm property__details__text mb-5 ${
        bg ? `bg-white` : `bg-transparent shadow-none`
      }`}
    >
      <Card.Header
        className={`d-flex justify-content-between align-items-center ${
          bg ? `bg-white` : `bg-transparent border-0 px-0`
        }`}
      >
        <Card.Title className={`${!bg && `no-bg-title px-0`}`}>
          {title}
        </Card.Title>
        {link && <Link className="card-link">{link}</Link>}
      </Card.Header>
      <Card.Body
        className={`py-4 ${bg ?? `border rounded`} ${
          img && `shadow-sm border-0`
        }`}
      >
        {/* {media && (
          <div className="video-overlay">
            <h2>Sky Apartment Brochure</h2>
          </div>
        )} */}
        {img && (
          <Row>
            {Array.from({ length: 4 }, (_, index) => (
              <Col
                key={index}
                md={3}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src="/assets/bank-img1.png"
                  className="img-fluid"
                  alt="bank img"
                />
              </Col>
            ))}
          </Row>
        )}
        {!media && !img && (
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Card.Text>
        )}
        {media && (
          <div className="video-wrapper">
            <video
              className="w-100"
              src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4"
              controls
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ViewDetailsCard;
