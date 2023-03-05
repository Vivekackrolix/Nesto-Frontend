import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { RouteData } from './utils/Routes';
// import HomeDashboardContent from './dashboard/home-dashnoard-content/HomeDashboardContent';
// import CopyrightText from './dashboard/footer/CopyrightText';
// import Chat from './dashboard//chat/Chat';
import Login from './login/Login';
import HomeDashBoard from './dashboard/HomeDashBoard';
import Property from './dashboard/property/Property';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/builder/login" element={<Login />} />
        <Route path="/builder/home-dashboard" element={<HomeDashBoard />}>
          <Route path="property" element={<Property />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
