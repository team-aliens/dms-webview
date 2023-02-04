import React from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
