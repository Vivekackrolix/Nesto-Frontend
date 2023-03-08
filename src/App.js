
import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import ContactUs from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';
import Banner from './informative/HomePage/Banner/Banner';
import PartnerBanner from './informative/PartnersPage/Partnerbanner/partnerbanner';
import TermsCondition from './informative/TermsCondition/TermsCondition';

const components = {
  informativeHomeBanner: <Banner />,
  dsa: <DsaWebsite />,
  informativePartnersDetailsMain: <PartnersDetailsMain />,
  partnerPage: <PartnerBanner />,
  informativeContactUs: <ContactUs />,
  informativeTandC: <TermsCondition />,
  builder: <BuilderWeb />,
  broker: <BrokerWeb />,
};

const App = () => {
  const websiteToLoad = 'dsa';
  const ComponentToRender = components[websiteToLoad] || (
    <div>Website not found</div>
  );

  return ComponentToRender;
};

export default App;