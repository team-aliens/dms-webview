import axios, { AxiosError } from 'axios';
import { getCookie } from '../utils/cookies';
import { setCookie } from '../utils/cookies';
import { reIssueToken } from './auth';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('access_token');
    if (accessToken) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error;
      const refreshToken = getCookie('refresh_token');
      if (error.response.data.message === 'Expired Token') {
        if (refreshToken) {
          try {
            const res = await reIssueToken(refreshToken);
            const accessExpired = new Date(res.access_token_expired_at);
            const refreshExpired = new Date(res.refresh_token_expired_at);

            setCookie('access_token', res.access_token, {
              expires: accessExpired,
            });

            setCookie('refresh_token', res.refresh_token, {
              expires: refreshExpired,
            });

            if (config?.headers)
              config.headers['Authorization'] = `Bearer ${res.access_token}`;

            return axios(config!);
          } catch (error) {
            return Promise.reject(error);
          }
        } else {
          window.location.href = '/login';
        }
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
