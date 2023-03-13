// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import LoadingScreen from './components/loading-screen/LoadingScreen';
// const DsaWebsite = lazy(() => import('./dsa/App'));
// const PartnersDetailsMain = lazy(() => import('./informative/App'));
// const ContactUs = lazy(() => import('./informative/App'));
// const BuilderWeb = lazy(() => import('./builder/App'));
// const BrokerWeb = lazy(() => import('./broker/App'));
// const Banner = lazy(() => import('./informative/HomePage/Banner/Banner'));
// const PartnerBanner = lazy(() =>
//   import('./informative/PartnersPage/Partnerbanner/partnerbanner')
// );
// const TermsCondition = lazy(() =>
//   import('./informative/TermsCondition/TermsCondition')
// );
// const PrivacyPolicy = lazy(() =>
//   import('./informative/PrivacyPolicy/PrivacyPolicy')
// );
// const BrokerHome = lazy(() =>
//   import('./informative/BrokerPage/BrokerHome/BrokerHome')
// );

// const components = {
//   dsa: DsaWebsite,
//   informativePartnersDetailsMain: PartnersDetailsMain,
//   partnerPage: PartnerBanner,
//   informativeContactUs: ContactUs,
//   builder: BuilderWeb,
//   broker: BrokerWeb,
//   informativeTandC: TermsCondition,
//   informativePrivacyPolicy: PrivacyPolicy,
//   brokerHome: BrokerHome,
//   informativeHomeBanner: Banner,
// };

// const App = () => {
//   const [websiteToLoad, setWebsiteToLoad] = useState(
//     'informativePartnersDetailsMain'
//   );

//   const ComponentToRender = components[websiteToLoad] || (
//     <div>Website not found</div>
//   );

//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <ComponentToRender />
//     </Suspense>
//   );
// };

// export default App;

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
      <PartnersDetailsMain />
      {/* <PartnersDetailsMain />
      <ContactUs />
      <PartnerBanner />
      <TermsCondition />
      <PrivacyPolicy />
      <Banner /> */}
      {/* Informative code end here */}

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
