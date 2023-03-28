import axios from 'axios';
import { useSelector } from 'react-redux';

const axiosInstance = axios.create({
  // baseURL: `http://13.233.149.97:3000/api`,
  baseURL: `http://localhost:3000/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthToken = token => {
  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.Authorization;
  }
};

const useAuth = () => {
  const token = useSelector(state => state.auth.token) || [];

  if (token) {
    setAuthToken(token);
  }

  return { token };
};

export { axiosInstance, useAuth, setAuthToken };
