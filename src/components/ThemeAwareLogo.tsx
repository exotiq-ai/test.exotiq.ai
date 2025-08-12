import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeAwareLogoProps {
  className?: string;
  alt?: string;
  size?: 'header' | 'footer' | 'mobile' | 'loading';
}

export default function ThemeAwareLogo({ 
  className = '', 
  alt = 'Exotiq.ai',
  size = 'header'
}: ThemeAwareLogoProps) {
  const { theme } = useTheme();
  
  // Choose logo based on theme and size
  // Footer always uses white logo, others switch based on theme
  const logoSrc = size === 'footer' 
    ? '/exotiq-lockup-white-transparent.svg'
    : theme === 'dark' 
      ? '/exotiq-lockup-white-transparent.svg'
      : '/exotiq-lockup-black-transparent.svg';
  
  // Size classes with optimized dimensions
  const sizeClasses = {
    header: 'logo-optimized logo-header logo-hover',
    footer: 'logo-optimized logo-footer logo-hover',
    mobile: 'logo-optimized logo-mobile logo-hover',
    loading: 'logo-optimized logo-header mx-auto opacity-80'
  };
  
  return (
    <img 
      src={logoSrc}
      alt={alt}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}
