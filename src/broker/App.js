import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BrokerLogin from './Login/BrokerLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/broker/login" element={<BrokerLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
