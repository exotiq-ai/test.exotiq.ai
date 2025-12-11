import React, { useState, useEffect } from 'react';
import { Bot, Phone, TrendingUp, Wrench, MessageSquare } from 'lucide-react';
import { MobileSection, MobileContainer } from './MobileOptimizations';
import SectionSkeleton from './SectionSkeleton';

const FleetCopilotSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate section load after a brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <MobileSection className="bg-gradient-to-br from-accent-600 via-accent-700 to-primary-700">
        <SectionSkeleton variant="fleetcopilot" />
      </MobileSection>
    );
  }

  return (
  <MobileSection className="bg-gradient-to-br from-accent-600 via-accent-700 to-primary-700 text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
    </div>
    <MobileContainer className="relative z-10 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="animate-slide-up order-1">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
            <Bot className="w-4 h-4 mr-2" />
            Meet FleetCopilot™ AI
          </div>
          <h2 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Your 24/7 AI Assistant That Never Sleeps
          </h2>
          <p className="font-inter text-xl mb-8 leading-relaxed opacity-90">
            FleetCopilot™ is like having ChatGPT specifically trained for your fleet business. It monitors, optimizes, and manages your operation in real-time, becoming an essential extension of your business operations.
          </p>
          {/* Enhanced Feature List */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-space font-semibold text-xl mb-2">Natural voice conversations with renters</h3>
                <p className="font-inter text-white/80">Handles guest inquiries via phone and text with human-like intelligence</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-space font-semibold text-xl mb-2">Automatic pricing optimization alerts</h3>
                <p className="font-inter text-white/80">Continuously monitors market conditions and suggests optimal pricing</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-space font-semibold text-xl mb-2">Predictive maintenance recommendations</h3>
                <p className="font-inter text-white/80">Prevents costly breakdowns by predicting maintenance needs</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="font-inter text-lg font-semibold mb-2">💡 Think of it as:</p>
            <p className="font-inter text-white/90">ChatGPT + Siri + Your most experienced fleet manager, all working 24/7 to grow your business</p>
          </div>
        </div>
        {/* AI Assistant Visualization */}
        <div className="relative animate-slide-up order-2" style={{ animationDelay: '100ms' }}>
          {/* Voice Assistant Call-to-Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-white">FleetCopilot™</span>
                  <span className="text-xs text-white/60">Just now</span>
                </div>
                <p className="font-inter text-white/90">
                  "Your Tesla Model 3 is underpriced by $15 per day compared to similar vehicles. 
                  Shall I adjust the rate for this weekend? This could increase revenue by $105."
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-warning-400 rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-white">Maintenance Alert</span>
                  <span className="text-xs text-white/60">2 hours ago</span>
                </div>
                <p className="font-inter text-white/90">
                  "BMW X5 is due for service in 500 miles. I have found 3 nearby shops with availability next week and pre-negotiated rates."
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-success-400 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-inter font-semibold text-white">Guest Support</span>
                  <span className="text-xs text-white/60">5 minutes ago</span>
                </div>
                <p className="font-inter text-white/90">
                  "Handled Sarah's pickup question via voice call and sent her the digital check-in instructions. Five-star experience delivered."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  </MobileSection>
  );
};

export default FleetCopilotSection; 