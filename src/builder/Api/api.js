import axios from "axios";
// import { useState } from "react";

const axiosInstance = axios.create({
  // baseURL: `https://apis.nestohub.in/api`,
  // baseURL: `http://localhost:3001/api`,
  baseURL: `http://nestobackend-env.eba-fk3zufmz.ap-south-1.elasticbeanstalk.com/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjMzA5MDJjZGYzNjczYTI5YWU3MWQiLCJpYXQiOjE2NzkzOTM1NDksImV4cCI6MTY4NzE2OTU0OX0.doSWScAsJZyCJk62uM7rBbsS8ipkpLZ-FjuYrfYJmu8",
  },
});

export { axiosInstance };
