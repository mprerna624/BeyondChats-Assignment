import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import SetupLayout from './layouts/SetupLayout';
import {Home, Registration, OrganizationSetup, Integration} from './pages'
import SuccessScreen from './components/integration/SuccessScreen';
import ChatbotTest from './components/integration/ChatbotTest';

const App = () => {
  return (

    // Configuration file (vercel.json) is needed to handle client-side routing in Single Page Applications (SPA)
    // Without this, Vercel will return Error 404 for routes handled by React Router

    <BrowserRouter>
      <Toaster position='top-right' />

      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Home />} />

        {/* Main setup flow routes wrapped in SetupLayout */}
        <Route element={<SetupLayout />}>
          <Route path="/register" element={<Registration />} />
          <Route path="/setup-organization" element={<OrganizationSetup />} />
          <Route path="/integration" element={<Integration />} />
        </Route>

        {/* Standalone routes - without SetupLayout */}
        <Route path="/preview-chatbot" element={<ChatbotTest />} />
        <Route path="/integration-success" element={<SuccessScreen />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;