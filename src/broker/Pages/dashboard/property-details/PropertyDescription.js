import { useParams } from 'react-router-dom';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Footer, Header, HeroSection, Ribbon } from '../../../features';
import IconsCard from './IconsCard';
import ViewDetailsCard from './ViewDetailsCard';
import { SwiperSlider } from '../../../components';
import SwiperMain from '../../../components/swiper/SwiperMain';
import CurrentlyComparing from './currently-comparing/CurrentlyComparing';
import RatingReviewCard from '../../../components/rating-review/RatingReviewCard';
import './PropertyDescription.css';
import { useGetPropertyById } from '../../../hooks/LoginQuery';
import LoadingSpinner from '../../../Common/loading-spinner/LoadingSpinner';
import ErrorMessage from '../../../Common/error-message/ErrorMessage';
import PropertyDetailsCard from './PropertyDetailsCard';

const PropertyDescription = () => {
  const { id } = useParams();
  const {
    getPropertyByIdIsLoading,
    getPropertyByIdIsError,
    getPropertyByIdResponse,
    getPropertyByIdError,
    getPropertyByIdIsSuccess,
  } = useGetPropertyById(id);
  // useGetPropertyById();

  if (getPropertyByIdIsLoading) {
    return <LoadingSpinner />;
  }

  if (getPropertyByIdIsError) {
    return <ErrorMessage />;
  }

  if (getPropertyByIdIsSuccess) {
    console.log(getPropertyByIdResponse);

    const [property] = getPropertyByIdResponse;
    const {
      thumbnail,
      brokerageType,
      brokerageValue,
      isRera,
      amenities,
      isBestSelling,
      propertyDescription,
      floorPlanAndPricing,
      ...propertyDetailsCard
    } = property;
    console.log('Amenities');
    console.log(amenities);
    console.log('Amenities');
    return (
      <>
        <Header />
        {getPropertyByIdIsSuccess && (
          <section className="mt-5 broker__property__details">
            <Container>
              {/* <HeroSection details /> */}
              <section className="mt-5">
                <div
                  className="hero-section nes__hero d-flex flex-column justify-content-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${thumbnail})`,
                  }}
                >
                  <Container>
                    <div className="hero-caption d-flex flex-column justify-content-center justify-content-sm-start ms-sm-5">
                      {isRera && <Ribbon cssClass="ribbonStyle2" text="RERA" />}
                      {isBestSelling && (
                        <Ribbon cssClass="ribbonStyle" text="Best Seller" />
                      )}
                      <Ribbon
                        cssClass="ribbonStyle2 rounded-pill mt-5 py-1 px-3"
                        text={`${brokerageValue}${
                          brokerageType === 'percentage' && '%'
                        } Brokerage`}
                      />
                      <div className="hero-caption-img-navigation position-absolute">
                        <Image
                          rounded
                          src="/assets/broker/hero-small-img.png"
                          className="ml-3"
                        />
                        <Image
                          src="/assets/broker/hero-small-img.png"
                          rounded
                          className="mx-5"
                        />
                        <div className="position-relative d-inline-block">
                          <Image
                            src="/assets/broker/hero-small-img.png"
                            rounded
                            className="ml-3"
                          />
                          <div className="position-absolute bottom-0 end-0 bg-dark text-white">
                            <span className="px-2">3+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </section>
              {/* hero sectiob details code end here */}
              <PropertyDetailsCard propertyDetailsCard={propertyDetailsCard} />

              <ViewDetailsCard
                title="Description"
                propertyDescription={propertyDescription}
                bg
              />
              <div className="nes__dashboard__largeicons">
                {/* amenities */}
                <Card className="border-0 shadow-none bg-transparent property__details__iconcard mb-4">
                  <Card.Header className="bg-transparent border-0 mt-3 px-0">
                    <Card.Title className="fw-bold">
                      Project Amenities
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="border rounded">
                    <Row className="g-4">
                      {!!amenities.length &&
                        amenities.map(({ iconUrl, _id, name }) => (
                          <Col
                            style={{ flex: `0 0 calc(100% / ${5})` }}
                            key={_id}
                            className="d-flex justify-content-center align-items-center"
                          >
                            <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                              <img
                                width={20}
                                src={iconUrl}
                                alt={{ name }}
                                className="img-fluid mb-2"
                              />

                              <span className="property__details__iconcard__iconsubtitle">
                                {name}
                              </span>
                            </div>
                          </Col>
                        ))}
                    </Row>
                  </Card.Body>
                </Card>
                {/* amenities code end here */}
              </div>
              <div className="nes__dashboard__smallicons">
                {/* <IconsCard
                  length={4}
                  title="Location Advantages"
                  col={4}
                  iconTitle
                /> */}
              </div>

              <SwiperSlider floorPlansAndPricing={floorPlanAndPricing} />

              {/* <SwiperMain swiperData={data} slidesPerView="3" spaceBetween="10">
                <Card className="media-card">
                  <Card.Body>
                    <div className="nes__broker__swiper__item__media d-flex align-items-center  gap-3">
                      <img
                        src="/assets/broker/property-img.png"
                        alt="Property"
                        className="h-100
                  "
                      />
                      <div className="nes__broker__swiper__item__media__body">
                        <h5 className="m-0">DLF Tower</h5>
                        <p className="m-0">Shivaji Nagar</p>
                        <p className="m-0">0.06 KM distance</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperMain> */}
              <ViewDetailsCard
                title="About The Project"
                link="View Details"
                bg
              />
              <div className="nes__dashboard__banks">
                <ViewDetailsCard title="Loan Approved By" link="View All" img />
              </div>
              <ViewDetailsCard title="View official brochure" media />
              <ViewDetailsCard
                title="Terms &b Conditions"
                link="View Details"
              />
              {/* <CustomLineChart lineChartData={ lineCharData } /> */}
              <CurrentlyComparing />
              <RatingReviewCard />
            </Container>
          </section>
        )}
        <Footer />
      </>
    );
  }
};

export default PropertyDescription;
