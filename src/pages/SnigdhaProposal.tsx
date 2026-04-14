import React from 'react';
import '../SnigdhaProposal.css'; // Make sure this path matches where you save the CSS file
import whitelogo from "/assets/Artboard 1 copy 272x-8.png"
/* eslint-disable react/prop-types */
import { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Hexagon, 
  Layers, 
  Building2, 
  TrendingUp, 
  Compass, 
  Menu, 
  X, 
  Target, 
  Rocket, 
  PenTool, 
  Scale, 
  Armchair, 
  UserCheck, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Clock,
  AlertCircle,
  LayoutDashboard,
  Loader2,
  Mail
} from 'lucide-react';



interface UserData {
  email: string;
}

type TabType = 'millets' | 'overview' | 'details';

const SnigdhaProposal = () => {

     // Authentication / Registration state
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dashboard State management
  const [activeTab, setActiveTab] = useState<TabType>('millets');

    // ================= USER STORAGE =================

  const getUsers = (): UserData[] => {
    return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  };

  const saveUser = (user: UserData): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
  };

  const findUser = (email: string): UserData | undefined => {
    return getUsers().find((u) => u.email === email);
  };

  // ================= LOGIN =================

 const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError('');
  setSuccessMessage('');
  setIsLoading(true);

  const formData = new FormData(e.currentTarget);
  const email = (formData.get('email') as string)?.trim();

  if (!email) {
    setError('Please enter your email address.');
    setIsLoading(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address.');
    setIsLoading(false);
    return;
  }

  const existingUser = findUser(email);

  try {
    // 🔥 ALWAYS send email (both new + existing users)
    await emailjs.send(
      'service_ztfkvtu',
      'template_zhvk3r4',
      { email },
      'lGEySRjC5bz4G2JLr'
    );

    if (existingUser) {
      setSuccessMessage('Welcome back.');
      setTimeout(() => setIsLoggedIn(true), 800);
    } else {
      saveUser({ email });
      setSuccessMessage('Registered successfully.');
      setTimeout(() => setIsLoggedIn(true), 1000);
    }

  } catch (err) {
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
  // ================= LOGIN SCREEN =================

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-200">

          <div className="flex flex-col items-center mb-8 text-center">
            <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
              <LayoutDashboard className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold text-[#1E293B] uppercase">
              Strategic Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              Enter your email to access
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Email
              </label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E293B]/20"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {successMessage && (
              <div className="text-green-600 bg-green-50 p-3 rounded-xl text-xs">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1E293B] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Access Dashboard
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="snigdha-proposal-wrapper">
      {/* ═══════════════════════════════════════════════════
           COVER PAGE
      ════════════════════════════════════════════════════ */}
      <div className="cover">
        <div className="cover-top">
          <div className="logo-area">
  <img 
    src={whitelogo} 
    alt="Magsmen Logo" 
    className="logo-img"
  />
</div>
          <div className="confidential-tag">Confidential · April 2026</div>
        </div>

        <div className="cover-mid">
          <div className="cover-eyebrow">Prepared for Snigdha Ayurvedic Hospitals</div>
          <div className="cover-headline">Strategic<br />Proposal</div>
          <div className="cover-subline">Brand Communication, Founder Stature<br />&amp; Market Positioning</div>
          <div className="cover-divider"></div>
          <div className="cover-tagline">
            You have built 25 years of clinical excellence, a rare lineage, and a patient trust that no competitor in the Telugu states can replicate. What is missing is not proof. It is clarity and communication. This proposal addresses exactly that.
          </div>
        </div>

        <div className="cover-bottom">
          <div className="cover-meta">
            <div className="meta-row">
              <span className="meta-label">Prepared by</span>
              <span className="meta-value">Magsmen Strategy Consultants</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Prepared for</span>
              <span className="meta-value">Snigdha Ayurvedic Hospitals</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Date</span>
              <span className="meta-value">13 April 2026</span>
            </div>
          </div>
          <div className="cover-brand-mark">Challenge the Norm.<br />Craft the Future.</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           CONTENTS
      ════════════════════════════════════════════════════ */}
      <div className="page">
        <div className="section-number">Contents</div>
        <div className="section-title">What Is in<br />This Proposal</div>

        <div className="toc-item"><span>01 · About Magsmen</span><span className="toc-num">02</span></div>
        <div className="toc-item"><span>02 · Where Snigdha Stands Today</span><span className="toc-num">03</span></div>
        <div className="toc-item"><span>03 · The One Truth About Your Situation</span><span className="toc-num">04</span></div>
        <div className="toc-item"><span>04 · What This Engagement Will Achieve</span><span className="toc-num">05</span></div>
        <div className="toc-item"><span>05 · The Engagements in Detail</span><span className="toc-num">06</span></div>
        <div className="toc-item"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5A · OTC — One-Time Consulting</span><span className="toc-num">07</span></div>
        <div className="toc-item"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5B · Stature by Magsmen / Linkfluence</span><span className="toc-num">08</span></div>
        <div className="toc-item"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5C · Brand Expresso (If Required)</span><span className="toc-num">09</span></div>
        <div className="toc-item"><span>06 · Investment Summary</span><span className="toc-num">10</span></div>
        <div className="toc-item"><span>07 · What Happens Next</span><span className="toc-num">11</span></div>
      </div>

      {/* ═══════════════════════════════════════════════════
           01 · ABOUT MAGSMEN
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">01 · About Us</div>
        <div className="section-title">Who Is<br />Magsmen</div>

        <p className="body-text">Magsmen is a strategy consultancy that works with founders who are building brands worth choosing. We do not design logos as a first step. We diagnose businesses, define what they stand for, and build the strategic architecture that every subsequent brand decision must connect to.</p>

        <p className="body-text">Our work spans brand creation, brand consulting, and focused brand interventions across retail, healthcare, food, real estate, professional services, and exports. Every engagement follows a structured methodology. Every recommendation is connected to business logic, not personal taste.</p>

        <div className="highlight-box">
          <p>The best way to increase your brand growth is to first understand exactly what is holding it back. That is where every Magsmen engagement begins.</p>
          <div className="attr">Magsmen · Core Philosophy</div>
        </div>

        <div className="two-col">
          <div className="col-card">
            <h4>What We Have Done</h4>
            <p>Brand creation for LevelUp (GV Mall, Khammam), Nirva 9K Jewellers, ThinkBiz Foods, Arjun Sai Exports, Bakery Delights, Vihas Designer Studio, and 15+ other engagements across South India. Brand consulting for Telugu Foods, PSK Group, Surya Colors, Cargill, and others.</p>
          </div>
          <div className="col-card">
            <h4>How We Work</h4>
            <p>Every engagement follows a defined process with structured inputs, documented outputs, and quality gates before the next stage begins. We do not begin with design. We begin with diagnosis. The founding team always approves the strategic direction before any execution work starts.</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           02 · WHERE SNIGDHA STANDS TODAY
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">02 · Current Position</div>
        <div className="section-title">Where Snigdha<br />Stands Today</div>

        <p className="body-text">Snigdha Ayurvedic Hospital is a 25-year institution with assets that most healthcare brands spend decades trying to build. The Pothuru flagship is a 100-bed residential multi-speciality Ayurvedic hospital — the only one of its kind in the Telugu states. Dr. K.S.R. Gopalan is a direct disciple of Padmabhushan Dr. E.T. Narayanan Mooss of Vaidyaratnam, Thrissur — the most prestigious personal lineage any AP/TG hospital can claim. The institution holds NABH accreditation and AP Tourism recognition. Dr. Gopalan alone has treated over 2 lakh patients with a 95 to 98% success rate.</p>

        <p className="body-text">And yet, the brand's digital presence consists of 152 Instagram followers. The Pothuru branch — the institution's most significant asset — is not clearly communicated to any audience beyond its immediate catchment. The founder's public voice, which once reached Telugu-speaking audiences across five states through Eenadu and S-Prime, has been silent for over a year. The differentiation trifecta that no competitor in AP or Telangana can replicate — Kerala Vaidyaratnam lineage, NABH accreditation, and a consecrated Sri Dhanwantari Temple on premises — is not assembled into a clear, memorable proposition anywhere.</p>

        <table>
          <thead>
            <tr>
              <th>What Snigdha Has</th>
              <th>What the Market Sees</th>
              <th>The Gap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 years of Kerala lineage Ayurveda</td>
              <td>A trusted local hospital in Guntur</td>
              <td>Regional destination brand not established</td>
            </tr>
            <tr>
              <td>Only NABH-accredited Ayurvedic hospital in Telugu states</td>
              <td>One of many Ayurvedic hospitals</td>
              <td>Accreditation not communicated as a differentiator</td>
            </tr>
            <tr>
              <td>Pothuru: only residential multi-speciality Ayurvedic hospital of its kind in Telugu states</td>
              <td>Largely unknown outside Guntur-Krishna belt</td>
              <td>Zero market communication for the flagship</td>
            </tr>
            <tr>
              <td>Dr. Gopalan: 2 lakh patients, 95–98% success rate, media presence in Eenadu and S-Prime</td>
              <td>Known locally, invisible regionally and nationally</td>
              <td>Founder's authority not translated into institutional stature</td>
            </tr>
            <tr>
              <td>Tri-methodology practice: only institution in AP practising all three classical approaches</td>
              <td>Not communicated anywhere</td>
              <td>Strongest clinical differentiator completely invisible</td>
            </tr>
          </tbody>
        </table>

        <div className="accent-box">
          <p><strong>The core finding:</strong> The brand is severely undervalued relative to its actual assets. Not because the assets are weak — they are exceptional. Because no structured communication strategy exists to carry them to the audiences that need to hear them.</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           03 · THE ONE TRUTH
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">03 · The One Truth</div>
        <div className="section-title">What Is Actually<br />Holding You Back</div>

        <p className="body-text">In 25 years, Snigdha Ayurvedic Hospital has built its reputation treatment by treatment, patient by patient. That is a profound achievement. It is also a structural vulnerability. When brand equity is earned through clinical outcomes alone, without a parallel investment in strategic communication, the brand remains trapped inside its existing catchment. Every patient who benefits knows. Everyone outside the catchment does not.</p>

        <p className="body-text">The Pothuru branch was built in 2019 to serve patients from across the Telugu states and beyond — people seeking residential, immersive Ayurvedic care for serious chronic conditions, detoxification, and rejuvenation. That audience exists. The India AYUSH market is growing at 15 to 17% CAGR. Diaspora patients from the USA and Gulf are already finding their way to Pothuru through word of mouth. The market is coming to Snigdha. The problem is that most of it does not know Snigdha exists.</p>

        <div className="highlight-box">
          <p>The institution that heals 2 lakh patients with a 95% success rate and is followed by 152 people on Instagram has a communication problem. Not a credibility problem. Not a product problem. A communication problem. That is the diagnosis. And it has a structured solution.</p>
          <div className="attr">Magsmen Brand Diagnosis · Snigdha Ayurvedic</div>
        </div>

        <p className="body-text">There are two specific areas where strategic intervention will produce the most significant movement. First, establishing the Pothuru branch with the clarity and reach it deserves — as the only residential multi-speciality Ayurvedic hospital of its kind in the Telugu states — to an audience that is actively seeking exactly what it offers. Second, re-establishing Dr. Gopalan's public voice as a thought leader in Ayurveda, not just as the founder of Snigdha Hospital, but as the leading clinical authority in the Telugu states and the wider Ayurveda community.</p>
      </div>

      {/* ═══════════════════════════════════════════════════
           04 · WHAT THIS WILL ACHIEVE
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">04 · Objectives</div>
        <div className="section-title">What This<br />Engagement Achieves</div>

        <p className="body-text">The work proposed here addresses three interconnected objectives. Each is independent enough to deliver value on its own. Together, they move Snigdha from a respected local institution to a recognised regional destination brand with a founder whose authority extends beyond his existing patient base.</p>

        <table>
          <thead>
            <tr>
              <th>Objective</th>
              <th>What It Addresses</th>
              <th>Engagement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strategic Clarity for Pothuru</td>
              <td>Define the positioning, audience, messaging, and communication channels for the Pothuru branch with a structured budget and projection framework</td>
              <td>OTC</td>
            </tr>
            <tr>
              <td>Founder Authority</td>
              <td>Re-establish Dr. Gopalan's public stature as the leading voice in clinical Ayurveda across the Telugu states and beyond, through thought leadership and PR</td>
              <td>Stature by Magsmen / Linkfluence</td>
            </tr>
            <tr>
              <td>Brand Communication Execution</td>
              <td>If the strategic direction defined in OTC leads to a structured execution requirement, implement a 90-day brand communication intervention for Pothuru</td>
              <td>Brand Expresso (if required)</td>
            </tr>
          </tbody>
        </table>

        <div className="two-col">
          <div className="col-card">
            <h4>What Changes for Pothuru</h4>
            <p>The branch moves from being a well-kept secret to being the destination of choice for patients from outside Guntur who are seeking the most credible residential Ayurvedic care in the Telugu states. Every communication decision will be connected to a clear positioning and a defined audience.</p>
          </div>
          <div className="col-card">
            <h4>What Changes for Dr. Gopalan</h4>
            <p>The founder's clinical authority — built over 25 years and previously expressed through Eenadu columns and 100+ television episodes — is rebuilt and extended as a structured thought leadership presence that reaches professionals, patients, and media simultaneously.</p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           05A · OTC
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">05A · Engagement One</div>
        <div className="section-title">OTC — One-Time<br />Consulting</div>

        <p className="body-text">The One-Time Consulting engagement is Magsmen's structured diagnostic and strategic planning service. For Snigdha, the OTC engagement is specifically focused on the Pothuru branch — building the complete strategic foundation for its brand communication, with a structured projection, budgeting, and spending framework that the founding team can act on with confidence.</p>

        <p className="body-text">The OTC process begins with a structured discovery of the business as it actually operates — not as it is described, but as it is experienced. For Snigdha, this includes a comprehensive site visit to Pothuru, a structured evaluation across five business pillars (Legal, Brand, Business, Operations, and Team), and a strategic diagnosis that identifies the primary constraint holding the brand's communication back.</p>

        <p className="body-text">The output is not a general report. It is a specific, actionable strategic direction with a 90-day roadmap that tells the founding team exactly what to do, in what sequence, at what investment level, and through which channels to establish Pothuru as the destination it was built to be.</p>

        <div className="engagement-card">
          <div className="eng-header">
            <div className="eng-title">OTC · One-Time Consulting</div>
            <div className="eng-tag">Strategic Foundation</div>
          </div>
          <div className="eng-body">
            <p>A structured diagnostic and strategic planning engagement focused entirely on Pothuru branch — producing the positioning clarity, communication strategy, budget framework, and 90-day roadmap the founding team needs to move from intent to action.</p>

            <h3>What the OTC Engagement Covers</h3>

            <table>
              <thead>
                <tr><th>Stage</th><th>What Happens</th><th>Output</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Discovery</td>
                  <td>Founder intent mapping, institutional context, competitive landscape for Ayurvedic hospitals in Telugu states</td>
                  <td>Discovery report and brief</td>
                </tr>
                <tr>
                  <td>Ground Reality Review</td>
                  <td>On-site visit to Pothuru. Direct observation of patient experience, operational environment, and physical brand expression</td>
                  <td>Ground reality findings</td>
                </tr>
                <tr>
                  <td>Five-Pillar Audit</td>
                  <td>Structured evaluation across Legal, Brand, Business, Operations, and Team for the Pothuru branch specifically</td>
                  <td>Pillar scores and findings</td>
                </tr>
                <tr>
                  <td>Strategic Diagnosis</td>
                  <td>Primary constraint identification. What is the single most important thing holding Pothuru's communication back?</td>
                  <td>Primary and secondary constraint</td>
                </tr>
                <tr>
                  <td>Positioning &amp; Strategy</td>
                  <td>Pothuru brand positioning statement, target audience definition, messaging hierarchy, channel strategy</td>
                  <td>Positioning blueprint</td>
                </tr>
                <tr>
                  <td>Budget Framework</td>
                  <td>Structured projection and spending framework: what to spend, where, in what sequence, and what outcomes each investment should produce</td>
                  <td>Budget and projection framework</td>
                </tr>
                <tr>
                  <td>Final Report &amp; Presentation</td>
                  <td>Complete findings presented to founding team with 90-day action roadmap and recommended next engagement if required</td>
                  <td>OTC final report and roadmap</td>
                </tr>
              </tbody>
            </table>

            <h3>What You Will Receive</h3>
            <ul className="deliverables">
              <li>Five-Pillar Business Audit Report for Pothuru branch</li>
              <li>Primary constraint identification with full supporting analysis</li>
              <li>Pothuru brand positioning statement and target audience definition</li>
              <li>Strategic direction summary: what the brand must communicate and why</li>
              <li>Budget framework with projection and spending recommendations by channel</li>
              <li>90-Day Action Roadmap with specific, sequenced steps</li>
              <li>Recommended next engagement based on the diagnosis</li>
            </ul>

            <div className="eng-meta">
              <div className="eng-meta-item">
                <span className="eng-meta-label">Investment</span>
                <span className="eng-meta-value">₹1,00,000</span>
                <span className="eng-meta-note">+ GST · One-time fee</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Duration</span>
                <span className="eng-meta-value">4–6 Weeks</span>
                <span className="eng-meta-note">From discovery to final report</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Focus</span>
                <span className="eng-meta-value">Pothuru</span>
                <span className="eng-meta-note">Brand communication strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           05B · STATURE / LINKFLUENCE
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">05B · Engagement Two</div>
        <div className="section-title">Founder Authority —<br />Two Paths Forward</div>

        <p className="body-text">Dr. K.S.R. Gopalan's clinical authority is not in question. It is invisible. A founder who has treated over 2 lakh patients, trained under Padmabhushan Dr. E.T. Narayanan Mooss, written for Eenadu, and produced 100+ television episodes on Ayurveda — and who has been absent from all public communication for over a year — is an authority the market does not currently know is available to them.</p>

        <p className="body-text">Magsmen offers two structured paths to re-establish and sustain Dr. Gopalan's public stature. Both are built around the same principle: the founder should be seen as a thought leader in Ayurveda broadly, not only as the face of Snigdha Hospital. That distinction is what transforms individual reputation into institutional authority.</p>

        <div className="engagement-card">
          <div className="eng-header">
            <div className="eng-title">Stature by Magsmen</div>
            <div className="eng-tag">Full Thought Leadership</div>
          </div>
          <div className="eng-body">
            <p>A comprehensive, managed personal branding and PR engagement that re-establishes Dr. Gopalan as the leading clinical voice in Ayurveda across the Telugu states. This goes beyond LinkedIn — it covers PR profiling, media reactivation, thought leadership content, and public positioning as an Ayurveda authority.</p>

            <ul className="deliverables">
              <li>LinkedIn profile building and managed content strategy (thought leadership positioning)</li>
              <li>PR profiling — media pitching, press coverage, interview placement in relevant publications</li>
              <li>Reactivation of existing media credibility: Eenadu column and S-Prime episode series</li>
              <li>Thought leadership content calendar — articles, opinion pieces, professional commentary</li>
              <li>Public positioning strategy: Dr. Gopalan as Ayurveda advocate, not just hospital founder</li>
              <li>Monthly strategy and content review sessions</li>
            </ul>

            <div className="eng-meta">
              <div className="eng-meta-item">
                <span className="eng-meta-label">Investment</span>
                <span className="eng-meta-value">₹1,00,000</span>
                <span className="eng-meta-note">+ GST · Per month retainer</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Duration</span>
                <span className="eng-meta-value">12 Months</span>
                <span className="eng-meta-note">Minimum engagement period</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Total</span>
                <span className="eng-meta-value">₹12,00,000</span>
                <span className="eng-meta-note">+ GST · Annual commitment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="engagement-card">
          <div className="eng-header">
            <div className="eng-title">Linkfluence by Magsmen</div>
            <div className="eng-tag">LinkedIn-Focused</div>
          </div>
          <div className="eng-body">
            <p>A focused LinkedIn presence and thought leadership engagement for Dr. Gopalan. For founders who want to establish professional authority in their field without the full scope of a PR programme, Linkfluence builds a credible, consistent, and strategically managed LinkedIn presence that positions the founder as a respected voice in the Ayurveda community.</p>

            <ul className="deliverables">
              <li>LinkedIn profile optimisation and strategic positioning</li>
              <li>Monthly content calendar — posts, articles, and engagement strategy</li>
              <li>Thought leadership angle development (Ayurveda's role in chronic disease, spinal health, classical vs. commercialised Ayurveda)</li>
              <li>Audience growth strategy — connecting with healthcare professionals, wellness communities, diaspora audiences</li>
              <li>Monthly performance review and content direction update</li>
            </ul>

            <div className="eng-meta">
              <div className="eng-meta-item">
                <span className="eng-meta-label">Investment</span>
                <span className="eng-meta-value">₹35,000</span>
                <span className="eng-meta-note">+ GST · Per month retainer</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Duration</span>
                <span className="eng-meta-value">12 Months</span>
                <span className="eng-meta-note">Minimum engagement period</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Total</span>
                <span className="eng-meta-value">₹4,20,000</span>
                <span className="eng-meta-note">+ GST · Annual commitment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="accent-box">
          <p><strong>Which path is right for Snigdha?</strong> Stature by Magsmen is the right choice if the goal is to rebuild Dr. Gopalan's public presence comprehensively — across media, professional platforms, and public discourse. Linkfluence is the right choice if the immediate priority is establishing a consistent, credible professional presence on LinkedIn while keeping the investment focused. Both paths serve the same strategic goal. The scope is the difference.</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           05C · BRAND EXPRESSO
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">05C · Engagement Three (If Required)</div>
        <div className="section-title">Brand Expresso —<br />90-Day Execution</div>

        <p className="body-text">Brand Expresso is Magsmen's structured 90-day intervention for brands that have a clear strategic direction and need execution support to bring that direction into the market. It is not a retainer. It is a defined project with a defined scope, a defined timeline, and defined deliverables.</p>

        <p className="body-text">For Snigdha, the Brand Expresso engagement would follow the OTC. If the OTC diagnosis reveals that execution support is required to implement the communication strategy for Pothuru — across digital, content, and outreach channels — the Brand Expresso engagement provides that support in a structured 90-day format. The decision to proceed to Brand Expresso is made after the OTC report is delivered and the founding team reviews the strategic direction.</p>

        <div className="engagement-card">
          <div className="eng-header">
            <div className="eng-title">Brand Expresso</div>
            <div className="eng-tag">Execution · If Required</div>
          </div>
          <div className="eng-body">
            <p>A 90-day structured brand communication intervention for the Pothuru branch, implementing the strategic direction defined in the OTC engagement. Scope is confirmed after OTC completion and is tailored to the specific communication requirements identified in the strategic diagnosis.</p>

            <h3>What Brand Expresso Typically Covers</h3>

            <table>
              <thead>
                <tr><th>Phase</th><th>Timeline</th><th>Focus</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Phase 1 · Foundation</td>
                  <td>Days 1–30</td>
                  <td>Communication assets, messaging implementation, content foundation, digital presence setup for Pothuru</td>
                </tr>
                <tr>
                  <td>Phase 2 · Activation</td>
                  <td>Days 31–60</td>
                  <td>Channel activation, audience outreach, content publishing, initial performance tracking</td>
                </tr>
                <tr>
                  <td>Phase 3 · Optimisation</td>
                  <td>Days 61–90</td>
                  <td>Performance review, content and channel optimisation, handover to internal team or retainer recommendation</td>
                </tr>
              </tbody>
            </table>

            <div className="accent-box">
              <p>The Brand Expresso scope is not confirmed at this stage. It is included here to give the founding team the complete picture of how the engagements connect. The OTC engagement produces the strategic direction. Brand Expresso implements it. The decision to proceed is yours, after reviewing the OTC findings.</p>
            </div>

            <div className="eng-meta">
              <div className="eng-meta-item">
                <span className="eng-meta-label">Investment</span>
                <span className="eng-meta-value">₹4,00,000</span>
                <span className="eng-meta-note">+ GST · Fixed project fee</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Duration</span>
                <span className="eng-meta-value">90 Days</span>
                <span className="eng-meta-note">Defined project timeline</span>
              </div>
              <div className="eng-meta-item">
                <span className="eng-meta-label">Trigger</span>
                <span className="eng-meta-value">Post-OTC</span>
                <span className="eng-meta-note">Scope confirmed after OTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           06 · INVESTMENT SUMMARY
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">06 · Investment</div>
        <div className="section-title">The Investment<br />and What It Means</div>

        <p className="body-text">The engagements are structured to allow the founding team to begin with the most important step — the strategic diagnosis — before committing to execution. The OTC is the entry point. Everything else follows from what it reveals.</p>

        <table>
          <thead>
            <tr>
              <th>Engagement</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Investment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OTC · One-Time Consulting</td>
              <td>Strategic diagnosis and communication plan for Pothuru branch</td>
              <td>4–6 Weeks</td>
              <td>₹1,00,000 + GST</td>
            </tr>
            <tr>
              <td>Stature by Magsmen</td>
              <td>Comprehensive founder personal branding and PR</td>
              <td>12 Months</td>
              <td>₹1,00,000 + GST / month</td>
            </tr>
            <tr>
              <td>Linkfluence (Alternative to Stature)</td>
              <td>Focused LinkedIn thought leadership for Dr. Gopalan</td>
              <td>12 Months</td>
              <td>₹35,000 + GST / month</td>
            </tr>
            <tr>
              <td>Brand Expresso (If Required)</td>
              <td>90-day brand communication execution for Pothuru</td>
              <td>90 Days</td>
              <td>₹4,00,000 + GST</td>
            </tr>
          </tbody>
        </table>

        <h3>Recommended Starting Combination</h3>

        <div style={{ border: '1px solid var(--light-grey)', overflow: 'hidden', margin: '24px 0' }}>
          <div className="investment-row">
            <div className="inv-label">
              <strong>OTC · One-Time Consulting</strong>
              Strategic foundation for Pothuru. The non-negotiable first step.
            </div>
            <div className="inv-amount">₹1,00,000<span className="inv-note">+ GST</span></div>
          </div>
          <div className="investment-row">
            <div className="inv-label">
              <strong>Linkfluence by Magsmen</strong>
              LinkedIn thought leadership for Dr. Gopalan. Focused and immediate.
            </div>
            <div className="inv-amount">₹35,000<span className="inv-note">+ GST / month</span></div>
          </div>
          <div className="investment-total">
            <span className="inv-total-label">Starting Investment · Month 1</span>
            <span className="inv-total-amount">₹1,35,000 + GST</span>
          </div>
        </div>

        <div className="accent-box">
          <p><strong>How to read this:</strong> Begin with OTC + Linkfluence. The OTC gives you the strategic direction for Pothuru in 4 to 6 weeks. Linkfluence begins rebuilding Dr. Gopalan's professional presence immediately and in parallel. If the OTC diagnosis recommends execution support, Brand Expresso follows. If the Linkfluence engagement demonstrates the value of a fuller PR programme, Stature by Magsmen is the natural next step. Every engagement produces a decision point, not a commitment to everything at once.</p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           07 · NEXT STEPS
      ════════════════════════════════════════════════════ */}
      <div className="page page-break">
        <div className="section-number">07 · What Happens Next</div>
        <div className="section-title">Three Steps to<br />Begin</div>

        <p className="body-text">The path forward is straightforward. No decision needs to be made about execution before the diagnosis is complete. What is needed now is the decision to begin.</p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <div className="step-title">Scope Confirmation</div>
            <div className="step-desc">A 60-minute working conversation with the Magsmen team to confirm the engagement scope, select the starting combination, and clarify any questions about the process, timeline, or deliverables.</div>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <div className="step-title">Agreement Execution</div>
            <div className="step-desc">Magsmen issues the Client Engagement Agreement within 48 hours of scope confirmation. The agreement covers scope, timeline, payment milestones, deliverables, confidentiality, and intellectual property.</div>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <div className="step-title">Engagement Kickoff</div>
            <div className="step-desc">The OTC Discovery session and Linkfluence onboarding begin within 5 to 7 days of commercial confirmation. The 4 to 6 week OTC clock starts on the day of the Discovery session.</div>
          </div>
        </div>

        <div className="highlight-box">
          <p>Snigdha Ayurvedic Hospital does not need to be built. It has been built — over 25 years, by a founder with rare lineage, at a facility that no competitor in the Telugu states can replicate. What it needs now is to be found. By the patients who are already looking for it. This proposal is the structured path to making that happen.</p>
          <div className="attr">Magsmen · Strategic Assessment · April 2026</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
           CONTACT & FOOTER
      ════════════════════════════════════════════════════ */}
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Begin</h2>
          <p>To proceed with scope confirmation or to discuss any aspect of this proposal, reach out to the Magsmen team directly. We are ready to begin as soon as you are.</p>
        </div>
        <div className="contact-right">
          <div className="contact-item">
            <strong>Sandeep N</strong>
            Founder, Magsmen Strategy Consultants
          </div>
          <div className="contact-item">
            <strong>magsmen.com</strong>
            Strategy Consultants
          </div>
          <div className="contact-item" style={{ marginTop: '8px', color: '#555', fontSize: '11px' }}>
            Confidential · Prepared for Snigdha Ayurvedic Hospitals · April 2026
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <span>MAGSMEN STRATEGY CONSULTANTS</span>
        <span>CHALLENGE THE NORM · CRAFT THE FUTURE</span>
        <span>CONFIDENTIAL · NOT FOR DISTRIBUTION</span>
      </div>
    </div>
  );
};

export default SnigdhaProposal;