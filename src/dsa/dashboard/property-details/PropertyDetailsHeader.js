import { Card, Col, Row } from 'react-bootstrap';

const PropertyDetailsHeader = () => {
  return (
    <Row className="property__details__header">
      <Col md={8}>
        <Card className="shadow-sm border-0 nes__dashboard__images">
          <Card.Img
            variant="top"
            src="/assets/property-screen-img1.png"
            alt="property"
            className="img-fluid property__details__header__imgfull nes__dashboard__images__big"
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
      <Col className="mt-3 mt-md-0" md={4}>
        <div className="d-flex flex-column h-100">
          <Card className="border-0 mb-3 nes__dashboard__images__small1">
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

          <Card className="border-0  nes__dashboard__images__small2">
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
        </div>
      </Col>
    </Row>
  );
};

export default PropertyDetailsHeader;
