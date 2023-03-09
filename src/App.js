import React from 'react';
import DsaWebsite from './dsa/App';
import PartnersDetailsMain from './informative/App';
import ContactUs from './informative/App';
import BuilderWeb from './builder/App';
import BrokerWeb from './broker/App';
import Banner from './informative/HomePage/Banner/Banner';
import PartnerBanner from './informative/PartnersPage/Partnerbanner/partnerbanner';
import TermsCondition from './informative/TermsCondition/TermsCondition';
import PrivacyPolicy from './informative/PrivacyPolicy/PrivacyPolicy';
import BrokerHome from './informative/BrokerPage/BrokerHome/BrokerHome';


const components = {
  informativeHomeBanner: <Banner />,
  dsa: <DsaWebsite />,
  informativePartnersDetailsMain: <PartnersDetailsMain />,
  partnerPage: <PartnerBanner />,
  informativeContactUs: <ContactUs />,
  informativeTandC: <TermsCondition />,
  builder: <BuilderWeb />,
  broker: <BrokerWeb />,
  informativePrivacyPolicy: <PrivacyPolicy />,
  brokerHome:<BrokerHome/>,
};

const App = () => {
  const websiteToLoad = 'informativePartnersDetailsMain';
  const ComponentToRender = components[websiteToLoad] || (
    <div>Website not found</div>
  );

  return ComponentToRender;
};

export default App;
