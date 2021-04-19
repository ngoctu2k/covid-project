import axiosClient from "./axiosClient";

// api/productApi.js
const covidApi = {
  getAll: () => {
    const url = "";
    return axiosClient.get(url);
  },
  search: (country) => {
    const url = `/${country}`;
    return axiosClient.get(url);
  },
};
export default covidApi;
