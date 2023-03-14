import { DashboardFooter } from "../../../broker/features";
import Footer from "../../../builder/dashboard/Footer/Footer";
import HowWork from "../../AboutUs/HowWork/HowWork";
import Contact from "../../BrokerPage/contactform/Contact";
import ChooseUs from "../../HomePage/chooseus/Chooseus";
import Residency from "../../HomePage/residency/Residency";
import Testimonial from "../../HomePage/testimonials/Testimonials";
import './BuilderHome.css';
export default function BuilderHome() {
  return (
    <>
      <div className="banner position-relative">
        <div className="pt-5 builder-banner">
          <div className="container test">
            <div className="">
              <div className="col-lg-5 col-md-12 d-flex text-left">
                <div>
                  <div className="banner-heading mt-5">
                    <h2>Stop Searching, Start Listing
your Property With Us</h2>
                  </div>
                  <div className="banner-desc mt-5">
                    <p>
                      Broker Network app is a suite of services specifically
                      designed for Indian real estate brokers and developers to
                      maximize their business.
                    </p>
                  </div>
                  <div className="my-4">
                    <a href="" className="btn btn-color-primary mt-5">
                      Get Started
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Contact className="contact-form" />

        {/* <Residency className="residence" /> */}
        {/* <ChooseUs />
        <Testimonial /> */}
      </div>
      <HowWork/>
    </>
  );
}
