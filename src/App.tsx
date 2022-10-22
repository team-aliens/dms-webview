import React from 'react';
import Router from './Router';
import { StyledProvider } from 'aliens-design-system-front';

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
