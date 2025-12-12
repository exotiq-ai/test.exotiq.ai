// Pixel 9 Pro Chrome Cookie Fix
// Specifically targets the cookie loading issue on Pixel 9 Pro Chrome

(function() {
    'use strict';
    
    // Detect Pixel 9 Pro Chrome specifically
    const isPixel9ProChrome = () => {
        const userAgent = navigator.userAgent;
        return userAgent.includes('Chrome') && 
               userAgent.includes('Android') && 
               (userAgent.includes('Pixel 9') || userAgent.includes('Pixel_9'));
    };
    
    if (isPixel9ProChrome()) {
        console.log('🔧 Pixel 9 Pro Chrome detected - applying cookie fix');
        
        // Clear all problematic cookies and localStorage immediately
        const clearAllStorage = () => {
            try {
                // Clear localStorage
                localStorage.clear();
                console.log('✅ localStorage cleared');
                
                // Clear sessionStorage
                sessionStorage.clear();
                console.log('✅ sessionStorage cleared');
                
                // Clear all cookies
                document.cookie.split(";").forEach(function(c) { 
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
                });
                console.log('✅ cookies cleared');
                
                // Clear specific Exotiq cookies
                const exotiqCookies = [
                    'exotiq_cookie_preferences',
                    'exotiq_domain',
                    'exotiq_analytics_events',
                    'exotiq_session',
                    'csrf_token',
                    'cookie_consent'
                ];
                
                exotiqCookies.forEach(cookieName => {
                    localStorage.removeItem(cookieName);
                    document.cookie = `${cookieName}=;expires=${new Date().toUTCString()};path=/`;
                });
                
                console.log('✅ Exotiq-specific storage cleared');
                
                return true;
            } catch (error) {
                console.error('❌ Failed to clear storage:', error);
                return false;
            }
        };
        
        // Clear storage immediately
        clearAllStorage();
        
        // Also clear on page load
        window.addEventListener('load', () => {
            console.log('🔧 Pixel 9 Pro Chrome - clearing storage on load');
            clearAllStorage();
        });
        
        // Clear storage before React loads
        const originalCreateRoot = window.React?.createRoot;
        if (window.React && originalCreateRoot) {
            window.React.createRoot = function(container) {
                console.log('🔧 Pixel 9 Pro Chrome - clearing storage before React root creation');
                clearAllStorage();
                return originalCreateRoot.call(this, container);
            };
        }
        
        // Add a global function to manually clear storage
        window.clearPixelStorage = () => {
            console.log('🔧 Manual storage clear triggered');
            clearAllStorage();
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        };
        
        // Show a message if the page doesn't load
        setTimeout(() => {
            if (!window.React) {
                console.log('🔧 Pixel 9 Pro Chrome - React not loaded, showing manual fix');
                document.body.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f3f4f6; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif; z-index: 9999;">
                        <div style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 400px; text-align: center;">
                            <h2 style="color: #1f2937; margin-bottom: 1rem;">Pixel 9 Pro Chrome Fix</h2>
                            <p style="color: #6b7280; margin-bottom: 1.5rem;">Clearing corrupted cookies and reloading...</p>
                            <button onclick="window.clearPixelStorage()" style="background: #2563eb; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 16px;">
                                Clear Storage & Reload
                            </button>
                        </div>
                    </div>
                `;
            }
        }, 5000);
        
        console.log('✅ Pixel 9 Pro Chrome fix applied');
    }
})();







