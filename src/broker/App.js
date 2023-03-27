import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { setToken } from './store/authSlice';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // import PersistGate
import { store, persistor } from './store/store'; // import store and persistor
import Login from './Pages/Login';
import DashboardPage from './Pages/dashboard/DashboardPage';
import Register from './Pages/Register';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import PropertyDescription from './Pages/dashboard/property-details/PropertyDescription';
import { setAuthToken } from './services/api';
import { Footer, Header } from './features';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/broker/login" element={<Login />} />
              <Route path="/broker/register" element={<Register />} />
              <Route path="/broker/dashboard" element={<DashboardPage />} />
              <Route
                path="/broker/property-details"
                element={<PropertyDescription />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
