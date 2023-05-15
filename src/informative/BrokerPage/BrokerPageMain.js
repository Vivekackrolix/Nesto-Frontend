import React, { useEffect } from "react";
import InformativeFooter from "../InformativeFooter/InformativeFooter";
import InformativeNavbar from "../Navbar/Navbar";
import BrokerBanner from "./BrokerBanner/BrokerBanner";
import ChooseUs from "../HomePage/chooseus/Chooseus";
import Testimonials from "../HomePage/testimonials/Testimonials";
import Aos from "aos";

const BuilderPageMain = () => {
  const testData = [
    {
      personName: "Sagar Pant",
      desc: "With NestoHub on my side, I don’t need to worry about reaching out to big names in the market. They have everyone I want with a higher brokerage, which helps me earn and sell better.",
      role: "",
      personImg: "/assets/informative/profile.svg",
    },
    {
      personName: "Sachin Sharma",
      desc: "I was a new broker in the market, and NestoHub was the perfect platform for me to start selling properties with higher earnings and the finest properties. They advised me on gaining profits and quick sales.",
      role: "",
      personImg: "/assets/informative/profile.svg",
    },
    {
      personName: "Suresh Rastogi",
      desc: "I highly recommend NestoHub to all brokers, as it has made finding properties with higher selling chances and outstanding brokerage simple. It was superb working with the professional Nesto advisors.",
      role: "",
      personImg: "/assets/informative/profile.svg",
    },
  ];

  const chooseData = [
    {
      img: "./assets/informative/chooseUs/no-fee.svg",
      title: "Zero Joining Fee",
      desc: "NestoHub is a free and open platform for everyone. We imply no cost or limitations on our services to ensure full benefits.",
    },
    {
      img: "./assets/informative/chooseUs/handshake.svg",
      title: "User Friendly",
      desc: "Our simple platform gives you access to our extensive approach through your NestoHub Broker dashboards.",
    },
    {
      img: "./assets/informative/chooseUs/social-care.svg",
      title: "Exclusive Inventory",
      desc: "We have properties listed by prominent builders from different locations and with the necessary information.",
    },
    {
      img: "./assets/informative/chooseUs/bullhorn.svg",
      title: "Higher Brokerage",
      desc: "Our platform offers higher brokerage, fixed in percentage value, irrespective of the slab.",
    },
    {
      img: "./assets/informative/chooseUs/loan.svg",
      title: "Community Benefits",
      desc: "Connect with Nesto Advisors and like-minded people to inspire one another through strategic guidance.",
    },
    {
      img: "./assets/informative/chooseUs/loan.svg",
      title: "Refer & Earn",
      desc: "Brokers can earn substantial rewards by referring other brokers to the NestoHub platform.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <InformativeNavbar />
      <BrokerBanner />
      <ChooseUs
        chooseData={chooseData}
        title="NestoHub For Brokers"
        subtitle="Join & Enjoy Streamlined Sales"
      />
      <Testimonials
        testData={testData}
        title="Brokers On NestoHub"
        subtitle="Our Achievements In Your Words"
      />
      <InformativeFooter />
    </>
  );
};

export default BuilderPageMain;
