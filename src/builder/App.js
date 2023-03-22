import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./login/Login";
import HomeDashBoard from "./dashboard/HomeDashBoard";
import Property from "./dashboard/property/Property";

import SoldPage from "./dashboard/dashboard-soldout-properties/Sold-page";
import PromotedVisit from "./dashboard/dashboard-property-analytics/Visit Details/PromotedVisit";

import VisitDetails from "./dashboard/dashboard-property-analytics/Visit Details/VisitDetails";
import PropertyEdit from "./dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";

import PropertyClaim from "./dashboard/dashboard-property-analytics/Visit Details/Property claim/PropertyClaim";
import Brockrage from "./dashboard/Brokerage/Brokerage";
import SettledInvoice from "./dashboard/Brokerage/SettledInvoice";
import BrockrageSettled from "./dashboard/Brokerage/BrokerageSettled";
import ProfilePage from "./dashboard/Builderprofile/Profile";
import NotificationDropdown from "./dashboard/Builderprofile/notification/NotificationDropdown";
import { Provider } from "react-redux";
import store from "./redux";
import RegisterLogin from "./login/Register/RegisterLogin";
import RecentlyAddedProperty from "./dashboard/dashboard-soldout-properties/dashboard-tabs/RecentlyAddedProperty";
import RecentlySoldOutProperty from "./dashboard/dashboard-soldout-properties/dashboard-tabs/RecentlySoldOutProperty";
import Subscription from "./dashboard/dashboard-soldout-properties/Subscription/Subscription";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/builder/login" element={<Login />} />
          <Route
            exact
            path="/builder/register"
            element={<RegisterLogin />}
          />{" "}
          <Route
            exact
            path="/builder/home-dashboard/promoted"
            element={<PromotedVisit />}
          />
          <Route
            exact
            path="/builder/home-dashboard/subscription"
            element={<Subscription />}
          />
          <Route
            exact
            path="/builder/home-dashboard/recentlyadded"
            element={
              <RecentlyAddedProperty data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            }
          />
          <Route
            exact
            path="/builder/home-dashboard/recentlysold"
            element={
              <RecentlySoldOutProperty data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
            }
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
            path="/builder/home-dashboard/Brokerage/settled"
            element={<BrockrageSettled />}
          />
          <Route
            exact
            path="/builder/home-dashboard/Brokerage"
            element={<Brockrage />}
          />
          <Route
            exact
            path="/builder/home-dashboard/notification"
            element={<NotificationDropdown />}
          />
          <Route
            exact
            path="/builder/home-dashboard/profile"
            element={<ProfilePage />}
          />
          <Route
            exact
            path="/builder/home-dashboard/propertyedit"
            element={<PropertyEdit />}
          />
          <Route
            exact
            path="/builder/home-dashboard/description"
            element={<SoldPage />}
          />
          <Route
            exact
            path="/builder/home-dashboard"
            element={<HomeDashBoard />}
          >
            <Route exact path="property" element={<Property />} />
            <Route exact spath="HOME" />
            <Route exact bpath="Brockrage" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
