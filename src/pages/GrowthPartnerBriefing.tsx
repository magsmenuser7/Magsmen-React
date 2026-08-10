import { useState } from "react";
import logo from "/assets/blacklogohorizontal.png"
import emailjs from '@emailjs/browser';
import {  useEffect, FormEvent } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Briefcase, 
  Mic, 
  Cpu, 
  Building, 
  Scale, 
  Award,
  Lightbulb
} from 'lucide-react';
import { 
  Hexagon, 
  Layers, 
  Building2, 
  
  Compass, 
  Menu, 
  X, 
 
  Rocket, 
  PenTool, 
 
  Armchair, 
  UserCheck, 
  ShieldCheck, 
 
  Star, 
  Clock,
  AlertCircle,
  LayoutDashboard,
  Loader2,
  Mail
} from 'lucide-react';
import backgroungimage from "/assets/Final Brand presentation for printing.png"

const colors = {
  black: "#111111",
  white: "#ffffff",
  gray100: "#f7f7f5",
  gray200: "#f0f0f0",
  gray300: "#e8e8e8",
  gray400: "#e0e0e0",
  gray500: "#cccccc",
  gray600: "#999999",
  gray700: "#666666",
  gray800: "#444444",
  gray900: "#333333",
  green100: "#f4faf4",
  greenBorder: "#c3e6cb",
  greenText: "#2d6a3f",
  red100: "#fff8f8",
  redBorder: "#f5c6cb",
  redText: "#842029",
  yellow100: "#fffbf0",
  yellowBorder: "#ffe58f",
  yellowText: "#8a6d00",
  yellowDot: "#e0a800",
};

const s = {
  page: { fontFamily: "'Inter', -apple-system, sans-serif", fontSize: 15, lineHeight: 1.7, color: colors.black, background: colors.white, padding: "48px 60px", maxWidth: 90100, margin: "0 auto" },
  logoBar: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 28, borderBottom: `1px solid ${colors.gray400}`, marginBottom: 40 },
  logoName: { width: 140,
  height: "auto",
  display: "block", fontSize: 18, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" },
  logoSub: { fontWeight: 400, opacity: 0.5, fontSize: 11, display: "block", letterSpacing: "2px", textTransform: "uppercase", marginTop: 2 },
  docTag: { fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: colors.gray600, border: `1px solid ${colors.gray400}`, padding: "4px 12px", borderRadius: 4 },
  headline: { fontSize: 28, fontWeight: 600, lineHeight: 1.3, marginBottom: 10, color: colors.black },
  subheadline: { fontSize: 15, color: "#555", marginBottom: 40, lineHeight: 1.6 },
  divider: { height: 1, background: colors.gray200, margin: "36px 0" },
  sectionLabel: { fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: colors.gray600, marginBottom: 14, fontWeight: 500 },
  h2: { fontSize: 17, fontWeight: 600, color: colors.black, marginBottom: 12 },
  p: { color: colors.gray900, marginBottom: 14, fontSize: 14.5 },
  highlightBox: { background: colors.gray100, borderLeft: `3px solid ${colors.black}`, padding: "16px 20px", margin: "20px 0", borderRadius: "0 6px 6px 0" },
  partLabel: { fontSize: 12.5, color: "#888", marginBottom: 4, fontWeight: 500 },
  serviceGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" },
  serviceCard: { border: `1px solid ${colors.gray300}`, borderRadius: 8, padding: "14px 16px" },
  serviceName: { fontSize: 13, fontWeight: 600, color: colors.black, marginBottom: 4 },
  serviceDesc: { fontSize: 12.5, color: colors.gray700, lineHeight: 1.5 },
  servicePrice: { fontSize: 11, color: colors.gray600, marginTop: 6 },
  clientRow: { display: "flex", flexDirection: "column", gap: 12, margin: "16px 0" },
  clientCard: { display: "flex", gap: 16, alignItems: "flex-start", border: `1px solid ${colors.gray300}`, borderRadius: 8, padding: "14px 16px" },
  clientInitial: { width: 38, height: 38, borderRadius: 6, background: colors.black, color: colors.white, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  clientName: { fontSize: 13, fontWeight: 600, color: colors.black },
  clientDesc: { fontSize: 12.5, color: "#555", lineHeight: 1.5, marginTop: 3 },
  clientTag: { display: "inline-block", fontSize: 11, background: colors.gray200, color: "#555", padding: "2px 8px", borderRadius: 4, marginTop: 5 },
  idealGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" },
  idealCard: { border: `1px solid ${colors.gray300}`, borderRadius: 8, padding: "14px 16px" },
  idealLabel: { fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: colors.gray600, marginBottom: 6 },
  idealText: { fontSize: 13, color: colors.gray900, lineHeight: 1.5 },
  yesNo: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" },
  yesBox: { background: colors.green100, border: `1px solid ${colors.greenBorder}`, borderRadius: 8, padding: "14px 16px" },
  noBox: { background: colors.red100, border: `1px solid ${colors.redBorder}`, borderRadius: 8, padding: "14px 16px" },
  ynLabel: (color) => ({ fontSize: 11, fontWeight: 600, letterSpacing: "1px", color, marginBottom: 8 }),
  ynItem: { fontSize: 13, color: colors.gray900, marginBottom: 5, paddingLeft: 14, position: "relative" },
  journeyWrap: { margin: "16px 0" },
  journeyStep: { display: "grid", gridTemplateColumns: "32px 1fr", gap: 16, marginBottom: 0 },
  journeyLeft: { display: "flex", flexDirection: "column", alignItems: "center" },
  journeyNum: { width: 30, height: 30, borderRadius: "50%", background: colors.black, color: colors.white, fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  journeyLine: { width: 1, background: colors.gray400, flex: 1, minHeight: 24, margin: "4px 0" },
  journeyContent: { paddingBottom: 24 },
  journeyOwner: { display: "inline-block", fontSize: 11, background: colors.black, color: colors.white, padding: "2px 8px", borderRadius: 4, marginBottom: 6 },
  journeyTitle: { fontSize: 14, fontWeight: 600, color: colors.black, marginBottom: 3 },
  journeyDesc: { fontSize: 13, color: "#555", lineHeight: 1.6 },
  boundaryBox: { background: colors.yellow100, border: `1px solid ${colors.yellowBorder}`, borderRadius: 8, padding: "16px 20px", margin: "16px 0" },
  boundaryTitle: { fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", color: colors.yellowText, marginBottom: 10 },
  boundaryItem: { fontSize: 13, color: colors.gray900, marginBottom: 6, paddingLeft: 14, position: "relative" },
  footer: { marginTop: 48, paddingTop: 24, borderTop: `1px solid ${colors.gray400}`, display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerInfo: { fontSize: 12, color: "#888" },
  footerContact: { fontSize: 12, color: "#555", textAlign: "right" },
  confTag: { fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#bbb", marginTop: 6 },
};

const Dot = ({ color }) => (
  <span style={{ position: "absolute", left: 0, top: 8, width: 5, height: 5, borderRadius: "50%", background: color || "#aaa", display: "inline-block" }} />
);

const services = {
  part1: [
    { name: "OTC One-Time Consulting", desc: "A rapid 3 step diagnostic: check the brand, find the problem, deliver the fix. No long term commitment needed.", price: "₹35,000 – ₹95,000" },
    { name: "Brand Expresso", desc: "90 day sprint to revitalise an existing brand identity, strategy, purpose, and momentum.", price: "From ₹3,00,000" },
    { name: "Brand Creation", desc: "Full brand build from zero naming, identity, pricing strategy, launch theme, and consistency guidelines.", price: "From ₹5,00,000" },
    { name: "Brand Consulting", desc: "Strategic advisory to differentiate the business and drive customer preference through aligned communication.", price: "From ₹1,00,000" },
    { name: "Corporate Rebranding", desc: "Strategic overhaul for established businesses whose identity no longer matches their ambition or market position.", price: "From ₹3,00,000" },
    { name: "Brand Naming", desc: "Creating unique, resonant names for new ventures, sub brands, or product lines with trademark structuring.", price: "From ₹25,000 + ₹10K per class" },
    { name: "Stature by Magsmen", desc: "Personal brand and image consulting for founders, CEOs, and leaders. Legacy building, credibility, and presence.", price: "₹1.5L – ₹20L+" },
    { name: "Linkfluence", desc: "Digital narrative and reputation management for leaders, CEOs, NGOs, and companies controlling their online presence.", price: "Flat ₹35,000" },
  ],
  part2: [
    { name: "Level 1  Brand Advisory", desc: "For stable companies making decisions around brand alignment, messaging, and identity.", price: "₹5,00,000 / year", border: "#ddd" },
    { name: "Level 2  Brand + Legal Advisory", desc: "For growing brands needing legal coordination contracts, trademarks, IP audits alongside brand decisions. Includes 72-hour crisis response.", price: "₹7,50,000 / year", border: "#bbb" },
    { name: "Level 3  Full Business Advisory", desc: "For founders making interconnected brand, legal, and business decisions. Pricing changes, geographic expansion, business model audits. Includes direct meetings with the Founder.", price: "₹10,00,000 / year", border: "#111", span: 2 },
  ],
  part3: [
    { name: "Legal Consulting & Support", desc: "Structured back office legal infrastructure estate planning, trust drafting, paralegal documentation, and tax accounting. For offshore legal and tax firms needing an India delivery arm.", price: "Dedicated Team / Hourly Retainer / Per Deliverable invoiced in USD", span: 2 },
  ],
};

const clients = [
  { init: "NRT", name: "AP NRT  AP Government Supported Organisation", desc: "Official strategic partners. When the organisation needs to make a significant direction setting decision, we advise on the strategic path forward. Ongoing engagement.", tag: "Strategic Advisory · Government" },
  { init: "NI", name: "NIRVA", desc: "NIRVA is positioned as a modern gold 9K jewellery brand from Guntur, Andhra Pradesh, designed for regional consumers who value style, trust, and aspirational design within accessible luxury.", tag: "Brand Strategy · AP " },
  { init: "TDH", name: "Tenali Double Horse", desc: "₹500 crore regional FMCG brand. Built their digital communication strategy and brand positioning to match their scale and regional dominance.", tag: "Brand Strategy · FMCG · Regional" },
  { init: "LU", name: "LVL UP Multi-Brand Fashion Retail, Khammam", desc: "Positioned and launched from ground up. ₹16 crore in revenue within 17 months of opening. Break-even achieved in 7 months.", tag: "Brand Launch · Retail · AP & TG" },
];

const idealCards = [
  { label: "Business stage", text: "Operating and generating revenue. Not a startup idea. A real business that is ready to grow but lacks the structure to scale." },
  { label: "Mindset", text: "They understand what a consultant does. They don't expect us to run their social media. They know strategy is the gap." },
  { label: "Geography", text: "Primarily Andhra Pradesh and Telangana. Regional businesses with ambitions beyond their current market." },
  { label: "Budget readiness", text: "Has a budget for brand operations. Not looking for the cheapest option. Understands that strategy has a cost." },
];

const yesItems = ["Businesses that know they need to scale but don't know how", "Founders who want to build a brand, not just a business", "Companies with no brand communication structure", "Businesses entering a new market or repositioning", "Entrepreneurs building personal authority"];
const noItems = ["Looking only for design, logo, or social media", "No budget for strategic investment", "Not yet operational or revenue-generating", "Wants execution, not strategy", "Expects quick-fix results"];

const journeySteps = [
  { owner: "Your responsibility", title: "Identify the lead", desc: "Use this document to filter your network. If a business fits the profile they're operating, they want to scale, they understand strategy they are a potential lead. You approach them first." },
  { owner: "Your responsibility", title: "Warm them up and qualify", desc: "Have an initial conversation. Understand their business, what they're struggling with, and whether they're open to strategic help. You can share Magsmen's approved materials and quote from the approved pricing list. You do not close alone your job is to warm them up and confirm the fit." },
  { owner: "Your responsibility", title: "Bring them into a Magsmen-led conversation", desc: "Once they're ready, you bring them to a discovery meeting led by Magsmen. You are present in this meeting. You do not present, Magsmen leads. Your role here is relationship continuity the lead already trusts you, and you keep that bridge strong." },
  { owner: "Your responsibility", title: "Stay through every meeting", desc: "You attend every follow-up conversation, proposal presentation, and closing discussion. You are the constant. Magsmen handles the strategy and commercial conversation you manage the relationship and the prospect's confidence." },
  { owner: "Your responsibility", title: "Re-engage if they go cold", desc: "If the prospect goes quiet or pulls back, re-engagement is your responsibility. You know them you have the relationship. Magsmen will support you with context and materials, but the follow-through is yours." },
  { owner: "Magsmen's responsibility", title: "Close and onboard", desc: "Once the prospect is ready, Magsmen handles the proposal, contract, and onboarding. You earn your commission as the client pays tranche by tranche." },
];

const boundaryItems = [
  "You can quote from Magsmen's approved pricing list. You cannot negotiate or offer discounts without Founder approval.",
  "You cannot make commitments on scope, deliverables, or timelines on Magsmen's behalf. All scope is set by the Head of Operations.",
  "Every lead must be logged in Magsmen's system before any meeting happens. No log means no commission claim.",
  "You do not share Magsmen's internal pricing structure, commission rates, or this briefing document with any lead or third party.",
];

export default function MagsmenExplainer() {

  // Authentication / Registration state
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

  // Dashboard State management
  const [activeTab, setActiveTab] = useState<TabType>('millets');

    // ================= USER STORAGE =================
type UserData = {
  email: string;
};
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
      'service_9gmlg2q',
      'template_p0q050i',
      { email },
      '-ePIcI6qQCURx5hAM'
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
    <div
  className="relative min-h-screen bg-cover 
             bg-[position:90%_center] 
             md:bg-center 
             flex items-center justify-center md:justify-end 
             p-4 md:p-6 font-sans"
  style={{
    backgroundImage: `url('/assets/bg-for-lock.png')`
  }}
>
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* LOGIN CARD */}
      <div className="relative w-full max-w-md mr-0 md:mr-28 ">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">

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
    </div>
  );
}
  return (
    <div style={s.page}>
      {/* Logo Bar */}
      <div style={s.logoBar}>
        <div>
          <div style={s.logoName}>
            <img src='/assets/blacklogohorizontal.png'/>
           
          </div>
        </div>
        <div style={s.docTag}>Growth Partner Briefing</div>
      </div>

      {/* Headline */}
      <div style={s.headline}>What Magsmen does and your role in growing it</div>
      <div style={s.subheadline}>This document tells you everything you need to know to identify the right businesses, have the right conversation, and stay involved through every stage until they become a client.</div>

      {/* Who we are */}
      <div style={s.sectionLabel}>Who we are</div>
      <div style={s.h2}>Not an agency. A consultant.</div>
      <p style={s.p}>Magsmen is a strategy consultant based in Andhra Pradesh. We work at the level of a founder's vision helping businesses that are ready to grow but don't have the structure to do it correctly.</p>
      <p style={s.p}>Most businesses confuse branding with design or social media. We don't work at that level. We work on brand equity, market positioning, communication architecture, and long term business identity the things that determine how a business is perceived, valued, and chosen in the market.</p>
      <div style={s.highlightBox}>
        <p style={{ ...s.p, marginBottom: 0, fontSize: 14 }}>We are strategy first. We don't take on execution only work. The businesses that work best with us already understand what a consultant does they come to us because strategy is the missing piece, not just design or content.</p>
      </div>

      <div style={s.divider} />

      {/* Services */}
      <div style={s.sectionLabel}>What we do</div>
      <div style={s.h2}>Our services</div>

      <p style={{ ...s.partLabel, marginTop: 0 }}>Part 1 Core Consulting</p>
      <div style={s.serviceGrid}>
        {services.part1.map((sv, i) => (
          <div key={i} style={s.serviceCard}>
            <div style={s.serviceName}>{sv.name}</div>
            <div style={s.serviceDesc}>{sv.desc}</div>
            <div style={s.servicePrice}>{sv.price}</div>
          </div>
        ))}
      </div>

      <p style={{ ...s.partLabel, marginTop: 20 }}>Part 2 Advisory Consulting (Annual Programme)</p>
      <p style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>A 12-month preventative partnership where Magsmen acts as a senior strategic mind reviewing major decisions <em>before</em> they are made. For founders who understand that the cost of a wrong decision is far higher than the advisory fee.</p>
      <div style={s.serviceGrid}>
        {services.part2.map((sv, i) => (
          <div key={i} style={{ ...s.serviceCard, borderLeft: `3px solid ${sv.border}`, gridColumn: sv.span === 2 ? "span 2" : undefined }}>
            <div style={s.serviceName}>{sv.name}</div>
            <div style={s.serviceDesc}>{sv.desc}</div>
            <div style={s.servicePrice}>{sv.price}</div>
          </div>
        ))}
      </div>

      <p style={{ ...s.partLabel, marginTop: 20 }}>Part 3 Legal Consulting</p>
      <div style={s.serviceGrid}>
        {services.part3.map((sv, i) => (
          <div key={i} style={{ ...s.serviceCard, gridColumn: sv.span === 2 ? "span 2" : undefined }}>
            <div style={s.serviceName}>{sv.name}</div>
            <div style={s.serviceDesc}>{sv.desc}</div>
            <div style={s.servicePrice}>{sv.price}</div>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* Clients */}
      <div style={s.sectionLabel}>Our work</div>
      <div style={s.h2}>Businesses we have worked with</div>
      <div style={s.clientRow}>
        {clients.map((c, i) => (
          <div key={i} style={s.clientCard}>
            <div style={s.clientInitial}>{c.init}</div>
            <div>
              <div style={s.clientName}>{c.name}</div>
              <div style={s.clientDesc}>{c.desc}</div>
              <div style={s.clientTag}>{c.tag}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={s.divider} />

      {/* Ideal Client */}
      <div style={s.sectionLabel}>Who to bring</div>
      <div style={s.h2}>The right client for Magsmen</div>
      <div style={s.idealGrid}>
        {idealCards.map((c, i) => (
          <div key={i} style={s.idealCard}>
            <div style={s.idealLabel}>{c.label}</div>
            <div style={s.idealText}>{c.text}</div>
          </div>
        ))}
      </div>

      <div style={s.yesNo}>
        <div style={s.yesBox}>
          <div style={s.ynLabel(colors.greenText)}>Right fit</div>
          {yesItems.map((item, i) => (
            <div key={i} style={s.ynItem}><Dot color="#4caf50" />{item}</div>
          ))}
        </div>
        <div style={s.noBox}>
          <div style={s.ynLabel(colors.redText)}>Not a fit</div>
          {noItems.map((item, i) => (
            <div key={i} style={s.ynItem}><Dot color="#e57373" />{item}</div>
          ))}
        </div>
      </div>

      <div style={s.divider} />

      {/* Journey */}
      <div style={s.sectionLabel}>Your role</div>
      <div style={s.h2}>The full journey from lead to client</div>
      <p style={{ fontSize: 13.5, color: "#555", marginBottom: 20 }}>You are not just making an introduction. You stay in the room from the first conversation to the signed contract. Here is exactly what that looks like.</p>

      <div style={s.journeyWrap}>
        {journeySteps.map((step, i) => (
          <div key={i} style={s.journeyStep}>
            <div style={s.journeyLeft}>
              <div style={s.journeyNum}>{i + 1}</div>
              {i < journeySteps.length - 1 && <div style={s.journeyLine} />}
            </div>
            <div style={s.journeyContent}>
              <div style={s.journeyOwner}>{step.owner}</div>
              <div style={s.journeyTitle}>{step.title}</div>
              <div style={s.journeyDesc}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={s.boundaryBox}>
        <div style={s.boundaryTitle}>Important know your boundaries</div>
        {boundaryItems.map((item, i) => (
          <div key={i} style={s.boundaryItem}><Dot color={colors.yellowDot} />{item}</div>
        ))}
      </div>

      <div style={s.divider} />

      {/* Footer */}
      <div style={s.footer}>
        <div style={s.footerInfo}>
          Magsmen Strategy Consultants<br />
          <span style={{ color: "#bbb" }}>Grofesion Innovations Private Limited</span>
          <div style={s.confTag}>Confidential · For Growth Partner use only</div>
        </div>
        <div style={s.footerContact}>
          connect@magsmen.com<br />
          +91 90449 10449<br />
          magsmen.com
        </div>
      </div>
    </div>
  );
}