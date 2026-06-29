import { useState, useEffect, useRef } from "react"
import { ArrowRight, ChevronDown, Check, X, Menu, Shield, Award, Star, Briefcase, Globe, Scale, Users, BookOpen, Phone, Mail, MapPin, ExternalLink } from "lucide-react"

import LOGO  from "/assets/magsmen-new-logo-black-horizontal-landscape.png";






const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;font-size:16px}
body{font-family:'Montserrat',sans-serif;background:#FFFFFF;color:#0A0A0A;line-height:1.75;-webkit-font-smoothing:antialiased;overflow-x:hidden}
::selection{background:#0A0A0A;color:#FFFFFF}
button,a{cursor:pointer;font-family:inherit}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}

/* Animations */
.rv{opacity:0;transform:translateY(20px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)}
.rv.on{opacity:1;transform:translateY(0)}
.rv.d1{transition-delay:.08s}
.rv.d2{transition-delay:.16s}
.rv.d3{transition-delay:.24s}
.rv.d4{transition-delay:.32s}
.rv.d5{transition-delay:.40s}
.fade{opacity:0;transition:opacity .55s ease}
.fade.on{opacity:1}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:950;height:68px;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:40px;transition:background .3s,box-shadow .3s,padding .3s}
.nav.scrolled{background:rgba(255,255,255,.98);backdrop-filter:blur(16px);box-shadow:0 1px 0 #EBEBEB}
.nav-logo{flex-shrink:0;cursor:pointer;display:flex;align-items:center}
.nav-logo img{height:24px;width:auto}
.nav-links{display:none;list-style:none;align-items:center;gap:0;flex:1;justify-content:center}
.nav-link{position:relative}
.nav-link > a,.nav-link > button{font-size:13px;font-weight:500;color:#555;background:none;border:none;padding:8px 14px;display:flex;align-items:center;gap:3px;letter-spacing:.01em;white-space:nowrap}
.nav-link > a:hover,.nav-link > button:hover{color:#0A0A0A}
.nav-link.active > a{color:#0A0A0A}
.nav-drop{position:absolute;top:calc(100% + 6px);left:0;background:#FFF;border:1px solid #EBEBEB;border-radius:8px;padding:8px 0;min-width:230px;box-shadow:0 8px 30px rgba(0,0,0,.1);opacity:0;pointer-events:none;transform:translateY(-6px);transition:opacity .2s,transform .2s;z-index:10}
.nav-link:hover .nav-drop,.nav-link:focus-within .nav-drop{opacity:1;pointer-events:auto;transform:translateY(0)}
.nav-drop a{display:flex;align-items:center;gap:10px;padding:11px 18px;font-size:13px;font-weight:500;color:#333}
.nav-drop a:hover{background:#F5F5F5;color:#0A0A0A}
.nav-drop-icon{width:28px;height:28px;border-radius:4px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
.nav-cta{flex-shrink:0;font-size:13px;font-weight:700;color:#FFF;background:#0A0A0A;border:none;padding:10px 22px;border-radius:5px;white-space:nowrap;letter-spacing:.01em}
.nav-cta:hover{background:#222}
.nav-ham{display:flex;align-items:center;justify-content:center;background:none;border:none;padding:8px;color:#0A0A0A}
.mob-menu{position:fixed;inset:0;z-index:940;background:#FFF;padding:80px 32px 40px;display:flex;flex-direction:column;gap:0;overflow-y:auto}
.mob-link{font-size:1.2rem;font-weight:700;color:#0A0A0A;padding:1.1rem 0;border-bottom:1px solid #F0F0F0;display:block}
.mob-sub{font-size:.95rem;font-weight:500;color:#555;padding:.75rem 0 .75rem 1rem;display:block;border-bottom:1px solid #F5F5F5}
.mob-cta{margin-top:2rem;display:block;font-size:15px;font-weight:700;color:#FFF;background:#0A0A0A;padding:15px 28px;border-radius:5px;text-align:center}

/* Layout */
.pg{padding-top:68px}
.hero{padding:100px 48px 90px;border-bottom:1px solid #EBEBEB}
.hero-c{max-width:1200px;margin:0 auto}
.sec{padding:100px 48px;border-top:1px solid #EBEBEB}
.sec.nb{border-top:none}
.si{max-width:1200px;margin:0 auto}
.sec-alt{background:#FAFAFA}
.sec-blk{background:#0A0A0A}

/* Typography */
.lbl{font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#999;display:flex;align-items:center;gap:10px;margin-bottom:1.5rem}
.lbl::before{content:'';width:24px;height:1.5px;background:#CCC;flex-shrink:0;display:block}
.lbl.wh{color:rgba(255,255,255,.4)}
.lbl.wh::before{background:rgba(255,255,255,.25)}
h1.h1{font-size:clamp(2.4rem,6vw,4.6rem);font-weight:800;line-height:1.04;letter-spacing:-.03em;color:#0A0A0A;margin-bottom:1.75rem}
h2.h2{font-size:clamp(1.9rem,3.8vw,3.2rem);font-weight:800;line-height:1.08;letter-spacing:-.02em;color:#0A0A0A;margin-bottom:1.1rem}
h3.h3{font-size:1.25rem;font-weight:700;line-height:1.3;color:#0A0A0A;margin-bottom:.65rem}
.lead{font-size:1.05rem;color:#555;max-width:660px;line-height:1.95;margin-bottom:0}
.body{font-size:.97rem;color:#555;line-height:1.95}
.wh h2,.wh h3{color:#FFF}
.wh .lead,.wh .body{color:rgba(255,255,255,.6)}

/* Buttons */
.bf{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:700;color:#FFF;background:#0A0A0A;border:1.5px solid #0A0A0A;padding:13px 28px;border-radius:5px;display:inline-flex;align-items:center;gap:7px;letter-spacing:.01em}
.bf:hover{background:#222;border-color:#222;transform:translateY(-1px)}
.bo{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:600;color:#0A0A0A;background:transparent;border:1.5px solid #CBCBCB;padding:13px 28px;border-radius:5px;display:inline-flex;align-items:center;gap:7px}
.bo:hover{border-color:#0A0A0A;transform:translateY(-1px)}
.bf-sm{font-family:'Montserrat',sans-serif;font-size:13px;font-weight:700;color:#FFF;background:#0A0A0A;border:none;padding:10px 20px;border-radius:4px;display:inline-flex;align-items:center;gap:6px}
.bf-sm:hover{background:#222}
.bo-sm{font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;color:#0A0A0A;background:transparent;border:1.5px solid #DDD;padding:10px 20px;border-radius:4px;display:inline-flex;align-items:center;gap:6px}
.bo-sm:hover{border-color:#0A0A0A}
.brow{display:flex;flex-wrap:wrap;gap:12px;margin-top:2.75rem}

/* Stats */
.stats{display:grid;grid-template-columns:repeat(2,1fr);gap:0;margin-top:4rem;padding-top:3.5rem;border-top:1px solid #EBEBEB}
.stat{padding-right:3rem;border-right:1px solid #EBEBEB}
.stat:nth-child(odd){padding-left:0}
.stat:nth-child(even){padding-left:3rem;border-right:none}
.stat-n{font-size:clamp(2.2rem,5vw,3.4rem);font-weight:800;letter-spacing:-.04em;line-height:1;color:#0A0A0A;display:block}
.stat-l{font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#AAA;margin-top:8px;display:block}

/* Prob block */
.prob{margin-top:3rem;border:1px solid #EBEBEB;border-radius:8px;overflow:hidden}
.prob-row{display:grid;grid-template-columns:1fr;gap:.75rem;padding:1.75rem 2.5rem;border-bottom:1px solid #EBEBEB}
.prob-row:last-child{border-bottom:none}
.prob-lbl{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#BBB}
.prob-txt{font-size:.96rem;color:#333;line-height:1.9}

/* Grids */
.g2{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem}
.g3{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}

/* Keyline */
.kl{border-left:3px solid #0A0A0A;padding-left:1.5rem}
.kl-h{font-size:14px;font-weight:700;margin-bottom:.5rem}
.kl-p{font-size:.93rem;color:#555;line-height:1.9}

/* Service cards */
.sc{border:1px solid #EBEBEB;border-radius:6px;padding:2.25rem;transition:border-color .2s,box-shadow .2s,transform .2s}
.sc:hover{border-color:#0A0A0A;box-shadow:0 6px 28px rgba(0,0,0,.07);transform:translateY(-3px)}
.sc-n{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#BBB;margin-bottom:1rem}
.sc-h{font-size:1.1rem;font-weight:800;margin-bottom:.65rem}
.sc-d{font-size:.92rem;color:#555;line-height:1.9}
.sc-ul{list-style:none;margin-top:1.25rem;display:flex;flex-direction:column;gap:.4rem}
.sc-ul li{font-size:12px;color:#777;padding-left:1rem;position:relative;font-weight:500}
.sc-ul li::before{content:'';position:absolute;left:0;top:.55em;width:4px;height:4px;background:#0A0A0A;border-radius:50%}

/* Process */
.proc{margin-top:2.5rem}
.proc-item{display:flex;gap:1.75rem;padding:1.75rem 0;border-bottom:1px solid #F0F0F0;align-items:flex-start}
.proc-item:last-child{border-bottom:none}
.proc-n{width:42px;height:42px;border:1.5px solid #0A0A0A;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;flex-shrink:0}
.proc-h{font-size:15px;font-weight:700;margin-bottom:.35rem}
.proc-d{font-size:.92rem;color:#555;line-height:1.8}

/* HWW */
.hww-item{display:grid;grid-template-columns:1fr;gap:.75rem;padding:2.5rem 0;border-bottom:1px solid #EBEBEB}
.hww-item:first-child{border-top:1px solid #EBEBEB}
.hww-n{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#BBB}
.hww-h{font-size:1.1rem;font-weight:800;margin-bottom:.4rem}
.hww-p{font-size:.93rem;color:#555;line-height:1.9;max-width:580px}

/* Risk table */
.rtable{margin-top:2.5rem;border:1px solid #EBEBEB;border-radius:8px;overflow:hidden}
.rrow{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #EBEBEB}
.rrow:last-child{border-bottom:none}
.rrow.rh{background:#F8F8F8}
.rc{padding:1rem 1.5rem;font-size:.88rem;color:#333;line-height:1.7}
.rc:first-child{border-right:1px solid #EBEBEB;font-weight:600;color:#0A0A0A}

/* Advisory tiers */
.atiers{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:2.5rem}
.atier{border:1.5px solid #EBEBEB;border-radius:8px;padding:2.5rem;display:flex;flex-direction:column;transition:border-color .2s,box-shadow .2s}
.atier:hover{border-color:#666;box-shadow:0 6px 28px rgba(0,0,0,.07)}
.atier.feat{border-color:#0A0A0A}
.atier-badge{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:#0A0A0A;color:#FFF;padding:3px 12px;border-radius:20px;display:inline-block;margin-bottom:1.1rem}
.atier-n{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#BBB;margin-bottom:.65rem}
.atier-h{font-size:1.25rem;font-weight:800;margin-bottom:.65rem}
.atier-p{font-size:.92rem;color:#555;line-height:1.9;flex:1;margin-bottom:1.5rem}
.atier-inc{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#BBB;margin-bottom:.75rem}
.atier-ul{list-style:none;display:flex;flex-direction:column;gap:.45rem;margin-bottom:1.75rem}
.atier-ul li{font-size:13px;color:#444;padding-left:1.4rem;position:relative;font-weight:500}
.atier-ul li::before{content:"\\2713";position:absolute;left:0;font-size:11px;font-weight:800;color:#0A0A0A}

/* Stature */
.stature-hero{background:#0A0A0A;border-radius:8px;padding:4rem 3.5rem;margin-top:3rem}
.stature-tag{font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.15);padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:1.5rem}
.stature-h{font-size:clamp(1.9rem,4.5vw,3rem);font-weight:800;color:#FFF;line-height:1.08;letter-spacing:-.02em;margin-bottom:1rem}
.stature-sub{font-size:1.02rem;color:rgba(255,255,255,.6);line-height:1.95;max-width:640px}
.snot-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:2.5rem}
.snot{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:1.75rem}
.snot-h{font-size:13px;font-weight:700;color:#FFF;margin-bottom:.5rem}
.snot-p{font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.8}
.serves-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:2.5rem}
.serves-card{border:1px solid #EBEBEB;border-radius:6px;padding:1.75rem;transition:border-color .2s,transform .2s}
.serves-card:hover{border-color:#0A0A0A;transform:translateY(-2px)}
.serves-h{font-size:13px;font-weight:700;margin-bottom:.45rem}
.serves-p{font-size:.9rem;color:#555;line-height:1.8}
.stature-clients{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.5rem}
.sc-person{padding:1.25rem 1.5rem;border:1px solid #EBEBEB;border-radius:6px;transition:border-color .2s}
.sc-person:hover{border-color:#0A0A0A}
.sc-pname{font-size:14px;font-weight:700}
.sc-prole{font-size:12px;color:#888;margin-top:3px}
.tier-wrap{margin-top:2.5rem;display:flex;flex-direction:column;gap:1rem}
.tier-card{border:1px solid #EBEBEB;border-radius:6px;padding:1.75rem}
.tier-pill{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:#F0F0F0;color:#555;padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:.65rem}
.tier-card-h{font-size:1rem;font-weight:800;margin-bottom:.4rem}
.tier-card-p{font-size:.9rem;color:#555;line-height:1.8}

/* Council */
.council-sec{background:#0A0A0A;border-radius:8px;padding:4rem 3.5rem;margin-top:3rem}
.council-grid{display:grid;grid-template-columns:1fr;gap:3rem;margin-top:2.5rem}
.c-h{font-size:clamp(1.5rem,3vw,2.2rem);font-weight:800;color:#FFF;line-height:1.18;margin-bottom:1rem}
.c-p{font-size:.95rem;color:rgba(255,255,255,.58);line-height:1.95}
.c-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:1.5rem}
.c-tag{font-size:12px;font-weight:600;color:rgba(255,255,255,.75);background:rgba(255,255,255,.07);padding:6px 14px;border-radius:3px;border:1px solid rgba(255,255,255,.1)}
.c-note{margin-top:1.5rem;padding:1.5rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:6px}
.c-note p{font-size:.9rem;color:rgba(255,255,255,.5);line-height:1.9}
.c-when{margin-top:2rem;display:flex;flex-direction:column;gap:1rem}
.c-when-item{display:flex;gap:.85rem;align-items:flex-start}
.c-when-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35);margin-top:.55rem;flex-shrink:0}
.c-when-p{font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.8}

/* Quote */
.qblock{border-left:4px solid #0A0A0A;padding:1.75rem 2rem;background:#F8F8F8;border-radius:0 6px 6px 0;margin:2.5rem 0}
.qblock-text{font-size:1.08rem;font-weight:600;color:#0A0A0A;line-height:1.6;font-style:italic}
.qblock-attr{font-size:11px;font-weight:700;color:#999;margin-top:.75rem;letter-spacing:.07em;text-transform:uppercase}

/* CTA box */
.ctabox{border:1.5px solid #0A0A0A;border-radius:8px;padding:4.5rem 3.5rem;text-align:center}
.ctabox-h{font-size:clamp(1.5rem,3vw,2.4rem);font-weight:800;letter-spacing:-.02em;line-height:1.18;margin-bottom:1rem}
.ctabox-p{font-size:.97rem;color:#555;max-width:440px;margin:0 auto 2.25rem;line-height:1.95}
.ctabox-row{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}

/* Contact form */
.cform{margin-top:0}
.cform-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:1.5rem}
.cfield{display:flex;flex-direction:column;gap:.45rem}
.cfield label{font-size:12px;font-weight:700;color:#555;letter-spacing:.06em;text-transform:uppercase}
.cfield input,.cfield textarea,.cfield select{font-family:'Montserrat',sans-serif;font-size:14px;font-weight:500;color:#0A0A0A;background:#FFF;border:1.5px solid #EBEBEB;border-radius:5px;padding:12px 16px;outline:none;transition:border-color .2s;width:100%}
.cfield input:focus,.cfield textarea:focus,.cfield select:focus{border-color:#0A0A0A}
.cfield input::placeholder,.cfield textarea::placeholder{color:#BBB}
.cfield textarea{resize:vertical;min-height:110px}
.cfield.req label::after{content:' *';color:#999}
.cform-ok{text-align:center;padding:3rem 0}
.cform-ok-icon{font-size:2.5rem;margin-bottom:1rem}
.cform-ok h3{font-size:1.1rem;font-weight:800;margin-bottom:.5rem}
.cform-ok p{font-size:.93rem;color:#555;line-height:1.8;max-width:360px;margin:0 auto 1.5rem}

/* Inline form */
.iform{border:1.5px solid #0A0A0A;border-radius:8px;padding:3rem 2.75rem}
.iform-h{font-size:1.3rem;font-weight:800;margin-bottom:.4rem}
.iform-sub{font-size:.93rem;color:#555;margin-bottom:2.25rem;line-height:1.75}
.iform-q{margin-bottom:2rem}
.iform-qh{font-size:13px;font-weight:700;margin-bottom:.85rem}
.iform-opts{display:flex;flex-direction:column;gap:.5rem}
.iform-opt{display:flex;align-items:center;gap:.9rem;padding:12px 16px;border:1.5px solid #EBEBEB;border-radius:5px;cursor:pointer;transition:border-color .15s,background .15s}
.iform-opt:hover{border-color:#999}
.iform-opt.sel{border-color:#0A0A0A;background:#F8F8F8}
.iform-cb{width:18px;height:18px;border:1.5px solid #DDD;border-radius:3px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s,border-color .15s}
.iform-opt.sel .iform-cb{background:#0A0A0A;border-color:#0A0A0A}
.iform-ot{font-size:14px;font-weight:500}

/* Blog */
.blog-grid{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem}
.blog-card{border:1px solid #EBEBEB;border-radius:8px;overflow:hidden;cursor:pointer;transition:border-color .2s,box-shadow .2s,transform .2s}
.blog-card:hover{border-color:#0A0A0A;box-shadow:0 8px 32px rgba(0,0,0,.08);transform:translateY(-3px)}
.blog-img{height:200px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;overflow:hidden}
.blog-img-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem}
.blog-body{padding:1.75rem}
.blog-cat{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#999;margin-bottom:.75rem}
.blog-title{font-size:1.1rem;font-weight:800;line-height:1.3;margin-bottom:.65rem;color:#0A0A0A}
.blog-excerpt{font-size:.9rem;color:#666;line-height:1.85;margin-bottom:1.25rem}
.blog-meta{font-size:12px;color:#AAA;font-weight:500}

/* Blog single */
.blog-hero{background:#F8F8F8;padding:4rem 48px}
.blog-hero-c{max-width:800px;margin:0 auto}
.blog-content{max-width:800px;margin:0 auto}
.blog-content h2{font-size:1.4rem;font-weight:800;margin:2.5rem 0 1rem;letter-spacing:-.01em}
.blog-content p{font-size:1rem;color:#444;line-height:2;margin-bottom:1.5rem}
.blog-content .pullquote{border-left:4px solid #0A0A0A;padding:1.5rem 2rem;background:#F8F8F8;margin:2.5rem 0;font-size:1.1rem;font-weight:600;font-style:italic;line-height:1.6;color:#0A0A0A;border-radius:0 6px 6px 0}

/* About */
.about-grid{display:grid;grid-template-columns:1fr;gap:4rem;margin-top:2.5rem}
.cred-list{display:flex;flex-direction:column;gap:.85rem}
.cred{display:flex;gap:1rem;align-items:flex-start;border:1px solid #EBEBEB;border-radius:6px;padding:1.25rem;transition:border-color .2s}
.cred:hover{border-color:#0A0A0A}
.cred-icon{width:36px;height:36px;border-radius:5px;background:#F5F5F5;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cred-t{font-size:13px;font-weight:700;margin-bottom:3px}
.cred-s{font-size:12px;color:#888}
.eco-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem}
.eco-card{border:1px solid #EBEBEB;border-radius:6px;padding:1.5rem}
.eco-name{font-size:14px;font-weight:800;margin-bottom:.35rem}
.eco-desc{font-size:12px;color:#777;line-height:1.75}

/* Footer */
footer{background:#0A0A0A;padding:6rem 48px 3rem}
.fi{max-width:1200px;margin:0 auto}
.f-grid{display:grid;grid-template-columns:1fr;gap:3rem;padding-bottom:3.5rem;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:2.5rem}
.f-logo{margin-bottom:1rem}
.f-logo img{height:22px;filter:invert(1);opacity:.8}
.f-tagline{font-size:12px;color:rgba(255,255,255,.3);margin-top:6px;margin-bottom:1.5rem}
.f-desc{font-size:13px;color:rgba(255,255,255,.38);line-height:1.85;max-width:280px}
.f-h{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.25);margin-bottom:1.25rem}
.f-ul{list-style:none;display:flex;flex-direction:column;gap:.65rem}
.f-ul a{font-size:13px;font-weight:500;color:rgba(255,255,255,.42);cursor:pointer}
.f-ul a:hover{color:#FFF}
.f-cert{display:flex;flex-direction:column;gap:.6rem;margin-top:1.5rem}
.f-cert-item{font-size:11px;color:rgba(255,255,255,.3);font-weight:500}
.f-bot{display:flex;flex-direction:column;gap:.5rem}
.f-copy{font-size:12px;color:rgba(255,255,255,.2)}

/* Popup */
.pop-ov{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}
.pop-box{background:#FFF;border-radius:10px;width:100%;max-width:560px;max-height:90vh;overflow-y:auto;padding:3.5rem 3rem;position:relative}
.pop-close{position:absolute;top:22px;right:22px;background:none;border:none;padding:4px;color:#BBB;display:flex}
.pop-close:hover{color:#0A0A0A}
.pop-badge{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#999;border:1px solid #EBEBEB;padding:4px 14px;border-radius:20px;display:inline-block;margin-bottom:1.5rem}
.pop-h{font-size:1.4rem;font-weight:800;margin-bottom:.65rem;line-height:1.2}
.pop-p{font-size:.93rem;color:#555;line-height:1.85;margin-bottom:2rem}
.pop-prog{display:flex;gap:4px;margin-bottom:2rem}
.pop-dot{flex:1;height:2.5px;background:#EBEBEB;border-radius:2px;transition:background .3s}
.pop-dot.done{background:#0A0A0A}
.pop-qn{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#BBB;margin-bottom:.75rem}
.pop-qt{font-size:1rem;font-weight:700;margin-bottom:1.1rem}
.pop-skip{font-size:12px;color:#CCC;text-decoration:underline;cursor:pointer;margin-top:1.25rem;text-align:center;display:block;background:none;border:none;font-family:inherit}
.pop-rec{background:#F5F5F5;border-radius:6px;padding:2rem;margin-top:1.25rem}
.pop-rec-lbl{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#BBB;margin-bottom:.45rem}
.pop-rec-h{font-size:1.1rem;font-weight:800;margin-bottom:.55rem}
.pop-rec-p{font-size:.9rem;color:#555;line-height:1.85}

/* Responsive */
@media(min-width:600px){
  .g2{grid-template-columns:1fr 1fr}
  .snot-grid{grid-template-columns:repeat(3,1fr)}
  .serves-grid{grid-template-columns:1fr 1fr}
  .stats{grid-template-columns:repeat(4,1fr)}
  .stat:nth-child(n){padding-right:2.5rem;padding-left:2.5rem;border-right:1px solid #EBEBEB}
  .stat:first-child{padding-left:0}
  .stat:last-child{border-right:none}
  .stature-clients{grid-template-columns:repeat(3,1fr)}
  .cform-grid{grid-template-columns:1fr 1fr}
  .blog-grid{grid-template-columns:1fr 1fr}
  .eco-grid{grid-template-columns:repeat(3,1fr)}
}
@media(min-width:768px){
  .g3{grid-template-columns:repeat(3,1fr)}
  .atiers{grid-template-columns:repeat(3,1fr)}
  .council-grid{grid-template-columns:1fr 1fr;gap:5rem}
  .serves-grid{grid-template-columns:repeat(3,1fr)}
  .about-grid{grid-template-columns:3fr 2fr;gap:6rem}
  .hww-item{grid-template-columns:170px 1fr;gap:3rem;align-items:start}
  .blog-grid{grid-template-columns:repeat(3,1fr)}
  .tier-wrap{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
  .f-grid{grid-template-columns:2.5fr 1fr 1fr 1fr 1fr}
}
@media(min-width:1024px){
  .nav-links{display:flex}
  .nav-ham{display:none}
  .hero{padding:120px 56px 100px}
  .sec{padding:120px 56px}
  .blog-hero{padding:4rem 56px}
  footer{padding:6rem 56px 3rem}
  .ctabox{padding:6rem 5rem}
  .prob-row{grid-template-columns:190px 1fr}
}
@media(min-width:768px) and (max-width:1023px){
  .nav-ham{display:flex}
  .nav-links{display:none}
}
`

// ─── DATA ────────────────────────────────────────────────────────────────────
const POPUP_QS = [
  { q: "What best describes your business?", opts: ["A growing regional brand (3\u201315 years old)", "A family business ready for the next chapter", "A new venture being built from scratch", "An established business needing repositioning"] },
  { q: "What is your primary challenge right now?", opts: ["My brand is not clearly defined or differentiated", "My business needs structural and operational clarity", "My brand identity is not legally protected", "All of these \u2014 I need integrated advisory"] },
  { q: "What outcome matters most to you?", opts: ["Build a brand that becomes a recognisable asset", "Create a business structure that runs without me", "Protect what I have built legally", "Scale with a clear strategic foundation"] },
  { q: "When are you looking to begin?", opts: ["Immediately \u2014 this is urgent", "Within the next 1 to 3 months", "Planning for later this year", "Just exploring right now"] },
]

const BLOGS = [
  {
    id: "brand-economic-asset",
    cat: "Brand Strategy",
    title: "Brand Is an Economic Asset. Stop Treating It Like a Marketing Budget.",
    excerpt: "Most Indian founders treat brand as an expense. A logo cost. A campaign budget. That framing is the root cause of why they can never stop spending on advertising.",
    date: "June 2025",
    readTime: "6 min read",
    icon: "\ud83d\udcca",
    content: [
      { type: "p", text: "There is a calculation every founder eventually runs. How much did I spend on marketing this quarter? How many leads did it produce? Was it worth it?" },
      { type: "p", text: "This calculation is the problem. It treats marketing as the question. Brand is the answer the calculation never reaches." },
      { type: "pullquote", text: "A brand that is architectured correctly does three things economically: it commands a price premium, it reduces the cost of acquiring the next customer, and it creates resilience during volatility." },
      { type: "h2", text: "The Balance Sheet Argument" },
      { type: "p", text: "Businesses in Andhra Pradesh and Telangana that built real market presence \u2014 Tenali Double Horse, Telugu Foods, Kalanikethan \u2014 did not get there through advertising. They got there because customers trusted them, defended them, and chose them repeatedly. That is not a marketing outcome. That is a brand outcome." },
      { type: "p", text: "Brand is an asset that compounds. Every rupee invested in brand positioning, identity architecture, and communication consistency produces returns for years. Every rupee invested in paid attention produces returns for days." },
      { type: "h2", text: "What This Means in Practice" },
      { type: "p", text: "If you are spending more than 20 percent of your growth budget on paid advertising and less than 5 percent on brand strategy, you are optimising for the visible and ignoring the structural. The structural is what outlasts the campaign." },
      { type: "p", text: "The question is not how much to spend on brand. The question is what you are building that does not require constant spending to maintain." },
    ]
  },
  {
    id: "legal-is-brand-strategy",
    cat: "Legal Brand Protection",
    title: "Legal Protection Is Not a Separate Function. It Is Brand Strategy.",
    excerpt: "An unregistered trademark is not just a legal risk. It is a brand asset that someone else can take from you while you are busy building it.",
    date: "May 2025",
    readTime: "5 min read",
    icon: "\ud83d\udee1\ufe0f",
    content: [
      { type: "p", text: "Most founders separate brand strategy and legal protection into two different conversations, two different vendors, two different timelines. This separation is not logical. It is expensive." },
      { type: "p", text: "Here is the problem. A brand name is designed without a trademark search. The name gets traction in the market. Three years later, a competitor files a trademark in the same class. You now have a legal dispute for a name your customers already associate with you." },
      { type: "pullquote", text: "An unregistered trademark is not just a legal risk. It is a brand asset that someone else can take from you while you are busy building it." },
      { type: "h2", text: "Where the Gap Lives" },
      { type: "p", text: "Brand consultants design names and identities without legal foresight. Trademark lawyers file applications without understanding brand strategy. The founder is caught between two advisors who are not talking to each other, hoping the gap between them never becomes a problem." },
      { type: "p", text: "The Magsmen model closes this gap. Brand naming, trademark search, positioning strategy, and filing happen within the same engagement, designed together. The name you launch is the name you own." },
      { type: "h2", text: "The Cost of Waiting" },
      { type: "p", text: "A franchise conversation that stalls because IP is not clean. A partnership that falls through because the investor asks for an IP schedule you cannot produce. A competitor using a phonetically similar name in the next district. These are not hypothetical risks. They are outcomes that have played out for businesses in this region." },
    ]
  },
  {
    id: "marketing-trap",
    cat: "Business Growth",
    title: "The Marketing Trap. And Why Most Indian Founders Walk Straight Into It.",
    excerpt: "Spend on marketing. Get activity. Feel like something is happening. Repeat next month. This is the trap. The exit is not more marketing.",
    date: "April 2025",
    readTime: "7 min read",
    icon: "\ud83c\udfaf",
    content: [
      { type: "p", text: "Marketing produces visible, measurable, short-term activity. Impressions. Clicks. Leads. Brand investment feels abstract and slow. So founders skip it. They choose the visible over the structural." },
      { type: "p", text: "The result is a business that spends perpetually on paid attention because it has not earned organic trust. Every month requires the same or higher marketing investment to maintain the same level of awareness. The business never escapes the spending cycle because it never built the asset that would make the cycle unnecessary." },
      { type: "pullquote", text: "You can escape the marketing trap only by building the brand foundation first. Then marketing becomes amplification of something real rather than a substitute for something missing." },
      { type: "h2", text: "What the Trap Looks Like from the Inside" },
      { type: "p", text: "A founder in Vijayawada once told us he was spending eighty thousand rupees a month on Instagram and Facebook advertising. Clicks were coming. Purchases were not. His conclusion was that the product pricing was too high. The actual problem was that the brand had no clear positioning. Advertising was driving people to a brand that gave them no reason to choose it over others." },
      { type: "h2", text: "The Exit" },
      { type: "p", text: "The exit from the marketing trap is not a better ad. It is a brand foundation: positioning, identity, narrative, and customer experience architecture designed so that the market arrives at the conclusion you want them to arrive at, without being told." },
    ]
  },
  {
    id: "stature-not-personal-branding",
    cat: "Stature",
    title: "What Stature Actually Is. And Why Personal Branding Gets It Wrong.",
    excerpt: "Every digital agency now offers personal branding. The phrase has been diluted to mean content calendars and headshot photography. That is not what Stature delivers.",
    date: "March 2025",
    readTime: "6 min read",
    icon: "\u2b50",
    content: [
      { type: "p", text: "Visibility without credibility is noise. Credibility without visibility is wasted potential. Most personal branding services give you the first. Stature builds both, in that order." },
      { type: "p", text: "The difference between personal branding and what Stature delivers is the same as the difference between painting a house and redesigning its foundation. Personal branding concerns itself with how you look. Stature concerns itself with how you are perceived, trusted, and remembered." },
      { type: "pullquote", text: "The individual already has achievement. Stature converts that achievement into authority." },
      { type: "h2", text: "The Professionals We Have Worked With" },
      { type: "p", text: "A doctor with 20 years of expertise and no structured public identity was losing patients to a colleague with 3 years of experience and a strong LinkedIn presence. Not because the newer doctor was better. Because the patient, who had never met either of them, could only evaluate what was visible. Stature corrects this asymmetry." },
      { type: "p", text: "A media personality with public recognition wanted to convert that recognition into a structured professional identity with advisory and speaking value. The challenge was not visibility. The challenge was building a system around that visibility so it generated commercial outcomes consistently." },
      { type: "h2", text: "Why the Name" },
      { type: "p", text: "Magsmen chose the word Stature deliberately. It communicates earned standing. It repels commodity buyers and attracts individuals who understand that their standing in their field requires strategic management, not just content calendars." },
    ]
  },
  {
    id: "msme-brand-architecture",
    cat: "Regional Business",
    title: "The Guntur Founder Has the Same Right to Brand Architecture as the Bangalore Startup.",
    excerpt: "After eight years across Andhra Pradesh and Telangana, one thing is clear. Regional businesses are not underperforming because they lack ambition.",
    date: "February 2025",
    readTime: "5 min read",
    icon: "\ud83c\udfd7\ufe0f",
    content: [
      { type: "p", text: "They are underserved by advisory that understands their market, their cultural context, and the specific dynamics of building a brand in this region." },
      { type: "p", text: "Most brand strategy frameworks were built for Bangalore startups, Bombay corporates, or global multinationals. When a family textile business in Vijayawada or a food processing brand in Tenali tries to apply those frameworks, the fit is wrong. The language is different. The buying behaviour is different. The trust signals are different." },
      { type: "pullquote", text: "The Guntur founder has the same right to brand architecture as the Bangalore startup. Not a simplified version of it. The real thing." },
      { type: "h2", text: "What Regional Brands Need" },
      { type: "p", text: "A brand strategy built for AP and Telangana must understand that customers here buy through relationships before they buy through advertising. Community trust is the primary brand signal. Family business structures carry trust equity that is an asset, not a liability. The first-generation MSME founder has built something real through hard work and market timing. What they need is the architecture that converts that real presence into a durable brand." },
      { type: "h2", text: "The Work We Have Done in This Region" },
      { type: "p", text: "Tenali Double Horse. Telugu Foods. Kalanikethan. VSB Group. These are not case studies from a Bangalore pitch deck. They are businesses we know from the inside, across AP and Telangana, built over years of working with founders who understand their markets better than any strategy consultant ever could from a distance." },
    ]
  },
  {
    id: "why-businesses-struggle",
    cat: "Strategy",
    title: "Why the Business That Grew Without Structure Is the Most Urgent Client in the Room.",
    excerpt: "The most dangerous business is the one growing through relationships and reputation alone, with no brand architecture beneath it. One sharp competitor can displace it.",
    date: "January 2025",
    readTime: "6 min read",
    icon: "\ud83c\udfd7\ufe0f",
    content: [
      { type: "p", text: "The most dangerous position in business is not failure. It is fragile success. A business that has achieved revenue growth through relationships, hard work, and market timing but has no brand architecture underneath it." },
      { type: "p", text: "These businesses are everywhere in Andhra Pradesh and Telangana. They are known in their markets. Their founders are respected. Their products are trusted. They have been operating for ten or fifteen years and built real presence. But they have never needed to define what they stand for, because their founder's reputation did that work for them." },
      { type: "pullquote", text: "When the founder steps back, the brand has nowhere to stand. The relationships do not transfer. The trust does not transfer. What transfers is a logo and a name that mean different things to different people." },
      { type: "h2", text: "The Structural Work" },
      { type: "p", text: "Brand architecture for these businesses does not start with a rebrand. It starts with a diagnosis. What does the market actually think about this business? What do customers mean when they say they trust it? What would they miss if it disappeared tomorrow? The answers to these questions are the raw material for a brand that can outlast its founder." },
      { type: "h2", text: "The Window" },
      { type: "p", text: "There is a window for this work. It is not infinite. A competitor with better positioning and the same product can displace a business that has not built its brand architecture. One bad press cycle can erase years of informal reputation. One leadership change can create confusion in the market. The businesses that have the most to gain from brand architecture work are also the ones most at risk of procrastinating on it." },
    ]
  },
]

interface Recommendation {
  label: string
  desc: string
}

function getRec(a: string[]): Recommendation {
  const q2 = a[1] || ""
  if (q2.includes("All of these")) return { label: "Strategic Partner", desc: "You need integrated advisory across brand, business, and legal. The Strategic Partner model is built for exactly this." }
  if (q2.includes("legally")) return { label: "OTC \u2014 Legal Brand Protection", desc: "Your most urgent priority is protecting what you have built. An OTC session focused on legal brand protection is the right first step." }
  if (q2.includes("structural")) return { label: "OTC \u2014 Business Structuring", desc: "Your business needs structural clarity. An OTC engagement will diagnose the gaps and produce a clear framework." }
  return { label: "Brand Advisory Retainer", desc: "An ongoing Advisory Retainer would give your business the strategic counsel and accountability to make real progress." }
}

interface RevealRef {
  current: HTMLElement | null
}

function useReveal(ref: RevealRef | null): void {
  useEffect(() => {
    if (!ref?.current) return
    const obs = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as Element).classList.add("on"); obs.unobserve(e.target) } })
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" })
    ref.current!.querySelectorAll(".rv,.fade").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ref])
}


// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

interface ContactFormProps {
  title?: string
  sub?: string
  context?: string
  onDone?: () => void
}

interface ContactFormState {
  name: string
  company: string
  mobile: string
  note: string
}

function ContactForm({ title, sub, context, onDone }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormState>({ name: "", company: "", mobile: "", note: context || "" })
  const [done, setDone] = useState<boolean>(false)
  const up = (k: keyof ContactFormState, v: string) => setForm(p => ({ ...p, [k]: v }))
  const valid: boolean = Boolean(form.name.trim() && form.mobile.trim())
  const submit = (): void => {
    if (!valid) return
    const subj = `Inquiry from ${form.name}${form.company ? " (" + form.company + ")" : ""}`
    const body = `Name: ${form.name}\nCompany: ${form.company || "Not specified"}\nMobile: ${form.mobile}\n\nMessage:\n${form.note || "Please reach out to discuss our situation."}`
    window.location.href = `mailto:sandeep@magsmen.com,connect@magsmen.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
    setDone(true)
    if (onDone) onDone()
  }
  if (done) return (
    <div className="cform-ok">
      <div className="cform-ok-icon">\u2713</div>
      <h3>Your message has been sent.</h3>
      <p>Our strategy team will review your details and reach out to you personally within 24 hours to discuss the right path forward.</p>
    </div>
  )
  return (
    <div className="cform">
      {title && <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: ".4rem" }}>{title}</h3>}
      {sub && <p style={{ fontSize: ".93rem", color: "#555", marginBottom: "2rem", lineHeight: 1.75 }}>{sub}</p>}
      <div className="cform-grid">
        <div className="cfield req">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" value={form.name} onChange={e => up("name", e.target.value)} />
        </div>
        <div className="cfield">
          <label>Company Name</label>
          <input type="text" placeholder="Your company or brand" value={form.company} onChange={e => up("company", e.target.value)} />
        </div>
        <div className="cfield req">
          <label>Mobile Number</label>
          <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => up("mobile", e.target.value)} />
        </div>
        <div className="cfield">
          <label>What can we help with?</label>
          <select value={form.note} onChange={e => up("note", e.target.value)}>
            <option value="">Select a practice area</option>
            <option>Brand Architecture</option>
            <option>Stature (Personal Identity)</option>
            <option>Business Structuring</option>
            <option>Legal Brand Protection</option>
            <option>Advisory Retainer</option>
            <option>One-Time Consulting (OTC)</option>
            <option>Strategic Partner Engagement</option>
            <option>I want to discuss my full situation</option>
          </select>
        </div>
      </div>
      <button className="bf" onClick={submit} style={{ opacity: valid ? 1 : 0.45 }}>
        Send details <ArrowRight size={15} />
      </button>
      <p style={{ fontSize: "12px", color: "#BBB", marginTop: ".85rem" }}>
        Our strategy associate will reach out to you personally within 24 hours.
      </p>
    </div>
  )
}

interface Question {
  q: string
  opts?: string[]
}

interface InlineFormProps {
  title: string
  sub: string
  questions: Question[]
  context: any
}

interface FormState {
  name: string
  company: string
  mobile: string
}

type Stage = "questions" | "contact" | "form"

function InlineForm({ title, sub, questions, context }: InlineFormProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [stage, setStage] = useState<Stage>("questions")
  const [form, setForm] = useState<FormState>({ name: "", company: "", mobile: "" })
  const [done, setDone] = useState<boolean>(false)
  const toggle = (qi: number, opt: string) => setAnswers((p: Record<number, string>) => ({ ...p, [qi]: p[qi] === opt ? "" : opt }))
  const allAnswered = questions.every((_, i) => Boolean(answers[i]))
  const upf = (k: keyof FormState, v: string) => setForm((p: FormState) => ({ ...p, [k]: v }))
  const valid = Boolean(form.name.trim() && form.mobile.trim())
  const submit = () => {
    if (!valid) return
    const summary = questions.map((q, i) => `Q: ${q.q}\nA: ${answers[i] || "Not answered"}`).join("\n\n")
    const body = `Name: ${form.name}\nCompany: ${form.company || "Not specified"}\nMobile: ${form.mobile}\n\nEngagement Assessment:\n${summary}`
    const subj = `Engagement Assessment from ${form.name}`
    window.location.href = `mailto:sandeep@magsmen.com,connect@magsmen.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  if (done) return (
    <div className="iform">
      <div className="cform-ok">
        <div className="cform-ok-icon">\u2713</div>
        <h3>We have received your answers.</h3>
        <p>Our strategy associate will review your assessment and reach out personally within 24 hours to discuss the right engagement for your situation.</p>
      </div>
    </div>
  )
  return (
    <div className="iform">
      {stage === "questions" ? (
        <>
          <h3 className="iform-h">{title}</h3>
          <p className="iform-sub">{sub}</p>
          {questions.map((q, qi) => (
            <div key={qi} className="iform-q">
              <div className="iform-qh">{q.q}</div>
              <div className="iform-opts">
                {q.opts?.map((opt, oi) => (
                  <div key={oi} className={`iform-opt${answers[qi] === opt ? " sel" : ""}`} onClick={() => toggle(qi, opt)}>
                    <div className="iform-cb">{answers[qi] === opt && <Check size={11} color="#fff" strokeWidth={3} />}</div>
                    <span className="iform-ot">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="bf" onClick={() => setStage("contact")} style={{ opacity: allAnswered ? 1 : 0.4 }}>
            Continue to send answers <ArrowRight size={15} />
          </button>
        </>
      ) : (
        <>
          <h3 className="iform-h">One last step</h3>
          <p className="iform-sub">Tell us who you are and our team will reach out to you personally with the right recommendation.</p>
          <div className="cform-grid">
            <div className="cfield req">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" value={form.name} onChange={e => upf("name", e.target.value)} />
            </div>
            <div className="cfield">
              <label>Company Name</label>
              <input type="text" placeholder="Your company or brand" value={form.company} onChange={e => upf("company", e.target.value)} />
            </div>
            <div className="cfield req">
              <label>Mobile Number</label>
              <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => upf("mobile", e.target.value)} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button className="bf" onClick={submit} style={{ opacity: valid ? 1 : 0.4 }}>
              Send my answers <ArrowRight size={15} />
            </button>
            <button className="bo-sm" onClick={() => setStage("questions")}>Back</button>
          </div>
          <p style={{ fontSize: "12px", color: "#BBB", marginTop: ".85rem" }}>Our strategy associate will reach out to you personally within 24 hours.</p>
        </>
      )}
    </div>
  )
}

interface PopupFormProps { onClose: () => void }
interface PopupFormState { name: string; company: string; mobile: string }
type PopupStage = "quiz" | "contact"

function PopupForm({ onClose }: PopupFormProps) {
  const [step, setStep] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [rec, setRec] = useState<Recommendation | null>(null)
  const [form, setForm] = useState<PopupFormState>({ name: "", company: "", mobile: "" })
  const [done, setDone] = useState<boolean>(false)
  const [stage, setStage] = useState<PopupStage>("quiz")
  const sel = (opt: string) => setAnswers((p: Record<number, string>) => ({ ...p, [step]: opt }))
  const next = () => {
    if (step < POPUP_QS.length - 1) setStep(s => s + 1)
    else { setRec(getRec(POPUP_QS.map((_, i) => answers[i] || ""))); setStage("contact") }
  }
  const upf = (k: keyof PopupFormState, v: string) => setForm((p: PopupFormState) => ({ ...p, [k]: v }))
  const valid: boolean = Boolean(form.name.trim() && form.mobile.trim())
  const submit = () => {
    if (!valid) return
    const body = `Name: ${form.name}\nCompany: ${form.company || "Not specified"}\nMobile: ${form.mobile}\n\nRecommended: ${rec?.label}\n\nAnswers:\n` + POPUP_QS.map((q, i) => `Q: ${q.q}\nA: ${answers[i] || ""}`).join("\n\n")
    window.location.href = `mailto:sandeep@magsmen.com,connect@magsmen.com?subject=${encodeURIComponent("Engagement Inquiry from " + form.name)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }
  const q = POPUP_QS[step]
  return (
    <div className="pop-ov" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="pop-box">
        <button className="pop-close" onClick={onClose}><X size={20} /></button>
        {done ? (
          <div className="cform-ok" style={{ paddingTop: "2rem" }}>
            <div className="cform-ok-icon">\u2713</div>
            <h3>Your details have been sent.</h3>
            <p>Our strategy associate will reach out to you personally within 24 hours to discuss the right path forward.</p>
          </div>
        ) : stage === "quiz" ? (
          <>
            <div className="pop-badge">Find your starting point</div>
            <h2 className="pop-h">Four questions to understand your situation</h2>
            <p className="pop-p">Answer these and we will tell you exactly what kind of engagement we recommend.</p>
            <div className="pop-prog">{POPUP_QS.map((_, i) => <div key={i} className={`pop-dot${i <= step ? " done" : ""}`} />)}</div>
            <div style={{ marginBottom: "1.75rem" }}>
              <div className="pop-qn">Question {step + 1} of {POPUP_QS.length}</div>
              <div className="pop-qt">{q.q}</div>
              <div className="iform-opts">
                {q.opts.map((opt, i) => (
                  <div key={i} className={`iform-opt${answers[step] === opt ? " sel" : ""}`} onClick={() => sel(opt)}>
                    <div className="iform-cb">{answers[step] === opt && <Check size={11} color="#fff" strokeWidth={3} />}</div>
                    <span className="iform-ot">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="bf" disabled={!answers[step]} style={{ opacity: answers[step] ? 1 : 0.4, width: "100%" }} onClick={next}>
              {step < POPUP_QS.length - 1 ? "Next \u2192" : "See recommthis is our eexisting menu items please conform which option i include for new website endation \u2192"}
            </button>
            <button className="pop-skip" onClick={onClose}>Skip and explore the website</button>
          </>
        ) : (
          <>
            <div className="pop-badge">Based on your answers</div>
            <h2 className="pop-h">Our recommendation for you</h2>
            <div className="pop-rec">
              <div className="pop-rec-lbl">Recommended engagement</div>
              <div className="pop-rec-h">{rec?.label}</div>
              <p className="pop-rec-p">{rec?.desc}</p>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: ".93rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.75 }}>
                Leave your details and our strategy associate will reach out to you personally.
              </p>
              <div className="cform-grid">
                <div className="cfield req"><label>Full Name</label><input type="text" placeholder="Your full name" value={form.name} onChange={e => upf("name", e.target.value)} /></div>
                <div className="cfield"><label>Company</label><input type="text" placeholder="Your company" value={form.company} onChange={e => upf("company", e.target.value)} /></div>
                <div className="cfield req"><label>Mobile</label><input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => upf("mobile", e.target.value)} /></div>
              </div>
              <button className="bf" onClick={submit} style={{ opacity: valid ? 1 : 0.4, width: "100%" }}>
                Send details and get in touch \u2192
              </button>
              <button className="pop-skip" onClick={onClose}>Explore the website first</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface NavProps {
  page: string
  navigate: (p: string) => void
}

function Nav({ page, navigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mob, setMob] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h)
    h()
    return () => window.removeEventListener("scroll", h)
  }, [])
  const goto = (p: string): void => { navigate(p); setMob(false) }
  const isActive = (p: string): boolean => page === p || page.startsWith(p + "/")
  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => goto("home")}>
          <img src={LOGO} alt="Magsmen Strategy Consultants" />
        </div>
        <ul className="nav-links">
          <li className={`nav-link${isActive("solutions") || isActive("brand") || isActive("business") || isActive("legal") ? " active" : ""}`}>
            <button style={{ display: "flex", alignItems: "center", gap: 4 }}>
              Solutions <ChevronDown size={12} />
            </button>
            <div className="nav-drop">
              <a onClick={() => goto("brand")}>
                <div className="nav-drop-icon"></div>
                Brand Architecture
              </a>
              <a onClick={() => goto("business")}>
                <div className="nav-drop-icon"></div>
                Business Structuring
              </a>
              <a onClick={() => goto("legal")}>
                <div className="nav-drop-icon"></div>
                Legal Brand Protection
              </a>
              <div style={{ borderTop: "1px solid #F0F0F0", margin: "4px 0" }} />
              <a onClick={() => goto("brand")} style={{ fontSize: "12px", color: "#AAA" }}>
                <div className="nav-drop-icon" style={{ fontSize: "12px" }}></div>
                Stature (Personal Identity)
              </a>
            </div>
          </li>
          <li className={`nav-link${page === "advisory" ? " active" : ""}`}>
            <a onClick={() => goto("advisory")}>Advisory</a>
          </li>
          <li className={`nav-link${page === "engagements" ? " active" : ""}`}>
            <a onClick={() => goto("engagements")}>Engagements</a>
          </li>
          <li className={`nav-link${page === "blog" || page.startsWith("blog/") ? " active" : ""}`}>
            <a onClick={() => goto("blog")}>Perspectives</a>
          </li>
          <li className={`nav-link${page === "about" ? " active" : ""}`}>
            <a onClick={() => goto("about")}>About</a>
          </li>
        </ul>
        <button className="nav-ham" onClick={() => setMob(true)}><Menu size={22} /></button>
        <a className="nav-cta" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=I want to discuss my situation">
          Talk to us
        </a>
      </nav>
      {mob && (
        <div className="mob-menu">
          <button style={{ position: "absolute", top: 22, right: 22, background: "none", border: "none", cursor: "pointer" }} onClick={() => setMob(false)}><X size={22} /></button>
          <div style={{ marginBottom: "1rem" }}><img src={LOGO} alt="" style={{ height: 48 }} /></div>
          <a className="mob-link" onClick={() => goto("brand")}>Brand Architecture</a>
          <a className="mob-sub" onClick={() => goto("brand")}>Stature</a>
          <a className="mob-link" onClick={() => goto("business")}>Business Structuring</a>
          <a className="mob-link" onClick={() => goto("legal")}>Legal Brand Protection</a>
          <a className="mob-link" onClick={() => goto("advisory")}>Advisory</a>
          <a className="mob-link" onClick={() => goto("engagements")}>Engagements</a>
          <a className="mob-link" onClick={() => goto("blog")}>Perspectives</a>
          <a className="mob-link" onClick={() => goto("about")}>About</a>
          <a className="mob-link" onClick={() => goto("contact")}>Contact</a>
          <a className="mob-cta" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=I want to discuss my situation">Talk to us \u2192</a>
        </div>
      )}
    </>
  )
}

function Footer({ navigate }) {
  const goto = p => { navigate(p); window.scrollTo({ top: 0 }) }
  return (
    <footer>
      <div className="fi">
        <div className="f-grid">
          <div>
            <div className="f-logo"><img src={LOGO} alt="Magsmen" /></div>
            <div className="f-tagline">Magsmen Strategy Consultants</div>
            <p className="f-desc">Integrated strategy consulting across brand architecture, business structuring, and legal brand protection. Andhra Pradesh and Telangana.</p>
            <div className="f-cert">
              <div className="f-cert-item">ASCI Member</div>
              <div className="f-cert-item">Enrolled Advocate</div>
              <div className="f-cert-item">ISO Compliant Practice</div>
            </div>
          </div>
          <div>
            <div className="f-h">Solutions</div>
            <ul className="f-ul">
              <li><a onClick={() => goto("brand")}>Brand Architecture</a></li>
              <li><a onClick={() => goto("brand")}>Stature</a></li>
              <li><a onClick={() => goto("business")}>Business Structuring</a></li>
              <li><a onClick={() => goto("legal")}>Legal Brand Protection</a></li>
            </ul>
          </div>
          <div>
            <div className="f-h">Advisory</div>
            <ul className="f-ul">
              <li><a onClick={() => goto("advisory")}>OTC Consulting</a></li>
              <li><a onClick={() => goto("advisory")}>Brand Advisory Retainer</a></li>
              <li><a onClick={() => goto("advisory")}>Strategic Partner</a></li>
              <li><a onClick={() => goto("advisory")}>Intelligent Council</a></li>
            </ul>
          </div>
          <div>
            <div className="f-h">Firm</div>
            <ul className="f-ul">
              <li><a onClick={() => goto("about")}>About Us</a></li>
              <li><a onClick={() => goto("engagements")}>Engagements</a></li>
              <li><a onClick={() => goto("blog")}>Perspectives</a></li>
              <li><a onClick={() => goto("careers")}>Careers</a></li>
              <li><a onClick={() => goto("contact")}>Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="f-h">Legal</div>
            <ul className="f-ul">
              <li><a onClick={() => goto("privacy")}>Privacy Policy</a></li>
              <li><a onClick={() => goto("terms")}>Terms of Service</a></li>
              <li><a onClick={() => goto("terms")}>Disclaimer</a></li>
            </ul>
            <div className="f-h" style={{ marginTop: "2rem" }}>Contact</div>
            <ul className="f-ul">
              <li><a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a></li>
              <li><a href="mailto:connect@magsmen.com">connect@magsmen.com</a></li>
              <li><a href="tel:+919044910449">+91 90449 10449</a></li>
              <li><a>Guntur, Andhra Pradesh</a></li>
            </ul>
          </div>
        </div>
        <div className="f-bot">
          <div className="f-copy">2020 Magsmen Strategy Consultants</div>
          <div className="f-copy">Brand Architecture Business Structuring Legal Brand Protection</div>
        </div>
      </div>
    </footer>
  )
}


// ─── HOME ────────────────────────────────────────────────────────────────────
function Home({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero">
        <div className="hero-c">
          <div className="lbl rv">Integrated Strategy Consulting</div>
          <h1 className="h1 rv">Your business grew through trust.<br />The next stage requires<br />architecture.</h1>
          <p className="lead rv" style={{ marginTop: "1.75rem" }}>Across Andhra Pradesh and Telangana, we have seen this pattern many times. A business builds real market presence through relationships, reputation, and hard work. Then growth stalls. Not because the product is weak. Because the brand has no structure beneath it.</p>
          <div className="brow rv">
            <a className="bf" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=I want to discuss my situation">Talk about your situation <ArrowRight size={15} /></a>
            <button className="bo" onClick={() => navigate("advisory")}>See advisory models</button>
          </div>
          <div className="stats rv">
            <div className="stat"><span className="stat-n">50+</span><span className="stat-l">Brands Architected</span></div>
            <div className="stat"><span className="stat-n">8+</span><span className="stat-l">Years in Practice</span></div>
            <div className="stat"><span className="stat-n">F25</span><span className="stat-l">Fortune 25 Clients</span></div>
            <div className="stat"><span className="stat-n">200M+</span><span className="stat-l">Platform Views via InTalks</span></div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <p style={{ fontSize:"11px",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"#BBB",marginBottom:"1.5rem",textAlign:"center" }} className="rv">Businesses that took this step</p>
          <div className="rv" style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"10px" }}>
            {["Tenali Double Horse","Telugu Foods","Kalanikethan","VSB Group","Suma Kanakala","Triplex","Arjun Sai Exports","Shyam Prasad Munagala","Rajeev Kanakala","Dr. Srujana Abadala"].map(n => (
              <span key={n} style={{ fontSize:"11px",fontWeight:600,letterSpacing:".05em",color:"#666",padding:"7px 16px",border:"1px solid #E8E8E8",borderRadius:"4px" }}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="sec sec-alt">
        <div className="si">
          <div className="lbl rv">What We Do</div>
          <h2 className="h2 rv">One firm. Three disciplines. No referrals.</h2>
          <p className="lead rv" style={{ marginBottom: "2.5rem" }}>Brand architecture, business structuring, and legal brand protection addressed within one engagement. Decisions in each area affect the other two. Separating them creates gaps that become expensive later.</p>
          <div className="g3">
            {[
              { n:"01", h:"Brand Architecture", d:"Strategic positioning, identity systems, communication design, and Stature \u2014 personal identity architecture for founders, professionals, and public figures.", p:"brand" },
              { n:"02", h:"Business Structuring", d:"Operational and commercial frameworks designed around the brand's strategic direction. Growth that does not require the founder at every decision.", p:"business" },
              { n:"03", h:"Legal Brand Protection", d:"Trademark registration, personality rights, IP architecture, patent commercialisation, and brand-adjacent legal advisory. A brand without legal protection is a liability.", p:"legal" },
            ].map((c, i) => (
              <div key={i} className={`sc rv d${i}`} style={{ cursor:"pointer" }} onClick={() => navigate(c.p)}>
                <div className="sc-n">{c.n}</div>
                <div className="sc-h">{c.h}</div>
                <p className="sc-d">{c.d}</p>
                <div style={{ fontSize:"13px",fontWeight:700,display:"flex",alignItems:"center",gap:6,marginTop:"1.25rem",color:"#0A0A0A" }}>
                  Explore <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <div style={{ display:"grid",gridTemplateColumns:"1fr",gap:"4rem" }}>
            <div>
              <div className="lbl rv">Built for This Market</div>
              <h2 className="h2 rv" style={{ maxWidth:640 }}>The Guntur founder has the same right to brand architecture as the Bangalore startup.</h2>
              <p className="body rv" style={{ marginTop:"1.25rem",marginBottom:"1.5rem",maxWidth:640 }}>After eight years across Andhra Pradesh and Telangana, one thing is clear. Regional businesses are not underperforming because they lack ambition. They are underserved by advisory that understands their market, their cultural context, and the specific dynamics of building a brand in this region. The families that built Tenali Double Horse and Telugu Foods did not need a Bangalore playbook. They needed a strategist who understood this market from the inside.</p>
              <div className="brow rv">
                <a className="bf" href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=I want to discuss my situation">Start the conversation <ArrowRight size={15} /></a>
                <button className="bo" onClick={() => navigate("engagements")}>See our work</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec sec-alt">
        <div className="si">
          <div className="lbl rv">Perspectives</div>
          <h2 className="h2 rv">Thinking on brand, business, and the Indian market.</h2>
          <p className="lead rv" style={{ marginBottom:"2.5rem" }}>Strategic thinking that changes how founders approach brand and business. Not opinions. Frameworks built from eight years of work across 50 brands.</p>
          <div className="blog-grid">
            {BLOGS.slice(0,3).map((b, i) => (
              <div key={i} className={`blog-card rv d${i}`} onClick={() => navigate("blog/" + b.id)}>
                <div className="blog-img"><div className="blog-img-inner">{b.icon}</div></div>
                <div className="blog-body">
                  <div className="blog-cat">{b.cat}</div>
                  <div className="blog-title">{b.title}</div>
                  <div className="blog-excerpt">{b.excerpt}</div>
                  <div className="blog-meta">{b.date} \u00b7 {b.readTime}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center",marginTop:"2.5rem" }} className="rv">
            <button className="bo" onClick={() => navigate("blog")}>View all perspectives <ArrowRight size={14} /></button>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <div className="ctabox rv">
            <div className="ctabox-h">Tell us about your situation.</div>
            <p className="ctabox-p">Not every business needs the same engagement. Our team listens first, then tells you honestly what the work requires.</p>
            <div className="ctabox-row">
              <a className="bf" onClick={() => navigate("contact")}>Start the conversation <ArrowRight size={15} /></a>
              <a className="bo" href="tel:+919044910449">+91 90449 10449</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// ─── BRAND PAGE ──────────────────────────────────────────────────────────────
function BrandPage({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero">
        <div className="hero-c">
          <div className="lbl rv">01 Brand Architecture</div>
          <h1 className="h1 rv">A brand that becomes an asset, not just an identity.</h1>
          <p className="lead rv" style={{ marginTop:"1.75rem" }}>Most businesses have built real market presence. What they have not built is a brand with structure beneath it. One that holds when the founder steps back, communicates consistently across every channel, and compounds in value over time.</p>
          <div className="brow rv">
            <a className="bf" href="mailto:sandeep@magsmen.com?subject=Brand Architecture Inquiry">Discuss your brand situation <ArrowRight size={15} /></a>
            <button className="bo" onClick={() => navigate("advisory")}>See advisory models</button>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <div className="lbl rv">The Problem</div>
          <h2 className="h2 rv">Why brand architecture matters more than brand identity.</h2>
          <div className="prob rv">
            {[
              { lbl: "The visible symptom", txt: "The business is growing but no one can explain the brand in one sentence. Different team members say different things. Competitors gain ground with inferior products but sharper positioning. Marketing spend produces diminishing returns." },
              { lbl: "The actual problem", txt: "Brand identity (logo, colours, tagline) has been created, but brand architecture has never been built. Without the strategic framework that defines positioning, narrative, tone, and value hierarchy, every marketing decision is made without a compass." },
              { lbl: "What this costs", txt: "Inconsistent perception. Inability to command premium pricing. Difficulty attracting partnerships. A founder who is the brand rather than the brand standing on its own." },
              { lbl: "What Magsmen provides", txt: "A complete brand architecture engagement that builds the strategic foundation as one integrated system. Positioning, identity, communication, and legal protection designed together." },
            ].map((r, i) => <div key={i} className="prob-row"><div className="prob-lbl">{r.lbl}</div><div className="prob-txt">{r.txt}</div></div>)}
          </div>
        </div>
      </div>

      <div className="sec sec-alt">
        <div className="si">
          <div className="lbl rv">What Is Included</div>
          <h2 className="h2 rv">Every dimension of brand architecture work.</h2>
          <div className="g3">
            {[
              { n:"01", h:"Brand Positioning Strategy", d:"Defining what the brand stands for, for whom, and against which alternatives. Positioning specific enough to be useful and broad enough to sustain ten years of growth.", items:["Competitive positioning analysis","Audience architecture","Value proposition design","Positioning statement and proof framework"] },
              { n:"02", h:"Identity Architecture", d:"Brand naming, logo system, visual identity standards, and typography designed to signal the right market level and remain legally defensible.", items:["Brand naming with trademark screening","Logo and mark system","Typography and visual language","Sub-brand architecture where required"] },
              { n:"03", h:"Communication Framework", d:"Message hierarchy, tone of voice, and channel-specific guidance so every piece of communication sounds like the same brand.", items:["Messaging hierarchy by audience","Tone of voice definition","Channel-specific guidance","Team communication brief"] },
              { n:"04", h:"Brand Audit and Diagnosis", d:"A structural diagnosis of the current brand for existing businesses. Where it is perceived, where it needs to be, and what the gap requires.", items:["Brand perception gap analysis","Competitive review","Identity and communication audit","Priority action plan"] },
              { n:"05", h:"Brand Creation", d:"End-to-end brand building for new ventures. Naming, identity, positioning, communication, and legal protection from day one.", items:["Complete naming process","Full identity system","Launch communication plan","Trademark filing integrated"] },
              { n:"06", h:"Brand Express", d:"A rapid-format engagement for businesses that need strategic brand direction within a compressed timeline. Fixed scope. Core strategic output.", items:["Two focused sessions","Positioning and identity priorities","Quick-start guidelines","Trademark screening included"] },
            ].map((c, i) => (
              <div key={i} className={`sc rv d${i % 3}`}>
                <div className="sc-n">{c.n}</div>
                <div className="sc-h">{c.h}</div>
                <p className="sc-d">{c.d}</p>
                <ul className="sc-ul">{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <div className="lbl rv">How It Works</div>
          <h2 className="h2 rv">The brand architecture process.</h2>
          <div className="proc rv">
            {[
              { h:"Brand Discovery", d:"Deep conversations with the founder, leadership, and key customers. Understanding the business's real identity as it is experienced, not as it is described internally." },
              { h:"Market and Competitive Research", d:"Category analysis, competitor positioning review, and customer perception mapping. Understanding the landscape before placing the brand within it." },
              { h:"Brand Audit", d:"A structural diagnosis of the current brand's strengths, inconsistencies, and perception gaps. Evidence-based diagnostic, not an opinion report." },
              { h:"Positioning Design", d:"Building the strategic positioning: the intersection of what the business does best, what the audience needs most, and what competitors have not claimed." },
              { h:"Identity Architecture", d:"Naming, logo system, visual language, and typography designed against the positioning criteria." },
              { h:"Communication Framework", d:"Message hierarchy, tone of voice, and channel guidance. Built so the team can communicate consistently without reinventing the message every time." },
              { h:"Legal Protection Integration", d:"Trademark search and filing in parallel with identity work. The name you launch is the name you own." },
              { h:"Brand Book and Handover", d:"A working document the team can actually use. A practical operating guide for the brand, not a 100-page PDF no one reads." },
            ].map((s, i) => (
              <div key={i} className="proc-item rv">
                <div className="proc-n">{String(i+1).padStart(2,"0")}</div>
                <div><div className="proc-h">{s.h}</div><div className="proc-d">{s.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec sec-alt">
        <div className="si">
          <div className="stature-hero rv">
            <div className="stature-tag">Stature by Magsmen</div>
            <h2 className="stature-h">Where Influence Becomes Identity.</h2>
            <p className="stature-sub">Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. Not personal branding. Not social media management. Not public relations. The structural work behind what people decide about you before the conversation begins.</p>
          </div>

          <div style={{ marginTop:"3.5rem" }}>
            <div className="lbl rv">What Stature Is Not</div>
            <p className="body rv" style={{ maxWidth:660,marginTop:".25rem",marginBottom:"2rem" }}>Every digital agency and LinkedIn coach now offers personal branding. The phrase has been diluted to mean content calendars and headshot photography. Stature concerns itself with credibility. Visibility without credibility is noise. Credibility without visibility is wasted potential. Stature builds both, in that order.</p>
          </div>
          <div className="snot-grid">
            {[
              { h:"Not Personal Branding", p:"We do not create content calendars or manage social media. We build the strategic system that defines how you should be perceived and what your professional identity stands for." },
              { h:"Not Public Relations", p:"PR agencies execute outreach under Stature's direction. Stature defines what you should be known for. The sequence matters. Strategy before communication." },
              { h:"Not Image Coaching", p:"We architect how your reputation is perceived, protected, and grown over time. System over style. Structure over surface." },
            ].map((n, i) => <div key={i} className={`snot rv d${i}`}><div className="snot-h">{n.h}</div><p className="snot-p">{n.p}</p></div>)}
          </div>

          <div style={{ marginTop:"3.5rem" }}>
            <div className="lbl rv">Who Stature Serves</div>
            <h3 className="h3 rv" style={{ marginBottom:"1.5rem" }}>For individuals who have earned attention and now need that attention converted into something that lasts.</h3>
          </div>
          <div className="serves-grid">
            {[
              { h:"Politicians and Public Leaders", p:"Every statement and appearance is interpreted by constituents and opponents. Without a governed identity, perception is shaped by others. Stature creates narrative control and crisis preparedness." },
              { h:"Professionals: Doctors, Lawyers, CAs", p:"Professional credibility is won online before the first consultation. A doctor with 20 years of expertise but no structured public identity loses to one with 3 years and a strong digital presence. Stature corrects this asymmetry." },
              { h:"Founders and Business Owners", p:"When the founder's identity is inseparable from the business brand, structuring that identity directly strengthens the business, improves deal flow, and enables partnerships." },
              { h:"CEOs and Senior Executives", p:"Corporate leaders whose public identity must align with the organisation's positioning. A misaligned executive identity creates market confusion and undermines the corporate brand." },
              { h:"Celebrities and Entertainment Figures", p:"Individuals at the peak of public attention who need that attention converted into lasting authority. Endorsement strategy, crisis management, and legacy planning." },
              { h:"Content Creators and Influencers", p:"Individuals with audience but without brand architecture. Monetisation, partnership negotiation, and long-term sustainability require structured identity beyond content output." },
            ].map((s, i) => <div key={i} className={`serves-card rv d${i % 3}`}><div className="serves-h">{s.h}</div><p className="serves-p">{s.p}</p></div>)}
          </div>

          <div style={{ marginTop:"3.5rem" }}>
            <div className="lbl rv">Stature in Practice</div>
            <h3 className="h3 rv">Transforming professionals to personalities. Selected individuals we have worked with.</h3>
            <div className="stature-clients rv">
              {[
                { name:"Suma Kanakala", role:"Actor, Anchor, Entrepreneur" },
                { name:"Rajeev Kanakala", role:"Actor, Anchor, Producer" },
                { name:"Roshan Kanakala", role:"Actor" },
                { name:"Shyam Prasad Munagala", role:"Industrialist, Chairman" },
                { name:"Dr. Srujana Abadala", role:"Medical Professional, Chairman" },
                { name:"Dr. Mamatha", role:"Medical Professional" },
              ].map((p, i) => (
                <div key={i} className="sc-person rv"><div className="sc-pname">{p.name}</div><div className="sc-prole">{p.role}</div></div>
              ))}
            </div>
          </div>

          <div style={{ marginTop:"3.5rem" }}>
            <div className="lbl rv">Stature Tiers</div>
            <h3 className="h3 rv" style={{ marginBottom:"1.5rem" }}>Four tiers. Each sized to the individual's current standing and what they need architecture to accomplish.</h3>
            <div className="tier-wrap rv">
              {[
                { tier:"Foundation", profile:"Professional or entrepreneur with local presence, beginning to build structured identity.", scope:"30\u201360 days. Positioning definition, narrative framework, communication essentials, digital audit." },
                { tier:"Authority", profile:"Business owner or sector specialist with regional recognition. Needs positioning that reflects true expertise level.", scope:"60\u201390 days. Full perception audit, positioning strategy, communication system, thought leadership framework." },
                { tier:"Prominence", profile:"CEO, large business owner, politician, or media personality with high public visibility and reputational risk.", scope:"120\u2013180 days. Perception audit, sentiment analysis, crisis framework, media narrative, visual governance." },
                { tier:"Legacy", profile:"Film celebrity, national politician, sports personality, or nationally recognised business leader.", scope:"Ongoing retainer. Real-time monitoring, endorsement governance, crisis management, legacy planning." },
              ].map((r, i) => (
                <div key={i} className="tier-card rv">
                  <div className="tier-pill">{r.tier}</div>
                  <div className="tier-card-h">{r.profile}</div>
                  <div className="tier-card-p">{r.scope}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:"2.5rem" }} className="rv">
              <a className="bf" href="mailto:sandeep@magsmen.com?subject=Stature Inquiry">Discuss a Stature engagement <ArrowRight size={15} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="si">
          <div className="lbl rv">Start Here</div>
          <h2 className="h2 rv">Tell us about your brand situation.</h2>
          <p className="lead rv" style={{ marginBottom:"2.5rem" }}>Three questions to help us understand the right first step.</p>
          <InlineForm title="What does your brand need?" sub="Your answers help us prepare for the first conversation. Our team will reach out to you personally."
            questions={[
              { q:"What is the current state of your brand?", opts:["We have no defined brand yet","We have a brand that needs repositioning","We need brand work and legal protection","We need personal identity architecture (Stature)"] },
              { q:"What do you need most?", opts:["A clear positioning the market understands","A name and identity that stands out","A communication system our team can use","A personal brand reflecting my professional standing"] },
              { q:"What is your timeline?", opts:["We need to move quickly (within 30 days)","We have a 2\u20133 month window","We are planning ahead for the next 6 months","I am in early exploration mode"] },
            ]} />
        </div>
      </div>
    </div>
  )
}


// ─── BUSINESS PAGE ───────────────────────────────────────────────────────────
function BusinessPage({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Business Structuring</div>
        <h1 className="h1 rv">A business that grows without you at every decision.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Most founders built their business through personal presence and daily involvement. At some stage, that model becomes the ceiling. Business structuring creates the operational and commercial frameworks that let the brand's ambition translate into business performance.</p>
        <div className="brow rv">
          <a className="bf" href="mailto:sandeep@magsmen.com?subject=Business Structuring">Discuss your business situation <ArrowRight size={15} /></a>
          <button className="bo" onClick={() => navigate("advisory")}>See advisory models</button>
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">The Problem</div>
        <h2 className="h2 rv">When the founder is the business, the business has a structural problem.</h2>
        <div className="prob rv">
          {[
            { lbl:"What the founder experiences", txt:"Revenue is growing but the founder cannot take a week off without things breaking. Every important decision requires their presence. The team executes but does not own. The business cannot be described clearly to an investor or successor." },
            { lbl:"The structural problem", txt:"The business was built through informal systems: verbal instructions, the founder's judgment at every step, relationships that live in one person's phone. What was efficient at 5 employees becomes a bottleneck at 25 and a crisis at 100." },
            { lbl:"The business model problem", txt:"The revenue model was built for market conditions of five years ago. The brand has grown, the market has shifted, and the pricing model has not kept pace. The business is working harder for the same margins." },
            { lbl:"What Magsmen provides", txt:"Operational framework design and business model assessment that creates the systems allowing the business to grow without the founder's presence at every decision. Built around the brand's strategic direction, not imposed from a generic template." },
          ].map((r, i) => <div key={i} className="prob-row"><div className="prob-lbl">{r.lbl}</div><div className="prob-txt">{r.txt}</div></div>)}
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">What Is Included</div>
        <h2 className="h2 rv">Every dimension of business structuring work.</h2>
        <div className="g3">
          {[
            { n:"01", h:"Business Model Review", d:"Assessing whether the current commercial model supports the brand's ambition. Revenue streams, pricing architecture, and cost structure reviewed against the growth plan.", items:["Revenue stream analysis","Pricing model assessment","Cost structure review","Growth economics modelling"] },
            { n:"02", h:"Operational Framework Design", d:"Creating processes, decision hierarchies, and reporting systems that allow the team to execute without the founder at every step.", items:["Process mapping (current state)","Operating system redesign","Decision framework and authorities","Team operating manual"] },
            { n:"03", h:"Organisational Structure", d:"Defining the right structure: roles, reporting lines, accountability systems, and governance mapped to the current stage and the next.", items:["Org structure assessment","Role definition and clarity","Reporting architecture","Accountability framework"] },
            { n:"04", h:"Revenue Architecture", d:"Building revenue models that are sustainable, scalable, and aligned with the brand's positioning. Pricing strategy that reflects the brand's actual value.", items:["Pricing strategy design","Revenue diversification analysis","Channel economics review","Value-based pricing frameworks"] },
            { n:"05", h:"Growth System Design", d:"The strategic and operational roadmap for the next growth phase with accountability markers and review cadence built in from the start.", items:["Growth goal definition","Milestone architecture","Resource requirement mapping","Quarterly review framework"] },
            { n:"06", h:"Succession and Transition", d:"For family businesses preparing for the next generation or a leadership transition. Structural clarity before the transition, not a crisis response after.", items:["Succession readiness audit","Governance structure","Next-gen preparation framework","Knowledge transfer plan"] },
          ].map((c, i) => (
            <div key={i} className={`sc rv d${i % 3}`}>
              <div className="sc-n">{c.n}</div>
              <div className="sc-h">{c.h}</div>
              <p className="sc-d">{c.d}</p>
              <ul className="sc-ul">{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">For the Regional MSME</div>
        <h2 className="h2 rv">Business structuring that understands the AP and Telangana context.</h2>
        <p className="lead rv" style={{ marginBottom:"2.5rem" }}>Business structuring advice written for a Bangalore startup does not apply to a family textile business in Vijayawada. The operational dynamics, family decision-making patterns, and cultural structures are different.</p>
        <div className="g2">
          {[
            { h:"The family business dynamic", p:"Family businesses carry trust equity that is an asset but also decision-making patterns that can slow execution and create succession risk. The framework must respect the family context while creating the professional systems the business needs to scale. Both requirements are real and neither can be ignored." },
            { h:"The founder-as-brand problem", p:"When the founder is also the primary trust signal, transitioning authority to a team requires the brand to be strong enough to carry the business independently. This is why brand architecture and business structuring are designed together at Magsmen." },
            { h:"The first-generation MSME", p:"For businesses that grew without ever formalising their operational model, structuring work requires identifying and documenting what actually happens before any redesign. We start with reality, not theory. The informal systems that worked are the raw material for the formal systems that will scale." },
            { h:"Multi-location and multi-category growth", p:"Businesses expanding from one city to multiple AP and Telangana markets face both brand architecture and operational structuring challenges simultaneously. The frameworks at both levels must be designed to align." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">How It Works</div>
        <h2 className="h2 rv">The business structuring process.</h2>
        <div className="proc rv">
          {[
            { h:"Business Diagnosis", d:"A structured assessment of the current business: revenue model, operational systems, team structure, and where the founder's personal involvement is creating structural risk." },
            { h:"Model Assessment", d:"Does the business model support the brand ambition? Does the pricing architecture reflect what the brand can command? These questions are answered before any redesign." },
            { h:"Framework Design", d:"Building the operational systems, decision frameworks, and reporting structures that allow the team to execute consistently without the founder at every step." },
            { h:"Organisational Blueprint", d:"Role definitions, reporting architecture, accountability systems, and governance mapped to the business's current stage and the next one." },
            { h:"Revenue and Pricing Architecture", d:"Redesigning the revenue model and pricing strategy to reflect the brand's actual positioning and the market's capacity." },
            { h:"Implementation Plan", d:"A sequenced, realistic roadmap with timelines, accountability markers, and a defined review cadence. A working plan, not a 300-slide deck." },
          ].map((s, i) => (
            <div key={i} className="proc-item rv">
              <div className="proc-n">{String(i+1).padStart(2,"0")}</div>
              <div><div className="proc-h">{s.h}</div><div className="proc-d">{s.d}</div></div>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Start Here</div>
        <h2 className="h2 rv">Tell us about your business situation.</h2>
        <InlineForm title="What does your business need?" sub="Your answers help our team prepare for the first conversation."
          questions={[
            { q:"What best describes your structural challenge?", opts:["We are growing but operations are chaotic","The business runs only when I am present","Our revenue model needs to evolve","We need to structure for scale or succession"] },
            { q:"What outcome do you need most?", opts:["Clear operational processes the team can follow","A business model that supports the brand ambition","A structure I can step back from safely","A succession or transition plan built properly"] },
            { q:"How urgent is this?", opts:["Very urgent \u2014 we are experiencing pain now","Moderately urgent \u2014 we anticipate it soon","We are planning ahead for the next 1\u20132 years","I am in early exploration mode"] },
          ]} />
      </div></div>
    </div>
  )
}


// ─── LEGAL PAGE ──────────────────────────────────────────────────────────────
function LegalPage({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">03 Legal Brand Protection</div>
        <h1 className="h1 rv">Legal protection is not the last step. It is the first conversation.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Trademark registration. Personality rights. Patent commercialisation. Consumer resolution. Annual legal advisory. And ASCI compliance guidance for advertising-driven brands. Legal brand protection at Magsmen covers every dimension where a brand can be legally vulnerable.</p>
        <div className="brow rv">
          <a className="bf" href="mailto:sandeep@magsmen.com?subject=Legal Brand Protection Inquiry">Discuss your legal situation <ArrowRight size={15} /></a>
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Why It Matters</div>
        <h2 className="h2 rv">The risks that materialise when legal brand protection is not built in.</h2>
        <div className="rtable rv">
          <div className="rrow rh"><div className="rc">The risk</div><div className="rc">What it looks like in practice</div></div>
          {[
            { r:"Name conflict", l:"A competitor in another district has been using the same or similar name. You discover this when you receive a legal notice or when a distributor raises the conflict." },
            { r:"Prior trademark registration", l:"You have been trading under a name for five years. Someone else filed the trademark first and now owns it legally. You must rebrand, negotiate, or litigate." },
            { r:"Personality rights violation", l:"Your name, image, likeness, or voice is used commercially without consent. For public figures and professionals, this is a growing and serious legal exposure." },
            { r:"Franchise or licensing stall", l:"A potential partner asks for your IP schedule. You have no trademarks filed. The deal stalls or the valuation is reduced." },
            { r:"ASCI complaint", l:"An advertising campaign breaches the Advertising Standards Council of India's codes. A competitor or consumer files a complaint. Without ASCI-aware brand communication strategy, the risk is invisible until it surfaces." },
            { r:"Celebrity or brand association liability", l:"A campaign featuring a celebrity with no formal agreement covering IP usage, moral rights, or exclusivity creates legal exposure." },
          ].map((r, i) => (
            <div key={i} className="rrow">
              <div className="rc">{r.r}</div>
              <div className="rc">{r.l}</div>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">What Is Included</div>
        <h2 className="h2 rv">The full scope of legal brand protection.</h2>
        <div className="g3">
          {[
            { n:"01", h:"Trademark Registration", d:"Search, class selection, filing strategy, and registration management under the Trade Marks Act, 1999. Filing under the right classes for the actual scope of the business, not a generic filing.", items:["Class-specific availability search","Phonetic and visual similarity analysis","Multi-class filing strategy","Examination response management","Portfolio expansion planning"] },
            { n:"02", h:"Personality Rights Advisory", d:"For public figures, professionals, celebrities, and high-visibility individuals. Protecting your name, image, likeness, and voice from unauthorised commercial use.", items:["Personality rights audit","Endorsement agreement review","Image and likeness usage protection","Social media and digital rights","Crisis advisory on identity misuse"] },
            { n:"03", h:"Patent Commercialisation", d:"Taking innovation from documentation to market. Strategy for protecting and commercially realising patentable products, processes, and systems.", items:["Patentability assessment","Filing strategy and documentation","Licensing structure design","Commercialisation roadmap","Enforcement strategy"] },
            { n:"04", h:"Annual Legal Advisory", d:"An ongoing legal advisory retainer for brands that need continuous legal counsel without the cost of a full-time legal team. Monthly advisory access with defined scope.", items:["Monthly legal advisory session","Agreement review on demand","New trademark class monitoring","IP portfolio health review","Regulatory change advisory"] },
            { n:"05", h:"Consumer Resolution", d:"Managing consumer disputes, ASCI complaints, and brand-level consumer affairs. For businesses that need structured support when consumer issues escalate.", items:["ASCI complaint response strategy","Consumer forum advisory","Brand communication compliance review","Dispute resolution guidance","Advertising code compliance"] },
            { n:"06", h:"IP Architecture and Contracts", d:"Designing the full intellectual property portfolio and the agreements that protect the brand in partnerships, licensing, celebrity associations, and franchise structures.", items:["Full IP asset inventory","Brand licensing agreements","Endorsement and influencer contracts","Franchise IP clauses","Co-branding and partnership contracts"] },
          ].map((c, i) => (
            <div key={i} className={`sc rv d${i % 3}`}>
              <div className="sc-n">{c.n}</div>
              <div className="sc-h">{c.h}</div>
              <p className="sc-d">{c.d}</p>
              <ul className="sc-ul">{c.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">ASCI Membership</div>
        <h2 className="h2 rv">Brand communication that holds up to advertising standards scrutiny.</h2>
        <div className="qblock rv">
          <div className="qblock-text">As a member of the Advertising Standards Council of India, Magsmen advises on brand communications that are not just persuasive but defensible. ASCI compliance is not a legal formality. It is a brand quality signal. Brands that communicate within ASCI guidelines are harder to attack, easier to defend, and more trusted by sophisticated consumers and channel partners.</div>
          <div className="qblock-attr">ASCI Member \u00b7 Magsmen Strategy Consultants</div>
        </div>
        <div className="g2">
          {[
            { h:"ASCI complaint response", p:"When a complaint is filed against a brand's advertisement, the response requires both legal knowledge and brand strategy awareness. Magsmen manages both dimensions within one engagement." },
            { h:"Advertising compliance advisory", p:"Before a campaign launches, reviewing the communication for ASCI code compliance reduces the risk of a complaint post-launch. Prevention is structurally less expensive than response." },
            { h:"Brand communication standards", p:"Building brand communication frameworks that are ASCI-aware from the ground up. Not reactive compliance but proactive standards that protect the brand's advertising investment." },
            { h:"Competitor complaint strategy", p:"When a competitor makes ASCI-level claims that affect your brand's market perception, a structured response strategy is required. Advisory on when to respond, how, and through which mechanism." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">The Enrolled Advocate Advantage</div>
        <h2 className="h2 rv">Brand strategy and legal protection from the same mind, in the same engagement.</h2>
        <div className="qblock rv">
          <div className="qblock-text">Most brand consultants refer trademark work to a lawyer who has never built a brand strategy. Most trademark lawyers have no understanding of brand positioning. Magsmen does both within one engagement because the principal is both an enrolled advocate and a brand strategist with eight years of practice across AP and Telangana.</div>
        </div>
        <div className="g2">
          {[
            { h:"Brand strategy and trademark filing as one process", p:"When the brand name is designed and the trademark search is conducted simultaneously, naming decisions are made with legal feasibility already in view. The name you launch is the name you own." },
            { h:"The consultation stays in one room", p:"The positioning conversation, the identity conversation, and the legal protection conversation happen with the same advisor. No important detail gets lost between two separate engagements." },
            { h:"Agreements that understand the brand context", p:"Licensing agreements and endorsement contracts written by an advisor who also built the brand strategy reflect how the brand actually works in practice, not how a generic template assumes it works." },
            { h:"Jurisdiction rooted in AP and Telangana", p:"All legal advisory is governed under Indian law with jurisdiction in Guntur, Andhra Pradesh. The advisor understands the local business environment and the specific IP risks that businesses in this region face." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Start Here</div>
        <h2 className="h2 rv">Tell us about your legal brand situation.</h2>
        <InlineForm title="What legal protection do you need?" sub="Your answers help our team prepare for the first conversation."
          questions={[
            { q:"What is your current IP situation?", opts:["We have no trademarks filed","We have some filings but no complete strategy","We had a dispute or close call","We need personality rights advisory"] },
            { q:"What do you need most urgently?", opts:["Trademark search and filing strategy","Legal protection for a brand we are launching","Personality rights and endorsement agreements","Annual legal advisory retainer"] },
            { q:"What concerns you most?", opts:["A competitor using a similar name","Launching without protection in place","Consumer complaints or ASCI exposure","Franchise requiring clean IP schedule"] },
          ]} />
      </div></div>
    </div>
  )
}


// ─── ADVISORY PAGE ───────────────────────────────────────────────────────────
function AdvisoryPage({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Advisory</div>
        <h1 className="h1 rv">Strategic advisory that functions as an integrated arm, not a periodic service.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Advisory engagements at Magsmen are structured around what the mandate requires, not packaged in advance. The right model depends on the complexity of the situation, the stage of the business, and the depth of integration the founder needs from a strategic partner.</p>
        <div className="brow rv">
          <a className="bf" href="mailto:sandeep@magsmen.com?subject=Advisory Inquiry">Discuss your advisory needs <ArrowRight size={15} /></a>
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Engagement Models</div>
        <h2 className="h2 rv">Three models. Each designed for a different mandate.</h2>
        <div className="atiers rv">
          <div className="atier">
            <div className="atier-n">01 \u00b7 Entry</div>
            <div className="atier-h">One-Time Consulting</div>
            <p className="atier-p">One structured session that produces a clear diagnostic of where the brand and business are, where the critical gaps are, and what the right sequence of work is. This is the founding conversation, designed to create clarity before any longer commitment. Not a sales call. A working session.</p>
            <div className="atier-inc">What is included</div>
            <ul className="atier-ul">
              <li>Single structured session (3\u20134 hours)</li>
              <li>Strategic brand and business diagnostic</li>
              <li>Gap identification and priority mapping</li>
              <li>Recommended engagement roadmap in writing</li>
              <li>Written session summary with action framework</li>
              <li>One follow-up call within 2 weeks</li>
            </ul>
            <a className="bo-sm" href="mailto:sandeep@magsmen.com?subject=OTC Inquiry">Enquire about OTC</a>
          </div>
          <div className="atier feat">
            <div className="atier-badge">Most common starting point</div>
            <div className="atier-n">02 \u00b7 Annual Advisory</div>
            <div className="atier-h">Brand Advisory Retainer</div>
            <p className="atier-p">Ongoing strategic advisory for businesses in active growth or repositioning. Brand decisions, communication direction, and market positioning require ongoing thought and structured accountability, not occasional conversation. The advisory retainer creates the cadence and structure for strategic decisions to be made well, not reactively.</p>
            <div className="atier-inc">What is included</div>
            <ul className="atier-ul">
              <li>Monthly strategic advisory session (2 hours)</li>
              <li>Brand and business decision support</li>
              <li>Communication direction and review</li>
              <li>On-demand advisory access (defined parameters)</li>
              <li>Intelligent Council access on mandate</li>
              <li>Quarterly strategic review session</li>
              <li>Annual brand health review</li>
            </ul>
            <a className="bf-sm" href="mailto:sandeep@magsmen.com?subject=Advisory Retainer Inquiry">Discuss advisory retainer</a>
          </div>
          <div className="atier">
            <div className="atier-n">03 \u00b7 Annual Integrated</div>
            <div className="atier-h">Strategic Partner</div>
            <p className="atier-p">An annual engagement for founders navigating a decade-level decision. A new market, a succession, a category repositioning, or a brand that needs to be rebuilt from the foundation. Magsmen functions as an integrated advisory arm with brand, business, and legal under one coordinated perspective.</p>
            <div className="atier-inc">What is included</div>
            <ul className="atier-ul">
              <li>Full brand architecture engagement</li>
              <li>Business structuring and operational review</li>
              <li>Legal brand protection included</li>
              <li>Intelligent Council on all three dimensions</li>
              <li>Monthly strategic sessions</li>
              <li>Quarterly reviews and annual strategy summit</li>
              <li>On-demand access throughout the engagement</li>
              <li>Written strategic brief at each quarter</li>
            </ul>
            <a className="bo-sm" href="mailto:sandeep@magsmen.com?subject=Strategic Partner Inquiry">Discuss partnership</a>
          </div>
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">How We Work</div>
        <h2 className="h2 rv">Advisory that holds up under scrutiny.</h2>
        <div style={{ marginTop:"2.5rem" }}>
          {[
            { n:"01", h:"Engagement scoped to the decision", p:"Engagements are structured around what the mandate actually requires, not packaged in advance. A business facing a succession challenge needs different advisory than a brand launching a new product line. The scope follows the decision." },
            { n:"02", h:"Principal-led throughout", p:"Advisory judgment is exercised by the founding principal directly, not delegated through layers and reviewed at the end. The person accountable for the strategic direction is directly involved in producing it." },
            { n:"03", h:"Integrated across brand, business, and legal", p:"Brand decisions affect business structure. Business structure affects legal architecture. Legal protection affects brand strategy. All three are considered together in every session, not in separate conversations that may contradict each other." },
            { n:"04", h:"Direct and substantiated communication", p:"Clear recommendations supported by strategic rationale. No unnecessary hedging. The advisory relationship is designed to accelerate decisions, not complicate them." },
          ].map((h, i) => (
            <div key={i} className="hww-item rv">
              <div className="hww-n">{h.n}</div>
              <div><div className="hww-h">{h.h}</div><p className="hww-p">{h.p}</p></div>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Advisory Infrastructure</div>
        <h2 className="h2 rv">The Magsmen Intelligent Council</h2>
        <p className="lead rv" style={{ marginBottom:"2.5rem" }}>When your situation requires disciplinary depth beyond brand, business, and legal, Magsmen does not refer you elsewhere. The Intelligent Council brings that expertise directly into your engagement.</p>
        <div className="council-sec rv">
          <div className="stature-tag" style={{ marginBottom:"1.5rem" }}>Magsmen Intelligent Council</div>
          <div className="council-grid">
            <div>
              <h3 className="c-h">A working panel assembled for your engagement. Not a referral directory.</h3>
              <p className="c-p">Most founders who need brand strategy also need a legal perspective on the trademark, a financial view on the business structure, or a technology input on the digital architecture. These conversations should happen in the same room as the brand and business advisory. The Intelligent Council is how that happens.</p>
              <p className="c-p" style={{ marginTop:"1.25rem" }}>The Council is a curated group of practitioners assembled specifically for the dimensions of your mandate and operating within the same strategic framework as the principal engagement. It is not a network. It is a purpose-assembled panel.</p>
              <div className="c-note">
                <p>The Council is convened within the client engagement. It is not a separate retainer. It is the structural difference between a single consultant and an integrated advisory firm.</p>
              </div>
            </div>
            <div>
              <div style={{ fontSize:"11px",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:"1rem" }}>Council Disciplines</div>
              <div className="c-tags">
                {["Legal Advisory","Financial Structuring","Technology Advisory","Sector Intelligence","IP Consultation","Regulatory Compliance","Investment Advisory","Crisis Advisory","Banking and Credit Advisory","Marketing Execution","Digital Infrastructure","HR and Talent Strategy"].map(t => (
                  <span key={t} className="c-tag">{t}</span>
                ))}
              </div>
              <div style={{ marginTop:"2.5rem" }}>
                <div style={{ fontSize:"11px",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.35)",marginBottom:"1rem" }}>When is the Council convened?</div>
                <div className="c-when">
                  {[
                    "When the mandate requires financial structuring or investment-readiness work beyond standard advisory.",
                    "When the brand strategy intersects with regulatory compliance or sector-specific licensing requirements.",
                    "When a business structuring engagement requires technology architecture input.",
                    "When a Stature engagement requires crisis management or media relations expertise.",
                    "When a legal brand protection matter reaches a complexity requiring specialist counsel.",
                  ].map((w, i) => (
                    <div key={i} className="c-when-item">
                      <div className="c-when-dot" />
                      <p className="c-when-p">{w}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">For Whom</div>
        <h2 className="h2 rv">Who advisory is built for.</h2>
        <div className="g2">
          {[
            { h:"The founder navigating a brand repositioning", p:"A business that has outgrown its original positioning and needs to rebuild brand architecture around what it has become. The repositioning must hold across all three dimensions simultaneously." },
            { h:"The family business preparing for the next decade", p:"A family-led business in AP or Telangana facing the dual challenge of modernising the brand while managing succession and operational transition." },
            { h:"The growing brand that needs strategic accountability", p:"A founder who has a clear direction but no structured accountability for brand and business decisions. Advisory that functions as a sounding board, a strategic challenge, and a quarterly review mechanism." },
            { h:"The business expanding beyond its home market", p:"A brand that has dominated its home market in Guntur, Vijayawada, or Hyderabad and is now navigating entry into a new geography, category, or audience." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Start Here</div>
        <h2 className="h2 rv">Which engagement is right for your situation?</h2>
        <InlineForm title="Tell us about your advisory needs." sub="Our strategy associate will review and reach out to you personally within 24 hours."
          questions={[
            { q:"What describes your advisory need?", opts:["I need a one-time strategic diagnosis first","I need ongoing monthly strategic counsel (annual retainer)","I need a year-long integrated strategic partner","I need to understand what the right model is for me"] },
            { q:"What has been missing in your current approach?", opts:["No external strategic perspective","Too much execution, not enough strategic thinking","No legal integration in brand and business decisions","No structured accountability or quarterly review"] },
            { q:"What is the primary decision you are navigating?", opts:["Brand repositioning or new brand creation","Business restructuring for scale or succession","Expansion into a new market or category","All three dimensions simultaneously"] },
          ]} />
      </div></div>
    </div>
  )
}


// ─── ENGAGEMENTS ─────────────────────────────────────────────────────────────
function Engagements({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  const cases = [
    { sector:"FMCG / Food Processing", name:"Tenali Double Horse", client:"Shyam Prasad Garu", challenge:"Strong distribution network but inconsistent brand architecture across product lines. No trademark strategy in place for any product category.", approach:"Complete brand audit, portfolio architecture redesign, trademark registration across 5 trademark classes, communication framework for distributor and consumer markets.", outcome:"Unified brand system across 12 product lines, 3 trademark registrations filed and approved, entry into 2 new regional markets within 8 months of engagement." },
    { sector:"Retail / Lifestyle", name:"Kalanikethan", challenge:"Established retail brand navigating premium repositioning while retaining existing customer loyalty across multi-city format.", approach:"Brand perception audit, positioning strategy for premium tier, identity refinement, communication framework across store formats and digital channels.", outcome:"Premium product tier launched, 35% increase in average transaction value, visual identity consistency established across 3 store formats." },
    { sector:"FMCG / Food Processing", name:"Telugu Foods", challenge:"New brand creation in a competitive category with strong regional incumbents and no existing brand equity or distributor relationships.", approach:"Category analysis, brand naming strategy, trademark filing across 3 classes, full identity architecture, launch communication plan, distributor deck.", outcome:"Brand launched with clear category positioning, trademark secured in 3 classes, distribution established in 4 districts within 6 months of launch." },
    { sector:"Media / Stature", name:"Suma Kanakala", challenge:"Building a structured professional identity separate from media and entertainment roles that generates advisory, speaking, and partnership value.", approach:"Stature engagement: personal brand architecture, narrative framework, positioning strategy, communication system, digital identity structure.", outcome:"Distinct professional identity established, advisory engagement model created, speaking pipeline and consulting positioning built around structured identity." },
    { sector:"Real Estate / Infrastructure", name:"VSB Group", challenge:"Multi-category group with no cohesive brand architecture across business units and no legal protection for the group brand name. One active IP dispute in progress.", approach:"Group brand architecture design, sub-brand structuring, operational branding framework, legal brand protection across group marks, dispute resolution strategy.", outcome:"Group identity unified, 3 sub-brands structured within group architecture, trademark portfolio established, IP dispute resolved through structured negotiation." },
    { sector:"Stature / Media", name:"Rajeev Kanakala", challenge:"Converting high public visibility and community trust into a structured professional identity that supports advisory and entrepreneurial positioning.", approach:"Stature engagement with Authority tier structure. Perception audit, positioning strategy, narrative framework, professional identity architecture.", outcome:"Structured professional identity built, advisory and entrepreneurial positioning established, brand narrative aligned with professional direction." },
    { sector:"Stature / Professional", name:"Dr. Srujana Abadala", challenge:"Medical professional with significant expertise and community visibility but no structured professional identity to support institutional or advisory engagements.", approach:"Stature Foundation to Authority tier engagement. Positioning strategy, communication framework, professional narrative, digital presence architecture.", outcome:"Structured professional identity built around medical expertise, institutional advisory positioning established, community trust converted into professional authority." },
    { sector:"FMCG / Consumer", name:"Triplex", challenge:"Brand entering a new category in AP market with a competitive landscape dominated by established national players. No local brand positioning advantage defined.", approach:"Category entry strategy, positioning design for regional market, identity architecture, launch communication plan for AP and Telangana distribution.", outcome:"Clear category positioning defined around regional market insight, identity system launched, initial distribution across 3 districts." },
    { sector:"Export / Agriculture", name:"Arjun Sai Exports", challenge:"Agricultural export brand needing a professional identity and brand architecture to enter international markets and attract premium buyers.", approach:"Export brand positioning, identity architecture, communication standards for international market documentation, trademark advisory for export markets.", outcome:"International-standard brand identity built, export documentation and communication standardised, premium buyer positioning established." },
  ]
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Engagements</div>
        <h1 className="h1 rv">Eight years of mandates across AP and Telangana.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Selected engagements across brand architecture, business structuring, Stature, and legal brand protection. Outcomes are reported as achieved, not projected.</p>
      </div></div>

      <div className="sec"><div className="si">
        <div className="lbl rv">Selected Work</div>
        <h2 className="h2 rv">Nine engagements. Nine outcomes.</h2>
        <div style={{ display:"flex",flexDirection:"column",gap:"1.5rem",marginTop:"2.5rem" }}>
          {cases.map((c, i) => (
            <div key={i} className="sc rv" style={{ cursor:"default" }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem",gap:"1rem",flexWrap:"wrap" }}>
                <div>
                  <div className="sc-n">{c.sector}</div>
                  <div className="sc-h" style={{ fontSize:"1.3rem" }}>{c.name}</div>
                  {c.client && <div style={{ fontSize:"12px",color:"#888",fontWeight:600,marginTop:"2px" }}>{c.client}</div>}
                </div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr",gap:"1.25rem" }}>
                {[{ h:"Challenge", t:c.challenge },{ h:"Approach", t:c.approach },{ h:"Outcome", t:c.outcome }].map((f, j) => (
                  <div key={j}>
                    <div style={{ fontSize:"11px",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#BBB",marginBottom:".35rem" }}>{f.h}</div>
                    <div style={{ fontSize:".92rem",color:"#444",lineHeight:1.8 }}>{f.t}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="ctabox rv">
          <div className="ctabox-h">See if your situation matches what we do.</div>
          <p className="ctabox-p">Our team will assess whether the engagement is the right fit and what it would require.</p>
          <div className="ctabox-row">
            <a className="bf" onClick={() => navigate("contact")}>Start the conversation <ArrowRight size={15} /></a>
          </div>
        </div>
      </div></div>
    </div>
  )
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">About Magsmen</div>
        <h1 className="h1 rv">Sandeep N</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Founder and Principal Consultant. His practice sits at the intersection of brand strategy, business architecture, and legal brand protection. A combination that has no direct equivalent in the South Indian advisory market.</p>
      </div></div>

      <div className="sec"><div className="si">
        <div className="about-grid">
          <div>
            <div className="lbl rv">The Founder</div>
            <div className="rv">
              <p className="body" style={{ marginBottom:"1.5rem" }}>I built Magsmen because the founder in Guntur deserves the same quality of strategic thinking as the corporate in Hyderabad. Not a simplified version of it. The real thing.</p>
              <p className="body" style={{ marginBottom:"1.5rem" }}>After eight years and more than 50 engagements across first-generation MSMEs, IPL sponsor brands, and Fortune 25 organisations, one thing is more clear to me than anything else. The businesses that endure are not the ones that spent the most on marketing. They are the ones that built the clearest brand architecture, protected it legally, and aligned the business around it.</p>
              <p className="body" style={{ marginBottom:"1.5rem" }}>I am also an enrolled advocate. That means brand naming and trademark filing, brand positioning and legal brand protection, business structuring and commercial contract design can all be addressed within one engagement. That combination does not exist anywhere else in this market.</p>
              <p className="body" style={{ marginBottom:"1.5rem" }}>Through InTalks, we have reached more than 200 million views across platforms, directly influencing over 10,000 students, founders, and professionals. Through Magsmen, we have built and protected brands across Andhra Pradesh, Telangana, and beyond. The two platforms compound each other because every business is built on trust, and trust is built through consistent, authentic thought leadership over time.</p>
              <div className="qblock rv">
                <div className="qblock-text">Every business has the right to become a brand. That is not a tagline. It is what eight years of this work has proven.</div>
              </div>
              <div className="brow rv">
                <a className="bf" href="mailto:sandeep@magsmen.com">Request a consultation <ArrowRight size={15} /></a>
              </div>
            </div>
          </div>
          <div>
            <div className="lbl rv">Credentials</div>
            <div className="cred-list rv">
              {[
                { i:<Award size={16} />, t:"TEDx Speaker", s:"Brand strategy and founder identity" },
                { i:<Shield size={16} />, t:"Enrolled Advocate", s:"Bar Council of India \u00b7 Legal advisory within engagements" },
                { i:<Star size={16} />, t:"Consultant of the Year 2023", s:"The CEO Magazine \u00b7 India Top 100 Marketing Leaders" },
                { i:<Globe size={16} />, t:"MMA Global Awards Jury", s:"Evaluated Google, Samsung, Apple, HUL, L'Or\u00e9al" },
                { i:<Award size={16} />, t:"Chair of Jury, SMARTIES APAC", s:"Asia Pacific regional jury chair" },
                { i:<Briefcase size={16} />, t:"International MBA, Deakin University", s:"Melbourne \u00b7 Young Alumni of the Year 2024" },
                { i:<Scale size={16} />, t:"ASCI Member", s:"Advertising Standards Council of India" },
                { i:<BookOpen size={16} />, t:"InTalks Podcast", s:"200M+ views \u00b7 10,000+ professionals influenced" },
              ].map((c, i) => (
                <div key={i} className="cred">
                  <div className="cred-icon">{c.i}</div>
                  <div><div className="cred-t">{c.t}</div><div className="cred-s">{c.s}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></div>

      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">The Firm</div>
        <h2 className="h2 rv">About Magsmen Strategy Consultants</h2>
        <p className="lead rv" style={{ marginBottom:"2.5rem" }}>Magsmen is a division of Grofessors Innovations Private Limited, incorporated in Andhra Pradesh. The firm is structured to provide both consulting services and legal advisory within a single engagement.</p>
        <div className="g2">
          {[
            { h:"Why integrated advisory", p:"Most founders receive brand advice that has no legal structure behind it. Marketing campaigns that have no business rationale. Trademark filings that have no brand strategy. Advice is produced in silos and applied to businesses that cannot afford silos. Magsmen was built to close that gap." },
            { h:"Who we work with", p:"Founders and business owners across Andhra Pradesh and Telangana who are past the first stage of growth. Businesses that built through relationships and now need architecture. MSME owners who know something is not working but cannot name it precisely." },
            { h:"What we do not do", p:"We do not run advertising campaigns. We do not manage social media. We do not design logos as a standalone service. These are outputs of a brand strategy, not substitutes for it. We are consulted on the strategy that directs these activities." },
            { h:"The ecosystem", p:"Magsmen sits within the Grofessors ecosystem alongside InTalks (the thought leadership platform), MIBBS (financial planning), and Sanstrategies (content and education). Each platform strengthens the others in a compounding flywheel." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
        <div style={{ marginTop:"3rem" }}>
          <div className="lbl rv">The Ecosystem</div>
          <div className="eco-grid rv">
            {[
              { name:"Magsmen", desc:"Brand architecture, business structuring, legal brand protection" },
              { name:"InTalks Podcast", desc:"Thought leadership platform. 200M+ views across platforms." },
              { name:"MIBBS", desc:"Financial planning and budget intelligence for businesses" },
              { name:"Sanstrategies", desc:"Brand and strategy education content platform" },
              { name:"WiseCap Design Studio", desc:"Design and creative execution arm" },
              { name:"Grofessors Innovations Pvt Ltd", desc:"Parent entity incorporating all divisions" },
            ].map((e, i) => <div key={i} className="eco-card rv"><div className="eco-name">{e.name}</div><div className="eco-desc">{e.desc}</div></div>)}
          </div>
        </div>
      </div></div>
    </div>
  )
}


// ─── BLOG ────────────────────────────────────────────────────────────────────
function Blog({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Perspectives</div>
        <h1 className="h1 rv">Thinking on brand, business, and the Indian market.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Strategic thinking that changes how founders approach brand and business. Not opinions. Frameworks built from eight years of work across 50 brands in Andhra Pradesh, Telangana, and beyond.</p>
      </div></div>
      <div className="sec"><div className="si">
        <div className="blog-grid">
          {BLOGS.map((b, i) => (
            <div key={i} className={`blog-card rv d${i % 3}`} onClick={() => navigate("blog/" + b.id)}>
              <div className="blog-img"><div className="blog-img-inner">{b.icon}</div></div>
              <div className="blog-body">
                <div className="blog-cat">{b.cat}</div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
                <div className="blog-meta">{b.date} \u00b7 {b.readTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div></div>
      <div className="sec sec-alt"><div className="si">
        <div className="ctabox rv">
          <div className="ctabox-h">The conversation that changes how you think about your brand starts here.</div>
          <p className="ctabox-p">Our team listens first, then tells you honestly what the situation requires.</p>
          <div className="ctabox-row">
            <a className="bf" onClick={() => navigate("contact")}>Start the conversation <ArrowRight size={15} /></a>
          </div>
        </div>
      </div></div>
    </div>
  )
}

function BlogPost({ id, navigate }) {
  const post = BLOGS.find(b => b.id === id) || BLOGS[0]
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="blog-hero" style={{ paddingTop:"80px" }}>
        <div className="blog-hero-c rv">
          <div style={{ fontSize:"11px",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"#999",marginBottom:"1rem" }}>{post.cat}</div>
          <h1 style={{ fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:800,lineHeight:1.1,letterSpacing:"-.02em",marginBottom:"1.25rem" }}>{post.title}</h1>
          <div style={{ fontSize:".93rem",color:"#888",marginBottom:"2rem" }}>{post.date} \u00b7 {post.readTime}</div>
          <p style={{ fontSize:"1.05rem",color:"#444",lineHeight:1.95,maxWidth:680 }}>{post.excerpt}</p>
        </div>
      </div>
      <div className="sec"><div className="si">
        <div className="blog-content rv">
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>
            if (block.type === "pullquote") return <div key={i} className="pullquote">{block.text}</div>
            return <p key={i}>{block.text}</p>
          })}
          <div style={{ marginTop:"3rem",paddingTop:"3rem",borderTop:"1px solid #EBEBEB" }}>
            <p style={{ fontSize:".93rem",color:"#888",marginBottom:"1.5rem" }}>This perspective is drawn from eight years of brand architecture and legal brand protection work across Andhra Pradesh and Telangana. To discuss how these ideas apply to your situation, reach out directly.</p>
            <a className="bf" onClick={() => navigate("contact")}>Talk to our team <ArrowRight size={15} /></a>
          </div>
        </div>
      </div></div>
      <div className="sec sec-alt"><div className="si">
        <div className="lbl rv">More Perspectives</div>
        <h3 className="h3 rv" style={{ marginBottom:"2rem" }}>Related thinking from Magsmen.</h3>
        <div className="blog-grid">
          {BLOGS.filter(b => b.id !== id).slice(0,3).map((b, i) => (
            <div key={i} className={`blog-card rv d${i}`} onClick={() => navigate("blog/" + b.id)}>
              <div className="blog-img"><div className="blog-img-inner">{b.icon}</div></div>
              <div className="blog-body">
                <div className="blog-cat">{b.cat}</div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-meta">{b.date} {b.readTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div></div>
    </div>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Contact</div>
        <h1 className="h1 rv">Tell us about your situation.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>Not every business needs the same engagement. Our strategy associate will review your details and reach out personally within 24 hours to discuss the right path forward.</p>
      </div></div>
      <div className="sec"><div className="si">
        <div style={{ display:"grid",gridTemplateColumns:"1fr",gap:"5rem" }}>
          <div>
            <div className="lbl rv">Send a message</div>
            <div className="rv">
              <ContactForm title="" sub="Leave your details and our strategy associate will reach out personally within 24 hours." />
            </div>
          </div>
        </div>
        <div style={{ marginTop:"4rem",paddingTop:"4rem",borderTop:"1px solid #EBEBEB",display:"grid",gridTemplateColumns:"1fr",gap:"2rem" }} className="rv">
          {[
            { icon:<Mail size={18} />, label:"Email", val1:"sandeep@magsmen.com", val2:"connect@magsmen.com" },
            { icon:<Phone size={18} />, label:"Phone", val1:"+91 90449 10449", val2:"Monday to Saturday, 10am to 7pm IST" },
            { icon:<MapPin size={18} />, label:"Location", val1:"Guntur, Andhra Pradesh", val2:"Serving businesses across AP and Telangana" },
          ].map((c, i) => (
            <div key={i} style={{ display:"flex",gap:"1.25rem",alignItems:"flex-start" }}>
              <div style={{ width:42,height:42,border:"1px solid #EBEBEB",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize:"11px",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#BBB",marginBottom:".35rem" }}>{c.label}</div>
                <div style={{ fontSize:"14px",fontWeight:600 }}>{c.val1}</div>
                <div style={{ fontSize:"13px",color:"#888",marginTop:"2px" }}>{c.val2}</div>
              </div>
            </div>
          ))}
        </div>
      </div></div>
    </div>
  )
}

// ─── PRIVACY POLICY ──────────────────────────────────────────────────────────
function Privacy() {
  const ref = useRef(null)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl">Legal</div>
        <h1 className="h1">Privacy Policy</h1>
        <p className="lead" style={{ marginTop:"1rem" }}>Last updated: January 2025</p>
      </div></div>
      <div className="sec"><div className="si">
        <div style={{ maxWidth:780 }}>
          {[
            { h:"Information We Collect", p:"Magsmen Strategy Consultants (a division of Grofessors Innovations Private Limited) collects information that you provide directly to us when you contact us, submit a form, or engage with our services. This includes your name, email address, mobile number, company name, and any details you share about your business situation. We also collect standard website analytics data including page views, referral sources, and device information through standard analytics tools." },
            { h:"How We Use Your Information", p:"We use the information you provide to respond to your enquiries, assess your business situation before our first conversation, communicate with you about our services, and improve our advisory practice. We do not use your information for any purpose other than providing our consulting services and communicating with you about them. We do not sell, rent, or share your information with third parties for their marketing purposes." },
            { h:"Information Security", p:"We take reasonable measures to protect the information you provide to us. Client information and business details shared in the course of an engagement are held in strict confidence in accordance with the confidentiality obligations in our Consulting Engagement Agreement. All team members are bound by confidentiality obligations that survive the end of their engagement with Magsmen." },
            { h:"Cookies and Analytics", p:"Our website uses standard analytics tools to understand how visitors interact with our content. This data is aggregated and anonymised. We do not use cookies for advertising or tracking purposes. You can disable cookies in your browser settings without affecting your ability to access our website." },
            { h:"Your Rights", p:"You have the right to request access to the information we hold about you, request that we correct inaccurate information, or request that we delete your information from our systems. To exercise any of these rights, contact us at connect@magsmen.com with the subject line 'Privacy Request'." },
            { h:"Contact for Privacy Matters", p:"For any questions about this privacy policy or how we handle your information, contact us at connect@magsmen.com or by post at Magsmen Strategy Consultants, Grofessors Innovations Private Limited, Guntur, Andhra Pradesh, India." },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom:"2.5rem" }}>
              <h2 style={{ fontSize:"1.2rem",fontWeight:800,marginBottom:".75rem" }}>{s.h}</h2>
              <p style={{ fontSize:".97rem",color:"#444",lineHeight:1.95 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </div></div>
    </div>
  )
}

// ─── TERMS ───────────────────────────────────────────────────────────────────
function Terms() {
  return (
    <div className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl">Legal</div>
        <h1 className="h1">Terms of Service</h1>
        <p className="lead" style={{ marginTop:"1rem" }}>Last updated: January 2025</p>
      </div></div>
      <div className="sec"><div className="si">
        <div style={{ maxWidth:780 }}>
          {[
            { h:"Consulting Services", p:"Magsmen Strategy Consultants, a division of Grofessors Innovations Private Limited, provides brand architecture, business structuring, legal brand protection, and advisory services to businesses and individuals. All consulting engagements are governed by the Consulting Engagement Agreement (CEA) executed between Magsmen and the client before any work commences. These terms apply to your use of our website and any preliminary engagement." },
            { h:"Website Use", p:"This website is provided for informational purposes. The content on this website represents our general perspective on brand strategy, business structuring, and legal brand protection. It does not constitute legal, financial, or business advice. For advice specific to your situation, a formal consulting engagement is required." },
            { h:"Intellectual Property", p:"All content on this website including text, frameworks, methodologies, and visual design is the intellectual property of Grofessors Innovations Private Limited. You may not reproduce, distribute, or create derivative works from any content on this website without our prior written consent. Our proprietary methodologies including the OTC Five-Pillar Diagnostic, Brand Health Index, Stature Methodology, and related frameworks are protected intellectual property." },
            { h:"Legal Advisory Disclaimer", p:"Sandeep N is an enrolled advocate under the Bar Council of India. Legal advisory provided through Magsmen is not a substitute for independent legal counsel. For matters requiring formal legal representation or court proceedings, you are advised to engage independent qualified legal counsel. Our legal brand protection services constitute advisory and do not create a solicitor-client relationship governed by Bar Council professional conduct rules." },
            { h:"Limitation of Liability", p:"Our liability in connection with any consulting engagement is limited to the fees paid for the specific engagement in which the liability arises. We are not liable for indirect, consequential, or incidental damages arising from our advisory services or from your use of this website. All advice is provided based on the information you share with us. The accuracy and completeness of that information is your responsibility." },
            { h:"Governing Law and Jurisdiction", p:"These terms and any disputes arising from them are governed by the laws of India. The exclusive jurisdiction for any dispute is the courts in Guntur, Andhra Pradesh, India." },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom:"2.5rem" }}>
              <h2 style={{ fontSize:"1.2rem",fontWeight:800,marginBottom:".75rem" }}>{s.h}</h2>
              <p style={{ fontSize:".97rem",color:"#444",lineHeight:1.95 }}>{s.p}</p>
            </div>
          ))}
        </div>
      </div></div>
    </div>
  )
}

// ─── CAREERS ─────────────────────────────────────────────────────────────────
function Careers({ navigate }) {
  const ref = useRef(null)
  useReveal(ref)
  return (
    <div ref={ref} className="pg">
      <div className="hero"><div className="hero-c">
        <div className="lbl rv">Careers</div>
        <h1 className="h1 rv">Work at Magsmen.</h1>
        <p className="lead rv" style={{ marginTop:"1.75rem" }}>We are building a consulting firm that changes how Indian founders think about brand, business, and legal protection. If that mission matters to you, and if you are willing to do the rigorous intellectual work that mission requires, we would like to hear from you.</p>
      </div></div>
      <div className="sec"><div className="si">
        <div className="lbl rv">Who We Are Looking For</div>
        <h2 className="h2 rv">We hire for mindset before we hire for skill.</h2>
        <p className="body rv" style={{ maxWidth:660,marginTop:".5rem",marginBottom:"2.5rem" }}>Magsmen is a small, focused team. Every person on the team contributes to client engagements, not just to internal operations. That means we need people who think strategically, communicate precisely, and hold themselves to a high standard of intellectual rigour without needing external management to do so.</p>
        <div className="g2">
          {[
            { h:"Brand Strategy Associate", p:"You understand positioning, narrative, and identity at a strategic level, not a tactical one. You can conduct a brand audit, write a positioning statement, and explain why a naming decision is wrong without being asked to. You have 2 to 4 years of relevant experience in brand strategy, consulting, or a discipline adjacent to it." },
            { h:"Legal Research and IP Associate", p:"You have a law degree and an interest in intellectual property and brand law. You understand how trademark strategy connects to brand strategy. You are meticulous, structured, and can manage filing timelines without being managed. Knowledge of the Trade Marks Act, 1999 and ASCI guidelines is an advantage." },
            { h:"Business Research Analyst", p:"You understand business models, operational structures, and how businesses in the MSME sector actually operate. You can read a P&L, map a process, and identify structural gaps without a template. Experience in business consulting or finance is an advantage." },
            { h:"Content and Thought Leadership Associate", p:"You can write in a voice that is precise, warm, and authoritative. You understand the difference between content that informs and content that changes how someone thinks. You are familiar with the Sanstrategies and InTalks platforms and understand the kind of work that gets produced through them." },
          ].map((k, i) => <div key={i} className={`kl rv d${i % 2}`}><div className="kl-h">{k.h}</div><p className="kl-p">{k.p}</p></div>)}
        </div>
        <div style={{ marginTop:"3.5rem" }} className="rv">
          <div className="lbl">How to Apply</div>
          <p className="body" style={{ maxWidth:600,marginTop:".5rem",marginBottom:"1.5rem" }}>Send an email to connect@magsmen.com with the role you are interested in as the subject line. Include a brief note on why you are the right person for the role and what you have done that demonstrates it. No templates. No automated applications. A genuine note about your thinking and your work is what we are looking for.</p>
          <a className="bf" href="mailto:connect@magsmen.com?subject=Career Inquiry">Send your application <ArrowRight size={15} /></a>
        </div>
      </div></div>
    </div>
  )
}

// ─── APP ROUTER ──────────────────────────────────────────────────────────────
export default function FinalHomePage() {
  const [page, setPage] = useState("home")
  const [showPopup, setShowPopup] = useState(true)
  const navigate = p => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }) }

  useEffect(() => {
    const st = document.createElement("style")
    st.innerHTML = CSS
    document.head.appendChild(st)
    return () => st.remove()
  }, [])

  const blogId = page.startsWith("blog/") ? page.slice(5) : null

  const pages = {
    home: () => <Home navigate={navigate} />,
    brand: () => <BrandPage navigate={navigate} />,
    business: () => <BusinessPage navigate={navigate} />,
    legal: () => <LegalPage navigate={navigate} />,
    advisory: () => <AdvisoryPage navigate={navigate} />,
    engagements: () => <Engagements navigate={navigate} />,
    about: () => <About navigate={navigate} />,
    blog: () => <Blog navigate={navigate} />,
    contact: () => <Contact navigate={navigate} />,
    privacy: () => <Privacy />,
    terms: () => <Terms />,
    careers: () => <Careers navigate={navigate} />,
  }

  const PageComponent = blogId ? () => <BlogPost id={blogId} navigate={navigate} /> : (pages[page] || pages.home)

  return (
    <div>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <Nav page={page} navigate={navigate} />
      <PageComponent />
      <Footer navigate={navigate} />
    </div>
  )
}