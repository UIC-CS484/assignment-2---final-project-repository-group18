import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337",
});

instance.defaults.withCredentials = true;
export default instance;
