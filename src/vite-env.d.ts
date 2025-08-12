/// <reference types="vite/client" />

// Extend Window interface for external scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    mixpanel?: any;
  }
  
  // Custom element types
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
      };
    }
  }
}
