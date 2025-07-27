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
    'bg-warning-50', 'bg-warning-100', 'bg-warning-600', 'bg-warning-700', 'bg-warning-900/20', 'bg-warning-800/20',
    'border-warning-200', 'border-warning-800', 'text-warning-600', 'text-warning-400',
    'bg-success-100', 'bg-success-900/30',
    'from-primary-50', 'to-primary-100', 'from-primary-900/20', 'to-primary-800/20',
    'from-accent-50', 'to-accent-100', 'from-accent-900/20', 'to-accent-800/20',
    'from-warning-50', 'to-warning-100', 'from-warning-900/20', 'to-warning-800/20',
    // Loading spinner colors
    'border-primary-200', 'border-primary-800', 'border-t-primary-600',
    'border-accent-200', 'border-accent-800', 'border-t-accent-600',
    'border-success-200', 'border-success-800', 'border-t-success-600',
    'border-warning-200', 'border-warning-800', 'border-t-warning-600',
    'border-white-200', 'border-white-800', 'border-t-white-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
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
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'gradient-text': 'gradientText 3s ease-in-out infinite',
        'count-up': 'countUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
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