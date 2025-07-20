import { useEffect } from 'react';
import { Router } from './Router';
import { StyledProvider } from '@team-aliens/design-system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    if (window.ReactNativeWebView?.postMessage) {
      window.ReactNativeWebView.postMessage('setAuthTokenReady');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledProvider>
        <Router />
      </StyledProvider>
    </QueryClientProvider>
  );
}

export default App;
