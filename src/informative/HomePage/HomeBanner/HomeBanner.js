import React, { useEffect } from "react";
import InformativeNavbar from "../../Navbar/Navbar";
import Residency from "../Residency/Residency";
import GetStarted from "../GetStarted/GetStarted";
import News from "../News/News";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../ChooseUs/ChooseUs";
import Testimonials from "../Testimonials/Testimonials";
import Stats from "../Stats/Stats";
import Aos from "aos";
import Banner from "./Banner/Banner";
import OurPartner from "../OurPartner/OurPartner";
import HowWork from "../../AboutUs/HowWork/HowWork";
import Footer from "../../../components/footer/Footer";

const HomeBanner = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <InformativeNavbar />
        <Banner />
        <AboutUs />
        <Stats />
        <Residency />
        <ChooseUs />
        <HowWork />
        <OurPartner />
        <GetStarted />
        <News />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomeBanner;
