import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Test from "./Test";
import { RouteData } from "./utils/Routes";
// import HomeDashboardContent from './dashboard/home-dashnoard-content/HomeDashboardContent';
// import CopyrightText from './dashboard/footer/CopyrightText';
// import Chat from './dashboard//chat/Chat';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/builder/test" element={<Test />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        {RouteData.map(({ id, path, element, page, routes }) => {
          if (page === "login") {
            return <Route key={id} path={path} element={element} />;
          } else if (page === "dashboard" && routes) {
            return (
              <h1>Dashboard</h1>
              // <Route
              //   key={id}
              //   path={path}
              //   element={
              //     <>
              //       {element} <CopyrightText /> <Chat />
              //     </>
              //   }
              // >
              //   <Route index element={<HomeDashboardContent />} />
              //   {routes.map(({ id, path, element }) => (
              //     <Route key={id} path={path} element={element} />
              //   ))}
              // </Route>
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
