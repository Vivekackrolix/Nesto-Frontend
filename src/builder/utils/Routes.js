import Login from "../login/Login";
import HomeDashBoard from "../dashboard/HomeDashBoard";
import Property from "../dashboard/property/Property";
<<<<<<< HEAD

import PromotedVisit from "../dashboard/dashboard-property-analytics/Visit-Details/PromotedVisit.js";
import SoldOut from "../dashboard/dashboard-soldout-properties/SoldOut";
import PropertyEdit from "../dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";
import AmenitiesPop from "../dashboard/dashboard-info-cards/Property Edit/Amenitiespop";
=======
import PromotedVisit from "../dashboard/dashboard-property-analytics/Visit-Details/PromotedVisit.js";
import SoldOut from "../dashboard/dashboard-soldout-properties/SoldOut";
import PropertyEdit from "../dashboard/dashboard-info-cards/Property Edit/PropertyEdit.js";
>>>>>>> 27ac21555805623af7afb3fbd7a06f81edb599fd
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
<<<<<<< HEAD
      // {
      //   id: 6,
      //   path: "Amenities",
      //   element: <AmenitiesPop />,
      // },
=======
>>>>>>> 27ac21555805623af7afb3fbd7a06f81edb599fd
    ],
  },
];