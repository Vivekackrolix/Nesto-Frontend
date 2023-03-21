import axios from 'axios';

const API_BASE_URL = 'http://13.234.136.165:3000/api/v1/broker';
// http://13.234.136.165:3000/api/v1/dsa/verifyOtp

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendOtp = async phoneNumber => {
  const response = await api.post('/sendOtp', { phoneNumber });
  return response.data;
};
export const verifyOtp = async (phoneNumber, otp) => {
  const response = await api.post('/verifyOtp', { phoneNumber, otp });
  return response.data;
};
