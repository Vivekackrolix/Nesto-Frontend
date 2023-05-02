import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from './PartnersDetail/PartnersDetailsMain';
import BrokerPageMain from './BrokerPage/BrokerPageMain';
import TermsCondition from './TermsCondition/TermsCondition';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import BlogListMain from './BlogList/BlogListMain';
import BlogDetailMain from './BlogDetail.js/BlogDetailMain';
import AboutUsMain from './AboutUs/AboutUsMain';
import Faq from './Faq/Faq';
import HomeBanner from './HomePage/HomeBanner/HomeBanner';
import ScrollToTop from '../dsa/components/ScrollToTop';
import ContactUs from './ContactUs/ContactUs';
import PartnerBanner from './PartnersPage/Partnerbanner/partnerbanner';
import BuilderPageMain from './BuilderPage/BuilderPageMain';
import CpPropertyDetailsMain from './PartnersDetail/PartnersDetailLeft/CurrentProjects/CpPropertyDetails/CpPropertyDetailsMain';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeBanner />} />
        <Route path="/partners/details" element={<PartnersDetailsMain />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/partner-page" element={<PartnerBanner />} />
        <Route path="/broker-page" element={<BrokerPageMain />} />
        <Route path="/builder-page" element={<BuilderPageMain />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog-list" element={<BlogListMain />} />
        <Route path="/blog-detail" element={<BlogDetailMain />} />
        <Route path="/about-us" element={<AboutUsMain />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/property-details" element={<CpPropertyDetailsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;