import { Card, Container } from 'react-bootstrap';
import { HeroSection } from '../../../features';
import IconsCard from './IconsCard';
import ViewDetailsCard from './ViewDetailsCard';
import { SwiperSlider } from '../../../components';
import SwiperMain from '../../../components/swiper/SwiperMain';
import './PropertyDescription.css';
const data = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const PropertyDescription = () => {
  return (
    <section className="mt-5 broker__property__details">
      <Container>
        <HeroSection details />
        <ViewDetailsCard title="Description" bg />
        <div className="nes__dashboard__largeicons">
          <IconsCard
            length={10}
            title="Project Amenities"
            iconTitle={false}
            col={5}
          />
        </div>
        <div className="nes__dashboard__smallicons">
          <IconsCard length={4} title="Location Advantages" col={4} iconTitle />
        </div>

        <SwiperSlider />

        <SwiperMain data={data} slidesPerView="3" spaceBetween="10">
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
        </SwiperMain>
        <ViewDetailsCard title="About The Project" link="View Details" bg />
        <div className="nes__dashboard__banks">
          <ViewDetailsCard title="Loan Approved By" link="View All" img />
        </div>
        <ViewDetailsCard title="View official brochure" media />
        <ViewDetailsCard title="Terms & Conditions" link="View Details" />
      </Container>
    </section>
  );
};

export default PropertyDescription;
