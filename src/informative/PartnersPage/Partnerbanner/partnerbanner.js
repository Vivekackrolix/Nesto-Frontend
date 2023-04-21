import React from "react";
import "./partnerbanner.css";
import SearchBar from "../SearchBar/SearchBar";
import InformativeNavbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import PartnerCard from "../PartnerCard/PartnerCard";
import InformativeFooter from "../../InformativeFooter/InformativeFooter";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PartnerBanner = () => {
  return (
    <>
      <InformativeNavbar />
      <div className="partners">
        <div className="row partners-row">
          <div className="col-lg-6 partners-col-1">
            <div>
              <h4 className="partners-h4">
                Our Partners, The Companies That Represent Us
              </h4>
              <div className="load-wrapp">
                <div className="load">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <p className="partners-p">
                Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do
                eiusmod Eorem ipsum dolor sit amet conse ctetur. Borem ipsum
                dolor sit amet conse ctetur adipisicing elit sed do eiusmod
                Eorem ipsum dolor sit amet conse ctetur.
              </p>
              <Link to="/contact-us" className="partners-link primary_button">
                Contact Us<MdKeyboardDoubleArrowRight
                    size={20}
                    className="move-arrow"
                  />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 partners-col-2"></div>
        </div>
      </div>
      <SearchBar />
      <PartnerCard />
      <InformativeFooter />
    </>
  );
};

export default PartnerBanner;
