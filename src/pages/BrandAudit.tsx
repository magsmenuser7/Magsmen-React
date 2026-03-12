import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, TrendingUp, Award, ArrowRight, BarChart3 } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  options: { text: string; score: number }[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  brandStage: string;
}

const BrandAudit = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    brandStage: ''
  });

  const questions: Question[] = [
    {
      id: 1,
      category: 'Positioning',
      question: 'How clearly is your brand\'s market positioning documented?',
      options: [
        { text: 'Not at all', score: 0 },
        { text: 'Roughly defined', score: 1 },
        { text: 'Clearly defined internally', score: 2 },
        { text: 'Documented & aligned across team', score: 3 },
        { text: 'Documented, aligned, and tested with market', score: 4 }
      ]
    },
    {
      id: 2,
      category: 'Identity Consistency',
      question: 'Does your logo, colors, fonts, and visual style match your intended positioning?',
      options: [
        { text: 'Inconsistent & outdated', score: 0 },
        { text: 'Inconsistent', score: 1 },
        { text: 'Consistent but not distinctive', score: 2 },
        { text: 'Consistent & distinctive', score: 3 },
        { text: 'Consistent, distinctive & adaptive for all formats', score: 4 }
      ]
    },
    {
      id: 3,
      category: 'Messaging Clarity',
      question: 'Can customers and staff easily state what your brand stands for?',
      options: [
        { text: 'No', score: 0 },
        { text: 'Few can', score: 1 },
        { text: 'Most can', score: 2 },
        { text: 'Everyone can', score: 3 },
        { text: 'Everyone can, and it matches our strategy', score: 4 }
      ]
    },
    {
      id: 4,
      category: 'Market Recall',
      question: 'How easily do customers recall your brand over competitors?',
      options: [
        { text: 'Never', score: 0 },
        { text: 'Rarely', score: 1 },
        { text: 'Sometimes', score: 2 },
        { text: 'Often', score: 3 },
        { text: 'Always top-of-mind', score: 4 }
      ]
    },
    {
      id: 5,
      category: 'Digital Experience',
      question: 'Does your website/social presence feel premium and consistent with your strategy?',
      options: [
        { text: 'Very poor', score: 0 },
        { text: 'Poor', score: 1 },
        { text: 'Good but basic', score: 2 },
        { text: 'Strong', score: 3 },
        { text: 'World-class & strategically aligned', score: 4 }
      ]
    },
    {
      id: 6,
      category: 'Internal Alignment',
      question: 'Does your leadership & team live the brand daily?',
      options: [
        { text: 'No alignment', score: 0 },
        { text: 'Some alignment', score: 1 },
        { text: 'Partial alignment', score: 2 },
        { text: 'Strong alignment', score: 3 },
        { text: 'Fully aligned & brand-driven culture', score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to CRM
    console.log('Form submitted:', formData);
    setShowResults(true);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getScoreBand = () => {
    if (totalScore <= 9) {
      return {
        level: 'At Risk',
        color: 'text-[#683FBF]',
        bgColor: 'bg-purple-50',
        icon: <AlertTriangle className="w-8 h-8 text-[#683FBF]" />,
        message: 'Your brand is in the Danger Zone. Positioning and perception gaps could cost you market share. Start with a Brand Clarity Workshop.',
        cta: 'Book Workshop Now',
        ctaColor: 'bg-[#683FBF] hover:bg-[#5a35a3]'
      };
    } else if (totalScore <= 15) {
      return {
        level: 'Emerging',
        color: 'text-[#683FBF]',
        bgColor: 'bg-purple-50',
        icon: <TrendingUp className="w-8 h-8 text-[#683FBF]" />,
        message: 'Your brand has potential but lacks consistency and clarity. With the right strategy, you can own your market in 12 months.',
        cta: 'Book Strategy Call',
        ctaColor: 'bg-[#683FBF] hover:bg-[#5a35a3]'
      };
    } else if (totalScore <= 20) {
      return {
        level: 'Growth Stage',
        color: 'text-[#683FBF]',
        bgColor: 'bg-purple-50',
        icon: <BarChart3 className="w-8 h-8 text-[#683FBF]" />,
        message: 'Strong foundations, but opportunities exist to differentiate further and scale faster.',
        cta: 'Explore Advanced Brand Strategy',
        ctaColor: 'bg-[#683FBF] hover:bg-[#5a35a3]'
      };
    } else {
      return {
        level: 'Iconic Stage',
        color: 'text-[#683FBF]',
        bgColor: 'bg-purple-50',
        icon: <Award className="w-8 h-8 text-[#683FBF]" />,
        message: 'Your brand is well-positioned, but staying iconic requires continuous innovation. Let\'s plan your next leap.',
        cta: 'Partner With Us',
        ctaColor: 'bg-[#683FBF] hover:bg-[#5a35a3]'
      };
    }
  };

  const scoreBand = getScoreBand();

  const resetAudit = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      brandStage: ''
    });
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-white">
        {/* Results Header */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Brand Clarity Score
              </h1>
              <div className="text-6xl font-bold text-[#683FBF] mb-4">
                {percentage}%
              </div>
              <p className="text-xl text-gray-300">
                Based on your responses across 6 key brand dimensions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Score Analysis */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${scoreBand.bgColor} p-8 rounded-2xl text-center mb-12`}
            >
              <div className="flex justify-center mb-6">
                {scoreBand.icon}
              </div>
              <h2 className={`text-3xl font-bold ${scoreBand.color} mb-4`}>
                {scoreBand.level}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {scoreBand.message}
              </p>
              <button className={`${scoreBand.ctaColor} text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center`}>
                {scoreBand.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Detailed Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Detailed Breakdown
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {questions.map((question, index) => (
                  <div key={question.id} className="bg-white p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{question.category}</h4>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-yellow-600 mr-2">
                          {answers[index]}
                        </span>
                        <span className="text-gray-500">/4</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#683FBF] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(answers[index] / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Get a detailed Brand Clarity Report and personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#683FBF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors">
                  Download Full Report
                </button>
                <button 
                  onClick={resetAudit}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Retake Audit
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Almost Done!
              </h2>
              <p className="text-gray-600">
                Get your personalized Brand Clarity Report
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Stage
                </label>
                <select
                  value={formData.brandStage}
                  onChange={(e) => setFormData({...formData, brandStage: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select stage</option>
                  <option value="startup">Startup</option>
                  <option value="growth">Growth</option>
                  <option value="established">Established</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Get My Brand Clarity Report
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Where Does Your Brand Stand?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              In 2 minutes, discover your Brand Clarity Score and your next step to growth.
            </p>
            <div className="bg-yellow-600 text-black px-6 py-3 rounded-full inline-block font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-gray-200 h-2">
        <div 
          className="bg-yellow-600 h-2 transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-purple-100 text-[#683FBF] px-4 py-2 rounded-full inline-block text-sm font-semibold mb-8">
              {questions[currentQuestion].category}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-purple-50 border-2 border-transparent hover:border-purple-200 rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900 group-hover:text-[#683FBF]">
                      {option.text}
                    </span>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#683FBF] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-[#683FBF]"></div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrandAudit;