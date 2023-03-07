import Banner from "../HomePage/Banner/Banner";
import PartnersDetailsMain from "../PartnersDetailsMain";

export const RouteData = [
  {
    id: 1,
    page: 'Partners Details',
    path: '/partners/details',
    element: <PartnersDetailsMain />,
  },
   {
    id: 3,
    page: 'Home Page',
    path: '/home-page',
    element: <Banner/>
  },
];
