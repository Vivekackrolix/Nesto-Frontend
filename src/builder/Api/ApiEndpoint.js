export const apiEndpoints = {
  verifyOtp: "/v1/builder/verifyOtp",
  sendOtp: "/v1/builder/sendOtp",
  registerName: "/v1/builder/registerName",
  getAllproperty: "/v1/property/getAllproperty",
  getAllBanner: "/v1/banner/getAllBanner",
  addVisit: "/v1/visit/addVisit",
  getBrokerById: `/v1/builder/getBrokerById`,
  getAllTermsAndConditionsBroker: `/v1/termsAndConditionsBroker/getAllTermsAndConditionsBroker`,
  getAllFaqAndSupport: "/v1/faqAndSupport/getAllFaqAndSupport",
  getAllCommunitySupportQuestions:
    "/v1/communitySupportQuestions/getAllCommunitySupportQuestions?pageSize=1&pageNo=1",
  getAllCommunitySupportAnswers:
    "http://13.233.149.97:3000/api/v1/communitySupportAnswers/getAllCommunitySupportAnswers?communitySupportQuestionsId=6411b84888986c905fa7e1e7&pageSize=2&pageNo=1",
  getAllPropertyCategory: "/v1/propertyCategory/getAllPropertyCategory",
  getAllPromotionBanner: "/v1/promotionBanner/getAllPromotionBanner",
  getPropertyById: "/v1/property/getPropertyById",
  getAllClaim: "/v1/claim/getAllClaim",
};
