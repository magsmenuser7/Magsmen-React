import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  GraduationCap, 
  Building, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  Award
} from 'lucide-react';

const PartnerWithUs = () => {
  const [activeTab, setActiveTab] = useState('vendors');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    experience: '',
    services: '',
    portfolio: '',
    message: ''
  });

  const tabs = [
    {
      id: 'vendors',
      title: 'Vendor Partnerships',
      icon: <Building className="w-5 h-5" />,
      description: 'Join our network of trusted service providers'
    },
    {
      id: 'consultants',
      title: 'External Consultants',
      icon: <Users className="w-5 h-5" />,
      description: 'Collaborate with us on strategic projects'
    },
    {
      id: 'advisors',
      title: 'Academic Advisors',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Share your expertise and insights'
    }
  ];

  const partnershipContent = {
    vendors: {
      title: 'Vendor Partnership Program',
      subtitle: 'Become a trusted partner in our brand transformation ecosystem',
      benefits: [
        'Access to high-value projects with premium clients',
        'Consistent project flow and long-term partnerships',
        'Co-branding opportunities and joint marketing',
        'Priority consideration for new opportunities',
        'Professional development and training programs',
        'Networking with industry leaders and experts'
      ],
      criteria: [
        'Minimum 3 years of relevant industry experience',
        'Proven track record with portfolio of successful projects',
        'Strong client testimonials and references',
        'Commitment to quality and deadline adherence',
        'Professional certifications in your domain',
        'Alignment with Magsmen\'s values and standards'
      ],
      services: [
        'Web Development & Digital Solutions',
        'Video Production & Photography',
        'Print Design & Production',
        'Market Research & Analytics',
        'Public Relations & Media',
        'Event Management & Activations'
      ]
    },
    consultants: {
      title: 'External Consultant Network',
      subtitle: 'Join our elite network of strategic consultants and thought leaders',
      benefits: [
        'Collaborate on Fortune 500 and high-growth projects',
        'Flexible engagement models and competitive compensation',
        'Access to Magsmen\'s proprietary frameworks and tools',
        'Thought leadership opportunities and co-authoring',
        'Professional networking and industry connections',
        'Continuous learning and skill development programs'
      ],
      criteria: [
        'Minimum 5 years of consulting or industry experience',
        'Expertise in specific domains (strategy, digital, operations)',
        'Advanced degree (MBA, PhD) or equivalent experience',
        'Strong analytical and problem-solving capabilities',
        'Excellent communication and presentation skills',
        'Availability for project-based engagements'
      ],
      services: [
        'Strategic Planning & Business Model Innovation',
        'Digital Transformation & Technology Strategy',
        'Operations Excellence & Process Optimization',
        'Financial Modeling & Investment Strategy',
        'International Market Entry & Expansion',
        'Organizational Development & Change Management'
      ]
    },
    advisors: {
      title: 'Academic Advisory Board',
      subtitle: 'Shape the future of brand strategy through academic collaboration',
      benefits: [
        'Influence curriculum development and research initiatives',
        'Access to real-world case studies and data',
        'Speaking opportunities at industry conferences',
        'Collaboration on research papers and publications',
        'Mentorship opportunities with emerging professionals',
        'Advisory fees and research grants'
      ],
      criteria: [
        'PhD or equivalent terminal degree in relevant field',
        'Minimum 10 years of academic or industry experience',
        'Published research in marketing, branding, or strategy',
        'Active involvement in academic or professional associations',
        'Commitment to advancing brand strategy knowledge',
        'Availability for quarterly advisory meetings'
      ],
      services: [
        'Brand Strategy & Consumer Behavior Research',
        'Marketing Analytics & Data Science',
        'Organizational Psychology & Leadership',
        'International Business & Cross-Cultural Studies',
        'Innovation Management & Entrepreneurship',
        'Sustainability & Social Impact Branding'
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    console.log('Partnership application submitted:', { ...formData, partnershipType: activeTab });
    alert('Application submitted successfully! We\'ll review your application and get back to you within 5 business days.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      experience: '',
      services: '',
      portfolio: '',
      message: ''
    });
  };

  const currentContent = partnershipContent[activeTab as keyof typeof partnershipContent];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#683FBF] p-4 rounded-full">
                <Handshake className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner <span className="text-[#683FBF]">With Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join India's leading brand consultancy network. Together, we'll transform businesses into iconic brands and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partnership-types"
                className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
              >
                Explore Partnerships
              </a>
              <a
                href="#apply"
                className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 rounded-lg font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Magsmen?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a network that values excellence, innovation, and mutual growth in the brand strategy ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-[#683FBF]" />,
                title: 'Premium Clients',
                description: 'Work with Fortune 500 companies and high-growth Indian brands'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#683FBF]" />,
                title: 'Growth Opportunities',
                description: 'Scale your business through consistent, high-value projects'
              },
              {
                icon: <Globe className="w-8 h-8 text-[#683FBF]" />,
                title: 'Global Reach',
                description: 'Access to international markets and cross-border projects'
              },
              {
                icon: <Award className="w-8 h-8 text-[#683FBF]" />,
                title: 'Industry Recognition',
                description: 'Co-branding opportunities and thought leadership platforms'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 p-6 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <div className="text-[#683FBF] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600">
              Choose the partnership model that aligns with your expertise and goals
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#683FBF] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2 hidden sm:inline">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
              <p className="text-lg text-gray-600">{currentContent.subtitle}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#683FBF] mr-2" />
                  Benefits
                </h4>
                <ul className="space-y-3">
                  {currentContent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#683FBF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Criteria */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-[#683FBF] mr-2" />
                  Criteria
                </h4>
                <ul className="space-y-3">
                  {currentContent.criteria.map((criterion, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#683FBF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="w-6 h-6 text-[#683FBF] mr-2" />
                  Focus Areas
                </h4>
                <ul className="space-y-3">
                  {currentContent.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#683FBF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for Partnership</h2>
              <p className="text-lg text-gray-600">
                Ready to join our network? Tell us about yourself and your expertise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services/Expertise *
                </label>
                <input
                  type="text"
                  required
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  placeholder="e.g., Brand Strategy, Web Development, Market Research"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio/Work Samples URL
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  placeholder="https://"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to partner with Magsmen? *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                  placeholder="Tell us about your experience, what you can bring to our partnership, and why you're interested in working with us..."
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-[#683FBF] text-white py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors flex items-center justify-center"
                >
                  Submit Partnership Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                We'll review your application and get back to you within 5 business days.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Partner Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#683FBF] mb-2">50+</div>
                <div className="text-lg font-semibold mb-2">Active Partners</div>
                <p className="text-gray-300 text-sm">
                  Trusted vendors, consultants, and advisors in our network
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#683FBF] mb-2">200+</div>
                <div className="text-lg font-semibold mb-2">Joint Projects</div>
                <p className="text-gray-300 text-sm">
                  Successful collaborations delivering exceptional results
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#683FBF] mb-2">95%</div>
                <div className="text-lg font-semibold mb-2">Partner Satisfaction</div>
                <p className="text-gray-300 text-sm">
                  Partners rate their experience as excellent or outstanding
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;