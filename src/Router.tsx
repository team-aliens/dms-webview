import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Policy } from './pages/Policy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Bug } from './pages/Bug';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up-policy" element={<Policy />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />
        <Route path='/bug' element={<Bug />}/>
      </Routes>
    </BrowserRouter>
  );
};
