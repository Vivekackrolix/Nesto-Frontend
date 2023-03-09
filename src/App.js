import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';
import Banner from './informative/HomePage/Banner/Banner';
import PartnerBanner from './informative/PartnersPage/Partnerbanner/Partnerbanner';
import BrokerHome from './informative/BrokerPage/BrokerHome/BrokerHome';

const App = () => {
  const websiteToLoad = 'brokerHome';

  switch (websiteToLoad) {
      case 'informativeHomeBanner':
      return <Banner/>;
      case 'brokerHome':
      return <BrokerHome/>;
    case 'dsa':
      return <DsaWebsite />;
    case 'partnersDetailsMain':
      return <PartnersDetailsMain />;
      case 'partnerPage':
      return <PartnerBanner />;
    case 'builder':
      return <BuilderWeb />;
    case 'broker':
      return <BrokerWeb />;
    default:
      return <div>Website not found</div>;
  }
};

export default App;
 