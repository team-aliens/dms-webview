export {};

declare global {
  interface Window {
    setAuthToken: (accessToken: string, refreshToken: string) => void;
  }
}