import React, { useState, useEffect } from 'react';

// --- Types ---
interface FormData {
  websiteUrl: string;
  businessType: string;
  brandDescription: string;
  designQuality: number;
  communicationEffectiveness: number;
  strategyAlignment: number;
  marketingBudget: string;
  activePlatforms: string[];
  additionalInfo: string;
}

const INITIAL_DATA: FormData = {
  websiteUrl: '',
  businessType: '',
  brandDescription: '',
  designQuality: 4,
  communicationEffectiveness: 5,
  strategyAlignment: 4,
  marketingBudget: '$0 - $1,000',
  activePlatforms: [],
  additionalInfo: ''
};

// --- Styles Injection ---
const GlobalStyles = () => (
  <style>{`
    /* --- Base Reset & Font --- */
    body {
        background: #f8f9fa;
        font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        color: #1f2937;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* INCREASED BASE FONT SIZE */
        font-size: 18px; 
        line-height: 1.6;
    }
    *, *::before, *::after { box-sizing: inherit; }

    /* --- Utilities & Grid (Full Width & Responsive) --- */
    /* INCREASED WIDTH TO FILL SCREEN */
    .container { width: 95%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; max-width: 1400px; }
    
    .row { display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px; }
    .col-md-4, .col-md-6, .col-6 { position: relative; width: 100%; padding-right: 15px; padding-left: 15px; }
    .col-6 { flex: 0 0 50%; max-width: 50%; }
    
    @media (min-width: 768px) {
        .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
        /* This is used for the 2-column layout request */
        .col-md-6 { flex: 0 0 50%; max-width: 50%; }
    }

    .d-flex { display: flex; }
    .d-block { display: block; }
    .flex-column { flex-direction: column; }
    .align-items-center { align-items: center; }
    .justify-content-center { justify-content: center; }
    .justify-content-between { justify-content: space-between; }
    .text-center { text-align: center; }
    .text-end { text-align: right; }
    .text-muted { color: #6b7280; }
    
    .mb-0 { margin-bottom: 0; }
    .mb-1 { margin-bottom: 0.25rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 1rem; }
    .mb-4 { margin-bottom: 1.5rem; }
    .mt-2 { margin-top: 0.5rem; }
    .mt-3 { margin-top: 1rem; }
    .mt-4 { margin-top: 1.5rem; }
    .mt-5 { margin-top: 3rem; }
    .me-1 { margin-right: 0.25rem; }
    .me-2 { margin-right: 0.5rem; }
    .ms-auto { margin-left: auto; }
    
    .fw-bold { font-weight: 700; }
    .g-4 { margin-top: -1.5rem; margin-right: -1.5rem; }
    .g-4 > * { padding-top: 1.5rem; padding-right: 1.5rem; }
    .gy-3 { margin-top: -1rem; }
    .gy-3 > * { padding-top: 1rem; }

    /* --- Core Components --- */
    .section-container {
        padding: 4rem 1rem 2rem;
        animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Hero */
    .hero { text-align: center; }
    /* INCREASED HERO FONT SIZE */
    .hero h1 { font-weight: 700; font-size: 3.5rem; margin-bottom: 0.5rem; margin-top: 0; line-height: 1.2; }
    .hero .subtitle { font-size: 1.25rem; color: #6b7280; margin-bottom: 1.5rem; }
    
    .badge-powered {
        display: inline-block; background: #1f2937; color: #fff;
        padding: 0.4rem 1rem; border-radius: 999px;
        font-size: 0.85rem; font-weight: 600; letter-spacing: 0.5px;
        margin-bottom: 1.5rem;
    }
    
    .audit-card {
        max-width: 900px; /* Wider card */
        margin: 0 auto; background: #fff;
        border-radius: 1rem; padding: 2.5rem 2rem;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08); position: relative;
    }
    
    .feature-icon {
        width: 64px; height: 64px; /* Larger Icons */
        background: #f1f5f9;
        border-radius: 50%; display: flex; align-items: center;
        justify-content: center; font-size: 1.5rem; color: #374151;
    }
    
    .btn-start, .btn-journey {
        background: #1f2937; color: #fff; border: none;
        padding: 1rem 2rem; border-radius: 0.5rem;
        font-weight: 600; text-decoration: none; display: inline-block; cursor: pointer;
        transition: background 0.2s;
        font-size: 1.1rem; /* Larger Button Text */
    }
    .btn-start:hover, .btn-journey:hover { background: #111827; color: #fff; }
    
    .small-text { font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem; }

    /* Analysis Cards */
    .section-title { text-align: center; margin-bottom: 1.5rem; font-weight: 700; }
    .section-title h2 { margin: 0; font-size: 2.5rem; }
    .section-subtitle { text-align: center; color: #6b7280; margin-bottom: 3rem; font-size: 1.2rem; }
    
    .analysis-card {
        background: #fff; border-radius: 0.75rem; padding: 1.5rem 1.5rem;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05); min-height: 140px;
        display: flex; flex-direction: column; justify-content: space-between;
        height: 100%;
    }
    .analysis-card .title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; }
    .analysis-card .desc { font-size: 0.95rem; color: #4b5563; flex-grow: 1; line-height: 1.5; }

    /* Bottom CTA */
    .bottom-cta {
        background: #e5e7eb; border-radius: 0.75rem; padding: 3rem 2rem;
        margin: 4rem auto 3rem; text-align: center; max-width: 1100px;
    }
    .bottom-cta h3 { font-weight: 700; margin-bottom: 0.75rem; font-size: 2rem; }
    .bottom-cta p { color: #4b5563; margin-bottom: 1.5rem; font-size: 1.1rem; }

    /* Form Section */
    .audit-form-section {
        display: flex; justify-content: center; align-items: center;
        min-height: 100vh; padding: 3rem 1rem;
    }
    .audit-assessment-card {
        max-width: 800px; /* Wider Form */
        width: 100%; background: #fff;
        border-radius: 1rem; padding: 3rem;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);
    }
    .progress-bar-container {
        height: 10px; background-color: #e5e7eb; border-radius: 5px;
        margin-bottom: 2.5rem; overflow: hidden;
    }
    .progress-bar-fill {
        height: 100%; background-color: #1f2937; width: 0%;
        border-radius: 5px; transition: width 0.3s ease-in-out;
    }
    .step-icon {
        width: 80px; height: 80px; /* Larger Step Icon */
        background: #f1f5f9;
        border-radius: 50%; display: flex; align-items: center;
        justify-content: center; font-size: 2rem; color: #374151;
        margin: 0 auto 2rem;
    }
    .form-question h2 { font-weight: 700; font-size: 2rem; margin-bottom: 0.75rem; text-align: center; margin-top: 0; }
    .form-question p { font-size: 1.1rem; color: #6b7280; text-align: center; margin-bottom: 2.5rem; }
    
    .form-label { display: block; font-weight: 600; font-size: 1.1rem; color: #374151; margin-bottom: 0.75rem; }
    .form-control-custom {
        border: 1px solid #d1d5db; border-radius: 0.5rem; padding: 1rem 1.25rem;
        width: 100%; font-size: 1.1rem; transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .form-control-custom:focus {
        border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25); outline: none;
    }
    
    .input-group { display: flex; }
    .input-group .form-control-custom { border-top-right-radius: 0; border-bottom-right-radius: 0; }
    .btn-outline-secondary {
        border: 1px solid #d1d5db; background: #fff;
        border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;
        border-left: none; padding: 1rem 1.5rem; cursor: pointer;
        font-size: 1rem; font-weight: 500;
    }
    
    .radio-options label {
        display: inline-block; margin-right: 2rem; cursor: pointer;
        font-size: 1.2rem; color: #374151; font-weight: 500;
    }
    .radio-options input[type="radio"] { margin-right: 0.75rem; transform: scale(1.3); }
    
    .checkbox-options label {
        display: block; margin-bottom: 1rem; cursor: pointer;
        font-size: 1.1rem; color: #374151; font-weight: 500;
    }
    .checkbox-options input[type="checkbox"] { margin-right: 1rem; transform: scale(1.3); }
    
    .navigation-buttons { display: flex; justify-content: space-between; margin-top: 3rem; }
    .btn-nav {
        background: #1f2937; color: #fff; border: none;
        padding: 1rem 2rem; border-radius: 0.5rem; font-weight: 600;
        display: flex; align-items: center; gap: 0.75rem; cursor: pointer;
        transition: background 0.2s; font-size: 1.1rem;
    }
    .btn-nav:hover { background: #111827; color: #fff; }
    .btn-prev { background: #e5e7eb; color: #374151; }
    .btn-prev:hover { background: #d1d5db; color: #374151; }

    /* Results */
    .results-section { padding-top: 3rem; padding-bottom: 3rem; }
    .results-container {
        // max-width: 1000px; /* Wider Results */
        margin: 0 auto; background: #fff;
        border-radius: 1rem; padding: 3rem;
        box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);
    }
    .alert-warning-custom {
        background-color: #fef3c7; border: 1px solid #fbbf24; color: #b45309;
        padding: 1.5rem; border-radius: 0.5rem; display: flex; align-items: center;
        font-size: 1.1rem;
    }
    .alert-warning-custom .icon { margin-right: 1rem; font-size: 1.5rem; }
    
    .score-box {
        background-color: #f1f5f9; border-radius: 0.5rem; padding: 2.5rem;
        text-align: center; margin-bottom: 3rem;
    }
    .score-box .score { font-size: 5rem; font-weight: 800; color: #1f2937; line-height: 1; }
    .score-box .score-label { font-size: 1.2rem; color: #4b5563; margin-top: 1rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
    .progress-line { height: 14px; background-color: #e5e7eb; border-radius: 7px; overflow: hidden; margin-top: 1.5rem; }
    .progress-fill { height: 100%; background-color: #1f2937; border-radius: 7px; transition: width 1s ease-out; }
    
    .section-heading { font-size: 1.5rem; font-weight: 700; margin-bottom: 2rem; margin-top: 0; }
    .breakdown-item {
        display: flex; justify-content: space-between; align-items: center;
        padding: 1rem 0; border-bottom: 1px solid #e5e7eb;
    }
    .breakdown-item:last-child { border-bottom: none; }
    .breakdown-item .label { display: flex; align-items: center; font-size: 1.1rem; color: #374151; font-weight: 500; }
    .breakdown-item .label i { margin-right: 1rem; color: #6b7280; font-size: 1.3rem; width: 30px; text-align: center; }
    .breakdown-item .score-bar {
        flex-grow: 1; height: 10px; background-color: #e5e7eb;
        border-radius: 5px; margin: 0 2rem; overflow: hidden;
    }
    .breakdown-item .score-fill { height: 100%; background-color: #1f2937; border-radius: 5px; }
    .breakdown-item .percentage { font-size: 1.1rem; font-weight: 700; color: #1f2937; width: 50px; text-align: right; }
    
    .business-summary-card {
        background-color: #f9fafb; border-radius: 0.5rem; padding: 2rem;
        margin-top: 3rem; border: 1px solid #e5e7eb;
    }
    .business-summary-card h6 { font-weight: 700; margin-bottom: 1.5rem; margin-top: 0; font-size: 1.25rem; }
    .summary-item { display: flex; justify-content: space-between; margin-bottom: 0.75rem; font-size: 1.05rem; }
    .summary-item .label { color: #4b5563; }
    .summary-item .value { font-weight: 600; color: #1f2937; text-align: right; }
    
    .elevate-brand-cta {
        background: #e0f2fe; border-radius: 0.75rem; padding: 3rem;
        margin-top: 3rem; text-align: center; border: 1px solid #90cdf4;
    }
    .elevate-brand-cta h3 { font-weight: 700; margin-bottom: 1rem; color: #1f2937; margin-top: 0; font-size: 2rem; }
    .elevate-brand-cta p { color: #4b5563; margin-bottom: 2rem; font-size: 1.2rem; }
    .elevate-brand-cta .btn-group .btn {
        padding: 1rem 1.5rem; font-weight: 600; border-radius: 0.5rem;
        margin: 0.5rem; display: inline-flex; align-items: center;
        justify-content: center; gap: 0.75rem; text-decoration: none; cursor: pointer;
        font-size: 1.1rem;
    }
    .elevate-brand-cta .btn-consultation { background-color: #1f2937; color: #fff; border: none; }
    .elevate-brand-cta .btn-consultation:hover { background-color: #111827; }
    .elevate-brand-cta .btn-contact { background-color: #f1f5f9; color: #1f2937; border: 1px solid #d1d5db; }
    .elevate-brand-cta .btn-contact:hover { background-color: #e5e7eb; }
    
    .about-consultants {
        background-color: #fff; border-radius: 0.75rem; padding: 2rem;
        margin-top: 3rem; border: 1px solid #e5e7eb; text-align: center;
    }
    .about-consultants h6 { font-weight: 700; margin-bottom: 1rem; color: #1f2937; margin-top: 0; font-size: 1.25rem; }
    .about-consultants p { font-size: 1.05rem; color: #4b5563; line-height: 1.7; margin-bottom: 1.5rem; }
    .about-consultants a { font-size: 1.05rem; font-weight: 600; color: #1f2937; text-decoration: none; }
    .about-consultants a:hover { text-decoration: underline; }
    
    .take-another-assessment { text-align: center; margin-top: 3rem; }
    .take-another-assessment a { color: #6b7280; text-decoration: none; font-size: 1.1rem; cursor: pointer; }
    .take-another-assessment a:hover { text-decoration: underline; }
    
    @media (min-width: 992px) {
        .audit-card { padding: 3rem; }
    }
  `}</style>
);

export default function MagsmenBrandAuditSystem() {
  const [currentView, setCurrentView] = useState<'landing' | 'form' | 'results'>('landing');
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [scores, setScores] = useState({
    overall: 0,
    design: 0,
    communication: 0,
    strategy: 0,
    marketing: 0,
    platform: 0,
    message: ''
  });

  // Inject FontAwesome for icons
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // --- Handlers ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    // For numeric radios, parse int. For strings (budget), keep string.
    if (name === 'marketingBudget') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) }));
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const platforms = prev.activePlatforms.includes(value)
        ? prev.activePlatforms.filter(p => p !== value)
        : [...prev.activePlatforms, value];
      return { ...prev, activePlatforms: platforms };
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const startAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentStep(1);
    setCurrentView('form');
  };

  const restartAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormData(INITIAL_DATA);
    setCurrentStep(1);
    setCurrentView('form');
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculations based on logic
    const designScore = (formData.designQuality / 10) * 100;
    const communicationScore = (formData.communicationEffectiveness / 10) * 100;
    const strategyScore = (formData.strategyAlignment / 10) * 100;

    let marketingBudgetScore = 0;
    if (formData.marketingBudget === '$0 - $1,000') marketingBudgetScore = 20;
    else if (formData.marketingBudget === '$1,000 - $5,000') marketingBudgetScore = 50;
    else if (formData.marketingBudget === '$5,000 - $10,000') marketingBudgetScore = 80;
    else if (formData.marketingBudget === '$10,000+') marketingBudgetScore = 100;

    let platformPresenceScore = 0;
    const numPlatforms = formData.activePlatforms.length;
    if (numPlatforms > 0 && numPlatforms <= 3) platformPresenceScore = 40;
    else if (numPlatforms > 3 && numPlatforms <= 7) platformPresenceScore = 70;
    else if (numPlatforms > 7) platformPresenceScore = 100;

    const scoreList = [designScore, communicationScore, strategyScore, marketingBudgetScore, platformPresenceScore];
    const total = scoreList.reduce((acc, curr) => acc + curr, 0);
    const overall = Math.round(total / scoreList.length);

    let msg = "Good Foundation with Growth Potential";
    if (overall >= 80) msg = "Excellent Brand Strength!";
    else if (overall < 50) msg = "Significant Opportunities for Brand Development";

    setScores({
      overall,
      design: designScore,
      communication: communicationScore,
      strategy: strategyScore,
      marketing: marketingBudgetScore,
      platform: platformPresenceScore,
      message: msg
    });

    setCurrentView('results');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <GlobalStyles />
      
      {/* --- Landing View --- */}
      {currentView === 'landing' && (
        <div className="section-container active">
          <section className="hero">
            <div className="container">
              <div className="badge-powered">Powered by <strong>Magsmen Brand Consultants</strong></div>
              <h1>Brand Audit System</h1>
              <div className="subtitle">Discover your brand’s true potential with our comprehensive assessment</div>

              <div className="audit-card mt-4">
                <div className="text-center mb-4">
                  <h5 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Get Your Free Brand Assessment</h5>
                  <div className="text-muted" style={{ fontSize: '1rem' }}>Understand your brand’s current state and discover opportunities for growth</div>
                </div>
                <div className="row gy-3 text-center">
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="feature-icon mb-3"><i className="fa-solid fa-chart-column"></i></div>
                      <div className="fw-bold" style={{ fontSize: '1.1rem' }}>Comprehensive Analysis</div>
                      <div className="small-text">6-category assessment covering all aspects of your brand</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="feature-icon mb-3"><i className="fa-solid fa-bullseye"></i></div>
                      <div className="fw-bold" style={{ fontSize: '1.1rem' }}>Personalized Recommendations</div>
                      <div className="small-text">Get specific advice based on your unique brand score</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex flex-column align-items-center">
                      <div className="feature-icon mb-3"><i className="fa-solid fa-user-tie"></i></div>
                      <div className="fw-bold" style={{ fontSize: '1.1rem' }}>Expert Consultation</div>
                      <div className="small-text">Direct access to brand consultants for next steps</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <button onClick={startAudit} className="btn-start">
                    <i className="fa-solid fa-rocket me-2"></i> Start Your Free Brand Audit
                  </button>
                  <div className="small-text">Takes only 5 minutes • No credit card required</div>
                </div>
              </div>
            </div>
          </section>

          <section className="what-we-analyze mt-5">
            <div className="container">
              <div className="section-title">
                <h2>What We Analyze</h2>
              </div>
              <div className="section-subtitle">
                <div>Our comprehensive audit covers every aspect of your brand</div>
              </div>

              <div className="row g-4 justify-content-center">
                {[
                  { icon: "fa-regular fa-star", title: "Design Quality", desc: "Logo, visual identity, website design, and overall aesthetic appeal" },
                  { icon: "fa-solid fa-circle-check", title: "Communication", desc: "Brand messaging, voice consistency, and value proposition clarity" },
                  { icon: "fa-regular fa-bullseye", title: "Strategic Alignment", desc: "Brand positioning, target audience fit, and competitive differentiation" },
                  { icon: "fa-solid fa-chart-line", title: "Marketing Investment", desc: "Budget allocation, channel effectiveness, and ROI optimization" },
                  { icon: "fa-regular fa-shield", title: "Platform Presence", desc: "Digital footprint, social media, and multi-channel consistency" },
                  { icon: "fa-solid fa-award", title: "Growth Potential", desc: "Scalability assessment and future opportunity identification" }
                ].map((item, idx) => (
                  <div className="col-md-6" key={idx}> {/* CHANGED TO col-md-6 FOR 2 COLUMNS */}
                    <div className="analysis-card">
                      <div className="d-flex align-items-start mb-2">
                        <div className="me-2"><i className={item.icon} style={{ fontSize: '1.5rem', marginRight: '10px' }}></i></div>
                        <div>
                          <div className="title">{item.title}</div>
                          <div className="desc">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container">
            <div className="bottom-cta">
              <h3>Ready to Transform Your Brand?</h3>
              <p>Join hundreds of businesses who’ve discovered their brand’s true potential</p>
              <button onClick={startAudit} className="btn-journey">Begin Your Brand Journey</button>
            </div>
          </section>
        </div>
      )}

      {/* --- Form View --- */}
      {currentView === 'form' && (
        <div className="section-container audit-form-section">
          <div className="audit-assessment-card">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0" style={{ fontSize: '1.3rem', fontWeight: 600 }}>Brand Audit Assessment</h5>
              <div className="text-muted" style={{ fontSize: '1rem' }}>Step {currentStep} of {totalSteps}</div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
            </div>

            <form onSubmit={calculateResults}>
              
              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-earth-americas"></i></div>
                  <div className="form-question">
                    <h2>Let's start with the basics</h2>
                    <p>Tell us about your business and online presence</p>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="websiteUrl" className="form-label mb-2">Website URL (optional)</label>
                    <div className="input-group">
                      <input 
                        type="url" 
                        className="form-control-custom" 
                        id="websiteUrl" 
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                      />
                      <button className="btn btn-outline-secondary" type="button" style={{ borderRadius: '0.5rem', marginLeft: '0.5rem', color: '#374151' }}>Analyze</button>
                    </div>
                    <small className="text-muted" style={{ fontSize: '0.9rem' }}>We'll analyze your website to pre-fill some answers</small>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="businessType" className="form-label mb-2">What type of business are you?</label>
                    <input 
                      type="text" 
                      className="form-control-custom" 
                      id="businessType" 
                      placeholder="e.g., E-commerce, SaaS, Consulting, Restaurant"
                      value={formData.businessType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="brandDescription" className="form-label mb-2">Describe your current brand in one sentence</label>
                    <textarea 
                      className="form-control-custom" 
                      id="brandDescription" 
                      rows={2} 
                      placeholder="What does your brand represent? What makes you unique?"
                      value={formData.brandDescription}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-paint-roller"></i></div>
                  <div className="form-question">
                    <h2>Design Quality Assessment</h2>
                    <p>How would you rate your current design assets?</p>
                  </div>
                  <div className="mb-3 text-center">
                    <label className="form-label mb-3">Overall Design Quality (1-10)</label><br />
                    <div className="radio-options">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                        <React.Fragment key={val}>
                          <input 
                            type="radio" 
                            id={`design-${val}`} 
                            name="designQuality" 
                            value={val} 
                            checked={formData.designQuality === val}
                            onChange={(e) => handleRadioChange('designQuality', e.target.value)}
                          /> 
                          <label htmlFor={`design-${val}`}>{val}</label>
                        </React.Fragment>
                      ))}
                    </div>
                    <small className="text-muted mt-2 d-block" style={{ fontSize: '0.9rem' }}>Consider logo, website design, marketing materials, color scheme, typography</small>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-comments"></i></div>
                  <div className="form-question">
                    <h2>Communication Clarity</h2>
                    <p>How clear is your brand messaging?</p>
                  </div>
                  <div className="mb-3 text-center">
                    <label className="form-label mb-3">Communication Effectiveness (1-10)</label><br />
                    <div className="radio-options">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                        <React.Fragment key={val}>
                          <input 
                            type="radio" 
                            id={`comm-${val}`} 
                            name="communicationEffectiveness" 
                            value={val} 
                            checked={formData.communicationEffectiveness === val}
                            onChange={(e) => handleRadioChange('communicationEffectiveness', e.target.value)}
                          /> 
                          <label htmlFor={`comm-${val}`}>{val}</label>
                        </React.Fragment>
                      ))}
                    </div>
                    <small className="text-muted mt-2 d-block" style={{ fontSize: '0.9rem' }}>Consider brand voice, messaging consistency, value proposition clarity</small>
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-bullseye"></i></div>
                  <div className="form-question">
                    <h2>Strategic Alignment</h2>
                    <p>How well does your brand align with your business goals?</p>
                  </div>
                  <div className="mb-3 text-center">
                    <label className="form-label mb-3">Strategy Alignment (1-10)</label><br />
                    <div className="radio-options">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                        <React.Fragment key={val}>
                          <input 
                            type="radio" 
                            id={`strategy-${val}`} 
                            name="strategyAlignment" 
                            value={val} 
                            checked={formData.strategyAlignment === val}
                            onChange={(e) => handleRadioChange('strategyAlignment', e.target.value)}
                          /> 
                          <label htmlFor={`strategy-${val}`}>{val}</label>
                        </React.Fragment>
                      ))}
                    </div>
                    <small className="text-muted mt-2 d-block" style={{ fontSize: '0.9rem' }}>Consider target audience alignment, brand positioning, competitive differentiation</small>
                  </div>
                </div>
              )}

              {/* Step 5 */}
              {currentStep === 5 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-dollar-sign"></i></div>
                  <div className="form-question">
                    <h2>Marketing & Budget</h2>
                    <p>Tell us about your marketing investment</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mb-3">Monthly Marketing Budget Range</label>
                    <div className="radio-options d-block">
                      {['$0 - $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000+'].map((budget, idx) => (
                        <div className="form-check mb-2" key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="marketingBudget" 
                            id={`budget-${idx}`} 
                            value={budget}
                            checked={formData.marketingBudget === budget}
                            onChange={(e) => handleRadioChange('marketingBudget', e.target.value)}
                          />
                          <label className="form-check-label" htmlFor={`budget-${idx}`} style={{ marginBottom: 0 }}>
                            {budget}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6 */}
              {currentStep === 6 && (
                <div className="step">
                  <div className="step-icon"><i className="fa-solid fa-mobile-screen"></i></div>
                  <div className="form-question">
                    <h2>Platforms & Channels</h2>
                    <p>Where do you currently engage with customers?</p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label mb-3">Select all platforms you actively use</label>
                    <div className="row checkbox-options">
                      <div className="col-6">
                        {['Website', 'Facebook', 'Twitter/X', 'YouTube', 'Google Ads', 'Print Media', 'Events'].map(plat => (
                          <div className="form-check" key={plat} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              id={`plat-${plat}`} 
                              value={plat}
                              checked={formData.activePlatforms.includes(plat)}
                              onChange={() => handleCheckboxChange(plat)}
                            />
                            <label className="form-check-label" htmlFor={`plat-${plat}`} style={{ marginBottom: 0 }}>{plat}</label>
                          </div>
                        ))}
                      </div>
                      <div className="col-6">
                        {['Instagram', 'LinkedIn', 'TikTok', 'Email Marketing', 'SEO', 'Radio/TV', 'Other'].map(plat => (
                          <div className="form-check" key={plat} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              id={`plat-${plat}`} 
                              value={plat}
                              checked={formData.activePlatforms.includes(plat)}
                              onChange={() => handleCheckboxChange(plat)}
                            />
                            <label className="form-check-label" htmlFor={`plat-${plat}`} style={{ marginBottom: 0 }}>{plat}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="additionalInfo" className="form-label mb-2">Any additional information? (Optional)</label>
                    <textarea 
                      className="form-control-custom" 
                      id="additionalInfo" 
                      rows={3} 
                      placeholder="Specific challenges, goals, or context we should know about..."
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              )}

              <div className="navigation-buttons">
                {currentStep > 1 && (
                  <button type="button" className="btn-nav btn-prev" onClick={prevStep}>
                    <i className="fa-solid fa-arrow-left"></i> Previous
                  </button>
                )}
                <div style={{ flexGrow: 1 }}></div> {/* Spacer */}
                {currentStep < totalSteps ? (
                  <button type="button" className="btn-nav" onClick={nextStep}>
                    Next <i className="fa-solid fa-arrow-right"></i>
                  </button>
                ) : (
                  <button type="submit" className="btn-nav">
                    Complete Assessment <i className="fa-solid fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Results View --- */}
      {currentView === 'results' && (
        <div className="section-container active results-section">
          <div className="container results-container">
            <div className="alert-warning-custom mb-4">
              <span className="icon"><i className="fa-solid fa-triangle-exclamation"></i></span>
              Your Brand Audit Score
              <div className="ms-auto" style={{ fontSize: '0.9rem', color: '#b45309' }}>
                Based on your comprehensive brand assessment
              </div>
            </div>

            <div className="score-box">
              <div className="score">{scores.overall}%</div>
              <div className="progress-line">
                <div className="progress-fill" style={{ width: `${scores.overall}%` }}></div>
              </div>
              <div className="score-label mt-3">{scores.message}</div>
              <div className="text-muted mt-2" style={{ fontSize: '1rem' }}>
                Your brand has solid elements but there's room for improvement. Let's discuss how to elevate your brand.
              </div>
            </div>

            <h4 className="section-heading">Detailed Breakdown</h4>
            <p className="text-muted" style={{ fontSize: '1rem', marginTop: '-1.5rem', marginBottom: '2rem' }}>See how each category contributes to your overall brand score</p>

            <div className="breakdown-list">
              {[
                { icon: "fa-regular fa-star", label: "Design Quality", val: scores.design },
                { icon: "fa-solid fa-comments", label: "Communication", val: scores.communication },
                { icon: "fa-solid fa-bullseye", label: "Strategic Alignment", val: scores.strategy },
                { icon: "fa-solid fa-chart-line", label: "Marketing Investment", val: scores.marketing },
                { icon: "fa-solid fa-mobile-screen", label: "Platform Presence", val: scores.platform }
              ].map((item, idx) => (
                <div className="breakdown-item" key={idx}>
                  <div className="label"><i className={item.icon}></i> {item.label}</div>
                  <div className="score-bar">
                    <div className="score-fill" style={{ width: `${item.val}%` }}></div>
                  </div>
                  <div className="percentage">{Math.round(item.val)}%</div>
                </div>
              ))}
            </div>

            <div className="business-summary-card">
              <h6>Your Business Summary</h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="summary-item">
                    <span className="label">Business Type</span>
                    <span className="value">{formData.businessType || 'Not specified'}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Current Brand Description</span>
                    <span className="value">{formData.brandDescription || 'Not provided'}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Marketing Budget</span>
                    <span className="value">{formData.marketingBudget}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="summary-item">
                    <span className="label">Website</span>
                    <span className="value">{formData.websiteUrl || 'Not provided'}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Active Platforms</span>
                    <span className="value">{formData.activePlatforms.length > 0 ? formData.activePlatforms.join(', ') : 'None specified'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="elevate-brand-cta">
              <h3>Let's Elevate Your Brand</h3>
              <p>Your brand has solid foundations with great potential. We can help you identify and implement the improvements that will drive significant growth.</p>
              <div className="btn-group d-flex flex-wrap justify-content-center">
                <a href="#" className="btn btn-consultation">
                  <i className="fa-solid fa-calendar-alt"></i> Book a Brand Enhancement Consultation
                </a>
                <a href="https://wa.me/919044910449" target="_blank" rel="noreferrer" className="btn btn-contact">
                  <i className="fa-brands fa-whatsapp"></i> Whatsapp
                </a>
                <a href="tel:+919044910449" className="btn btn-contact">
                  <i className="fa-solid fa-phone"></i> Call Now
                </a>
                <a href="mailto:connect@magsmen.com" className="btn btn-contact">
                  <i className="fa-solid fa-envelope"></i> Email Us
                </a>
              </div>
            </div>

            <div className="about-consultants">
              <h6>About Magsmen Brand Consultants</h6>
              <p>
                We specialize in transforming businesses through strategic brand development, design excellence, and growth-focused marketing strategies. Our data-driven approach ensures measurable results for your brand investment.
              </p>
              <a href="https://magsmen.com/" target="_blank" rel="noreferrer">Visit us at magsmen.com</a>
            </div>

            <div className="take-another-assessment">
              <a onClick={restartAudit}><i className="fa-solid fa-rotate"></i> Take Another Assessment</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}