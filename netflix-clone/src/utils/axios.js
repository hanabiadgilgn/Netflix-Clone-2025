import axios from "axios";

// the base URL, which we use to fetch the APIs.
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;