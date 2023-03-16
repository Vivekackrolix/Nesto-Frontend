import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './Pages/Login';
import DashboardPage from './Pages/dashboard/DashboardPage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/broker/dashboard" element={<DashboardPage />} />
          <Route path="/broker/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
