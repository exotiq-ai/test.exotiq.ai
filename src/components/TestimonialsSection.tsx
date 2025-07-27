import React from 'react';
import { MobileSection, MobileContainer } from './MobileOptimizations';
import { Users, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mike R.',
    initials: 'MR',
    color: 'primary',
    text: 'Finally, a platform built specifically for us! Current tools treat us like hobbyists, but ExotIQ understands we are running real businesses. This is exactly what Power Hosts have been waiting for.',
    subtitle: 'Multi-Market Host (28 vehicles, Denver/Phoenix)',
  },
  {
    name: 'David K.',
    initials: 'DK',
    color: 'accent',
    text: 'If ExotIQ can save me even 10 hours a week, that would be incredibly helpful. I find myself spending way too much time on monotonous tasks rather than focusing on scaling my Turo rental fleet.',
    subtitle: 'Turo Power Host (14 vehicles, Miami/Orlando)',
  },
  {
    name: 'Alex R.',
    initials: 'AR',
    color: 'success',
    text: 'I have tried piecing together different tools, but nothing truly supports the way P2P rental hosts operate. ExotIQ looks like the first platform built for us. I am ready to use it today. Just tell me when I can log in.',
    subtitle: 'Turo Host, 12 vehicles (Austin)',
  },
  {
    name: 'Sarah M.',
    initials: 'SM',
    color: 'warning',
    text: 'Take my money already! This will absolutely change the game. I have been waiting for something like this for years. I eagerly await the launch of ExotIQ.',
    subtitle: 'Exotic Car Rental Owner 50+ Cars (Los Angeles)',
  },
];

const TestimonialsSection: React.FC = () => (
  <MobileSection className="bg-gray-50 dark:bg-dark-800">
    <MobileContainer>
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-success-100 dark:bg-success-900/30 rounded-full text-success-700 dark:text-success-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 animate-slide-up">
          <Users className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
          Validation from Real Operators
        </div>
        <h2 className="font-space font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 animate-slide-up px-2" style={{ animationDelay: '100ms' }}>
          🗣️ Trusted by Real Operators
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-lg animate-slide-up" style={{ animationDelay: `${200 + i * 100}ms` }}>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4 italic">{t.text}</p>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-${t.color}-100 dark:bg-${t.color}-900/30 rounded-full flex items-center justify-center`}>
                <span className={`font-space font-bold text-${t.color}-600`}>{t.initials}</span>
              </div>
              <div>
                <div className="font-inter font-semibold text-gray-900 dark:text-white">{t.name}</div>
                <div className="font-inter text-sm text-gray-600 dark:text-gray-400">{t.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MobileContainer>
  </MobileSection>
);

export default TestimonialsSection; 