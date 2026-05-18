import { useState, useEffect, useRef } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --ink:#0F0A1A;
    --violet:#7C3AED;
    --violet-light:#EDE9FE;
    --violet-mid:#C4B5FD;
    --cream:#F8F5FF;
    --dark:#1A0A2E;
    --gold:#C5A572;
    --white:#FFFFFF;
    --border:rgba(124,58,237,0.13);
    --font:'Montserrat',sans-serif;
  }
  html{scroll-behavior:smooth}
  body{font-family:var(--font);color:var(--ink);background:var(--white);overflow-x:hidden;font-size:16px;line-height:1.7}

  .mg-prog{position:fixed;top:0;left:0;height:3px;background:var(--violet);z-index:9999;transition:width .1s}

  .mg-nav{position:fixed;top:3px;left:0;right:0;z-index:900;background:rgba(255,255,255,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:.9rem 1.4rem;display:flex;align-items:center;justify-content:space-between}
  .mg-nav-logo{font-size:.95rem;font-weight:700;letter-spacing:.08em;color:var(--ink);text-decoration:none}
  .mg-nav-logo span{color:var(--violet)}
  .mg-nav-links{display:flex;gap:2rem;list-style:none}
  .mg-nav-links a{font-size:.78rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink);text-decoration:none;transition:color .2s}
  .mg-nav-links a:hover{color:var(--violet)}
  .mg-nav-cta{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--violet);color:var(--white);padding:.55rem 1.2rem;border-radius:2px;text-decoration:none;transition:background .2s}
  .mg-nav-cta:hover{background:#5B21B6}

  .mg-breadcrumb{padding:1rem 1.5rem;background:var(--cream);border-bottom:1px solid var(--border);margin-top:64px}
  .mg-breadcrumb-inner{max-width:1100px;margin:0 auto;display:flex;gap:.5rem;align-items:center;font-size:.75rem;color:#9CA3AF}
  .mg-breadcrumb a{color:#6B7280;text-decoration:none;transition:color .2s}
  .mg-breadcrumb a:hover{color:var(--violet)}
  .mg-breadcrumb span{color:var(--violet)}

  .mg-hero{padding:6rem 1.5rem 4rem;background:var(--white);border-bottom:1px solid var(--border)}
  .mg-hero-inner{max-width:1100px;margin:0 auto}
  .mg-hero-eyebrow{display:inline-flex;align-items:center;gap:.5rem;font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--violet);margin-bottom:1.2rem}
  .mg-hero-eyebrow::before{content:'';display:block;width:24px;height:2px;background:var(--violet)}
  .mg-hero h1{font-size:clamp(1.9rem,4.5vw,3.2rem);font-weight:800;line-height:1.1;letter-spacing:-.025em;color:var(--ink);margin-bottom:1.25rem;max-width:800px}
  .mg-hero-sub{font-size:1rem;color:#4B5563;line-height:1.8;max-width:720px;margin-bottom:2rem}

  .mg-sec{padding:5rem 1.5rem}
  .mg-sec-inner{max-width:1100px;margin:0 auto}
  .mg-sec-alt{background:var(--cream)}
  .mg-sec-dark{background:var(--dark)}
  .mg-sec-label{font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--violet);margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}
  .mg-sec-label::before{content:'';display:block;width:18px;height:2px;background:var(--violet)}
  .mg-sec-dark .mg-sec-label{color:var(--gold)}
  .mg-sec-dark .mg-sec-label::before{background:var(--gold)}
  .mg-h2{font-size:clamp(1.6rem,3.2vw,2.4rem);font-weight:800;line-height:1.15;letter-spacing:-.02em;color:var(--ink);margin-bottom:1.25rem}
  .mg-sec-dark .mg-h2{color:var(--white)}
  .mg-p{color:#4B5563;line-height:1.8}

  .mg-isplit{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start}
  @media(max-width:767px){.mg-isplit{grid-template-columns:1fr}}

  .mg-body-block{max-width:640px}
  .mg-body-block p{font-size:.95rem;color:#374151;line-height:1.85;margin-bottom:1.25rem}
  .mg-body-block p:last-child{margin-bottom:0}
  .mg-body-block strong{color:var(--ink);font-weight:700}

  .mg-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem}
  .mg-pillar{padding:1.5rem;border:1px solid var(--border);background:var(--white);border-radius:3px;position:relative;overflow:hidden}
  .mg-pillar::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--violet)}
  .mg-pillar-num{font-size:.68rem;font-weight:700;letter-spacing:.12em;color:var(--violet);margin-bottom:.5rem;text-transform:uppercase}
  .mg-pillar-title{font-size:.88rem;font-weight:700;color:var(--ink);margin-bottom:.4rem}
  .mg-pillar-body{font-size:.78rem;color:#6B7280;line-height:1.65}

  .mg-founder-card{background:var(--dark);padding:2.5rem;border-radius:3px;position:relative;overflow:hidden}
  .mg-founder-card::before{content:'SN';position:absolute;right:-1rem;bottom:-1rem;font-size:8rem;font-weight:800;color:rgba(124,58,237,.08);line-height:1;pointer-events:none}
  .mg-founder-img-area{width:64px;height:64px;border-radius:2px;background:var(--violet);display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem}
  .mg-founder-img-area svg{width:32px;height:32px;stroke:white;fill:none;stroke-width:1.5}
  .mg-founder-name{font-size:1.1rem;font-weight:800;color:var(--white);letter-spacing:-.01em;margin-bottom:.25rem}
  .mg-founder-role{font-size:.75rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:1.25rem}
  .mg-founder-bio{font-size:.85rem;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:1.5rem}
  .mg-cred-list{list-style:none;display:flex;flex-direction:column;gap:.6rem}
  .mg-cred-item{display:flex;align-items:flex-start;gap:.75rem;font-size:.8rem;color:rgba(255,255,255,.55)}
  .mg-cred-item::before{content:'';display:block;width:4px;height:4px;border-radius:50%;background:var(--violet);flex-shrink:0;margin-top:8px}
  .mg-cred-item strong{color:rgba(255,255,255,.85);font-weight:600}

  .mg-strip{margin-top:1.5rem;padding:1.25rem;border:1px solid rgba(255,255,255,.08);border-radius:3px}
  .mg-strip-label{font-size:.65rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.75rem}
  .mg-strip-items{display:flex;flex-wrap:wrap;gap:.5rem}
  .mg-strip-pill{font-size:.72rem;font-weight:600;padding:.3rem .75rem;border-radius:12px;background:rgba(124,58,237,.2);color:rgba(255,255,255,.7);border:1px solid rgba(124,58,237,.3)}
  .mg-strip-pill.gold{background:rgba(197,165,114,.12);color:var(--gold);border-color:rgba(197,165,114,.25)}

  .mg-not-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:2rem}
  @media(max-width:599px){.mg-not-grid{grid-template-columns:1fr}}
  .mg-not-card{padding:1.8rem;border:1px solid var(--border);background:var(--white);border-radius:3px}
  .mg-not-label{font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D1D5DB;margin-bottom:.75rem;display:flex;align-items:center;gap:.4rem}
  .mg-not-label::before{content:'✕';color:#E5E7EB;font-size:.8rem}
  .mg-not-card h3{font-size:.88rem;font-weight:700;color:#9CA3AF;margin-bottom:.5rem;text-decoration:line-through;text-decoration-color:#E5E7EB}
  .mg-not-card p{font-size:.82rem;color:#374151;line-height:1.7}
  .mg-is-card{border-color:var(--violet);background:var(--violet-light)}
  .mg-is-label{font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--violet);margin-bottom:.75rem;display:flex;align-items:center;gap:.4rem}
  .mg-is-label::before{content:'✓';color:var(--violet);font-size:.8rem}
  .mg-is-card h3{font-size:.88rem;font-weight:700;color:var(--violet);margin-bottom:.5rem}
  .mg-is-card p{font-size:.82rem;color:#4C1D95;line-height:1.7}

  .mg-schema-ref{background:#0F172A;border:1px solid rgba(124,58,237,.2);border-radius:4px;padding:2rem;margin-top:2rem;overflow:hidden}
  .mg-schema-ref-label{font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
  .mg-schema-ref pre{font-family:'Courier New',monospace;font-size:.72rem;color:#94A3B8;line-height:1.7;white-space:pre-wrap;word-break:break-all;max-height:320px;overflow-y:auto}

  .mg-timeline{margin-top:2.5rem;position:relative}
  .mg-timeline::before{content:'';position:absolute;left:18px;top:0;bottom:0;width:2px;background:var(--border)}
  .mg-tl-item{display:flex;gap:1.5rem;margin-bottom:2rem;position:relative}
  .mg-tl-dot{width:38px;height:38px;border-radius:50%;background:var(--violet-light);border:2px solid var(--violet);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;z-index:1}
  .mg-tl-dot span{font-size:.65rem;font-weight:800;color:var(--violet)}
  .mg-tl-content{padding-top:.3rem}
  .mg-tl-year{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--violet);margin-bottom:.3rem}
  .mg-tl-title{font-size:.9rem;font-weight:700;color:var(--ink);margin-bottom:.35rem}
  .mg-tl-desc{font-size:.82rem;color:#6B7280;line-height:1.7}

  .mg-cta-sec{background:var(--dark);padding:6rem 1.5rem;text-align:center;position:relative;overflow:hidden}
  .mg-cta-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}
  .mg-cta-tag{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem}
  .mg-cta-sec h2{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;color:var(--white);letter-spacing:-.02em;margin-bottom:1.25rem;line-height:1.15}
  .mg-cta-sec p{font-size:.95rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:2.5rem}
  .mg-cta-buttons{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center}
  .mg-btn-gold{display:inline-flex;align-items:center;gap:.5rem;background:var(--gold);color:var(--dark);font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.9rem 2rem;border-radius:2px;text-decoration:none;transition:all .2s}
  .mg-btn-gold:hover{background:#D4B07A}
  .mg-btn-outline-white{display:inline-flex;align-items:center;background:transparent;color:rgba(255,255,255,.8);font-size:.8rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;padding:.9rem 2rem;border:1.5px solid rgba(255,255,255,.2);border-radius:2px;text-decoration:none;transition:all .2s}
  .mg-btn-outline-white:hover{border-color:rgba(255,255,255,.5);color:var(--white)}

  .mg-ticker-wrap{background:var(--dark);padding:.65rem 0;overflow:hidden;white-space:nowrap}
  .mg-ticker-inner{display:inline-block;animation:mgticker 32s linear infinite}
  .mg-ticker-item{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);padding:0 2.5rem}
  .mg-ticker-item span{color:var(--gold)}
  @keyframes mgticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}

  footer.mg-footer{background:var(--ink);padding:3rem 1.5rem;text-align:center}
  .mg-footer-inner{max-width:1100px;margin:0 auto}
  .mg-footer-logo{font-size:1rem;font-weight:700;letter-spacing:.08em;color:var(--white);margin-bottom:.5rem}
  .mg-footer-logo span{color:var(--violet)}
  .mg-footer-tagline{font-size:.75rem;color:rgba(255,255,255,.3);margin-bottom:2rem;letter-spacing:.06em;text-transform:uppercase}
  .mg-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;margin-bottom:2rem}
  .mg-footer-links a{font-size:.75rem;font-weight:600;color:rgba(255,255,255,.35);text-decoration:none;text-transform:uppercase;letter-spacing:.08em;transition:color .2s}
  .mg-footer-links a:hover{color:var(--violet)}
  .mg-footer-copy{font-size:.72rem;color:rgba(255,255,255,.2)}

  .reveal{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
  .reveal.visible{opacity:1;transform:translateY(0)}
  
  .mg-isplit {
  display: flex;
  justify-content: center;
}

.mg-isplit > div {
  width: 100%;
  max-width: 900px;
}
`;

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const st = document.documentElement.scrollTop;
      const sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(sh > 0 ? (st / sh) * 100 : 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function ProgressBar() {
  const progress = useScrollProgress();
  return <div className="mg-prog" style={{ width: progress + "%" }} />;
}

function Nav() {
  return (
    <nav className="mg-nav">
      <a href="https://www.magsmen.com" className="mg-nav-logo">MAG<span>S</span>MEN</a>
      <ul className="mg-nav-links">
        <li><a href="https://www.magsmen.com/about">About</a></li>
        <li><a href="https://www.magsmen.com/works">Works</a></li>
        <li><a href="https://www.magsmen.com/ideas">Ideas</a></li>
        <li><a href="https://www.magsmen.com/contact">Contact</a></li>
      </ul>
      <a
        href="mailto:connect@magsmen.com,sandeep@magsmen.com?subject=Discovery%20Call%20Request&body=Hi%20Magsmen%2C%20I%20would%20like%20to%20discuss%20working%20together."
        className="mg-nav-cta"
      >Book a Call</a>
    </nav>
  );
}

function Breadcrumb() {
  return (
    <div className="mg-breadcrumb">
      <div className="mg-breadcrumb-inner">
        <a href="https://www.magsmen.com">Home</a>
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" />
        </svg>
        <span>About Magsmen</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="mg-hero">
      <div className="mg-hero-inner">
        <div className="mg-hero-eyebrow">About Magsmen</div>
        <h1>We are not an agency. We are the strategic layer that determines what an agency should do.</h1>
        <p className="mg-hero-sub">
          Magsmen is a strategy consulting firm founded in 2020 in Andhra Pradesh. We build brand strategy, positioning architecture, and legal brand protection for founders, MSMEs, and growing businesses across India. Our advisory model means we tell businesses what their brand must do, and we build the system that sustains it.
        </p>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [
    "Founded 2020", "■", "Strategic Advisory Firm", "■", "16 Industry Sectors", "■",
    "Legal Brand Protection", "■", "Hyderabad & Pan-India", "■", "Fortune 25 Client Work", "■",
    "Founded 2020", "■", "Strategic Advisory Firm", "■", "16 Industry Sectors", "■",
    "Legal Brand Protection", "■", "Hyderabad & Pan-India", "■", "Fortune 25 Client Work", "■",
  ];
  return (
    <div className="mg-ticker-wrap" aria-hidden="true">
      <div className="mg-ticker-inner">
        {items.map((item, i) => (
          <span key={i} className="mg-ticker-item">
            {item === "■" ? <span>&#9632;</span> : item}
          </span>
        ))}
      </div>
    </div>
  );
}

function WhoWeAre() {
  const pillars = [
    { num: "01", title: "Strategy before execution", body: "No deliverable goes to execution without a strategic foundation. We define the direction before anyone creates anything." },
    { num: "02", title: "Legal integration", body: "Brand protection is not a separate service. It is embedded in every brand engagement from the first session." },
    { num: "03", title: "Advisory model only", body: "We do not compete with your agency. We work above it, giving your vendors the strategic context they need to execute correctly." },
    { num: "04", title: "Founder-integrated thinking", body: "In Indian MSMEs, the founder is the brand's most powerful asset. We build systems that leverage that, rather than ignore it." },
  ];
  const creds = [
    { label: "TEDx Speaker", rest: "" },
    { label: "Consultant of the Year 2023", rest: " — The CEO Magazine" },
    { label: "Chair of Jury", rest: " — SMARTIES APAC Awards" },
    { label: "MMA Global Awards Jury", rest: " — Google, Samsung, Apple, Loreal" },
    { label: "India Top 100", rest: " Admiring Marketing Leaders" },
    { label: "International MBA", rest: " — Deakin University, Melbourne" },
    { label: "Enrolled Advocate", rest: " — Bar Council of India" },
  ];
  return (
    <section className="mg-sec">
      <div className="mg-sec-inner">
        <div className="mg-isplit reveal">
          <div>
            <div className="mg-sec-label">Who we are</div>
            <h2 className="mg-h2">India's only brand consulting firm where legal protection is built into the strategy, not added at the end</h2>
            <div className="mg-body-block" style={{ marginTop: "1.5rem" }}>
              <p>Magsmen was built from a specific observation: most businesses in India invest in marketing before they have built a brand, invest in advertising before they have a positioning, and invest in growth before they have the strategic infrastructure to sustain it. The result is capital spent on amplifying something that has not yet been defined.</p>
              <p>We correct that sequence. Before any MSME or founder spends a rupee on visibility, we build the foundation. What the brand stands for. Who it is for. Why it is different from every competitor in its category. How it must communicate to earn trust, not attention. And whether the brand assets that are being built are legally protected or exposed.</p>
              <p><strong>We are neither a branding agency nor a digital marketing firm.</strong> We are a strategic advisory practice. We do not execute design, manage social media, or run paid campaigns. We produce the strategy that tells every other vendor what to do and why. That distinction is not a limitation. It is our entire value.</p>
              <p>Since 2020, Magsmen has worked across 16 industry sectors, contributed to IPL-sponsor brand outcomes, and worked with clients ranging from local MSMEs in Andhra Pradesh and Telangana to Fortune 25 company brand evaluations. Every engagement follows the same principle: clarity before activity, strategy before spending, and brand before marketing.</p>
            </div>
            <div className="mg-pillars reveal">
              {pillars.map(p => (
                <div key={p.num} className="mg-pillar">
                  <div className="mg-pillar-num">{p.num}</div>
                  <div className="mg-pillar-title">{p.title}</div>
                  <p className="mg-pillar-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mg-founder-card reveal">
              <div className="mg-founder-img-area">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="mg-founder-name">Sandeep N</div>
              <div className="mg-founder-role">Founder and Brand Strategist</div>
              <p className="mg-founder-bio">
                Sandeep N founded Magsmen in 2020 after identifying a structural gap in the Indian consulting market: no firm was combining strategic brand positioning with legal brand protection at a scale accessible to MSMEs and founders. He brings together an international MBA from Deakin University Melbourne, an enrolled advocate credential, and direct experience working on brand evaluations across global categories.
              </p>
              <ul className="mg-cred-list">
                {creds.map((c, i) => (
                  <li key={i} className="mg-cred-item">
                    <strong>{c.label}</strong>{c.rest}
                  </li>
                ))}
              </ul>
              <div className="mg-strip">
                <div className="mg-strip-label">Industry Collaborations</div>
                <div className="mg-strip-items">
                  {["Disney+ Hotstar", "ASCI", "VIT-AP University", "NRT Society", "Indian Red Cross"].map(item => (
                    <span key={item} className="mg-strip-pill">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mg-strip">
                <div className="mg-strip-label">Recognitions</div>
                <div className="mg-strip-items">
                  {["Clutch Top Agency India 2023", "IMA South Awards 2021", "Best Rebranding Strategy"].map(item => (
                    <span key={item} className="mg-strip-pill gold">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeAreNot() {
  return (
    <section className="mg-sec mg-sec-alt">
      <div className="mg-sec-inner reveal">
        <div className="mg-sec-label">Positioning clarity</div>
        <h2 className="mg-h2">What Magsmen is, and what it is not</h2>
        <p style={{ maxWidth: "680px", marginBottom: ".5rem" }}>Most prospective clients arrive with one of three misunderstandings. Correcting them upfront protects both the engagement and the outcome.</p>
        <div className="mg-not-grid">
          <div className="mg-not-card">
            <div className="mg-not-label">Not this</div>
            <h3>A branding agency</h3>
            <p>We do not design logos, create visual identity systems, or produce brand collateral. We produce the strategic document that tells your design agency what the visual identity must communicate. The strategy comes before the design, and it comes from us.</p>
          </div>
          <div className="mg-not-card">
            <div className="mg-not-label">Not this</div>
            <h3>A digital marketing firm</h3>
            <p>We do not manage social media, run paid advertising campaigns, or produce content calendars. Marketing is the amplification of a brand. We build the brand. What you amplify after that is your and your agency's responsibility.</p>
          </div>
          <div className="mg-not-card mg-is-card">
            <div className="mg-is-label">This</div>
            <h3>A strategic advisory firm</h3>
            <p>We build brand strategy, positioning architecture, identity standards, legal brand protection, and governance systems. We are the strategic layer above execution. Every other vendor you work with executes within the direction we provide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const schemaCode = `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.magsmen.com/#organization",
  "name": "Magsmen Brand Consultants",
  "legalName": "Grofesion Innovations Pvt Ltd",
  "url": "https://www.magsmen.com",
  "email": "connect@magsmen.com",
  "telephone": "+91-90449-10449",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th Floor, Icon Spaces,
    5-98-57/5, 6th Lane, Brodipet",
    "addressLocality": "Guntur",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "522002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "16.3067",
    "longitude": "80.4365"
  },
  "areaServed": "India",
  "priceRange": "INR 50,000+",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday",
    "Wednesday","Thursday","Friday"],
    "opens": "10:00",
    "closes": "19:00"
  }],
  "foundingDate": "2020",
  "description": "India's strategic brand consulting
  firm combining brand strategy with legal brand
  protection for founders and MSMEs."
}`;

function MilestonesAndSchema() {
  const timeline = [
    { dot: "20", year: "2020", title: "Magsmen founded in Guntur, Andhra Pradesh", desc: "Built as an advisory firm from day one, not a creative agency that evolved into consulting. First clients in FMCG and hospitality." },
    { dot: "21", year: "2021", title: "IMA South Awards recognition. 16-sector client portfolio established.", desc: "Expanded across industry verticals. First personal brand consulting engagements for South Indian celebrities and founders." },
    { dot: "22", year: "2022", title: "IPL and national entertainment sponsor client outcomes. 10x brand growth documented.", desc: "Clients reached national sponsorship scale within nine months of brand strategy engagement. National media coverage." },
    { dot: "23", year: "2023", title: "Consultant of the Year. Clutch Top Agency India. SMARTIES APAC Jury Chair.", desc: "Recognised globally across three independent platforms. Sandeep N appointed jury chair for SMARTIES APAC alongside Google, Samsung, Apple, and Loreal jury members." },
    { dot: "25", year: "2025", title: "Stature and Linkfluence programmes launched. India and global reach.", desc: "New service architecture for founders and executives building international personal authority. Operations expanded across Hyderabad and Guntur." },
  ];
  return (
    <section className="mg-sec ">
      <div className="mg-sec-inner">
        <div className="mg-isplit reveal">
          <div>
            <div className="mg-sec-label">Our journey</div>
            <h2 className="mg-h2">From Andhra Pradesh to India's boardrooms</h2>
            <p style={{ maxWidth: "560px", marginBottom: "1rem" }}>Magsmen was built without external funding, without an agency model, and without compromising on the advisory-first positioning that defines what we are.</p>
            <div className="mg-timeline">
              {timeline.map(t => (
                <div key={t.year} className="mg-tl-item">
                  <div className="mg-tl-dot"><span>{t.dot}</span></div>
                  <div className="mg-tl-content">
                    <div className="mg-tl-year">{t.year}</div>
                    <div className="mg-tl-title">{t.title}</div>
                    <p className="mg-tl-desc">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <div className="mg-sec-label">For your web developer</div>
            <h2 className="mg-h2" style={{ fontSize: "1.4rem" }}>
              LocalBusiness schema — implement this in your site &lt;head&gt;
            </h2>
            <p style={{ fontSize: ".85rem", marginBottom: "1rem" }}>
              Copy the schema block below into the{" "}
              <code style={{ background: "var(--cream)", padding: ".15rem .4rem", borderRadius: "2px", fontSize: ".82rem", color: "var(--violet)" }}>&lt;head&gt;</code>{" "}
              of every page on magsmen.com. This tells Google your business location, services, hours, and credentials in a machine-readable format. It directly improves local search visibility and eligibility for rich results.
            </p>
            <div className="mg-schema-ref">
              <div className="mg-schema-ref-label">Implementation: paste into &lt;head&gt; of magsmen.com</div>
              <pre>{schemaCode}</pre>
            </div>
            <p style={{ fontSize: ".78rem", color: "#9CA3AF", marginTop: "1rem" }}>
              This is the core schema block. The full version with service catalogue, founder Person schema, and FAQ schema is embedded in the &lt;head&gt; of this page and ready to copy.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mg-cta-sec">
      <div className="mg-cta-inner reveal">
        <div className="mg-cta-tag">Work With Magsmen</div>
        <h2>A brand that cannot explain why it exists will not survive a market that has too many options.</h2>
        <p>Every engagement begins with a structured discovery conversation. We assess your current position, identify the gaps that matter, and tell you exactly what building a real brand requires for your business.</p>
        <div className="mg-cta-buttons">
          <a
            href="mailto:connect@magsmen.com,sandeep@magsmen.com?subject=Enquiry%20from%20About%20Page&body=Hi%20Magsmen%2C%0A%0AI%20visited%20your%20about%20page%20and%20would%20like%20to%20discuss%20working%20together.%0A%0ABusiness%20name%3A%0AIndustry%3A%0ACity%3A%0A%0APlease%20get%20in%20touch."
            className="mg-btn-gold"
          >Start the Conversation</a>
          <a href="/case-studies" className="mg-btn-outline-white">View Case Work</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mg-footer">
      <div className="mg-footer-inner">
        <div className="mg-footer-logo">MAG<span>S</span>MEN</div>
        <div className="mg-footer-tagline">Strategic Brand Consultants for Indian Businesses</div>
        <div className="mg-footer-links">
          <a href="https://www.magsmen.com">Home</a>
          <a href="/about">About</a>
          <a href="/case-studies">Works</a>
          <a href="/contact">Contact</a>
          <a href="mailto:connect@magsmen.com">connect@magsmen.com</a>
        </div>
        <div className="mg-footer-copy">
          A division of Grofesion Innovations Private Limited &nbsp;|&nbsp; Hyderabad and Guntur, India &nbsp;|&nbsp; www.magsmen.com
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <style>{css}</style>
      {/* <ProgressBar />
      <Nav />
      <Breadcrumb /> */}
      <Hero />
      <Ticker />
      <WhoWeAre />
      <WhatWeAreNot />
      <MilestonesAndSchema />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Award,ChevronUp,ChevronDown, Users, Target, TrendingUp, CheckCircle, Star, Link, ChevronRight, Eye, Handshake, Rocket, Sparkles, Trophy } from 'lucide-react';
// import aboutbackgroundimage from '/assets/banners/888787834.jpeg';

// import telugufoodstestimonial from '/assets/testimonials/telugu-foods.png'
// import xxxtestimonial from '/assets/testimonials/xxx.png'
// import vsbtestimonial from '/assets/testimonials/homepage-testimonial-vsb-168-150.png'
// import bhramaratestimonial from '/assets/testimonials/bhramara.png'
// import sumatestimonial from '/assets/testimonials/suma.png'
// import tenalidoublehorsetestimonial from '/assets/testimonials/tenali-double-horse-200x100.png'
// import getstartedimage from "/assets/testimonials/getstartted-image.jpg";
// import monogramlatestlogo from "/assets/banners/monogram-latest.png";
// import servicebrand from "/assets/banners/service-brand.png";
// import brandconsulting from "/assets/services/brand-consulting.png";
// import award1 from '/assets/awards/awards1.png'
// import award2 from '/assets/awards/awards2.png'
// import award3 from '/assets/awards/awards3.png'
// import aboutimage from '/assets/banners/aboutimage.png';


// import magsmenSweatTeluguFoods from '/assets/Telugu-foods.jpg';
// import magsmenColors from '/assets/magsmen-homepage-clients-colors-168x168.png';
// import magsmenTenaliDoubleHorse from '/assets/magsmen-homepage-clients-tenalidoublehorse-168x168.png';
// import magsmenTriplexxx from '/assets/magsmen-homepage-clients-triplexxx-168x168.png';
// import magsmenVsb from '/assets/magsmen-homepage-clients-vsb-168x168.png';
// import sumaFilmyArts from '/assets/suma-filmy-arts.png';
// import instantFoods from '/assets/34.png';
// import sumaKanakala from '/assets/suma-kanakala.png';
// import cargil from '/assets/cargil.png';
// import magsmenZavane from '/assets/magsmen-homepage-clients-zavane-168x168.png';
// import logo4 from '/assets/logo4.png';
// import magsenJayalakshmi from '/assets/magsen-our-partner-jayalakshmi-168x168.png';
// import pronted from '/assets/pronted.png';
// import chakrasiddh from '/assets/chakrasiddh.png';
// import rootcapLion from '/assets/magsen-our-partner-rootcap-lion-168x168.png';
// import rootcapLogo from '/assets/magsen-our-partner-rootcap-logo-168x168.png';
// import magsenMvrLogo from '/assets/magsen-our-partner-mvr-logo-168x168.png';
// import logo6 from '/assets/6.png';
// import bdLogo1 from '/assets/BD-Logo-1.png';
// import karumaunchi from '/assets/17.png';
// import greatindia from '/assets/12.png';
// import siri from '/assets/31.png';
// import crown from '/assets/8.png';
// import pemmasaniAssociates from '/assets/27.png';
// import jayacottonProducts from '/assets/magsmen-homepage-clients-jayacotton-168x168.png';
// import manna from '/assets/21.png';
// import theBox from '/assets/the-box.png';
// import natureimage from '/assets/NATURE-IMAGE-TWO.png';
// import magsmentelugufoods from '/assets/Telugu-foods.jpg'
// import magsmensuryacolors from '/assets/Surya-Colours.jpg'
// import magsmentdhrishika from '/assets/tdh-rishika.png'
// import magsmentriplex from '/assets/Triplex.jpg'
// import magsmenvsb from '/assets/VSB.png'
// import magsmenzavaine from '/assets/Zavaiine.jpg'
// import hyperpersonalizationcraftingbrandexperiences from '/assets/blogs/hyper-personalization-crafting-brand-experiences-that-speak-to-gen-zs-individuality.jpg'
// import thefutureofbrandingtrendsshapingthenextdecade from '/assets/blogs/the-future-of-branding-trends-shaping-the-next-decade.jpg'
// import thebrandjourneyguidingstartupsfromideatoiconic from '/assets/blogs/the-brand-journey-guiding-startups-from-idea-to-iconic.jpg'
// import bannerone from "/assets/banners/banner-one1.png";
// import bannertwo from "/assets/banners/banner-two.png";
// import bannerfive from "/assets/banners/banner-five.jpeg";
// import bannersix from "/assets/banners/banner-six.jpeg";
// import bannerseven from "/assets/banners/banner-seven.jpeg";
// import { image } from 'framer-motion/client';
// import artbliss from '/assets/5.png'
// import ssvbuilders from '/assets/2.png'
// import apcotton from '/assets/3.png'
// import arjunsaiesports from '/assets/4.png'
// import coastal from '/assets/7.png'
// import jsolutionsa from '/assets/9.png'
// import goldencharriot from '/assets/10.png'
// import gowrishankaragencies from '/assets/11.png'
// import happyhome from '/assets/13.png'
// import ideabox from '/assets/14.png'
// import integrityglobalservices from '/assets/15.png'
// import kamadhenuuniforms from '/assets/16.png'
// import kiroula from '/assets/18.png'
// import kothamasdentalcare from '/assets/19.png'
// import lakshimisrinivasjewellery from '/assets/20.png'
// import maneathesaloon from '/assets/21.png'
// import manoharam from '/assets/22.png'
// import navyagrand from '/assets/23.png'
// import nikithmarketing from '/assets/24.png'
// import nut from '/assets/25.png'
// import pangea from '/assets/26.png'
// import pharmairos from '/assets/28.png'
// import sahajadryfruits from '/assets/29.png'
// import pkprimestudios from '/assets/30.png'
// import sikharanirman from '/assets/32.png'
// import thinkbiz from '/assets/36.png'
// import tufftrom from '/assets/38.png'
// import vignatafertility from '/assets/39.png'
// import vihasdesignstudio from '/assets/40.png'
// import dhruthihealthcare from '/assets/dhruthi-logo.png'
// import workmen from '/assets/logo2.png'
// import ninteenbuildersdevelopers from '/assets/logo4.png'
// import rootcap from '/assets/magsen-our-partner-rootcap-logo-168x168.png'
// import suparnaassociates from '/assets/magsen-our-partner-rootcap-suparna-168x168.png'
// import psk from '/assets/psk-logo-copy.png'
// import bhramaratownships from '/assets/works/bhramara.png'
// import lvlup from '/assets/logo.webp'
// import swargaseema from '/assets/swargaseema-logo-official.png'
// import sadananda from '/assets/sadananda-Final-Logo--orange.png'





//   const clients = [
//     { src: magsmenSweatTeluguFoods, alt: 'telugu-foods' },
//     { src: magsmenColors, alt: 'surya-colors' },
//     { src: magsmenTenaliDoubleHorse, alt: 'tenali-double-horse' },
//     { src: magsmenTriplexxx, alt: 'triplex' },
//     { src: magsmenVsb, alt: 'vsb' },
//     { src: sumaFilmyArts, alt: 'suma-filmy-arts' },
//     { src: instantFoods, alt: 'instant-foods' },
//     { src: sumaKanakala, alt: 'suma-kanakala' },
//     { src: cargil, alt: 'cargil' },
//     { src: magsmenZavane, alt: 'zavaine' },
//     { src: pronted, alt: 'prontend' },
//     { src: chakrasiddh, alt: 'chakrasiddh' },
//     { src: logo4, alt: '19builders' },
//     { src: magsenJayalakshmi, alt: 'jayalakshmi' },
//     { src: rootcapLion, alt: 'lion' },
//     { src: rootcapLogo, alt: 'rootcap' },
//     { src: magsenMvrLogo, alt: 'partner' },
//     { src: logo6, alt: 'bniguntur' },
//     { src: bdLogo1, alt: 'BD-Logo-1' },
//     { src: karumaunchi, alt: 'karumaunchi' },
//     { src: greatindia, alt: 'greatindia' },
//     { src: siri, alt: 'siri' },
//     { src: crown, alt: 'crown' },
//     { src: pemmasaniAssociates, alt: 'pemmasani-associates' },
//     { src: jayacottonProducts, alt: 'jayacotton-products' },
//     { src: manna, alt: 'manna' },
//     { src: theBox, alt: 'the-box' },
//     {src: artbliss, alt: 'art-bliss'},
//     {src: ssvbuilders, alt: 'ssv-builders'},
//     {src: apcotton, alt: 'ap-cotton'},
//     {src: arjunsaiesports, alt: 'arjunsaiesports'},
//     {src: coastal, alt: 'coastal'},
//     {src: jsolutionsa, alt: 'jsolutionsa'},
//     {src: goldencharriot, alt: 'goldencharriot'},
//     {src: gowrishankaragencies, alt: 'gowrishankaragencies'},
//     {src: happyhome, alt: 'happyhome'},
//     {src: ideabox, alt: 'ideabox'},
//     {src: integrityglobalservices, alt: 'integrityglobalservices'},
//     {src: kamadhenuuniforms, alt: 'kamadhenuuniforms'},
//     {src: kiroula, alt: 'kiroula'},
//     {src: kothamasdentalcare, alt: 'kothamasdentalcare'},
//     {src: lakshimisrinivasjewellery, alt: 'lakshimisrinivasjewellery'},
//     {src: maneathesaloon, alt: 'maneathesaloon'},
//     {src: manoharam, alt: 'manoharam'},
//     {src: navyagrand, alt: 'navyagrand'},
//     {src: nikithmarketing, alt: 'nikithmarketing'},
//     {src: nut, alt: 'nut'},
//     {src: pangea, alt: 'pangea'},
//     {src: pharmairos, alt: 'pharmairos'},
//     {src: sahajadryfruits, alt: 'sahajadryfruits'},
//     {src: pkprimestudios, alt: 'pkprimestudios'},
//     {src: sikharanirman, alt: 'sikharanirman'},
//     {src: thinkbiz, alt: 'thinkbiz'},
//     {src: tufftrom, alt: 'tufftrom'},
//     {src: vignatafertility, alt: 'vignatafertility'},
//     {src: vihasdesignstudio, alt: 'vihasdesignstudio'},
//     {src: dhruthihealthcare, alt: 'dhruthihealthcare'},
//     {src: workmen, alt: 'workmen'},
//     {src: ninteenbuildersdevelopers, alt: 'ninteenbuildersdevelopers'},
//     {src: suparnaassociates, alt: 'suparnaassociates'},
//     {src: psk, alt: 'psk'},
//     {src: bhramaratownships, alt: 'bhramaratownships'},
//     {src: lvlup, alt: 'lvlup'},
//     {src: swargaseema, alt: 'swargaseema'},
//     {src: sadananda, alt: 'sadananda'},

//   ];

  

//     const hengeItems = [
//     {
//       id: 1,
//       icon: <Trophy className="w-full h-full text-purple-200" />,
//       label: 'Consultant of the Year 2023',
//       shortDescription: 'Indian Brand Consultants Association', 
//       description: 'For outstanding advisory services and measurable client outcomes.', 
//       image: award1
//     },
//     {
//       id: 2,
//       icon: <Award className="w-full h-full text-purple-200" />,
//       label: 'Top 100 Admiring Marketing Leaders',
//       shortDescription: 'Global Admiring Council', 
//       description: 'Acknowledged among the world\'s most innovative marketing strategists.', 
//       image: award2
//     },
//     {
//       id: 3,
//       icon: <Sparkles className="w-full h-full text-purple-200" />,
//       label: 'Jury Member, MMA Global',
//       shortDescription: 'Mobile Marketing Association', 
//       description: 'Invited to evaluate global excellence in mobile marketing.', 
//       image: award3
//     },
//   ];

  


// const About = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const backgroundImages = [bannerseven]; 
//   const [showAll, setShowAll] = useState(false);



//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTextIndex((prev) => (prev + 1) % animatedHomeTexts.length);
//       setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000); 

//     return () => clearInterval(interval);
//   }, []);
 

// const displayedClients = showAll ? clients : clients.slice(0, 12);
//   const animatedHomeTexts = [
//     magsmenSweatTeluguFoods,
//     magsmenColors,
//     magsmenTenaliDoubleHorse,
//     magsmenTriplexxx,
//     magsmenVsb,
//     sumaFilmyArts,
//     instantFoods,
//     sumaKanakala,
//     cargil,
//     magsmenZavane,
//     logo4,
//     magsenJayalakshmi,
//     pronted,
//     chakrasiddh,
//     rootcapLion,
//     rootcapLogo,
//     magsenMvrLogo,
//     logo6,
//     bdLogo1,
//     karumaunchi,
//     greatindia,
//     siri,
//     crown,
//     pemmasaniAssociates,
//     jayacottonProducts,
//     manna,
//     theBox,
//     natureimage,
//     magsmentelugufoods,
//     magsmensuryacolors,
//     magsmentdhrishika,
//     magsmentriplex,
//     magsmenvsb,
//     magsmenzavaine
    
//   ]





//   const teamMembers = [
//     {
//       name: 'Sandeep N',
//       role: 'Founder & Chief Brand Strategist',
//       bio: 'Creator of InTalks & Sanstrategies. Consultant to IPL sponsors & Fortune 25 brands.',
//       image: 'SN'
//     },
//     {
//       name: 'Priya Sharma',
//       role: 'Senior Brand Strategist',
//       bio: 'Expert in FMCG and retail brand positioning with 6+ years experience.',
//       image: 'PS'
//     },
//     {
//       name: 'Rajesh Kumar',
//       role: 'Creative Director',
//       bio: 'Award-winning designer specializing in brand identity and visual systems.',
//       image: 'RK'
//     },
//     {
//       name: 'Anita Reddy',
//       role: 'Client Partner',
//       bio: 'Relationship management expert ensuring seamless brand transformations.',
//       image: 'AR'
//     }
//   ];

//   const achievements = [
//     'Consultant of the Year 2023',
//     'Top 100 Admiring Marketing Leaders',
//     'MMA Global Jury Member',
//     '100+ Brands Transformed',
//     '15+ Industries Served',
//     '8+ Years of Excellence'
//   ];

//   return (
//     <div className="min-h-screen overflow-x-hidden">
    
//       <section className="bg-right bg-no-repeat bg-gradient-to-br from-black h-[540px] bg-cover bg-no-repeat bg-center via-gray-900 to-black text-white py-20 overflow-hidden "
//       style={{ backgroundImage: `url(${aboutbackgroundimage})`}} 
//       >
       
//   <div className="absolute inset-0 bg-black/40"></div>
//         <div className=''></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 h-full flex items-center ">
//           <motion.div
//             initial={{ opacity: 0, y: 50, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="text-left"
//           >
//             <motion.h1 
//               className="text-3xl md:text-5xl font-light mb-6 text-black"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               We don't build brands.<br/>
// We build what brands are built on.
//               <motion.span 
//                 className="text-[#000]"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//               >
                
//               </motion.span>
//             </motion.h1>
//             <motion.p 
//               className="text-xl  max-w-3xl text-[#ffffff]/70 font-600"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//             Strategic clarity. Market positioning. Long term advantage.
// For Indian businesses ready to stop competing on price and start competing on meaning.

//             </motion.p>
//           </motion.div>
//         </div>
        
//       </section>

// <section className="bg-black py-36">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//       <div className='my-auto'>
//             <h2 className="text-4xl text-white font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight">Our Beginning:</h2>
//       </div>
     
//       <div className='mt-5'>
//         <p className="text-lg text-white leading-relaxed text-white">
//           We’ve observed a pattern over the years…
// Ambitious Indian businesses were investing in marketing, hiring agencies, launching campaigns and yet struggling to articulate their true value.
// The problem wasn’t effort,
// It was direction.

//         </p>
//          <p className="text-lg text-gray-100 leading-relaxed pt-5">
//           Magsmen was founded to bring strategic clarity into brand building by replacing guesswork with structure and short term noise with long term positioning.
// We don’t just build brands,
// We architect growth systems.

//         </p>
//       </div>
      
//     </div>
//   </div>
// </section>


// <section className="relative overflow-hidden bg-gray-50 py-28 overflow-x-hidden bg-gray-300 py-20">
//   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

   
//     <div className="lg:col-span-3">
//       <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
//         Vision
//       </h3>
//       <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
//     </div>

    
// <div className="lg:col-span-9">
//   <p className="leading-tight font-medium text-gray-900 max-w-5xl text-lg">
//     At Magsmen, we envision a world where brands are not just seen but felt.
//   </p>
// </div>
//   </div>
// </section>

// <section className="relative overflow-hidden bg-gray-50 py-5 overflow-hidden bg-gray-300 pb-20">
//   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

    
//     <div className="lg:col-span-3">
//       <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
//         Mission
//       </h3>
//       <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
//     </div>

   
// <div className="lg:col-span-9">
//   <p className="text-lg leading-tight font-medium text-gray-900 max-w-5xl">
//     We combine strategy and creativity to help your brand stand out, connect deeply and grow with purpose.

//     </p>
//     </div>
//     </div>
// </section>


//    <section className="relative bg-white py-20 overflow-hidden">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6">

    
//     <div className="text-center mb-20">
//       <h2 className="text-4xl md:text-5xl font-semibold mb-4">Our Journey</h2>
//       <p className="text-gray-500 max-w-2xl mx-auto">
//         From a regional brand consultancy to a strategic growth partner for ambitious brands.
//       </p>
//       <div className="w-16 h-[3px] bg-purple-400 mx-auto mt-6 rounded-full" />
//     </div>

   
//     <div className="relative">

     
//       <div
//         className="
//           absolute
//           top-0
//           bottom-0
//           left-4
//           md:left-1/2
//           w-[2px]
//           bg-gray-200
//           md:-translate-x-1/2
//         "
//       />

//       <div className="space-y-20">

       
//         {[
//           {
//             year: "2019",
//             title: "The Beginning",
//             desc: "Magsmen was founded with one belief: brands deserve more than last minute logos and borrowed frameworks. We started small, but we started with the purpose of helping businesses grow with clarity, strategy, and depth.",
//           },
//           {
//             year: "2020",
//             title: "The Growth",
//             desc: "We expanded our offerings and partnered with fast growing regional brands across FMCG and services. Founders began trusting us not just with campaigns, but with their long term positioning. Our team grew. So did their results.",
//           },
//           {
//             year: "2022",
//             title: "The Recognition",
//             desc: "Category leaders and challenger brands came to us. We delivered positioning shifts that translated into measurable business impact. National visibility followed. Not because we chased awards but because we chased outcomes.",
//           },
//           {
//             year: "Today — The Future",
//             title: "Building the Future",
//             desc: "We continue to partner with ambitious founders and leadership teams.Not for a single project. For the long haul.",
//           },
//         ].map((item, idx) => (
//           <div
//             key={idx}
//             className="
//               relative
//               flex
//               flex-col
//               md:flex-row
//               md:items-center
//             "
//           >
            
//             <div
//               className="
//                 absolute
//                 left-4
//                 md:left-1/2
//                 w-6
//                 h-6
//                 bg-white
//                 border-4
//                 border-purple-400
//                 rounded-full
//                 -translate-x-1/2
//                 mt-1
//               "
//             />

           
//             <div
//               className={`
//                 ml-12
//                 md:ml-0
//                 md:w-1/2
//                 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}
//               `}
//             >
//               <span className="inline-block px-4 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full mb-4">
//                 {item.year}
//               </span>
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   </div>
// </section>



     
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="aspect-square bg-gradient-to-br from-[#683FBF] to-[#5a35a3] rounded-2xl max-w-md mx-auto">
//                 <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                 
//                   <img src={aboutimage} alt="sandeep-img-oo" />
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold text-white mb-4 md:text-5xl font-light tracking-tight">The Founder</h2>
//               <h3 className="text-2xl text-[#683FBF] font-semibold mb-4">Sandeep N</h3>
//               <div className="space-y-4 text-gray-300">
                
//                 <p>Eight years ago, Sandeep stopped following the formula.</p>
//                 <p>While the industry chased viral moments and short-term wins, he asked a different question:
// What does it take for a brand to outlive its founder?</p>

//                 <p>He spent nearly a decade in deep research not just studying brand strategy, but market psychology, consumer behavior, and why some brands fade while others become legacy.</p>

//                 <p>Today his innovative approach has positioned Magsmen as a leading force in the industry.</p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <Star className="w-5 h-5 text-[#683FBF] mr-3" />
//                     Creator of InTalks & Sanstrategies
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-5 h-5 text-[#683FBF] mr-3" />
//                     Consultant to IPL sponsors & Fortune 25 brands
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-5 h-5 text-[#683FBF] mr-3" />
//                     Recognized as Consultant of the Year 2023
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-5 h-5 text-[#683FBF] mr-3" />
//                     8+ years of research in brand strategy
//                   </li>
//                 </ul>
//               </div>
//               <blockquote className="text-xl italic text-purple-100 mt-6 border-l-4 border-[#683FBF] pl-4">
//                 "Branding is about trust, identity, and connection. It's about building something that lives beyond you."
//               </blockquote>
//             </motion.div>
//           </div>
//         </div>
//       </section>



//  <section className="py-24 bg-gray-50/50 ">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-left mb-10"
//           >
//             <h2 className="text-6xl text-gray-900 mb-6 tracking-tight md:text-5xl font-light">The Process</h2>
//             <p className="text-xl text-gray-600 font-light max-w-3xl">
//               A disciplined progression from ambiguity to advantage.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               {
//                 step: '01',
//                 title: 'DIAGNOSE',
//                 description: 'We audit. We decode. We listen to what the market won\'t tell you directly.',
//                 bullets: [
//                   'Brand audit & competitive landscape',
//                   'Consumer perception research',
//                   'Strategic gap analysis'
//                 ],
//                 icon: <Users className="w-8 h-8 text-[#683FBF]" />
//               },
//               {
//                 step: '02',
//                 title: 'BLUEPRINT',
//                 description: 'We architect. We position. We give your brand a spine.',
//                 bullets: [
//                   'Market positioning & narrative',
//                   'Brand architecture',
//                   'Visual & verbal identity systems'
//                 ],
//                 icon: <TrendingUp className="w-8 h-8 text-[#683FBF]" />
//               },
//               {
//                 step: '03',
//                 title: 'FLIGHT',
//                 description: 'We launch. We scale. We stay as your strategic mentors.',
//                   bullets: [
//                     'Go-to-market activation',
//                     'Brand experience design',
//                     'Ongoing strategy stewardship'
//                   ],
//                 icon: <CheckCircle className="w-8 h-8 text-[#683FBF]" />
//               }
//             ].map((process, index) => (
//               <motion.div
//                 key={process.step}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-white p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-sm"
//                 style={{
//     background: "linear-gradient(to top left, rgba(255, 255, 255, 0.6), rgba(104, 63, 191, 0.7))",
//   }}
                
//               >
//                 <div className="flex items-center mb-8">
//                   <div className="bg-[#683FBF]/0 p-4 text-[#683FBF] mr-6">
//                     {process.icon}
//                   </div>
//                   <span className="text-5xl font-light text-gray-200 tracking-tight">{process.step}</span>
//                 </div>
//                 <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">{process.title}</h3>
//                 <p className="text-gray-600 leading-relaxed font-light text-lg">{process.description}</p>
//                 {process.bullets && (
//                   <ul className="mt-4 space-y-2">
//                     {process.bullets.map((bullet, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <CheckCircle className="w-5 h-5 text-[#683FBF] mt-1 mr-3" />
//                         <span className="text-gray-600">{bullet}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>





// <section
//   className="pt-14 text-white rounded-3xl mx-10 mt-[5rem]"
//   style={{
//     backgroundImage: `
//         linear-gradient(to top left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
//         url('/assets/awards/Main-File-White-Page.jpg')
//       `,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">

    
//     <div className="w-full text-left">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.5 }}
//         className="flex flex-col items-start"
//       >
//         <h2 className="text-4xl md:text-5xl font-light leading-snug tracking-tight text-white">
//           Professional
//         </h2>
//         <span className="text-6xl md:text-4xl font-bold tracking-tight text-white/70">
//           Awards
//         </span>
//       </motion.div>
//     </div>

    
//     <div className="w-full">
//       <ul className="space-y-0">
//         {hengeItems.map((item, index) => (
//           <motion.li
//             key={item.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
//             viewport={{ once: true, amount: 0.5 }}
//             className="py-10 border-b border-white/20 last:border-b-0"
//           >

//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

             
//               <div className="md:col-span-1 flex md:justify-start justify-center">
//                 <div className="relative w-14 h-14 flex items-center justify-center">
//                   <img
//                     src={item.image}
//                     alt={item.label}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>

//               <div className="md:col-span-4">
//                 <p className="text-xl font-bold uppercase text-white tracking-wide leading-snug">
//                   {item.label}
//                 </p>
//                 <p className="text-sm text-white/70 font-medium mt-1">
//                   {item.shortDescription}
//                 </p>
//               </div>
              

          
//               <div className="md:col-span-7">
//                 <p className="text-base text-white/70 font-light leading-relaxed">
//                   {item.description ||
//                     "Details about this professional recognition or achievement."}
//                 </p>
//               </div>

//             </div>

//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </section>





// <section className="py-20 bg-white ">
//   <div className="max-w-8xl mx-auto px-4 text-center ">

//     <div className="text-left ml-8">
//       <h2 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">
//         Trusted by India's Fastest Growing Brands
//       </h2>
//       <p className="text-xl text-gray-600 font-light max-w-2xl">
//         Over 100 brands across 15 industries have trusted Magsmen to guide their transformation.
//       </p>
//     </div>

    
//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 items-center justify-center">
//       {clients.map((client, index) => {
//         const total = clients.length;
       
//         const isNotFullRow = total % 6 !== 0;

//         return (
//           <div
//             key={index}
//             className={`p-6 text-center flex justify-center items-center
              
//             `}
           
//           >
//             <img
//               src={client.src}
//               alt={client.alt}
//               className="h-[90px] w-[90px] object-contain filter  transition duration-500"
//             />
//           </div>
//         );
//       })}

      
//       {clients.length > 6 &&
//         clients.map((_, index) =>
//           (index + 1) % 6 === 0 && index !== clients.length - 1 ? (
//             <div key={`divider-${index}`} className="col-span-full -my-2">
            
//             </div>
//           ) : null
//         )}
//     </div>

//   </div>
// </section>


//     </div>
//   );
// };

// export default About;





{/* Why We Exist */}
 {/* <section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight text-white">Why we exist</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      <div>
        <p className="text-lg text-white leading-relaxed">
          We saw Indian businesses struggling to articulate their value in a crowded market. Magsmen was built to bring strategic clarity to help brands stand out, scale up, and sustain in an ever-changing business environment.
        </p>
      </div>

      <div className="border-l-2 border-gray-200 pl-32">
        <p className="text-lg text-white leading-relaxed">
          Every business has a story worth telling. Our mission is to help you tell it in a way that resonates, converts, and creates lasting impact.
        </p>
      </div>
    </div>
  </div>
</section> */}


      {/* Vision, Mission & Promise */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-left mb-10"
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl font-light tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our foundation
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3">
            {[
              {
                title: 'Vision',
                description:
                  'At Magsmen, we envision a world where brands are not just seen but felt. We strive to create connections that resonate deeply, transforming ordinary interactions into memorable experiences.',
                icon: <Eye className="w-8 h-8" />,
              },
              {
                title: 'Mission',
                description:
                  'Our mission is to blend strategy with creativity, constructing smooth roads that lead brands to new heights. We are dedicated to understanding the unique essence of each brand and crafting bespoke solutions that amplify their presence.',
                icon: <Rocket className="w-8 h-8" />,
              },
              {
                title: 'Promise',
                description:
                  'We promise to be the bridge between your brand’s essence and its audience, turning strategies into meaningful experiences. With creativity, precision, and dedication, we ensure that every interaction strengthens your brand’s presence and leaves a lasting impact.',
                icon: <Handshake className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 0.9,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 shadow-lg text-left hover:shadow-2xl transition-all duration-500 group cursor-pointer h-[500px]"
              >
                <motion.div 
                  className="bg-purple-100 p-4 rounded-lg inline-block mb-4 text-[#683FBF] group-hover:bg-[#683FBF] group-hover:text-white transition-all duration-100"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#683FBF] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mt-20">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}







{/* <section className="relative overflow-hidden bg-white py-0 ">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    <div className="lg:col-span-3 mt-36 relative z-10">
      <h3 className="text-3xl font-semibold text-gray-900 mb-3">
        Values
      </h3>
      <div className="w-14 h-[4px] bg-purple-400 rounded-full" />
    </div>

  
    <div className="lg:col-span-9 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">

 
        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Purpose driven
        </div>

        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Insight-Led
        </div>

        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
          Human-First
        </div>

       <div className="sm:col-span-3 flex flex-col sm:flex-row justify-center gap-10 sm:gap-40">
          <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
            Collaborative
          </div>

          <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-center px-6 text-gray-800 font-medium shadow-sm">
            Impact-Focused
          </div>
        </div>

      </div>
    </div>

  </div>
</section> */}



