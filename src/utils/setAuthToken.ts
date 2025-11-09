import { setCookie } from './cookies';

function extractTokenValue(tokenString: string): string {
  const match = tokenString.match(/value=([^,]+)/);
  return match ? match[1] : tokenString;
}

export function registerSetAuthToken() {
  window.setAuthToken = (accessToken: string, refreshToken: string) => {
    console.log('setAuthToken 실행됨!', accessToken, refreshToken);

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);

    const actualAccessToken = extractTokenValue(accessToken);
    const actualRefreshToken = extractTokenValue(refreshToken);

    if (actualAccessToken) {
      setCookie('access_token', actualAccessToken, {
        path: '/',
        expires,
      });
    }

    if (actualRefreshToken) {
      setCookie('refresh_token', actualRefreshToken, {
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
