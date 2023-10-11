import axios, { AxiosInstance } from 'axios';
import { API_URL_BASE } from 'env/api';

const httpClient: AxiosInstance = axios.create({
  baseURL: API_URL_BASE,
  withCredentials: true
});

export default httpClient;
