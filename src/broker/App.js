import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import DashboardPage from './Pages/DashboardPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
