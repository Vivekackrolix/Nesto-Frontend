import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartnersDetailsMain from '../informative/PartnersDetailsMain'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/partners/details' element={<PartnersDetailsMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
