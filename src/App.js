import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App'

const App = () => {
  const websiteToLoad = 'builder';

  switch (websiteToLoad) {
    case 'dsa':
      return <DsaWebsite />;
    case 'partnersDetailsMain':
      return <PartnersDetailsMain />;
    case 'builder':
      return <BuilderWeb />;
    case 'broker':
      return <BrokerWeb />;
    default:
      return <div>Website not found</div>;
  }
};

export default App;
