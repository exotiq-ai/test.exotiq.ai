import React, { useState, useEffect } from 'react';
import { MobileSection, MobileContainer } from './MobileOptimizations';
import { Brain, TrendingUp, PieChart, Globe, Shield, Zap, DollarSign, BarChart3, Target, Eye, Star, MessageSquare, Calendar, FileText } from 'lucide-react';
import Card from './ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PlatformModulesSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const modules = [
  {
    id: 'motoriq',
    name: 'MotorIQ',
    icon: TrendingUp,
    color: 'primary',
    description: 'Profitability Engine',
    features: [
      { icon: DollarSign, title: 'AI Dynamic Pricing', text: 'Automatically adjust rates to maximize revenue based on demand and competition' },
      { icon: BarChart3, title: 'Real-Time Revenue Insights', text: 'Track earnings, margins, and performance metrics across all platforms' },
      { icon: Target, title: 'Maintenance Cost Forecasting', text: 'Predict upcoming costs and budget before emergencies happen' }
    ],
    metric: '$1,890',
    metricLabel: 'Average Revenue per Vehicle',
    metricChange: '+12%'
  },
  {
    id: 'pulse',
    name: 'Pulse',
    icon: PieChart,
    color: 'accent',
    description: 'Live Analytics Dashboard',
    features: [
      { icon: Eye, title: 'Live Vehicle Metrics', text: 'Real-time visibility into vehicle status and active bookings' },
      { icon: Star, title: 'Top Performers Analysis', text: 'Identify most profitable vehicles for better acquisition decisions' },
      { icon: Brain, title: 'Location & Season Forecasts', text: 'AI-powered predictions based on trends and patterns' }
    ],
    metric: '89%',
    metricLabel: 'Utilization Rate',
    metricChange: '+5%'
  },
  {
    id: 'book',
    name: 'Book',
    icon: Globe,
    color: 'success',
    description: 'Direct Booking Platform',
    features: [
      { icon: Calendar, title: 'White-Label Booking Site', text: 'Custom-branded booking platform to capture 100% revenue' },
      { icon: DollarSign, title: 'Zero Platform Fees', text: 'Eliminate 25-35% fees by booking directly with customers' },
      { icon: TrendingUp, title: 'SEO Optimized', text: 'Built-in marketing tools to drive organic traffic' }
    ],
    metric: '100%',
    metricLabel: 'Revenue Retention',
    metricChange: 'vs 65-75%'
  },
  {
    id: 'vault',
    name: 'Vault',
    icon: Shield,
    color: 'warning',
    description: 'Compliance & Documentation',
    features: [
      { icon: FileText, title: 'Automated Documentation', text: 'Generate rental agreements, insurance forms, and compliance docs' },
      { icon: Shield, title: 'Regulatory Compliance', text: 'Stay compliant with state and local regulations automatically' },
      { icon: Calendar, title: 'Expiration Tracking', text: 'Never miss renewal deadlines for licenses, insurance, or permits' }
    ],
    metric: '0',
    metricLabel: 'Compliance Violations',
    metricChange: '100% Success'
  },
  {
    id: 'core',
    name: 'Core',
    icon: Zap,
    color: 'primary',
    description: 'Operations Hub',
    features: [
      { icon: MessageSquare, title: 'Unified Inbox', text: 'Manage all guest communication from one central dashboard' },
      { icon: Calendar, title: 'Fleet Calendar', text: 'Visual scheduling across all vehicles and platforms' },
      { icon: Zap, title: 'Workflow Automation', text: 'Automate repetitive tasks like check-ins and follow-ups' }
    ],
    metric: '15+',
    metricLabel: 'Hours Saved Weekly',
    metricChange: 'Per Operator'
  }
];

// Color class mappings for Tailwind
const colorClasses = {
  primary: {
    bg: 'bg-primary-600',
    bgLight: 'bg-primary-100',
    bgDark: 'dark:bg-primary-900/30',
    text: 'text-primary-600',
    textDark: 'dark:text-primary-400',
    gradientFrom: 'from-primary-50',
    gradientTo: 'to-primary-100',
    gradientFromDark: 'dark:from-primary-900/20',
    gradientToDark: 'dark:to-primary-900/30',
  },
  accent: {
    bg: 'bg-accent-600',
    bgLight: 'bg-accent-100',
    bgDark: 'dark:bg-accent-900/30',
    text: 'text-accent-600',
    textDark: 'dark:text-accent-400',
    gradientFrom: 'from-accent-50',
    gradientTo: 'to-accent-100',
    gradientFromDark: 'dark:from-accent-900/20',
    gradientToDark: 'dark:to-accent-900/30',
  },
  success: {
    bg: 'bg-success-600',
    bgLight: 'bg-success-100',
    bgDark: 'dark:bg-success-900/30',
    text: 'text-success-600',
    textDark: 'dark:text-success-400',
    gradientFrom: 'from-success-50',
    gradientTo: 'to-success-100',
    gradientFromDark: 'dark:from-success-900/20',
    gradientToDark: 'dark:to-success-900/30',
  },
  warning: {
    bg: 'bg-warning-600',
    bgLight: 'bg-warning-100',
    bgDark: 'dark:bg-warning-900/30',
    text: 'text-warning-600',
    textDark: 'dark:text-warning-400',
    gradientFrom: 'from-warning-50',
    gradientTo: 'to-warning-100',
    gradientFromDark: 'dark:from-warning-900/20',
    gradientToDark: 'dark:to-warning-900/30',
  },
};

const PlatformModulesSection: React.FC<PlatformModulesSectionProps> = ({ activeTab, setActiveTab }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, once: true });
  const [contentVisible, setContentVisible] = useState(false);
  const activeModule = modules.find(m => m.id === activeTab) || modules[0];
  const activeColorClasses = colorClasses[activeModule.color as keyof typeof colorClasses] || colorClasses.primary;

  // Trigger content animation when tab changes
  useEffect(() => {
    setContentVisible(false);
    const timer = setTimeout(() => setContentVisible(true), 150);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <MobileSection ref={ref} className="bg-white dark:bg-dark-900">
      <div id="platform-features">
        <MobileContainer>
          <div className="text-center mb-12 sm:mb-16">
            <div className={`inline-flex items-center px-3 sm:px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Brain className="w-3 sm:w-4 h-3 sm:w-4 mr-2" />
              The Exotiq Platform
            </div>
            <h2 className={`font-space font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 px-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Five Powerful Modules.
              <span className="block text-primary-600 dark:text-primary-400">One Complete Platform.</span>
            </h2>
            <p className={`font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Each module solves specific operational challenges. Together, they transform your fleet business from manual chaos into automated profit.
            </p>
          </div>
          
          {/* Tabbed Interface */}
          <div className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-gray-100 dark:bg-dark-800 p-2 rounded-2xl">
              {modules.map((module, index) => {
                const Icon = module.icon;
                const moduleColorClasses = colorClasses[module.color as keyof typeof colorClasses] || colorClasses.primary;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveTab(module.id)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300 min-h-[48px] transform hover:scale-105 active:scale-95 ${
                      activeTab === module.id
                        ? `${moduleColorClasses.bg} text-white shadow-lg scale-105`
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                    } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="hidden sm:inline">{module.name}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Tab Content */}
            <Card 
              variant="elevated" 
              padding="lg" 
              className={`transition-all duration-500 ${contentVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            >
              <div className="mb-8">
                <div className={`flex items-center space-x-3 mb-4 transition-all duration-500 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <div className={`w-12 h-12 ${activeColorClasses.bgLight} ${activeColorClasses.bgDark} rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <activeModule.icon className={`w-6 h-6 ${activeColorClasses.text} ${activeColorClasses.textDark} transition-transform duration-300 group-hover:rotate-12`} />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white">
                      {activeModule.name}
                    </h3>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-400">{activeModule.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {activeModule.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div 
                      key={index} 
                      className={`space-y-3 transition-all duration-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${100 + index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3 group">
                        <div className={`w-10 h-10 ${activeColorClasses.bgLight} ${activeColorClasses.bgDark} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <FeatureIcon className={`w-5 h-5 ${activeColorClasses.text} ${activeColorClasses.textDark}`} />
                        </div>
                        <h4 className="font-space font-semibold text-lg text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="font-inter text-gray-600 dark:text-gray-400 pl-13 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>
              
              {/* Metric Highlight */}
              <div 
                className={`bg-gradient-to-r ${activeColorClasses.gradientFrom} ${activeColorClasses.gradientTo} ${activeColorClasses.gradientFromDark} ${activeColorClasses.gradientToDark} p-6 rounded-xl transition-all duration-500 ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="text-center">
                  <div className={`text-4xl font-space font-bold ${activeColorClasses.text} ${activeColorClasses.textDark} mb-2 transition-transform duration-300 group-hover:scale-110`}>
                    {activeModule.metric}
                  </div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {activeModule.metricLabel}
                  </div>
                  <div className={`font-inter text-xs font-semibold ${activeColorClasses.text} ${activeColorClasses.textDark}`}>
                    {activeModule.metricChange}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </MobileContainer>
      </div>
    </MobileSection>
  );
};

export default PlatformModulesSection; 