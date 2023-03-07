import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';

const App = () => {
  const websiteToLoad = 'dsa';

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
