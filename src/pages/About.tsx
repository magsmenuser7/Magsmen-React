
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

  /* ── RESPONSIVE FIX: mg-isplit ── */
  .mg-isplit{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:3rem;
    align-items:start;
  }
  @media(max-width:900px){
    .mg-isplit{
      grid-template-columns:1fr;
      gap:2rem;
    }
  }

  .mg-body-block{max-width:640px}
  .mg-body-block p{font-size:.95rem;color:#374151;line-height:1.85;margin-bottom:1.25rem}
  .mg-body-block p:last-child{margin-bottom:0}
  .mg-body-block strong{color:var(--ink);font-weight:700}

  /* ── RESPONSIVE FIX: mg-pillars ── */
  .mg-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem}
  @media(max-width:600px){
    .mg-pillars{grid-template-columns:1fr}
  }

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

  /* ── RESPONSIVE FIX: mg-not-grid ── */
  .mg-not-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:2rem}
  @media(max-width:900px){.mg-not-grid{grid-template-columns:1fr 1fr}}
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

  /* ── RESPONSIVE FIX: Hero padding on mobile ── */
  @media(max-width:600px){
    .mg-hero{padding:4rem 1rem 2.5rem}
    .mg-sec{padding:3rem 1rem}
    .mg-cta-sec{padding:4rem 1rem}
    .mg-cta-buttons{flex-direction:column;align-items:center}
    .mg-btn-gold,.mg-btn-outline-white{width:100%;justify-content:center}
    .mg-nav-links{display:none}
  }

  /* ── RESPONSIVE FIX: Nav mobile ── */
  @media(max-width:768px){
    .mg-nav{padding:.75rem 1rem}
    .mg-nav-links{display:none}
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
    <section className="mg-hero mt-20">
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
    <section className="mg-sec w-full">
      <div className="mg-sec-inner">
        <div className="mg-isplit reveal">
          <div>
            <div className="mg-sec-label">Our journey</div>
            <h2 className="mg-h2" style={{ whiteSpace: "nowrap" }}>From Andhra Pradesh to India's boardrooms</h2>
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










