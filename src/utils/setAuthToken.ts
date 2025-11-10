import { setCookie } from './cookies';

export function registerSetAuthToken() {
  const realSetAuthToken = (accessToken: string, refreshToken: string) => {
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

  window.setAuthToken = realSetAuthToken;
  console.log('setAuthToken 등록됨!');

  if (window.setAuthTokenQueue && window.setAuthTokenQueue.length > 0) {
    window.setAuthTokenQueue.forEach((args) => {
      realSetAuthToken(args[0], args[1]);
    });
    window.setAuthTokenQueue = [];
  }
}

export {};
