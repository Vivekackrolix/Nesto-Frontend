import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SEND_OTP_ENDPOINT = 'http://13.234.136.165:3000/api/v1/broker/sendOtp';
const VERIFY_OTP_ENDPOINT =
  'http://13.234.136.165:3000/api/v1/broker/verifyOtp';

export const useSendOtpMutation = () => {
  const [sendOtpResponse, setSendOtpResponse] = useState(null);

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
          navigate('/broker/register');
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
