
import {  Header, SearchFilter } from '../../../components';
import InformativeNavbar from '../../Navbar/Navbar';
import Partner from '../partners/partner';
import SearchBox from '../SearchBox/SearchBox';
import './partnerbanner.css'
import Footer from "../../../components/footer/Footer";

export default function PartnerBanner() {
  return (
    <>
      {/*  */}
      <InformativeNavbar />

      <div className="banner-body">
        <div className="row">
          <div className="col-md-7">
            <div className="banner-content">
              <h3 className="banner-heading px-2">
                Our Partners, The Companies That Represent Us.
              </h3>
              <p className="banner-description px-2">
                Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do
                eiusmod Eorem ipsum dolor sit amet conse ctetur.
              </p>
              <div>
                <a href="#" className="banner-button text-decoration-none mx-2">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-none d-lg-flex d-flex image-div">
            {/* <img className='dot-curve' src="dotted-curve" alt="" /> */}

            <img
              className="building-image"
              src="./assets/partnerbuilding.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="search-box mb-0">
        <div className="container">
          <SearchBox />
        </div>
      </div>
      <div className="container">
        <Partner />
        <Partner />
        <Partner />
        <Partner />
        <Partner />
      </div>
      <Footer />
    </>
  );
}