// updated code with routes
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/loading-screen/LoadingScreen';

const DsaWebsite = lazy(() => import('./dsa/App'));
const PartnersDetailsMain = lazy(() => import('./informative/App'));
const ContactUs = lazy(() => import('./informative/App'));
const BuilderWeb = lazy(() => import('./builder/App'));
const BrokerWeb = lazy(() => import('./broker/App'));
const Banner = lazy(() => import('./informative/HomePage/Banner/Banner'));
const PartnerBanner = lazy(() =>
  import('./informative/PartnersPage/Partnerbanner/partnerbanner')
);
const TermsCondition = lazy(() =>
  import('./informative/TermsCondition/TermsCondition')
);
const PrivacyPolicy = lazy(() =>
  import('./informative/PrivacyPolicy/PrivacyPolicy')
);
const BrokerHome = lazy(() =>
  import('./informative/BrokerPage/BrokerHome/BrokerHome')
);

const App = () => {
  return (
    <>
      {/* Informative */}
      {/* <PartnersDetailsMain />
      <ContactUs />
      <PartnerBanner />
      <TermsCondition />
      <PrivacyPolicy />
      <Banner /> */}
      {/* Informative code end here */}

      {/* informative */}
      <PartnersDetailsMain />

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
