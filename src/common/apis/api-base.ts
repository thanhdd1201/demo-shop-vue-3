import axios from "axios";
const service = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 15000,
});
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    (response) => {
        return response;
    },
    (e) => {
        console.log(e);
    }
);

export default service;
