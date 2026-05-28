import React, { useState, useEffect, useRef } from 'react';
import logo from "/assets/blacklogohorizontal.png"

export default function DoubleHorseOrganicsProposal() {
  // Active section track state for the vertical dot navigation
 const [activeSection, setActiveSection] = useState<number>(0);
  const [activeTierTab, setActiveTierTab] = useState<number>(1);
  const [activePhaseCard, setActivePhaseCard] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>('');
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: 'ai',
      text: 'Hello Shyam Prasad Garu. I can answer questions about any of the three options, the SKU master copies, legal architecture, pricing logic, or anything in this proposal.'
    }
  ]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // Chatbot state tracking local discussion flow matching proposal context

  // Define the shape of your chat messages
interface ChatMessage {
  role: 'ai' | 'us';
  text: string;
}

// Define the shape of your canvas particles
interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
}
//   const [chatMessages, setChatMessages] = useState([
//     {
//       role: 'ai',
//       text: 'Hello Shyam Prasad Garu. I can answer questions about any of the three options, the SKU master copies, legal architecture, pricing logic, or anything in this proposal.'
//     }
//   ]);

  // DOM Refs for dynamic interactive layers
//   const canvasRef = useRef(null);
//   const cursorRef = useRef(null);
//   const ringRef = useRef(null);
//   const progressRef = useRef(null);

  // Custom Interactivity: Mouse Position, Custom Cursor, Canvas Particles, Reveal Observers
  useEffect(() => {
    // 1. Scrolled progress line and dynamic active state observer tracking
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && progressRef.current) {
        progressRef.current.style.width = `${(window.scrollY / totalHeight) * 100}%`;
      }

      const sections = document.querySelectorAll('[data-s]');
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        if (window.scrollY >= top - 220) {
          setActiveSection(parseInt(sec.getAttribute('data-s') || '0'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // 2. Custom Cursor Positioning & Elastic Follower Ring
    let mx = 0, my = 0, rx = 0, ry = 0;
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const updateCursor = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animationFrameId = requestAnimationFrame(updateCursor);
    };
    updateCursor();

    // 3. Background Hero Canvas Particle Simulation
    // Inside your useEffect...
    
    // 3. Background Hero Canvas Particle Simulation
    const cv = canvasRef.current;
    let canvasFrameId: number; // Added strict type
    
    if (cv) {
      const ctx = cv.getContext('2d');
      if (ctx) { // Added null check for context
        let w = (cv.width = cv.offsetWidth);
        let h = (cv.height = cv.offsetHeight);

        const handleResize = () => {
          w = cv.width = cv.offsetWidth;
          h = cv.height = cv.offsetHeight;
        };
        window.addEventListener('resize', handleResize);

        const pts: Particle[] = []; // Typed the array
        for (let i = 0; i < 55; i++) {
          pts.push({
            x: Math.random() * 2000,
            y: Math.random() * 900,
            r: Math.random() * 1.4 + 0.3,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.2,
            o: Math.random() * 0.35 + 0.08,
          });
        }

        const drawParticles = () => {
          ctx.clearRect(0, 0, w, h);
          pts.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167, 139, 250, ${p.o})`;
            ctx.fill();
          });
          canvasFrameId = requestAnimationFrame(drawParticles);
        };
        drawParticles();
      }
    }

    // 4. Reveal Animation Elements on View Intersection
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.rv').forEach((el) => revealObserver.observe(el));

    // Cleanup active global listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      revealObserver.disconnect();
    };
  }, []);

  // Section smooth navigation scroll controller
  const navigateToSection = (index) => {
    const sectionElement = document.getElementById(`s${index}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle dynamic FAQ view block heights
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Chat message submit handler targeting mock client communication pipeline
 const sendChatMessage = async () => {
    const promptText = chatInput.trim();
    if (!promptText) return;

    setChatInput('');
    const updatedMessages: ChatMessage[] = [...chatMessages, { role: 'us', text: promptText }];
    setChatMessages(updatedMessages);

    const processingState: ChatMessage[] = [...updatedMessages, { role: 'ai', text: 'Thinking...' }];
    setChatMessages(processingState);

    try {
      // Direct this to your backend server, NOT directly to Anthropic
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: promptText })
      });
      
      const data = await response.json();
      setChatMessages([
        ...updatedMessages,
        { role: 'ai', text: data.reply || 'Please email sandeep@magsmen.com directly.' }
      ]);
    } catch (e) {
      setChatMessages([
        ...updatedMessages,
        { role: 'ai', text: 'Please email sandeep@magsmen.com or connect@magsmen.com for questions.' }
      ]);
    }
  };
  return (
    <div className="proposal-root-wrapper">
      {/* SCOPED INJECTED INLINE BRAND PRESETS CSS ENGINE */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --v: #7C3AED; --vd: #1A0A2E; --vdk: #3B0764; --vl: #A78BFA; --vp: #EDE9FE;
          --ink: #0F0A1A; --bt: #3D2D5C; --mu: #7C6A9A; --ln: rgba(124,58,237,.15);
          --wh: #FFF; --ow: #F8F5FF; --go: #C5A572; --fn: 'Montserrat', sans-serif;
        }
        .proposal-root-wrapper { font-family: var(--fn); background: var(--wh); color: var(--ink); overflow-x: hidden; position: relative; }
        .proposal-root-wrapper::before {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          opacity:.4;
        }
        .proposal-root-wrapper section { position: relative; z-index: 1; }
        #prog { position: fixed; top: 0; left: 0; height: 2px; background: linear-gradient(90deg, var(--v), var(--go)); z-index: 9999; width: 0; transition: width .08s; }
        .cur { width: 8px; height: 8px; background: var(--v); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); }
        .cur-ring { width: 30px; height: 30px; border: 1px solid rgba(124,58,237,.5); border-radius: 50%; position: fixed; pointer-events: none; z-index: 9998; transform: translate(-50%, -50%); transition: transform .15s ease-out; }
        .cur.h { transform: translate(-50%, -50%) scale(2); background: rgba(124,58,237,.3); }
        
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: .8rem 1.2rem; background: rgba(255,255,255,.95); backdrop-filter: blur(24px); border-bottom: 1px solid var(--ln); transition: padding .3s, box-shadow .3s; }
        nav.sc { padding: .5rem 1.2rem; box-shadow: 0 2px 20px rgba(124,58,237,.08); }
        .nl { display: flex; align-items: center; gap: .7rem; }
        .lm { width: 32px; height: 32px; background: var(--vdk); border-radius: 4px; display: flex; align-items: center; justify-content: center; animation: lp 4s ease-in-out infinite; }
        @keyframes lp { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,.3); } 50% { box-shadow: 0 0 0 6px rgba(124,58,237,0); } }
        .lt .b { font-size: 12px; font-weight: 700; letter-spacing: .18em; color: var(--ink); text-transform: uppercase; display: block; }
        .lt .s { font-size: 7px; font-weight: 400; letter-spacing: .14em; color: var(--mu); text-transform: uppercase; display: block; }
        .nt { display: none; gap: 1.5rem; align-items: center; }
        .nt span { font-size: 10px; font-weight: 500; letter-spacing: .1em; color: var(--mu); text-transform: uppercase; }
        .nc { background: var(--v); color: #fff; border: none; padding: .45rem 1.1rem; font-family: var(--fn); font-size: 10px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; border-radius: 2px; cursor: pointer; transition: all .2s; text-decoration: none; white-space: nowrap; }
        .nc:hover { background: #6D28D9; transform: scale(1.03); }
        
        #sd { display: none; position: fixed; right: 1.2rem; top: 50%; transform: translateY(-50%); flex-direction: column; gap: .5rem; z-index: 50; }
        .sd { width: 8px; height: 8px; border-radius: 50%; background: transparent; border: 1px solid rgba(124,58,237,.4); cursor: pointer; transition: all .3s; position: relative; }
        .sd.a { background: var(--v); border-color: var(--v); box-shadow: 0 0 0 3px rgba(124,58,237,.2); }
        .sd:hover::after { content: attr(data-l); position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: var(--vd); color: #fff; font-size: 10px; font-weight: 500; padding: .2rem .6rem; border-radius: 2px; white-space: nowrap; }
        
        .rv { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .rv.vis { opacity: 1; transform: none; }
        .d1 { transition-delay: .08s; } .d2 { transition-delay: .16s; } .d3 { transition-delay: .24s; } .d4 { transition-delay: .32s; } .d5 { transition-delay: .4s; }
        
        .sl { font-size: 9px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase; color: var(--v); margin-bottom: .8rem; display: flex; align-items: center; gap: .6rem; }
        .sl::before { content: ''; width: 20px; height: 1px; background: var(--v); }
        .st { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 300; line-height: 1.1; color: var(--ink); margin-bottom: 1.2rem; letter-spacing: -.02em; }
        .st strong { font-weight: 700; } .st em { font-style: italic; color: var(--v); }
        .bt2 { font-size: .93rem; font-weight: 300; line-height: 1.85; color: var(--bt); max-width: 700px; }
        .sec { padding: 4rem 1.5rem; } .si { max-width: 1080px; margin: 0 auto; }
        
        .cbtn { display: inline-block; background: var(--v); color: #fff; font-family: var(--fn); font-size: 11px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; text-decoration: none; padding: 1rem 2.5rem; border-radius: 2px; transition: background .2s, transform .2s; border: none; cursor: pointer; }
        .cbtn:hover { background: #6D28D9; transform: scale(1.02); }
        
        .hero { min-height: 100vh; background: var(--vd); position: relative; display: flex; flex-direction: column; justify-content: center; padding: 6.5rem 1.5rem 3.5rem; overflow: hidden; }
        .hbg { position: absolute; right: -6vw; top: 50%; transform: translateY(-50%); font-size: 40vw; font-weight: 700; color: rgba(255,255,255,.022); line-height: 1; pointer-events: none; user-select: none; }
        .hcv { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .he { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.8rem; }
        .he .tg { font-size: 10px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: var(--vl); padding: .3rem .9rem; border: 1px solid rgba(167,139,250,.3); border-radius: 2px; animation: tg 3s ease-in-out infinite; }
        @keyframes tg { 0%,100% { border-color: rgba(167,139,250,.3); } 50% { border-color: rgba(167,139,250,.7); box-shadow: 0 0 12px rgba(124,58,237,.25); } }
        .he .hl { flex: 1; height: 1px; background: rgba(167,139,250,.2); max-width: 80px; }
        .htl { font-size: clamp(3rem, 8vw, 7.5rem); font-weight: 300; line-height: .95; color: #fff; margin-bottom: 1.2rem; letter-spacing: -.03em; position: relative; z-index: 2; }
        .htl em { font-style: italic; color: var(--vl); }
        .wo { display: inline-block; animation: wf 6s ease-in-out infinite; }
        @keyframes wf { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .hsub { font-size: clamp(.9rem, 2vw, 1.2rem); font-weight: 300; font-style: italic; color: rgba(255,255,255,.45); margin-bottom: 2.5rem; max-width: 540px; line-height: 1.75; position: relative; z-index: 2; }
        
        .hmg { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid rgba(255,255,255,.08); padding-top: 1.8rem; position: relative; z-index: 2; }
        .hmi { padding: .9rem 1rem .9rem 0; border-right: 1px solid rgba(255,255,255,.07); }
        .hmi:nth-child(2n) { border-right: none; }
        .hmi .lb { font-size: 8.5px; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: .3rem; }
        .hmi .vl2 { font-size: .88rem; font-weight: 500; color: rgba(255,255,255,.85); }
        
        .rb { background: linear-gradient(135deg, rgba(197,165,114,.12), rgba(124,58,237,.08)); border: 1px solid rgba(197,165,114,.3); border-radius: 8px; padding: 1.6rem 1.8rem; display: flex; align-items: flex-start; gap: 1.2rem; flex-wrap: wrap; margin: 1.8rem 0; position: relative; z-index: 2; }
        .ri { width: 44px; height: 44px; background: rgba(197,165,114,.15); border: 1px solid rgba(197,165,114,.4); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; animation: rp 3s ease-in-out infinite; }
        @keyframes rp { 0%,100% { box-shadow: 0 0 0 0 rgba(197,165,114,.3); } 50% { box-shadow: 0 0 0 8px rgba(197,165,114,0); } }
        .ri svg { width: 20px; height: 20px; }
        .rtx { flex: 1; min-width: 200px; }
        .rtl { font-size: 12px; font-weight: 700; color: var(--go); margin-bottom: .3rem; }
        .rtb { font-size: 11.5px; font-weight: 300; color: rgba(255,255,255,.6); line-height: 1.75; }
        
        .tw { background: var(--v); padding: .55rem 0; overflow: hidden; position: relative; z-index: 2; }
        .tk { display: flex; animation: tk 45s linear infinite; }
        .tki { white-space: nowrap; font-size: 10px; font-weight: 600; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.82); padding: 0 2.5rem; }
        .tki.g { color: var(--go); }
        @keyframes tk { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        
        .sg { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin: 2rem 0; }
        .sc2 { background: var(--ow); border: 1px solid var(--ln); border-radius: 6px; padding: 1.5rem 1.2rem; border-top: 3px solid var(--v); transition: transform .3s, box-shadow .3s; }
        .sc2:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(124,58,237,.1); }
        .sn { font-size: 2.5rem; font-weight: 700; color: var(--v); line-height: 1; margin-bottom: .4rem; letter-spacing: -.03em; }
        .ssx { font-size: 1.3rem; }
        .slb { font-size: 11px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; color: var(--ink); margin-bottom: .2rem; }
        .sub { font-size: 11px; font-weight: 300; color: var(--mu); line-height: 1.5; }
        
        .pg { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin: 2rem 0; }
        .pc { border: 1px solid var(--ln); border-radius: 6px; padding: 1.8rem 1.5rem; cursor: pointer; transition: all .35s cubic-bezier(.16,1,.3,1); background: #fff; position: relative; overflow: hidden; }
        .pc::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 0; background: var(--v); transition: height .35s ease; }
        .pc:hover::before, .pc.ac::before { height: 100%; }
        .pc:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(124,58,237,.1); }
        .pc.ac { background: var(--vd); border-color: var(--v); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(124,58,237,.28); }
        .pn { font-size: 2.2rem; font-weight: 700; color: var(--vp); margin-bottom: .4rem; }
        .pc.ac .pn { color: rgba(167,139,250,.5); }
        .pname { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: .2rem; }
        .pc.ac .pname { color: #fff; }
        .pdur { font-size: 10px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; color: var(--mu); margin-bottom: .9rem; }
        .pc.ac .pdur { color: var(--vl); }
        .pb { font-size: 12.5px; font-weight: 300; color: var(--bt); line-height: 1.75; }
        .pc.ac .pb { color: rgba(255,255,255,.7); }
        .plist { margin: .7rem 0 0 1rem; list-style: none; }
        .plist li { margin-bottom: .35rem; padding-left: .8rem; position: relative; font-size: 12px; }
        .plist li::before { content: '\\2192'; position: absolute; left: 0; color: var(--v); font-weight: 600; }
        .pc.ac .plist li::before { color: var(--vl); }
        
        .dl { display: flex; flex-direction: column; border: 1px solid var(--ln); border-radius: 6px; overflow: hidden; }
        .di { display: grid; grid-template-columns: 56px 1fr; padding: 1.3rem 1.5rem; border-bottom: 1px solid var(--ln); transition: background .2s, transform .2s; }
        .di:last-child { border-bottom: none; }
        .di:hover { background: var(--ow); transform: translateX(3px); }
        .dn { font-size: 1.7rem; font-weight: 700; color: var(--vp); line-height: 1; }
        .dname { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: .3rem; }
        .ddesc { font-size: 12px; font-weight: 300; color: var(--mu); line-height: 1.65; }
        .dtag { display: inline-block; font-size: 9px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; padding: .15rem .5rem; border-radius: 2px; margin-top: .4rem; margin-right: .3rem; }
        .dtag.le { background: rgba(197,165,114,.15); color: var(--go); border: 1px solid rgba(197,165,114,.3); }
        .dtag.de { background: var(--vp); color: var(--vdk); }
        .dtag.st { background: rgba(124,58,237,.08); color: var(--v); }
        
        .skg { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin: 2rem 0; }
        .skc { border: 1px solid var(--ln); border-radius: 8px; overflow: hidden; transition: all .35s cubic-bezier(.16,1,.3,1); }
        .skc:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(124,58,237,.12); }
        .skh { padding: 1.4rem 1.5rem; display: flex; align-items: center; gap: 1.2rem; }
        .ski { width: 46px; height: 46px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 20px; background: rgba(255,255,255,.1); }
        .skn { font-size: 15px; font-weight: 700; color: #fff; }
        .kih { font-size: 10px; font-weight: 400; color: rgba(255,255,255,.5); margin-top: .2rem; }
        .skb { background: #fff; padding: 1.2rem 1.5rem; }
        .skb p { font-size: 12.5px; font-weight: 300; color: var(--bt); line-height: 1.72; margin-bottom: .8rem; }
        .sksp { display: flex; flex-wrap: wrap; gap: .4rem; }
        .sksp span { font-size: 10px; font-weight: 600; padding: .22rem .6rem; border-radius: 2px; border: 1px solid var(--ln); color: var(--mu); background: var(--ow); }
        .skco { display: inline-flex; align-items: center; gap: .3rem; font-size: 10px; font-weight: 700; color: #059669; margin-top: .6rem; }
        .skco::before { content: '\\2713'; font-size: 11px; }
        .mb { display: inline-flex; align-items: center; gap: .4rem; background: linear-gradient(135deg, var(--vdk), var(--v)); color: #fff; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: .28rem .75rem; border-radius: 2px; margin-top: .6rem; }
        .mb::before { content: '\\2605'; font-size: 10px; }
        
        .wg { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin: 2rem 0; }
        .wc { background: var(--ow); border: 1px solid var(--ln); border-radius: 6px; padding: 1.8rem; transition: all .3s ease; position: relative; overflow: hidden; }
        .wc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--v), var(--vl)); transform: scaleX(0); transition: transform .3s ease; transform-origin: left; }
        .wc:hover::before { transform: scaleX(1); }
        .wc:hover { background: #fff; transform: translateY(-4px); box-shadow: 0 12px 36px rgba(124,58,237,.09); }
        .wn { font-size: 2rem; font-weight: 700; color: var(--vp); line-height: 1; margin-bottom: .7rem; }
        .wt { font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: .7rem; }
        .wb { font-size: 12.5px; font-weight: 300; color: var(--bt); line-height: 1.8; }
        
        .ins { display: grid; grid-template-columns: 1fr; }
        .ind { background: var(--vd); padding: 2.5rem 2rem; }
        .inlx { background: var(--ow); padding: 2.5rem 2rem; border: 1px solid var(--ln); }
        .inlb { font-size: 9px; font-weight: 700; letter-spacing: .25em; text-transform: uppercase; margin-bottom: 1rem; }
        .ind .inlb { color: var(--vl); } .inlx .inlb { color: var(--v); }
        .inst { font-size: clamp(1.1rem, 2.5vw, 1.6rem); font-weight: 300; line-height: 1.3; }
        .ind .inst { color: #fff; } .inlx .inst { color: var(--ink); }
        
        .co { display: flex; gap: 1.2rem; background: var(--vp); border-left: 4px solid var(--v); border-radius: 0 6px 6px 0; padding: 1.2rem 1.5rem; margin: 1.5rem 0; }
        .coi { width: 28px; height: 28px; background: var(--v); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex-shrink: 0; }
        .cot { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: .3rem; }
        .cob { font-size: 12px; font-weight: 300; color: var(--bt); line-height: 1.7; }
        
        .fw { background: var(--ow); border-radius: 8px; padding: 1.5rem 1rem; margin: 1.5rem 0; overflow-x: auto; }
        
        .tier-tabs { display: flex; gap: 0; border-radius: 8px; overflow: hidden; border: 1px solid var(--ln); margin: 2rem 0 1.5rem; flex-wrap: wrap; }
        .tier-tab { flex: 1; min-width: 140px; padding: .9rem 1rem; text-align: center; cursor: pointer; transition: all .25s; border: none; font-family: var(--fn); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; border-right: 1px solid var(--ln); background: #fff; color: var(--mu); line-height: 1.4; }
        .tier-tab:last-child { border-right: none; }
        .tier-tab.ta { background: var(--v); color: #fff; }
        .tier-tab.t2.ta { background: #059669; }
        .tier-tab.t3.ta { background: #B45309; color: #fff; }
        .tier-panel { display: none; }
        .tier-panel.tp { display: block; }
        .tp-card { border-radius: 10px; overflow: hidden; box-shadow: 0 8px 40px rgba(124,58,237,.1); }
        .tp1 .tp-header { background: linear-gradient(135deg, var(--vd), #2D1E4F); }
        .tp2 .tp-header { background: linear-gradient(135deg, #064E3B, #065F46); }
        .tp3 .tp-header { background: linear-gradient(135deg, #78350F, #92400E); }
        .tp-header { padding: 2rem; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; }
        .tp-name { font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; margin-bottom: .4rem; }
        .tp1 .tp-name { color: var(--vl); } .tp2 .tp-name { color: #6EE7B7; } .tp3 .tp-name { color: #FCD34D; }
        .tp-price { font-size: 2.8rem; font-weight: 700; color: #fff; line-height: 1; letter-spacing: -.03em; }
        .tp-price sup { font-size: 1.2rem; vertical-align: super; font-weight: 400; }
        .tp-price span { font-size: .88rem; font-weight: 300; color: rgba(255,255,255,.45); display: block; margin-top: .3rem; }
        .tp-badge { align-self: flex-start; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: .35rem .9rem; border-radius: 2px; }
        .tp1 .tp-badge { background: rgba(167,139,250,.2); color: var(--vl); border: 1px solid rgba(167,139,250,.3); }
        .tp2 .tp-badge { background: rgba(52,211,153,.2); color: #6EE7B7; border: 1px solid rgba(52,211,153,.3); }
        .tp3 .tp-badge { background: rgba(252,211,77,.2); color: #FCD34D; border: 1px solid rgba(252,211,77,.3); }
        .tp-desc { font-size: 12.5px; font-weight: 300; color: rgba(255,255,255,.55); line-height: 1.75; padding: 0 2rem 1.5rem; }
        .tp-body { background: #fff; padding: 1.5rem 2rem; }
        .tp-row { display: flex; justify-content: space-between; padding: .72rem 0; border-bottom: 1px solid var(--ln); font-size: 13px; align-items: center; }
        .tp-row .lbl { font-weight: 400; color: var(--bt); }
        .tp-row .amt { font-weight: 700; color: var(--ink); }
        .tp-row.tot { border-top: 2px solid var(--ln); border-bottom: none; padding-top: 1rem; }
        .tp-row.tot .lbl { font-weight: 700; color: var(--ink); font-size: 14px; }
        .tp1 .tp-row.tot .amt { color: var(--v); font-size: 1.2rem; }
        .tp2 .tp-row.tot .amt { color: #059669; font-size: 1.2rem; }
        .tp3 .tp-row.tot .amt { color: #B45309; font-size: 1.2rem; }
        .tp-note { margin-top: 1rem; font-size: 11.5px; font-weight: 300; color: var(--mu); line-height: 1.75; padding-top: 1rem; border-top: 1px solid var(--ln); }
        .scope-list { margin-top: 1.2rem; }
        .scope-row { display: flex; align-items: flex-start; gap: .8rem; padding: .55rem 0; border-bottom: 1px solid rgba(124,58,237,.07); font-size: 12.5px; font-weight: 300; color: var(--bt); line-height: 1.6; }
        .scope-row:last-child { border-bottom: none; }
        .scope-row .ic { flex-shrink: 0; font-size: 13px; margin-top: .1rem; }
        .scope-row.ex { color: var(--mu); text-decoration: line-through; opacity: .5; }
        
        .vv { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin: 2rem 0; }
        .vvc { border-radius: 6px; padding: 1.5rem; border: 1px solid var(--ln); }
        .vvc.rk { background: rgba(220,38,38,.04); border-color: rgba(220,38,38,.15); }
        .vvc.vl3 { background: rgba(124,58,237,.04); border-color: rgba(124,58,237,.2); }
        .vvl { font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; margin-bottom: .8rem; }
        .vvc.rk .vvl { color: #DC2626; } .vvc.vl3 .vvl { color: var(--v); }
        .vvi { display: flex; align-items: flex-start; gap: .7rem; margin-bottom: .6rem; font-size: 12.5px; font-weight: 300; color: var(--bt); line-height: 1.65; }
        .vvic { font-size: 13px; flex-shrink: 0; margin-top: .1rem; }
        
        .aw { background: linear-gradient(135deg, var(--vd), #0F0A1A); border-radius: 12px; padding: 2.5rem 2rem; position: relative; overflow: hidden; }
        .aw::before { content: 'CONFIRM'; position: absolute; right: -2rem; top: 50%; transform: translateY(-50%) rotate(90deg); font-size: 5rem; font-weight: 700; color: rgba(255,255,255,.02); letter-spacing: .3em; pointer-events: none; }
        .awt { font-size: 1.3rem; font-weight: 700; color: #fff; margin-bottom: .5rem; }
        .aws { font-size: 13px; font-weight: 300; color: rgba(255,255,255,.5); margin-bottom: 1.8rem; line-height: 1.7; }
        .aps { display: flex; flex-direction: column; gap: .9rem; margin-bottom: 2rem; }
        .ap { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08); border-radius: 6px; transition: background .2s; }
        .ap:hover { background: rgba(255,255,255,.09); }
        .apn { width: 28px; height: 28px; background: var(--v); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; flex-shrink: 0; }
        .apt { font-size: 12.5px; font-weight: 400; color: rgba(255,255,255,.75); flex: 1; }
        .aptime { font-size: 10px; font-weight: 600; color: var(--vl); letter-spacing: .1em; white-space: nowrap; }
        .acr { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; }
        .csec { display: inline-block; color: rgba(255,255,255,.6); font-family: var(--fn); font-size: 11px; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; text-decoration: none; padding: .9rem 2rem; border-radius: 2px; border: 1px solid rgba(255,255,255,.2); transition: all .2s; }
        .csec:hover { border-color: rgba(255,255,255,.5); color: #fff; }
        
        .abg { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .plg { display: grid; grid-template-columns: 1fr 1fr; gap: .9rem; margin: 1.3rem 0; }
        .pl { background: #fff; border: 1px solid var(--ln); border-radius: 4px; padding: 1.1rem; transition: all .2s; }
        .pl:hover { border-color: var(--v); box-shadow: 0 4px 16px rgba(124,58,237,.08); }
        .plt { font-size: 12px; font-weight: 700; color: var(--ink); margin-bottom: .3rem; }
        .plb { font-size: 11.5px; font-weight: 300; color: var(--mu); line-height: 1.6; }
        .bc { background: var(--vd); border-radius: 8px; padding: 2rem; position: relative; overflow: hidden; }
        .bc::after { content: 'SN'; position: absolute; right: -1rem; bottom: -1rem; font-size: 8rem; font-weight: 700; color: rgba(255,255,255,.025); line-height: 1; }
        .bn { font-size: 1.4rem; font-weight: 700; color: #fff; margin-bottom: .3rem; }
        .br2 { font-size: 10px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; color: var(--vl); margin-bottom: 1.2rem; }
        .bb { font-size: .82rem; font-weight: 300; color: rgba(255,255,255,.62); line-height: 1.85; margin-bottom: 1.2rem; }
        .cs { display: flex; flex-wrap: wrap; gap: .4rem; }
        .cp { font-size: 9.5px; font-weight: 600; background: rgba(124,58,237,.25); color: var(--vl); padding: .22rem .65rem; border-radius: 2px; border: 1px solid rgba(124,58,237,.3); }
        
        .fi { border-bottom: 1px solid var(--ln); }
        .fq { width: 100%; background: none; border: none; padding: 1.1rem 0; text-align: left; font-family: var(--fn); font-size: 13px; font-weight: 600; color: var(--ink); cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; transition: color .2s; }
        .fq:hover { color: var(--v); }
        .fqi { width: 22px; height: 22px; background: var(--vp); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--v); font-size: 14px; transition: transform .3s, background .2s; flex-shrink: 0; }
        .fq.op .fqi { transform: rotate(45deg); background: var(--v); color: #fff; }
        .fa { max-height: 0; overflow: hidden; transition: max-height .45s cubic-bezier(.16,1,.3,1); }
        .fq.op + .fa { max-height: 500px; }
        .fai { font-size: 13px; font-weight: 300; color: var(--bt); line-height: 1.85; padding-bottom: 1.2rem; }
        .conf::after { content: 'CONFIDENTIAL'; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-28deg); font-size: 4.5rem; font-weight: 700; font-family: var(--fn); color: rgba(124,58,237,.035); letter-spacing: .3em; pointer-events: none; white-space: nowrap; z-index: 0; }
        
        .cl { background: linear-gradient(135deg, var(--vd) 0%, #0D0620 100%); padding: 6rem 1.5rem; text-align: center; position: relative; overflow: hidden; }
        .clg { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 38vw; font-weight: 700; color: rgba(255,255,255,.018); pointer-events: none; user-select: none; }
        .cll { font-size: 9px; font-weight: 700; letter-spacing: .28em; text-transform: uppercase; color: var(--vl); margin-bottom: 1.5rem; }
        .clt { font-size: clamp(1.9rem, 5vw, 4.5rem); font-weight: 300; color: #fff; line-height: 1.08; margin-bottom: 1.5rem; letter-spacing: -.02em; }
        .clt em { font-style: italic; color: var(--vl); }
        .cls { font-size: .93rem; font-weight: 300; font-style: italic; color: rgba(255,255,255,.45); max-width: 560px; margin: 0 auto 2.5rem; line-height: 1.85; }
        .cla { display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; }
        .clv { margin-top: 2rem; font-size: 10px; font-weight: 500; letter-spacing: .12em; color: rgba(255,255,255,.2); text-transform: uppercase; }
        
        #cb { position: fixed; bottom: 2rem; right: 1.5rem; width: 54px; height: 54px; background: linear-gradient(135deg, var(--v), #5B21B6); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 200; box-shadow: 0 4px 20px rgba(124,58,237,.45); transition: transform .25s; border: none; }
        #cb:hover { transform: scale(1.12); }
        #cp { position: fixed; bottom: 7rem; left: 1rem; right: 1rem; background: #fff; border-radius: 12px; box-shadow: 0 24px 64px rgba(0,0,0,.18); z-index: 199; display: none; flex-direction: column; overflow: hidden; max-height: 440px; border: 1px solid var(--ln); }
        #ch { background: var(--vd); padding: 1rem 1.2rem; display: flex; align-items: center; gap: .6rem; }
        .cd { width: 8px; height: 8px; background: #4ADE80; border-radius: 50%; animation: cd 2s ease-in-out infinite; }
        @keyframes cd { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
        #cht { color: #fff; font-size: 12px; font-weight: 600; }
        #cm { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: .8rem; }
        .mg { font-size: 12px; line-height: 1.65; padding: .8rem 1rem; border-radius: 8px; max-width: 92%; }
        .mg.ai { background: var(--ow); color: var(--bt); align-self: flex-start; border: 1px solid var(--ln); }
        .mg.us { background: var(--v); color: #fff; align-self: flex-end; }
        #cir { display: flex; border-top: 1px solid var(--ln); }
        #ci { flex: 1; border: none; padding: .85rem 1rem; font-family: var(--fn); font-size: 12px; outline: none; color: var(--ink); }
        #cs2 { background: var(--v); color: #fff; border: none; padding: .85rem 1.2rem; cursor: pointer; font-family: var(--fn); font-size: 11px; font-weight: 700; }
        
        .sbg { display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 2rem 0; }
        .sbc { background: #fff; border: 1px solid var(--ln); border-radius: 6px; padding: 1.2rem 1.4rem; }
        .sbh { display: flex; justify-content: space-between; align-items: center; margin-bottom: .7rem; }
        .sbm { font-size: 12.5px; font-weight: 600; color: var(--ink); }
        .sbp { font-size: 13px; font-weight: 700; color: var(--v); }
        .sbt { height: 7px; background: var(--vp); border-radius: 4px; overflow: hidden; margin-bottom: .5rem; }
        .sbf { height: 100%; background: linear-gradient(90deg, var(--v), var(--vl)); border-radius: 4px; transition: width 1.6s cubic-bezier(.16,1,.3,1); }
        .sbf.gf { background: linear-gradient(90deg, var(--go), #E5C896); }
        .sbd { font-size: 10px; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--mu); }
        
        footer { background: var(--ink); color: rgba(255,255,255,.38); padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: .8rem; }
        .fb { font-size: 10px; } .fl { display: flex; gap: 1rem; flex-wrap: wrap; }
        .fl a { font-size: 10px; color: rgba(255,255,255,.38); text-decoration: none; transition: color .2s; }
        .fl a:hover { color: var(--vl); }
        .fc { font-size: 9px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: rgba(255,255,255,.25); }
        
        @media print { nav, #sd, #cb, #cp, #prog, .cur, .cur-ring, .tw { display: none !important; } }
        @media(min-width:600px) {
          nav { padding: 1rem 2rem; } .nt { display: flex; } .hero { padding: 8rem 2.5rem 4rem; }
          .hmg { grid-template-columns: repeat(4, 1fr); } .hmi:nth-child(2n) { border-right: 1px solid rgba(255,255,255,.07); }
          .hmi:last-child { border-right: none; } .sg { grid-template-columns: repeat(4, 1fr); }
          .pg { grid-template-columns: repeat(2, 1fr); } .wg { grid-template-columns: repeat(2, 1fr); }
          .ins { grid-template-columns: 1fr 1fr; } .sbg { grid-template-columns: repeat(2, 1fr); }
          .skg { grid-template-columns: repeat(2, 1fr); } .vv { grid-template-columns: 1fr 1fr; }
          #cp { left: auto; right: 1.5rem; width: 370px; }
        }
        @media(min-width:960px) {
          nav { padding: 1.1rem 3rem; } .hero { padding: 9rem 3rem 4.5rem; } #sd { display: flex; }
          .pg { grid-template-columns: repeat(4, 1fr); } .wg { grid-template-columns: repeat(4, 1fr); }
          .abg { grid-template-columns: 1fr 1fr; } .sbg { grid-template-columns: repeat(3, 1fr); }
          .skg { grid-template-columns: repeat(3, 1fr); }
        }
      ` }} />

      {/* CORE FRAMEWORK INTERACTION ASSETS */}
      <div id="prog" ref={progressRef}></div>
      <div className="cur" ref={cursorRef} id="cur"></div>
      <div className="cur-ring" ref={ringRef} id="curRing"></div>

      {/* FIXED TOP NAVIGATION BAR */}
      <nav id="nav">
        {/* <div className="nl">
          <div className="lm">
            <svg viewBox="0 0 22 22" fill="none">
              <rect x="2" y="2" width="8" height="8" fill="white" opacity=".9" />
              <rect x="12" y="2" width="8" height="8" fill="white" opacity=".5" />
              <rect x="2" y="12" width="8" height="8" fill="white" opacity=".5" />
              <rect x="12" y="12" width="8" height="8" fill="white" opacity=".2" />
            </svg>
          </div>
          <div className="lt">
            <img className = "w-40 h-10" src={logo}/>
          </div>
        </div> */}
        <div className="lt">
            <img className = "w-50 h-10" src={logo}/>
          </div>
        <div className="nt">
          <span>Tenali Double Horse</span>
          <span>Brand Creation Proposal</span>
        </div>
        <a 
          href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Double%20Horse%20Organics%20Confirmation%20from%20Shyam%20Prasad%20Garu&body=Dear%20Sandeep%2C%0APlease%20share%20kickoff%20details." 
          className="nc"
        >
          Confirm Engagement
        </a>
      </nav>

      {/* FLOATING DOT NAVIGATION RAIL */}
      <div id="sd" style={{ display: 'flex' }}>
        {[
          { label: 'Introduction' }, { label: 'The Truth' }, { label: 'Opportunity' },
          { label: 'Architecture' }, { label: '5 SKUs' }, { label: 'Phases' },
          { label: 'Deliverables' }, { label: 'Legal' }, { label: '3 Options' },
          { label: 'Why Magsmen' }, { label: 'Confirm' }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className={`sd ${activeSection === idx ? 'a' : ''}`} 
            onClick={() => navigateToSection(idx)} 
            data-l={item.label}
          />
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="hero" id="s0" data-s="0">
        <div className="hbg">O</div>
        <canvas id="hcv" ref={canvasRef} className="hcv"></canvas>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="he">
            <span className="tg">Brand Creation Proposal</span>
            <div className="hl"></div>
          </div>
          <h1 className="htl">Double Horse<br /><em className="wo">Organics</em></h1>
          <p className="hsub">Sub-brand creation, master packaging for all 5 SKUs, APRYSS farmer narrative, legal architecture, pricing strategy and full market launch. Prepared exclusively for Shyam Prasad Garu. Three clearly scoped options presented below.</p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Double%20Horse%20Organics%20Confirmation&body=Dear%20Sandeep%2C%0AWe%20confirm%20the%20Double%20Horse%20Organics%20engagement." className="cbtn">
              Confirm This Engagement
            </a>
          </div>
          <div className="rb">
            <div className="ri">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#C5A572" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="rtx">
              <div className="rtl">Long-Standing Relationship — Tenali Double Horse x Magsmen</div>
              <div className="rtb">Shyam Prasad Garu, this proposal is built on shared history and a depth of understanding of your brand that only a long-standing partnership provides. Three options are presented so that the decision belongs entirely to you. The 90-day post-launch review in the recommended option is included at no additional cost as a direct expression of that commitment.</div>
            </div>
          </div>
        </div>

        <div className="hmg" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hmi"><div className="lb">Prepared For</div><div className="vl2">Shyam Prasad Garu, Tenali Double Horse</div></div>
          <div className="hmi"><div className="lb">Engagement Type</div><div className="vl2">Brand Creation — Three Options</div></div>
          <div className="hmi"><div className="lb">Prepared By</div><div className="vl2">Magsmen Strategy Consultants</div></div>
          <div className="hmi"><div className="lb">Proposal Date</div><div className="vl2">May 2026</div></div>
        </div>
      </section>

      {/* TICKER TEXT LINE */}
      <div className="tw">
        <div className="tk">
          <span className="tki">Double Horse Organics</span><span className="tki g">★ Shyam Prasad Garu</span>
          <span className="tki">Sub-Brand Architecture</span><span className="tki g">★ 5 SKU Master Copies</span>
          <span className="tki">Trademark Filing Week 2</span><span className="tki g">★ FSSAI Compliance</span>
          <span className="tki">NPOP Certification</span><span className="tki g">★ APRYSS Farmer Story</span>
          <span className="tki">Pricing Architecture</span><span className="tki g">★ Three Options: 5.5L / 7.5L / 9L</span>
          {/* Double content buffer array loop to simulate continuous linear sliding loop effect */}
          <span className="tki">Double Horse Organics</span><span className="tki g">★ Shyam Prasad Garu</span>
          <span className="tki">Sub-Brand Architecture</span><span className="tki g">★ 5 SKU Master Copies</span>
          <span className="tki">Trademark Filing Week 2</span><span className="tki g">★ FSSAI Compliance</span>
          <span className="tki">NPOP Certification</span><span className="tki g">★ APRYSS Farmer Story</span>
          <span className="tki">Pricing Architecture</span><span className="tki g">★ Three Options: 5.5L / 7.5L / 9L</span>
        </div>
      </div>

      {/* THE TRUTH */}
      <section className="sec" id="s1" data-s="1" style={{ background: 'var(--ow)' }}>
        <div className="si">
          <div className="rv"><div className="sl">The One Truth</div><h2 className="st">The Indian kitchen is no longer buying <strong>food.</strong><br />It is buying <em>proof.</em></h2></div>
          <div className="ins rv d1">
            <div className="ind"><div className="inlb">The Market Shift</div><div className="inst">Over 340 million households are asking different questions at the shelf. They want to know where it came from, who grew it, and whether the brand they have trusted for decades has grown with them.</div></div>
            <div className="inlx"><div className="inlb">The Double Horse Advantage</div><div className="inst">A brand already positioned on quality, purity, and premium does not need to earn the right to enter organic. The trust exists. The task is to architecture the entry so that trust compounds rather than dilutes.</div></div>
          </div>
          <div className="sg">
            <div className="sc2 rv d1"><div className="sn">20<span className="ssx">%</span></div><div className="slb">Annual Growth</div><div className="sub">Indian organic CAGR through 2028</div></div>
            <div className="sc2 rv d2"><div className="sn">340<span className="ssx">M</span></div><div className="slb">Households</div><div className="sub">Migrating to certified, traceable food</div></div>
            <div className="sc2 rv d3"><div className="sn">5</div><div className="slb">SKUs at Launch</div><div className="sub">Each with a print-ready master copy</div></div>
            <div className="sc2 rv d4"><div className="sn">3</div><div className="slb">Engagement Options</div><div className="sub">₹5.5L / ₹7.5L / ₹9L — scoped, not discounted</div></div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="sec" id="s2" data-s="2">
        <div className="si">
          <div className="rv"><div className="sl">The Opportunity</div><h2 className="st">Why Double Horse is <strong>structurally ready</strong><br />for this <em>extension now.</em></h2></div>
          <p className="bt2 rv d1">The organic category in AP and Telangana is still in the window where a locally trusted brand can establish first-mover authority. National brands are present but lack regional sourcing depth, cultural familiarity, and the distribution strength Double Horse already owns. Once organised retail completes its organic shelf allocation, displacing competitors will cost five times what entering correctly now requires.</p>
          
          <div className="fw rv d2">
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--v)', marginBottom: '.8rem' }}>Consumer Migration Map</p>
            <div style={{ minWidth: '840px', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 860 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
                  </marker>
                </defs>
                <rect x="8" y="18" width="185" height="48" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="100" y="38" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#3B0764">Quality Seeker</text>
                <text x="100" y="52" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#7C6A9A">Premium reliability buyer</text>
                <text x="100" y="82" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C3AED" fontWeight="700" fontStyle="italic">DH Already Owns</text>
                <line x1="193" y1="42" x2="218" y2="42" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a1)" />
                <rect x="220" y="18" width="185" height="48" rx="5" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="312" y="38" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#3B0764">Health Seeker</text>
                <text x="312" y="52" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#7C6A9A">Health-first decision maker</text>
                <text x="312" y="82" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C3AED" fontWeight="700" fontStyle="italic">DH Already Owns</text>
                <line x1="405" y1="42" x2="430" y2="42" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a1)" />
                <rect x="432" y="10" width="185" height="56" rx="5" fill="#7C3AED" stroke="#5B21B6" strokeWidth="1.5" />
                <text x="524" y="30" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="white">Purity Seeker</text>
                <text x="524" y="44" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="rgba(255,255,255,.75)">Certified, traceable food</text>
                <text x="524" y="82" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#C4B5FD" fontWeight="700" fontStyle="italic">ORGANICS Must Win</text>
                <line x1="617" y1="38" x2="642" y2="38" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a1)" />
                <rect x="644" y="10" width="208" height="56" rx="5" fill="#5B21B6" stroke="#4C1D95" strokeWidth="1.5" />
                <text x="748" y="30" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="white">Values Buyer</text>
                <text x="748" y="44" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="rgba(255,255,255,.72)">Buys belief, story, provenance</text>
                <text x="748" y="82" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#C4B5FD" fontWeight="700" fontStyle="italic">ORGANICS Must Win</text>
              </svg>
            </div>
          </div>
          
          <div className="co rv d3">
            <div className="coi">★</div>
            <div>
              <div className="cot">The APRYSS Strategic Asset</div>
              <div className="cob">The procurement partnership with APRYSS (Andhra Pradesh Rythu Seva Samithi) gives Double Horse a farmer-sourced, regionally traceable, state-backed organic story that no national brand can replicate. This is the emotional and commercial core of the Double Horse Organics brand narrative, and it exists because of Shyam Prasad Garu's long-standing regional relationships.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND ARCHITECTURE */}
      <section className="sec" id="s3" data-s="3" style={{ background: 'var(--ow)' }}>
        <div className="si">
          <div className="rv"><div className="sl">Brand Architecture</div><h2 className="st">One master brand. <strong>One premium sub-brand.</strong><br />Zero <em>confusion.</em></h2></div>
          <p className="bt2 rv d1">The correct model is a unified sub-brand architecture. Double Horse carries the trust built over decades. Double Horse Organics inherits that trust and builds its own premium organic authority layer. Distinct enough to signal a higher category. Connected enough for that signal to land credibly from day one.</p>
          
          <div className="fw rv d2">
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--v)', marginBottom: '.8rem' }}>Sub-Brand Architecture Model</p>
            <div style={{ minWidth: '840px', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 860 180" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
                  </marker>
                </defs>
                <rect x="280" y="8" width="300" height="56" rx="6" fill="#1A0A2E" stroke="#7C3AED" strokeWidth="1.5" />
                <text x="430" y="30" textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" fill="white">TENALI DOUBLE HORSE</text>
                <text x="430" y="48" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fill="rgba(167,139,250,.8)">Master Brand — Quality · Purity · Premium</text>
                <line x1="320" y1="64" x2="185" y2="108" stroke="rgba(124,58,237,.35)" strokeWidth="1" markerEnd="url(#a2)" />
                <line x1="430" y1="64" x2="430" y2="108" stroke="#7C3AED" strokeWidth="2" markerEnd="url(#a2)" />
                <line x1="540" y1="64" x2="675" y2="108" stroke="rgba(124,58,237,.35)" strokeWidth="1" markerEnd="url(#a2)" />
                <rect x="80" y="108" width="215" height="50" rx="4" fill="rgba(124,58,237,.07)" stroke="rgba(124,58,237,.2)" strokeWidth="1" />
                <text x="187" y="129" textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="600" fill="#3D2D5C">Standard Range</text>
                <text x="187" y="145" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#7C6A9A">Existing Core Portfolio</text>
                <rect x="323" y="108" width="215" height="50" rx="6" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
                <text x="430" y="129" textAnchor="middle" fontFamily="Montserrat" fontSize="12" fontWeight="700" fill="white">DOUBLE HORSE ORGANICS</text>
                <text x="430" y="145" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="rgba(255,255,255,.7)">New Sub-Brand — This Engagement</text>
                <rect x="566" y="108" width="215" height="50" rx="4" fill="rgba(124,58,237,.05)" stroke="rgba(124,58,237,.15)" strokeWidth="1" strokeDasharray="5 4" />
                <text x="673" y="129" textAnchor="middle" fontFamily="Montserrat" fontSize="11" fontWeight="500" fill="#7C6A9A">Future Extensions</text>
                <text x="673" y="145" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#7C6A9A">Regional · D2C · Export</text>
                <text x="187" y="173" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(124,58,237,.5)" fontStyle="italic">Retained as-is</text>
                <text x="430" y="173" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C3AED" fontWeight="700" fontStyle="italic">Built in this engagement</text>
                <text x="673" y="173" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(124,58,237,.4)" fontStyle="italic">Architecture scales forward</text>
              </svg>
            </div>
          </div>

          <div className="rv d3" style={{ marginTop: '1.5rem' }}>
            <div className="sl" style={{ marginBottom: '1rem' }}>Perception Gap — What This Engagement Resolves</div>
            <div className="sbg">
              <div className="sbc"><div className="sbh"><div className="sbm">Quality Trust (Core Strength)</div><div className="sbp">88%</div></div><div className="sbt"><div className="sbf gf" style={{ width: '88%' }}></div></div><div className="sbd">Carry Forward Into Organics</div></div>
              <div className="sbc"><div className="sbh"><div className="sbm">Organic Authority</div><div className="sbp">12%</div></div><div className="sbt"><div className="sbf" style={{ width: '12%' }}></div></div><div className="sbd">Gap — Architecture Resolves</div></div>
              <div className="sbc"><div className="sbh"><div className="sbm">Sourcing Transparency</div><div className="sbp">18%</div></div><div className="sbt"><div className="sbf" style={{ width: '18%' }}></div></div><div className="sbd">Gap — APRYSS Narrative Resolves</div></div>
              <div className="sbc"><div className="sbh"><div className="sbm">Premium Pack Signal</div><div className="sbp">42%</div></div><div className="sbt"><div className="sbf" style={{ width: '42%' }}></div></div><div className="sbd">Gap — Master Copy Design Resolves</div></div>
              <div className="sbc"><div className="sbh"><div className="sbm">Legal Protection</div><div className="sbp">30%</div></div><div className="sbt"><div className="sbf" style={{ width: '30%' }}></div></div><div className="sbd">Risk — TM Filing Week 2</div></div>
              <div className="sbc"><div className="sbh"><div className="sbm">Certification Visibility</div><div className="sbp">5%</div></div><div className="sbt"><div className="sbf" style={{ width: '5%' }}></div></div><div className="sbd">Gap — NPOP Phase 2</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 SKUs PRODUCT SECTION */}
      <section className="sec" id="s4" data-s="4">
        <div className="si">
          <div className="rv"><div className="sl">The Five SKUs</div><h2 className="st">Every product gets a <strong>master copy.</strong><br />Every master copy is <em>a brand statement.</em></h2></div>
          <p className="bt2 rv d1">Each SKU is designed from the ground up. Not adapted. Not reskinned. Each receives its own master packaging design covering all size variants: print-ready, production-ready artwork with the full identity system, certification marks, sourcing narrative, and FSSAI organic labelling compliance embedded. IP is owned entirely by Tenali Double Horse upon full payment.</p>
          
          <div className="skg">
            {/* SKU CARD 1 */}
            <div className="skc rv d1">
              <div className="skh" style={{ background: 'linear-gradient(135deg,#1A0A2E,#2D1E4F)' }}>
                <div className="ski">🫘</div>
                <div><div className="skn">Urad Dal</div><div className="kih">Black Gram · మినిపప్పు</div></div>
              </div>
              <div className="skb">
                <p>Highest-stakes SKU. Foundation of dosas and idlis across Telugu households. Organic claim must be batch-specific and front-face visible. Consumer scrutiny is highest here. Certification is built into the artwork itself.</p>
                <div className="sksp"><span>250g · 500g · 1kg</span><span>Premium matte laminate</span><span>Batch QR traceability</span></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.6rem' }}>
                  <span className="skco">NPOP Certified</span><span className="mb">Master Copy Included</span>
                </div>
              </div>
            </div>

            {/* SKU CARD 2 */}
            <div className="skc rv d2">
              <div className="skh" style={{ background: 'linear-gradient(135deg,#3B0764,#5B21B6)' }}>
                <div className="ski">🌾</div>
                <div><div className="skn">Toor Dal</div><div className="kih">Pigeon Pea · కందిపప్పు</div></div>
              </div>
              <div className="skb">
                <p>Everyday pulse for pappu and sambar. Double Horse owns shelf authority here. The organic variant must feel like a deliberate elevation, not a separate product. Architecture must signal both continuity and premium simultaneously.</p>
                <div className="sksp"><span>500g · 1kg · 2kg</span><span>Kraft paper option</span><span>Farm origin story panel</span></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.6rem' }}>
                  <span className="skco">NPOP Certified</span><span className="mb">Master Copy Included</span>
                </div>
              </div>
            </div>

            {/* SKU CARD 3 */}
            <div className="skc rv d3">
              <div className="skh" style={{ background: 'linear-gradient(135deg,#7C1D1D,#B91C1C)' }}>
                <div className="ski">🌶️</div>
                <div><div className="skn">Red Chilli</div><div className="kih">Mirchi · ఎర్ర మిర్చి</div></div>
              </div>
              <div className="skb">
                <p>Highest regulatory risk SKU. Most monitored category under FSSAI organic enforcement. Brands have been penalised in the past 24 months. Third-party batch certification is mandatory. The master copy design builds compliance directly into the artwork, not as an afterthought.</p>
                <div className="sksp"><span>100g · 200g · 500g</span><span>Resealable premium pouch</span><span>FSSAI organic mark</span></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.6rem' }}>
                  <span className="skco">Third-party certified</span><span className="mb">Master Copy Included</span>
                </div>
              </div>
            </div>

            {/* SKU CARD 4 */}
            <div className="skc rv d4">
              <div className="skh" style={{ background: 'linear-gradient(135deg,#78350F,#B45309)' }}>
                <div className="ski">🟡</div>
                <div><div className="skn">Turmeric</div><div className="kih">Haldi · పసుపు</div></div>
              </div>
              <div className="skb">
                <p>Second most monitored by FSSAI but the highest margin opportunity in this range. The educated consumer will pay a significant premium for certified organic turmeric. The master copy design makes curcumin content and certification the hero of the front face.</p>
                <div className="sksp"><span>100g · 200g · 500g</span><span>Glass jar option</span><span>Curcumin content visible</span></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.6rem' }}>
                  <span className="skco">Third-party certified</span><span className="mb">Master Copy Included</span>
                </div>
              </div>
            </div>

            {/* SKU CARD 5 */}
            <div className="skc rv d5">
              <div className="skh" style={{ background: 'linear-gradient(135deg,#064E3B,#065F46)' }}>
                <div className="ski">🌿</div>
                <div><div className="skn">Poha</div><div className="kih">Flattened Rice · అటుకులు</div></div>
              </div>
              <div className="skb">
                <p>The single largest category creation opportunity in this range. Organic poha is underdeveloped. No major regional brand has claimed it. Double Horse can own this category before competition arrives. If launch sequencing is required, consider leading with poha as the first-mover decision.</p>
                <div className="sksp"><span>500g · 1kg</span><span>Thin and thick variants</span><span>Breakfast occasion positioning</span></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.6rem' }}>
                  <span className="skco">NPOP Certified</span><span className="mb">Master Copy Included</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fw rv d3">
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--v)', marginBottom: '.8rem' }}>Master Copy Creation Process — Each SKU</p>
            <div style={{ minWidth: '840px', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 860 80" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
                  </marker>
                </defs>
                <rect x="5" y="15" width="128" height="42" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="69" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="600" fill="#3B0764">Brand Brief</text>
                <text x="69" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C6A9A">Identity system</text>
                <line x1="133" y1="36" x2="151" y2="36" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#a3)" />
                <rect x="153" y="15" width="128" height="42" rx="4" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="217" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="600" fill="#3B0764">SKU Design</text>
                <text x="217" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C6A9A">Front · Back · Spine</text>
                <line x1="281" y1="36" x2="299" y2="36" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#a3)" />
                <rect x="301" y="15" width="128" height="42" rx="4" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1" />
                <text x="365" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="600" fill="white">Compliance Layer</text>
                <text x="365" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(255,255,255,.75)">FSSAI · NPOP marks</text>
                <line x1="429" y1="36" x2="447" y2="36" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#a3)" />
                <rect x="449" y="15" width="128" height="42" rx="4" fill="#7C3AED" stroke="#5B21B6" strokeWidth="1" />
                <text x="513" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="600" fill="white">Client Approval</text>
                <text x="513" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(255,255,255,.7)">Sign-off round</text>
                <line x1="577" y1="36" x2="595" y2="36" stroke="#7C3AED" strokeWidth="1" markerEnd="url(#a3)" />
                <rect x="597" y="8" width="258" height="56" rx="6" fill="#1A0A2E" stroke="#C5A572" strokeWidth="1.5" />
                <text x="726" y="28" textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="700" fill="#C5A572">★ MASTER COPY</text>
                <text x="726" y="44" textAnchor="middle" fontFamily="Montserrat" fontSize="7.5" fill="rgba(255,255,255,.65)">Print-ready · Production-ready · IP owned by DH</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR TIMELINE PHASES */}
      <section className="sec" id="s5" data-s="5" style={{ background: 'var(--ow)' }}>
        <div className="si">
          <div className="rv"><div className="sl">The Engagement</div><h2 className="st">Four phases. <strong>24 weeks.</strong><br /><em>One complete brand.</em></h2></div>
          <div className="fw rv d1">
            <div style={{ minWidth: '840px', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 860 62" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="12" width="202" height="38" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="106" y="27" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#3B0764">01 Discovery</text>
                <text x="106" y="42" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#7C6A9A">Weeks 1 to 3</text>
                <rect x="218" y="12" width="202" height="38" rx="5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1" />
                <text x="319" y="27" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#3B0764">02 Identity + Legal</text>
                <text x="319" y="42" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="#5B21B6">Weeks 4 to 10</text>
                <rect x="431" y="12" width="202" height="38" rx="5" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1" />
                <text x="532" y="27" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="white">03 Narrative + Pricing</text>
                <text x="532" y="42" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="rgba(255,255,255,.75)">Weeks 11 to 16</text>
                <rect x="644" y="5" width="210" height="52" rx="5" fill="#7C3AED" stroke="#5B21B6" strokeWidth="2" />
                <text x="749" y="25" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="white">04 Launch</text>
                <text x="749" y="39" textAnchor="middle" fontFamily="Montserrat" fontSize="8.5" fill="rgba(255,255,255,.75)">Weeks 17 to 24</text>
              </svg>
            </div>
          </div>
          
          <div className="pg rv d2">
            <div className={`pc ${activePhaseCard === 0 ? 'ac' : ''}`} onClick={() => setActivePhaseCard(0)}>
              <div className="pn">01</div>
              <div className="pname">Discovery and Architecture</div>
              <div className="pdur">Weeks 1 to 3</div>
              <div className="pb">
                <p>Deep audit of Double Horse core equity. Consumer interviews in AP and Telangana. Competitive mapping of organic category. APRYSS documentation review.</p>
                <ul className="plist">
                  <li>Sub-brand architecture decision</li>
                  <li>3 naming candidates with rationale</li>
                  <li>Trademark filing initiated Week 2</li>
                  <li>Consumer and competitive research report</li>
                </ul>
              </div>
            </div>
            
            <div className={`pc ${activePhaseCard === 1 ? 'ac' : ''}`} onClick={() => setActivePhaseCard(1)}>
              <div className="pn">02</div>
              <div className="pname">Identity, Legal and Master Packaging</div>
              <div className="pdur">Weeks 4 to 10</div>
              <div className="pb">
                <p>Complete visual identity system. Master packaging for all 5 SKUs: print-ready, production-ready files with front, back, and spine artwork for every size variant.</p>
                <ul className="plist">
                  <li>Logo, colour system, typography</li>
                  <li>Master copy: all 5 SKUs, all sizes</li>
                  <li>Packaging material innovation report</li>
                  <li>FSSAI compliance review</li>
                  <li>NPOP certification initiation</li>
                </ul>
              </div>
            </div>

            <div className={`pc ${activePhaseCard === 2 ? 'ac' : ''}`} onClick={() => setActivePhaseCard(2)}>
              <div className="pn">03</div>
              <div className="pname">Narrative, Pricing and Communication</div>
              <div className="pdur">Weeks 11 to 16</div>
              <div className="pb">
                <p>APRYSS farmer story converted into a complete brand narrative. Pricing strategy with elasticity modelling across all 5 SKUs. Full brand communication architecture for retail, digital, and trade.</p>
                <ul className="plist">
                  <li>Complete APRYSS farmer narrative</li>
                  <li>Pricing strategy and margin model</li>
                  <li>Trade briefing deck</li>
                  <li>Digital communication framework</li>
                </ul>
              </div>
            </div>

            <div className={`pc ${activePhaseCard === 3 ? 'ac' : ''}`} onClick={() => setActivePhaseCard(3)}>
              <div className="pn">04</div>
              <div className="pname">Launch Strategy and Execution</div>
              <div className="pdur">Weeks 17 to 24</div>
              <div className="pb">
                <p>Pre-launch trade activation. Consumer launch event strategy. Regional food media and PR. Digital launch communication. 90-day post-launch brand health review included in scope at no additional cost.</p>
                <ul className="plist">
                  <li>Pre-launch trade activation</li>
                  <li>Consumer launch event strategy</li>
                  <li>Regional media and PR</li>
                  <li>90-day post-launch review (included)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES ASSETS LIST */}
      <section className="sec" id="s6" data-s="6">
        <div className="si">
          <div className="rv"><div className="sl">What You Receive</div><h2 className="st">Every item on this list is a <strong>working asset.</strong><br />Not a <em>slide deck.</em></h2></div>
          <div className="dl rv d1">
            <div className="di"><div className="dn">01</div><div><div className="dname">Sub-Brand Name and Trademark Filing</div><div className="ddesc">Three name candidates with strategic rationale. Filed in Classes 29 and 30 before any public announcement. Legal exposure eliminated before the brand enters the market.</div><span className="dtag le">Legal</span></div></div>
            <div className="di"><div className="dn">02</div><div><div className="dname">Complete Visual Identity System</div><div className="ddesc">Logo, colour palette, typography system, and usage guidelines. Everything a printer or digital team needs to execute consistently across every touchpoint.</div><span className="dtag de">Design</span></div></div>
            <div className="di"><div className="dn">03</div><div><div className="dname">Five SKU Master Packaging Designs</div><div className="ddesc">Print-ready, production-ready master copies for urad dal, toor dal, red chilli, turmeric, and poha: all size variants. Each carries the full identity system, certification marks, sourcing narrative, and FSSAI organic labelling compliance. IP owned by Double Horse upon full payment.</div><span className="dtag de">Design</span><span className="dtag le">Compliance Embedded</span></div></div>
            <div className="di"><div className="dn">04</div><div><div className="dname">Packaging Material Innovation Report</div><div className="ddesc">Premium packaging material recommendations with supplier benchmarks. Matte laminates, kraft options, resealable structures, glass jar options for select SKUs.</div><span className="dtag de">Design</span></div></div>
            <div className="di"><div className="dn">05</div><div><div className="dname">APRYSS Farmer Sourcing Narrative</div><div className="ddesc">Complete brand story built from the APRYSS partnership. Farmer profiles, regional sourcing maps, provenance documentation, and consumer-facing narrative architecture. The asset no competitor can replicate.</div><span className="dtag st">Strategy</span></div></div>
            <div className="di"><div className="dn">06</div><div><div className="dname">Pricing Strategy and SKU Margin Model</div><div className="ddesc">Recommended price points for all 5 SKUs across all size variants. Consumer elasticity analysis for AP and Telangana. Target: 25 to 40 percent premium over standard range.</div><span className="dtag st">Strategy</span></div></div>
            <div className="di"><div className="dn">07</div><div><div className="dname">FSSAI Compliance Review and NPOP Initiation</div><div className="ddesc">Full review under Food Safety and Standards (Organic Foods) Regulations 2017. NPOP certification initiation through APEDA accredited body. No pack reaches retail without this in place.</div><span className="dtag le">Legal</span></div></div>
            <div className="di"><div className="dn">08</div><div><div className="dname">Brand Communication Architecture</div><div className="ddesc">Retail branding guidelines, digital communication framework, product copy for all SKUs, and trade briefing deck. Everything needed to brief vendors and execute consistently.</div><span className="dtag st">Strategy</span></div></div>
            <div className="di"><div className="dn">09</div><div><div className="dname">Launch Strategy and 90-Day Post-Launch Review</div><div className="ddesc">Trade activation plan, consumer launch event strategy, regional media playbook, digital launch assets, and a structured 90-day review of brand health under real market conditions. Included at no additional cost as a mark of our long-standing commitment to the Double Horse brand.</div><span className="dtag st">Strategy</span></div></div>
          </div>
        </div>
      </section>

      {/* LEGAL ARCHITECTURE PROTECTION LAYER */}
      <section className="sec" id="s7" data-s="7" style={{ background: 'var(--ow)' }}>
        <div className="si">
          <div className="rv"><div className="sl">Legal Architecture</div><h2 className="st">The layer most brands skip<br />until it is <em>too late.</em></h2></div>
          <p className="bt2 rv d1">Organic as a category is legally regulated in India. A compliance failure does not stay contained to the sub-brand. It bleeds back to Double Horse. The legal architecture in this engagement is embedded in every phase from the first naming session onward. It is not a separate workstream.</p>
          
          <div className="fw rv d2">
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--v)', marginBottom: '.8rem' }}>Legal Architecture Flow</p>
            <div style={{ minWidth: '840px', overflowX: 'auto' }}>
              <svg width="100%" viewBox="0 0 860 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="a4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
                  </marker>
                </defs>
                <rect x="5" y="12" width="155" height="54" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1" />
                <text x="82" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9.5" fontWeight="700" fill="#3B0764">Trademark Filing</text>
                <text x="82" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C6A9A">Classes 29 and 30</text>
                <text x="82" y="78" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C3AED" fontStyle="italic" fontWeight="600">Week 2</text>
                <line x1="160" y1="39" x2="180" y2="39" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a4)" />
                <rect x="182" y="12" width="155" height="54" rx="5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1" />
                <text x="259" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9.5" fontWeight="700" fill="#3B0764">FSSAI Compliance</text>
                <text x="259" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C6A9A">Organic Foods Reg 2017</text>
                <text x="259" y="78" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#7C3AED" fontStyle="italic" fontWeight="600">Phase 2</text>
                <line x1="337" y1="39" x2="357" y2="39" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a4)" />
                <rect x="359" y="12" width="155" height="54" rx="5" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="1" />
                <text x="436" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9.5" fontWeight="700" fill="white">NPOP Certification</text>
                <text x="436" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(255,255,255,.75)">APEDA Accredited Body</text>
                <text x="436" y="78" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#C4B5FD" fontStyle="italic" fontWeight="600">Phase 2</text>
                <line x1="514" y1="39" x2="534" y2="39" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a4)" />
                <rect x="536" y="12" width="155" height="54" rx="5" fill="#7C3AED" stroke="#5B21B6" strokeWidth="1.5" />
                <text x="613" y="32" textAnchor="middle" fontFamily="Montserrat" fontSize="9.5" fontWeight="700" fill="white">IP Documentation</text>
                <text x="613" y="46" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(255,255,255,.72)">Narrative and Brand Story</text>
                <text x="613" y="78" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#C4B5FD" fontStyle="italic" fontWeight="600">Phase 3</text>
                <line x1="691" y1="39" x2="711" y2="39" stroke="#7C3AED" strokeWidth="1.2" markerEnd="url(#a4)" />
                <rect x="713" y="5" width="140" height="68" rx="6" fill="#1A0A2E" stroke="#C5A572" strokeWidth="1.5" />
                <text x="783" y="28" textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="white">Launch Ready</text>
                <text x="783" y="44" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="rgba(255,255,255,.6)">Legally protected</text>
                <text x="783" y="57" textAnchor="middle" fontFamily="Montserrat" fontSize="8" fill="#C5A572" fontWeight="600">From Day One</text>
              </svg>
            </div>
          </div>

          <div className="wg rv d3">
            <div className="wc"><div className="wn" style={{ color: 'var(--go)', fontSize: '1.8rem' }}>TM</div><div className="wt">Trademark Before Announcement</div><div className="wb">Regional competitors have filed confusingly similar names within days of brand launches being announced in AP and Telangana. Filing in Classes 29 and 30 in Week 2 closes that window permanently. Contesting a dispute post-launch starts at five times the cost of filing preventively.</div></div>
            <div className="wc"><div className="wn" style={{ color: 'var(--go)', fontSize: '1.8rem' }}>FS</div><div className="wt">FSSAI Organic Regulations 2017</div><div className="wb">Minimum 95 percent organic ingredients by weight is required. Red chilli and turmeric are the two most actively enforced categories. FSSAI has publicly penalised regional brands in this space within the past 24 months. Compliance is built into formulation and label, not added after design.</div></div>
            <div className="wc"><div className="wn" style={{ color: 'var(--go)', fontSize: '1.8rem' }}>NP</div><div className="wt">NPOP Certification Chain</div><div className="wb">The process involves farm inspection, input verification, and produce handling audits. Building it into Phase 2 means certification is in progress before packaging is finalised. Products reach retail with visible third-party verification the educated consumer demands.</div></div>
            <div className="wc"><div className="wn" style={{ color: 'var(--go)', fontSize: '1.8rem' }}>IP</div><div className="wt">Intellectual Property of the Brand Story</div><div className="wb">The APRYSS narrative, farmer profiles, brand story documents, and all master packaging designs created in this engagement are intellectual property. Documentation ensures ownership belongs unambiguously to Tenali Double Horse from the first day of the engagement.</div></div>
          </div>
        </div>
      </section>

      {/* THREE SCALABLE ENGAGEMENT OPTIONS */}
      <section className="sec conf" id="s8" data-s="8">
        <div className="si" style={{ position: 'relative', zIndex: 1 }}>
          <div className="rv"><div className="sl">Three Engagement Options</div><h2 className="st">Three scopes. Three investments.<br /><em>One decision.</em> Yours, Shyam Prasad Garu.</h2></div>
          <p className="bt2 rv d1" style={{ marginBottom: '1.5rem' }}>Magsmen does not reduce price. We reduce scope to match budget, and every scope reduction is a deliberate strategic trade-off. Each option is complete and coherent at its level. Choose the scope that matches where Double Horse Organics needs to be built today.</p>

          <div className="rv d2">
            <div className="tier-tabs">
              <button className={`tier-tab ${activeTierTab === 0 ? 'ta' : ''}`} onClick={() => setActiveTierTab(0)}>
                Option 1<br /><span style={{ fontSize: '9px', fontWeight: 400, textTransform: 'none' }}>₹5.5L — Foundation Build</span>
              </button>
              <button className={`tier-tab t2 ${activeTierTab === 1 ? 'ta' : ''}`} onClick={() => setActiveTierTab(1)}>
                ★ Option 2 (Recommended)<br /><span style={{ fontSize: '9px', fontWeight: 400, textTransform: 'none' }}>₹7.5L — Complete Build</span>
              </button>
              <button className={`tier-tab t3 ${activeTierTab === 2 ? 'ta' : ''}`} onClick={() => setActiveTierTab(2)}>
                Option 3<br /><span style={{ fontSize: '9px', fontWeight: 400, textTransform: 'none' }}>₹9L — Premium Partnership</span>
              </button>
            </div>

            {/* OPTION 1 CONTENT BAR COMPONENT PANEL */}
            <div className={`tier-panel tp1 ${activeTierTab === 0 ? 'tp' : ''}`}>
              <div className="tp-card">
                <div className="tp-header">
                  <div>
                    <div className="tp-name">Option 1 — Foundation Build</div>
                    <div className="tp-price"><sup>₹</sup>5,50,000<span>+ GST 18% · Govt charges at actuals</span></div>
                  </div>
                  <span className="tp-badge">Foundation Build</span>
                </div>
                <p className="tp-desc">The brand is created, legally protected, and packaging is production-ready. Launch strategy and narrative development are not in scope. This option suits a client confident in executing market entry internally, who needs Magsmen to deliver the brand architecture and master copies.</p>
                <div className="tp-body">
                  <div className="tp-row"><span className="lbl">Phase 1 and 2 commencement (40%)</span><span className="amt">₹ 2,20,000</span></div>
                  <div className="tp-row"><span className="lbl">Phase 2 completion (35%)</span><span className="amt">₹ 1,92,500</span></div>
                  <div className="tp-row"><span className="lbl">Final delivery (25%)</span><span className="amt">₹ 1,37,500</span></div>
                  <div className="tp-row tot"><span className="lbl">Total Investment</span><span className="amt">₹ 5,50,000</span></div>
                  <div className="scope-list">
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>Sub-brand name development (3 candidates) and trademark filing Classes 29 and 30</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>Complete visual identity system (logo, colour, typography, guidelines)</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>Master packaging design for all 5 SKUs — all size variants, print-ready and production-ready</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>FSSAI organic labelling compliance review embedded in all designs</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>NPOP certification initiation through APEDA accredited body</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>Basic pricing strategy and SKU premium corridor recommendation</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--v)' }}>✓</span>Product innovation roadmap for future range extensions</div>
                    <div className="scope-row ex"><span className="ic">•</span>APRYSS farmer sourcing narrative (full build) — not in scope</div>
                    <div className="scope-row ex"><span className="ic">•</span>Packaging material innovation report — not in scope</div>
                    <div className="scope-row ex"><span className="ic">•</span>Full brand communication architecture and trade deck — not in scope</div>
                    <div className="scope-row ex"><span className="ic">•</span>Launch strategy and execution support — not in scope</div>
                    <div className="scope-row ex"><span className="ic">•</span>90-day post-launch review — not in scope</div>
                  </div>
                  <div className="tp-note">Timeline: 14 weeks. This option requires an internal team capable of executing the market entry narrative, trade activation, and launch. Magsmen delivers the brand. You activate it. Any excluded item can be added as a scope extension at engagement-tier rates.</div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Confirming%20Option%201%20(5.5L)%20%E2%80%94%20Double%20Horse%20Organics&body=Dear%20Sandeep%2C%0AWe%20confirm%20Option%201%20at%20INR%205%2C50%2C000." className="cbtn">Confirm Option 1 — ₹5.5L</a>
              </div>
            </div>

            {/* OPTION 2 CONTENT BAR RECOMMENDED PANEL */}
            <div className={`tier-panel tp2 ${activeTierTab === 1 ? 'tp' : ''}`}>
              <div className="tp-card">
                <div className="tp-header">
                  <div>
                    <div className="tp-name">★ Option 2 — Complete Build (Recommended)</div>
                    <div className="tp-price"><sup>₹</sup>7,50,000<span>+ GST 18% · Govt charges at actuals</span></div>
                  </div>
                  <span className="tp-badge">Recommended</span>
                </div>
                <p className="tp-desc">Every deliverable needed to build, launch, and sustain Double Horse Organics for the first year of market presence. Nothing left to figure out independently. The 90-day post-launch review is included at no additional cost as a mark of our long-standing relationship with Shyam Prasad Garu and Tenali Double Horse.</p>
                <div className="tp-body">
                  <div className="tp-row"><span className="lbl">Phase 1 and 2 commencement (40%)</span><span className="amt">₹ 3,00,000</span></div>
                  <div className="tp-row"><span className="lbl">Phase 3 commencement (35%)</span><span className="amt">₹ 2,62,500</span></div>
                  <div className="tp-row"><span className="lbl">Phase 4 launch and final delivery (25%)</span><span className="amt">₹ 1,87,500</span></div>
                  <div className="tp-row tot"><span className="lbl">Total Investment</span><span className="amt">₹ 7,50,000</span></div>
                  <div className="scope-list">
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Everything in Option 1 — full brand creation and legal architecture</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Complete APRYSS farmer sourcing narrative with farmer profiles, provenance maps, and consumer-facing brand story</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Packaging material innovation report with supplier benchmarks</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Detailed pricing strategy with consumer elasticity analysis for AP and Telangana</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Complete brand communication architecture (retail, digital, trade)</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Trade briefing deck for distributor and retailer presentations</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Launch strategy and pre-launch trade activation plan</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Consumer launch event strategy and execution support</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>Regional media and PR narrative for AP and Telangana food media</div>
                    <div className="scope-row"><span className="ic" style={{ color: '#059669' }}>✓</span>90-day post-launch brand health review — included at no additional cost</div>
                  </div>
                  <div className="tp-note">Timeline: 24 weeks. This is the engagement that builds Double Horse Organics as a commercially viable, legally protected, and market-ready brand from naming to launch. It is the option Magsmen recommends without qualification. Shyam Prasad Garu, this is the scope that reflects the standard your brand deserves and the partnership we have built together.</div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Confirming%20Option%202%20(7.5L%20Recommended)%20%E2%80%94%20Double%20Horse%20Organics&body=Dear%20Sandeep%2C%0AWe%20confirm%20Option%202%20at%20INR%207%2C50%2C000." className="cbtn" style={{ background: '#059669' }}>Confirm Option 2 — ₹7.5L (Recommended)</a>
              </div>
            </div>

            {/* OPTION 3 CONTENT RETAINER RETROFIT PANEL */}
            <div className={`tier-panel tp3 ${activeTierTab === 2 ? 'tp' : ''}`}>
              <div className="tp-card">
                <div className="tp-header">
                  <div>
                    <div className="tp-name">Option 3 — Premium Partnership</div>
                    <div className="tp-price"><sup>₹</sup>9,00,000<span>+ GST 18% · Govt charges at actuals</span></div>
                  </div>
                  <span className="tp-badge">Premium Partnership</span>
                </div>
                <p className="tp-desc">Everything in Option 2, extended with Sandeep N personally on-site at launch, a regional consumer focus group across three cities, influencer and food blogger outreach strategy, and a structured 6-month post-launch advisory retainer. Magsmen as a strategic partner through the first growth cycle, not just the creation phase.</p>
                <div className="tp-body">
                  <div className="tp-row"><span className="lbl">Phase 1 and 2 commencement (35%)</span><span className="amt">₹ 3,15,000</span></div>
                  <div className="tp-row"><span className="lbl">Phase 3 commencement (30%)</span><span className="amt">₹ 2,70,000</span></div>
                  <div className="tp-row"><span className="lbl">Phase 4 launch delivery (20%)</span><span className="amt">₹ 1,80,000</span></div>
                  <div className="tp-row"><span className="lbl">6-month retainer (15%) — monthly from launch</span><span className="amt">₹ 1,35,000</span></div>
                  <div className="tp-row tot"><span className="lbl">Total Investment</span><span className="amt">₹ 9,00,000</span></div>
                  <div className="scope-list">
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Everything in Option 2 — complete brand creation, legal, narrative, launch</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Sandeep N personally on-site for the consumer launch day in AP or Telangana</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Regional consumer focus group across 3 cities (Vijayawada, Hyderabad, Vizag) before final production</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Influencer and regional food blogger outreach strategy with identification list</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>6-month post-launch strategic advisory retainer — 1 structured call per month with written follow-up</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Priority trademark watch service for 12 months — monitoring and alerting on similar filings</div>
                    <div className="scope-row"><span className="ic" style={{ color: 'var(--go)' }}>✓</span>Formal 90-day and 180-day brand health reviews with market benchmarking</div>
                  </div>
                  <div className="tp-note">Timeline: 28 weeks core engagement plus 6-month advisory overlay from launch date. The retainer is structured as 1 strategic advisory call per month with written notes, not ongoing execution. This option is for a leadership team that wants a strategic partner through the first growth cycle of Double Horse Organics.</div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Confirming%20Option%203%20(9L%20Premium%20Partnership)%20%E2%80%94%20Double%20Horse%20Organics&body=Dear%20Sandeep%2C%0AWe%20confirm%20Option%203%20at%20INR%209%2C00%2C000." className="cbtn" style={{ background: '#B45309' }}>Confirm Option 3 — ₹9L</a>
              </div>
            </div>
          </div>

          {/* VALUE RISK ASSUMPTION SPLIT GRID */}
          <div className="vv rv d3" style={{ marginTop: '2.5rem' }}>
            <div className="vvc rk">
              <div className="vvl">Cost of Getting This Wrong</div>
              <div className="vvi"><span className="vvic">⚠️</span>Trademark dispute on sub-brand name: legal costs start at ₹15 to 25 lakhs and take 2 to 4 years to resolve. Brand perception damage is permanent.</div>
              <div className="vvi"><span className="vvic">⚠️</span>FSSAI compliance failure on red chilli or turmeric: product recall, relabelling, and media coverage that damages the core Double Horse brand.</div>
              <div className="vvi"><span className="vvic">⚠️</span>Fragmented vendors without a unified brief: individually acceptable work that is collectively inconsistent and brand-diluting.</div>
            </div>
            <div className="vvc vl3">
              <div className="vvl">What Any Option Above Delivers</div>
              <div className="vvi"><span className="vvic" style={{ color: 'var(--v)' }}>✓</span>Sub-brand name with trademark protection before the market knows anything.</div>
              <div className="vvi"><span className="vvic" style={{ color: 'var(--v)' }}>✓</span>Five master packaging designs: production-ready, IP owned by Double Horse.</div>
              <div className="vvi"><span className="vvic" style={{ color: 'var(--v)' }}>✓</span>Single point of strategic accountability. One brief. Consistent output.</div>
              <div className="vvi"><span className="vvic" style={{ color: 'var(--v)' }}>✓</span>Brand architecture that scales to national expansion without being rebuilt.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAGSMEN MATRIX OVERVIEW */}
      <section className="sec" id="s9" data-s="9" style={{ background: 'var(--ow)' }}>
        <div className="si">
          <div className="rv"><div className="sl">Why Magsmen</div><h2 className="st">Three disciplines in one room.<br /><em>One outcome.</em> Your brand.</h2></div>
          <div className="abg rv d1">
            <div>
              <p className="bt2" style={{ marginBottom: '1.5rem' }}>Most brand consultants operate in one dimension. Magsmen is structured at the intersection of brand strategy, legal foresight, and business economics simultaneously. For a food brand entering organic, this combination is not optional.</p>
              <div className="plg">
                <div className="pl"><div className="plt">Brand Strategy</div><div className="plb">Architecture that compounds over years, not campaigns that disappear next quarter.</div></div>
                <div className="pl"><div className="plt">Legal Foresight</div><div className="plb">Trademark, compliance, and IP embedded from day one, not retrofitted after design.</div></div>
                <div className="pl"><div className="plt">Business Economics</div><div className="plb">Pricing strategy and margin structure built with commercial discipline and real market data.</div></div>
                <div className="pl"><div className="plt">Regional Intelligence</div><div className="plb">AP and Telangana market dynamics are operating context, not research topics.</div></div>
              </div>
              <div className="co" style={{ marginTop: '1.5rem' }}>
                <div className="coi">★</div>
                <div>
                  <div className="cot">Long-Standing Client Advantage</div>
                  <div className="cob">For Shyam Prasad Garu and Tenali Double Horse specifically: our prior engagement has given Magsmen a depth of understanding of this brand, its consumers, and its market position that no outside advisor could arrive at from a cold start. You are not paying for us to learn your brand from scratch. You are paying for strategic intelligence that already knows it.</div>
                </div>
              </div>
            </div>
            <div className="bc">
              <div className="bn">Sandeep N</div><div className="br2">Founder, Magsmen Strategy Consultants</div>
              <div className="bb">TEDx Speaker. MMA Global Awards jury evaluating Google, Samsung, Apple, HUL, and Loreal. Consultant of the Year 2023 by The CEO Magazine. India Top 100 Admiring Marketing Leaders. Chair of the Jury SMARTIES APAC Awards. Enrolled Advocate. International MBA Deakin University Melbourne. Young Alumni of the Year 2024. Over 50 brands architected across IPL sponsors, Fortune 25 organisations, and regional category leaders. Clients have achieved up to 6x revenue acceleration through strategic repositioning.</div>
              <div className="cs">
                <span className="cp">TEDx Speaker</span><span className="cp">Enrolled Advocate</span><span className="cp">MMA Global Jury</span>
                <span className="cp">50+ Brands</span><span className="cp">SMARTIES APAC Chair</span><span className="cp">CEO Magazine Award</span><span className="cp">Deakin MBA</span>
              </div>
            </div>
          </div>

          {/* COMMON ACCORDION SYSTEM QUESTIONS SECTION */}
          <div className="rv d2" style={{ marginTop: '2.5rem' }}>
            <div className="sl" style={{ marginBottom: '1.2rem' }}>Common Questions</div>
            
            {[
              {
                q: "Should Double Horse Organics go under the same brand name or a separate one?",
                a: "Because Double Horse is already positioned on quality and purity, the organic extension is a natural upward movement from a trust platform that already exists. A completely separate brand sacrifices the trust shortcut that has taken decades to build. The unified sub-brand architecture captures both: trust inheritance from Double Horse and the premium differentiation required for an organic range to justify its price point."
              },
              {
                q: "What exactly is a master copy and who owns the files?",
                a: "A master copy is the print-ready, production-ready artwork file for each SKU covering all size variants. It includes the front face, back face, and spine, with all certification marks, sourcing narrative panel, and FSSAI organic labelling compliance. Files are delivered in industry-standard formats to Tenali Double Horse in full. The intellectual property belongs to Double Horse upon receipt of full and final payment. Magsmen retains no usage rights without explicit written permission."
              },
              {
                q: "What price premium can Double Horse Organics hold over the standard range?",
                a: "A 25 to 40 percent premium is the correct corridor for this brand at this stage. Below 20 percent reads as a price hike disguised as a story. Above 50 percent requires an established premium narrative that takes time to build. At 25 to 40 percent, the premium is credible, commercially defensible, and margin-positive for every channel in the distribution chain. The pricing strategy in Phase 3 validates exact price points through consumer elasticity analysis specific to this range and region."
              },
              {
                q: "How is Option 1 different from Option 2 in practice?",
                a: "Option 1 delivers a brand that is architecturally sound, legally protected, and production-ready. It does not deliver the market entry strategy, the full farmer narrative, or the communication architecture needed to activate the brand with trade and consumers. That work is your team's responsibility in Option 1. Option 2 delivers the complete picture: everything needed to enter the market correctly from day one, with Magsmen holding strategic accountability through the launch and 90-day review. For a brand with Double Horse's equity, Option 2 is the more commercially intelligent investment."
              },
              {
                q: "How much of Shyam Prasad Garu's time does this engagement require?",
                a: "Leadership time is concentrated at four structured sessions across 24 weeks: Phase 1 discovery alignment, Phase 2 identity and architecture approval, Phase 3 narrative and pricing sign-off, and Phase 4 launch readiness review. Between sessions, Magsmen works with a designated client liaison and provides weekly written updates. No decision is taken unilaterally. Four critical junctures over 24 weeks is what this engagement requires."
              }
            ].map((faq, index) => (
              <div className="fi" key={index}>
                <button 
                  className={`fq ${openFaqIndex === index ? 'op' : ''}`} 
                  onClick={() => handleFaqToggle(index)}
                >
                  {faq.q}<span className="fqi">{openFaqIndex === index ? '×' : '+'}</span>
                </button>
                <div className="fa" style={{ maxHeight: openFaqIndex === index ? '500px' : '0px', transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)', overflow: 'hidden' }}>
                  <div className="fai">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STRATEGIC STATEMENT NOTE LAYER */}
      <section className="sec" style={{ background: 'var(--vd)' }}>
        <div className="si">
          <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }} className="rv">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--go)', marginBottom: '1.2rem' }}>A Personal Note from Sandeep N to Shyam Prasad Garu</div>
              <p style={{ fontSize: '.9rem', fontWeight: 300, lineHeight: '1.95', color: 'rgba(255,255,255,.72)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "Shyam Prasad Garu, what you have built with Double Horse is not simply a product business. It is a trust institution in the kitchens of Andhra Pradesh and Telangana. Families reach for your urad dal, your turmeric, and your poha not because of a campaign, but because of a relationship earned over years and renewed with every purchase. That kind of brand equity is rare. Most businesses work their entire lives to build what Double Horse already has.<br /><br />
                Our shared history has given Magsmen a depth of understanding of your brand that no outsider could arrive at quickly. We know what Double Horse stands for. We know the weight it carries. And we know exactly what it will take to build an organic extension that compounds that weight rather than diluting it.<br /><br />
                Double Horse Organics is not a diversification. It is the next chapter of the same story. The same quality. The same purity. Now with a sourcing narrative rooted in the farms of Andhra Pradesh, certification the educated consumer demands, and a brand identity built to lead the organic category in this region for the next decade.<br /><br />
                I have presented three options because the decision should belong to you. Each option is built to the same standard of thinking. The choice of depth is yours. I am ready to begin the moment you are."
              </p>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>Sandeep N</div>
              <div style={{ fontSize: '11px', fontWeight: 400,  letterSpacing: '.07em' }}>Founder, Magsmen Strategy Consultants · Enrolled Advocate · TEDx Speaker</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRMATION WORKFLOW ACTIONS TRIGGER MODULE */}
      <section className="sec" id="s10" data-s="10">
        <div className="si">
          <div className="rv"><div className="sl">Confirm and Begin</div><h2 className="st">One email.<br /><em>Everything starts.</em></h2></div>
          <div className="aw rv d1">
            <div className="awt">Confirm the Double Horse Organics Engagement</div>
            <div className="aws">Shyam Prasad Garu, once your preferred option is confirmed, everything below follows in sequence. Trademark filing begins before the market knows anything. Simply mention your preferred option in the email.</div>
            <div className="aps">
              <div className="ap"><div className="apn">1</div><div className="apt">Email confirmation received — mention Option 1, 2, or 3</div><div className="aptime">Your action</div></div>
              <div className="ap"><div className="apn">2</div><div className="apt">Kickoff session scheduled with Shyam Prasad Garu and the team</div><div className="aptime">Within 5 working days</div></div>
              <div className="ap"><div className="apn">3</div><div className="apt">Trademark filing initiated for sub-brand name in Classes 29 and 30</div><div className="aptime">Week 2</div></div>
              <div className="ap"><div className="apn">4</div><div className="apt">Phase 1 research, consumer interviews, and competitive mapping begins</div><div className="aptime">Weeks 1 to 3</div></div>
              <div className="ap"><div className="apn">5</div><div className="apt">Identity design and master packaging for all 5 SKUs in progress</div><div className="aptime">Weeks 4 to 10</div></div>
              <div className="ap"><div className="apn">6</div><div className="apt">Double Horse Organics live in market with post-launch review scheduled</div><div className="aptime">Week 24</div></div>
            </div>
            <div className="acr">
              <a 
                href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Double%20Horse%20Organics%20Engagement%20Confirmed%20%E2%80%94%20Shyam%20Prasad%20Garu&body=Dear%20Sandeep%2C%0A%0AWe%20confirm%20the%20Double%20Horse%20Organics%20engagement%20as%20proposed%20by%20Magsmen.%0A%0APreferred%20option%3A%20%5BOption%201%20at%205.5L%20%2F%20Option%202%20at%207.5L%20%2F%20Option%203%20at%209L%5D%0A%0APlease%20share%20onboarding%20details%2C%20invoice%2C%20and%20kickoff%20schedule." 
                className="cbtn"
              >
                Send Confirmation Email
              </a>
              <a href="mailto:sandeep@magsmen.com" className="csec">Email Sandeep Directly</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CORE WRAPPER BLOCK CLOSING */}
      <section className="cl">
        <div className="clg">D</div>
        <div className="cll">The Decision Belongs to You</div>
        <h2 className="clt">Double Horse Organics can lead<br />this category. The <em>architecture</em><br />is the only question.</h2>
        <p className="cls">Three options. Three scopes. Each one built to the same standard. Shyam Prasad Garu, the choice of depth is yours. The commitment to quality is ours, at every level.</p>
        <div className="cla">
          <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Double%20Horse%20Organics%20Confirmation&body=Dear%20Sandeep%2C%0AWe%20confirm%20the%20Double%20Horse%20Organics%20engagement." className="cbtn">
            Confirm This Engagement
          </a>
        </div>
        <div className="clv">Proposal valid until June 18, 2026 · Prepared exclusively for Shyam Prasad Garu, Tenali Double Horse · Confidential</div>
      </section>

      <footer>
        <div className="fb">Magsmen Strategy Consultants · A division of Grofesion Innovations Pvt Ltd</div>
        <div className="fl">
          <a href="https://www.magsmen.com" target="_blank" rel="noreferrer">www.magsmen.com</a>
          <a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a>
          <a href="mailto:connect@magsmen.com">connect@magsmen.com</a>
        </div>
        <div className="fc">Confidential · Not for circulation</div>
      </footer>

      {/* CHATBOT FLOATING CHANNELS ASSISTANT PANEL COMPONENT */}
      <button id="cb" onClick={() => setChatOpen(!chatOpen)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div id="cp" style={{ display: chatOpen ? 'flex' : 'none' }}>
        <div id="ch">
          <div className="cd"></div>
          <span id="cht">Magsmen AI — Ask about this proposal</span>
        </div>
        <div id="cm">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`mg ${msg.role === 'ai' ? 'ai' : 'us'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div id="cir">
          <input 
            id="ci" 
            value={chatInput} 
            onChange={(e) => setChatInput(e.target.value)} 
            placeholder="Ask about any option or deliverable..." 
            onKeyDown={(e) => { if (e.key === 'Enter') sendChatMessage(); }} 
          />
          <button id="cs2" onClick={sendChatMessage}>SEND</button>
        </div>
      </div>
    </div>
  );
}