import axios from "axios";

// here is the base URL. we use it to fecth  the api's
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;