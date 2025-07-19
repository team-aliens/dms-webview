import { useEffect } from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { registerSetAuthToken } from './utils/setAuthToken';

registerSetAuthToken();

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
