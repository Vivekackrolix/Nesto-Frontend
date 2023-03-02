import Login from '../auth/login/Login';
import HomeDashBoard from '../dashboard/HomeDashBoard';
import LoanManagement from '../dashboard/loan-management/LoanManagement';
import Payment from '../dashboard/payment/Payment';
import ProfilePage from '../dashboard/profile/Profile';
import PropertyDetails from '../dashboard/property-details/PropertyDetails';

export const RouteData = [
  {
    id: 1,
    page: 'login',
    path: '/',
    element: <Login />,
  },
  {
    id: 2,
    page: 'dashboard',
    path: '/home-dashboard',
    element: <HomeDashBoard />,
    routes: [
      {
        id: 3,
        path: 'loan-management',
        element: <LoanManagement />,
      },
      {
        id: 4,
        path: 'payment',
        element: <Payment />,
      },
      {
        id: 5,
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        id: 6,
        path: 'property-details',
        element: <PropertyDetails />,
      },
      {
        id: 7,
        path: 'property-details-info',
        element: <PropertyDetails />,
      },
    ],
  },
  // {
  //   id: 8,
  //   path: '/property-details-info-broker',
  //   element: <PropertyDetails />,
  // },
];
