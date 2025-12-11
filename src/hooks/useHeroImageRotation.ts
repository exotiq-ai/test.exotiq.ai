import { useState, useEffect, useCallback, useRef } from 'react';
import { heroImages, type HeroImage } from '../data/heroImages';

interface UseHeroImageRotationOptions {
  interval?: number; // Rotation interval in milliseconds
  autoPlay?: boolean; // Auto-rotate images
  preloadNext?: number; // Number of images to preload ahead
}

interface UseHeroImageRotationReturn {
  currentImage: HeroImage;
  currentIndex: number;
  isPaused: boolean;
  isTransitioning: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
  pause: () => void;
  resume: () => void;
  toggle: () => void;
}

/**
 * Custom hook for managing hero image rotation with preloading
 * 
 * Features:
 * - Automatic rotation with configurable interval
 * - Manual navigation (next/prev/specific)
 * - Pause/resume functionality
 * - Intelligent preloading of upcoming images
 * - Smooth transition management
 */
export function useHeroImageRotation(
  options: UseHeroImageRotationOptions = {}
): UseHeroImageRotationReturn {
  const {
    interval = 8000, // 8 seconds default
    autoPlay = true,
    preloadNext = 2 // Preload 2 images ahead
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const preloadedImages = useRef<Set<string>>(new Set());

  const currentImage = heroImages[currentIndex];

  /**
   * Preload image and its WebP variant
   */
  const preloadImage = useCallback((image: HeroImage) => {
    const imagesToLoad = [
      image.src.desktop,
      image.srcWebP.desktop,
      image.src.tablet,
      image.srcWebP.tablet
    ];

    imagesToLoad.forEach(src => {
      if (!preloadedImages.current.has(src)) {
        const img = new Image();
        img.src = src;
        preloadedImages.current.add(src);
      }
    });
  }, []);

  /**
   * Preload upcoming images
   */
  useEffect(() => {
    // Always preload current image
    preloadImage(currentImage);

    // Preload next N images
    for (let i = 1; i <= preloadNext; i++) {
      const nextIndex = (currentIndex + i) % heroImages.length;
      preloadImage(heroImages[nextIndex]);
    }
  }, [currentIndex, preloadNext, preloadImage, currentImage]);

  /**
   * Navigate to next image
   */
  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 1500);
  }, []);

  /**
   * Navigate to previous image
   */
  const goToPrevious = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => 
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
    
    setTimeout(() => setIsTransitioning(false), 1500);
  }, []);

  /**
   * Navigate to specific index
   */
  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < heroImages.length && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 1500);
    }
  }, [currentIndex]);

  /**
   * Pause rotation
   */
  const pause = useCallback(() => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  /**
   * Resume rotation
   */
  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  /**
   * Toggle pause/resume
   */
  const toggle = useCallback(() => {
    if (isPaused) {
      resume();
    } else {
      pause();
    }
  }, [isPaused, pause, resume]);

  /**
   * Auto-rotation effect
   */
  useEffect(() => {
    if (isPaused || !autoPlay) {
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, autoPlay, interval, goToNext]);

  /**
   * Pause on user interaction (accessibility)
   */
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else if (autoPlay) {
        resume();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pause, resume, autoPlay]);

  /**
   * Keyboard navigation
   */
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle if hero is in viewport
      const heroSection = document.querySelector('[data-hero-section]');
      if (!heroSection) return;

      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          pause(); // Pause on manual interaction
          break;
        case 'ArrowRight':
          goToNext();
          pause();
          break;
        case ' ':
          e.preventDefault();
          toggle();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [goToNext, goToPrevious, pause, toggle]);

  return {
    currentImage,
    currentIndex,
    isPaused,
    isTransitioning,
    goToNext,
    goToPrevious,
    goToIndex,
    pause,
    resume,
    toggle
  };
}

export default useHeroImageRotation;


