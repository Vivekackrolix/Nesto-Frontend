import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../services/api';
import { getAPI, postAPI, putAPI } from '../services/requests';
import { apiEndpoints } from '../config/apiEndpoints';

import { setNewUserPhoneNumber } from '../features/auth/login/loginSlice';

export const useSendOtpMutation = () => {
  const dispatch = useDispatch();

  const {
    mutate: sendOtp,
    isLoading: isSendingOtp,
    isSuccess: isSendOtpSuccess,
    isError: isSendOtpIsError,
    error: isSendOtpError,
    data: sendOtpResponse,
  } = useMutation(
    phoneNumber => postAPI(apiEndpoints.sendOtp, { phoneNumber }),
    {
      onSuccess: data => {
        console.log(data);
        dispatch(setNewUserPhoneNumber(data.phoneNumber));
      },
    }
  );
  console.log(sendOtpResponse);
  return {
    sendOtp,
    isSendingOtp,
    isSendOtpSuccess,
    isSendOtpIsError,
    isSendOtpError,
    sendOtpResponse,
  };
};

// // verify
export const useVerifyOtpMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: verifyOtp,
    isLoading: isVerifyOtp,
    isSuccess: isVerifyOtpSuccess,
    isError: isVerifyOtpIsError,
    data: verifyOtpResponse,
    error: isVerifyOtpError,
  } = useMutation(
    ({ phoneNumber, otp }) =>
      postAPI(apiEndpoints.verifyOtp, { phoneNumber, otp }),
    {
      onSuccess: data => {
        console.log(data);

        const userStatus = data?.status;
        if (userStatus === 'newuser') {
          dispatch(setNewUserPhoneNumber(data?.phoneNumber));
          console.log(userStatus);
          console.log(data);
          // return;
          navigate('/broker/register');
          return;
        }

        if (userStatus === 'olduser') {
          console.log(data);
          localStorage.setItem('authToken', data?.token);
          localStorage.setItem('brokerID', data?._id);
          navigate('/broker/dashboard');
          return;
        }
      },
      onError: error => {
        console.log('something goes wrong');
      },
    }
  );

  return {
    verifyOtp,
    isVerifyOtp,
    isVerifyOtpSuccess,
    isVerifyOtpIsError,
    verifyOtpResponse,
    isVerifyOtpError,
  };
};

// register
export const useRegisterMutation = () => {
  const navigate = useNavigate();

  const {
    mutate: register,
    data: registerResponse,
    isLoading: isLoadingRegister,
    isSuccess: isRegisterSuccess,
    isError: isRegisterIsError,
    error: isRegisterError,
  } = useMutation(
    ({ name, phoneNumber }) =>
      postAPI(apiEndpoints.registerName, { name, phoneNumber }),
    {
      onSuccess: data => {
        if (data?.token) {
          setAuthToken(data?.token);
          localStorage.setItem('authToken', data?.token);
          localStorage.setItem('brokerID', data?._id);
          navigate('/broker/dashboard');
        }
      },
    }
  );

  return {
    register,
    registerResponse,
    isLoadingRegister,
    isRegisterSuccess,
    isRegisterIsError,
    isRegisterError,
  };
};
// get all properties
export const useGetAllPropertyQuery = () => {
  const {
    isLoading: getAllPropertyIsLoading,
    isError: getAllPropertyIsError,
    data: getAllPropertyResponse,
    error: getAllPropertyError,
    isSuccess: getAllpropertyIsSuccess,
  } = useQuery(['getAllproperty'], () => getAPI(apiEndpoints.getAllproperty), {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: error => console.log(error),
    onSuccess: data => console.log(data),
  });
  console.log(getAllPropertyResponse);
  return {
    getAllPropertyIsLoading,
    getAllPropertyIsError,
    getAllPropertyResponse,
    getAllPropertyError,
    getAllpropertyIsSuccess,
  };
};

// get all banner
export const useGetAllBanner = () => {
  const {
    isLoading: getAllBannerIsLoading,
    isError: getAllBannerIsError,
    data: getAllBannerResponse,
    error: getAllBannerError,
    isSuccess: getAllBannerIsSuccess,
  } = useQuery(['getAllBanner'], () => getAPI(apiEndpoints.getAllBanner), {
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onError: error => console.log(error),
    onSuccess: data => console.log(data),
  });
  console.log('banner');
  console.log(getAllBannerResponse);
  return {
    getAllBannerIsLoading,
    getAllBannerIsError,
    getAllBannerResponse,
    getAllBannerError,
    getAllBannerIsSuccess,
  };
};

// useBookVisit

export const useAddVisitMutation = () => {
  // const dispatch = useDispatch();

  const {
    mutate: addVisit,
    isLoading: isAddVisitLoading,
    isSuccess: isAddVisitSuccess,
    isError: isAddIsError,
    error: isAddVisitError,
    data: isAddVisitResponse,
  } = useMutation(payload => postAPI(apiEndpoints.addVisit, payload), {
    onSuccess: data => {
      console.log('test');
      console.log(data);
    },
  });
  console.log(isAddVisitResponse);
  return {
    addVisit,
    isAddVisitLoading,
    isAddVisitSuccess,
    isAddIsError,
    isAddVisitError,
    isAddVisitResponse,
  };
};

//profile page
export const useGetBrokerById = brokerID => {
  const {
    isLoading: getBrokerByIdIsLoading,
    isError: getBrokerByIdIsError,
    data: getBrokerByIdResponse,
    error: getBrokerByIdError,
    isSuccess: getBrokerByIdIsSuccess,
  } = useQuery(
    ['getBrokerById', brokerID],
    () => getAPI(`${apiEndpoints.getBrokerById}?id=${brokerID}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
      enabled: !!brokerID,
    }
  );
  console.log(getBrokerByIdResponse);

  return {
    getBrokerByIdIsLoading,
    getBrokerByIdIsError,
    getBrokerByIdResponse,
    getBrokerByIdError,
    getBrokerByIdIsSuccess,
  };
};

// get all terms and conditions
export const useGetAllTermsAndConditionsBroker = () => {
  const {
    isLoading: getAllTermsAndConditionsBrokerIsLoading,
    isError: getAllTermsAndConditionsBrokerIsError,
    data: getAllTermsAndConditionsBrokerResponse,
    error: getAllTermsAndConditionsBrokerError,
    isSuccess: getAllTermsAndConditionsBrokerIsSuccess,
  } = useQuery(
    ['getAllTermsAndConditionsBroker'],
    () => getAPI(apiEndpoints.getAllTermsAndConditionsBroker),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
    }
  );
  console.log(getAllTermsAndConditionsBrokerResponse);
  return {
    getAllTermsAndConditionsBrokerIsLoading,
    getAllTermsAndConditionsBrokerIsError,
    getAllTermsAndConditionsBrokerResponse,
    getAllTermsAndConditionsBrokerError,
    getAllTermsAndConditionsBrokerIsSuccess,
  };
};

// get all faq and support
export const useGetAllFaqAndSupport = type => {
  const {
    isLoading: getAllFaqAndSupportIsLoading,
    isError: getAllFaqAndSupportIsError,
    data: getAllFaqAndSupportResponse,
    error: getAllFaqAndSupportError,
    isSuccess: getAllFaqAndSupportIsSuccess,
  } = useQuery(
    ['getAllFaqAndSupport', type],
    () => getAPI(`${apiEndpoints.getAllFaqAndSupport}?for=broker&type=${type}`),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
    }
  );
  console.log(getAllFaqAndSupportResponse);
  return {
    getAllFaqAndSupportIsLoading,
    getAllFaqAndSupportIsError,
    getAllFaqAndSupportResponse,
    getAllFaqAndSupportError,
    getAllFaqAndSupportIsSuccess,
  };
};

// get all questions
export const useGetAllCommunitySupportQuestions = () => {
  const {
    isLoading: getAllCommunitySupportQuestionsIsLoading,
    isError: getAllCommunitySupportQuestionsIsError,
    data: getAllCommunitySupportQuestionsResponse,
    error: getAllCommunitySupportQuestionsError,
    isSuccess: getAllCommunitySupportQuestionsIsSuccess,
  } = useQuery(
    ['getAllCommunitySupportQuestions'],
    () => getAPI(apiEndpoints.getAllCommunitySupportQuestions),
    {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError: error => console.log(error),
      onSuccess: data => console.log(data),
    }
  );
  console.log(getAllCommunitySupportQuestionsResponse);
  return {
    getAllCommunitySupportQuestionsIsLoading,
    getAllCommunitySupportQuestionsIsError,
    getAllCommunitySupportQuestionsResponse,
    getAllCommunitySupportQuestionsError,
    getAllCommunitySupportQuestionsIsSuccess,
  };
};
