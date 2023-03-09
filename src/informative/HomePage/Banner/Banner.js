
import './banner.css';



import { Footer, Header } from '../../../components';
import ChooseUs from '../chooseus/Chooseus';
import Stats from '../stats/Stats';
import Heading from '../heading/Heading';
import Residency from '../residency/Residency';
import GetStarted from '../getStarted/GetStarted';
import News from '../news/News';
import Testimonial from '../../../dsa/dashboard/comment-history-testimonial/CommentHistoryTestimonial';
import Testimonials from '../testimonials/Testimonials';
import Navbar from '../../Navbar/Navbar';
import InformativeNavbar from '../../Navbar/Navbar';

export default function Banner(){
    return (
      <>
      <InformativeNavbar/>
        <div className="banner-body">
          <div className="row">
            <div className="col-md-5">
              <div className="banner-content">
                <h3 className="banner-heading">
                  Professional Network For Real Estate Brokers
                </h3>
                <p className="banner-description">
                  Broker Network app is a suite of services specifically
                  designed for Indian real estate brokers and developers to
                  maximize their business.
                </p>
                <div>
                  <a href="#" className="btn btn-color-primary text-decoration-none">
                    Join us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 d-flex image-div">
              <img className="hero-image" src="./assets/hero.png" alt="" />
              <img
                className="building-image"
                src="./assets/building.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container">
                <img src="./assets/device.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-container">
                <h5>ABOUT US</h5>
                <h3>Dream Living Spaces Setting New Build</h3>
                <p>
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services. Over 39,000 people work for us in more
                  than 70 countries all over the This breadth of global
                  coverage, combined with specialist services.Over 39,000 people
                  work for us in more than 70 countries all over the
                </p>
              </div>
            </div>
          </div>
        </div>
         <Residency/>
        <Stats/>
        
        <ChooseUs/>
        <GetStarted/>
        <News/>
        <Testimonials/>
      </>
    );
}