import axios from "axios";

const insurance = axios.create({
    baseURL: "https://api.themoviedb.org/3", 
});
export default insurance;