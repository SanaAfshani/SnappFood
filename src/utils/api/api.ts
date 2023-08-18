import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from "axios";

// Create a new Axios instance
const request: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: Number(process.env.TIMEOUT), // Adjust as needed
    responseType: 'json',
});

// Request interceptor
request.interceptors.request.use(
    (config:InternalAxiosRequestConfig<any>) => {
        // Modify the request config (add headers, authentication, etc.)
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Response interceptor
request.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful responses
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default request;
