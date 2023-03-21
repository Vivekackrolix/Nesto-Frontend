import { DashboardFooter } from "../../../broker/features";
import Footer from "../../../builder/dashboard/Footer/Footer";
import ChooseUs from "../../HomePage/ChooseUs/Chooseus";
import News from "../../HomePage/News/News";
import Residency from "../../HomePage/Residency/Residency";
import Testimonial from "../../HomePage/Testimonials/Testimonials";
import Contact from "../contactform/Contact";
import "./BokerHome.css";
export default function BrokerHome() {
  return (
    <>
      <div>
        <div className="banner position-relative">
          <div className="pt-5 broker-banner">
            <div className="container test">
              <div className="">
                <div className="col-lg-8 col-md-12 d-flex text-left">
                  <div>
                    <div className="banner-heading mt-5">
                      <h2>Welcome to India's Largest Network Of Brokers</h2>
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
                  <div className="broker-img">
                    <img src="./assets/broker.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Contact className="contact-form" />

          <Residency className="residence" />
          <ChooseUs />
          <Testimonial />
          <News />
        </div>
      </div>
    </>
  );
}
