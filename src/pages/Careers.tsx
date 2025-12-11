
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for modal animations
import {
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Award,
  Heart,
  Coffee,
  Laptop,
  Upload,
  ArrowRight,
  CheckCircle,
  X // Import X icon for the close button
} from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    // Removed 'position' from initial state, it will be set when modal opens
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null
  });

  // State to hold the job title for the modal
  const [applyingForPositionTitle, setApplyingForPositionTitle] = useState<string>('');

  const openPositions = [
    {
      id: 1,
      title: 'Senior Brand Strategist',
      department: 'Strategy',
      location: 'Guntur, AP',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Lead brand strategy development for Fortune 500 and high-growth Indian companies. Drive positioning, messaging, and go-to-market strategies.',
      responsibilities: [
        'Develop comprehensive brand strategies for diverse clients',
        'Conduct market research and competitive analysis',
        'Lead client workshops and strategy presentations',
        'Mentor junior strategists and collaborate with creative teams',
        'Drive thought leadership through case studies and insights'
      ],
      requirements: [
        'MBA in Marketing or equivalent experience',
        '4-6 years in brand strategy or management consulting',
        'Experience with Indian and international markets',
        'Strong analytical and presentation skills',
        'Portfolio of successful brand transformations'
      ]
    },
    {
      id: 2,
      title: 'Client Partner',
      department: 'Business Development',
      location: 'Hyderabad, TS',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain relationships with key clients while identifying new business opportunities in the Indian market.',
      responsibilities: [
        'Manage key client relationships and project delivery',
        'Identify and pursue new business opportunities',
        'Collaborate with strategy teams on client solutions',
        'Develop proposals and lead client presentations',
        'Ensure client satisfaction and project success'
      ],
      requirements: [
        'Bachelor\'s degree in Business or Marketing',
        '3-5 years in client management or business development',
        'Strong relationship building and communication skills',
        'Experience in consulting or agency environment',
        'Understanding of Indian business landscape'
      ]
    },
    {
      id: 3,
      title: 'Visual Brand Designer',
      department: 'Creative',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create compelling visual identities and brand experiences that bring strategic positioning to life across all touchpoints.',
      responsibilities: [
        'Design brand identities, logos, and visual systems',
        'Create marketing materials and digital assets',
        'Collaborate with strategists on brand expression',
        'Maintain brand consistency across all deliverables',
        'Present design concepts to clients and stakeholders'
      ],
      requirements: [
        'Bachelor\'s in Design or equivalent portfolio',
        '2-4 years in brand design or visual identity',
        'Proficiency in Adobe Creative Suite and Figma',
        'Strong portfolio of brand identity projects',
        'Understanding of Indian design sensibilities'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      department: 'Digital',
      location: 'Guntur, AP',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Execute digital marketing strategies that amplify brand presence and drive engagement across digital channels.',
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence and content strategy',
        'Analyze digital performance and optimize campaigns',
        'Collaborate with creative teams on digital assets',
        'Stay updated on digital marketing trends and tools'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing or Digital Media',
        '2-3 years in digital marketing or social media',
        'Experience with Google Ads, Facebook Ads, LinkedIn',
        'Strong analytical skills and data-driven approach',
        'Creative thinking and content creation abilities'
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear progression paths and mentorship from industry leaders'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Culture',
      description: 'Work with passionate professionals who value creativity and innovation'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Recognition',
      description: 'Performance-based rewards and public recognition for great work'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and wellness programs'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Great Workspace',
      description: 'Modern offices with all amenities and unlimited coffee'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Latest Tools',
      description: 'Access to cutting-edge software and technology'
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationForm({ ...applicationForm, resume: file });
    }
  };

  const openApplicationModal = (jobTitle: string) => {
    setApplyingForPositionTitle(jobTitle); // Set the specific job title
    setApplicationForm(prev => ({ // Reset form fields and set the position
      ...prev,
      name: '', email: '', phone: '', experience: '',
      portfolio: '', coverLetter: '', resume: null,
    }));
    setIsModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
    setApplyingForPositionTitle('');
    // Optionally reset form here if not done when opening
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    console.log('Application submitted for:', applyingForPositionTitle, applicationForm);
    alert(`Application for ${applyingForPositionTitle} submitted successfully! We'll get back to you soon.`);
    closeApplicationModal(); // Close modal after submission
  };

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
              Join <span className="text-[#683FBF]">Magsmen</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build India's most iconic brands. Join a team of strategic thinkers, creative minds, and passionate professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 rounded-lg font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
              >
                Learn About Our Culture
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Magsmen */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Magsmen?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just building brands – we're building careers, fostering innovation, and creating impact that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-purple-50 transition-colors group"
              >
                <div className="text-[#683FBF] group-hover:text-[#5a35a3] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your next career opportunity with India's leading brand consultancy
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        className="bg-[#683FBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((requirement, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        {/* Changed this button to open the modal */}
                        <button
                          onClick={() => openApplicationModal(job.title)}
                          className="bg-[#683FBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors inline-flex items-center"
                        >
                          Apply for this Position
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={closeApplicationModal} // Close modal when clicking outside form
          >
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" // Added max-h and overflow for scrollable content
              onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                onClick={closeApplicationModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Apply for {applyingForPositionTitle}
                  </h2>
                  <p className="text-lg text-gray-600">
                    We're excited to learn more about you and your experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        required
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        required
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience
                      </label>
                      <select
                        id="yearsExperience"
                        value={applicationForm.experience}
                        onChange={(e) => setApplicationForm({ ...applicationForm, experience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/LinkedIn URL
                    </label>
                    <input
                      type="url"
                      id="portfolioUrl"
                      value={applicationForm.portfolio}
                      onChange={(e) => setApplicationForm({ ...applicationForm, portfolio: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      required
                      rows={6}
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent resize-y"
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    />
                  </div>

                  {/* Resume Upload Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#683FBF] transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600 mb-2">
                        {applicationForm.resume ? applicationForm.resume.name : 'Upload your resume'}
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="bg-[#683FBF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors cursor-pointer"
                      >
                        Choose File
                      </label>
                      <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors flex-1"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={closeApplicationModal} // Close modal on Cancel
                      className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Culture & Values */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Culture & Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We believe the best ideas come from diverse perspectives working together.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p className="text-gray-300">
                  Continuous learning and development are at the heart of everything we do.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in every project and celebrate achievements together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;



















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   MapPin, 
//   Clock, 
//   Users, 
//   TrendingUp, 
//   Award, 
//   Heart, 
//   Coffee, 
//   Laptop,
//   Upload,
//   ArrowRight,
//   CheckCircle
// } from 'lucide-react';

// const Careers = () => {
//   const [selectedJob, setSelectedJob] = useState<number | null>(null);
//   const [applicationForm, setApplicationForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     portfolio: '',
//     coverLetter: '',
//     resume: null as File | null
//   });

//   const openPositions = [
//     {
//       id: 1,
//       title: 'Senior Brand Strategist',
//       department: 'Strategy',
//       location: 'Guntur, AP',
//       type: 'Full-time',
//       experience: '4-6 years',
//       description: 'Lead brand strategy development for Fortune 500 and high-growth Indian companies. Drive positioning, messaging, and go-to-market strategies.',
//       responsibilities: [
//         'Develop comprehensive brand strategies for diverse clients',
//         'Conduct market research and competitive analysis',
//         'Lead client workshops and strategy presentations',
//         'Mentor junior strategists and collaborate with creative teams',
//         'Drive thought leadership through case studies and insights'
//       ],
//       requirements: [
//         'MBA in Marketing or equivalent experience',
//         '4-6 years in brand strategy or management consulting',
//         'Experience with Indian and international markets',
//         'Strong analytical and presentation skills',
//         'Portfolio of successful brand transformations'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Client Partner',
//       department: 'Business Development',
//       location: 'Hyderabad, TS',
//       type: 'Full-time',
//       experience: '3-5 years',
//       description: 'Build and maintain relationships with key clients while identifying new business opportunities in the Indian market.',
//       responsibilities: [
//         'Manage key client relationships and project delivery',
//         'Identify and pursue new business opportunities',
//         'Collaborate with strategy teams on client solutions',
//         'Develop proposals and lead client presentations',
//         'Ensure client satisfaction and project success'
//       ],
//       requirements: [
//         'Bachelor\'s degree in Business or Marketing',
//         '3-5 years in client management or business development',
//         'Strong relationship building and communication skills',
//         'Experience in consulting or agency environment',
//         'Understanding of Indian business landscape'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Visual Brand Designer',
//       department: 'Creative',
//       location: 'Remote',
//       type: 'Full-time',
//       experience: '2-4 years',
//       description: 'Create compelling visual identities and brand experiences that bring strategic positioning to life across all touchpoints.',
//       responsibilities: [
//         'Design brand identities, logos, and visual systems',
//         'Create marketing materials and digital assets',
//         'Collaborate with strategists on brand expression',
//         'Maintain brand consistency across all deliverables',
//         'Present design concepts to clients and stakeholders'
//       ],
//       requirements: [
//         'Bachelor\'s in Design or equivalent portfolio',
//         '2-4 years in brand design or visual identity',
//         'Proficiency in Adobe Creative Suite and Figma',
//         'Strong portfolio of brand identity projects',
//         'Understanding of Indian design sensibilities'
//       ]
//     },
//     {
//       id: 4,
//       title: 'Digital Marketing Specialist',
//       department: 'Digital',
//       location: 'Guntur, AP',
//       type: 'Full-time',
//       experience: '2-3 years',
//       description: 'Execute digital marketing strategies that amplify brand presence and drive engagement across digital channels.',
//       responsibilities: [
//         'Develop and execute digital marketing campaigns',
//         'Manage social media presence and content strategy',
//         'Analyze digital performance and optimize campaigns',
//         'Collaborate with creative teams on digital assets',
//         'Stay updated on digital marketing trends and tools'
//       ],
//       requirements: [
//         'Bachelor\'s degree in Marketing or Digital Media',
//         '2-3 years in digital marketing or social media',
//         'Experience with Google Ads, Facebook Ads, LinkedIn',
//         'Strong analytical skills and data-driven approach',
//         'Creative thinking and content creation abilities'
//       ]
//     }
//   ];

//   const benefits = [
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: 'Career Growth',
//       description: 'Clear progression paths and mentorship from industry leaders'
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: 'Collaborative Culture',
//       description: 'Work with passionate professionals who value creativity and innovation'
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: 'Recognition',
//       description: 'Performance-based rewards and public recognition for great work'
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: 'Work-Life Balance',
//       description: 'Flexible working arrangements and wellness programs'
//     },
//     {
//       icon: <Coffee className="w-6 h-6" />,
//       title: 'Great Workspace',
//       description: 'Modern offices with all amenities and unlimited coffee'
//     },
//     {
//       icon: <Laptop className="w-6 h-6" />,
//       title: 'Latest Tools',
//       description: 'Access to cutting-edge software and technology'
//     }
//   ];

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setApplicationForm({ ...applicationForm, resume: file });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, this would submit to your backend
//     console.log('Application submitted:', applicationForm);
//     alert('Application submitted successfully! We\'ll get back to you soon.');
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Join <span className="text-[#683FBF]">Magsmen</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Help us build India's most iconic brands. Join a team of strategic thinkers, creative minds, and passionate professionals.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#open-positions"
//                 className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
//               >
//                 View Open Positions
//               </a>
//               <a
//                 href="#culture"
//                 className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 rounded-lg font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
//               >
//                 Learn About Our Culture
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Join Magsmen */}
//       <section id="culture" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Magsmen?</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We're not just building brands – we're building careers, fostering innovation, and creating impact that matters.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-gray-50 p-6 rounded-xl hover:bg-purple-50 transition-colors group"
//               >
//                 <div className="text-[#683FBF] group-hover:text-[#5a35a3] mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="open-positions" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
//             <p className="text-lg text-gray-600">
//               Find your next career opportunity with India's leading brand consultancy
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {openPositions.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="p-6">
//                   <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                     <div className="flex-1">
//                       <div className="flex flex-wrap items-center gap-4 mb-3">
//                         <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
//                         <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
//                           {job.department}
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-4">{job.description}</p>
//                       <div className="flex flex-wrap gap-4 text-sm text-gray-500">
//                         <div className="flex items-center">
//                           <MapPin className="w-4 h-4 mr-1" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center">
//                           <Clock className="w-4 h-4 mr-1" />
//                           {job.type}
//                         </div>
//                         <div className="flex items-center">
//                           <Users className="w-4 h-4 mr-1" />
//                           {job.experience}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="mt-4 lg:mt-0 lg:ml-6">
//                       <button
//                         onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
//                         className="bg-[#683FBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors"
//                       >
//                         {selectedJob === job.id ? 'Hide Details' : 'View Details'}
//                       </button>
//                     </div>
//                   </div>

//                   {selectedJob === job.id && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="mt-6 pt-6 border-t border-gray-200"
//                     >
//                       <div className="grid md:grid-cols-2 gap-8">
//                         <div>
//                           <h4 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h4>
//                           <ul className="space-y-2">
//                             {job.responsibilities.map((responsibility, idx) => (
//                               <li key={idx} className="flex items-start">
//                                 <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 <span className="text-gray-600">{responsibility}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <h4 className="text-lg font-bold text-gray-900 mb-3">Requirements</h4>
//                           <ul className="space-y-2">
//                             {job.requirements.map((requirement, idx) => (
//                               <li key={idx} className="flex items-start">
//                                 <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
//                                 <span className="text-gray-600">{requirement}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="mt-6 pt-6 border-t border-gray-200">
//                         <button
//                           onClick={() => setApplicationForm({ ...applicationForm, position: job.title })}
//                           className="bg-[#683FBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors inline-flex items-center"
//                         >
//                           Apply for this Position
//                           <ArrowRight className="ml-2 w-5 h-5" />
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       {applicationForm.position && (
//         <section className="py-20 bg-white">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   Apply for {applicationForm.position}
//                 </h2>
//                 <p className="text-lg text-gray-600">
//                   We're excited to learn more about you and your experience.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={applicationForm.name}
//                       onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={applicationForm.email}
//                       onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       required
//                       value={applicationForm.phone}
//                       onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Years of Experience
//                     </label>
//                     <select
//                       value={applicationForm.experience}
//                       onChange={(e) => setApplicationForm({ ...applicationForm, experience: e.target.value })}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     >
//                       <option value="">Select experience</option>
//                       <option value="0-1">0-1 years</option>
//                       <option value="1-3">1-3 years</option>
//                       <option value="3-5">3-5 years</option>
//                       <option value="5-8">5-8 years</option>
//                       <option value="8+">8+ years</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Portfolio/LinkedIn URL
//                   </label>
//                   <input
//                     type="url"
//                     value={applicationForm.portfolio}
//                     onChange={(e) => setApplicationForm({ ...applicationForm, portfolio: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     placeholder="https://"
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cover Letter *
//                   </label>
//                   <textarea
//                     required
//                     rows={6}
//                     value={applicationForm.coverLetter}
//                     onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//                     placeholder="Tell us why you're interested in this role and what makes you a great fit..."
//                   />
//                 </div>

//                 <div className="mt-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Resume *
//                   </label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#683FBF] transition-colors">
//                     <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                     <p className="text-gray-600 mb-2">
//                       {applicationForm.resume ? applicationForm.resume.name : 'Upload your resume'}
//                     </p>
//                     <input
//                       type="file"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleFileUpload}
//                       className="hidden"
//                       id="resume-upload"
//                     />
//                     <label
//                       htmlFor="resume-upload"
//                       className="bg-[#683FBF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors cursor-pointer"
//                     >
//                       Choose File
//                     </label>
//                     <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX (max 5MB)</p>
//                   </div>
//                 </div>

//                 <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                   <button
//                     type="submit"
//                     className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors flex-1"
//                   >
//                     Submit Application
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setApplicationForm({ ...applicationForm, position: '' })}
//                     className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Culture & Values */}
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h2 className="text-4xl font-bold mb-8">Our Culture & Values</h2>
//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               <div className="text-center">
//                 <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Collaboration</h3>
//                 <p className="text-gray-300">
//                   We believe the best ideas come from diverse perspectives working together.
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <TrendingUp className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Growth</h3>
//                 <p className="text-gray-300">
//                   Continuous learning and development are at the heart of everything we do.
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-[#683FBF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">Excellence</h3>
//                 <p className="text-gray-300">
//                   We strive for excellence in every project and celebrate achievements together.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;