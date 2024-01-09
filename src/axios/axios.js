import axios from "axios";


const axiosInstance = axios.create({
    baseURL : "https://burger-builder-866bc-default-rtdb.firebaseio.com"
})

export default axiosInstance