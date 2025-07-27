import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
}

export default function Analytics({ trackingId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  useEffect(() => {
    // Only load analytics in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Google Analytics 4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Track page views
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      }
    };

    // Listen for route changes (for SPA)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId]);

  return null;
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackBetaSignup = (userEmail: string) => {
  trackEvent('beta_signup', {
    event_category: 'engagement',
    event_label: 'beta_form_submission',
    user_email: userEmail
  });
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: formType,
    form_type: formType
  });
};

export const trackFeatureClick = (featureName: string) => {
  trackEvent('feature_click', {
    event_category: 'engagement',
    event_label: featureName,
    feature_name: featureName
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    event_category: 'navigation',
    event_label: pageName,
    page_name: pageName
  });
};