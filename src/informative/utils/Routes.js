<<<<<<< HEAD
import BrokerHome from "../BrokerPage/BrokerHome/BrokerHome";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "../HomePage/Banner/Banner";
import PartnersDetailsMain from "../PartnersDetailsMain";
import PartnerBanner from "../PartnersPage/Partnerbanner/partnerbanner";
import BlogList from '../BlogList/BlogListMain'
=======
import BrokerHome from '../BrokerPage/BrokerHome/BrokerHome';
import ContactUs from '../ContactUs/ContactUs';
import Banner from '../HomePage/Banner/Banner';
import PartnersDetailsMain from '../PartnersDetailsMain';
import PartnerBanner from '../PartnersPage/Partnerbanner/partnerbanner';
>>>>>>> 4a7230af2c49d95c683ee9ff643863100dc7e0a7

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
    element: <Banner />,
  },
  {
    id: 4,
    page: 'Blog List',
    path: '/blog-list',
    element: <BlogList />
  },
  {
    id: 5,
    page: 'Partner Page',
    path: '/partner-page',
    element: <PartnerBanner />,
  },
  {
    id: 7,
    page: 'Broker Page',
    path: '/broker-page',
    element: <BrokerHome />,
  },
];
