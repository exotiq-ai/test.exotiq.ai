import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { applyBrowserFixes, detectBrowser } from './utils/mobileDetect';
import logger from './utils/logger';

// DISABLED: Service worker temporarily disabled for mobile debugging
// Register service worker for caching
if ('serviceWorker' in navigator && false) { // Disabled for now
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        logger.info('Service worker registered', { registration });
      })
      .catch((registrationError) => {
        logger.warn('Service worker registration failed', { error: registrationError });
      });
  });
}

// Mobile browser detection and fixes
const browserInfo = detectBrowser();
logger.info('Browser detected', browserInfo);

// Apply browser-specific fixes
applyBrowserFixes();

// Pixel 9 Pro Chrome specific fixes
const isPixel9ProChrome = browserInfo.os === 'android' && 
                         browserInfo.browser === 'chrome' && 
                         (navigator.userAgent.includes('Pixel 9') || navigator.userAgent.includes('Pixel_9'));

if (isPixel9ProChrome) {
  logger.info('Pixel 9 Pro Chrome detected - applying fixes');
  
  // Clear any remaining problematic storage
  try {
    localStorage.removeItem('exotiq_cookie_preferences');
    localStorage.removeItem('exotiq_domain');
    localStorage.removeItem('exotiq_analytics_events');
    logger.info('Pixel 9 Pro Chrome - cleared problematic localStorage');
  } catch (error) {
    logger.warn('Pixel 9 Pro Chrome - localStorage clear failed', { error });
  }
}

if (browserInfo.isMobile) {
  logger.info('Mobile device detected - starting React app', { userAgent: navigator.userAgent });
}

// Add error handling for React loading
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  if (browserInfo.isMobile) {
    logger.info('React app started successfully on mobile');
  } else {
    logger.info('React app started successfully');
  }
} catch (error) {
  logger.error('Failed to start React app', { error });
  if (browserInfo.isMobile) {
    logger.error('Mobile React loading failed', { error, userAgent: navigator.userAgent });
  }
}
