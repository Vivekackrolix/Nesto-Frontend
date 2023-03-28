import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from 'react-bootstrap';
import { Footer, Header, Ribbon } from '../../../features';

import ViewDetailsCard from './ViewDetailsCard';
import { SwiperSlider } from '../../../components';
import CurrentlyComparing from './currently-comparing/CurrentlyComparing';
import RatingReviewCard from '../../../components/rating-review/RatingReviewCard';
import { useGetPropertyById } from '../../../hooks/LoginQuery';
import LoadingSpinner from '../../../Common/loading-spinner/LoadingSpinner';
import ErrorMessage from '../../../Common/error-message/ErrorMessage';
import PropertyDetailsCard from './PropertyDetailsCard';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import './PropertyDescription.css';
import React from 'react';

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
      locationAdvantages,
      propertyAdvertiseMentDetails,
      loanApprovedByIds,
      paymentPlan,
      termAndCondition,
      brochureUrl,
      builderId: { description: aboutTheBuilder },
      ...propertyDetailsCard
    } = property;

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
                <Card className="border-0 shadow-none bg-transparent property__details__iconcard mb-4">
                  <Card.Header className="bg-transparent border-0 mt-3 px-0">
                    <Card.Title className="fw-bold">
                      Location Advantages
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="border rounded">
                    <Row className="g-4">
                      {!!locationAdvantages.length &&
                        locationAdvantages.map(
                          ({ iconUrl, name, distance, _id }) => (
                            <Col
                              key={_id}
                              style={{ flex: `0 0 calc(100% / ${4})` }}
                              className="d-flex justify-content-center align-items-center"
                            >
                              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                                <img
                                  src={iconUrl}
                                  alt={{ name }}
                                  className="img-fluid mb-2"
                                />

                                <span className="property__details__iconcard__icontitle">
                                  {name}
                                </span>

                                <span className="property__details__iconcard__iconsubtitle">
                                  {distance}
                                </span>
                              </div>
                            </Col>
                          )
                        )}
                    </Row>
                  </Card.Body>
                </Card>
              </div>

              <SwiperSlider floorPlansAndPricing={floorPlanAndPricing} />

              {/* map  */}
              <div className="w-100">
                <Image fluid src="/assets/broker/map-image.png" alt="map" />
              </div>
              {/* map code end here */}

              {/* property advertisement details */}
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="mt-5 mb-5"
              >
                {!!propertyAdvertiseMentDetails.length &&
                  propertyAdvertiseMentDetails.map(
                    ({ iconUrl, _id, name, location, distance }) => (
                      <SwiperSlide key={_id}>
                        <Card className="media-card">
                          <Card.Body>
                            <div className="nes__broker__swiper__item__media d-flex align-items-center  gap-3">
                              <img
                                src={iconUrl}
                                alt="Property"
                                className="h-100
                  "
                              />
                              <div className="nes__broker__swiper__item__media__body">
                                <h5 className="m-0">{name}</h5>
                                <p className="m-0">{location}</p>
                                <p className="m-0">{distance}</p>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </SwiperSlide>
                    )
                  )}
              </Swiper>
              {/* property advertisement details code end here */}

              <ViewDetailsCard
                title="About The Project"
                link="View Details"
                propertyDescription={propertyDescription}
                bg
              />

              {/* payment plan */}
              <Table bordered>
                <thead>
                  <tr>
                    <th>Payment %</th>
                    <th>Milestone</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentPlan.map(({ payment, milestone }, index) => (
                    <tr key={index}>
                      <td>{payment}</td>
                      <td>{milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {/* payment plan code end here */}

              <div className="nes__dashboard__banks">
                <ViewDetailsCard
                  title="Loan Approved By"
                  link="View All"
                  img
                  loanApprovedByIds={loanApprovedByIds}
                />
              </div>

              <ViewDetailsCard
                title="About the Builder"
                link="View Details"
                aboutTheBuilder={aboutTheBuilder}
                bg
              />

              <ViewDetailsCard
                title="View official brochure"
                media
                brochureUrl={brochureUrl}
              />
              <ViewDetailsCard
                title="Terms & Conditions"
                link="View Details"
                termAndCondition={termAndCondition}
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
