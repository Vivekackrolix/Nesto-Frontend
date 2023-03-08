import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login';
import { RouteData } from './utils/Routes';
// import DashboardHeader from './features/Dashboard/components/DashboardHeader';
// import DashboardFooter from './features/Dashboard/components/DashboardFooter';
import DashboardPage from './Pages/DashboardPage';
const App = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        {RouteData.map(({ id, path, element, page, routes }) => {
          if (page === 'login') {
            return <Route key={id} path={path} element={element} />;
          } else if (page === 'dashboard' && routes) {
            return (
              <Route
                key={id}
                path={path}
                element={
                  <>
                    {/* {element} <CopyrightText /> <Chat /> */}
                    {element}
                  </>
                }
              >
                <Route index element={<DashboardPage />} />
                {routes.map(({ id, path, element }) => (
                  <Route key={id} path={path} element={element} />
                ))}
              </Route>
            );
          } else {
            return <Route key={id} path={path} element={element} />;
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
