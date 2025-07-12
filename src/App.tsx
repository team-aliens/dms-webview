import React from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { useEffect } from 'react';
import { setCookie } from './utils/cookies';

function App() {
  useEffect(() => {
    window.setAuthToken = (accessToken, refreshToken) => {
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
    };
  }, []);
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
