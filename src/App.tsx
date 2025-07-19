import { useEffect } from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';

function App() {
  useEffect(() => {
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
