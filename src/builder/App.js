import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import HomeDashBoard from "./dashboard/HomeDashBoard";
import Property from "./dashboard/property/Property";
import VisitDetails from "./dashboard/dashboard-property-analytics/Visit Details/VisitDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/builder/login" element={<Login />} />
        <Route
          exact
          path="/builder/home-dashboard/visit"
          element={<VisitDetails />}
        />
        <Route exact path="/builder/home-dashboard" element={<HomeDashBoard />}>
          <Route exact path="property" element={<Property />} />
          <Route exact spath="HOME" />
          <Route exact bpath="Brockrage" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
