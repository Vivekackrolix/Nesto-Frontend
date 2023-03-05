import Test from "../Test";
import Login from "../login/Login";
import HomeDashBoard from "../dashboard/HomeDashBoard";

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
    // routes: [
    //   {
    //     id: 3,
    //     path: "loan-management",
    //     element: <LoanManagement />,
    //   },
    //   {
    //     id: 4,
    //     path: "payment",
    //     element: <Payment />,
    //   },
    //   {
    //     id: 5,
    //     path: "profile",
    //     element: <ProfilePage />,
    //   },
    //   {
    //     id: 6,
    //     path: "property-details",
    //     element: <PropertyDetails />,
    //   },
    //   {
    //     id: 7,
    //     path: "property-details-info",
    //     element: <PropertyDetails />,
    //   },
    // ],
  },
];
