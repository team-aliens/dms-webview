import { setCookie } from './cookies';

export function registerSetAuthToken() {
  window.setAuthToken = (accessToken: string, refreshToken: string) => {
    console.log('setAuthToken 실행됨!', accessToken, refreshToken);

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);

    if (accessToken) {
      setCookie('access_token', accessToken, {
        path: '/',
        expires,
      });
    }

    if (refreshToken) {
      setCookie('refresh_token', refreshToken, {
        path: '/',
        expires,
      });
    }

    window.location.reload();
    return 'SUCCESS';
  };

  console.log('setAuthToken 등록됨!');
}

export {};
