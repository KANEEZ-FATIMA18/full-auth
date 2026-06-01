import axios from 'axios';

// Choose BASE_BACKEND_URL if provided, otherwise fall back to HOSTED_URL
const url = import.meta.env.VITE_BASE_BACKEND_URL || import.meta.env.VITE_HOSTED_URL || '';

console.log('API base URL:', url);

const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default axiosInstance;