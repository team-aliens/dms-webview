export {};

declare global {
  interface Window {
    setAuthToken: (accessToken: string, refreshToken: string) => void;
    setAuthTokenQueue?: [string, string][];
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}
