import axios from "axios";
// import { useState } from "react";

const axiosInstance = axios.create({
  // baseURL: `https://apis.nestohub.in/api`,
  baseURL: `http://localhost:3001/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjMzA5MDJjZGYzNjczYTI5YWU3MWQiLCJpYXQiOjE2NzkzOTM1NDksImV4cCI6MTY4NzE2OTU0OX0.doSWScAsJZyCJk62uM7rBbsS8ipkpLZ-FjuYrfYJmu8",
  },
});
// const LoadingSpinner = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   axiosInstance.interceptors.request.use(
//     (config) => {
//       setIsLoading(true);
//       return config;
//     },
//     (error) => {
//       setIsLoading(false);
//       return Promise.reject(error);
//     }
//   );

//   axiosInstance.interceptors.response.use(
//     (response) => {
//       setIsLoading(false);
//       return response;
//     },
//     (error) => {
//       setIsLoading(false);
//       return Promise.reject(error);
//     }
//   );

//   return (
//     <div>
//       {isLoading && (
//         <div className="loading-spinner">
//           <p>Loading...</p>
//         </div>
//       )}
//     </div>
//   );
// };

export { axiosInstance };
// export { axiosInstance, LoadingSpinner };
