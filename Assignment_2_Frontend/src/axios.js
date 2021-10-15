import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.13:1337",
});

export default instance;
