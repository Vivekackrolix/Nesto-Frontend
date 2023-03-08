import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from './PartnersDetail/PartnersDetailsMain'
import ContactUsMain from './ContactUs/ContactUsMain';
import Banner from './HomePage/Banner/Banner';
import PartnerBanner from './PartnersPage/Partnerbanner/partnerbanner'
import TermsCondition from './TermsCondition/TermsCondition';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/partners/details' element={<PartnersDetailsMain />} />
        <Route path='/contact-us' element={<ContactUsMain />} />
        <Route path='/home-page' element={<Banner />} />
         <Route path='/partner-page' element={<PartnerBanner />} />
         <Route path='/terms-condition' element={<TermsCondition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
