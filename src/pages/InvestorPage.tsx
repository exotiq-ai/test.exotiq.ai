import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  Download,
  Lock,
  Unlock,
  BarChart3,
  PieChart,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Mail,
  Building,
  Clock,
  Award,
  FileText,
  ExternalLink,
  Phone
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { organizationSchema, breadcrumbSchema } from '../data/structuredData';

interface InvestorFormData {
  name: string;
  email: string;
  company: string;
  investmentRange: string;
  investorType: string;
  industryExperience: string;
  timeline: string;
  contactPreference: string;
}

export default function InvestorPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showDataRoomPopup, setShowDataRoomPopup] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<InvestorFormData>({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    investorType: '',
    industryExperience: '',
    timeline: '',
    contactPreference: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // and trigger the email verification workflow
    setEmailSent(true);
    
    // For demo purposes, we'll simulate email verification after 3 seconds
    setTimeout(() => {
      setIsUnlocked(true);
    }, 3000);
  };

  const simulateEmailVerification = () => {
    setIsUnlocked(true);
  };

  const handleDataRoomRequest = () => {
    setShowDataRoomPopup(true);
  };

  const closeDataRoomPopup = () => {
    setShowDataRoomPopup(false);
  };

  // Data Room Popup
  if (showDataRoomPopup) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 max-w-md mx-4 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-accent-600 rounded-full mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-space font-bold text-2xl text-gray-900 dark:text-white mb-4">
            Thank You!
          </h3>
          <p className="font-inter text-gray-600 dark:text-gray-300 mb-8">
            Thank you from the Exotiq team, we'll be in touch to schedule your access to Exotiq's Data Room.
          </p>
          <button
            onClick={closeDataRoomPopup}
            className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="pt-16">
        <SEOHead
          title="Investor Portal - ExotIQ.ai Investment Opportunity"
          description="Access ExotIQ.ai's investor materials including pitch deck, financial projections, and market analysis. $1.5M raise to capture the $2.8B car sharing market opportunity."
          keywords="ExotIQ.ai investment, fleet management startup, automotive SaaS investment, car sharing market, venture capital opportunity"
          url="https://exotiq.ai/investors"
          noindex={true}
          structuredData={[
            organizationSchema,
            breadcrumbSchema([
              { name: "Home", url: "https://exotiq.ai" },
              { name: "Investors", url: "https://exotiq.ai/investors" }
            ])
          ]}
        />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent-600 rounded-xl mx-auto mb-6">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-space font-bold text-5xl md:text-6xl mb-6">
              Investor Portal
            </h1>
            <p className="font-inter text-xl text-gray-300 mb-8">
              Access detailed financials, market analysis, and investment opportunities in the future of fleet management.
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent-400 mb-8">
              <Lock className="w-5 h-5" />
              <span className="font-inter">Qualified Investors Only</span>
            </div>
          </div>
        </section>

        {/* Access Form */}
        <section className="py-20 bg-white dark:bg-dark-900">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {!emailSent ? (
              <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
                <h2 className="font-space font-bold text-3xl text-gray-900 dark:text-white mb-6 text-center">
                  Investor Qualification
                </h2>
                <p className="font-inter text-gray-600 dark:text-gray-300 mb-8 text-center">
                  Please provide your information to access our investor materials. 
                  You'll receive an email verification link to unlock the portal.
                </p>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company/Fund Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investment Range *
                      </label>
                      <select
                        name="investmentRange"
                        value={formData.investmentRange}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      >
                        <option value="">Select range</option>
                        <option value="25k-100k">$25K - $100K</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Investor Type *
                      </label>
                      <select
                        name="investorType"
                        value={formData.investorType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      >
                        <option value="">Select type</option>
                        <option value="angel">Angel Investor</option>
                        <option value="vc">VC Fund</option>
                        <option value="family-office">Family Office</option>
                        <option value="strategic">Strategic Investor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Automotive/SaaS Experience *
                    </label>
                    <select
                      name="industryExperience"
                      value={formData.industryExperience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="">Select experience</option>
                      <option value="automotive-focused">Automotive Industry Focused</option>
                      <option value="saas-focused">SaaS/Tech Focused</option>
                      <option value="both">Both Automotive & SaaS</option>
                      <option value="marketplace">Marketplace/Platform Experience</option>
                      <option value="other">Other Industry Focus</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Investment Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Ready to invest now</option>
                      <option value="30-days">Within 30 days</option>
                      <option value="90-days">Within 90 days</option>
                      <option value="exploring">Currently exploring</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Verification Email</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-accent-50 dark:bg-accent-900/20 p-8 rounded-2xl text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent-600 rounded-full mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-space font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Verification Email Sent
                </h2>
                <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                  We've sent a verification link to <strong>{formData.email}</strong>. 
                  Please check your email and click the link to access the investor portal.
                </p>
                <button
                  onClick={simulateEmailVerification}
                  className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors"
                >
                  Simulate Email Verification (Demo)
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Unlocked Investor Portal Content
  return (
    <div className="pt-16">
      {/* Welcome Header */}
      <section className="py-12 bg-gradient-to-br from-accent-600 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Unlock className="w-6 h-6 text-accent-200" />
                <span className="font-inter text-accent-200">Verified Investor Portal</span>
              </div>
              <h1 className="font-space font-bold text-4xl mb-2">
                Welcome, {formData.name}
              </h1>
              <p className="font-inter text-accent-100">
                {formData.company} • {formData.investorType}
              </p>
            </div>
            <div className="text-right">
              <div className="font-inter text-sm text-accent-200 mb-1">Last Updated</div>
              <div className="font-inter font-semibold">January 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-4">
              Investment Opportunity
            </h2>
            <p className="font-inter text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ExotIQ is raising $1.5M to build the future of fleet management and capture a $500M+ market opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-space font-bold text-accent-600 mb-2">$1.5M</div>
              <div className="font-inter text-gray-600 dark:text-gray-400">Raising</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space font-bold text-accent-600 mb-2">$2.8B</div>
              <div className="font-inter text-gray-600 dark:text-gray-400">Market by 2027</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space font-bold text-accent-600 mb-2">40%</div>
              <div className="font-inter text-gray-600 dark:text-gray-400">YoY Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-space font-bold text-accent-600 mb-2">100K+</div>
              <div className="font-inter text-gray-600 dark:text-gray-400">Target Hosts</div>
            </div>
          </div>

          {/* Key Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">
                Proven Market Need
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Built by former Turo hosts who experienced the pain firsthand. 20+ beta signups before product launch.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-success-600 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">
                Guaranteed ROI Model
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                25% savings on platform fees plus 15 to 25% maintenance cost reduction equals immediate value proposition.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-600 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-2">
                First-Mover Advantage
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                No direct competitors in car-sharing specific fleet management. Capturing market before incumbents adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-12 text-center">
            Financial Projections
          </h2>

          {/* Revenue Model */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-6">
                SaaS Pricing Tiers
              </h3>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-space font-semibold text-gray-900 dark:text-white">Starter</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Up to 5 vehicles</div>
                  </div>
                  <div className="font-space font-bold text-xl text-primary-600">$49/mo</div>
                </div>
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-space font-semibold text-gray-900 dark:text-white">Growth</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Up to 20 vehicles</div>
                  </div>
                  <div className="font-space font-bold text-xl text-accent-600">$99/mo</div>
                </div>
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-space font-semibold text-gray-900 dark:text-white">Scale</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Up to 50 vehicles</div>
                  </div>
                  <div className="font-space font-bold text-xl text-success-600">$199/mo</div>
                </div>
                <div className="bg-white dark:bg-dark-700 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-space font-semibold text-gray-900 dark:text-white">Enterprise</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">50+ vehicles</div>
                  </div>
                  <div className="font-space font-bold text-xl text-warning-600">Custom</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-6">
                Revenue Streams
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div>
                    <div className="font-inter font-medium text-gray-900 dark:text-white">SaaS Subscriptions (70%)</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Monthly recurring revenue</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-accent-600 rounded-full"></div>
                  <div>
                    <div className="font-inter font-medium text-gray-900 dark:text-white">Transaction Fees (20%)</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">2% on direct bookings</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-success-600 rounded-full"></div>
                  <div>
                    <div className="font-inter font-medium text-gray-900 dark:text-white">Merchant Services (7%)</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Payment processing</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-warning-600 rounded-full"></div>
                  <div>
                    <div className="font-inter font-medium text-gray-900 dark:text-white">Premium Add-ons (3%)</div>
                    <div className="font-inter text-sm text-gray-600 dark:text-gray-400">Book, Pulse, Vault modules</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Projections */}
          <div className="bg-white dark:bg-dark-700 p-8 rounded-2xl">
            <h3 className="font-space font-semibold text-2xl text-gray-900 dark:text-white mb-6 text-center">
              3-Year Growth Projection
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-dark-600">
                    <th className="font-space font-semibold text-left py-3 text-gray-900 dark:text-white">Metric</th>
                    <th className="font-space font-semibold text-center py-3 text-gray-900 dark:text-white">Year 1</th>
                    <th className="font-space font-semibold text-center py-3 text-gray-900 dark:text-white">Year 2</th>
                    <th className="font-space font-semibold text-center py-3 text-gray-900 dark:text-white">Year 3</th>
                  </tr>
                </thead>
                <tbody className="font-inter">
                  <tr className="border-b border-gray-100 dark:border-dark-600">
                    <td className="py-3 text-gray-900 dark:text-white">Active Customers</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">50</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">250</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">500</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-dark-600">
                    <td className="py-3 text-gray-900 dark:text-white">Monthly Revenue</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$4,500</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$22,500</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$45,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-dark-600">
                    <td className="py-3 text-gray-900 dark:text-white">Annual Revenue</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$54K</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$270K</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">$540K</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-900 dark:text-white">Gross Margin</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">45%</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">65%</td>
                    <td className="py-3 text-center text-gray-600 dark:text-gray-300">70%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { name: 'Gregory Ringler', role: 'Founder & CEO', icon: Users },
              { name: 'Scott Wollaston', role: 'CFO', icon: BarChart3 },
              { name: 'Mike Looney', role: 'CMO', icon: Target },
              { name: 'Didi Patel', role: 'Lead Developer', icon: Zap },
              { name: 'Sarah Jane', role: 'Marketing Manager', icon: TrendingUp }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 dark:bg-dark-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <member.icon className="w-8 h-8 text-gray-400" />
                </div>
                <div className="font-space font-semibold text-lg text-gray-900 dark:text-white mb-1">
                  {member.name}
                </div>
                <div className="font-inter text-sm text-gray-600 dark:text-gray-400">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
          <p className="font-inter text-center text-gray-500 dark:text-gray-400 mt-8">
            Detailed team bios and credentials available in pitch deck
          </p>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-16 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-12 text-center">
            Competitive Advantage
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-dark-700 rounded-2xl overflow-hidden">
              <thead className="bg-accent-600 text-white">
                <tr>
                  <th className="font-space font-semibold text-left p-6">Feature</th>
                  <th className="font-space font-semibold text-center p-6">ExotIQ</th>
                  <th className="font-space font-semibold text-center p-6">Generic Fleet Tools</th>
                  <th className="font-space font-semibold text-center p-6">Spreadsheets</th>
                </tr>
              </thead>
              <tbody className="font-inter">
                <tr className="border-b border-gray-200 dark:border-dark-600">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">Car-sharing Platform Integration</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">Limited</td>
                  <td className="p-6 text-center text-gray-400">Manual</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-800">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">AI-Powered Pricing</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">Basic</td>
                  <td className="p-6 text-center text-gray-400">None</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-dark-600">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">Host-Specific Analytics</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">Generic</td>
                  <td className="p-6 text-center text-gray-400">None</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-800">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">Direct Booking Tools</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">None</td>
                  <td className="p-6 text-center text-gray-400">None</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-dark-600">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">Built by Former Hosts</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">No</td>
                  <td className="p-6 text-center text-gray-400">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-800">
                  <td className="p-6 font-medium text-gray-900 dark:text-white">Guaranteed ROI</td>
                  <td className="p-6 text-center"><CheckCircle className="w-6 h-6 text-success-600 mx-auto" /></td>
                  <td className="p-6 text-center text-gray-400">No</td>
                  <td className="p-6 text-center text-gray-400">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pitch Deck Section */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl text-gray-900 dark:text-white mb-6">
            Pitch Deck & Materials
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-12">
            Access our complete investor materials including detailed financial projections, 
            market analysis, and product roadmap.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-accent-600 rounded-xl mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-4">
                Investor Pitch Deck
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                Complete 15-slide presentation covering market opportunity, product demo, 
                financial projections, and team credentials.
              </p>
              <button className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors flex items-center space-x-2 mx-auto">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <p className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-2">
                Available when ready
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-space font-semibold text-xl text-gray-900 dark:text-white mb-4">
                Financial Model
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-300 mb-6">
                Detailed 5-year financial projections including revenue forecasts, 
                unit economics, and sensitivity analysis.
              </p>
              <button 
                onClick={handleDataRoomRequest}
                className="font-poppins font-bold text-sm uppercase tracking-wide px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center space-x-2 mx-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Data Room Request</span>
              </button>
              <p className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-2">
                Google Sheets access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-br from-accent-600 to-accent-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space font-bold text-4xl mb-6">
            Ready to Invest?
          </h2>
          <p className="font-inter text-xl mb-8 opacity-90">
            Join us in building the future of fleet management. Let's schedule a call to discuss your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/hello-exotiq/30min?back=1&month=2025-08', '_blank')}
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 bg-white text-accent-600 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center min-h-[44px] touch-manipulation"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Call</span>
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="font-poppins font-bold text-sm uppercase tracking-wide px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-accent-600 rounded-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 justify-center min-h-[44px] touch-manipulation"
            >
              <Mail className="w-5 h-5" />
              <span>Send Questions</span>
            </button>
          </div>
          <p className="font-inter text-sm opacity-75 mt-6">
            Confidential and proprietary information. For qualified investors only.
          </p>
        </div>
      </section>
    </div>
  );
}