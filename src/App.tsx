import React, { useEffect } from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { setCookie } from './utils/cookies';

// ✅ window에 함수 등록
window.setAuthToken = (accessToken: string, refreshToken: string) => {
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

  // ✅ 페이지 새로고침
  window.location.reload();
  return 'SUCCESS';
};

function App() {
  useEffect(() => {
    // ✅ 네이티브(Android 웹뷰)에게 함수 등록 완료됐다고 알려주기
    if (window.ReactNativeWebView?.postMessage) {
      window.ReactNativeWebView.postMessage('setAuthTokenReady');
    }
  }, []);

  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
