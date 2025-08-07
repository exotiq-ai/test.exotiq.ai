import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar,
  MessageSquare,
  Globe,
  Zap,
  Bot,
  Phone,
  TrendingUp,
  Wrench,
  MapPin,
  Shield,
  BarChart3,
  DollarSign,
  CreditCard,
  BookOpen,
  Youtube,
  Users,
  Car,
  CheckCircle,
  Star,
  Sparkles,
  Brain,
  Target,
  Clock,
  Award,
  Smartphone,
  Monitor,
  Bell,
  Headphones,
  Settings,
  Eye,
  PieChart,
  TrendingDown,
  FileText,
  Mic
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';
import { softwareApplicationSchema, breadcrumbSchema } from '../data/structuredData';
import { elevenLabsLoader } from '../services/elevenlabsLoader';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  color = 'primary',
  delay = 0 
}: {
  icon: any;
  title: string;
  description: string;
  badge?: string;
  color?: string;
  delay?: number;
}) => (
  <div 
    className={`group bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`flex items-center justify-center w-14 h-14 bg-${color}-100 dark:bg-${color}-900/30 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-7 h-7 text-${color}-600`} />
    </div>
    {badge && (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 mb-3`}>
        {badge}
      </div>
    )}
    <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </div>
);

const FeatureSection = ({ 
  title, 
  subtitle, 
  children, 
  bgColor = 'bg-white dark:bg-dark-900',
  id 
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bgColor?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 ${bgColor}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="font-space font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
        <p className="font-inter text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  </section>
);

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('motoriq');
  const [showConvAI, setShowConvAI] = useState(false);
  const [elevenLabsReady, setElevenLabsReady] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load ElevenLabs script when component mounts
  useEffect(() => {
    elevenLabsLoader.loadScript()
      .then(() => setElevenLabsReady(true))
      .catch(error => console.error('Failed to load ElevenLabs script:', error));
  }, []);

  const tabs = [
    { id: 'motoriq', label: 'MotorIQ', icon: TrendingUp },
    { id: 'pulse', label: 'Pulse', icon: PieChart },
    { id: 'book', label: 'Book', icon: Globe },
    { id: 'vault', label: 'Vault', icon: Shield },
    { id: 'core', label: 'Core', icon: Zap }
  ];

  const scrollToBeta = () => {
    // Navigate to homepage and scroll to beta section
    window.location.href = '/#beta';
  };

  // Scroll-based active tab detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => tab.id);
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16">
      <SEOHead
        title="Platform Features - Complete Fleet Management Solution"
        description="Discover ExotIQ.ai's five powerful modules: MotorIQ for profitability, Pulse for analytics, Book for direct bookings, Vault for compliance, and Core for operations. Built specifically for vehicle rental businesses."
        keywords="fleet management features, AI pricing engine, vehicle analytics, direct booking platform, compliance management, fleet operations dashboard, Turo host tools, rental business automation"
        url="https://exotiq.ai/features"
        structuredData={[
          softwareApplicationSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://exotiq.ai" },
            { name: "Features", url: "https://exotiq.ai/features" }
          ])
        ]}
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Five Modules. One Powerful Platform.
            </div>
            <h1 className="font-space font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight">
              The Complete Platform for
              <span className="block text-primary-600">Modern Fleet Operators</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              From independent hosts to professional fleets, ExotIQ provides everything you need to 
              scale, automate, and optimize your car-sharing business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.location.href = '/survey'}
                className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center min-h-[44px] touch-manipulation"
              >
                <span>Choose your fleet type to access the correct beta survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg transition-all duration-200 hover:scale-105">
                Watch Demo
              </button>
              <Link
                to="/fleetcopilot"
                className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center min-h-[44px] touch-manipulation"
              >
                <span>Try FleetCopilot™ Live</span>
              </Link>
            </div>
          </div>

          {/* Feature Navigation Tabs - Now Sticky */}
          <div className="sticky top-20 z-40 bg-white/95 dark:bg-dark-800/95 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-200 dark:border-dark-700">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 hover:scale-105'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MotorIQ - Profitability Engine */}
      <FeatureSection
        id="motoriq"
        title="MotorIQ: Your Fleet's Profitability Engine"
        subtitle="Real-time revenue insights, automated pricing, and maintenance cost forecasting"
        bgColor="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BarChart3}
            title="Real-Time Revenue Insights"
            description="Track earnings, profit margins, and performance metrics across all platforms in one unified dashboard."
            badge="Live Data"
            color="primary"
            delay={0}
          />
          <FeatureCard
            icon={DollarSign}
            title="Automated Dynamic Pricing"
            description="AI-powered pricing engine adjusts rates based on demand, competition, and market conditions to maximize revenue."
            badge="AI-Powered"
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={Target}
            title="Maintenance Cost Forecasting"
            description="Predict upcoming maintenance costs and budget for repairs before they become expensive emergencies."
            badge="Predictive"
            color="success"
            delay={200}
          />
        </div>

        {/* MotorIQ Dashboard Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 md:p-12 rounded-3xl">
          <h3 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-8 text-center">
            MotorIQ Revenue Dashboard
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-space font-bold text-primary-600 mb-2">$47,250</div>
              <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Monthly Revenue</div>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <TrendingUp className="w-4 h-4 text-success-600" />
                <span className="font-inter text-xs text-success-600">+23%</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-space font-bold text-accent-600 mb-2">89%</div>
              <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Utilization Rate</div>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <TrendingUp className="w-4 h-4 text-success-600" />
                <span className="font-inter text-xs text-success-600">+5%</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-space font-bold text-success-600 mb-2">$1,890</div>
              <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Avg per Vehicle</div>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <TrendingUp className="w-4 h-4 text-success-600" />
                <span className="font-inter text-xs text-success-600">+12%</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-space font-bold text-warning-600 mb-2">32%</div>
              <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Profit Margin</div>
              <div className="flex items-center justify-center space-x-1 mt-1">
                <TrendingUp className="w-4 h-4 text-success-600" />
                <span className="font-inter text-xs text-success-600">+8%</span>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Pulse - Live Analytics */}
      <FeatureSection
        id="pulse"
        title="Pulse: Live Analytics for Smarter Decisions"
        subtitle="Monitor vehicle performance, booking metrics, and forecasts in real-time"
        bgColor="bg-gray-50 dark:bg-dark-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Eye}
            title="Live Vehicle & Booking Metrics"
            description="Real-time visibility into vehicle status, active bookings, and performance across your entire fleet."
            badge="Real-Time"
            color="primary"
            delay={0}
          />
          <FeatureCard
            icon={Star}
            title="Top-Performing Vehicles"
            description="Identify your most profitable vehicles and understand what makes them successful for better acquisition decisions."
            badge="Data-Driven"
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={Brain}
            title="Location & Season Forecasts"
            description="AI-powered predictions based on location trends, seasonal patterns, and local events to optimize your strategy."
            badge="AI Forecasting"
            color="success"
            delay={200}
          />
        </div>

        {/* Pulse Analytics Preview */}
        <div className="mt-16 bg-white dark:bg-dark-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-8 text-center">
            Fleet Performance Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <Eye className="w-6 h-6 text-primary-600" />
                <span className="text-2xl font-space font-bold text-gray-900 dark:text-white">12</span>
              </div>
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">Active Rentals</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Currently on the road</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-6 h-6 text-success-600" />
                <span className="text-2xl font-space font-bold text-gray-900 dark:text-white">98%</span>
              </div>
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">Fleet Health</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">All systems operational</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-6 h-6 text-accent-600" />
                <span className="text-2xl font-space font-bold text-gray-900 dark:text-white">2.3</span>
              </div>
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">Avg Response</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Minutes to guest inquiries</p>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Book - Direct Booking Portal */}
      <FeatureSection
        id="book"
        title="Book: Your Branded Direct Booking Portal"
        subtitle="White-labeled websites, mobile-first design, and commission-free reservations"
        bgColor="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Monitor}
            title="White-Labeled Website for 5+ Car Hosts"
            description="Professional, branded booking websites that establish your fleet as a premium rental business."
            badge="Professional"
            color="primary"
            delay={0}
          />
          <FeatureCard
            icon={Smartphone}
            title="Mobile-First Design"
            description="Optimized for mobile bookings with seamless user experience across all devices and screen sizes."
            badge="Mobile Optimized"
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={DollarSign}
            title="Commission-Free Reservations"
            description="Keep 100% of your revenue with direct bookings. No platform fees, no commission cuts."
            badge="100% Revenue"
            color="success"
            delay={200}
          />
        </div>

        {/* Book Website Preview */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 md:p-12 rounded-3xl">
          <h3 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-8 text-center">
            Your Branded Booking Experience
          </h3>
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Car className="w-4 h-4 text-white" />
              </div>
              <span className="font-space font-bold text-xl text-gray-900 dark:text-white">
                YourFleet<span className="text-primary-600">.com</span>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
                <LazyImage 
                  src="/white tesla model 3 small.jpg" 
                  alt="Tesla Model 3" 
                  className="w-full h-40 object-cover object-center rounded-lg mb-3"
                />
                <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">Tesla Model 3</h4>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">$89/day</p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
                <LazyImage 
                  src="/bmw x5 in front of trees small.jpg" 
                  alt="BMW X5" 
                  className="w-full h-40 object-cover object-center rounded-lg mb-3"
                />
                <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">BMW X5</h4>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">$129/day</p>
              </div>
              <div className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg">
                <LazyImage 
                  src="/White porsche 911 small.jpg" 
                  alt="Porsche 911" 
                  className="w-full h-40 object-cover object-center rounded-lg mb-3"
                />
                <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-1">Porsche 911</h4>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300">$299/day</p>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Vault - Compliance & Documentation */}
      <FeatureSection
        id="vault"
        title="Vault: Peace of Mind for Compliance"
        subtitle="Document storage, expiration alerts, and AI-verified uploads"
        bgColor="bg-gray-50 dark:bg-dark-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={FileText}
            title="Document Storage & Expiration Alerts"
            description="Centralized storage for all important documents with automatic alerts before licenses and insurance expire."
            badge="Never Miss Renewals"
            color="primary"
            delay={0}
          />
          <FeatureCard
            icon={Shield}
            title="Rental Agreements, Insurance, Licenses"
            description="Organize and track all compliance documents including rental agreements, insurance policies, and business licenses."
            badge="Compliance Ready"
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={Brain}
            title="AI-Verified Uploads"
            description="AI automatically verifies document types, extracts key information, and flags any issues or missing requirements."
            badge="AI-Powered"
            color="success"
            delay={200}
          />
        </div>

        {/* Vault Document Management Preview */}
        <div className="mt-16 bg-white dark:bg-dark-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-8 text-center">
            Document Management Center
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-success-600" />
                <div>
                  <div className="font-inter font-semibold text-gray-900 dark:text-white">Commercial Insurance Policy</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-300">Expires: March 15, 2025</div>
                </div>
              </div>
              <div className="px-3 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-full text-xs font-semibold">
                Valid
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-warning-600" />
                <div>
                  <div className="font-inter font-semibold text-gray-900 dark:text-white">Business License</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-300">Expires: January 31, 2025</div>
                </div>
              </div>
              <div className="px-3 py-1 bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 rounded-full text-xs font-semibold">
                Expiring Soon
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="font-inter font-semibold text-gray-900 dark:text-white">Vehicle Registration - Tesla Model 3</div>
                  <div className="font-inter text-sm text-gray-600 dark:text-gray-300">Expires: June 30, 2025</div>
                </div>
              </div>
              <div className="px-3 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-full text-xs font-semibold">
                Valid
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Core - Command Center */}
      <FeatureSection
        id="core"
        title="Core: Your Intelligent Command Center"
        subtitle="Unified dashboard, calendar & CRM, alerts and smart automations"
        bgColor="bg-white dark:bg-dark-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Monitor}
            title="Unified Dashboard"
            description="Single view of your entire operation with customizable widgets and real-time updates across all platforms."
            badge="All-in-One"
            color="primary"
            delay={0}
          />
          <FeatureCard
            icon={Calendar}
            title="Calendar & CRM"
            description="Integrated calendar management and customer relationship tools to streamline bookings and guest communications."
            badge="Integrated"
            color="accent"
            delay={100}
          />
          <FeatureCard
            icon={Bell}
            title="Alerts, Automations & Smart Actions"
            description="Intelligent notifications and automated workflows that handle routine tasks and flag important issues."
            badge="Smart Automation"
            color="success"
            delay={200}
          />
        </div>

        {/* FleetCopilot Integration */}
        <div className="mt-16 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-accent-600/20 rounded-full text-accent-700 dark:text-accent-300 font-semibold text-sm mb-4">
              <Bot className="w-4 h-4 mr-2" />
              Powered by FleetCopilot™ AI
            </div>
            <h3 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-4">
              Your AI Assistant Never Sleeps
            </h3>
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300">
              FleetCopilot™ monitors your operation 24/7, handling routine tasks and alerting you to opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl text-center">
              <Phone className="w-8 h-8 text-accent-600 mx-auto mb-3" />
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-2">Voice Support</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Natural phone conversations with guests</p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl text-center">
              <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-2">Smart Pricing</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Automatic rate optimization</p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl text-center">
              <Wrench className="w-8 h-8 text-warning-600 mx-auto mb-3" />
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-2">Maintenance</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Predictive service alerts</p>
            </div>
            <div className="bg-white dark:bg-dark-700 p-6 rounded-xl text-center">
              <MessageSquare className="w-8 h-8 text-success-600 mx-auto mb-3" />
              <h4 className="font-space font-semibold text-gray-900 dark:text-white mb-2">Communication</h4>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-300">Automated guest messaging</p>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Demo Video Section */}
      <FeatureSection
        title="See ExotIQ in Action"
        subtitle="Experience the power of our integrated platform"
        bgColor="bg-gray-50 dark:bg-dark-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-700 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <div className="mb-8">
              <Youtube className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Platform Demo Video
              </h3>
              <div className="mt-8 text-center">
                <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  🎙️ Voice Assistant Active
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                  Start a natural conversation with FleetCopilot
                </p>
                {elevenLabsReady && (
                  <div id="elevenlabs-convai-container">
                    {/* ElevenLabs ConvAI will be rendered here when script is loaded */}
                  </div>
                )}
                <p className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-4">
                </p>
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-600/20 rounded-full text-primary-400 font-semibold text-sm mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Limited Beta Access Available
          </div>
          <h2 className="font-space font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Fleet?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            Be among the first to experience the future of fleet management. Join our exclusive beta program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/survey'}
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center"
            >
              <span>Choose your fleet type to access the correct beta survey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-dark-900 rounded-lg transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center justify-center touch-manipulation"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}