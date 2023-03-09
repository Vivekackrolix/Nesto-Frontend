
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from '../informative/PartnersDetailsMain'
import BrokerHome from './BrokerPage/BrokerHome/BrokerHome';
import Banner from './HomePage/Banner/Banner';
import PartnerBanner from './PartnersPage/Partnerbanner/Partnerbanner';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/partners/details' element={<PartnersDetailsMain />} />
        <Route path='/home-page' element={<Banner />} />
         <Route path='/partner-page' element={<PartnerBanner />} />
         <Route path='/broker-page' element={<BrokerHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
