/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: [
    // Dynamic color classes used in components
    'bg-primary-50', 'bg-primary-100', 'bg-primary-600', 'bg-primary-700', 'bg-primary-900/20', 'bg-primary-800/20',
    'border-primary-200', 'border-primary-800', 'text-primary-600', 'text-primary-400',
    'bg-accent-50', 'bg-accent-100', 'bg-accent-600', 'bg-accent-700', 'bg-accent-900/20', 'bg-accent-800/20',
    'border-accent-200', 'border-accent-800', 'text-accent-600', 'text-accent-400',
    'bg-platinum-50', 'bg-platinum-100', 'bg-platinum-200', 'bg-platinum-600', 'bg-platinum-700',
    'border-platinum-200', 'border-platinum-800', 'text-platinum-600', 'text-platinum-400',
    'bg-warning-50', 'bg-warning-100', 'bg-warning-600', 'bg-warning-700', 'bg-warning-900/20', 'bg-warning-800/20',
    'border-warning-200', 'border-warning-800', 'text-warning-600', 'text-warning-400',
    'bg-success-100', 'bg-success-900/30', 'border-success-500', 'text-success-500',
    'from-primary-50', 'to-primary-100', 'from-primary-900/20', 'to-primary-800/20',
    'from-accent-50', 'to-accent-100', 'from-accent-900/20', 'to-accent-800/20',
    'from-platinum-50', 'to-platinum-100', 'from-platinum-900/20', 'to-platinum-800/20',
    'from-warning-50', 'to-warning-100', 'from-warning-900/20', 'to-warning-800/20',
    // Loading spinner colors
    'border-primary-200', 'border-primary-800', 'border-t-primary-600',
    'border-accent-200', 'border-accent-800', 'border-t-accent-600',
    'border-platinum-200', 'border-platinum-800', 'border-t-platinum-600',
    'border-success-200', 'border-success-800', 'border-t-success-600',
    'border-warning-200', 'border-warning-800', 'border-t-warning-600',
    'border-white-200', 'border-white-800', 'border-t-white-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'monospace'],
        // Deprecated: Poppins removed for cleaner hierarchy
      },
      colors: {
        // Sophisticated Deep Blue - Premium Primary
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
        // Champagne Gold - Luxury Accent
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
        // Platinum - Subtle Metallic Accent
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
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
        // True Black for Premium Dark Mode
        dark: {
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
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 0.35s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'rotate-in': 'rotateIn 0.5s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'bounce-subtle': 'bounceSubtle 3s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'gradient-text': 'gradientText 8s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'count-up': 'countUp 0.75s cubic-bezier(0.0, 0.0, 0.2, 1)',
        'float': 'float 4s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
        'shimmer': 'shimmer 2s cubic-bezier(0.4, 0.0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        countUp: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      // Refined border radius for luxury feel
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',      // 8px
        'DEFAULT': '0.75rem', // 12px
        'md': '0.75rem',     // 12px
        'lg': '1rem',        // 16px
        'xl': '1.5rem',      // 24px
        '2xl': '2rem',       // 32px
        '3xl': '3rem',       // 48px
        'full': '9999px',
      },
      // Mobile-specific utilities
      minHeight: {
        'touch': '44px', // Apple's recommended minimum touch target
      },
      minWidth: {
        'touch': '44px',
      },
      screens: {
        'xs': '475px',
        'touch': { 'raw': '(hover: none) and (pointer: coarse)' }, // Touch devices
      },
    },
  },
  plugins: [],
};