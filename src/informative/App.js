import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from './PartnersDetail/PartnersDetailsMain';
import BrokerHome from './BrokerPage/BrokerHome/BrokerHome';

import ContactUsMain from './ContactUs/ContactUsMain';
import TermsCondition from './TermsCondition/TermsCondition';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import BlogListMain from './BlogList/BlogListMain';
import BuilderHome from './BuilderPage/BuilderPageHome/BuilderHome';
import partnerbanner from '../informative/PartnersPage/Partnerbanner/partnerbanner';
import BlogDetailMain from './BlogDetail.js/BlogDetailMain';
import AboutUsMain from './AboutUs/AboutUsMain';
import Faq from './Faq/Faq';
import HomeBanner from './HomePage/HomeBanner/HomeBanner';
import ScrollToTop from '../dsa/components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/partners/details" element={<PartnersDetailsMain />} />
        <Route path="/contact-us" element={<ContactUsMain />} />
        <Route path="/" element={<HomeBanner />} />
        <Route path="/partner-page" element={<partnerbanner />} />
        <Route path="/broker-page" element={<BrokerHome />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog-list" element={<BlogListMain />} />
        <Route path="/blog-detail" element={<BlogDetailMain />} />
        <Route path="/about-us" element={<AboutUsMain />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
