import axios from "axios";
// import { useState } from "react";

const axiosInstance = axios.create({
  baseURL: `http://nestobackend-env.eba-fk3zufmz.ap-south-1.elasticbeanstalk.com/api`,
  // baseURL: `http://localhost:3001/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NTVhNTVlNDQ2NjJkMTJkNTNjY2YiLCJpYXQiOjE2ODI1Nzk2MDYsImV4cCI6MTY5MDM1NTYwNn0.jFsDonK3xexeM6heyw5lzbjS5dR3aBcQKsJgRQWEOgM",
    // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
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
// export { axiosInstance, LoadingSpinner };
