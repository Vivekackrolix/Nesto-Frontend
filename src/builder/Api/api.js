import axios from "axios";
// import { useState } from "react";

const axiosInstance = axios.create({
  // baseURL: `https://apis.nestohub.in/api`,
  // baseURL: `http://localhost:3001/api`,
  baseURL: `http://nestobackend-env.eba-fk3zufmz.ap-south-1.elasticbeanstalk.com/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NTVhNTVlNDQ2NjJkMTJkNTNjY2YiLCJpYXQiOjE2ODI1Nzk2MDYsImV4cCI6MTY5MDM1NTYwNn0.jFsDonK3xexeM6heyw5lzbjS5dR3aBcQKsJgRQWEOgM",
  },
});
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const setAuthToken = (token) => {
//   if (token) {
//     axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
//   } else {
//     delete axiosInstance.defaults.headers.Authorization;
//   }
// };

export { axiosInstance };
