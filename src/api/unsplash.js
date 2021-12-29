import axios from "axios";

// export a customized instance of axios
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID LjrShGidXfgWJzOhgSrHnsJ-A3vG5xBr0jR2hueRbM4",
  },
});
