import { axiosInstance } from "./api";

// const postAPI = (endPoint, body) =>
//   axiosInstance
//     ?.post(endPoint, body)
//     .then((response) => response.data)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });

const postAPI = async (endpoint, body) => {
  debugger;
  try {
    const response = await axiosInstance.get(endpoint, body);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("function postAPI error.");
    }
  } catch (err) {
    return err;
  }
};

// const getAPI = (endPoint, body) =>
//   axiosInstance
//     ?.get(endPoint, body)
//     .then((response) => response.data)
//     .then((response) => response.data)
//     .catch((error) => {
//       throw error;
//     });

const getAPI = async (endpoint, body) => {};

const putAPI = (endPoint, body) =>
  axiosInstance
    ?.put(endPoint, body)
    .then((response) => response.data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export { getAPI, postAPI, putAPI };
