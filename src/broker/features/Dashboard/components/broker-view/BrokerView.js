import { useGetAllPropertyQuery } from '../../../../hooks/LoginQuery';
import { Container } from 'react-bootstrap';
import HeroSection from '../hero-section/HeroSection';
import SmallCardSection from '../small-card-section/SmallCardSection';
import productImg from '../../assets/images/product-img.png';
import { ProductContainers } from '../../../../dashboard-containers';
import SwiperSliderDashboard from '../swiper-slider-dashboard/SwiperSliderDashboard';
import { SearchFilter } from '../../../../../components';

import './BrokerView.css';
import { useAuth } from '../../../../services/api';
const BrokerView = () => {
  useAuth();
  const {
    getAllPropertyIsLoading,
    getAllPropertyIsError,
    getAllPropertyResponse,
    getAllPropertyError,
    getAllpropertyIsSuccess,
  } = useGetAllPropertyQuery();

  if (getAllPropertyIsLoading) {
    return <div>Loading</div>;
  }

  if (getAllPropertyIsError) {
    return <div>somthing goes wrong</div>;
  }

  return (
    <Container fluid="lg">
      <HeroSection />
      <SmallCardSection />
      <section className="mt-3">
        <SearchFilter addBtn />
      </section>
      <section className="mt-5">
        <SwiperSliderDashboard />
      </section>

      {getAllPropertyResponse && (
        <ProductContainers
          sectionTitle="Promoted Property"
          propertyData={getAllPropertyResponse}
          view="broker"
        />
      )}
      <HeroSection />

      {/* <ProductContainers
        sectionTitle="Recently Added"
        productData={getAllPropertyResponse}
        view="broker"
      /> */}
      {/* <ProductContainers
        sectionTitle="Best Selling"
        productData={getAllPropertyResponse}
        view="broker"
      /> */}
    </Container>
  );
};

export default BrokerView;
