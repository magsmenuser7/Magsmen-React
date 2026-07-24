import { LayoutDashboard, Mail, AlertCircle, Loader2, ChevronRight } from "lucide-react";
import React, { FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';





type UserData = {
  email: string;
};

/**
 * Skin Affair & Siyara — Project Status Presentation | Magsmen
 * Converted 1:1 from the original static HTML into a single React component.
 * Layout, copy, and color palette are unchanged. Purely presentational —
 * no interactivity in the source, so no state is needed.
 */

const GLOBAL_CSS = `
  .sa-deck-root {
    --bg:#0A0612;
    --bg2:#0F0A1A;
    --panel:#1A0A2E;
    --panel2:#241539;
    --gold:#C5A572;
    --purple:#7C3AED;
    --purple-dark:#5B21B6;
    --purple-light:#A78BFA;
    --lilac:#EDE9FE;
    --text:#F8F5FF;
    --muted:#8A7FA0;
    --green:#16A34A;
    --amber:#D97706;
    --red:#8b0000;
  }
  .sa-deck-root, .sa-deck-root *{box-sizing:border-box;margin:0;padding:0;}
  .sa-deck-root{
    background:var(--bg);
    color:var(--text);
    font-family:'Georgia','Times New Roman',serif;
    line-height:1.55;
  }
  .sa-deck-root .deck{max-width:1100px;margin:0 auto;}
  .sa-deck-root section{
    min-height:100vh;
    padding:70px 60px;
    border-bottom:1px solid rgba(197,165,114,0.15);
    position:relative;
  }
  .sa-deck-root .kicker{
    text-transform:uppercase;
    letter-spacing:3px;
    font-size:12px;
    color:var(--gold);
    font-family:Arial,sans-serif;
    margin-bottom:14px;
  }
  .sa-deck-root h1{font-size:44px;font-weight:400;color:var(--text);letter-spacing:1px;}
  .sa-deck-root h2{font-size:30px;font-weight:400;color:var(--gold);margin-bottom:8px;}
  .sa-deck-root h3{font-size:20px;font-weight:600;color:var(--purple-light);font-family:Arial,sans-serif;}
  .sa-deck-root p{color:var(--lilac);font-size:15.5px;}
  .sa-deck-root .subtitle{color:var(--muted);font-size:17px;margin-top:16px;font-family:Arial,sans-serif;max-width:640px;}

  /* Cover */
  .sa-deck-root #cover{
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:radial-gradient(circle at 20% 20%, #1A0A2E 0%, #0A0612 70%);
  }
  .sa-deck-root #cover .brandline{
    display:flex;gap:24px;align-items:center;margin-top:40px;
    font-family:Arial,sans-serif;font-size:13px;color:var(--muted);
    flex-wrap:wrap;
  }
  .sa-deck-root #cover .brandline span{color:var(--gold);}
  .sa-deck-root .divider{width:60px;height:2px;background:var(--gold);margin:22px 0;}

  /* Section header row */
  .sa-deck-root .sec-head{margin-bottom:40px;}

  /* Status pills */
  .sa-deck-root .pill{
    display:inline-block;
    padding:4px 14px;
    border-radius:20px;
    font-family:Arial,sans-serif;
    font-size:11.5px;
    font-weight:700;
    letter-spacing:0.5px;
    color:#fff;
  }
  .sa-deck-root .pill.complete{background:var(--green);}
  .sa-deck-root .pill.progress{background:var(--amber);}
  .sa-deck-root .pill.pending{background:var(--red);}

  /* Summary stat row */
  .sa-deck-root .stats{display:flex;gap:20px;margin-top:36px;flex-wrap:wrap;}
  .sa-deck-root .stat{
    background:var(--panel2);
    border:1px solid rgba(197,165,114,0.25);
    border-radius:10px;
    padding:22px 26px;
    flex:1;
    min-width:170px;
  }
  .sa-deck-root .stat .num{font-size:34px;color:var(--gold);font-family:Arial,sans-serif;font-weight:700;}
  .sa-deck-root .stat .label{font-family:Arial,sans-serif;font-size:12.5px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-top:6px;}

  /* Stage cards */
  .sa-deck-root .stage-card{
    background:var(--panel2);
    border-left:3px solid var(--purple);
    border-radius:6px;
    padding:22px 26px;
    margin-bottom:16px;
  }
  .sa-deck-root .stage-card.complete{border-left-color:var(--green);}
  .sa-deck-root .stage-card.progress{border-left-color:var(--amber);}
  .sa-deck-root .stage-card.pending{border-left-color:var(--red);opacity:0.88;}
  .sa-deck-root .stage-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap;}
  .sa-deck-root .stage-top h3{margin-bottom:6px;}
  .sa-deck-root .stage-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:14px;}
  .sa-deck-root .stage-grid .field-label{
    font-family:Arial,sans-serif;font-size:11px;text-transform:uppercase;
    letter-spacing:1px;color:var(--muted);margin-bottom:5px;
  }
  .sa-deck-root .stage-grid p{font-size:14px;}
  .sa-deck-root .note-box{
    margin-top:14px;
    background:rgba(197,165,114,0.08);
    border:1px dashed rgba(197,165,114,0.4);
    border-radius:6px;
    padding:14px 18px;
    font-size:13.5px;
    color:var(--gold);
  }
  @media(max-width:700px){.sa-deck-root .stage-grid{grid-template-columns:1fr;}}

  /* Deliverables list */
  .sa-deck-root .deliv-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px 30px;
    margin-top:30px;
  }
  .sa-deck-root .deliv-item{
    display:flex;align-items:center;gap:10px;
    font-family:Arial,sans-serif;font-size:14.5px;
    color:var(--lilac);
    padding:9px 0;
    border-bottom:1px solid rgba(255,255,255,0.06);
  }
  .sa-deck-root .deliv-item .check{color:var(--green);font-weight:700;}
  @media(max-width:700px){.sa-deck-root .deliv-grid{grid-template-columns:1fr;}}

  /* Two-column engagement compare */
  .sa-deck-root .compare{display:flex;gap:30px;margin-top:30px;flex-wrap:wrap;}
  .sa-deck-root .compare .col{
    flex:1;min-width:280px;
    background:var(--panel2);
    border-radius:10px;
    padding:26px;
    border-top:3px solid var(--gold);
  }
  .sa-deck-root .compare .col h3{margin-bottom:16px;}
  .sa-deck-root .compare .col .row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:Arial,sans-serif;font-size:13.5px;}
  .sa-deck-root .compare .col .row span:first-child{color:var(--muted);}

  /* Next actions */
  .sa-deck-root .actions{margin-top:30px;}
  .sa-deck-root .action-row{
    display:flex;gap:18px;align-items:flex-start;
    padding:16px 0;
    border-bottom:1px solid rgba(255,255,255,0.07);
  }
  .sa-deck-root .action-row .idx{
    font-family:Arial,sans-serif;font-weight:700;color:var(--gold);
    font-size:14px;min-width:26px;
  }
  .sa-deck-root .action-row p{font-size:14.5px;}
  .sa-deck-root .action-row .tag{
    font-family:Arial,sans-serif;font-size:11px;color:var(--purple-light);
    text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;
  }

  .sa-deck-root footer{
    text-align:center;padding:50px 20px 70px;
    font-family:Arial,sans-serif;color:var(--muted);font-size:12.5px;
  }
`;

// Reusable stage-card sub-component (keeps the big tracker sections tidy
// without changing any markup, classes, or copy)
function StageCard({
  status,
  title,
  completed,
  next,
  note,
}: {
  status: "complete" | "progress" | "pending";
  title: string;
  completed: string;
  next: string;
  note?: string;
}) {
  const statusLabel = status === "complete" ? "Complete" : status === "progress" ? "In Progress" : "Pending";
  return (
    <div className={`stage-card ${status}`}>
      <div className="stage-top">
        <h3>{title}</h3>
        <span className={`pill ${status}`}>{statusLabel}</span>
      </div>
      <div className="stage-grid">
        <div>
          <div className="field-label">Work Completed</div>
          <p>{completed}</p>
        </div>
        <div>
          <div className="field-label">Next Action</div>
          <p>{next}</p>
        </div>
      </div>
      {note && <div className="note-box">{note}</div>}
    </div>
  );
}

export default function SkinAffairProjectReport() {


    // Authentication / Registration state
        const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
        const [error, setError] = useState<string>('');
        const [successMessage, setSuccessMessage] = useState<string>('');
        const [isLoading, setIsLoading] = useState<boolean>(false);
    
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
    <div className="sa-deck-root">
      <style>{GLOBAL_CSS}</style>
      <div className="deck">
        {/* COVER */}
        <section id="cover">
          <div className="kicker">Magsmen Strategy Consultants — Client Status Presentation</div>
          <h1>Siyara by Skin Affair</h1>
          <p className="subtitle">
            A thank-you note in the shape of a status update. Across the Sub-Brand Creation and Stature Founder Personal Brand
            Retainer engagements, this is what the team has quietly built, stage by stage — and what's still ahead. Every line
            here represents real hours from people who cared about getting it right.
          </p>
          <div className="divider"></div>
          <div className="brandline">
            <div>
              Client: <span>Dr. Srujana Garu</span>
            </div>
            <div>
              Engagements: <span>Sub-Brand Creation (Siyara) · Stature Founder Retainer</span>
            </div>
            <div>
              Prepared by: <span>Magsmen Strategy Consultants</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section>
          <div className="sec-head">
            <div className="kicker">01 — Programme Overview</div>
            <h2>Where the two engagements stand today</h2>
            <p className="subtitle">
              The Sub-Brand team has moved through discovery, positioning, and identity with real momentum — most of the heavy
              lifting is done and done well. The Stature retainer is earlier in its journey, and the team is already several
              stages deep, building thoughtfully rather than rushing.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="num">8/11</div>
              <div className="label">Siyara Stages Complete</div>
            </div>
            <div className="stat">
              <div className="num">1/11</div>
              <div className="label">Siyara Stage In Progress</div>
            </div>
            <div className="stat">
              <div className="num">2/11</div>
              <div className="label">Siyara Stages Pending</div>
            </div>
            <div className="stat">
              <div className="num">1/10</div>
              <div className="label">Stature Stages Complete</div>
            </div>
            <div className="stat">
              <div className="num">7/10</div>
              <div className="label">Stature Stages In Progress</div>
            </div>
            <div className="stat">
              <div className="num">2/10</div>
              <div className="label">Stature Stages Pending</div>
            </div>
          </div>
        </section>

        {/* SUB-BRAND TRACKER */}
        <section>
          <div className="sec-head">
            <div className="kicker">02 — Sub-Brand Creation: Siyara</div>
            <h2>Stage-by-stage tracker</h2>
            <p className="subtitle">
              Every stage below was carried by strategists, designers, and coordinators who treated this brand like their own.
              Here's what they've delivered, and where their attention is going next.
            </p>
          </div>

          <StageCard
                      status="complete"
                      title="1. Discovery & Founder Intent Mapping"
                      completed="The team sat down with Dr. Srujana Garu for a proper discovery session — and it showed. Her vision, mission, target audience and goals were understood clearly, and the founder's intent was mapped with real care."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="2. Market & Category Intelligence"
                      completed="Thorough market research went into this — the team mapped the premium Hyderabad dermatology space in detail as part of building a strategy that would actually hold up."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="3. Business Feasibility Validation"
                      completed="A careful clinic profile analysis was done. The team reviewed patient experience and branding closely, and brought back positioning opportunities worth acting on."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="4. Strategic Positioning Development"
                      completed="The team developed and presented a full brand strategy, including a complete naming presentation, and walked the client through positioning across several meetings — genuinely collaborative work."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="5. Service & Value Architecture"
                      completed="Service and value architecture were woven into the brand strategy, backed by a thoughtful patient experience review and clinic branding analysis."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="6. Brand Identity Development"
                      completed="The design team put in real craft here — multiple logo concepts, revised carefully on feedback, a finalised colour palette and visual identity, plus brand assets, mood boards, and a profile sheet, all polished and ready."
                      next="Stage gate cleared — ensure founder has reviewed." note={undefined}          />

          <StageCard
                      status="complete"
                      title="7. Brand Communication Architecture"
                      completed="Visual style guidelines, typography, colours and brand personality were all clearly defined, with digital branding recommendations and content themes ready to go."
                      next="Finalise messaging hierarchy, brand story and tone of voice; prepare website strategic brief for the external developer." note={undefined}          />

          <StageCard
            status="progress"
            title="8. Customer Journey & Experience Design"
            completed="The team has been coordinating closely with the interior designer, recommending patient experience improvements and holding regular review meetings to keep implementation on track."
            next="Complete full patient journey mapping across all seven touchpoints; document operational gaps for the client to address before launch."
            note="Worth calling out: interior branding was never part of the original scope. The team stepped in anyway — sharing branding inputs, colour guidance and visual references, and reviewing the implementation — simply because they wanted the patient experience to feel as considered as everything else in this brand."
          />

          <StageCard
                      status="pending"
                      title="9. Operational Readiness Review"
                      completed="Interior branding coordination is progressing well, with the team continuing to monitor implementation closely."
                      next="Initiate a formal operational readiness checklist in coordination with the client's interior and technology teams." note={undefined}          />

          <StageCard
                      status="pending"
                      title="10. Team Training & Brand Orientation"
                      completed="Not yet started — this one's queued up right behind Stages 7 and 8."
                      next="Schedule the team training session once the operational readiness review is complete." note={undefined}          />

          <StageCard
                      status="pending"
                      title="11. Final Handover"
                      completed="Not yet reached — the team will bring the same care here once everything ahead of it is wrapped."
                      next="Complete Stages 8 and 9 before initiating final handover package preparation." note={undefined}          />
        </section>

        {/* STATURE TRACKER */}
        <section>
          <div className="sec-head">
            <div className="kicker">03 — Stature: Founder Personal Brand Retainer</div>
            <h2>Stage-by-stage tracker</h2>
            <p className="subtitle">
              This retainer moves at the pace of trust — and the strategists on it have been steady, consistent, and generous
              with their time. Here's the ground they've covered together.
            </p>
          </div>

          <StageCard
                      status="complete"
                      title="1. Discovery & Identity Mapping"
                      completed="The team took real time to understand Dr. Srujana Garu as a founder — reviewing her professional positioning and digital presence, and mapping her constraints and aspirations with genuine attentiveness."
                      next="Stage gate cleared — proceed to next stage." note={undefined}          />

          <StageCard
                      status="complete"
                      title="2. Visual Identity & Image Governance"
                      completed="Photoshoot requirements were carefully coordinated, and the creative concepts and marketing communication were reviewed with a sharp eye."
                      next="Produce the Image Assessment Report and prepare the Photography Brief for a professional portrait session aligned with positioning." note={undefined}          />

          <StageCard
                      status="progress"
                      title="3. Platform & Channel Strategy"
                      completed="A solid LinkedIn branding strategy has been planned, with thoughtful suggestions for digital communication and clear platform roles identified."
                      next="Complete the LinkedIn profile architecture (headline, about, banner, featured section) and confirm the platforms the founder will consistently maintain." note={undefined}          />

          <StageCard
                      status="progress"
                      title="4. Competitive & Category Positioning"
                      completed="The team reviewed the competitive landscape closely as part of the brand strategy, surfacing real PR and positioning opportunities."
                      next="Finalise the Positioning Territory Map identifying white space for the founder in the Hyderabad dermatology landscape." note={undefined}          />

          <StageCard
                      status="progress"
                      title="5. Perception Audit"
                      completed="Digital presence has been reviewed across platforms, PR opportunities identified, and a preliminary LinkedIn landscape review completed — good groundwork from the team."
                      next="Complete the full perception audit — peer interviews, Google audit and LinkedIn architecture analysis — and produce the Perception Audit Report and Gap Summary." note={undefined}          />

          <StageCard
                      status="progress"
                      title="6. Strategic Positioning Development"
                      completed="The founder branding strategy direction has been thoughtfully planned, LinkedIn branding and thought leadership work kicked off, and positioning improvements suggested along the way."
                      next="Develop and present the Personal Brand Positioning Statement; obtain written client confirmation before proceeding to Stage 7." note={undefined}          />

          <StageCard
                      status="progress"
                      title="7. Narrative Architecture"
                      completed="Content themes for digital platforms have been identified, with the content strategy carefully aligned to the brand's positioning direction."
                      next="Finalise the core story, content pillars and message hierarchy; obtain founder confirmation that the narrative feels authentic." note={undefined}          />

          <StageCard
                      status="pending"
                      title="8. Activation Roadmap"
                      completed="The team has already begun preliminary content planning and photoshoot coordination, laying the groundwork ahead of formal kickoff."
                      next="Develop and present the full Activation Roadmap; onboard and brief vendors for social media management, design and photography; obtain written client confirmation." note={undefined}          />

          <StageCard
                      status="pending"
                      title="9. Crisis Preparedness"
                      completed="Not yet started — the team will bring the same rigour here when its turn comes."
                      next="Develop the Crisis Preparedness Brief, including risk scenarios relevant to healthcare professionals and digital reputation management." note={undefined}          />

          <StageCard
                      status="progress"
                      title="10. Ongoing Governance & Measurement"
                      completed="The team has kept up regular review meetings and follow-ups with Dr. Srujana Garu, staying closely engaged with coordination and monitoring across both engagements."
                      next="Formalise the monthly and quarterly review cadence; set up the Brand Health Measurement Scorecard for quarterly reporting." note={undefined}          />
        </section>

        {/* DELIVERABLES */}
        <section>
          <div className="sec-head">
            <div className="kicker">04 — Deliverables Completed to Date</div>
            <h2>Sub-Brand Creation output log</h2>
          </div>
          <div className="deliv-grid">
            <div className="deliv-item">
              <span className="check">✓</span>Brand Discovery
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Brand Strategy Document
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Brand Name Exploration
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Brand Naming Presentation
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Final Brand Name (Siyara)
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Logo Concepts (multiple directions)
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Revised Logo Versions
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Colour Palette Exploration
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Brand Identity Development
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Visual Style Guidelines
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Mood Boards
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Brand Assets
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Profile Shoot
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Clinic Branding Analysis
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Interior Branding Coordination (design shared)
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Digital Branding Recommendations
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Content and Creative Planning
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Trademark Registration Recommendation
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>Flash Shoot — Awards
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>LinkedIn Profile Creation (3 posts published)
            </div>
            <div className="deliv-item">
              <span className="check">✓</span>PR Agency Coordination
            </div>
          </div>
        </section>

        {/* COMPARE / NEXT ACTIONS */}
        <section>
          <div className="sec-head">
            <div className="kicker">05 — What's Next</div>
            <h2>Priority actions across both engagements</h2>
          </div>
          <div className="actions">
            <div className="action-row">
              <div className="idx">01</div>
              <div>
                <div className="tag">Siyara — Stage 8</div>
                <p>Complete full patient journey mapping across all seven touchpoints and document operational gaps ahead of launch.</p>
              </div>
            </div>
            <div className="action-row">
              <div className="idx">02</div>
              <div>
                <div className="tag">Siyara — Stage 9</div>
                <p>Initiate the formal operational readiness checklist with the client's interior and technology teams.</p>
              </div>
            </div>
            <div className="action-row">
              <div className="idx">03</div>
              <div>
                <div className="tag">Stature — Stage 3</div>
                <p>Complete the LinkedIn profile architecture and confirm which platforms the founder will consistently maintain.</p>
              </div>
            </div>
            <div className="action-row">
              <div className="idx">04</div>
              <div>
                <div className="tag">Stature — Stage 5</div>
                <p>Complete the full perception audit and produce the Perception Audit Report and Gap Summary.</p>
              </div>
            </div>
            <div className="action-row">
              <div className="idx">05</div>
              <div>
                <div className="tag">Stature — Stage 6</div>
                <p>Present the Personal Brand Positioning Statement and secure written client confirmation.</p>
              </div>
            </div>
            <div className="action-row">
              <div className="idx">06</div>
              <div>
                <div className="tag">Stature — Stage 8</div>
                <p>Develop and present the full Activation Roadmap; onboard vendors and secure written client confirmation.</p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          Magsmen Strategy Consultants — a division of Grofesion Innovations Private Limited &nbsp;|&nbsp; Confidential Client Status
          Presentation
        </footer>
      </div>
    </div>
  );
}
