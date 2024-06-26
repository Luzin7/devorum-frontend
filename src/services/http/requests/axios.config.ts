import axios, { AxiosInstance } from 'axios';
import { API_URL_BASE } from 'env/api';
import { getAccessToken, getRefreshToken } from 'functions/getToken()';

const httpClient: AxiosInstance = axios.create({
  baseURL: API_URL_BASE,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      config.headers.refresh_token = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
