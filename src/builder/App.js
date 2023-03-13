import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import HomeDashBoard from "./dashboard/HomeDashBoard";
import Property from "./dashboard/property/Property";
// import VisitDetails from "./dashboard/dashboard-property-analytics/Visit-Details/VisitDetails";
import SoldPage from "./dashboard/dashboard-soldout-properties/Sold-page";
import PromotedVisit from "./dashboard/dashboard-property-analytics/Visit Details/PromotedVisit";

import VisitDetails from "./dashboard/dashboard-property-analytics/Visit Details/VisitDetails";
import PropertyEdit from "./dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";
import AmenitiesPop from "./dashboard/dashboard-info-cards/Property Edit/Amenitiespop";
import PropertyClaim from "./dashboard/dashboard-property-analytics/Visit Details/Property claim/PropertyClaim";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/builder/login" element={<Login />} />
        <Route
          exact
          path="/builder/home-dashboard/promoted"
          element={<PromotedVisit />}
        />
        <Route
          exact
          path="/builder/home-dashboard/visit"
          element={<VisitDetails />}
        />
        <Route
          exact
          path="/builder/home-dashboard/promoted/claim"
          element={<PropertyClaim />}
        />

        <Route
          exact
          path="/builder/home-dashboard/propertyedit"
          element={<PropertyEdit />}
        />

        <Route
          exact
          path="/builder/home-dashboard/sold"
          element={<SoldPage />}
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
