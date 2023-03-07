import Login from "../login/Login";
import HomeDashBoard from "../dashboard/HomeDashBoard";
import Property from "../dashboard/property/Property";
import PromotedVisit from "../dashboard/dashboard-property-analytics/Visit-Details/PromotedVisit.js";
import SoldOut from "../dashboard/dashboard-soldout-properties/SoldOut";
import PropertyEdit from "../dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";
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
    ],
  },
];