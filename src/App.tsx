import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load page components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const FeaturesPage = React.lazy(() => import('./pages/FeaturesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const SurveyPage = React.lazy(() => import('./pages/SurveyPage'));
const InvestorPage = React.lazy(() => import('./pages/InvestorPage'));
const TestPage = React.lazy(() => import('./pages/TestPage'));
const CookiePolicyPage = React.lazy(() => import('./pages/CookiePolicyPage'));
const TermsAndConditionsPage = React.lazy(() => import('./pages/TermsAndConditionsPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const FleetCopilotDemoPage = React.lazy(() => import('./pages/FleetCopilotDemoPage'));

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
    <div className="text-center">
      <img 
        src="/Exotiq%20Lockup.png" 
        alt="ExotIQ.ai" 
        className="h-16 w-auto mx-auto mb-6 opacity-80 object-contain"
      />
      <LoadingSpinner size="lg" color="primary" />
      <p className="font-inter text-gray-600 dark:text-gray-400 mt-4">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <React.Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="features" element={<FeaturesPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="survey" element={<SurveyPage />} />
                <Route path="investors" element={<InvestorPage />} />
                <Route path="test" element={<TestPage />} />
                <Route path="cookies" element={<CookiePolicyPage />} />
                <Route path="terms" element={<TermsAndConditionsPage />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
                <Route path="fleetcopilot" element={<FleetCopilotDemoPage />} />
              </Route>
            </Routes>
          </React.Suspense>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;