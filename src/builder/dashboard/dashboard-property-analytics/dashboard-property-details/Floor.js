import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Card, Container } from "react-bootstrap";
import DashboardTabs from "../../dashboard-soldout-properties/dashboard-tabs/DashboardTabs";

// const items = [
//   {
//     id: 0,
//   },
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   },
//   {
//     id: 4,
//   },
// ];

const tabKey = ["All", "2BHK ", " 3BHK", "4BHK", "5BHK"];

const Floor = ({ data }) => {
  // const items = data;
  const [slidesPerView, setSlidesPerView] = useState(1);
  // const unitType = data.unitType ? data.unitType : [];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(data);

  const floorPlan = data?.floorPlanAndPricing?.map((item) => (
    <SwiperSlide key={item?.id}>
      <Card className="h-100 border-0 shadow-sm swiper__card p-3">
        <div class="ribbon">
          <span>{tabKey[item?.id]} </span>
        </div>

        <Card.Img
          variant="top"
          src={
            "/assets/swiper-img.png"
            // item?.floorPlanImageUrl
          }
        />
        <Card.Body className="px-0">
          <div className="swiper__card__row d-flex justify-content-between align-items-center">
            <span>Super Built-Up Area</span>
            <span className="text-right">Price</span>
          </div>
          <div className="swiper__card__row d-flex justify-content-between align-items-center">
            <span>{item?.areaSquareFeet}</span>
            {/* {data?.floorPlanAndPricing.map((itm) => ( */}
            {/* <span>{itm?.areaSquareFeet}</span> */}
            {/* ))} */}
            <span className="swiper__price text-wrap">{item?.price}</span>
          </div>
          <div className="swiper__card__row d-flex justify-content-between align-items-center mt-2">
            <span>{item?.areaSquareMeter}</span>
            <span>+Govt. Charges</span>
          </div>
        </Card.Body>
      </Card>
    </SwiperSlide>
  ));

  return (
    <Container fluid="lg" className="mt-5">
      <div className="mb-4 mt-5">
        <h3 className="swiper-title">Floor Plans & Pricing</h3>
        <span className="swiper-subtitle">in Arocon Rainbow</span>
      </div>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          autoplay={{ delay: 3000 }}
          className="mt-0 mb-5"
        >
          {floorPlan}
        </Swiper>
      </DashboardTabs>
    </Container>
  );
};

export default Floor;
