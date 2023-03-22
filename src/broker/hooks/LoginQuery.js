import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewUserPhoneNumber } from '../features/auth/login/loginSlice';

const SEND_OTP_ENDPOINT = 'http://13.233.149.97:3000/api/v1/broker/sendOtp';
const VERIFY_OTP_ENDPOINT = 'http://13.233.149.97:3000/api/v1/broker/verifyOtp';

const REGISTER_NAME_ENDPOINT = `http://13.233.149.97:3000/api/v1/broker/registerName`;

export const useSendOtpMutation = () => {
  const [sendOtpResponse, setSendOtpResponse] = useState(null);
  const dispatch = useDispatch();
  const {
    mutate,
    isLoading: isSendingOtp,
    isSuccess: isSendOtpSuccess,
    isError: isSendOtpError,
    error,
  } = useMutation(
    phoneNumber =>
      axios.post(SEND_OTP_ENDPOINT, { phoneNumber }).then(res => res.data),
    {
      onSuccess: data => {
        setSendOtpResponse(data);
        dispatch(setNewUserPhoneNumber(data.phoneNumber));
      },
      onError: error => {
        console.log(error.message);
        console.log('not working');
      },
    }
  );

  const sendOtp = phoneNumber => {
    mutate(phoneNumber);
  };

  console.log(sendOtpResponse);

  return {
    sendOtp,
    sendOtpResponse,
    isLoading: isSendingOtp,
    isSuccess: isSendOtpSuccess,
    isSendOtpError,
    error,
  };
};

export const useVerifyOtpMutation = () => {
  const [verifyOtpResponse, setVerifyOtpResponse] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate,
    isLoading: isVerifyOtp,
    isSuccess: isVerifyOtpSuccess,
    isError: isVerifyOtpError,
    error,
  } = useMutation(
    ({ phoneNumber, otp }) =>
      axios
        .post(VERIFY_OTP_ENDPOINT, { phoneNumber, otp })
        .then(res => res.data),
    {
      onSuccess: data => {
        setVerifyOtpResponse(data);
        const userStatus = data.data.status;
        if (userStatus === 'newuser') {
          dispatch(setNewUserPhoneNumber(data.data.phone));

          // navigate('/broker/register');
          return;
        }

        if (userStatus === 'olduser') {
          navigate('/broker/dashboard');
          return;
        }
      },
    }
  );

  const verifyOtp = ({ phoneNumber, otp }) => {
    mutate({ phoneNumber, otp });
  };

  console.log(verifyOtpResponse);

  return {
    verifyOtp,
    verifyOtpResponse,
    isLoading: isVerifyOtp,
    isSuccess: isVerifyOtpSuccess,
    isVerifyOtpError,
    error,
  };
};

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const [registerResponse, setRegisterResponse] = useState(null);

  const {
    mutate,
    isLoading: isLoadingRegister,
    isSuccess: isRegisterSuccess,
    isError: isRegisterError,
    error,
  } = useMutation(
    ({ name, phoneNumber }) =>
      axios
        .post(REGISTER_NAME_ENDPOINT, { name, phoneNumber })
        .then(res => res.data),
    {
      onSuccess: data => {
        setRegisterResponse(data);

        console.log(data);
        if (data.data.token) {
          console.log(data.token);
          navigate('/broker/dashboard');
        }
      },
    }
  );

  const register = ({ name, phoneNumber }) => {
    mutate({ name, phoneNumber });
  };

  console.log(registerResponse);

  return {
    register,
    registerResponse,
    isLoading: isLoadingRegister,
    isSuccess: isRegisterSuccess,
    isRegisterError,
    error,
  };
};
