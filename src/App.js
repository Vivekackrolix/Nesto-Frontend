import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import HomeDashboardContent from './dashboard/home-dashnoard-content/HomeDashboardContent';
import CopyrightText from './components/footer/CopyrightText';

const App = () => {
  return (
    <BrowserRouter>
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
                    {element} <CopyrightText />
                  </>
                }
              >
                <Route index element={<HomeDashboardContent />} />
                {routes.map(({ id, path, element }) => (
                  <Route key={id} path={path} element={element} />
                ))}
              </Route>
            );
          } else {
            return null;
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
