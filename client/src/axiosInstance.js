import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Если хочешь использовать переменные окружения, то пиши import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
});

export default axiosInstance;