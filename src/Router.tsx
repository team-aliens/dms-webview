import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Policy } from './pages/Policy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Bug } from './pages/Bug';
import { VolunteerApplication } from './pages/Volunteer/Application';
import { VolunteerHistory } from './pages/Volunteer/History';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up-policy" element={<Policy />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />
        <Route path='/bug' element={<Bug />}/>
        <Route path='/volunteer/application' element={<VolunteerApplication/>}/>
        <Route path='/volunteer/history' element={<VolunteerHistory/>}/>
      </Routes>
    </BrowserRouter>
  );
};
