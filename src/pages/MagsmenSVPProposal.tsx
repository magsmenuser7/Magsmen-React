
import { LayoutDashboard, Mail, AlertCircle, Loader2, ChevronRight } from 'lucide-react';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import magsmennewlogowhitelandscape from "../../public/assets/magsmen-new-logo-black-horizontal-landscape.png"

interface AnthropicResponse {
  content?: { text: string }[];
}

interface UserData {
  email: string;
}

export default function MagsmenSVPProposal() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Authentication / Registration state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  // ✅ FIX: useEffect is now BEFORE any conditional return
  // This satisfies React's Rules of Hooks
  useEffect(() => {
    // Only run the interactive setup when the user is logged in
    if (!isLoggedIn) return;

    const root = rootRef.current;
    if (!root) return;

    // ---------- CURSOR ----------
    const cursor = root.querySelector<HTMLDivElement>('#cursor');
    const ring = root.querySelector<HTMLDivElement>('#cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number | undefined;

    const onMouseMove = (e: MouseEvent): void => {
      mx = e.clientX;
      my = e.clientY;
    };

    function animateCursor(): void {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      rafId = requestAnimationFrame(animateCursor);
    }

    document.addEventListener('mousemove', onMouseMove);
    animateCursor();

    // ---------- PROGRESS BAR ----------
    const prog = root.querySelector<HTMLDivElement>('#progress');
    const onScroll = (): void => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.width = (h > 0 ? (s / h * 100) : 0) + '%';
    };
    window.addEventListener('scroll', onScroll);

    // ---------- SCROLL REVEAL ----------
    const reveals = root.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach((el) => obs.observe(el));

    // ---------- CHATBOT ----------
    const chatBtn = root.querySelector<HTMLButtonElement>('#chatBtn');
    const chatPanel = root.querySelector<HTMLElement>('#chatPanel');
    const chatClose = root.querySelector<HTMLButtonElement>('#chatClose');
    const chatInput = root.querySelector<HTMLInputElement | HTMLTextAreaElement>('#chatInput');
    const chatSend = root.querySelector<HTMLButtonElement>('#chatSend');
    const chatMsgs = root.querySelector<HTMLDivElement>('#chatMsgs');

    const toggleChat = (): void => { if (chatPanel) chatPanel.classList.toggle('open'); };
    const closeChat = (): void => { if (chatPanel) chatPanel.classList.remove('open'); };

    async function sendMsg(): Promise<void> {
      if (!chatInput || !chatMsgs) return;
      const q = chatInput.value.trim();
      if (!q) return;
      const uDiv = document.createElement('div');
      uDiv.className = 'chat-msg user';
      uDiv.textContent = q;
      chatMsgs.appendChild(uDiv);
      chatInput.value = '';
      chatMsgs.scrollTop = chatMsgs.scrollHeight;
      try {
        const res = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-6',
            max_tokens: 1000,
            system: 'You are the Magsmen assistant for the SVP Science Fund proposal. The engagement is a brand narrative and IFSCA compliant communication partnership for the SVP Science Fund August 12th event. Investment is Rs 5,00,000 plus GST. Scope covers narrative architecture, IFSCA compliant communication design, and brand operations. Respond warmly and directly. No dashes. No jargon. Use commas and full stops. Keep answers under 80 words.',
            messages: [{ role: 'user', content: q }]
          })
        });
        const data = (await res.json()) as AnthropicResponse;
        const bDiv = document.createElement('div');
        bDiv.className = 'chat-msg bot';
        bDiv.textContent = (data.content && data.content[0])
          ? data.content[0].text
          : 'Thank you for your question. Please reach out to sandeep@magsmen.com for a detailed response.';
        chatMsgs.appendChild(bDiv);
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
      } catch (err) {
        const bDiv = document.createElement('div');
        bDiv.className = 'chat-msg bot';
        bDiv.textContent = 'Please reach out directly at sandeep@magsmen.com for any questions about this proposal.';
        chatMsgs.appendChild(bDiv);
      }
    }

    const onKeydown = (e: Event): void => {
      const event = e as KeyboardEvent;
      if (event.key === 'Enter') sendMsg();
    };

    if (chatBtn) chatBtn.addEventListener('click', toggleChat);
    if (chatClose) chatClose.addEventListener('click', closeChat);
    if (chatSend) chatSend.addEventListener('click', sendMsg);
    if (chatInput) chatInput.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      obs.disconnect();
      if (chatBtn) chatBtn.removeEventListener('click', toggleChat);
      if (chatClose) chatClose.removeEventListener('click', closeChat);
      if (chatSend) chatSend.removeEventListener('click', sendMsg);
      if (chatInput) chatInput.removeEventListener('keydown', onKeydown);
    };
  }, [isLoggedIn]); // ✅ Re-runs when isLoggedIn becomes true

  // ✅ Conditional return AFTER all hooks
  if (!isLoggedIn) {
    return (
      <div
        className="relative min-h-screen bg-cover bg-[position:90%_center] md:bg-center flex items-center justify-center md:justify-end p-4 md:p-6 font-sans"
        style={{ backgroundImage: `url('/assets/bg-for-lock.png')` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative w-full max-w-md mr-0 md:mr-28">
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

  // ✅ Main proposal UI renders only when isLoggedIn is true
  return (
    <div ref={rootRef}>
      <style>{`
:root{
  --violet:#7C3AED;
  --violet-deep:#1A0A2E;
  --violet-dark:#3B0764;
  --violet-mid:#7C3AED;
  --violet-light:#A78BFA;
  --violet-pale:#EDE9FE;
  --violet-glow:rgba(124,58,237,0.15);
  --black:#0F0A1A;
  --ink:#0F0A1A;
  --ink-soft:#2D1E4F;
  --body-text:#3D2D5C;
  --muted:#7C6A9A;
  --line:rgba(124,58,237,0.15);
  --white:#FFFFFF;
  --off-white:#F8F5FF;
  --gold:#C5A572;
  --font:'Montserrat',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:var(--font);background:var(--white);color:var(--ink);overflow-x:hidden;cursor:none;}
body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");opacity:0.4;}
section{position:relative;z-index:1;}

.cursor{width:8px;height:8px;background:var(--violet);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform 0.1s;}
.cursor-ring{width:32px;height:32px;border:1px solid rgba(124,58,237,0.5);border-radius:50%;position:fixed;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:transform 0.15s ease-out;}

#progress{position:fixed;top:0;left:0;height:2px;background:var(--violet);z-index:999;transition:width 0.1s;}

nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background:rgba(255,255,255,0.94);backdrop-filter:blur(20px);border-bottom:1px solid var(--line);}
.nav-logo{display:flex;align-items:center;gap:0.6rem;}
.nav-logo img{
    width:160px;
    height:auto;
    display:block;
}
.logo-mark{width:32px;height:32px;background:var(--violet-dark);border-radius:4px;display:flex;align-items:center;justify-content:center;}
.logo-mark svg{width:20px;height:20px;}
.logo-text{display:flex;flex-direction:column;line-height:1.1;}
.logo-text .brand{font-size:12px;font-weight:700;letter-spacing:0.18em;color:var(--ink);text-transform:uppercase;}
.logo-text .sub{font-size:8px;font-weight:400;letter-spacing:0.14em;color:var(--muted);text-transform:uppercase;}
.nav-tag{display:none;font-size:10px;font-weight:500;letter-spacing:0.12em;color:var(--muted);text-transform:uppercase;}
.nav-cta{background:var(--violet);color:white;border:none;padding:0.5rem 1.2rem;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;border-radius:2px;cursor:pointer;transition:background 0.2s;text-decoration:none;display:inline-block;}
.nav-cta:hover{background:#6D28D9;}
@media(min-width:600px){.nav-tag{display:block;}}

.reveal{opacity:0;transform:translateY(28px);transition:opacity 0.7s ease,transform 0.7s ease;}
.reveal.visible{opacity:1;transform:translateY(0);}
.reveal-delay-1{transition-delay:0.12s;}
.reveal-delay-2{transition-delay:0.22s;}
.reveal-delay-3{transition-delay:0.32s;}
.reveal-delay-4{transition-delay:0.42s;}

.section-label{font-size:9px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:var(--violet);margin-bottom:1rem;}
.section-title{font-size:clamp(1.7rem,3.8vw,2.9rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:1.4rem;letter-spacing:-0.02em;}
.section-title strong{font-weight:700;}
.section-title em{font-style:italic;color:var(--violet);}
.body-text{font-size:0.9rem;font-weight:300;line-height:1.85;color:var(--body-text);max-width:660px;}

.hero{min-height:100vh;background:var(--violet-deep);display:flex;flex-direction:column;justify-content:space-between;padding:7rem 1.5rem 3.5rem;overflow:hidden;position:relative;}
.hero-bg-glyph{position:absolute;right:-8vw;top:50%;transform:translateY(-50%);font-size:40vw;font-weight:700;color:rgba(255,255,255,0.025);line-height:1;pointer-events:none;user-select:none;letter-spacing:-0.05em;}
.hero-eyebrow{display:flex;align-items:center;gap:1rem;margin-bottom:2.2rem;}
.hero-eyebrow .tag{font-size:9px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(197,165,114,0.3);padding:0.35rem 0.9rem;border-radius:2px;}
.hero-eyebrow .hline{flex:1;height:1px;background:rgba(255,255,255,0.1);max-width:80px;}
.hero-title{font-size:clamp(2rem,5.5vw,4.2rem);font-weight:300;line-height:1.08;color:var(--white);letter-spacing:-0.025em;max-width:820px;margin-bottom:2rem;}
.hero-title strong{font-weight:700;}
.hero-title em{font-style:italic;color:var(--violet-light);}
.hero-sub{font-size:0.9rem;font-weight:300;line-height:1.7;color:rgba(255,255,255,0.55);max-width:500px;margin-bottom:2.5rem;}
.hero-cta{display:inline-block;background:var(--violet);color:white;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;padding:0.9rem 2.2rem;border-radius:2px;transition:background 0.2s,transform 0.2s;}
.hero-cta:hover{background:#6D28D9;transform:scale(1.02);}
.hero-meta{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem 2rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);}
.hero-meta-item .label{font-size:8px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:0.3rem;}
.hero-meta-item .value{font-size:0.85rem;font-weight:500;color:rgba(255,255,255,0.75);}
@media(min-width:600px){
  .hero{padding:8rem 3rem 4rem;}
  .hero-meta{grid-template-columns:repeat(4,1fr);}
}

.sec{padding:4rem 1.5rem;}
.sec-inner{max-width:1080px;margin:0 auto;}
.alt-bg{background:var(--off-white);}
.dark-sec{background:var(--violet-deep);color:var(--white);}
.dark-sec .section-label{color:var(--violet-light);}
.dark-sec .section-title{color:var(--white);}
.dark-sec .body-text{color:rgba(255,255,255,0.65);}
@media(min-width:600px){.sec{padding:5.5rem 2.5rem;}}
@media(min-width:960px){.sec{padding:7rem 3rem;}}

.ctx-grid{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem;}
.risk-box{border-left:2px solid var(--violet);padding:1.5rem 0 1.5rem 1.5rem;}
.risk-box .rb-label{font-size:9px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--violet);margin-bottom:0.8rem;}
.risk-box p{font-size:0.87rem;font-weight:300;line-height:1.8;color:var(--body-text);}
.risk-box p+p{margin-top:0.8rem;}
@media(min-width:960px){.ctx-grid{grid-template-columns:1.15fr 0.85fr;gap:4rem;}}

.scope-grid{display:grid;grid-template-columns:1fr;gap:2px;background:var(--line);margin-top:2.5rem;border:1px solid var(--line);}
.scard{background:var(--white);padding:2.2rem 1.8rem;display:flex;flex-direction:column;}
.scard .letter{font-size:2.2rem;font-weight:700;font-style:italic;color:var(--violet);margin-bottom:1rem;line-height:1;}
.scard h3{font-size:0.88rem;font-weight:700;letter-spacing:0.02em;margin-bottom:1.2rem;line-height:1.4;color:var(--ink);}
.scard ul{list-style:none;}
.scard li{font-size:0.82rem;font-weight:300;line-height:1.7;color:var(--body-text);padding-left:1.1rem;position:relative;margin-bottom:0.7rem;}
.scard li::before{content:'';position:absolute;left:0;top:0.6em;width:5px;height:1px;background:var(--violet);}
.scard-accent{border-top:3px solid var(--violet);}
.scard-gold{border-top:3px solid var(--gold);}
@media(min-width:600px){.scope-grid{grid-template-columns:repeat(3,1fr);}}

.ba-wrap{display:grid;grid-template-columns:1fr;gap:1.5rem;margin:2.5rem 0;max-width:820px;}
.ba-block{padding:1.4rem 0;}
.ba-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:0.7rem;}
.ba-text{font-size:1.1rem;font-weight:300;line-height:1.5;color:var(--white);}
.ba-arrow{color:var(--violet-light);font-size:1.5rem;display:flex;align-items:center;}
@media(min-width:600px){.ba-wrap{grid-template-columns:1fr auto 1fr;align-items:center;}}

.outcomes{display:grid;grid-template-columns:1fr;gap:1.5rem;max-width:920px;margin-top:1rem;}
.oc{border-top:1px solid rgba(255,255,255,0.12);padding-top:1.2rem;}
.oc .n{font-size:0.85rem;font-style:italic;color:var(--violet-light);margin-bottom:0.5rem;}
.oc p{font-size:0.82rem;font-weight:300;line-height:1.7;color:rgba(255,255,255,0.65);}
@media(min-width:600px){.outcomes{grid-template-columns:repeat(3,1fr);}}

.inv-grid{display:grid;grid-template-columns:1fr;gap:2.5rem;margin-top:2rem;}
.price-block{border:1px solid var(--ink);padding:2.2rem;}
.price-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--violet);margin-bottom:0.8rem;}
.price-figure{font-size:clamp(2.2rem,4vw,3.2rem);font-weight:300;color:var(--ink);margin:0.8rem 0 0.5rem;}
.price-figure span{font-size:0.95rem;color:var(--muted);font-weight:400;}
.price-block p{font-size:0.83rem;font-weight:300;line-height:1.7;color:var(--body-text);}
.tl-item{display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--line);}
.tl-item:last-child{border-bottom:none;}
.tl-date{font-size:0.83rem;font-weight:600;font-style:italic;color:var(--violet);min-width:100px;padding-top:0.1rem;}
.tl-desc{font-size:0.82rem;font-weight:300;line-height:1.6;color:var(--body-text);}
@media(min-width:600px){.inv-grid{grid-template-columns:1fr 1fr;gap:4rem;}}

.bigquote{font-size:clamp(1.3rem,3vw,2.1rem);font-weight:300;line-height:1.4;color:var(--ink);max-width:740px;margin:1.2rem 0 2rem;}
.bigquote .x{color:var(--violet);font-style:italic;}
.tag-row{display:flex;gap:0.7rem;flex-wrap:wrap;margin-top:1.5rem;}
.pill{border:1px solid var(--ink);padding:0.5rem 1.1rem;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink);}

.founder-note{background:var(--off-white);padding:3rem 2rem;border-left:3px solid var(--violet);max-width:680px;margin:2.5rem auto;position:relative;}
.fn-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;}
.fn-text{font-size:0.88rem;font-weight:300;line-height:1.9;color:var(--body-text);}
.fn-sig{margin-top:1.8rem;}
.fn-name{font-size:0.85rem;font-weight:700;color:var(--ink);}
.fn-role{font-size:0.78rem;font-weight:400;color:var(--muted);letter-spacing:0.05em;}
.sig-svg-wrap{margin-top:0.6rem;}

.about-grid{display:grid;grid-template-columns:1fr;gap:3rem;margin-top:2.5rem;}
.about-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;}
.pillar{padding:1.2rem;background:var(--white);border:1px solid var(--line);}
.pillar h4{font-size:0.78rem;font-weight:700;letter-spacing:0.05em;color:var(--ink);margin-bottom:0.4rem;}
.pillar p{font-size:0.75rem;font-weight:300;line-height:1.6;color:var(--muted);}
.sandeep-card{background:var(--white);border:1px solid var(--line);padding:1.8rem;}
.sc-name{font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:0.3rem;}
.sc-title{font-size:0.78rem;font-weight:400;color:var(--violet);letter-spacing:0.05em;margin-bottom:1rem;}
.sc-cred{font-size:0.78rem;font-weight:300;line-height:1.8;color:var(--body-text);}
.badge-row{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1.2rem;}
.badge{font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:0.3rem 0.7rem;background:var(--violet-pale);color:var(--violet);border-radius:2px;}
@media(min-width:960px){.about-grid{grid-template-columns:1fr 1fr;}}

.closing{background:var(--violet-deep);padding:5rem 1.5rem;text-align:center;position:relative;overflow:hidden;}
.closing-title{font-size:clamp(1.5rem,4vw,2.8rem);font-weight:300;color:var(--white);line-height:1.2;max-width:680px;margin:0 auto 2rem;}
.closing-title strong{font-weight:700;}
.closing-cta{display:inline-block;background:var(--white);color:var(--violet-deep);font-family:var(--font);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:1rem 2.5rem;border-radius:2px;transition:transform 0.2s;margin-bottom:1rem;}
.closing-cta:hover{transform:scale(1.03);}
.closing-sub{font-size:0.8rem;font-weight:300;color:rgba(255,255,255,0.4);margin-top:1rem;}
@media(min-width:600px){.closing{padding:7rem 3rem;}}

footer{background:var(--ink);color:rgba(255,255,255,0.4);padding:1.8rem 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
.f-brand{font-size:10px;font-weight:400;letter-spacing:0.08em;}
.f-conf{font-size:9px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;}

.conf-sec{position:relative;}
.conf-sec::after{content:'CONFIDENTIAL';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-30deg);font-size:4rem;font-weight:700;font-family:var(--font);color:rgba(124,58,237,0.04);letter-spacing:0.3em;pointer-events:none;white-space:nowrap;z-index:0;}

.ticker-wrap{background:var(--violet);overflow:hidden;padding:0.7rem 0;}
.ticker-inner{display:flex;gap:0;white-space:nowrap;animation:ticker 28s linear infinite;}
.ticker-inner span{font-size:9px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.75);padding:0 2.5rem;}
.ticker-sep{color:rgba(255,255,255,0.3);}
@keyframes ticker{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

.chat-btn{position:fixed;bottom:1.5rem;right:1.5rem;z-index:200;background:var(--violet);color:white;border:none;border-radius:50%;width:48px;height:48px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(124,58,237,0.4);transition:transform 0.2s;}
.chat-btn:hover{transform:scale(1.08);}
.chat-panel{position:fixed;bottom:4.5rem;right:1.5rem;z-index:200;width:calc(100vw - 3rem);max-width:320px;background:white;border:1px solid var(--line);border-radius:8px;box-shadow:0 8px 40px rgba(124,58,237,0.15);display:none;flex-direction:column;overflow:hidden;}
.chat-panel.open{display:flex;}
.chat-head{background:var(--violet-deep);padding:1rem 1.2rem;display:flex;justify-content:space-between;align-items:center;}
.chat-head span{font-size:0.78rem;font-weight:600;color:white;letter-spacing:0.05em;}
.chat-close{background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:1rem;}
.chat-msgs{height:220px;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:0.7rem;}
.chat-msg{font-size:0.78rem;font-weight:300;line-height:1.6;padding:0.7rem 0.9rem;border-radius:6px;max-width:90%;}
.chat-msg.bot{background:var(--violet-pale);color:var(--ink);align-self:flex-start;}
.chat-msg.user{background:var(--violet);color:white;align-self:flex-end;}
.chat-input-row{display:flex;border-top:1px solid var(--line);}
.chat-input-row input{flex:1;border:none;padding:0.8rem 1rem;font-family:var(--font);font-size:0.78rem;outline:none;color:var(--ink);}
.chat-input-row button{background:var(--violet);color:white;border:none;padding:0 1rem;cursor:pointer;font-size:0.85rem;}

.cta-btn{display:inline-block;background:var(--violet);color:white;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;padding:0.9rem 2.2rem;border-radius:2px;transition:background 0.2s,transform 0.2s;}
.cta-btn:hover{background:#6D28D9;transform:scale(1.02);}

html,body{max-width:100%;overflow-x:hidden;}
img,svg{max-width:100%;height:auto;}
.chat-panel{max-width:min(320px, calc(100vw - 2rem));}
@media(max-width:380px){
  .hero-title{font-size:clamp(1.6rem,8vw,2.4rem);}
  .section-title{font-size:clamp(1.4rem,6vw,2rem);}
  nav{padding:0.8rem 1rem;}
  .sec{padding:3rem 1.1rem;}
  .price-block{padding:1.4rem;}
  .founder-note{padding:2rem 1.2rem;}
}
@media(hover:none){
  body{cursor:auto;}
  .cursor,.cursor-ring{display:none;}
}
      `}</style>

      <div dangerouslySetInnerHTML={{ __html: `
<div id="progress"></div>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- NAV -->
<nav>
<div class="nav-logo">
  <img
    src="/assets/magsmen-new-logo-black-horizontal-landscape.png"
    alt="Magsmen Strategy Consultants"
    
  />
</div>
  <span class="nav-tag">Prepared for SVP Science Fund</span>
  <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20Proposal%20%E2%80%94%20Confirm%20Scope&body=Dear%20Sandeep%2C%0A%0AWe%20have%20reviewed%20the%20proposal%20for%20the%20SVP%20Science%20Fund%20brand%20engagement%20and%20would%20like%20to%20confirm%20the%20scope.%0A%0AKindly%20arrange%20a%20call%20at%20your%20earliest%20convenience." class="nav-cta">Confirm Scope</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg-glyph">S</div>
  <div style="position:relative;z-index:2;">
    <div class="hero-eyebrow">
      <span class="tag">Brand Narrative Proposal · 2026</span>
      <div class="hline"></div>
    </div>
    <h1 class="hero-title">
      India has the science.<br>
      India has the capital.<br>
      <em>August 12th is where they meet<br>as one story.</em>
    </h1>
    <p class="hero-sub">A brand narrative and IFSCA-compliant communication partnership for SVP Science Fund, prepared exclusively by Magsmen Strategy Consultants.</p>
    <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20%E2%80%94%20Confirm%20Scope&body=Dear%20Sandeep%2C%0A%0AWe%20would%20like%20to%20confirm%20the%20scope%20for%20the%20SSF%202026%20engagement.%20Please%20arrange%20a%20call." class="hero-cta">Confirm This Engagement</a>

    <div style="margin-top:2.5rem;opacity:0.9;">
      <svg viewBox="0 0 700 80" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="40" r="18" stroke="#C4B5FD" stroke-width="1.4" stroke-dasharray="4 3" opacity="1"/>
        <text x="60" y="44" fill="#EDE9FE" font-size="7" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">SCIENCE</text>
        <line x1="78" y1="40" x2="180" y2="40" stroke="#A78BFA" stroke-width="1" stroke-dasharray="5 4" opacity=".7"/>
        <circle cx="200" cy="40" r="22" fill="#7C3AED" fill-opacity=".25" stroke="#C4B5FD" stroke-width="1.4" opacity="1"/>
        <text x="200" y="37" fill="#FFFFFF" font-size="6" font-family="Montserrat" text-anchor="middle" opacity="1" font-weight="700">SVP</text>
        <text x="200" y="46" fill="#F5F3FF" font-size="5" font-family="Montserrat" text-anchor="middle" opacity=".95">SCIENCE FUND</text>
        <line x1="222" y1="40" x2="320" y2="40" stroke="#A78BFA" stroke-width="1" stroke-dasharray="5 4" opacity=".7"/>
        <circle cx="340" cy="40" r="18" stroke="#C4B5FD" stroke-width="1.4" stroke-dasharray="4 3" opacity="1"/>
        <text x="340" y="44" fill="#EDE9FE" font-size="7" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">CAPITAL</text>
        <line x1="200" y1="18" x2="200" y2="-10" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".5"/>
        <text x="80" y="12" fill="#EDE9FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".9">August 12th</text>
        <line x1="358" y1="35" x2="430" y2="20" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".6"/>
        <circle cx="448" cy="16" r="12" stroke="#E9C46A" stroke-width="1.2" stroke-dasharray="3 3" opacity="1"/>
        <text x="448" y="20" fill="#FDF0D5" font-size="6" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">INNOVATION</text>
        <line x1="358" y1="46" x2="430" y2="62" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".6"/>
        <circle cx="448" cy="64" r="12" stroke="#C4B5FD" stroke-width="1.2" stroke-dasharray="3 3" opacity="1"/>
        <text x="448" y="68" fill="#EDE9FE" font-size="6" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">DEEPTECH</text>
        <text x="550" y="40" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">Narrative Architecture</text>
        <text x="550" y="52" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">IFSCA Compliance</text>
        <text x="550" y="64" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">Brand Operations</text>
      </svg>
    </div>
  </div>

  <div class="hero-meta" style="position:relative;z-index:2;">
    <div class="hero-meta-item"><div class="label">Prepared For</div><div class="value">SVP Science Fund</div></div>
    <div class="hero-meta-item"><div class="label">Event Date</div><div class="value">12 August 2026</div></div>
    <div class="hero-meta-item"><div class="label">Prepared By</div><div class="value">Magsmen Strategy Consultants</div></div>
    <div class="hero-meta-item"><div class="label">Classification</div><div class="value">Confidential</div></div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-wrap">
  <div class="ticker-inner">
    <span>Brand Narrative Architecture</span><span class="ticker-sep">·</span>
    <span>IFSCA Compliant Communication</span><span class="ticker-sep">·</span>
    <span>Fund Launch Strategy</span><span class="ticker-sep">·</span>
    <span>August 12 2026</span><span class="ticker-sep">·</span>
    <span>SVP Science Fund</span><span class="ticker-sep">·</span>
    <span>Magsmen Strategy Consultants</span><span class="ticker-sep">·</span>
    <span>Brand Narrative Architecture</span><span class="ticker-sep">·</span>
    <span>IFSCA Compliant Communication</span><span class="ticker-sep">·</span>
    <span>Fund Launch Strategy</span><span class="ticker-sep">·</span>
    <span>August 12 2026</span><span class="ticker-sep">·</span>
    <span>SVP Science Fund</span><span class="ticker-sep">·</span>
    <span>Magsmen Strategy Consultants</span><span class="ticker-sep">·</span>
  </div>
</div>

<!-- SECTION 1: CONTEXT -->
<section class="sec">
  <div class="sec-inner">
    <div class="section-label reveal">01 · Context</div>
    <h2 class="section-title reveal reveal-delay-1">SSF is the first time this thesis <strong>stands in one room</strong> as a single story.</h2>

    <div class="reveal reveal-delay-2" style="margin:1.5rem 0 2rem;">
      <svg viewBox="0 0 900 70" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="10" width="260" height="50" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="130" y="32" fill="#3B0764" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">SCIENCE</text>
        <text x="130" y="47" fill="#7C6A9A" font-size="7.5" font-family="Montserrat" text-anchor="middle">Reagene · Oneomics · Acasta</text>
        <line x1="260" y1="35" x2="320" y2="35" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr1)"/>
        <defs><marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED"/></marker></defs>
        <rect x="320" y="5" width="260" height="60" rx="2" fill="#7C3AED"/>
        <text x="450" y="30" fill="white" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">SVP SCIENCE FUND</text>
        <text x="450" y="45" fill="rgba(255,255,255,0.65)" font-size="7.5" font-family="Montserrat" text-anchor="middle">India's missing architecture</text>
        <text x="450" y="57" fill="rgba(255,255,255,0.5)" font-size="7" font-family="Montserrat" text-anchor="middle">August 12 · The first public proof</text>
        <line x1="580" y1="35" x2="640" y2="35" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr1)"/>
        <rect x="640" y="10" width="260" height="50" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="770" y="32" fill="#3B0764" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">QUALIFIED CAPITAL</text>
        <text x="770" y="47" fill="#7C6A9A" font-size="7.5" font-family="Montserrat" text-anchor="middle">Doctors · PhD Holders · Institutions</text>
      </svg>
    </div>

    <div class="ctx-grid">
      <div>
        <p class="body-text reveal reveal-delay-2">SVP has built something rare in Indian capital markets. A thesis that bets on businesses the market has already written off. The SVP Science Fund is the next layer in that thesis. It brings the same conviction to India's deep science and innovation sector, where genuine intellectual capital exists but the right patient capital does not.</p>
        <p class="body-text reveal reveal-delay-3" style="margin-top:1rem;">August 12th is the moment that thesis stands in front of a qualified audience for the first time as a single, coherent institution. Not a pitch. A proof. The room will be full of doctors and PhD holders who evaluate every claim with scientific precision. They will not be moved by projections. They will be moved by evidence, honesty, and the quality of thinking they encounter in that room.</p>
      </div>
      <div class="reveal reveal-delay-3">
        <div class="risk-box">
          <div class="rb-label">The Real Risk</div>
          <p>Visibility is not the challenge. A good design agency can pack a room and produce a polished deck. The risk is credibility drift. August 12th reads as another fund-raising event rather than the announcement of the architecture India's science sector has been missing.</p>
          <p>That distinction is not built with design. It is built with narrative, with proof, and with a communication framework that works precisely within the regulatory boundaries SVP operates under. That is the gap this engagement closes.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 2: SCOPE -->
<section class="sec alt-bg">
  <div class="sec-inner">
    <div class="section-label reveal">02 · Scope of Work</div>
    <h2 class="section-title reveal reveal-delay-1">Three layers. <strong>One throughline.</strong> No gaps between them.</h2>
    <p class="body-text reveal reveal-delay-2">Magsmen holds the strategic brief, the narrative consistency, and the IFSCA compliance architecture across every output. This is not event management. It is the work of making August 12th mean something to every person who leaves that room.</p>

    <div class="scope-grid reveal reveal-delay-3">
      <div class="scard scard-accent">
        <div class="letter">A</div>
        <h3>Narrative Architecture</h3>
        <ul>
          <li>Core narrative: SSF as the institutional architecture that connects Indian scientific innovation to global-scale capital, told as a category claim, not a fund pitch</li>
          <li>Message hierarchy across Science, Innovation, and Capital: each with its own entry point into a single throughline</li>
          <li>Speaker narrative alignment across keynote, portfolio presentation, and open Q&A, one consistent story from opening to close</li>
          <li>Pre-event communication cadence, on-day flow, and post-event follow-up framework</li>
          <li>Delegate experience design: from invitation to what they carry home</li>
        </ul>
      </div>
      <div class="scard" style="border-top:3px solid var(--gold);">
        <div class="letter" style="color:var(--gold);">B</div>
        <h3>IFSCA Compliant Communication Design</h3>
        <ul>
          <li>Every communication touchpoint designed within IFSCA's framework for qualified investor communication: invitation copy, event script, verbal framework, post-event materials</li>
          <li>Clear guidance on what can and cannot be said in the room: no returns promises, no direct capital solicitation, no public offer language</li>
          <li>A private follow-up architecture for one-on-one LP conversations in the ten days after August 12th, where the actual conversion happens</li>
          <li>This is not a compliance exercise. It is the competitive advantage no other event partner SVP speaks to can offer</li>
        </ul>
      </div>
      <div class="scard scard-accent">
        <div class="letter">C</div>
        <h3>Brand Operations</h3>
        <ul>
          <li>Event brand identity elevation: reads as premium science-capital infrastructure, not a financial services pitch deck</li>
          <li>On-ground brand execution as SSF's strategic partner on the day</li>
        </ul>
      </div>
    </div>

    <div class="reveal" style="margin-top:2.5rem;">
      <svg viewBox="0 0 900 55" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED"/></marker></defs>
        <rect x="0" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="75" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">NARRATIVE BRIEF</text>
        <line x1="150" y1="27" x2="195" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
        <rect x="195" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="270" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">IFSCA FRAMEWORK</text>
        <line x1="345" y1="27" x2="390" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
        <rect x="390" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="465" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">SPEAKER PREP</text>
        <line x1="540" y1="27" x2="585" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
        <rect x="585" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
        <text x="660" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">EVENT EXECUTION</text>
        <line x1="735" y1="27" x2="780" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
        <rect x="780" y="7" width="120" height="40" rx="2" fill="#7C3AED"/>
        <text x="840" y="25" fill="white" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="700">POST-EVENT</text>
        <text x="840" y="37" fill="rgba(255,255,255,0.7)" font-size="7.5" font-family="Montserrat" text-anchor="middle">CONVERSION</text>
      </svg>
    </div>
  </div>
</section>

<!-- SECTION 3: WHAT CHANGES -->
<section class="sec dark-sec">
  <div class="sec-inner">
    <div class="section-label reveal">03 · What Changes</div>
    <h2 class="section-title reveal reveal-delay-1">Not more visibility.<br><strong>A category claim.</strong></h2>
    <p class="body-text reveal reveal-delay-2" style="color:rgba(255,255,255,0.6);">Design makes people look. Positioning makes people decide. August 12th needs to produce a decision, not just an impression.</p>

    <div class="ba-wrap reveal reveal-delay-3">
      <div class="ba-block">
        <div class="ba-label">Today</div>
        <div class="ba-text">SSF has a fund launch event. The audience will leave with a good impression and no clear next action.</div>
      </div>
      <div class="ba-arrow">→</div>
      <div class="ba-block">
        <div class="ba-label">After This Engagement</div>
        <div class="ba-text">SSF is recognised as the institutional architecture connecting Indian science to global-scale capital. The audience leaves with a conviction and a scheduled conversation.</div>
      </div>
    </div>

    <div class="outcomes reveal reveal-delay-4">
      <div class="oc">
        <div class="n">i.</div>
        <p>A brand identity that reads as premium and institutional to the specific qualified investor audience SVP is regulated to communicate with.</p>
      </div>
      <div class="oc">
        <div class="n">ii.</div>
        <p>A narrative spine that turns "raising a fund" into "building India's missing architecture." The story that makes capital allocators lean in and ask for the next conversation.</p>
      </div>
      <div class="oc">
        <div class="n">iii.</div>
        <p>One consistent brand experience from first invitation to post-event follow-up, with no gap between narrative, compliance, and execution.</p>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 4: INVESTMENT & TIMELINE -->
<section class="sec conf-sec">
  <div class="sec-inner" style="position:relative;z-index:1;">
    <div class="section-label reveal">04 · Investment and Timeline</div>
    <h2 class="section-title reveal reveal-delay-1">Scoped tight.<br><strong>Priced clean.</strong></h2>
    <p class="body-text reveal reveal-delay-2">The window between today and August 12th is the work. Every day of delay compresses the delivery quality. This engagement is designed to begin within the coming week.</p>

    <div class="inv-grid reveal reveal-delay-3">
      <div class="price-block">
        <div class="price-label">Engagement Investment</div>
        <div class="price-figure">&#8377;5,00,000<span> + GST</span></div>
        <p>Covers full brand narrative architecture, IFSCA compliant communication design, creative brief and oversight, speaker narrative preparation, on-ground brand execution on August 12th, and post-event follow-up architecture.</p>
        <p style="margin-top:0.8rem;font-size:0.78rem;color:var(--muted);">Payment: 50% on scope confirmation. 50% on August 12th.</p>
      </div>
      <div>
        <div class="section-label" style="margin-bottom:1rem;">Delivery Timeline</div>
        <div class="tl-item">
          <div class="tl-date">Week of Jul 18</div>
          <div class="tl-desc">Scope confirmation and kickoff. Narrative brief begins. IFSCA communication framework assessment initiated.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Jul 18 to 28</div>
          <div class="tl-desc">Narrative architecture delivered. Category claim, message hierarchy, speaker framework, and IFSCA compliant communication system.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Jul 28 to Aug 8</div>
          <div class="tl-desc">Invitation rollout, creative brief execution, speaker preparation, delegate experience design, event-day operational brief.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Aug 8 to 11</div>
          <div class="tl-desc">Final coordination, on-ground briefing, post-event follow-up architecture prepared and ready to activate.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Aug 12</div>
          <div class="tl-desc">SSF. On-ground brand execution as strategic partner.</div>
        </div>
        <div class="tl-item">
          <div class="tl-date">Aug 13 to 22</div>
          <div class="tl-desc">Post-event follow-up architecture activated. Private investor conversations facilitated.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION 5: BEYOND SSF -->
<section class="sec alt-bg">
  <div class="sec-inner">
    <div class="section-label reveal">05 · Beyond August 12th</div>
    <div class="reveal reveal-delay-1">
      <p class="bigquote">This engagement is scoped to SSF 2026 <span class="x">deliberately.</span> It is the right size to demonstrate how Magsmen works before either side commits to a larger conversation.</p>
    </div>
    <p class="body-text reveal reveal-delay-2">The brand strategy work SVP actually needs goes well beyond a single event. Positioning SVP as India's definitive distressed asset transformation platform, building founder thought leadership, structuring IFSCA compliant communication architecture for the full firm, and developing a brand framework that serves the fifty companies in the portfolio, this is a separate and larger engagement.</p>
    <p class="body-text reveal reveal-delay-3" style="margin-top:1rem;">August 12th is where we earn that conversation. Working together under real deadline pressure tells both sides more than any discovery meeting could.</p>
    <div class="tag-row reveal reveal-delay-4">
      <div class="pill">SSF 2026: The proof point</div>
      <div class="pill">SVP Brand Architecture: The larger conversation</div>
      <div class="pill">50 Portfolio Companies: The long-term opportunity</div>
    </div>
  </div>
</section>

<!-- FOUNDER NOTE -->
<section class="sec">
  <div class="sec-inner">
    <div class="section-label reveal">A Note from Sandeep N</div>
    <div class="founder-note reveal reveal-delay-1">
      <div class="fn-label">Founder, Magsmen Strategy Consultants</div>
      <p class="fn-text">Rakesh garu, I spent time understanding what SVP has actually built before walking into this conversation. What I found is this: the work SVP is doing, giving businesses a second chance when every conventional option has failed, is one of the rarest forms of conviction in Indian capital markets. Most funds invest in certainty. You invest in possibility.</p>
      <p class="fn-text" style="margin-top:0.9rem;">August 12th is not just a fund launch. It is the first time that conviction stands in front of people who have the scientific training to understand what you are actually doing. That room deserves a story built to match the quality of the thesis. Magsmen builds that story.</p>
      <p class="fn-text" style="margin-top:0.9rem;">What makes this engagement different from anything else you might consider is one thing: I am an enrolled advocate. I understand the IFSCA communication framework not as a constraint to work around, but as an architecture to build within. That changes what is possible on August 12th and beyond.</p>
      <div class="fn-sig">
        <div class="sig-svg-wrap">
          <svg viewBox="0 0 841.89 595.28" width="180" height="65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M596.48,234.17c0,0,28-6.22-5.33,30.22c0,0,48.44-29.33,116-129.78l-40.89,117.68c0,0,25.78-73.68,1.78-99.01s-56-12.89-56-12.89L734.7,98.61l-25.93,317.04c0,0,74.81-248.59,88.15-337.93" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
            <path d="M513.85,272.33c0,0,11.26-2.37,16.59-8.89c5.33-6.52-1.19-17.78-13.04-4.15c-11.85,13.63-1.78,22.52,10.67,18.37c12.44-4.15,29.04-14.06,32.59-24.81c3.56-10.75-6.52-8.21-12.44,0s-6.52,27.18,9.48,20.07s42.07-46.81,53.93-87.7l-58.67,168.89c0,0-36.74-50.96-191.41-35.56L685.7,267" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
            <path d="M361.56,182.26c2.56-3.94,15.16-25.72-28.44-28.44c-61.78,1.63-121.48,75.85-121.48,75.85s25.48-17.78,80.59-23.11s51.56,54.52,43.85,96.59s-47.71,161.78-47.71,161.78s28.15-37.33,21.04-90.67s-120.89-61.63-180.15-40.89C70,354.11,3.04,411.59,88.96,390.26c85.93-21.33,260.74-96,288.59-109.63c27.85-13.63,26.67-5.93,26.67-5.93s-13.63-7.7-31.41,14.81s26.07-5.33,26.07-5.33s-3.56,29.63,30.22-14.52l-5.33,21.56c0,0,28.89-32,27.78-24.89c-1.11,7.11-9.11,23.56-3.56,21.56s37.33-37.11,44.22-27.11c0,0-8.67-5.56-20.44,11.33s3.78,18.22,17.11,4.89s45.78-91.78,45.78-91.78l-38.44,98.22" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
          </svg>
        </div>
        <div class="fn-name">Sandeep N</div>
        <div class="fn-role">Founder, Magsmen Strategy Consultants · Enrolled Advocate · TEDx Speaker</div>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT MAGSMEN -->
<section class="sec alt-bg">
  <div class="sec-inner">
    <div class="section-label reveal">About Magsmen</div>
    <h2 class="section-title reveal reveal-delay-1"><strong>Strategy. Brand. Legal.</strong><br>Three disciplines. One firm.</h2>
    <div class="about-grid">
      <div>
        <p class="body-text reveal reveal-delay-2">Magsmen Strategy Consultants is an integrated strategy firm operating across brand architecture, business structuring, and legal brand protection. We are not a branding agency. We do not produce campaigns. We build the structural foundation that makes a brand commercially and legally defensible over time.</p>
        <div class="about-pillars reveal reveal-delay-3">
          <div class="pillar"><h4>Brand Architecture</h4><p>Category definition, positioning, narrative systems, and identity frameworks.</p></div>
          <div class="pillar"><h4>Business Structuring</h4><p>Commercial strategy, engagement architecture, and growth frameworks.</p></div>
          <div class="pillar"><h4>Legal Brand Protection</h4><p>Trademark strategy, IP governance, and regulatory communication compliance.</p></div>
          <div class="pillar"><h4>Regulatory Communication</h4><p>IFSCA, SEBI, and ASCI compliant brand communication design.</p></div>
        </div>
      </div>
      <div class="reveal reveal-delay-3">
        <div class="sandeep-card">
          <div class="sc-name">Sandeep N</div>
          <div class="sc-title">Founder and Principal Consultant</div>
          <p class="sc-cred">Enrolled Advocate. TEDx Speaker. Consultant of the Year 2023, The CEO Magazine. India Top 100 Admiring Marketing Leaders. Chair of the Jury, SMARTIES APAC Awards. MMA Global Awards jury member evaluating strategies for Google, Samsung, Apple, HUL, and Loreal. International MBA, Deakin University Melbourne. ASCI Member.</p>
          <div class="badge-row">
            <span class="badge">Enrolled Advocate</span>
            <span class="badge">TEDx Speaker</span>
            <span class="badge">Jury · MMA Global</span>
            <span class="badge">SMARTIES APAC Chair</span>
            <span class="badge">Deakin MBA 2024</span>
          </div>
        </div>
        <div style="margin-top:1rem;padding:1rem;background:var(--white);border:1px solid var(--line);">
          <div class="section-label" style="margin-bottom:0.7rem;">Selected Clients</div>
          <p style="font-size:0.78rem;font-weight:300;line-height:1.8;color:var(--body-text);">Kalanikethan · Telugu Foods · VSB Group · Tenali Double Horse · Suma Kanakala · Rajeev Kanakala · Dr. Srujana · Dr. Mamatha</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section class="closing">
  <div style="position:relative;z-index:1;">
    <div class="section-label" style="color:var(--violet-light);text-align:center;margin-bottom:1.5rem;">Next Step</div>
    <h2 class="closing-title">Confirm scope.<br><strong>The window between now and August 12th is the work.</strong></h2>
    <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20%E2%80%94%20Scope%20Confirmed&body=Dear%20Sandeep%2C%0A%0AWe%20would%20like%20to%20confirm%20the%20scope%20for%20the%20SSF%202026%20brand%20narrative%20engagement.%20Please%20arrange%20a%20kickoff%20call%20at%20your%20earliest%20convenience.%0A%0ARegards" class="closing-cta">Confirm This Engagement</a>
    <div class="closing-sub">sandeep@magsmen.com &nbsp;·&nbsp; connect@magsmen.com &nbsp;·&nbsp; www.magsmen.com</div>
    <div style="margin-top:3rem;opacity:0.12;">
      <svg viewBox="0 0 841.89 595.28" width="260" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M596.48,234.17c0,0,28-6.22-5.33,30.22c0,0,48.44-29.33,116-129.78l-40.89,117.68c0,0,25.78-73.68,1.78-99.01s-56-12.89-56-12.89L734.7,98.61l-25.93,317.04c0,0,74.81-248.59,88.15-337.93" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
        <path d="M513.85,272.33c0,0,11.26-2.37,16.59-8.89c5.33-6.52-1.19-17.78-13.04-4.15c-11.85,13.63-1.78,22.52,10.67,18.37c12.44-4.15,29.04-14.06,32.59-24.81c3.56-10.75-6.52-8.21-12.44,0s-6.52,27.18,9.48,20.07s42.07-46.81,53.93-87.7l-58.67,168.89c0,0-36.74-50.96-191.41-35.56L685.7,267" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
        <path d="M361.56,182.26c2.56-3.94,15.16-25.72-28.44-28.44c-61.78,1.63-121.48,75.85-121.48,75.85s25.48-17.78,80.59-23.11s51.56,54.52,43.85,96.59s-47.71,161.78-47.71,161.78s28.15-37.33,21.04-90.67s-120.89-61.63-180.15-40.89C70,354.11,3.04,411.59,88.96,390.26c85.93-21.33,260.74-96,288.59-109.63c27.85-13.63,26.67-5.93,26.67-5.93s-13.63-7.7-31.41,14.81s26.07-5.33,26.07-5.33s-3.56,29.63,30.22-14.52l-5.33,21.56c0,0,28.89-32,27.78-24.89c-1.11,7.11-9.11,23.56-3.56,21.56s37.33-37.11,44.22-27.11c0,0-8.67-5.56-20.44,11.33s3.78,18.22,17.11,4.89s45.78-91.78,45.78-91.78l-38.44,98.22" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
      </svg>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="f-brand">Magsmen Strategy Consultants &nbsp;·&nbsp; A division of Grofesion Innovations Pvt Ltd &nbsp;·&nbsp; www.magsmen.com</div>
  <div class="f-conf">Confidential · Not for circulation</div>
</footer>

<!-- CHATBOT -->
<button class="chat-btn" id="chatBtn" title="Ask Magsmen">
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.93 2 11.7c0 2.7 1.4 5.1 3.6 6.75V21l3.3-1.8c1 .28 2 .5 3.1.5 5.52 0 10-3.93 10-8.7S17.52 3 12 3z" fill="white"/></svg>
</button>
<div class="chat-panel" id="chatPanel">
  <div class="chat-head">
    <span>Ask Magsmen</span>
    <button class="chat-close" id="chatClose">✕</button>
  </div>
  <div class="chat-msgs" id="chatMsgs">
    <div class="chat-msg bot">Hello. I am the Magsmen assistant. Ask me about the SVP Science Fund engagement, the scope, or the investment.</div>
  </div>
  <div class="chat-input-row">
    <input type="text" id="chatInput" placeholder="Ask anything about this proposal…">
    <button id="chatSend">→</button>
  </div>
</div>
      ` }} />
    </div>
  );
}







// import { LayoutDashboard, Mail, AlertCircle, Loader2, ChevronRight } from 'lucide-react';
// import React, { FormEvent, useEffect, useRef,useState } from 'react';

// import emailjs from '@emailjs/browser';



// interface AnthropicResponse {
//   content?: { text: string }[];
// }

// interface UserData {
//   email: string;
// }

// /**
//  * Magsmen x SVP Science Fund — Brand Narrative Proposal
//  * React conversion. Same layout, same content, same color palette.
//  * Fully responsive: mobile phone, tablet, and desktop.
//  */

// export default function MagsmenSVPProposal() {
//   const rootRef = useRef<HTMLDivElement | null>(null);

//     // Authentication / Registration state
//     const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//     const [error, setError] = useState<string>('');
//     const [successMessage, setSuccessMessage] = useState<string>('');
//     const [isLoading, setIsLoading] = useState<boolean>(false);



//     const getUsers = (): UserData[] => {
//         return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
//     };

//     const saveUser = (user: UserData): void => {
//         const users = getUsers();
//         users.push(user);
//         localStorage.setItem('registeredUsers', JSON.stringify(users));
//     };

//     const findUser = (email: string): UserData | undefined => {
//         return getUsers().find((u) => u.email === email);
//     };


//  // ================= LOGIN =================

//  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   setError('');
//   setSuccessMessage('');
//   setIsLoading(true);

//   const formData = new FormData(e.currentTarget);
//   const email = (formData.get('email') as string)?.trim();

//   if (!email) {
//     setError('Please enter your email address.');
//     setIsLoading(false);
//     return;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     setError('Please enter a valid email address.');
//     setIsLoading(false);
//     return;
//   }

//   const existingUser = findUser(email);

//   try {
//     // 🔥 ALWAYS send email (both new + existing users)
//     await emailjs.send(
//       'service_9gmlg2q',
//       'template_p0q050i',
//       { email },
//       '-ePIcI6qQCURx5hAM'
//     );

//     if (existingUser) {
//       setSuccessMessage('Welcome back.');
//       setTimeout(() => setIsLoggedIn(true), 800);
//     } else {
//       saveUser({ email });
//       setSuccessMessage('Registered successfully.');
//       setTimeout(() => setIsLoggedIn(true), 1000);
//     }

//   } catch (err) {
//     setError('Something went wrong. Please try again.');
//   } finally {
//     setIsLoading(false);
//   }
// };
  
//   if (!isLoggedIn) {
//     return (
//          <div
//        className="relative min-h-screen bg-cover 
//                   bg-[position:90%_center] 
//                   md:bg-center 
//                   flex items-center justify-center md:justify-end 
//                   p-4 md:p-6 font-sans"
//        style={{
//          backgroundImage: `url('/assets/bg-for-lock.png')`
//        }}
//      >
//            {/* Optional overlay for better readability */}
//            <div className="absolute inset-0 bg-black/20"></div>
     
//            {/* LOGIN CARD */}
//            <div className="relative w-full max-w-md mr-0 md:mr-28 ">
//              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/30">
     
//                <div className="flex flex-col items-center mb-8 text-center">
//                  <div className="p-4 bg-slate-100 rounded-2xl mb-4 text-[#1E293B]">
//                    <LayoutDashboard className="w-8 h-8" />
//                  </div>
//                  <h1 className="text-xl font-bold text-[#1E293B] uppercase">
//                    Strategic Dashboard
//                  </h1>
//                  <p className="text-slate-500 text-sm mt-2">
//                    Enter your email to access
//                  </p>
//                </div>
     
//                <form onSubmit={handleLogin} className="space-y-6">
     
//                  <div>
//                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
//                      Email
//                    </label>
//                    <div className="relative mt-2">
//                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
//                        <Mail className="w-5 h-5" />
//                      </div>
//                      <input
//                        type="email"
//                        name="email"
//                        required
//                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E293B]/20"
//                        placeholder="example@email.com"
//                      />
//                    </div>
//                  </div>
     
//                  {error && (
//                    <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs">
//                      <AlertCircle className="w-4 h-4" />
//                      {error}
//                    </div>
//                  )}
     
//                  {successMessage && (
//                    <div className="text-green-600 bg-green-50 p-3 rounded-xl text-xs">
//                      {successMessage}
//                    </div>
//                  )}
     
//                  <button
//                    type="submit"
//                    disabled={isLoading}
//                    className="w-full bg-[#1E293B] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
//                  >
//                    {isLoading ? (
//                      <Loader2 className="w-5 h-5 animate-spin" />
//                    ) : (
//                      <>
//                        Access Dashboard
//                        <ChevronRight className="w-4 h-4" />
//                      </>
//                    )}
//                  </button>
//                </form>
//              </div>
//            </div>
//          </div>
//        );
//   }

//   useEffect(() => {
//     const root = rootRef.current;
//     if (!root) return;

//     // ---------- CURSOR ----------
//     const cursor = root.querySelector<HTMLDivElement>('#cursor');
//     const ring = root.querySelector<HTMLDivElement>('#cursorRing');
//     let mx: number = 0;
//     let my: number = 0;
//     let rx: number = 0;
//     let ry: number = 0;
//     let rafId: number | undefined;
//     const onMouseMove = (e: MouseEvent): void => {
//       mx = e.clientX;
//       my = e.clientY;
//     };
//     function animateCursor(): void {
//       rx += (mx - rx) * 0.12;
//       ry += (my - ry) * 0.12;
//       if (cursor) {
//         cursor.style.left = mx + 'px';
//         cursor.style.top = my + 'px';
//       }
//       if (ring) {
//         ring.style.left = rx + 'px';
//         ring.style.top = ry + 'px';
//       }
//       rafId = requestAnimationFrame(animateCursor);
//     }
//     document.addEventListener('mousemove', onMouseMove);
//     animateCursor();

//     // ---------- PROGRESS BAR ----------
//     const prog = root.querySelector<HTMLDivElement>('#progress');
//     const onScroll = (): void => {
//       const s = document.documentElement.scrollTop;
//       const h = document.documentElement.scrollHeight - window.innerHeight;
//       if (prog) prog.style.width = (h > 0 ? (s / h * 100) : 0) + '%';
//     };
//     window.addEventListener('scroll', onScroll);

//     // ---------- SCROLL REVEAL ----------
//     const reveals = root.querySelectorAll<HTMLElement>('.reveal');
//     const obs = new IntersectionObserver((entries) => {
//       entries.forEach((e) => {
//         if (e.isIntersecting) e.target.classList.add('visible');
//       });
//     }, { threshold: 0.1 });
//     reveals.forEach((el) => obs.observe(el));

//     // ---------- CHATBOT ----------
//     const chatBtn = root.querySelector<HTMLButtonElement>('#chatBtn');
//     const chatPanel = root.querySelector<HTMLElement>('#chatPanel');
//     const chatClose = root.querySelector<HTMLButtonElement>('#chatClose');
//     const chatInput = root.querySelector<HTMLInputElement | HTMLTextAreaElement>('#chatInput');
//     const chatSend = root.querySelector<HTMLButtonElement>('#chatSend');
//     const chatMsgs = root.querySelector<HTMLDivElement>('#chatMsgs');

//     const toggleChat = (): void => {
//       if (chatPanel) chatPanel.classList.toggle('open');
//     };
//     const closeChat = (): void => {
//       if (chatPanel) chatPanel.classList.remove('open');
//     };

//     async function sendMsg(): Promise<void> {
//       if (!chatInput || !chatMsgs) return;
//       const q = chatInput.value.trim();
//       if (!q) return;
//       const uDiv = document.createElement('div');
//       uDiv.className = 'chat-msg user';
//       uDiv.textContent = q;
//       chatMsgs.appendChild(uDiv);
//       chatInput.value = '';
//       chatMsgs.scrollTop = chatMsgs.scrollHeight;
//       try {
//         const res = await fetch('https://api.anthropic.com/v1/messages', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             model: 'claude-sonnet-4-6',
//             max_tokens: 1000,
//             system: 'You are the Magsmen assistant for the SVP Science Fund proposal. The engagement is a brand narrative and IFSCA compliant communication partnership for the SVP Science Fund August 12th event. Investment is Rs 5,00,000 plus GST. Scope covers narrative architecture, IFSCA compliant communication design, and brand operations. Respond warmly and directly. No dashes. No jargon. Use commas and full stops. Keep answers under 80 words.',
//             messages: [{ role: 'user', content: q }]
//           })
//         });
//         const data = (await res.json()) as AnthropicResponse;
//         const bDiv = document.createElement('div');
//         bDiv.className = 'chat-msg bot';
//         bDiv.textContent = (data.content && data.content[0])
//           ? data.content[0].text
//           : 'Thank you for your question. Please reach out to sandeep@magsmen.com for a detailed response.';
//         chatMsgs.appendChild(bDiv);
//         chatMsgs.scrollTop = chatMsgs.scrollHeight;
//       } catch (err) {
//         const bDiv = document.createElement('div');
//         bDiv.className = 'chat-msg bot';
//         bDiv.textContent = 'Please reach out directly at sandeep@magsmen.com for any questions about this proposal.';
//         chatMsgs.appendChild(bDiv);
//       }
//     }

//     const onKeydown = (e: Event): void => {
//       const event = e as KeyboardEvent;
//       if (event.key === 'Enter') sendMsg();
//     };

//     if (chatBtn) chatBtn.addEventListener('click', toggleChat);
//     if (chatClose) chatClose.addEventListener('click', closeChat);
//     if (chatSend) chatSend.addEventListener('click', sendMsg);
//     if (chatInput) chatInput.addEventListener('keydown', onKeydown);

//     return () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('scroll', onScroll);
//       if (rafId) cancelAnimationFrame(rafId);
//       obs.disconnect();
//       if (chatBtn) chatBtn.removeEventListener('click', toggleChat);
//       if (chatClose) chatClose.removeEventListener('click', closeChat);
//       if (chatSend) chatSend.removeEventListener('click', sendMsg);
//       if (chatInput) chatInput.removeEventListener('keydown', onKeydown);
//     };
//   }, []);




  

//   return (
//     <div ref={rootRef}>
//       <style>{`

// :root{
//   --violet:#7C3AED;
//   --violet-deep:#1A0A2E;
//   --violet-dark:#3B0764;
//   --violet-mid:#7C3AED;
//   --violet-light:#A78BFA;
//   --violet-pale:#EDE9FE;
//   --violet-glow:rgba(124,58,237,0.15);
//   --black:#0F0A1A;
//   --ink:#0F0A1A;
//   --ink-soft:#2D1E4F;
//   --body-text:#3D2D5C;
//   --muted:#7C6A9A;
//   --line:rgba(124,58,237,0.15);
//   --white:#FFFFFF;
//   --off-white:#F8F5FF;
//   --gold:#C5A572;
//   --font:'Montserrat',system-ui,sans-serif;
// }
// *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
// html{scroll-behavior:smooth;}
// body{font-family:var(--font);background:var(--white);color:var(--ink);overflow-x:hidden;cursor:none;}
// body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");opacity:0.4;}
// section{position:relative;z-index:1;}

// /* CURSOR */
// .cursor{width:8px;height:8px;background:var(--violet);border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform 0.1s;}
// .cursor-ring{width:32px;height:32px;border:1px solid rgba(124,58,237,0.5);border-radius:50%;position:fixed;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:transform 0.15s ease-out;}

// /* PROGRESS BAR */
// #progress{position:fixed;top:0;left:0;height:2px;background:var(--violet);z-index:999;transition:width 0.1s;}

// /* NAV */
// nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background:rgba(255,255,255,0.94);backdrop-filter:blur(20px);border-bottom:1px solid var(--line);}
// .nav-logo{display:flex;align-items:center;gap:0.6rem;}
// .logo-mark{width:32px;height:32px;background:var(--violet-dark);border-radius:4px;display:flex;align-items:center;justify-content:center;}
// .logo-mark svg{width:20px;height:20px;}
// .logo-text{display:flex;flex-direction:column;line-height:1.1;}
// .logo-text .brand{font-size:12px;font-weight:700;letter-spacing:0.18em;color:var(--ink);text-transform:uppercase;}
// .logo-text .sub{font-size:8px;font-weight:400;letter-spacing:0.14em;color:var(--muted);text-transform:uppercase;}
// .nav-tag{display:none;font-size:10px;font-weight:500;letter-spacing:0.12em;color:var(--muted);text-transform:uppercase;}
// .nav-cta{background:var(--violet);color:white;border:none;padding:0.5rem 1.2rem;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;border-radius:2px;cursor:pointer;transition:background 0.2s;text-decoration:none;display:inline-block;}
// .nav-cta:hover{background:#6D28D9;}
// @media(min-width:600px){.nav-tag{display:block;}}

// /* SCROLL REVEAL */
// .reveal{opacity:0;transform:translateY(28px);transition:opacity 0.7s ease,transform 0.7s ease;}
// .reveal.visible{opacity:1;transform:translateY(0);}
// .reveal-delay-1{transition-delay:0.12s;}
// .reveal-delay-2{transition-delay:0.22s;}
// .reveal-delay-3{transition-delay:0.32s;}
// .reveal-delay-4{transition-delay:0.42s;}

// /* SECTION LABELS */
// .section-label{font-size:9px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:var(--violet);margin-bottom:1rem;}
// .section-title{font-size:clamp(1.7rem,3.8vw,2.9rem);font-weight:300;line-height:1.1;color:var(--ink);margin-bottom:1.4rem;letter-spacing:-0.02em;}
// .section-title strong{font-weight:700;}
// .section-title em{font-style:italic;color:var(--violet);}
// .body-text{font-size:0.9rem;font-weight:300;line-height:1.85;color:var(--body-text);max-width:660px;}

// /* HERO */
// .hero{min-height:100vh;background:var(--violet-deep);display:flex;flex-direction:column;justify-content:space-between;padding:7rem 1.5rem 3.5rem;overflow:hidden;position:relative;}
// .hero-bg-glyph{position:absolute;right:-8vw;top:50%;transform:translateY(-50%);font-size:40vw;font-weight:700;color:rgba(255,255,255,0.025);line-height:1;pointer-events:none;user-select:none;letter-spacing:-0.05em;}
// .hero-eyebrow{display:flex;align-items:center;gap:1rem;margin-bottom:2.2rem;}
// .hero-eyebrow .tag{font-size:9px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(197,165,114,0.3);padding:0.35rem 0.9rem;border-radius:2px;}
// .hero-eyebrow .hline{flex:1;height:1px;background:rgba(255,255,255,0.1);max-width:80px;}
// .hero-title{font-size:clamp(2rem,5.5vw,4.2rem);font-weight:300;line-height:1.08;color:var(--white);letter-spacing:-0.025em;max-width:820px;margin-bottom:2rem;}
// .hero-title strong{font-weight:700;}
// .hero-title em{font-style:italic;color:var(--violet-light);}
// .hero-sub{font-size:0.9rem;font-weight:300;line-height:1.7;color:rgba(255,255,255,0.55);max-width:500px;margin-bottom:2.5rem;}
// .hero-cta{display:inline-block;background:var(--violet);color:white;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;padding:0.9rem 2.2rem;border-radius:2px;transition:background 0.2s,transform 0.2s;}
// .hero-cta:hover{background:#6D28D9;transform:scale(1.02);}
// .hero-meta{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem 2rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,0.1);}
// .hero-meta-item .label{font-size:8px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:0.3rem;}
// .hero-meta-item .value{font-size:0.85rem;font-weight:500;color:rgba(255,255,255,0.75);}
// @media(min-width:600px){
//   .hero{padding:8rem 3rem 4rem;}
//   .hero-meta{grid-template-columns:repeat(4,1fr);}
// }

// /* CONTENT SECTIONS */
// .sec{padding:4rem 1.5rem;}
// .sec-inner{max-width:1080px;margin:0 auto;}
// .alt-bg{background:var(--off-white);}
// .dark-sec{background:var(--violet-deep);color:var(--white);}
// .dark-sec .section-label{color:var(--violet-light);}
// .dark-sec .section-title{color:var(--white);}
// .dark-sec .body-text{color:rgba(255,255,255,0.65);}
// @media(min-width:600px){.sec{padding:5.5rem 2.5rem;}}
// @media(min-width:960px){.sec{padding:7rem 3rem;}}

// /* CONTEXT GRID */
// .ctx-grid{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:2.5rem;}
// .risk-box{border-left:2px solid var(--violet);padding:1.5rem 0 1.5rem 1.5rem;}
// .risk-box .rb-label{font-size:9px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:var(--violet);margin-bottom:0.8rem;}
// .risk-box p{font-size:0.87rem;font-weight:300;line-height:1.8;color:var(--body-text);}
// .risk-box p+p{margin-top:0.8rem;}
// @media(min-width:960px){.ctx-grid{grid-template-columns:1.15fr 0.85fr;gap:4rem;}}

// /* SCOPE CARDS */
// .scope-grid{display:grid;grid-template-columns:1fr;gap:2px;background:var(--line);margin-top:2.5rem;border:1px solid var(--line);}
// .scard{background:var(--white);padding:2.2rem 1.8rem;display:flex;flex-direction:column;}
// .scard .letter{font-size:2.2rem;font-weight:700;font-style:italic;color:var(--violet);margin-bottom:1rem;line-height:1;}
// .scard h3{font-size:0.88rem;font-weight:700;letter-spacing:0.02em;margin-bottom:1.2rem;line-height:1.4;color:var(--ink);}
// .scard ul{list-style:none;}
// .scard li{font-size:0.82rem;font-weight:300;line-height:1.7;color:var(--body-text);padding-left:1.1rem;position:relative;margin-bottom:0.7rem;}
// .scard li::before{content:'';position:absolute;left:0;top:0.6em;width:5px;height:1px;background:var(--violet);}
// .scard-accent{border-top:3px solid var(--violet);}
// .scard-gold{border-top:3px solid var(--gold);}
// @media(min-width:600px){.scope-grid{grid-template-columns:repeat(3,1fr);}}

// /* BEFORE AFTER */
// .ba-wrap{display:grid;grid-template-columns:1fr;gap:1.5rem;margin:2.5rem 0;max-width:820px;}
// .ba-block{padding:1.4rem 0;}
// .ba-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:0.7rem;}
// .ba-text{font-size:1.1rem;font-weight:300;line-height:1.5;color:var(--white);}
// .ba-arrow{color:var(--violet-light);font-size:1.5rem;display:flex;align-items:center;}
// @media(min-width:600px){.ba-wrap{grid-template-columns:1fr auto 1fr;align-items:center;}}

// /* OUTCOMES */
// .outcomes{display:grid;grid-template-columns:1fr;gap:1.5rem;max-width:920px;margin-top:1rem;}
// .oc{border-top:1px solid rgba(255,255,255,0.12);padding-top:1.2rem;}
// .oc .n{font-size:0.85rem;font-style:italic;color:var(--violet-light);margin-bottom:0.5rem;}
// .oc p{font-size:0.82rem;font-weight:300;line-height:1.7;color:rgba(255,255,255,0.65);}
// @media(min-width:600px){.outcomes{grid-template-columns:repeat(3,1fr);}}

// /* INVESTMENT */
// .inv-grid{display:grid;grid-template-columns:1fr;gap:2.5rem;margin-top:2rem;}
// .price-block{border:1px solid var(--ink);padding:2.2rem;}
// .price-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--violet);margin-bottom:0.8rem;}
// .price-figure{font-size:clamp(2.2rem,4vw,3.2rem);font-weight:300;color:var(--ink);margin:0.8rem 0 0.5rem;}
// .price-figure span{font-size:0.95rem;color:var(--muted);font-weight:400;}
// .price-block p{font-size:0.83rem;font-weight:300;line-height:1.7;color:var(--body-text);}
// .tl-item{display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--line);}
// .tl-item:last-child{border-bottom:none;}
// .tl-date{font-size:0.83rem;font-weight:600;font-style:italic;color:var(--violet);min-width:100px;padding-top:0.1rem;}
// .tl-desc{font-size:0.82rem;font-weight:300;line-height:1.6;color:var(--body-text);}
// @media(min-width:600px){.inv-grid{grid-template-columns:1fr 1fr;gap:4rem;}}

// /* BEYOND */
// .bigquote{font-size:clamp(1.3rem,3vw,2.1rem);font-weight:300;line-height:1.4;color:var(--ink);max-width:740px;margin:1.2rem 0 2rem;}
// .bigquote .x{color:var(--violet);font-style:italic;}
// .tag-row{display:flex;gap:0.7rem;flex-wrap:wrap;margin-top:1.5rem;}
// .pill{border:1px solid var(--ink);padding:0.5rem 1.1rem;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink);}

// /* FOUNDER NOTE */
// .founder-note{background:var(--off-white);padding:3rem 2rem;border-left:3px solid var(--violet);max-width:680px;margin:2.5rem auto;position:relative;}
// .fn-label{font-size:9px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;}
// .fn-text{font-size:0.88rem;font-weight:300;line-height:1.9;color:var(--body-text);}
// .fn-sig{margin-top:1.8rem;}
// .fn-name{font-size:0.85rem;font-weight:700;color:var(--ink);}
// .fn-role{font-size:0.78rem;font-weight:400;color:var(--muted);letter-spacing:0.05em;}
// .sig-svg-wrap{margin-top:0.6rem;}

// /* ABOUT */
// .about-grid{display:grid;grid-template-columns:1fr;gap:3rem;margin-top:2.5rem;}
// .about-pillars{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem;}
// .pillar{padding:1.2rem;background:var(--white);border:1px solid var(--line);}
// .pillar h4{font-size:0.78rem;font-weight:700;letter-spacing:0.05em;color:var(--ink);margin-bottom:0.4rem;}
// .pillar p{font-size:0.75rem;font-weight:300;line-height:1.6;color:var(--muted);}
// .sandeep-card{background:var(--white);border:1px solid var(--line);padding:1.8rem;}
// .sc-name{font-size:1rem;font-weight:700;color:var(--ink);margin-bottom:0.3rem;}
// .sc-title{font-size:0.78rem;font-weight:400;color:var(--violet);letter-spacing:0.05em;margin-bottom:1rem;}
// .sc-cred{font-size:0.78rem;font-weight:300;line-height:1.8;color:var(--body-text);}
// .badge-row{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:1.2rem;}
// .badge{font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:0.3rem 0.7rem;background:var(--violet-pale);color:var(--violet);border-radius:2px;}
// @media(min-width:960px){.about-grid{grid-template-columns:1fr 1fr;}}

// /* CLOSING */
// .closing{background:var(--violet-deep);padding:5rem 1.5rem;text-align:center;position:relative;overflow:hidden;}
// .closing-title{font-size:clamp(1.5rem,4vw,2.8rem);font-weight:300;color:var(--white);line-height:1.2;max-width:680px;margin:0 auto 2rem;}
// .closing-title strong{font-weight:700;}
// .closing-cta{display:inline-block;background:var(--white);color:var(--violet-deep);font-family:var(--font);font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:1rem 2.5rem;border-radius:2px;transition:transform 0.2s;margin-bottom:1rem;}
// .closing-cta:hover{transform:scale(1.03);}
// .closing-sub{font-size:0.8rem;font-weight:300;color:rgba(255,255,255,0.4);margin-top:1rem;}
// @media(min-width:600px){.closing{padding:7rem 3rem;}}

// /* FOOTER */
// footer{background:var(--ink);color:rgba(255,255,255,0.4);padding:1.8rem 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
// .f-brand{font-size:10px;font-weight:400;letter-spacing:0.08em;}
// .f-conf{font-size:9px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;}

// /* CONFIDENTIAL WATERMARK */
// .conf-sec{position:relative;}
// .conf-sec::after{content:'CONFIDENTIAL';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-30deg);font-size:4rem;font-weight:700;font-family:var(--font);color:rgba(124,58,237,0.04);letter-spacing:0.3em;pointer-events:none;white-space:nowrap;z-index:0;}

// /* TICKER */
// .ticker-wrap{background:var(--violet);overflow:hidden;padding:0.7rem 0;}
// .ticker-inner{display:flex;gap:0;white-space:nowrap;animation:ticker 28s linear infinite;}
// .ticker-inner span{font-size:9px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.75);padding:0 2.5rem;}
// .ticker-sep{color:rgba(255,255,255,0.3);}
// @keyframes ticker{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

// /* CHATBOT */
// .chat-btn{position:fixed;bottom:1.5rem;right:1.5rem;z-index:200;background:var(--violet);color:white;border:none;border-radius:50%;width:48px;height:48px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(124,58,237,0.4);transition:transform 0.2s;}
// .chat-btn:hover{transform:scale(1.08);}
// .chat-panel{position:fixed;bottom:4.5rem;right:1.5rem;z-index:200;width:calc(100vw - 3rem);max-width:320px;background:white;border:1px solid var(--line);border-radius:8px;box-shadow:0 8px 40px rgba(124,58,237,0.15);display:none;flex-direction:column;overflow:hidden;}
// .chat-panel.open{display:flex;}
// .chat-head{background:var(--violet-deep);padding:1rem 1.2rem;display:flex;justify-content:space-between;align-items:center;}
// .chat-head span{font-size:0.78rem;font-weight:600;color:white;letter-spacing:0.05em;}
// .chat-close{background:none;border:none;color:rgba(255,255,255,0.5);cursor:pointer;font-size:1rem;}
// .chat-msgs{height:220px;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:0.7rem;}
// .chat-msg{font-size:0.78rem;font-weight:300;line-height:1.6;padding:0.7rem 0.9rem;border-radius:6px;max-width:90%;}
// .chat-msg.bot{background:var(--violet-pale);color:var(--ink);align-self:flex-start;}
// .chat-msg.user{background:var(--violet);color:white;align-self:flex-end;}
// .chat-input-row{display:flex;border-top:1px solid var(--line);}
// .chat-input-row input{flex:1;border:none;padding:0.8rem 1rem;font-family:var(--font);font-size:0.78rem;outline:none;color:var(--ink);}
// .chat-input-row button{background:var(--violet);color:white;border:none;padding:0 1rem;cursor:pointer;font-size:0.85rem;}

// /* CTA BUTTON */
// .cta-btn{display:inline-block;background:var(--violet);color:white;font-family:var(--font);font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;padding:0.9rem 2.2rem;border-radius:2px;transition:background 0.2s,transform 0.2s;}
// .cta-btn:hover{background:#6D28D9;transform:scale(1.02);}

// /* EXTRA MOBILE + CROSS-DEVICE ALIGNMENT FIXES (added for React responsive pass) */
// html,body{max-width:100%;overflow-x:hidden;}
// img,svg{max-width:100%;height:auto;}
// .chat-panel{max-width:min(320px, calc(100vw - 2rem));}
// @media(max-width:380px){
//   .hero-title{font-size:clamp(1.6rem,8vw,2.4rem);}
//   .section-title{font-size:clamp(1.4rem,6vw,2rem);}
//   nav{padding:0.8rem 1rem;}
//   .sec{padding:3rem 1.1rem;}
//   .price-block{padding:1.4rem;}
//   .founder-note{padding:2rem 1.2rem;}
// }
// @media(hover:none){
//   body{cursor:auto;}
//   .cursor,.cursor-ring{display:none;}
// }

//       `}</style>
//       <div dangerouslySetInnerHTML={{ __html: `


// <div id="progress"></div>
// <div class="cursor" id="cursor"></div>
// <div class="cursor-ring" id="cursorRing"></div>

// <!-- NAV -->
// <nav>
//   <div class="nav-logo">
//     <img src="data:image/png;base64,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" alt="Magsmen Strategy Consultants" style="height:28px;width:auto;display:block;" />
//   </div>
//   <span class="nav-tag">Prepared for SVP Science Fund</span>
//   <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20Proposal%20%E2%80%94%20Confirm%20Scope&body=Dear%20Sandeep%2C%0A%0AWe%20have%20reviewed%20the%20proposal%20for%20the%20SVP%20Science%20Fund%20brand%20engagement%20and%20would%20like%20to%20confirm%20the%20scope.%0A%0AKindly%20arrange%20a%20call%20at%20your%20earliest%20convenience." class="nav-cta">Confirm Scope</a>
// </nav>

// <!-- HERO -->
// <section class="hero">
//   <div class="hero-bg-glyph">S</div>
//   <div style="position:relative;z-index:2;">
//     <div class="hero-eyebrow">
//       <span class="tag">Brand Narrative Proposal · 2026</span>
//       <div class="hline"></div>
//     </div>
//     <h1 class="hero-title">
//       India has the science.<br>
//       India has the capital.<br>
//       <em>August 12th is where they meet<br>as one story.</em>
//     </h1>
//     <p class="hero-sub">A brand narrative and IFSCA-compliant communication partnership for SVP Science Fund, prepared exclusively by Magsmen Strategy Consultants.</p>
//     <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20%E2%80%94%20Confirm%20Scope&body=Dear%20Sandeep%2C%0A%0AWe%20would%20like%20to%20confirm%20the%20scope%20for%20the%20SSF%202026%20engagement.%20Please%20arrange%20a%20call." class="hero-cta">Confirm This Engagement</a>

//     <!-- Finance network SVG sketch -->
//     <div style="margin-top:2.5rem;opacity:0.9;">
//       <svg viewBox="0 0 700 80" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="60" cy="40" r="18" stroke="#C4B5FD" stroke-width="1.4" stroke-dasharray="4 3" opacity="1"/>
//         <text x="60" y="44" fill="#EDE9FE" font-size="7" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">SCIENCE</text>
//         <line x1="78" y1="40" x2="180" y2="40" stroke="#A78BFA" stroke-width="1" stroke-dasharray="5 4" opacity=".7"/>
//         <circle cx="200" cy="40" r="22" fill="#7C3AED" fill-opacity=".25" stroke="#C4B5FD" stroke-width="1.4" opacity="1"/>
//         <text x="200" y="37" fill="#FFFFFF" font-size="6" font-family="Montserrat" text-anchor="middle" opacity="1" font-weight="700">SVP</text>
//         <text x="200" y="46" fill="#F5F3FF" font-size="5" font-family="Montserrat" text-anchor="middle" opacity=".95">SCIENCE FUND</text>
//         <line x1="222" y1="40" x2="320" y2="40" stroke="#A78BFA" stroke-width="1" stroke-dasharray="5 4" opacity=".7"/>
//         <circle cx="340" cy="40" r="18" stroke="#C4B5FD" stroke-width="1.4" stroke-dasharray="4 3" opacity="1"/>
//         <text x="340" y="44" fill="#EDE9FE" font-size="7" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">CAPITAL</text>
//         <line x1="200" y1="18" x2="200" y2="-10" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".5"/>
//         <text x="80" y="12" fill="#EDE9FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".9">August 12th</text>
//         <line x1="358" y1="35" x2="430" y2="20" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".6"/>
//         <circle cx="448" cy="16" r="12" stroke="#E9C46A" stroke-width="1.2" stroke-dasharray="3 3" opacity="1"/>
//         <text x="448" y="20" fill="#FDF0D5" font-size="6" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">INNOVATION</text>
//         <line x1="358" y1="46" x2="430" y2="62" stroke="#A78BFA" stroke-width="0.9" stroke-dasharray="3 4" opacity=".6"/>
//         <circle cx="448" cy="64" r="12" stroke="#C4B5FD" stroke-width="1.2" stroke-dasharray="3 3" opacity="1"/>
//         <text x="448" y="68" fill="#EDE9FE" font-size="6" font-family="Montserrat" text-anchor="middle" font-weight="700" opacity="1">DEEPTECH</text>
//         <text x="550" y="40" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">Narrative Architecture</text>
//         <text x="550" y="52" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">IFSCA Compliance</text>
//         <text x="550" y="64" fill="#D8B4FE" font-size="6" font-family="Montserrat" font-style="italic" opacity=".85">Brand Operations</text>
//       </svg>
//     </div>
//   </div>

//   <div class="hero-meta" style="position:relative;z-index:2;">
//     <div class="hero-meta-item"><div class="label">Prepared For</div><div class="value">SVP Science Fund</div></div>
//     <div class="hero-meta-item"><div class="label">Event Date</div><div class="value">12 August 2026</div></div>
//     <div class="hero-meta-item"><div class="label">Prepared By</div><div class="value">Magsmen Strategy Consultants</div></div>
//     <div class="hero-meta-item"><div class="label">Classification</div><div class="value">Confidential</div></div>
//   </div>
// </section>

// <!-- TICKER -->
// <div class="ticker-wrap">
//   <div class="ticker-inner">
//     <span>Brand Narrative Architecture</span><span class="ticker-sep">·</span>
//     <span>IFSCA Compliant Communication</span><span class="ticker-sep">·</span>
//     <span>Fund Launch Strategy</span><span class="ticker-sep">·</span>
//     <span>August 12 2026</span><span class="ticker-sep">·</span>
//     <span>SVP Science Fund</span><span class="ticker-sep">·</span>
//     <span>Magsmen Strategy Consultants</span><span class="ticker-sep">·</span>
//     <span>Brand Narrative Architecture</span><span class="ticker-sep">·</span>
//     <span>IFSCA Compliant Communication</span><span class="ticker-sep">·</span>
//     <span>Fund Launch Strategy</span><span class="ticker-sep">·</span>
//     <span>August 12 2026</span><span class="ticker-sep">·</span>
//     <span>SVP Science Fund</span><span class="ticker-sep">·</span>
//     <span>Magsmen Strategy Consultants</span><span class="ticker-sep">·</span>
//   </div>
// </div>

// <!-- SECTION 1: CONTEXT -->
// <section class="sec">
//   <div class="sec-inner">
//     <div class="section-label reveal">01 · Context</div>
//     <h2 class="section-title reveal reveal-delay-1">SSF is the first time this thesis <strong>stands in one room</strong> as a single story.</h2>

//     <!-- SVG: three pillars diagram -->
//     <div class="reveal reveal-delay-2" style="margin:1.5rem 0 2rem;">
//       <svg viewBox="0 0 900 70" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect x="0" y="10" width="260" height="50" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="130" y="32" fill="#3B0764" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">SCIENCE</text>
//         <text x="130" y="47" fill="#7C6A9A" font-size="7.5" font-family="Montserrat" text-anchor="middle">Reagene · Oneomics · Acasta</text>
//         <line x1="260" y1="35" x2="320" y2="35" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr1)"/>
//         <defs><marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED"/></marker></defs>
//         <rect x="320" y="5" width="260" height="60" rx="2" fill="#7C3AED"/>
//         <text x="450" y="30" fill="white" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">SVP SCIENCE FUND</text>
//         <text x="450" y="45" fill="rgba(255,255,255,0.65)" font-size="7.5" font-family="Montserrat" text-anchor="middle">India's missing architecture</text>
//         <text x="450" y="57" fill="rgba(255,255,255,0.5)" font-size="7" font-family="Montserrat" text-anchor="middle">August 12 · The first public proof</text>
//         <line x1="580" y1="35" x2="640" y2="35" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr1)"/>
//         <rect x="640" y="10" width="260" height="50" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="770" y="32" fill="#3B0764" font-size="9" font-family="Montserrat" text-anchor="middle" font-weight="700" letter-spacing="1">QUALIFIED CAPITAL</text>
//         <text x="770" y="47" fill="#7C6A9A" font-size="7.5" font-family="Montserrat" text-anchor="middle">Doctors · PhD Holders · Institutions</text>
//       </svg>
//     </div>

//     <div class="ctx-grid">
//       <div>
//         <p class="body-text reveal reveal-delay-2">SVP has built something rare in Indian capital markets. A thesis that bets on businesses the market has already written off. The SVP Science Fund is the next layer in that thesis. It brings the same conviction to India's deep science and innovation sector, where genuine intellectual capital exists but the right patient capital does not.</p>
//         <p class="body-text reveal reveal-delay-3" style="margin-top:1rem;">August 12th is the moment that thesis stands in front of a qualified audience for the first time as a single, coherent institution. Not a pitch. A proof. The room will be full of doctors and PhD holders who evaluate every claim with scientific precision. They will not be moved by projections. They will be moved by evidence, honesty, and the quality of thinking they encounter in that room.</p>
//       </div>
//       <div class="reveal reveal-delay-3">
//         <div class="risk-box">
//           <div class="rb-label">The Real Risk</div>
//           <p>Visibility is not the challenge. A good design agency can pack a room and produce a polished deck. The risk is credibility drift. August 12th reads as another fund-raising event rather than the announcement of the architecture India's science sector has been missing.</p>
//           <p>That distinction is not built with design. It is built with narrative, with proof, and with a communication framework that works precisely within the regulatory boundaries SVP operates under. That is the gap this engagement closes.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- SECTION 2: SCOPE -->
// <section class="sec alt-bg">
//   <div class="sec-inner">
//     <div class="section-label reveal">02 · Scope of Work</div>
//     <h2 class="section-title reveal reveal-delay-1">Three layers. <strong>One throughline.</strong> No gaps between them.</h2>
//     <p class="body-text reveal reveal-delay-2">Magsmen holds the strategic brief, the narrative consistency, and the IFSCA compliance architecture across every output. This is not event management. It is the work of making August 12th mean something to every person who leaves that room.</p>

//     <div class="scope-grid reveal reveal-delay-3">
//       <div class="scard scard-accent">
//         <div class="letter">A</div>
//         <h3>Narrative Architecture</h3>
//         <ul>
//           <li>Core narrative: SSF as the institutional architecture that connects Indian scientific innovation to global-scale capital, told as a category claim, not a fund pitch</li>
//           <li>Message hierarchy across Science, Innovation, and Capital: each with its own entry point into a single throughline</li>
//           <li>Speaker narrative alignment across keynote, portfolio presentation, and open Q&A, one consistent story from opening to close</li>
//           <li>Pre-event communication cadence, on-day flow, and post-event follow-up framework</li>
//           <li>Delegate experience design: from invitation to what they carry home</li>
//         </ul>
//       </div>
//       <div class="scard" style="border-top:3px solid var(--gold);">
//         <div class="letter" style="color:var(--gold);">B</div>
//         <h3>IFSCA Compliant Communication Design</h3>
//         <ul>
//           <li>Every communication touchpoint designed within IFSCA's framework for qualified investor communication: invitation copy, event script, verbal framework, post-event materials</li>
//           <li>Clear guidance on what can and cannot be said in the room: no returns promises, no direct capital solicitation, no public offer language</li>
//           <li>A private follow-up architecture for one-on-one LP conversations in the ten days after August 12th, where the actual conversion happens</li>
//           <li>This is not a compliance exercise. It is the competitive advantage no other event partner SVP speaks to can offer</li>
//         </ul>
//       </div>
//       <div class="scard scard-accent">
//         <div class="letter">C</div>
//         <h3>Brand Operations</h3>
//         <ul>
//           <li>Event brand identity elevation: reads as premium science-capital infrastructure, not a financial services pitch deck</li>
//           <li>On-ground brand execution as SSF's strategic partner on the day</li>
//         </ul>
//       </div>
//     </div>

//     <!-- Process flow SVG -->
//     <div class="reveal" style="margin-top:2.5rem;">
//       <svg viewBox="0 0 900 55" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7C3AED"/></marker></defs>
//         <rect x="0" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="75" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">NARRATIVE BRIEF</text>
//         <line x1="150" y1="27" x2="195" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
//         <rect x="195" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="270" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">IFSCA FRAMEWORK</text>
//         <line x1="345" y1="27" x2="390" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
//         <rect x="390" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="465" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">SPEAKER PREP</text>
//         <line x1="540" y1="27" x2="585" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
//         <rect x="585" y="12" width="150" height="30" rx="2" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
//         <text x="660" y="31" fill="#3B0764" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="600">EVENT EXECUTION</text>
//         <line x1="735" y1="27" x2="780" y2="27" stroke="#7C3AED" stroke-width="1" marker-end="url(#arr2)"/>
//         <rect x="780" y="7" width="120" height="40" rx="2" fill="#7C3AED"/>
//         <text x="840" y="25" fill="white" font-size="8" font-family="Montserrat" text-anchor="middle" font-weight="700">POST-EVENT</text>
//         <text x="840" y="37" fill="rgba(255,255,255,0.7)" font-size="7.5" font-family="Montserrat" text-anchor="middle">CONVERSION</text>
//       </svg>
//     </div>
//   </div>
// </section>

// <!-- SECTION 3: WHAT CHANGES -->
// <section class="sec dark-sec">
//   <div class="sec-inner">
//     <div class="section-label reveal">03 · What Changes</div>
//     <h2 class="section-title reveal reveal-delay-1">Not more visibility.<br><strong>A category claim.</strong></h2>
//     <p class="body-text reveal reveal-delay-2" style="color:rgba(255,255,255,0.6);">Design makes people look. Positioning makes people decide. August 12th needs to produce a decision, not just an impression.</p>

//     <div class="ba-wrap reveal reveal-delay-3">
//       <div class="ba-block">
//         <div class="ba-label">Today</div>
//         <div class="ba-text">SSF has a fund launch event. The audience will leave with a good impression and no clear next action.</div>
//       </div>
//       <div class="ba-arrow">→</div>
//       <div class="ba-block">
//         <div class="ba-label">After This Engagement</div>
//         <div class="ba-text">SSF is recognised as the institutional architecture connecting Indian science to global-scale capital. The audience leaves with a conviction and a scheduled conversation.</div>
//       </div>
//     </div>

//     <div class="outcomes reveal reveal-delay-4">
//       <div class="oc">
//         <div class="n">i.</div>
//         <p>A brand identity that reads as premium and institutional to the specific qualified investor audience SVP is regulated to communicate with.</p>
//       </div>
//       <div class="oc">
//         <div class="n">ii.</div>
//         <p>A narrative spine that turns "raising a fund" into "building India's missing architecture." The story that makes capital allocators lean in and ask for the next conversation.</p>
//       </div>
//       <div class="oc">
//         <div class="n">iii.</div>
//         <p>One consistent brand experience from first invitation to post-event follow-up, with no gap between narrative, compliance, and execution.</p>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- SECTION 4: INVESTMENT & TIMELINE -->
// <section class="sec conf-sec">
//   <div class="sec-inner" style="position:relative;z-index:1;">
//     <div class="section-label reveal">04 · Investment and Timeline</div>
//     <h2 class="section-title reveal reveal-delay-1">Scoped tight.<br><strong>Priced clean.</strong></h2>
//     <p class="body-text reveal reveal-delay-2">The window between today and August 12th is the work. Every day of delay compresses the delivery quality. This engagement is designed to begin within the coming week.</p>

//     <div class="inv-grid reveal reveal-delay-3">
//       <div class="price-block">
//         <div class="price-label">Engagement Investment</div>
//         <div class="price-figure">&#8377;5,00,000<span> + GST</span></div>
//         <p>Covers full brand narrative architecture, IFSCA compliant communication design, creative brief and oversight, speaker narrative preparation, on-ground brand execution on August 12th, and post-event follow-up architecture.</p>
//         <p style="margin-top:0.8rem;font-size:0.78rem;color:var(--muted);">Payment: 50% on scope confirmation. 50% on August 12th.</p>
//       </div>
//       <div>
//         <div class="section-label" style="margin-bottom:1rem;">Delivery Timeline</div>
//         <div class="tl-item">
//           <div class="tl-date">Week of Jul 18</div>
//           <div class="tl-desc">Scope confirmation and kickoff. Narrative brief begins. IFSCA communication framework assessment initiated.</div>
//         </div>
//         <div class="tl-item">
//           <div class="tl-date">Jul 18 to 28</div>
//           <div class="tl-desc">Narrative architecture delivered. Category claim, message hierarchy, speaker framework, and IFSCA compliant communication system.</div>
//         </div>
//         <div class="tl-item">
//           <div class="tl-date">Jul 28 to Aug 8</div>
//           <div class="tl-desc">Invitation rollout, creative brief execution, speaker preparation, delegate experience design, event-day operational brief.</div>
//         </div>
//         <div class="tl-item">
//           <div class="tl-date">Aug 8 to 11</div>
//           <div class="tl-desc">Final coordination, on-ground briefing, post-event follow-up architecture prepared and ready to activate.</div>
//         </div>
//         <div class="tl-item">
//           <div class="tl-date">Aug 12</div>
//           <div class="tl-desc">SSF. On-ground brand execution as strategic partner.</div>
//         </div>
//         <div class="tl-item">
//           <div class="tl-date">Aug 13 to 22</div>
//           <div class="tl-desc">Post-event follow-up architecture activated. Private investor conversations facilitated.</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- SECTION 5: BEYOND SSF -->
// <section class="sec alt-bg">
//   <div class="sec-inner">
//     <div class="section-label reveal">05 · Beyond August 12th</div>
//     <div class="reveal reveal-delay-1">
//       <p class="bigquote">This engagement is scoped to SSF 2026 <span class="x">deliberately.</span> It is the right size to demonstrate how Magsmen works before either side commits to a larger conversation.</p>
//     </div>
//     <p class="body-text reveal reveal-delay-2">The brand strategy work SVP actually needs goes well beyond a single event. Positioning SVP as India's definitive distressed asset transformation platform, building founder thought leadership, structuring IFSCA compliant communication architecture for the full firm, and developing a brand framework that serves the fifty companies in the portfolio, this is a separate and larger engagement.</p>
//     <p class="body-text reveal reveal-delay-3" style="margin-top:1rem;">August 12th is where we earn that conversation. Working together under real deadline pressure tells both sides more than any discovery meeting could.</p>
//     <div class="tag-row reveal reveal-delay-4">
//       <div class="pill">SSF 2026: The proof point</div>
//       <div class="pill">SVP Brand Architecture: The larger conversation</div>
//       <div class="pill">50 Portfolio Companies: The long-term opportunity</div>
//     </div>
//   </div>
// </section>

// <!-- FOUNDER NOTE -->
// <section class="sec">
//   <div class="sec-inner">
//     <div class="section-label reveal">A Note from Sandeep N</div>
//     <div class="founder-note reveal reveal-delay-1">
//       <div class="fn-label">Founder, Magsmen Strategy Consultants</div>
//       <p class="fn-text">Rakesh garu, I spent time understanding what SVP has actually built before walking into this conversation. What I found is this: the work SVP is doing, giving businesses a second chance when every conventional option has failed, is one of the rarest forms of conviction in Indian capital markets. Most funds invest in certainty. You invest in possibility.</p>
//       <p class="fn-text" style="margin-top:0.9rem;">August 12th is not just a fund launch. It is the first time that conviction stands in front of people who have the scientific training to understand what you are actually doing. That room deserves a story built to match the quality of the thesis. Magsmen builds that story.</p>
//       <p class="fn-text" style="margin-top:0.9rem;">What makes this engagement different from anything else you might consider is one thing: I am an enrolled advocate. I understand the IFSCA communication framework not as a constraint to work around, but as an architecture to build within. That changes what is possible on August 12th and beyond.</p>
//       <div class="fn-sig">
//         <div class="sig-svg-wrap">
//           <svg viewBox="0 0 841.89 595.28" width="180" height="65" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M596.48,234.17c0,0,28-6.22-5.33,30.22c0,0,48.44-29.33,116-129.78l-40.89,117.68c0,0,25.78-73.68,1.78-99.01s-56-12.89-56-12.89L734.7,98.61l-25.93,317.04c0,0,74.81-248.59,88.15-337.93" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//             <path d="M513.85,272.33c0,0,11.26-2.37,16.59-8.89c5.33-6.52-1.19-17.78-13.04-4.15c-11.85,13.63-1.78,22.52,10.67,18.37c12.44-4.15,29.04-14.06,32.59-24.81c3.56-10.75-6.52-8.21-12.44,0s-6.52,27.18,9.48,20.07s42.07-46.81,53.93-87.7l-58.67,168.89c0,0-36.74-50.96-191.41-35.56L685.7,267" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//             <path d="M361.56,182.26c2.56-3.94,15.16-25.72-28.44-28.44c-61.78,1.63-121.48,75.85-121.48,75.85s25.48-17.78,80.59-23.11s51.56,54.52,43.85,96.59s-47.71,161.78-47.71,161.78s28.15-37.33,21.04-90.67s-120.89-61.63-180.15-40.89C70,354.11,3.04,411.59,88.96,390.26c85.93-21.33,260.74-96,288.59-109.63c27.85-13.63,26.67-5.93,26.67-5.93s-13.63-7.7-31.41,14.81s26.07-5.33,26.07-5.33s-3.56,29.63,30.22-14.52l-5.33,21.56c0,0,28.89-32,27.78-24.89c-1.11,7.11-9.11,23.56-3.56,21.56s37.33-37.11,44.22-27.11c0,0-8.67-5.56-20.44,11.33s3.78,18.22,17.11,4.89s45.78-91.78,45.78-91.78l-38.44,98.22" stroke="#0F0A1A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//           </svg>
//         </div>
//         <div class="fn-name">Sandeep N</div>
//         <div class="fn-role">Founder, Magsmen Strategy Consultants · Enrolled Advocate · TEDx Speaker</div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- ABOUT MAGSMEN -->
// <section class="sec alt-bg">
//   <div class="sec-inner">
//     <div class="section-label reveal">About Magsmen</div>
//     <h2 class="section-title reveal reveal-delay-1"><strong>Strategy. Brand. Legal.</strong><br>Three disciplines. One firm.</h2>
//     <div class="about-grid">
//       <div>
//         <p class="body-text reveal reveal-delay-2">Magsmen Strategy Consultants is an integrated strategy firm operating across brand architecture, business structuring, and legal brand protection. We are not a branding agency. We do not produce campaigns. We build the structural foundation that makes a brand commercially and legally defensible over time.</p>
//         <div class="about-pillars reveal reveal-delay-3">
//           <div class="pillar">
//             <h4>Brand Architecture</h4>
//             <p>Category definition, positioning, narrative systems, and identity frameworks.</p>
//           </div>
//           <div class="pillar">
//             <h4>Business Structuring</h4>
//             <p>Commercial strategy, engagement architecture, and growth frameworks.</p>
//           </div>
//           <div class="pillar">
//             <h4>Legal Brand Protection</h4>
//             <p>Trademark strategy, IP governance, and regulatory communication compliance.</p>
//           </div>
//           <div class="pillar">
//             <h4>Regulatory Communication</h4>
//             <p>IFSCA, SEBI, and ASCI compliant brand communication design.</p>
//           </div>
//         </div>
//       </div>
//       <div class="reveal reveal-delay-3">
//         <div class="sandeep-card">
//           <div class="sc-name">Sandeep N</div>
//           <div class="sc-title">Founder and Principal Consultant</div>
//           <p class="sc-cred">Enrolled Advocate. TEDx Speaker. Consultant of the Year 2023, The CEO Magazine. India Top 100 Admiring Marketing Leaders. Chair of the Jury, SMARTIES APAC Awards. MMA Global Awards jury member evaluating strategies for Google, Samsung, Apple, HUL, and Loreal. International MBA, Deakin University Melbourne. ASCI Member.</p>
//           <div class="badge-row">
//             <span class="badge">Enrolled Advocate</span>
//             <span class="badge">TEDx Speaker</span>
//             <span class="badge">Jury · MMA Global</span>
//             <span class="badge">SMARTIES APAC Chair</span>
//             <span class="badge">Deakin MBA 2024</span>
//           </div>
//         </div>
//         <div style="margin-top:1rem;padding:1rem;background:var(--white);border:1px solid var(--line);">
//           <div class="section-label" style="margin-bottom:0.7rem;">Selected Clients</div>
//           <p style="font-size:0.78rem;font-weight:300;line-height:1.8;color:var(--body-text);">Kalanikethan · Telugu Foods · VSB Group · Tenali Double Horse · Suma Kanakala · Rajeev Kanakala · Dr. Srujana · Dr. Mamatha</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- CLOSING CTA -->
// <section class="closing">
//   <div style="position:relative;z-index:1;">
//     <div class="section-label" style="color:var(--violet-light);text-align:center;margin-bottom:1.5rem;">Next Step</div>
//     <h2 class="closing-title">
//       Confirm scope.<br>
//       <strong>The window between now and August 12th is the work.</strong>
//     </h2>
//     <a href="mailto:sandeep@magsmen.com,connect@magsmen.com?subject=SVP%20Science%20Fund%20%E2%80%94%20Scope%20Confirmed&body=Dear%20Sandeep%2C%0A%0AWe%20would%20like%20to%20confirm%20the%20scope%20for%20the%20SSF%202026%20brand%20narrative%20engagement.%20Please%20arrange%20a%20kickoff%20call%20at%20your%20earliest%20convenience.%0A%0ARegards" class="closing-cta">Confirm This Engagement</a>
//     <div class="closing-sub">sandeep@magsmen.com &nbsp;·&nbsp; connect@magsmen.com &nbsp;·&nbsp; www.magsmen.com</div>
//     <div style="margin-top:3rem;opacity:0.12;">
//       <svg viewBox="0 0 841.89 595.28" width="260" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M596.48,234.17c0,0,28-6.22-5.33,30.22c0,0,48.44-29.33,116-129.78l-40.89,117.68c0,0,25.78-73.68,1.78-99.01s-56-12.89-56-12.89L734.7,98.61l-25.93,317.04c0,0,74.81-248.59,88.15-337.93" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//         <path d="M513.85,272.33c0,0,11.26-2.37,16.59-8.89c5.33-6.52-1.19-17.78-13.04-4.15c-11.85,13.63-1.78,22.52,10.67,18.37c12.44-4.15,29.04-14.06,32.59-24.81c3.56-10.75-6.52-8.21-12.44,0s-6.52,27.18,9.48,20.07s42.07-46.81,53.93-87.7l-58.67,168.89c0,0-36.74-50.96-191.41-35.56L685.7,267" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//         <path d="M361.56,182.26c2.56-3.94,15.16-25.72-28.44-28.44c-61.78,1.63-121.48,75.85-121.48,75.85s25.48-17.78,80.59-23.11s51.56,54.52,43.85,96.59s-47.71,161.78-47.71,161.78s28.15-37.33,21.04-90.67s-120.89-61.63-180.15-40.89C70,354.11,3.04,411.59,88.96,390.26c85.93-21.33,260.74-96,288.59-109.63c27.85-13.63,26.67-5.93,26.67-5.93s-13.63-7.7-31.41,14.81s26.07-5.33,26.07-5.33s-3.56,29.63,30.22-14.52l-5.33,21.56c0,0,28.89-32,27.78-24.89c-1.11,7.11-9.11,23.56-3.56,21.56s37.33-37.11,44.22-27.11c0,0-8.67-5.56-20.44,11.33s3.78,18.22,17.11,4.89s45.78-91.78,45.78-91.78l-38.44,98.22" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"/>
//       </svg>
//     </div>
//   </div>
// </section>

// <!-- FOOTER -->
// <footer>
//   <div class="f-brand">Magsmen Strategy Consultants &nbsp;·&nbsp; A division of Grofesion Innovations Pvt Ltd &nbsp;·&nbsp; www.magsmen.com</div>
//   <div class="f-conf">Confidential · Not for circulation</div>
// </footer>

// <!-- CHATBOT -->
// <button class="chat-btn" id="chatBtn" title="Ask Magsmen">
//   <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.93 2 11.7c0 2.7 1.4 5.1 3.6 6.75V21l3.3-1.8c1 .28 2 .5 3.1.5 5.52 0 10-3.93 10-8.7S17.52 3 12 3z" fill="white"/></svg>
// </button>
// <div class="chat-panel" id="chatPanel">
//   <div class="chat-head">
//     <span>Ask Magsmen</span>
//     <button class="chat-close" id="chatClose">✕</button>
//   </div>
//   <div class="chat-msgs" id="chatMsgs">
//     <div class="chat-msg bot">Hello. I am the Magsmen assistant. Ask me about the SVP Science Fund engagement, the scope, or the investment.</div>
//   </div>
//   <div class="chat-input-row">
//     <input type="text" id="chatInput" placeholder="Ask anything about this proposal…">
//     <button id="chatSend">→</button>
//   </div>
// </div>


//       ` }} />
//     </div>
//   );
// }