/**
 * Hero Image Manifest for Exotiq.ai
 * 
 * Defines all hero carousel images with comprehensive metadata
 * for SEO, accessibility, and dynamic overlays.
 */

export interface HeroImage {
  id: string;
  vehicle: string;
  setting: string;
  color: string;
  src: {
    desktop: string;
    tablet: string;
    mobile: string;
    tiny: string; // Blur placeholder
  };
  srcWebP: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  alt: string;
  title: string;
  caption: string;
  overlayIntensity: number; // 0-1, controls darkness of gradient overlay
  backgroundPosition: string; // CSS background-position value
  dominantColors?: {
    primary: string;
    secondary: string;
  };
}

export const heroImages: HeroImage[] = [
  {
    id: 'audi-r8-desert',
    vehicle: 'Audi R8 V10',
    setting: 'Desert Landscape',
    color: 'Matte Black',
    src: {
      desktop: '/images/hero/audi-r8-desert-desktop.jpg',
      tablet: '/images/hero/audi-r8-desert-tablet.jpg',
      mobile: '/images/hero/audi-r8-desert-mobile.jpg',
      tiny: '/images/hero/audi-r8-desert-tiny.jpg'
    },
    srcWebP: {
      desktop: '/images/hero/audi-r8-desert-desktop.webp',
      tablet: '/images/hero/audi-r8-desert-tablet.webp',
      mobile: '/images/hero/audi-r8-desert-mobile.webp'
    },
    alt: 'Matte black Audi R8 V10 supercar on scenic desert highway with dramatic red rock formations and blue sky',
    title: 'Premium Exotic Car Fleet Management - Audi R8',
    caption: 'Luxury performance vehicles deserve luxury management tools',
    overlayIntensity: 0.35, // 35% dark overlay
    backgroundPosition: 'center 40%',
    dominantColors: {
      primary: '#8B7355', // Desert tan
      secondary: '#4A7BA7'  // Sky blue
    }
  },
  {
    id: 'mclaren-720s-urban',
    vehicle: 'McLaren 720S',
    setting: 'Urban Night Scene',
    color: 'Volcano Orange',
    src: {
      desktop: '/images/hero/mclaren-720s-urban-night-desktop.jpg',
      tablet: '/images/hero/mclaren-720s-urban-night-tablet.jpg',
      mobile: '/images/hero/mclaren-720s-urban-night-mobile.jpg',
      tiny: '/images/hero/mclaren-720s-urban-night-tiny.jpg'
    },
    srcWebP: {
      desktop: '/images/hero/mclaren-720s-urban-night-desktop.webp',
      tablet: '/images/hero/mclaren-720s-urban-night-tablet.webp',
      mobile: '/images/hero/mclaren-720s-urban-night-mobile.webp'
    },
    alt: 'Volcano orange McLaren 720S supercar in motion on wet city streets at night with light trails and urban skyline',
    title: 'Tech-Forward Fleet Operations - McLaren 720S',
    caption: 'Where cutting-edge technology meets automotive excellence',
    overlayIntensity: 0.32, // 32% dark overlay
    backgroundPosition: 'center 45%',
    dominantColors: {
      primary: '#FF6B35', // Volcano orange
      secondary: '#2C5F77'  // Urban blue
    }
  },
  {
    id: 'lamborghini-huracan-coastal',
    vehicle: 'Lamborghini Huracán',
    setting: 'Coastal Highway',
    color: 'Verde Mantis',
    src: {
      desktop: '/images/hero/lamborghini-huracan-coastal-desktop.jpg',
      tablet: '/images/hero/lamborghini-huracan-coastal-tablet.jpg',
      mobile: '/images/hero/lamborghini-huracan-coastal-mobile.jpg',
      tiny: '/images/hero/lamborghini-huracan-coastal-tiny.jpg'
    },
    srcWebP: {
      desktop: '/images/hero/lamborghini-huracan-coastal-desktop.webp',
      tablet: '/images/hero/lamborghini-huracan-coastal-tablet.webp',
      mobile: '/images/hero/lamborghini-huracan-coastal-mobile.webp'
    },
    alt: 'Verde Mantis green Lamborghini Huracán on scenic Pacific Coast Highway with ocean views and golden hour lighting',
    title: 'Luxury Lifestyle Fleet Management - Lamborghini Huracán',
    caption: 'Transform every rental into an unforgettable experience',
    overlayIntensity: 0.28, // 28% dark overlay (lightest - golden hour is beautiful)
    backgroundPosition: 'center 50%',
    dominantColors: {
      primary: '#7CB342', // Verde Mantis
      secondary: '#FFB74D'  // Golden hour
    }
  },
  {
    id: 'porsche-911-gt3rs-mountain',
    vehicle: 'Porsche 911 GT3 RS',
    setting: 'Alpine Mountain Road',
    color: 'Guards Red',
    src: {
      desktop: '/images/hero/porsche-911-gt3rs-mountain-desktop.jpg',
      tablet: '/images/hero/porsche-911-gt3rs-mountain-tablet.jpg',
      mobile: '/images/hero/porsche-911-gt3rs-mountain-mobile.jpg',
      tiny: '/images/hero/porsche-911-gt3rs-mountain-tiny.jpg'
    },
    srcWebP: {
      desktop: '/images/hero/porsche-911-gt3rs-mountain-desktop.webp',
      tablet: '/images/hero/porsche-911-gt3rs-mountain-desktop.webp',
      mobile: '/images/hero/porsche-911-gt3rs-mountain-mobile.webp'
    },
    alt: 'Guards Red Porsche 911 GT3 RS with racing stripes on wet mountain road with alpine forest backdrop',
    title: 'Performance-Focused Fleet Operations - Porsche 911 GT3 RS',
    caption: 'Precision engineering meets precision fleet management',
    overlayIntensity: 0.33, // 33% dark overlay
    backgroundPosition: 'center 50%',
    dominantColors: {
      primary: '#E21F26', // Guards Red
      secondary: '#5D7B4F'  // Alpine green
    }
  },
  {
    id: 'ferrari-488-pista-track',
    vehicle: 'Ferrari 488 Pista',
    setting: 'Professional Racetrack',
    color: 'Rosso Corsa',
    src: {
      desktop: '/images/hero/ferrari-488-pista-racetrack-desktop.jpg',
      tablet: '/images/hero/ferrari-488-pista-racetrack-tablet.jpg',
      mobile: '/images/hero/ferrari-488-pista-racetrack-mobile.jpg',
      tiny: '/images/hero/ferrari-488-pista-racetrack-tiny.jpg'
    },
    srcWebP: {
      desktop: '/images/hero/ferrari-488-pista-racetrack-desktop.webp',
      tablet: '/images/hero/ferrari-488-pista-racetrack-tablet.webp',
      mobile: '/images/hero/ferrari-488-pista-racetrack-mobile.webp'
    },
    alt: 'Rosso Corsa red Ferrari 488 Pista on Road Atlanta racetrack with professional racing infrastructure and American flag',
    title: 'Enterprise Fleet Management at Scale - Ferrari 488 Pista',
    caption: 'From single vehicles to full-scale fleet operations',
    overlayIntensity: 0.36, // 36% dark overlay (track has good lighting but needs text contrast)
    backgroundPosition: 'center 55%',
    dominantColors: {
      primary: '#DC0714', // Rosso Corsa
      secondary: '#7F9B4F'  // Track grass
    }
  }
];

/**
 * Get hero image by ID
 */
export function getHeroImageById(id: string): HeroImage | undefined {
  return heroImages.find(img => img.id === id);
}

/**
 * Get next image in rotation
 */
export function getNextHeroImage(currentId: string): HeroImage {
  const currentIndex = heroImages.findIndex(img => img.id === currentId);
  const nextIndex = (currentIndex + 1) % heroImages.length;
  return heroImages[nextIndex];
}

/**
 * Get previous image in rotation
 */
export function getPreviousHeroImage(currentId: string): HeroImage {
  const currentIndex = heroImages.findIndex(img => img.id === currentId);
  const previousIndex = currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1;
  return heroImages[previousIndex];
}

export default heroImages;


