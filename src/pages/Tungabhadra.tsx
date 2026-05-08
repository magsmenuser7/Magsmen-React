import { useState, useEffect, useRef } from "react";
import LOGO from "/assets/blacklogohorizontal.png"
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


const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@200;300;400;500;600&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
:root{
  --white:#ffffff;
  --paper:#fafaf8;
  --paper2:#f5f4f0;
  --paper3:#eeece6;
  --ink:#0c0b09;
  --ink2:#1e1c18;
  --ink3:#3a3730;
  --grey:#7a7670;
  --pale:#b8b4ad;
  --ghost:#d4d0c8;
  --line:#e8e5de;
  --gold:#a8864a;
  --gold2:#c9a96e;
  --gold3:#e8d4a8;
  --serif:'Playfair Display',Georgia,serif;
  --sans:'DM Sans',system-ui,sans-serif;
}
html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--white);color:var(--ink);overflow-x:hidden;-webkit-font-smoothing:antialiased;cursor:none}

#dot{position:fixed;width:5px;height:5px;background:var(--gold);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);will-change:left,top}
#ring{position:fixed;width:24px;height:24px;border:1px solid rgba(168,134,74,.3);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:all .2s ease;will-change:left,top}

nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 64px;height:64px;background:rgba(255,255,255,.92);border-bottom:1px solid rgba(232,229,222,.6);backdrop-filter:blur(16px);transition:height .3s,background .3s;}
nav.scrolled{height:56px;background:rgba(255,255,255,.97)}
.nl img{height:32px;object-fit:contain;display:block;transition:opacity .2s}
.nl img:hover{opacity:.7}
.nm{display:flex;gap:0;list-style:none;height:100%}
.nm li{height:100%;display:flex;align-items:center}
.nm a{font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--pale);text-decoration:none;padding:0 16px;height:100%;display:flex;align-items:center;position:relative;transition:color .25s;}
.nm a::after{content:'';position:absolute;bottom:0;left:16px;right:16px;height:1px;background:var(--gold);transform:scaleX(0);transition:transform .3s cubic-bezier(.16,1,.3,1);transform-origin:left;}
.nm a:hover{color:var(--ink)}
.nm a:hover::after{transform:scaleX(1)}
.nc{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;background:var(--ink);color:var(--white);border:none;padding:11px 28px;cursor:none;transition:background .25s,transform .25s;position:relative;overflow:hidden;}
.nc::before{content:'';position:absolute;inset:0;background:var(--gold);transform:translateX(-101%);transition:transform .35s cubic-bezier(.16,1,.3,1);}
.nc:hover::before{transform:translateX(0)}
.nc span{position:relative;z-index:1}

.hero{min-height:100vh;display:flex;align-items:flex-end;padding:0 64px 80px;background:var(--white);position:relative;overflow:hidden;}
.hero-line-top{position:absolute;top:64px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent 64px,var(--line) 64px,var(--line) calc(100% - 64px),transparent calc(100% - 64px));}
.hero-num{position:absolute;right:64px;top:50%;transform:translateY(-60%);font-family:var(--serif);font-size:clamp(180px,22vw,320px);font-weight:400;color:rgba(12,11,9,.025);line-height:1;letter-spacing:-.04em;pointer-events:none;user-select:none;animation:fadeNum 1.4s cubic-bezier(.16,1,.3,1) .3s both;}
@keyframes fadeNum{from{opacity:0;transform:translateY(-55%) scale(.97)}to{opacity:1;transform:translateY(-60%) scale(1)}}
.hero-content{max-width:800px;position:relative;z-index:2}
.hero-kicker{display:flex;align-items:center;gap:14px;margin-bottom:40px;animation:fadeUp .8s cubic-bezier(.16,1,.3,1) both;}
.hero-kicker-rule{width:36px;height:1px;background:var(--gold)}
.hero-kicker-text{font-size:9.5px;font-weight:600;letter-spacing:.26em;color:var(--gold);text-transform:uppercase}
.hero-h{font-family:var(--serif);font-size:clamp(52px,7.5vw,108px);font-weight:400;line-height:.96;letter-spacing:-.025em;color:var(--ink);animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .1s both;}
.hero-h em{font-style:italic;color:var(--gold2)}
.hero-sub{font-size:14px;font-weight:300;color:var(--grey);line-height:1.85;max-width:480px;margin-top:28px;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .2s both;}
.hero-actions{display:flex;gap:14px;align-items:center;margin-top:44px;flex-wrap:wrap;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .3s both;}
.btn-solid{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;background:var(--ink);color:var(--white);border:none;padding:15px 36px;cursor:none;position:relative;overflow:hidden;transition:color .3s;}
.btn-solid::before{content:'';position:absolute;inset:0;background:var(--gold);transform:translateY(101%);transition:transform .35s cubic-bezier(.16,1,.3,1);}
.btn-solid:hover::before{transform:translateY(0)}
.btn-solid span,.btn-line span{position:relative;z-index:1}
.btn-line{font-family:var(--sans);font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;background:transparent;color:var(--ink);border:1px solid var(--line);padding:15px 36px;cursor:none;transition:border-color .25s,color .25s;}
.btn-line:hover{border-color:var(--ink)}
.hero-figures{position:absolute;right:64px;bottom:80px;display:flex;gap:44px;z-index:2;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .4s both;}
.hf{text-align:right}
.hf-n{font-family:var(--serif);font-size:38px;font-weight:400;color:var(--ink);line-height:1;letter-spacing:-.03em;}
.hf-n i{font-style:italic;color:var(--gold2)}
.hf-l{font-size:9px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:var(--pale);margin-top:6px}

.s{padding:120px 64px;position:relative}
.s-alt{background:var(--paper)}
.s-paper{background:var(--paper2)}
.s-no{position:absolute;top:120px;right:64px;font-family:var(--serif);font-size:100px;font-weight:400;font-style:italic;color:rgba(12,11,9,.04);line-height:1;pointer-events:none;user-select:none;}
.ey{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
.ey-rule{width:28px;height:1px;background:var(--gold);flex-shrink:0}
.ey-text{font-size:9px;font-weight:600;letter-spacing:.26em;color:var(--gold);text-transform:uppercase}
.sh{font-family:var(--serif);font-size:clamp(34px,3.8vw,58px);font-weight:400;line-height:1.08;letter-spacing:-.02em;color:var(--ink);margin-bottom:20px;}
.sh em{font-style:italic;color:var(--gold2)}
.gold-tick{width:36px;height:1px;background:var(--gold);margin-bottom:24px}
.si{font-size:14px;font-weight:300;color:var(--grey);line-height:1.85;max-width:640px;margin-bottom:72px;letter-spacing:.01em;}

@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.fade-up{opacity:0;transform:translateY(24px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
.fade-up.in{opacity:1;transform:translateY(0)}
.fade-up.d1{transition-delay:.1s}.fade-up.d2{transition-delay:.2s}
.fade-up.d3{transition-delay:.3s}.fade-up.d4{transition-delay:.4s}
.fade-left{opacity:0;transform:translateX(-20px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
.fade-left.in{opacity:1;transform:translateX(0)}

.diag{display:grid;grid-template-columns:1fr 1fr;margin-top:0;border:1px solid var(--line)}
.dc{padding:52px}
.dc+.dc{border-left:1px solid var(--line);background:var(--paper)}
.dc-lbl{font-size:9px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--pale);margin-bottom:28px;padding-bottom:16px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:10px;}
.dc-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0}
.dc-dot.g{background:#7eb896}
.dc-dot.v{background:var(--gold)}
.dl{list-style:none}
.dl li{font-size:13px;font-weight:300;color:var(--ink3);line-height:1.65;padding:11px 0;border-bottom:1px solid var(--line);display:grid;grid-template-columns:14px 1fr;gap:14px;align-items:start;}
.dl li:last-child{border-bottom:none}
.dm{font-size:9px;margin-top:4px;font-weight:600}
.dm.g{color:#7eb896}.dm.v{color:var(--gold)}

.pull{margin:64px 0;padding:40px 48px;border-left:1px solid var(--gold);position:relative;}
.pull::before{content:'C';font-family:var(--serif);font-size:80px;color:rgba(168,134,74,.1);position:absolute;top:-10px;left:28px;line-height:1;}
.pull p{font-family:var(--serif);font-size:20px;font-weight:400;font-style:italic;color:var(--ink2);line-height:1.6}
.pull cite{display:block;margin-top:16px;font-family:var(--sans);font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);font-style:normal;}

.stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);margin:0 0 72px}
.stat{padding:36px 28px;border-right:1px solid var(--line)}
.stat:last-child{border-right:none}
.stat-n{font-family:var(--serif);font-size:42px;font-weight:400;color:var(--ink);line-height:1;margin-bottom:10px;letter-spacing:-.02em;}
.stat-n i{font-style:italic;color:var(--gold2)}
.stat-l{font-size:11.5px;font-weight:300;color:var(--grey);line-height:1.55}

.ptbl{width:100%;border-collapse:collapse;margin-top:0}
.ptbl thead tr{border-bottom:1px solid var(--ink)}
.ptbl th{font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--pale);padding:14px 20px;text-align:left;font-family:var(--sans)}
.ptbl td{padding:22px 20px;border-bottom:1px solid var(--line);vertical-align:top;line-height:1.65}
.ptbl tr:hover td{background:rgba(168,134,74,.04)}
.ptbl td:nth-child(1){font-family:var(--sans);font-size:9.5px;font-weight:500;color:var(--ghost);letter-spacing:.08em;width:44px}
.ptbl td:nth-child(2){width:150px}
.layer{font-family:var(--sans);font-size:9px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;border:1px solid var(--ink3);color:var(--ink3);padding:4px 11px;display:inline-block;}
.ptbl td:nth-child(3){font-size:13px;font-weight:300;color:var(--ink3)}

.flow{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--line);margin-top:0}
.fi{background:var(--white);padding:34px 22px;position:relative;transition:background .25s}
.fi:hover{background:var(--paper)}
.fi.act{background:var(--ink)}
.fi::after{content:'→';position:absolute;right:-12px;top:50%;transform:translateY(-50%);font-size:14px;font-family:var(--sans);color:var(--line);z-index:2;background:inherit;padding:0 3px;}
.fi.act::after{background:var(--ink);color:rgba(255,255,255,.2)}
.fi:last-child::after{display:none}
.fi-n{font-size:8.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;margin-bottom:14px}
.fi:not(.act) .fi-n{color:var(--gold)}
.fi.act .fi-n{color:rgba(255,255,255,.4)}
.fi-t{font-family:var(--serif);font-size:17px;font-weight:400;margin-bottom:10px;line-height:1.2}
.fi:not(.act) .fi-t{color:var(--ink)}
.fi.act .fi-t{color:var(--white)}
.fi-d{font-size:11.5px;font-weight:300;line-height:1.6}
.fi:not(.act) .fi-d{color:var(--grey)}
.fi.act .fi-d{color:rgba(255,255,255,.55)}

.pils{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);margin-top:0}
.pil{background:var(--white);overflow:hidden;transition:transform .25s,box-shadow .25s}
.pil:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(12,11,9,.06)}
.pil-h{padding:24px 28px 20px;border-bottom:1px solid var(--line)}
.pil-nn{font-size:8.5px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:var(--pale);margin-bottom:8px}
.pil-tt{font-family:var(--serif);font-size:20px;font-weight:400;color:var(--ink)}
.pil-gold{width:20px;height:1px;background:var(--gold);margin-top:14px}
.pil-b{padding:28px}
.pil-list{list-style:none}
.pil-list li{font-size:12.5px;font-weight:300;color:var(--ink3);line-height:1.65;padding:8px 0;border-bottom:1px solid var(--line);display:flex;gap:10px;align-items:flex-start;}
.pil-list li:last-child{border-bottom:none}
.pil-list li::before{content:'—';color:var(--gold);font-size:10px;margin-top:3px;flex-shrink:0}

.two{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);margin-top:0}
.tc{background:var(--white);padding:52px}
.tc.w{background:var(--paper)}
.tc-tag{font-size:9px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
.tc h3{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--ink);margin-bottom:18px;line-height:1.2}
.tc p{font-size:13px;font-weight:300;color:var(--grey);line-height:1.85;margin-bottom:12px}

.dt{width:100%;border-collapse:collapse;margin-top:0}
.dt thead tr{border-bottom:1px solid var(--ink)}
.dt th{font-size:9px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--pale);padding:14px 20px;text-align:left;font-family:var(--sans)}
.dt td{padding:18px 20px;border-bottom:1px solid var(--line);font-size:13px;font-weight:300;color:var(--ink3);vertical-align:top;line-height:1.6}
.dt tr:hover td{background:rgba(168,134,74,.03)}
.dt td:first-child{font-weight:500;color:var(--ink2);font-size:12px;white-space:nowrap}

.road{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);margin-top:0}
.rph{background:var(--white);padding:48px 40px;position:relative;overflow:hidden;transition:background .25s}
.rph:hover{background:var(--paper)}
.rph::before{content:attr(data-n);position:absolute;right:-4px;bottom:-16px;font-family:var(--serif);font-size:110px;font-weight:400;font-style:italic;color:rgba(12,11,9,.04);line-height:1;pointer-events:none;}
.rph-lbl{font-size:9px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:8px}
.rph h3{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--ink);margin-bottom:6px;line-height:1.2}
.rph-p{font-size:11px;font-weight:400;letter-spacing:.04em;color:var(--pale);margin-bottom:24px}
.rph-rule{width:24px;height:1px;background:var(--gold);margin-bottom:24px}
.rlist{list-style:none}
.rlist li{font-size:12.5px;font-weight:300;color:var(--ink3);line-height:1.65;padding:9px 0;border-bottom:1px solid var(--line);display:flex;gap:12px;align-items:flex-start;}
.rlist li:last-child{border-bottom:none}
.rlist li::before{content:'→';color:var(--gold);font-size:9.5px;margin-top:4px;flex-shrink:0;font-family:var(--sans);font-weight:600}

.met{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);margin-top:0}
.mc{background:var(--white);padding:36px 28px;transition:background .25s}
.mc:hover{background:var(--paper)}
.mc-n{font-family:var(--serif);font-size:46px;font-weight:400;color:var(--ink);line-height:1;margin-bottom:10px;letter-spacing:-.02em;}
.mc-n i{font-style:italic;color:var(--gold2);font-size:26px}
.mc-l{font-size:12px;font-weight:400;color:var(--ink3);line-height:1.5;margin-bottom:8px}
.mc-s{font-size:9px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--pale)}

.ctbl{width:100%;border-collapse:collapse;margin-top:0}
.ctbl td{padding:20px 24px;border-bottom:1px solid var(--line);vertical-align:top;line-height:1.65}
.ctbl tr:hover td{background:rgba(168,134,74,.03)}
.ctbl td:first-child{font-size:13px;font-weight:500;color:var(--ink2);width:44%;border-right:1px solid var(--line)}
.ctbl td:last-child{font-size:13px;font-weight:300;color:var(--grey)}

.terms{display:grid;grid-template-columns:1fr 1fr;gap:72px;margin-top:0}
.t-lbl{font-size:9px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin:36px 0 14px;padding-bottom:10px;border-bottom:1px solid var(--line)}
.t-lbl:first-child{margin-top:0}
.tt{width:100%;border-collapse:collapse}
.tt thead tr{border-bottom:1px solid var(--ink)}
.tt th{font-size:8.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--pale);padding:12px 14px;text-align:left;font-family:var(--sans)}
.tt td{padding:13px 14px;border-bottom:1px solid var(--line);font-size:12.5px;font-weight:300;color:var(--ink3);vertical-align:top;line-height:1.5}
.tt tr:hover td{background:rgba(168,134,74,.03)}
.tt td:first-child{font-weight:500;color:var(--ink2);white-space:nowrap;font-size:11.5px}

.steps{list-style:none;border-top:1px solid var(--line);margin-top:40px}
.step{display:grid;grid-template-columns:48px 1fr auto;gap:24px;padding:22px 0;border-bottom:1px solid var(--line);align-items:start;transition:background .2s;}
.step:hover{background:rgba(168,134,74,.03);padding-left:8px;padding-right:8px;margin:0 -8px}
.step-n{font-family:var(--serif);font-size:28px;font-weight:400;font-style:italic;color:var(--gold2);line-height:1;margin-top:2px}
.step-body{font-size:13px;font-weight:300;color:var(--ink3);line-height:1.65}
.step-who{font-size:9.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--pale);white-space:nowrap;margin-top:4px}

.cta{background:var(--ink);padding:140px 64px;text-align:center;position:relative;overflow:hidden;}
.cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 50% 100%,rgba(168,134,74,.12) 0%,transparent 70%);pointer-events:none;}
.cta-ey{font-size:9px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--gold2);margin-bottom:24px;font-family:var(--sans)}
.cta-h{font-family:var(--serif);font-size:clamp(38px,5vw,72px);font-weight:400;font-style:italic;color:var(--white);line-height:1.1;letter-spacing:-.02em;margin-bottom:20px}
.cta-sub{font-size:14px;font-weight:300;color:rgba(255,255,255,.45);max-width:440px;margin:0 auto 52px;line-height:1.85;letter-spacing:.01em;}
.btn-w{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;background:var(--white);color:var(--ink);border:none;padding:17px 48px;cursor:none;position:relative;overflow:hidden;transition:color .3s;}
.btn-w::before{content:'';position:absolute;inset:0;background:var(--gold);transform:translateY(101%);transition:transform .35s cubic-bezier(.16,1,.3,1);}
.btn-w:hover::before{transform:translateY(0)}
.btn-w:hover{color:var(--white)}
.btn-w span{position:relative;z-index:1}
.cta-note{font-size:10px;color:rgba(255,255,255,.25);margin-top:18px;letter-spacing:.02em;}

footer{background:var(--ink2);border-top:1px solid rgba(255,255,255,.05);padding:32px 64px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;}
.fl img{height:26px;filter:brightness(0) invert(1);opacity:.5;display:block}
.fm{font-size:10.5px;font-weight:300;color:rgba(255,255,255,.3);text-align:center;line-height:1.8;letter-spacing:.02em;}
.fr{font-size:10px;font-weight:300;color:rgba(255,255,255,.25);text-align:right;line-height:1.8}

.hr{height:1px;background:var(--line)}

.cfab{position:fixed;bottom:32px;right:32px;z-index:300;width:50px;height:50px;background:var(--ink);border:none;border-radius:50%;cursor:none;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(12,11,9,.2);transition:transform .2s,box-shadow .2s;}
.cfab:hover{transform:scale(1.08);box-shadow:0 8px 32px rgba(12,11,9,.3)}
.cwin{position:fixed;bottom:96px;right:32px;z-index:299;width:360px;max-height:520px;background:var(--white);border:1px solid var(--line);box-shadow:0 20px 60px rgba(12,11,9,.1);display:flex;flex-direction:column;opacity:0;transform:translateY(10px) scale(.98);pointer-events:none;transition:all .3s cubic-bezier(.34,1.56,.64,1);}
.cwin.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all}
.chd{background:var(--ink);padding:16px 18px;display:flex;align-items:center;gap:11px}
.cav{width:32px;height:32px;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:12px;font-weight:700;color:var(--ink);flex-shrink:0}
.chi h4{font-family:var(--sans);font-size:12px;font-weight:600;color:var(--white);margin-bottom:2px}
.chi p{font-size:9.5px;color:rgba(255,255,255,.45);font-family:var(--sans)}
.cpulse{width:6px;height:6px;background:#6ee7a4;border-radius:50%;margin-left:auto;animation:pu 2s infinite}
@keyframes pu{0%,100%{opacity:1}50%{opacity:.3}}
.cmsgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:300px;scrollbar-width:thin;scrollbar-color:var(--line) transparent}
.bbl{max-width:88%;padding:11px 15px;font-size:12.5px;font-weight:300;line-height:1.55;font-family:var(--sans)}
.bbl.bot{background:var(--paper);color:var(--ink3);align-self:flex-start;border-left:2px solid var(--gold)}
.bbl.usr{background:var(--ink);color:var(--white);align-self:flex-end}
.chips{padding:8px 14px 12px;display:flex;flex-wrap:wrap;gap:7px}
.chp{font-family:var(--sans);font-size:10px;font-weight:500;color:var(--ink3);background:var(--paper);border:1px solid var(--line);padding:6px 12px;cursor:none;transition:all .2s;}
.chp:hover{background:rgba(168,134,74,.1);border-color:var(--gold);color:var(--ink)}
.cinr{padding:10px 14px;border-top:1px solid var(--line);display:flex;gap:8px}
.cinp{flex:1;background:var(--paper);border:1px solid var(--line);font-family:var(--sans);font-size:12.5px;color:var(--ink);padding:9px 13px;outline:none;transition:border-color .2s;}
.cinp::placeholder{color:var(--ghost)}
.cinp:focus{border-color:var(--gold)}
.csend{background:var(--ink);border:none;color:white;font-size:15px;font-weight:600;padding:9px 14px;cursor:none;transition:background .2s;}
.csend:hover{background:var(--gold)}
.typi{display:flex;gap:4px;padding:5px 0;align-items:center}
.typi span{width:5px;height:5px;background:var(--gold);border-radius:50%;animation:ty 1.1s infinite}
.typi span:nth-child(2){animation-delay:.18s}
.typi span:nth-child(3){animation-delay:.36s}
@keyframes ty{0%,100%{opacity:.25;transform:scale(1)}50%{opacity:1;transform:scale(1.25)}}

.ov{position:fixed;inset:0;background:rgba(12,11,9,.5);z-index:500;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .25s;backdrop-filter:blur(6px)}
.ov.open{opacity:1;pointer-events:all}
.mod{background:var(--white);width:540px;max-width:92vw;max-height:86vh;overflow-y:auto;border-top:2px solid var(--gold);position:relative;box-shadow:0 28px 72px rgba(12,11,9,.15)}
.mhd{padding:36px 36px 24px;border-bottom:1px solid var(--line)}
.mhd h3{font-family:var(--serif);font-size:26px;font-weight:400;color:var(--ink);margin-bottom:6px}
.mhd p{font-size:12.5px;font-weight:300;color:var(--grey);line-height:1.65}
.mcls{position:absolute;top:12px;right:14px;background:none;border:none;font-size:17px;color:var(--ghost);cursor:none;padding:6px 9px;transition:color .2s;line-height:1;}
.mcls:hover{color:var(--ink)}
.mbd{padding:28px 36px}
.mfld{margin-bottom:18px}
.mfld label{display:block;font-size:9px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--grey);margin-bottom:7px;font-family:var(--sans)}
.mfld input,.mfld textarea{width:100%;background:var(--paper);border:1px solid var(--line);font-family:var(--sans);font-size:13px;color:var(--ink);padding:11px 15px;outline:none;transition:border-color .2s;resize:vertical;}
.mfld input:focus,.mfld textarea:focus{border-color:var(--gold)}
.mfld textarea{min-height:88px}
.mft{padding:18px 36px 28px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center}
.mnote{font-size:10.5px;font-weight:300;color:var(--pale)}

.toast{position:fixed;top:24px;left:50%;z-index:9999;transform:translateX(-50%) translateY(-80px);background:var(--ink);color:var(--white);font-family:var(--sans);font-size:12px;font-weight:500;letter-spacing:.06em;padding:13px 24px;border-bottom:2px solid var(--gold);transition:transform .4s cubic-bezier(.34,1.56,.64,1);white-space:nowrap}
.toast.on{transform:translateX(-50%) translateY(0)}

@media(max-width:960px){
  nav,.s,.cta,footer{padding-left:24px;padding-right:24px}
  .hero{padding-left:24px;padding-right:24px;padding-bottom:60px}
  .diag,.two,.road,.terms,.flow,.pils,.met{grid-template-columns:1fr}
  .stats{grid-template-columns:1fr 1fr}
  .hero-figures{display:none}
  .nm{display:none}
  footer{flex-direction:column;text-align:center}
  .fr{text-align:center}
  .cwin{width:calc(100vw - 32px);right:16px}
  .terms{grid-template-columns:1fr}
  .s-no{display:none}
}
`;

const LOGO_BASE64 = "";

const KB = {
  "what does magsmen deliver": "Magsmen delivers 13 strategic documents across 3 phases. Phase 1 (months 1-3): Brand Audit Report, Brand Architecture Document, Positioning and Narrative Framework, Trademark and IP Advisory Note, and Owner Narrative Strategy. Phase 2 (months 3-8): Fan Community Architecture, 52-Week Content Framework, IPL Pipeline Narrative System, and Off-Season Engagement Program. Phase 3 (months 6-12): Sponsorship Strategy Redesign, Revised Sponsor Partnership Deck, Brand Health Index Dashboard, and Season 6 Strategic Brief.",
  "how is the fee structured": "Total fee is INR 6,00,000 + GST per season. Magsmen takes jersey placement Position C and brand visibility in lieu of INR 2,00,000. The net cash component is INR 4,00,000 + GST. Payment: 50% at signing, 25% Phase 2, 25% Phase 3. Season 6 retention earns a 15% fee reduction.",
  "what is the jersey placement": "Magsmen receives Position C — the upper front chest panel on the left side. Prominent during match play, press conferences, and editorial photography.",
  "what happens in phase 1": "Phase 1 (months 1-3) builds the entire strategic foundation: brand audit, brand architecture document, narrative framework, trademark and IP advisory note, and the owner narrative strategy as a public-facing brand asset.",
  "what makes magsmen different": "Three things: legal-blended capability (enrolled advocate integrating IP advisory into every engagement), founder-led structure (the strategist who pitches does the work), and direct presence in the AP ecosystem with relationships in the Telugu Film Industry and AP business community.",
  "how long is the engagement": "12 months across three phases: months 1-3 (Phase 1), months 3-8 (Phase 2), months 6-12 (Phase 3). Season 6 Brief delivered at close positions the franchise to retain Magsmen with a 15% fee reduction. Proposal valid until 30 June 2026.",
  "default": "This proposal covers the complete strategic partnership: brand architecture, fandom building, sponsorship transformation, and IP protection. Ask about deliverables, the three-phase roadmap, investment structure, the brand power model, sponsorship categories, or why Magsmen is the right partner."
};

function findAns(q) {
  q = q.toLowerCase().trim();
  for (const k in KB) { if (q.includes(k) || k.includes(q.split(' ').slice(0,4).join(' '))) return KB[k]; }
  for (const k in KB) { for (const w of q.split(' ')) { if (w.length > 4 && k.includes(w)) return KB[k]; } }
  return KB.default;
}

function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) el.classList.add('in'); }); }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, className = '', delay = '' }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`fade-up${delay ? ' ' + delay : ''}${className ? ' ' + className : ''}`}>{children}</div>;
}

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [toastOn, setToastOn] = useState(false);
  const [chatMsgs, setChatMsgs] = useState([{ type: 'bot', text: 'Hello. I am here to clarify anything in this strategic partnership proposal. Ask me about the strategy, deliverables, investment, or placements.' }]);
  const [showChips, setShowChips] = useState(true);
  const [typing, setTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [form, setForm] = useState({ name: '', email: '', role: '', msg: '' });
  const msgsRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rxRef = useRef(0); const ryRef = useRef(0);
  const mxRef = useRef(0); const myRef = useRef(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const onMove = e => { mxRef.current = e.clientX; myRef.current = e.clientY; if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px'; } };
    document.addEventListener('mousemove', onMove);
    let raf;
    const loop = () => { rxRef.current += (mxRef.current - rxRef.current) * 0.12; ryRef.current += (myRef.current - ryRef.current) * 0.12; if (ringRef.current) { ringRef.current.style.left = rxRef.current + 'px'; ringRef.current.style.top = ryRef.current + 'px'; } raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight; }, [chatMsgs, typing]);

  const addHover = e => { if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(2.2)'; if (ringRef.current) { ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'; ringRef.current.style.borderColor = 'rgba(168,134,74,.6)'; } };
  const removeHover = () => { if (dotRef.current) dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; if (ringRef.current) { ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; ringRef.current.style.borderColor = 'rgba(168,134,74,.3)'; } };

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const sendMail = () => {
    const n = form.name || 'Franchise Representative';
    const e = form.email || 'not provided';
    const r = form.role || 'Franchise Team';
    const x = form.msg;
    const sub = encodeURIComponent('OFFICIAL CONFIRMATION — Tungabhadra Warriors × Magsmen Strategic Brand Partnership · APL Season 5');
    const body = encodeURIComponent(`Dear Magsmen Team,\n\nI am writing on behalf of Tungabhadra Warriors, the APL Season 4 champions, to formally confirm our intent to enter into the Strategic Brand Partnership as proposed by Magsmen Strategy Consultants for APL Season 5 and beyond.\n\nFROM: ${n}\nDESIGNATION: ${r}\nCONTACT EMAIL: ${e}\nORGANISATION: Tungabhadra Warriors — APL Season 4 Champions\n\nENGAGEMENT CONFIRMED\n\nWe have reviewed the Strategic Brand Partnership Proposal dated May 2026 and formally confirm our intent to engage Magsmen Strategy Consultants as the Official Strategy Partner for Tungabhadra Warriors beginning APL Season 5.\n\nCOMMERCIAL TERMS ACCEPTED\nStrategic Services Fee: INR 6,00,000 + GST per season\nPlacement Value Offset: INR 2,00,000\nNet Cash Component: INR 4,00,000 + GST per season\nPayment Structure: 50% at signing · 25% Phase 2 · 25% Phase 3\nSeason 6 Incentive: 15% reduction acknowledged\n\nPLACEMENTS CONFIRMED\nOfficial Strategy Partner across all franchise communications\nJersey: upper chest panel left side — Position C\nTeam bus side panel branding across Visakhapatnam, Mangalagiri, and Kadapa\nDigital content credit and broadcast mention on Sony Sports and FanCode\nEvent branding at Jersey Launch, Opening Ceremony, and Player Auction\n\nSCOPE — ALL 13 DELIVERABLES ACKNOWLEDGED\nPhase 1: Brand Audit · Brand Architecture · Positioning Framework · IP Advisory · Owner Narrative\nPhase 2: Fan Community Architecture · 52-Week Content Framework · IPL Pipeline Narrative · Off-Season Program\nPhase 3: Sponsorship Strategy Redesign · Revised Sponsor Deck · Brand Health Dashboard · Season 6 Brief\n\nWe request the initial 60-minute strategic alignment call within 5 working days.${x ? '\n\nADDITIONAL NOTE:\n' + x : ''}\n\nYours sincerely,\n${n}\n${r}\nTungabhadra Warriors — APL Season 4 Champions\nReply to: ${e}\n\n---\nSent via Magsmen Strategic Partnership Proposal · May 2026`);
    window.location.href = `mailto:connect@magsmen.com,sandeep@magsmen.com?subject=${sub}&body=${body}`;
    setModalOpen(false);
    setToastOn(true);
    setTimeout(() => setToastOn(false), 4500);
  };

  const sendChat = (q) => {
    const question = q || chatInput.trim();
    if (!question) return;
    setChatInput('');
    setShowChips(false);
    setChatMsgs(m => [...m, { type: 'usr', text: question }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setChatMsgs(m => [...m, { type: 'bot', text: findAns(question) }]);
    }, 1200);
  };

  type UserData = {
  email: string;
};

  const interactiveProps = { onMouseEnter: addHover, onMouseLeave: removeHover };

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
    className="relative min-h-screen bg-cover 
               bg-[position:90%_center] 
               md:bg-center 
               flex items-center justify-center md:justify-end 
               p-4 md:p-6 font-sans"
    style={{
      backgroundImage: `url('/assets/Final Brand presentation for printing.png')`
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
    <>
      <div id="dot" ref={dotRef} />
      <div id="ring" ref={ringRef} />

      {/* NAV */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <div className="nl"><img src={LOGO} alt="Magsmen" /></div>
        <ul className="nm">
          {[['diag','Diagnosis'],['strategy','Strategy'],['road','Roadmap'],['why','Why Magsmen'],['terms','Terms']].map(([id,label]) => (
            <li key={id}><a href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id)}} {...interactiveProps}>{label}</a></li>
          ))}
        </ul>
        <button className="nc" onClick={() => setModalOpen(true)} {...interactiveProps}><span>Confirm Partnership</span></button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-line-top" />
        <div className="hero-num">01</div>
        <div className="hero-content">
          <div className="hero-kicker">
            <div className="hero-kicker-rule" />
            <span className="hero-kicker-text">Magsmen × Tungabhadra Warriors · APL Season 5</span>
          </div>
          <h1 className="hero-h">From Franchise<br />to <em>Franchiseable</em><br />Brand.</h1>
          <p className="hero-sub">You won the championship. Now build the brand that makes that win the beginning of something enduring, not just the peak of something fleeting.</p>
          <div className="hero-actions">
            <button className="btn-solid" onClick={() => scrollTo('diag')} {...interactiveProps}><span>Explore Strategy</span></button>
            <button className="btn-line" onClick={() => setModalOpen(true)} {...interactiveProps}><span>Confirm Partnership</span></button>
          </div>
        </div>
        <div className="hero-figures">
          <div className="hf"><div className="hf-n">19<i>M</i>+</div><div className="hf-l">Broadcast Reach</div></div>
          <div className="hf"><div className="hf-n">3</div><div className="hf-l">Cities Season 5</div></div>
          <div className="hf"><div className="hf-n">S<i>4</i></div><div className="hf-l">APL Champions</div></div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <div className="hr" />
      <section className="s" id="diag">
        <div className="s-no">01</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Strategic Diagnosis</span></div>
          <h2 className="sh">A Championship Without <em>Brand Architecture</em></h2>
          <div className="gold-tick" />
          <p className="si">Tungabhadra Warriors are APL champions. That is not in question. What is in question is whether the franchise has captured the commercial and cultural value that a championship creates, or whether that value is slowly aging without a structure underneath it to compound.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="diag">
            <div className="dc">
              <div className="dc-lbl"><div className="dc-dot g" />What Already Exists</div>
              <ul className="dl">
                <li><span className="dm g">✓</span>APL Season 4 championship credential with proven on-field performance</li>
                <li><span className="dm g">✓</span>19M+ combined reach across Sony Sports and FanCode broadcast platforms</li>
                <li><span className="dm g">✓</span>Three-city footprint expanding across Visakhapatnam, Mangalagiri, and Kadapa</li>
                <li><span className="dm g">✓</span>Owner with a clear, compelling mission rooted in regional talent development</li>
                <li><span className="dm g">✓</span>Eight-match Season 5 calendar with growing APL infrastructure and IPL pipeline</li>
                <li><span className="dm g">✓</span>Celebrity associations and high-profile events adding cultural gravity</li>
              </ul>
            </div>
            <div className="dc">
              <div className="dc-lbl"><div className="dc-dot v" />What Is Missing</div>
              <ul className="dl">
                <li><span className="dm v">→</span>Brand architecture giving the franchise a defensible identity beyond results</li>
                <li><span className="dm v">→</span>Social presence aligned with champion status — currently under 2,000 followers</li>
                <li><span className="dm v">→</span>A named fan community with its own culture, rituals, and belonging markers</li>
                <li><span className="dm v">→</span>A 52-week content engine keeping the brand alive outside the APL season</li>
                <li><span className="dm v">→</span>Trademark and IP protection for all core brand assets</li>
                <li><span className="dm v">→</span>A sponsorship strategy built on values alignment rather than inventory</li>
              </ul>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay="d2">
          <div className="pull">
            <p>"The gap between what exists and what is missing is the exact engagement Magsmen is designed to address. The raw material is exceptional. The architecture is absent."</p>
            <cite>Magsmen Strategic Assessment — May 2026</cite>
          </div>
        </FadeUp>
      </section>

      {/* THE MODEL */}
      <div className="hr" />
      <section className="s s-alt">
        <div className="s-no">02</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">The Reference Model</span></div>
          <h2 className="sh">Championship Is an Event.<br /><em>Brand Is an Asset.</em></h2>
          <div className="gold-tick" />
          <p className="si">Royal Challengers Bangalore did not win an IPL title for over a decade. Their brand valuation consistently ranked among the highest in the league. Tungabhadra Warriors have something RCB never had: a civilisationally loaded name and a champion's credential simultaneously.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="stats">
            <div className="stat"><div className="stat-n">₹<i>400Cr</i></div><div className="stat-l">RCB franchise valuation — built without a title. Brand outperforms results.</div></div>
            <div className="stat"><div className="stat-n">54<i>M</i></div><div className="stat-l">Population of Andhra Pradesh — the addressable community for Warriors.</div></div>
            <div className="stat"><div className="stat-n">19<i>M+</i></div><div className="stat-l">Combined Season 5 reach across Sony Sports and FanCode broadcast.</div></div>
            <div className="stat"><div className="stat-n"><i>0</i></div><div className="stat-l">Other APL franchises positioned around a civilisational identity.</div></div>
          </div>
        </FadeUp>
        <FadeUp delay="d2">
          <div className="two">
            <div className="tc">
              <div className="tc-tag">What RCB Built</div>
              <h3>Aspiration Over Performance</h3>
              <p>A culture of emotional loyalty so deep that losing became part of the identity. Fans followed what the franchise stood for, not what it achieved on the scorecard.</p>
              <p>Every variable that built RCB is replicable. None requires IPL budgets or celebrity captains. They require strategic clarity about what the franchise stands for and why that matters beyond cricket.</p>
            </div>
            <div className="tc w">
              <div className="tc-tag">The Tungabhadra Advantage</div>
              <h3>A Civilisational Identity</h3>
              <p>The river Tungabhadra sustained the Vijayanagara Empire. This is not a neutral geographic reference. It is a civilisational inheritance that no other franchise can claim or replicate.</p>
              <p>A franchise positioned as the keeper of Andhra's warrior spirit, rooted in that historical depth, becomes permanently differentiated. That is a brand moat RCB cannot build.</p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* BRAND POWER MODEL */}
      <div className="hr" />
      <section className="s" id="strategy">
        <div className="s-no">03</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">The Magsmen Framework</span></div>
          <h2 className="sh">The Brand Power Model <em>Applied</em></h2>
          <div className="gold-tick" />
          <p className="si">Magsmen applies a proprietary Brand Power Model to every engagement. It does not begin with communication. It begins with structural clarity, because a brand built on an unclear foundation produces inconsistent results regardless of marketing spend.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <table className="ptbl">
            <thead><tr><th>#</th><th>Element</th><th>Applied to Tungabhadra Warriors</th></tr></thead>
            <tbody>
              <tr><td>01</td><td><span className="layer">Vision</span></td><td>Build the defining regional sports franchise of Andhra Pradesh that develops champions from its own soil and carries the fighting spirit of the Tungabhadra civilisation forward through cricket.</td></tr>
              <tr><td>02</td><td><span className="layer">Positioning</span></td><td>The only APL franchise positioned as a talent development institution. Not a team that wins. A system that produces winners from Andhra's own villages.</td></tr>
              <tr><td>03</td><td><span className="layer">Narrative</span></td><td>Every local boy given a platform. Every player who reaches the IPL from this franchise is proof that the Warriors build champions, not just play matches.</td></tr>
              <tr><td>04</td><td><span className="layer">Experience</span></td><td>Rituals, community identity, and belonging markers that make the franchise a cultural force beyond a sports entity — felt by fans, sponsors, and players alike.</td></tr>
              <tr><td>05</td><td><span className="layer">Reputation</span></td><td>The accumulated perception that the Warriors franchise is credible, purposeful, and worth investing in — built through consistent delivery of the promise across every season.</td></tr>
            </tbody>
          </table>
        </FadeUp>
      </section>

      {/* GROWTH LOOP */}
      <div className="hr" />
      <section className="s s-paper">
        <div className="s-no">04</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">The Growth Engine</span></div>
          <h2 className="sh">The Brand <em>Growth Loop</em></h2>
          <div className="gold-tick" />
          <p className="si">Brand equity does not grow in a straight line. It grows in a loop. Each cycle strengthens every element within it, which is why properly architected brands compound over time while marketing-only brands plateau the moment the spend stops.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="flow">
            <div className="fi"><div className="fi-n">Step 01</div><div className="fi-t">Insight</div><div className="fi-d">Fan psychology, regional identity, and Andhra cricket culture</div></div>
            <div className="fi act"><div className="fi-n">Step 02</div><div className="fi-t">Strategy</div><div className="fi-d">Vision, positioning, narrative — built to compound across seasons</div></div>
            <div className="fi"><div className="fi-n">Step 03</div><div className="fi-t">Narrative</div><div className="fi-d">Talent development and warrior spirit told year-round</div></div>
            <div className="fi act"><div className="fi-n">Step 04</div><div className="fi-t">Trust</div><div className="fi-d">Fans, sponsors, and players believe in the brand's purpose</div></div>
            <div className="fi"><div className="fi-n">Step 05</div><div className="fi-t">Growth</div><div className="fi-d">Higher sponsor pricing, larger fan base, stronger IPL pipeline</div></div>
          </div>
        </FadeUp>
      </section>

      {/* FANDOM */}
      <div className="hr" />
      <section className="s">
        <div className="s-no">05</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Community Architecture</span></div>
          <h2 className="sh">From Spectators <em>to a Fandom</em></h2>
          <div className="gold-tick" />
          <p className="si">A fan base is a headcount. A fandom is a culture. Magsmen will build four components that convert spectators into a community with its own identity, rituals, and belonging markers that persist across seasons regardless of match outcomes.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="pils">
            {[
              { n: 'Pillar 01', t: 'Identity', items: ['Fan community name reflecting warrior culture','Visual identity markers for the community','Team anthem and rallying language','Cultural symbols from Tungabhadra heritage'] },
              { n: 'Pillar 02', t: 'Rituals', items: ['Stadium entry and celebration traditions','Pre-match community activations','Player recognition ceremonies','Season opening and closing events'] },
              { n: 'Pillar 03', t: 'Belonging', items: ['Exclusive community membership platform','Fan of the season recognition programs','Behind-the-scenes content access','Youth fan development initiatives'] },
              { n: 'Pillar 04', t: 'Narrative', items: ['Fan story content across social platforms','Community-driven content creation','Regional pride storytelling frameworks','Fan-to-IPL dream campaign architecture'] },
            ].map(p => (
              <div className="pil" key={p.n}>
                <div className="pil-h"><div className="pil-nn">{p.n}</div><div className="pil-tt">{p.t}</div><div className="pil-gold" /></div>
                <div className="pil-b"><ul className="pil-list">{p.items.map(i => <li key={i}>{i}</li>)}</ul></div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* SPONSOR */}
      <div className="hr" />
      <section className="s s-alt">
        <div className="s-no">06</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Commercial Strategy</span></div>
          <h2 className="sh">From Inventory <em>to Identity Partnership</em></h2>
          <div className="gold-tick" />
          <p className="si">The current sponsorship structure is a visibility inventory model. Magsmen will rebuild it as a values-aligned identity partnership framework. The conversation shifts from what you get to who you become when you partner with Tungabhadra Warriors.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <table className="dt">
            <thead><tr><th>Category</th><th>Why Warriors Is the Right Platform</th><th>Narrative Alignment</th></tr></thead>
            <tbody>
              <tr><td>FMCG and Consumer Goods</td><td>Household decision-maker audience through 49% family co-viewing at scale</td><td>Brand enters the home. Every exposure is a household-level exposure.</td></tr>
              <tr><td>Education and EdTech</td><td>Aspirational 18-30 demographic with high purchase intent across AP cities</td><td>Talent development mission resonates with brands investing in Andhra's youth.</td></tr>
              <tr><td>Real Estate</td><td>Three-city footprint covers AP's highest-growth real estate markets precisely</td><td>Vizag, Guntur, and Kadapa are exactly where AP real estate growth is concentrated.</td></tr>
              <tr><td>Insurance and Finance</td><td>Trust-based categories needing authentic regional credibility to convert</td><td>Mission-led franchise transfers credibility where trust drives purchase decisions.</td></tr>
              <tr><td>Infrastructure and Manufacturing</td><td>B2B brands seeking Andhra regional leadership association</td><td>A franchise that builds champions aligns with brands building Andhra's future.</td></tr>
              <tr><td>Automobile and Retail</td><td>Sports-engaged households 22-45 are the primary purchase decision demographic in AP</td><td>Regional champions create aspirational association for premium consumer brands.</td></tr>
            </tbody>
          </table>
        </FadeUp>
      </section>

      {/* ROADMAP */}
      <div className="hr" />
      <section className="s" id="road">
        <div className="s-no">07</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Engagement Plan</span></div>
          <h2 className="sh">Three-Phase <em>Strategic Roadmap</em></h2>
          <div className="gold-tick" />
          <p className="si">Magsmen builds in phases so each layer is tested, refined, and activated before the next is built upon it. The roadmap governs the full engagement across Season 5 and positions the franchise for Season 6 with a compounding brand foundation underneath it.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="road">
            <div className="rph" data-n="I">
              <div className="rph-lbl">Phase 1</div><h3>Brand Architecture Foundation</h3><div className="rph-p">Months 1 to 3</div><div className="rph-rule" />
              <ul className="rlist">
                <li>Complete brand audit covering identity, perception, and competitive landscape</li>
                <li>Full brand architecture: purpose, positioning, personality, promise, and proof</li>
                <li>Narrative framework governing all franchise communication</li>
                <li>Trademark and IP advisory note for all core brand assets</li>
                <li>Owner narrative strategy as a public-facing brand asset</li>
              </ul>
            </div>
            <div className="rph" data-n="II">
              <div className="rph-lbl">Phase 2</div><h3>Fandom and Community Building</h3><div className="rph-p">Months 3 to 8</div><div className="rph-rule" />
              <ul className="rlist">
                <li>Fan community architecture and naming system</li>
                <li>52-week content and story framework for year-round presence</li>
                <li>IPL pipeline narrative as cornerstone brand story</li>
                <li>Off-season engagement program design</li>
                <li>Season 5 brand activation roadmap and pre-season launch</li>
              </ul>
            </div>
            <div className="rph" data-n="III">
              <div className="rph-lbl">Phase 3</div><h3>Commercial Transformation</h3><div className="rph-p">Months 6 to 12</div><div className="rph-rule" />
              <ul className="rlist">
                <li>Sponsorship strategy rebuild from values-aligned framework</li>
                <li>Revised sponsor-facing partnership deck with category narratives</li>
                <li>Brand Health Index and measurement framework established</li>
                <li>Mid-season strategy review and adjustment</li>
                <li>Season 6 strategic brief from Season 5 learnings</li>
              </ul>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* METRICS */}
      <div className="hr" />
      <section className="s s-paper">
        <div className="s-no">08</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Brand Health Index</span></div>
          <h2 className="sh">What <em>Success</em> Looks Like</h2>
          <div className="gold-tick" />
          <p className="si">Brand strategy without measurable outcomes is not strategy. Every metric below is tied to a specific strategic objective. If a metric is not moving correctly, the strategy is adjusted before the season ends.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="met">
            {[
              { n: '25K', i: '+', l: 'Target Instagram followers by end of Season 5', s: 'Currently under 2,000' },
              { n: '30', i: '%', l: 'Sponsor pricing uplift target Season 5 vs Season 6', s: 'Value-based pricing' },
              { n: '5K', i: '+', l: 'Named fan community enrolled members by Season 5 close', s: 'Community built' },
              { n: '80', i: '%', l: 'Season 5 sponsors retained or upgraded for Season 6', s: 'Loyalty target' },
              { n: '3', i: '+', l: 'IPL pipeline player narrative stories published per season', s: 'Story architecture' },
              { n: '100', i: '%', l: 'Core brand IP assets trademark registered in relevant classes', s: 'Legal security' },
              { n: '1K', i: '+', l: 'Average off-season post engagements weekly', s: 'Currently near zero' },
              { n: '52', i: '', l: 'Weeks of active brand presence annually through content framework', s: 'Always on' },
            ].map(m => (
              <div className="mc" key={m.l}>
                <div className="mc-n">{m.n}{m.i && <i>{m.i}</i>}</div>
                <div className="mc-l">{m.l}</div>
                <div className="mc-s">{m.s}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* WHY MAGSMEN */}
      <div className="hr" />
      <section className="s" id="why">
        <div className="s-no">09</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">The Right Partner</span></div>
          <h2 className="sh">Why <em>Magsmen</em></h2>
          <div className="gold-tick" />
          <p className="si">There is no shortage of agencies who will offer to manage social media or redesign the kit. Magsmen builds brand operating systems that generate commercial value over time. The legal-blended capability, founder-led structure, and direct AP ecosystem presence make the difference.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <table className="ctbl">
            <tbody>
              {[
                ['50+ brands architected across startups, IPL sponsors, and Fortune 25 organisations','Proven capability at the intersection of sports, commercial brand strategy, and large-scale sponsor management'],
                ['MMA Global Awards jury evaluating Google, Samsung, Apple, HUL, and Loreal','Calibrated to global brand standards while executing in Indian market realities specific to this engagement'],
                ['Consultant of the Year 2023 by The CEO Magazine','Independent validation of strategic quality and commercial outcomes delivered across categories'],
                ['Up to 6x revenue acceleration through strategic repositioning','Directly applicable to the sponsor pricing and franchise valuation objective of this engagement'],
                ['TEDx Speaker and 100+ speeches delivered across India','Platforms available to amplify the Warriors brand story and owner narrative at a national level'],
                ['200M+ views through InTalks platform','A distribution ecosystem that can amplify the Warriors brand story organically without paid spend'],
                ['Enrolled advocate with IP and brand legal practice','Legal foresight built into every strategic recommendation — not billed separately, not discovered late'],
                ['Collaborations with Telugu Film Industry celebrities and AP business leaders','Existing AP ecosystem relationships directly relevant to franchise positioning and cultural authority'],
              ].map(([a,b]) => (
                <tr key={a}><td>{a}</td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>
        </FadeUp>
      </section>

      {/* TERMS */}
      <div className="hr" />
      <section className="s s-alt" id="terms">
        <div className="s-no">10</div>
        <FadeUp>
          <div className="ey"><div className="ey-rule" /><span className="ey-text">Partnership Structure</span></div>
          <h2 className="sh">Scope, Deliverables <em>and Terms</em></h2>
          <div className="gold-tick" />
          <p className="si">Everything Magsmen delivers, every placement the franchise provides, and every commercial term — structured as a value exchange because this is a partnership, not a vendor relationship.</p>
        </FadeUp>
        <FadeUp delay="d1">
          <div className="terms">
            <div>
              <div className="t-lbl">All 13 Deliverables Across 3 Phases</div>
              <table className="tt">
                <thead><tr><th>#</th><th>Deliverable</th><th>Phase</th></tr></thead>
                <tbody>
                  {[['01','Brand Audit Report','Phase 1'],['02','Brand Architecture Document','Phase 1'],['03','Positioning and Narrative Framework','Phase 1'],['04','Trademark and IP Advisory Note','Phase 1'],['05','Owner Narrative Strategy','Phase 1'],['06','Fan Community Architecture','Phase 2'],['07','52-Week Content Framework','Phase 2'],['08','IPL Pipeline Narrative System','Phase 2'],['09','Off-Season Engagement Program','Phase 2'],['10','Sponsorship Strategy Redesign','Phase 3'],['11','Revised Sponsor Partnership Deck','Phase 3'],['12','Brand Health Index Dashboard','Phase 3'],['13','Season 6 Strategic Brief','Phase 3']].map(([n,d,p]) => (
                    <tr key={n}><td>{n}</td><td>{d}</td><td>{p}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="t-lbl">Magsmen Brand Placements in Return</div>
              <table className="tt" style={{ marginBottom: 32 }}>
                <thead><tr><th>Placement</th><th>Detail</th></tr></thead>
                <tbody>
                  {[['Official Strategy Partner','All franchise communications, deck, website, press materials'],['Jersey Placement','Upper chest panel, left side — Position C'],['Team Bus','Side panel branding across all three Season 5 cities'],['Digital Content','Strategy Partner credit on all distributed brand content'],['Broadcast Mention','Partner credit on Sony Sports and FanCode broadcasts'],['Events','Jersey Launch, Opening Ceremony, Player Auction']].map(([a,b]) => (
                    <tr key={a}><td>{a}</td><td>{b}</td></tr>
                  ))}
                </tbody>
              </table>
              <div className="t-lbl">Investment Structure</div>
              <table className="tt">
                <tbody>
                  {[['Strategic Services Fee','INR 6,00,000 + GST per season'],['Placement Value Offset','INR 2,00,000 (jersey, bus, events, digital)'],['Net Cash Component','INR 4,00,000 + GST per season'],['Payment Terms','50% at signing · 25% Phase 2 · 25% Phase 3'],['Season 6 Incentive','15% reduction if Warriors retain Magsmen'],['Valid Until','30 June 2026']].map(([a,b]) => (
                    <tr key={a}><td>{a}</td><td>{b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="t-lbl" style={{ marginTop: 64 }}>Next Steps</div>
        </FadeUp>
        <FadeUp delay="d1">
          <ol className="steps">
            {[
              ['01','Schedule a 60-minute strategic alignment call between franchise owner and Magsmen founder within 5 working days of receiving this proposal.','Both parties'],
              ['02','Review and confirm scope, placement package, and investment structure as detailed in this proposal document.','Franchise team'],
              ['03','Sign the Strategic Brand Partnership Agreement to formally confirm the engagement for APL Season 5.','Both parties'],
              ['04','Magsmen issues Phase 1 kickoff brief and schedules discovery sessions with the franchise owner and key stakeholders.','Magsmen · 3 days'],
              ['05','Franchise designates an internal point of contact with full authority to move decisions forward without delay.','Franchise team'],
              ['06','Brand audit commences, Phase 1 clock begins, and the Tungabhadra Warriors brand journey starts in earnest.','Magsmen'],
            ].map(([n,b,w]) => (
              <li className="step" key={n}>
                <span className="step-n">{n}</span>
                <span className="step-body">{b}</span>
                <span className="step-who">{w}</span>
              </li>
            ))}
          </ol>
        </FadeUp>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="cta">
          <p className="cta-ey">Ready to Begin</p>
          <h2 className="cta-h">The franchise has already done<br />the hardest thing. <span style={{ fontStyle: 'normal', fontWeight: 500 }}>They won.</span></h2>
          <p className="cta-sub">The brand work is what converts that win into something that compounds across seasons. That is what Magsmen is here to build. Together.</p>
          <button className="btn-w" onClick={() => setModalOpen(true)} {...interactiveProps}><span>Confirm Our Partnership</span></button>
          <p className="cta-note">Sends a formal confirmation email to connect@magsmen.com and sandeep@magsmen.com</p>
        </section>
      </FadeUp>

      {/* FOOTER */}
      <footer>
        <div className="fl"><img src={LOGO} alt="Magsmen" /></div>
        <div className="fm">Magsmen Strategy Consultants · connect@magsmen.com · www.magsmen.com</div>
        <div className="fr mr-6">Confidential · May 2026<br />Valid until 30 June 2026</div>
      </footer>

      {/* MODAL */}
      <div className={`ov${modalOpen ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}>
        <div className="mod">
          <button className="mcls" onClick={() => setModalOpen(false)} {...interactiveProps}>✕</button>
          <div className="mhd">
            <h3>Confirm Partnership</h3>
            <p>A detailed formal confirmation will be sent to connect@magsmen.com and sandeep@magsmen.com on your behalf, confirming all terms and requesting the first strategic alignment call.</p>
          </div>
          <div className="mbd">
            <div className="mfld"><label>Your Name</label><input type="text" placeholder="e.g. Srinivas Reddy, Owner — Tungabhadra Warriors" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} /></div>
            <div className="mfld"><label>Your Email</label><input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} /></div>
            <div className="mfld"><label>Your Designation</label><input type="text" placeholder="e.g. Franchise Owner / CEO" value={form.role} onChange={e => setForm(f => ({...f, role: e.target.value}))} /></div>
            <div className="mfld"><label>Additional Message (optional)</label><textarea placeholder="Any specific thoughts or context..." value={form.msg} onChange={e => setForm(f => ({...f, msg: e.target.value}))} /></div>
          </div>
          <div className="mft">
            <span className="mnote">Sends to: connect@magsmen.com &amp; sandeep@magsmen.com</span>
            <button className="btn-solid" onClick={sendMail} {...interactiveProps}><span>Send Confirmation</span></button>
          </div>
        </div>
      </div>

      {/* CHAT FAB */}
      <button className={`cfab${chatOpen ? ' open' : ''}`} onClick={() => setChatOpen(o => !o)} {...interactiveProps}>
        {chatOpen
          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
        }
      </button>

      {/* CHAT WINDOW */}
      <div className={`cwin${chatOpen ? ' open' : ''}`}>
        <div className="chd">
          <div className="cav">M</div>
          <div className="chi"><h4>Magsmen Strategy Assistant</h4><p>Ask anything about this proposal</p></div>
          <div className="cpulse" />
        </div>
        <div className="cmsgs" ref={msgsRef}>
          {chatMsgs.map((m, i) => <div key={i} className={`bbl ${m.type}`}>{m.text}</div>)}
          {typing && <div className="bbl bot"><div className="typi"><span /><span /><span /></div></div>}
        </div>
        {showChips && (
          <div className="chips">
            {['What does Magsmen deliver?','How is the fee structured?','What is the jersey placement?','What happens in Phase 1?','What makes Magsmen different?','How long is the engagement?'].map(q => (
              <button key={q} className="chp" onClick={() => sendChat(q)} {...interactiveProps}>{q}</button>
            ))}
          </div>
        )}
        <div className="cinr">
          <input className="cinp" placeholder="Ask a question..." value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendChat()} />
          <button className="csend" onClick={() => sendChat()} {...interactiveProps}>→</button>
        </div>
      </div>

      {/* TOAST */}
      <div className={`toast${toastOn ? ' on' : ''}`}>✓ Confirmation sent to Magsmen team</div>
    </>
  );
}
