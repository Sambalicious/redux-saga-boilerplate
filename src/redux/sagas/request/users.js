import axios from "axios";

export const getUsersRequest = () => {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
};
