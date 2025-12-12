import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MobileContainer } from './MobileOptimizations';
import { useParallax } from '../hooks/useScrollAnimation';

interface HomeHeroSectionProps {
  isVisible: boolean;
}

// Static hero image - McLaren 720S Urban Night
const heroImage = {
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
  overlayIntensity: 0.32,
  backgroundPosition: 'center 45%'
};

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ isVisible }) => {
  const parallaxOffset = useParallax(0.3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) { // Only on desktop
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-hero-section
      aria-label="Hero section with McLaren 720S"
    >
      {/* Static Hero Image with WebP Support */}
      <div className="absolute inset-0">
        {/* Blur Placeholder */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url('${heroImage.src.tiny}')`,
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
          aria-hidden="true"
        />
        
        {/* Main Image with Picture Element */}
        <picture className={`absolute inset-0 transition-opacity duration-1500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Mobile WebP */}
          <source 
            media="(max-width: 640px)" 
            srcSet={heroImage.srcWebP.mobile}
            type="image/webp"
          />
          {/* Mobile JPG Fallback */}
          <source 
            media="(max-width: 640px)" 
            srcSet={heroImage.src.mobile}
            type="image/jpeg"
          />
          
          {/* Tablet WebP */}
          <source 
            media="(max-width: 1024px)" 
            srcSet={heroImage.srcWebP.tablet}
            type="image/webp"
          />
          {/* Tablet JPG Fallback */}
          <source 
            media="(max-width: 1024px)" 
            srcSet={heroImage.src.tablet}
            type="image/jpeg"
          />
          
          {/* Desktop WebP */}
          <source 
            media="(min-width: 1025px)" 
            srcSet={heroImage.srcWebP.desktop}
            type="image/webp"
          />
          {/* Desktop JPG Fallback */}
          <source 
            media="(min-width: 1025px)" 
            srcSet={heroImage.src.desktop}
            type="image/jpeg"
          />
          
          <img
            src={heroImage.src.desktop}
            alt={heroImage.alt}
            title={heroImage.title}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover transition-transform duration-500 ease-out"
            style={{
              objectPosition: heroImage.backgroundPosition,
              transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.08)`,
              willChange: 'transform',
            }}
            loading="eager"
          />
        </picture>
        
        {/* Dynamic Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b transition-colors duration-1500"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0, 0, 0, ${heroImage.overlayIntensity}), 
              rgba(0, 0, 0, ${heroImage.overlayIntensity - 0.05}), 
              rgba(0, 0, 0, ${heroImage.overlayIntensity + 0.1})
            )`
          }}
        />
        
        {/* Premium gradient mesh overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(30, 64, 175, 0.4) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease-out',
          }}
        />
        
        {/* Sophisticated animated gradient mesh */}
        <div className="absolute inset-0 opacity-20 animate-gradient-shift" 
          style={{
            background: 'linear-gradient(135deg, rgba(197, 165, 114, 0.15) 0%, transparent 50%, rgba(229, 228, 226, 0.1) 100%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <MobileContainer>
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight px-2 drop-shadow-lg">
              Transform Your Fleet Operations
              <span className="block text-primary-300 animate-gradient-text drop-shadow-lg">With AI That Actually Works</span>
            </h1>
            <p className="font-inter text-lg sm:text-xl md:text-2xl text-gray-100 dark:text-gray-50 max-w-4xl mx-auto mb-6 sm:mb-8 animate-slide-up px-4 drop-shadow-md font-medium" style={{ animationDelay: '200ms' }}>
              Stop losing 15+ hours every week to manual tasks. Exotiq automates pricing, availability, maintenance, and messaging—so you can scale profitably.
            </p>
            
            {/* Trust Signal with Badge */}
            <div className="flex items-center justify-center gap-3 mt-2 mb-6 sm:mb-8 px-4">
              <div className="relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/5 border border-white/20 px-4 py-2.5">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  <span className="font-inter text-sm text-white/90 font-medium">
                    Built by former Turo hosts for operators
                  </span>
                </div>
              </div>
            </div>
            
            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 px-4">
              <Link
                to="/features"
                className="group relative font-inter font-semibold text-base px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2.5 min-h-[52px] touch-manipulation shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-500 rounded-xl"></span>
                {/* Content */}
                <span className="relative z-10 flex items-center space-x-2.5">
                  <span>Explore the Platform</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-250" />
                </span>
              </Link>
              <a
                href="https://calendly.com/hello-exotiq/15-minute-meeting?back=1&month=2025-07"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-inter font-semibold text-base px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white rounded-xl transition-all duration-250 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center min-h-[52px] touch-manipulation shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Glassmorphism enhancement */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Book a 15-Min Demo</span>
              </a>
            </div>
          </div>
        </MobileContainer>
      </div>
    </section>
  );
};

export default HomeHeroSection;
