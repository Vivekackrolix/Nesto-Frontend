import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';

const App = () => {
  // Add your logic here to determine which website to load
  
  const websiteToLoad = "builder";
  
  if (websiteToLoad === 'dsa') {
    return <DsaWebsite />;
  }
  if (websiteToLoad === 'partnersDetailsMain') {
    return <PartnersDetailsMain />;
  }

  if (websiteToLoad === 'builder') {
    return <BuilderWeb />;
  }

  if (websiteToLoad === 'broker') {
    return <BrokerWeb />;
  }
};

export default App;
