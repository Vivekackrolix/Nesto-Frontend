import React from 'react';
import './partnerbanner.css';
import SearchBar from '../SearchBar/SearchBar';
import InformativeNavbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import PartnerCard from '../PartnerCard/PartnerCard';
import InformativeFooter from './../../InformativeFooter/InformativeFooter';

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
              <hr className="banner-hr" />
              <p className="partners-p">
                Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do
                eiusmod Eorem ipsum dolor sit amet conse ctetur.
              </p>
              <Link to="/" className="partners-link">
                Contact Us
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
