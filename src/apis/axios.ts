import axios, {
  AxiosError,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import { getCookie, setCookie } from '../utils/cookies';
import { reIssueToken } from './auth';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const subscribeTokenRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('access_token');
    if (accessToken) {
      config.headers = new AxiosHeaders({
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      });
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 || error.response?.status === 403) {
      const refreshToken = getCookie('refresh_token');

      if (!refreshToken) {
        console.warn('리프레시 토큰 없음. 로그인 필요함.');
        // window.location.href = '/login';
        return Promise.reject(error);
      }

      if (originalRequest._retry) {
        console.warn('이미 리트라이한 요청인데 실패함.');
        window.location.href = '/login';
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((newToken) => {
            originalRequest.headers = new AxiosHeaders({
              ...originalRequest.headers,
              Authorization: `Bearer ${newToken}`,
            });
            resolve(instance(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        console.log('토큰 리프레시 요청');
        const res = await reIssueToken(refreshToken);
        const newAccessToken = res.access_token;
        const newRefreshToken = res.refresh_token;

        if (!newAccessToken || !newRefreshToken) {
          throw new Error('리프레시 응답이 유효하지 않음');
        }

        setCookie('access_token', newAccessToken, {
          expires: new Date(res.access_token_expired_at),
        });

        setCookie('refresh_token', newRefreshToken, {
          expires: new Date(res.refresh_token_expired_at),
        });

        onRefreshed(newAccessToken);
        originalRequest.headers = new AxiosHeaders({
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        });

        return instance(originalRequest);
      } catch (err) {
        console.error('토큰 재발급 실패:', err);
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
