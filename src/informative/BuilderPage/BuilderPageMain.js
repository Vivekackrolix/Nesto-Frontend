import React, { useEffect } from "react";
import HowWork from "../AboutUs/HowWork/HowWork";
import Residency from "../HomePage/residency/Residency";
import InformativeFooter from "../InformativeFooter/InformativeFooter";
import InformativeNavbar from "../Navbar/Navbar";
import BuilderBanner from "./BuilderBanner/BuilderBanner";
import ChooseUs from "./../HomePage/chooseus/Chooseus";
import Testimonials from "../HomePage/testimonials/Testimonials";
import Aos from "aos";
import HowWorkBuilder from "./../AboutUs/HowWork/HowWorkBuilder/HowWorkBuilder";

const BuilderPageMain = () => {
  const testData = [
    {
      personName: "Raghav Bindra",
      desc: "NestoHub is a unique platform for builders and brokers. It makes property listing and selling super easy and convenient. I highly recommend NestoHub to my fellow builders.",
      role: "",
      personImg: "/assets/profile.svg",
    },
    {
      personName: "Satakshi Sinha",
      desc: "Their team was patient and professional while teaching me how to utilize the platform for my property listing. The best part is that I no longer have to handle the stress of managing brokers.",
      role: "",
      personImg: "/assets/profile.svg",
    },
    {
      personName: "Jamshed Khan",
      desc: "I really like working with NestoHub, as they are skilled professionals and reliable for selling my properties. This digital platform is a big yes for every builder and broker from my side.",
      role: "",
      personImg: "/assets/profile.svg",
    },
  ];

  const chooseData = [
    {
      img: "./assets/informative/chooseUs/no-fee.svg",
      title: "Zero Joining Fee",
      desc: "NestoHub is a free and open platform for all brokers and builders. We imply no cost or limitations on our services to ensure complete benefits.",
    },
    {
      img: "./assets/informative/chooseUs/handshake.svg",
      title: "User Friendly",
      desc: "Our powerful platform gives you access to your property performance through the NestoHub builder dashboard.",
    },
    {
      img: "./assets/informative/chooseUs/social-care.svg",
      title: "Wide Reach",
      desc: "We offer you and your properties access to a vast pool of brokers with a nominal requirement for manual management.",
    },
    {
      img: "./assets/informative/chooseUs/bullhorn.svg",
      title: "Property Listing",
      desc: "NestoHub lists your properties with you and refines them to make them more valuable to brokers with the required information.",
    },
    {
      img: "./assets/informative/chooseUs/loan.svg",
      title: "Exclusive Package",
      desc: "You can set yourself apart both in the physical market and on NestoHub. Purchase our package and place your property at the top.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <InformativeNavbar />
      <BuilderBanner />
      {/* <Residency/> */}
      <HowWorkBuilder />
      <ChooseUs
        chooseData={chooseData}
        title="NestoHub For Builders"
        subtitle="Join & Enjoy Hassle-free Deals"
      />
      <Testimonials
        testData={testData}
        title="Builders On NestoHub"
        subtitle="Our Achievements In Your Words"
      />
      <InformativeFooter />
    </>
  );
};

export default BuilderPageMain;
