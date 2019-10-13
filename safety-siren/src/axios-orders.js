import axios from "axios";

const instance = axios.create({
  baseURL: "https://safetysiren.firebaseio.com/"
});

export default instance;
