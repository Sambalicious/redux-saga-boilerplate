import axios from "axios";

export const getUserRequest = (id) => {
  console.log(id);
  return axios.request({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });
};
