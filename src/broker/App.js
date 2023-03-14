import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import DashboardPage from './Pages/DashboardPage';
import Login from './Pages/Login';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/broker/dashboard" element={<DashboardPage />} />
        <Route path="/broker/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
