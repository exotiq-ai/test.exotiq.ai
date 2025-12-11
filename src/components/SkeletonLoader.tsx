import React from 'react';
import { cn } from '../lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
  variant?: 'default' | 'shimmer' | 'wave';
}

/**
 * Premium Skeleton Loader Component
 * 
 * Sophisticated loading states with gradient shimmer effects
 */
export default function SkeletonLoader({ 
  className = '', 
  count = 1,
  variant = 'shimmer'
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    if (variant === 'shimmer') {
      return (
        <div className={cn('relative overflow-hidden bg-gray-200 dark:bg-dark-800 rounded-xl', className)}>
          {/* Animated shimmer gradient */}
          <div 
            className="absolute inset-0 -translate-x-full animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        </div>
      );
    }

    if (variant === 'wave') {
      return (
        <div className={cn('relative overflow-hidden bg-gray-200 dark:bg-dark-800 rounded-xl', className)}>
          {/* Wave animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800 animate-pulse-subtle" />
        </div>
      );
    }

    // Default pulse animation
    return (
      <div className={cn('animate-pulse bg-gray-200 dark:bg-dark-800 rounded-xl', className)} />
    );
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
}
