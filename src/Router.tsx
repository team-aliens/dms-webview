import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Policy } from './pages/Policy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up-policy" element={<Policy />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};
