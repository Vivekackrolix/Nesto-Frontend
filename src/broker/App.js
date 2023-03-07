import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { RouteData } from './utils/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/broker/login" element={<Login />} />
        {/* <Route path="/broker/dashboard" element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
