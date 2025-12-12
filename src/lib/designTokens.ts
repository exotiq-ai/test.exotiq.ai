/**
 * Exotiq Design System Tokens
 * 
 * Apple/Porsche-level design system with precise spacing, timing, and visual hierarchy.
 * Based on 4px base grid for perfect pixel alignment.
 */

// ============================================================================
// SPACING SYSTEM (4px Base Grid)
// ============================================================================
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px - base
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// ============================================================================
// TYPOGRAPHY SCALE (Golden Ratio: 1.618)
// ============================================================================
export const typography = {
  fontFamily: {
    primary: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px - base
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================================================
// COLOR SYSTEM (Luxury Palette with Gold/Platinum Accents)
// ============================================================================
export const colors = {
  // Primary: Sophisticated Deep Blue
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#1e40af',  // Main primary - deeper, sophisticated
    700: '#1a3a99',
    800: '#162f7f',
    900: '#0f1f4d',
  },
  
  // Accent: Champagne Gold (Luxury)
  accent: {
    50: '#faf8f5',
    100: '#f5f1ea',
    200: '#ebe3d5',
    300: '#dfd4bf',
    400: '#d3c5aa',
    500: '#c5a572',  // Main accent - champagne gold
    600: '#b8935d',
    700: '#9a7a4d',
    800: '#7d633e',
    900: '#5f4c2f',
  },
  
  // Platinum: Subtle Metallic Accent
  platinum: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e4e2',  // Main platinum
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Success
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    900: '#14532d',
  },
  
  // Warning
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    800: '#92400e',
    900: '#78350f',
  },
  
  // Error
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
  
  // Neutral (True blacks for dark mode)
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
    black: '#000000',
  },
} as const;

// ============================================================================
// SHADOW SYSTEM (6 Levels - Sophisticated Depth)
// ============================================================================
export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  
  // Premium glow effects
  glow: {
    primary: '0 0 20px rgba(30, 64, 175, 0.3)',
    accent: '0 0 20px rgba(197, 165, 114, 0.3)',
    platinum: '0 0 20px rgba(229, 228, 226, 0.2)',
  },
  
  // Inner shadows for depth
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// ============================================================================
// ANIMATION TIMING (60fps Smooth Animations)
// ============================================================================
export const timing = {
  // Durations
  duration: {
    instant: '0ms',
    fast: '150ms',
    base: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '750ms',
  },
  
  // Easing curves (Apple-style)
  easing: {
    // Standard easings
    linear: 'linear',
    
    // Entrances (ease-out) - fast start, slow end
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    
    // Exits (ease-in) - slow start, fast end
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    
    // Continuous (ease-in-out) - smooth throughout
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    
    // Premium spring (iOS-like)
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  
  // Stagger delays for sequential animations
  stagger: {
    xs: '25ms',
    sm: '50ms',
    md: '100ms',
    lg: '150ms',
    xl: '200ms',
  },
} as const;

// ============================================================================
// BORDER RADIUS (Sophisticated Roundness)
// ============================================================================
export const borderRadius = {
  none: '0',
  sm: '0.5rem',      // 8px
  md: '0.75rem',     // 12px
  lg: '1rem',        // 16px
  xl: '1.5rem',      // 24px
  '2xl': '2rem',     // 32px
  '3xl': '3rem',     // 48px
  full: '9999px',
} as const;

// ============================================================================
// Z-INDEX LAYERS (Organized Stacking)
// ============================================================================
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  toast: 60,
  tooltip: 70,
} as const;

// ============================================================================
// BREAKPOINTS (Mobile-First Responsive)
// ============================================================================
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// GLASS MORPHISM EFFECTS
// ============================================================================
export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  heavy: {
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(40px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  dark: {
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================
export const designTokens = {
  spacing,
  typography,
  colors,
  shadows,
  timing,
  borderRadius,
  zIndex,
  breakpoints,
  glassmorphism,
} as const;

export default designTokens;


