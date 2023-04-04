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
    const response = await axiosInstance.post(endpoint, body);
    console.log(response.data);
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

const getAPI = async (endpoint) => {
  // debugger
  try {
    const response = await axiosInstance.get(endpoint);
    console.log(response.data);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("function getAPI error.");
    }
  } catch (err) {
    return err;
  }
};

const putAPI = async (endpoint, body) => {
  debugger;
  try {
    const response = await axiosInstance.put(endpoint, body);
    console.log(response.data);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("function putAPI error.");
    }
  } catch (err) {
    return err;
  }
};

export { getAPI, postAPI, putAPI };
