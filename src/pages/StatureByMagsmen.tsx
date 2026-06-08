
import { useState, useEffect, useRef } from "react";

import newlogoblack from "/assets/magsmen-new-logo-black.png";

import logo01 from "/assets/banners/logo-01.svg";

import Favi01 from '/assets/banners/Favi-light.svg';





const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --white:#fff;--ink:#0F0A1A;--violet:#7C3AED;--violet-dark:#6D28D9;--violet-light:#8B5CF6;
    --violet-pale:#F5F3FF;--violet-soft:#EDE9FE;--violet-border:rgba(124,58,237,.12);
    --dark:#1A0A2E;--grey-50:#FAFAFA;--grey-100:#F4F4F4;--grey-200:#E8E8E8;
    --grey-400:#9CA3AF;--grey-600:#6B7280;--grey-800:#1F2937;--body-alt:#F8F5FF;--r:4px;
  }
  html{scroll-behavior:smooth;font-size:16px;-webkit-font-smoothing:antialiased}
  body{background:var(--white);color:var(--ink);font-family:'Montserrat',sans-serif;font-weight:400;line-height:1.7;overflow-x:hidden}
  #prog{position:fixed;top:0;left:0;height:3px;background:var(--violet);z-index:9999;width:0%;transition:width .1s linear}
  nav.st-nav{position:fixed;top:0;left:0;right:0;z-index:800;background:rgba(255,255,255,.97);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--violet-border);height:64px;padding:0 2rem;display:flex;align-items:center;justify-content:space-between}
  .nav-logo{display:flex;align-items:center;gap:.5rem;text-decoration:none;font-size:.78rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--ink)}
  .nav-logo-dot{width:8px;height:8px;border-radius:50%;background:var(--violet);flex-shrink:0}
  .nav-logo sub{font-size:.55rem;color:var(--violet);font-weight:700;letter-spacing:.1em;vertical-align:baseline;margin-left:.15rem}
  .nav-links{display:flex;gap:1.8rem;list-style:none}
  .nav-links a{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--grey-600);text-decoration:none;transition:color .2s}
  .nav-links a:hover{color:var(--violet)}
  .nav-cta-wrap{display:flex;gap:.7rem}
  .btn-nav-v{font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:var(--violet);padding:.55rem 1.4rem;text-decoration:none;border-radius:var(--r);transition:background .2s}
  .btn-nav-v:hover{background:var(--violet-dark)}
  .btn-nav-b{font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:var(--ink);padding:.55rem 1.4rem;text-decoration:none;border-radius:var(--r);transition:opacity .2s}
  .btn-nav-b:hover{opacity:.75}
  .hero{padding:120px 2rem 0;background:var(--white);overflow:hidden;border-bottom:1px solid var(--violet-border)}
  .hero-inner{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;padding-bottom:5rem}
  .overline{display:flex;align-items:center;gap:.7rem;margin-bottom:1.4rem}
  .overline-line{width:32px;height:2px;background:var(--violet)}
  .overline-txt{font-size:.68rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--violet)}
  h1.hh{font-size:clamp(3rem,5vw,5.2rem);font-weight:800;line-height:.98;letter-spacing:-.03em;color:var(--ink);margin-bottom:1.5rem}
  h1.hh em{font-style:normal;color:var(--violet)}
  .hero-p{font-size:1rem;font-weight:400;color:var(--grey-600);line-height:1.85;max-width:480px;margin-bottom:2.5rem}
  .hero-btns{display:flex;gap:.8rem;flex-wrap:wrap}
  .btn-v{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:var(--violet);padding:.85rem 2rem;text-decoration:none;border-radius:var(--r);transition:background .2s,transform .15s;cursor:pointer}
  .btn-v:hover{background:var(--violet-dark);transform:translateY(-1px)}
  .btn-b{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:var(--ink);padding:.85rem 2rem;text-decoration:none;border-radius:var(--r);transition:opacity .2s,transform .15s;cursor:pointer}
  .btn-b:hover{opacity:.78;transform:translateY(-1px)}
  .btn-o{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--violet);background:transparent;border:1.5px solid var(--violet);padding:.82rem 2rem;text-decoration:none;border-radius:var(--r);transition:background .2s,color .2s;cursor:pointer}
  .btn-o:hover{background:var(--violet);color:var(--white)}
  .hero-art{position:relative;display:flex;align-items:center;justify-content:center}
  .hero-stats-bar{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--violet-border)}
  .hstat{padding:1.6rem 0 1.6rem 0;border-right:1px solid var(--violet-border);padding-right:2rem}
  .hstat:last-child{border-right:none}
  .hstat-n{font-size:2.2rem;font-weight:800;color:var(--violet);line-height:1;margin-bottom:.2rem;letter-spacing:-.03em}
  .hstat-l{font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--grey-600)}
  .ticker{background:var(--violet);padding:.6rem 0;overflow:hidden}
  .ticker-inner{display:flex;animation:tick 40s linear infinite;white-space:nowrap}
  .ti{font-size:.65rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.8);padding:0 2rem;flex-shrink:0}
  .td{color:rgba(255,255,255,.3);margin:0 .2rem}
  @keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .sec{padding:6.5rem 2rem}
  .sec-inner{max-width:1160px;margin:0 auto}
  .slabel{display:flex;align-items:center;gap:.7rem;margin-bottom:1rem}
  .slabel-line{width:28px;height:2px;background:var(--violet);flex-shrink:0}
  .slabel-txt{font-size:.67rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--violet)}
  h2.sh{font-size:clamp(1.9rem,3vw,3.2rem);font-weight:800;color:var(--ink);line-height:1.1;letter-spacing:-.025em;margin-bottom:1.2rem}
  h2.sh em{font-style:normal;color:var(--violet)}
  .sec-p{font-size:.97rem;color:var(--grey-600);line-height:1.9;max-width:580px}
  .what-grid{display:grid;grid-template-columns:1fr 1fr;gap:5.5rem;margin-top:3.5rem;align-items:start}
  .pq{font-size:1.1rem;font-weight:600;color:var(--ink);line-height:1.6;border-left:3px solid var(--violet);padding-left:1.5rem;margin-bottom:1.8rem}
  .bp{font-size:.92rem;color:var(--grey-600);line-height:1.9;margin-bottom:1rem}
  .not-list{display:flex;flex-direction:column;gap:.7rem}
  .not-card{background:var(--white);border:1px solid var(--violet-border);border-left:3px solid var(--violet);padding:1.3rem 1.5rem;border-radius:var(--r)}
  .not-tag{font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--violet);margin-bottom:.3rem}
  .not-title{font-size:.9rem;font-weight:700;color:var(--ink);margin-bottom:.3rem}
  .not-p{font-size:.8rem;color:var(--grey-600);line-height:1.75}
  .vc{background:var(--violet-soft);border-left:3px solid var(--violet);padding:1.3rem 1.6rem;margin-top:1.2rem;border-radius:0 var(--r) var(--r) 0}
  .vc p{font-size:.84rem;color:var(--dark);line-height:1.8}
  .vc strong{color:var(--violet)}
  .who-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--violet-border);margin-top:3rem;border-radius:var(--r);overflow:hidden}
  .who-card{background:var(--white);padding:1.7rem 1.5rem;transition:background .2s}
  .who-card:hover{background:var(--violet-pale)}
  .who-n{font-size:.62rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--violet);margin-bottom:.5rem}
  .who-title{font-size:.87rem;font-weight:700;color:var(--ink);margin-bottom:.45rem;line-height:1.3}
  .who-p{font-size:.78rem;color:var(--grey-600);line-height:1.75}
  .tiers-sec{background:var(--dark)}
  .tiers-sec .sh{color:var(--white)}
  .tiers-sec .sec-p{color:rgba(255,255,255,.5)}
  .tiers-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.07);margin-top:3rem;border-radius:var(--r);overflow:hidden}
  .tier-card{background:var(--dark);padding:2rem 1.6rem;transition:background .2s;border-top:3px solid transparent}
  .tier-card:hover{background:rgba(124,58,237,.15);border-top-color:var(--violet)}
  .tier-badge{font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--violet);margin-bottom:.4rem}
  .tier-name{font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:.35rem;letter-spacing:-.02em}
  .tier-who{font-size:.7rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.7rem;padding-bottom:.7rem;border-bottom:1px solid rgba(255,255,255,.07)}
  .tier-dur{display:inline-block;font-size:.67rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:rgba(124,58,237,.22);color:var(--violet);padding:.2rem .65rem;border-radius:50px;margin-bottom:.9rem}
  .tier-desc{font-size:.8rem;color:rgba(255,255,255,.42);line-height:1.8}
  .tier-card.hi{background:var(--violet);border-top-color:rgba(255,255,255,.3)}
  .tier-card.hi .tier-name{color:var(--white)}
  .tier-card.hi .tier-badge{color:rgba(255,255,255,.65)}
  .tier-card.hi .tier-who{color:rgba(255,255,255,.6);border-bottom-color:rgba(255,255,255,.2)}
  .tier-card.hi .tier-dur{background:rgba(255,255,255,.18);color:var(--white)}
  .tier-card.hi .tier-desc{color:rgba(255,255,255,.72)}
  .stages-layout{display:grid;grid-template-columns:300px 1fr;gap:4.5rem;margin-top:3.5rem;align-items:start}
  .stage-side p{font-size:.88rem;color:var(--grey-600);line-height:1.9;margin-bottom:1.1rem}
  .stage-legend{margin-top:1.5rem;display:flex;flex-direction:column;gap:.55rem}
  .leg-r{display:flex;align-items:center;gap:.65rem;font-size:.75rem;color:var(--grey-600)}
  .leg-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}
  .stages-list{border:1px solid var(--violet-border);border-radius:var(--r);overflow:hidden}
  .s-row{display:grid;grid-template-columns:52px 1fr 100px;border-bottom:1px solid var(--violet-border);transition:background .18s}
  .s-row:last-child{border-bottom:none}
  .s-row:hover{background:var(--violet-pale)}
  .s-n{background:var(--ink);display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;color:var(--violet);letter-spacing:.05em}
  .s-body{padding:1rem 1.3rem}
  .s-name{font-size:.86rem;font-weight:700;color:var(--ink);margin-bottom:.18rem}
  .s-obj{font-size:.75rem;color:var(--grey-600);line-height:1.55}
  .s-tag{padding:1rem;display:flex;align-items:center;justify-content:center}
  .pill{font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.2rem .6rem;border-radius:50px}
  .pf{background:var(--violet-soft);color:var(--violet)}
  .pa{background:#FEF3C7;color:#92400E}
  .pp{background:#D1FAE5;color:#065F46}
  .cases-sec{background:var(--body-alt)}
  .featured-case{background:var(--ink);border-radius:var(--r);display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:3.5rem;overflow:hidden;border:1px solid rgba(124,58,237,.2)}
  .fc-left{padding:3.2rem 3rem;display:flex;flex-direction:column;justify-content:center}
  .fc-tag{font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);margin-bottom:.8rem;display:flex;align-items:center;gap:.5rem}
  .fc-tag::before{content:'';display:inline-block;width:20px;height:2px;background:var(--violet)}
  .fc-name{font-size:clamp(1.6rem,2.5vw,2.4rem);font-weight:800;color:var(--white);line-height:1.1;letter-spacing:-.02em;margin-bottom:.6rem}
  .fc-sub{font-size:.83rem;font-weight:600;color:var(--violet);letter-spacing:.05em;margin-bottom:1.4rem;text-transform:uppercase}
  .fc-p{font-size:.88rem;color:rgba(255,255,255,.5);line-height:1.9;margin-bottom:1rem}
  .fc-right{background:rgba(124,58,237,.1);padding:3rem;display:flex;flex-direction:column;gap:1.5rem;justify-content:center;border-left:1px solid rgba(124,58,237,.2)}
  .fc-insight{padding:1.2rem 1.5rem;background:rgba(255,255,255,.04);border-left:2px solid var(--violet);border-radius:0 var(--r) var(--r) 0}
  .fc-insight-label{font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--violet);margin-bottom:.3rem}
  .fc-insight-text{font-size:.83rem;color:rgba(255,255,255,.6);line-height:1.7}
  .cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:1.5rem}
  .case-card{background:var(--white);border:1px solid var(--violet-border);border-radius:var(--r);padding:2rem 1.8rem;transition:border-color .2s,box-shadow .2s,transform .2s}
  .case-card:hover{border-color:var(--violet);box-shadow:0 6px 28px rgba(124,58,237,.1);transform:translateY(-2px)}
  .cc-tag{font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--violet);margin-bottom:.6rem}
  .cc-name{font-size:1.2rem;font-weight:800;color:var(--ink);margin-bottom:.25rem;letter-spacing:-.01em}
  .cc-role{font-size:.75rem;font-weight:600;color:var(--grey-400);letter-spacing:.08em;text-transform:uppercase;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--grey-200)}
  .cc-p{font-size:.82rem;color:var(--grey-600);line-height:1.8}
  .cc-out{margin-top:1.2rem;background:var(--violet-pale);padding:.8rem 1rem;border-radius:var(--r)}
  .cc-out-l{font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--violet);margin-bottom:.15rem}
  .cc-out-t{font-size:.78rem;font-weight:600;color:var(--dark)}
  .also-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--violet-border);margin-top:3rem;border-radius:var(--r);overflow:hidden;border:1px solid var(--violet-border)}
  .also-card{background:var(--white);padding:1.5rem 1.8rem;display:flex;align-items:center;gap:1.2rem;transition:background .2s}
  .also-card:hover{background:var(--violet-pale)}
  .also-av{width:44px;height:44px;border-radius:50%;background:var(--violet-soft);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;color:var(--violet);flex-shrink:0;letter-spacing:.05em}
  .also-name{font-size:.9rem;font-weight:700;color:var(--ink);margin-bottom:.15rem}
  .also-role{font-size:.72rem;color:var(--grey-400);font-weight:500}
  .deliv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--violet-border);margin-top:3rem;border-radius:var(--r);overflow:hidden;border:1px solid var(--violet-border)}
  .deliv-card{background:var(--white);padding:1.8rem 1.6rem;transition:background .2s,border-top-color .2s;border-top:3px solid transparent}
  .deliv-card:hover{background:var(--violet-pale);border-top-color:var(--violet)}
  .d-n{font-size:.62rem;font-weight:700;letter-spacing:.15em;color:var(--violet);margin-bottom:.5rem}
  .d-title{font-size:.9rem;font-weight:700;color:var(--ink);margin-bottom:.4rem}
  .d-p{font-size:.78rem;color:var(--grey-600);line-height:1.8}
  .model-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3rem}
  .model-card{border:1px solid var(--violet-border);border-top:3px solid var(--violet);padding:2rem 1.8rem;border-radius:var(--r);transition:box-shadow .2s}
  .model-card:hover{box-shadow:0 8px 32px rgba(124,58,237,.1)}
  .mc-title{font-size:.95rem;font-weight:800;color:var(--ink);margin-bottom:.25rem}
  .mc-dur{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--violet);margin-bottom:.9rem}
  .mc-p{font-size:.82rem;color:var(--grey-600);line-height:1.85;margin-bottom:1rem}
  .mc-for{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--grey-800)}
  .model-notes{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:1.2rem}
  .mn{background:var(--violet-soft);border-left:3px solid var(--violet);padding:1.2rem 1.5rem;border-radius:0 var(--r) var(--r) 0}
  .mn-l{font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--violet);margin-bottom:.35rem}
  .mn-p{font-size:.82rem;color:var(--dark);line-height:1.8}
  .founder-sec{background:var(--dark)}
  .founder-inner{max-width:860px;margin:0 auto;text-align:center}
  .founder-tag{display:inline-block;font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--violet);border:1px solid rgba(124,58,237,.3);padding:.32rem .9rem;border-radius:50px;margin-bottom:2rem}
  .founder-q{font-size:clamp(1.3rem,2vw,1.8rem);font-weight:500;font-style:italic;color:var(--white);line-height:1.55;margin-bottom:1.8rem}
  .founder-b{font-size:.88rem;font-weight:300;color:rgba(255,255,255,.45);line-height:2;margin-bottom:2rem}
  .founder-name{font-size:.95rem;font-weight:800;color:var(--white);letter-spacing:.05em}
  .founder-cred{font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.28);margin-top:.3rem;line-height:1.7}
  .founder-div{width:40px;height:2px;background:var(--violet);margin:.9rem auto}
  .cta-sec{background:var(--violet);padding:5.5rem 2rem;text-align:center}
  .cta-inner{max-width:680px;margin:0 auto}
  .cta-l{font-size:.65rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.55);display:block;margin-bottom:.9rem}
  .cta-h{font-size:clamp(2rem,4vw,3.2rem);font-weight:800;color:var(--white);line-height:1.05;letter-spacing:-.025em;margin-bottom:1.2rem}
  .cta-p{font-size:.95rem;color:rgba(255,255,255,.65);line-height:1.9;margin-bottom:2.5rem}
  .cta-btns{display:flex;justify-content:center;gap:.8rem;flex-wrap:wrap}
  .btn-wh{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--violet);background:var(--white);padding:.85rem 2rem;text-decoration:none;border-radius:var(--r);transition:opacity .2s,transform .15s}
  .btn-wh:hover{opacity:.9;transform:translateY(-1px)}
  .btn-wo{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:transparent;border:1.5px solid rgba(255,255,255,.45);padding:.82rem 2rem;text-decoration:none;border-radius:var(--r);transition:border-color .2s,background .2s}
  .btn-wo:hover{border-color:var(--white);background:rgba(255,255,255,.1)}
  .cta-contact{font-size:.72rem;color:rgba(255,255,255,.4);margin-top:1.8rem;letter-spacing:.05em}
  footer.st-footer{background:var(--ink);padding:4rem 2rem 2rem}
  .ft{max-width:1160px;margin:0 auto}
  .ft-grid{display:grid;grid-template-columns:1.8fr 1fr 1fr;gap:3.5rem;margin-bottom:3rem}
  .ft-brand{font-size:.75rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--white);margin-bottom:.6rem}
  .ft-brand em{font-style:normal;color:var(--violet)}
  .ft-tag{font-size:.78rem;color:rgba(255,255,255,.3);line-height:1.75}
  .ft-col h4{font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:.9rem}
  .ft-col a,.ft-col p{display:block;font-size:.78rem;color:rgba(255,255,255,.45);text-decoration:none;margin-bottom:.38rem;transition:color .2s}
  .ft-col a:hover{color:var(--violet)}
  .ft-bottom{border-top:1px solid rgba(255,255,255,.07);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem}
  .ft-bottom p{font-size:.7rem;color:rgba(255,255,255,.18);letter-spacing:.04em}
  .reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}
  .reveal.vis{opacity:1;transform:none}
  .rl{opacity:0;transform:translateX(-22px);transition:opacity .65s ease,transform .65s ease}
  .rl.vis{opacity:1;transform:none}
  .rr{opacity:0;transform:translateX(22px);transition:opacity .65s ease,transform .65s ease}
  .rr.vis{opacity:1;transform:none}
  .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}.d4{transition-delay:.32s}
  @media(max-width:1024px){
    .nav-links{display:none}
    .hero-inner{grid-template-columns:1fr;gap:0;padding-bottom:3rem}
    .hero-art{display:none}
    .hero-stats-bar{grid-template-columns:1fr 1fr}
    .what-grid{grid-template-columns:1fr;gap:3rem}
    .who-grid{grid-template-columns:1fr 1fr}
    .tiers-grid{grid-template-columns:1fr 1fr}
    .stages-layout{grid-template-columns:1fr;gap:2.5rem}
    .featured-case{grid-template-columns:1fr}
    .cases-grid{grid-template-columns:1fr}
    .also-grid{grid-template-columns:1fr 1fr}
    .deliv-grid{grid-template-columns:1fr 1fr}
    .model-grid{grid-template-columns:1fr}
    .model-notes{grid-template-columns:1fr}
    .ft-grid{grid-template-columns:1fr}
  }
  @media(max-width:640px){
    .sec{padding:4rem 1.2rem}
    nav.st-nav{padding:0 1.2rem}
    .hero{padding:100px 1.2rem 0}
    .who-grid{grid-template-columns:1fr}
    .tiers-grid{grid-template-columns:1fr}
    .also-grid{grid-template-columns:1fr}
    .deliv-grid{grid-template-columns:1fr}
    .cta-sec{padding:4rem 1.2rem}
    footer.st-footer{padding:3rem 1.2rem 2rem}
    .s-row{grid-template-columns:44px 1fr}
    .s-tag{display:none}
  }
`;

function useScrollProgress() {
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const el = document.getElementById("prog");
      if (el) el.style.width = (window.scrollY / h * 100) + "%";
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("vis");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal,.rl,.rr").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar() {
  return (
    <nav className="st-nav">
      <a href="https://magsmen.com" className="nav-logo">
        <img src={newlogoblack} alt="Magsmen" className="w-14 h-16" />
      </a>
      <ul className="nav-links">
        <li><a href="#what" onClick={e => { e.preventDefault(); scrollTo("#what"); }}>What</a></li>
        <li><a href="#who" onClick={e => { e.preventDefault(); scrollTo("#who"); }}>Who</a></li>
        <li><a href="#tiers" onClick={e => { e.preventDefault(); scrollTo("#tiers"); }}>Tiers</a></li>
        <li><a href="#stages" onClick={e => { e.preventDefault(); scrollTo("#stages"); }}>Framework</a></li>
        <li><a href="#cases" onClick={e => { e.preventDefault(); scrollTo("#cases"); }}>Work</a></li>
      </ul>
      <div className="nav-cta-wrap">
        <a href="#cases" className="btn-nav-b" onClick={e => { e.preventDefault(); scrollTo("#cases"); }}>Our Work</a>
        <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Stature%20Enquiry" className="btn-nav-v">Begin a Conversation</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="overline reveal"><div className="overline-line" /><div className="overline-txt">Stature by Magsmen</div></div>
          <h1 className="hh reveal d1">Strategic<br /><em>Identity</em><br />Architecture.</h1>
          <p className="hero-p reveal d2">You have earned the attention. Now architect it. Stature converts your achievement into authority, and makes your standing impossible to ignore.</p>
          <div className="hero-btns reveal d3">
            <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Stature%20Engagement%20Enquiry" className="btn-v">Begin a Conversation</a>
            <a href="#cases" className="btn-b" onClick={e => { e.preventDefault(); scrollTo("#cases"); }}>See Our Work</a>
            <a href="#what" className="btn-o" onClick={e => { e.preventDefault(); scrollTo("#what"); }}>Learn More</a>
          </div>
        </div>
        <div className="hero-art rr">
          <svg viewBox="0 0 460 460" width="420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="230" cy="230" r="210" stroke="rgba(124,58,237,.06)" strokeWidth="1" />
            <circle cx="230" cy="230" r="155" stroke="rgba(124,58,237,.1)" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="230" cy="230" r="95" stroke="rgba(124,58,237,.18)" strokeWidth="1.2" />
            <circle cx="230" cy="230" r="44" fill="#7C3AED" opacity=".95" />
            <text x="230" y="226" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9.5" fontWeight="800" fill="white" letterSpacing="2.5">STATURE</text>
            <text x="230" y="240" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.6)" letterSpacing="1.5">BY MAGSMEN</text>
            <defs>
              <marker id="m1" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#7C3AED" opacity=".5" />
              </marker>
            </defs>
            {[
              { cx: 230, cy: 75, label: "POSITIONING", stage: "Stage 04" },
              { cx: 378, cy: 150, label: "NARRATIVE", stage: "Stage 05" },
              { cx: 400, cy: 310, label: "PLATFORM", stage: "Stage 06" },
              { cx: 230, cy: 385, label: "CRISIS", stage: "Stage 09" },
              { cx: 60, cy: 310, label: "IDENTITY", stage: "Stage 01" },
              { cx: 82, cy: 150, label: "PERCEPTION", stage: "Stage 02" },
            ].map(n => (
              <g key={n.label}>
                <circle cx={n.cx} cy={n.cy} r="22" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" opacity=".9" />
                <text x={n.cx} y={n.cy - 4} textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="700" fill="#7C3AED" letterSpacing="1">{n.label}</text>
                <text x={n.cx} y={n.cy + 8} textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="5.5" fill="#6D28D9">{n.stage}</text>
              </g>
            ))}
            <line x1="230" y1="186" x2="230" y2="97" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
            <line x1="267" y1="201" x2="360" y2="166" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
            <line x1="273" y1="260" x2="382" y2="290" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
            <line x1="230" y1="274" x2="230" y2="363" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
            <line x1="193" y1="260" x2="78" y2="290" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
            <line x1="193" y1="201" x2="100" y2="166" stroke="#7C3AED" strokeWidth=".9" strokeDasharray="4 4" opacity=".4" markerEnd="url(#m1)" />
          </svg>
        </div>
      </div>
      <div className="hero-stats-bar reveal d4">
        <div className="hstat"><div className="hstat-n">4</div><div className="hstat-l">Client Tiers</div></div>
        <div className="hstat"><div className="hstat-n">10</div><div className="hstat-l">Engagement Stages</div></div>
        <div className="hstat"><div className="hstat-n">9</div><div className="hstat-l">Core Deliverables</div></div>
        <div className="hstat"><div className="hstat-n">5+</div><div className="hstat-l">Years of Outcomes</div></div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Strategic Identity Architecture", "Reputation Governance", "Authority Positioning", "Perception Audit", "Narrative Architecture", "Crisis Preparedness", "Brand Governance", "Credibility by Design"];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ti">{item} <span className="td">·</span></span>
        ))}
      </div>
    </div>
  );
}

function WhatSection() {
  return (
    <section className="sec" id="what">
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">What Stature Is</span></div>
          <h2 className="sh">Not personal branding.<br /><em>Strategic identity architecture.</em></h2>
        </div>
        <div className="what-grid">
          <div className="rl">
            <div className="pq">The difference between personal branding and Stature is the same difference between painting a house and redesigning its foundation.</div>
            <p className="bp">Personal branding concerns itself with visibility. Stature concerns itself with credibility. Visibility without credibility is noise. Credibility without visibility is wasted potential. Stature builds both, in that order.</p>
            <p className="bp">When an individual engages Stature, they are not acquiring posts, templates, or a LinkedIn refresh. They are acquiring a system that defines how they should be perceived, what they should stand for, how their communication should be structured, and how their reputation should be protected and grown across time.</p>
            <svg viewBox="0 0 560 68" width="100%" style={{ marginTop: "1.5rem" }} aria-label="Achievement to Authority via Stature">
              <defs>
                <marker id="ba" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 Z" fill="#7C3AED" />
                </marker>
              </defs>
              <rect x="0" y="14" width="140" height="40" rx="3" fill="#F5F3FF" stroke="rgba(124,58,237,.3)" strokeWidth="1" />
              <text x="70" y="31" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#7C3AED" fontWeight="800" letterSpacing="1.8">ACHIEVEMENT</text>
              <text x="70" y="45" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#9CA3AF">Earned. Unarchitected.</text>
              <line x1="140" y1="34" x2="188" y2="34" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#ba)" strokeDasharray="4 3" />
              <rect x="192" y="8" width="176" height="52" rx="3" fill="#7C3AED" />
              <text x="280" y="30" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fill="rgba(255,255,255,.7)" fontWeight="800" letterSpacing="3">STATURE</text>
              <text x="280" y="46" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(255,255,255,.5)">Strategic Architecture</text>
              <line x1="368" y1="34" x2="416" y2="34" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#ba)" strokeDasharray="4 3" />
              <rect x="420" y="14" width="140" height="40" rx="3" fill="#0F0A1A" />
              <text x="490" y="31" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#7C3AED" fontWeight="800" letterSpacing="1.8">AUTHORITY</text>
              <text x="490" y="45" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.4)">Intentional. Governed.</text>
            </svg>
          </div>
          <div className="rr">
            <div className="slabel" style={{ marginBottom: "1.3rem" }}><div className="slabel-line" /><span className="slabel-txt">What Stature Is Not</span></div>
            <div className="not-list">
              <div className="not-card"><div className="not-tag">Not This</div><div className="not-title">Social Media Management</div><p className="not-p">Stature defines strategy, narrative, and positioning. Day-to-day execution is the client team's responsibility, operating under Stature's strategic direction. We do not manage accounts or produce content.</p></div>
              <div className="not-card"><div className="not-tag">Not This</div><div className="not-title">Public Relations</div><p className="not-p">Stature defines what you should be known for and builds the narrative framework. PR agencies then execute outreach under that strategic direction. Strategy precedes, governs, and outlasts outreach.</p></div>
              <div className="not-card"><div className="not-tag">Not This</div><div className="not-title">Image Coaching</div><p className="not-p">We architect how your reputation is perceived, protected, and grown across time. That is categorically different from styling, photography direction, or surface-level image consulting.</p></div>
            </div>
            <div className="vc"><p>Magsmen chose the word <strong>Stature</strong> deliberately to separate this service from a commoditised market. The name repels commodity buyers and attracts individuals who understand that their standing requires strategic management.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  const cards = [
    { n: "01", title: "Politicians and Public Leaders", p: "Without a governed identity, perception is shaped by opponents. Stature creates narrative control, crisis preparedness, and constituency alignment." },
    { n: "02", title: "Doctors, Lawyers and Professionals", p: "Professional credibility is won online before the first consultation. Stature corrects the asymmetry between expertise and visibility." },
    { n: "03", title: "Founders and Business Owners", p: "The founder is the trust signal. Structuring the founder's identity strengthens the business brand, improves deal flow, and enables partnerships." },
    { n: "04", title: "CEOs and Senior Executives", p: "A misaligned executive identity creates market confusion. Stature ensures the executive's public persona reinforces the corporate brand." },
    { n: "05", title: "Celebrities and Public Figures", p: "Peak attention needs to be converted into lasting authority. Endorsement strategy, crisis management, and legacy planning are non-negotiable at this level." },
    { n: "06", title: "Artists and Creative Talent", p: "A body of work needs a professional identity infrastructure. Gallery positioning, media narrative, and IP governance become essential as careers mature." },
    { n: "07", title: "Content Creators and Influencers", p: "Audience without architecture is unsustainable. Monetisation, platform diversification, and long-term identity sustainability require structured strategy." },
    { n: "08", title: "Emerging Thought Leaders", p: "Expertise and momentum are not enough. Stature converts that momentum into durable, category-level authority that sustains itself independently." },
  ];
  return (
    <section className="sec" id="who" style={{ background: "var(--body-alt)", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">Who Stature Serves</span></div>
          <h2 className="sh">Not for those starting from zero.<br />For those who have <em>already earned</em> attention.</h2>
          <p className="sec-p" style={{ marginTop: ".8rem" }}>Stature serves individuals who have achieved professional success, public visibility, or community influence, and who now need that standing built into a coherent, defensible, and growth-oriented identity system.</p>
        </div>
        <div className="who-grid reveal d2">
          {cards.map(c => (
            <div key={c.n} className="who-card">
              <div className="who-n">{c.n}</div>
              <div className="who-title">{c.title}</div>
              <p className="who-p">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiersSection() {
  const tiers = [
    { badge: "Tier 01", name: "Foundation", who: "Doctors, Lawyers, CAs, Architects, Small Business Owners", dur: "60 to 90 days", desc: "Builds foundational positioning, defined authority, structured digital presence, and a basic communication framework. The goal is to move from invisible expertise to visible credibility.", hi: false },
    { badge: "Tier 02", name: "Authority", who: "Senior Professionals, Regional Business Owners, Emerging Thought Leaders", dur: "90 to 120 days", desc: "Adds perception mapping, competitive positioning analysis, content pillar strategy, speaking and event placement, and media narrative development. Goal: convert recognition into structured authority.", hi: false },
    { badge: "Tier 03", name: "Prominence", who: "CEOs, Senior Executives, Large Business Owners, Public Figures", dur: "120 to 180 days", desc: "Full perception auditing, sentiment analysis, crisis preparedness, endorsement strategy, brand narrative architecture, visual identity governance, and strategic advisory on all public associations.", hi: true },
    { badge: "Tier 04", name: "Legacy", who: "Celebrities, National Politicians, Sports Personalities, National Leaders", dur: "Ongoing retainer", desc: "Functions as an extended brand office: continuous strategic counsel, real-time perception monitoring, crisis response activation, endorsement governance, CSR and legacy strategy.", hi: false },
  ];
  return (
    <section className="sec tiers-sec" id="tiers">
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">Client Classification</span></div>
          <h2 className="sh">Four tiers. One standard of thinking.<br /><em>Depth varies. Rigour does not.</em></h2>
          <p className="sec-p">Every client is assigned to one of four tiers based on current visibility, risk exposure, strategic complexity, and growth ambition.</p>
        </div>
        <svg viewBox="0 0 960 56" width="100%" style={{ margin: "2rem 0" }} aria-label="Four tier progression">
          <defs>
            <marker id="ta" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED" />
            </marker>
          </defs>
          <rect x="0" y="10" width="200" height="36" rx="3" fill="rgba(124,58,237,.12)" stroke="rgba(124,58,237,.3)" strokeWidth="1" />
          <text x="100" y="25" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#8B5CF6" fontWeight="700" letterSpacing="2">TIER 01</text>
          <text x="100" y="38" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9.5" fill="rgba(255,255,255,.65)" fontWeight="700">Foundation</text>
          <line x1="200" y1="28" x2="242" y2="28" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#ta)" />
          <rect x="246" y="6" width="200" height="44" rx="3" fill="rgba(124,58,237,.2)" stroke="#7C3AED" strokeWidth="1" />
          <text x="346" y="22" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#A78BFA" fontWeight="700" letterSpacing="2">TIER 02</text>
          <text x="346" y="37" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9.5" fill="rgba(255,255,255,.75)" fontWeight="700">Authority</text>
          <line x1="446" y1="28" x2="488" y2="28" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#ta)" />
          <rect x="492" y="2" width="220" height="52" rx="3" fill="rgba(124,58,237,.35)" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="602" y="20" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#C4B5FD" fontWeight="700" letterSpacing="2">TIER 03</text>
          <text x="602" y="36" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="10.5" fill="rgba(255,255,255,.9)" fontWeight="700">Prominence</text>
          <line x1="712" y1="28" x2="754" y2="28" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#ta)" />
          <rect x="758" y="0" width="202" height="56" rx="3" fill="#7C3AED" />
          <text x="859" y="20" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="rgba(255,255,255,.6)" fontWeight="700" letterSpacing="2">TIER 04</text>
          <text x="859" y="38" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="12" fill="white" fontWeight="800">Legacy</text>
        </svg>
        <div className="tiers-grid">
          {tiers.map((t, i) => (
            <div key={t.name} className={`tier-card reveal d${i + 1}${t.hi ? " hi" : ""}`}>
              <div className="tier-badge">{t.badge}</div>
              <div className="tier-name">{t.name}</div>
              <div className="tier-who">{t.who}</div>
              <span className="tier-dur">{t.dur}</span>
              <p className="tier-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StagesSection() {
  const stages = [
    { n: "01", name: "Discovery and Identity Mapping", obj: "Understand who the individual is, what they have built, and what they want their identity to achieve", type: "pf", label: "Foundation" },
    { n: "02", name: "Perception Audit", obj: "Map how the individual is currently perceived across all audiences and platforms", type: "pf", label: "Foundation" },
    { n: "03", name: "Competitive and Category Positioning", obj: "Identify where the individual stands relative to others in their professional space", type: "pf", label: "Foundation" },
    { n: "04", name: "Strategic Positioning Development", obj: "Define the positioning the individual will own in the minds of their audience", type: "pf", label: "Foundation" },
    { n: "05", name: "Narrative Architecture", obj: "Build the story system that expresses the positioning across every touchpoint", type: "pf", label: "Foundation" },
    { n: "06", name: "Platform and Channel Strategy", obj: "Define where the individual should be visible and what role each platform plays", type: "pa", label: "Activation" },
    { n: "07", name: "Visual Identity and Image Governance", obj: "Align the individual's visual presentation with their strategic positioning", type: "pa", label: "Activation" },
    { n: "08", name: "Activation Roadmap", obj: "Create the execution plan for implementing the full Stature strategy", type: "pa", label: "Activation" },
    { n: "09", name: "Crisis Preparedness and Reputation Defence", obj: "Build the systems that protect the individual's reputation under pressure", type: "pp", label: "Protection" },
    { n: "10", name: "Ongoing Brand Governance and Measurement", obj: "Establish the continuous review system that keeps the strategy current and effective", type: "pp", label: "Protection" },
  ];
  return (
    <section className="sec" id="stages">
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">The 10-Stage Framework</span></div>
          <h2 className="sh">Every stage builds on the previous.<br /><em>No stage is skipped. Ever.</em></h2>
        </div>
        <div className="stages-layout">
          <div className="rl">
            <p>The complete engagement lifecycle from first contact to ongoing governance. The stages are sequential because the output of each stage becomes the input for the next.</p>
            <p>If the foundation is weak, the activation will be misdirected, and the protection will be defending the wrong position.</p>
            <div className="stage-legend">
              <div className="leg-r"><div className="leg-dot" style={{ background: "#7C3AED" }} />Stages 01 to 05: Strategic Foundation</div>
              <div className="leg-r"><div className="leg-dot" style={{ background: "#D97706" }} />Stages 06 to 08: Activation Architecture</div>
              <div className="leg-r"><div className="leg-dot" style={{ background: "#059669" }} />Stages 09 to 10: Protection and Sustainability</div>
            </div>
            <svg viewBox="0 0 300 50" width="100%" style={{ marginTop: "2rem" }}>
              <rect x="0" y="5" width="128" height="40" rx="3" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
              <text x="64" y="22" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#7C3AED" fontWeight="800" letterSpacing="1.5">FOUNDATION</text>
              <text x="64" y="36" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#6D28D9">Stages 01 to 05</text>
              <rect x="134" y="9" width="86" height="32" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
              <text x="177" y="24" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#92400E" fontWeight="800" letterSpacing="1">ACTIVATION</text>
              <text x="177" y="35" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6" fill="#B45309">06 to 08</text>
              <rect x="226" y="13" width="74" height="24" rx="3" fill="#D1FAE5" stroke="#059669" strokeWidth="1" />
              <text x="263" y="24" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#065F46" fontWeight="800" letterSpacing="1">PROTECT</text>
              <text x="263" y="33" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6" fill="#047857">09 to 10</text>
            </svg>
          </div>
          <div className="stages-list rr">
            {stages.map(s => (
              <div key={s.n} className="s-row">
                <div className="s-n">{s.n}</div>
                <div className="s-body">
                  <div className="s-name">{s.name}</div>
                  <div className="s-obj">{s.obj}</div>
                </div>
                <div className="s-tag"><span className={`pill ${s.type}`}>{s.label}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const cases = [
    {
      tag: "Corporate Identity", name: "Shyam Prasad", role: "Chairman, Tenali Double Horse Group",
      p1: "A multi-track positioning engagement spanning three dimensions simultaneously: the corporate identity of the Tenali Double Horse Group, the foundation's public standing, and Shyam Prasad's personal identity as a chairman stepping into a more prominent corporate arena.",
      p2: "The challenge was coherence. Three distinct identities, one strategic narrative that made each of them stronger individually while reinforcing the others.",
      out: "Corporate presence, foundation credibility, and personal authority architected as a unified strategic system"
    },
    {
      tag: "Professional Authority", name: "Dr. Srujana", role: "Renowned Dermatologist",
      p1: "Positioning one of the region's most respected dermatologists as a public authority in her field. The engagement addressed a specific asymmetry: exceptional clinical expertise that was not translating into the public-facing authority her credentials deserved.",
      p2: "The strategy built a structured public identity around her clinical standing, her published work, and her communication style, without compromising the professional integrity that defined her reputation.",
      out: "Expert-to-authority positioning that matched her clinical standing with her public identity"
    },
    {
      tag: "Industry Pioneer", name: "Rama Krishna", role: "KR & Co, Tobacco Industry",
      p1: "A Linkfluence engagement to position Rama Krishna and KR & Co as the recognised pioneer of the tobacco industry in the region. The strategy used LinkedIn to build thought leadership architecture, industry narrative, and category-defining presence.",
      p2: "The output was not simply better LinkedIn content. It was a systematic repositioning from industry participant to industry pioneer, backed by consistent strategic communication over time.",
      out: "Category pioneer positioning established through the Linkfluence methodology"
    },
  ];
  const also = [
    { av: "RK", name: "Roshan Kanakala", role: "Actor, Telugu Film Industry" },
    { av: "RJK", name: "Rajeev Kanakala", role: "Actor, Telugu Film Industry" },
    { av: "SN", name: "Srinivas Narni", role: "Founder, Pronted" },
  ];
  return (
    <section className="sec cases-sec" id="cases">
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">Stature in Practice</span></div>
          <h2 className="sh">Five years. Real people.<br /><em>Documented outcomes.</em></h2>
          <p className="sec-p">These are not case studies constructed for marketing. These are the actual results of careful due diligence, projection, and communication strategy applied over years, not weeks.</p>
        </div>
        <div className="featured-case reveal d2">
          <div className="fc-left">
            <div className="fc-tag">Featured Work</div>
            <div className="fc-name">Suma Kanakala</div>
            <div className="fc-sub">Telugu Television Icon</div>
            <p className="fc-p">Five years of strategic identity management for one of Telugu television's most recognised personalities. The brief was not to increase visibility. She already had it. The brief was to elevate how that visibility was perceived, the associations she carried, the communication style she projected, and the authority she commanded beyond entertainment.</p>
            <p className="fc-p">The transformation happened through careful due diligence, projection, and a communication style that shifted her from entertainer to cultural authority. Today the way she takes up projects, speaks publicly, and positions herself in the industry reflects deliberate, architectured standing that did not exist five years ago.</p>
            <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Stature%20Enquiry%20re%20approach" className="btn-v" style={{ display: "inline-block", marginTop: ".5rem" }}>Discuss This Approach</a>
          </div>
          <div className="fc-right">
            {[
              { label: "The Starting Point", text: "High visibility, unarchitected authority. Public perception was warm but lacked the strategic layer that converts audience affection into industry standing." },
              { label: "The Strategy", text: "Careful redirection of communication style, project selection criteria, public association governance, and narrative architecture over a sustained 5-year period." },
              { label: "The Outcome", text: "A demonstrable shift in how she is positioned in the industry, the types of projects she takes up, and the authority she commands beyond entertainment categories." },
              { label: "Duration", text: "5 years of continuous strategic partnership. The longest-running Stature engagement in Magsmen's portfolio." },
            ].map(i => (
              <div key={i.label} className="fc-insight">
                <div className="fc-insight-label">{i.label}</div>
                <div className="fc-insight-text">{i.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cases-grid">
          {cases.map(c => (
            <div key={c.name} className="case-card reveal d1">
              <div className="cc-tag">{c.tag}</div>
              <div className="cc-name">{c.name}</div>
              <div className="cc-role">{c.role}</div>
              <p className="cc-p">{c.p1}</p>
              <p className="cc-p" style={{ marginTop: ".7rem" }}>{c.p2}</p>
              <div className="cc-out"><div className="cc-out-l">Outcome</div><div className="cc-out-t">{c.out}</div></div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: "3rem" }}>
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">Also Transformed by Stature</span></div>
        </div>
        <div className="also-grid reveal d2">
          {also.map(a => (
            <div key={a.name} className="also-card">
              <div className="also-av">{a.av}</div>
              <div><div className="also-name">{a.name}</div><div className="also-role">{a.role}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const deliverables = [
    { n: "01", title: "Perception Audit Report", p: "How the individual is currently perceived versus how they intend to be perceived. The foundation every strategy is built upon." },
    { n: "02", title: "Personal Brand Architecture", p: "The complete identity statement, authority positioning framework, and narrative direction. The brief every execution vendor operates under." },
    { n: "03", title: "Platform and Channel Strategy", p: "Where the individual should be visible, what role each platform serves, and critically, what they should not be doing." },
    { n: "04", title: "Content Framework and Editorial Plan", p: "What to communicate, at what frequency, in which format, and with what tone. Not a content calendar. A communication system." },
    { n: "05", title: "Endorsement and Association Strategy", p: "Which partnerships, panels, and associations build credibility and which ones risk it. Non-negotiable from Authority tier upward." },
    { n: "06", title: "Crisis Preparedness Framework", p: "Reputation risk identification and response protocols. The framework for protecting standing before, during, and after an incident." },
    { n: "07", title: "Visual Identity Governance Brief", p: "Alignment of visual presentation elements, photography direction, and image standards with the strategic positioning defined in Stage 04." },
    { n: "08", title: "Governance Handover Document", p: "The system for maintaining and evolving the Stature strategy post-engagement. Built for independence, not ongoing dependency." },
    { n: "09", title: "Brand Health Dashboard", p: "Five metrics tracked across time: Awareness, Trust, Differentiation, Consistency, and Advocacy. Strategy converted into evidence." },
  ];
  return (
    <section className="sec" id="deliverables" style={{ background: "var(--grey-50)" }}>
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">What Stature Delivers</span></div>
          <h2 className="sh">Nine structured outputs that govern<br /><em>identity, reputation, and standing</em></h2>
          <p className="sec-p" style={{ marginTop: ".5rem" }}>Deliverables vary by tier. The following represents the core outputs a Stature engagement produces.</p>
        </div>
        <div className="deliv-grid reveal d2">
          {deliverables.map(d => (
            <div key={d.n} className="deliv-card">
              <div className="d-n">{d.n}</div>
              <div className="d-title">{d.title}</div>
              <p className="d-p">{d.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModelsSection() {
  const models = [
    { title: "Project-Based Engagement", dur: "60 to 180 days", p: "The complete strategic framework across Stages 01 through 09, with Stage 10 delivered as a governance handover document. Fully equipped to maintain the strategy independently. Standard for Foundation and Authority tiers.", forText: "Ideal for: Foundation and Authority Tiers" },
    { title: "Retainer-Based Engagement", dur: "Ongoing, monthly structure", p: "Continuous strategic counsel for individuals actively in the public domain. Includes ongoing governance, real-time advisory access, crisis response activation, and periodic strategy refresh cycles. Standard for Prominence and Legacy tiers.", forText: "Ideal for: Prominence and Legacy Tiers" },
    { title: "Advisory-Only Engagement", dur: "Flexible, strategy without activation", p: "For individuals who already have an execution team and need only strategic direction. Magsmen provides the strategic output of Stages 01 through 09. The client's team executes under Magsmen's periodic review.", forText: "Ideal for: Executives with Established Teams" },
  ];
  return (
    <section className="sec" id="models">
      <div className="sec-inner">
        <div className="reveal">
          <div className="slabel"><div className="slabel-line" /><span className="slabel-txt">Engagement Models</span></div>
          <h2 className="sh">Three ways to structure<br /><em>the commercial relationship</em></h2>
          <p className="sec-p" style={{ marginTop: ".5rem" }}>Stature is priced on the strategic value of the outcome, not on hours or deliverables.</p>
        </div>
        <div className="model-grid reveal d2">
          {models.map(m => (
            <div key={m.title} className="model-card">
              <div className="mc-title">{m.title}</div>
              <div className="mc-dur">{m.dur}</div>
              <p className="mc-p">{m.p}</p>
              <div className="mc-for">{m.forText}</div>
            </div>
          ))}
        </div>
        <div className="model-notes reveal d3">
          <div className="mn"><div className="mn-l">Pricing Principle</div><p className="mn-p">Stature is never discounted to win a brief. If a prospect cannot meet the commercial terms, a reduced scope engagement at the appropriate tier is evaluated. The fee is never reduced without a documented scope reduction.</p></div>
          <div className="mn"><div className="mn-l">Confidentiality Standard</div><p className="mn-p">Stature engagements involve sensitive personal disclosures treated with a heightened standard equivalent to legally privileged communications. Client names are never referenced externally without explicit written consent.</p></div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="sec founder-sec" id="founder">
      <div className="sec-inner">
        <div className="founder-inner reveal">
          <div className="founder-tag">From the Founder</div>
          <p className="founder-q">"Most people confuse recognition with reputation. I built Stature because I saw too many brilliant, accomplished individuals lose ground to people with far less substance but far more structured presence."</p>
          <div className="founder-div" />
          <p className="founder-b">Stature exists because credibility, when left unarchitected, is invisible. In Andhra Pradesh, Telangana, and across India, the most capable individuals in every field often have the weakest public standing. Not because they lack achievement, but because no one has built the strategic infrastructure around that achievement that allows others to see, trust, and rely on them at the level they deserve. Stature is my answer to that problem. Built under the Magsmen methodology. Designed to last.</p>
          <p className="founder-name">Sandeep N</p>
          <p className="founder-cred">Founder, Magsmen Strategy Consultants &nbsp;·&nbsp; TEDx Speaker &nbsp;·&nbsp; Enrolled Advocate<br />International MBA, Deakin University Melbourne &nbsp;·&nbsp; MMA Global Awards Jury &nbsp;·&nbsp; Consultant of the Year 2023</p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-sec" id="contact">
      <div className="cta-inner reveal">
        <span className="cta-l">Begin a Stature Engagement</span>
        <h2 className="cta-h">Your standing is a strategic asset.<br />Treat it accordingly.</h2>
        <p className="cta-p">The conversation begins with a discovery call. We assess your current position, your ambition, and whether Stature is the right engagement for where you are and where you are going.</p>
        <div className="cta-btns">
          <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Stature%20Engagement%20Enquiry&body=I%20am%20writing%20to%20enquire%20about%20a%20Stature%20engagement.%20My%20name%20is%20[Your%20Name]." className="btn-wh">Begin a Conversation</a>
          <a href="https://magsmen.com" className="btn-wo">Visit Magsmen</a>
        </div>
        <p className="cta-contact">sandeep@magsmen.com &nbsp;|&nbsp; connect@magsmen.com &nbsp;|&nbsp; www.magsmen.com</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="st-footer">
      <div className="ft">
        <div className="ft-grid">
          <div>
            <div className="ft-brand">
                <img src={Favi01} alt="Magsmen" className="w-16 h-16" />
                </div>
            <p className="ft-tag">Strategy Consultants. A division of Grofesion Innovations Private Limited. Serving businesses, founders, and individuals across Andhra Pradesh, Telangana, and India.</p>
          </div>
          <div className="ft-col">
            <h4>Stature</h4>
            <a href="#what" onClick={e => { e.preventDefault(); scrollTo("#what"); }}>What Stature Is</a>
            <a href="#who" onClick={e => { e.preventDefault(); scrollTo("#who"); }}>Who It Serves</a>
            <a href="#tiers" onClick={e => { e.preventDefault(); scrollTo("#tiers"); }}>The Four Tiers</a>
            <a href="#stages" onClick={e => { e.preventDefault(); scrollTo("#stages"); }}>The 10-Stage Framework</a>
            <a href="#cases" onClick={e => { e.preventDefault(); scrollTo("#cases"); }}>Case Studies</a>
            <a href="#models" onClick={e => { e.preventDefault(); scrollTo("#models"); }}>Engagement Models</a>
          </div>
          <div className="ft-col">
            <h4>Magsmen</h4>
            <a href="https://magsmen.com">www.magsmen.com</a>
            <a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a>
            <a href="mailto:connect@magsmen.com">connect@magsmen.com</a>
            <p>4th Floor, Icon Spaces, Brodipet</p>
            <p>Guntur, Andhra Pradesh 522002</p>
          </div>
        </div>
        <div className="ft-bottom">
          <p>© 2025 Grofesion Innovations Private Limited. All rights reserved. Stature is a proprietary methodology of Magsmen Strategy Consultants.</p>
          <p>Confidential. Not for circulation.</p>
        </div>
      </div>
    </footer>
  );
}

export default function StatureByMagsmen() {
  useScrollProgress();
  useReveal();
  return (
    <>
      <style>{css}</style>
      <div id="prog" />
      <Navbar />
      <Hero />
      <Ticker />
      <WhatSection />
      <WhoSection />
      <TiersSection />
      <StagesSection />
      <CasesSection />
      <DeliverablesSection />
      <ModelsSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </>
  );
}
