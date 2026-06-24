import React, { useState, useEffect, useRef, useCallback } from "react";
import newlogoblack from "/assets/magsmen-new-logo-black.png";
import Favi01 from '/assets/banners/Favi-light.svg';





/* ============================================================
   DATA — copied verbatim from the original HTML
   ============================================================ */

const DIAGNOSIS = [
  {
    num: "Problem 01",
    title: "Patients wait with no communication",
    desc: "When a patient arrives and waits without knowing how long or why, the clinical experience has already failed before Dr. Srujana walks in. No notification system means the patient's first emotional signal from Skin Affair is uncertainty. In a practice preparing for a premium tier, uncertainty is not an operational issue. It is a perception issue.",
    impact: "Impact: First impression is anxiety, not confidence",
  },
  {
    num: "Problem 02",
    title: "Post-treatment follow-up does not exist",
    desc: "A patient who receives a peel or a skin booster and hears nothing for two weeks will not return unless she initiates contact herself. Without a structured post-treatment system, Skin Affair is leaving retention, rebooking, and referrals to chance. This is the single biggest recoverable revenue gap in the current operation.",
    impact: "Impact: Retention loss and referral drop-off",
  },
  {
    num: "Problem 03",
    title: "Booking runs through WhatsApp with no record",
    desc: "When appointments live in WhatsApp conversations and phone memory, no one has a reliable picture of the day ahead. Gaps are missed. Patients who were supposed to receive reminders do not. The front desk starts every morning reactive rather than prepared. A clinic cannot run a premium first floor upstairs while the ground floor booking system operates from chat threads.",
    impact: "Impact: Wasted clinical time, patient frustration",
  },
  {
    num: "Problem 04",
    title: "Staff have no process to follow",
    desc: "When every team member decides individually how to handle a situation, the patient experience varies by shift and by who is at the front desk that day. The Justdial review that flagged a rude front desk interaction is not an isolated moment. It is the predictable outcome of a team that has never been given a clear standard to operate against.",
    impact: "Impact: Perception inconsistency and review risk",
  },
];

const JOURNEY = [
  {
    label: "Stage 01 — Pre-Visit",
    steps: [
      {
        broken: { title: "Booking", desc: "WhatsApp and phone. No record. No team visibility. No confirmation sent to patient.", tag: "No-shows are unmanaged. Team starts the day without clarity." },
        fixed: { title: "Booking (Rebuilt)", desc: "Single booking channel through clinic management tool. Appointment recorded and visible to the full team immediately.", tag: "Confirmed record. Team visibility. Zero ambiguity by end of day one." },
      },
      {
        broken: { title: "Confirmation and Reminder", desc: "Nothing is sent to the patient between booking and appointment day.", tag: "No-shows are unpredictable. Patients arrive unprepared." },
        fixed: { title: "Confirmation and Reminder (Rebuilt)", desc: "Automated confirmation sent at booking. Reminder sent 24 hours before. Pre-visit preparation instructions sent where clinically relevant.", tag: "No-shows reduced. Patients arrive prepared and expecting to be received." },
      },
    ],
  },
  {
    label: "Stage 02 — During Visit",
    steps: [
      {
        broken: { title: "Arrival and Check-In", desc: "Patient gives her name, is told to wait. No estimated time. No acknowledgement of her record or her appointment.", tag: "First in-clinic moment is passive and impersonal." },
        fixed: { title: "Arrival and Check-In (Rebuilt)", desc: "Patient is greeted by name, confirmed in the system, given an estimated wait time. Notification sent if wait exceeds 10 minutes.", tag: "Patient feels expected, not processed. Premium signal from the first second." },
      },
      {
        broken: { title: "Treatment Documentation", desc: "Clinical notes taken manually or not at all. No structured record connecting one visit to the next.", tag: "No continuity between visits. Every consultation starts from scratch." },
        fixed: { title: "Treatment Documentation (Rebuilt)", desc: "Structured digital patient record capturing treatment, products, observations, and the follow-up plan. Accessible and visible at the next visit.", tag: "Every visit builds on the last. Dr. Srujana walks in informed." },
      },
    ],
  },
  {
    label: "Stage 03 — Post-Visit",
    steps: [
      {
        broken: { title: "Post-Treatment Follow-Up", desc: "Nothing happens after the patient leaves. No message. No aftercare instructions. No rebooking prompt.", tag: "The most important retention window is completely unused." },
        fixed: { title: "Post-Treatment Automation (Rebuilt)", desc: "Automated 48-hour check-in. Treatment-specific aftercare instructions sent same day. Rebooking prompt triggered at the clinically correct interval per treatment type.", tag: "Patient feels cared for. Revenue from lapsed rebooking is recovered systematically." },
      },
      {
        broken: { title: "Review and Referral", desc: "No prompt for Google reviews. No referral mechanism. Happy patients are a silent opportunity that the clinic does not activate.", tag: "Word-of-mouth is left entirely to chance." },
        fixed: { title: "Review and Referral (Rebuilt)", desc: "Automated review request sent 5 days post-visit. Referral communication triggered after a patient's second visit. Tone is warm, not transactional.", tag: "Google rating grows. Referral channel activates. Both happen without staff effort." },
      },
    ],
  },
];

const TOOLS = [
  { num: "01", name: "Clinic Management App", purpose: "Practo, HealthPlix, or Doctify. Appointment scheduling, patient records, and prescription writing in one place. Selected after Phase 01 audit based on Skin Affair's specific workflow needs.", use: "Solves: booking chaos and absent patient records" },
  { num: "02", name: "WhatsApp Business API", purpose: "The primary patient communication channel. Booking confirmations, appointment reminders, arrival notifications, and post-treatment messages all delivered through WhatsApp. The patient uses the app she already has. The automation runs in the background.", use: "Solves: manual communication and zero notification system" },
  { num: "03", name: "Automation Platform", purpose: "Interakt or WATI. Manages multi-step message sequences triggered by treatment type, visit date, and patient status. A peel patient receives different aftercare messages than a Botox patient. Rebooking prompts fire at the clinically appropriate interval. All automatic.", use: "Solves: absent post-treatment follow-up and rebooking" },
  { num: "04", name: "Google Workspace", purpose: "Google Sheets for daily appointment view and staff reference. Google Drive for SOP storage and team access. Google Forms for patient intake. Free, familiar, zero training overhead. The operational backbone that connects everything else.", use: "Solves: absent daily operations structure" },
  { num: "05", name: "Google Business Profile", purpose: "The clinic already holds a 4.8 to 4.9 rating. The engagement sets up an automated post-visit review request sequence that goes to patients at the right time and in the right tone. This protects and grows the rating systematically rather than leaving it to the patient's initiative.", use: "Solves: passive review management" },
  { num: "06", name: "Patient Digital Record System", purpose: "Structured digital records capturing treatment, products used, clinical observations, and the follow-up plan per patient. Accessed at every subsequent visit to ensure continuity. The system that allows Dr. Srujana to walk into a consultation already informed rather than starting from memory.", use: "Solves: absent treatment documentation and continuity" },
  { num: "07", name: "Staff SOP Reference System", purpose: "Printed and digitally stored SOPs for every patient-facing role at every stage of the visit. Front desk, clinical assistant, and post-treatment protocols. Referenced daily. Updated as the system evolves. The tool that makes training stick after Magsmen leaves.", use: "Solves: daily improvisation and inconsistent patient experience" },
];

const TRAINING = [
  {
    role: "Front Desk Team",
    title: "The Patient's First Point of Contact",
    items: [
      "How to greet a patient by name and confirm their appointment",
      "How to communicate wait times clearly without over-promising",
      "How to use the clinic management tool for check-in and records",
      "How to handle an upset patient without escalating",
      "How to close a visit, confirm next appointment, and trigger the post-visit sequence",
      "When to call Dr. Srujana and when to resolve independently",
    ],
  },
  {
    role: "Clinical Assistants",
    title: "The Bridge Between Front Desk and Doctor",
    items: [
      "How to prepare the treatment room to the correct standard for each procedure",
      "How to brief Dr. Srujana on the patient before she enters the room",
      "How to document treatment in the patient record system",
      "How to deliver post-treatment instructions verbally before the patient leaves",
      "How to flag a patient concern to the doctor without creating anxiety in the waiting area",
      "Quality standards for room preparation, product handling, and hygiene protocol",
    ],
  },
  {
    role: "Dr. Srujana and the Full Team",
    title: "Running the Complete System Together",
    items: [
      "Technology walkthrough: every tool, every function, every team member",
      "How the seven tools connect and what happens when one breaks down",
      "How to read the daily dashboard: patient list, confirmations, outstanding follow-ups",
      "How to review automation performance: open rates, rebooking conversion, review count",
      "How to update an SOP when a process needs to change",
      "Supervised live run with Magsmen present to correct in real time",
    ],
  },
];

const PHASES = [
  {
    num: "Phase 01 — Days 1 to 10",
    title: "Audit and Design",
    weeks: "Shorter than standard because context already exists",
    body: "Magsmen enters the clinic, shadows the team for two to three days, and maps the exact current patient journey. Because the brand creation and Siyara engagement is already running, the team relationships, the founder philosophy, and the service architecture are already understood. The audit confirms the gaps and produces a precise operational design document: the seven tools selected, the journey mapped, and the training plan written. This phase is complete in ten days, not three weeks.",
    fast: "Faster if Dr. Srujana and team are available for shadow days in week one",
  },
  {
    num: "Phase 02 — Days 11 to 40",
    title: "Build, Configure and Train",
    weeks: "The core of the engagement — three weeks of build and training in parallel",
    body: "All seven tools are configured. The clinic management app is set up with patient categories, appointment types, and team access. The WhatsApp Business API and automation sequences are built, tested, and loaded. SOPs for all roles are written and reviewed with the team. Two structured training sessions are conducted: one for front desk, one for the full team including Dr. Srujana. Training is not left to the end. It runs alongside the build so the team is operating the system as it is created, not encountering it for the first time at handover.",
    fast: "Can compress to 20 days if team adoption in week one is strong",
  },
  {
    num: "Phase 03 — Days 41 to 60",
    title: "Activate and Hand Over",
    weeks: "System goes live with Magsmen present. Full handover at day 60.",
    body: "The system runs live with Magsmen available for real-time correction and adjustment. This is not a training phase. It is a confidence phase. The team knows the system. This period allows any edge case or exception to be handled with guidance before the handover. The engagement closes with the complete Skin Affair Operations Manual, all system credentials, and a 30-day post-handover WhatsApp support window. The clinic operates independently by day sixty. If staff alignment is strong and adoption is early, this phase can begin from day thirty-five.",
    fast: "45-day completion is realistic if phase two adoption is strong",
  },
];

const DELIVERABLES = [
  { n: "01", t: "Operational Diagnosis Report", s: "Current state audit, gap analysis, and the operational design for the rebuilt system." },
  { n: "02", t: "Complete Patient Journey Map", s: "Visual and written map of every touchpoint from booking to post-treatment follow-up, current and rebuilt states." },
  { n: "03", t: "Clinic Management Tool Setup", s: "Selected and configured platform with patient records, appointment categories, and team access fully operational." },
  { n: "04", t: "WhatsApp Automation Sequences", s: "Booking confirmation, 24-hour reminder, arrival notification, and all messages written in Skin Affair's brand voice." },
  { n: "05", t: "Post-Treatment Follow-Up System", s: "Treatment-specific aftercare sequences, rebooking prompts at correct clinical intervals, all loaded and live." },
  { n: "06", t: "Google Review Automation", s: "Review request sequence timed and toned to protect and grow the existing 4.8 to 4.9 Google rating." },
  { n: "07", t: "Staff SOPs for All Roles", s: "Written and printed standard operating procedures for front desk and clinical assistant at every stage of a patient visit." },
  { n: "08", t: "Patient Communication Templates", s: "All messages across all touchpoints written in brand voice. Appointment, wait, aftercare, follow-up, recall, and review request." },
  { n: "09", t: "Two Structured Training Sessions", s: "Front desk session covering their specific SOPs and tools. Full team session covering the complete integrated system." },
  { n: "10", t: "Supervised Live Run", s: "System runs live with Magsmen present. Edge cases handled in real time before handover." },
  { n: "11", t: "Skin Affair Operations Manual", s: "Complete reference document covering all processes, SOPs, tool credentials, and system instructions." },
  { n: "12", t: "30-Day Post-Handover Support", s: "WhatsApp access to Magsmen for 30 days after handover. Any process or technology question answered in real time." },
];

const RISK_AVOID = [
  "Siyara Lounge launching above an unstructured ground floor that undermines the premium claim",
  "Revenue lost to patients who do not return because no one followed up",
  "Negative reviews generated by front desk inconsistency",
  "Staff turnover collapsing operations because no process is documented",
  "Dr. Srujana's clinical time being wasted by booking and scheduling chaos",
];

const RISK_CREATE = [
  "A ground floor Skin Affair that operates consistently enough to support Siyara above it",
  "An automated retention system that recovers lapsed patients without staff effort",
  "A trained team that knows what to do at every step, regardless of who is on duty",
  "A documented operation that any new hire can be onboarded into within a week",
  "A clinic that runs as a system, not as Dr. Srujana's personal supervision",
];

const INVESTMENT_ITEMS = [
  { label: "Engagement Type", val: "Brand Expresso — Fixed Scope" },
  { label: "Duration", val: "45 to 60 Days" },
  { label: "Scope", val: "Ground Floor Skin Affair Only" },
  { label: "Payment Structure", val: "50% on confirmation. 50% on Phase 02 completion." },
  { label: "Technology Costs", val: "Paid directly by client to platforms. No markup." },
  { label: "Post-Handover Support", val: "30 days included. No additional charge." },
];

const PILLARS = [
  { t: "Brand Architecture", d: "Identity systems built for longevity" },
  { t: "Legal-Blended Strategy", d: "IP and governance from day one" },
  { t: "Operational Design", d: "Processes that teams actually follow" },
  { t: "Regional Intelligence", d: "Hyderabad and AP market depth" },
];

const CREDENTIALS = [
  "TEDx Speaker",
  "MMA Global Awards jury — Google, Samsung, Apple, HUL, Loreal",
  "Consultant of the Year 2023, The CEO Magazine",
  "India Top 100 Admiring Marketing Leaders",
  "Chair of the Jury, SMARTIES APAC Awards",
  "Enrolled advocate, legal-blended brand practice",
  "50+ brands architected across India",
];

const STRIP_TAGS = ["Disney+ Hotstar", "ASCI", "VIT-AP University", "Indian Red Cross"];

const SECTION_IDS = ["hero", "diagnosis", "journey", "tools", "training", "phases", "deliverables", "investment"];

const CONFIRM_MAILTO =
  "mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Skin%20Affair%20Brand%20Expresso%20Confirmation&body=Hello%2C%20I%20have%20reviewed%20the%20proposal%20and%20would%20like%20to%20confirm%20the%20engagement.";
const CONFIRM_MAILTO_LONG =
  "mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Skin%20Affair%20Brand%20Expresso%20Confirmation&body=Hello%20Sandeep%2C%0A%0AI%20would%20like%20to%20confirm%20the%20Brand%20Expresso%20engagement%20for%20Skin%20Affair.%20Please%20share%20the%20engagement%20agreement%20and%20the%20next%20steps.%0A%0AThank%20you.";
const QUESTION_MAILTO =
  "mailto:sandeep@magsmen.com,connect@magsmen.com?subject=Skin%20Affair%20Expresso%20Query&body=Hello%2C%20I%20have%20a%20question%20about%20the%20proposal.";

const CHAT_SYSTEM_PROMPT =
  "You are the Magsmen proposal assistant for the Skin Affair Brand Expresso engagement. This is a 45 to 60 day operational improvement project priced at INR 4 lakhs plus GST. It covers patient journey redesign, seven operational tools, staff training as the primary deliverable, notification automation, and post-treatment follow-up systems for Skin Affair Clinic in Hyderabad. The timeline can compress to 45 days if staff adopt the tools early. The client is Dr. Srujana Adabala. Magsmen is already engaged with Skin Affair on brand creation and Siyara Lounge, which is why the diagnosis phase is shorter than usual. Answer questions warmly and concisely in 2 to 3 sentences.";

/* ============================================================
   STYLES — ported 1:1 from the original <style> block, scoped
   under .sa-root to avoid collisions with the rest of an app.
   ============================================================ */
const CSS = `
.sa-root{margin:0;padding:0;box-sizing:border-box;font-family:'Montserrat',sans-serif;color:#0F0A1A;background:#FFFFFF;overflow-x:hidden;position:relative}
.sa-root *{box-sizing:border-box}
.sa-root{
  --v:#7C3AED;--vl:#EDE9FE;--vm:#A78BFA;--vd:#5B21B6;--vx:#1A0A2E;
  --tc:#0F0A1A;--ts:#4A4064;--tm:#8A7FA0;
  --bg:#FFFFFF;--bg2:#F8F5FF;
  --bdr:rgba(124,58,237,.13);
  --gold:#C5A572;
  --r8:8px;--r12:12px;--r20:20px;
}
.sa-root html{scroll-behavior:smooth}
.sa-prog{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--vm),var(--v),var(--vd));z-index:200;width:0;transition:width .1s}
.sa-nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--bdr);padding:.8rem 1.2rem;display:flex;align-items:center;justify-content:space-between}
.sa-nav-logo{display:flex;align-items:center;text-decoration:none}
.sa-nav-logo img{height:22px;display:block}
.sa-nav-tag{display:none;font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--tm)}
.sa-nav-cta{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:var(--v);border:none;border-radius:6px;padding:.45rem .95rem;cursor:pointer;text-decoration:none}
.sa-hero{min-height:100vh;padding:5rem 1.5rem 3rem;display:flex;flex-direction:column;justify-content:center;background:#fff;position:relative;overflow:hidden}
.sa-hero-art{display:none}
.sa-hero-eyebrow{font-size:.6rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--v);margin-bottom:1rem}
.sa-hero-client{font-size:.8rem;font-weight:600;letter-spacing:.1em;color:var(--gold);margin-bottom:.5rem;text-transform:uppercase}
.sa-hero h1{font-size:clamp(2.4rem,8vw,5.5rem);font-weight:700;line-height:1;letter-spacing:-.02em;color:var(--tc);margin-bottom:.75rem}
.sa-hero h1 span{color:var(--v)}
.sa-hero-tagline{font-size:clamp(.88rem,2.2vw,1.05rem);color:var(--ts);line-height:1.75;max-width:520px;margin-bottom:.85rem}
.sa-hero-obs{font-size:.88rem;font-style:italic;color:var(--v);line-height:1.7;max-width:520px;margin-bottom:2rem;padding-left:1rem;border-left:3px solid var(--v)}
.sa-hero-stats{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:2rem;max-width:420px}
.sa-hstat{background:var(--bg2);border-radius:var(--r8);padding:.85rem 1rem;border-top:3px solid var(--v)}
.sa-hstat-num{font-size:1.5rem;font-weight:700;color:var(--v);line-height:1}
.sa-hstat-label{font-size:.65rem;color:var(--tm);margin-top:.2rem}
.sa-hero-btns{display:flex;flex-wrap:wrap;gap:.75rem}
.sa-btn{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.75rem 1.5rem;border-radius:var(--r8);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem;border:none}
.sa-btn.sa-solid{background:var(--v);color:#fff;border:none}
.sa-btn.sa-ghost{background:transparent;color:var(--v);border:2px solid var(--v)}
.sa-ticker-wrap{background:var(--vx);overflow:hidden;padding:.55rem 0;white-space:nowrap}
.sa-ticker-inner{display:inline-flex;animation:sa-tick 28s linear infinite}
.sa-ticker-inner span{font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);padding:0 2rem}
.sa-ticker-inner .sa-dot{color:var(--vm)}
@keyframes sa-tick{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.sa-sec{padding:3.5rem 1.5rem}
.sa-sec-inner{max-width:1080px;margin:0 auto}
.sa-sec-alt{background:var(--bg2)}
.sa-sec-dark{background:var(--vx);color:#fff}
.sa-sec-label{font-size:.58rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--v);margin-bottom:.75rem}
.sa-sec-label.sa-lt{color:rgba(197,165,114,.9)}
.sa-sec h2{font-size:clamp(1.5rem,3.5vw,2.2rem);font-weight:700;line-height:1.15;margin-bottom:.75rem}
.sa-sec-lead{font-size:.93rem;color:var(--ts);line-height:1.75;max-width:640px;margin-bottom:2rem}
.sa-sec-dark .sa-sec-lead{color:rgba(255,255,255,.6)}
.sa-sec-dark h2{color:#fff}

/* DIAGNOSIS */
.sa-diag-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
.sa-diag-card{border-radius:var(--r12);padding:1.4rem;background:#fff;border:1px solid var(--bdr);border-left:4px solid var(--v)}
.sa-diag-num{font-size:.58rem;font-weight:700;letter-spacing:.12em;color:var(--v);margin-bottom:.4rem;text-transform:uppercase}
.sa-diag-title{font-size:1rem;font-weight:700;color:var(--tc);margin-bottom:.4rem}
.sa-diag-desc{font-size:.84rem;color:var(--ts);line-height:1.65}
.sa-diag-impact{font-size:.73rem;font-weight:600;color:var(--v);margin-top:.6rem;padding:.28rem .65rem;background:var(--vl);border-radius:20px;display:inline-block}

/* JOURNEY MAP */
.sa-journey-phase{margin-bottom:1.75rem}
.sa-jp-label{font-size:.6rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--v);margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}
.sa-jp-label::after{content:"";flex:1;height:1px;background:var(--bdr)}
.sa-jp-steps{display:grid;grid-template-columns:1fr;gap:.65rem}
.sa-jp-step{background:#fff;border:1px solid var(--bdr);border-radius:var(--r8);padding:.9rem 1rem;display:flex;gap:.85rem;align-items:flex-start}
.sa-jp-step.sa-broken{border-color:rgba(220,38,38,.2);background:rgba(254,242,242,.4)}
.sa-jp-step.sa-fixed{border-color:rgba(22,163,74,.2);background:rgba(240,253,244,.4)}
.sa-jp-icon{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.72rem;flex-shrink:0;font-weight:700}
.sa-jp-icon.sa-b{background:rgba(220,38,38,.1);color:#DC2626}
.sa-jp-icon.sa-f{background:rgba(22,163,74,.1);color:#16A34A}
.sa-jp-step-title{font-size:.85rem;font-weight:600;color:var(--tc);margin-bottom:.2rem}
.sa-jp-step-desc{font-size:.78rem;color:var(--ts);line-height:1.55}
.sa-jp-step-fix{font-size:.72rem;font-weight:600;color:#16A34A;margin-top:.3rem}
.sa-jp-step-break{font-size:.72rem;font-weight:600;color:#DC2626;margin-top:.3rem}

/* TOOLS GRID */
.sa-tools-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
.sa-tool-card{background:#fff;border:1px solid var(--bdr);border-radius:var(--r8);padding:1.1rem;display:flex;gap:1rem;align-items:flex-start}
.sa-tool-num{width:34px;height:34px;border-radius:var(--r8);background:var(--vl);color:var(--v);font-size:.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sa-tool-name{font-size:.92rem;font-weight:700;color:var(--tc);margin-bottom:.25rem}
.sa-tool-purpose{font-size:.8rem;color:var(--ts);line-height:1.55}
.sa-tool-use{font-size:.72rem;font-weight:600;color:var(--v);margin-top:.35rem}

/* TRAINING SECTION */
.sa-training-grid{display:grid;grid-template-columns:1fr;gap:.75rem;margin-top:1.25rem}
.sa-training-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:var(--r12);padding:1.25rem;border-left:4px solid var(--gold)}
.sa-training-role{font-size:.62rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem}
.sa-training-title{font-size:.95rem;font-weight:700;color:#fff;margin-bottom:.5rem}
.sa-training-items{display:flex;flex-direction:column;gap:.3rem}
.sa-training-item{font-size:.8rem;color:rgba(255,255,255,.65);padding-left:.8rem;position:relative;line-height:1.5}
.sa-training-item::before{content:"";position:absolute;left:0;top:.5rem;width:4px;height:4px;border-radius:50%;background:var(--gold)}

/* PHASES */
.sa-phase-grid{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.5rem}
.sa-phase-card{border-radius:var(--r12);padding:1.4rem;border:1px solid var(--bdr);background:#fff;border-top:4px solid var(--v);cursor:pointer;transition:all .2s}
.sa-phase-card:hover,.sa-phase-card.sa-act{background:var(--vl);border-color:var(--v)}
.sa-phase-num{font-size:.58rem;font-weight:700;letter-spacing:.14em;color:var(--v);margin-bottom:.4rem;text-transform:uppercase}
.sa-phase-title{font-size:1rem;font-weight:700;color:var(--tc);margin-bottom:.3rem}
.sa-phase-weeks{font-size:.72rem;color:var(--tm);margin-bottom:.6rem}
.sa-phase-body{font-size:.83rem;color:var(--ts);line-height:1.65}
.sa-phase-fast{font-size:.75rem;font-weight:600;color:var(--v);margin-top:.6rem;padding:.28rem .65rem;background:var(--vl);border-radius:20px;display:inline-block}

/* DELIVERABLES */
.sa-deliv-grid{display:grid;grid-template-columns:1fr;gap:.7rem;margin-top:1.25rem}
.sa-deliv-item{background:#fff;border:1px solid var(--bdr);border-radius:var(--r8);padding:1rem;display:flex;gap:.8rem;align-items:flex-start}
.sa-deliv-num{width:28px;height:28px;border-radius:50%;background:var(--vl);color:var(--v);font-size:.7rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sa-deliv-text{font-size:.85rem;color:var(--tc);font-weight:600;flex:1}
.sa-deliv-sub{font-size:.75rem;color:var(--ts);margin-top:.2rem;line-height:1.5}

/* INVESTMENT */
.sa-inv-card{background:var(--vx);border-radius:var(--r20);padding:2rem;margin-top:1.5rem}
.sa-inv-total{font-size:2.8rem;font-weight:700;color:var(--gold);line-height:1;margin-bottom:.25rem}
.sa-inv-label{font-size:.78rem;color:rgba(255,255,255,.45);margin-bottom:1.5rem}
.sa-inv-grid{display:grid;grid-template-columns:1fr;gap:.7rem}
.sa-inv-item{background:rgba(255,255,255,.05);border-radius:var(--r8);padding:.9rem 1rem;border:1px solid rgba(255,255,255,.07)}
.sa-inv-item-label{font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.38);margin-bottom:.25rem}
.sa-inv-item-val{font-size:.88rem;font-weight:600;color:#fff}
.sa-inv-note{font-size:.78rem;color:rgba(255,255,255,.38);line-height:1.6;margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.07)}

/* RISK/VALUE */
.sa-rv-split{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:1.25rem}
.sa-rv-col{border-radius:var(--r12);padding:1.4rem;background:#fff;border:1px solid var(--bdr)}
.sa-rv-avoid{border-top:3px solid #DC2626}
.sa-rv-create{border-top:3px solid #16A34A}
.sa-rv-col-label{font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.85rem}
.sa-rv-avoid .sa-rv-col-label{color:#DC2626}
.sa-rv-create .sa-rv-col-label{color:#16A34A}
.sa-rv-item{padding:.5rem 0;border-bottom:1px solid var(--bdr);font-size:.82rem;color:var(--ts);line-height:1.5}
.sa-rv-item:last-child{border-bottom:none}

/* FOUNDER */
.sa-founder-card{background:#fff;border:1px solid var(--bdr);border-radius:var(--r20);padding:2rem;position:relative;overflow:hidden}
.sa-founder-label{font-size:.6rem;font-weight:700;letter-spacing:.18em;color:var(--v);text-transform:uppercase;margin-bottom:1rem}
.sa-founder-text{font-size:.93rem;line-height:1.8;color:var(--ts);margin-bottom:1.5rem;font-style:italic}
.sa-founder-name{font-size:.88rem;font-weight:700;color:var(--tc)}
.sa-founder-title{font-size:.7rem;color:var(--tm)}

/* ABOUT */
.sa-about-split{display:grid;grid-template-columns:1fr;gap:2rem;margin-top:1.5rem}
.sa-pillar-grid{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin-top:1rem}
.sa-pillar{background:var(--bg2);border-radius:var(--r8);padding:.85rem;border-top:2px solid var(--v)}
.sa-pillar-t{font-size:.78rem;font-weight:700;color:var(--tc);margin-bottom:.2rem}
.sa-pillar-d{font-size:.7rem;color:var(--tm);line-height:1.5}
.sa-sandeep-card{background:var(--bg2);border-radius:var(--r12);padding:1.25rem;border:1px solid var(--bdr)}
.sa-sandeep-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem}
.sa-sandeep-av{width:44px;height:44px;border-radius:50%;background:var(--v);display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;flex-shrink:0}
.sa-sandeep-name{font-size:.88rem;font-weight:700;color:var(--tc)}
.sa-sandeep-role{font-size:.68rem;color:var(--tm)}
.sa-cred-list{display:flex;flex-direction:column;gap:.4rem}
.sa-cred-item{font-size:.74rem;color:var(--ts);line-height:1.45;padding-left:.85rem;position:relative}
.sa-cred-item::before{content:"";position:absolute;left:0;top:.45rem;width:4px;height:4px;border-radius:50%;background:var(--v)}
.sa-strip{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.75rem}
.sa-strip-tag{font-size:.62rem;font-weight:600;background:var(--vl);color:var(--vd);border-radius:20px;padding:.25rem .7rem;border:1px solid var(--bdr)}

/* CTA */
.sa-cta-sec{background:var(--vx);padding:4rem 1.5rem;text-align:center}
.sa-cta-sec h2{font-size:clamp(1.4rem,3.5vw,2rem);font-weight:700;color:#fff;margin-bottom:1rem}
.sa-cta-sec p{font-size:.88rem;color:rgba(255,255,255,.5);max-width:480px;margin:0 auto 2rem;line-height:1.75}
.sa-cta-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem}
.sa-foot{background:#0A0612;padding:2.5rem 1.5rem;color:rgba(255,255,255,.35)}
.sa-footer-inner{max-width:1080px;margin:0 auto}
.sa-footer-top{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.25rem}
.sa-footer-logo img{height:18px;opacity:.55;filter:brightness(10)}
.sa-footer-links{display:flex;flex-wrap:wrap;gap:.4rem 1rem}
.sa-footer-links a{font-size:.68rem;color:rgba(255,255,255,.28);text-decoration:none}
.sa-footer-bottom{font-size:.62rem;border-top:1px solid rgba(255,255,255,.05);padding-top:.85rem;line-height:1.7}
.sa-sdots{display:none;position:fixed;right:.75rem;top:50%;transform:translateY(-50%);flex-direction:column;gap:.45rem;z-index:90}
.sa-sdot{width:7px;height:7px;border-radius:50%;background:var(--bdr);border:1px solid var(--vm);cursor:pointer;transition:all .25s}
.sa-sdot.sa-act{background:var(--v);transform:scale(1.3)}
.sa-chat-btn{position:fixed;bottom:1.5rem;right:1.5rem;width:46px;height:46px;border-radius:50%;background:var(--v);border:none;cursor:pointer;z-index:95;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(124,58,237,.4)}
.sa-chat-btn svg{width:20px;height:20px;fill:#fff}
.sa-chat-panel{display:none;position:fixed;bottom:4.5rem;right:1.5rem;width:92vw;max-width:320px;background:#fff;border:1px solid var(--bdr);border-radius:var(--r20);box-shadow:0 8px 32px rgba(0,0,0,.12);z-index:94;flex-direction:column;overflow:hidden}
.sa-chat-panel.sa-open{display:flex}
.sa-chat-head{background:var(--vx);padding:.85rem 1rem;display:flex;align-items:center;justify-content:space-between}
.sa-chat-head-title{font-size:.75rem;font-weight:600;color:#fff}
.sa-chat-close{background:none;border:none;color:rgba(255,255,255,.5);cursor:pointer;font-size:1rem}
.sa-chat-msgs{padding:.85rem;min-height:100px;max-height:200px;overflow-y:auto;display:flex;flex-direction:column;gap:.5rem}
.sa-cmsg{font-size:.78rem;line-height:1.5;padding:.55rem .75rem;border-radius:9px;max-width:88%}
.sa-cmsg.sa-bot{background:var(--bg2);color:var(--tc);align-self:flex-start}
.sa-cmsg.sa-user{background:var(--v);color:#fff;align-self:flex-end}
.sa-chat-form{display:flex;border-top:1px solid var(--bdr);padding:.45rem}
.sa-chat-in{flex:1;border:none;outline:none;font-size:.78rem;font-family:inherit;padding:.35rem .5rem;color:var(--tc)}
.sa-chat-send{background:var(--v);color:#fff;border:none;border-radius:5px;padding:.35rem .7rem;cursor:pointer;font-size:.72rem;font-weight:600}
.sa-reveal{opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s ease}
.sa-reveal.sa-vis{opacity:1;transform:none}
.sa-root::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:999;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E");opacity:.4}
@media print{.sa-chat-btn,.sa-chat-panel,.sa-sdots,.sa-prog,.sa-nav{display:none!important}.sa-reveal{opacity:1!important;transform:none!important}}
@media(min-width:600px){
  .sa-nav-tag{display:block}
  .sa-hero{padding:7rem 2.5rem 4rem}
  .sa-hero-art{display:block;position:absolute;top:0;right:0;width:50%;height:100%;z-index:0;pointer-events:none}
  .sa-hero-content{position:relative;z-index:2;max-width:520px}
  .sa-sec{padding:5rem 2.5rem}
  .sa-diag-grid{grid-template-columns:1fr 1fr}
  .sa-phase-grid{grid-template-columns:1fr 1fr 1fr}
  .sa-tools-grid{grid-template-columns:1fr 1fr}
  .sa-training-grid{grid-template-columns:1fr 1fr}
  .sa-deliv-grid{grid-template-columns:1fr 1fr}
  .sa-rv-split{grid-template-columns:1fr 1fr}
  .sa-inv-grid{grid-template-columns:1fr 1fr 1fr}
  .sa-about-split{grid-template-columns:1fr 1fr}
  .sa-footer-top{flex-direction:row;justify-content:space-between;align-items:flex-start}
  .sa-sdots{display:flex}
  .sa-jp-steps{grid-template-columns:1fr 1fr}
}
@media(min-width:960px){
  .sa-hero{padding:8rem 3rem 5rem;flex-direction:row;gap:3rem}
  .sa-hero-art{position:relative;width:46%;flex-shrink:0;height:auto;min-height:560px;top:auto;right:auto}
  .sa-hero-content{flex:1}
  .sa-sec{padding:6rem 3rem}
  .sa-sec-inner{max-width:1080px;margin:0 auto}
  .sa-tools-grid{grid-template-columns:repeat(3,1fr)}
  .sa-training-grid{grid-template-columns:repeat(3,1fr)}
  .sa-deliv-grid{grid-template-columns:repeat(3,1fr)}
  .sa-sdots{display:flex}
  .sa-chat-panel{left:auto;right:1.5rem;width:320px}
}
`;

/* ============================================================
   SVG ART — ported verbatim from the original inline SVGs
   ============================================================ */

function HeroArtSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 560 700" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect x="180" y="70" width="120" height="40" rx="8" fill="rgba(124,58,237,.1)" stroke="#7C3AED" strokeWidth="1" opacity=".55" />
      <text x="240" y="86" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#7C3AED" opacity=".65">PRE-VISIT</text>
      <text x="240" y="99" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".45">Booking · Confirmation</text>
      <line x1="240" y1="110" x2="240" y2="146" stroke="#7C3AED" strokeWidth=".8" opacity=".35" strokeDasharray="4 3" />
      <polygon points="236,144 240,152 244,144" fill="#7C3AED" opacity=".35" />
      <rect x="180" y="152" width="120" height="40" rx="8" fill="rgba(124,58,237,.1)" stroke="#7C3AED" strokeWidth="1" opacity=".55" />
      <text x="240" y="168" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#7C3AED" opacity=".65">ARRIVAL</text>
      <text x="240" y="181" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".45">Check-in · Wait · Notify</text>
      <line x1="240" y1="192" x2="240" y2="228" stroke="#7C3AED" strokeWidth=".8" opacity=".35" strokeDasharray="4 3" />
      <polygon points="236,226 240,234 244,226" fill="#7C3AED" opacity=".35" />
      <rect x="175" y="234" width="130" height="40" rx="8" fill="rgba(124,58,237,.18)" stroke="#7C3AED" strokeWidth="1.2" opacity=".7" />
      <text x="240" y="250" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#7C3AED" opacity=".8">CONSULTATION</text>
      <text x="240" y="263" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".6">Diagnosis · Plan</text>
      <line x1="240" y1="274" x2="240" y2="310" stroke="#7C3AED" strokeWidth=".8" opacity=".35" strokeDasharray="4 3" />
      <polygon points="236,308 240,316 244,308" fill="#7C3AED" opacity=".35" />
      <rect x="180" y="316" width="120" height="40" rx="8" fill="rgba(124,58,237,.1)" stroke="#7C3AED" strokeWidth="1" opacity=".55" />
      <text x="240" y="332" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#7C3AED" opacity=".65">TREATMENT</text>
      <text x="240" y="345" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#7C3AED" opacity=".45">Protocol · Care</text>
      <line x1="240" y1="356" x2="240" y2="392" stroke="#7C3AED" strokeWidth=".8" opacity=".35" strokeDasharray="4 3" />
      <polygon points="236,390 240,398 244,390" fill="#7C3AED" opacity=".35" />
      <rect x="180" y="398" width="120" height="40" rx="8" fill="rgba(124,58,237,.07)" stroke="#A78BFA" strokeWidth=".8" opacity=".5" strokeDasharray="5 4" />
      <text x="240" y="414" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#A78BFA" opacity=".6">POST-CARE</text>
      <text x="240" y="427" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#A78BFA" opacity=".45">Follow-up · Automate</text>
      {/* Training emphasis node */}
      <circle cx="380" cy="490" r="44" fill="rgba(197,165,114,.08)" stroke="#C5A572" strokeWidth=".8" strokeDasharray="6 5" opacity=".5" />
      <text x="380" y="484" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="#C5A572" opacity=".7">TRAINING</text>
      <text x="380" y="497" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#C5A572" opacity=".5">Critical deliverable</text>
      <line x1="300" y1="418" x2="350" y2="472" stroke="#C5A572" strokeWidth=".8" strokeDasharray="4 4" opacity=".3" />
      {/* Speed node */}
      <rect x="50" y="350" width="100" height="35" rx="6" fill="rgba(124,58,237,.06)" stroke="#A78BFA" strokeWidth=".7" opacity=".5" />
      <text x="100" y="364" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fontWeight="700" fill="#A78BFA" opacity=".6">45-60 DAYS</text>
      <text x="100" y="376" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6" fill="#A78BFA" opacity=".45">Faster if staff align</text>
      <line x1="150" y1="367" x2="180" y2="335" stroke="#A78BFA" strokeWidth=".7" strokeDasharray="3 4" opacity=".3" />
      <text x="80" y="590" fontFamily="Montserrat,sans-serif" fontSize="110" fontWeight="700" fill="#0F0A1A" opacity=".022">60</text>
    </svg>
  );
}

function DiagnosisStripSVG() {
  return (
    <svg viewBox="0 0 900 70" width="100%" style={{ margin: "1.25rem 0" }} className="sa-reveal sa-vis">
      <rect x="0" y="8" width="204" height="54" rx="8" fill="#FEF2F2" stroke="rgba(220,38,38,.3)" strokeWidth=".8" />
      <text x="102" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#DC2626">WAITING</text>
      <text x="102" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#991B1B">Patients wait in silence</text>
      <text x="102" y="54" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#991B1B" opacity=".7">No update, no timeline</text>
      <rect x="232" y="8" width="204" height="54" rx="8" fill="#FEF2F2" stroke="rgba(220,38,38,.3)" strokeWidth=".8" />
      <text x="334" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#DC2626">FOLLOW-UP</text>
      <text x="334" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#991B1B">No aftercare structure</text>
      <text x="334" y="54" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#991B1B" opacity=".7">Patients disappear</text>
      <rect x="464" y="8" width="204" height="54" rx="8" fill="#FEF2F2" stroke="rgba(220,38,38,.3)" strokeWidth=".8" />
      <text x="566" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#DC2626">BOOKING</text>
      <text x="566" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#991B1B">WhatsApp and phone only</text>
      <text x="566" y="54" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#991B1B" opacity=".7">No appointment record</text>
      <rect x="696" y="8" width="204" height="54" rx="8" fill="#FEF2F2" stroke="rgba(220,38,38,.3)" strokeWidth=".8" />
      <text x="798" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#DC2626">STAFF</text>
      <text x="798" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7" fill="#991B1B">No standard process</text>
      <text x="798" y="54" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#991B1B" opacity=".7">Every day improvised</text>
    </svg>
  );
}

function ToolsStripSVG() {
  return (
    <svg viewBox="0 0 900 70" width="100%" style={{ margin: "1.25rem 0" }} className="sa-reveal sa-vis">
      <rect x="340" y="20" width="120" height="30" rx="6" fill="#7C3AED" />
      <text x="400" y="39" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="700" fill="white">SKIN AFFAIR OPS</text>
      <line x1="280" y1="35" x2="340" y2="35" stroke="rgba(124,58,237,.5)" strokeDasharray="4 3" strokeWidth=".8" />
      <rect x="160" y="20" width="120" height="30" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth=".8" />
      <text x="220" y="39" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#5B21B6">Clinic Mgmt App</text>
      <line x1="460" y1="35" x2="520" y2="35" stroke="rgba(124,58,237,.5)" strokeDasharray="4 3" strokeWidth=".8" />
      <rect x="520" y="20" width="120" height="30" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth=".8" />
      <text x="580" y="39" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="600" fill="#5B21B6">WA Automation</text>
      <line x1="400" y1="50" x2="400" y2="65" stroke="rgba(124,58,237,.5)" strokeDasharray="4 3" strokeWidth=".8" />
      <text x="400" y="68" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="#8A7FA0">+5 more tools configured and connected</text>
    </svg>
  );
}

function PhasesStripSVG() {
  return (
    <svg viewBox="0 0 900 70" width="100%" style={{ margin: "1.5rem 0" }} className="sa-reveal sa-vis">
      <rect x="0" y="12" width="270" height="46" rx="8" fill="rgba(237,233,254,.18)" stroke="#A78BFA" strokeWidth=".8" />
      <text x="135" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#A78BFA">PHASE 01</text>
      <text x="135" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="600" fill="white">Audit and Design</text>
      <text x="135" y="53" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.38)">Days 1-10</text>
      <line x1="270" y1="35" x2="300" y2="35" stroke="#7C3AED" strokeWidth="1.2" />
      <polygon points="298,31 306,35 298,39" fill="#7C3AED" />
      <rect x="300" y="12" width="300" height="46" rx="8" fill="rgba(124,58,237,.25)" stroke="#7C3AED" strokeWidth=".8" />
      <text x="450" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="#A78BFA">PHASE 02</text>
      <text x="450" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="600" fill="white">Build, Configure and Train</text>
      <text x="450" y="53" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.38)">Days 11-40</text>
      <line x1="600" y1="35" x2="630" y2="35" stroke="#7C3AED" strokeWidth="1.2" />
      <polygon points="628,31 636,35 628,39" fill="#7C3AED" />
      <rect x="630" y="12" width="270" height="46" rx="8" fill="#7C3AED" stroke="#A78BFA" strokeWidth=".8" />
      <text x="765" y="29" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,.7)">PHASE 03</text>
      <text x="765" y="42" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="8" fontWeight="600" fill="white">Activate and Hand Over</text>
      <text x="765" y="53" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.58)">Days 41-60</text>
    </svg>
  );
}

function FounderSignatureSVG() {
  return (
    <svg viewBox="0 0 200 50" fill="none" height="36" style={{ marginBottom: ".4rem" }}>
      <path d="M10,38 C35,18 65,10 90,22 C110,32 120,14 138,18 C158,22 168,36 188,30" stroke="#0F0A1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M18,43 C48,41 78,36 108,39 C128,41 148,38 168,40" stroke="#0F0A1A" strokeWidth=".9" strokeLinecap="round" fill="none" opacity=".4" />
    </svg>
  );
}

function ChatIconSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

/* ============================================================
   Small reusable "reveal on scroll" wrapper. Mirrors the
   original IntersectionObserver + .reveal/.vis behaviour.
   ============================================================ */
interface RevealProps {
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  [key: string]: any;
}

function Reveal({ as: Tag = "div", className = "", style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classNames = "sa-reveal" + (visible ? " sa-vis" : "") + (className ? " " + className : "");
  const props: any = { ref, className: classNames, style, ...rest };

  return React.createElement(Tag, props, children);
}

/* Animated count-up number, mirrors the original data-t counters */
function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [val, setVal] = useState<number>(0);
  const doneRef = useRef<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !doneRef.current) {
            doneRef.current = true;
            let s = 0;
            const inc = target / 75;
            const t = setInterval(() => {
              s += inc;
              if (s >= target) {
                setVal(target);
                clearInterval(t);
              } else {
                setVal(Math.floor(s));
              }
            }, 16);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}</span>;
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
interface ChatMessage {
  type: "bot" | "user";
  text: string;
}

interface ActivePhases {
  [idx: number]: boolean;
}

export default function SkinAffairProposal() {
  const [progress, setProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [activePhases, setActivePhases] = useState<ActivePhases>({});
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: "bot", text: "Hello. I can answer questions about the Brand Expresso engagement for Skin Affair. What would you like to know?" },
  ]);
  const [chatInput, setChatInput] = useState<string>("");
  const [chatBusy, setChatBusy] = useState<boolean>(false);
  const msgsRef = useRef<HTMLDivElement | null>(null);

  // scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section dots
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // auto-scroll chat to bottom
  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages]);

  const togglePhase = useCallback((idx: number) => {
    setActivePhases((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const sendMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const q = chatInput.trim();
      if (!q || chatBusy) return;
      setMessages((prev) => [...prev, { type: "user", text: q }]);
      setChatInput("");
      setChatBusy(true);
      setMessages((prev) => [...prev, { type: "bot", text: "Thinking..." }]);

      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 300,
            system: CHAT_SYSTEM_PROMPT,
            messages: [{ role: "user", content: q }],
          }),
        });
        const data = await res.json();
        const textBlock = (data.content || []).find((c) => c.type === "text");
        const reply = textBlock ? textBlock.text : "I'm not sure how to answer that. Please reach out to Magsmen directly.";
        setMessages((prev) => [...prev.slice(0, -1), { type: "bot", text: reply }]);
      } catch (err) {
        setMessages((prev) => [...prev.slice(0, -1), { type: "bot", text: "Something went wrong. Please try again." }]);
      } finally {
        setChatBusy(false);
      }
    },
    [chatInput, chatBusy]
  );

  return (
    <div className="sa-root">
      <style>{CSS}</style>

      <div className="sa-prog" style={{ width: progress + "%" }}></div>

      <nav className="sa-nav">
        <a className="" href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}>
          <img src={newlogoblack} alt="Magsmen" className="sa-nav-logo-img w-20" />
        </a>
        <span className="sa-nav-tag">Skin Affair — Brand Expresso</span>
        <a className="sa-nav-cta" href={CONFIRM_MAILTO}>
          Confirm Engagement
        </a>
      </nav>

      <div className="sa-sdots">
        {SECTION_IDS.map((id) => (
          <div
            key={id}
            className={"sa-sdot" + (activeSection === id ? " sa-act" : "")}
            onClick={() => scrollToSection(id)}
          ></div>
        ))}
      </div>

      {/* HERO */}
      <section className="sa-hero" id="hero">
        <div className="sa-hero-art">
          <HeroArtSVG />
        </div>
        <div className="sa-hero-content">
          <p className="sa-hero-client">Skin Affair Clinic — Hyderabad</p>
          <p className="sa-hero-eyebrow">Brand Expresso Proposal</p>
          <h1>
            Fix the <span>System.</span>
            <br />
            Train the
            <br />
            Team.
          </h1>
          <p className="sa-hero-tagline">
            A clinic that cannot operate consistently will not be perceived as premium, regardless of
            the doctor leading it. The work is known. The tools exist. What is missing is the
            structure and the training to run them every day without exception.
          </p>
          <div className="sa-hero-obs sa-reveal sa-vis">
            Since Magsmen is already inside the Skin Affair and Siyara Lounge engagement, the
            diagnosis phase is compressed. We already understand the business, the team, and the
            gaps. This engagement gets to building and training faster than a cold start would
            allow.
          </div>
          <div className="sa-hero-stats">
            <div className="sa-hstat">
              <div className="sa-hstat-num">45-60</div>
              <div className="sa-hstat-label">Day delivery window</div>
            </div>
            <div className="sa-hstat">
              <div className="sa-hstat-num">
                <CountUp target={3} />
              </div>
              <div className="sa-hstat-label">Phases of engagement</div>
            </div>
            <div className="sa-hstat">
              <div className="sa-hstat-num">₹4L</div>
              <div className="sa-hstat-label">+ GST investment</div>
            </div>
            <div className="sa-hstat">
              <div className="sa-hstat-num">
                <CountUp target={7} />
              </div>
              <div className="sa-hstat-label">Operational tools activated</div>
            </div>
          </div>
          <div className="sa-hero-btns">
            <a className="sa-btn sa-solid" href={CONFIRM_MAILTO}>
              Confirm Engagement
            </a>
            <a className="sa-btn sa-ghost" href="#diagnosis" onClick={(e) => { e.preventDefault(); scrollToSection("diagnosis"); }}>
              See the Diagnosis
            </a>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="sa-ticker-wrap">
        <div className="sa-ticker-inner">
          {[0, 1].map((rep) => (
            <React.Fragment key={rep}>
              <span>Patient Journey Design</span>
              <span className="sa-dot">·</span>
              <span>Seven Operational Tools</span>
              <span className="sa-dot">·</span>
              <span>Staff Training</span>
              <span className="sa-dot">·</span>
              <span>Notification Automation</span>
              <span className="sa-dot">·</span>
              <span>Post-Treatment Follow-Up</span>
              <span className="sa-dot">·</span>
              <span>45 to 60 Day Delivery</span>
              <span className="sa-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* DIAGNOSIS */}
      <section className="sa-sec sa-sec-alt" id="diagnosis">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">01 — The Diagnosis</Reveal>
          <Reveal as="h2">Four Systems That Need to Be Built</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            Skin Affair has no structured operational system. Not a broken system. An absent one.
            Every day runs on individual judgment, goodwill, and Dr. Srujana's clinical presence
            holding everything together. That works until it does not.
          </Reveal>

          <DiagnosisStripSVG />

          <div className="sa-diag-grid">
            {DIAGNOSIS.map((d) => (
              <Reveal as="div" className="sa-diag-card" key={d.num}>
                <div className="sa-diag-num">{d.num}</div>
                <div className="sa-diag-title">{d.title}</div>
                <div className="sa-diag-desc">{d.desc}</div>
                <span className="sa-diag-impact">{d.impact}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="sa-sec" id="journey">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">02 — Patient Journey</Reveal>
          <Reveal as="h2">The Journey as It Must Work</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            Every patient interaction from the moment she books to the moment she receives her
            follow-up message is a brand moment. Right now, most of those moments are undesigned.
            This engagement designs all of them.
          </Reveal>

          <div className="sa-journey-wrap">
            {JOURNEY.map((phase) => (
              <Reveal as="div" className="sa-journey-phase" key={phase.label}>
                <div className="sa-jp-label">{phase.label}</div>
                <div className="sa-jp-steps">
                  {phase.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="sa-jp-step sa-broken">
                        <div className="sa-jp-icon sa-b">✕</div>
                        <div>
                          <div className="sa-jp-step-title">{step.broken.title}</div>
                          <div className="sa-jp-step-desc">{step.broken.desc}</div>
                          <div className="sa-jp-step-break">{step.broken.tag}</div>
                        </div>
                      </div>
                      <div className="sa-jp-step sa-fixed">
                        <div className="sa-jp-icon sa-f">✓</div>
                        <div>
                          <div className="sa-jp-step-title">{step.fixed.title}</div>
                          <div className="sa-jp-step-desc">{step.fixed.desc}</div>
                          <div className="sa-jp-step-fix">{step.fixed.tag}</div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEVEN TOOLS */}
      <section className="sa-sec sa-sec-alt" id="tools">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">03 — Operational Tools</Reveal>
          <Reveal as="h2">Seven Tools. One Integrated System.</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            Each tool solves a specific problem in the patient journey. None is complex. All are
            already used by Indian clinics at this scale. What Skin Affair has never had is these
            seven running together as one connected system.
          </Reveal>

          <ToolsStripSVG />

          <div className="sa-tools-grid">
            {TOOLS.map((tool) => (
              <Reveal as="div" className="sa-tool-card" key={tool.num}>
                <div className="sa-tool-num">{tool.num}</div>
                <div>
                  <div className="sa-tool-name">{tool.name}</div>
                  <div className="sa-tool-purpose">{tool.purpose}</div>
                  <div className="sa-tool-use">{tool.use}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="sa-sec sa-sec-dark" id="training">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label sa-lt">04 — Staff Training</Reveal>
          <Reveal as="h2">Training Is the Most Important Deliverable</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            The best system in the world fails if the team does not know how to run it. Training is
            not a session at the end of the engagement. It is built into every phase and is the
            primary measure of success for this project.
          </Reveal>

          <Reveal
            as="div"
            style={{ marginTop: "1.25rem", padding: "1.25rem", background: "rgba(197,165,114,.1)", borderRadius: "var(--r12)", border: "1px solid rgba(197,165,114,.2)" }}
          >
            <div className="sa-sec-label sa-lt" style={{ marginBottom: ".5rem" }}>
              The training principle
            </div>
            <p style={{ fontSize: ".92rem", fontStyle: "italic", color: "rgba(255,255,255,.8)", lineHeight: 1.75 }}>
              A staff member who understands why a process exists will follow it consistently. A
              staff member who was only shown what to do will default to their own judgment under
              pressure. Magsmen trains both: the what and the why. Every team member at Skin Affair
              must be able to explain their own role in the patient experience before the engagement
              is complete.
            </p>
          </Reveal>

          <div className="sa-training-grid" style={{ marginTop: "1.5rem" }}>
            {TRAINING.map((t) => (
              <Reveal as="div" className="sa-training-card" key={t.role}>
                <div className="sa-training-role">{t.role}</div>
                <div className="sa-training-title">{t.title}</div>
                <div className="sa-training-items">
                  {t.items.map((item, idx) => (
                    <div className="sa-training-item" key={idx}>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="div"
            style={{ marginTop: "1.5rem", padding: "1.1rem 1.25rem", background: "rgba(124,58,237,.15)", borderRadius: "var(--r12)", border: "1px solid rgba(124,58,237,.25)" }}
          >
            <div className="sa-sec-label sa-lt" style={{ marginBottom: ".4rem" }}>
              On the speed of delivery
            </div>
            <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.7)", lineHeight: 1.65 }}>
              The 45 to 60 day window is the expected range. The lower end is achievable if the team
              engages actively during the setup phase rather than waiting for the training phase to
              begin. Clinics that see faster completion share one characteristic: the front desk team
              starts using the tool in the first week, not the last. Magsmen will push for that from
              day one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHASES */}
      <section className="sa-sec sa-sec-alt" id="phases">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">05 — Engagement Phases</Reveal>
          <Reveal as="h2">Three Phases. 45 to 60 Days.</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            The timeline is compressed because Magsmen is already inside this engagement through the
            brand creation and Siyara work. The diagnosis phase is shorter because the context is
            already known. The building phase moves faster because the team relationship exists.
          </Reveal>

          <PhasesStripSVG />

          <div className="sa-phase-grid">
            {PHASES.map((p, idx) => (
              <Reveal
                as="div"
                className={"sa-phase-card" + (activePhases[idx] ? " sa-act" : "")}
                key={p.num}
                onClick={() => togglePhase(idx)}
              >
                <div className="sa-phase-num">{p.num}</div>
                <div className="sa-phase-title">{p.title}</div>
                <div className="sa-phase-weeks">{p.weeks}</div>
                <div className="sa-phase-body">{p.body}</div>
                <span className="sa-phase-fast">{p.fast}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="sa-sec" id="deliverables">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">06 — Deliverables</Reveal>
          <Reveal as="h2">Every Output, Named Specifically</Reveal>
          <Reveal as="p" className="sa-sec-lead">
            Brand Expresso does not produce recommendations to consider. It produces operational
            assets that the clinic uses from the day the engagement ends.
          </Reveal>

          <div className="sa-deliv-grid">
            {DELIVERABLES.map((d) => (
              <Reveal as="div" className="sa-deliv-item" key={d.n}>
                <div className="sa-deliv-num">{d.n}</div>
                <div>
                  <div className="sa-deliv-text">{d.t}</div>
                  <div className="sa-deliv-sub">{d.s}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="sa-sec sa-sec-alt" id="investment">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label">07 — Investment</Reveal>
          <Reveal as="h2">What This Protects and What It Costs</Reveal>

          <Reveal as="div" className="sa-rv-split">
            <div className="sa-rv-col sa-rv-avoid">
              <div className="sa-rv-col-label">This engagement protects against</div>
              {RISK_AVOID.map((item, idx) => (
                <div className="sa-rv-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
            <div className="sa-rv-col sa-rv-create">
              <div className="sa-rv-col-label">This engagement creates</div>
              {RISK_CREATE.map((item, idx) => (
                <div className="sa-rv-item" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="sa-inv-card">
            <div className="sa-inv-total">₹4,00,000</div>
            <div className="sa-inv-label">+ GST | Brand Expresso Engagement | Skin Affair Clinic, Hyderabad</div>
            <div className="sa-inv-grid">
              {INVESTMENT_ITEMS.map((item, idx) => (
                <div className="sa-inv-item" key={idx}>
                  <div className="sa-inv-item-label">{item.label}</div>
                  <div className="sa-inv-item-val">{item.val}</div>
                </div>
              ))}
            </div>
            <div className="sa-inv-note">
              Siyara Lounge operational setup is a separate future phase engagement. This engagement
              builds the ground floor foundation that Siyara must stand on. That sequencing is
              deliberate. A premium first floor requires a structured ground floor beneath it.
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER NOTE */}
      <section className="sa-sec">
        <div className="sa-sec-inner">
          <Reveal as="div" className="sa-founder-card">
            <div className="sa-founder-label">A Note from Sandeep N</div>
            <div className="sa-founder-text">
              We are already inside this engagement. We know Dr. Srujana's clinical philosophy, the
              team's current state, and the gaps that exist between Skin Affair as it operates today
              and Siyara as it must operate when it opens. This Brand Expresso engagement is not a
              new project. It is the foundation that must be built so that everything else we are
              creating together can stand on it. The training is the most important part. A system
              that the team understands is a system that survives after we leave. That is the only
              outcome that matters.
            </div>
            <FounderSignatureSVG />
            <div className="sa-founder-name">Sandeep N</div>
            <div className="sa-founder-title">Founder, Magsmen Brand Consultants</div>
          </Reveal>

          <div className="sa-about-split" style={{ marginTop: "1.5rem" }}>
            <div>
              <p style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--tc)", lineHeight: 1.3, marginBottom: ".75rem" }}>
                Magsmen builds operating systems for brands. Not strategies to admire. Systems to
                run.
              </p>
              <p style={{ fontSize: ".82rem", color: "var(--ts)", lineHeight: 1.7, marginBottom: "1rem" }}>
                The Brand Expresso service is Magsmen's focused intervention model: one defined
                problem, one fixed scope, one delivery window. It does not produce a report for the
                founder to act on. It produces a system that the team runs independently from day
                sixty.
              </p>
              <div className="sa-pillar-grid">
                {PILLARS.map((p) => (
                  <div className="sa-pillar" key={p.t}>
                    <div className="sa-pillar-t">{p.t}</div>
                    <div className="sa-pillar-d">{p.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="sa-sandeep-card">
                <div className="sa-sandeep-head">
                  <div className="sa-sandeep-av">SN</div>
                  <div>
                    <div className="sa-sandeep-name">Sandeep N</div>
                    <div className="sa-sandeep-role">Founder, Magsmen Brand Consultants</div>
                  </div>
                </div>
                <div className="sa-cred-list">
                  {CREDENTIALS.map((c, idx) => (
                    <div className="sa-cred-item" key={idx}>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sa-strip">
                {STRIP_TAGS.map((tag) => (
                  <span className="sa-strip-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sa-cta-sec">
        <div className="sa-sec-inner">
          <Reveal as="p" className="sa-sec-label sa-lt" style={{ marginBottom: ".75rem" }}>
            The Next Step
          </Reveal>
          <Reveal as="h2">
            The system can be running in 45 days.
            <br />
            The question is when we start.
          </Reveal>
          <Reveal as="p">
            The longer the ground floor operates without structure, the harder it becomes to build
            Siyara above it with credibility. The 45 to 60 day window begins the moment the
            engagement is confirmed.
          </Reveal>
          <Reveal as="div" className="sa-cta-btns">
            <a className="sa-btn sa-solid" href={CONFIRM_MAILTO_LONG}>
              Confirm the Engagement
            </a>
            <a className="sa-btn sa-ghost" href={QUESTION_MAILTO}>
              Ask a Question
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="sa-foot">
        <div className="sa-footer-inner">
          <div className="sa-footer-top">
            <div>
              <div className="">
                <img src={Favi01} alt="Magsmen Logo" className="w-28" />
              </div>
              <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.22)", fontStyle: "italic", marginTop: ".35rem" }}>
                Challenge the Norm. Craft the Future.
              </div>
            </div>
            <div className="sa-footer-links">
              <a href="mailto:sandeep@magsmen.com">sandeep@magsmen.com</a>
              <a href="mailto:connect@magsmen.com">connect@magsmen.com</a>
              <a href="https://www.magsmen.com" target="_blank" rel="noreferrer">www.magsmen.com</a>
              <a href="tel:+919044910449">+91 90449 10449</a>
            </div>
          </div>
          <div className="sa-footer-bottom">
            Magsmen Strategy Consultants · A Division of Grofessors Innovations Pvt Ltd · Confidential · Not for circulation
            <br />
            Prepared exclusively for Skin Affair, Hyderabad.
          </div>
        </div>
      </footer>

      <button className="sa-chat-btn" aria-label="Ask about this proposal" onClick={() => setChatOpen((v) => !v)}>
        <ChatIconSVG />
      </button>
      <div className={"sa-chat-panel" + (chatOpen ? " sa-open" : "")}>
        <div className="sa-chat-head">
          <span className="sa-chat-head-title">Ask about this proposal</span>
          <button className="sa-chat-close" onClick={() => setChatOpen(false)}>
            ✕
          </button>
        </div>
        <div className="sa-chat-msgs" ref={msgsRef}>
          {messages.map((m, idx) => (
            <div className={"sa-cmsg " + (m.type === "user" ? "sa-user" : "sa-bot")} key={idx}>
              {m.text}
            </div>
          ))}
        </div>
        <form className="sa-chat-form" onSubmit={sendMessage}>
          <input
            className="sa-chat-in"
            type="text"
            placeholder="Ask a question..."
            autoComplete="off"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button className="sa-chat-send" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
