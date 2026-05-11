import { useState, useEffect, useRef } from "react";
import logo from "/assets/blacklogohorizontal.png"
import whitelogo from "/assets/Artboard 1 copy 272x-8 (1).png"
import React, { FormEvent } from 'react';
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
import emailjs from '@emailjs/browser';
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
 
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --v:#7C3AED;--vl:#EDE9FE;--vm:#A78BFA;--vd:#5B21B6;--vx:#1A0A2E;
    --tc:#0F0A1A;--ts:#4A4064;--tm:#8A7FA0;
    --bg:#FFFFFF;--bg2:#F8F5FF;--bg3:#F0ECF8;
    --bdr:rgba(124,58,237,.13);
    --gold:#C5A572;--terra:#B06450;--ochre:#CC9933;--beige:#F5E8D1;
    --ink:#0F0A1A;--r8:8px;--r12:12px;--r20:20px;
  }
  html{scroll-behavior:smooth;font-family:'Montserrat',sans-serif;color:var(--tc);background:var(--bg)}
  body{overflow-x:hidden}
  nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--bdr);padding:.8rem 1.2rem;display:flex;align-items:center;justify-content:space-between}
  .nav-logo img{height:22px;display:block}
  .nav-tag{display:none;font-size:.65rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--tm)}
  .nav-cta{font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:var(--v);border:none;border-radius:6px;padding:.45rem .9rem;cursor:pointer;text-decoration:none;white-space:nowrap}
  #prog{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--terra),var(--gold),var(--v));z-index:200;transition:width .1s linear}
  .hero{min-height:100vh;padding:5rem 1.5rem 3rem;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden;background:#fff}
  .hero-art{display:none}
  .hero-eyebrow{font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:1rem}
  .hero-pre{font-size:.8rem;font-weight:500;letter-spacing:.1em;color:var(--terra);margin-bottom:.5rem;text-transform:uppercase}
  .hero h1{font-size:clamp(3rem,10vw,6.5rem);font-weight:700;line-height:.95;letter-spacing:-.02em;color:var(--tc);margin-bottom:.5rem}
  .hero-sub{font-size:clamp(.85rem,2vw,1rem);color:var(--ts);margin-bottom:.5rem;font-weight:500;letter-spacing:.06em}
  .hero-tagline{font-size:clamp(.95rem,2.5vw,1.2rem);font-style:italic;color:var(--v);font-weight:300;margin-bottom:2rem;line-height:1.6}
  .hero-pills{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem}
  .pill{font-size:.65rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.3rem .8rem;border-radius:20px;border:1px solid var(--bdr)}
  .pill.gold{background:rgba(197,165,114,.12);color:var(--gold);border-color:rgba(197,165,114,.3)}
  .pill.terra{background:rgba(176,100,80,.1);color:var(--terra);border-color:rgba(176,100,80,.25)}
  .pill.violet{background:var(--vl);color:var(--vd);border-color:var(--bdr)}
  .hero-btns{display:flex;flex-wrap:wrap;gap:.75rem}
  .btn-p{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.75rem 1.5rem;border-radius:var(--r8);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem}
  .btn-p.solid{background:var(--v);color:#fff;border:none}
  .btn-p.ghost{background:transparent;color:var(--v);border:2px solid var(--v)}
  .ticker-wrap{background:var(--vx);overflow:hidden;padding:.6rem 0;white-space:nowrap}
  .ticker-inner{display:inline-flex;animation:tick 28s linear infinite}
  .ticker-inner span{font-size:.65rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6);padding:0 2rem}
  .ticker-inner .sep{color:var(--gold);padding:0 .5rem}
  @keyframes tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  .sec{padding:3.5rem 1.5rem}
  .sec-inner{max-width:1080px;margin:0 auto}
  .sec-alt{background:var(--bg2)}
  .sec-dark{background:var(--vx);color:#fff}
  .sec-terra{background:linear-gradient(135deg,#1a0a0a 0%,#2d1210 100%);color:#fff}
  .sec-beige{background:var(--beige)}
  .sec-label{font-size:.6rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:.75rem}
  .sec-label.light{color:rgba(197,165,114,.8)}
  .sec h2{font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;line-height:1.15;margin-bottom:.75rem}
  .sec-lead{font-size:1rem;color:var(--ts);line-height:1.7;max-width:680px;margin-bottom:2rem}
  .sec-dark .sec-lead{color:rgba(255,255,255,.6)}
  .sec-dark h2{color:#fff}
  .etym-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
  .etym-card{background:#fff;border:1px solid var(--bdr);border-radius:var(--r12);padding:1.5rem;border-top:3px solid var(--gold)}
  .etym-lang{font-size:.6rem;font-weight:700;letter-spacing:.18em;color:var(--gold);text-transform:uppercase;margin-bottom:.4rem}
  .etym-word{font-size:1.4rem;font-weight:700;color:var(--tc);margin-bottom:.5rem}
  .etym-desc{font-size:.85rem;color:var(--ts);line-height:1.65}
  .story-block{background:linear-gradient(135deg,rgba(197,165,114,.08),rgba(176,100,80,.05));border:1px solid rgba(197,165,114,.2);border-left:4px solid var(--gold);border-radius:var(--r12);padding:1.5rem 1.5rem 1.5rem 1.75rem;margin:1.5rem 0}
  .story-block p{font-size:.95rem;line-height:1.75;color:var(--ts);font-style:italic}
  .value-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
  .value-card{border-radius:var(--r12);padding:1.5rem;position:relative;overflow:hidden}
  .value-card.dark{background:#fff;border:1px solid var(--bdr)}
  .value-num{font-size:3rem;font-weight:700;color:var(--bdr);position:absolute;top:.5rem;right:1rem;line-height:1}
  .value-sanskrit{font-size:1.1rem;font-weight:700;color:var(--gold);margin-bottom:.2rem}
  .value-eng{font-size:.75rem;font-weight:600;letter-spacing:.06em;color:var(--terra);text-transform:uppercase;margin-bottom:.75rem}
  .value-desc{font-size:.85rem;color:var(--ts);line-height:1.65;position:relative;z-index:1}
  .comm-split{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
  .comm-col{border-radius:var(--r12);padding:1.5rem}
  .comm-always{background:#fff;border:1px solid var(--bdr);border-top:3px solid var(--gold)}
  .comm-never{background:#fff;border:1px solid rgba(176,100,80,.2);border-top:3px solid var(--terra)}
  .comm-col-label{font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:1rem}
  .comm-col-label.a{color:var(--gold)}
  .comm-col-label.n{color:var(--terra)}
  .comm-item{padding:.75rem 0;border-bottom:1px solid var(--bdr)}
  .comm-item:last-child{border-bottom:none}
  .comm-item-title{font-size:.85rem;font-weight:600;color:var(--tc);margin-bottom:.25rem}
  .comm-item-desc{font-size:.78rem;color:var(--ts);line-height:1.55}
  .echo-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
  .echo-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:var(--r12);padding:1.25rem;border-left:3px solid var(--gold)}
  .echo-title{font-size:.95rem;font-weight:600;color:#fff;margin-bottom:.4rem}
  .echo-desc{font-size:.82rem;color:rgba(255,255,255,.6);line-height:1.6}
  .voice-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
  .voice-item{background:#fff;border:1px solid var(--bdr);border-radius:var(--r8);padding:1rem 1rem 1rem 1.25rem;border-left:3px solid var(--v)}
  .voice-title{font-size:.9rem;font-weight:600;color:var(--tc);margin-bottom:.25rem}
  .voice-desc{font-size:.82rem;color:var(--ts);line-height:1.55}
  .copy-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
  .copy-item{background:var(--bg2);border:1px solid var(--bdr);border-radius:var(--r8);padding:1rem}
  .copy-format{font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem}
  .copy-text{font-size:.9rem;font-style:italic;color:var(--tc);line-height:1.6}
  .palette-row{display:flex;flex-wrap:wrap;gap:.75rem;margin:1.25rem 0}
  .swatch-item{flex:1;min-width:100px}
  .swatch{height:56px;border-radius:var(--r8);margin-bottom:.4rem}
  .swatch-name{font-size:.75rem;font-weight:600;color:var(--tc)}
  .swatch-hex{font-size:.65rem;color:var(--tm)}
  .interior-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1rem}
  .interior-item{background:#fff;border:1px solid var(--bdr);border-radius:var(--r8);padding:1rem;border-left:3px solid var(--ochre)}
  .interior-item-title{font-size:.88rem;font-weight:600;color:var(--tc);margin-bottom:.3rem}
  .interior-item-desc{font-size:.8rem;color:var(--ts);line-height:1.6}
  .tag-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
  .tag-card{border-radius:var(--r12);padding:1.25rem;border:1px solid var(--bdr)}
  .tag-card.rec{background:linear-gradient(135deg,rgba(124,58,237,.08),rgba(197,165,114,.06));border-color:var(--gold);border-top:3px solid var(--gold)}
  .tag-badge{font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:.25rem .7rem;border-radius:20px;display:inline-block;margin-bottom:.6rem}
  .tag-badge.r{background:var(--gold);color:#1a0a00}
  .tag-badge.a{background:var(--vl);color:var(--vd)}
  .tag-tagline{font-size:1.05rem;font-style:italic;font-weight:500;color:var(--tc);margin-bottom:.5rem}
  .tag-note{font-size:.8rem;color:var(--ts);line-height:1.55}
  .identity-row{display:flex;flex-direction:column;gap:0}
  .id-item{display:flex;align-items:flex-start;gap:1rem;padding:.85rem 0;border-bottom:1px solid var(--bdr)}
  .id-label{font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);min-width:110px;flex-shrink:0;padding-top:.1rem}
  .id-value{font-size:.85rem;font-weight:600;color:var(--tc);flex:1}
  .ip-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
  .ip-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--r8);padding:1rem;display:flex;gap:.75rem;align-items:flex-start}
  .ip-class{font-size:.65rem;font-weight:700;letter-spacing:.1em;background:rgba(197,165,114,.2);color:var(--gold);border-radius:20px;padding:.25rem .7rem;white-space:nowrap;flex-shrink:0}
  .ip-text{font-size:.82rem;color:rgba(255,255,255,.7);line-height:1.55}
  .ip-text strong{color:#fff}
  .ip-alert{background:rgba(176,100,80,.15);border:1px solid rgba(176,100,80,.3);border-radius:var(--r8);padding:1rem;margin-top:1rem}
  .ip-alert-title{font-size:.7rem;font-weight:700;color:var(--terra);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.4rem}
  .ip-alert-text{font-size:.82rem;color:rgba(255,255,255,.7);line-height:1.55}
  .founder-card{background:#fff;border:1px solid var(--bdr);border-radius:var(--r20);padding:2rem;position:relative;overflow:hidden}
  .founder-label{font-size:.6rem;font-weight:700;letter-spacing:.18em;color:var(--v);text-transform:uppercase;margin-bottom:1rem}
  .founder-text{font-size:.95rem;line-height:1.8;color:var(--ts);margin-bottom:1.5rem;font-style:italic}
  .founder-name{font-size:.9rem;font-weight:700;color:var(--tc)}
  .founder-title{font-size:.75rem;color:var(--tm)}
  .about-split{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:1.5rem}
  .about-tagline{font-size:1.4rem;font-weight:700;color:var(--tc);line-height:1.3;margin-bottom:1rem}
  .about-desc{font-size:.88rem;color:var(--ts);line-height:1.7;margin-bottom:1.5rem}
  .pillars{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}
  .pillar{background:var(--bg2);border-radius:var(--r8);padding:1rem;border-top:2px solid var(--v)}
  .pillar-icon{font-size:1.2rem;margin-bottom:.4rem}
  .pillar-title{font-size:.8rem;font-weight:700;color:var(--tc);margin-bottom:.2rem}
  .pillar-desc{font-size:.72rem;color:var(--tm);line-height:1.5}
  .sandeep-card{background:var(--bg2);border-radius:var(--r12);padding:1.25rem;border:1px solid var(--bdr)}
  .sandeep-head{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
  .sandeep-avatar{width:48px;height:48px;border-radius:50%;background:var(--v);display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:700;color:#fff;flex-shrink:0}
  .sandeep-name{font-size:.9rem;font-weight:700;color:var(--tc)}
  .sandeep-role{font-size:.72rem;color:var(--tm)}
  .cred-list{display:flex;flex-direction:column;gap:.4rem}
  .cred-item{font-size:.75rem;color:var(--ts);line-height:1.4;padding-left:.9rem;position:relative}
  .cred-item::before{content:"";position:absolute;left:0;top:.45rem;width:4px;height:4px;border-radius:50%;background:var(--v)}
  .strip{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.75rem}
  .strip-item{font-size:.65rem;font-weight:600;background:rgba(124,58,237,.08);color:var(--vd);border-radius:20px;padding:.25rem .7rem;border:1px solid var(--bdr)}
  .cta-sec{background:var(--vx);padding:4rem 1.5rem;text-align:center}
  .cta-sec h2{font-size:clamp(1.5rem,4vw,2.2rem);font-weight:700;color:#fff;margin-bottom:1rem}
  .cta-sec p{font-size:.95rem;color:rgba(255,255,255,.6);max-width:500px;margin:0 auto 2rem}
  .cta-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}
  footer{background:#0A0612;padding:2.5rem 1.5rem;color:rgba(255,255,255,.4)}
  .footer-inner{max-width:1080px;margin:0 auto}
  .footer-top{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}
  .footer-logo img{height:20px;opacity:.7;filter:brightness(10)}
  .footer-tagline{font-size:.7rem;color:rgba(255,255,255,.3);font-style:italic}
  .footer-links{display:flex;flex-wrap:wrap;gap:.5rem 1rem}
  .footer-links a{font-size:.7rem;color:rgba(255,255,255,.35);text-decoration:none}
  .footer-bottom{font-size:.65rem;border-top:1px solid rgba(255,255,255,.06);padding-top:1rem;line-height:1.7}
  #sdots{display:none;position:fixed;right:1rem;top:50%;transform:translateY(-50%);flex-direction:column;gap:.5rem;z-index:90}
  .sdot{width:8px;height:8px;border-radius:50%;background:var(--bdr);border:1px solid var(--vm);cursor:pointer;transition:all .25s}
  .sdot.act{background:var(--v);transform:scale(1.3)}
  #chat-btn{position:fixed;bottom:1.5rem;right:1.5rem;width:48px;height:48px;border-radius:50%;background:var(--v);border:none;cursor:pointer;z-index:95;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(124,58,237,.4)}
  #chat-btn svg{width:22px;height:22px;fill:#fff}
  #chat-panel{display:none;position:fixed;bottom:5rem;right:1.5rem;width:92vw;max-width:340px;background:#fff;border:1px solid var(--bdr);border-radius:var(--r20);box-shadow:0 8px 32px rgba(0,0,0,.12);z-index:94;flex-direction:column;overflow:hidden}
  #chat-panel.open{display:flex}
  #chat-head{background:var(--vx);padding:.9rem 1rem;display:flex;align-items:center;justify-content:space-between}
  #chat-head-title{font-size:.8rem;font-weight:600;color:#fff}
  #chat-close{background:none;border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:1.1rem;line-height:1}
  #chat-msgs{padding:1rem;min-height:120px;max-height:220px;overflow-y:auto;display:flex;flex-direction:column;gap:.6rem}
  .cmsg{font-size:.8rem;line-height:1.5;padding:.6rem .8rem;border-radius:10px;max-width:90%}
  .cmsg.bot{background:var(--bg2);color:var(--tc);align-self:flex-start}
  .cmsg.user{background:var(--v);color:#fff;align-self:flex-end}
  #chat-form{display:flex;border-top:1px solid var(--bdr);padding:.5rem}
  #chat-in{flex:1;border:none;outline:none;font-size:.8rem;font-family:inherit;padding:.4rem .6rem;color:var(--tc)}
  #chat-send{background:var(--v);color:#fff;border:none;border-radius:6px;padding:.4rem .8rem;cursor:pointer;font-size:.75rem;font-weight:600}
  .reveal{opacity:0;transform:translateY(20px);transition:opacity .55s ease,transform .55s ease}
  .reveal.vis{opacity:1;transform:none}
  @media(min-width:600px){
    .nav-tag{display:block}
    .hero{padding:7rem 2.5rem 4rem}
    .hero-art{display:block;position:absolute;top:0;right:0;width:52%;height:100%;z-index:0;pointer-events:none}
    .hero-content{position:relative;z-index:2;max-width:560px}
    .sec{padding:5rem 2.5rem}
    .etym-grid{grid-template-columns:1fr 1fr 1fr}
    .value-grid{grid-template-columns:1fr 1fr}
    .comm-split{grid-template-columns:1fr 1fr}
    .echo-grid{grid-template-columns:1fr 1fr}
    .interior-grid{grid-template-columns:1fr 1fr}
    .tag-grid{grid-template-columns:1fr 1fr}
    .ip-grid{grid-template-columns:1fr 1fr}
    .copy-grid{grid-template-columns:1fr 1fr}
    .voice-grid{grid-template-columns:1fr 1fr}
    .about-split{grid-template-columns:1fr 1fr}
    .footer-top{flex-direction:row;justify-content:space-between;align-items:flex-start}
    #sdots{display:flex}
  }
  @media(min-width:960px){
    .hero{padding:8rem 3rem 5rem;flex-direction:row;gap:3rem;min-height:100vh}
    .hero-art{position:relative;width:48%;flex-shrink:0;top:auto;right:auto;height:auto;min-height:600px}
    .hero-content{flex:1}
    .sec{padding:6rem 3rem}
    .value-grid{grid-template-columns:1fr 1fr 1fr}
    .echo-grid{grid-template-columns:repeat(3,1fr)}
    .interior-grid{grid-template-columns:repeat(3,1fr)}
    .copy-grid{grid-template-columns:repeat(3,1fr)}
    .voice-grid{grid-template-columns:repeat(4,1fr)}
    .tag-grid{grid-template-columns:repeat(3,1fr)}
    #sdots{display:flex}
    #chat-panel{left:auto;width:340px;right:1.5rem}
  }
`;
 
const SECTIONS = ['hero','story','vision','values','comm','echo','voice','interior','taglines','identity'];
 
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
 
function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const h = () => {
      const el = document.documentElement;
      setWidth((el.scrollTop || document.body.scrollTop) / (el.scrollHeight - el.clientHeight) * 100);
    };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return <div id="prog" style={{ width: width + '%' }} />;
}
 
function NavDots({ active }) {
  return (
    <div id="sdots">
      {SECTIONS.map((s, i) => (
        <div key={s} className={'sdot' + (active === i ? ' act' : '')} title={s}
          onClick={() => { const el = document.getElementById(s); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} />
      ))}
    </div>
  );
}
 
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ type: 'bot', text: 'Hello. I can answer questions about the Siyara brand identity, positioning, voice, values, or interior language. What would you like to know?' }]);
  const [input, setInput] = useState('');
  const msgsRef = useRef(null);
 
  useEffect(() => { if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight; }, [msgs]);
 
  const send = async (e) => {
    e.preventDefault();
    const q = input.trim(); if (!q) return;
    setMsgs(m => [...m, { type: 'user', text: q }]);
    setInput('');
    setMsgs(m => [...m, { type: 'bot', text: 'Thinking...' }]);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514', max_tokens: 350,
          system: 'You are the Siyara brand assistant for Magsmen Strategy Consultants. Siyara is a premium dermatology lounge in Hyderabad, a sub-brand under Skin Affair founded by Dr. Sai Srujana Adabala. The name comes from Arabic sayyara (wandering star), Sanskrit Siya (Sita), and Persian siyara (star). The brand philosophy is Paramparā meets Vigyan, Indian heritage meets clinical science. The interior concept is Modern Heritage Spa by INEX with terracotta, beige, ochre and black stone palette. The primary tagline is Where radiance is remembered, not created. Answer questions about the brand clearly and warmly in 2 to 3 sentences.',
          messages: [{ role: 'user', content: q }]
        })
      });
      const data = await res.json();
      setMsgs(m => [...m.slice(0, -1), { type: 'bot', text: data.content[0].text }]);
    } catch {
      setMsgs(m => [...m.slice(0, -1), { type: 'bot', text: 'Something went wrong. Please try again.' }]);
    }
  };
 
  return (
    <>
      <button id="chat-btn" onClick={() => setOpen(o => !o)} aria-label="Ask about Siyara">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
      </button>
      <div id="chat-panel" className={open ? 'open' : ''}>
        <div id="chat-head">
          <span id="chat-head-title">Ask about Siyara</span>
          <button id="chat-close" onClick={() => setOpen(false)}>&#x2715;</button>
        </div>
        <div id="chat-msgs" ref={msgsRef}>
          {msgs.map((m, i) => <div key={i} className={'cmsg ' + m.type}>{m.text}</div>)}
        </div>
        <form id="chat-form" onSubmit={send}>
          <input id="chat-in" type="text" placeholder="Ask a question..." autoComplete="off" value={input} onChange={e => setInput(e.target.value)} />
          <button id="chat-send" type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
 type UserData = {
  email: string;
};
function HeroArt() {
  return (
    <div className="hero-art">
      <svg width="100%" height="100%" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="420" cy="350" rx="280" ry="280" stroke="#C5A572" strokeWidth=".8" strokeDasharray="6 8" opacity=".18" fill="none"/>
        <ellipse cx="420" cy="350" rx="200" ry="200" stroke="#7C3AED" strokeWidth=".7" strokeDasharray="4 6" opacity=".12" fill="none"/>
        <ellipse cx="420" cy="350" rx="120" ry="120" stroke="#B06450" strokeWidth=".6" strokeDasharray="3 5" opacity=".14" fill="none"/>
        <circle cx="420" cy="350" r="38" fill="#C5A572" fillOpacity=".15" stroke="#C5A572" strokeWidth="1.2" opacity=".7"/>
        <circle cx="420" cy="350" r="18" fill="#C5A572" fillOpacity=".35" opacity=".7"/>
        <text x="420" y="354" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="10" fontWeight="600" fill="#C5A572" opacity=".8">SIYARA</text>
        <circle cx="270" cy="210" r="22" fill="#7C3AED" fillOpacity=".12" stroke="#7C3AED" strokeWidth="1" opacity=".6"/>
        <text x="270" y="207" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="600" fill="#7C3AED" opacity=".7">Arabic</text>
        <text x="270" y="218" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".6">Sayyara</text>
        <circle cx="560" cy="230" r="22" fill="#B06450" fillOpacity=".12" stroke="#B06450" strokeWidth="1" opacity=".6"/>
        <text x="560" y="227" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="600" fill="#B06450" opacity=".7">Sanskrit</text>
        <text x="560" y="238" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#B06450" opacity=".6">Siya</text>
        <circle cx="580" cy="460" r="22" fill="#CC9933" fillOpacity=".12" stroke="#CC9933" strokeWidth="1" opacity=".6"/>
        <text x="580" y="457" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="600" fill="#CC9933" opacity=".7">Persian</text>
        <text x="580" y="468" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#CC9933" opacity=".6">Siyora</text>
        <circle cx="320" cy="510" r="22" fill="#7C3AED" fillOpacity=".1" stroke="#7C3AED" strokeWidth=".8" opacity=".5"/>
        <text x="320" y="507" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="600" fill="#7C3AED" opacity=".6">Heritage</text>
        <text x="320" y="518" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".5">Paramparā</text>
        <line x1="292" y1="220" x2="398" y2="325" stroke="#C5A572" strokeWidth=".8" opacity=".3"/>
        <line x1="539" y1="238" x2="455" y2="320" stroke="#B06450" strokeWidth=".8" opacity=".3"/>
        <line x1="561" y1="450" x2="456" y2="376" stroke="#CC9933" strokeWidth=".8" opacity=".3"/>
        <line x1="340" y1="498" x2="402" y2="376" stroke="#7C3AED" strokeWidth=".8" opacity=".3"/>
        <text x="120" y="420" fontFamily="Montserrat,sans-serif" fontSize="140" fontWeight="700" fill="#0F0A1A" opacity=".025">S</text>
        <circle cx="340" cy="140" r="3" fill="#C5A572" opacity=".4"/>
        <circle cx="500" cy="580" r="2.5" fill="#C5A572" opacity=".3"/>
        <circle cx="180" cy="540" r="2" fill="#7C3AED" opacity=".35"/>
        <circle cx="540" cy="160" r="2" fill="#B06450" opacity=".3"/>
      </svg>
    </div>
  );
}
 
function EtymSVG() {
  return (
    <svg viewBox="0 0 900 80" width="100%" style={{ margin: '1.5rem 0 1rem' }} className="reveal">
      <rect x="0" y="10" width="270" height="60" rx="8" fill="#FDF8F0" stroke="#C5A572" strokeWidth=".8"/>
      <text x="135" y="34" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="#C5A572">ARABIC</text>
      <text x="135" y="48" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="700" fill="#1A1A2E">Sayyara</text>
      <text x="135" y="61" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#8A7FA0">Wandering star · s-y-r · to move</text>
      <line x1="270" y1="40" x2="315" y2="40" stroke="#C5A572" strokeWidth=".8" opacity=".5"/>
      <rect x="315" y="10" width="270" height="60" rx="8" fill="#FDF0EC" stroke="#B06450" strokeWidth=".8"/>
      <text x="450" y="34" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="#B06450">SANSKRIT</text>
      <text x="450" y="48" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="700" fill="#1A1A2E">Siya</text>
      <text x="450" y="61" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#8A7FA0">Connected to Sita · Radiance · Strength</text>
      <line x1="585" y1="40" x2="630" y2="40" stroke="#C5A572" strokeWidth=".8" opacity=".5"/>
      <rect x="630" y="10" width="270" height="60" rx="8" fill="#FFFAE8" stroke="#CC9933" strokeWidth=".8"/>
      <text x="765" y="34" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="#CC9933">PERSIAN</text>
      <text x="765" y="48" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="700" fill="#1A1A2E">Siyora</text>
      <text x="765" y="61" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fill="#8A7FA0">Star · Planet · World</text>
    </svg>
  );
}
 
function RoadmapSVG() {
  return (
    <svg viewBox="0 0 900 70" width="100%" style={{ margin: '1.5rem 0' }} className="reveal">
      <rect x="0" y="8" width="280" height="54" rx="8" fill="#2D1A4A" stroke="rgba(124,58,237,.4)" strokeWidth=".8"/>
      <text x="140" y="30" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,.5)">TODAY</text>
      <text x="140" y="45" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill="white">Trusted Dermatology Home</text>
      <line x1="280" y1="35" x2="310" y2="35" stroke="#C5A572" strokeWidth="1.2"/>
      <polygon points="308,31 316,35 308,39" fill="#C5A572"/>
      <rect x="310" y="8" width="280" height="54" rx="8" fill="#3D1A6E" stroke="rgba(124,58,237,.5)" strokeWidth=".8"/>
      <text x="450" y="30" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,.6)">SIYARA LAUNCH</text>
      <text x="450" y="45" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill="white">Premium Heritage Lounge</text>
      <line x1="590" y1="35" x2="620" y2="35" stroke="#C5A572" strokeWidth="1.2"/>
      <polygon points="618,31 626,35 618,39" fill="#C5A572"/>
      <rect x="620" y="8" width="280" height="54" rx="8" fill="#7C3AED" stroke="#A78BFA" strokeWidth=".8"/>
      <text x="760" y="30" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,.75)">VISION</text>
      <text x="760" y="45" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill="white">Most Trusted Premium Derm</text>
    </svg>
  );
}
 
function CommPrincipleSVG() {
  return (
    <svg viewBox="0 0 900 60" width="100%" style={{ margin: '1.25rem 0' }} className="reveal">
      <rect x="0" y="5" width="900" height="50" rx="8" fill="#F8F5FF" stroke="rgba(124,58,237,.2)" strokeWidth=".8"/>
      <rect x="0" y="5" width="4" height="50" rx="2" fill="#7C3AED"/>
      <text x="24" y="28" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="600" fill="#1A1A2E">Core Communication Rule</text>
      <text x="24" y="44" fontFamily="Montserrat,sans-serif" fontSize="8.5" fontStyle="italic" fill="#7C3AED">Every word must do one of three things: build trust, demonstrate depth, or reduce distance between the brand and the woman it serves.</text>
    </svg>
  );
}
 
function HubSpokeSVG() {
  return (
    <svg viewBox="0 0 900 120" width="100%" style={{ margin: '1.25rem 0' }} className="reveal">
      <rect x="350" y="40" width="200" height="40" rx="8" fill="#7C3AED"/>
      <text x="450" y="55" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.6)">BRAND CORE</text>
      <text x="450" y="69" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="9" fontWeight="700" fill="white">SIYARA LOUNGE</text>
      <line x1="350" y1="60" x2="230" y2="60" stroke="rgba(124,58,237,.5)" strokeDasharray="4 3" strokeWidth=".8"/>
      <rect x="80" y="45" width="150" height="30" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth=".8"/>
      <text x="155" y="64" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#5B21B6">A Skin Affair</text>
      <line x1="550" y1="60" x2="670" y2="60" stroke="rgba(197,165,114,.5)" strokeDasharray="4 3" strokeWidth=".8"/>
      <rect x="670" y="45" width="160" height="30" rx="6" fill="#FDF8F0" stroke="#C5A572" strokeWidth=".8"/>
      <text x="750" y="64" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#8C6A30">Paramparā + Vigyan</text>
      <line x1="450" y1="80" x2="450" y2="105" stroke="rgba(176,100,80,.5)" strokeDasharray="4 3" strokeWidth=".8"/>
      <rect x="350" y="100" width="200" height="20" rx="6" fill="#FDF0EC" stroke="#B06450" strokeWidth=".8"/>
      <text x="450" y="114" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#7A3025">Dr. Srujana Adabala</text>
    </svg>
  );
}
 
function TickerBar() {
  const items = ['Siyara','Brand Story','Paramparā meets Vigyan','Modern Heritage Spa','Wandering Star','A Skin Affair','Dr. Srujana Adabala','Hyderabad'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((t, i) => (
          <span key={i}>{t}{i < doubled.length - 1 && <span className="sep">·</span>}</span>
        ))}
      </div>
    </div>
  );
}
 
export default function SiyaraBrandIdentity() {
  const [activeSection, setActiveSection] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
 
  useReveal();
 
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
 
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const i = SECTIONS.indexOf(e.target.id);
          if (i >= 0) setActiveSection(i);
        }
      });
    }, { threshold: .4 });
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

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
  
  if (!isLoggedIn) {
    return (
  <div
    className="
      relative min-h-screen overflow-hidden font-sans
      flex items-center justify-center lg:justify-end
      px-4 sm:px-6 lg:px-20
      bg-cover bg-center
    "
    style={{
      backgroundImage: `url(${
        typeof window !== "undefined" && window.innerWidth < 1024
          ? "/assets/85a78ffb-ec34-49ae-a4c5-1a99a8313a42.png"
          : "/assets/bg-for-lock.png"
      })`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10"></div>

    {/* RIGHT SIDE */}
    <div className="relative z-10 flex items-center justify-center lg:justify-end w-full mr-[-13px]">
      
      <div className="w-full max-w-md lg:mr-20">
        
        <div
          className="
            bg-white/92
            backdrop-blur-xl
            rounded-[32px]
            shadow-2xl
            p-6 sm:p-8
            border border-white/40
          "
        >

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">

            <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
              <LayoutDashboard className="w-8 h-8" />
            </div>

            <h1 className="text-2xl font-bold text-[#1E293B] uppercase tracking-tight">
              Strategic Dashboard
            </h1>

            <p className="text-slate-500 text-sm mt-2">
              Enter your email to access
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
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
                  placeholder="example@email.com"
                  className="
                    w-full
                    pl-12
                    pr-4
                    py-4
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-xl
                    outline-none
                    transition-all
                    focus:ring-2
                    focus:ring-[#1E293B]/20
                    focus:border-[#1E293B]/30
                  "
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {/* Success */}
            {successMessage && (
              <div className="text-green-600 bg-green-50 p-3 rounded-xl text-xs">
                {successMessage}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                w-full
                bg-[#1E293B]
                hover:bg-[#0f172a]
                transition-all
                duration-300
                text-white
                font-semibold
                py-4
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                disabled:opacity-70
              "
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
  </div>
    );
  }




 
  return (
    <>
      <ProgressBar />
 
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#hero">
          <img src={logo} alt="Magsmen Strategy Consultants" />
        </a>
        <span className="nav-tag">Siyara Brand Identity</span>
        <a className="nav-cta" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Siyara%20Brand%20Identity%20Engagement&body=Hello%2C%20I%20have%20reviewed%20the%20Siyara%20Brand%20Identity%20document%20and%20would%20like%20to%20proceed.">Begin Engagement</a>
      </nav>
 
      <NavDots active={activeSection} />
 
      {/* HERO */}
      <section className="hero" id="hero">
        <HeroArt />
        <div className="hero-content">
          <p className="hero-pre">A Skin Affair</p>
          <p className="hero-eyebrow">Brand Identity Document</p>
          <h1>SIYARA</h1>
          <p className="hero-sub">Lounge</p>
          <p className="hero-tagline">"Where radiance is remembered, not created."</p>
          <div className="hero-pills">
            <span className="pill gold">Arabic · Sanskrit · Persian</span>
            <span className="pill terra">Wandering Star</span>
            <span className="pill violet">Paramparā meets Vigyan</span>
            <span className="pill gold">Modern Heritage Spa</span>
          </div>
          <div className="hero-btns">
            <a className="btn-p solid" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Siyara%20Brand%20Engagement&body=Hello%2C%20I%20would%20like%20to%20discuss%20the%20Siyara%20brand%20identity%20engagement.">Begin Engagement</a>
            <a className="btn-p ghost" href="#story">Read the Story</a>
          </div>
        </div>
      </section>
 
      {/* TICKER */}
      <TickerBar />
 
      {/* BRAND STORY */}
      <section className="sec" id="story">
        <div className="sec-inner">
          <p className="sec-label reveal">01 — Brand Story</p>
          <h2 className="reveal">The Name That Was Always Waiting</h2>
          <p className="sec-lead reveal">Siyara carries roots across three civilisations. Each one adds a layer of meaning that was not invented but discovered. A name built to carry a brand for thirty years.</p>
          <EtymSVG />
          <div className="etym-grid reveal">
            <div className="etym-card">
              <div className="etym-lang">Arabic Root</div>
              <div className="etym-word">Sayyara سيّارة</div>
              <div className="etym-desc">From the root s-y-r: to travel, to move, to go forth. In classical Arabic astronomy, sayyara meant a wandering star. A planet. Something that moves with deliberate purpose across the sky. Not lost. Purposeful.</div>
            </div>
            <div className="etym-card" style={{ borderTopColor: 'var(--terra)' }}>
              <div className="etym-lang" style={{ color: 'var(--terra)' }}>Sanskrit Root</div>
              <div className="etym-word">Siya सिया</div>
              <div className="etym-desc">Connected to Sita, the most revered feminine figure in the Ramayana. Sita embodied beauty, devotion, and inner strength. She emerged from fire unbroken and radiant. The original Indian symbol of a woman who cannot be diminished.</div>
            </div>
            <div className="etym-card" style={{ borderTopColor: 'var(--ochre)' }}>
              <div className="etym-lang" style={{ color: 'var(--ochre)' }}>Persian Root</div>
              <div className="etym-word">Siyora / Sayara</div>
              <div className="etym-desc">In Persian and Urdu, siyara means star, planet, or world. In Persian poetry, a wandering star is not lost. It is the one that dares to move while others stay fixed. Grace in motion. Courage in visibility.</div>
            </div>
          </div>
          <div className="story-block reveal">
            <p>A woman who moves with purpose. A star that traces its own path. Indian in her heritage. Timeless in her radiance. Unafraid of being seen. One name. Three civilisations. One woman.</p>
          </div>
          <div className="story-block reveal">
            <p>Siyara began with a recognition: that every woman who has sat across from a doctor in a dermatology clinic has deserved more than a prescription and a checkout. She has deserved to be seen. Not just her skin. Her. The woman who came because she understands that her appearance is not vanity but identity, and because she has been waiting for a place that understands the difference.</p>
          </div>
          <div className="story-block reveal" style={{ marginTop: '.75rem' }}>
            <p>Siyara Lounge is that place. Built on the first floor of Skin Affair, Hyderabad's trusted dermatology home, Siyara is the premium expression of everything Dr. Srujana Adabala has always practised at the deepest level: root cause analysis, the Mind-Body-Skin-Hair philosophy, treatments drawn from both ancient Indian wisdom and modern clinical science. A place where the consultation feels like a conversation. Where every patient leaves looking exactly like herself. Only more so.</p>
          </div>
        </div>
      </section>
 
      {/* VISION AND MISSION */}
      <section className="sec sec-dark" id="vision">
        <div className="sec-inner">
          <p className="sec-label light reveal">02 + 03 — Vision and Mission</p>
          <h2 className="reveal">Where Siyara Is Going</h2>
          <RoadmapSVG />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '1.5rem' }} className="reveal">
            <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r12)', padding: '1.5rem', borderLeft: '4px solid var(--terra)' }}>
              <div className="sec-label light">Vision</div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.85)', lineHeight: '1.75' }}>To become the most trusted premium dermatology destination for women in Hyderabad, recognised not for the treatments we offer but for the confidence we restore. A place where Indian heritage and modern clinical science are never in conflict because they were always meant to work together. Where a woman leaves not transformed but reclaimed.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r12)', padding: '1.5rem', borderLeft: '4px solid var(--ochre)' }}>
              <div className="sec-label" style={{ color: 'var(--ochre)' }}>Mission</div>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.85)', lineHeight: '1.75' }}>To provide every woman who walks through our door with a clinical experience as rooted in Indian tradition as it is grounded in modern science. To treat skin not as a surface to be corrected but as an expression of identity to be honoured. To ensure that every consultation, every treatment, and every follow-up leaves the patient more informed, more confident, and more fully herself.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: 'rgba(197,165,114,.08)', borderRadius: 'var(--r12)', border: '1px solid rgba(197,165,114,.2)' }} className="reveal">
            <div className="sec-label light" style={{ marginBottom: '.75rem' }}>Brand Promise</div>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gold)', lineHeight: '1.6', fontWeight: '300' }}>"You will leave Siyara looking exactly like yourself. Only more so. Clearer. Calmer. More present. Not a version of someone else's beauty. The fullest version of yours."</p>
          </div>
        </div>
      </section>
 
      {/* BRAND VALUES */}
      <section className="sec sec-beige" id="values">
        <div className="sec-inner">
          <p className="sec-label reveal">04 — Brand Values</p>
          <h2 className="reveal">Five Pillars of Siyara</h2>
          <p className="sec-lead reveal">Five Sanskrit-named principles that govern every decision, every interaction, and every treatment at Siyara. Heritage with clinical precision.</p>
          <div className="value-grid">
            {[
              { num: '01', s: 'Paramparā', e: 'Heritage as Depth, Not Decoration', d: 'Siyara honours the unbroken lineage of Indian skin wisdom: turmeric, kumkumadi, neem, saffron, chandan. Not as marketing language but as clinical philosophy. Every treatment integrates the validated science behind these traditions. Heritage is not the wallpaper. It is the foundation.' },
              { num: '02', s: 'Vigyan', e: 'Science as Service', d: 'Dr. Srujana\'s methodology is built on evidence, root cause analysis, and the Mind-Body-Skin-Hair axis. US-FDA approved technology. IADVL-aligned protocols adapted for Indian skin types. Modern clinical science is not imported. At Siyara, it is practised with Indian specificity.' },
              { num: '03', s: 'Darshan', e: 'Being Truly Seen', d: 'Darshan means a sacred encounter. The act of truly seeing and being seen. At Siyara, every patient is seen completely. Not just her skin concern. The life she is living, the confidence she is building, the woman she is becoming.' },
              { num: '04', s: 'Pratishtha', e: 'Earned Authority', d: 'Pratishtha means reputation built through consistent action. Siyara does not claim premium. It earns it. Through clinical outcomes. Through the quality of every patient interaction. Through Dr. Srujana\'s double Gold Medal academic foundation.' },
              { num: '05', s: 'Suraksha', e: 'Protection First', d: 'Suraksha means protection. Siyara is a space where every woman\'s skin, confidence, and dignity is protected. No over-treatment. No pressure. No procedure without full clinical justification. The patient\'s long-term skin health always supersedes any short-term commercial opportunity.' },
            ].map((v, i) => (
              <div key={i} className="value-card dark reveal">
                <div className="value-num">{v.num}</div>
                <div className="value-sanskrit">{v.s}</div>
                <div className="value-eng">{v.e}</div>
                <div className="value-desc">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* COMMUNICATION PRINCIPLES */}
      <section className="sec" id="comm">
        <div className="sec-inner">
          <p className="sec-label reveal">05 — Communication Principles</p>
          <h2 className="reveal">How Siyara Shows Up</h2>
          <p className="sec-lead reveal">Every word Siyara speaks must build trust, demonstrate depth, or reduce the distance between the brand and the woman it serves. Nothing else earns a place.</p>
          <CommPrincipleSVG />
          <div className="comm-split reveal">
            <div className="comm-col comm-always">
              <div className="comm-col-label a">Siyara Always</div>
              {[
                { t: 'Speaks with warmth before authority', d: 'Clinical depth is carried lightly. A patient must feel comfortable before she feels impressed.' },
                { t: 'Honours the whole woman', d: 'Every communication acknowledges that skin is not separate from how a woman feels about herself.' },
                { t: 'Names Indian heritage with pride', d: 'Turmeric, kumkumadi, the Rigveda\'s description of Ushas. These are references, not decorations.' },
                { t: 'Positions outcomes over procedures', d: 'The communication is never about the treatment. It is always about what the patient will feel after it.' },
                { t: 'Protects patient dignity', d: 'Reviews and before-and-after content are shared only with full consent and in a manner that honours the patient.' },
              ].map((item, i) => (
                <div key={i} className="comm-item">
                  <div className="comm-item-title">{item.t}</div>
                  <div className="comm-item-desc">{item.d}</div>
                </div>
              ))}
            </div>
            <div className="comm-col comm-never">
              <div className="comm-col-label n">Siyara Never</div>
              {[
                { t: 'Uses fear or insecurity as a trigger', d: 'No "fix your skin before it\'s too late." No before-and-after framing that implies the before was a failure.' },
                { t: 'Claims transformation', d: 'Siyara does not transform women. It restores what was always there. The language distinction is not minor.' },
                { t: 'Over-explains the clinical', d: 'Patients need a confident recommendation, not a paper. Trust is built through outcome language, not technical language.' },
                { t: 'Shouts about luxury', d: 'The premium experience communicates itself. Saying "luxury" is the admission that the experience is not enough on its own.' },
                { t: 'Disrespects a patient\'s choice', d: 'Whether a patient chooses a peel or Botox, both are treated with equal clinical seriousness and personal respect.' },
              ].map((item, i) => (
                <div key={i} className="comm-item">
                  <div className="comm-item-title">{item.t}</div>
                  <div className="comm-item-desc">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* BRAND ECHO */}
      <section className="sec sec-dark" id="echo">
        <div className="sec-inner">
          <p className="sec-label light reveal">06 — Brand Echo</p>
          <h2 className="reveal">The Feeling That Stays</h2>
          <p className="sec-lead reveal">Brand echo is not what a patient sees at Siyara. It is what she carries with her after she leaves. The reason she tells a friend: "You have to go to Siyara."</p>
          <div className="echo-grid">
            {[
              { t: 'She feels seen', d: 'Not analysed. Not classified. Seen. The consultation felt like a conversation between equals. The doctor asked questions that no one had asked before.' },
              { t: 'She feels Indian and aspirational simultaneously', d: 'The environment, the references, the treatments carried the weight of a culture she is proud of, delivered at a standard she did not have to apologise for wanting.' },
              { t: 'She feels confident leaving', d: 'Not because she looks different. Because she understands her own skin better than she did before she arrived. Knowledge is confidence. Siyara gives both.' },
              { t: 'She wants to return', d: 'Not because she has been told to come back. Because she noticed the difference. Because the follow-up message felt personal. Because the brand remembered her.' },
              { t: 'She tells someone', d: 'Siyara\'s primary growth mechanism is this echo. A patient who felt seen does not keep it to herself. She sends her sister. Her colleague. Her mother.' },
            ].map((e, i) => (
              <div key={i} className="echo-card reveal">
                <div className="echo-title">{e.t}</div>
                <div className="echo-desc">{e.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* VOICE AND TONE */}
      <section className="sec sec-alt" id="voice">
        <div className="sec-inner">
          <p className="sec-label reveal">07 — Voice and Tone</p>
          <h2 className="reveal">How Siyara Speaks</h2>
          <p className="sec-lead reveal">One voice. Four registers. The construction of every sentence is itself a brand signal.</p>
          <div className="voice-grid">
            {[
              { t: 'Warm before authoritative', d: 'Clinical depth is never cold. Siyara does not announce expertise. It demonstrates it through the quality of questions asked and the precision of answers given.' },
              { t: 'Grounded in India', d: 'Sanskrit references, Indian botanical ingredients, the Paramparā lineage. Indian heritage is a natural register, not a marketing costume.' },
              { t: 'Quietly premium', d: 'Siyara never uses the word luxury. The language itself must feel elevated: deliberate vocabulary, unhurried sentence rhythm, space between thoughts.' },
              { t: 'Personally direct', d: 'Siyara speaks to one woman at a time. Not to a demographic. Every caption, every message, every note is written as if meant for the specific person reading it.' },
            ].map((v, i) => (
              <div key={i} className="voice-item reveal">
                <div className="voice-title">{v.t}</div>
                <div className="voice-desc">{v.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }} className="reveal">
            <p className="sec-label">Brand Voice in Practice</p>
            <div className="copy-grid" style={{ marginTop: '1rem' }}>
              {[
                { f: 'Instagram — Heritage', t: '"Your grandmother had a ritual for it. Your mother passed it down. We gave it a clinical protocol. Siyara, where paramparā meets vigyan."' },
                { f: 'Instagram — Confidence', t: '"She did not come to change. She came to remember. That is what Siyara is for."' },
                { f: 'Appointment Confirmation', t: '"Your time at Siyara has been reserved. We have prepared with care. See you soon."' },
                { f: 'Post-Treatment Follow-Up', t: '"We hope you are feeling it, that quiet certainty that comes after a session at Siyara. We are here when you are ready to return."' },
                { f: 'Service — Skin Boosters', t: '"Hydration at the cellular level. Drawing from both hyaluronic acid science and the ancient Indian understanding of moisture as medicine."' },
                { f: 'Instagram Bio', t: '"Heritage meets science. For the woman who was always radiant. Siyara Lounge, a Skin Affair, Hyderabad."' },
              ].map((c, i) => (
                <div key={i} className="copy-item">
                  <div className="copy-format">{c.f}</div>
                  <div className="copy-text">{c.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* INTERIOR LANGUAGE */}
      <section className="sec sec-terra" id="interior">
        <div className="sec-inner">
          <p className="sec-label light reveal">08 — Interior Language</p>
          <h2 className="reveal">Modern Heritage Spa</h2>
          <p className="sec-lead reveal">Interior concept by INEX — Inspired · Nature · Expression. Every material, every form, and every finish is a brand decision.</p>
          <div className="palette-row reveal">
            {[
              { bg: '#B06450', name: 'Terracotta Plaster', hex: '#B06450' },
              { bg: '#F5E8D1', name: 'Warm Beige Plaster', hex: '#F5E8D1', border: '1px solid rgba(255,255,255,.2)' },
              { bg: '#CC9933', name: 'Deep Ochre Fabric', hex: '#CC9933' },
              { bg: '#1A1A1A', name: 'Black Stone Floor', hex: '#1A1A1A' },
              { bg: '#8C7B6B', name: 'Warm Umber Wood', hex: '#8C7B6B' },
            ].map((s, i) => (
              <div key={i} className="swatch-item">
                <div className="swatch" style={{ background: s.bg, border: s.border || 'none' }} />
                <div className="swatch-name" style={{ color: '#FAF8F4' }}>{s.name}</div>
                <div className="swatch-hex" style={{ color: 'rgba(250,248,244,.5)' }}>{s.hex}</div>
              </div>
            ))}
          </div>
          <div className="interior-grid">
            {[
              { t: 'Arched doorways and carved panels', d: 'The arch is the oldest premium architectural form in Indian sacred and royal spaces. Peacock and elephant motifs are symbols of grace and prosperity. They ground the premium experience in cultural memory, not borrowed aesthetics.' },
              { t: 'Woven cane ceilings with amber lighting', d: 'Cane weaving is a traditional craft from Eastern and South India. Using it as a ceiling element reclaims it as design intelligence. The amber lighting removes clinical coldness and replaces it with warmth, the visual equivalent of being welcomed.' },
              { t: 'Organic curved furniture in deep ochre', d: 'Curved furniture has no hard edges. Hard edges belong in waiting rooms. The organic form invites the patient to settle. The ochre fabric references saffron, India\'s most revered and medically significant botanical.' },
              { t: 'Black stone floor with wood inlay', d: 'The contrast of black stone and warm wood prevents the interior from floating into the overly soft. It says: this is a serious space. The care here is precise. The beauty here is earned.' },
              { t: 'Copper vessels and natural botanicals', d: 'Copper has Ayurvedic significance as a vessel for pure water and healing intention. Used decoratively, it connects the clinical to the ancient without requiring explanation. Patients who know, appreciate it. Patients who do not, feel it.' },
            ].map((item, i) => (
              <div key={i} className="interior-item reveal" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(204,153,51,.3)' }}>
                <div className="interior-item-title" style={{ color: '#FAF8F4' }}>{item.t}</div>
                <div className="interior-item-desc" style={{ color: 'rgba(250,248,244,.65)' }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* TAGLINES */}
      <section className="sec" id="taglines">
        <div className="sec-inner">
          <p className="sec-label reveal">09 — Taglines</p>
          <h2 className="reveal">The Language of Siyara</h2>
          <p className="sec-lead reveal">Five candidates. One primary recommendation. Each one is a positioning decision, not a phrase.</p>
          <div className="tag-grid">
            <div className="tag-card rec reveal">
              <span className="tag-badge r">Recommended</span>
              <div className="tag-tagline">"Where radiance is remembered, not created."</div>
              <div className="tag-note">The brand's philosophical statement. "Remembered" carries the Sanskrit idea that beauty is not manufactured but uncovered. Directly positions against every clinic that promises to create or transform.</div>
            </div>
            {[
              { label: 'Alt 1', tl: '"She was always the light."', note: 'The simplest and most powerful statement of the Siyara character. She did not become radiant. She always was. Works powerfully on social media and brand storytelling.' },
              { label: 'Alt 2', tl: '"For the woman who never stopped being herself."', note: 'Emotional and character-connected. Speaks directly to the Siyara woman. Most powerful in social media and long-form brand communication contexts.' },
              { label: 'Alt 3', tl: '"Rooted in heritage. Refined by science."', note: 'The most direct expression of the Paramparā meets Vigyan story. Works well for institutional communication and positioning to medical peers and press.' },
              { label: 'Alt 4', tl: '"Your skin. Your story. Your Siyara."', note: 'Ownership positioning. Personal without being casual. The three-beat rhythm is easy to remember and works across all media and patient communication formats.' },
            ].map((t, i) => (
              <div key={i} className="tag-card reveal">
                <span className="tag-badge a">{t.label}</span>
                <div className="tag-tagline">{t.tl}</div>
                <div className="tag-note">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* IDENTITY SUMMARY */}
      <section className="sec sec-alt" id="identity">
        <div className="sec-inner">
          <p className="sec-label reveal">10 — Identity Summary</p>
          <h2 className="reveal">Siyara in One View</h2>
          <HubSpokeSVG />
          <div className="identity-row reveal">
            {[
              { l: 'Name', v: 'SIYARA — from Arabic sayyara (wandering star), Sanskrit Siya (Sita), Persian siyara (star, planet). One name. Three civilisations. One woman.' },
              { l: 'Architecture', v: 'Siyara Lounge, A Skin Affair. Sub-brand under Skin Affair. Same building. Different floor. Different world.' },
              { l: 'Category', v: 'Premium dermatology lounge. Not a spa. Not a chain. A clinical-grade premium experience in a designed, heritage-grounded space.' },
              { l: 'Positioning', v: 'The only premium dermatology practice in Hyderabad built on the integration of Ayurvedic tradition and clinical evidence.' },
              { l: 'Primary Tagline', v: '"Where radiance is remembered, not created."', italic: true },
              { l: 'Brand Character', v: 'She who moves with purpose. She who has stopped shrinking. She who comes not to change but to reclaim.' },
              { l: 'Heritage Pillars', v: 'Paramparā (unbroken lineage of Indian skin wisdom) and Vigyan (clinical evidence). Together, the brand\'s intellectual property.' },
              { l: 'Voice', v: 'Warm, grounded, quietly premium. Clinical depth carried lightly. Indian heritage as natural register. Never announces luxury. Embodies it.' },
              { l: 'Interior Palette', v: 'Terracotta #B06450 · Warm Beige #F5E8D1 · Deep Ochre #CC9933 · Black Stone #1A1A1A. INEX Modern Heritage Spa concept.' },
              { l: 'Foundation', v: 'Dr. Sai Srujana Adabala. Double Gold Medalist. Root cause analysis. Mind-Body-Skin-Hair axis. The trust engine behind both Skin Affair and Siyara.' },
            ].map((item, i) => (
              <div key={i} className="id-item">
                <div className="id-label">{item.l}</div>
                <div className="id-value" style={item.italic ? { fontStyle: 'italic', color: 'var(--v)' } : {}}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* IP AND TRADEMARK */}
      <section className="sec sec-dark">
        <div className="sec-inner">
          <p className="sec-label light reveal">Trademark and IP</p>
          <h2 className="reveal">Protecting What Is Built</h2>
          <p className="sec-lead reveal">A brand without legal protection is not an asset. It is a liability waiting to be claimed by someone else. File before launch.</p>
          <div className="ip-grid">
            {[
              { cls: 'Class 44', t: <><strong>Medical Services and Health Care.</strong> Primary class. Dermatology services, aesthetic treatments, skin care consultation. File immediately. This is the non-negotiable first action.</> },
              { cls: 'Class 3', t: <><strong>Cosmetics and Preparations.</strong> For any branded skincare product line, own formulations, or retail. File now. Use later. The name must be protected before the product exists.</> },
              { cls: 'Class 35', t: <><strong>Business Services.</strong> For brand licensing, franchise potential, and any consulting or educational services offered under the Siyara name.</> },
              { cls: 'Class 41', t: <><strong>Education and Training.</strong> For skin education programmes, workshops, or training for other practitioners offered under Siyara.</> },
            ].map((c, i) => (
              <div key={i} className="ip-card reveal">
                <span className="ip-class">{c.cls}</span>
                <div className="ip-text">{c.t}</div>
              </div>
            ))}
          </div>
          <div className="ip-alert reveal">
            <div className="ip-alert-title">48-Hour Immediate Actions</div>
            <div className="ip-alert-text">File trademark for SIYARA in Class 44 and Class 3 before any public launch. Secure siyara.in and siyaralounge.in domains immediately. Reserve @siyaralounge and @siyara.lounge on Instagram, and Siyara Lounge on LinkedIn. These are 48-hour actions. The name is phonetically distinctive and likely registrable, but the window to secure digital assets closes the moment the brand goes public.</div>
          </div>
        </div>
      </section>
 
      {/* FOUNDER NOTE */}
      <section className="sec">
        <div className="sec-inner">
          <div className="founder-card reveal">
            <svg style={{ position: 'absolute', inset: 0, opacity: '.04', pointerEvents: 'none' }} viewBox="0 0 700 200" fill="none">
              <path d="M596.48,134.17c0,0,28-6.22-5.33,30.22s-61.78,29.11-89.11,16.22s-17.56-32-5.56-46.44s33.33-24.22,50.89-17.56s16.44,27.11,4,38.89s-30.22,12.44-39.56,5.33s-8.44-20,2.67-25.78s22.22,1.33,17.78,13.33" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
              <path d="M413.85,172.33c0,0-12.44-2.22-14.22-16.44s8.89-28,22.67-29.33s25.33,8,22.67,22.22s-18.67,22.22-30.22,16.89s-12-16-4.44-23.56s18.22-6.22,20.44,2.67" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
            </svg>
            <div className="founder-label">A Note from Sandeep N</div>
            <div className="founder-text">
              When we started working on Skin Affair, we were building a sub-brand. When we visited the clinic, we found something more significant. We found a doctor who had been practising at a premium level all along, but whose brand had not yet caught up with her clinical depth. Siyara is not a product we designed for Dr. Srujana. It is the identity that was already present in her practice, waiting for a name and a form that could communicate it to the world. The wandering star does not need to be pointed out. It needs a sky clear enough to be seen in. That is what we have built here.
            </div>
            <svg style={{ marginBottom: '.5rem' }} viewBox="0 0 220 60" fill="none" height="40">
              <path d="M10,45 C30,20 60,10 90,25 C110,35 120,15 140,20 C160,25 170,40 190,35" stroke="#0F0A1A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M20,50 C50,48 80,42 110,45 C130,47 150,43 170,45" stroke="#0F0A1A" strokeWidth="1" strokeLinecap="round" fill="none" opacity=".4"/>
            </svg>
            <div className="founder-name">Sandeep N</div>
            <div className="founder-title">Founder, Magsmen Strategy Consultants</div>
          </div>
        </div>
      </section>
 
      {/* ABOUT MAGSMEN */}
      <section className="sec sec-alt">
        <div className="sec-inner">
          <p className="sec-label reveal">About Magsmen</p>
          <h2 className="reveal">The Firm Behind Siyara</h2>
          <div className="about-split">
            <div>
              <div className="about-tagline reveal">We build brands that<br />compound over time.</div>
              <div className="about-desc reveal">Magsmen Strategy Consultants is a Business-Integrated Brand Architecture firm. We work at the intersection of brand strategy, legal foresight, and business economics. Every engagement is designed to produce a brand that commands pricing power, earns customer loyalty, and survives volatility. We do not build campaigns. We build operating systems for brands.</div>
              <div className="pillars reveal">
                {[
                  { icon: '◈', t: 'Brand Architecture', d: 'Strategic identity systems built for longevity' },
                  { icon: '◉', t: 'Legal-Blended Strategy', d: 'IP, trademark, and governance built in from day one' },
                  { icon: '◎', t: 'Regional Intelligence', d: 'Deep understanding of Telangana and AP markets' },
                  { icon: '▸', t: 'Founder Authority', d: 'Personal brand systems through Stature by Magsmen' },
                ].map((p, i) => (
                  <div key={i} className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <div className="pillar-title">{p.t}</div>
                    <div className="pillar-desc">{p.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sandeep-card reveal">
                <div className="sandeep-head">
                  <div className="sandeep-avatar">SN</div>
                  <div>
                    <div className="sandeep-name">Sandeep N</div>
                    <div className="sandeep-role">Founder, Magsmen Strategy Consultants</div>
                  </div>
                </div>
                <div className="cred-list">
                  {['TEDx Speaker','MMA Global Awards jury — Google, Samsung, Apple, HUL, Loreal','Consultant of the Year 2023, The CEO Magazine','India Top 100 Admiring Marketing Leaders, World Marketing Congress','Chair of the Jury, SMARTIES APAC Awards','Enrolled advocate with legal-blended brand practice','International MBA, Deakin University Melbourne','50+ brands architected across startups to Fortune 25'].map((c, i) => (
                    <div key={i} className="cred-item">{c}</div>
                  ))}
                </div>
              </div>
              <div className="strip reveal" style={{ marginTop: '.75rem' }}>
                {['Disney+ Hotstar','ASCI','VIT-AP University','NRT Society','Indian Red Cross'].map((s, i) => <span key={i} className="strip-item">{s}</span>)}
              </div>
              <div className="strip reveal">
                {['Clutch Top Agency India 2023','IMA South Awards 2021','Best Rebranding Strategy'].map((s, i) => <span key={i} className="strip-item">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* CTA */}
      <section className="cta-sec">
        <div className="sec-inner">
          <p className="sec-label light reveal" style={{ marginBottom: '1rem' }}>Next Step</p>
          <h2 className="reveal">The Siyara Brand Is Ready to Build.</h2>
          <p className="reveal">The name is set. The story is written. The foundation is laid. What comes next is design, identity execution, trademark filing, and the first digital assets. Every day without structure is a day the brand exists without protection.</p>
          <div className="cta-btns reveal">
            <a className="btn-p solid" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Siyara%20Brand%20Identity%20Execution&body=Hello%2C%20I%20have%20reviewed%20the%20Siyara%20Brand%20Identity%20document%20and%20would%20like%20to%20discuss%20the%20next%20steps%20for%20identity%20design%2C%20trademark%20filing%2C%20and%20digital%20asset%20creation.">Begin Identity Execution</a>
            <a className="btn-p ghost" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Siyara%20Query&body=Hello%2C%20I%20have%20a%20question%20about%20the%20Siyara%20brand%20identity.">Ask a Question</a>
          </div>
        </div>
      </section>
 
      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">
                <img src={whitelogo} alt="Magsmen" />
              </div>
              <div className="footer-tagline" style={{ marginTop: '.4rem' }}>Challenge the Norm. Craft the Future.</div>
            </div>
            <div className="footer-links">
              <a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a>
              <a href="mailto:connect@magsmen.com">connect@magsmen.com</a>
              <a href="https://www.magsmen.com" target="_blank" rel="noreferrer">www.magsmen.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            Magsmen Strategy Consultants · A Division of Grofessors Innovations Pvt Ltd · Confidential · Not for circulation<br />
            This document is the intellectual property of Magsmen Strategy Consultants. Prepared exclusively for Skin Affair, Hyderabad.
          </div>
        </div>
      </footer>
 
      <Chatbot />
    </>
  );
}