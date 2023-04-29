export const apiEndpoints = {
  verifyOtp: "/v1/builder/verifyOtp",
  sendOtp: "/v1/builder/sendOtp",
  resendOtp: "/v1/builder/resendOtp",
  addShareYourIntern: "/v1/builder/addShareYourIntern",
  getPropertyAnalytics:
    "/v1/builder/getPropertyAnalytics?id=641069056532f2569479fc9d",
  getPropertiesAnalyticsForIndividualProperty:
    "/v1/property/getPropertiesAnalyticsForIndividualProperty?builderId=641069056532f2569479fc9d&propertyId=640ee6a8cbe2f98daaa8813f",
  getPropertyById: "/v1/property/getPropertyById?id=64369da4d61407310a4e3b2a",
  getAllSubscriptionOrder: "/v1/subscriptionOrder/getAllSubscriptionOrder",
  getAllSubscription: "/v1/subscription/getAllSubscription",
  getPendingInvoice:
    "/v1/builder/getPendingInvoice?id=641069056532f2569479fc9d", //CRASH
  getVisitAnalytics:
    "/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",
  getAllVisit: "/v1/visit/getAllVisit",
  getAllproperty: "/v1/property/getAllproperty",
  getAllproperty1: "/v1/property/getAllproperty?isPropertySold=true",
  updateRequestProperty: "/v1/requestProperty/updateRequestProperty",
  getAllPayment: "/v1/payment/getAllPayment",
  getAllBoughtProperty: "/v1/boughtProperty/getAllBoughtProperty",
  getAllFaqAndSupport:
    "/v1/faqAndSupport/getAllFaqAndSupport?search=&for=builder&type=support",
  getAllFaqAndSupport1:
    "/v1/faqAndSupport/getAllFaqAndSupport?search=&for=builder&type=faq",
  getAllRaiseQuery: "/v1/raiseQuery/getAllRaiseQuery",
  getAllInvoiceForBuilder:
    "/v1/invoice/getAllInvoiceForBuilder?builderId=641069056532f2569479fc9d&status=pending",
  getAllInvoiceForBuilder1:
    "/v1/invoice/getAllInvoiceForBuilder?builderId=641069056532f2569479fc9d&status=settled",
  getClaimById: "/v1/claim/getClaimById?id=",
  addPayment: "/v1/payment/addPayment",
  getAllBuilder: "/v1/builder/getAllBuilder",
  getAllBanner: "/v1/banner/getAllBanner",
  getAllClaim:
    "/v1/claim/getAllClaim?builderId=641069056532f2569479fc9d&claimType=property",
  addRaiseDispute: "/v1/raiseDispute/addRaiseDispute",
};
