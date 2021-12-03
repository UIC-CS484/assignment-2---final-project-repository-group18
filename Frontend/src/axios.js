import axios from "axios";

let instance;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  console.log(process.env.NODE_ENV)
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
