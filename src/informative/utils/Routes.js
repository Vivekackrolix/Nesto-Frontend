import BrokerHome from "../BrokerPage/BrokerHome/BrokerHome";
import Banner from "../HomePage/Banner/Banner";
import PartnersDetailsMain from "../PartnersDetailsMain";
import PartnerBanner from "../PartnersPage/Partnerbanner/partnerbanner";

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
   {
    id: 5,
    page: 'Partner Page',
    path: '/partner-page',
    element: <PartnerBanner/>
  },
  {
    id: 7,
    page: 'Broker Page',
    path: '/broker-page',
    element: <BrokerHome/>
  },
];
