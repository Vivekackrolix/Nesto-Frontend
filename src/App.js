import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DsaWebsite from './dsa/App';

const App = () => {
  // Add your logic here to determine which website to load
  const websiteToLoad = 'dsa';

  if (websiteToLoad === 'dsa') {
    return <DsaWebsite />;
  }
  //  else if (websiteToLoad === 'website2') {
  //   return <Website2 />;
  // } else {
  //   return <Website3 />;
  // }
};

export default App;
