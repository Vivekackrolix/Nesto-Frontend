import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from '../informative/PartnersDetailsMain'
import Banner from './HomePage/Banner/Banner';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/partners/details' element={<PartnersDetailsMain />} />
        <Route path='/home-page' element={<Banner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
