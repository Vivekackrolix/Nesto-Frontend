import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './Pages/Login';
import DashboardPage from './Pages/dashboard/DashboardPage';
import Register from './Pages/Register';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/broker/dashboard" element={<DashboardPage />} />
            <Route path="/broker/login" element={<Login />} />
            <Route path="/broker/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
