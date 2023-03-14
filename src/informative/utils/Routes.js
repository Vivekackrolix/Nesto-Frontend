import BrokerHome from "../BrokerPage/BrokerHome/BrokerHome";
import BuilderHome from "../BuilderPage/BuilderPageHome/BuilderHome";
import ContactUs from "../ContactUs/ContactUs";
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
    id: 2,
    page: 'Contact Us',
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    id: 3,
    page: 'Home Page',
    path: '/home-page',
    element: <Banner />
  },
  {
    id: 5,
    page: 'Partner Page',
    path: '/partner-page',
    element: <PartnerBanner />
  },
  {
    id: 7,
    page: 'Broker Page',
    path: '/broker-page',
    element: <BrokerHome/>
  },
  {
    id: 17,
    page: 'Builder Page',
    path: '/builder-page',
    element: <BuilderHome/>
  },
];
