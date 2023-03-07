import ContactUs from "../ContactUs/ContactUs";
import PartnersDetailsMain from "../PartnersDetailsMain";

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
];
