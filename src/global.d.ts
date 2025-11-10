export {};

declare global {
  interface Window {
    setAuthToken: (accessToken: string, refreshToken: string) => void;
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}
