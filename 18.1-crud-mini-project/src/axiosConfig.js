import axios from "axios";

const instance = axios.create({
  baseURL: "https://65759ae4b2fbb8f6509d44b8.mockapi.io/api/random",
  headers: {
    "Content-Type": "Application/json",
  },
});

export default instance;
