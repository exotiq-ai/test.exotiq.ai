// Mobile browser detection and utilities

export interface BrowserInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  browser: 'chrome' | 'safari' | 'firefox' | 'samsung' | 'edge' | 'unknown';
  os: 'ios' | 'android' | 'windows' | 'macos' | 'unknown';
  version?: string;
}

export const detectBrowser = (): BrowserInfo => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      browser: 'unknown',
      os: 'unknown'
    };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  // OS Detection
  let os: BrowserInfo['os'] = 'unknown';
  if (/iphone|ipod/.test(userAgent)) {
    os = 'ios';
  } else if (/ipad/.test(userAgent) || (platform === 'macintel' && navigator.maxTouchPoints > 1)) {
    os = 'ios'; // iPadOS
  } else if (/android/.test(userAgent)) {
    os = 'android';
  } else if (/win/.test(platform)) {
    os = 'windows';
  } else if (/mac/.test(platform)) {
    os = 'macos';
  }

  // Browser Detection
  let browser: BrowserInfo['browser'] = 'unknown';
  if (/edg|edgios|edga/.test(userAgent)) {
    browser = 'edge';
  } else if (/samsung/.test(userAgent)) {
    browser = 'samsung';
  } else if (/chrome/.test(userAgent) && !/edg|samsung/.test(userAgent)) {
    browser = 'chrome';
  } else if (/safari/.test(userAgent) && !/chrome|edg/.test(userAgent)) {
    browser = 'safari';
  } else if (/firefox/.test(userAgent)) {
    browser = 'firefox';
  }

  // Device Type Detection
  const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent) || 
                   (platform === 'macintel' && navigator.maxTouchPoints > 1);
  const isDesktop = !isMobile && !isTablet;

  return {
    isMobile,
    isTablet,
    isDesktop,
    browser,
    os
  };
};

export const isTouchDevice = (): boolean => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const getViewportSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    isPortrait: window.innerHeight > window.innerWidth,
    isLandscape: window.innerWidth > window.innerHeight
  };
};

export const applyBrowserFixes = () => {
  const browserInfo = detectBrowser();
  
  // iOS Safari specific fixes
  if (browserInfo.os === 'ios' && browserInfo.browser === 'safari') {
    // Prevent zoom on input focus
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      );
    }
    
    // Add safe area insets for notch support
    document.documentElement.style.setProperty('--safe-area-inset-top', 'env(safe-area-inset-top)');
    document.documentElement.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom)');
    document.documentElement.style.setProperty('--safe-area-inset-left', 'env(safe-area-inset-left)');
    document.documentElement.style.setProperty('--safe-area-inset-right', 'env(safe-area-inset-right)');
  }
  
  // Android Chrome specific fixes
  if (browserInfo.os === 'android' && browserInfo.browser === 'chrome') {
    // Improve touch target sizing
    document.documentElement.classList.add('android-chrome');
  }
  
  return browserInfo;
};







