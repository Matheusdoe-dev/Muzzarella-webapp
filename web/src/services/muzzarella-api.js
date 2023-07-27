import axios from "axios";

const muzzarellaApi = axios.create({
  baseURL: `https://muzzarella-api.herokuapp.com`,
});

export default muzzarellaApi;
