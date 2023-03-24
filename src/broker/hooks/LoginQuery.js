// import { useMutation, useQuery } from '@tanstack/react-query';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setAuthToken } from '../services/api';
// import { getAPI, postAPI, putAPI } from '../services/requests';
// import { apiEndpoints } from '../config/apiEndpoints';
// import { setNewUserPhoneNumber } from '../features/auth/login/loginSlice';
// import { json } from 'body-parser';

// export const useSendOtpMutation = () => {
//   const dispatch = useDispatch();

//   const {
//     mutate: sendOtp,
//     isLoading: isSendingOtp,
//     isSuccess: isSendOtpSuccess,
//     isError: isSendOtpIsError,
//     error: isSendOtpError,
//     data: sendOtpResponse,
//   } = useMutation(
//     phoneNumber => postAPI(apiEndpoints.sendOtp, { phoneNumber }),
//     {
//       onSuccess: data => {
//         console.log(data);
//         dispatch(setNewUserPhoneNumber(data.phoneNumber));
//       },
//     }
//   );
//   console.log(sendOtpResponse);
//   return {
//     sendOtp,
//     isSendingOtp,
//     isSendOtpSuccess,
//     isSendOtpIsError,
//     isSendOtpError,
//     sendOtpResponse,
//   };
// };

// // verify
// export const useVerifyOtpMutation = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     mutate: verifyOtp,
//     isLoading: isVerifyOtp,
//     isSuccess: isVerifyOtpSuccess,
//     isError: isVerifyOtpIsError,
//     data: verifyOtpResponse,
//     error: isVerifyOtpError,
//   } = useMutation(
//     ({ phoneNumber, otp }) =>
//       postAPI(apiEndpoints.verifyOtp, { phoneNumber, otp }),
//     {
//       onSuccess: data => {
//         console.log(data);

//         const userStatus = data?.status;
//         if (userStatus === 'newuser') {
//           dispatch(setNewUserPhoneNumber(data?.phoneNumber));
//           console.log(userStatus);
//           console.log(data);
//           // return;
//           navigate('/broker/register');
//           return;
//         }

//         if (userStatus === 'olduser') {
//           navigate('/broker/dashboard');
//           return;
//         }
//       },
//       onError: error => {
//         console.log('something goes wrong');
//       },
//     }
//   );

//   return {
//     verifyOtp,
//     isVerifyOtp,
//     isVerifyOtpSuccess,
//     isVerifyOtpIsError,
//     verifyOtpResponse,
//     isVerifyOtpError,
//   };
// };

// // register
// export const useRegisterMutation = () => {
//   const navigate = useNavigate();

//   const {
//     mutate: register,
//     data: registerResponse,
//     isLoading: isLoadingRegister,
//     isSuccess: isRegisterSuccess,
//     isError: isRegisterIsError,
//     error: isRegisterError,
//   } = useMutation(
//     ({ name, phoneNumber }) =>
//       postAPI(apiEndpoints.registerName, { name, phoneNumber }),
//     {
//       onSuccess: data => {
//         if (data?.token) {
//           console.log(data);
//           console.log(data?.phoneNumber);
//           console.log(data?.token);
//           setAuthToken(data?.token);
//           localStorage.setItem('authToken', data?.token);
//           // localStorage.setItem('user', JSON.stringify(data));
//           // return
//           // localStorage.setItem('user', data);
//           navigate('/broker/dashboard');
//         }
//       },
//     }
//   );

//   return {
//     register,
//     registerResponse,
//     isLoadingRegister,
//     isRegisterSuccess,
//     isRegisterIsError,
//     isRegisterError,
//   };
// };
// // get all properties
// export const useGetAllPropertyQuery = () => {
//   const {
//     isLoading: getAllPropertyIsLoading,
//     isError: getAllPropertyIsError,
//     data: getAllPropertyResponse,
//     error: getAllPropertyError,
//     isSuccess: getAllpropertyIsSuccess,
//   } = useQuery(['getAllproperty'], () => getAPI(apiEndpoints.getAllproperty), {
//     retry: 1,
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     onError: error => console.log(error),
//     onSuccess: data => console.log(data),
//   });
//   console.log(getAllPropertyResponse);
//   return {
//     getAllPropertyIsLoading,
//     getAllPropertyIsError,
//     getAllPropertyResponse,
//     getAllPropertyError,
//     getAllpropertyIsSuccess,
//   };
// };
