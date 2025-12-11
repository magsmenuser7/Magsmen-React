import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Users,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      title: 'Head Office',
      address: '4th floor, icon spaces 5-98-57/5, 6th Lane, Brodipet, Beside Brodipet Police Station, Guntur, Andhra Pradesh 522002',
      phone: '+91 90449 10449',
      email: 'connect@magsmen.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
    },
    {
      title: 'Corporate Office',
      address: 'Metro Pillar No. C1762, 3rd Floor, Plot No. 23, H.No. 1/90/2/A/23, Near Image Hospital, Silicon Valley, Madhapur, Hyderabad, Telangana – 500081',
      phone: '+91 90449 10449',
      email: 'connect@magsmen.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM IST'
    },
    {
      title: 'Australia Office',
      address: '1/9, Fifth Avenue, Rowville, VIC, Australia, 3178',
      phone: '+61 406 017 663',
      email: 'connect@magsmen.com.au',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM AEST'
    }
  ];

  const projectTypes = [
    'Brand Strategy & Positioning',
    'Brand Identity & Visual Design',
    'Corporate Rebranding',
    'Personal Brand Consulting',
    'Brand Expresso (90-day transformation)',
    'Digital Brand Experience',
    'Brand Audit & Research',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5-15 Lakhs',
    '₹15-50 Lakhs',
    '₹50 Lakhs - 1 Crore',
    'Above ₹1 Crore',
    'Let\'s discuss'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-4"
        >
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              For urgent matters, call us directly at <strong>+91 90449 10449</strong> or message us on WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-[#683FBF]">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your brand? Let's discuss your vision and create a strategy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919044910449"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919044910449"
                className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:text-black transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Brand Journey</h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your project and we'll provide a customized strategy proposal within 48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                        placeholder="Your full name"
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      placeholder="Tell us about your brand, current challenges, goals, and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#683FBF] text-white py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 24 hours with a customized proposal.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to transform your brand? We're here to help you every step of the way.
                </p>

                {/* Quick Contact */}
                <div className="bg-purple-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919044910449"
                      className="flex items-center text-gray-700 hover:text-[#683FBF] transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3 text-[#683FBF]" />
                      <div>
                        <div className="font-semibold">+91 90449 10449</div>
                        <div className="text-sm text-gray-500">Call us directly</div>
                      </div>
                    </a>
                    <a
                      href="mailto:connect@magsmen.com"
                      className="flex items-center text-gray-700 hover:text-[#683FBF] transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3 text-[#683FBF]" />
                      <div>
                        <div className="font-semibold">connect@magsmen.com</div>
                        <div className="text-sm text-gray-500">Email us anytime</div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919044910449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 mr-3 text-green-600" />
                      <div>
                        <div className="font-semibold">WhatsApp Chat</div>
                        <div className="text-sm text-gray-500">Instant messaging</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 text-[#683FBF] mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">24-Hour Response</div>
                        <div className="text-sm text-gray-600">We'll acknowledge your inquiry within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 text-[#683FBF] mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Strategy Call</div>
                        <div className="text-sm text-gray-600">Free 30-minute consultation to understand your needs</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 mr-3 text-[#683FBF] mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Custom Proposal</div>
                        <div className="text-sm text-gray-600">Tailored strategy and timeline within 48 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600">
              Connect with us across India and Australia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#683FBF] mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{office.title}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600 leading-relaxed">{office.address}</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-[#683FBF] mr-2" />
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-[#683FBF] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-[#683FBF] mr-2" />
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-[#683FBF] transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-[#683FBF] mr-2" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about working with Magsmen
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical brand strategy project take?",
                answer: "Most brand strategy projects take 8-12 weeks, depending on scope. Our Brand Expresso program delivers results in just 90 days."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes, we work with clients globally. We have offices in India and Australia, and serve clients across multiple time zones."
              },
              {
                question: "What's included in your brand strategy service?",
                answer: "Our comprehensive approach includes brand audit, positioning, messaging, visual identity, and implementation guidelines. Each project is customized to your specific needs."
              },
              {
                question: "Can you help with both B2B and B2C brands?",
                answer: "Absolutely. We have extensive experience with both B2B and B2C brands across various industries including FMCG, technology, healthcare, and more."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;