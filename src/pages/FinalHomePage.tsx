import { useState, useEffect, useRef, FormEvent, SetStateAction } from "react"
import { ArrowRight, ChevronDown, Menu, Check } from "lucide-react"

import LOGO  from "/assets/magsmen-new-logo-black-horizontal-landscape.png";
import popupimag2 from  "/assets/your-strategic-journey-to-brand-success-begins-here-3-popup.jpg";
import blogpostone from  "/assets/blogs/why-is-my-business-not-growing-in-andhra-pradesh.jpg";
import blogposttwo from  "/assets/blogs/why-your-brand-needs-a-unique-tone-of-voice.jpg";
import whyismybusinessnotgrowinginandhrapradesh from "/assets/blogs/why-is-my-business-not-growing-in-andhra-pradesh.jpg";
import legalprotectionisnotaseparatefunctionitisbrandstrategy from "/assets/blogs/legal-protection-is-not-a-separate-function-it-is-brand-strategy.png";
import themarketingtrapwhymostindianfounderswalkstraightintoit from "/assets/blogs/the-marketing-trap-why-most-indian-founders-walk-straight-into-it..png";
import whatstatureactuallyisandwhypersonalbrandinggetsitwrong from "/assets/blogs/what-stature-actually-is-and-why-personal-branding-gets-it-wrong.png";
import thegunturfounderhasthesamerighttobrandarchitectureasthebangalorestartup from "/assets/blogs/the-guntur-founder-has-the-same-right-to-brand-architecture-as-the-bangalore-startup.jpg";





import { image } from "d3";
import { JSX } from "react/jsx-runtime";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:'Montserrat',sans-serif;background:#FFFFFF;color:#0A0A0A;-webkit-font-smoothing:antialiased;overflow-x:hidden;line-height:1.75}
::selection{background:#0A0A0A;color:#FFF}
a,button{cursor:pointer;font-family:inherit}
a{color:inherit;text-decoration:none}

/* ── PRELOADER ──────────────────────────────────────────────────────────────── */
.preloader{position:fixed;inset:0;z-index:9999;background:#0A0A0A;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;transition:transform .85s cubic-bezier(.9,0,.1,1)}
.preloader.done{transform:translateY(-100%)}
@keyframes drawStroke{to{stroke-dashoffset:0}}
.globe-outline{stroke-dasharray:226;stroke-dashoffset:226;animation:drawStroke .9s ease forwards .15s}
.globe-eq{stroke-dasharray:230;stroke-dashoffset:230;animation:drawStroke .65s ease forwards .75s}
.globe-lat-n{stroke-dasharray:172;stroke-dashoffset:172;animation:drawStroke .5s ease forwards .95s}
.globe-lat-s{stroke-dasharray:172;stroke-dashoffset:172;animation:drawStroke .5s ease forwards 1.05s}
.globe-lon1{stroke-dasharray:90;stroke-dashoffset:90;animation:drawStroke .45s ease forwards 1.1s}
.globe-lon2{stroke-dasharray:90;stroke-dashoffset:90;animation:drawStroke .45s ease forwards 1.18s}
.globe-axis{stroke-dasharray:72;stroke-dashoffset:72;animation:drawStroke .35s ease forwards 1.22s}
@keyframes fadeUpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.pre-letter{opacity:0;animation:fadeUpIn .3s cubic-bezier(.16,1,.3,1) forwards}
.pre-tag{font-size:11px;font-weight:300;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.28);opacity:0;animation:fadeUpIn .4s ease forwards 1.9s}

/* ── REVEAL ANIMATIONS ──────────────────────────────────────────────────────── */
.rv{opacity:0;transform:translateY(24px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)}
.rv.on{opacity:1;transform:translateY(0)}
.rv.d1{transition-delay:.07s}.rv.d2{transition-delay:.14s}.rv.d3{transition-delay:.21s}
.rv.d4{transition-delay:.28s}.rv.d5{transition-delay:.35s}.rv.d6{transition-delay:.42s}
@keyframes clipReveal{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0% 0)}}
.rv-clip{clip-path:inset(0 0 100% 0);opacity:1}
.rv-clip.on{animation:clipReveal .8s cubic-bezier(.16,1,.3,1) forwards}
.rv-clip.d1.on{animation-delay:.08s}.rv-clip.d2.on{animation-delay:.16s}.rv-clip.d3.on{animation-delay:.24s}
.rv-clip.d4.on{animation-delay:.32s}.rv-clip.d5.on{animation-delay:.40s}.rv-clip.d6.on{animation-delay:.48s}
@keyframes pageEnter{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.page-anim{animation:pageEnter .55s cubic-bezier(.16,1,.3,1) forwards}

/* ── HERO STATEMENT SYSTEM ──────────────────────────────────────────────────── */
.hero-stmt-wrap{position:relative;min-height:clamp(12rem,32vw,34rem);display:flex;align-items:flex-end;margin-bottom:2.5rem;}
.hero-stmt{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:.4rem}
.stmt-line{overflow:hidden;line-height:1.1}
.stmt-inner{display:block;transition:transform .65s cubic-bezier(.16,1,.3,1),opacity .65s cubic-bezier(.16,1,.3,1)}
.hero-stmt.entering .stmt-inner{transform:translateY(105%);opacity:0}
.hero-stmt.visible .stmt-line:nth-child(1) .stmt-inner{transform:translateY(0);opacity:1;transition-delay:.0s}
.hero-stmt.visible .stmt-line:nth-child(2) .stmt-inner{transform:translateY(0);opacity:1;transition-delay:.12s}
.hero-stmt.visible .stmt-line:nth-child(3) .stmt-inner{transform:translateY(0);opacity:1;transition-delay:.22s}
.hero-stmt.exiting .stmt-inner{transform:translateY(-80%);opacity:0;transition-duration:.4s}
.stmt-w300{font-family:'Montserrat',sans-serif;font-weight:300;font-size:clamp(1.9rem,4.8vw,4rem);color:rgba(255,255,255,.36);letter-spacing:-.02em;display:block;padding-bottom:30px}
.stmt-w300i{font-family:'Montserrat',sans-serif;font-weight:300;font-style:italic;font-size:clamp(1.9rem,4.8vw,4rem);color:rgba(255,255,255,.32);letter-spacing:-.01em;display:block;padding-bottom:-10px}
.stmt-w900{font-family:'Montserrat',sans-serif;font-weight:900;font-size:clamp(2.2rem,5.8vw,5rem);color:#FFFFFF;letter-spacing:-.04em;display:block;padding-bottom:30px}
.stmt-dots{display:flex;gap:8px;align-items:center;margin-bottom:2.5rem}
.stmt-dot{width:24px;height:2px;background:rgba(255,255,255,.18);border-radius:2px;cursor:pointer;transition:background .4s,width .4s}
.stmt-dot.active{background:#FFF;width:42px}


@media (max-width:768px){

.stmt-w300,
.stmt-w300i{

    font-size:1.25rem;

    line-height:1.25;

    padding-bottom:15px;

    letter-spacing:-0.01em;

    marrgin-bottom:25px !important;

}

.stmt-w900{

    font-size:2.15rem;

    line-height:1.02;

    padding-bottom:14px;
    

    letter-spacing:-0.03em;

}


@media (max-width:390px){

.stmt-w300,
.stmt-w300i{

    font-size:1.1rem;

}

.stmt-w900{

    font-size:1.65rem;

}

}

}

/* ── TIMELINE DRAW ANIMATION ────────────────────────────────────────────────── */
.tl-wrap{position:relative;padding-left:52px}
.tl-spine{position:absolute;left:15px;top:28px;bottom:0;width:1.5px;background:#EBEBEB;overflow:hidden}
.tl-fill{position:absolute;top:0;left:0;right:0;height:0;background:#0A0A0A;transition:height 1.6s cubic-bezier(.16,1,.3,1)}
.tl-wrap.on .tl-fill{height:100%}
.tl-item{position:relative;padding-bottom:3rem}
.tl-item:last-child{padding-bottom:0}
.tl-dot{position:absolute;left:-41px;top:3px;width:24px;height:24px;border:1.5px solid #DDD;border-radius:50%;background:#FFF;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#CCC;transition:border-color .35s,background .35s,color .35s;transition-delay:var(--d,0s)}
.tl-item.node-on .tl-dot{border-color:#0A0A0A;background:#0A0A0A;color:#FFF}
.tl-item-h{font-size:1.05rem;font-weight:800;margin-bottom:.5rem;opacity:0;transform:translateX(8px);transition:opacity .5s ease,transform .5s ease;transition-delay:var(--d,.1s)}
.tl-item.node-on .tl-item-h{opacity:1;transform:translateX(0)}
.tl-item-p{font-size:.9rem;color:#555;line-height:1.85;font-weight:300;opacity:0;transform:translateX(8px);transition:opacity .5s ease,transform .5s ease;transition-delay:var(--d,.18s)}
.tl-item.node-on .tl-item-p{opacity:1;transform:translateX(0)}
.tl-phase{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#CCC;margin-bottom:.5rem;opacity:0;transition:opacity .4s ease;transition-delay:var(--d,.0s)}
.tl-item.node-on .tl-phase{opacity:1}


/* ── NAV ─────────────────────────────────────────────────────────────────────── */
nav{position:fixed;top:0;left:0;right:0;z-index:950;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;gap:40px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-bottom:1px solid transparent;transition:border-color .3s,box-shadow .3s}
nav.scrolled{border-bottom-color:#EBEBEB;box-shadow:0 1px 12px rgba(0,0,0,.06)}
.nav-logo{display:flex;align-items:center;cursor:pointer;flex-shrink:0}
.nav-logo img{height:24px;width:auto}
.nav-links{display:none;list-style:none;align-items:center;gap:2px;flex:1;justify-content:center}
.nav-item{position:relative}
.nav-item>a,.nav-item>button{font-size:12.5px;font-weight:500;color:#666;background:none;border:none;padding:8px 14px;display:flex;align-items:center;gap:3px;letter-spacing:.01em;border-radius:4px;transition:color .15s,background .15s}
.nav-item>a:hover,.nav-item>button:hover{color:#0A0A0A;background:#F5F5F5}
.nav-item.active>a,.nav-item.active>button{color:#0A0A0A;font-weight:600}
.nav-drop{position:absolute;top:calc(100% + 8px);left:0;background:#FFF;border:1px solid #EBEBEB;border-radius:8px;padding:6px 0;min-width:260px;box-shadow:0 8px 32px rgba(0,0,0,.1);opacity:0;pointer-events:none;transform:translateY(-6px);transition:opacity .2s,transform .2s;z-index:10}
.nav-item:hover .nav-drop,.nav-item:focus-within .nav-drop{opacity:1;pointer-events:auto;transform:translateY(0)}
.nav-drop a{display:flex;align-items:flex-start;gap:10px;padding:10px 18px;border-bottom:1px solid #F5F5F5;transition:background .15s;cursor:pointer}
.nav-drop a:last-child{border-bottom:none}
.nav-drop a:hover{background:#F8F8F8}
.drop-icon{font-size:1.05rem;width:24px;flex-shrink:0;margin-top:1px}
.drop-label{font-size:13px;font-weight:600;color:#0A0A0A;display:block;margin-bottom:1px}
.drop-sub{font-size:11px;color:#999;display:block;font-weight:300}
.nav-cta{flex-shrink:0;font-size:13px;font-weight:700;color:#FFF;background:#0A0A0A;border:none;padding:10px 22px;border-radius:5px;letter-spacing:.01em;transition:background .15s,transform .15s}
.nav-cta:hover{background:#222;transform:translateY(-1px)}
.nav-ham{display:flex;align-items:center;justify-content:center;background:none;border:none;padding:8px;color:#0A0A0A}
.mob-menu{position:fixed;inset:0;background:#FFF;z-index:940;overflow-y:auto;padding:80px 28px 80px}
.mob-link{font-size:1.1rem;font-weight:700;color:#0A0A0A;padding:.9rem 0;border-bottom:1px solid #F0F0F0;display:block;cursor:pointer}
.mob-sublabel{font-size:1.1rem;font-weight:700;text-transform:capitalize;color:#000;padding:.7rem 0 .35rem;display:block}
.mob-sub{font-size:.9rem;font-weight:500;color:#555;padding:.5rem 0 .5rem 14px;border-bottom:1px solid #F8F8F8;display:block;cursor:pointer}
.mob-cta{margin-top:2rem;display:block;font-size:14px;font-weight:700;color:#FFF;background:#0A0A0A;padding:14px 28px;border-radius:5px;text-align:center}

/* ── FLOATING ELEMENTS ──────────────────────────────────────────────────────── */
.wa-float{position:fixed;bottom:28px;right:28px;z-index:800;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.wa-tooltip{background:#0A0A0A;color:#FFF;font-size:12px;font-weight:600;padding:7px 14px;border-radius:20px;white-space:nowrap;opacity:0;transform:translateX(8px);transition:opacity .2s,transform .2s;pointer-events:none;font-weight:300;letter-spacing:.02em}
.wa-float:hover .wa-tooltip{opacity:1;transform:translateX(0)}
.wa-btn{width:54px;height:54px;background:#25D366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(37,211,102,.35);transition:transform .2s,box-shadow .2s}
.wa-btn:hover{transform:scale(1.08);box-shadow:0 8px 28px rgba(37,211,102,.45)}
@keyframes waPulse{0%,100%{box-shadow:0 4px 16px rgba(37,211,102,.35)}50%{box-shadow:0 4px 24px rgba(37,211,102,.6)}}
.wa-btn{animation:waPulse 3s ease infinite}
.wa-icon{width:26px;height:26px;fill:#FFF}
.mob-sticky{position:fixed;bottom:0;left:0;right:0;z-index:700;display:flex;background:#FFF;border-top:1px solid #EBEBEB;padding:10px 16px 10px;gap:10px;padding-bottom:max(10px,env(safe-area-inset-bottom))}
.mob-sticky a{flex:1;font-size:13px;font-weight:700;border-radius:5px;padding:12px 0;text-align:center;display:flex;align-items:center;justify-content:center;gap:7px}
.mob-sticky .ms-wa{background:#25D366;color:#FFF}
.mob-sticky .ms-call{background:#0A0A0A;color:#FFF}
.read-progress{position:fixed;top:68px;left:0;height:2px;background:#0A0A0A;z-index:940;transition:width .08s linear;pointer-events:none}

/* ── TESTI BAR ───────────────────────────────────────────────────────────────── */
.tbar{overflow:hidden;background:#F4F4F4;border-top:1px solid #EBEBEB;border-bottom:1px solid #EBEBEB;padding:28px 0}
.tbar-track{display:flex;gap:52px;animation:tbarscroll 55s linear infinite;width:max-content}
.tbar-track:hover{animation-play-state:paused}
@keyframes tbarscroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.tbar-item{display:flex;flex-direction:column;gap:6px;min-width:340px;max-width:340px;padding:0 8px}
.tbar-quote{font-size:.88rem;color:#444;line-height:1.8;font-style:italic;font-weight:300}
.tbar-who{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#0A0A0A}
.tbar-role{font-size:11px;color:#888;font-weight:300}

/* ── LAYOUT ──────────────────────────────────────────────────────────────────── */
.pg{padding-top:68px;min-height:100vh}
.sec{padding:100px 56px;border-top:1px solid #EBEBEB}
.sec.nb{border-top:none}
.sec-alt{background:#F8F8F8}
.sec-dark{background:#0A0A0A;border-top:none}
.si{max-width:1200px;margin:0 auto}

/* ── TYPE SYSTEM ─────────────────────────────────────────────────────────────── */
.lbl{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#AAA;display:flex;align-items:center;gap:0;margin-bottom:1.5rem}
.lbl::before{content:'';width:0;height:0}
.lbl.wh{color:rgba(255,255,255,.8)}.lbl.wh::before{background:rgba(255,255,255,.18)}
h1.h1{font-size:clamp(2.6rem,6vw,5rem);font-weight:900;line-height:1.02;letter-spacing:-.035em;color:#0A0A0A;margin-bottom:1.75rem}
h2.h2{font-size:clamp(1.9rem,3.8vw,3.2rem);font-weight:800;line-height:1.06;letter-spacing:-.025em;color:#0A0A0A;margin-bottom:1rem}
.h1.wh,.h2.wh{color:#FFF}
.lead{font-size:1.05rem;color:#555;max-width:680px;line-height:2;font-weight:300}
.lead.wh{color:rgba(255,255,255,.55)}
.body{font-size:.97rem;color:#444;line-height:1.95;font-weight:300}
.t300{font-weight:300}.t300i{font-weight:300;font-style:italic}.t900{font-weight:900}

/* ── BUTTONS ─────────────────────────────────────────────────────────────────── */
.bf{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:700;color:#FFF;background:#0A0A0A;border:1.5px solid #0A0A0A;padding:13px 28px;border-radius:5px;display:inline-flex;align-items:center;gap:7px;transition:transform .2s,background .2s}
.bf:hover{background:#222;transform:translateY(-1px)}
.bf.inv{color:#0A0A0A;background:#FFF;border-color:#FFF}.bf.inv:hover{background:#F0F0F0}
.bo{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:600;color:#0A0A0A;background:transparent;border:1.5px solid #CCC;padding:13px 28px;border-radius:5px;display:inline-flex;align-items:center;gap:7px;transition:border-color .2s,transform .2s}
.bo:hover{border-color:#0A0A0A;transform:translateY(-1px)}
.bo.wh{color:#FFF;border-color:rgba(255,255,255,.28)}.bo.wh:hover{border-color:#FFF}
.bo.dk{color:#0A0A0A;border-color:#CCC}.bo.dk:hover{border-color:#0A0A0A}
.bf-sm{font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:700;color:#FFF;background:#0A0A0A;border:none;padding:9px 18px;border-radius:4px;display:inline-flex;align-items:center;gap:5px;cursor:pointer;transition:background .15s}
.bf-sm:hover{background:#222}
.bo-sm{font-family:'Montserrat',sans-serif;font-size:12.5px;font-weight:600;color:#0A0A0A;background:transparent;border:1.5px solid #DDD;padding:8px 18px;border-radius:4px;display:inline-flex;align-items:center;gap:5px;cursor:pointer;transition:border-color .15s}
.bo-sm:hover{border-color:#0A0A0A}
.brow{display:flex;flex-wrap:wrap;gap:12px;margin-top:2.5rem}

/* ── HERO ────────────────────────────────────────────────────────────────────── */
.hero{background:#0A0A0A;min-height:90vh;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;position:relative}
.hero-noise{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;opacity:.4}
.hero-inner{max-width:1200px;margin:0 auto;width:100%;padding:120px 56px 80px;position:relative;z-index:1}
.hero-tag{font-size:11px;font-weight:300;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.6);margin-bottom:2rem;display:flex;align-items:center;gap:10px}
// .hero-tag::before{content:'';width:24px;height:1px;background:rgba(255,255,255,.6);flex-shrink:0}
.hero-lead{font-size:1.05rem;color:rgba(255,255,255,.45);max-width:560px;line-height:2;margin-bottom:3rem;font-weight:300}
.hero-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid rgba(255,255,255,.07);padding-top:3rem;margin-top:3rem}
.hs{padding-right:3rem;border-right:1px solid rgba(255,255,255,.07)}
.hs:nth-child(even){padding-left:3rem;padding-right:0;border-right:none}
.hs-n{font-size:clamp(2rem,4.8vw,3.2rem);font-weight:900;letter-spacing:-.05em;line-height:1;color:#FFF;display:block;margin-bottom:4px}
.hs-u{font-weight:200;opacity:.45;font-size:.75em;margin-left:1px}
.hs-l{font-size:11px;font-weight:300;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.6);display:block;margin-top:5px}





/* ── MEDIA STRIP ─────────────────────────────────────────────────────────────── */
.media-strip{background:#FFF;padding:22px 56px;border-bottom:1px solid #EBEBEB}
.ms-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.ms-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#CCC;flex-shrink:0;text-align:center !important;}
.ms-items{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.ms-item{font-size:11px;font-weight:700;color:#BBB;letter-spacing:.04em;white-space:nowrap;border:1px solid #EBEBEB;padding:5px 13px;border-radius:20px;transition:border-color .15s,color .15s}
.ms-item:hover{border-color:#0A0A0A;color:#0A0A0A}

/* ── CLIENT BAR ──────────────────────────────────────────────────────────────── */
.client-bar{background:#FAFAFA;padding:22px 56px;border-top:1px solid #EBEBEB;border-bottom:1px solid #EBEBEB;overflow:hidden}
.cb-label{font-size:15px;font-weight:400;letter-spacing:.14em;text-transform:uppercase;color:rgba(71, 69, 69, 0.6);text-align:center;margin-bottom:16px}
.cb-track{display:flex;gap:32px;animation:cbscroll 28s linear infinite;width:max-content}
@keyframes cbscroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.cb-item{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#AAA;white-space:nowrap;padding:7px 16px;border:1px solid #c8c3c3;border-radius:4px}

/* ── GRIDS ───────────────────────────────────────────────────────────────────── */
.g2{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem}
.g3{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}
.kl{border-left:3px solid #0A0A0A;padding-left:1.5rem}
.kl.wh{border-left-color:rgba(255,255,255,.3)}
.kl-h{font-size:14px;font-weight:700;margin-bottom:.45rem}
.kl-p{font-size:.93rem;color:#555;line-height:1.9;font-weight:300}

/* ── EDITORIAL BREAK ─────────────────────────────────────────────────────────── */
.break-stmt{padding:80px 56px;border-top:1px solid #EBEBEB;border-bottom:1px solid #EBEBEB;overflow:hidden}
.break-stmt-inner{max-width:1200px;margin:0 auto}
.break-stmt-text{font-size:clamp(1.7rem,4vw,3rem);line-height:1.18;letter-spacing:-.02em}
.break-stmt-text .thin{font-weight:300;color:#AAA}
.break-stmt-text .heavy{font-weight:900;color:#0A0A0A}
.break-stmt-text .italic{font-weight:200;font-style:italic;color:#BBB}

/* ── SERVICE CARDS ───────────────────────────────────────────────────────────── */
.sc{border:2px solid #EBEBEB;border-radius:7px;padding:2.25rem;transition:border-color .2s,transform .2s,box-shadow .2s;background:#FFF;position:relative}
.sc::after{content:'';position:absolute;inset:-1px;border-radius:8px;border:1.5px solid #0A0A0A;opacity:0;transform:scale(.98);transition:opacity .2s,transform .2s;pointer-events:none}
.sc:hover::after{opacity:1;transform:scale(1)}
.sc:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.07)}
.sc-n{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#CCC;margin-bottom:1rem}
.sc-h{font-size:1.05rem;font-weight:800;margin-bottom:.65rem;line-height:1.3}
.sc-d{font-size:.91rem;color:#555;line-height:1.9;font-weight:300}
.sc-ul{list-style:none;margin-top:1.25rem;display:flex;flex-direction:column;gap:.35rem}
.sc-ul li{font-size:12px;color:#888;padding-left:1rem;position:relative;font-weight:400}
.sc-ul li::before{content:'';position:absolute;left:0;top:.58em;width:4px;height:4px;background:#0A0A0A;border-radius:50%}
.sc-arrow{font-size:13px;font-weight:700;display:flex;align-items:center;gap:6px;margin-top:1.5rem;color:#0A0A0A;transition:gap .2s}
.sc:hover .sc-arrow{gap:12px}

/* ── PROCESS ─────────────────────────────────────────────────────────────────── */
.hww-item{display:grid;grid-template-columns:1fr;gap:.65rem;padding:2.5rem 0;border-bottom:2px solid #EBEBEB}
.hww-item:first-child{border-top:1px solid #EBEBEB}
.hww-n{font-size:20px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC}
.hww-h{font-size:1.05rem;font-weight:800;margin-bottom:.4rem}
.hww-p{font-size:.93rem;color:#555;line-height:1.9;max-width:560px;font-weight:300}

/* ── ADVISORY TIERS ──────────────────────────────────────────────────────────── */
.atiers{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}
.atier{border:1.5px solid #EBEBEB;border-radius:8px;padding:2.25rem;display:flex;flex-direction:column;transition:border-color .2s,box-shadow .2s}
.atier:hover{box-shadow:0 6px 28px rgba(0,0,0,.07)}
.atier.feat{border-color:#0A0A0A}
.atier-badge{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:#0A0A0A;color:#FFF;padding:3px 12px;border-radius:20px;display:inline-block;margin-bottom:1rem}
.atier-n{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#CCC;margin-bottom:.6rem}
.atier-h{font-size:1.15rem;font-weight:800;margin-bottom:.6rem}
.atier-price{font-size:.93rem;font-weight:700;color:#0A0A0A;margin-bottom:1rem;padding:8px 14px;background:#F5F5F5;border-radius:5px;display:inline-block}
.atier-p{font-size:.91rem;color:#555;line-height:1.9;flex:1;margin-bottom:1.5rem;font-weight:300}
.atier-inc{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:.7rem}
.atier-ul{list-style:none;display:flex;flex-direction:column;gap:.4rem;margin-bottom:1.75rem}
.atier-ul li{font-size:12.5px;color:#444;padding-left:1.35rem;position:relative;font-weight:400}
.atier-ul li::before{content:"\\2713";position:absolute;left:0;font-size:11px;font-weight:800;color:#0A0A0A}

/* ── OTC ─────────────────────────────────────────────────────────────────────── */
.otc-price-hero{background:#0A0A0A;border-radius:8px;padding:3.5rem;margin-bottom:3rem}
.otc-price-from{font-size:.95rem;font-weight:300;font-style:italic;color:rgba(255,255,255,.38);display:block;margin-bottom:.6rem;letter-spacing:.01em}
.otc-price-n{font-size:clamp(2.8rem,6vw,5rem);font-weight:900;color:#FFF;letter-spacing:-.04em;line-height:1;display:block;margin-bottom:.5rem}
.otc-price-sub{font-size:.97rem;color:rgba(255,255,255,.45);max-width:540px;line-height:1.9;font-weight:300}
.otc-deliverable{border:1px solid #EBEBEB;border-radius:7px;padding:1.75rem;display:flex;gap:1.25rem;align-items:flex-start;transition:border-color .2s}
.otc-deliverable:hover{border-color:#0A0A0A}
.otc-del-n{width:36px;height:36px;background:#0A0A0A;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#FFF;flex-shrink:0}
.otc-del-h{font-size:13.5px;font-weight:700;margin-bottom:.3rem}
.otc-del-p{font-size:.88rem;color:#666;line-height:1.75;font-weight:300}
.otc-vs{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}
.otc-vs-col{border:1px solid #EBEBEB;border-radius:7px;padding:2rem}
.otc-vs-h{font-size:13px;font-weight:700;margin-bottom:1.25rem;padding-bottom:.85rem;border-bottom:1px solid #EBEBEB}
.otc-vs-ul{list-style:none;display:flex;flex-direction:column;gap:.65rem}
.otc-vs-ul li{font-size:.88rem;padding-left:1.25rem;position:relative;line-height:1.6;font-weight:300}
.otc-vs-ul.yes li::before{content:"\\2713";position:absolute;left:0;color:#0A0A0A;font-weight:800;font-size:11px}
.otc-vs-ul.no li::before{content:"\\2715";position:absolute;left:0;color:#CCC;font-weight:700;font-size:11px}
.otc-vs-ul.yes li{color:#333}
.otc-vs-ul.no li{color:#999}

/* ── PILLAR ──────────────────────────────────────────────────────────────────── */
.pillar-item{border:1px solid #EBEBEB;border-radius:7px;padding:2rem;transition:border-color .2s,transform .2s}
.pillar-item:hover{border-color:#0A0A0A;transform:translateY(-2px)}
.pillar-n{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#CCC;margin-bottom:.7rem}
.pillar-h{font-size:1rem;font-weight:800;margin-bottom:.65rem}
.pillar-p{font-size:.88rem;color:#555;line-height:1.85;font-weight:300}
.pillar-ul{list-style:none;margin-top:1rem;display:flex;flex-direction:column;gap:.35rem}
.pillar-ul li{font-size:12px;color:#777;padding-left:1rem;position:relative;font-weight:300;line-height:1.6}
.pillar-ul li::before{content:'';position:absolute;left:0;top:.58em;width:3px;height:3px;background:#AAA;border-radius:50%}

/* ── DELIVERABLE CARDS ───────────────────────────────────────────────────────── */
.del-card{border:1px solid #EBEBEB;border-radius:7px;padding:1.75rem;background:#FFF;transition:border-color .2s}
.del-card:hover{border-color:#0A0A0A}
.del-h{font-size:.97rem;font-weight:800;margin-bottom:.4rem}
.del-p{font-size:.88rem;color:#555;line-height:1.8;font-weight:300}
.del-tag{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:.5rem}

/* ── STATURE ─────────────────────────────────────────────────────────────────── */
.stature-box{background:#0A0A0A;border-radius:8px;padding:3.5rem;margin-top:3rem}
.stature-tag{font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.3);border:1px solid rgba(255,255,255,.1);padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:1.5rem}
.stature-h{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:900;color:#FFF;line-height:1.06;letter-spacing:-.025em;margin-bottom:1rem}
.snot-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:2.5rem}
.snot{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:6px;padding:1.5rem}
.snot-h{font-size:13px;font-weight:700;color:#FFF;margin-bottom:.4rem}
.snot-p{font-size:.88rem;color:rgba(255,255,255,.45);line-height:1.75;font-weight:300}
.tier-cards{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:2.5rem}
.tier-card{border:1px solid #EBEBEB;border-radius:6px;padding:1.75rem;transition:border-color .2s}
.tier-card:hover{border-color:#0A0A0A}
.tier-pill{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:#F0F0F0;color:#555;padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:.65rem}
.tier-card-h{font-size:.97rem;font-weight:800;margin-bottom:.4rem}
.tier-card-p{font-size:.88rem;color:#555;line-height:1.75;font-weight:300}
.stature-clients{display:grid;grid-template-columns:1fr 1fr;gap:.85rem;margin-top:2.5rem}
.scp{border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.04);border-radius:6px;padding:1.25rem}
.scp-n{font-size:13px;font-weight:700;color:#FFF;margin-bottom:3px}
.scp-r{font-size:11px;color:rgba(255,255,255,.35);font-weight:300}

/* ── COUNCIL ─────────────────────────────────────────────────────────────────── */
.council-sec{background:#0A0A0A;border-radius:8px;padding:3.5rem;margin-top:3rem}
.council-grid{display:grid;grid-template-columns:1fr;gap:3rem;margin-top:2.5rem}
.c-h{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:#FFF;line-height:1.2;margin-bottom:.9rem}
.c-p{font-size:.93rem;color:rgba(255,255,255,.5);line-height:1.95;font-weight:300}
.c-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:1.5rem}
.c-tag{font-size:12px;font-weight:400;color:rgba(255,255,255,.65);background:rgba(255,255,255,.06);padding:5px 13px;border-radius:3px;border:1px solid rgba(255,255,255,.08)}
.c-when{margin-top:2rem;display:flex;flex-direction:column;gap:.8rem}
.c-when-item{display:flex;gap:.85rem;align-items:flex-start}
.c-when-dot{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.25);margin-top:.58rem;flex-shrink:0}
.c-when-p{font-size:.9rem;color:rgba(255,255,255,.45);line-height:1.75;font-weight:300}
.c-note{margin-top:1.5rem;padding:1.5rem;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:6px}
.c-note p{font-size:.9rem;color:rgba(255,255,255,.35);line-height:1.9;font-style:italic;font-weight:300}

/* ── RISK TABLE ──────────────────────────────────────────────────────────────── */
.rtable{margin-top:2.5rem;border:1px solid #EBEBEB;border-radius:7px;overflow:hidden}
.rrow{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #F0F0F0}
.rrow:last-child{border-bottom:none}
.rrow.rh{background:#F5F5F5}
.rc{padding:1rem 1.5rem;font-size:.88rem;color:#333;line-height:1.65;font-weight:300}
.rc:first-child{border-right:1px solid #F0F0F0;font-weight:600;color:#0A0A0A}

/* ── QUOTE BLOCK ─────────────────────────────────────────────────────────────── */
.qblock{border-left:4px solid #0A0A0A;padding:1.75rem 2rem;background:#F8F8F8;margin:2.5rem 0;border-radius:0 6px 6px 0}
.qblock-text{font-size:1.05rem;font-weight:300;font-style:italic;color:#0A0A0A;line-height:1.65}
.qblock-text strong{font-weight:900;font-style:normal}
.qblock-attr{font-size:11px;font-weight:700;color:#BBB;margin-top:.75rem;letter-spacing:.07em;text-transform:uppercase}
.pq-full{margin:3.5rem 0;padding:3rem 0;border-top:1px solid #EBEBEB;border-bottom:1px solid #EBEBEB}
.pq-full-text{font-size:clamp(1.3rem,2.8vw,2rem);font-weight:300;font-style:italic;color:#0A0A0A;line-height:1.55;max-width:800px;letter-spacing:-.01em}
.pq-full-text strong{font-weight:900;font-style:normal}

/* ── CTA BOX ─────────────────────────────────────────────────────────────────── */
.ctabox{border:1.5px solid #0A0A0A;border-radius:8px;padding:4.5rem 3.5rem;text-align:center}
.ctabox-h{font-size:clamp(1.6rem,3.5vw,2.6rem);font-weight:900;letter-spacing:-.025em;line-height:1.15;margin-bottom:1rem}
.ctabox-h span.t300i{font-size:.92em}
.ctabox-p{font-size:.97rem;color:#555;max-width:440px;margin:0 auto 2rem;line-height:1.95;font-weight:300}
.ctabox-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.ctabox-note{font-size:12px;color:#CCC;margin-top:1.25rem;font-weight:300}

/* ── FORMS ───────────────────────────────────────────────────────────────────── */
.cform-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:1.5rem}
.cfield{display:flex;flex-direction:column;gap:.45rem}
.cfield label{font-size:11px;font-weight:700;color:#666;letter-spacing:.07em;text-transform:uppercase}
.cfield input,.cfield textarea,.cfield select{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:400;color:#0A0A0A;background:#FFF;border:1.5px solid #E5E5E5;border-radius:5px;padding:13px 16px;outline:none;transition:border-color .2s;width:100%}
.cfield input:focus,.cfield textarea:focus,.cfield select:focus{border-color:#0A0A0A}
.cfield input::placeholder,.cfield textarea::placeholder{color:#CCC;font-weight:300}
.cfield textarea{resize:vertical;min-height:110px}
.cfield.req label::after{content:' *';color:#DDD}
.form-note{font-size:12px;color:#BBB;margin-top:.75rem;font-weight:300}
.form-ok{text-align:center;padding:3rem 0}
.form-ok-icon{font-size:2rem;margin-bottom:1rem}
.form-ok h3{font-size:1.1rem;font-weight:800;margin-bottom:.5rem}
.form-ok p{font-size:.93rem;color:#555;line-height:1.8;max-width:360px;margin:0 auto 1.5rem;font-weight:300}
.iform{border:1.5px solid #0A0A0A;border-radius:8px;padding:3rem 2.75rem}
.iform-h{font-size:1.25rem;font-weight:800;margin-bottom:.35rem}
.iform-sub{font-size:.93rem;color:#555;margin-bottom:2rem;line-height:1.75;font-weight:300}
.iform-q{margin-bottom:1.75rem}
.iform-qh{font-size:13px;font-weight:700;margin-bottom:.85rem}
.iform-opts{display:flex;flex-direction:column;gap:.45rem}
.iform-opt{display:flex;align-items:center;gap:.85rem;padding:11px 16px;border:1.5px solid #EBEBEB;border-radius:5px;cursor:pointer;transition:border-color .15s,background .15s}
.iform-opt:hover{border-color:#AAA}
.iform-opt.sel{border-color:#0A0A0A;background:#F8F8F8}
.iform-cb{width:18px;height:18px;border:1.5px solid #DDD;border-radius:3px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,border-color .15s}
.iform-opt.sel .iform-cb{background:#0A0A0A;border-color:#0A0A0A}
.iform-ot{font-size:13.5px;font-weight:400;color:#333}

/* ── POPUP ───────────────────────────────────────────────────────────────────── */
.pop-ov{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}
.pop-box{background:#FFF;border-radius:10px;width:100%;max-width:540px;max-height:90vh;overflow-y:auto;position:relative}  {/* padding:3rem 2.75rem; */}
.pop-close{position:absolute;top:18px;right:18px;background:none;border:none;padding:4px;color:#CCC;display:flex;font-size:18px;cursor:pointer;line-height:1}
.pop-close:hover{color:#0A0A0A}
.pop-badge{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#999;border:1px solid #EBEBEB;padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:1.5rem}
.pop-h{font-size:1.25rem;font-weight:800;margin-bottom:.5rem;line-height:1.2}
.pop-p{font-size:.9rem;color:#555;line-height:1.85;margin-bottom:1.75rem;font-weight:300}
.pop-prog{display:flex;gap:4px;margin-bottom:2rem}
.pop-dot{flex:1;height:2.5px;background:#EBEBEB;border-radius:2px;transition:background .3s}
.pop-dot.done{background:#0A0A0A}
.pop-skip{font-size:12px;color:#CCC;text-decoration:underline;cursor:pointer;margin-top:1.25rem;text-align:center;display:block;background:none;border:none;font-family:'Montserrat',sans-serif;font-weight:300}
.pop-rec{background:#F5F5F5;border-radius:6px;padding:1.75rem;margin-top:1rem}
.pop-rec-lbl{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#CCC;margin-bottom:.4rem}
.pop-rec-h{font-size:1rem;font-weight:800;margin-bottom:.5rem}
.pop-rec-p{font-size:.9rem;color:#555;line-height:1.85;font-weight:300}

/* ── INSIGHTS ────────────────────────────────────────────────────────────────── */
.insight-feat{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem;cursor:pointer}
.if-thumb{height:300px;background:#F0F0F0;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:4rem;overflow:hidden;transition:transform .3s}
.insight-feat:hover .if-thumb{transform:scale(1.01)}
.if-cat{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#CCC;margin-bottom:.75rem}
.if-title{font-size:clamp(1.3rem,3vw,2.2rem);font-weight:800;line-height:1.15;letter-spacing:-.02em;margin-bottom:.85rem}
.if-excerpt{font-size:1rem;color:#555;line-height:1.95;font-weight:300;margin-bottom:1rem}
.if-meta{font-size:11px;color:#BBB;font-weight:300}
.blog-grid{display:grid;grid-template-columns:1fr;gap:1.75rem;margin-top:2.5rem}
.blog-card{border:1px solid #EBEBEB;border-radius:8px;overflow:hidden;cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s;background:#FFF}
.blog-card:hover{border-color:#0A0A0A;transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.07)}
.blog-img{height:230px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;font-size:2.5rem;overflow:hidden}
.blog-body{padding:1.75rem}
.blog-cat{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#CCC;margin-bottom:.65rem}
.blog-title{font-size:.97rem;font-weight:800;line-height:1.3;margin-bottom:.6rem;color:#0A0A0A}
.blog-excerpt{font-size:.87rem;color:#666;line-height:1.85;margin-bottom:1.1rem;font-weight:300}
.blog-meta{font-size:11px;color:#BBB;font-weight:300}
.blog-hero-sec{background:#F8F8F8;padding:80px 56px 60px;border-top:1px solid #EBEBEB}
.blog-content{max-width:760px;margin:0 auto}
.blog-content h2{font-size:1.35rem;font-weight:800;margin:2.5rem 0 .9rem;letter-spacing:-.01em}
.blog-content p{font-size:1rem;color:#333;line-height:2.05;margin-bottom:1.5rem;font-weight:300}
.blog-content .pq{border-left:4px solid #0A0A0A;padding:1.5rem 1.75rem;background:#F8F8F8;margin:2.5rem 0;font-size:1.08rem;font-weight:300;font-style:italic;line-height:1.65;color:#0A0A0A;border-radius:0 6px 6px 0}
.blog-content .pq strong{font-weight:900;font-style:normal}

/* ── ABOUT ───────────────────────────────────────────────────────────────────── */
.about-grid{display:grid;grid-template-columns:1fr;gap:4rem;margin-top:2.5rem}
.cred-list{display:flex;flex-direction:column;gap:.7rem}
.cred{display:flex;gap:.85rem;align-items:flex-start;border:1px solid #EBEBEB;border-radius:6px;padding:1rem;transition:border-color .2s}
.cred:hover{border-color:#0A0A0A}
.cred-icon{width:34px;height:34px;border-radius:5px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.9rem}
.cred-t{font-size:12.5px;font-weight:700;margin-bottom:1px}
.cred-s{font-size:11px;color:#888;font-weight:300}
.eco-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem}
.eco-card{border:1px solid #EBEBEB;border-radius:6px;padding:1.5rem;transition:border-color .2s}
.eco-card:hover{border-color:#0A0A0A}
.eco-n{font-size:.95rem;font-weight:800;margin-bottom:.3rem}
.eco-t{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:.6rem}
.eco-p{font-size:.87rem;color:#666;line-height:1.75;font-weight:300}
.partner-list{display:flex;flex-wrap:wrap;gap:.85rem;margin-top:1.75rem}
.partner-item{border:1px solid #EBEBEB;border-radius:5px;padding:.8rem 1.4rem;display:flex;align-items:center;gap:.7rem;transition:border-color .2s}
.partner-item:hover{border-color:#0A0A0A}
.pi-n{font-size:12.5px;font-weight:700}
.pi-t{font-size:11px;color:#888;font-weight:300}

/* ── TESTI ───────────────────────────────────────────────────────────────────── */
.testi-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}
.testi{border:1px solid #EBEBEB;border-radius:7px;padding:2.25rem;transition:border-color .2s,transform .2s}
.testi:hover{border-color:#0A0A0A;transform:translateY(-2px)}
.testi-t{font-size:.93rem;color:#333;line-height:1.95;font-style:italic;margin-bottom:1.5rem;border-left:3px solid #0A0A0A;padding-left:1.5rem;font-weight:300}
.testi-who{font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.testi-role{font-size:11px;color:#888;margin-top:3px;font-weight:300}

/* ── COMPARE ─────────────────────────────────────────────────────────────────── */
.compare-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-top:2.5rem}
.compare-col{border:1.5px solid #EBEBEB;border-radius:7px;padding:2rem}
.compare-col.highlight{border-color:#0A0A0A}
.compare-h{font-size:.97rem;font-weight:800;margin-bottom:.35rem}
.compare-tag{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:1.25rem}
.compare-ul{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.compare-ul li{font-size:.87rem;color:#777;padding-left:1.2rem;position:relative;line-height:1.6;font-weight:300}
.compare-ul.mag li{color:#333}
.compare-ul li::before{content:'\\00B7';position:absolute;left:0;font-weight:800;color:#CCC;font-size:1.15rem;line-height:1.1}
.compare-ul.mag li::before{content:"\\2713";color:#0A0A0A;font-size:.85rem;line-height:1.5;font-weight:800}

/* ── CRISIS ──────────────────────────────────────────────────────────────────── */
.crisis{background:#0A0A0A;border-radius:8px;padding:3.5rem;display:grid;grid-template-columns:1fr;gap:2.5rem}
.crisis-h{font-size:clamp(1.4rem,3vw,1.9rem);font-weight:900;color:#FFF;line-height:1.18;margin-bottom:.75rem}
.crisis-p{font-size:.93rem;color:rgba(255,255,255,.48);line-height:1.9;font-weight:300}
.crisis-items{display:flex;flex-direction:column;gap:.65rem;margin-top:1.5rem}
.crisis-item{font-size:.9rem;color:rgba(255,255,255,.45);padding-left:1.25rem;position:relative;line-height:1.65;font-weight:300}
.crisis-item::before{content:'\\2192';position:absolute;left:0;color:rgba(255,255,255,.28);font-weight:400}

/* ── SECTOR GRID ─────────────────────────────────────────────────────────────── */
.sector-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:2.5rem}
.sector{border:1px solid #EBEBEB;border-radius:7px;overflow:hidden;position:relative;cursor:default;transition:border-color .2s,transform .2s,box-shadow .2s;min-height:185px;background:#FFF}
.sector:hover{border-color:#0A0A0A;transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.07)}
.sector-main{padding:1.75rem;height:100%;display:flex;flex-direction:column}
.sector-icon{font-size:1.65rem;margin-bottom:.8rem}
.sector-n{font-size:.95rem;font-weight:800;margin-bottom:.28rem}
.sector-tag{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:.8rem}
.sector-desc{font-size:.87rem;color:#666;line-height:1.75;flex:1;font-weight:300}
.sector-hover{position:absolute;inset:0;background:#0A0A0A;padding:1.75rem;display:flex;flex-direction:column;justify-content:flex-end;opacity:0;transform:translateY(8px);transition:opacity .28s cubic-bezier(.16,1,.3,1),transform .28s cubic-bezier(.16,1,.3,1);pointer-events:none}
.sector:hover .sector-hover{opacity:1;transform:translateY(0);pointer-events:auto}
.sh-n{font-size:13px;font-weight:800;color:#FFF;margin-bottom:.65rem}
.sh-work{font-size:.87rem;color:rgba(255,255,255,.55);line-height:1.75;margin-bottom:.85rem;font-weight:300}
.sh-clients{display:flex;flex-wrap:wrap;gap:5px}
.sh-client{font-size:10px;font-weight:400;color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);padding:3px 9px;border-radius:3px}

/* ── LEGAL CONTENT ───────────────────────────────────────────────────────────── */
.legal-content{max-width:760px}
.legal-section{margin-bottom:2.5rem}
.legal-section h2{font-size:1.15rem;font-weight:800;margin-bottom:.75rem}
.legal-section p{font-size:.95rem;color:#444;line-height:1.95;font-weight:300}

/* ── JOB CARDS ───────────────────────────────────────────────────────────────── */
.job-card{border:1px solid #EBEBEB;border-radius:7px;padding:2.25rem;margin-bottom:1.25rem;transition:border-color .2s}
.job-card:hover{border-color:#0A0A0A}
.job-h{font-size:1.1rem;font-weight:800;margin-bottom:.3rem}
.job-t{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#CCC;margin-bottom:1rem}
.job-p{font-size:.91rem;color:#555;line-height:1.9;font-weight:300}

/* ── FAQ ─────────────────────────────────────────────────────────────────────── */
.faq-item{border-bottom:1px solid #EBEBEB}
.faq-item:first-child{border-top:1px solid #EBEBEB}
.faq-q{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1.5rem 0;cursor:pointer;font-size:.97rem;font-weight:700;color:#0A0A0A;background:none;border:none;width:100%;text-align:left;font-family:'Montserrat',sans-serif}
.faq-icon{flex-shrink:0;font-size:1.3rem;font-weight:200;color:#CCC;transition:transform .25s,color .25s;line-height:1}
.faq-item.open .faq-icon{transform:rotate(45deg);color:#0A0A0A}
.faq-a{font-size:.93rem;color:#555;line-height:1.95;padding-bottom:1.5rem;max-width:720px;display:none;font-weight:300}
.faq-item.open .faq-a{display:block}

/* ── FOOTER ──────────────────────────────────────────────────────────────────── */
footer{background:#0A0A0A;padding:6rem 56px 3rem}
// .fi{max-width:1200px;margin:0 auto}
.f-grid{display:grid;grid-template-columns:1fr;gap:3rem;padding-bottom:3.5rem;border-bottom:1px solid rgba(255,255,255,.05);margin-bottom:2.5rem}
.f-tag{font-size:15px;color:rgba(255,255,255,22);margin-top:6px;margin-bottom:1.5rem;font-weight:300}
.f-desc{font-size:15px;color:rgba(255,255,255,.5);line-height:1.85;max-width:470px;font-weight:300}
.f-cert{margin-top:1.5rem;display:flex;flex-direction:column;gap:.45rem}
.f-cert span{font-size:11px;color:rgba(255,255,255,.5);font-weight:300}
.fh{font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:1rem}
.f-ul{list-style:none;display:flex;flex-direction:column;gap:.55rem}
.f-ul a{font-size:13px;font-weight:300;color:rgba(255,255,255,.5);cursor:pointer}
.f-ul a:hover{color:#FFF}
.f-bot{display:flex;flex-direction:column;gap:.4rem}
.f-copy{font-size:11px;color:rgba(255,255,255,16);font-weight:300}

/* ── RESPONSIVE ──────────────────────────────────────────────────────────────── */
@media(min-width:600px){
  .g2{grid-template-columns:1fr 1fr}
  .snot-grid{grid-template-columns:repeat(3,1fr)}
  .hero-stats{grid-template-columns:repeat(4,1fr)}
  .hs{padding:0 2.5rem;border-right:1px solid rgba(255,255,255,.07)}
  .hs:first-child{padding-left:0}.hs:last-child{border-right:none}
  .stature-clients{grid-template-columns:repeat(3,1fr)}
  .compare-grid{grid-template-columns:repeat(3,1fr)}
  .cform-grid{grid-template-columns:1fr 1fr}
  .testi-grid{grid-template-columns:1fr 1fr}
  .otc-vs{grid-template-columns:1fr 1fr}
  .eco-grid{grid-template-columns:repeat(3,1fr)}
}
@media(min-width:768px){
  .g3{grid-template-columns:repeat(3,1fr)}
  .atiers{grid-template-columns:repeat(3,1fr)}
  .council-grid{grid-template-columns:1fr 1fr;gap:5rem}
  .blog-grid{grid-template-columns:repeat(3,1fr)}
  .about-grid{grid-template-columns:3fr 2fr;gap:5rem}
  .hww-item{grid-template-columns:160px 1fr;gap:3rem;align-items:start}
  .sector-grid{grid-template-columns:repeat(3,1fr)}
  .tier-cards{grid-template-columns:1fr 1fr}
  .testi-grid{grid-template-columns:repeat(3,1fr)}
  .crisis{grid-template-columns:1fr 1fr;align-items:center}
  .insight-feat{grid-template-columns:1fr 1fr;align-items:center}
  .if-thumb{height:300px}
}
@media(min-width:1024px){
  nav{padding:0 56px}.nav-links{display:flex}.nav-ham{display:none}.mob-sticky{display:none}
  .sector-grid{grid-template-columns:repeat(4,1fr)}
  .f-grid{grid-template-columns:2.2fr 1fr 1fr 1fr 1fr}
  .f-bot{flex-direction:row;justify-content:space-between;align-items:center}
  .eco-grid{grid-template-columns:repeat(4,1fr)}
}
@media(max-width:767px){
  .sec{padding:72px 24px}.nav{padding:0 24px}
  nav,.media-strip,.client-bar,.blog-hero-sec{padding-left:24px;padding-right:24px}
  .hero-inner{padding-left:24px;padding-right:24px;padding-top:100px;padding-bottom:60px}
  footer{padding:4rem 24px 3rem}.ctabox{padding:3rem 1.75rem}
  .break-stmt{padding:64px 24px}
  .tl-wrap{padding-left:40px}
}

.mob-dropdown{
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    padding:18px 0;
    font-size:18px;
    font-weight:700;
    border-bottom:1px solid #ececec;
}

.mob-submenu{
    display:flex;
    flex-direction:column;
    padding-left:20px;
}

.mob-submenu .mob-sub{
    padding:14px 0;
    font-size:16px;
    color:#555;
    border-bottom:1px solid #f2f2f2;
    cursor:pointer;
}

.rotate{
    transform:rotate(180deg);
    transition:0.3s;
}


/* Mobile */
@media (max-width: 768px) {
    .if-thumb {
        height: 200px;
        border-radius: 8px;
        font-size: 2.5rem;
    }

    .if-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .blog-img {
    height: 180px !important;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    overflow: hidden;
}

.nav-cta{
display:none

}
}




`

// ─── DATA ─────────────────────────────────────────────────────────────────────
const HERO_STATEMENTS = [
  [
    { t:"Your business grew.", w:300, i:true },
    { t:"Your brand did not.", w:900, i:false },
    { t:"That gap is the problem.", w:300, i:false },
  ],
  [
    { t:"Every rupee you spent on advertising", w:300, i:true },
    { t:"before you built your brand", w:900, i:false },
    { t:"amplified confusion, not clarity.", w:300, i:false },
  ],
  [
    { t:"A name without a trademark", w:300, i:false },
    { t:"is an asset someone else can take.", w:900, i:false },
    { t:"Most founders discover this after it is gone.", w:300, i:true },
  ],
  [
    { t:"Your business runs when you are there.", w:300, i:true },
    { t:"That is not a business.", w:900, i:false },
    { t:"That is a job with a logo.", w:300, i:false },
  ],
  [
    { t:"Your competitor did not outspend you.", w:300, i:false },
    { t:"They out-positioned you.", w:900, i:false },
    { t:"There is a difference. It is structural.", w:300, i:true },
  ],
  [
    { t:"Eight years.", w:300, i:false },
    { t:"Fifty brands.", w:300, i:false },
    { t:"One conclusion: structure outlasts everything.", w:900, i:false },
  ],
  [
    { t:"You know something is wrong.", w:900, i:false },
    { t:"You just cannot name it precisely.", w:300, i:true },
    { t:"That precision is what we deliver.", w:300, i:false },
  ],
  [
    { t:"Growth without structure", w:300, i:true },
    { t:"is not an achievement.", w:900, i:false },
    { t:"It is a liability with a revenue number attached.", w:300, i:false },
  ],
  [
    { t:"The Guntur founder", w:300, i:false },
    { t:"deserves the same strategic quality as the Bangalore startup.", w:900, i:false },
    { t:"Not a simplified version. The real thing.", w:300, i:true },
  ],
  [
    { t:"Diagnosis before strategy.", w:900, i:false },
    { t:"Strategy before marketing.", w:300, i:false },
    { t:"Marketing before nothing else. In that exact order.", w:300, i:true },
  ],
  [
    { t:"Legal protection is not the last step.", w:300, i:true },
    { t:"It is the first conversation.", w:900, i:false },
    { t:"Most founders have it exactly backwards.", w:300, i:false },
  ],
  [
    { t:"A brand without architecture", w:300, i:false },
    { t:"is not a brand.", w:900, i:false },
    { t:"It is a name with ambition and no foundation beneath it.", w:300, i:true },
  ],
]

function getSessionStatements() {
  return [...HERO_STATEMENTS].sort(() => Math.random() - 0.5).slice(0, 5)
}




const TESTIMONIALS_DATA = [
  { quote: "Sandeep has been an incredible asset to our brand. From introducing a new phase of Tenali Double Horse to managing time effectively and being transparent with us every step of the way, they have truly exceeded expectations. We are 1.5 years into our journey and could not be more pleased.", who: "Tenali Double Horse", role: "FMCG Brand, Andhra Pradesh" },
  { quote: "Telugu Foods had a remarkable experience with Sandeep's brand consulting. His tailored approach and practical strategies helped us launch combos across all mediums, increase distribution leads, and boost our brand visibility to get closer to our customers in less than two months.", who: "Telugu Foods", role: "Food Processing Brand, Andhra Pradesh" },
  { quote: "Working with Sandeep and their team was an incredible experience. They introduced us to the concept of brand architecture, which resulted in a new, enhanced strategy for VSB Group. We experienced a major boost in our corporate rebranding, LinkedIn growth, and external stakeholder praise.", who: "VSB Group", role: "Real Estate and Infrastructure Group" },
  { quote: "We have been associated with Magsmen for two years. They helped our brand Triplex, a pioneer in the detergent market for 30 years, enter the digital space and proposed a digital strategy", who: "Triplex", role: "FMCG, Andhra Pradesh" },
  { quote: "Magsmen guided our brand identity with unmatched insight. They solved challenges effortlessly, offering clarity and solutions. Truly transformed our brand with strategy and execution.", who: "Sri Bhramara Township", role: "Real Estate, Andhra Pradesh" },
  { quote: "Magsmen is my go-to for reputation management. Their research and rebranding transformed my brand and strategies. The Maheswari Movies launch shows their creativity.", who: "Suma Kanakala", role: "Film Actor, Telangana" },
]

const FAQS = [
  { q:"Is Magsmen right for a business like mine?", a:"If your business has a turnover above one crore rupees and you know something is not working with your brand or operations but cannot name the root cause precisely, Magsmen is the right starting point. We have worked with first-generation MSME founders and Fortune 25 organisations. The methodology does not change based on scale. The depth of engagement does." },
  { q:"What does a first engagement with Magsmen involve?", a:"For most founders, the right starting point is a diagnostic conversation followed by the OTC engagement. OTC is a structured session that produces a Five-Pillar Business Audit, a Primary Constraint Identification, a Strategic Direction Summary, a 90-Day Action Roadmap, and a Recommended Next Project. It is the clearest diagnostic available for a founder who knows something is wrong but cannot name it precisely." },
  { q:"What happens after I contact you?", a:"Our strategy associate reviews your details within 24 hours and reaches out directly by phone or WhatsApp. We have a brief conversation to understand your situation before recommending the right engagement structure. No sales pressure. No generic pitch. A direct conversation about your specific situation." },
  { q:"Is Magsmen only for AP and Telangana businesses?", a:"We are rooted in Andhra Pradesh and Telangana and understand this market from the inside. However, we work with businesses across India. Our primary market is AP and Telangana because we believe this region's founders deserve the same strategic quality as any other market in India." },
  { q:"What is the difference between Magsmen and a marketing agency?", a:"A marketing agency creates campaigns, content, and advertising under a brief. Magsmen builds the strategic architecture that defines what the brief should be. We are consulted before the brief is written. A marketing agency executes after the strategy is set. The two are complementary, not competitive." },
  { q:"Does Magsmen only work on brand?", a:"All three disciplines are addressed within one engagement. Brand architecture, business structuring, and legal brand protection are designed together because decisions in each affect the other two. Our founder is an enrolled advocate. Trademark filing, IP architecture, and legal brand protection are included in relevant engagements, not referred out." },
  { q:"What is Stature?", a:"Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. It is not personal branding or social media management. Stature serves professionals, founders, celebrities, politicians, and executives who have earned attention and need that attention converted into structured authority that generates commercial outcomes." },
  { q:"How long does an engagement typically take?", a:"A Brand Express engagement is 30 to 45 days. A Brand Creation engagement is 16 to 20 weeks. An OTC diagnostic is 2 to 3 weeks. An Advisory Retainer is ongoing, structured around monthly sessions and quarterly reviews. Every engagement has a defined timeline documented in the agreement before work begins." },
  { q:"How do I know if this is the right investment?", a:"The OTC diagnostic answers this question precisely. It tells you what the most important constraint on your growth is and what the right sequence of work to address it is. If further engagement with Magsmen is warranted, the OTC report will say so specifically and explain why. If it is not, the report will say that too." },
]

const BLOGS = [
    { id:"brand-economic-asset", cat:"Brand Strategy", title:"Brand Is an Economic Asset. Stop Treating It Like a Marketing Budget.", excerpt:"Most Indian founders treat brand as an expense. That framing is the root cause of why they can never stop spending on advertising.", date:"June 2025", rt:"6 min", image:whyismybusinessnotgrowinginandhrapradesh, content:[
    { t:"p", text:"There is a calculation every founder eventually runs. How much did I spend on marketing this quarter? How many leads did it produce? Was it worth it?" },
    { t:"p", text:"This calculation is the problem. It treats marketing as the question. Brand is the answer the calculation never reaches." },
    { t:"pq", text:"A brand architectured correctly does three things economically. It commands a price premium. It reduces customer acquisition cost. It creates resilience during volatility. None of these are marketing outcomes." },
    { t:"h2", text:"The Balance Sheet Argument" },
    { t:"p", text:"Businesses in Andhra Pradesh and Telangana that built real market presence did not get there through advertising. They got there because customers trusted them, defended them, and chose them repeatedly. That is not a marketing outcome. That is a brand outcome." },
    { t:"p", text:"Brand is an asset that compounds. Every rupee invested in brand positioning, identity architecture, and communication consistency produces returns for years. Every rupee invested in paid attention produces returns for days." },
    { t:"h2", text:"What This Means for the Founder Making the Decision Today" },
    { t:"p", text:"If your business is growing but you are spending more and more on advertising to maintain that growth, you have a brand problem, not a marketing problem. The solution is a brand architecture engagement, not a better advertising strategy." },
    { t:"p", text:"At Magsmen, we have seen this pattern across fifty brands. The founders who understood brand as an economic asset built businesses that outlasted the ones who understood it only as a marketing tool." },
  ]},
  { id:"legal-is-brand", cat:"Legal Brand Protection", title:"Legal Protection Is Not a Separate Function. It Is Brand Strategy.", excerpt:"An unregistered trademark is a brand asset that someone else can take from you while you are busy building it.", date:"May 2025", rt:"5 min", image:legalprotectionisnotaseparatefunctionitisbrandstrategy, content:[
    { t:"p", text:"Most founders separate brand strategy and legal protection into two different conversations, two different vendors, two different timelines. This separation is not logical. It is expensive." },
    { t:"pq", text:"An unregistered trademark is not just a legal risk. It is a brand asset that someone else can take from you while you are busy building it. The name you chose. The identity you built. The trust your customers associate with it." },
    { t:"h2", text:"Where the Gap Lives" },
    { t:"p", text:"Brand consultants design names without legal foresight. Trademark lawyers file applications without understanding brand strategy. The founder is caught between two advisors who are not talking to each other, hoping the gap between them never becomes a problem." },
    { t:"p", text:"At Magsmen, brand naming, trademark search, positioning strategy, and filing happen within the same engagement. The name you launch is the name you own." },
    { t:"h2", text:"The Three Risks Most Founders Carry Without Knowing" },
    { t:"p", text:"The first risk is name conflict. A competitor has been using the same or similar name and you discover this when you receive a legal notice. The second is prior registration. You have been trading under a name for five years and someone else filed the trademark first. The third is identity misuse. Your name, image, or likeness is being used commercially without consent. All three are preventable with integrated legal brand strategy from the start." },
  ]},
  { id:"marketing-trap", cat:"Business Growth", title:"The Marketing Trap. Why Most Indian Founders Walk Straight Into It.", excerpt:"Spend on marketing. Get activity. Feel like something is happening. Repeat next month. The exit is not more marketing.", date:"April 2025", rt:"7 min", image:themarketingtrapwhymostindianfounderswalkstraightintoit, content:[
    { t:"p", text:"Marketing produces visible, measurable, short-term activity. Impressions. Clicks. Leads. Brand investment feels abstract and slow. So founders skip it. They choose the visible over the structural. This is the marketing trap." },
    { t:"pq", text:"You can escape the marketing trap only by building the brand foundation first. Then marketing becomes amplification of something real rather than a substitute for something missing." },
    { t:"h2", text:"What the Trap Looks Like from the Inside" },
    { t:"p", text:"A founder in Vijayawada was spending eighty thousand rupees a month on Instagram and Facebook advertising. Clicks were coming. Purchases were not. His conclusion was that the product pricing was too high." },
    { t:"p", text:"The actual problem was that the brand had no clear positioning. Advertising was driving people to a brand that gave them no reason to choose it over others. The solution was not more advertising. It was a repositioning of the brand before any further advertising spend." },
    { t:"h2", text:"How to Exit the Trap" },
    { t:"p", text:"The exit is straightforward but uncomfortable. Stop advertising temporarily. Invest the money in a brand audit and positioning engagement. Build the architecture. Then resume advertising with a brand that actually gives customers a reason to choose it." },
    { t:"p", text:"The founders who make this decision early build brands that compound over time. The founders who do not keep spending to maintain growth rather than earning it." },
  ]},
  { id:"stature-explained", cat:"Stature", title:"What Stature Actually Is. And Why Personal Branding Gets It Wrong.", excerpt:"Every digital agency offers personal branding. The phrase has been diluted to mean content calendars and headshot photography.", date:"March 2025", rt:"6 min", image:whatstatureactuallyisandwhypersonalbrandinggetsitwrong, content:[
    { t:"p", text:"Visibility without credibility is noise. Credibility without visibility is wasted potential. Most personal branding services give you the first. Stature builds both, in that order." },
    { t:"pq", text:"The individual already has achievement. Stature converts that achievement into authority. The difference between the two is not talent or effort. It is architecture." },
    { t:"h2", text:"What Stature Actually Is" },
    { t:"p", text:"Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. It is built for professionals, founders, celebrities, politicians, and executives who have earned significant public attention and need a structured system for converting that attention into commercial, advisory, or institutional authority." },
    { t:"p", text:"It is not personal branding. Personal branding is a content strategy. Stature is a strategic identity system. The difference shows up in outcomes. Personal branding produces followers. Stature produces advisory mandates, institutional appointments, and referral-driven commercial opportunities." },
    { t:"h2", text:"What We Have Seen in Practice" },
    { t:"p", text:"A doctor with 20 years of expertise but no structured public identity was losing patients to a colleague with 3 years and a strong LinkedIn presence. Not because the newer doctor was better. Because the patient could only evaluate what was visible. Stature corrects this asymmetry." },
  ]},
  { id:"regional-brand", cat:"Regional Business", title:"The Guntur Founder Has the Same Right to Brand Architecture as the Bangalore Startup.", excerpt:"After eight years across AP and Telangana, regional businesses are not underperforming because they lack ambition. They are underserved.", date:"February 2025", rt:"5 min", image:thegunturfounderhasthesamerighttobrandarchitectureasthebangalorestartup, content:[
    { t:"p", text:"Most brand strategy frameworks were built for Bangalore startups or global multinationals. When a family business in Vijayawada or a food processing brand in Tenali tries to apply those frameworks, the fit is wrong. The dynamics are different. The buying behaviour is different. The role of family trust and community reputation in brand perception is fundamentally different." },
    { t:"pq", text:"The Guntur founder has the same right to brand architecture as the Bangalore startup. Not a simplified version of it. The real thing, built with a complete understanding of the market they actually operate in." },
    { t:"h2", text:"What Regional Brands Actually Need" },
    { t:"p", text:"A brand strategy built for AP and Telangana must understand that customers here buy through relationships before they buy through advertising. Community trust is the primary brand signal. Family business structures carry trust equity that is an asset, not a liability." },
    { t:"p", text:"The families that built Tenali Double Horse and Telugu Foods into what they are did not need a Bangalore playbook. They needed a strategist who understood this market from the inside, could speak the language of family business dynamics, and could build a brand architecture that respected the trust equity already earned." },
  ]},
  
]

const POPUP_QS = [
  { q:"What best describes your business?", opts:["A growing regional brand (3 to 15 years old)","A family business ready for the next chapter","A new venture being built from scratch","An established business needing repositioning"] },
  { q:"What is your primary challenge?", opts:["My brand is not clearly defined or differentiated","My business needs structural and operational clarity","My brand is not legally protected","All of these. I need integrated advisory"] },
  { q:"What outcome matters most?", opts:["Build a brand that becomes a recognisable asset","Create a business structure that runs without me","Protect what I have built legally","Scale with a clear strategic foundation"] },
  { q:"When are you looking to begin?", opts:["Immediately. This is urgent","Within the next 1 to 3 months","Planning for later this year","Just exploring right now"] },
]





interface RecResult { label: string; desc: string }
interface RecInput extends Array<string | undefined> {}

function getRec(a: RecInput): RecResult {
  const q2 = a[1] || ""
  if (q2.includes("All of these")) return { label: "Strategic Partner", desc: "You need integrated advisory across brand, business, and legal. The Strategic Partner model is built for exactly this." }
  if (q2.includes("legally")) return { label: "OTC focused on Legal Brand Protection", desc: "Your most urgent priority is protecting what you have built. An OTC session focused on legal brand protection is the right first step." }
  if (q2.includes("structural")) return { label: "OTC focused on Business Structuring", desc: "Your business needs structural clarity. An OTC engagement will diagnose the gaps and produce a clear framework." }
  return { label: "Brand Advisory Retainer", desc: "An ongoing Advisory Retainer would give your business the strategic counsel and accountability to make real progress." }
}

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref?.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); obs.unobserve(e.target) } })
    }, { threshold:0.04, rootMargin:"0px 0px -40px 0px" })
    ref.current.querySelectorAll(".rv,.rv-clip,.tl-wrap").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ref])
}

function useTimelineReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref?.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("on")
          const items = e.target.querySelectorAll(".tl-item")
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add("node-on"), 200 + i * 180)
          })
          obs.unobserve(e.target)
        }
      })
    }, { threshold:0.05 })
    ref.current.querySelectorAll(".tl-wrap").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ref])
}

function Counter({ target }: { target: string }) {
  const [v, setV] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const num = parseInt(target.replace(/\D/g,""))||0
          const steps = 60
          let cur = 0
          const t = setInterval(() => {
            cur = Math.min(cur + num/steps, num)
            setV(Math.floor(cur))
            if (cur >= num) clearInterval(t)
          }, 1800/steps)
          obs.unobserve(e.target)
        }
      })
    }, { threshold:0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  const suf = target.match(/[^\d]+$/)?.[0]||""
  return <span ref={ref}>{v}{suf}</span>
}


// ─── PRELOADER ─────────────────────────────────────────────────────────────────
// function Preloader({ onDone }) {
//   const [done, setDone] = useState(false)
//   useEffect(() => {
//     const t = setTimeout(() => { setDone(true); setTimeout(onDone, 850) }, 2400)
//     return () => clearTimeout(t)
//   }, [onDone])
//   return (
//     <div className={`preloader${done?" done":""}`}>
//       <svg viewBox="0 0 100 100" width="88" height="88" aria-hidden="true">
//         <circle className="globe-outline" cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="0.85"/>
//         <ellipse className="globe-eq" cx="50" cy="50" rx="36" ry="11" fill="none" stroke="rgba(255,255,255,0.42)" strokeWidth="0.7"/>
//         <ellipse className="globe-lat-n" cx="50" cy="37" rx="27" ry="7.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"/>
//         <ellipse className="globe-lat-s" cx="50" cy="63" rx="27" ry="7.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6"/>
//         <path className="globe-lon1" d="M50 14 Q72 50 50 86" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.65"/>
//         <path className="globe-lon2" d="M50 14 Q28 50 50 86" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.65"/>
//         <line className="globe-axis" x1="50" y1="14" x2="50" y2="86" stroke="rgba(255,255,255,0.18)" strokeWidth="0.55"/>
//       </svg>
//       <div style={{ display:"flex", gap:"3px", alignItems:"center" }}>
//         {"MAGSMEN".split("").map((l, i) => (
//           <span key={i} className="pre-letter" style={{ animationDelay:`${0.25 + i * 0.075}s`, fontFamily:"'Montserrat',sans-serif", fontSize:"1.4rem", fontWeight:800, letterSpacing:".12em", color:"#FFF" }}>
//             {l}
//           </span>
//         ))}
//       </div>
//       <span className="pre-tag">Strategy Consultants</span>
//     </div>
//   )
// }

// ─── HERO STATEMENT COMPONENT ──────────────────────────────────────────────────
interface StatementLine {
  t: string
  w?: number
  i?: boolean
}

type Statement = StatementLine[]

function StatementHero(): JSX.Element {
  const [stmts] = useState<Statement[]>(() => getSessionStatements())
  const [cur, setCur] = useState<number>(0)
  const [phase, setPhase] = useState<"visible" | "entering" | "exiting">("visible")

  useEffect(() => {
    const iv = setInterval(() => {
      setPhase("exiting")
      setTimeout(() => {
        setCur(c => (c + 1) % stmts.length)
        setPhase("entering")
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase("visible")))
      }, 420)
    }, 5200)
    return () => clearInterval(iv)
  }, [stmts.length])

  const goTo = (i: number): void => {
    if (i === cur) return
    setPhase("exiting")
    setTimeout(() => {
      setCur(i); setPhase("entering")
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("visible")))
    }, 360)
  }

  const stmt = stmts[cur]
  return (
    <>
      <div className="hero-stmt-wrap">
        <div className={`hero-stmt ${phase}`}>
          {stmt.map((line: StatementLine, i: number) => (
            <div key={i} className="stmt-line">
              <span className="stmt-inner">
                <span className={line.i ? "stmt-w300i" : line.w === 900 ? "stmt-w900" : "stmt-w300"}>
                  {line.t}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="stmt-dots">
        {stmts.map((_, i: number) => (
          <div key={i} className={`stmt-dot${i === cur ? " active" : ""}`} onClick={() => goTo(i)}/>
        ))}
      </div>
    </>
  )
}

// ─── READING PROGRESS ──────────────────────────────────────────────────────────
function ReadingProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const h = () => {
      const el = document.documentElement
      setW(Math.min((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100, 100))
    }
    window.addEventListener("scroll", h, { passive:true })
    return () => window.removeEventListener("scroll", h)
  }, [])
  return w > 0 ? <div className="read-progress" style={{ width:w+"%" }}/> : null
}

// ─── SHARED COMPONENTS ─────────────────────────────────────────────────────────
function TestimonialsBar() {
  const double = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA]
  return (
    <div className="tbar">
      <div className="tbar-track">
        {double.map((t, i) => (
          <div key={i} className="tbar-item">
            <div className="tbar-quote">"{t.quote}"</div>
            <div className="tbar-who">{t.who}</div>
            <div className="tbar-role">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <div className="wa-tooltip">Chat on WhatsApp</div>
      <a className="wa-btn" href="https://wa.me/919044910449?text=Hi, I want to discuss my brand situation" target="_blank" rel="noopener">
        <svg className="wa-icon" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}

function MobileSticky() {
  return (
    <div className="">
      {/* <a className="ms-wa" href="https://wa.me/919044910449?text=Hi, I want to discuss my brand situation" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a className="ms-call" href="tel:+919044910449">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.82 8.33 19.79 19.79 0 01.77 4.7a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 10.91a16 16 0 006 6l.9-.9a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        Call
      </a> */}
    </div>
  )
}

function MediaStrip() {
  return (
    <div className="media-strip">
      <div className="ms-inner">
        <span className="ms-label">As recognised by</span>
        <div className="ms-items">
          {["The CEO Magazine","TEDx","MMA Global Awards","SMARTIES APAC","Silicon India","World Marketing Congress","Deakin University","KL University"].map(n => (
            <span key={n} className="ms-item">{n}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ClientBar() {
  const clients = ["Tenali Double Horse","Telugu Foods","Kalanikethan","VSB Group","Suma Kanakala","Rajeev Kanakala","Roshan Kanakala","Shyam Prasad Munagala","Dr. Srujana Abadala","Dr. Mamatha","Triplex","Arjun Sai Exports","Srinivas Narni (Pronted)"]
  const double = [...clients, ...clients]
  return (
    <div className="client-bar">
      <div className="cb-label">50 brands across AP and Telangana</div>
      <div className="cb-track">
        {double.map((c, i) => <span key={i} className="cb-item">{c}</span>)}
      </div>
    </div>
  )
}

interface FAQItem {
  q: string
  a: string | React.ReactNode
}

interface FAQSectionProps {
  items: FAQItem[]
}

function FAQSection({ items }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {items.map((f: FAQItem, i: number) => (
        <div key={i} className={`faq-item${open===i?" open":""}`}>
          <button className="faq-q" onClick={() => setOpen(open===i?null:i)}>
            {f.q}<span className="faq-icon">+</span>
          </button>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  )
}

interface ContactFormData {
  email: string;
  name: string
  company: string
  mobile: string
  service: string
}

interface ContactFormProps {
  title?: string
  sub?: string
  context?: string
}

function ContactForm({ title, sub, context }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormData>({ name:"", company:"", mobile:"", email:"", service:context||"" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const [done, setDone] = useState<boolean>(false)
  const up = (k: keyof ContactFormData, v: string): void => setForm(p=>({...p,[k]:v}))
  const valid = form.name.trim() && form.mobile.trim() && (!form.email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
  const submit = () => {
    if (!valid) return
    const subj = `Inquiry from ${form.name}${form.company?" ("+form.company+")":""}`
    const body = `Name: ${form.name}\nCompany: ${form.company||"Not specified"}\nMobile: ${form.mobile}\nEmail: ${form.email||"Not specified"}\n\nService Interest:\n${form.service||"General inquiry"}`
    window.location.href = `mailto:connect@magsmen.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  if (done) return (
    <div className="form-ok">
      <div className="form-ok-icon">✓</div>
      <h3>Your details have been sent.</h3>
      <p>Our strategy associate will reach out to you personally within 24 hours.</p>
    </div>
  )
async function submitToFormspree(
  url: string,
  payload: Record<string, string>
): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    })
    return response.ok
  } catch {
    return false
  }
}

  return (
    <div>
      {title && (
        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: ".35rem" }}>
          {title}
        </h3>
      )}
      {sub && (
        <p style={{ fontSize: ".93rem", color: "#555", marginBottom: "2rem", lineHeight: 1.8, fontWeight: 300 }}>
          {sub}
        </p>
      )}

      {/* ── WRAP EVERYTHING IN FORM TAG ── */}
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          if (!valid || status === "sending") return
          setStatus("sending")

          const ok = await submitToFormspree(
            import.meta.env.VITE_FORMSPREE_CONTACT,  // ← URL from .env
            {
              _subject: `Contact — ${form.name}`,
              "Form": "Contact Form",
              "Full Name": form.name,
              "Email": form.email,
              "Company": form.company || "Not provided",
              "Mobile": form.mobile,
              "Service Interest": form.service || "Not specified",
            }
          )

          setStatus(ok ? "done" : "error")
        }}
      >
        <div className="cform-grid">
          <div className="cfield req">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={e => up("name", e.target.value)}
              required
            />
          </div>

          <div className="cfield req">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={e => up("email", e.target.value)}
              required
            />
          </div>

          <div className="cfield">
            <label>Company</label>
            <input
              type="text"
              placeholder="Your company or brand"
              value={form.company}
              onChange={e => up("company", e.target.value)}
            />
          </div>

          <div className="cfield req">
            <label>Mobile</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={form.mobile}
              onChange={e => up("mobile", e.target.value)}
              required
            />
          </div>

          <div className="cfield">
            <label>How can we help?</label>
            <select
              value={form.service}
              onChange={e => up("service", e.target.value)}
            >
              <option value="">Select area of interest</option>
              <option>Brand Architecture</option>
              <option>Brand Creation</option>
              <option>Brand Audit</option>
              <option>Stature (Personal Identity Architecture)</option>
              <option>Business Structuring</option>
              <option>Legal Brand Protection</option>
              <option>Brand Advisory Retainer</option>
              <option>Strategic Partner Engagement</option>
              <option>I want to discuss my full situation first</option>
            </select>
          </div>
        </div>

        {/* Error message */}
        {status === "error" && (
          <div style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: 6,
            padding: "10px 14px",
            fontSize: "13px",
            color: "#991B1B",
            marginBottom: "1rem"
          }}>
            Something went wrong. Please email connect@magsmen.com directly.
          </div>
        )}

        {/* ── SUBMIT BUTTON — type="submit" triggers form onSubmit ── */}
        <button
          type="submit"
          className="bf"
          disabled={!valid || status === "sending"}
          style={{ opacity: valid && status !== "sending" ? 1 : 0.4 }}
        >
          {status === "sending" ? "Sending..." : "Send details →"}
        </button>

        <p className="form-note">
          Our strategy associate will reach out to you personally within 24 hours.
        </p>
      </form>
    </div>
  )

}

interface Question {
  q: string
  opts: string[]
}

interface InlineFormProps {
  title: string
  sub: string
  questions: Question[]
}

interface FormData {
  email: any;
  name: string
  company: string
  mobile: string
}

interface Answers {
  [key: number]: string
}

function InlineForm({ title, sub, questions }: InlineFormProps) {
  const [answers, setAnswers] = useState<Answers>({})
  const [stage, setStage] = useState<string>("q")
  const [form, setForm] = useState<FormData>({ name:"", company:"", mobile:"", email:"" })
  const [done, setDone] = useState<boolean>(false)
  const toggle = (qi: number, opt: string): void => setAnswers(p=>({...p,[qi]:p[qi]===opt?"":opt}))
  const allAns: boolean = questions.every((_,i)=>answers[i])
  const upf = (k: keyof FormData, v: string): void => setForm(p=>({...p,[k]:v}))
  const valid: boolean = !!(form.name.trim() && form.mobile.trim() && form.email.trim())
  const submit = () => {
    if (!valid) return
    const body = `Name: ${form.name}\nCompany: ${form.company||"Not specified"}\nMobile: ${form.mobile}\nEmail: ${form.email}\n\n` + questions.map((q,i)=>`Q: ${q.q}\nA: ${answers[i]||""}`).join("\n\n")
    window.location.href = `mailto:connect@magsmen.com?subject=${encodeURIComponent("Assessment from "+form.name)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  if (done) return (
    <div className="iform"><div className="form-ok">
      <div className="form-ok-icon">✓</div>
      <h3>We have received your answers.</h3>
      <p>Our strategy associate will reach out personally within 24 hours.</p>
    </div></div>
  )
  return (
    <div className="iform">
      {stage==="q" ? (
        <>
          <h3 className="iform-h">{title}</h3>
          <p className="iform-sub">{sub}</p>
          {questions.map((q,qi)=>(
            <div key={qi} className="iform-q">
              <div className="iform-qh">{q.q}</div>
              <div className="iform-opts">
                {q.opts.map((opt,oi)=>(
                  <div key={oi} className={`iform-opt${answers[qi]===opt?" sel":""}`} onClick={()=>toggle(qi,opt)}>
                    <div className="iform-cb">{answers[qi]===opt&&<Check size={11} color="#fff" strokeWidth={3}/>}</div>
                    <span className="iform-ot">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="bf" onClick={()=>setStage("c")} style={{opacity:allAns?1:.4}}>Continue →</button>
        </>
      ) : (
        <>
          <h3 className="iform-h">One last step</h3>
          <p className="iform-sub">Our strategy associate will reach out personally within 24 hours.</p>
          <div className="cform-grid">
            <div className="cfield req"><label>Full Name</label><input type="text" placeholder="Your full name" value={form.name} onChange={e=>upf("name",e.target.value)}/></div>
            <div className="cfield req"><label>Email</label><input type="email" placeholder="your@email.com" value={form.email} onChange={e=>upf("email",e.target.value)}/></div>
            <div className="cfield"><label>Company</label><input type="text" placeholder="Your company" value={form.company} onChange={e=>upf("company",e.target.value)}/></div>
            <div className="cfield req"><label>Mobile</label><input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e=>upf("mobile",e.target.value)}/></div>
          </div>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
            <button className="bf" onClick={submit} style={{opacity:valid?1:.4}}>Send my answers →</button>
            <button className="bo-sm" onClick={()=>setStage("q")}>Back</button>
          </div>
          <p className="form-note">Our strategy associate will reach out personally within 24 hours.</p>
        </>
      )}
    </div>
  )
}

function PopupForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(POPUP_QS.length).fill(""));
  const [rec, setRec] = useState<RecResult | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")
  
  interface FormData {
    email: string; name: string; company?: string; mobile: string 
}
  interface Recommendation { label: string; desc?: string }
  interface PopupQuestion { q: string; opts?: string[] }

  const [form, setForm] = useState<FormData>({ name: "", company: "", mobile: "", email: "" });
    const [done, setDone] = useState<boolean>(false);
    const [stage, setStage] = useState<string>("quiz");

  const sel = (opt: string): void => setAnswers((p: string[]) => {
    const next = [...p];
    next[step] = opt;
    return next;
  });
  
  const next = (): void => {
    if (step < POPUP_QS.length - 1) {
      setStep(s => s + 1);
    } else { 
      // Ensure getRec is defined in your scope. 
      // Fallback added just in case it's missing during testing.
      const recommendation: RecResult = typeof getRec === 'function' 
        ? getRec(answers) 
        : { label: "Integrated Advisory", desc: "A comprehensive approach to align your brand, business, and legal structures." };
      
      setRec(recommendation);
      setStage("contact"); 
    }
  };

  const upf = (k: keyof FormData, v: string): void => setForm(p => ({ ...p, [k]: v }));
  
  const valid: boolean = Boolean(form.name.trim() && form.mobile.trim());
  

const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  e.preventDefault()
  if (!valid || status === "sending") return
  setStatus("sending")

  const answersPayload = POPUP_QS.reduce((acc, q, i) => ({
    ...acc,
    [`Q${i + 1}: ${q.q}`]: answers[i] || "Not answered",
  }), {} as Record<string, string>)

  try {
    const res = await fetch(import.meta.env.VITE_FORMSPREE_POPUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `Popup — ${form.name}${form.company ? ` (${form.company})` : ""}`,
        "Form": "Popup Assessment Form",
        "Full Name": form.name,
        "Company": form.company || "Not provided",
        "Mobile": form.mobile,
        "Email": form.email || "Not provided",
        "Recommended Engagement": rec?.label || "",
        ...answersPayload,
      }),
    })
    if (res.ok) {
      setStage("done")
      setStatus("idle")
    } else {
      setStatus("error")
    }
  } catch (err) {
    console.error("Formspree error:", err)
    setStatus("error")
  }
}
  // const handleSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault();
  //   if (!valid) return;
  //   const body = `Name: ${form.name}\nCompany: ${form.company || "Not specified"}\nMobile: ${form.mobile}\nEmail: ${form.email || "Not specified"}\n\nRecommended: ${rec?.label}\n\n` + POPUP_QS.map((q, i) => `Q: ${q.q}\nA: ${answers[i] || ""}`).join("\n\n");
  //   window.location.href = `mailto:connect@magsmen.com?subject=${encodeURIComponent("Inquiry from " + form.name)}&body=${encodeURIComponent(body)}`;
  //   setDone(true);
  // };

  const q: PopupQuestion | undefined = POPUP_QS[step];


  return (
    <>
      <style>{`
        .pop-ov {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          display: flex; align-items: center; justify-content: center;
          z-index: 99999; padding: 20px;
          backdrop-filter: blur(5px);
          font-family: system-ui, -apple-system, sans-serif;
        }
        .pop-box {
          background: #ffffff;
          width: 100%; max-width: 1000px;
          height: 650px;
          border-radius: 16px;
          display: flex; flex-direction: row;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
        }
        .pop-image-side {
          flex: 1.2; /* Left side 50% */
          background: #f3f4f6;
          position: relative;
        }
        .pop-image-side img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .pop-content-side {
          flex: 1; /* Right side 50% */
          padding: 3rem;
          display: flex; flex-direction: column;
          overflow-y: auto;
          position: relative;
        }
        .pop-close {
          position: absolute; top: 1.5rem; right: 1.5rem;
          background: #f3f4f6; border: none; border-radius: 50%;
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; cursor: pointer; color: #4b5563;
          z-index: 10; transition: background 0.2s;
        }
        .pop-close:hover { background: #e5e7eb; color: #111827; }
        
        .pop-badge {
          display: inline-block; padding: 6px 12px;
          border: 1px solid #e5e7eb; border-radius: 20px;
          font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.05em; color: #6b7280; margin-bottom: 1rem;
          align-self: flex-start;
        }
        .pop-h { margin: 0 0 0.5rem 0; font-size: 1.75rem; color: #111827; line-height: 1.2; font-weight: 800; }
        .pop-p { color: #6b7280; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.5; }
        
        .pop-prog { display: flex; gap: 8px; margin-bottom: 2rem; }
        .pop-dot { height: 4px; flex: 1; background: #e5e7eb; border-radius: 2px; transition: background 0.3s; }
        .pop-dot.done { background: #111827; }
        
        .iform-opts { display: flex; flex-direction: column; gap: 0.75rem; }
        .iform-opt {
          display: flex; align-items: center; padding: 1rem;
          border: 2px solid #f3f4f6; border-radius: 12px;
          cursor: pointer; transition: all 0.2s ease; background: #fff;
        }
        .iform-opt:hover { border-color: #d1d5db; }
        .iform-opt.sel { border-color: #111827; background: #f9fafb; }
        
        .iform-cb {
          width: 20px; height: 20px; border-radius: 50%;
          border: 2px solid #d1d5db; margin-right: 1rem;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .iform-opt.sel .iform-cb { background: #111827; border-color: #111827; }
        .iform-ot { font-size: 0.95rem; color: #374151; font-weight: 600; line-height: 1.4; }
        
        .bf {
          background: #111827; color: #fff; border: none;
          padding: 1rem; border-radius: 8px; font-weight: 600;
          font-size: 1rem; cursor: pointer; transition: opacity 0.2s;
          margin-top: 2rem; width: 100%;
        }
        .bf:disabled { opacity: 0.4; cursor: not-allowed; }
        
        .pop-skip {
          background: none; border: none; color: #6b7280;
          width: 100%; padding: 1rem 0 0 0; font-size: 0.9rem;
          cursor: pointer; margin-top: 0.5rem;
        }
        .pop-skip:hover { color: #111827; text-decoration: underline; }
        
        .cform-grid { display: flex; flex-direction: column; gap: 1rem; }
        .cfield label { display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.4rem; color: #374151; }
        .cfield.req label::after { content: " *"; color: #ef4444; }
        .cfield input {
          width: 100%; padding: 0.75rem 1rem;
          border: 2px solid #f3f4f6; border-radius: 8px;
          font-size: 1rem; box-sizing: border-box; transition: border-color 0.2s;
        }
        .cfield input:focus { outline: none; border-color: #111827; }
        
        .pop-rec {
          background: #f9fafb; border-left: 4px solid #111827;
          padding: 1.25rem; border-radius: 0 8px 8px 0; margin-top: 1rem;
        }
        .pop-rec-lbl { font-size: 0.75rem; text-transform: uppercase; color: #6b7280; font-weight: 700; letter-spacing: 0.05em; }
        .pop-rec-h { font-size: 1.15rem; font-weight: 700; color: #111827; margin: 0.5rem 0; }
        .pop-rec-p { font-size: 0.9rem; color: #4b5563; margin: 0; line-height: 1.5; }
        
        @media (max-width: 768px) {
          .pop-box { flex-direction: column; height: 90vh; }
          .pop-image-side { display: none; /* Hides image on mobile to save space */ }
          .pop-content-side { padding: 2rem 1.5rem; }
        }
          
      `}</style>

      <div className="pop-ov" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="pop-box">
          
          {/* LEFT COLUMN: Image */}
          <div className="pop-image-side">
            <img 
              src={popupimag2} 
              alt="Office space" className=""
            />
          </div>

          {/* RIGHT COLUMN: Questionnaire / Form */}
          <div className="pop-content-side">
            <button type="button" className="pop-close" onClick={onClose} aria-label="Close">✕</button>
            
            {done ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
                <div style={{ width: 100, height: 64, background: '#10b981', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>✓</div>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', color: '#111827' }}>Details sent.</h3>
                <p style={{ color: '#6b7280', lineHeight: 1.5 }}>Our strategy associate will reach out personally within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {stage === "quiz" ? (
                  <>
                    <div className="pop-badge">Find your starting point</div>
                    <h2 className="pop-h">Four questions to understand your situation</h2>
                    <p className="pop-p">Answer these and we will recommend the right engagement for your business.</p>
                    
                    <div className="pop-prog">
                      {POPUP_QS.map((_, i) => (
                        <div key={i} className={`pop-dot${i <= step ? " done" : ""}`} />
                      ))}
                    </div>
                    
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.75rem" }}>
                        Question {step + 1} of {POPUP_QS.length}
                      </div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.25rem", color: "#111827" }}>
                        {q.q}
                      </div>
                      
                      <div className="iform-opts">
                        {q?.opts?.map((opt, i) => (
                          <div key={i} className={`iform-opt${answers[step] === opt ? " sel" : ""}`} onClick={() => sel(opt)}>
                            <div className="iform-cb">
                              {answers[step] === opt && <span style={{color: '#fff', fontSize: '10px'}}>✓</span>}
                            </div>
                            <span className="iform-ot">{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <button type="button" className="bf" disabled={!answers[step]} onClick={next}>
                        {step < POPUP_QS.length - 1 ? "Next Step →" : "See Recommendation →"}
                      </button>
                      <button type="button" className="pop-skip" onClick={onClose}>Skip and explore the website</button>
                    </div>
                  </>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="pop-badge">Based on your answers</div>
                    <h2 className="pop-h">Our recommendation</h2>
                    
                    <div className="pop-rec">
                      <div className="pop-rec-lbl">Recommended engagement</div>
                      <div className="pop-rec-h">{rec?.label}</div>
                      <p className="pop-rec-p">{rec?.desc}</p>
                    </div>
                    
                    <p style={{ fontSize: "0.95rem", color: "#4b5563", marginTop: "1.5rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                      Leave your details and our strategy associate will reach out personally.
                    </p>
                    
                    <div className="cform-grid" style={{ flexGrow: 1 }}>
                      <div className="cfield req">
                        <label>Full Name</label>
                        <input type="text" placeholder="Your name" value={form.name} onChange={e => upf("name", e.target.value)} required />
                      </div>
                      <div className="cfield req">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" value={form.email} onChange={e => upf("email", e.target.value)} required />
                      </div>
                      <div className="cfield">
                        <label>Company</label>
                        <input type="text" placeholder="Your company" value={form.company} onChange={e => upf("company", e.target.value)} />
                      </div>
                      <div className="cfield req">
                        <label>Mobile</label>
                        <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => upf("mobile", e.target.value)} required />
                      </div>
                    </div>
                    
                    <div>
<button
  type="submit" className="bf"         // ← must be submit
  disabled={!valid || status === "sending"}  // ← prevents multiple clicks
>
  {status === "sending" ? "Sending..." : "Send details and get in touch →"}
</button>
                      <button type="button" className="pop-skip" onClick={onClose}>Explore the website first</button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

interface NavProps { page: string; navigate: (path: string) => void }

function Nav({ page, navigate }: NavProps) {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mob, setMob] = useState<boolean>(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);

  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll",h,{passive:true}); h()
    return () => window.removeEventListener("scroll",h)
  },[])
  const go = (p: string): void => { navigate(p); setMob(false); window.scrollTo({top:0,behavior:"smooth"}) }
  const isA = (...ps: string[]): boolean => ps.some(p => page===p || page.startsWith(p+"/") || page.startsWith(p))
  return (
    <>
      <nav className={scrolled?"scrolled":""}>
        {/* <div style={{marginBottom:".85rem"}}><img src={LOGO} alt="Magsmen" style={{height:40,filter:"invert(1)"}}/></div> */}
        <div className="nav-logo" onClick={()=>go("home")}><img src={LOGO} alt="Magsmen Strategy Consultants"/></div>
        <ul className="nav-links">
          <li className={`nav-item${isA("brand","business","legal","stature")?" active":""}`}>
            <button style={{display:"flex",alignItems:"center",gap:4}}>Solutions <ChevronDown size={12}/></button>
            <div className="nav-drop">
              <a onClick={()=>go("brand")}>
                {/* <span className="drop-icon">🏗️</span> */}
                <div><span className="drop-label">Brand Architecture</span><span className="drop-sub">Positioning, identity, communication</span></div>
              </a>
              <a onClick={()=>go("brand/creation")}>
                {/* <span className="drop-icon">✦</span> */}
                <div><span className="drop-label">Brand Creation</span><span className="drop-sub">13-stage end-to-end engagement</span></div>
              </a>
              <a onClick={()=>go("stature")}>
                {/* <span className="drop-icon">⭐</span> */}
                <div><span className="drop-label">Stature</span><span className="drop-sub">Personal identity architecture</span></div>
              </a>
              <a onClick={()=>go("business")}>
                {/* <span className="drop-icon">📊</span> */}
                <div><span className="drop-label">Business Structuring</span><span className="drop-sub">Operational and revenue frameworks</span></div>
              </a>
              <a onClick={()=>go("legal")}>
                {/* <span className="drop-icon">⚖️</span> */}
                <div><span className="drop-label">Legal Brand Protection</span><span className="drop-sub">Trademark, IP, personality rights</span></div>
              </a>
            </div>
          </li>
          <li className={`nav-item${isA("advisory","otc")?" active":""}`}>
            <button style={{display:"flex",alignItems:"center",gap:4}}>Advisory <ChevronDown size={12}/></button>
            <div className="nav-drop">
              <a onClick={()=>go("advisory")}>
                {/* <span className="drop-icon">🤝</span> */}
                <div><span className="drop-label">Advisory Retainer</span><span className="drop-sub">Monthly strategic counsel</span></div>
              </a>
              <a onClick={()=>go("otc")}>
                {/* <span className="drop-icon">🔍</span> */}
                <div><span className="drop-label">One-Time Consulting</span><span className="drop-sub">Diagnostic engagement</span></div>
              </a>
              <a onClick={()=>go("advisory")}>
                {/* <span className="drop-icon">🏛️</span> */}
                <div><span className="drop-label">Strategic Partner</span><span className="drop-sub">Annual integrated engagement</span></div>
              </a>
            </div>
          </li>
          <li className={`nav-item${page==="engagements"?" active":""}`}><a onClick={()=>go("engagements")}>Engagements</a></li>
          <li className={`nav-item${page === "insights" || page.startsWith("blog/") ? " active" : ""}`}><a onClick={() => go("insights")}>Insights</a></li>
          <li className={`nav-item${page === "about" ? " active" : ""}`}><a onClick={() => go("about")}>About</a></li>
        </ul>
        {/* <button className="nav-ham" onClick={()=>setMob(true)}><Menu size={20}/></button> */}

        <button
          onClick={() => setMob(prev => !prev)}
        >
          {mob ? "✕" : "☰"}
        </button>
        <button className="nav-cta" onClick={() => navigate("contact")}>Talk To Us →</button>
      </nav>
      {mob && (
        <div className="mob-menu">

          <button
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px"
            }}
            onClick={() => setMob(false)}
          >
            ✕
          </button>

    {/* <div style={{marginBottom:"2rem"}}>
      <img src={LOGO} alt="" style={{height:22}}/>
    </div> */}

    {/* ================= SOLUTIONS ================= */}

    <div
      className="mob-dropdown"
      onClick={() => setSolutionsOpen(!solutionsOpen)}
    >
      <span className="mob-sublabel">Solutions</span>

      <span className={solutionsOpen ? "rotate" : ""}>
        ▼
      </span>
    </div>

    {solutionsOpen && (
      <>
        <a className="mob-sub" onClick={() => go("brand")}>
          Brand Architecture
        </a>

        <a className="mob-sub" onClick={() => go("brand/creation")}>
          Brand Creation
        </a>

        <a className="mob-sub" onClick={() => go("stature")}>
          Stature
        </a>

        <a className="mob-sub" onClick={() => go("business")}>
          Business Structuring
        </a>

        <a className="mob-sub" onClick={() => go("legal")}>
          Legal Brand Protection
        </a>
      </>
    )}

    {/* ================= ADVISORY ================= */}

    <div
      className="mob-dropdown"
      onClick={() => setAdvisoryOpen(!advisoryOpen)}
    >
      <span className="mob-link">Advisory</span>

      <span className={advisoryOpen ? "rotate" : ""}>
        ▼
      </span>
    </div>

    {advisoryOpen && (
      <>
       <a className="mob-sub" onClick={() => go("retainer")}>
      Retainer Advisory
    </a>

    <a className="mob-sub" onClick={() => go("growth")}>
      Growth Advisory
    </a>

    <a className="mob-sub" onClick={() => go("strategy")}>
      Business Strategy
    </a>
      </>
    )}

    {/* ================= NORMAL LINKS ================= */}

    <a className="mob-link" onClick={() => go("engagements")}>
      Engagements
    </a>

    <a className="mob-link" onClick={() => go("insights")}>
      Insights
    </a>

    <a className="mob-link" onClick={() => go("about")}>
      About
    </a>

    <a className="mob-link" onClick={() => go("contact")}>
      Contact
    </a>

    <a className="mob-link" onClick={() => go("faq")}>
      FAQ
    </a>

    <button
      className="nav-cta"
      onClick={() => navigate("contact")}
    >
      Talk To Us →
    </button>

  </div>
      )}
    </>
  )
}

interface NavigationPath {
  path: string;
}

interface ScrollBehaviorOptions {
  top: number;
  behavior: ScrollBehavior;
}

function Footer({ navigate }: { navigate: (path: string) => void }) {
  const go = (p: string): void => { navigate(p); window.scrollTo({top:0,behavior:"smooth"} as ScrollBehaviorOptions) }
  return (
    <footer>
      <div className="fi">
        <div className="f-grid">
          <div>
            <div style={{marginBottom:".85rem"}}><img src={LOGO} alt="Magsmen" style={{height:20,filter:"invert(1)"}}/></div>
            {/* <div className="f-tag">Magsmen Strategy Consultants</div> */}
            <p className="f-desc">Integrated strategy consulting across brand architecture, business structuring, and legal brand protection. Rooted in Andhra Pradesh and Telangana.</p>
            <div className="f-cert">
              <span>ASCI Member</span><span>Enrolled Advocate</span>
              <span>TEDx Speaker</span><span>Consultant of the Year 2023</span>
            </div>
          </div>
          <div>
            <div className="fh">Solutions</div>
            <ul className="f-ul">
              <li><a onClick={()=>go("brand")}>Brand Architecture</a></li>
              <li><a onClick={()=>go("brand/creation")}>Brand Creation</a></li>
              <li><a onClick={()=>go("stature")}>Stature</a></li>
              <li><a onClick={()=>go("business")}>Business Structuring</a></li>
              <li><a onClick={()=>go("legal")}>Legal Brand Protection</a></li>
            </ul>
          </div>
          <div>
            <div className="fh">Advisory</div>
            <ul className="f-ul">
              <li><a onClick={()=>go("otc")}>One-Time Consulting</a></li>
              <li><a onClick={()=>go("advisory")}>Brand Advisory Retainer</a></li>
              <li><a onClick={()=>go("advisory")}>Strategic Partner</a></li>
            </ul>
          </div>
          <div>
            <div className="fh">Firm</div>
            <ul className="f-ul">
              <li><a onClick={()=>go("about")}>About Us</a></li>
              <li><a onClick={()=>go("engagements")}>Engagements</a></li>
              <li><a onClick={()=>go("insights")}>Insights</a></li>
              <li><a onClick={()=>go("faq")}>FAQ</a></li>
              <li><a onClick={()=>go("careers")}>Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="fh">Contact</div>
            <ul className="f-ul">
              <li><a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a></li>
              <li><a href="mailto:connect@magsmen.com">connect@magsmen.com</a></li>
              <li><a href="tel:+919044910449">+91 90449 10449</a></li>
              <li><a href="https://wa.me/919044910449" target="_blank">WhatsApp</a></li>
              <li><a>Guntur, Andhra Pradesh</a></li>
            </ul>
            <div className="fh" style={{marginTop:"2rem"}}>Legal</div>
            <ul className="f-ul">
              <li><a onClick={()=>go("privacy")}>Privacy Policy</a></li>
              <li><a onClick={()=>go("terms")}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="f-bot">
          <div className="f-copy">© 2020 Magsmen Strategy Consultants · Grofessors Innovations Pvt Ltd · Guntur, Andhra Pradesh</div>
          <div className="f-copy">Brand Architecture · Business Structuring · Legal Brand Protection</div>
        </div>
      </div>
    </footer>
  )
}

// ─── HOME ──────────────────────────────────────────────────────────────────────
function Home({ navigate }: { navigate: (path: string) => void }) {
  const ref = useRef(null)
  useReveal(ref)
  useTimelineReveal(ref)
  return (
    <div ref={ref} className="pg page-anim">
      <div className="hero">
        <div className="hero-noise"/>
        <div className="hero-inner">
          <div className="hero-tag">Magsmen Strategy Consultants</div>
          <StatementHero/>
          <p style={{fontSize:"1.05rem",fontWeight:300,color:"rgba(255,255,255,.45)",maxWidth:520,lineHeight:1.9,marginBottom:"2rem"}}>
              Integrated strategy for founders building brands that outlast them.
            </p>
            <div style={{overflow:"hidden",marginBottom:"3rem",marginLeft:"-56px",paddingLeft:"56px"}}>
              <div style={{display:"flex",gap:"2.5rem",animation:"cbscroll 28s linear infinite",width:"max-content",paddingBottom:"4px"}}>
                {["FMCG","Real Estate","Healthcare","Media","Technology","Agriculture","Government","Retail","Education","Professional Services","Manufacturing","Financial Services","FMCG","Real Estate","Healthcare","Media","Technology","Agriculture","Government","Retail","Education","Professional Services","Manufacturing","Financial Services"].map((s,i)=>(
                  <span key={i} style={{fontSize:"11px",fontWeight:700,letterSpacing:".16em",textTransform:"uppercase",color:"rgba(255,255,255,.6)",whiteSpace:"nowrap"}}>{s}</span>
                ))}
              </div>
            </div>
          <div className="brow">
            <a className="bf inv" href="mailto:connect@magsmen.com?subject=I want to discuss my situation">Talk about your situation →</a>
            <button className="bo wh" onClick={()=>navigate("advisory")}>Explore our engagement models</button>
          </div>
          <div className="hero-stats rv">
            <div className="hs"><span className="hs-n"><Counter target="50+"/></span><span className="hs-l">Brands Architected</span></div>
            <div className="hs"><span className="hs-n"><Counter target="8+"/></span><span className="hs-l">Years in Practice</span></div>
            <div className="hs"><span className="hs-n"><Counter target="200M+"/></span><span className="hs-l">Platform Views</span></div>
            <div className="hs"><span className="hs-n"><Counter target="100+"/></span><span className="hs-l">Speeches Delivered</span></div>
          </div>
        </div>
      </div>

      <MediaStrip/>
      <ClientBar/>
      <TestimonialsBar/>

      {/* Editorial break */}
      <div className="break-stmt rv">
        <div className="break-stmt-inner">
          <div className="break-stmt-text">
            <span className="thin">Most founders know something is not working. </span>
            <span className="heavy">They cannot name it precisely. </span>
            <span className="italic">That precision is what strategy consulting delivers.</span>
          </div>
        </div>
      </div>

      {/* Three disciplines */}
      <div className="sec">
        <div className="si">
          <div className="lbl rv">What We Do</div>
          <h2 className="h2 rv">One firm. <span className="t300i">Three disciplines.</span> No referrals.</h2>
          <p className="lead rv" style={{marginBottom:"2.5rem",marginTop:".5rem"}}>
            Brand architecture, business structuring, and legal brand protection addressed within one engagement because decisions in each area affect the other two.
          </p>
          <div className="g3">
            {[
              {n:"01",h:"Brand Architecture",d:"Strategic positioning, identity systems, Stature, and communication design for a brand that compounds in value over time. Each service is a complete engagement in its own right.",p:"brand",ul:["Brand Audit","Brand Positioning Strategy","Brand Identity Architecture","Brand Creation (13 stages)","Stature"]},
              {n:"02",h:"Business Structuring",d:"Operational and commercial frameworks designed around the brand's strategic direction. Growth that does not require the founder at every decision.",p:"business",ul:["Business Model Review","Operational Framework Design","Revenue Architecture","Growth System Design","Succession Planning"]},
              {n:"03",h:"Legal Brand Protection",d:"Trademark registration, personality rights, patent commercialisation, ASCI compliance, and brand-adjacent legal advisory within the same engagement.",p:"legal",ul:["Trademark Registration","Personality Rights Advisory","Patent Commercialisation","Annual Legal Advisory","ASCI Compliance"]},
            ].map((c,i)=>(
              <div key={i} className={`sc rv d${i}`} style={{cursor:"pointer"}} onClick={()=>navigate(c.p)}>
                <div className="sc-n">{c.n}</div>
                <div className="sc-h">{c.h}</div>
                <p className="sc-d">{c.d}</p>
                <ul className="sc-ul">{c.ul.map((u,j)=><li key={j}>{u}</li>)}</ul>
                <div className="sc-arrow">Explore in detail <ArrowRight size={13}/></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligent Council — chairman anxiety answered on homepage */}
      <div className="sec sec-dark">
        <div className="si">
          <div className="lbl wh rv">The Magsmen Intelligent Council</div>
          <h2 className="h2 wh rv">You are not engaging one consultant. <span style={{fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.38)"}}>You are engaging a coordinated advisory system.</span></h2>
          <p className="lead wh rv t300" style={{marginTop:".5rem",marginBottom:"3rem"}}>
            The Intelligent Council is a curated multi-disciplinary panel assembled for each engagement. Legal advisors, financial analysts, sector specialists, technology consultants, and crisis management practitioners operating within the same strategic framework as the principal engagement.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"1.5rem"}} className="rv">
            {[
              {n:"Financial Structuring and Investment Readiness",p:"When the engagement intersects with capital structure, investor narrative, or valuation, a financial specialist is embedded. Not referred. Embedded."},
              {n:"Sector Intelligence and Competitive Research",p:"For categories requiring deep sector knowledge — FMCG, real estate, healthcare, media — a practitioner with direct sector experience joins the engagement."},
              {n:"Legal Specialist Counsel",p:"When brand protection requires litigation strategy, contractual complexity, or regulatory navigation beyond standard IP filing, a specialist advocate is brought in within the same engagement structure."},
              {n:"Crisis Management and Media Relations",p:"For Stature engagements and high-visibility brand situations, a crisis communication specialist is available within 24 hours of a mandate being triggered."},
            ].map((c,i)=>(
              <div key={i} style={{display:"flex",gap:"1.5rem",alignItems:"flex-start",borderLeft:"2px solid rgba(255,255,255,.12)",paddingLeft:"1.5rem"}}>
                <div>
                  <div style={{fontSize:"13px",fontWeight:700,color:"#FFF",marginBottom:".4rem"}}>{c.n}</div>
                  <p style={{fontSize:".9rem",color:"rgba(255,255,255,.45)",lineHeight:1.85,fontWeight:300}}>{c.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:"3rem",padding:"2rem 2.5rem",background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:7}} className="rv">
            <p style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.45)",lineHeight:1.85}}>
              "The Council is convened within the client engagement. It is the structural difference between a boutique consultant and an integrated advisory firm. When your situation requires financial structuring, technology architecture, crisis management, or sector-specific intelligence, the Council is how that expertise enters your engagement without you having to source it independently."
            </p>
          </div>
          <div className="brow rv">
            <button className="bf inv" onClick={()=>navigate("advisory")}>See how advisory works →</button>
          </div>
        </div>
      </div>

      {/* Featured Insight */}
      <div className="sec sec-alt">
        <div className="si">
          <div className="lbl rv">Featured Insight</div>
          <h2 className="h2 rv">Thinking that changes how you make decisions.</h2>
          <div className="insight-feat rv" style={{ cursor: "pointer" }} onClick={() => navigate("blog/brand-economic-asset")}>
            <div className="if-thumb">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
              />
            </div>
            <div>
              <div className="if-cat">Brand Strategy</div>
              <div className="if-title">Why Is My Business Not Growing in Andhra Pradesh.</div>
              <p className="if-excerpt">Most Indian founders treat brand as an expense. That framing is the root cause of why they can never stop spending on advertising.</p>
              <div className="if-meta">16 JUNE 2026 · 6 min read</div>
              <div style={{marginTop:"1.25rem",fontSize:"13px",fontWeight:700,display:"flex",alignItems:"center",gap:6}}>Read the full insight <ArrowRight size={13}/></div>
            </div>
          </div>
          <div className="blog-grid" style={{marginTop:"2.5rem"}}>
            {BLOGS.slice(1,4).map((b,i)=>(
              <div key={i} className={`blog-card rv d${i}`} onClick={()=>navigate("blog/"+b.id)}>
                <div className="blog-img">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="blog-image"
                  />
                </div>
                <div className="blog-body">
                  <div className="blog-cat">{b.cat}</div>
                  <div className="blog-title">{b.title}</div>
                  <div className="blog-excerpt">{b.excerpt}</div>
                  <div className="blog-meta">{b.date} · {b.rt}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"2.5rem"}} className="rv">
            <button className="bo dk" onClick={()=>navigate("insights")}>All insights →</button>
          </div>
        </div>
      </div>

      {/* How we work */}
      <div className="sec">
        <div className="si">
          <div className="lbl rv">What Happens Next</div>
          <h2 className="h2 rv">Here is exactly what happens <span className="t300i">after you reach out.</span></h2>
          <p className="lead rv t300" style={{marginBottom:"2.5rem",marginTop:".5rem"}}>No ambiguity. No waiting to find out how this works.</p>
          {[
            {n:"01",h:"We review your details within 24 hours",p:"Our strategy associate reviews the information you submit and reaches out by phone or WhatsApp. Not by email. Not by automated sequence. A direct call from the team."},
            {n:"02",h:"A brief conversation about your situation",p:"Fifteen to twenty minutes. We listen first. No pitch. No agenda other than understanding what is happening in your business and whether we are the right fit."},
            {n:"03",h:"We recommend the right engagement structure",p:"Based on the conversation, we tell you honestly what the right starting point is. This could be a diagnostic session, a project engagement, or an advisory retainer. The recommendation will be specific."},
            {n:"04",h:"Agreement sent and session scheduled",p:"A clean Consulting Engagement Agreement with a defined scope, fixed fee, and clear deliverables. The discovery session is scheduled within the first week."},
            {n:"05",h:"Delivery within the agreed timeline",p:"Every engagement has a defined timeline documented in the agreement. There are no open-ended timelines at Magsmen."},
          ].map((h,i)=>(
            <div key={i} className="hww-item rv">
              <div className="hww-n">{h.n}</div>
              <div><div className="hww-h">{h.h}</div><p className="hww-p">{h.p}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis */}
      <div className="sec sec-dark">
        <div className="si">
          <div className="crisis rv">
            <div>
              <div className="lbl wh" style={{marginBottom:"1.5rem"}}>Is Your Brand in Trouble?</div>
              <div className="crisis-h">If something is already wrong, <span className="t300i">start here.</span></div>
              <p className="crisis-p" style={{marginBottom:"1.5rem"}}>Many founders come to Magsmen not in planning mode but in crisis mode. A competitor has taken market share. A trademark dispute has emerged. A key product has failed publicly. The advisory relationship is most valuable when the situation is most urgent.</p>
              <a className="bf inv" onClick={()=>navigate("contact")} style={{cursor:"pointer"}}>Start the conversation →</a>
            </div>
            <div>
              <div style={{fontSize:"11px",fontWeight:300,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.6)",marginBottom:"1.25rem"}}>Situations we address urgently</div>
              <div className="crisis-items">
                {["A competitor using a similar name or mark","A trademark dispute or cease and desist received","A franchise conversation stalling over IP issues","A brand reputation issue requiring immediate response","A business succession creating brand confusion","A marketing spend producing no measurable result","A product launch that did not land as expected"].map((c,i)=>(
                  <div key={i} className="crisis-item">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial break 2 */}
      <div className="break-stmt rv">
        <div className="break-stmt-inner">
          <div className="break-stmt-text">
            <span className="heavy">Structure is not a constraint on growth. </span>
            <span className="thin">It is the thing that </span>
            <span className="heavy">makes growth sustainable.</span>
          </div>
        </div>
      </div>


      {/* FAQ */}
      <div className="sec sec-alt">
        <div className="si">
          <div className="lbl rv">Frequently Asked Questions</div>
          <h2 className="h2 rv">Questions most founders have <span className="t300i">before the first conversation.</span></h2>
          <div className="rv" style={{marginTop:"2.5rem"}}><FAQSection items={FAQS.slice(0,5)}/></div>
          <div style={{marginTop:"2rem"}} className="rv">
            <button className="bo dk" onClick={()=>navigate("faq")}>All questions →</button>
          </div>
        </div>
      </div>

      {/* Telugu */}
      <div style={{background:"#0A0A0A",padding:"2rem 56px",textAlign:"center"}}>
        <div style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.6)",marginBottom:".35rem"}}>
          "Mana brand strong ga undali ante, first ga mana foundation strong ga undali."
        </div>
        <div style={{fontSize:".85rem",fontWeight:300,color:"rgba(255,255,255,.6)"}}>For our brand to be strong, first our foundation must be strong.</div>
      </div>

      {/* CTA */}
      <div className="sec">
        <div className="si">
          <div className="ctabox rv">
            <div className="ctabox-h">
              The conversation that changes<br/>
              <span className="t300i">how you think about your brand</span><br/>
              starts here.
            </div>
            <p className="ctabox-p">Our strategy associate will reach out personally within 24 hours. No pitch. No pressure. A direct conversation about your situation.</p>
            <div className="ctabox-row">
              <button className="bf" onClick={()=>navigate("contact")}>Start the conversation →</button>
              <a className="bo dk" href="https://wa.me/919044910449?text=Hi, I want to discuss my brand situation" target="_blank">💬 WhatsApp us</a>
              <a className="bo dk" href="tel:+919044910449">+91 90449 10449</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function BrandPage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">01 · Brand Architecture</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2rem,5vw,4.5rem)",fontWeight:900,color:"#FFF",lineHeight:1.02,letterSpacing:"-.04em",marginBottom:".5rem"}}>Six practice areas.</div>
<div style={{fontSize:"clamp(1.5rem,4vw,3.5rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.35)",lineHeight:1.05,letterSpacing:"-.02em"}}>Each a complete engagement.</div>
</div>
<p className="hero-lead">Brand Audit. Brand Positioning. Brand Identity. Brand Communication. Brand Creation. Brand Express. Each service is its own engagement with its own scope, process, and deliverables.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Discuss your brand situation →</button></div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">Six Practice Areas</div>
<h2 className="h2 rv">Understand what you need before you commit <span className="t300i">to how long it takes.</span></h2>
<p className="lead rv t300" style={{marginBottom:"2.5rem",marginTop:".5rem"}}>A founder may need only a Brand Audit to understand what is wrong. Or they may need Brand Creation from the ground up. Each practice area has a defined scope. Click any to read the full process and deliverables.</p>
<div className="g3">
{[
{id:"brand/audit",n:"01",h:"Brand Audit",d:"A structured diagnostic of the brand's current state across five pillars: Legal, Brand, Business, Operations, and Team. The starting point for any brand engagement.",time:"3 to 4 weeks"},
{id:"brand/positioning",n:"02",h:"Brand Positioning Strategy",d:"Defining what the brand stands for, for whom, and against which alternatives. Category analysis, audience architecture, competitive mapping, positioning statement, and message ladder.",time:"6 to 8 weeks"},
{id:"brand/identity",n:"03",h:"Brand Identity Architecture",d:"Brand naming through four rounds with trademark screening. Logo system, typography, colour, and sub-brand architecture. Legally defensible from day one.",time:"8 to 12 weeks"},
{id:"brand/communication",n:"04",h:"Brand Communication Framework",d:"Message hierarchy, tone of voice, channel-specific guidance, and a team communication brief so every person who produces anything on behalf of the brand has a shared reference point.",time:"4 to 6 weeks"},
{id:"brand/creation",n:"05",h:"Brand Creation",d:"End-to-end brand building through the 13-stage Magsmen framework. From founder intent mapping through post-launch strategic audit. The most comprehensive engagement we offer.",time:"16 to 20 weeks"},
{id:"brand/express",n:"06",h:"Brand Express",d:"Rapid-format brand direction in two focused sessions. For businesses with an urgent brand decision and a compressed timeline. Trademark screening included.",time:"30 to 45 days"},
].map((s,i)=>(
<div key={i} className={`sc rv d${i%3}`} style={{cursor:"pointer"}} onClick={()=>navigate(s.id)}>
<div className="sc-n">{s.n}</div>
<div className="sc-h">{s.h}</div>
<p className="sc-d">{s.d}</p>
<div style={{fontSize:"11px",fontWeight:700,color:"#CCC",marginTop:"1.25rem",letterSpacing:".06em",textTransform:"uppercase"}}>{s.time}</div>
<div className="sc-arrow">Full scope and process <ArrowRight size={13}/></div>
</div>
))}
</div>
</div></div>
<div style={{background:"#0A0A0A",padding:"100px 56px"}}><div className="si">
<div className="stature-tag">Stature by Magsmen</div>
<h2 className="stature-h" style={{marginBottom:"1rem"}}>Where Influence<br/>Becomes Identity.</h2>
<p style={{fontSize:"1rem",color:"rgba(255,255,255,.45)",lineHeight:1.95,maxWidth:640,fontWeight:300,marginBottom:"2rem"}}>The strategic architecture of an individual's professional identity, reputation, and public standing. Not personal branding. The structural work behind what people decide about you before the conversation begins.</p>
<button className="bf inv" onClick={()=>navigate("stature")}>Explore Stature →</button>
</div></div>
<div className="sec sec-alt"><div className="si">
<InlineForm title="Which practice area is right for you?" sub="Your answers help our strategy associate prepare for the first conversation."
questions={[
{q:"What is the current state of your brand?",opts:["We have no defined brand yet","Our brand exists but needs repositioning","We need to audit what we have built","We need naming and identity for a new venture"]},
{q:"What is your most urgent need?",opts:["Understanding what is wrong with the brand","Naming and building a brand identity","Defining our positioning and communication","A complete brand creation from the beginning"]},
{q:"What is your timeline?",opts:["Very urgent within 30 days","2 to 3 months","Planning ahead for 6 months","No fixed timeline exploring"]},
]}/>
</div></div>
</div>)}

function BrandAuditPage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120,background:"#F8F8F8"}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl rv">Brand Audit</div>
<h1 className="h1 rv">A diagnosis before <span className="t300i">a direction.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>A brand audit is a structured investigation of the gap between where your brand is in the market and where you believe it to be. Most founders are surprised by what the audit reveals. The problem they came in describing is rarely the root cause.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("contact")}>Request a Brand Audit →</button><button className="bo dk" onClick={()=>navigate("otc")}>Start with OTC first</button></div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">The Five-Pillar Framework</div>
<h2 className="h2 rv">Every business audited across <span className="t300i">five dimensions.</span></h2>
<p className="lead rv t300" style={{marginTop:".5rem",marginBottom:"2.5rem"}}>The five-pillar framework ensures the consulting team evaluates the entire business system, not just the area the founder is most concerned about. The symptom the founder describes is rarely the root cause of what is limiting growth.</p>
<div className="g3">
{[
{n:"Pillar 1",h:"Legal",p:"Trademark status across relevant classes. IP asset protection completeness. Regulatory license compliance for the category. Packaging and labelling compliance with FSSAI, BIS, and category standards. Distributor and supplier agreement formalisation. ASCI compliance in advertising communications.",ul:["Trademark availability and filing status","IP portfolio completeness","Regulatory and licence compliance","Packaging compliance review","Contract formalisation status"]},
{n:"Pillar 2",h:"Brand",p:"Positioning clarity and market differentiation. Visual identity coherence, consistency, and recall. Communication consistency across all channels and team members. Brand perception gap between intended positioning and actual market perception. Competitive positioning relative to category peers.",ul:["Positioning statement clarity","Visual identity consistency audit","Communication consistency review","Brand perception mapping","Competitive differentiation analysis"]},
{n:"Pillar 3",h:"Business",p:"Revenue model sustainability and pricing strategy alignment with positioning. Cost structure relative to category peers. Growth economics and unit economics clarity. Channel strategy and distribution structure robustness.",ul:["Revenue model review","Pricing strategy alignment","Unit economics analysis","Channel and distribution audit","Growth model evaluation"]},
{n:"Pillar 4",h:"Operations",p:"Production or service delivery capacity relative to brand promise. Operational consistency and quality control systems. Supply chain robustness. Customer experience delivery against brand positioning standards.",ul:["Delivery capacity vs brand promise","Quality control systems","Supply chain assessment","Customer experience audit","Operational consistency"]},
{n:"Pillar 5",h:"Team",p:"Organisational structure clarity. Role definition and accountability systems. Founder dependency and succession readiness. Internal brand alignment across team members. Key person risk assessment.",ul:["Org structure and role clarity","Founder dependency analysis","Internal brand alignment","Key person risk","Succession readiness"]},
].map((c,i)=>(
<div key={i} className={`pillar-item rv d${i%3}`}>
<div className="pillar-n">{c.n}</div>
<div className="pillar-h">{c.h}</div>
<p className="pillar-p">{c.p}</p>
<ul className="pillar-ul">{c.ul.map((u,j)=><li key={j}>{u}</li>)}</ul>
</div>
))}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Three-Phase Process</div>
<h2 className="h2 rv">Discovery. Analysis. Report.</h2>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{[
{phase:"Phase 1 · Days 1 to 3",h:"Ground-Level Discovery",p:"Founder interview conducted as a directed conversation, not an interrogation. The exact language the founder uses is recorded. Team interviews with key operational and sales staff. Review of all existing brand materials including logo files, communication samples, website, and packaging. Distributor and customer feedback reviewed where accessible. The research analyst completes competitive intelligence review before the session begins.",d:.0},
{phase:"Phase 2 · Days 4 to 10",h:"Five-Pillar Analysis",p:"Systematic audit across all five pillars using findings from discovery. Legal pillar reviewed against the Magsmen IP checklist. Brand pillar reviewed against positioning clarity framework and visual identity standards. Business pillar reviewed against category peer benchmarks. Operations and team pillars reviewed against brand delivery requirements. All findings documented with evidence, not assumption.",d:.1},
{phase:"Phase 3 · Days 11 to 14",h:"Synthesis and Report",p:"Primary constraint identified and stated in one plain-language sentence. The primary constraint is the single pillar weakness creating the most significant resistance to growth. Secondary constraint documented. Brand Health Index scored across all five pillars. Strategic direction summary written. Priority action roadmap structured for the next 90 days.",d:.2},
].map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{i+1}</div>
<div><div className="tl-phase">{s.phase}</div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.p}</div></div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">Deliverables</div>
<h2 className="h2 rv">Four written outputs. <span className="t300i">Specific, not generic.</span></h2>
<div className="g2">
{[
{t:"Primary Deliverable",h:"Brand Health Index Report",p:"A structured document scoring the brand across five pillars with evidence-based findings. The primary constraint clearly stated in one sentence. The secondary constraint noted. Not a presentation of general observations. A document the founder can act on independently."},
{t:"Strategic Output",h:"Perception Gap Analysis",p:"Where the brand is actually perceived in the market versus where the founder believes it is positioned. The gap between these two is the strategic distance the brand needs to travel."},
{t:"Action Output",h:"90-Day Priority Action Plan",p:"Specific, sequenced actions for the next quarter. The first action to take, the second, the third. Not a long list of recommendations. A prioritised sequence with clear rationale for the ordering."},
{t:"Recommendation",h:"Recommended Next Engagement",p:"If further engagement is warranted, the specific practice area recommended with defined scope and rationale. If no further engagement is needed, the report says so directly."},
].map((d,i)=><div key={i} className={`del-card rv d${i%2}`}><div className="del-tag">{d.t}</div><div className="del-h">{d.h}</div><p className="del-p">{d.p}</p></div>)}
</div>
<div className="qblock rv" style={{marginTop:"3rem"}}>
<div className="qblock-text">The purpose of the audit is not to score the business. It is to identify the pillar that is creating the most significant constraint on growth. <strong>Without the audit, every recommendation is a guess.</strong></div>
<div className="qblock-attr">From the Magsmen OTC Operating Manual</div>
</div>
<div className="ctabox rv" style={{marginTop:"3rem"}}>
<div className="ctabox-h">Understand your brand before you spend more on it.</div>
<p className="ctabox-p">Our strategy associate will reach out personally within 24 hours.</p>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Request a Brand Audit →</button><a className="bo dk" href="https://wa.me/919044910449" target="_blank">💬 Ask a question</a></div>
</div>
</div></div>
</div>)}

function BrandCreationPage({navigate}: {navigate: (page: string) => void}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);const stages=[
{p:"Stage 01",h:"Discovery and Founder Intent Mapping",t:"The most strategically consequential session in the engagement. The quality of the strategy that emerges in Stage 04 is determined directly by the quality of information extracted here. The Lead Strategist conducts the session. The exact language the founder uses is recorded. The Research Analyst reviews all public information before the session. Discovery is a directed conversation, not an interrogation.",d:.0},
{p:"Stage 02",h:"Market and Category Intelligence",t:"Full competitive landscape mapping. Category definition and sizing. Customer segment analysis with demographic and psychographic profiling. Pricing landscape review. Trend analysis for the category over three to five years. Identification of whitespace positions where competition is absent or weak.",d:.04},
{p:"Stage 03",h:"Business Feasibility Validation",t:"Confirming the positioning identified in Stage 04 can be operationally supported before the strategy is committed to. Production capacity verification. Pricing feasibility against cost structure. Distribution channel viability. Regulatory compliance assessment for the category.",d:.04},
{p:"Stage 04",h:"Strategic Positioning Development",t:"Where the brand stands in the market, stated with precision. The positioning defines the category, the target audience, the differentiation claim, and the proof architecture. A positioning that cannot be stated in one clear sentence is not complete. The Founder of Magsmen reviews all positioning documents before client presentation.",d:.04},
{p:"Stage 05",h:"Product and Value Architecture",t:"Aligning every product and service decision with the positioning defined in Stage 04. SKU architecture for product brands. Service tier design for service businesses. Naming conventions for the portfolio. Pricing architecture across tiers.",d:.04},
{p:"Stage 06",h:"Strategic Alignment Presentation",t:"A formal presentation of all strategy findings to the client before identity work begins. The client confirms the strategy in writing. Identity development does not begin until written confirmation is received. This gate prevents the most expensive mistake in brand creation: building an identity on a strategy the client has not genuinely committed to.",d:.04},
{p:"Stage 07",h:"Brand Identity Development",t:"Brand naming through four rounds with 15 candidate names per round, each evaluated against trademark availability, phonetic suitability, memorability, strategic alignment, and domain availability. Logo system development. Typography system. Colour system with usage rules. The Founder reviews all identity concepts before client presentation.",d:.04},
{p:"Stage 08",h:"Legal and IP Review",t:"Trademark searches across all relevant classes. Prior registration conflict identification. Filing strategy recommendation. ASCI compliance review of all proposed communications. Regulatory compliance check for packaging. This stage runs in parallel with identity development, not after it.",d:.04},
{p:"Stage 09",h:"Brand Communication Architecture",t:"How the brand speaks and where. Core message hierarchy. Tone of voice character with vocabulary guidance. Channel-specific communication guidelines. Content framework defining what the brand publishes, at what frequency, and why.",d:.04},
{p:"Stage 10",h:"Operational Readiness Review",t:"Confirming the business can deliver what the brand has promised before market communication begins. Production quality standards confirmed. Customer service protocols reviewed. Supply chain resilience verified. Digital infrastructure reviewed.",d:.04},
{p:"Stage 11",h:"Internal Brand Alignment",t:"Training the client's team to represent the brand consistently before market entry. Brand orientation session for all team members. Role-specific brand training for customer-facing staff. Internal brand guidelines document handed over.",d:.04},
{p:"Stage 12",h:"Launch Strategy Planning",t:"Market entry plan with three phases: pre-launch, launch week, and post-launch. Channel selection rationale. Campaign sequencing. Influencer and partnership brief. Budget allocation framework. Launch performance benchmarks defined and documented. The Founder reviews and approves the launch strategy.",d:.04},
{p:"Stage 13",h:"Post-Launch Strategic Audits",t:"Three review cycles over two quarters post-launch. Reviews at 6 weeks, 12 weeks, and 24 weeks. Each review covers performance against benchmarks, customer perception analysis, communication effectiveness review, and strategic adjustment recommendations.",d:.04},
];
return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120,background:"#0A0A0A"}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl wh rv">Brand Creation</div>
<h1 className="h1 wh rv">Thirteen stages. <span style={{fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.35)"}}>One brand that endures.</span></h1>
<p className="lead wh rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>The Magsmen 13-stage Brand Creation framework covers every dimension of brand building from the first conversation with the founder to the post-launch strategic audit. Not a single stage is optional.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Begin Brand Creation →</button></div>
<div style={{marginTop:"3.5rem",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1.5rem",borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:"3rem"}} className="rv">
{[{n:"13",u:"Stages",l:"No stage skipped"},{n:"16 to 20",u:"Weeks",l:"Full timeline"},{n:"5",u:"Team roles",l:"Per engagement"},{n:"3",u:"Founder reviews",l:"Stages 4, 7, and 12"}].map((s,i)=>(
<div key={i} style={{borderLeft:"1.5px solid rgba(255,255,255,.1)",paddingLeft:"1.5rem"}}>
<div style={{fontSize:"clamp(1.6rem,3.5vw,2.4rem)",fontWeight:900,color:"#FFF",letterSpacing:"-.04em",lineHeight:1}}>{s.n} <span style={{fontSize:".55em",fontWeight:200,opacity:.4}}>{s.u}</span></div>
<div style={{fontSize:"11px",fontWeight:300,color:"rgba(255,255,255,.28)",marginTop:4,letterSpacing:".06em",textTransform:"uppercase"}}>{s.l}</div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">The 13-Stage Framework</div>
<h2 className="h2 rv">Every stage has a gate. <span className="t300i">No gate is optional.</span></h2>
<p className="lead rv t300" style={{marginTop:".5rem",marginBottom:"2.5rem"}}>The quality of every brand Magsmen creates is a direct function of the discipline with which this framework is applied. When stages are compressed or gates are skipped, the resulting strategy will not hold under market pressure.</p>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{stages.map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{String(i+1).padStart(2,"0")}</div>
<div><div className="tl-phase">{s.p}</div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.t}</div></div>
</div>
))}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">Build it once. <span className="t300i">Build it right.</span></div>
<p className="ctabox-p">The most comprehensive engagement Magsmen offers. Built for founders who want a brand that outlasts them.</p>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Begin Brand Creation →</button></div>
</div>
</div></div>
</div>)}

function BrandPositioningPage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl rv">Brand Positioning Strategy</div>
<h1 className="h1 rv">What the brand stands for. <span className="t300i">In one sentence.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>Positioning is the strategic claim the brand makes in the mind of its customer. Not a tagline. Not a mission statement. A precise, defensible, and differentiated claim about what the brand is and who it is for.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("contact")}>Discuss brand positioning →</button></div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Scope of Activities</div>
<h2 className="h2 rv">Six activities. <span className="t300i">Six to eight weeks.</span></h2>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{[
{h:"Category Analysis",p:"Defining the category the brand competes in and whether that is the right category. Brands often underperform because they are competing in a category that does not align with their actual value or where competition makes differentiation structurally difficult.",d:.0},
{h:"Audience Architecture",p:"Defining the primary customer with specificity: not demographics alone, but the specific tension, aspiration, and decision context that brings this customer to the category. Defining the secondary customer and the anti-customer. The anti-customer is as important as the primary. Knowing who you are not for is part of positioning clarity.",d:.06},
{h:"Competitive Positioning Map",p:"Plotting competitors across two or three positioning axes to identify where differentiation exists and where the market is overcrowded. The positioning territory chosen must be genuinely unoccupied or occupiable. A positioned brand is not trying to serve everyone.",d:.06},
{h:"Positioning Statement Development",p:"The brand's strategic territory stated in one sentence. This sentence defines the category, the target audience, the differentiation claim, and the reason to believe. A positioning statement that requires explanation is not yet complete.",d:.06},
{h:"Proof Architecture",p:"The evidence that substantiates the positioning claim. Every positioning claim must be provable. The proof architecture documents the specific product features, service elements, and operational standards that make the claim credible.",d:.06},
{h:"Message Ladder",p:"How the positioning translates into communication at each audience level. The core message is the same at every level. The expression changes based on what matters to that audience.",d:.06},
].map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{i+1}</div>
<div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.p}</div></div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">Define what your brand stands for.</div>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Discuss positioning →</button></div>
</div>
</div></div>
</div>)}

function BrandIdentityPage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl rv">Brand Identity Architecture</div>
<h1 className="h1 rv">The name, the mark, the system. <span className="t300i">Legally defensible from day one.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>Brand identity is not design alone. It is a legal and strategic system. A name must be trademarked. A logo must communicate the positioning. Typography and colour must signal the right market level.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("contact")}>Discuss brand identity →</button></div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Scope of Activities</div>
<h2 className="h2 rv">Eight to twelve weeks. <span className="t300i">Name to system.</span></h2>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{[
{h:"Brand Naming Process",p:"Four rounds of naming. 15 candidate names per round. Each name evaluated against five criteria: trademark availability in relevant classes, phonetic suitability across Indian languages, memorability and distinctiveness, strategic alignment with positioning, and domain availability. Names that do not pass all five criteria are eliminated.",d:.0},
{h:"Trademark Screening and Filing Strategy",p:"Trademark search across all relevant classes in the jurisdiction. Prior registration conflict identification. Filing strategy recommendation covering class selection, geographic scope, and timing. The filing strategy is documented before any name is finalised.",d:.06},
{h:"Logo and Mark System",p:"Primary mark, secondary mark, and icon system developed in response to the positioning. Four to six concept directions developed and pressure-tested before the final direction is selected. The mark must communicate the right market level and remain recognisable at every scale.",d:.06},
{h:"Typography System",p:"Primary and secondary typeface selection. Scale hierarchy from headline to body to caption. Weight system for emphasis. Typography selected to signal the brand's market positioning, not chosen for aesthetics alone.",d:.06},
{h:"Colour System",p:"Primary and secondary colour palettes. Colour psychology alignment with brand positioning. Usage rules defining which colours appear in which contexts. Accessibility compliance for digital applications.",d:.06},
{h:"Identity Standards Manual",p:"The reference document governing how the identity is used. Logo clear space, minimum size, colour usage, typography hierarchy, and application examples across primary use cases. Sufficient for the client's team and external vendors to apply the identity consistently without interpretation.",d:.06},
].map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{i+1}</div>
<div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.p}</div></div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="qblock rv">
<div className="qblock-text">The name you launch is the name you own. Brand naming and trademark filing happen within the same engagement at Magsmen. <strong>A name without a trademark is an asset someone else can take from you while you are busy building it.</strong></div>
</div>
<div className="ctabox rv" style={{marginTop:"3rem"}}>
<div className="ctabox-h">Name it. Own it. Build it.</div>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Discuss brand identity →</button></div>
</div>
</div></div>
</div>)}

function BrandCommunicationPage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl rv">Brand Communication Framework</div>
<h1 className="h1 rv">One voice. <span className="t300i">Every channel. Every team member.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>Most brands produce inconsistent communication not because the team is careless but because the framework does not exist. A communication framework gives every person who produces anything on behalf of the brand a shared reference point.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("contact")}>Discuss communication →</button></div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Five Outputs</div>
<h2 className="h2 rv">Four to six weeks. <span className="t300i">Five written deliverables.</span></h2>
<div className="g3">
{[
{n:"01",h:"Message Hierarchy",d:"Core message at the brand level. Supporting messages by audience type. Proof statements for each supporting message. The hierarchy ensures every piece of communication reinforces the positioning.",ul:["Core positioning message","Audience-specific variants","Proof statement library","Message prioritisation guidance"]},
{n:"02",h:"Tone of Voice Definition",d:"Character definition: what the brand sounds like in specific situations. Language principles: the rules governing how the brand writes. Vocabulary guide: words the brand uses and words it avoids.",ul:["Brand character description","Language principle rules","Active vocabulary guidance","Anti-vocabulary list"]},
{n:"03",h:"Channel-Specific Guidance",d:"How tone, message, and format differ across website, social media, email, print, sales materials, and in-store communication. The framework defines the appropriate register for each context.",ul:["Website copy standards","Social media tone guidance","Email communication standards","Sales presentation guidelines"]},
{n:"04",h:"Content Principles",d:"What the brand publishes and why. The difference between content that serves the positioning and content that dilutes it.",ul:["Content category definitions","Publishing rationale","Content quality standards","Platform-specific rules"]},
{n:"05",h:"Team Communication Brief",d:"A practical reference enabling any team member to produce on-brand communication without strategic support. Written for the person who writes the WhatsApp reply, not just the marketing head.",ul:["Quick-reference brand voice","Common scenario examples","Approval checklist","FAQ on communication decisions"]},
].map((c,i)=>(
<div key={i} className={`sc rv d${i%3}`}>
<div className="sc-n">{c.n}</div>
<div className="sc-h">{c.h}</div>
<p className="sc-d">{c.d}</p>
<ul className="sc-ul">{c.ul.map((u,j)=><li key={j}>{u}</li>)}</ul>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">Give your brand one voice.</div>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Discuss communication →</button></div>
</div>
</div></div>
</div>)}

function BrandExpressPage({navigate}: {navigate: (path: string) => void}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:"1.25rem",cursor:"pointer"}} onClick={()=>navigate("brand")}>← Brand Architecture</div>
<div className="lbl rv">Brand Express</div>
<h1 className="h1 rv">Strategic brand direction <span className="t300i">within 45 days.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>For businesses with an urgent brand decision and a compressed timeline. Two focused strategy sessions. Core strategic outputs. Trademark screening included.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("contact")}>Begin Brand Express →</button></div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="g2">
{[
{t:"Session 01",h:"Discovery and Positioning Workshop",p:"Three hours. Founder interview, competitive landscape review, positioning territory identification. The session produces a working positioning draft refined and documented before Session 02."},
{t:"Session 02",h:"Identity Direction and Communication Brief",p:"Three hours. Identity direction based on the positioning from Session 01. Naming direction or identity refinement. Communication brief covering tone of voice and primary message hierarchy."},
{t:"Deliverable 01",h:"Positioning Direction Document",p:"The brand's strategic territory stated precisely. Audience definition. Differentiation claim. The foundation for all subsequent communication decisions."},
{t:"Deliverable 02",h:"Identity Direction Brief",p:"Naming direction with trademark screening. Visual identity principles for designer briefing."},
{t:"Deliverable 03",h:"Communication Quick-Start Guide",p:"Tone of voice definition. Primary messages by audience. Channel guidance for the three most important platforms the brand uses."},
{t:"Timeline",h:"30 to 45 days",p:"Session 01 in Week 01. Session 02 in Weeks 02 to 03. Deliverables presented in Weeks 04 to 06."},
].map((d,i)=><div key={i} className={`del-card rv d${i%2}`}><div className="del-tag">{d.t}</div><div className="del-h">{d.h}</div><p className="del-p">{d.p}</p></div>)}
</div>
<div className="qblock rv" style={{marginTop:"3rem"}}>
<div className="qblock-text">Brand Express is appropriate when the decision is urgent. It is not appropriate when the brand is starting from the beginning and time allows for the full framework. <strong>If time allows, Brand Creation produces a more durable result.</strong></div>
</div>
</div></div>
<div className="sec"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">When the timeline is urgent.</div>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Begin Brand Express →</button></div>
</div>
</div></div>
</div>)}

// ─── STATURE ──────────────────────────────────────────────────────────────────
function StaturePage({navigate}:{navigate:(path:string)=>void}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">Stature by Magsmen</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2rem,5.5vw,5rem)",fontWeight:900,color:"#FFF",lineHeight:1,letterSpacing:"-.04em",marginBottom:".5rem"}}>Where Influence</div>
<div style={{fontSize:"clamp(1.8rem,5vw,4.5rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.32)",lineHeight:1,letterSpacing:"-.02em",marginBottom:".5rem"}}>Becomes Identity.</div>
</div>
<p className="hero-lead">The strategic architecture of an individual's professional identity, reputation, and public standing. Not personal branding. Not social media management. The structural work behind what people decide about you before the conversation begins.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Begin a Stature engagement →</button></div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">What Stature Is Not</div>
<h2 className="h2 rv">Three things most people think it is. <span className="t300i">None of them are correct.</span></h2>
<div className="snot-grid rv" style={{marginTop:"2rem"}}>
{[
{h:"Not Personal Branding",p:"Personal branding is a content strategy. It produces followers. Stature is a strategic identity system. It produces advisory mandates, institutional appointments, and referral-driven commercial opportunities. The difference is in outcomes, not effort."},
{h:"Not Public Relations",p:"PR agencies execute outreach under Stature's direction. Stature defines what you should be known for and the narrative that governs how your public presence develops. The sequence matters. You do not brief a PR agency before the architecture exists."},
{h:"Not Image Coaching",p:"Stature is not about how you dress or how you speak in front of a camera. It is the structural system that converts existing achievement into public authority. System over style. Architecture over aesthetics."},
].map((n,i)=><div key={i} className="snot"><div className="snot-h">{n.h}</div><p className="snot-p">{n.p}</p></div>)}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Who Stature Serves</div>
<h2 className="h2 rv">Professionals who have earned attention <span className="t300i">and need to convert it.</span></h2>
<div className="g3">
{[
{h:"Founders and Business Leaders",d:"A founder whose business has established market presence but whose personal brand does not reflect their strategic depth or industry standing. The business has the credibility. The founder's identity should carry it."},
{h:"Media and Entertainment Professionals",d:"Actors, anchors, producers, and creative professionals who have earned significant public attention and need that attention converted into structured professional authority that generates advisory, endorsement, or entrepreneurial opportunities."},
{h:"Medical and Legal Professionals",d:"Doctors, advocates, and specialists with 15 to 25 years of expertise who are being outpaced in public visibility by newer practitioners with a fraction of their knowledge and experience. Visibility without structure is noise. Structure without visibility is wasted potential."},
{h:"Politicians and Public Figures",d:"Individuals in public life who need a coherent, strategically designed public identity that travels across constituencies, media environments, and professional contexts. Not messaging alone. A system."},
{h:"CEOs and Senior Executives",d:"Corporate executives building independent professional identities that exist separately from their company roles. Board appointments, advisory mandates, and thought leadership require a personal brand architecture, not a LinkedIn profile."},
{h:"Education and Knowledge Leaders",d:"Academics, educators, and knowledge practitioners whose expertise deserves institutional authority. The difference between a respected practitioner and a category-defining authority is architecture."},
].map((c,i)=>(
<div key={i} className={`sc rv d${i%3}`}>
<div className="sc-h">{c.h}</div>
<p className="sc-d">{c.d}</p>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">Four Tiers</div>
<h2 className="h2 rv">The right tier is determined by <span className="t300i">the level of public exposure and reputational complexity.</span></h2>
<div className="tier-cards rv">
{[
{tier:"Foundation",for:"Professional or entrepreneur beginning to build structured identity.",scope:"30 to 60 days. Positioning definition, narrative framework, communication essentials, digital presence audit.",del:"Positioning statement, narrative framework, communication starter guide."},
{tier:"Authority",for:"Business owner or sector specialist with regional recognition needing positioning that reflects expertise level.",scope:"60 to 90 days. Full perception audit, positioning strategy, communication system, thought leadership framework.",del:"Perception audit report, positioning strategy, communication framework, thought leadership system."},
{tier:"Prominence",for:"CEO, senior executive, or public figure with national-level visibility and reputational risk.",scope:"120 to 180 days. Perception audit, sentiment analysis, crisis communication framework, media narrative governance system.",del:"Full perception audit, crisis framework, media narrative system, ongoing governance structure."},
{tier:"Legacy",for:"Film celebrity, national politician, sports personality, or nationally recognised business leader.",scope:"Ongoing retainer. Real-time monitoring, endorsement governance, crisis management, legacy architecture.",del:"Full system across all four dimensions. Maintained continuously."},
].map((r,i)=>(
<div key={i} className="tier-card">
<div className="tier-pill">{r.tier}</div>
<div className="tier-card-h">{r.for}</div>
<div style={{fontSize:"11px",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#CCC",margin:".75rem 0 .35rem"}}>Scope</div>
<p className="tier-card-p">{r.scope}</p>
<div style={{fontSize:"11px",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"#CCC",margin:".75rem 0 .35rem"}}>Key deliverables</div>
<p className="tier-card-p">{r.del}</p>
</div>
))}
</div>
</div></div>
<div style={{background:"#0A0A0A",padding:"80px 56px"}}><div className="si">
<div className="lbl wh rv">Stature Clients</div>
<h2 className="h2 wh rv" style={{marginBottom:"2rem"}}>Professionals who took <span style={{fontWeight:300,fontStyle:"italic"}}>the structural decision.</span></h2>
<div className="stature-clients rv">
{[
{name:"Suma Kanakala",role:"Actor, Anchor, Entrepreneur"},
{name:"Rajeev Kanakala",role:"Actor, Anchor, Producer"},
{name:"Roshan Kanakala",role:"Actor"},
{name:"Shyam Prasad Munagala",role:"Industrialist, Chairman, TDH Group"},
{name:"Dr. Srujana Abadala",role:"Medical Professional"},
{name:"Dr. Mamatha",role:"Medical Professional"},
].map((p,i)=><div key={i} className="scp"><div className="scp-n">{p.name}</div><div className="scp-r">{p.role}</div></div>)}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">Your achievement deserves <span className="t300i">a structure that carries it.</span></div>
<p className="ctabox-p">Our strategy associate will reach out personally within 24 hours.</p>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Begin a Stature engagement →</button></div>
</div>
</div></div>
</div>)}

// ─── OTC PAGE (with price) ─────────────────────────────────────────────────────
function OTCPage({navigate}){const ref=useRef(null);useReveal(ref);useTimelineReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">One-Time Consulting</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2rem,5.5vw,5rem)",fontWeight:900,color:"#FFF",lineHeight:1.0,letterSpacing:"-.04em",marginBottom:".5rem"}}>We start with a diagnosis.</div>
<div style={{fontSize:"clamp(1.7rem,4.5vw,4rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.32)",lineHeight:1.05,letterSpacing:"-.02em"}}>Not a strategy.</div>
</div>
<p className="hero-lead">Most consultants arrive with a solution before they understand the problem. OTC is a structured diagnostic. One session. A written audit across five dimensions. The root cause identified in one plain sentence. A 90-day action plan you can execute independently.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Book an OTC session →</button><a className="bo wh" href="https://wa.me/919044910449?text=I want to enquire about the OTC engagement" target="_blank">💬 Ask a question first</a></div>
</div></div>
<div className="sec nb"><div className="si">
<div className="otc-price-hero rv">
<div className="otc-price-from">One-Time Consulting · Fixed scope · No surprises</div>
<span className="otc-price-n">₹49,995 <span style={{fontSize:"1.1rem",fontWeight:300,opacity:.4}}>+ GST</span></span>
<p className="otc-price-sub">One structured session. A written audit across five dimensions of your business. The single root cause identified in one sentence. A 90-day action plan. No ongoing commitment required unless you choose to continue.</p>
<div className="brow" style={{marginTop:"1.5rem"}}><button className="bf inv" onClick={()=>navigate("contact")}>Book your OTC session →</button></div>
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Six Deliverables</div>
<h2 className="h2 rv">What you walk away with. <span className="t300i">In writing. Every time.</span></h2>
<div className="g2">
{[
{n:"01",h:"Five-Pillar Business Audit Report",p:"Structured findings across five pillars: Legal, Brand, Business, Operations, and Team. Each pillar scored and documented with evidence from the discovery session."},
{n:"02",h:"Primary Constraint Identification",p:"The single most important finding stated in one plain-language sentence. The root cause of what is limiting your growth, with the evidence base behind it."},
{n:"03",h:"Secondary Constraint Note",p:"The next most significant issue and the recommended sequence for addressing it. The sequence is as important as the diagnosis."},
{n:"04",h:"Strategic Direction Summary",p:"What the business must focus on and why. The one thing that, if done correctly, changes the trajectory of everything else."},
{n:"05",h:"90-Day Action Roadmap",p:"Specific, sequenced, actionable steps for the next quarter. Written so the founder and team can act independently without needing further engagement."},
{n:"06",h:"Recommended Next Project",p:"If further engagement is warranted, the specific Magsmen engagement recommended with defined scope and rationale. Not a general upsell. A specific recommendation based on the diagnosis."},
].map((d,i)=>(
<div key={i} className="otc-deliverable rv">
<div className="otc-del-n">{d.n}</div>
<div><div className="otc-del-h">{d.h}</div><p className="otc-del-p">{d.p}</p></div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">The Process</div>
<h2 className="h2 rv">Six steps. <span className="t300i">Two to three weeks.</span></h2>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{[
{h:"Client Intake",p:"Basic foundational information collected before any session is scheduled: business category, operating years, revenue range, team size, and the founder's own description of the primary problem. Preparation, not interrogation.",d:.0},
{h:"Discovery Meeting",p:"The most important conversation in the engagement. Conducted by the Lead Strategist. Goal: understand the business as the founder experiences it, the problem as they describe it, and the history of interventions already tried. Duration: 90 to 120 minutes.",d:.06},
{h:"Ground Reality Review",p:"For product businesses: review of the production or fulfilment environment. For service businesses: review of the actual service delivery process. A diagnosis formed without observing the reality of the business is incomplete.",d:.06},
{h:"Five-Pillar Audit",p:"Structured analysis across all five pillars: Legal, Brand, Business, Operations, and Team. All five are audited in every engagement regardless of how obvious the problem appears from the discovery meeting. Proximity creates a particular kind of blindness.",d:.06},
{h:"Strategic Diagnosis",p:"The primary constraint identified and stated in one sentence in plain language. If the Lead Strategist cannot state it in one sentence without requiring clarification, the diagnosis is not ready. The secondary constraint and strategic direction are documented alongside it.",d:.06},
{h:"Final Report and Presentation",p:"The written report is reviewed internally before it is presented to the client. At the end, the founder must leave with one thing above everything else: the clarity to act.",d:.06},
].map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{i+1}</div>
<div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.p}</div></div>
</div>
))}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">What OTC Is Not</div>
<div className="otc-vs rv">
<div className="otc-vs-col"><div className="otc-vs-h">What OTC delivers</div>
<ul className="otc-vs-ul yes">
{["A structured diagnostic across five dimensions","The single most important constraint in one sentence","A 90-day action roadmap you can execute independently","A specific next engagement recommendation if warranted","Identification of legal and structural risks"].map((l,i)=><li key={i}>{l}</li>)}
</ul></div>
<div className="otc-vs-col"><div className="otc-vs-h">What OTC does not deliver</div>
<ul className="otc-vs-ul no">
{["A full brand strategy or identity project","An ongoing advisory arrangement","Legal opinions or tax advice","Confirmation of what the founder already believes","A strategy without examining the business first"].map((l,i)=><li key={i}>{l}</li>)}
</ul></div>
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">OTC FAQ</div>
<h2 className="h2 rv">Questions founders ask <span className="t300i">before booking.</span></h2>
<div className="rv" style={{marginTop:"2rem"}}><FAQSection items={[
{q:"Is ₹49,995 the price for all OTC engagements?",a:"₹49,995 plus GST is the starting price for a standard OTC engagement. For group companies with multiple brands or businesses requiring additional complexity in the audit, the fee may be higher. The fee is confirmed in writing before the engagement begins. There are no hidden fees or scope expansions without a revised agreement."},
{q:"How long does OTC take?",a:"The standard OTC engagement is delivered within two to three weeks of the agreement being signed. The discovery session is scheduled within the first week. The ground reality review within the first ten days. The final report is presented in the third week."},
{q:"Will OTC recommend more work with Magsmen?",a:"The OTC engagement will tell you what your business needs. If the diagnosis leads to a recommendation for further Magsmen engagement, that recommendation will be specific, scoped, and justified by the audit findings. If the diagnosis shows no further engagement is required, the report will say so. We have no incentive to recommend work the business does not need."},
{q:"Can OTC be conducted remotely?",a:"The discovery meeting can be conducted in person or via video call. The ground reality review for product businesses requires a physical visit where possible. For service businesses it can be conducted remotely through a structured digital audit process."},
]}/></div>
<div className="ctabox rv" style={{marginTop:"3rem"}}>
<div className="ctabox-h">Start with a diagnosis. <span className="t300i">Everything else follows.</span></div>
<p className="ctabox-p">Our strategy associate will call or WhatsApp you within 24 hours to schedule the first session.</p>
<div className="ctabox-row">
<button className="bf" onClick={()=>navigate("contact")}>Book an OTC session →</button>
<a className="bo dk" href="https://wa.me/919044910449?text=I want to book an OTC session" target="_blank">💬 WhatsApp to start</a>
</div>
<p className="ctabox-note">Starting from ₹49,995 + GST · Delivered in 2 to 3 weeks · Fixed scope, fixed fee</p>
</div>
</div></div>
</div>)}

// ─── BUSINESS PAGE ─────────────────────────────────────────────────────────────
function BusinessPage({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">02 · Business Structuring</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2rem,5.5vw,5rem)",fontWeight:900,color:"#FFF",lineHeight:1.0,letterSpacing:"-.04em",marginBottom:".5rem"}}>A business that grows</div>
<div style={{fontSize:"clamp(1.8rem,5vw,4.5rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.35)",lineHeight:1.05,letterSpacing:"-.02em"}}>without you at every decision.</div>
</div>
<p className="hero-lead">Most founders built their business through personal presence and daily involvement. At some stage, that model becomes the ceiling. Business structuring creates the frameworks that let the brand's ambition translate into business performance.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Discuss your business →</button><button className="bo wh" onClick={()=>navigate("otc")}>Start with OTC</button></div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">Six Practice Areas</div>
<h2 className="h2 rv">Business structuring across <span className="t300i">every dimension of the commercial system.</span></h2>
<div className="g3">
{[
{n:"01",h:"Business Model Review",d:"Assessing whether the current commercial model supports the brand's ambition. Revenue streams, pricing, and cost structure reviewed against the growth plan. Unit economics analysis.",ul:["Revenue stream analysis","Pricing model assessment","Cost structure review","Unit economics modelling"]},
{n:"02",h:"Operational Framework Design",d:"Creating processes, decision hierarchies, and reporting systems that allow the team to execute without the founder at every step.",ul:["Process mapping (current state)","Operating system redesign","Decision framework","Team operating manual"]},
{n:"03",h:"Organisational Structure",d:"Defining the right structure for the team at this stage and the next. Roles, reporting lines, accountability systems, and governance.",ul:["Org structure assessment","Role definition and clarity","Reporting architecture","Accountability framework"]},
{n:"04",h:"Revenue Architecture",d:"Building revenue models that are sustainable, scalable, and aligned with the brand's positioning. Pricing strategy that reflects the brand's actual value.",ul:["Pricing strategy design","Revenue diversification analysis","Channel economics review","Value-based pricing framework"]},
{n:"05",h:"Growth System Design",d:"The strategic and operational roadmap for the next growth phase with accountability markers and review cadence built in.",ul:["Growth goal definition","Milestone architecture","Resource requirement mapping","Quarterly review framework"]},
{n:"06",h:"Succession and Transition Planning",d:"For family businesses preparing for the next generation or a leadership transition. Structural clarity before the transition, not a crisis response after.",ul:["Succession readiness audit","Governance structure design","Next-generation preparation","Knowledge transfer plan"]},
].map((c,i)=>(
<div key={i} className={`sc rv d${i%3}`}>
<div className="sc-n">{c.n}</div>
<div className="sc-h">{c.h}</div>
<p className="sc-d">{c.d}</p>
<ul className="sc-ul">{c.ul.map((u,j)=><li key={j}>{u}</li>)}</ul>
</div>
))}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<InlineForm title="What does your business need?" sub="Our strategy associate will reach out personally within 24 hours."
questions={[
{q:"What best describes your structural challenge?",opts:["We are growing but operations are chaotic","The business runs only when I am present","Our revenue model needs to evolve","We need to structure for scale or succession"]},
{q:"What outcome do you need?",opts:["Clear operational processes the team can follow","A business model that supports the brand ambition","A structure I can step back from safely","A succession or transition plan built properly"]},
{q:"How urgent is this?",opts:["Very urgent experiencing pain now","Moderately urgent anticipate it soon","Planning ahead for the next 1 to 2 years","Early exploration no fixed timeline"]},
]}/>
</div></div>
</div>)}

// ─── LEGAL PAGE ────────────────────────────────────────────────────────────────
function LegalPage({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">03 · Legal Brand Protection</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2rem,5.5vw,5rem)",fontWeight:900,color:"#FFF",lineHeight:1.0,letterSpacing:"-.04em",marginBottom:".5rem"}}>Legal protection is not the last step.</div>
<div style={{fontSize:"clamp(1.7rem,4.5vw,4rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.32)",lineHeight:1.05,letterSpacing:"-.02em"}}>It is the first conversation.</div>
</div>
<p className="hero-lead">Trademark registration. Personality rights. Patent commercialisation. Consumer resolution. Annual legal advisory. ASCI compliance. Legal brand protection at Magsmen covers every dimension where a brand can be legally vulnerable.</p>
<div className="brow rv"><button className="bf inv" onClick={()=>navigate("contact")}>Discuss your legal situation →</button></div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">The Risks Most Founders Carry</div>
<h2 className="h2 rv">All preventable. <span className="t300i">All expensive when they materialise.</span></h2>
<div className="rtable rv">
<div className="rrow rh"><div className="rc">The risk</div><div className="rc">What it looks like in practice</div></div>
{[
{r:"Name conflict",l:"A competitor has been using the same or similar name. You discover this when you receive a legal notice or when a distributor raises the conflict."},
{r:"Prior trademark registration",l:"You have been trading under a name for five years. Someone else filed the trademark first and now owns it legally. You must rebrand, negotiate, or litigate."},
{r:"Personality rights violation",l:"Your name, image, likeness, or voice is used commercially without consent. For public figures and professionals this is a growing and serious legal exposure."},
{r:"Franchise or licensing stall",l:"A potential partner asks for your IP schedule. You have no trademarks filed. The deal stalls or the valuation is reduced."},
{r:"ASCI complaint",l:"An advertising campaign breaches ASCI codes. A competitor or consumer files a complaint. Without ASCI-aware communication strategy, the risk is invisible until it surfaces."},
].map((r,i)=><div key={i} className="rrow"><div className="rc">{r.r}</div><div className="rc">{r.l}</div></div>)}
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Six Practice Areas</div>
<h2 className="h2 rv">Legal protection across <span className="t300i">every dimension a brand is vulnerable.</span></h2>
<div className="g3">
{[
{n:"01",h:"Trademark Registration",d:"Search, class selection, filing strategy, and registration management under the Trade Marks Act, 1999. Filing under the right classes for the actual scope of the business.",ul:["Class-specific availability search","Phonetic and visual similarity analysis","Multi-class filing strategy","Examination response management"]},
{n:"02",h:"Personality Rights Advisory",d:"For public figures, professionals, celebrities, and high-visibility individuals. Protecting your name, image, likeness, and voice from unauthorised commercial use.",ul:["Personality rights audit","Endorsement agreement review","Image and likeness protection","Crisis advisory on identity misuse"]},
{n:"03",h:"Patent Commercialisation",d:"Taking innovation from documentation to market. Strategy for protecting and commercially realising patentable products, processes, and systems.",ul:["Patentability assessment","Filing strategy","Licensing structure design","Commercialisation roadmap"]},
{n:"04",h:"Annual Legal Advisory",d:"An ongoing legal advisory retainer for brands that need continuous legal counsel without the cost of a full-time legal team.",ul:["Monthly legal advisory session","Agreement review on demand","New trademark class monitoring","IP portfolio health review"]},
{n:"05",h:"Consumer Resolution and ASCI",d:"Managing consumer disputes, ASCI complaints, and brand-level consumer affairs. Magsmen is an ASCI member. ASCI compliance is a brand quality signal, not a legal formality.",ul:["ASCI complaint response strategy","Consumer forum advisory","Brand communication compliance","Advertising code compliance"]},
{n:"06",h:"IP Architecture and Contracts",d:"Designing the full intellectual property portfolio and the agreements that protect the brand in partnerships, licensing, celebrity associations, and franchise structures.",ul:["Full IP asset inventory","Brand licensing agreements","Endorsement and influencer contracts","Franchise IP clauses"]},
].map((c,i)=>(
<div key={i} className={`sc rv d${i%3}`}>
<div className="sc-n">{c.n}</div>
<div className="sc-h">{c.h}</div>
<p className="sc-d">{c.d}</p>
<ul className="sc-ul">{c.ul.map((u,j)=><li key={j}>{u}</li>)}</ul>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<InlineForm title="What legal protection do you need?" sub="Our strategy associate will reach out personally within 24 hours."
questions={[
{q:"What is your current IP situation?",opts:["We have no trademarks filed","We have some filings but no complete strategy","We had a dispute or close call","We need personality rights advisory"]},
{q:"What is most urgent?",opts:["Trademark search and filing strategy","Legal protection for a brand we are launching","Personality rights and endorsement agreements","Annual legal advisory retainer"]},
{q:"What concerns you most?",opts:["A competitor using a similar name","Launching without protection in place","Consumer complaints or ASCI exposure","Franchise requiring clean IP schedule"]},
]}/>
</div></div>
</div>)}

// ─── ADVISORY PAGE ─────────────────────────────────────────────────────────────
function AdvisoryPage({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">Advisory</div>
<h1 className="h1 rv">Strategic advisory that functions as an integrated arm. <span className="t300i">Not a periodic service.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>Three engagement models, each structured around what the mandate requires.</p>
<div className="brow rv"><button className="bf" onClick={()=>navigate("otc")}>Start with a diagnostic →</button><a className="bo dk" href="mailto:sandeep@magsmen.com?subject=Advisory Inquiry">Discuss advisory directly</a></div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Three Models</div>
<h2 className="h2 rv">The right model depends on the complexity of the situation <span className="t300i">and the depth of integration needed.</span></h2>
<div className="atiers rv">
<div className="atier">
<div className="atier-n">01 · Diagnostic</div>
<div className="atier-h">One-Time Consulting</div>
<div className="atier-price">Starting from ₹49,995 + GST</div>
<p className="atier-p">A structured diagnostic that produces clarity on the root cause of what is limiting growth. Not a plan. A diagnosis.</p>
<div className="atier-inc">What is included</div>
<ul className="atier-ul">
{["Discovery session (90 to 120 minutes)","Five-Pillar Business Audit Report","Primary Constraint Identification","90-Day Action Roadmap","Recommended Next Project"].map((l,i)=><li key={i}>{l}</li>)}
</ul>
<button className="bo-sm" onClick={()=>navigate("otc")}>Full OTC details →</button>
</div>
<div className="atier feat">
<div className="atier-badge">Most common starting point</div>
<div className="atier-n">02 · Annual Advisory</div>
<div className="atier-h">Brand Advisory Retainer</div>
<div className="atier-price">Custom · from ₹5,00,000 per year</div>
<p className="atier-p">Ongoing strategic advisory for businesses in active growth or repositioning. Brand decisions, communication direction, and market positioning require ongoing thought and structured accountability.</p>
<div className="atier-inc">What is included</div>
<ul className="atier-ul">
{["Monthly strategic advisory session (2 hours)","Brand and business decision support","Communication direction and review","On-demand advisory access","Intelligent Council access on mandate","Quarterly strategic review session","Annual brand health review"].map((l,i)=><li key={i}>{l}</li>)}
</ul>
<a className="bf-sm" href="mailto:sandeep@magsmen.com?subject=Advisory Retainer Inquiry">Discuss retainer →</a>
</div>
<div className="atier">
<div className="atier-n">03 · Annual Integrated</div>
<div className="atier-h">Strategic Partner</div>
<div className="atier-price">Custom · from ₹10,00,000 per year</div>
<p className="atier-p">An annual engagement for founders navigating a decade-level decision. Magsmen functions as an integrated advisory arm with brand, business, and legal under one coordinated perspective.</p>
<div className="atier-inc">What is included</div>
<ul className="atier-ul">
{["Full brand architecture engagement","Business structuring and operational review","Legal brand protection integrated","Intelligent Council across all three dimensions","Monthly strategic sessions","Quarterly reviews and annual strategy summit"].map((l,i)=><li key={i}>{l}</li>)}
</ul>
<a className="bo-sm" href="mailto:sandeep@magsmen.com?subject=Strategic Partner Inquiry">Discuss partnership →</a>
</div>
</div>
</div></div>
<div className="sec"><div className="si">
<div className="council-sec rv">
<div className="stature-tag" style={{marginBottom:"1.5rem"}}>Magsmen Intelligent Council</div>
<div className="council-grid">
<div>
<h3 className="c-h">A working panel assembled for your engagement. Not a referral directory.</h3>
<p className="c-p">The Council is a curated group of practitioners assembled specifically for the dimensions of your mandate. Legal advisors, financial analysts, sector specialists, and technology consultants who operate within the same strategic framework as the principal engagement.</p>
<div className="c-note"><p>The Council is convened within the client engagement. It is the structural difference between a single consultant and an integrated advisory firm.</p></div>
</div>
<div>
<div className="c-tags">
{["Legal Advisory","Financial Structuring","Technology Advisory","Sector Intelligence","IP and Patent","Regulatory Compliance","Investment Advisory","Crisis Management","Banking and Credit","Digital Infrastructure","HR and Talent","Marketing Execution"].map(t=><span key={t} className="c-tag">{t}</span>)}
</div>
<div className="c-when" style={{marginTop:"2rem"}}>
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:"1rem"}}>When the Council is convened</div>
{["When the mandate requires financial structuring or investment-readiness work.","When the brand strategy intersects with regulatory compliance requirements.","When legal brand protection reaches a complexity requiring specialist litigation counsel.","When a Stature engagement requires crisis management or media relations expertise."].map((w,i)=>(
<div key={i} className="c-when-item"><div className="c-when-dot"/><p className="c-when-p">{w}</p></div>
))}
</div>
</div>
</div>
</div>
</div></div>
</div>)}

// ─── INSIGHTS ──────────────────────────────────────────────────────────────────
function Insights({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">Insights</div>
<h1 className="h1 rv">Thinking that changes <span className="t300i">how you make decisions about brand.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"2.5rem"}}>Strategic frameworks drawn from eight years of work across 50 brands in Andhra Pradesh, Telangana, and beyond. Not opinions. Not general advice. Specific thinking drawn from real engagements.</p>
<div className="insight-feat rv" style={{cursor:"pointer"}} onClick={()=>navigate("blog/"+BLOGS[0].id)}>
<div className="if-thumb">
   <img
        src={BLOGS[0].image}
        alt={BLOGS[0].title}
        className="blog-image"
    />
</div>
<div>
<div className="if-cat">{BLOGS[0].cat}</div>
<div className="if-title">{BLOGS[0].title}</div>
<p className="if-excerpt">{BLOGS[0].excerpt}</p>
<div className="if-meta">{BLOGS[0].date} · {BLOGS[0].rt}</div>
<div style={{marginTop:"1.25rem",fontSize:"13px",fontWeight:700,display:"flex",alignItems:"center",gap:6}}>Read the full insight <ArrowRight size={13}/></div>
</div>
</div>
<div className="blog-grid" style={{marginTop:"3rem"}}>
{BLOGS.slice(1).map((b,i)=>(
<div key={i} className={`blog-card rv d${i%3}`} onClick={()=>navigate("blog/"+b.id)}>
<div className="blog-img">
  <img
    src={b.image}
    alt={b.title}
    className="blog-image"
/>
</div>
<div className="blog-body">
<div className="blog-cat">{b.cat}</div>
<div className="blog-title">{b.title}</div>
<div className="blog-excerpt">{b.excerpt}</div>
<div className="blog-meta">{b.date} · {b.rt}</div>
</div>
</div>
))}
</div>
</div></div>
</div>)}

function BlogPost({id,navigate}){const post=BLOGS.find(b=>b.id===id)||BLOGS[0];const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="blog-hero-sec"><div className="si rv">
<div style={{fontSize:"11px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#AAA",marginBottom:"1rem"}}>{post.cat}</div>
<h1 style={{fontSize:"clamp(1.8rem,4.5vw,3rem)",fontWeight:900,lineHeight:1.06,letterSpacing:"-.03em",marginBottom:"1.25rem"}}>{post.title}</h1>
<div style={{fontSize:".93rem",color:"#AAA",marginBottom:"2rem",fontWeight:300}}>{post.date} · {post.rt}</div>
<p style={{fontSize:"1.05rem",color:"#444",lineHeight:1.95,maxWidth:680,fontWeight:300}}>{post.excerpt}</p>
</div></div>
<div className="sec"><div className="si">
<div className="blog-content rv">
{post.content.map((block,i)=>{
if(block.t==="h2") return <h2 key={i}>{block.text}</h2>
if(block.t==="h3") return <h3 key={i}>{block.text}</h3>
if(block.t==="pq") return <div key={i} className="pq" dangerouslySetInnerHTML={{__html:block.text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}}/>
return <p key={i}>{block.text}</p>
})}
<div style={{marginTop:"3rem",paddingTop:"3rem",borderTop:"1px solid #EBEBEB"}}>
<p style={{fontSize:".93rem",color:"#AAA",marginBottom:"1.5rem",fontWeight:300}}>This insight is drawn from eight years of brand architecture and legal brand protection work across AP and Telangana. To discuss how these ideas apply to your situation, reach out directly.</p>
<button className="bf" onClick={()=>navigate("contact")}>Talk to our team →</button>
</div>
</div>
<div style={{marginTop:"4rem",paddingTop:"4rem",borderTop:"1px solid #EBEBEB"}}>
<div className="lbl rv">More Insights</div>
<div className="blog-grid" style={{marginTop:"1.5rem"}}>
{BLOGS.filter(b=>b.id!==id).slice(0,3).map((b,i)=>(
<div key={i} className={`blog-card rv d${i}`} onClick={()=>navigate("blog/"+b.id)}>
<div className="blog-img">{b.icon}</div>
<div className="blog-body">
<div className="blog-cat">{b.cat}</div>
<div className="blog-title">{b.title}</div>
<div className="blog-meta">{b.date} · {b.rt}</div>
</div>
</div>
))}
</div>
</div>
</div></div>
</div>)}

// ─── ENGAGEMENTS ───────────────────────────────────────────────────────────────
function Engagements({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">Engagements</div>
<h1 className="h1 rv">What we have built. <span className="t300i">And what it produced.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>Selected engagement stories across brand architecture, Stature, and legal brand protection. Outcomes are reported as achieved, not projected. Where clients have consented to be named, they are named.</p>
</div></div>

<div className="sec"><div className="si">

{/* CASE 1: Tenali Double Horse */}
<div className="rv" style={{marginBottom:"5rem",paddingBottom:"5rem",borderBottom:"1px solid #EBEBEB"}}>
<div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap"}}>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>FMCG / Food Processing</span>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>18 months · Active</span>
</div>
<h2 style={{fontSize:"clamp(1.6rem,3.5vw,2.8rem)",fontWeight:900,letterSpacing:"-.025em",lineHeight:1.1,marginBottom:".5rem"}}>Tenali Double Horse</h2>
<p style={{fontSize:"1rem",fontWeight:300,color:"#888",marginBottom:"2.5rem"}}>Shyam Prasad Garu, Chairman · Tenali, Andhra Pradesh</p>

<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"3rem"}}>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Situation</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Tenali Double Horse arrived at Magsmen with a problem that looked like a marketing problem. Revenue was present. Distribution was active across multiple districts of Andhra Pradesh. The brand had a name that the regional market recognised. But the engagement that followed the first discovery session revealed something that no amount of advertising spend was going to correct.</p>
<p className="body t300">The brand had twelve product lines operating without a coherent architecture. Each product communicated a different value proposition. The packaging across lines varied in visual language, quality signal, and price positioning. A consumer standing in front of a retail shelf could not tell that these products came from the same brand, let alone understand what that brand stood for. The trademark position was entirely unprotected. Not a single class had been filed.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>What Discovery Revealed</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>The Five-Pillar Audit identified the primary constraint as brand architecture, not communication. The business had the distribution relationships and the production capacity to grow significantly. What it did not have was a strategic brand framework that could travel with that growth. The secondary constraint was legal: with no trademark protection, any competitor in the FMCG category could file a confusingly similar mark and challenge the brand's right to operate under its own name at the moment it became valuable enough to contest.</p>
<p className="body t300">Shyam Prasad Garu had built the business on relationship-driven trust. That trust was real and commercially substantial. But it lived primarily in his personal network and the familiarity of the Tenali market. When the business moved beyond those relationships and that geography, the brand had nothing structural to stand on.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Engagement</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Magsmen began with a complete brand audit before any strategy was proposed. The audit produced the evidence base for the repositioning decision. Stage by stage, the engagement covered portfolio architecture across all twelve product lines, a unified brand positioning strategy, a visual identity redesign with coherent packaging language across the portfolio, trademark registration across five classes, a distributor communication framework, and a consumer-facing brand narrative for the new phase.</p>
<p className="body t300">The trademark filings were prioritised. Three were approved within the engagement period. Two remain in examination. The product portfolio was restructured into three distinct tiers with defined positioning, pricing, and packaging differentiation across each tier.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Outcomes</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Eighteen months in, Shyam Prasad Garu described the engagement as one that "truly exceeded expectations" and brought "real value and commercial success to the brand." The trademark portfolio is active. The brand has a consistent visual and verbal language across twelve product lines for the first time in its history. Entry into two new regional markets followed the repositioning, supported by a distributor communication framework that the team can execute without requiring the founder's direct involvement in every conversation.</p>
<div style={{marginTop:"2rem",padding:"2rem 2.5rem",background:"#F8F8F8",borderLeft:"4px solid #0A0A0A",borderRadius:"0 6px 6px 0"}}>
<p style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"#0A0A0A",lineHeight:1.65,marginBottom:".75rem"}}>"Sandeep has been an incredible asset to our brand. From introducing a new phase of Tenali Double Horse to managing time effectively and being transparent with us every step of the way, they have truly exceeded expectations. Sandeep is an experienced professional who has brought value and commercial success to our brand."</p>
<div style={{fontSize:"11px",fontWeight:700,color:"#BBB",letterSpacing:".07em",textTransform:"uppercase"}}>Shyam Prasad Garu · Chairman, Tenali Double Horse Group</div>
</div>
</div>
</div>
</div>

{/* CASE 2: VSB Group */}
<div className="rv" style={{marginBottom:"5rem",paddingBottom:"5rem",borderBottom:"1px solid #EBEBEB"}}>
<div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap"}}>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>Real Estate / Infrastructure</span>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>Brand Architecture + Legal Brand Protection</span>
</div>
<h2 style={{fontSize:"clamp(1.6rem,3.5vw,2.8rem)",fontWeight:900,letterSpacing:"-.025em",lineHeight:1.1,marginBottom:".5rem"}}>VSB Group</h2>
<p style={{fontSize:"1rem",fontWeight:300,color:"#888",marginBottom:"2.5rem"}}>Multi-category infrastructure group · Andhra Pradesh</p>

<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"3rem"}}>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Situation</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>VSB Group came to Magsmen with three problems that appeared separate but were structurally connected. The group operated across multiple business categories with no cohesive brand architecture linking the entities. Different business units communicated different versions of the group's identity to stakeholders, customers, and institutional partners. There was no master brand framework, no sub-brand governance system, and no legal protection for the group's name or marks across any of its operating categories.</p>
<p className="body t300">The third and most urgent problem: there was an active intellectual property dispute in progress. A competing entity had filed a trademark application for a mark confusingly similar to one of VSB Group's business unit names. The group had no filed trademark to cite in opposition. The legal position was weak precisely because the brand architecture work had never been done.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>What Discovery Revealed</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>The brand audit revealed that VSB Group had substantial institutional credibility — the kind built through consistent delivery and long-term relationships in the construction and infrastructure sector. But that credibility was entirely founder-dependent and geography-dependent. It did not travel through the group's brand. External stakeholders could not tell from the group's public presence what the full scope of its capability was or how the different business units related to each other.</p>
<p className="body t300">The Legal Pillar of the five-pillar audit produced the most consequential finding: the group had been building brand equity across its business units for years with no trademark protection. The IP dispute had been triggered precisely because the brand had become valuable enough for someone else to attempt to register a version of it.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Engagement</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Magsmen addressed the IP dispute as a priority track running in parallel with the brand architecture work. The dispute resolution strategy involved filing the group's own trademark applications across the relevant classes immediately, building a documented evidence base of prior use, and positioning the group for a negotiated resolution from a position of documented ownership rather than oral claim.</p>
<p className="body t300">The brand architecture engagement designed a master brand framework for VSB Group, structured three distinct sub-brands with defined positioning and visual identity guidelines, created a group communication standard that institutional stakeholders could reference, and produced an external brand narrative that accurately represented the group's full scope of capability for the first time.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Outcomes</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>The IP dispute was resolved through structured negotiation. The competing application was withdrawn. VSB Group now holds active trademark registrations across three classes covering its primary business activities. The group brand architecture produced immediate measurable results in external stakeholder response: institutional partners and corporate clients described significantly improved clarity about the group's full capability. LinkedIn presence, previously fragmented across business units, was consolidated under the master brand framework and produced measurable follower growth and engagement improvement.</p>
<p className="body t300">The internal outcome was equally significant. Different business units of the group began communicating a consistent identity, reducing the confusion that had previously required the founder's personal intervention to resolve in senior stakeholder conversations.</p>
<div style={{marginTop:"2rem",padding:"2rem 2.5rem",background:"#F8F8F8",borderLeft:"4px solid #0A0A0A",borderRadius:"0 6px 6px 0"}}>
<p style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"#0A0A0A",lineHeight:1.65,marginBottom:".75rem"}}>"Working with Sandeep and their team was an incredible experience. They introduced us to the concept of brand architecture, which resulted in a new, enhanced strategy for VSB Group. We experienced a major boost in our corporate rebranding, LinkedIn follower growth, external stakeholder praise, and product visuals. The team's attention to detail and professionalism have been invaluable."</p>
<div style={{fontSize:"11px",fontWeight:700,color:"#BBB",letterSpacing:".07em",textTransform:"uppercase"}}>VSB Group · Real Estate and Infrastructure, Andhra Pradesh</div>
</div>
</div>
</div>
</div>

{/* CASE 3: Telugu Foods */}
<div className="rv" style={{marginBottom:"5rem",paddingBottom:"5rem",borderBottom:"1px solid #EBEBEB"}}>
<div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap"}}>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>FMCG / Food Processing</span>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>Brand Creation + Market Entry</span>
</div>
<h2 style={{fontSize:"clamp(1.6rem,3.5vw,2.8rem)",fontWeight:900,letterSpacing:"-.025em",lineHeight:1.1,marginBottom:".5rem"}}>Telugu Foods</h2>
<p style={{fontSize:"1rem",fontWeight:300,color:"#888",marginBottom:"2.5rem"}}>Swetha Telugu Foods · Andhra Pradesh</p>

<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"3rem"}}>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Situation</div>
<p className="body t300">Telugu Foods entered one of the most competitive food categories in Andhra Pradesh with no existing brand equity, no distributor relationships, and no established customer base. The challenge was not a repositioning challenge. It was a creation challenge. The brand, the identity, the communication strategy, and the distribution framework had to be built from the beginning, and the window for market entry was compressed.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Engagement</div>
<p className="body t300">Magsmen conducted a category analysis before any identity work began. The competitive landscape was mapped. The positioning territory with the most viable differentiation was identified. Brand naming was completed with trademark screening across three classes. The full identity system was developed and documented. A launch communication plan was produced with channel sequencing and a distributor brief designed to open the first conversations with retail partners.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Outcomes</div>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Within two months of launch, Telugu Foods had distribution leads established across multiple channels, combo products launched across all planned mediums, and brand visibility measurably higher than the category benchmark for a new entrant. The trademark filings across three classes were in active examination.</p>
<div style={{marginTop:"2rem",padding:"2rem 2.5rem",background:"#F8F8F8",borderLeft:"4px solid #0A0A0A",borderRadius:"0 6px 6px 0"}}>
<p style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"#0A0A0A",lineHeight:1.65,marginBottom:".75rem"}}>"Telugu Foods had a remarkable experience with Sandeep's brand consulting and digital strategy services. His tailored approach and practical strategies helped us launch combos across all mediums, increase distribution leads, and boost our brand visibility to get closer to our customers in less than two months."</p>
<div style={{fontSize:"11px",fontWeight:700,color:"#BBB",letterSpacing:".07em",textTransform:"uppercase"}}>Swetha Telugu Foods · Andhra Pradesh</div>
</div>
</div>
</div>
</div>

{/* CASE 4: Suma Kanakala — Stature */}
<div className="rv" style={{marginBottom:"5rem",paddingBottom:"5rem",borderBottom:"1px solid #EBEBEB"}}>
<div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"2rem",flexWrap:"wrap"}}>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>Stature</span>
<span style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",border:"1px solid #EBEBEB",padding:"4px 14px",borderRadius:20}}>Personal Identity Architecture</span>
</div>
<h2 style={{fontSize:"clamp(1.6rem,3.5vw,2.8rem)",fontWeight:900,letterSpacing:"-.025em",lineHeight:1.1,marginBottom:".5rem"}}>Suma Kanakala</h2>
<p style={{fontSize:"1rem",fontWeight:300,color:"#888",marginBottom:"2.5rem"}}>Actor, Anchor, Entrepreneur · Telugu Film Industry</p>
<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"3rem"}}>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Challenge</div>
<p className="body t300">Suma Kanakala had significant public visibility, established audience trust, and genuine entrepreneurial ambition. The challenge was structural: the public identity was entirely shaped by her media and entertainment roles. When she entered advisory, entrepreneurial, or brand endorsement conversations, there was no structured professional identity architecture that the counterparty could evaluate. Visibility was present. Authority architecture was not.</p>
</div>
<div>
<div style={{fontSize:"10.5px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#CCC",marginBottom:"1rem"}}>The Engagement and Outcome</div>
<p className="body t300">The Stature engagement built a strategic architecture separating the entertainer identity from the professional authority identity. Positioning strategy defined what Suma stood for in advisory and entrepreneurial contexts. A narrative framework was created that travelled from media appearances to board room conversations without contradiction. A digital identity structure gave her professional presence the same coherence that her entertainment presence had always had.</p>
<p className="body t300" style={{marginTop:"1rem"}}>The advisory engagement model and the entrepreneurial positioning now operate as structured professional identities independent of her media roles, enabling commercial conversations that her visibility alone could not previously convert into defined professional relationships.</p>
</div>
</div>
</div>

</div></div>

<div className="sec sec-alt"><div className="si">
<div className="ctabox rv">
<div className="ctabox-h">See if your situation matches what we do.</div>
<p className="ctabox-p">Our team will assess whether the engagement is the right fit and what it would require.</p>
<div className="ctabox-row"><button className="bf" onClick={()=>navigate("contact")}>Start the conversation →</button></div>
</div>
</div></div>
</div>)}

// ─── ABOUT ─────────────────────────────────────────────────────────────────────
function About({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="hero"><div className="hero-noise"/><div className="hero-inner">
<div className="hero-tag">About Magsmen</div>
<div style={{marginBottom:"2.5rem"}}>
<div style={{fontSize:"clamp(2.2rem,5.5vw,5rem)",fontWeight:900,color:"#FFF",lineHeight:1.0,letterSpacing:"-.04em",marginBottom:".5rem"}}>We exist to change</div>
<div style={{fontSize:"clamp(1.8rem,4.5vw,4rem)",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.32)",lineHeight:1.05,letterSpacing:"-.02em"}}>how Indian founders think about brand.</div>
<div style={{fontSize:"clamp(2rem,5vw,4.5rem)",fontWeight:900,color:"rgba(255,255,255,.6)",lineHeight:1.0,letterSpacing:"-.04em",marginTop:".5rem"}}>Permanently.</div>
</div>
<div className="hero-stats rv">
<div className="hs"><span className="hs-n"><Counter target="50+"/></span><span className="hs-l">Brands Architected</span></div>
<div className="hs"><span className="hs-n"><Counter target="8+"/></span><span className="hs-l">Years in Practice</span></div>
<div className="hs"><span className="hs-n"><Counter target="200M+"/></span><span className="hs-l">Platform Views</span></div>
<div className="hs"><span className="hs-n"><Counter target="10000+"/></span><span className="hs-l">Professionals Influenced</span></div>
</div>
</div></div>
<div style={{background:"#0A0A0A",padding:"1.75rem 56px",textAlign:"center"}}>
<div style={{fontSize:"1rem",fontWeight:300,fontStyle:"italic",color:"rgba(255,255,255,.4)",marginBottom:".35rem"}}>"Mana brand strong ga undali ante, first ga mana foundation strong ga undali."</div>
<div style={{fontSize:".85rem",fontWeight:300,color:"rgba(255,255,255,.2)"}}>For our brand to be strong, first our foundation must be strong.</div>
</div>
<div className="sec"><div className="si">
<div className="lbl rv">The Founder</div>
<div className="about-grid">
<div>
<h2 className="h2 rv" style={{marginBottom:"2rem"}}>Sandeep N</h2>
<p className="body rv" style={{marginBottom:"1.25rem"}}>I built Magsmen because the founder in Guntur deserves the same quality of strategic thinking as the corporate in Hyderabad. Not a simplified version of it. The real thing.</p>
<p className="body rv" style={{marginBottom:"1.25rem"}}>After eight years and more than 50 engagements across first-generation MSMEs, IPL sponsor brands, and Fortune 25 organisations, I am more certain of one thing than anything else. The businesses that endure are not the ones that spent the most on marketing. They are the ones that built the clearest brand architecture, protected it legally, and aligned the business around it.</p>
<p className="body rv" style={{marginBottom:"1.25rem"}}>I am also an enrolled advocate. Brand naming and trademark filing, brand positioning and legal brand protection, business structuring and commercial contract design can all be addressed within one engagement. That combination does not exist anywhere else in this market.</p>
<p className="body rv" style={{marginBottom:"2rem"}}>Through InTalks, we have connected more than 200 million views worth of strategic thinking to the founders, professionals, and students across India who need it.</p>
<div className="qblock rv"><div className="qblock-text">Every business has the right to become a brand. That is not a tagline. It is what eight years of this work has proven, one engagement at a time.</div></div>
<div className="brow rv">
<a className="bf" href="mailto:sandeep@magsmen.com">Request a consultation →</a>
<a className="bo dk" href="https://sanstrategies.com" target="_blank">Personal portfolio →</a>
</div>
</div>
<div>
<div className="lbl rv">Credentials</div>
<div className="cred-list rv">
{[
{i:"🎤",t:"TEDx Speaker",s:"Brand strategy and founder identity"},
{i:"⚖️",t:"Enrolled Advocate",s:"Bar Council of India"},
{i:"🏆",t:"Consultant of the Year 2023",s:"The CEO Magazine"},
{i:"🌐",t:"MMA Global Awards Jury",s:"Google, Samsung, Apple, HUL, L'Oréal"},
{i:"🏅",t:"Chair of Jury, SMARTIES APAC",s:"Asia Pacific regional jury"},
{i:"🎓",t:"International MBA, Deakin University",s:"Young Alumni of the Year 2024"},
{i:"📋",t:"ASCI Member",s:"Advertising Standards Council of India"},
{i:"🎙️",t:"InTalks Podcast",s:"200M+ views"},
{i:"🎓",t:"Young Alumni Excellence 2025",s:"KL University"},
{i:"📢",t:"100+ Speeches Delivered",s:"Corporations, universities, professional bodies"},
].map((c,i)=>(
<div key={i} className="cred"><div className="cred-icon">{c.i}</div><div><div className="cred-t">{c.t}</div><div className="cred-s">{c.s}</div></div></div>
))}
</div>
</div>
</div>
</div></div>
<div className="sec sec-alt"><div className="si">
<div className="lbl rv">Testimonials</div>
<h2 className="h2 rv">What clients say <span className="t300i">about the work.</span></h2>
<div className="testi-grid rv">
{TESTIMONIALS_DATA.slice(0,3).map((t,i)=>(
<div key={i} className="testi">
<div className="testi-t">{t.quote}</div>
<div className="testi-who">{t.who}</div>
<div className="testi-role">{t.role}</div>
</div>
))}
</div>
</div></div>
<div className="sec"><div className="si">
<div className="lbl rv">The Ecosystem</div>
<h2 className="h2 rv">One ecosystem. <span className="t300i">Multiple platforms.</span></h2>
<div className="eco-grid rv">
{[
{i:"🏢",n:"Magsmen Strategy Consultants",t:"Core Practice",p:"Brand architecture, business structuring, legal brand protection."},
{i:"🎙️",n:"InTalks Podcast",t:"Content and Influence",p:"200M+ views. 10,000+ founders and professionals reached."},
{i:"📚",n:"Sanstrategies",t:"Education",p:"Personal portfolio and strategic thinking platform."},
{i:"🚀",n:"Launchpad",t:"Startup Support",p:"First-generation founders accessing brand and business guidance."},
{i:"💰",n:"WiseCap Ventures",t:"Investment",p:"Venture advisory for growth-stage businesses."},
{i:"🎨",n:"WiseCap Design Studio",t:"Creative Execution",p:"Design and creative execution arm."},
{i:"💡",n:"MIBBS",t:"Financial Intelligence",p:"Budget intelligence and financial planning for MSMEs."},
{i:"🏗️",n:"Grofessors Innovations",t:"Parent Entity",p:"Holding entity. Registered in Andhra Pradesh."},
].map((e,i)=>(
<div key={i} className={`eco-card rv d${i%4}`}>
<div style={{fontSize:"1.5rem",marginBottom:".65rem"}}>{e.i}</div>
<div className="eco-n">{e.n}</div><div className="eco-t">{e.t}</div><p className="eco-p">{e.p}</p>
</div>
))}
</div>
</div></div>
</div>)}

// ─── CONTACT ───────────────────────────────────────────────────────────────────
function Contact({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">Contact</div>
<h1 className="h1 rv">Tell us about your situation.</h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>Our strategy associate will reach out personally within 24 hours to discuss the right path forward.</p>
<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"4rem"}}>
<div className="rv"><ContactForm sub="Leave your details and our strategy associate will reach out personally within 24 hours."/></div>
</div>
<div style={{marginTop:"4rem",paddingTop:"4rem",borderTop:"1px solid #EBEBEB",display:"grid",gridTemplateColumns:"1fr",gap:"1.75rem"}} className="rv">
{[
{icon:"✉️",label:"Email",v1:"sandeep@magsmen.com",v2:"connect@magsmen.com"},
{icon:"📞",label:"Phone",v1:"+91 90449 10449",v2:"Monday to Saturday, 10am to 7pm IST"},
{icon:"💬",label:"WhatsApp",v1:"919044910449",v2:"Direct response from the team"},
{icon:"📍",label:"Location",v1:"Guntur,Hyderabad,Australia",v2:"Serving businesses across AP, Telangana, and India"},
].map((c,i)=>(
<div key={i} style={{display:"flex",gap:"1.25rem",alignItems:"flex-start"}}>
<div style={{width:40,height:40,border:"1px solid #EBEBEB",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0}}>{c.icon}</div>
<div>
<div style={{fontSize:"11px",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#CCC",marginBottom:".3rem"}}>{c.label}</div>
<div style={{fontSize:"14px",fontWeight:600}}>{c.v1}</div>
<div style={{fontSize:"12px",color:"#888",marginTop:"2px",fontWeight:300}}>{c.v2}</div>
</div>
</div>
))}
</div>
</div></div>
</div>)}

function FAQPage({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">FAQ</div>
<h1 className="h1 rv">The questions most founders have <span className="t300i">before they reach out.</span></h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>Answered directly. No hedging.</p>
<div className="rv"><FAQSection items={FAQS}/></div>
<div style={{marginTop:"3.5rem",padding:"2.75rem",border:"1.5px solid #0A0A0A",borderRadius:8,textAlign:"center"}} className="rv">
<div style={{fontSize:"1.15rem",fontWeight:800,marginBottom:".75rem"}}>Your question is not here?</div>
<p style={{fontSize:".93rem",color:"#555",marginBottom:"1.75rem",lineHeight:1.8,fontWeight:300}}>Ask us directly on WhatsApp or call. Our strategy associate will answer within a few hours.</p>
<div style={{display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center"}}>
<a className="bf" href="https://wa.me/919044910449?text=I have a question" target="_blank">💬 WhatsApp your question</a>
<a className="bo dk" href="tel:+919044910449">+91 90449 10449</a>
</div>
</div>
</div></div>
</div>)}

function Privacy(){return(<div className="pg page-anim"><div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl">Legal</div><h1 className="h1">Privacy Policy</h1>
<p className="lead t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>Last updated: January 2025</p>
<div className="legal-content">
{[
{h:"Information We Collect",p:"Magsmen Strategy Consultants collects information you provide when contacting us, submitting a form, or engaging our services. This includes name, email address, mobile number, company name, and details about your business situation. We also collect standard analytics data."},
{h:"How We Use Your Information",p:"We use information you provide to respond to enquiries, assess your situation before our first conversation, communicate about our services, and improve our advisory practice. We do not sell, rent, or share your information with third parties for their marketing purposes."},
{h:"Information Security",p:"Client information and business details shared during an engagement are held in strict confidence in accordance with the confidentiality obligations in our Consulting Engagement Agreement."},
{h:"Your Rights",p:"You may request access to, correction of, or deletion of information we hold about you. Contact connect@magsmen.com with the subject line Privacy Request."},
{h:"Governing Law",p:"This policy is governed by the laws of India. Our registered office is in Guntur, Andhra Pradesh."},
].map((s,i)=><div key={i} className="legal-section"><h2>{s.h}</h2><p>{s.p}</p></div>)}
</div>
</div></div></div>)}

function Terms(){return(<div className="pg page-anim"><div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl">Legal</div><h1 className="h1">Terms of Service</h1>
<p className="lead t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>Last updated: January 2025</p>
<div className="legal-content">
{[
{h:"Consulting Services",p:"Magsmen Strategy Consultants, a division of Grofessors Innovations Private Limited, provides brand architecture, business structuring, legal brand protection, and advisory services. All consulting engagements are governed by the Consulting Engagement Agreement executed before work commences."},
{h:"Website Use",p:"This website is provided for informational purposes. The content does not constitute legal, financial, or business advice. For advice specific to your situation, a formal consulting engagement is required."},
{h:"Intellectual Property",p:"All content on this website is the intellectual property of Grofessors Innovations Private Limited. Proprietary methodologies including the OTC Five-Pillar Diagnostic, Brand Health Index, and Stature Methodology are protected intellectual property."},
{h:"Legal Advisory Disclaimer",p:"Legal advisory provided through Magsmen does not create a solicitor-client relationship governed by Bar Council professional conduct rules. For matters requiring formal legal representation, engage independent qualified legal counsel."},
{h:"Governing Law",p:"These terms are governed by the laws of India. Exclusive jurisdiction for any dispute is the courts in Guntur, Andhra Pradesh, India."},
].map((s,i)=><div key={i} className="legal-section"><h2>{s.h}</h2><p>{s.p}</p></div>)}
</div>
</div></div></div>)}

function Careers({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">
<div className="sec nb" style={{paddingTop:120}}><div className="si">
<div className="lbl rv">Careers</div>
<h1 className="h1 rv">Work at Magsmen.</h1>
<p className="lead rv t300" style={{marginTop:"1rem",marginBottom:"3rem"}}>We are building a consulting firm that changes how Indian founders think about brand, business, and legal protection. If that mission matters to you and you are willing to do the rigorous intellectual work it requires, we would like to hear from you.</p>
{[
{h:"Brand Strategy Associate",t:"Full-Time · Guntur or Hyderabad",p:"You understand positioning, narrative, and identity at a strategic level. You can conduct a brand audit, write a positioning statement, and explain why a naming decision is wrong without being asked to. 2 to 4 years of relevant experience in brand strategy, consulting, or an adjacent discipline."},
{h:"Legal Research and IP Associate",t:"Full-Time · Guntur",p:"You have a law degree and a serious interest in intellectual property and brand law. You understand how trademark strategy connects to brand strategy. Knowledge of the Trade Marks Act, 1999 is an advantage. Meticulous and able to manage filing timelines independently."},
{h:"Business Research Analyst",t:"Full-Time · Guntur",p:"You understand business models, operational structures, and how MSME businesses actually operate. You can read a P&L, map a process, and identify structural gaps. Experience in business consulting or finance is an advantage."},
{h:"Content and Thought Leadership Associate",t:"Full-Time · Remote or Guntur",p:"You can write in a voice that is precise, warm, and authoritative. You understand the difference between content that informs and content that changes how someone thinks. Familiarity with InTalks and Sanstrategies platforms is an advantage."},
].map((j,i)=>(
<div key={i} className="job-card rv">
<div className="job-h">{j.h}</div>
<div className="job-t">{j.t}</div>
<p className="job-p">{j.p}</p>
</div>
))}
<div style={{marginTop:"3rem"}} className="rv">
<p className="body t300" style={{maxWidth:600,marginBottom:"1.5rem"}}>Send an email to connect@magsmen.com with the role you are interested in as the subject line. Include a brief note on why you are the right person for the role and what you have done that demonstrates it. No templates. A genuine note about your thinking and your work.</p>
<a className="bf" href="mailto:connect@magsmen.com?subject=Career Inquiry">Send your application →</a>
</div>
</div></div>
</div>)}

// ─── BRAND VOLATILITY MATRIX (Proprietary Framework) ──────────────────────────
function BrandVolatilityMatrix({navigate}){const ref=useRef(null);useReveal(ref);return(<div ref={ref} className="pg page-anim">

<div className="sec nb" style={{paddingTop:120,background:"#0A0A0A"}}><div className="si">
<div style={{fontSize:"11px",fontWeight:300,letterSpacing:".16em",textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:"1.5rem"}}>Proprietary Framework · Magsmen Strategy Consultants</div>
<div className="lbl wh rv">The Brand Volatility Matrix</div>
<h1 className="h1 wh rv">Why the most dangerous business is not the failing one.</h1>
<p className="lead wh rv t300" style={{marginTop:"1rem",marginBottom:"2rem"}}>A framework for identifying where a business sits in the relationship between brand architecture strength and business performance — and what that position means for its future.</p>
<div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:"2rem"}} className="rv">
<a className="bf inv" href="mailto:sandeep@magsmen.com?subject=Brand Volatility Matrix" style={{cursor:"pointer"}}>Discuss this framework →</a>
</div>
</div></div>

<div className="pq-full"><div className="si">
<div className="pq-full-text rv">
The businesses that are in the most structural danger are rarely the ones that are failing. They are the ones that <strong>grew successfully without building the brand architecture that would allow that success to sustain itself.</strong>
</div>
</div></div>

<div className="sec"><div className="si">
<div className="lbl rv">The Framework</div>
<h2 className="h2 rv">Two dimensions. Four positions. <span className="t300i">One diagnostic.</span></h2>
<p className="lead rv t300" style={{marginTop:".5rem",marginBottom:"2.5rem"}}>
The Brand Volatility Matrix maps businesses across two dimensions: Brand Architecture Strength on the vertical axis, and Business Performance on the horizontal. Brand Architecture Strength measures how well-defined, differentiated, legally protected, and operationally embedded the brand is. Business Performance measures commercial momentum: revenue growth, market presence, team capability, and distribution reach.
</p>

<div style={{display:"grid",gridTemplateColumns:"1fr",gap:"1.5rem",marginTop:"2.5rem"}} className="rv">

<div style={{border:"1.5px solid #0A0A0A",borderRadius:8,padding:"2.5rem"}}>
<div style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:".75rem"}}>Quadrant 1 · High Architecture + High Performance</div>
<h3 style={{fontSize:"1.1rem",fontWeight:800,marginBottom:".75rem"}}>Brand-Led Businesses</h3>
<p className="body t300" style={{marginBottom:"1.25rem"}}>These businesses compound. The brand commands a genuine price premium because the positioning is clear and consistent. Customer acquisition cost is lower than the category average because the brand earns trust before advertising is needed. The legal portfolio protects the brand equity from competitive imitation. Franchise, licensing, and national expansion conversations are commercially straightforward because the brand travels.</p>
<p className="body t300">These businesses are not common. But they are built, not found. Every one of them passed through one of the other three quadrants on the way here. The ones that stayed were the ones that made the architectural investment before commercial pressure made it feel urgent.</p>
</div>

<div style={{border:"1.5px solid #EBEBEB",borderRadius:8,padding:"2.5rem",background:"#F8F8F8"}}>
<div style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:".75rem"}}>Quadrant 2 · High Architecture + Low Performance</div>
<h3 style={{fontSize:"1.1rem",fontWeight:800,marginBottom:".75rem"}}>Brand Waiting for Business</h3>
<p className="body t300" style={{marginBottom:"1.25rem"}}>A brand that has been architected carefully before the commercial fundamentals were ready. The positioning is clear. The identity is strong. The trademark is filed. But the distribution is not in place, the team is not built, or the product-market fit has not been proven.</p>
<p className="body t300">This is the least common quadrant and the easiest to correct. The foundation is correct. The business execution needs to catch up. The risk is that sustained under-performance erodes the confidence that the brand investment requires to sustain itself.</p>
</div>

<div style={{border:"1.5px solid #0A0A0A",borderRadius:8,padding:"2.5rem",background:"#0A0A0A"}}>
<div style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"rgba(255,255,255,.3)",marginBottom:".75rem"}}>Quadrant 3 · Low Architecture + High Performance</div>
<h3 style={{fontSize:"1.1rem",fontWeight:800,color:"#FFF",marginBottom:".75rem"}}>Fragile Success</h3>
<p style={{fontSize:".97rem",color:"rgba(255,255,255,.55)",lineHeight:1.95,fontWeight:300,marginBottom:"1.25rem"}}>This is the most common quadrant in the AP and Telangana MSME market. It is also the most dangerous position in business. Not because the business is failing. Precisely because it is succeeding.</p>
<p style={{fontSize:".97rem",color:"rgba(255,255,255,.55)",lineHeight:1.95,fontWeight:300,marginBottom:"1.25rem"}}>The business grew through the founder's relationships, personal reputation, and hard work. Revenue is real. Market presence is real. The brand has a name that the regional market recognises. But the brand has no architecture beneath it. No positioning that travels independently of the founder. No identity system that communicates a consistent message across products and markets. No trademark portfolio. No communication framework the team can execute without the founder's direct involvement.</p>
<p style={{fontSize:".97rem",color:"rgba(255,255,255,.55)",lineHeight:1.95,fontWeight:300,marginBottom:"1.25rem"}}>The volatility is invisible until a specific event triggers it. A competitor enters the category with sharper positioning and takes market share within one season. A franchise negotiation stalls because the buyer cannot evaluate the brand as an asset separate from the founder's personality. A trademark dispute arrives because the brand became valuable enough for someone else to attempt to register a version of it. A leadership transition creates brand confusion because nothing was documented.</p>
<p style={{fontSize:".97rem",color:"rgba(255,255,255,.8)",lineHeight:1.95,fontWeight:600}}>The window for correction is open while performance is strong. When performance weakens, the same correction requires three times the investment and produces half the result. This is the most urgent client in the room. And they rarely feel the urgency.</p>
</div>

<div style={{border:"1.5px solid #EBEBEB",borderRadius:8,padding:"2.5rem"}}>
<div style={{fontSize:"10px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#CCC",marginBottom:".75rem"}}>Quadrant 4 · Low Architecture + Low Performance</div>
<h3 style={{fontSize:"1.1rem",fontWeight:800,marginBottom:".75rem"}}>Invisible Businesses</h3>
<p className="body t300" style={{marginBottom:"1.25rem"}}>Low brand architecture and low commercial performance. These businesses need both dimensions addressed. The sequence matters: start with the commercial fundamentals. Confirm that the product-market fit is real, the pricing model is viable, and the team has the capability to deliver before investing in brand architecture.</p>
<p className="body t300">A brand built on a business that is not yet commercially viable will not save that business. Architecture cannot substitute for fundamental commercial viability. The sequence is: business fundamentals first, brand architecture second.</p>
</div>

</div>
</div></div>

<div className="sec sec-alt"><div className="si">
<div className="lbl rv">The Insight That Matters</div>
<h2 className="h2 rv">Why most founders misread <span className="t300i">their own position.</span></h2>
<p className="lead rv t300" style={{marginTop:".5rem",marginBottom:"2.5rem"}}>Eight years of brand architecture work across fifty businesses in AP and Telangana has produced one observation above all others.</p>
<div className="tl-wrap rv"><div className="tl-spine"><div className="tl-fill"/></div>
{[
{h:"Proximity creates a specific kind of blindness",p:"Founders who are inside their business every day see activity but miss structure. Revenue feels like proof of brand health. Distributor relationships feel like brand equity. Customer familiarity feels like positioning clarity. None of these are the same thing. The Brand Volatility Matrix was built to surface the difference between the commercial performance a business is experiencing and the architectural foundation that performance is resting on.",d:.0},
{h:"The most dangerous belief is: we have been growing, so we must be doing something right",p:"Growth is evidence that the commercial model is working. It is not evidence that the brand is architectured. A business can grow significantly through the founder's network, market timing, and product quality alone. But that growth does not build the brand asset. It builds the founder's reputation. These are not the same thing and they do not transfer the same way.",d:.08},
{h:"The event that reveals Quadrant 3 always feels sudden",p:"Founders in Fragile Success positions consistently describe the moment they realised their brand had no foundation as sudden. A competitor appeared. A dispute arrived. A partnership fell through. An expansion attempt stalled. But the vulnerability was not sudden. It was structural. It had been building for years. The event only revealed what the architecture work would have prevented.",d:.08},
{h:"The correction is not expensive relative to the alternative",p:"The investment required to move from Quadrant 3 to Quadrant 1 is predictable, scoped, and time-bound. The cost of waiting for the triggering event and then correcting from a position of commercial pressure is almost always significantly higher. Not because the work is more complex. Because the urgency changes the negotiating position on every decision the brand needs to make while the correction is underway.",d:.08},
].map((s,i)=>(
<div key={i} className="tl-item" style={{"--d":`${s.d}s`}}>
<div className="tl-dot">{i+1}</div>
<div><div className="tl-item-h">{s.h}</div><div className="tl-item-p">{s.p}</div></div>
</div>
))}
</div>
</div></div>

<div className="sec"><div className="si">
<div className="lbl rv">How This Framework Is Applied</div>
<h2 className="h2 rv">The matrix is a diagnostic tool, <span className="t300i">not a scorecard.</span></h2>
<p className="lead rv t300" style={{marginTop:".5rem",marginBottom:"2.5rem"}}>In practice, the Brand Volatility Matrix is used in the OTC engagement as part of the strategic synthesis. After the Five-Pillar Audit produces the evidence, the matrix positions the business within one of the four quadrants and makes the prescription structurally obvious.</p>
<div className="g2">
{[
{h:"For the Quadrant 1 business",p:"The engagement focus is on deepening and protecting what exists. Trademark portfolio maintenance, communication system refinement, and strategic advisory that ensures brand-led decisions remain brand-led as the business scales further."},
{h:"For the Quadrant 2 business",p:"The engagement focus is on commercial system design. The brand architecture is the asset. The business operations need to match the ambition the brand has established. Business structuring, revenue model review, and operational framework design are the priorities."},
{h:"For the Quadrant 3 business",p:"The engagement focus is on architecture before the triggering event arrives. Brand audit to establish the baseline. Positioning strategy to define the territory the business actually owns. Legal brand protection to secure it. This is the most common engagement at Magsmen and the one that produces the most consequential outcomes."},
{h:"For the Quadrant 4 business",p:"The engagement focus is sequential. Confirm commercial viability first. Once the business fundamentals are established, the brand architecture conversation begins. The sequence is non-negotiable."},
].map((k,i)=><div key={i} className={`kl rv d${i%2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
</div>
<div className="pq-full rv" style={{marginTop:"3rem"}}>
<div className="pq-full-text">The Brand Volatility Matrix does not tell a business what to do. It tells it <strong>where it is standing and what the floor beneath it is made of.</strong> Everything else follows from that clarity.</div>
</div>
<div className="ctabox rv" style={{marginTop:"3rem"}}>
<div className="ctabox-h">Find out where your business sits <span className="t300i">in the matrix.</span></div>
<p className="ctabox-p">The OTC engagement applies the Brand Volatility Matrix as part of the diagnostic. Our strategy associate will reach out personally within 24 hours.</p>
<div className="ctabox-row">
<button className="bf" onClick={()=>navigate("otc")}>Start with OTC →</button>
<button className="bo dk" onClick={()=>navigate("contact")}>Talk to the team →</button>
</div>
</div>
</div></div>

</div>)}



  const featuredBlog = BLOGS[0];

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  // const [loaded, setLoaded] = useState(false)
  const [page, setPage] = useState("home")
  const [showPopup, setShowPopup] = useState(false)
  const navigate = (p: SetStateAction<string>) => { setPage(p); window.scrollTo({top:0,behavior:"smooth"}) }
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);


useEffect(() => {
  // Check if user already submitted — never show again
  const alreadySubmitted = localStorage.getItem("magsmen_popup_submitted")
  if (alreadySubmitted === "true") return  // ← never show popup

  // Show popup after 12 seconds
  const t = setTimeout(() => setShowPopup(true), 12000)
  return () => clearTimeout(t)
}, [])

// Called after successful form submit
const handlePopupSubmitDone = () => {
  localStorage.setItem("magsmen_popup_submitted", "true")  // ← save flag
  setShowPopup(false)  // ← close popup
}



{showPopup && (
  <PopupForm
    onClose={() => setShowPopup(false)}
    onSubmitDone={handlePopupSubmitDone}  // ← new prop
  />
)}




  // useEffect(() => {
  //   const t = setTimeout(() => setShowPopup(true), 9000)
  //   return () => clearTimeout(t)
  // }, [])




//   useEffect(() => {

//   const timer = setInterval(() => {

//     setShowPopup(true);

//   }, 12000);

//   return () => clearInterval(timer);

// }, []);


  const renderPage = () => {
    if (page==="home")            return <Home navigate={navigate}/>
    if (page==="brand")           return <BrandPage navigate={navigate}/>
    if (page==="brand/audit")     return <BrandAuditPage navigate={navigate}/>
    if (page==="brand/creation")  return <BrandCreationPage navigate={navigate}/>
    if (page==="brand/positioning") return <BrandPositioningPage navigate={navigate}/>
    if (page==="brand/identity")  return <BrandIdentityPage navigate={navigate}/>
    if (page==="brand/communication") return <BrandCommunicationPage navigate={navigate}/>
    if (page==="brand/express")   return <BrandExpressPage navigate={navigate}/>
    if (page==="stature")         return <StaturePage navigate={navigate}/>
    if (page==="otc")             return <OTCPage navigate={navigate}/>
    if (page==="business")        return <BusinessPage navigate={navigate}/>
    if (page==="legal")           return <LegalPage navigate={navigate}/>
    if (page==="advisory")        return <AdvisoryPage navigate={navigate}/>
    if (page==="engagements")     return <Engagements navigate={navigate}/>
    if (page==="brand-volatility-matrix") return <BrandVolatilityMatrix navigate={navigate}/>
    if (page==="insights")        return <Insights navigate={navigate}/>
    if (page.startsWith("blog/")) return <BlogPost id={page.replace("blog/","")} navigate={navigate}/>
    if (page==="about")           return <About navigate={navigate}/>
    if (page==="contact")         return <Contact navigate={navigate}/>
    if (page==="faq")             return <FAQPage navigate={navigate}/>
    if (page==="privacy")         return <Privacy/>
    if (page==="terms")           return <Terms/>
    if (page==="careers")         return <Careers navigate={navigate}/>
    return <Home navigate={navigate}/>
  }

//   if (!loaded) return <Preloader onDone={() => setLoaded(true)}/>

  return (
    <>
      <style>{CSS}</style>
      <ReadingProgress/>
      <Nav page={page} navigate={navigate}/>
      {renderPage()}
      <Footer navigate={navigate}/>
      <WhatsAppFloat/>
      <MobileSticky/>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)}/>}
    </>
  )
}
