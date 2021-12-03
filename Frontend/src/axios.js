import axios from "axios";

let instance;
if (!process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "development") {
  // dev code
  instance = axios.create({
    baseURL: "http://localhost:1337",
  });
  instance.defaults.withCredentials = true;
} else {
  // production code
  instance = axios.create({
    baseURL: "https://swadbackendapp.herokuapp.com",
  });
  instance.defaults.withCredentials = true;
}

export const mediastack = axios.create({
  baseURL: `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API_KEY}&`,
});

export default instance;
