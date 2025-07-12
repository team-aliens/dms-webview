import React from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { setCookie } from './utils/cookies';

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

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
