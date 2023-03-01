import Slider from '../swiper/SwiperSlider';
import IconsCard from './IconsCard';
import ViewDetailsCard from './ViewDetailsCard';

const PropertyDetailsText = () => {
  return (
    <>
      <ViewDetailsCard title="Description" />
      <IconsCard
        length={10}
        title="Project Amenities"
        iconTitle={false}
        col={5}
      />
      <IconsCard
        length={4}
        title="Location Advantages"
        col={4}
        iconTitle={true}
      />

      <Slider />
    </>
  );
};

export default PropertyDetailsText;
