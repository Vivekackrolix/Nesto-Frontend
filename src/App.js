import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import ContactUs from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';
import Banner from './informative/HomePage/Banner/Banner';

const App = () => {
  const websiteToLoad = 'informativePartnersDetailsMain';

  switch (websiteToLoad) {
      case 'informativeHomeBanner':
      return <Banner/>;
    case 'dsa':
      return <DsaWebsite />;
      case 'informativePartnersDetailsMain':
      return <PartnersDetailsMain />;
    case 'informativeContactUs':
      return <ContactUs />
    
    case 'builder':
      return <BuilderWeb />;
    case 'broker':
      return <BrokerWeb />;
    default:
      return <div>Website not found</div>;
  }
};

export default App;