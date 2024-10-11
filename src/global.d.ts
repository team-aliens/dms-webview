export {};

declare global {
  interface Window {
    receiveToken: (token: string) => void;
  }
}