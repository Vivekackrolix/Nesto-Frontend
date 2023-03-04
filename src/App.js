import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App'

const App = () => {
  // Add your logic here to determine which website to load
  const websiteToLoad = 'partnersDetailsMain';

  if (websiteToLoad === 'dsa') {
    return <DsaWebsite />;
  }
  else if (websiteToLoad === 'partnersDetailsMain') {
    return <PartnersDetailsMain />;
  }
  // else {
  //   return <Website3 />;
  // }
};

export default App;
