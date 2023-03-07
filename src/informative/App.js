import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from '../informative/PartnersDetail/PartnersDetailsMain'
import ContactUsMain from './ContactUs/ContactUsMain';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/partners/details' element={<PartnersDetailsMain />} />
        <Route path='/contact-us' element={<ContactUsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
