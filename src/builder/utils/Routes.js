import Login from "../login/Login";
import HomeDashBoard from "../dashboard/HomeDashBoard";
import Property from "../dashboard/property/Property";

import PromotedVisit from "../dashboard/dashboard-property-analytics/Visit-Details/PromotedVisit.js";
import SoldOut from "../dashboard/dashboard-soldout-properties/SoldOut";
import PropertyEdit from "../dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";

import PropertyClaim from "../dashboard/dashboard-property-analytics/Visit Details/Property claim/PropertyClaim";
import ProfilePage from "../dashboard/Builderprofile/Profile";
import Brockrage from "../dashboard/Brokerage/Brokerage";
import SettledInvoice from "../dashboard/Brokerage/SettledInvoice";
import BrockrageSettled from "../dashboard/Brokerage/BrokerageSettled";
import NotificationDropdown from "../dashboard/Builderprofile/notification/NotificationDropdown";
export const RouteData = [
  {
    id: 1,
    page: "Builder test",
    path: "/builder/login",
    element: <Login />,
  },
  {
    id: 2,
    page: "dashboard",
    path: "/builder/home-dashboard",
    element: <HomeDashBoard />,
    routes: [
      {
        id: 3,
        path: "property",
        element: <Property />,
      },
      {
        id: 4,
        path: "Sold-page",
        element: <SoldOut />,
      },
      {
        id: 5,
        path: "Promoted-Visits",
        element: <PromotedVisit />,
      },
      {
        id: 6,
        path: "Property-Edit",
        element: <PropertyEdit />,
      },
      {
        id: 7,
        path: "PropertyClaim",
        element: <PropertyClaim />,
      },
      {
        id: 8,
        path: "Brokerage",
        element: <Brockrage />,
      },
      {
        id: 9,
        path: "Settled",
        element: <BrockrageSettled />,
      },
      {
        id: 10,
        path: "profile",
        element: <ProfilePage />,
      },
      {
        id: 11,
        path: "notification",
        element: <NotificationDropdown />,
      },
    ],
  },
];
