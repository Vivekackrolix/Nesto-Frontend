import { Card, Col, Row } from 'react-bootstrap';

const PropertyDetailsHeader = () => {
  return (
    <Row className="property__details__header">
      <Col xs={8}>
        <Card>
          <Card.Img
            variant="top"
            src="/assets/property-screen-img1.png"
            alt="property"
            className="img-fluid w-100  property__details__header__imgfull"
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end">
            <div className="d-flex align-items-center justify-content-between">
              <Card.Title className="text-white m-0 fw-bold">
                All Photos & Videos
              </Card.Title>
              <Card.Text className="text-white fw-semibold">
                16 Photos
              </Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
      <Col xs={4}>
        <Row className="h-100 d-flex flex-column justify-content-between">
          <Col xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src="/assets/property-screen-img2.png"
                alt="property"
                className="img-fluid w-100"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <div className="d-flex align-items-center justify-content-between">
                  <Card.Title className="text-white m-0 fw-bold">
                    All Photos & Videos
                  </Card.Title>
                  <Card.Text className="text-white fw-semibold">
                    16 Photos
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src="/assets/property-screen-img3.png"
                alt="property"
                className="img-fluid w-100"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                <div className="d-flex align-items-center justify-content-between">
                  <Card.Title className="text-white m-0 fw-bold">
                    All Photos & Videos
                  </Card.Title>
                  <Card.Text className="text-white fw-semibold">
                    16 Photos
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyDetailsHeader;
