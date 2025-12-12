import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'platinum' | 'ghost' | 'glass';
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Icon before text */
  leftIcon?: ReactNode;
  /** Icon after text */
  rightIcon?: ReactNode;
  /** Children content */
  children: ReactNode;
}

/**
 * Premium Button Component
 * 
 * Luxury-refined button with glass morphism, subtle animations, and premium feel.
 * Follows Apple/Porsche design principles: restrained, confident, sophisticated.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles - always applied
    const baseStyles = [
      // Layout & Spacing
      'relative inline-flex items-center justify-center',
      'font-inter font-medium',
      'transition-all duration-250 ease-out',
      'overflow-hidden',
      'touch-manipulation',
      
      // Focus states
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      
      // Disabled state
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
      
      // Prevent text selection
      'select-none',
    ];

    // Size variants
    const sizeVariants = {
      sm: [
        'px-6 py-2.5',
        'text-sm',
        'rounded-lg',
        'min-h-[40px]',
        'gap-2',
      ],
      md: [
        'px-8 py-3.5',
        'text-base',
        'rounded-xl',
        'min-h-[48px]',
        'gap-2.5',
      ],
      lg: [
        'px-10 py-4',
        'text-lg',
        'rounded-xl',
        'min-h-[52px]',
        'gap-3',
      ],
      xl: [
        'px-12 py-5',
        'text-xl',
        'rounded-2xl',
        'min-h-[56px]',
        'gap-3',
      ],
    };

    // Variant styles
    const variantStyles = {
      primary: [
        'bg-primary-600 text-white',
        'hover:bg-primary-700',
        'active:bg-primary-800',
        'shadow-lg hover:shadow-xl',
        'focus-visible:ring-primary-500',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
      secondary: [
        'bg-white dark:bg-dark-800',
        'text-gray-900 dark:text-white',
        'border-2 border-gray-300 dark:border-dark-600',
        'hover:border-gray-400 dark:hover:border-dark-500',
        'hover:bg-gray-50 dark:hover:bg-dark-700',
        'active:bg-gray-100 dark:active:bg-dark-600',
        'shadow-md hover:shadow-lg',
        'focus-visible:ring-gray-500',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
      accent: [
        'bg-accent-500 text-white',
        'hover:bg-accent-600',
        'active:bg-accent-700',
        'shadow-lg hover:shadow-xl',
        'focus-visible:ring-accent-400',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
      platinum: [
        'bg-platinum-200 text-gray-900',
        'hover:bg-platinum-300',
        'active:bg-platinum-400',
        'shadow-md hover:shadow-lg',
        'focus-visible:ring-platinum-400',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
      ghost: [
        'bg-transparent',
        'text-gray-700 dark:text-gray-200',
        'hover:bg-gray-100 dark:hover:bg-dark-800',
        'active:bg-gray-200 dark:active:bg-dark-700',
        'focus-visible:ring-gray-500',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
      glass: [
        'bg-white/10 dark:bg-white/5',
        'text-white',
        'backdrop-blur-md',
        'border border-white/20',
        'hover:bg-white/20 dark:hover:bg-white/10',
        'hover:border-white/30',
        'active:bg-white/30 dark:active:bg-white/15',
        'shadow-lg hover:shadow-xl',
        'focus-visible:ring-white/50',
        'hover:scale-[1.02]',
        'active:scale-[0.98]',
      ],
    };

    // Ripple effect overlay
    const rippleEffect = (
      <span 
        className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-500 rounded-inherit"
        aria-hidden="true"
      />
    );

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          sizeVariants[size],
          variantStyles[variant],
          fullWidth && 'w-full',
          'group',
          className
        )}
        {...props}
      >
        {rippleEffect}
        
        {/* Content wrapper for z-index above ripple */}
        <span className="relative z-10 flex items-center justify-center gap-inherit">
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : leftIcon ? (
            <span className="flex-shrink-0 transition-transform duration-250 group-hover:scale-110">
              {leftIcon}
            </span>
          ) : null}
          
          <span className="leading-none">{children}</span>
          
          {rightIcon && !isLoading && (
            <span className="flex-shrink-0 transition-transform duration-250 group-hover:translate-x-0.5">
              {rightIcon}
            </span>
          )}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
