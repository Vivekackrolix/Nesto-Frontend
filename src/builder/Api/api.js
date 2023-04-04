import axios from "axios";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  baseURL: `https://apis.nestohub.in/api`,
  // baseURL: `http://65.1.3.134:3000/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjMzA5MDJjZGYzNjczYTI5YWU3MWQiLCJpYXQiOjE2NzkzOTM1NDksImV4cCI6MTY4NzE2OTU0OX0.doSWScAsJZyCJk62uM7rBbsS8ipkpLZ-FjuYrfYJmu8",
  },
});

// const setAuthToken = (token) => {
//   if (token) {
//     axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
//   } else {
//     delete axiosInstance.defaults.headers.Authorization;
//   }
// };

// const useAuth = () => {
//   const token = useSelector((state) => state.auth.token) || [];

//   if (token) {
//     setAuthToken(token);
//   }

//   return { token };
// };

// export { axiosInstance, useAuth, setAuthToken };
export { axiosInstance };
