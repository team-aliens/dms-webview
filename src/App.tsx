import React from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { useEffect } from 'react';
import { setCookie } from './utils/cookies';

function App() {
  useEffect(() => {
    window.receiveToken = (token) => {
      setCookie('access_token', token);
    };
  }, []);
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
