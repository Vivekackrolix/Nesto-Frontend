// updated code with routes
import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoadingScreen from './components/loading-screen/LoadingScreen';

const DsaWebsite = lazy(() => import("./dsa/App"));
// const PartnersDetailsMain = lazy(() => import("./informative/App"));
const BuilderWeb = lazy(() => import("./builder/App"));
const BrokerWeb = lazy(() => import("./broker/App"));

const App = () => {
  return (
    <>
      {/* informative */}
      {/* <PartnersDetailsMain /> */}

      {/* dsa */}
      <DsaWebsite />

      {/* builder */}
      <BuilderWeb />

      {/* broker */}
      <BrokerWeb />
    </>
  );
};
export default App;
