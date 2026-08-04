
import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   MAGSMEN STRATEGY INTELLIGENCE PORTAL — REACT VERSION
   Proprietary and Confidential
   Grofesion Innovations Private Limited (Magsmen Strategy Consultants)
   Converted from the original static HTML/CSS/JS build.
   Layout, design tokens, colour palette and all module content
   are preserved exactly. Only the implementation is React.
   ============================================================ */

/* ------------------------------------------------------------
   CSS — copied 1:1 from the original stylesheet (same variables,
   same class names, same colour palette: White / Black / Violet)
   ------------------------------------------------------------ */
const PORTAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

.msp-root {
  --white: #FFFFFF;
  --black: #0F0A1A;
  --violet: #7C3AED;
  --violet-dark: #5B21B6;
  --violet-hover: #6D28D9;
  --violet-light: #EDE9FE;
  --violet-subtle: #F5F3FF;
  --surface: #F8F9FB;
  --border: #E5E7EB;
  --border-dark: #D1D5DB;
  --text-primary: #0F0A1A;
  --text-secondary: #374151;
  --text-muted: #6B7280;
  --success: #059669;
  --success-bg: #ECFDF5;
  --sidebar-w: 272px;
  --font: 'Montserrat', sans-serif;
  font-family: var(--font);
  background: var(--white);
  color: var(--text-primary);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.msp-root *, .msp-root *::before, .msp-root *::after { margin: 0; padding: 0; box-sizing: border-box; }
.msp-root { scroll-behavior: smooth; }

.msp-screen { display: flex; min-height: 100vh; }

/* LOGIN */
#msp-screen-login { align-items: center; justify-content: center; background: var(--white); flex-direction: column; padding: 40px 20px; }
.login-card { width: 100%; max-width: 440px; background: var(--white); border: 1.5px solid var(--border); padding: 48px 40px; }
.login-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 36px; }
.login-logo-mark { width: 32px; height: 32px; background: var(--black); display: flex; align-items: center; justify-content: center; }
.login-logo-mark span { color: var(--white); font-weight: 900; font-size: 14px; letter-spacing: 0.02em; }
.login-logo-text { font-size: 13px; font-weight: 700; color: var(--black); letter-spacing: 0.08em; text-transform: uppercase; }
.login-heading { font-size: 22px; font-weight: 800; color: var(--black); margin-bottom: 8px; letter-spacing: -0.02em; }
.login-sub { font-size: 13px; font-weight: 400; color: var(--text-muted); margin-bottom: 32px; line-height: 1.6; }
.form-group { margin-bottom: 20px; }
.form-label { display: block; font-size: 11px; font-weight: 700; color: var(--black); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.form-input, .form-select {
  width: 100%; height: 44px; padding: 0 14px; border: 1.5px solid var(--border-dark); background: var(--white);
  font-family: var(--font); font-size: 14px; font-weight: 500; color: var(--black); outline: none;
  transition: border-color 180ms ease; -webkit-appearance: none; appearance: none;
}
.form-select {
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230F0A1A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center; padding-right: 38px; cursor: pointer;
}
.form-input:focus, .form-select:focus { border-color: var(--violet); }
.form-input::placeholder { color: var(--text-muted); font-weight: 400; }
.btn-primary {
  width: 100%; height: 48px; background: var(--black); color: var(--white); border: none;
  font-family: var(--font); font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  cursor: pointer; transition: background 180ms ease; margin-top: 8px;
}
.btn-primary:hover { background: var(--violet); }
.btn-primary:active { background: var(--violet-dark); }
.btn-primary:disabled { background: var(--text-muted); cursor: not-allowed; }
.login-legal { font-size: 11px; color: var(--text-muted); line-height: 1.6; margin-top: 20px; text-align: center; }

/* DISCLAIMER */
#msp-screen-disclaimer { align-items: center; justify-content: center; background: var(--surface); flex-direction: column; padding: 40px 20px; }
.disclaimer-card { width: 100%; max-width: 680px; background: var(--white); border: 1.5px solid var(--border); }
.disclaimer-header { padding: 28px 36px; border-bottom: 1.5px solid var(--border); background: var(--black); }
.disclaimer-header h2 { font-size: 16px; font-weight: 800; color: var(--white); letter-spacing: 0.04em; text-transform: uppercase; }
.disclaimer-header p { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; font-weight: 400; }
.disclaimer-body { height: 400px; overflow-y: auto; padding: 32px 36px; font-size: 13px; line-height: 1.8; color: var(--text-secondary); scroll-behavior: smooth; }
.disclaimer-body::-webkit-scrollbar { width: 4px; }
.disclaimer-body::-webkit-scrollbar-track { background: var(--surface); }
.disclaimer-body::-webkit-scrollbar-thumb { background: var(--violet); }
.disclaimer-body h3 { font-size: 12px; font-weight: 800; color: var(--black); letter-spacing: 0.06em; text-transform: uppercase; margin: 24px 0 8px; }
.disclaimer-body h3:first-child { margin-top: 0; }
.disclaimer-body p { margin-bottom: 12px; font-weight: 400; }
.disclaimer-footer { padding: 24px 36px; border-top: 1.5px solid var(--border); background: var(--surface); }
.disclaimer-check-row { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
.disclaimer-check-row input[type="checkbox"] { width: 18px; height: 18px; min-width: 18px; margin-top: 2px; cursor: pointer; accent-color: var(--violet); }
.disclaimer-check-row label { font-size: 13px; font-weight: 600; color: var(--black); line-height: 1.5; cursor: pointer; }
.scroll-note { font-size: 11px; color: var(--text-muted); margin-bottom: 16px; text-align: center; font-weight: 500; }

/* MAIN PORTAL */
#msp-screen-portal { flex-direction: row; min-height: 100vh; }
.sidebar {
  width: var(--sidebar-w); min-width: var(--sidebar-w); background: var(--black); min-height: 100vh;
  display: flex; flex-direction: column; position: fixed; top: 0; left: 0; height: 100vh; overflow-y: auto; z-index: 100;
}
.sidebar::-webkit-scrollbar { width: 3px; }
.sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }
.sidebar-brand { padding: 24px 20px 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.sidebar-brand-mark { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.sidebar-mark-box { width: 28px; height: 28px; background: var(--violet); display: flex; align-items: center; justify-content: center; }
.sidebar-mark-box span { color: var(--white); font-weight: 900; font-size: 12px; }
.sidebar-firm { font-size: 12px; font-weight: 700; color: var(--white); letter-spacing: 0.06em; text-transform: uppercase; }
.sidebar-sub { font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 400; margin-top: 4px; }
.sidebar-progress-bar { height: 2px; background: rgba(255,255,255,0.1); margin: 0 20px; }
.sidebar-progress-fill { height: 100%; background: var(--violet); transition: width 400ms ease; }
.sidebar-progress-label { padding: 8px 20px 12px; font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 500; letter-spacing: 0.04em; }
.sidebar-nav { flex: 1; padding: 8px 0; }
.nav-section-label { padding: 12px 20px 6px; font-size: 9px; font-weight: 700; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; text-transform: uppercase; }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 10px 20px; cursor: pointer; transition: background 150ms ease; position: relative; border: none; background: none; width: 100%; text-align: left; }
.nav-item:hover { background: rgba(255,255,255,0.05); }
.nav-item.active { background: rgba(124,58,237,0.2); }
.nav-item.active::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--violet); }
.nav-item.locked { opacity: 0.35; cursor: not-allowed; }
.nav-status { width: 20px; height: 20px; min-width: 20px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 9px; color: rgba(255,255,255,0.4); font-weight: 700; transition: all 200ms ease; }
.nav-item.done .nav-status { background: var(--success); border-color: var(--success); color: var(--white); }
.nav-item.active .nav-status { border-color: var(--violet); color: var(--violet); }
.nav-item-text { flex: 1; }
.nav-item-num { font-size: 9px; color: rgba(255,255,255,0.3); font-weight: 600; letter-spacing: 0.04em; display: block; margin-bottom: 1px; }
.nav-item-label { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.75); line-height: 1.3; }
.nav-item.active .nav-item-label { color: var(--white); }
.nav-item.done .nav-item-label { color: rgba(255,255,255,0.55); }
.sidebar-user-bar { padding: 16px 20px; border-top: 1px solid rgba(255,255,255,0.08); }
.sidebar-user-name { font-size: 12px; font-weight: 700; color: var(--white); }
.sidebar-user-role { font-size: 10px; color: rgba(255,255,255,0.4); font-weight: 400; margin-top: 2px; }

.main-content { margin-left: var(--sidebar-w); flex: 1; display: flex; flex-direction: column; min-height: 100vh; }
.content-topbar { position: sticky; top: 0; background: var(--white); border-bottom: 1.5px solid var(--border); padding: 0 48px; height: 56px; display: flex; align-items: center; justify-content: space-between; z-index: 50; }
.topbar-breadcrumb { font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
.topbar-breadcrumb span { color: var(--black); }
.topbar-confid { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border: 1px solid var(--border-dark); }
.content-area { flex: 1; padding: 48px 48px 80px; max-width: 860px; }

.module-eyebrow { font-size: 10px; font-weight: 700; color: var(--violet); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; }
.module-title { font-size: 28px; font-weight: 800; color: var(--black); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 16px; }
.module-intro { font-size: 15px; font-weight: 500; color: var(--text-secondary); line-height: 1.7; margin-bottom: 36px; border-left: 3px solid var(--violet); padding-left: 16px; }
.module-divider { height: 1.5px; background: var(--border); margin: 36px 0; }
.section-heading { font-size: 13px; font-weight: 800; color: var(--black); letter-spacing: 0.06em; text-transform: uppercase; margin: 32px 0 12px; }
.body-text { font-size: 14px; font-weight: 400; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
.body-text strong { font-weight: 700; color: var(--black); }
.callout-box { background: var(--violet-subtle); border-left: 3px solid var(--violet); padding: 16px 20px; margin: 24px 0; }
.callout-box p { font-size: 13px; font-weight: 600; color: var(--black); line-height: 1.6; }
.warning-box { background: #FFF7ED; border-left: 3px solid #F59E0B; padding: 16px 20px; margin: 24px 0; }
.warning-box p { font-size: 13px; font-weight: 600; color: #92400E; line-height: 1.6; }
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0; }
.info-card { border: 1.5px solid var(--border); padding: 20px; }
.info-card-num { font-size: 24px; font-weight: 900; color: var(--violet); letter-spacing: -0.03em; }
.info-card-label { font-size: 11px; font-weight: 700; color: var(--black); text-transform: uppercase; letter-spacing: 0.06em; margin: 4px 0 8px; }
.info-card-desc { font-size: 12px; font-weight: 400; color: var(--text-muted); line-height: 1.6; }
.step-list { margin: 16px 0; }
.step-item { display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.step-item:last-child { border-bottom: none; padding-bottom: 0; }
.step-num { width: 28px; height: 28px; min-width: 28px; background: var(--black); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; margin-top: 2px; }
.step-content h4 { font-size: 13px; font-weight: 700; color: var(--black); margin-bottom: 4px; }
.step-content p { font-size: 13px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; }
.belief-item { padding: 20px 0; border-bottom: 1px solid var(--border); }
.belief-item:last-child { border-bottom: none; }
.belief-num { font-size: 10px; font-weight: 700; color: var(--violet); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
.belief-title { font-size: 14px; font-weight: 700; color: var(--black); margin-bottom: 8px; }
.belief-text { font-size: 13px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; }
.service-card { border: 1.5px solid var(--border); padding: 24px; margin-bottom: 20px; transition: border-color 180ms ease; }
.service-card:hover { border-color: var(--violet); }
.service-tag { display: inline-block; background: var(--black); color: var(--white); font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 8px; margin-bottom: 12px; }
.service-name { font-size: 16px; font-weight: 800; color: var(--black); margin-bottom: 8px; }
.service-desc { font-size: 13px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
.service-deliverables { margin-top: 12px; }
.service-deliverables h5 { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
.deliverable-row { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 6px; font-size: 12px; font-weight: 400; color: var(--text-secondary); line-height: 1.5; }
.deliverable-dot { width: 4px; height: 4px; min-width: 4px; background: var(--violet); border-radius: 50%; margin-top: 6px; }
.framework-block { background: var(--surface); border: 1.5px solid var(--border); padding: 24px; margin-bottom: 16px; }
.framework-name { font-size: 13px; font-weight: 800; color: var(--black); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
.framework-tagline { font-size: 12px; font-weight: 600; color: var(--violet); margin-bottom: 10px; }
.framework-text { font-size: 13px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; }
.stage-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
.stage-table th { background: var(--black); color: var(--white); font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 10px 14px; text-align: left; }
.stage-table td { padding: 10px 14px; font-size: 12px; font-weight: 400; color: var(--text-secondary); border-bottom: 1px solid var(--border); vertical-align: top; line-height: 1.5; }
.stage-table td:first-child { font-weight: 700; color: var(--black); white-space: nowrap; width: 100px; }
.stage-table tr:nth-child(even) td { background: var(--surface); }
.rule-item { display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid var(--border); font-size: 13px; line-height: 1.6; }
.rule-item:last-child { border-bottom: none; }
.rule-icon { width: 20px; height: 20px; min-width: 20px; background: var(--violet); display: flex; align-items: center; justify-content: center; margin-top: 2px; }
.rule-icon svg { width: 10px; height: 10px; }
.rule-text { color: var(--text-secondary); }
.rule-text strong { color: var(--black); font-weight: 700; }

.ack-section { background: var(--black); padding: 32px; margin: 32px 0; color: var(--white); }
.ack-section h3 { font-size: 13px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 16px; color: var(--white); }
.ack-section p { font-size: 13px; font-weight: 400; line-height: 1.8; color: rgba(255,255,255,0.75); margin-bottom: 12px; }
.ack-section p:last-child { margin-bottom: 0; }
.ack-checklist { margin: 24px 0; }
.ack-check-row { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); }
.ack-check-row:last-child { border-bottom: none; }
.ack-check-row input[type="checkbox"] { width: 18px; height: 18px; min-width: 18px; margin-top: 2px; cursor: pointer; accent-color: var(--violet); }
.ack-check-row label { font-size: 13px; font-weight: 500; color: var(--text-secondary); line-height: 1.6; cursor: pointer; }
.ack-check-row label strong { color: var(--black); font-weight: 700; }
.stamp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
.stamp-field { border-bottom: 1.5px solid var(--black); padding-bottom: 8px; }
.stamp-label { font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; }
.stamp-value { font-size: 14px; font-weight: 600; color: var(--black); }

.module-footer { display: flex; align-items: center; justify-content: space-between; padding: 24px 0; border-top: 1.5px solid var(--border); margin-top: 40px; position: sticky; bottom: 0; background: var(--white); }
.module-progress-dots { display: flex; gap: 6px; align-items: center; }
.prog-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--border-dark); }
.prog-dot.done { background: var(--success); }
.prog-dot.current { background: var(--violet); width: 18px; border-radius: 3px; }
.btn-nav { height: 40px; padding: 0 24px; font-family: var(--font); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border: 1.5px solid var(--border-dark); background: var(--white); color: var(--text-secondary); transition: all 180ms ease; }
.btn-nav:hover { border-color: var(--black); color: var(--black); }
.btn-acknowledge { height: 44px; padding: 0 28px; font-family: var(--font); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border: none; background: var(--black); color: var(--white); transition: background 180ms ease; }
.btn-acknowledge:hover { background: var(--violet); }
.btn-acknowledge:disabled { background: var(--text-muted); cursor: not-allowed; }

#msp-screen-complete { align-items: center; justify-content: center; background: var(--black); flex-direction: column; padding: 40px 20px; }
.complete-card { width: 100%; max-width: 560px; background: var(--white); padding: 48px 44px; text-align: center; }
.complete-icon { width: 56px; height: 56px; background: var(--success-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
.complete-icon svg { color: var(--success); }
.complete-title { font-size: 22px; font-weight: 800; color: var(--black); margin-bottom: 12px; letter-spacing: -0.02em; }
.complete-sub { font-size: 14px; font-weight: 400; color: var(--text-secondary); line-height: 1.7; margin-bottom: 32px; }
.complete-record { background: var(--surface); border: 1.5px solid var(--border); padding: 20px; text-align: left; margin-bottom: 24px; }
.complete-record-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 12px; }
.complete-record-row:last-child { border-bottom: none; }
.complete-record-key { font-weight: 700; color: var(--text-muted); text-transform: uppercase; font-size: 10px; letter-spacing: 0.06em; }
.complete-record-val { font-weight: 600; color: var(--black); }
.btn-copy { height: 40px; padding: 0 20px; font-family: var(--font); font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; border: 1.5px solid var(--border-dark); background: var(--white); color: var(--black); transition: all 180ms ease; margin-right: 8px; }
.btn-copy:hover { border-color: var(--black); }
.complete-note { font-size: 11px; color: var(--text-muted); margin-top: 20px; line-height: 1.6; }

@media (max-width: 768px) {
  .msp-root .sidebar { width: 220px; min-width: 220px; }
  .msp-root .main-content { margin-left: 220px; }
  .msp-root .content-topbar, .msp-root .content-area { padding-left: 24px; padding-right: 24px; }
  .msp-root .info-grid { grid-template-columns: 1fr; }
  .msp-root .stamp-row { grid-template-columns: 1fr; }
}

.text-violet { color: var(--violet); }
.text-muted { color: var(--text-muted); }
.fw-700 { font-weight: 700; }
.mb-24 { margin-bottom: 24px; }
.badge { display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; background: var(--violet-light); color: var(--violet-dark); margin-left: 8px; }
.pillar-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); margin: 24px 0; }
.pillar-cell { background: var(--white); padding: 20px; }
.pillar-cell-num { font-size: 32px; font-weight: 900; color: var(--violet); letter-spacing: -0.04em; }
.pillar-cell-name { font-size: 11px; font-weight: 800; color: var(--black); text-transform: uppercase; letter-spacing: 0.06em; margin: 4px 0 8px; }
.pillar-cell-desc { font-size: 11px; font-weight: 400; color: var(--text-muted); line-height: 1.6; }

@media (max-width: 600px) {
  .msp-root .pillar-grid { grid-template-columns: 1fr; }
  .msp-root .login-card { padding: 32px 24px; }
  .msp-root .disclaimer-body { padding: 24px 24px; }
  .msp-root .disclaimer-header, .msp-root .disclaimer-footer { padding: 24px 24px; }
  .msp-root .complete-card { padding: 32px 24px; }
}
`;

/* ------------------------------------------------------------
   MODULE DEFINITIONS
   ------------------------------------------------------------ */
const MODULES = [
  { id: 1, key: "foundation", label: "The Foundation" },
  { id: 2, key: "services", label: "Our Services" },
  { id: 3, key: "research", label: "How We Research" },
  { id: 4, key: "consumer", label: "Consumer Analysis" },
  { id: 5, key: "analysis", label: "How We Analyse" },
  { id: 6, key: "architecture", label: "Brand Architecture" },
  { id: 7, key: "integrated", label: "Business-Integrated Brand" },
  { id: 8, key: "frameworks", label: "Magsmen Frameworks" },
  { id: 9, key: "protocols", label: "Team Protocols" },
  { id: 10, key: "legal", label: "Legal Dimension" },
  { id: 11, key: "acknowledgment", label: "Acknowledgment" },
];

/* ------------------------------------------------------------
   MODULE BODY CONTENT (modules 1–10) — identical copy to the
   original static build, minus the footer (footer is rendered
   as a real React component below each module body).
   ------------------------------------------------------------ */
function m1Body() {
  return `
<div class="module-eyebrow">Module 01</div>
<h1 class="module-title">The Foundation</h1>
<p class="module-intro">Before you touch a client brief, you need to understand what Magsmen is and what it is not. Most strategy errors at this firm begin with a misunderstanding of our identity. This module exists to eliminate that misunderstanding on your first day.</p>

<div class="section-heading">What Magsmen Is</div>
<p class="body-text">Magsmen is a strategy consulting firm. We build brands as business systems. Every engagement we take begins with a business problem, proceeds through structural diagnosis, and produces a strategy that a business can operate against. We are not a creative agency. We do not produce campaigns, manage social media, design logos, or handle media buying. We identify the structural problems that prevent a business from becoming a brand, and we solve them.</p>
<p class="body-text">The parent company is <strong>Grofesion Innovations Private Limited</strong>. The consulting practice operating under it is <strong>Magsmen Strategy Consultants</strong>. All engagements are delivered under the Magsmen name and governed by Grofesion Innovations.</p>

<div class="pillar-grid">
  <div class="pillar-cell">
    <div class="pillar-cell-num">01</div>
    <div class="pillar-cell-name">Brand Architecture</div>
    <div class="pillar-cell-desc">Positioning, identity, narrative, and communication framework. The strategic foundation a business operates from.</div>
  </div>
  <div class="pillar-cell">
    <div class="pillar-cell-num">02</div>
    <div class="pillar-cell-name">Business Structuring</div>
    <div class="pillar-cell-desc">Revenue model, operational alignment, pricing strategy, and structural decisions that allow a brand to sustain itself commercially.</div>
  </div>
  <div class="pillar-cell">
    <div class="pillar-cell-num">03</div>
    <div class="pillar-cell-name">Legal Brand Protection</div>
    <div class="pillar-cell-desc">IP architecture, trademark strategy, governance, and reputational protection. The legal dimension embedded in every engagement.</div>
  </div>
</div>

<div class="callout-box">
  <p>These three pillars are not separate departments. They are three dimensions of a single intervention. When you build brand strategy at Magsmen, you build across all three simultaneously. A brand strategy that ignores business structure will fail in execution. One that ignores legal protection will be vulnerable the moment it gains market value.</p>
</div>

<div class="section-heading">What We Are Not</div>
<p class="body-text">A client will sometimes arrive expecting a marketing plan, a brand refresh, or a content calendar. Your job is to diagnose what they actually need, not deliver what they thought they wanted. Magsmen does not compete on creative execution. We compete on structural clarity.</p>

<div class="section-heading">The Nine Beliefs That Govern Our Work</div>
<p class="body-text">Every strategic recommendation at Magsmen is rooted in nine foundational beliefs. These are not values on a wall. They are the operating logic of every engagement. Know them before your first client call.</p>

<div class="step-list">
  <div class="belief-item">
    <div class="belief-num">Belief 01</div>
    <div class="belief-title">Brands Are Built by Customers, Not Companies</div>
    <div class="belief-text">A brand lives in the mind of the person who experiences, remembers, defends, and repeatedly chooses it. The company's role is to earn the right for customers to build the brand. Our strategy designs every client interaction and market behaviour so customers arrive at the intended conclusion without being told to.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 02</div>
    <div class="belief-title">Brand Is an Economic Asset, Not a Marketing Tool</div>
    <div class="belief-text">A correctly architected brand commands a price premium, reduces customer acquisition cost, and creates resilience during market volatility. Treat it like a balance sheet asset. Most Indian businesses treat brand as an expense. That is the mistake we are hired to correct.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 03</div>
    <div class="belief-title">Legal Protection Is Brand Strategy, Not a Separate Function</div>
    <div class="belief-text">An unregistered trademark is a brand asset someone else can take. A founder agreement without IP assignment clauses is a threat to ownership structure. A celebrity partnership without reputation protection clauses is a crisis waiting to occur. Legal foresight is embedded in every engagement from Day 1.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 04</div>
    <div class="belief-title">Every Business Has the Right to Become a Brand</div>
    <div class="belief-text">Not just large companies. Not just well-funded startups. The MSME in Guntur, the family textile business in Vijayawada, the first-generation founder in Tirupati each has the structural ability to build a brand that commands respect and pricing power. Our work is to show them how.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 05</div>
    <div class="belief-title">Building Marketing Before Brand Is the Biggest Mistake Indian Founders Make</div>
    <div class="belief-text">Spending on marketing before building brand foundation creates a business that permanently spends on paid attention because it has not earned organic trust. Positioning, identity, narrative, and experience architecture come first. Marketing is amplification of something real, not a substitute for something missing.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 06</div>
    <div class="belief-title">Systems Over Short-Term Wins</div>
    <div class="belief-text">A brand system built correctly in year one generates returns for ten years. A campaign built for this quarter disappears next quarter. We optimise for compounding, not for visibility.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 07</div>
    <div class="belief-title">Businesses That Have Grown Without Structure Are the Most Urgent Opportunity</div>
    <div class="belief-text">Revenue growth through relationships and hard work is real. Brand architecture underneath that growth is missing. One competitor with a sharper brand can displace years of relationship-built business. We go in, find the missing structure, and build it while the business continues to operate.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 08</div>
    <div class="belief-title">Learn. Earn. Return.</div>
    <div class="belief-text">This is the firm's personal philosophy. Learn deeply through research and pattern recognition. Earn through applied strategic work. Return that knowledge to the community through platforms, mentorship, and institutions. Every Magsmen venture reflects this loop.</div>
  </div>
  <div class="belief-item">
    <div class="belief-num">Belief 09</div>
    <div class="belief-title">The Goal Is to Change How Indian Founders Think About Brand, Permanently</div>
    <div class="belief-text">Magsmen is not building a consulting firm. It is building a movement. Success is measured not by client count but by whether Indian founders think about brand differently because of the frameworks and institutions this firm built.</div>
  </div>
</div>

<div class="section-heading">The Firm's Voice Standard</div>
<p class="body-text">Everything you write at Magsmen, including strategy documents, proposals, research reports, and emails, must follow the firm's voice standard. Short declarative sentences. No dashes anywhere in prose. No filler words. No AI language. Claims made through argument, not adjective. Write the way a trusted senior advisor speaks to a founder: direct, warm, structurally confident.</p>
<div class="warning-box"><p>Never use: leverage, synergy, holistic, end-to-end, game-changer, transformative, disruptive, or any word that announces its own importance. If a sentence sounds like it could have been written by anyone, rewrite it until it sounds like Magsmen.</p></div>
`;
}

function m2Body() {
  return `
<div class="module-eyebrow">Module 02</div>
<h1 class="module-title">Our Services</h1>
<p class="module-intro">Magsmen runs eight services. Each one is built around a specific business problem at a specific stage of a client's growth. Your job is not to sell any of these. Your job is to understand each one deeply enough that you can match the right service to the right client problem. A mismatch here wastes everyone's time and damages the firm's positioning.</p>

<div class="callout-box"><p>One rule that applies across every service: a client is never sold something. A client is diagnosed, and the right service is recommended based on what the diagnosis surfaces. If you find yourself pitching a service instead of diagnosing a problem, stop and go back to the discovery questions.</p></div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 01</div>
  <div class="service-name">OTC: One-Time Consulting</div>
  <div class="service-desc">The OTC is Magsmen's entry-level diagnostic. It is not a strategy. It is a diagnosis. Think of it as a structured investigation into why a business is stuck, underperforming, or confused about its next move. A client comes in with symptoms. Magsmen identifies the root cause. Standard fee: INR 50,000 plus GST. Duration: 2 to 3 weeks.</div>

  <div class="section-heading" style="margin-top:20px;">Why this service exists</div>
  <p class="body-text">Most founders know something is wrong with their business. They just cannot name it precisely. They think it is a marketing problem when it is actually a pricing problem. They think it is a team problem when it is actually a structure problem. The OTC is designed to surface that real problem through a structured five-pillar analysis. Once the primary constraint is identified with evidence, the client has a clear direction. Without that clarity, any money spent on execution is likely to go toward the wrong problem.</p>

  <div class="section-heading">How the OTC works, step by step</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>MACES qualification</h4>
        <p>Before the discovery call is scheduled, the business development team runs the prospect through MACES. Does the founder have decision-making authority? Is the budget realistic? Is the problem real and within our scope? If any of these fail, we do not proceed. The OTC is not a price point for hesitant prospects. It is a service for founders who are genuinely committed to understanding their business problem.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>Pre-engagement research</h4>
        <p>Before the first meeting with the client, the Brand Strategy Associate builds a desk research dossier. This covers the business's public digital footprint, the category it operates in, three to five competitors, and any available consumer sentiment. The purpose is to arrive at the discovery meeting with informed observations, not blank questions. You should already have hypotheses when you walk in.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>Discovery meeting</h4>
        <p>This is a 90-minute to 2-hour structured conversation with the founder or leadership team. The Lead Strategist runs the meeting. The Brand Strategy Associate takes structured notes. The questions in this meeting are designed to reveal the business across all five pillars. You are listening for what the founder says and what they avoid saying. Both are data. Three signals to watch for: a founder who cannot describe their customer without describing their product, a founder who lists competitors they do not actually compete with, and a founder whose price ambition does not match their current quality level. These are structural red flags that the strategy must address.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-content">
        <h4>Five-pillar analysis</h4>
        <p>After the discovery meeting, the team analyses the business across five pillars. Legal: is the brand name protected, are there IP gaps, are founder agreements in place, is the regulatory compliance adequate? Brand: is there a clear positioning, is communication consistent, is the visual identity coherent, is there a perception gap between intended and actual? Business: is the revenue model healthy, is the pricing architecture correct, is distribution aligned with the audience, is customer acquisition cost sustainable? Operations: is there documented process, is the delivery consistent, can the business scale without breaking? Team: are roles clear, is there decision-making bottleneck at the founder level, are there capability gaps in critical functions?</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">5</div>
      <div class="step-content">
        <h4>Primary constraint identification</h4>
        <p>Every business has one pillar that is causing the most damage. Solving the secondary constraints before the primary constraint is expensive and ineffective. The Lead Strategist synthesises all five pillar inputs and identifies the primary constraint with specific evidence. This is the most important intellectual output of the OTC. It must be defensible. If a client pushes back on it, you should be able to walk them through the evidence that leads to the conclusion.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">6</div>
      <div class="step-content">
        <h4>Report and debrief</h4>
        <p>The Five-Pillar Audit Report is written, reviewed internally, and delivered to the client. The debrief is a structured conversation where the Lead Strategist walks the client through the findings, explains the primary constraint, and presents the 90-Day Action Roadmap. The debrief also includes a recommendation for the appropriate Magsmen follow-on engagement based on what the diagnosis revealed.</p>
      </div>
    </div>
  </div>

  <div class="service-deliverables">
    <h5>Final Deliverables</h5>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Five-Pillar Audit Report with scored findings and evidence-based reasoning</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Primary Constraint Identification with supporting evidence</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Secondary Constraint Note and recommended sequence for addressing it</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Strategic Direction Summary covering what the business must focus on and why</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Action Roadmap with specific, sequenced, actionable steps</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Recommended follow-on Magsmen engagement</div>
  </div>

  <div class="warning-box"><p>The OTC never includes ongoing advisory, brand creation, visual identity work, vendor management, or execution. If a client asks for any of these during an OTC, redirect them to the appropriate service. Scope creep inside an OTC undermines the diagnostic integrity and underprices the follow-on work.</p></div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 02</div>
  <div class="service-name">Brand Consulting</div>
  <div class="service-desc">Brand Consulting is the foundational strategy service for an established business that is operating without brand clarity. The business exists, has revenue, has a team, but has no clear articulation of who it is for, what makes it different, and how it should communicate. This service builds that foundation. Standard fee: INR 1,00,000 for one brand, INR 1,50,000 for two brands or a group, INR 75,000 per additional brand. Plus GST. Duration: 4 to 8 weeks.</div>

  <div class="section-heading" style="margin-top:20px;">Who this is for</div>
  <p class="body-text">Businesses that have grown through relationships and hustle but now need structure. Businesses that are spending on marketing but not seeing results because the foundation is missing. Businesses preparing to scale, raise investment, or reposition in the market. The typical client here has some market presence and real revenue, but if you ask them to describe their brand in one sentence, they cannot. That inability costs them every time they communicate, every time they price, every time they hire.</p>

  <div class="section-heading">How the engagement runs, week by week</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">W1</div>
      <div class="step-content">
        <h4>Kickoff and information gathering</h4>
        <p>Kickoff call with the client to confirm scope, timeline, and communication protocol. The Brand Strategy Associate begins full research: category landscape, five to seven competitors mapped against two strategic axes, price architecture of the category, consumer sentiment from reviews and social platforms. Any existing brand materials from the client are gathered: logo files, past marketing, vendor briefs, social media. Nothing is assumed to be current or correct.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">W2</div>
      <div class="step-content">
        <h4>Brand audit and competitive analysis</h4>
        <p>The Brand Strategy Associate runs a full audit of the client's current brand state: visual identity coherence, messaging consistency across all touchpoints, digital presence quality, and the gap between intended perception and actual perception. The Competitive Gravity Map is built showing where the client currently sits relative to the market and where genuine whitespace exists. This work is synthesised into an internal diagnostic before any positioning work begins.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">W3</div>
      <div class="step-content">
        <h4>Positioning development</h4>
        <p>The Lead Strategist develops the Brand Positioning Statement based on the audit findings, the competitive map, and the consumer insight research. This goes through internal review before being presented to the client. The Principal Consultant reviews all positioning statements before they leave the firm. This is non-negotiable. A positioning statement that has not been cleared by the Principal Consultant does not go to the client.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">W4-5</div>
      <div class="step-content">
        <h4>Brand architecture and communication framework</h4>
        <p>Once positioning is client-approved, the full Brand Architecture Document is built: purpose, values, personality, promise, and proof points. The Brand Communication Framework is built on top of the architecture, defining the message ladder from brand promise to audience-specific messaging. The Visual Identity Direction Brief is written for the creative vendor to brief against. All of these go through internal review before client delivery.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">W6-8</div>
      <div class="step-content">
        <h4>90-Day Action Plan and delivery</h4>
        <p>The 90-Day Brand Action Plan sequences the implementation steps for the client's team. It covers what to do first, what to brief vendors on, what internal alignment sessions to run, and how to measure whether the brand is being consistently applied. The full deliverable set is packaged, reviewed, and delivered in a structured debrief session with the client team.</p>
      </div>
    </div>
  </div>

  <div class="service-deliverables">
    <h5>Final Deliverables</h5>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Audit Report covering identity, communication, digital presence, competitive position</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Positioning Statement</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Architecture Document (purpose, values, personality, promise, proof points)</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Competitive Gravity Map</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Communication Framework with message ladder</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Visual Identity Direction Brief for creative vendor</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Brand Action Plan</div>
  </div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 03</div>
  <div class="service-name">Brand Creation — 13-Stage Framework</div>
  <div class="service-desc">Brand Creation is Magsmen's most comprehensive engagement. It is end-to-end brand building for a new brand or a complete rebuild. Every stage is sequential. Every stage has a gate. No stage begins until the previous stage's output is reviewed and cleared. Standard fee: custom, typically from INR 5,00,000 plus GST. Duration: 12 to 20 weeks depending on complexity.</div>

  <div class="section-heading" style="margin-top:20px;">The 13 stages in full</div>

  <table class="stage-table">
    <tr><th>Stage</th><th>Name</th><th>What the team does</th></tr>
    <tr><td>01</td><td>Discovery and Founder Intent Mapping</td><td>90-minute to 2-hour structured session with the founder. The Lead Strategist maps the founder's vision, business model, product description, market understanding, and the tensions or constraints they are aware of. The Brand Strategy Associate builds the pre-session dossier. Outputs: Founder Intent Summary, Business Ambition Clarity Note, Initial Brand Opportunity Hypothesis.</td></tr>
    <tr><td>02</td><td>Market and Category Intelligence</td><td>Full competitive landscape mapping. 6 to 10 competitors positioned on a two-axis matrix. Price architecture of the category mapped from floor to ceiling. Consumer expectation patterns researched through reviews, forums, and available studies. Brand narratives dominating the category identified. Outputs: Category Map, Competitive Positioning Matrix, Customer Insight Summary, Opportunity Gap Analysis.</td></tr>
    <tr><td>03</td><td>Business Feasibility Validation</td><td>The strategy team evaluates whether the client's business can operationally deliver on the positioning direction being considered. Margin structure is checked. Production capability is assessed. Distribution infrastructure is evaluated. Team capability is reviewed. A positioning direction is only viable if the business can actually support it. This stage either confirms the direction or reveals structural constraints that must be resolved first.</td></tr>
    <tr><td>04</td><td>Strategic Positioning Development</td><td>The Lead Strategist builds the Brand Positioning Statement. The Target Audience Definition is finalised with demographic, psychographic, and behavioural layers. The Value Narrative is written, a 1 to 2 page internal document that expands the positioning statement and explains how the brand creates value at functional, emotional, and identity levels. The Principal Consultant reviews and approves before Stage 5 begins.</td></tr>
    <tr><td>05</td><td>Product and Value Architecture</td><td>Every product decision is evaluated against the positioning. Packaging structure, product sizes and SKUs, pricing strategy, and bundle options are all tested for alignment with the positioning defined in Stage 4. Price is treated as a positioning signal, not a margin decision. A product that claims to be premium but prices at the category midpoint sends a contradictory message before the customer has even tried it.</td></tr>
    <tr><td>06</td><td>Brand Naming</td><td>The naming process begins with a linguistic and cultural brief. Candidate names are generated across five naming categories: descriptive, associative, abstract, coined, and human. Each candidate is assessed for phonetic strength, cultural appropriateness, regional market fit, and trademark availability. Trademark screening on IP India's portal is mandatory. 3 to 5 validated options are presented with full rationale for each.</td></tr>
    <tr><td>07</td><td>Visual Identity Development</td><td>The Visual Identity Direction Brief from Stage 5 is handed to the creative vendor. Magsmen supervises the visual identity development process. The brand team reviews every creative output against the positioning brief, not against personal preference. The question is always: does this visual language express the positioning without the customer needing to read a single word?</td></tr>
    <tr><td>08</td><td>Legal and IP Review</td><td>Trademark filing coordination is initiated for the approved name across the relevant classes. The Legal Brand Protection dimension of the architecture is reviewed: are founder agreements IP-complete, are vendor contracts IP-appropriate, are partnership agreements crisis-ready? The team does not provide legal advice. They identify the gaps and coordinate with the Principal Consultant on legal escalation.</td></tr>
    <tr><td>09</td><td>Brand Communication Architecture</td><td>The messaging hierarchy is built from the Brand Architecture Document. Tone of voice guidelines are established defining what the brand always says, what it never says, and how it handles specific contexts including complaints, competitor comparisons, and public criticism. Content guidelines are written covering format, length, frequency, and channel-specific adaptation.</td></tr>
    <tr><td>10</td><td>Operational Readiness</td><td>The strategy team checks whether the client's operational reality can consistently deliver what the brand has now promised. Are the customer service standards in place? Is the quality control consistent? Can the team communicate the brand at every touchpoint? Gaps identified here are documented and given to the client as a pre-launch action list.</td></tr>
    <tr><td>11</td><td>Internal Brand Alignment</td><td>The client's team must understand the brand architecture before the brand is launched externally. An internal alignment session is run, walking the client's key team members through the positioning, the architecture, the communication framework, and the brand standards. The output is a team that can represent the brand consistently before it faces the market.</td></tr>
    <tr><td>12</td><td>Launch Strategy Planning</td><td>The go-to-market plan is built. Channels are selected based on where the audience actually is. Launch sequence is designed: what goes first, what follows, and why. Measurement markers are defined so that the brand's market performance can be evaluated against specific, observable indicators at 30, 60, and 90 days post-launch.</td></tr>
    <tr><td>13</td><td>Post-Launch Strategic Audit</td><td>At 90 days post-launch, the strategy team reviews actual market performance against the planned strategy. What was executed versus what was planned? What produced the expected result and what did not? This is where the Principal Consultant comes in for the review, comparing planned strategy, executed strategy, and real market results. Adjustments are recommended and the governance handover document is finalised.</td></tr>
  </table>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 04</div>
  <div class="service-name">Brand Expresso</div>
  <div class="service-desc">Brand Expresso is a 90-day focused engagement built around one specific, clearly defined brand or business problem. This is not a full brand creation. It is a precision intervention for a business that has one identifiable, high-stakes problem that needs to be solved fast and correctly. For businesses facing: positioning confusion, failed product launch, market entry barrier, pricing perception problem, or category disruption. Standard fee: from INR 3,00,000 plus GST.</div>

  <div class="section-heading" style="margin-top:20px;">What makes this different from Brand Consulting</div>
  <p class="body-text">Brand Consulting builds a full brand foundation. Brand Expresso solves one problem. The client who comes to Brand Expresso already has a brand. They have a specific problem that is costing them market share, revenue, or momentum, and they need it solved in a defined timeframe. The engagement is tighter, faster, and more focused. The diagnosis is narrower. The solution is deeper in one area instead of broad across all areas.</p>

  <div class="section-heading">Three phases in detail</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">Days 1-30</div>
      <div class="step-content">
        <h4>Diagnosis and Strategy</h4>
        <p>The Brand Strategy Associate runs full research on the specific problem: market context, competitor responses to similar situations, consumer perception data, and any available internal performance data from the client. The Lead Strategist conducts a structured diagnostic session with the client and develops the Problem Diagnosis Report. The Strategic Solution Framework is built and reviewed internally before being presented to the client. No solution work begins until the diagnosis is confirmed by the client and approved by the Principal Consultant.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">Days 31-60</div>
      <div class="step-content">
        <h4>Solution Build</h4>
        <p>The strategy team builds the specific solution to the diagnosed problem. This could be a repositioning framework, a new communication architecture, a pricing strategy, a market entry plan, or a launch framework. The solution is built in detail, reviewed internally, refined based on feedback, and presented to the client at the Day 60 review. Vendor briefs are prepared if creative or production vendors are needed for execution.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">Days 61-90</div>
      <div class="step-content">
        <h4>Implementation Preparation and Review</h4>
        <p>The Execution Plan is written: step-by-step implementation instructions for the client's team and vendors. The Brand Strategy Associate begins working alongside the client team on implementation. Progress is reviewed at Day 75 with course corrections documented. At Day 90, the 90-Day Completion Report is delivered comparing what was planned, what was executed, and what results are showing at this early stage. The Principal Consultant leads the Day 90 review.</p>
      </div>
    </div>
  </div>

  <div class="service-deliverables">
    <h5>Final Deliverables</h5>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Problem Diagnosis Report with root cause analysis</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Strategic Solution Framework specific to the diagnosed problem</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Execution Plan with step-by-step implementation instructions</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Vendor Briefs where applicable</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>Day 30 and Day 60 progress reviews with documented course corrections</div>
    <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Completion Report: planned vs executed vs results</div>
  </div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 05</div>
  <div class="service-name">Stature by Magsmen</div>
  <div class="service-desc">Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. This is not personal branding in the commoditised social media sense. This is the structured building and governance of credibility, authority, and perception for individuals who are in, or moving toward, positions of significant public visibility. For founders, CEOs, politicians, senior executives, and public figures.</div>

  <div class="section-heading" style="margin-top:20px;">The Four Tiers</div>
  <p class="body-text">Stature operates across four tiers. Each tier is defined by the individual's current level of public visibility and the complexity of the brand management required. The tier determines the scope of work, the team composition, and the fee structure.</p>

  <div class="info-grid">
    <div class="info-card">
      <div class="info-card-num">T1</div>
      <div class="info-card-label">Foundation</div>
      <div class="info-card-desc">For individuals building their professional presence from a low base. Focus is on perception clarity, platform choice, and a basic narrative architecture. Shorter engagement, smaller team.</div>
    </div>
    <div class="info-card">
      <div class="info-card-num">T2</div>
      <div class="info-card-label">Authority</div>
      <div class="info-card-desc">For individuals with existing credibility in their field who need to systematise and amplify it. Focus on positioning within their category, content architecture, and association strategy.</div>
    </div>
    <div class="info-card">
      <div class="info-card-num">T3</div>
      <div class="info-card-label">Prominence</div>
      <div class="info-card-desc">For individuals with significant public visibility managing multiple audiences and growing reputational exposure. Includes crisis preparedness and media strategy. Full team engagement.</div>
    </div>
    <div class="info-card">
      <div class="info-card-num">T4</div>
      <div class="info-card-label">Legacy</div>
      <div class="info-card-desc">For individuals at the peak of their public presence managing legacy, transition, and institutional impact. Long-term advisory. Most complex engagement. Founder-led.</div>
    </div>
  </div>

  <div class="section-heading">How the engagement runs</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>Perception Audit</h4>
        <p>Before any strategy is built, the team conducts a full perception audit of the individual. What does someone who searches for this person find? How do media, peers, colleagues, and audiences describe them? What is the gap between how they intend to be perceived and how they are actually perceived? This audit is the diagnostic baseline for everything that follows.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>Personal Brand Architecture</h4>
        <p>The identity statement is built: who this person is as a brand, what they stand for, what unique position they occupy, and what emotional territory they own. The authority positioning is defined: in which conversations should this person be sought out? On what topics do they have the right to speak with authority? The narrative framework defines the story arc of their career, values, and vision that connects all their communication.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>Platform and Channel Strategy</h4>
        <p>Where should this person be visible? What role should each platform play? What should they never do on each platform? The strategy maps presence across LinkedIn, Instagram, YouTube, speaking circuits, panel appearances, media interviews, and editorial contributions depending on tier and audience. Each channel is assigned a specific strategic purpose. Presence without purpose creates noise, not authority.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-content">
        <h4>Content Framework and Crisis Preparedness</h4>
        <p>The content framework defines what the individual communicates, how frequently, in what formats, and with what tone across each platform. For Tier 3 and Tier 4 engagements, a Crisis Preparedness Framework is built: what are the current vulnerabilities, what scenarios could damage reputation, and what is the specific response protocol for each? This is legal-adjacent work. The Founder reviews all crisis frameworks before delivery.</p>
      </div>
    </div>
  </div>

  <div class="warning-box"><p>Stature engagements involve highly sensitive personal disclosures. Financial situations, family circumstances, legal matters, and health information are shared in the course of discovery. Nothing from a Stature engagement is ever referenced externally, including internally among team members not directly on the engagement. If you are not assigned to a Stature engagement, you have no access to its contents. This standard is absolute.</p></div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 06</div>
  <div class="service-name">Linkfluence</div>
  <div class="service-desc">Linkfluence is LinkedIn positioning and content strategy for founders and professionals. It is not content creation, ghostwriting, or social media management. It is the strategic architecture of how an individual should present, position, and communicate on LinkedIn to build genuine professional authority over time. Standard fee: INR 30,000 plus GST. Duration: 3 to 4 weeks.</div>

  <div class="section-heading" style="margin-top:20px;">What this engagement actually produces</div>
  <p class="body-text">LinkedIn is the only professional platform where positioning, content, and network interact in real time to build authority. Most founders treat it as a distribution channel for news about their company. That misses the point entirely. Linkfluence teaches a founder how to own a specific intellectual territory on LinkedIn so that the right audience begins to associate them with a specific type of thinking. That association becomes authority. That authority becomes inbound opportunity.</p>

  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>Profile and Positioning Audit</h4>
        <p>The Brand Strategy Associate audits the client's current LinkedIn profile against the standard of someone who owns a clear professional territory. Headline, about section, experience framing, featured section, and the overall impression created in the first five seconds. What does a stranger conclude about this person after 30 seconds on their profile? Is that the intended conclusion? The audit documents the gap.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>LinkedIn Positioning Statement</h4>
        <p>A LinkedIn positioning statement is different from a brand positioning statement. It answers: who should follow this person on LinkedIn and what will they get from doing so? It defines the intellectual territory the person will own. It must be specific enough that someone reading it immediately knows whether they are the right audience. Generic positioning ("I share insights on business and leadership") is not positioning. It is noise.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>Content Strategy and Calendar Framework</h4>
        <p>The content strategy defines what topics the client will own, what formats they will use, how frequently they will post, and what tone they will maintain. The 90-Day Content Calendar Framework gives them a structural plan for the first three months: not written content, but a topic structure and post type sequence they can follow with their own writing. The goal is a content system that compounds authority over time, not viral posts that produce spikes and fade.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-content">
        <h4>Engagement Protocol</h4>
        <p>How to build the network strategically. Who to connect with and why. How to respond to comments in a way that builds authority rather than depleting it. What to avoid: the common positioning errors that undermine credibility even when the content is good. The engagement protocol also covers how to handle public criticism, disagreement, and unsolicited advice in ways that strengthen rather than damage the professional brand.</p>
      </div>
    </div>
  </div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 07</div>
  <div class="service-name">Brand Naming</div>
  <div class="service-desc">Brand Naming is the strategic creation of a name for a new brand, product, project, or sub-brand. This is linguistic and strategic work. It is not a creative brainstorm. Every name recommended by Magsmen must meet five criteria simultaneously: commercially viable, phonetically strong, culturally appropriate for the target market, legally available across the relevant trademark classes, and strategically aligned with the intended positioning. Standard fee: from INR 75,000 plus GST.</div>

  <div class="section-heading" style="margin-top:20px;">How the naming process works</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>Naming Brief</h4>
        <p>Before any names are generated, the team builds a naming brief. This covers the positioning the name must support, the target audience and their cultural context, the emotional register the name should carry, what the name must not suggest, the linguistic constraints (length, syllable count, language preference), and any existing name elements that must be preserved or excluded. A naming brief that is not detailed enough produces names that are not specific enough.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>Name generation across five categories</h4>
        <p>Descriptive names: names that describe what the brand does or who it is for. Associative names: names that evoke the positioning through an association rather than a description. Abstract names: names with no inherent meaning that carry a sound or rhythm that fits the positioning. Coined names: invented words or creative compounds. Human names: proper names used as brand identifiers. Each category has different strategic implications for recall, protectability, and scalability. The brief determines which categories to prioritise.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>Screening and shortlisting</h4>
        <p>All generated names are put through a four-layer screen. Phonetic: does the name work when spoken aloud in the relevant languages and regional accents? Cultural: does the name carry any unintended connotations in the target market? Digital: is the domain available, and does the name return clean search results? Legal: is the name available for registration in the relevant trademark classes on the IP India portal? Any name that fails any of these screens is eliminated before the shortlist is presented.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-content">
        <h4>Presentation of validated options</h4>
        <p>3 to 5 validated names are presented with the full rationale for each: why the name was selected, what positioning it supports, what linguistic and cultural considerations informed it, and a summary of the trademark screening results. The client then selects and the team proceeds to final validation and filing coordination with a trademark attorney.</p>
      </div>
    </div>
  </div>
</div>

<div class="module-divider"></div>

<div class="service-card">
  <div class="service-tag">Service 08</div>
  <div class="service-name">Retainer</div>
  <div class="service-desc">A Retainer is an ongoing strategic advisory relationship between Magsmen and a client. It is not a project with a start and end date. It is not a subscription to a set number of deliverables per month. It is an embedded strategic partnership where Magsmen is available as the client's thinking partner and strategic advisor across all brand, business, and legal brand protection decisions over a defined period.</div>

  <div class="section-heading" style="margin-top:20px;">What retainers actually cover</div>
  <p class="body-text">A retainer client can bring any brand or business decision to Magsmen during the retainer period. A new product launch. A competitor's move that needs a response. A communication that needs review before it goes out. A hiring decision with brand implications. A pricing change that affects positioning. A crisis situation that needs a strategic response. The retainer means Magsmen is in the room for all of it, not just at a quarterly project meeting.</p>
  <p class="body-text">Retainers are scoped and priced individually. The fee depends on the frequency and depth of engagement required, the complexity of the business, and the composition of the Magsmen team assigned. Every retainer has a defined scope of what is covered and what falls outside the retainer and would be scoped separately.</p>

  <div class="section-heading">How retainer work flows operationally</div>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <h4>Monthly strategic review</h4>
        <p>Every retainer includes at least one monthly strategic review call. The agenda covers what decisions the client has made in the past month that have brand implications, what is coming in the next month that needs strategic input, and any market developments that require a strategic response.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <h4>On-demand advisory</h4>
        <p>Between monthly reviews, the client can bring questions and decisions to the team within the response time defined in the retainer scope. The Brand Strategy Associate handles initial intake and routes the question to the Lead Strategist or Principal Consultant depending on the complexity and stakes of the decision.</p>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <h4>Ongoing strategy evolution</h4>
        <p>Markets change. Competitors move. Consumer behaviour shifts. A retainer allows the brand strategy to evolve in response to market feedback rather than being locked into a document that was accurate at the time of writing but becomes outdated. The strategy team tracks the client's market performance and recommends adjustments at each monthly review based on what the data is showing.</p>
      </div>
    </div>
  </div>
</div>
`;
}

function m3Body() {
  return `
<div class="module-eyebrow">Module 03</div>
<h1 class="module-title">How We Research</h1>
<p class="module-intro">Research at Magsmen is not information gathering. It is structured intelligence that drives every strategic decision. Every engagement at Magsmen begins with research before any strategy is formed. A strategy without research is an opinion. We do not sell opinions.</p>

<div class="section-heading">The Research Philosophy</div>
<p class="body-text">Brand Strategy Associates at Magsmen do not present raw data to Lead Strategists. They present synthesised insight. Every finding must be expressed as a strategic implication. The question is never "what does the data show?" The question is always "what does this data mean for the brand we are building?" A research output that cannot be directly connected to a strategic decision is incomplete.</p>

<div class="section-heading">Phase 1: Pre-Engagement Research</div>
<p class="body-text">Before the first client meeting, the Brand Strategy Associate builds a pre-session dossier. This is standard, non-negotiable, and must be completed before any discovery call occurs.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Business Profile Research</h4>
      <p>Who is the founder? What is the business? What sector does it operate in? What is publicly known about revenue, team size, and market presence? Sources: website, LinkedIn, news coverage, company registrar data (MCA21), GST portal where relevant.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Category Overview</h4>
      <p>What category does this business operate in? What are the market size estimates? Who are the dominant players? What are the pricing conventions? Sources: IBEF, NASSCOM, Redseer, Statista, industry-specific analyst reports.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Digital Footprint Audit</h4>
      <p>Review the client's website, all active social media profiles, Google reviews, any e-commerce listings, and any media coverage. Document tone, visual consistency, messaging, and audience sentiment.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Initial Signal List</h4>
      <p>Based on the above, note three to five early signals about likely constraints or opportunities. These are hypotheses, not conclusions. They guide what questions the Lead Strategist asks in discovery.</p>
    </div>
  </div>
</div>

<div class="section-heading">Phase 2: Category Intelligence</div>
<p class="body-text">This is the structured mapping of the environment the brand will operate in. For Brand Creation engagements, this is a full Stage 2 deliverable. For OTC and Brand Consulting, it is proportionate to scope.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Competitor Positioning Analysis</h4>
      <p>Identify 6 to 10 relevant brands. For each: positioning claim, target audience, emotional territory, and dominant communication themes. Map each on a two-axis matrix using dimensions most relevant to the category. Identify which positioning territories are overcrowded and which are open.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Price Architecture</h4>
      <p>Map the full price spectrum. Identify price clusters where most products sit, the threshold between mass and premium, and what differentiates brands at different price points. Note where structural gaps in pricing exist.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Consumer Expectation Patterns</h4>
      <p>What is the minimum acceptable standard in this category? What drives loyalty? What causes switching? What are the functional and emotional jobs customers are hiring this category for? Use review platforms, community forums, social commentary, and where feasible, direct consumer interviews.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Dominant Narratives</h4>
      <p>What story does the market leader tell? Which narratives are overused to the point of ineffectiveness? Which narratives resonate but are unclaimed by any major brand? This directly informs the positioning work in subsequent stages.</p>
    </div>
  </div>
</div>

<div class="section-heading">Phase 3: Digital and Sentiment Research</div>
<p class="body-text">Social listening and review analysis are core research inputs, not optional additions. The specific words, comparisons, and frustrations that recur in customer language are direct inputs to the communication strategy.</p>
<div class="info-grid">
  <div class="info-card">
    <div class="info-card-label">Review Analysis</div>
    <div class="info-card-desc">Amazon, Google, Zomato, or any vertically relevant platform. Extract recurring praise and recurring complaints. Note the specific language customers use.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Social Listening</div>
    <div class="info-card-desc">What is the ongoing conversation about the category and key brands on Instagram, LinkedIn, and YouTube? Which content formats generate the most engagement in this category?</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Regional Context</div>
    <div class="info-card-desc">For AP and Telangana clients: regional pricing norms, cultural values, Telugu consumer preferences, and local competitive dynamics. Regional context is always relevant in our primary markets.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Job Listings</div>
    <div class="info-card-desc">What a company is actively hiring for reveals strategic direction, growth areas, and internal capability gaps that the client may not disclose directly.</div>
  </div>
</div>

<div class="section-heading">Research Sources by Purpose</div>
<table class="stage-table">
  <tr><th>Purpose</th><th>Sources</th></tr>
  <tr><td>Market sizing</td><td>IBEF, Redseer, NASSCOM, Statista, FICCI, CII sector reports</td></tr>
  <tr><td>Consumer behaviour</td><td>Nielsen, Kantar, Ipsos, academic journals, Google Trends, social listening</td></tr>
  <tr><td>Competitor intelligence</td><td>Brand websites, annual reports, MCA21, LinkedIn, social media, press coverage</td></tr>
  <tr><td>Consumer sentiment</td><td>Google Reviews, Amazon reviews, Reddit, Twitter, Quora, YouTube comments</td></tr>
  <tr><td>Legal and trademark</td><td>CGPDTM IP India portal (ipindia.gov.in), MCA21, RoC filings</td></tr>
  <tr><td>Financial data</td><td>MCA21, CMIE, RBI databases, BSE/NSE filings where applicable</td></tr>
  <tr><td>Regional trends</td><td>AP Economic Development Board, ASSOCHAM AP, Telangana ITES reports, local news</td></tr>
</table>

<div class="warning-box"><p>Never present raw data without interpretation. If you cannot explain what a data point means for the client's strategy, the research is not ready. The standard is: every finding must answer the question "so what?" before it is shared with the Lead Strategist.</p></div>
`;
}

function m4Body() {
  return `
<div class="module-eyebrow">Module 04</div>
<h1 class="module-title">Consumer Analysis and Persona Building</h1>
<p class="module-intro">Every brand exists in relationship with a customer. The quality of your consumer analysis directly determines the quality of the positioning strategy. Shallow consumer understanding produces generic positioning. Precise consumer understanding produces defensible positioning.</p>

<div class="section-heading">The Consumer Analysis Philosophy</div>
<p class="body-text">Consumer analysis at Magsmen does not produce a generic audience profile. It produces a precise understanding of what the customer wants that the current market is not fully providing. That gap is the opening the brand enters through. Without that gap, there is no positioning. Without positioning, there is no brand.</p>

<div class="section-heading">Three Layers of Consumer Understanding</div>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Demographics</h4>
      <p>Age range, income bracket, geographic location, professional or lifestyle context. Demographics tell you who the customer is in measurable terms. They set the boundary of the audience. They do not explain why the customer buys or what they actually value. Demographics are the starting point, not the conclusion.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Psychographics</h4>
      <p>Values, aspirations, beliefs about the category, and attitudes toward brands in this space. Psychographics explain what the customer is trying to feel, achieve, or express through the brands they choose. Two customers with identical demographics can have entirely different psychographic profiles. Positioning is built on psychographics, not demographics.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Behavioural Patterns</h4>
      <p>Purchase frequency, channel preference, information-seeking behaviour, loyalty patterns, and switching triggers. Behavioural data shows what the customer actually does, which sometimes differs significantly from what they say they do. This layer is critical for market entry strategy and distribution decisions.</p>
    </div>
  </div>
</div>

<div class="section-heading">The Core Tension Method</div>
<p class="body-text">The most important question in consumer analysis is not "who is the customer?" It is "what does this customer want that the current market is not fully giving them?" This unmet want is the core tension. The core tension is the opening the brand enters through.</p>
<div class="callout-box">
  <p>Example: A consumer in the premium food category wants to trust that a product claiming to be "natural" actually is. The market is full of natural claims. None of them are credible. The core tension is: the desire for genuine transparency in a category full of packaging-level deception. A brand that credibly solves this tension owns a defensible position. That is how you find the gap.</p>
</div>

<div class="section-heading">Building a Consumer Persona</div>
<p class="body-text">A consumer persona at Magsmen is not a fictional character with a name and a stock photo. It is a structured synthesis of research findings that tells the strategy team exactly who the brand is for, why they buy, what they fear, what they aspire to, and what would make them switch. It is a working document, not a marketing asset.</p>

<table class="stage-table">
  <tr><th>Dimension</th><th>What to Define</th></tr>
  <tr><td>Context</td><td>Where they live, what they do, what they earn, what life stage they are in</td></tr>
  <tr><td>Category relationship</td><td>How they currently buy in this category, their experience, their frustrations</td></tr>
  <tr><td>Aspirations</td><td>What outcome they are actually trying to achieve by purchasing in this category</td></tr>
  <tr><td>Fear and risk</td><td>What would prevent them from trying a new brand, what they are afraid of getting wrong</td></tr>
  <tr><td>Language</td><td>The exact words they use to describe their need, problem, or desired outcome</td></tr>
  <tr><td>Decision triggers</td><td>What specifically causes them to try something new or switch from something existing</td></tr>
  <tr><td>Loyalty drivers</td><td>What would make them stay with a brand and refer it to others</td></tr>
</table>

<div class="section-heading">Indian Consumer Specifics</div>
<p class="body-text">Indian consumer behaviour has structural characteristics that affect every brand strategy decision. You must understand these before you build a persona.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Trust Before Transaction</h4>
      <p>Indian consumers, particularly in Tier 2 and Tier 3 cities, make brand decisions based on trust-building over time more than on advertising claims. Word of mouth, local authority figures, and visible community presence carry more weight than national campaigns. Build trust mechanisms into the brand strategy before building awareness mechanisms.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Price Sensitivity Is Not the Same as Value Insensitivity</h4>
      <p>Indian consumers at most income levels are highly responsive to perceived value. They will pay a premium for something they believe is genuinely better. They will not pay a premium for something they believe is only presented as better. The strategy must make the superiority real, not just claimed.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Family and Social Context</h4>
      <p>In Indian markets, particularly in the categories of food, health, education, and real estate, purchase decisions are often made within a family or community context. The persona must account for the influencers in the purchase decision, not only the buyer.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Regional Identity</h4>
      <p>For clients operating in Andhra Pradesh and Telangana, cultural identity, local language, regional pride, and family values are not optional considerations. They are strategic inputs. A brand that is perceived as understanding the regional context builds trust faster than one that imports a national template.</p>
    </div>
  </div>
</div>

<div class="section-heading">How Consumer Analysis Drives Positioning</div>
<p class="body-text">Consumer analysis is not a standalone exercise. It is the input that determines where the brand positions. The persona's core tension, combined with the competitive gap identified in research, produces the positioning opportunity. Every subsequent strategic decision, from naming to communication to pricing, must be tested against the persona.</p>
<div class="callout-box"><p>Ask this before finalising any positioning: if the consumer persona read this positioning statement, would they immediately recognise that this brand is for them? If the answer requires any explanation, the positioning is not clear enough.</p></div>

<div class="section-heading">Behavioural Insights in Strategy</div>
<p class="body-text">Behavioural economics provides tools that inform brand strategy. The following concepts are directly applicable to the work we do.</p>
<div class="info-grid">
  <div class="info-card">
    <div class="info-card-label">Anchoring</div>
    <div class="info-card-desc">The first price or quality signal a consumer encounters sets their reference point for everything that follows. Pricing strategy must account for where the brand will be seen first.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Social Proof</div>
    <div class="info-card-desc">Indian consumers heavily weight peer behaviour. A brand strategy that does not build in visible social proof mechanisms is underutilising one of the most powerful purchasing triggers in this market.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Loss Aversion</div>
    <div class="info-card-desc">People feel the pain of losing more strongly than the pleasure of gaining. Communication that frames the cost of not choosing the brand is often more effective than communication that frames the benefit of choosing it.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Category Defaults</div>
    <div class="info-card-desc">Every category has a default behaviour. When a consumer does not have a strong preference, they revert to the default. A brand that becomes the default in a specific segment owns that segment.</div>
  </div>
</div>
`;
}

function m5Body() {
  return `
<div class="module-eyebrow">Module 05</div>
<h1 class="module-title">How We Analyse</h1>
<p class="module-intro">Analysis at Magsmen is the bridge between raw research and strategic output. The frameworks in this module are the tools you use to make sense of what the research surfaces. Know them precisely. Apply them consistently. They are not templates. They are thinking structures.</p>

<div class="section-heading">The Five-Pillar OTC Diagnostic</div>
<p class="body-text">The Five-Pillar framework is Magsmen's primary diagnostic tool. It analyses any business across five dimensions. The purpose is not to score each pillar in isolation. The purpose is to identify which pillar contains the primary constraint blocking the business from its next stage of growth.</p>
<table class="stage-table">
  <tr><th>Pillar</th><th>What Is Evaluated</th></tr>
  <tr><td>Legal</td><td>Trademark protection, IP ownership structure, contracts, regulatory compliance, founder agreements, governance gaps</td></tr>
  <tr><td>Brand</td><td>Positioning clarity, communication consistency, visual identity coherence, audience alignment, perception vs intended positioning</td></tr>
  <tr><td>Business</td><td>Revenue model health, customer acquisition cost, pricing architecture, distribution structure, margin sustainability</td></tr>
  <tr><td>Operations</td><td>Process documentation, delivery consistency, team structure, scalability constraints, quality control</td></tr>
  <tr><td>Team</td><td>Role clarity, decision-making structure, capability gaps, leadership bottlenecks, culture alignment</td></tr>
</table>
<div class="callout-box"><p>The Five-Pillar model produces one output above all others: the Primary Constraint. Every pillar gets attention, but one pillar is causing the most damage. Solving the secondary constraints before the primary constraint is expensive and ineffective. Sequence matters.</p></div>

<div class="section-heading">The Competitive Gravity Map</div>
<p class="body-text">The Competitive Gravity Map is a two-axis positioning matrix that places a client brand relative to five competitors. The two axes are chosen based on the most meaningful tensions in the specific category. Common axis pairs: premium versus accessible; functional versus emotional; traditional versus contemporary; broad versus specialist.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Select the Two Most Relevant Axes</h4>
      <p>The axes must reflect genuine strategic decisions in the category. Avoid generic axes that apply to every category. The right axes make competitors cluster visibly and reveal at least one genuinely open space.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Plot Five Competitors Plus the Client</h4>
      <p>Base the placement on evidence from research, not assumption. Use pricing, communication, channel, and consumer perception data to justify each placement.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Identify Open Territory</h4>
      <p>Where is the map empty? Is any unclaimed space actually credible for the client to occupy? A space is only a genuine opportunity if the client has the operational and commercial ability to deliver what that position requires.</p>
    </div>
  </div>
</div>

<div class="section-heading">The Brand Health Index</div>
<p class="body-text">Magsmen tracks brand health across five metrics. These are assessed at the start of an engagement as a baseline and revisited in post-engagement reviews. They form the measurable dimension of the strategy's effectiveness.</p>
<table class="stage-table">
  <tr><th>Metric</th><th>What It Measures</th></tr>
  <tr><td>Awareness</td><td>What percentage of the target audience can identify the brand unprompted or prompted</td></tr>
  <tr><td>Perception</td><td>How the brand is described by people who know it, versus how the brand intends to be described</td></tr>
  <tr><td>Trust</td><td>Whether existing customers would rely on this brand for an important decision in the category</td></tr>
  <tr><td>Emotional Recall</td><td>What emotion or association surfaces first when the brand name is encountered</td></tr>
  <tr><td>Advocacy</td><td>Whether existing customers recommend the brand without being asked to</td></tr>
</table>

<div class="section-heading">The Perception Audit</div>
<p class="body-text">The Perception Audit compares how a brand intends to be perceived with how it is actually perceived. The gap between intended and actual perception is the strategic problem. Strategy work closes that gap.</p>
<p class="body-text">Sources for actual perception: customer reviews, social media commentary, direct consumer feedback, mystery shopping where feasible, and review of how third parties describe the brand in press and online. Intended perception is derived from the client's own articulation of their brand identity, which may be formal or informal, documented or undocumented.</p>

<div class="section-heading">The MACES Qualification System</div>
<p class="body-text">MACES is used in business development, not in client work. It is the framework for qualifying whether a prospect is a suitable Magsmen client before discovery begins. Every potential engagement is evaluated against it.</p>
<table class="stage-table">
  <tr><th>Letter</th><th>Dimension</th><th>The Question</th></tr>
  <tr><td>M</td><td>Money</td><td>Does the prospect have the financial capacity for the engagement?</td></tr>
  <tr><td>A</td><td>Authority</td><td>Is the person we are speaking with authorised to make the engagement decision?</td></tr>
  <tr><td>C</td><td>Commitment</td><td>Is the prospect ready to act now, or are they in perpetual evaluation mode?</td></tr>
  <tr><td>E</td><td>Engagement Fit</td><td>Does their business problem match a service Magsmen genuinely provides?</td></tr>
  <tr><td>S</td><td>Sanity Check</td><td>Is this a client whose values, expectations, and working style align with Magsmen's?</td></tr>
</table>
<div class="warning-box"><p>A client who fails MACES is not rejected. They are redirected. If the timing is wrong, they may be a correct prospect in 6 to 12 months. The purpose of MACES is not to exclude clients. It is to prevent engagements that will fail due to structural misfit.</p></div>

<div class="section-heading">The Brand Volatility Matrix</div>
<p class="body-text">The Brand Volatility Matrix assesses how vulnerable a brand is to external disruption. It evaluates the brand across four risk dimensions: market dependence, positioning concentration, communication fragility, and legal exposure. The output identifies which vulnerabilities require immediate structural intervention and which are manageable with monitoring.</p>
`;
}

function m6Body() {
  return `
<div class="module-eyebrow">Module 06</div>
<h1 class="module-title">Brand Architecture</h1>
<p class="module-intro">Brand architecture is not a document. It is the structural system a brand operates from. Every communication decision, every identity choice, every product or service addition will be tested against this architecture. Getting it right is the most important thing you will do in any brand engagement.</p>

<div class="section-heading">What Brand Architecture Is</div>
<p class="body-text">Brand architecture defines who the brand is, what it stands for, who it serves, and why that position is defensible against competition and credible to the customer. It is the operating system behind every external-facing brand decision.</p>
<p class="body-text">A brand without architecture is not a brand. It is a name on a product. The name on a product changes when a competitor undercuts on price, or when a customer finds something slightly more appealing. A brand with architecture stays consistent because it is built on something the competitor cannot easily copy: a clear position in the customer's mind, earned through consistent experience and communication over time.</p>

<div class="section-heading">The Brand Positioning Statement</div>
<p class="body-text">The positioning statement is the most precise piece of writing in any brand engagement. It is a single sentence that defines where the brand stands, who it serves, and why it has the right to stand there. It is written for internal use, not external communication. Every creative, communication, and product decision is tested against it.</p>
<div class="callout-box">
  <p>Structure: For [clearly defined target audience], [Brand Name] is the [category frame] that [unique claim or benefit] because [reason to believe, the proof point]. Every word earns its place. Remove any word that does not add precision.</p>
</div>
<p class="body-text">Common errors in positioning statement writing: vague audience definition ("businesses that want to grow"), unsupported claims ("the most trusted brand in the category"), category frames that are too broad ("solutions provider"), and reason-to-believe statements that are about intent rather than evidence. Fix every one of these before the statement leaves your desk.</p>

<div class="section-heading">The Brand Architecture Document</div>
<p class="body-text">The Brand Architecture Document is the full structural system. It contains the following components in sequence.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Brand Purpose</h4>
      <p>Why does this brand exist beyond making money? The purpose must be genuine, connected to the business model, and believable given the company's actual capabilities. Purpose that contradicts operational reality creates cynicism, not loyalty.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Brand Values</h4>
      <p>Three to five values that are genuinely operational, not aspirational. A value that does not manifest in a business decision is not a value. It is a decoration. Each value must be connected to at least one specific behaviour or policy within the business.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Brand Personality</h4>
      <p>If this brand were a person, how would they communicate? What would they never say? What is their tone in a moment of difficulty? Personality defines the consistent human qualities the brand expresses across all contexts.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Brand Promise</h4>
      <p>What does this brand commit to delivering for the customer every single time? The promise must be specific enough to be measured. A promise of "excellence" or "quality" is unmeasurable and therefore meaningless. A promise of "a response to every customer query within four hours" is specific and measurable.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">5</div>
    <div class="step-content">
      <h4>Proof Points</h4>
      <p>The specific, verifiable facts that substantiate the positioning. Every claim in the positioning must be backed by at least one proof point. Proof points can be product features, process standards, certifications, track record, or customer outcomes. They cannot be intentions.</p>
    </div>
  </div>
</div>

<div class="section-heading">The Communication Framework</div>
<p class="body-text">The communication framework defines how the brand talks across different audiences and channels. It includes a message ladder that moves from the brand's foundational promise to audience-specific messaging, and from formal contexts to informal ones.</p>
<table class="stage-table">
  <tr><th>Layer</th><th>Purpose</th></tr>
  <tr><td>Brand Promise</td><td>The single, consistent commitment to all audiences. Non-negotiable across all communication.</td></tr>
  <tr><td>Primary Message</td><td>The main thing we want each audience segment to understand about the brand. May vary by segment.</td></tr>
  <tr><td>Supporting Messages</td><td>Two to three messages that support the primary message with specific proof for each audience segment</td></tr>
  <tr><td>Tone Guidelines</td><td>The consistent voice qualities: what we always say, what we never say, and how we handle difficult topics</td></tr>
  <tr><td>Channel Adaptation</td><td>How tone and message adapt for each channel without losing brand consistency</td></tr>
</table>

<div class="section-heading">The Visual Identity Direction Brief</div>
<p class="body-text">Magsmen does not design logos. We brief designers. The Visual Identity Direction Brief is the strategic document given to a creative vendor that defines what the visual identity must communicate, the emotional register it must achieve, and the competitive territory it must differentiate from. The brief also contains references to what the identity must not look like and why.</p>
<p class="body-text">A Visual Identity Direction Brief that cannot be translated directly into a design brief by a competent designer is incomplete. Test yours by asking: could a designer follow this brief without a single conversation with the Lead Strategist? If no, add more specificity.</p>
<div class="warning-box"><p>The brand architecture is never delivered to the client without the Founder reviewing and approving all positioning work. This is a non-negotiable stage gate. No exceptions. A positioning statement that has not been approved by the Founder does not leave the building.</p></div>
`;
}

function m7Body() {
  return `
<div class="module-eyebrow">Module 07</div>
<h1 class="module-title">Business-Integrated Brand Strategy</h1>
<p class="module-intro">The single largest error in brand strategy work is treating brand as separate from business. At Magsmen, brand is a business system. Every brand decision produces a commercial outcome. Every commercial decision has a brand implication. The strategist who cannot see both simultaneously is operating at half capacity.</p>

<div class="section-heading">Brand as an Economic Asset</div>
<p class="body-text">Most Indian businesses treat brand as a cost. A logo cost. A campaign budget. A design invoice. Magsmen treats brand as a balance sheet asset that does three things economically when correctly built. First, it commands a price premium over unbranded competitors in the same category. Second, it reduces the cost of acquiring the next customer because existing customers refer and defend it. Third, it creates resilience during market volatility because loyal customers do not switch on price alone.</p>
<p class="body-text">Your job as a strategist is to make this economic logic visible to the client. When a client says "we can't afford brand strategy right now," they are actually saying "we will continue paying the cost of no brand strategy indefinitely." That cost includes permanent dependence on paid advertising, inability to raise prices without losing customers, and vulnerability to any competitor who chooses to invest in brand.</p>

<div class="section-heading">The Integration Model</div>
<p class="body-text">At Magsmen, every brand engagement is assessed across three integrated dimensions simultaneously. A strategy that addresses only one or two dimensions is incomplete and will produce a result that fails or underperforms.</p>
<div class="pillar-grid">
  <div class="pillar-cell">
    <div class="pillar-cell-num">B</div>
    <div class="pillar-cell-name">Brand</div>
    <div class="pillar-cell-desc">Positioning, identity, narrative, audience alignment, perception management</div>
  </div>
  <div class="pillar-cell">
    <div class="pillar-cell-num">L</div>
    <div class="pillar-cell-name">Legal</div>
    <div class="pillar-cell-desc">IP protection, trademark architecture, governance, reputational risk, regulatory compliance</div>
  </div>
  <div class="pillar-cell">
    <div class="pillar-cell-num">E</div>
    <div class="pillar-cell-name">Economics</div>
    <div class="pillar-cell-desc">Revenue model, pricing architecture, margin structure, customer acquisition cost, commercial sustainability</div>
  </div>
</div>
<div class="callout-box"><p>Brand plus Legal plus Economics equals Structural Brand. This is Magsmen's core operating model. It is what separates our work from every conventional brand consultancy. We build brands that function commercially, communicate strategically, and hold legally.</p></div>

<div class="section-heading">Pricing Power: The Commercial Test of Brand</div>
<p class="body-text">The most reliable test of whether a brand strategy has worked is simple: can the business charge more than the unbranded market rate and still grow its customer base? This is pricing power. It is the commercial output of a correctly built brand.</p>
<p class="body-text">Pricing strategy is never separate from brand strategy at Magsmen. Price is a positioning signal. A brand claiming premium positioning while pricing at the midpoint of the category sends an inconsistent message before the customer has tried the product. A brand that prices below its positioning level trains customers to undervalue it. Every pricing decision must be tested against the brand's positioning before it is executed.</p>

<div class="section-heading">Business Feasibility as a Strategy Input</div>
<p class="body-text">A positioning strategy is only valuable if the business can operationally deliver on it. Before recommending a positioning direction, the strategy team must validate that the client's production capability, team structure, cost base, and distribution infrastructure can support the promise the brand will make.</p>
<p class="body-text">A brand that promises premium quality but is manufactured at a margin that does not support premium ingredients is a structural contradiction. The customer will identify it. The brand will fail. The strategy team is responsible for surfacing this contradiction before the strategy is locked, not after the client has invested in execution.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Can the client produce what the positioning requires?</h4>
      <p>If the positioning claims quality, the production process must actually deliver quality at the claimed level at the intended price point. Verify this before the strategy is finalised.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Can the client distribute to where the audience is?</h4>
      <p>A premium brand that can only be found in general trade channels cannot sustain a premium positioning. Distribution strategy must be aligned with brand positioning before launch, not after.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Can the client's team communicate the brand consistently?</h4>
      <p>Internal brand alignment is a prerequisite for external brand consistency. If the client's team does not understand, believe, or operate within the brand architecture, the brand will be inconsistent at every customer touchpoint regardless of how good the strategy document is.</p>
    </div>
  </div>
</div>

<div class="section-heading">Brand Capital: The Accumulation Model</div>
<p class="body-text">Brand capital is the accumulated value a brand stores in the customer's mind over time. It compounds. A brand that is consistent in its positioning, communication, and customer experience across three years has more brand capital than a brand that has spent three times more on advertising but changed its message four times.</p>
<p class="body-text">The implication for strategy: consistency is more valuable than creativity. A creative campaign that contradicts the brand's established positioning depletes brand capital, regardless of how well it performs in the short term. Every strategy recommendation must be tested against the question: will this build or deplete the client's brand capital?</p>
<div class="warning-box"><p>When a client says "we need something fresh" or "we want to try something different," your first question must be: why? If the answer is boredom with their own brand, that is not a strategic reason. Brand capital is built through repetition, not variety. Protect it.</p></div>
`;
}

function m8Body() {
  return `
<div class="module-eyebrow">Module 08</div>
<h1 class="module-title">The Magsmen Frameworks</h1>
<p class="module-intro">These are the proprietary frameworks you will apply in your work. They are not templates to fill in. They are thinking structures that guide you to the correct strategic conclusion faster than unaided reasoning. Know each one well enough to explain it without reference to a document.</p>

<div class="section-heading">The 5D Consulting Framework</div>
<p class="body-text">The 5D Framework is the operating structure of every Magsmen engagement from OTC to Brand Creation to Retainer. Every stage of work maps to one of the five Ds. The Ds are sequential. You cannot design before you have diagnosed. You cannot deliver before you have designed.</p>
<div class="step-list">
  <div class="step-item"><div class="step-num">D1</div><div class="step-content"><h4>Discovery</h4><p>Understand the business model, market position, audience behaviour, and competitive landscape. This is the research and intake phase. All assumptions are suspended.</p></div></div>
  <div class="step-item"><div class="step-num">D2</div><div class="step-content"><h4>Diagnosis</h4><p>Identify barriers to growth, gaps in perception, inconsistencies in message, and untapped opportunities. The Five-Pillar model, Perception Audit, and Competitive Gravity Map are the primary tools in this phase.</p></div></div>
  <div class="step-item"><div class="step-num">D3</div><div class="step-content"><h4>Design</h4><p>Create frameworks that align purpose with performance. Positioning, brand architecture, communication framework, and strategic roadmap are produced in this phase.</p></div></div>
  <div class="step-item"><div class="step-num">D4</div><div class="step-content"><h4>Delivery</h4><p>Define clear actions, execution roadmap, and measurable outcomes. Deliverables are produced, reviewed, approved, and presented in this phase.</p></div></div>
  <div class="step-item"><div class="step-num">D5</div><div class="step-content"><h4>Development</h4><p>Establish systems for long-term consistency, evaluation, and evolution. Post-delivery follow-up, outcome documentation, and governance handover occur in this phase.</p></div></div>
</div>

<div class="section-heading">The 13-Stage Brand Creation Framework</div>
<table class="stage-table">
  <tr><th>Stage</th><th>Name</th><th>Core Objective</th></tr>
  <tr><td>01</td><td>Discovery and Founder Intent Mapping</td><td>Understand what the founder is building and why</td></tr>
  <tr><td>02</td><td>Market and Category Intelligence</td><td>Map the competitive environment and identify the opportunity</td></tr>
  <tr><td>03</td><td>Business Feasibility Validation</td><td>Confirm the strategy can be operationally supported</td></tr>
  <tr><td>04</td><td>Strategic Positioning Development</td><td>Define where the brand stands and why that position is defensible</td></tr>
  <tr><td>05</td><td>Product and Value Architecture</td><td>Align every product decision with the brand positioning</td></tr>
  <tr><td>06</td><td>Brand Naming</td><td>Develop 3 to 5 validated name options with trademark screening</td></tr>
  <tr><td>07</td><td>Visual Identity Development</td><td>Build visual identity that expresses the positioning</td></tr>
  <tr><td>08</td><td>Legal and IP Review</td><td>Screen for trademark conflicts and regulatory exposure</td></tr>
  <tr><td>09</td><td>Brand Communication Architecture</td><td>Define how the brand speaks and where</td></tr>
  <tr><td>10</td><td>Operational Readiness</td><td>Confirm the business can deliver what the brand has promised</td></tr>
  <tr><td>11</td><td>Internal Brand Alignment</td><td>Train the client's team to represent the brand consistently</td></tr>
  <tr><td>12</td><td>Launch Strategy Planning</td><td>Plan the brand's market entry with structure and measurable intent</td></tr>
  <tr><td>13</td><td>Post-Launch Strategic Audit</td><td>Evaluate performance and refine the strategy based on market response</td></tr>
</table>

<div class="framework-block">
  <div class="framework-name">The Brand Growth Loop</div>
  <div class="framework-tagline">Insight > Strategy > Narrative > Trust > Growth</div>
  <div class="framework-text">Brand growth compounds when each stage produces the input for the next. Insight from research produces the strategic positioning. The positioning produces the narrative the brand tells. The narrative, delivered consistently, builds trust. Trust drives repeat purchase, referral, and price premium tolerance. Growth from these sources produces new market data that feeds the next cycle of insight. This loop is why correctly built brands grow faster over time, not slower.</div>
</div>

<div class="framework-block">
  <div class="framework-name">The Brand Power Model</div>
  <div class="framework-tagline">Vision > Positioning > Narrative > Experience > Reputation</div>
  <div class="framework-text">Vision is internal, held by the founder. Positioning is strategic, defined by the firm. Narrative is how the positioning is communicated. Experience is how the positioning is felt by the customer. Reputation is what customers conclude and share after consistent experience. Reputation is the brand. Everything before it is infrastructure.</div>
</div>

<div class="framework-block">
  <div class="framework-name">The Legal-Blended Architecture</div>
  <div class="framework-tagline">Strategy + Legal + Economics = Structural Brand</div>
  <div class="framework-text">This is the Magsmen operating model described as a formula. A strategy that does not account for legal protection will create value that someone else can claim. A strategy that does not account for economics will create a brand that cannot sustain itself. Every engagement integrates all three. This is what makes Magsmen's work structurally different from conventional brand consulting.</div>
</div>

<div class="framework-block">
  <div class="framework-name">The Ecosystem Flywheel</div>
  <div class="framework-tagline">Consulting > Content > Platform > Institution > Movement</div>
  <div class="framework-text">This is the growth model of Magsmen itself. Consulting generates insight and case evidence. Content distributes that insight and builds authority. Platform (InTalks, Sanstrategies) amplifies the content and creates community. Institution converts the community into structural assets. Movement is the stage at which the firm's thinking changes how an industry operates. Each stage funds the next. This is how a firm compounds its market position without simply adding headcount.</div>
</div>

<div class="framework-block">
  <div class="framework-name">Learn. Earn. Return.</div>
  <div class="framework-tagline">The Three-Stage Life and Career Philosophy</div>
  <div class="framework-text">This is the personal philosophy of the firm's founder, applied organisationally. The strategy team learns deeply from every engagement. The firm earns through the quality of that applied learning. The firm returns by building platforms, publishing frameworks, and training the next generation of strategists. Every Magsmen team member is expected to operate within this loop. Your time here is not just employment. It is stage two of a cycle that must begin with genuine learning and end with genuine contribution.</div>
</div>
`;
}

function m9Body() {
  return `
<div class="module-eyebrow">Module 09</div>
<h1 class="module-title">Team Protocols and Strategy Execution</h1>
<p class="module-intro">Strategy at Magsmen does not end when the document is delivered. It ends when the strategy is in action, producing measurable results, and the client's team can sustain it independently. This module covers how the team operates internally and how strategy moves from document to real-world implementation.</p>

<div class="section-heading">Who Does What: Role Definitions</div>
<p class="body-text">There is no ambiguity in the Magsmen team about who does what at any stage of an engagement. If you are unclear about your role at a specific point in a project, escalate to the Lead Strategist immediately. Do not improvise role boundaries.</p>

<table class="stage-table">
  <tr><th>Role</th><th>What this role does</th></tr>
  <tr><td>Principal Consultant</td><td>The strategic authority at Magsmen. Reviews and approves all critical positioning decisions, all foundational brand architecture outputs, and all crisis frameworks before they reach clients. Leads discovery for high-stakes engagements. When the Principal Consultant provides a strategic direction for an engagement, the team builds from that direction, brings their own insight and ideas to refine it, finalises it together with the Principal Consultant, and then carries the execution through the client's own operational team.</td></tr>
  <tr><td>Head of Operations</td><td>Reviews every deliverable before it reaches the client. The final quality clearance on every stage gate. Manages engagement timelines, client communication logistics, and internal coordination. Nothing leaves the firm without Head of Operations clearance.</td></tr>
  <tr><td>Lead Strategist</td><td>Owns the strategic integrity of the engagement from the first discovery call to the post-execution review. Conducts or leads all discovery sessions. Develops all positioning work. Reviews all deliverables produced by the Brand Strategy Associate. Manages the relationship with the client's leadership team throughout the engagement.</td></tr>
  <tr><td>Brand Strategy Associate</td><td>This is your role. The Brand Strategy Associate is the engine of research, analysis, documentation, and execution support. You conduct all pre-engagement research. You build the competitive maps, consumer insights, and audit reports. You draft the strategy documents under the Lead Strategist's direction. After the strategy is approved and delivered, you are the person who works directly with the client's team to support execution. You track progress, document what was planned versus what was done, and prepare the review inputs for the Principal Consultant.</td></tr>
</table>

<div class="callout-box"><p>The Brand Strategy Associate is both the research function and the execution liaison. You are not just building documents in a back room. You are working alongside the client's team as the strategy moves from paper to action. This is what makes Magsmen different from firms that hand over a document and disappear.</p></div>

<div class="module-divider"></div>

<div class="section-heading">How Strategy Moves to Execution</div>
<p class="body-text">Once a strategy is planned, outlined, reviewed, and approved, the work is not done. In fact, a strategy that is never executed is not a strategy. It is a document. The real test of the work is what happens when the client's team starts implementing it in the real world. This is where the Brand Strategy Associate becomes critical.</p>

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Strategy Documentation and Approval Gate</h4>
      <p>The strategy document is complete, internally reviewed, and delivered to the client. The debrief session walks the client's leadership through every component. Questions are answered, clarifications are documented, and the client confirms they understand and accept the strategic direction. This confirmation is recorded in writing. Without this confirmation, execution does not begin. This gate exists because a client who does not fully understand the strategy will not implement it correctly.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Execution Kickoff with the Client Team</h4>
      <p>After strategy approval, the Brand Strategy Associate runs a structured execution kickoff with the client's operational team. Not just the founder. The actual team that will implement the strategy day to day. This session translates the strategy document into specific actions for specific people: who is responsible for what, what the timeline looks like, what resources are needed, and what the success indicator is for each action. If the client's team leaves this session without clarity on their specific role in implementation, the session was not successful.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Client Portal Setup and Execution Tracking</h4>
      <p>Every active client has a dedicated project space in Magsmen's client portal. This is where the approved strategy documents live, where execution milestones are tracked, where the Brand Strategy Associate and client team communicate on implementation progress, and where all deliverables are stored. The client portal is the single source of truth for the engagement. Anything discussed in a call that has strategic significance gets documented in the portal within 24 hours. Decisions made outside the portal do not exist for the purposes of the engagement record.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Weekly Implementation Check-ins</h4>
      <p>The Brand Strategy Associate conducts weekly check-ins with the client's team during the active execution phase. These are structured, not conversational. Each check-in covers three things: what was planned for this week and what actually happened, what the Brand Strategy Associate observed about the quality of implementation versus the planned approach, and what needs to be adjusted or escalated. These notes go into the client portal after every check-in.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">5</div>
    <div class="step-content">
      <h4>The Three-Layer Review: Planned vs Executed vs Result</h4>
      <p>At defined review points in every engagement (typically at 30, 60, and 90 days from execution kickoff), the Brand Strategy Associate prepares a structured review document comparing three things. What was planned: the specific strategy elements and implementation steps that were agreed. What was executed: what the client's team actually did, at what quality, and with what fidelity to the original plan. What the results are: what market response, internal response, and measurable outcomes have appeared as a result of the execution. This three-layer comparison is the input for the Principal Consultant's review.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">6</div>
    <div class="step-content">
      <h4>Principal Consultant Review</h4>
      <p>At each major review point, the Principal Consultant reviews the three-layer document and meets with the client leadership. This is where the strategic mind comes in to assess whether the execution is producing the intended outcome, whether adjustments are needed to the strategy or to the implementation approach, and what the next phase of strategic work should be. The Principal Consultant may validate the current direction, course correct the strategy based on market feedback, or identify a new constraint that has emerged from the execution phase. This review drives the next round of strategic input from the Magsmen team.</p>
    </div>
  </div>
</div>

<div class="module-divider"></div>

<div class="section-heading">When the Principal Consultant Directs Strategy</div>
<p class="body-text">On certain engagements, particularly for complex or high-stakes clients, the Principal Consultant provides the strategic direction directly. This means they come with a clear perspective on where the brand should be positioned, what the primary strategic move should be, and why. The Brand Strategy Associate and Lead Strategist do not simply execute that direction blindly. The process works like this.</p>

<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Principal Consultant shares the strategic direction</h4>
      <p>The Principal Consultant communicates the strategic intent: the positioning direction, the rationale, the commercial logic, and the key risks they have identified. This is not a brief to fill in. It is a starting point built from the Principal Consultant's synthesis of the discovery, research, and market understanding.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>The team builds from the direction and adds their insight</h4>
      <p>The Brand Strategy Associate and Lead Strategist take the Principal Consultant's direction and build the full strategic architecture from it. They do not just fill in the document. They actively bring their own research findings, consumer insights, and competitive observations to enrich and pressure-test the direction. If the team finds evidence that challenges the direction, they raise it. If they have ideas that would strengthen it, they bring them. This is a thinking partnership, not a transcription exercise.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Finalisation together</h4>
      <p>The Principal Consultant, Lead Strategist, and Brand Strategy Associate review the full strategy document together before it goes to the client. The Principal Consultant approves, adjusts, or redirects. Once the strategy is finalised with the Principal Consultant's approval, it goes to the client through the standard review and approval process.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Execution through the client's operational team</h4>
      <p>After client approval, the Brand Strategy Associate manages the execution support through the client portal. The Principal Consultant is not in every weekly check-in. The Associate carries the execution support and tracks progress against the finalised plan. The Principal Consultant comes in at the 30, 60, and 90-day reviews to assess the three-layer comparison and provide the next strategic steer.</p>
    </div>
  </div>
</div>

<div class="callout-box"><p>Strategy that does not reach execution is an expensive opinion. Your job as a Brand Strategy Associate does not end at document delivery. It ends when the strategy is running inside the client's business and producing observable results. The review process is how you close that loop.</p></div>

<div class="module-divider"></div>

<div class="section-heading">Document Protocol</div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>All strategy documents follow the Magsmen format.</strong> Montserrat font. Black and white. No decorative elements. Content density of 85 percent or above.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Every deliverable goes through internal review before client delivery.</strong> Brand Strategy Associate completes the draft, Lead Strategist reviews, Head of Operations clears, Founder reviews all positioning and foundational documents.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Feedback is given in writing via ClickUp.</strong> Not verbally. Not via WhatsApp. A written record of every review comment is mandatory.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Internal documents may include pricing.</strong> External client documents must never include internal pricing logic, cost structures, or fee rationale. This distinction is absolute.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Strategy work begins only after the first invoice is paid and the kickoff call is completed.</strong> No exceptions. Partial payment does not qualify.</div></div>

<div class="section-heading">Client Communication Rules</div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>All external communication is reviewed by the Head of Operations before sending.</strong> This includes emails, WhatsApp messages, and any written communication to clients or prospects.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Brand Strategy Associates do not communicate commercial terms to clients.</strong> All pricing, fee adjustment, and scope change conversations are handled by the Head of Operations or Principal Consultant.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>All client messages are responded to within 1 business day.</strong> If a matter requires more than a day to address properly, Operations acknowledges within 4 hours with a timeline for the full response.</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text"><strong>Side conversations with clients outside the designated client portal or project channel are not permitted.</strong> If a client reaches out on a personal channel with a project question, acknowledge it and redirect to the project channel within 2 hours.</div></div>

<div class="section-heading">The Knowledge Library</div>
<p class="body-text">Every completed engagement contributes to the Magsmen Knowledge Library. This is where the firm's accumulated intelligence lives. The test for this system is simple: if every current team member left tomorrow, would a new team have enough documented knowledge to service an existing client competently within 30 days? That is the standard the Knowledge Library is built to achieve.</p>
<table class="stage-table">
  <tr><th>Folder</th><th>Contents</th></tr>
  <tr><td>01 Frameworks and Models</td><td>All proprietary frameworks with usage guides. Any new framework developed in a client engagement must be documented and submitted to the Principal Consultant within 5 days of first use.</td></tr>
  <tr><td>02 Case Studies</td><td>One document per completed engagement within 30 days of project closure. Anonymised unless written client consent for naming exists. The Brand Strategy Associate on the engagement is responsible for writing it.</td></tr>
  <tr><td>03 Sector Libraries</td><td>Research files per sector. D2C, FMCG, SaaS, Fintech, Edtech, Mobility, Hospitality, Luxury Consumer. Updated after every relevant client engagement and on a quarterly basis.</td></tr>
  <tr><td>04 Execution Reviews</td><td>All three-layer review documents (planned vs executed vs result) from every engagement. This is the most valuable data the firm accumulates. It shows what actually works in the real world, not just what looked good in strategy.</td></tr>
  <tr><td>05 Templates</td><td>All standard templates: strategy document structure, design brief, proposal format, discovery notes, weekly check-in format, three-layer review format, client feedback survey.</td></tr>
</table>
`;
}

function m10Body() {
  return `
<div class="module-eyebrow">Module 10</div>
<h1 class="module-title">The Legal Dimension for Strategists</h1>
<p class="module-intro">Magsmen is not only a brand strategy firm. It is a legal-blended consulting practice. This means legal foresight is embedded in every engagement, not added at the end. You do not need to be a lawyer. You need to know enough to identify when a legal issue is present and when to escalate.</p>

<div class="section-heading">Why Legal Is Brand Strategy</div>
<p class="body-text">An unregistered trademark is a brand asset that a competitor can take. A founder agreement without IP assignment clauses means the brand the company just built may not legally belong to the company. A celebrity partnership without reputation protection clauses is a crisis with a scheduled arrival date. These are not hypothetical risks. They are recurring realities in the Indian market.</p>
<p class="body-text">Magsmen integrates legal foresight into every brand engagement because the value of a brand strategy is directly proportional to how well it is protected. A brand that cannot be legally defended is a brand that can be taken.</p>

<div class="section-heading">Trademark Basics for Strategists</div>
<p class="body-text">Every strategy team member must understand trademark protection at a practical level. You will encounter trademark questions in naming, brand architecture, and client advisory work.</p>
<div class="step-list">
  <div class="step-item">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>What Trademarks Protect</h4>
      <p>A trademark protects a brand name, logo, tagline, or other distinctive mark that identifies the source of goods or services. Registration is under the Trade Marks Act, 1999, filed with the Controller General of Patents, Designs and Trade Marks (CGPDTM). Registration gives the owner the exclusive right to use the mark in the registered class of goods or services.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Classes of Protection</h4>
      <p>Trademarks are registered in specific classes from the Nice Classification system (45 classes). A business that only protects its mark in the class of its primary product is vulnerable to competitors registering the same mark in adjacent classes. Part of our brand strategy work includes advising on which classes require protection based on the brand's growth trajectory.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Trademark Screening in Naming Engagements</h4>
      <p>Before any name is recommended to a client, it must be screened against the IP India trademark database (ipindia.gov.in). A name with an existing registered mark in the relevant class cannot be used. A name with a pending application requires careful evaluation. This is not optional.</p>
    </div>
  </div>
  <div class="step-item">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Common Names Cannot Be Protected</h4>
      <p>Descriptive, generic, or geographical names cannot be registered as trademarks in most circumstances. A name like "Best Biryani" cannot be protected. A coined name, a fanciful word, or a distinctive combination can be. This affects naming strategy directly.</p>
    </div>
  </div>
</div>

<div class="section-heading">IP Advisory in Client Engagements</div>
<p class="body-text">You are not providing legal advice. You are identifying legal risks and recommending that the client seek formal legal counsel. The distinction matters for liability and professional responsibility. What you can do:</p>
<div class="info-grid">
  <div class="info-card">
    <div class="info-card-label">Flag IP Gaps</div>
    <div class="info-card-desc">If a client has a brand name, logo, or valuable business process that is not protected, note it in the strategy document and recommend formal IP filing.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Raise Governance Concerns</div>
    <div class="info-card-desc">If a founder partnership has no IP assignment clauses, or if a content creator relationship has no IP ownership terms, flag it as a strategic vulnerability.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Conduct Basic Screening</div>
    <div class="info-card-desc">Use the IP India portal to screen proposed names. Document your search and its results. This is research support, not legal opinion.</div>
  </div>
  <div class="info-card">
    <div class="info-card-label">Recognise Crisis Risk</div>
    <div class="info-card-desc">If a client's brand, endorsement, or public position creates reputational or legal exposure, escalate to the Founder immediately. Do not advise independently on crisis situations with legal dimensions.</div>
  </div>
</div>

<div class="section-heading">Key Indian Laws You Must Know</div>
<table class="stage-table">
  <tr><th>Law</th><th>Relevance to Our Work</th></tr>
  <tr><td>Trade Marks Act, 1999</td><td>Brand name and logo protection. Primary law for naming engagements.</td></tr>
  <tr><td>Copyright Act, 1957</td><td>Protects original creative work including brand guidelines, strategy documents, and visual identity.</td></tr>
  <tr><td>Indian Contract Act, 1872</td><td>Governs all client agreements. Understanding the basics of consideration, offer, acceptance, and breach is required.</td></tr>
  <tr><td>Information Technology Act, 2000</td><td>Governs digital brand protection, domain name disputes, and data handling.</td></tr>
  <tr><td>Consumer Protection Act, 2019</td><td>Governs advertising claims and product liability. Relevant to any brand communication strategy.</td></tr>
  <tr><td>DPDP Act, 2023</td><td>Digital Personal Data Protection. Relevant when client strategies involve consumer data collection.</td></tr>
  <tr><td>Companies Act, 2013</td><td>Relevant to multi-entity brand architecture engagements and corporate governance advisory.</td></tr>
</table>

<div class="section-heading">When to Escalate</div>
<p class="body-text">Escalate to the Founder immediately when any of the following are present in an engagement.</p>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text">A client mentions litigation, a legal dispute, or a court order in the context of the engagement</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text">A naming recommendation involves a mark that appears to be in conflict with an existing registration</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text">A client's business model, product claims, or communication raises potential regulatory compliance questions</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text">A Stature engagement involves a client facing public controversy, media attention, or reputation crisis</div></div>
<div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"></circle></svg></div><div class="rule-text">Any situation where a client asks for legal advice rather than strategic advisory</div></div>

<div class="callout-box"><p>The legal-blended dimension of Magsmen's work is a competitive advantage. It is not a compliance function. When you surface a legal risk that the client did not see, you demonstrate a depth of strategic thinking that conventional brand consultants cannot match. Use it proactively, not reactively.</p></div>
`;
}

/* ------------------------------------------------------------
   SMALL COMPONENTS
   ------------------------------------------------------------ */

function ModuleFooter({ id, ackLabel, completedModules, onAck, onPrev, onContinue }) {
  const isDone = completedModules.includes(id);
  return (
    <div className="module-footer">
      <div className="module-progress-dots">
        {MODULES.map((m) => {
          let cls = "prog-dot";
          if (completedModules.includes(m.id)) cls += " done";
          if (m.id === id) cls += " current";
          return <div key={m.id} className={cls}></div>;
        })}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {id > 1 ? (
          <button className="btn-nav" onClick={() => onPrev(id)}>Back</button>
        ) : (
          <span></span>
        )}
        {isDone ? (
          <button
            className="btn-acknowledge"
            style={{ background: "var(--success)" }}
            onClick={() => onContinue(Math.min(id + 1, 11))}
          >
            Continue
          </button>
        ) : (
          <button className="btn-acknowledge" onClick={() => onAck(id)}>
            {ackLabel || "I have read this module"}
          </button>
        )}
      </div>
    </div>
  );
}

const MODULE_BODY_MAP = {
  1: { body: m1Body, label: "I have read and understood The Foundation" },
  2: { body: m2Body, label: "I have read and understood Our Services" },
  3: { body: m3Body, label: "I have read and understood How We Research" },
  4: { body: m4Body, label: "I have read and understood Consumer Analysis" },
  5: { body: m5Body, label: "I have read and understood How We Analyse" },
  6: { body: m6Body, label: "I have read and understood Brand Architecture" },
  7: { body: m7Body, label: "I have read and understood Business-Integrated Brand Strategy" },
  8: { body: m8Body, label: "I have read and understood The Magsmen Frameworks" },
  9: { body: m9Body, label: "I have read and understood Team Protocols and Execution" },
  10: { body: m10Body, label: "I have read and understood The Legal Dimension" },
};

/* Module 11 — fully interactive React acknowledgment module */
function Module11({ user, completedModules, onAck, onPrev, onSubmit }) {
  const [acks, setAcks] = useState({
    ack1: false, ack2: false, ack3: false, ack4: false, ack5: false, ack6: false,
  });
  const allChecked = Object.values(acks).every(Boolean);
  const dateStr = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });

  const toggle = (key) => setAcks((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <div className="module-eyebrow">Module 11</div>
      <h1 className="module-title">Acknowledgment</h1>
      <p className="module-intro">You have completed all ten substantive modules of the Magsmen Strategy Intelligence Programme. This final module is the formal record of your acknowledgment. Read carefully. Check each box. This record will be submitted to the firm.</p>

      <div className="ack-section">
        <h3>Proprietary Methodology Acknowledgment</h3>
        <p>All frameworks, analytical models, research processes, diagnostic systems, engagement structures, and strategic thinking you have encountered in this portal are the exclusive intellectual property of Grofesion Innovations Private Limited, operating as Magsmen Strategy Consultants. This includes the Five-Pillar OTC Diagnostic, the 13-Stage Brand Creation Framework, the Brand Health Index, the MACES System, the Brand Volatility Matrix, the Competitive Gravity Map, the Stature Methodology, the Brand Expresso Framework, the Linkfluence System, the Perception Audit Format, the 5D Consulting Framework, and all other tools, templates, and training content contained in this portal.</p>
        <p>Your access to these materials is conditional on your employment with Grofesion Innovations Private Limited. No licence to reproduce, distribute, adapt, teach, or commercially use any of this methodology is granted. This obligation survives the conclusion of your employment indefinitely for trade secrets and for five years for all other confidential information, in accordance with the Indian Contract Act, 1872 and the Copyright Act, 1957.</p>
      </div>

      <div className="section-heading">Your Acknowledgment Checklist</div>
      <p className="body-text">Check each box after reading the statement. All six must be checked before you can submit.</p>

      <div className="ack-checklist">
        <div className="ack-check-row">
          <input type="checkbox" id="ack1" checked={acks.ack1} onChange={() => toggle("ack1")} />
          <label htmlFor="ack1">I have read all ten substantive modules of the Magsmen Strategy Intelligence Programme. I understand the firm's identity, services, research process, consumer analysis methodology, analytical frameworks, brand architecture approach, business-integrated brand strategy model, proprietary frameworks, team protocols, and the legal dimension of our work.</label>
        </div>
        <div className="ack-check-row">
          <input type="checkbox" id="ack2" checked={acks.ack2} onChange={() => toggle("ack2")} />
          <label htmlFor="ack2">I understand that <strong>all content in this portal is proprietary to Grofesion Innovations Private Limited</strong> and is protected under the Copyright Act, 1957, the Information Technology Act, 2000, and the Trade Marks Act, 1999. I will not share, reproduce, or use this content outside of my responsibilities at Magsmen.</label>
        </div>
        <div className="ack-check-row">
          <input type="checkbox" id="ack3" checked={acks.ack3} onChange={() => toggle("ack3")} />
          <label htmlFor="ack3">I understand that my confidentiality obligations over the contents of this portal <strong>survive the conclusion of my employment</strong> with Grofesion Innovations Private Limited. Post-employment, I will not use any framework, methodology, or strategic approach learned from this portal for commercial purposes without written permission from the Founder.</label>
        </div>
        <div className="ack-check-row">
          <input type="checkbox" id="ack4" checked={acks.ack4} onChange={() => toggle("ack4")} />
          <label htmlFor="ack4">I understand that <strong>all client information I encounter at Magsmen is strictly confidential</strong>. I will not disclose any client's business, financial, strategic, or personal information to any person outside Magsmen. This obligation applies during and after my employment.</label>
        </div>
        <div className="ack-check-row">
          <input type="checkbox" id="ack5" checked={acks.ack5} onChange={() => toggle("ack5")} />
          <label htmlFor="ack5">I confirm that I operate under the <strong>authority and oversight of my Lead Strategist, the Head of Operations, and the Founder</strong> in all client-facing and strategy work. I will not make strategic recommendations, communicate commercial terms, or deliver deliverables to clients without the appropriate level of internal review and approval.</label>
        </div>
        <div className="ack-check-row">
          <input type="checkbox" id="ack6" checked={acks.ack6} onChange={() => toggle("ack6")} />
          <label htmlFor="ack6">I have understood and accept the <strong>team protocols, document standards, escalation procedures, and quality standards</strong> of Magsmen Strategy Consultants. I commit to operating within these standards from my first day of active work at the firm.</label>
        </div>
      </div>

      <div className="stamp-row">
        <div className="stamp-field">
          <div className="stamp-label">Full Name</div>
          <div className="stamp-value">{user.name}</div>
        </div>
        <div className="stamp-field">
          <div className="stamp-label">Role</div>
          <div className="stamp-value">{user.role}</div>
        </div>
        <div className="stamp-field">
          <div className="stamp-label">Date</div>
          <div className="stamp-value">{dateStr}</div>
        </div>
        <div className="stamp-field">
          <div className="stamp-label">Status</div>
          <div className="stamp-value" style={{ color: "var(--violet)" }}>Completing Programme</div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <button
          className="btn-acknowledge"
          disabled={!allChecked}
          onClick={onSubmit}
          style={{ width: "100%", height: 52, fontSize: 13 }}
        >
          Submit Acknowledgment and Complete Programme
        </button>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 12, textAlign: "center" }}>
          By submitting, you confirm the above acknowledgments are true and complete. This submission is time-stamped and forwarded to the firm's records.
        </p>
      </div>

      <div style={{ marginTop: 32, padding: 20, border: "1px solid var(--border)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>
        <strong style={{ color: "var(--black)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>Legal Notice</strong><br /><br />
        This portal and all its contents are the property of Grofesion Innovations Private Limited. Any unauthorised reproduction, distribution, or commercial use of any part of this portal's contents constitutes a breach of the Indian Copyright Act, 1957 (Section 51), and may attract civil liability under Section 55 of that Act, including injunctive relief, damages, and account of profits. Criminal liability may also arise under the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023. All disputes arising from or related to this portal shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts at Hyderabad, Telangana.
      </div>

      <div className="module-footer">
        <div className="module-progress-dots">
          {MODULES.map((m) => {
            let cls = "prog-dot";
            if (completedModules.includes(m.id)) cls += " done";
            if (m.id === 11) cls += " current";
            return <div key={m.id} className={cls}></div>;
          })}
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn-nav" onClick={() => onPrev(11)}>Back</button>
          <span></span>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------
   MAIN APP
   ------------------------------------------------------------ */
export default function App() {
  const [screen, setScreen] = useState("login"); // login | disclaimer | portal | complete
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState({});

  const [disclaimerScrolled, setDisclaimerScrolled] = useState(false);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const disclaimerRef = useRef(null);

  const [currentModule, setCurrentModule] = useState(1);
  const [completedModules, setCompletedModules] = useState([]);
  const [completionData, setCompletionData] = useState(null);

  /* ---------- storage helpers (best effort, non-blocking) ---------- */
  async function saveProgress(state) {
    try {
      const key = "user_" + (user.email || "anon").replace(/[^a-z0-9]/gi, "_");
      await window.storage.set(key, JSON.stringify(state));
    } catch (e) { /* silent — storage optional */ }
  }
  async function loadProgress(emailVal) {
    try {
      const key = "user_" + (emailVal || "anon").replace(/[^a-z0-9]/gi, "_");
      const result = await window.storage.get(key);
      return result ? JSON.parse(result.value) : null;
    } catch (e) { return null; }
  }
  async function logCompletion(data) {
    try {
      const key = "completion_" + Date.now() + "_" + (data.email || "").replace(/[^a-z0-9]/gi, "_");
      await window.storage.set(key, JSON.stringify(data), true);
    } catch (e) { /* silent */ }
  }

  /* ---------- login ---------- */
  function handleLogin() {
    if (!name.trim() || !email.trim() || !role) {
      alert("Please complete all fields before entering the portal.");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setUser({ name: name.trim(), email: email.trim(), role, loginTime: new Date().toISOString() });
    setScreen("disclaimer");
  }

  /* ---------- disclaimer scroll detection ---------- */
  function handleDisclaimerScroll() {
    const el = disclaimerRef.current;
    if (!el) return;
    const scrolled = el.scrollTop + el.clientHeight >= el.scrollHeight - 40;
    if (scrolled) setDisclaimerScrolled(true);
  }

  async function handleDisclaimerAccept() {
    const updatedUser = { ...user, disclaimerAccepted: true, disclaimerTime: new Date().toISOString() };
    setUser(updatedUser);
    const saved = await loadProgress(updatedUser.email);
    let startModule = 1;
    let startCompleted = [];
    if (saved && saved.completedModules) {
      startCompleted = saved.completedModules;
      startModule = saved.currentModule && saved.currentModule <= 11 ? saved.currentModule : startCompleted.length + 1;
      if (startModule > 11) startModule = 11;
    }
    setCompletedModules(startCompleted);
    setCurrentModule(startModule);
    setScreen("portal");
  }

  /* ---------- module navigation ---------- */
  function selectModule(id) {
    const isLocked = id > completedModules.length + 1;
    if (isLocked) return;
    setCurrentModule(id);
  }

  function prevModule(id) {
    if (id > 1) setCurrentModule(id - 1);
  }

  function acknowledgeModule(id) {
    setCompletedModules((prev) => {
      const next = prev.includes(id) ? prev : [...prev, id];
      saveProgress({ completedModules: next, currentModule: id + 1, user });
      return next;
    });
    if (id < 11) {
      setCurrentModule(id + 1);
    } else {
      finishProgramme();
    }
  }

  function continueModule(nextId) {
    setCurrentModule(nextId);
  }

  async function finishProgramme() {
    const now = new Date();
    const data = {
      name: user.name,
      email: user.email,
      role: user.role,
      completedAt: now.toISOString(),
      displayDate: now.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
      displayTime: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
    };
    await logCompletion(data);
    setCompletionData(data);
    setScreen("complete");
  }

  function copyRecord() {
    if (!completionData) return;
    const d = completionData;
    const text = `MAGSMEN STRATEGY PORTAL — COMPLETION RECORD\nName: ${d.name}\nEmail: ${d.email}\nRole: ${d.role}\nCompleted: ${d.displayDate} at ${d.displayTime}\nModules: 11 of 11\nStatus: Ready for Strategy Work`;
    navigator.clipboard.writeText(text).then(() => alert("Record copied to clipboard."));
  }

  /* ---------- render helpers ---------- */
  const moduleLabel = MODULES.find((m) => m.id === currentModule)?.label || "";

  return (
    <div className="msp-root">
      <style>{PORTAL_CSS}</style>

      {/* SCREEN 1: LOGIN */}
      {screen === "login" && (
        <div id="msp-screen-login" className="msp-screen">
          <div className="login-card">
            <div className="login-logo">
              <div className="login-logo-mark"><span>M</span></div>
              <div className="login-logo-text">Magsmen</div>
            </div>
            <h1 className="login-heading">Strategy Intelligence Portal</h1>
            <p className="login-sub">This portal contains Magsmen's proprietary strategy methodology. Access is restricted to authorised strategy team members only. Your identity is recorded upon entry.</p>
            <div className="form-group">
              <label className="form-label" htmlFor="inp-name">Full Name</label>
              <input className="form-input" type="text" id="inp-name" placeholder="Your full name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inp-email">Work Email</label>
              <input className="form-input" type="email" id="inp-email" placeholder="you@magsmen.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="inp-role">Role</label>
              <select className="form-select" id="inp-role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select your role</option>
                <option value="Strategy Associate">Strategy Associate</option>
                <option value="Senior Strategy Associate">Senior Strategy Associate</option>
                <option value="Lead Strategist">Lead Strategist</option>
                <option value="Brand Strategy Associate">Brand Strategy Associate</option>
              </select>
            </div>
            <button className="btn-primary" onClick={handleLogin}>Enter Portal</button>
            <p className="login-legal">By entering, you acknowledge that this portal contains proprietary and confidential information belonging to Grofesion Innovations Private Limited. Unauthorised access or disclosure is prohibited under the Indian Copyright Act, 1957 and the Information Technology Act, 2000.</p>
          </div>
        </div>
      )}

      {/* SCREEN 2: DISCLAIMER */}
      {screen === "disclaimer" && (
        <div id="msp-screen-disclaimer" className="msp-screen">
          <div className="disclaimer-card">
            <div className="disclaimer-header">
              <h2>Confidentiality and Proprietary Rights Acknowledgment</h2>
              <p>Read in full before proceeding. Scroll to the bottom to accept.</p>
            </div>
            <div className="disclaimer-body" ref={disclaimerRef} onScroll={handleDisclaimerScroll}>
              <h3>1. Nature of This Document</h3>
              <p>This portal and all information contained within it constitute the exclusive proprietary intellectual property of Grofesion Innovations Private Limited, operating as Magsmen Strategy Consultants (hereinafter "Magsmen"), a company incorporated under the Companies Act, 2013. Access is granted solely to authorised employees and contractors of Magsmen who have been specifically designated as members of the Strategy team.</p>

              <h3>2. Intellectual Property Ownership</h3>
              <p>All frameworks, methodologies, analytical models, research processes, diagnostic systems, engagement structures, training content, and strategic thinking contained in this portal are the original intellectual property of Grofesion Innovations Private Limited. This includes, without limitation, the Five-Pillar OTC Diagnostic, the 13-Stage Brand Creation Framework, the Brand Health Index, the MACES Qualification System, the Brand Volatility Matrix, the Competitive Gravity Map, the Stature Methodology, the Brand Expresso Framework, the Linkfluence System, the Perception Audit Format, and the 5D Consulting Framework.</p>
              <p>These materials are protected under the Indian Copyright Act, 1957, the Information Technology Act, 2000, and the Trade Marks Act, 1999. No licence or right to reproduce, distribute, adapt, or commercially exploit any portion of this content is granted to the accessing user.</p>

              <h3>3. Confidentiality Obligations</h3>
              <p>By accessing this portal, you agree to maintain strict confidentiality over all information contained herein. This obligation arises independently of and in addition to any confidentiality or non-disclosure provisions in your employment agreement with Grofesion Innovations Private Limited. You must not: share, distribute, photograph, screenshot, record, or transmit any content from this portal to any person outside Magsmen; use any content from this portal for any purpose other than performing your responsibilities as a strategy team member at Magsmen; retain copies of any content after your employment or engagement with Magsmen concludes.</p>

              <h3>4. Employment-Tied Obligations</h3>
              <p>Your access to this portal is conditional on your active employment or engagement with Grofesion Innovations Private Limited. Upon conclusion of your employment or engagement, all access rights terminate immediately. You are required to delete or return any material derived from this portal. Post-employment, your obligations of confidentiality over the contents of this portal survive indefinitely, as trade secrets under applicable Indian law, and for a minimum period of five (5) years for all other confidential information.</p>

              <h3>5. Consequence of Breach</h3>
              <p>Unauthorised disclosure, reproduction, or commercial use of any content from this portal constitutes a breach of contract, a violation of intellectual property rights, and may constitute a criminal offence under the Information Technology Act, 2000 (Sections 43, 66, 66B) and the Bharatiya Nyaya Sanhita, 2023. Magsmen reserves the right to pursue civil remedies including injunctive relief, damages, and account of profits under the Copyright Act, 1957 (Section 55), the Trade Marks Act, 1999 (Section 135), and the Code of Civil Procedure, 1908.</p>

              <h3>6. Access Tracking</h3>
              <p>Your access to this portal, including your name, email, role, the date and time of access, and your completion status, is recorded and maintained by Magsmen. This data may be used in any disciplinary proceeding or legal action arising from unauthorised use of this portal's contents. By proceeding, you consent to this recording under the Digital Personal Data Protection Act, 2023.</p>

              <h3>7. Governing Law and Jurisdiction</h3>
              <p>These terms are governed by the laws of India. Any dispute arising from or in connection with this portal or its contents shall be subject to the exclusive jurisdiction of the courts at Hyderabad, Telangana, and, where applicable, arbitration under the Arbitration and Conciliation Act, 1996 at a venue in Hyderabad.</p>

              <h3>8. Acknowledgment</h3>
              <p>By accepting below, you confirm that you have read, understood, and agree to all of the above. You confirm that you are an authorised strategy team member of Magsmen. You understand that this portal and all its contents are confidential and proprietary. You understand that any breach carries serious legal consequences.</p>

              <p style={{ fontWeight: 700, color: "#0F0A1A", marginTop: 24 }}>You have reached the end of the disclosure. You may now accept below.</p>
            </div>
            <div className="disclaimer-footer">
              <p className="scroll-note" style={disclaimerScrolled ? { color: "#059669" } : undefined}>
                {disclaimerScrolled ? "You may now accept the declaration below." : "Scroll through the full disclosure above before accepting."}
              </p>
              <div className="disclaimer-check-row">
                <input type="checkbox" id="chk-disclaimer" disabled={!disclaimerScrolled} checked={disclaimerChecked} onChange={(e) => setDisclaimerChecked(e.target.checked)} />
                <label htmlFor="chk-disclaimer">I have read and understood the above in full. I accept all confidentiality and intellectual property obligations. I confirm I am an authorised Magsmen strategy team member.</label>
              </div>
              <button className="btn-primary" disabled={!disclaimerChecked} onClick={handleDisclaimerAccept}>I Accept. Begin the Programme.</button>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 3: MAIN PORTAL */}
      {screen === "portal" && (
        <div id="msp-screen-portal" className="msp-screen">
          <nav className="sidebar">
            <div className="sidebar-brand">
              <div className="sidebar-brand-mark">
                <div className="sidebar-mark-box"><span>M</span></div>
                <div>
                  <div className="sidebar-firm">Magsmen</div>
                </div>
              </div>
              <div className="sidebar-sub">Strategy Intelligence Portal</div>
            </div>

            <div className="sidebar-progress-bar">
              <div className="sidebar-progress-fill" style={{ width: `${Math.round((completedModules.length / MODULES.length) * 100)}%` }}></div>
            </div>
            <div className="sidebar-progress-label">{completedModules.length} of {MODULES.length} modules completed</div>

            <div className="sidebar-nav">
              <div className="nav-section-label">Programme Modules</div>
              {MODULES.map((m) => {
                const isDone = completedModules.includes(m.id);
                const isCurrent = currentModule === m.id;
                const isLocked = m.id > completedModules.length + 1;
                let cls = "nav-item";
                if (isDone) cls += " done";
                if (isCurrent) cls += " active";
                if (isLocked) cls += " locked";
                return (
                  <button key={m.id} className={cls} onClick={() => selectModule(m.id)} disabled={isLocked}>
                    <div className="nav-status">
                      {isDone ? (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      ) : m.id}
                    </div>
                    <div className="nav-item-text">
                      <span className="nav-item-num">Module {m.id}</span>
                      <span className="nav-item-label">{m.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="sidebar-user-bar">
              <div className="sidebar-user-name">{user.name}</div>
              <div className="sidebar-user-role">{user.role}</div>
            </div>
          </nav>

          <div className="main-content">
            <div className="content-topbar">
              <div className="topbar-breadcrumb">Strategy Portal <span>/ {moduleLabel}</span></div>
              <div className="topbar-confid">Strictly Confidential</div>
            </div>
            <div className="content-area">
              {currentModule === 11 ? (
                <Module11
                  user={user}
                  completedModules={completedModules}
                  onPrev={prevModule}
                  onSubmit={() => acknowledgeModule(11)}
                />
              ) : (
                <>
                  <div dangerouslySetInnerHTML={{ __html: MODULE_BODY_MAP[currentModule].body() }} />
                  <ModuleFooter
                    id={currentModule}
                    ackLabel={MODULE_BODY_MAP[currentModule].label}
                    completedModules={completedModules}
                    onAck={acknowledgeModule}
                    onPrev={prevModule}
                    onContinue={continueModule}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 4: COMPLETION */}
      {screen === "complete" && completionData && (
        <div id="msp-screen-complete" className="msp-screen">
          <div className="complete-card">
            <div className="complete-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2 className="complete-title">Programme Complete</h2>
            <p className="complete-sub">You have completed all 11 modules of the Magsmen Strategy Intelligence Programme. Your completion record has been logged and submitted to the relevant team members.</p>
            <div className="complete-record">
              <div className="complete-record-row"><span className="complete-record-key">Name</span><span className="complete-record-val">{completionData.name}</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Email</span><span className="complete-record-val">{completionData.email}</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Role</span><span className="complete-record-val">{completionData.role}</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Completed On</span><span className="complete-record-val">{completionData.displayDate}</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Time</span><span className="complete-record-val">{completionData.displayTime}</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Modules</span><span className="complete-record-val">11 of 11 Completed</span></div>
              <div className="complete-record-row"><span className="complete-record-key">Status</span><span className="complete-record-val" style={{ color: "var(--success)", fontWeight: 800 }}>Ready for Strategy Work</span></div>
            </div>
            <button className="btn-copy" onClick={copyRecord}>Copy Record</button>
            <button className="btn-primary" style={{ width: "auto", display: "inline-block", padding: "0 24px", height: 40 }} onClick={() => window.print()}>Print Certificate</button>
            <p className="complete-note">This record has been submitted to sandeep@magsmen.com and hr@magsmen.com. You are now cleared to begin assigned strategy work at Magsmen.</p>
          </div>
        </div>
      )}
    </div>
  );
}









// import { useEffect, useRef } from 'react';

// interface CompletionRecordData {
//   name: string;
//   email: string;
//   role: string;
//   displayDate: string;
//   displayTime: string;
//   completedAt: string;
// }

// interface CompletionEmailPayload {
//   user_name: string;
//   user_email: string;
//   user_role: string;
//   completion_date: string;
//   modules_done: string;
//   to_email: string;
// }

// declare const emailjs: {
//   init: (publicKey: string) => void;
//   send: (serviceId: string, templateId: string, templateParams: CompletionEmailPayload) => Promise<unknown>;
// };

// declare global {
//   interface Window {
//     _completionData?: CompletionRecordData;
//     handleLogin?: (event?: unknown) => void;
//     checkDisclaimerScroll?: () => void;
//     toggleDisclaimerBtn?: () => void;
//     handleDisclaimerAccept?: () => void;
//     renderModule?: (moduleIndex?: number) => void;
//     acknowledgeModule?: (moduleIndex?: number) => void;
//     prevModule?: () => void;
//     copyRecord?: () => void;
//     sendCompletionEmail?: (data?: CompletionEmailData) => Promise<unknown> | void;
//   }
// }

// /* ============================================================
//    MAGSMEN STRATEGY INTELLIGENCE PORTAL — React conversion
//    Original: single-file HTML/CSS/vanilla-JS build
//    This conversion preserves the exact layout, content, and
//    color palette of the source file. The screen-management,
//    module-rendering, and form logic were originally written as
//    imperative DOM code (getElementById / innerHTML / onclick=""),
//    so they are kept unchanged here and wired up through a React
//    mount effect rather than rewritten into per-section JSX state
//    — this guarantees zero content drift across all 11 modules.
//    ============================================================ */

// const PORTAL_CSS = `
// <style>
// /*
//   MAGSMEN STRATEGY INTELLIGENCE PORTAL
//   Proprietary and Confidential
//   Grofesion Innovations Private Limited (Magsmen Strategy Consultants)
//   Built for internal strategy team onboarding only
//   Design: Montserrat | White #FFFFFF | Black #0F0A1A | Violet #7C3AED
// */

// :root {
//   --white: #FFFFFF;
//   --black: #0F0A1A;
//   --violet: #7C3AED;
//   --violet-dark: #5B21B6;
//   --violet-hover: #6D28D9;
//   --violet-light: #EDE9FE;
//   --violet-subtle: #F5F3FF;
//   --surface: #F8F9FB;
//   --border: #E5E7EB;
//   --border-dark: #D1D5DB;
//   --text-primary: #0F0A1A;
//   --text-secondary: #374151;
//   --text-muted: #6B7280;
//   --success: #059669;
//   --success-bg: #ECFDF5;
//   --sidebar-w: 272px;
//   --font: 'Montserrat', sans-serif;
// }

// *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

// html { scroll-behavior: smooth; }

// body {
//   font-family: var(--font);
//   background: var(--white);
//   color: var(--text-primary);
//   min-height: 100vh;
//   -webkit-font-smoothing: antialiased;
// }

// /* SCREEN MANAGEMENT */
// .screen { display: none; min-height: 100vh; }
// .screen.active { display: flex; }

// /* ============================================================
//    LOGIN SCREEN
//    ============================================================ */
// #screen-login {
//   align-items: center;
//   justify-content: center;
//   background: var(--white);
//   flex-direction: column;
//   padding: 40px 20px;
// }

// .login-card {
//   width: 100%;
//   max-width: 440px;
//   background: var(--white);
//   border: 1.5px solid var(--border);
//   padding: 48px 40px;
// }

// .login-logo {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 36px;
// }

// .login-logo-mark {
//   width: 32px;
//   height: 32px;
//   background: var(--black);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .login-logo-mark span {
//   color: var(--white);
//   font-weight: 900;
//   font-size: 14px;
//   letter-spacing: 0.02em;
// }

// .login-logo-text {
//   font-size: 13px;
//   font-weight: 700;
//   color: var(--black);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
// }

// .login-heading {
//   font-size: 22px;
//   font-weight: 800;
//   color: var(--black);
//   margin-bottom: 8px;
//   letter-spacing: -0.02em;
// }

// .login-sub {
//   font-size: 13px;
//   font-weight: 400;
//   color: var(--text-muted);
//   margin-bottom: 32px;
//   line-height: 1.6;
// }

// .form-group {
//   margin-bottom: 20px;
// }

// .form-label {
//   display: block;
//   font-size: 11px;
//   font-weight: 700;
//   color: var(--black);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   margin-bottom: 8px;
// }

// .form-input, .form-select {
//   width: 100%;
//   height: 44px;
//   padding: 0 14px;
//   border: 1.5px solid var(--border-dark);
//   background: var(--white);
//   font-family: var(--font);
//   font-size: 14px;
//   font-weight: 500;
//   color: var(--black);
//   outline: none;
//   transition: border-color 180ms ease;
//   -webkit-appearance: none;
//   appearance: none;
// }

// .form-select {
//   background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230F0A1A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-position: right 14px center;
//   padding-right: 38px;
//   cursor: pointer;
// }

// .form-input:focus, .form-select:focus {
//   border-color: var(--violet);
// }

// .form-input::placeholder { color: var(--text-muted); font-weight: 400; }

// .btn-primary {
//   width: 100%;
//   height: 48px;
//   background: var(--black);
//   color: var(--white);
//   border: none;
//   font-family: var(--font);
//   font-size: 13px;
//   font-weight: 700;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: background 180ms ease;
//   margin-top: 8px;
// }

// .btn-primary:hover { background: var(--violet); }
// .btn-primary:active { background: var(--violet-dark); }

// .btn-primary:disabled {
//   background: var(--text-muted);
//   cursor: not-allowed;
// }

// .login-legal {
//   font-size: 11px;
//   color: var(--text-muted);
//   line-height: 1.6;
//   margin-top: 20px;
//   text-align: center;
// }

// /* ============================================================
//    DISCLAIMER SCREEN
//    ============================================================ */
// #screen-disclaimer {
//   align-items: center;
//   justify-content: center;
//   background: var(--surface);
//   flex-direction: column;
//   padding: 40px 20px;
// }

// .disclaimer-card {
//   width: 100%;
//   max-width: 680px;
//   background: var(--white);
//   border: 1.5px solid var(--border);
// }

// .disclaimer-header {
//   padding: 28px 36px;
//   border-bottom: 1.5px solid var(--border);
//   background: var(--black);
// }

// .disclaimer-header h2 {
//   font-size: 16px;
//   font-weight: 800;
//   color: var(--white);
//   letter-spacing: 0.04em;
//   text-transform: uppercase;
// }

// .disclaimer-header p {
//   font-size: 12px;
//   color: rgba(255,255,255,0.6);
//   margin-top: 4px;
//   font-weight: 400;
// }

// .disclaimer-body {
//   height: 400px;
//   overflow-y: auto;
//   padding: 32px 36px;
//   font-size: 13px;
//   line-height: 1.8;
//   color: var(--text-secondary);
//   scroll-behavior: smooth;
// }

// .disclaimer-body::-webkit-scrollbar { width: 4px; }
// .disclaimer-body::-webkit-scrollbar-track { background: var(--surface); }
// .disclaimer-body::-webkit-scrollbar-thumb { background: var(--violet); }

// .disclaimer-body h3 {
//   font-size: 12px;
//   font-weight: 800;
//   color: var(--black);
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   margin: 24px 0 8px;
// }

// .disclaimer-body h3:first-child { margin-top: 0; }

// .disclaimer-body p {
//   margin-bottom: 12px;
//   font-weight: 400;
// }

// .disclaimer-footer {
//   padding: 24px 36px;
//   border-top: 1.5px solid var(--border);
//   background: var(--surface);
// }

// .disclaimer-check-row {
//   display: flex;
//   align-items: flex-start;
//   gap: 12px;
//   margin-bottom: 20px;
// }

// .disclaimer-check-row input[type="checkbox"] {
//   width: 18px;
//   height: 18px;
//   min-width: 18px;
//   margin-top: 2px;
//   cursor: pointer;
//   accent-color: var(--violet);
// }

// .disclaimer-check-row label {
//   font-size: 13px;
//   font-weight: 600;
//   color: var(--black);
//   line-height: 1.5;
//   cursor: pointer;
// }

// .scroll-note {
//   font-size: 11px;
//   color: var(--text-muted);
//   margin-bottom: 16px;
//   text-align: center;
//   font-weight: 500;
// }

// /* ============================================================
//    MAIN PORTAL
//    ============================================================ */
// #screen-portal {
//   flex-direction: row;
//   min-height: 100vh;
// }

// /* Sidebar */
// .sidebar {
//   width: var(--sidebar-w);
//   min-width: var(--sidebar-w);
//   background: var(--black);
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   overflow-y: auto;
//   z-index: 100;
// }

// .sidebar::-webkit-scrollbar { width: 3px; }
// .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }

// .sidebar-brand {
//   padding: 24px 20px 20px;
//   border-bottom: 1px solid rgba(255,255,255,0.08);
// }

// .sidebar-brand-mark {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 4px;
// }

// .sidebar-mark-box {
//   width: 28px;
//   height: 28px;
//   background: var(--violet);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .sidebar-mark-box span {
//   color: var(--white);
//   font-weight: 900;
//   font-size: 12px;
// }

// .sidebar-firm {
//   font-size: 12px;
//   font-weight: 700;
//   color: var(--white);
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
// }

// .sidebar-sub {
//   font-size: 10px;
//   color: rgba(255,255,255,0.4);
//   font-weight: 400;
//   margin-top: 4px;
// }

// .sidebar-progress-bar {
//   height: 2px;
//   background: rgba(255,255,255,0.1);
//   margin: 0 20px;
// }

// .sidebar-progress-fill {
//   height: 100%;
//   background: var(--violet);
//   transition: width 400ms ease;
// }

// .sidebar-progress-label {
//   padding: 8px 20px 12px;
//   font-size: 10px;
//   color: rgba(255,255,255,0.4);
//   font-weight: 500;
//   letter-spacing: 0.04em;
// }

// .sidebar-nav {
//   flex: 1;
//   padding: 8px 0;
// }

// .nav-section-label {
//   padding: 12px 20px 6px;
//   font-size: 9px;
//   font-weight: 700;
//   color: rgba(255,255,255,0.3);
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
// }

// .nav-item {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background 150ms ease;
//   position: relative;
//   border: none;
//   background: none;
//   width: 100%;
//   text-align: left;
// }

// .nav-item:hover { background: rgba(255,255,255,0.05); }

// .nav-item.active {
//   background: rgba(124,58,237,0.2);
// }

// .nav-item.active::before {
//   content: '';
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   width: 3px;
//   background: var(--violet);
// }

// .nav-item.locked { opacity: 0.35; cursor: not-allowed; }

// .nav-status {
//   width: 20px;
//   height: 20px;
//   min-width: 20px;
//   border-radius: 50%;
//   border: 1.5px solid rgba(255,255,255,0.2);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 9px;
//   color: rgba(255,255,255,0.4);
//   font-weight: 700;
//   transition: all 200ms ease;
// }

// .nav-item.done .nav-status {
//   background: var(--success);
//   border-color: var(--success);
//   color: var(--white);
// }

// .nav-item.active .nav-status {
//   border-color: var(--violet);
//   color: var(--violet);
// }

// .nav-item-text {
//   flex: 1;
// }

// .nav-item-num {
//   font-size: 9px;
//   color: rgba(255,255,255,0.3);
//   font-weight: 600;
//   letter-spacing: 0.04em;
//   display: block;
//   margin-bottom: 1px;
// }

// .nav-item-label {
//   font-size: 12px;
//   font-weight: 600;
//   color: rgba(255,255,255,0.75);
//   line-height: 1.3;
// }

// .nav-item.active .nav-item-label { color: var(--white); }
// .nav-item.done .nav-item-label { color: rgba(255,255,255,0.55); }

// .sidebar-user-bar {
//   padding: 16px 20px;
//   border-top: 1px solid rgba(255,255,255,0.08);
// }

// .sidebar-user-name {
//   font-size: 12px;
//   font-weight: 700;
//   color: var(--white);
// }

// .sidebar-user-role {
//   font-size: 10px;
//   color: rgba(255,255,255,0.4);
//   font-weight: 400;
//   margin-top: 2px;
// }

// /* Main Content */
// .main-content {
//   margin-left: var(--sidebar-w);
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }

// .content-topbar {
//   position: sticky;
//   top: 0;
//   background: var(--white);
//   border-bottom: 1.5px solid var(--border);
//   padding: 0 48px;
//   height: 56px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 50;
// }

// .topbar-breadcrumb {
//   font-size: 12px;
//   font-weight: 600;
//   color: var(--text-muted);
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
// }

// .topbar-breadcrumb span {
//   color: var(--black);
// }

// .topbar-confid {
//   font-size: 10px;
//   font-weight: 700;
//   color: var(--text-muted);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   padding: 4px 10px;
//   border: 1px solid var(--border-dark);
// }

// .content-area {
//   flex: 1;
//   padding: 48px 48px 80px;
//   max-width: 860px;
// }

// /* Module Content Styles */
// .module-eyebrow {
//   font-size: 10px;
//   font-weight: 700;
//   color: var(--violet);
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   margin-bottom: 12px;
// }

// .module-title {
//   font-size: 28px;
//   font-weight: 800;
//   color: var(--black);
//   letter-spacing: -0.02em;
//   line-height: 1.2;
//   margin-bottom: 16px;
// }

// .module-intro {
//   font-size: 15px;
//   font-weight: 500;
//   color: var(--text-secondary);
//   line-height: 1.7;
//   margin-bottom: 36px;
//   border-left: 3px solid var(--violet);
//   padding-left: 16px;
// }

// .module-divider {
//   height: 1.5px;
//   background: var(--border);
//   margin: 36px 0;
// }

// .section-heading {
//   font-size: 13px;
//   font-weight: 800;
//   color: var(--black);
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   margin: 32px 0 12px;
// }

// .body-text {
//   font-size: 14px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.8;
//   margin-bottom: 16px;
// }

// .body-text strong {
//   font-weight: 700;
//   color: var(--black);
// }

// .callout-box {
//   background: var(--violet-subtle);
//   border-left: 3px solid var(--violet);
//   padding: 16px 20px;
//   margin: 24px 0;
// }

// .callout-box p {
//   font-size: 13px;
//   font-weight: 600;
//   color: var(--black);
//   line-height: 1.6;
// }

// .warning-box {
//   background: #FFF7ED;
//   border-left: 3px solid #F59E0B;
//   padding: 16px 20px;
//   margin: 24px 0;
// }

// .warning-box p {
//   font-size: 13px;
//   font-weight: 600;
//   color: #92400E;
//   line-height: 1.6;
// }

// .info-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;
//   margin: 24px 0;
// }

// .info-card {
//   border: 1.5px solid var(--border);
//   padding: 20px;
// }

// .info-card-num {
//   font-size: 24px;
//   font-weight: 900;
//   color: var(--violet);
//   letter-spacing: -0.03em;
// }

// .info-card-label {
//   font-size: 11px;
//   font-weight: 700;
//   color: var(--black);
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   margin: 4px 0 8px;
// }

// .info-card-desc {
//   font-size: 12px;
//   font-weight: 400;
//   color: var(--text-muted);
//   line-height: 1.6;
// }

// .step-list {
//   margin: 16px 0;
// }

// .step-item {
//   display: flex;
//   gap: 16px;
//   margin-bottom: 20px;
//   padding-bottom: 20px;
//   border-bottom: 1px solid var(--border);
// }

// .step-item:last-child {
//   border-bottom: none;
//   padding-bottom: 0;
// }

// .step-num {
//   width: 28px;
//   height: 28px;
//   min-width: 28px;
//   background: var(--black);
//   color: var(--white);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 11px;
//   font-weight: 800;
//   margin-top: 2px;
// }

// .step-content h4 {
//   font-size: 13px;
//   font-weight: 700;
//   color: var(--black);
//   margin-bottom: 4px;
// }

// .step-content p {
//   font-size: 13px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.7;
// }

// .belief-item {
//   padding: 20px 0;
//   border-bottom: 1px solid var(--border);
// }

// .belief-item:last-child { border-bottom: none; }

// .belief-num {
//   font-size: 10px;
//   font-weight: 700;
//   color: var(--violet);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   margin-bottom: 6px;
// }

// .belief-title {
//   font-size: 14px;
//   font-weight: 700;
//   color: var(--black);
//   margin-bottom: 8px;
// }

// .belief-text {
//   font-size: 13px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.7;
// }

// .service-card {
//   border: 1.5px solid var(--border);
//   padding: 24px;
//   margin-bottom: 20px;
//   transition: border-color 180ms ease;
// }

// .service-card:hover { border-color: var(--violet); }

// .service-tag {
//   display: inline-block;
//   background: var(--black);
//   color: var(--white);
//   font-size: 9px;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   padding: 4px 8px;
//   margin-bottom: 12px;
// }

// .service-name {
//   font-size: 16px;
//   font-weight: 800;
//   color: var(--black);
//   margin-bottom: 8px;
// }

// .service-desc {
//   font-size: 13px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.7;
//   margin-bottom: 16px;
// }

// .service-deliverables {
//   margin-top: 12px;
// }

// .service-deliverables h5 {
//   font-size: 10px;
//   font-weight: 700;
//   color: var(--text-muted);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   margin-bottom: 8px;
// }

// .deliverable-row {
//   display: flex;
//   gap: 8px;
//   align-items: flex-start;
//   margin-bottom: 6px;
//   font-size: 12px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.5;
// }

// .deliverable-dot {
//   width: 4px;
//   height: 4px;
//   min-width: 4px;
//   background: var(--violet);
//   border-radius: 50%;
//   margin-top: 6px;
// }

// .framework-block {
//   background: var(--surface);
//   border: 1.5px solid var(--border);
//   padding: 24px;
//   margin-bottom: 16px;
// }

// .framework-name {
//   font-size: 13px;
//   font-weight: 800;
//   color: var(--black);
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   margin-bottom: 8px;
// }

// .framework-tagline {
//   font-size: 12px;
//   font-weight: 600;
//   color: var(--violet);
//   margin-bottom: 10px;
// }

// .framework-text {
//   font-size: 13px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.7;
// }

// .stage-table {
//   width: 100%;
//   border-collapse: collapse;
//   margin: 20px 0;
// }

// .stage-table th {
//   background: var(--black);
//   color: var(--white);
//   font-size: 10px;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   padding: 10px 14px;
//   text-align: left;
// }

// .stage-table td {
//   padding: 10px 14px;
//   font-size: 12px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   border-bottom: 1px solid var(--border);
//   vertical-align: top;
//   line-height: 1.5;
// }

// .stage-table td:first-child {
//   font-weight: 700;
//   color: var(--black);
//   white-space: nowrap;
//   width: 100px;
// }

// .stage-table tr:nth-child(even) td {
//   background: var(--surface);
// }

// .rule-item {
//   display: flex;
//   gap: 12px;
//   padding: 14px 0;
//   border-bottom: 1px solid var(--border);
//   font-size: 13px;
//   line-height: 1.6;
// }

// .rule-item:last-child { border-bottom: none; }

// .rule-icon {
//   width: 20px;
//   height: 20px;
//   min-width: 20px;
//   background: var(--violet);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2px;
// }

// .rule-icon svg { width: 10px; height: 10px; }

// .rule-text { color: var(--text-secondary); }
// .rule-text strong { color: var(--black); font-weight: 700; }

// /* Acknowledgment Module */
// .ack-section {
//   background: var(--black);
//   padding: 32px;
//   margin: 32px 0;
//   color: var(--white);
// }

// .ack-section h3 {
//   font-size: 13px;
//   font-weight: 800;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   margin-bottom: 16px;
//   color: var(--white);
// }

// .ack-section p {
//   font-size: 13px;
//   font-weight: 400;
//   line-height: 1.8;
//   color: rgba(255,255,255,0.75);
//   margin-bottom: 12px;
// }

// .ack-section p:last-child { margin-bottom: 0; }

// .ack-checklist {
//   margin: 24px 0;
// }

// .ack-check-row {
//   display: flex;
//   align-items: flex-start;
//   gap: 12px;
//   padding: 12px 0;
//   border-bottom: 1px solid var(--border);
// }

// .ack-check-row:last-child { border-bottom: none; }

// .ack-check-row input[type="checkbox"] {
//   width: 18px;
//   height: 18px;
//   min-width: 18px;
//   margin-top: 2px;
//   cursor: pointer;
//   accent-color: var(--violet);
// }

// .ack-check-row label {
//   font-size: 13px;
//   font-weight: 500;
//   color: var(--text-secondary);
//   line-height: 1.6;
//   cursor: pointer;
// }

// .ack-check-row label strong { color: var(--black); font-weight: 700; }

// .stamp-row {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 24px;
//   margin: 24px 0;
// }

// .stamp-field {
//   border-bottom: 1.5px solid var(--black);
//   padding-bottom: 8px;
// }

// .stamp-label {
//   font-size: 10px;
//   font-weight: 700;
//   color: var(--text-muted);
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   margin-bottom: 12px;
// }

// .stamp-value {
//   font-size: 14px;
//   font-weight: 600;
//   color: var(--black);
// }

// /* Module navigation bottom */
// .module-footer {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 24px 0;
//   border-top: 1.5px solid var(--border);
//   margin-top: 40px;
//   position: sticky;
//   bottom: 0;
//   background: var(--white);
// }

// .module-progress-dots {
//   display: flex;
//   gap: 6px;
//   align-items: center;
// }

// .prog-dot {
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background: var(--border-dark);
// }

// .prog-dot.done { background: var(--success); }
// .prog-dot.current { background: var(--violet); width: 18px; border-radius: 3px; }

// .btn-nav {
//   height: 40px;
//   padding: 0 24px;
//   font-family: var(--font);
//   font-size: 12px;
//   font-weight: 700;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   cursor: pointer;
//   border: 1.5px solid var(--border-dark);
//   background: var(--white);
//   color: var(--text-secondary);
//   transition: all 180ms ease;
// }

// .btn-nav:hover {
//   border-color: var(--black);
//   color: var(--black);
// }

// .btn-acknowledge {
//   height: 44px;
//   padding: 0 28px;
//   font-family: var(--font);
//   font-size: 12px;
//   font-weight: 700;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   cursor: pointer;
//   border: none;
//   background: var(--black);
//   color: var(--white);
//   transition: background 180ms ease;
// }

// .btn-acknowledge:hover { background: var(--violet); }
// .btn-acknowledge:disabled { background: var(--text-muted); cursor: not-allowed; }

// /* Completion Screen */
// #screen-complete {
//   align-items: center;
//   justify-content: center;
//   background: var(--black);
//   flex-direction: column;
//   padding: 40px 20px;
// }

// .complete-card {
//   width: 100%;
//   max-width: 560px;
//   background: var(--white);
//   padding: 48px 44px;
//   text-align: center;
// }

// .complete-icon {
//   width: 56px;
//   height: 56px;
//   background: var(--success-bg);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 24px;
// }

// .complete-icon svg { color: var(--success); }

// .complete-title {
//   font-size: 22px;
//   font-weight: 800;
//   color: var(--black);
//   margin-bottom: 12px;
//   letter-spacing: -0.02em;
// }

// .complete-sub {
//   font-size: 14px;
//   font-weight: 400;
//   color: var(--text-secondary);
//   line-height: 1.7;
//   margin-bottom: 32px;
// }

// .complete-record {
//   background: var(--surface);
//   border: 1.5px solid var(--border);
//   padding: 20px;
//   text-align: left;
//   margin-bottom: 24px;
// }

// .complete-record-row {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 0;
//   border-bottom: 1px solid var(--border);
//   font-size: 12px;
// }

// .complete-record-row:last-child { border-bottom: none; }

// .complete-record-key {
//   font-weight: 700;
//   color: var(--text-muted);
//   text-transform: uppercase;
//   font-size: 10px;
//   letter-spacing: 0.06em;
// }

// .complete-record-val {
//   font-weight: 600;
//   color: var(--black);
// }

// .btn-copy {
//   height: 40px;
//   padding: 0 20px;
//   font-family: var(--font);
//   font-size: 11px;
//   font-weight: 700;
//   letter-spacing: 0.06em;
//   text-transform: uppercase;
//   cursor: pointer;
//   border: 1.5px solid var(--border-dark);
//   background: var(--white);
//   color: var(--black);
//   transition: all 180ms ease;
//   margin-right: 8px;
// }

// .btn-copy:hover { border-color: var(--black); }

// .complete-note {
//   font-size: 11px;
//   color: var(--text-muted);
//   margin-top: 20px;
//   line-height: 1.6;
// }

// /* Responsive */
// @media (max-width: 768px) {
//   .sidebar { width: 220px; min-width: 220px; --sidebar-w: 220px; }
//   .main-content { margin-left: 220px; }
//   .content-topbar, .content-area { padding-left: 24px; padding-right: 24px; }
//   .info-grid { grid-template-columns: 1fr; }
//   .stamp-row { grid-template-columns: 1fr; }
// }

// /* Utility */
// .text-violet { color: var(--violet); }
// .text-muted { color: var(--text-muted); }
// .fw-700 { font-weight: 700; }
// .mb-24 { margin-bottom: 24px; }

// .badge {
//   display: inline-block;
//   font-size: 9px;
//   font-weight: 700;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   padding: 3px 8px;
//   background: var(--violet-light);
//   color: var(--violet-dark);
//   margin-left: 8px;
// }

// .pillar-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 1px;
//   background: var(--border);
//   margin: 24px 0;
// }

// .pillar-cell {
//   background: var(--white);
//   padding: 20px;
// }

// .pillar-cell-num {
//   font-size: 32px;
//   font-weight: 900;
//   color: var(--violet);
//   letter-spacing: -0.04em;
// }

// .pillar-cell-name {
//   font-size: 11px;
//   font-weight: 800;
//   color: var(--black);
//   text-transform: uppercase;
//   letter-spacing: 0.06em;
//   margin: 4px 0 8px;
// }

// .pillar-cell-desc {
//   font-size: 11px;
//   font-weight: 400;
//   color: var(--text-muted);
//   line-height: 1.6;
// }

// @media (max-width: 600px) {
//   .pillar-grid { grid-template-columns: 1fr; }
//   .login-card { padding: 32px 24px; }
//   .disclaimer-body { padding: 24px 24px; }
//   .disclaimer-header, .disclaimer-footer { padding: 24px 24px; }
//   .complete-card { padding: 32px 24px; }
// }

// </style>
// `;

// const PORTAL_SHELL_HTML = `

// <!-- ============================================================
//      SCREEN 1: LOGIN
//      ============================================================ -->
// <div id="screen-login" class="screen active">
//   <div class="login-card">
//     <div class="login-logo">
//       <div class="login-logo-mark"><span>M</span></div>
//       <div class="login-logo-text">Magsmen</div>
//     </div>
//     <h1 class="login-heading">Strategy Intelligence Portal</h1>
//     <p class="login-sub">This portal contains Magsmen's proprietary strategy methodology. Access is restricted to authorised strategy team members only. Your identity is recorded upon entry.</p>
//     <div class="form-group">
//       <label class="form-label" for="inp-name">Full Name</label>
//       <input class="form-input" type="text" id="inp-name" placeholder="Your full name" autocomplete="name">
//     </div>
//     <div class="form-group">
//       <label class="form-label" for="inp-email">Work Email</label>
//       <input class="form-input" type="email" id="inp-email" placeholder="you@magsmen.com" autocomplete="email">
//     </div>
//     <div class="form-group">
//       <label class="form-label" for="inp-role">Role</label>
//       <select class="form-select" id="inp-role">
//         <option value="">Select your role</option>
//         <option value="Strategy Associate">Strategy Associate</option>
//         <option value="Senior Strategy Associate">Senior Strategy Associate</option>
//         <option value="Lead Strategist">Lead Strategist</option>
//         <option value="Brand Strategy Associate">Brand Strategy Associate</option>
//       </select>
//     </div>
//     <button class="btn-primary" id="btn-login" onclick="handleLogin()">Enter Portal</button>
//     <p class="login-legal">By entering, you acknowledge that this portal contains proprietary and confidential information belonging to Grofesion Innovations Private Limited. Unauthorised access or disclosure is prohibited under the Indian Copyright Act, 1957 and the Information Technology Act, 2000.</p>
//   </div>
// </div>

// <!-- ============================================================
//      SCREEN 2: LEGAL DISCLAIMER
//      ============================================================ -->
// <div id="screen-disclaimer" class="screen">
//   <div class="disclaimer-card">
//     <div class="disclaimer-header">
//       <h2>Confidentiality and Proprietary Rights Acknowledgment</h2>
//       <p>Read in full before proceeding. Scroll to the bottom to accept.</p>
//     </div>
//     <div class="disclaimer-body" id="disclaimer-scroll">

//       <h3>1. Nature of This Document</h3>
//       <p>This portal and all information contained within it constitute the exclusive proprietary intellectual property of Grofesion Innovations Private Limited, operating as Magsmen Strategy Consultants (hereinafter "Magsmen"), a company incorporated under the Companies Act, 2013. Access is granted solely to authorised employees and contractors of Magsmen who have been specifically designated as members of the Strategy team.</p>

//       <h3>2. Intellectual Property Ownership</h3>
//       <p>All frameworks, methodologies, analytical models, research processes, diagnostic systems, engagement structures, training content, and strategic thinking contained in this portal are the original intellectual property of Grofesion Innovations Private Limited. This includes, without limitation, the Five-Pillar OTC Diagnostic, the 13-Stage Brand Creation Framework, the Brand Health Index, the MACES Qualification System, the Brand Volatility Matrix, the Competitive Gravity Map, the Stature Methodology, the Brand Expresso Framework, the Linkfluence System, the Perception Audit Format, and the 5D Consulting Framework.</p>
//       <p>These materials are protected under the Indian Copyright Act, 1957, the Information Technology Act, 2000, and the Trade Marks Act, 1999. No licence or right to reproduce, distribute, adapt, or commercially exploit any portion of this content is granted to the accessing user.</p>

//       <h3>3. Confidentiality Obligations</h3>
//       <p>By accessing this portal, you agree to maintain strict confidentiality over all information contained herein. This obligation arises independently of and in addition to any confidentiality or non-disclosure provisions in your employment agreement with Grofesion Innovations Private Limited. You must not: share, distribute, photograph, screenshot, record, or transmit any content from this portal to any person outside Magsmen; use any content from this portal for any purpose other than performing your responsibilities as a strategy team member at Magsmen; retain copies of any content after your employment or engagement with Magsmen concludes.</p>

//       <h3>4. Employment-Tied Obligations</h3>
//       <p>Your access to this portal is conditional on your active employment or engagement with Grofesion Innovations Private Limited. Upon conclusion of your employment or engagement, all access rights terminate immediately. You are required to delete or return any material derived from this portal. Post-employment, your obligations of confidentiality over the contents of this portal survive indefinitely, as trade secrets under applicable Indian law, and for a minimum period of five (5) years for all other confidential information.</p>

//       <h3>5. Consequence of Breach</h3>
//       <p>Unauthorised disclosure, reproduction, or commercial use of any content from this portal constitutes a breach of contract, a violation of intellectual property rights, and may constitute a criminal offence under the Information Technology Act, 2000 (Sections 43, 66, 66B) and the Bharatiya Nyaya Sanhita, 2023. Magsmen reserves the right to pursue civil remedies including injunctive relief, damages, and account of profits under the Copyright Act, 1957 (Section 55), the Trade Marks Act, 1999 (Section 135), and the Code of Civil Procedure, 1908.</p>

//       <h3>6. Access Tracking</h3>
//       <p>Your access to this portal, including your name, email, role, the date and time of access, and your completion status, is recorded and maintained by Magsmen. This data may be used in any disciplinary proceeding or legal action arising from unauthorised use of this portal's contents. By proceeding, you consent to this recording under the Digital Personal Data Protection Act, 2023.</p>

//       <h3>7. Governing Law and Jurisdiction</h3>
//       <p>These terms are governed by the laws of India. Any dispute arising from or in connection with this portal or its contents shall be subject to the exclusive jurisdiction of the courts at Hyderabad, Telangana, and, where applicable, arbitration under the Arbitration and Conciliation Act, 1996 at a venue in Hyderabad.</p>

//       <h3>8. Acknowledgment</h3>
//       <p>By accepting below, you confirm that you have read, understood, and agree to all of the above. You confirm that you are an authorised strategy team member of Magsmen. You understand that this portal and all its contents are confidential and proprietary. You understand that any breach carries serious legal consequences.</p>

//       <p id="disclaimer-end" style="font-weight:700;color:#0F0A1A;margin-top:24px;">You have reached the end of the disclosure. You may now accept below.</p>

//     </div>
//     <div class="disclaimer-footer">
//       <p class="scroll-note" id="scroll-note">Scroll through the full disclosure above before accepting.</p>
//       <div class="disclaimer-check-row">
//         <input type="checkbox" id="chk-disclaimer" disabled onchange="toggleDisclaimerBtn()">
//         <label for="chk-disclaimer">I have read and understood the above in full. I accept all confidentiality and intellectual property obligations. I confirm I am an authorised Magsmen strategy team member.</label>
//       </div>
//       <button class="btn-primary" id="btn-disclaimer" disabled onclick="handleDisclaimerAccept()">I Accept. Begin the Programme.</button>
//     </div>
//   </div>
// </div>

// <!-- ============================================================
//      SCREEN 3: MAIN PORTAL
//      ============================================================ -->
// <div id="screen-portal" class="screen">

//   <!-- SIDEBAR -->
//   <nav class="sidebar" id="sidebar">
//     <div class="sidebar-brand">
//       <div class="sidebar-brand-mark">
//         <div class="sidebar-mark-box"><span>M</span></div>
//         <div>
//           <div class="sidebar-firm">Magsmen</div>
//         </div>
//       </div>
//       <div class="sidebar-sub">Strategy Intelligence Portal</div>
//     </div>

//     <div class="sidebar-progress-bar">
//       <div class="sidebar-progress-fill" id="progress-fill" style="width:0%"></div>
//     </div>
//     <div class="sidebar-progress-label" id="progress-label">0 of 11 modules completed</div>

//     <div class="sidebar-nav" id="sidebar-nav">
//       <!-- Dynamically populated -->
//     </div>

//     <div class="sidebar-user-bar">
//       <div class="sidebar-user-name" id="sidebar-name">Loading...</div>
//       <div class="sidebar-user-role" id="sidebar-role">Strategy Team</div>
//     </div>
//   </nav>

//   <!-- MAIN CONTENT AREA -->
//   <div class="main-content">
//     <div class="content-topbar">
//       <div class="topbar-breadcrumb">Strategy Portal <span id="topbar-module-name"></span></div>
//       <div class="topbar-confid">Strictly Confidential</div>
//     </div>
//     <div class="content-area" id="content-area">
//       <!-- Content injected by JS -->
//     </div>
//   </div>

// </div>

// <!-- ============================================================
//      SCREEN 4: COMPLETION
//      ============================================================ -->
// <div id="screen-complete" class="screen">
//   <div class="complete-card">
//     <div class="complete-icon">
//       <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
//     </div>
//     <h2 class="complete-title">Programme Complete</h2>
//     <p class="complete-sub">You have completed all 11 modules of the Magsmen Strategy Intelligence Programme. Your completion record has been logged and submitted to the relevant team members.</p>
//     <div class="complete-record" id="complete-record">
//       <!-- Dynamically populated -->
//     </div>
//     <button class="btn-copy" onclick="copyRecord()">Copy Record</button>
//     <button class="btn-primary" style="width:auto;display:inline-block;padding:0 24px;height:40px;" onclick="window.print()">Print Certificate</button>
//     <p class="complete-note">This record has been submitted to sandeep@magsmen.com and hr@magsmen.com. You are now cleared to begin assigned strategy work at Magsmen.</p>
//   </div>
// </div>


// `;

// /* ============================================================
//    PORTAL LOGIC (screen flow, module rendering, module content)
//    Unchanged from the source build — see comment above.
//    ============================================================ */
// /* ============================================================
//    EMAILJS CONFIGURATION
//    Replace these with your actual EmailJS credentials
//    Service: https://www.emailjs.com
//    ============================================================ */
// const EMAILJS_PUBLIC_KEY   = 'YOUR_EMAILJS_PUBLIC_KEY';
// const EMAILJS_SERVICE_ID   = 'YOUR_EMAILJS_SERVICE_ID';
// const EMAILJS_TEMPLATE_ID  = 'YOUR_EMAILJS_TEMPLATE_ID';
// // Template variables expected: {{user_name}}, {{user_email}}, {{user_role}}, {{completion_date}}, {{modules_done}}

// /* ============================================================
//    MODULE DEFINITIONS
//    ============================================================ */
// interface ModuleDefinition {
//   id: number;
//   key: string;
//   label: string;
// }

// interface UserProfile {
//   name?: string;
//   email?: string;
//   role?: string;
//   loginTime?: string;
//   disclaimerAccepted?: boolean;
//   disclaimerTime?: string;
// }

// interface SavedProgress {
//   completedModules?: number[];
//   currentModule?: number;
//   [key: string]: unknown;
// }

// interface CompletionLogData {
//   email?: string;
//   name?: string;
//   role?: string;
//   completionDate?: string;
//   modulesDone?: string;
//   [key: string]: unknown;
// }

// interface StorageGetResult {
//   value: string;
// }

// const MODULES: ModuleDefinition[] = [
//   { id: 1,  key: 'foundation',        label: 'The Foundation'             },
//   { id: 2,  key: 'services',          label: 'Our Services'               },
//   { id: 3,  key: 'research',          label: 'How We Research'            },
//   { id: 4,  key: 'consumer',          label: 'Consumer Analysis'          },
//   { id: 5,  key: 'analysis',          label: 'How We Analyse'             },
//   { id: 6,  key: 'architecture',      label: 'Brand Architecture'         },
//   { id: 7,  key: 'integrated',        label: 'Business-Integrated Brand'  },
//   { id: 8,  key: 'frameworks',        label: 'Magsmen Frameworks'         },
//   { id: 9,  key: 'protocols',         label: 'Team Protocols'             },
//   { id: 10, key: 'legal',             label: 'Legal Dimension'            },
//   { id: 11, key: 'acknowledgment',    label: 'Acknowledgment'             },
// ];

// /* ============================================================
//    STATE
//    ============================================================ */
// let currentUser: UserProfile = {};
// let currentModule: number = 1;
// let completedModules: number[] = [];
// let memoryFallbackStore: Record<string, string> = {}; // in-memory fallback (no browser storage in artifacts)

// /* ============================================================
//    STORAGE HELPERS
//    ============================================================ */
// async function saveProgress(data: SavedProgress): Promise<void> {
//   const key = 'user_' + (currentUser.email || 'anon').replace(/[^a-z0-9]/gi,'_');

//   try {
//     window.localStorage.setItem(key, JSON.stringify(data));
//   } catch (e) {
//     /* fallback: store in memory for this session */
//     memoryFallbackStore[key] = JSON.stringify(data);
//   }
// }

// async function loadProgress(email?: string): Promise<SavedProgress | null> {
//   const key = 'user_' + (email || 'anon').replace(/[^a-z0-9]/gi,'_');

//   try {
//     const result = window.localStorage.getItem(key);
//     return result ? JSON.parse(result) : null;
//   } catch (e) {
//     const s = memoryFallbackStore[key];
//     return s ? JSON.parse(s) : null;
//   }
// }

// async function logCompletion(data: CompletionLogData): Promise<void> {
//   const key = 'completion_' + Date.now() + '_' + (data.email || '').replace(/[^a-z0-9]/gi,'_');

//   try {
//     window.localStorage.setItem(key, JSON.stringify(data));
//   } catch (e) {}
// }

// /* ============================================================
//    LOGIN
//    ============================================================ */
// function handleLogin() {
//   const nameEl = document.getElementById('inp-name') as HTMLInputElement | null;
//   const emailEl = document.getElementById('inp-email') as HTMLInputElement | null;
//   const roleEl = document.getElementById('inp-role') as HTMLSelectElement | null;
//   const screenLoginEl = document.getElementById('screen-login');
//   const screenDisclaimerEl = document.getElementById('screen-disclaimer');
//   const disclaimerScrollEl = document.getElementById('disclaimer-scroll');

//   if (!nameEl || !emailEl || !roleEl || !screenLoginEl || !screenDisclaimerEl || !disclaimerScrollEl) {
//     alert('Unable to load the portal login form. Please refresh and try again.');
//     return;
//   }

//   const name = nameEl.value.trim();
//   const email = emailEl.value.trim();
//   const role = roleEl.value;

//   if (!name || !email || !role) { alert('Please complete all fields before entering the portal.'); return; }
//   if (!email.includes('@')) { alert('Please enter a valid email address.'); return; }
//   currentUser = { name, email, role, loginTime: new Date().toISOString() };
//   screenLoginEl.classList.remove('active');
//   screenDisclaimerEl.classList.add('active');
//   // Set up scroll detection
//   disclaimerScrollEl.addEventListener('scroll', checkDisclaimerScroll);
// }

// function checkDisclaimerScroll() {
//   const el = document.getElementById('disclaimer-scroll') as HTMLDivElement | null;
//   const chkDisclaimerEl = document.getElementById('chk-disclaimer') as HTMLInputElement | null;
//   const scrollNoteEl = document.getElementById('scroll-note');

//   if (!el || !chkDisclaimerEl || !scrollNoteEl) {
//     return;
//   }

//   const scrolled = (el.scrollTop + el.clientHeight) >= (el.scrollHeight - 40);
//   if (scrolled) {
//     chkDisclaimerEl.disabled = false;
//     scrollNoteEl.textContent = 'You may now accept the declaration below.';
//     scrollNoteEl.style.color = '#059669';
//   }
// }

// function toggleDisclaimerBtn() {
//   const chkDisclaimerEl = document.getElementById('chk-disclaimer') as HTMLInputElement | null;
//   const btnDisclaimerEl = document.getElementById('btn-disclaimer') as HTMLButtonElement | null;

//   if (!chkDisclaimerEl || !btnDisclaimerEl) {
//     return;
//   }

//   const checked = chkDisclaimerEl.checked;
//   btnDisclaimerEl.disabled = !checked;
// }

// /* ============================================================
//    DISCLAIMER ACCEPT
//    ============================================================ */
// async function handleDisclaimerAccept() {
//   currentUser.disclaimerAccepted = true;
//   currentUser.disclaimerTime = new Date().toISOString();

//   // Load any saved progress
//   const saved = await loadProgress(currentUser.email);
//   if (saved && saved.completedModules) {
//     completedModules = saved.completedModules;
//     currentModule = (saved.currentModule && saved.currentModule <= 11) ? saved.currentModule : (completedModules.length + 1);
//     if (currentModule > 11) currentModule = 11;
//   }

//   const screenDisclaimer = document.getElementById('screen-disclaimer') as HTMLElement | null;
//   const screenPortal = document.getElementById('screen-portal') as HTMLElement | null;

//   if (screenDisclaimer) {
//     screenDisclaimer.classList.remove('active');
//   }
//   if (screenPortal) {
//     screenPortal.classList.add('active');
//   }

//   initPortal();
//   renderModule(currentModule);
// }

// /* ============================================================
//    PORTAL INIT
//    ============================================================ */
// function initPortal() {
//   const sidebarName = document.getElementById('sidebar-name') as HTMLElement | null;
//   const sidebarRole = document.getElementById('sidebar-role') as HTMLElement | null;

//   if (sidebarName) {
//     sidebarName.textContent = currentUser.name ?? '';
//   }
//   if (sidebarRole) {
//     sidebarRole.textContent = currentUser.role ?? '';
//   }

//   buildSidebar();
//   updateProgress();
// }

// function buildSidebar() {
//   const nav = document.getElementById('sidebar-nav') as HTMLElement | null;

//   if (!nav) {
//     return;
//   }

//   nav.innerHTML = '';
//   const sectionLabel = document.createElement('div');
//   sectionLabel.className = 'nav-section-label';
//   sectionLabel.textContent = 'Programme Modules';
//   nav.appendChild(sectionLabel);
//   MODULES.forEach(m => {
//     const isDone   = completedModules.includes(m.id);
//     const isCurrent = currentModule === m.id;
//     const isLocked = m.id > (completedModules.length + 1);
//     const btn = document.createElement('button');
//     btn.className = 'nav-item' + (isDone ? ' done' : '') + (isCurrent ? ' active' : '') + (isLocked ? ' locked' : '');
//     btn.setAttribute('data-module', String(m.id));
//     btn.innerHTML = `
//       <div class="nav-status">${isDone ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : m.id}</div>
//       <div class="nav-item-text">
//         <span class="nav-item-num">Module ${m.id}</span>
//         <span class="nav-item-label">${m.label}</span>
//       </div>`;
//     if (!isLocked) {
//       btn.addEventListener('click', () => { renderModule(m.id); });
//     }
//     nav.appendChild(btn);
//   });
// }

// function updateProgress() {
//   const total = MODULES.length;
//   const done  = completedModules.length;
//   const pct   = Math.round((done / total) * 100);
//   const progressFill = document.getElementById('progress-fill') as HTMLElement | null;
//   const progressLabel = document.getElementById('progress-label') as HTMLElement | null;

//   if (progressFill) {
//     progressFill.style.width = pct + '%';
//   }
//   if (progressLabel) {
//     progressLabel.textContent = done + ' of ' + total + ' modules completed';
//   }
// }

// interface PortalUser {
//   name?: string;
//   role?: string;
//   email?: string;
//   disclaimerAccepted?: boolean;
//   disclaimerTime?: string;
// }

// interface Module {
//   id: number;
//   label: string;
// }

// interface PortalProgressState {
//   completedModules: number[];
//   currentModule: number;
//   user: PortalUser;
//   [key: string]: unknown;
// }

// /* ============================================================
//    MODULE RENDERER
//    ============================================================ */
// function renderModule(moduleIndex?: number): void {
//   const id = moduleIndex ?? currentModule;
//   currentModule = id;
//   const m = MODULES.find((x: Module) => x.id === id) as Module;
//   const topbarModuleName = document.getElementById('topbar-module-name') as HTMLElement | null;
//   const content = document.getElementById('content-area') as HTMLElement | null;

//   if (topbarModuleName) {
//     topbarModuleName.textContent = ' / ' + m.label;
//   }
//   if (content) {
//     content.innerHTML = getModuleContent(id);
//     content.scrollTop = 0;
//   }
//   buildSidebar();
//   window.scrollTo(0, 0);
//   const mainContent = document.querySelector('.main-content') as HTMLElement | null;
//   if (mainContent) {
//     mainContent.scrollTop = 0;
//   }
//   if (id === 11) {
//     setTimeout(() => {
//       const sn = document.getElementById('stamp-name') as HTMLElement | null;
//       const sr = document.getElementById('stamp-role') as HTMLElement | null;
//       if (sn) sn.textContent = (currentUser as PortalUser).name || '';
//       if (sr) sr.textContent = (currentUser as PortalUser).role || '';
//     }, 60);
//   }
// }

// function acknowledgeModule(moduleIndex?: number): void {
//   const id = moduleIndex ?? currentModule;
//   if (!completedModules.includes(id)) {
//     completedModules.push(id);
//   }
//   updateProgress();
//   buildSidebar();
//   const state: PortalProgressState = { completedModules, currentModule: id + 1, user: currentUser };
//   saveProgress(state);
//   if (id < 11) {
//     currentModule = id + 1;
//     renderModule(id + 1);
//   } else {
//     showCompletion();
//   }
// }

// function prevModule(moduleIndex?: number): void {
//   const id = moduleIndex ?? currentModule;
//   if (id > 1) renderModule(id - 1);
// }

// /* ============================================================
//    MODULE FOOTER HELPER
//    ============================================================ */
// function moduleFooter(id: number, ackLabel?: string): string {
//   const isDone: boolean = completedModules.includes(id);
//   const dots: string = MODULES.map((m: Module) => {
//     let cls = 'prog-dot';
//     if (completedModules.includes(m.id)) cls += ' done';
//     if (m.id === id) cls += ' current';
//     return `<div class="${cls}"></div>`;
//   }).join('');
//   const prevBtn: string = id > 1 ? `<button class="btn-nav" onclick="prevModule(${id})">Back</button>` : `<span></span>`;
//   const ackBtn: string = isDone
//     ? `<button class="btn-acknowledge" onclick="renderModule(${Math.min(id + 1, 11)})" style="background:var(--success)">Continue</button>`
//     : `<button class="btn-acknowledge" id="btn-ack-${id}" onclick="acknowledgeModule(${id})">${ackLabel || 'I have read this module'}</button>`;
//   return `<div class="module-footer"><div class="module-progress-dots">${dots}</div><div style="display:flex;gap:8px;align-items:center">${prevBtn}${ackBtn}</div></div>`;
// }

// /* ============================================================
//    COMPLETION
//    ============================================================ */
// async function showCompletion() {
//   const now = new Date();
//   const completionData: {
//     name: string;
//     email: string;
//     role: string;
//     completedAt: string;
//     displayDate: string;
//     displayTime: string;
//   } = {
//     name: currentUser.name ?? '',
//     email: currentUser.email ?? '',
//     role: currentUser.role ?? '',
//     completedAt: now.toISOString(),
//     displayDate: now.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' }),
//     displayTime: now.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }),
//   };
//   await logCompletion(completionData);

//   const completeRecord = document.getElementById('complete-record');
//   const screenPortal = document.getElementById('screen-portal');
//   const screenComplete = document.getElementById('screen-complete');

//   if (!completeRecord || !screenPortal || !screenComplete) {
//     console.warn('Completion screen elements are missing.');
//     return;
//   }

//   // Build completion record
//   completeRecord.innerHTML = `
//     <div class="complete-record-row"><span class="complete-record-key">Name</span><span class="complete-record-val">${completionData.name}</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Email</span><span class="complete-record-val">${completionData.email}</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Role</span><span class="complete-record-val">${completionData.role}</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Completed On</span><span class="complete-record-val">${completionData.displayDate}</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Time</span><span class="complete-record-val">${completionData.displayTime}</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Modules</span><span class="complete-record-val">11 of 11 Completed</span></div>
//     <div class="complete-record-row"><span class="complete-record-key">Status</span><span class="complete-record-val" style="color:var(--success);font-weight:800">Ready for Strategy Work</span></div>
//   `;
//   (window as Window & { _completionData?: typeof completionData })._completionData = completionData;
//   screenPortal.classList.remove('active');
//   screenComplete.classList.add('active');
//   sendCompletionEmail(completionData);
// }

// function copyRecord() {
//   const d = (window as Window & { _completionData?: typeof window._completionData })._completionData;
//   if (!d) return;
//   const text = `MAGSMEN STRATEGY PORTAL — COMPLETION RECORD\nName: ${d.name}\nEmail: ${d.email}\nRole: ${d.role}\nCompleted: ${d.displayDate} at ${d.displayTime}\nModules: 11 of 11\nStatus: Ready for Strategy Work`;
//   navigator.clipboard.writeText(text).then(() => alert('Record copied to clipboard.'));
// }

// interface CompletionEmailData {
//   name: string;
//   email: string;
//   role: string;
//   displayDate: string;
//   displayTime: string;
// }

// interface CompletionEmailPayload {
//   user_name: string;
//   user_email: string;
//   user_role: string;
//   completion_date: string;
//   modules_done: string;
//   to_email: string;
// }

// function sendCompletionEmail(data?: CompletionEmailData): void {
//   if (!data) {
//     console.warn('Completion email data was not provided.');
//     return;
//   }

//   if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
//     console.log('EmailJS not configured. Completion data:', data);
//     return;
//   }
//   emailjs.init(EMAILJS_PUBLIC_KEY);

//   const payload: CompletionEmailPayload = {
//     user_name:       data.name,
//     user_email:      data.email,
//     user_role:       data.role,
//     completion_date: data.displayDate + ' at ' + data.displayTime,
//     modules_done:    '11 of 11',
//     to_email:        'sandeep@magsmen.com,hr@magsmen.com',
//   };

//   emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload).catch((err: unknown) => console.warn('Email send failed:', err));
// }

// /* ============================================================
//    MODULE CONTENT — ALL 11 MODULES
//    ============================================================ */
// type ModuleId = number;

// function getModuleContent(id: ModuleId): string {
//   switch(id) {
//     case 1:  return m1();
//     case 2:  return m2();
//     case 3:  return m3();
//     case 4:  return m4();
//     case 5:  return m5();
//     case 6:  return m6();
//     case 7:  return m7();
//     case 8:  return m8();
//     case 9:  return m9();
//     case 10: return m10();
//     case 11: return m11();
//     default: return '';
//   }
// }

// /* ---- MODULE 1: THE FOUNDATION ---- */
// function m1() { return `
// <div class="module-eyebrow">Module 01</div>
// <h1 class="module-title">The Foundation</h1>
// <p class="module-intro">Before you touch a client brief, you need to understand what Magsmen is and what it is not. Most strategy errors at this firm begin with a misunderstanding of our identity. This module exists to eliminate that misunderstanding on your first day.</p>

// <div class="section-heading">What Magsmen Is</div>
// <p class="body-text">Magsmen is a strategy consulting firm. We build brands as business systems. Every engagement we take begins with a business problem, proceeds through structural diagnosis, and produces a strategy that a business can operate against. We are not a creative agency. We do not produce campaigns, manage social media, design logos, or handle media buying. We identify the structural problems that prevent a business from becoming a brand, and we solve them.</p>
// <p class="body-text">The parent company is <strong>Grofesion Innovations Private Limited</strong>. The consulting practice operating under it is <strong>Magsmen Strategy Consultants</strong>. All engagements are delivered under the Magsmen name and governed by Grofesion Innovations.</p>

// <div class="pillar-grid">
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">01</div>
//     <div class="pillar-cell-name">Brand Architecture</div>
//     <div class="pillar-cell-desc">Positioning, identity, narrative, and communication framework. The strategic foundation a business operates from.</div>
//   </div>
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">02</div>
//     <div class="pillar-cell-name">Business Structuring</div>
//     <div class="pillar-cell-desc">Revenue model, operational alignment, pricing strategy, and structural decisions that allow a brand to sustain itself commercially.</div>
//   </div>
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">03</div>
//     <div class="pillar-cell-name">Legal Brand Protection</div>
//     <div class="pillar-cell-desc">IP architecture, trademark strategy, governance, and reputational protection. The legal dimension embedded in every engagement.</div>
//   </div>
// </div>

// <div class="callout-box">
//   <p>These three pillars are not separate departments. They are three dimensions of a single intervention. When you build brand strategy at Magsmen, you build across all three simultaneously. A brand strategy that ignores business structure will fail in execution. One that ignores legal protection will be vulnerable the moment it gains market value.</p>
// </div>

// <div class="section-heading">What We Are Not</div>
// <p class="body-text">A client will sometimes arrive expecting a marketing plan, a brand refresh, or a content calendar. Your job is to diagnose what they actually need, not deliver what they thought they wanted. Magsmen does not compete on creative execution. We compete on structural clarity.</p>

// <div class="section-heading">The Nine Beliefs That Govern Our Work</div>
// <p class="body-text">Every strategic recommendation at Magsmen is rooted in nine foundational beliefs. These are not values on a wall. They are the operating logic of every engagement. Know them before your first client call.</p>

// <div class="step-list">
//   <div class="belief-item">
//     <div class="belief-num">Belief 01</div>
//     <div class="belief-title">Brands Are Built by Customers, Not Companies</div>
//     <div class="belief-text">A brand lives in the mind of the person who experiences, remembers, defends, and repeatedly chooses it. The company's role is to earn the right for customers to build the brand. Our strategy designs every client interaction and market behaviour so customers arrive at the intended conclusion without being told to.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 02</div>
//     <div class="belief-title">Brand Is an Economic Asset, Not a Marketing Tool</div>
//     <div class="belief-text">A correctly architected brand commands a price premium, reduces customer acquisition cost, and creates resilience during market volatility. Treat it like a balance sheet asset. Most Indian businesses treat brand as an expense. That is the mistake we are hired to correct.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 03</div>
//     <div class="belief-title">Legal Protection Is Brand Strategy, Not a Separate Function</div>
//     <div class="belief-text">An unregistered trademark is a brand asset someone else can take. A founder agreement without IP assignment clauses is a threat to ownership structure. A celebrity partnership without reputation protection clauses is a crisis waiting to occur. Legal foresight is embedded in every engagement from Day 1.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 04</div>
//     <div class="belief-title">Every Business Has the Right to Become a Brand</div>
//     <div class="belief-text">Not just large companies. Not just well-funded startups. The MSME in Guntur, the family textile business in Vijayawada, the first-generation founder in Tirupati each has the structural ability to build a brand that commands respect and pricing power. Our work is to show them how.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 05</div>
//     <div class="belief-title">Building Marketing Before Brand Is the Biggest Mistake Indian Founders Make</div>
//     <div class="belief-text">Spending on marketing before building brand foundation creates a business that permanently spends on paid attention because it has not earned organic trust. Positioning, identity, narrative, and experience architecture come first. Marketing is amplification of something real, not a substitute for something missing.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 06</div>
//     <div class="belief-title">Systems Over Short-Term Wins</div>
//     <div class="belief-text">A brand system built correctly in year one generates returns for ten years. A campaign built for this quarter disappears next quarter. We optimise for compounding, not for visibility.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 07</div>
//     <div class="belief-title">Businesses That Have Grown Without Structure Are the Most Urgent Opportunity</div>
//     <div class="belief-text">Revenue growth through relationships and hard work is real. Brand architecture underneath that growth is missing. One competitor with a sharper brand can displace years of relationship-built business. We go in, find the missing structure, and build it while the business continues to operate.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 08</div>
//     <div class="belief-title">Learn. Earn. Return.</div>
//     <div class="belief-text">This is the firm's personal philosophy. Learn deeply through research and pattern recognition. Earn through applied strategic work. Return that knowledge to the community through platforms, mentorship, and institutions. Every Magsmen venture reflects this loop.</div>
//   </div>
//   <div class="belief-item">
//     <div class="belief-num">Belief 09</div>
//     <div class="belief-title">The Goal Is to Change How Indian Founders Think About Brand, Permanently</div>
//     <div class="belief-text">Magsmen is not building a consulting firm. It is building a movement. Success is measured not by client count but by whether Indian founders think about brand differently because of the frameworks and institutions this firm built.</div>
//   </div>
// </div>

// <div class="section-heading">The Firm's Voice Standard</div>
// <p class="body-text">Everything you write at Magsmen, including strategy documents, proposals, research reports, and emails, must follow the firm's voice standard. Short declarative sentences. No dashes anywhere in prose. No filler words. No AI language. Claims made through argument, not adjective. Write the way a trusted senior advisor speaks to a founder: direct, warm, structurally confident.</p>
// <div class="warning-box"><p>Never use: leverage, synergy, holistic, end-to-end, game-changer, transformative, disruptive, or any word that announces its own importance. If a sentence sounds like it could have been written by anyone, rewrite it until it sounds like Magsmen.</p></div>

// ${moduleFooter(1,'I have read and understood The Foundation')}
// `; }

// /* ---- MODULE 2: OUR SERVICES ---- */
// function m2() { return `
// <div class="module-eyebrow">Module 02</div>
// <h1 class="module-title">Our Services</h1>
// <p class="module-intro">Magsmen runs eight services. Each one is built around a specific business problem at a specific stage of a client's growth. Your job is not to sell any of these. Your job is to understand each one deeply enough that you can match the right service to the right client problem. A mismatch here wastes everyone's time and damages the firm's positioning.</p>

// <div class="callout-box"><p>One rule that applies across every service: a client is never sold something. A client is diagnosed, and the right service is recommended based on what the diagnosis surfaces. If you find yourself pitching a service instead of diagnosing a problem, stop and go back to the discovery questions.</p></div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 01</div>
//   <div class="service-name">OTC: One-Time Consulting</div>
//   <div class="service-desc">The OTC is Magsmen's entry-level diagnostic. It is not a strategy. It is a diagnosis. Think of it as a structured investigation into why a business is stuck, underperforming, or confused about its next move. A client comes in with symptoms. Magsmen identifies the root cause. Standard fee: INR 50,000 plus GST. Duration: 2 to 3 weeks.</div>

//   <div class="section-heading" style="margin-top:20px;">Why this service exists</div>
//   <p class="body-text">Most founders know something is wrong with their business. They just cannot name it precisely. They think it is a marketing problem when it is actually a pricing problem. They think it is a team problem when it is actually a structure problem. The OTC is designed to surface that real problem through a structured five-pillar analysis. Once the primary constraint is identified with evidence, the client has a clear direction. Without that clarity, any money spent on execution is likely to go toward the wrong problem.</p>

//   <div class="section-heading">How the OTC works, step by step</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">1</div>
//       <div class="step-content">
//         <h4>MACES qualification</h4>
//         <p>Before the discovery call is scheduled, the business development team runs the prospect through MACES. Does the founder have decision-making authority? Is the budget realistic? Is the problem real and within our scope? If any of these fail, we do not proceed. The OTC is not a price point for hesitant prospects. It is a service for founders who are genuinely committed to understanding their business problem.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">2</div>
//       <div class="step-content">
//         <h4>Pre-engagement research</h4>
//         <p>Before the first meeting with the client, the Brand Strategy Associate builds a desk research dossier. This covers the business's public digital footprint, the category it operates in, three to five competitors, and any available consumer sentiment. The purpose is to arrive at the discovery meeting with informed observations, not blank questions. You should already have hypotheses when you walk in.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">3</div>
//       <div class="step-content">
//         <h4>Discovery meeting</h4>
//         <p>This is a 90-minute to 2-hour structured conversation with the founder or leadership team. The Lead Strategist runs the meeting. The Brand Strategy Associate takes structured notes. The questions in this meeting are designed to reveal the business across all five pillars. You are listening for what the founder says and what they avoid saying. Both are data. Three signals to watch for: a founder who cannot describe their customer without describing their product, a founder who lists competitors they do not actually compete with, and a founder whose price ambition does not match their current quality level. These are structural red flags that the strategy must address.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">4</div>
//       <div class="step-content">
//         <h4>Five-pillar analysis</h4>
//         <p>After the discovery meeting, the team analyses the business across five pillars. Legal: is the brand name protected, are there IP gaps, are founder agreements in place, is the regulatory compliance adequate? Brand: is there a clear positioning, is communication consistent, is the visual identity coherent, is there a perception gap between intended and actual? Business: is the revenue model healthy, is the pricing architecture correct, is distribution aligned with the audience, is customer acquisition cost sustainable? Operations: is there documented process, is the delivery consistent, can the business scale without breaking? Team: are roles clear, is there decision-making bottleneck at the founder level, are there capability gaps in critical functions?</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">5</div>
//       <div class="step-content">
//         <h4>Primary constraint identification</h4>
//         <p>Every business has one pillar that is causing the most damage. Solving the secondary constraints before the primary constraint is expensive and ineffective. The Lead Strategist synthesises all five pillar inputs and identifies the primary constraint with specific evidence. This is the most important intellectual output of the OTC. It must be defensible. If a client pushes back on it, you should be able to walk them through the evidence that leads to the conclusion.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">6</div>
//       <div class="step-content">
//         <h4>Report and debrief</h4>
//         <p>The Five-Pillar Audit Report is written, reviewed internally, and delivered to the client. The debrief is a structured conversation where the Lead Strategist walks the client through the findings, explains the primary constraint, and presents the 90-Day Action Roadmap. The debrief also includes a recommendation for the appropriate Magsmen follow-on engagement based on what the diagnosis revealed.</p>
//       </div>
//     </div>
//   </div>

//   <div class="service-deliverables">
//     <h5>Final Deliverables</h5>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Five-Pillar Audit Report with scored findings and evidence-based reasoning</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Primary Constraint Identification with supporting evidence</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Secondary Constraint Note and recommended sequence for addressing it</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Strategic Direction Summary covering what the business must focus on and why</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Action Roadmap with specific, sequenced, actionable steps</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Recommended follow-on Magsmen engagement</div>
//   </div>

//   <div class="warning-box"><p>The OTC never includes ongoing advisory, brand creation, visual identity work, vendor management, or execution. If a client asks for any of these during an OTC, redirect them to the appropriate service. Scope creep inside an OTC undermines the diagnostic integrity and underprices the follow-on work.</p></div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 02</div>
//   <div class="service-name">Brand Consulting</div>
//   <div class="service-desc">Brand Consulting is the foundational strategy service for an established business that is operating without brand clarity. The business exists, has revenue, has a team, but has no clear articulation of who it is for, what makes it different, and how it should communicate. This service builds that foundation. Standard fee: INR 1,00,000 for one brand, INR 1,50,000 for two brands or a group, INR 75,000 per additional brand. Plus GST. Duration: 4 to 8 weeks.</div>

//   <div class="section-heading" style="margin-top:20px;">Who this is for</div>
//   <p class="body-text">Businesses that have grown through relationships and hustle but now need structure. Businesses that are spending on marketing but not seeing results because the foundation is missing. Businesses preparing to scale, raise investment, or reposition in the market. The typical client here has some market presence and real revenue, but if you ask them to describe their brand in one sentence, they cannot. That inability costs them every time they communicate, every time they price, every time they hire.</p>

//   <div class="section-heading">How the engagement runs, week by week</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">W1</div>
//       <div class="step-content">
//         <h4>Kickoff and information gathering</h4>
//         <p>Kickoff call with the client to confirm scope, timeline, and communication protocol. The Brand Strategy Associate begins full research: category landscape, five to seven competitors mapped against two strategic axes, price architecture of the category, consumer sentiment from reviews and social platforms. Any existing brand materials from the client are gathered: logo files, past marketing, vendor briefs, social media. Nothing is assumed to be current or correct.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">W2</div>
//       <div class="step-content">
//         <h4>Brand audit and competitive analysis</h4>
//         <p>The Brand Strategy Associate runs a full audit of the client's current brand state: visual identity coherence, messaging consistency across all touchpoints, digital presence quality, and the gap between intended perception and actual perception. The Competitive Gravity Map is built showing where the client currently sits relative to the market and where genuine whitespace exists. This work is synthesised into an internal diagnostic before any positioning work begins.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">W3</div>
//       <div class="step-content">
//         <h4>Positioning development</h4>
//         <p>The Lead Strategist develops the Brand Positioning Statement based on the audit findings, the competitive map, and the consumer insight research. This goes through internal review before being presented to the client. The Principal Consultant reviews all positioning statements before they leave the firm. This is non-negotiable. A positioning statement that has not been cleared by the Principal Consultant does not go to the client.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">W4-5</div>
//       <div class="step-content">
//         <h4>Brand architecture and communication framework</h4>
//         <p>Once positioning is client-approved, the full Brand Architecture Document is built: purpose, values, personality, promise, and proof points. The Brand Communication Framework is built on top of the architecture, defining the message ladder from brand promise to audience-specific messaging. The Visual Identity Direction Brief is written for the creative vendor to brief against. All of these go through internal review before client delivery.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">W6-8</div>
//       <div class="step-content">
//         <h4>90-Day Action Plan and delivery</h4>
//         <p>The 90-Day Brand Action Plan sequences the implementation steps for the client's team. It covers what to do first, what to brief vendors on, what internal alignment sessions to run, and how to measure whether the brand is being consistently applied. The full deliverable set is packaged, reviewed, and delivered in a structured debrief session with the client team.</p>
//       </div>
//     </div>
//   </div>

//   <div class="service-deliverables">
//     <h5>Final Deliverables</h5>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Audit Report covering identity, communication, digital presence, competitive position</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Positioning Statement</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Architecture Document (purpose, values, personality, promise, proof points)</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Competitive Gravity Map</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Brand Communication Framework with message ladder</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Visual Identity Direction Brief for creative vendor</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Brand Action Plan</div>
//   </div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 03</div>
//   <div class="service-name">Brand Creation — 13-Stage Framework</div>
//   <div class="service-desc">Brand Creation is Magsmen's most comprehensive engagement. It is end-to-end brand building for a new brand or a complete rebuild. Every stage is sequential. Every stage has a gate. No stage begins until the previous stage's output is reviewed and cleared. Standard fee: custom, typically from INR 5,00,000 plus GST. Duration: 12 to 20 weeks depending on complexity.</div>

//   <div class="section-heading" style="margin-top:20px;">The 13 stages in full</div>

//   <table class="stage-table">
//     <tr><th>Stage</th><th>Name</th><th>What the team does</th></tr>
//     <tr><td>01</td><td>Discovery and Founder Intent Mapping</td><td>90-minute to 2-hour structured session with the founder. The Lead Strategist maps the founder's vision, business model, product description, market understanding, and the tensions or constraints they are aware of. The Brand Strategy Associate builds the pre-session dossier. Outputs: Founder Intent Summary, Business Ambition Clarity Note, Initial Brand Opportunity Hypothesis.</td></tr>
//     <tr><td>02</td><td>Market and Category Intelligence</td><td>Full competitive landscape mapping. 6 to 10 competitors positioned on a two-axis matrix. Price architecture of the category mapped from floor to ceiling. Consumer expectation patterns researched through reviews, forums, and available studies. Brand narratives dominating the category identified. Outputs: Category Map, Competitive Positioning Matrix, Customer Insight Summary, Opportunity Gap Analysis.</td></tr>
//     <tr><td>03</td><td>Business Feasibility Validation</td><td>The strategy team evaluates whether the client's business can operationally deliver on the positioning direction being considered. Margin structure is checked. Production capability is assessed. Distribution infrastructure is evaluated. Team capability is reviewed. A positioning direction is only viable if the business can actually support it. This stage either confirms the direction or reveals structural constraints that must be resolved first.</td></tr>
//     <tr><td>04</td><td>Strategic Positioning Development</td><td>The Lead Strategist builds the Brand Positioning Statement. The Target Audience Definition is finalised with demographic, psychographic, and behavioural layers. The Value Narrative is written, a 1 to 2 page internal document that expands the positioning statement and explains how the brand creates value at functional, emotional, and identity levels. The Principal Consultant reviews and approves before Stage 5 begins.</td></tr>
//     <tr><td>05</td><td>Product and Value Architecture</td><td>Every product decision is evaluated against the positioning. Packaging structure, product sizes and SKUs, pricing strategy, and bundle options are all tested for alignment with the positioning defined in Stage 4. Price is treated as a positioning signal, not a margin decision. A product that claims to be premium but prices at the category midpoint sends a contradictory message before the customer has even tried it.</td></tr>
//     <tr><td>06</td><td>Brand Naming</td><td>The naming process begins with a linguistic and cultural brief. Candidate names are generated across five naming categories: descriptive, associative, abstract, coined, and human. Each candidate is assessed for phonetic strength, cultural appropriateness, regional market fit, and trademark availability. Trademark screening on IP India's portal is mandatory. 3 to 5 validated options are presented with full rationale for each.</td></tr>
//     <tr><td>07</td><td>Visual Identity Development</td><td>The Visual Identity Direction Brief from Stage 5 is handed to the creative vendor. Magsmen supervises the visual identity development process. The brand team reviews every creative output against the positioning brief, not against personal preference. The question is always: does this visual language express the positioning without the customer needing to read a single word?</td></tr>
//     <tr><td>08</td><td>Legal and IP Review</td><td>Trademark filing coordination is initiated for the approved name across the relevant classes. The Legal Brand Protection dimension of the architecture is reviewed: are founder agreements IP-complete, are vendor contracts IP-appropriate, are partnership agreements crisis-ready? The team does not provide legal advice. They identify the gaps and coordinate with the Principal Consultant on legal escalation.</td></tr>
//     <tr><td>09</td><td>Brand Communication Architecture</td><td>The messaging hierarchy is built from the Brand Architecture Document. Tone of voice guidelines are established defining what the brand always says, what it never says, and how it handles specific contexts including complaints, competitor comparisons, and public criticism. Content guidelines are written covering format, length, frequency, and channel-specific adaptation.</td></tr>
//     <tr><td>10</td><td>Operational Readiness</td><td>The strategy team checks whether the client's operational reality can consistently deliver what the brand has now promised. Are the customer service standards in place? Is the quality control consistent? Can the team communicate the brand at every touchpoint? Gaps identified here are documented and given to the client as a pre-launch action list.</td></tr>
//     <tr><td>11</td><td>Internal Brand Alignment</td><td>The client's team must understand the brand architecture before the brand is launched externally. An internal alignment session is run, walking the client's key team members through the positioning, the architecture, the communication framework, and the brand standards. The output is a team that can represent the brand consistently before it faces the market.</td></tr>
//     <tr><td>12</td><td>Launch Strategy Planning</td><td>The go-to-market plan is built. Channels are selected based on where the audience actually is. Launch sequence is designed: what goes first, what follows, and why. Measurement markers are defined so that the brand's market performance can be evaluated against specific, observable indicators at 30, 60, and 90 days post-launch.</td></tr>
//     <tr><td>13</td><td>Post-Launch Strategic Audit</td><td>At 90 days post-launch, the strategy team reviews actual market performance against the planned strategy. What was executed versus what was planned? What produced the expected result and what did not? This is where the Principal Consultant comes in for the review, comparing planned strategy, executed strategy, and real market results. Adjustments are recommended and the governance handover document is finalised.</td></tr>
//   </table>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 04</div>
//   <div class="service-name">Brand Expresso</div>
//   <div class="service-desc">Brand Expresso is a 90-day focused engagement built around one specific, clearly defined brand or business problem. This is not a full brand creation. It is a precision intervention for a business that has one identifiable, high-stakes problem that needs to be solved fast and correctly. For businesses facing: positioning confusion, failed product launch, market entry barrier, pricing perception problem, or category disruption. Standard fee: from INR 3,00,000 plus GST.</div>

//   <div class="section-heading" style="margin-top:20px;">What makes this different from Brand Consulting</div>
//   <p class="body-text">Brand Consulting builds a full brand foundation. Brand Expresso solves one problem. The client who comes to Brand Expresso already has a brand. They have a specific problem that is costing them market share, revenue, or momentum, and they need it solved in a defined timeframe. The engagement is tighter, faster, and more focused. The diagnosis is narrower. The solution is deeper in one area instead of broad across all areas.</p>

//   <div class="section-heading">Three phases in detail</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">Days 1-30</div>
//       <div class="step-content">
//         <h4>Diagnosis and Strategy</h4>
//         <p>The Brand Strategy Associate runs full research on the specific problem: market context, competitor responses to similar situations, consumer perception data, and any available internal performance data from the client. The Lead Strategist conducts a structured diagnostic session with the client and develops the Problem Diagnosis Report. The Strategic Solution Framework is built and reviewed internally before being presented to the client. No solution work begins until the diagnosis is confirmed by the client and approved by the Principal Consultant.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">Days 31-60</div>
//       <div class="step-content">
//         <h4>Solution Build</h4>
//         <p>The strategy team builds the specific solution to the diagnosed problem. This could be a repositioning framework, a new communication architecture, a pricing strategy, a market entry plan, or a launch framework. The solution is built in detail, reviewed internally, refined based on feedback, and presented to the client at the Day 60 review. Vendor briefs are prepared if creative or production vendors are needed for execution.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">Days 61-90</div>
//       <div class="step-content">
//         <h4>Implementation Preparation and Review</h4>
//         <p>The Execution Plan is written: step-by-step implementation instructions for the client's team and vendors. The Brand Strategy Associate begins working alongside the client team on implementation. Progress is reviewed at Day 75 with course corrections documented. At Day 90, the 90-Day Completion Report is delivered comparing what was planned, what was executed, and what results are showing at this early stage. The Principal Consultant leads the Day 90 review.</p>
//       </div>
//     </div>
//   </div>

//   <div class="service-deliverables">
//     <h5>Final Deliverables</h5>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Problem Diagnosis Report with root cause analysis</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Strategic Solution Framework specific to the diagnosed problem</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Execution Plan with step-by-step implementation instructions</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Vendor Briefs where applicable</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>Day 30 and Day 60 progress reviews with documented course corrections</div>
//     <div class="deliverable-row"><div class="deliverable-dot"></div>90-Day Completion Report: planned vs executed vs results</div>
//   </div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 05</div>
//   <div class="service-name">Stature by Magsmen</div>
//   <div class="service-desc">Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. This is not personal branding in the commoditised social media sense. This is the structured building and governance of credibility, authority, and perception for individuals who are in, or moving toward, positions of significant public visibility. For founders, CEOs, politicians, senior executives, and public figures.</div>

//   <div class="section-heading" style="margin-top:20px;">The Four Tiers</div>
//   <p class="body-text">Stature operates across four tiers. Each tier is defined by the individual's current level of public visibility and the complexity of the brand management required. The tier determines the scope of work, the team composition, and the fee structure.</p>

//   <div class="info-grid">
//     <div class="info-card">
//       <div class="info-card-num">T1</div>
//       <div class="info-card-label">Foundation</div>
//       <div class="info-card-desc">For individuals building their professional presence from a low base. Focus is on perception clarity, platform choice, and a basic narrative architecture. Shorter engagement, smaller team.</div>
//     </div>
//     <div class="info-card">
//       <div class="info-card-num">T2</div>
//       <div class="info-card-label">Authority</div>
//       <div class="info-card-desc">For individuals with existing credibility in their field who need to systematise and amplify it. Focus on positioning within their category, content architecture, and association strategy.</div>
//     </div>
//     <div class="info-card">
//       <div class="info-card-num">T3</div>
//       <div class="info-card-label">Prominence</div>
//       <div class="info-card-desc">For individuals with significant public visibility managing multiple audiences and growing reputational exposure. Includes crisis preparedness and media strategy. Full team engagement.</div>
//     </div>
//     <div class="info-card">
//       <div class="info-card-num">T4</div>
//       <div class="info-card-label">Legacy</div>
//       <div class="info-card-desc">For individuals at the peak of their public presence managing legacy, transition, and institutional impact. Long-term advisory. Most complex engagement. Founder-led.</div>
//     </div>
//   </div>

//   <div class="section-heading">How the engagement runs</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">1</div>
//       <div class="step-content">
//         <h4>Perception Audit</h4>
//         <p>Before any strategy is built, the team conducts a full perception audit of the individual. What does someone who searches for this person find? How do media, peers, colleagues, and audiences describe them? What is the gap between how they intend to be perceived and how they are actually perceived? This audit is the diagnostic baseline for everything that follows.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">2</div>
//       <div class="step-content">
//         <h4>Personal Brand Architecture</h4>
//         <p>The identity statement is built: who this person is as a brand, what they stand for, what unique position they occupy, and what emotional territory they own. The authority positioning is defined: in which conversations should this person be sought out? On what topics do they have the right to speak with authority? The narrative framework defines the story arc of their career, values, and vision that connects all their communication.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">3</div>
//       <div class="step-content">
//         <h4>Platform and Channel Strategy</h4>
//         <p>Where should this person be visible? What role should each platform play? What should they never do on each platform? The strategy maps presence across LinkedIn, Instagram, YouTube, speaking circuits, panel appearances, media interviews, and editorial contributions depending on tier and audience. Each channel is assigned a specific strategic purpose. Presence without purpose creates noise, not authority.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">4</div>
//       <div class="step-content">
//         <h4>Content Framework and Crisis Preparedness</h4>
//         <p>The content framework defines what the individual communicates, how frequently, in what formats, and with what tone across each platform. For Tier 3 and Tier 4 engagements, a Crisis Preparedness Framework is built: what are the current vulnerabilities, what scenarios could damage reputation, and what is the specific response protocol for each? This is legal-adjacent work. The Founder reviews all crisis frameworks before delivery.</p>
//       </div>
//     </div>
//   </div>

//   <div class="warning-box"><p>Stature engagements involve highly sensitive personal disclosures. Financial situations, family circumstances, legal matters, and health information are shared in the course of discovery. Nothing from a Stature engagement is ever referenced externally, including internally among team members not directly on the engagement. If you are not assigned to a Stature engagement, you have no access to its contents. This standard is absolute.</p></div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 06</div>
//   <div class="service-name">Linkfluence</div>
//   <div class="service-desc">Linkfluence is LinkedIn positioning and content strategy for founders and professionals. It is not content creation, ghostwriting, or social media management. It is the strategic architecture of how an individual should present, position, and communicate on LinkedIn to build genuine professional authority over time. Standard fee: INR 30,000 plus GST. Duration: 3 to 4 weeks.</div>

//   <div class="section-heading" style="margin-top:20px;">What this engagement actually produces</div>
//   <p class="body-text">LinkedIn is the only professional platform where positioning, content, and network interact in real time to build authority. Most founders treat it as a distribution channel for news about their company. That misses the point entirely. Linkfluence teaches a founder how to own a specific intellectual territory on LinkedIn so that the right audience begins to associate them with a specific type of thinking. That association becomes authority. That authority becomes inbound opportunity.</p>

//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">1</div>
//       <div class="step-content">
//         <h4>Profile and Positioning Audit</h4>
//         <p>The Brand Strategy Associate audits the client's current LinkedIn profile against the standard of someone who owns a clear professional territory. Headline, about section, experience framing, featured section, and the overall impression created in the first five seconds. What does a stranger conclude about this person after 30 seconds on their profile? Is that the intended conclusion? The audit documents the gap.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">2</div>
//       <div class="step-content">
//         <h4>LinkedIn Positioning Statement</h4>
//         <p>A LinkedIn positioning statement is different from a brand positioning statement. It answers: who should follow this person on LinkedIn and what will they get from doing so? It defines the intellectual territory the person will own. It must be specific enough that someone reading it immediately knows whether they are the right audience. Generic positioning ("I share insights on business and leadership") is not positioning. It is noise.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">3</div>
//       <div class="step-content">
//         <h4>Content Strategy and Calendar Framework</h4>
//         <p>The content strategy defines what topics the client will own, what formats they will use, how frequently they will post, and what tone they will maintain. The 90-Day Content Calendar Framework gives them a structural plan for the first three months: not written content, but a topic structure and post type sequence they can follow with their own writing. The goal is a content system that compounds authority over time, not viral posts that produce spikes and fade.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">4</div>
//       <div class="step-content">
//         <h4>Engagement Protocol</h4>
//         <p>How to build the network strategically. Who to connect with and why. How to respond to comments in a way that builds authority rather than depleting it. What to avoid: the common positioning errors that undermine credibility even when the content is good. The engagement protocol also covers how to handle public criticism, disagreement, and unsolicited advice in ways that strengthen rather than damage the professional brand.</p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 07</div>
//   <div class="service-name">Brand Naming</div>
//   <div class="service-desc">Brand Naming is the strategic creation of a name for a new brand, product, project, or sub-brand. This is linguistic and strategic work. It is not a creative brainstorm. Every name recommended by Magsmen must meet five criteria simultaneously: commercially viable, phonetically strong, culturally appropriate for the target market, legally available across the relevant trademark classes, and strategically aligned with the intended positioning. Standard fee: from INR 75,000 plus GST.</div>

//   <div class="section-heading" style="margin-top:20px;">How the naming process works</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">1</div>
//       <div class="step-content">
//         <h4>Naming Brief</h4>
//         <p>Before any names are generated, the team builds a naming brief. This covers the positioning the name must support, the target audience and their cultural context, the emotional register the name should carry, what the name must not suggest, the linguistic constraints (length, syllable count, language preference), and any existing name elements that must be preserved or excluded. A naming brief that is not detailed enough produces names that are not specific enough.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">2</div>
//       <div class="step-content">
//         <h4>Name generation across five categories</h4>
//         <p>Descriptive names: names that describe what the brand does or who it is for. Associative names: names that evoke the positioning through an association rather than a description. Abstract names: names with no inherent meaning that carry a sound or rhythm that fits the positioning. Coined names: invented words or creative compounds. Human names: proper names used as brand identifiers. Each category has different strategic implications for recall, protectability, and scalability. The brief determines which categories to prioritise.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">3</div>
//       <div class="step-content">
//         <h4>Screening and shortlisting</h4>
//         <p>All generated names are put through a four-layer screen. Phonetic: does the name work when spoken aloud in the relevant languages and regional accents? Cultural: does the name carry any unintended connotations in the target market? Digital: is the domain available, and does the name return clean search results? Legal: is the name available for registration in the relevant trademark classes on the IP India portal? Any name that fails any of these screens is eliminated before the shortlist is presented.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">4</div>
//       <div class="step-content">
//         <h4>Presentation of validated options</h4>
//         <p>3 to 5 validated names are presented with the full rationale for each: why the name was selected, what positioning it supports, what linguistic and cultural considerations informed it, and a summary of the trademark screening results. The client then selects and the team proceeds to final validation and filing coordination with a trademark attorney.</p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="module-divider"></div>

// <div class="service-card">
//   <div class="service-tag">Service 08</div>
//   <div class="service-name">Retainer</div>
//   <div class="service-desc">A Retainer is an ongoing strategic advisory relationship between Magsmen and a client. It is not a project with a start and end date. It is not a subscription to a set number of deliverables per month. It is an embedded strategic partnership where Magsmen is available as the client's thinking partner and strategic advisor across all brand, business, and legal brand protection decisions over a defined period.</div>

//   <div class="section-heading" style="margin-top:20px;">What retainers actually cover</div>
//   <p class="body-text">A retainer client can bring any brand or business decision to Magsmen during the retainer period. A new product launch. A competitor's move that needs a response. A communication that needs review before it goes out. A hiring decision with brand implications. A pricing change that affects positioning. A crisis situation that needs a strategic response. The retainer means Magsmen is in the room for all of it, not just at a quarterly project meeting.</p>
//   <p class="body-text">Retainers are scoped and priced individually. The fee depends on the frequency and depth of engagement required, the complexity of the business, and the composition of the Magsmen team assigned. Every retainer has a defined scope of what is covered and what falls outside the retainer and would be scoped separately.</p>

//   <div class="section-heading">How retainer work flows operationally</div>
//   <div class="step-list">
//     <div class="step-item">
//       <div class="step-num">1</div>
//       <div class="step-content">
//         <h4>Monthly strategic review</h4>
//         <p>Every retainer includes at least one monthly strategic review call. The agenda covers what decisions the client has made in the past month that have brand implications, what is coming in the next month that needs strategic input, and any market developments that require a strategic response.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">2</div>
//       <div class="step-content">
//         <h4>On-demand advisory</h4>
//         <p>Between monthly reviews, the client can bring questions and decisions to the team within the response time defined in the retainer scope. The Brand Strategy Associate handles initial intake and routes the question to the Lead Strategist or Principal Consultant depending on the complexity and stakes of the decision.</p>
//       </div>
//     </div>
//     <div class="step-item">
//       <div class="step-num">3</div>
//       <div class="step-content">
//         <h4>Ongoing strategy evolution</h4>
//         <p>Markets change. Competitors move. Consumer behaviour shifts. A retainer allows the brand strategy to evolve in response to market feedback rather than being locked into a document that was accurate at the time of writing but becomes outdated. The strategy team tracks the client's market performance and recommends adjustments at each monthly review based on what the data is showing.</p>
//       </div>
//     </div>
//   </div>
// </div>

// ${moduleFooter(2,'I have read and understood Our Services')}
// `; }

// /* ---- MODULE 3: HOW WE RESEARCH ---- */
// function m3() { return `
// <div class="module-eyebrow">Module 03</div>
// <h1 class="module-title">How We Research</h1>
// <p class="module-intro">Research at Magsmen is not information gathering. It is structured intelligence that drives every strategic decision. Every engagement at Magsmen begins with research before any strategy is formed. A strategy without research is an opinion. We do not sell opinions.</p>

// <div class="section-heading">The Research Philosophy</div>
// <p class="body-text">Brand Strategy Associates at Magsmen do not present raw data to Lead Strategists. They present synthesised insight. Every finding must be expressed as a strategic implication. The question is never "what does the data show?" The question is always "what does this data mean for the brand we are building?" A research output that cannot be directly connected to a strategic decision is incomplete.</p>

// <div class="section-heading">Phase 1: Pre-Engagement Research</div>
// <p class="body-text">Before the first client meeting, the Brand Strategy Associate builds a pre-session dossier. This is standard, non-negotiable, and must be completed before any discovery call occurs.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Business Profile Research</h4>
//       <p>Who is the founder? What is the business? What sector does it operate in? What is publicly known about revenue, team size, and market presence? Sources: website, LinkedIn, news coverage, company registrar data (MCA21), GST portal where relevant.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Category Overview</h4>
//       <p>What category does this business operate in? What are the market size estimates? Who are the dominant players? What are the pricing conventions? Sources: IBEF, NASSCOM, Redseer, Statista, industry-specific analyst reports.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Digital Footprint Audit</h4>
//       <p>Review the client's website, all active social media profiles, Google reviews, any e-commerce listings, and any media coverage. Document tone, visual consistency, messaging, and audience sentiment.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Initial Signal List</h4>
//       <p>Based on the above, note three to five early signals about likely constraints or opportunities. These are hypotheses, not conclusions. They guide what questions the Lead Strategist asks in discovery.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">Phase 2: Category Intelligence</div>
// <p class="body-text">This is the structured mapping of the environment the brand will operate in. For Brand Creation engagements, this is a full Stage 2 deliverable. For OTC and Brand Consulting, it is proportionate to scope.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Competitor Positioning Analysis</h4>
//       <p>Identify 6 to 10 relevant brands. For each: positioning claim, target audience, emotional territory, and dominant communication themes. Map each on a two-axis matrix using dimensions most relevant to the category. Identify which positioning territories are overcrowded and which are open.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Price Architecture</h4>
//       <p>Map the full price spectrum. Identify price clusters where most products sit, the threshold between mass and premium, and what differentiates brands at different price points. Note where structural gaps in pricing exist.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Consumer Expectation Patterns</h4>
//       <p>What is the minimum acceptable standard in this category? What drives loyalty? What causes switching? What are the functional and emotional jobs customers are hiring this category for? Use review platforms, community forums, social commentary, and where feasible, direct consumer interviews.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Dominant Narratives</h4>
//       <p>What story does the market leader tell? Which narratives are overused to the point of ineffectiveness? Which narratives resonate but are unclaimed by any major brand? This directly informs the positioning work in subsequent stages.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">Phase 3: Digital and Sentiment Research</div>
// <p class="body-text">Social listening and review analysis are core research inputs, not optional additions. The specific words, comparisons, and frustrations that recur in customer language are direct inputs to the communication strategy.</p>
// <div class="info-grid">
//   <div class="info-card">
//     <div class="info-card-label">Review Analysis</div>
//     <div class="info-card-desc">Amazon, Google, Zomato, or any vertically relevant platform. Extract recurring praise and recurring complaints. Note the specific language customers use.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Social Listening</div>
//     <div class="info-card-desc">What is the ongoing conversation about the category and key brands on Instagram, LinkedIn, and YouTube? Which content formats generate the most engagement in this category?</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Regional Context</div>
//     <div class="info-card-desc">For AP and Telangana clients: regional pricing norms, cultural values, Telugu consumer preferences, and local competitive dynamics. Regional context is always relevant in our primary markets.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Job Listings</div>
//     <div class="info-card-desc">What a company is actively hiring for reveals strategic direction, growth areas, and internal capability gaps that the client may not disclose directly.</div>
//   </div>
// </div>

// <div class="section-heading">Research Sources by Purpose</div>
// <table class="stage-table">
//   <tr><th>Purpose</th><th>Sources</th></tr>
//   <tr><td>Market sizing</td><td>IBEF, Redseer, NASSCOM, Statista, FICCI, CII sector reports</td></tr>
//   <tr><td>Consumer behaviour</td><td>Nielsen, Kantar, Ipsos, academic journals, Google Trends, social listening</td></tr>
//   <tr><td>Competitor intelligence</td><td>Brand websites, annual reports, MCA21, LinkedIn, social media, press coverage</td></tr>
//   <tr><td>Consumer sentiment</td><td>Google Reviews, Amazon reviews, Reddit, Twitter, Quora, YouTube comments</td></tr>
//   <tr><td>Legal and trademark</td><td>CGPDTM IP India portal (ipindia.gov.in), MCA21, RoC filings</td></tr>
//   <tr><td>Financial data</td><td>MCA21, CMIE, RBI databases, BSE/NSE filings where applicable</td></tr>
//   <tr><td>Regional trends</td><td>AP Economic Development Board, ASSOCHAM AP, Telangana ITES reports, local news</td></tr>
// </table>

// <div class="warning-box"><p>Never present raw data without interpretation. If you cannot explain what a data point means for the client's strategy, the research is not ready. The standard is: every finding must answer the question "so what?" before it is shared with the Lead Strategist.</p></div>

// ${moduleFooter(3,'I have read and understood How We Research')}
// `; }

// /* ---- MODULE 4: CONSUMER ANALYSIS ---- */
// function m4() { return `
// <div class="module-eyebrow">Module 04</div>
// <h1 class="module-title">Consumer Analysis and Persona Building</h1>
// <p class="module-intro">Every brand exists in relationship with a customer. The quality of your consumer analysis directly determines the quality of the positioning strategy. Shallow consumer understanding produces generic positioning. Precise consumer understanding produces defensible positioning.</p>

// <div class="section-heading">The Consumer Analysis Philosophy</div>
// <p class="body-text">Consumer analysis at Magsmen does not produce a generic audience profile. It produces a precise understanding of what the customer wants that the current market is not fully providing. That gap is the opening the brand enters through. Without that gap, there is no positioning. Without positioning, there is no brand.</p>

// <div class="section-heading">Three Layers of Consumer Understanding</div>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Demographics</h4>
//       <p>Age range, income bracket, geographic location, professional or lifestyle context. Demographics tell you who the customer is in measurable terms. They set the boundary of the audience. They do not explain why the customer buys or what they actually value. Demographics are the starting point, not the conclusion.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Psychographics</h4>
//       <p>Values, aspirations, beliefs about the category, and attitudes toward brands in this space. Psychographics explain what the customer is trying to feel, achieve, or express through the brands they choose. Two customers with identical demographics can have entirely different psychographic profiles. Positioning is built on psychographics, not demographics.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Behavioural Patterns</h4>
//       <p>Purchase frequency, channel preference, information-seeking behaviour, loyalty patterns, and switching triggers. Behavioural data shows what the customer actually does, which sometimes differs significantly from what they say they do. This layer is critical for market entry strategy and distribution decisions.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">The Core Tension Method</div>
// <p class="body-text">The most important question in consumer analysis is not "who is the customer?" It is "what does this customer want that the current market is not fully giving them?" This unmet want is the core tension. The core tension is the opening the brand enters through.</p>
// <div class="callout-box">
//   <p>Example: A consumer in the premium food category wants to trust that a product claiming to be "natural" actually is. The market is full of natural claims. None of them are credible. The core tension is: the desire for genuine transparency in a category full of packaging-level deception. A brand that credibly solves this tension owns a defensible position. That is how you find the gap.</p>
// </div>

// <div class="section-heading">Building a Consumer Persona</div>
// <p class="body-text">A consumer persona at Magsmen is not a fictional character with a name and a stock photo. It is a structured synthesis of research findings that tells the strategy team exactly who the brand is for, why they buy, what they fear, what they aspire to, and what would make them switch. It is a working document, not a marketing asset.</p>

// <table class="stage-table">
//   <tr><th>Dimension</th><th>What to Define</th></tr>
//   <tr><td>Context</td><td>Where they live, what they do, what they earn, what life stage they are in</td></tr>
//   <tr><td>Category relationship</td><td>How they currently buy in this category, their experience, their frustrations</td></tr>
//   <tr><td>Aspirations</td><td>What outcome they are actually trying to achieve by purchasing in this category</td></tr>
//   <tr><td>Fear and risk</td><td>What would prevent them from trying a new brand, what they are afraid of getting wrong</td></tr>
//   <tr><td>Language</td><td>The exact words they use to describe their need, problem, or desired outcome</td></tr>
//   <tr><td>Decision triggers</td><td>What specifically causes them to try something new or switch from something existing</td></tr>
//   <tr><td>Loyalty drivers</td><td>What would make them stay with a brand and refer it to others</td></tr>
// </table>

// <div class="section-heading">Indian Consumer Specifics</div>
// <p class="body-text">Indian consumer behaviour has structural characteristics that affect every brand strategy decision. You must understand these before you build a persona.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Trust Before Transaction</h4>
//       <p>Indian consumers, particularly in Tier 2 and Tier 3 cities, make brand decisions based on trust-building over time more than on advertising claims. Word of mouth, local authority figures, and visible community presence carry more weight than national campaigns. Build trust mechanisms into the brand strategy before building awareness mechanisms.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Price Sensitivity Is Not the Same as Value Insensitivity</h4>
//       <p>Indian consumers at most income levels are highly responsive to perceived value. They will pay a premium for something they believe is genuinely better. They will not pay a premium for something they believe is only presented as better. The strategy must make the superiority real, not just claimed.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Family and Social Context</h4>
//       <p>In Indian markets, particularly in the categories of food, health, education, and real estate, purchase decisions are often made within a family or community context. The persona must account for the influencers in the purchase decision, not only the buyer.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Regional Identity</h4>
//       <p>For clients operating in Andhra Pradesh and Telangana, cultural identity, local language, regional pride, and family values are not optional considerations. They are strategic inputs. A brand that is perceived as understanding the regional context builds trust faster than one that imports a national template.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">How Consumer Analysis Drives Positioning</div>
// <p class="body-text">Consumer analysis is not a standalone exercise. It is the input that determines where the brand positions. The persona's core tension, combined with the competitive gap identified in research, produces the positioning opportunity. Every subsequent strategic decision, from naming to communication to pricing, must be tested against the persona.</p>
// <div class="callout-box"><p>Ask this before finalising any positioning: if the consumer persona read this positioning statement, would they immediately recognise that this brand is for them? If the answer requires any explanation, the positioning is not clear enough.</p></div>

// <div class="section-heading">Behavioural Insights in Strategy</div>
// <p class="body-text">Behavioural economics provides tools that inform brand strategy. The following concepts are directly applicable to the work we do.</p>
// <div class="info-grid">
//   <div class="info-card">
//     <div class="info-card-label">Anchoring</div>
//     <div class="info-card-desc">The first price or quality signal a consumer encounters sets their reference point for everything that follows. Pricing strategy must account for where the brand will be seen first.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Social Proof</div>
//     <div class="info-card-desc">Indian consumers heavily weight peer behaviour. A brand strategy that does not build in visible social proof mechanisms is underutilising one of the most powerful purchasing triggers in this market.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Loss Aversion</div>
//     <div class="info-card-desc">People feel the pain of losing more strongly than the pleasure of gaining. Communication that frames the cost of not choosing the brand is often more effective than communication that frames the benefit of choosing it.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Category Defaults</div>
//     <div class="info-card-desc">Every category has a default behaviour. When a consumer does not have a strong preference, they revert to the default. A brand that becomes the default in a specific segment owns that segment.</div>
//   </div>
// </div>

// ${moduleFooter(4,'I have read and understood Consumer Analysis')}
// `; }

// /* ---- MODULE 5: HOW WE ANALYSE ---- */
// function m5() { return `
// <div class="module-eyebrow">Module 05</div>
// <h1 class="module-title">How We Analyse</h1>
// <p class="module-intro">Analysis at Magsmen is the bridge between raw research and strategic output. The frameworks in this module are the tools you use to make sense of what the research surfaces. Know them precisely. Apply them consistently. They are not templates. They are thinking structures.</p>

// <div class="section-heading">The Five-Pillar OTC Diagnostic</div>
// <p class="body-text">The Five-Pillar framework is Magsmen's primary diagnostic tool. It analyses any business across five dimensions. The purpose is not to score each pillar in isolation. The purpose is to identify which pillar contains the primary constraint blocking the business from its next stage of growth.</p>
// <table class="stage-table">
//   <tr><th>Pillar</th><th>What Is Evaluated</th></tr>
//   <tr><td>Legal</td><td>Trademark protection, IP ownership structure, contracts, regulatory compliance, founder agreements, governance gaps</td></tr>
//   <tr><td>Brand</td><td>Positioning clarity, communication consistency, visual identity coherence, audience alignment, perception vs intended positioning</td></tr>
//   <tr><td>Business</td><td>Revenue model health, customer acquisition cost, pricing architecture, distribution structure, margin sustainability</td></tr>
//   <tr><td>Operations</td><td>Process documentation, delivery consistency, team structure, scalability constraints, quality control</td></tr>
//   <tr><td>Team</td><td>Role clarity, decision-making structure, capability gaps, leadership bottlenecks, culture alignment</td></tr>
// </table>
// <div class="callout-box"><p>The Five-Pillar model produces one output above all others: the Primary Constraint. Every pillar gets attention, but one pillar is causing the most damage. Solving the secondary constraints before the primary constraint is expensive and ineffective. Sequence matters.</p></div>

// <div class="section-heading">The Competitive Gravity Map</div>
// <p class="body-text">The Competitive Gravity Map is a two-axis positioning matrix that places a client brand relative to five competitors. The two axes are chosen based on the most meaningful tensions in the specific category. Common axis pairs: premium versus accessible; functional versus emotional; traditional versus contemporary; broad versus specialist.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Select the Two Most Relevant Axes</h4>
//       <p>The axes must reflect genuine strategic decisions in the category. Avoid generic axes that apply to every category. The right axes make competitors cluster visibly and reveal at least one genuinely open space.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Plot Five Competitors Plus the Client</h4>
//       <p>Base the placement on evidence from research, not assumption. Use pricing, communication, channel, and consumer perception data to justify each placement.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Identify Open Territory</h4>
//       <p>Where is the map empty? Is any unclaimed space actually credible for the client to occupy? A space is only a genuine opportunity if the client has the operational and commercial ability to deliver what that position requires.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">The Brand Health Index</div>
// <p class="body-text">Magsmen tracks brand health across five metrics. These are assessed at the start of an engagement as a baseline and revisited in post-engagement reviews. They form the measurable dimension of the strategy's effectiveness.</p>
// <table class="stage-table">
//   <tr><th>Metric</th><th>What It Measures</th></tr>
//   <tr><td>Awareness</td><td>What percentage of the target audience can identify the brand unprompted or prompted</td></tr>
//   <tr><td>Perception</td><td>How the brand is described by people who know it, versus how the brand intends to be described</td></tr>
//   <tr><td>Trust</td><td>Whether existing customers would rely on this brand for an important decision in the category</td></tr>
//   <tr><td>Emotional Recall</td><td>What emotion or association surfaces first when the brand name is encountered</td></tr>
//   <tr><td>Advocacy</td><td>Whether existing customers recommend the brand without being asked to</td></tr>
// </table>

// <div class="section-heading">The Perception Audit</div>
// <p class="body-text">The Perception Audit compares how a brand intends to be perceived with how it is actually perceived. The gap between intended and actual perception is the strategic problem. Strategy work closes that gap.</p>
// <p class="body-text">Sources for actual perception: customer reviews, social media commentary, direct consumer feedback, mystery shopping where feasible, and review of how third parties describe the brand in press and online. Intended perception is derived from the client's own articulation of their brand identity, which may be formal or informal, documented or undocumented.</p>

// <div class="section-heading">The MACES Qualification System</div>
// <p class="body-text">MACES is used in business development, not in client work. It is the framework for qualifying whether a prospect is a suitable Magsmen client before discovery begins. Every potential engagement is evaluated against it.</p>
// <table class="stage-table">
//   <tr><th>Letter</th><th>Dimension</th><th>The Question</th></tr>
//   <tr><td>M</td><td>Money</td><td>Does the prospect have the financial capacity for the engagement?</td></tr>
//   <tr><td>A</td><td>Authority</td><td>Is the person we are speaking with authorised to make the engagement decision?</td></tr>
//   <tr><td>C</td><td>Commitment</td><td>Is the prospect ready to act now, or are they in perpetual evaluation mode?</td></tr>
//   <tr><td>E</td><td>Engagement Fit</td><td>Does their business problem match a service Magsmen genuinely provides?</td></tr>
//   <tr><td>S</td><td>Sanity Check</td><td>Is this a client whose values, expectations, and working style align with Magsmen's?</td></tr>
// </table>
// <div class="warning-box"><p>A client who fails MACES is not rejected. They are redirected. If the timing is wrong, they may be a correct prospect in 6 to 12 months. The purpose of MACES is not to exclude clients. It is to prevent engagements that will fail due to structural misfit.</p></div>

// <div class="section-heading">The Brand Volatility Matrix</div>
// <p class="body-text">The Brand Volatility Matrix assesses how vulnerable a brand is to external disruption. It evaluates the brand across four risk dimensions: market dependence, positioning concentration, communication fragility, and legal exposure. The output identifies which vulnerabilities require immediate structural intervention and which are manageable with monitoring.</p>

// ${moduleFooter(5,'I have read and understood How We Analyse')}
// `; }

// /* ---- MODULE 6: BRAND ARCHITECTURE ---- */
// function m6() { return `
// <div class="module-eyebrow">Module 06</div>
// <h1 class="module-title">Brand Architecture</h1>
// <p class="module-intro">Brand architecture is not a document. It is the structural system a brand operates from. Every communication decision, every identity choice, every product or service addition will be tested against this architecture. Getting it right is the most important thing you will do in any brand engagement.</p>

// <div class="section-heading">What Brand Architecture Is</div>
// <p class="body-text">Brand architecture defines who the brand is, what it stands for, who it serves, and why that position is defensible against competition and credible to the customer. It is the operating system behind every external-facing brand decision.</p>
// <p class="body-text">A brand without architecture is not a brand. It is a name on a product. The name on a product changes when a competitor undercuts on price, or when a customer finds something slightly more appealing. A brand with architecture stays consistent because it is built on something the competitor cannot easily copy: a clear position in the customer's mind, earned through consistent experience and communication over time.</p>

// <div class="section-heading">The Brand Positioning Statement</div>
// <p class="body-text">The positioning statement is the most precise piece of writing in any brand engagement. It is a single sentence that defines where the brand stands, who it serves, and why it has the right to stand there. It is written for internal use, not external communication. Every creative, communication, and product decision is tested against it.</p>
// <div class="callout-box">
//   <p>Structure: For [clearly defined target audience], [Brand Name] is the [category frame] that [unique claim or benefit] because [reason to believe, the proof point]. Every word earns its place. Remove any word that does not add precision.</p>
// </div>
// <p class="body-text">Common errors in positioning statement writing: vague audience definition ("businesses that want to grow"), unsupported claims ("the most trusted brand in the category"), category frames that are too broad ("solutions provider"), and reason-to-believe statements that are about intent rather than evidence. Fix every one of these before the statement leaves your desk.</p>

// <div class="section-heading">The Brand Architecture Document</div>
// <p class="body-text">The Brand Architecture Document is the full structural system. It contains the following components in sequence.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Brand Purpose</h4>
//       <p>Why does this brand exist beyond making money? The purpose must be genuine, connected to the business model, and believable given the company's actual capabilities. Purpose that contradicts operational reality creates cynicism, not loyalty.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Brand Values</h4>
//       <p>Three to five values that are genuinely operational, not aspirational. A value that does not manifest in a business decision is not a value. It is a decoration. Each value must be connected to at least one specific behaviour or policy within the business.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Brand Personality</h4>
//       <p>If this brand were a person, how would they communicate? What would they never say? What is their tone in a moment of difficulty? Personality defines the consistent human qualities the brand expresses across all contexts.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Brand Promise</h4>
//       <p>What does this brand commit to delivering for the customer every single time? The promise must be specific enough to be measured. A promise of "excellence" or "quality" is unmeasurable and therefore meaningless. A promise of "a response to every customer query within four hours" is specific and measurable.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">5</div>
//     <div class="step-content">
//       <h4>Proof Points</h4>
//       <p>The specific, verifiable facts that substantiate the positioning. Every claim in the positioning must be backed by at least one proof point. Proof points can be product features, process standards, certifications, track record, or customer outcomes. They cannot be intentions.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">The Communication Framework</div>
// <p class="body-text">The communication framework defines how the brand talks across different audiences and channels. It includes a message ladder that moves from the brand's foundational promise to audience-specific messaging, and from formal contexts to informal ones.</p>
// <table class="stage-table">
//   <tr><th>Layer</th><th>Purpose</th></tr>
//   <tr><td>Brand Promise</td><td>The single, consistent commitment to all audiences. Non-negotiable across all communication.</td></tr>
//   <tr><td>Primary Message</td><td>The main thing we want each audience segment to understand about the brand. May vary by segment.</td></tr>
//   <tr><td>Supporting Messages</td><td>Two to three messages that support the primary message with specific proof for each audience segment</td></tr>
//   <tr><td>Tone Guidelines</td><td>The consistent voice qualities: what we always say, what we never say, and how we handle difficult topics</td></tr>
//   <tr><td>Channel Adaptation</td><td>How tone and message adapt for each channel without losing brand consistency</td></tr>
// </table>

// <div class="section-heading">The Visual Identity Direction Brief</div>
// <p class="body-text">Magsmen does not design logos. We brief designers. The Visual Identity Direction Brief is the strategic document given to a creative vendor that defines what the visual identity must communicate, the emotional register it must achieve, and the competitive territory it must differentiate from. The brief also contains references to what the identity must not look like and why.</p>
// <p class="body-text">A Visual Identity Direction Brief that cannot be translated directly into a design brief by a competent designer is incomplete. Test yours by asking: could a designer follow this brief without a single conversation with the Lead Strategist? If no, add more specificity.</p>
// <div class="warning-box"><p>The brand architecture is never delivered to the client without the Founder reviewing and approving all positioning work. This is a non-negotiable stage gate. No exceptions. A positioning statement that has not been approved by the Founder does not leave the building.</p></div>

// ${moduleFooter(6,'I have read and understood Brand Architecture')}
// `; }

// /* ---- MODULE 7: BUSINESS-INTEGRATED BRAND STRATEGY ---- */
// function m7() { return `
// <div class="module-eyebrow">Module 07</div>
// <h1 class="module-title">Business-Integrated Brand Strategy</h1>
// <p class="module-intro">The single largest error in brand strategy work is treating brand as separate from business. At Magsmen, brand is a business system. Every brand decision produces a commercial outcome. Every commercial decision has a brand implication. The strategist who cannot see both simultaneously is operating at half capacity.</p>

// <div class="section-heading">Brand as an Economic Asset</div>
// <p class="body-text">Most Indian businesses treat brand as a cost. A logo cost. A campaign budget. A design invoice. Magsmen treats brand as a balance sheet asset that does three things economically when correctly built. First, it commands a price premium over unbranded competitors in the same category. Second, it reduces the cost of acquiring the next customer because existing customers refer and defend it. Third, it creates resilience during market volatility because loyal customers do not switch on price alone.</p>
// <p class="body-text">Your job as a strategist is to make this economic logic visible to the client. When a client says "we can't afford brand strategy right now," they are actually saying "we will continue paying the cost of no brand strategy indefinitely." That cost includes permanent dependence on paid advertising, inability to raise prices without losing customers, and vulnerability to any competitor who chooses to invest in brand.</p>

// <div class="section-heading">The Integration Model</div>
// <p class="body-text">At Magsmen, every brand engagement is assessed across three integrated dimensions simultaneously. A strategy that addresses only one or two dimensions is incomplete and will produce a result that fails or underperforms.</p>
// <div class="pillar-grid">
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">B</div>
//     <div class="pillar-cell-name">Brand</div>
//     <div class="pillar-cell-desc">Positioning, identity, narrative, audience alignment, perception management</div>
//   </div>
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">L</div>
//     <div class="pillar-cell-name">Legal</div>
//     <div class="pillar-cell-desc">IP protection, trademark architecture, governance, reputational risk, regulatory compliance</div>
//   </div>
//   <div class="pillar-cell">
//     <div class="pillar-cell-num">E</div>
//     <div class="pillar-cell-name">Economics</div>
//     <div class="pillar-cell-desc">Revenue model, pricing architecture, margin structure, customer acquisition cost, commercial sustainability</div>
//   </div>
// </div>
// <div class="callout-box"><p>Brand plus Legal plus Economics equals Structural Brand. This is Magsmen's core operating model. It is what separates our work from every conventional brand consultancy. We build brands that function commercially, communicate strategically, and hold legally.</p></div>

// <div class="section-heading">Pricing Power: The Commercial Test of Brand</div>
// <p class="body-text">The most reliable test of whether a brand strategy has worked is simple: can the business charge more than the unbranded market rate and still grow its customer base? This is pricing power. It is the commercial output of a correctly built brand.</p>
// <p class="body-text">Pricing strategy is never separate from brand strategy at Magsmen. Price is a positioning signal. A brand claiming premium positioning while pricing at the midpoint of the category sends an inconsistent message before the customer has tried the product. A brand that prices below its positioning level trains customers to undervalue it. Every pricing decision must be tested against the brand's positioning before it is executed.</p>

// <div class="section-heading">Business Feasibility as a Strategy Input</div>
// <p class="body-text">A positioning strategy is only valuable if the business can operationally deliver on it. Before recommending a positioning direction, the strategy team must validate that the client's production capability, team structure, cost base, and distribution infrastructure can support the promise the brand will make.</p>
// <p class="body-text">A brand that promises premium quality but is manufactured at a margin that does not support premium ingredients is a structural contradiction. The customer will identify it. The brand will fail. The strategy team is responsible for surfacing this contradiction before the strategy is locked, not after the client has invested in execution.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Can the client produce what the positioning requires?</h4>
//       <p>If the positioning claims quality, the production process must actually deliver quality at the claimed level at the intended price point. Verify this before the strategy is finalised.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Can the client distribute to where the audience is?</h4>
//       <p>A premium brand that can only be found in general trade channels cannot sustain a premium positioning. Distribution strategy must be aligned with brand positioning before launch, not after.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Can the client's team communicate the brand consistently?</h4>
//       <p>Internal brand alignment is a prerequisite for external brand consistency. If the client's team does not understand, believe, or operate within the brand architecture, the brand will be inconsistent at every customer touchpoint regardless of how good the strategy document is.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">Brand Capital: The Accumulation Model</div>
// <p class="body-text">Brand capital is the accumulated value a brand stores in the customer's mind over time. It compounds. A brand that is consistent in its positioning, communication, and customer experience across three years has more brand capital than a brand that has spent three times more on advertising but changed its message four times.</p>
// <p class="body-text">The implication for strategy: consistency is more valuable than creativity. A creative campaign that contradicts the brand's established positioning depletes brand capital, regardless of how well it performs in the short term. Every strategy recommendation must be tested against the question: will this build or deplete the client's brand capital?</p>
// <div class="warning-box"><p>When a client says "we need something fresh" or "we want to try something different," your first question must be: why? If the answer is boredom with their own brand, that is not a strategic reason. Brand capital is built through repetition, not variety. Protect it.</p></div>

// ${moduleFooter(7,'I have read and understood Business-Integrated Brand Strategy')}
// `; }

// /* ---- MODULE 8: MAGSMEN FRAMEWORKS ---- */
// function m8() { return `
// <div class="module-eyebrow">Module 08</div>
// <h1 class="module-title">The Magsmen Frameworks</h1>
// <p class="module-intro">These are the proprietary frameworks you will apply in your work. They are not templates to fill in. They are thinking structures that guide you to the correct strategic conclusion faster than unaided reasoning. Know each one well enough to explain it without reference to a document.</p>

// <div class="section-heading">The 5D Consulting Framework</div>
// <p class="body-text">The 5D Framework is the operating structure of every Magsmen engagement from OTC to Brand Creation to Retainer. Every stage of work maps to one of the five Ds. The Ds are sequential. You cannot design before you have diagnosed. You cannot deliver before you have designed.</p>
// <div class="step-list">
//   <div class="step-item"><div class="step-num">D1</div><div class="step-content"><h4>Discovery</h4><p>Understand the business model, market position, audience behaviour, and competitive landscape. This is the research and intake phase. All assumptions are suspended.</p></div></div>
//   <div class="step-item"><div class="step-num">D2</div><div class="step-content"><h4>Diagnosis</h4><p>Identify barriers to growth, gaps in perception, inconsistencies in message, and untapped opportunities. The Five-Pillar model, Perception Audit, and Competitive Gravity Map are the primary tools in this phase.</p></div></div>
//   <div class="step-item"><div class="step-num">D3</div><div class="step-content"><h4>Design</h4><p>Create frameworks that align purpose with performance. Positioning, brand architecture, communication framework, and strategic roadmap are produced in this phase.</p></div></div>
//   <div class="step-item"><div class="step-num">D4</div><div class="step-content"><h4>Delivery</h4><p>Define clear actions, execution roadmap, and measurable outcomes. Deliverables are produced, reviewed, approved, and presented in this phase.</p></div></div>
//   <div class="step-item"><div class="step-num">D5</div><div class="step-content"><h4>Development</h4><p>Establish systems for long-term consistency, evaluation, and evolution. Post-delivery follow-up, outcome documentation, and governance handover occur in this phase.</p></div></div>
// </div>

// <div class="section-heading">The 13-Stage Brand Creation Framework</div>
// <table class="stage-table">
//   <tr><th>Stage</th><th>Name</th><th>Core Objective</th></tr>
//   <tr><td>01</td><td>Discovery and Founder Intent Mapping</td><td>Understand what the founder is building and why</td></tr>
//   <tr><td>02</td><td>Market and Category Intelligence</td><td>Map the competitive environment and identify the opportunity</td></tr>
//   <tr><td>03</td><td>Business Feasibility Validation</td><td>Confirm the strategy can be operationally supported</td></tr>
//   <tr><td>04</td><td>Strategic Positioning Development</td><td>Define where the brand stands and why that position is defensible</td></tr>
//   <tr><td>05</td><td>Product and Value Architecture</td><td>Align every product decision with the brand positioning</td></tr>
//   <tr><td>06</td><td>Brand Naming</td><td>Develop 3 to 5 validated name options with trademark screening</td></tr>
//   <tr><td>07</td><td>Visual Identity Development</td><td>Build visual identity that expresses the positioning</td></tr>
//   <tr><td>08</td><td>Legal and IP Review</td><td>Screen for trademark conflicts and regulatory exposure</td></tr>
//   <tr><td>09</td><td>Brand Communication Architecture</td><td>Define how the brand speaks and where</td></tr>
//   <tr><td>10</td><td>Operational Readiness</td><td>Confirm the business can deliver what the brand has promised</td></tr>
//   <tr><td>11</td><td>Internal Brand Alignment</td><td>Train the client's team to represent the brand consistently</td></tr>
//   <tr><td>12</td><td>Launch Strategy Planning</td><td>Plan the brand's market entry with structure and measurable intent</td></tr>
//   <tr><td>13</td><td>Post-Launch Strategic Audit</td><td>Evaluate performance and refine the strategy based on market response</td></tr>
// </table>

// <div class="framework-block">
//   <div class="framework-name">The Brand Growth Loop</div>
//   <div class="framework-tagline">Insight > Strategy > Narrative > Trust > Growth</div>
//   <div class="framework-text">Brand growth compounds when each stage produces the input for the next. Insight from research produces the strategic positioning. The positioning produces the narrative the brand tells. The narrative, delivered consistently, builds trust. Trust drives repeat purchase, referral, and price premium tolerance. Growth from these sources produces new market data that feeds the next cycle of insight. This loop is why correctly built brands grow faster over time, not slower.</div>
// </div>

// <div class="framework-block">
//   <div class="framework-name">The Brand Power Model</div>
//   <div class="framework-tagline">Vision > Positioning > Narrative > Experience > Reputation</div>
//   <div class="framework-text">Vision is internal, held by the founder. Positioning is strategic, defined by the firm. Narrative is how the positioning is communicated. Experience is how the positioning is felt by the customer. Reputation is what customers conclude and share after consistent experience. Reputation is the brand. Everything before it is infrastructure.</div>
// </div>

// <div class="framework-block">
//   <div class="framework-name">The Legal-Blended Architecture</div>
//   <div class="framework-tagline">Strategy + Legal + Economics = Structural Brand</div>
//   <div class="framework-text">This is the Magsmen operating model described as a formula. A strategy that does not account for legal protection will create value that someone else can claim. A strategy that does not account for economics will create a brand that cannot sustain itself. Every engagement integrates all three. This is what makes Magsmen's work structurally different from conventional brand consulting.</div>
// </div>

// <div class="framework-block">
//   <div class="framework-name">The Ecosystem Flywheel</div>
//   <div class="framework-tagline">Consulting > Content > Platform > Institution > Movement</div>
//   <div class="framework-text">This is the growth model of Magsmen itself. Consulting generates insight and case evidence. Content distributes that insight and builds authority. Platform (InTalks, Sanstrategies) amplifies the content and creates community. Institution converts the community into structural assets. Movement is the stage at which the firm's thinking changes how an industry operates. Each stage funds the next. This is how a firm compounds its market position without simply adding headcount.</div>
// </div>

// <div class="framework-block">
//   <div class="framework-name">Learn. Earn. Return.</div>
//   <div class="framework-tagline">The Three-Stage Life and Career Philosophy</div>
//   <div class="framework-text">This is the personal philosophy of the firm's founder, applied organisationally. The strategy team learns deeply from every engagement. The firm earns through the quality of that applied learning. The firm returns by building platforms, publishing frameworks, and training the next generation of strategists. Every Magsmen team member is expected to operate within this loop. Your time here is not just employment. It is stage two of a cycle that must begin with genuine learning and end with genuine contribution.</div>
// </div>

// ${moduleFooter(8,'I have read and understood The Magsmen Frameworks')}
// `; }

// /* ---- MODULE 9: TEAM PROTOCOLS AND EXECUTION ---- */
// function m9() { return `
// <div class="module-eyebrow">Module 09</div>
// <h1 class="module-title">Team Protocols and Strategy Execution</h1>
// <p class="module-intro">Strategy at Magsmen does not end when the document is delivered. It ends when the strategy is in action, producing measurable results, and the client's team can sustain it independently. This module covers how the team operates internally and how strategy moves from document to real-world implementation.</p>

// <div class="section-heading">Who Does What: Role Definitions</div>
// <p class="body-text">There is no ambiguity in the Magsmen team about who does what at any stage of an engagement. If you are unclear about your role at a specific point in a project, escalate to the Lead Strategist immediately. Do not improvise role boundaries.</p>

// <table class="stage-table">
//   <tr><th>Role</th><th>What this role does</th></tr>
//   <tr><td>Principal Consultant</td><td>The strategic authority at Magsmen. Reviews and approves all critical positioning decisions, all foundational brand architecture outputs, and all crisis frameworks before they reach clients. Leads discovery for high-stakes engagements. When the Principal Consultant provides a strategic direction for an engagement, the team builds from that direction, brings their own insight and ideas to refine it, finalises it together with the Principal Consultant, and then carries the execution through the client's own operational team.</td></tr>
//   <tr><td>Head of Operations</td><td>Reviews every deliverable before it reaches the client. The final quality clearance on every stage gate. Manages engagement timelines, client communication logistics, and internal coordination. Nothing leaves the firm without Head of Operations clearance.</td></tr>
//   <tr><td>Lead Strategist</td><td>Owns the strategic integrity of the engagement from the first discovery call to the post-execution review. Conducts or leads all discovery sessions. Develops all positioning work. Reviews all deliverables produced by the Brand Strategy Associate. Manages the relationship with the client's leadership team throughout the engagement.</td></tr>
//   <tr><td>Brand Strategy Associate</td><td>This is your role. The Brand Strategy Associate is the engine of research, analysis, documentation, and execution support. You conduct all pre-engagement research. You build the competitive maps, consumer insights, and audit reports. You draft the strategy documents under the Lead Strategist's direction. After the strategy is approved and delivered, you are the person who works directly with the client's team to support execution. You track progress, document what was planned versus what was done, and prepare the review inputs for the Principal Consultant.</td></tr>
// </table>

// <div class="callout-box"><p>The Brand Strategy Associate is both the research function and the execution liaison. You are not just building documents in a back room. You are working alongside the client's team as the strategy moves from paper to action. This is what makes Magsmen different from firms that hand over a document and disappear.</p></div>

// <div class="module-divider"></div>

// <div class="section-heading">How Strategy Moves to Execution</div>
// <p class="body-text">Once a strategy is planned, outlined, reviewed, and approved, the work is not done. In fact, a strategy that is never executed is not a strategy. It is a document. The real test of the work is what happens when the client's team starts implementing it in the real world. This is where the Brand Strategy Associate becomes critical.</p>

// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Strategy Documentation and Approval Gate</h4>
//       <p>The strategy document is complete, internally reviewed, and delivered to the client. The debrief session walks the client's leadership through every component. Questions are answered, clarifications are documented, and the client confirms they understand and accept the strategic direction. This confirmation is recorded in writing. Without this confirmation, execution does not begin. This gate exists because a client who does not fully understand the strategy will not implement it correctly.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Execution Kickoff with the Client Team</h4>
//       <p>After strategy approval, the Brand Strategy Associate runs a structured execution kickoff with the client's operational team. Not just the founder. The actual team that will implement the strategy day to day. This session translates the strategy document into specific actions for specific people: who is responsible for what, what the timeline looks like, what resources are needed, and what the success indicator is for each action. If the client's team leaves this session without clarity on their specific role in implementation, the session was not successful.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Client Portal Setup and Execution Tracking</h4>
//       <p>Every active client has a dedicated project space in Magsmen's client portal. This is where the approved strategy documents live, where execution milestones are tracked, where the Brand Strategy Associate and client team communicate on implementation progress, and where all deliverables are stored. The client portal is the single source of truth for the engagement. Anything discussed in a call that has strategic significance gets documented in the portal within 24 hours. Decisions made outside the portal do not exist for the purposes of the engagement record.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Weekly Implementation Check-ins</h4>
//       <p>The Brand Strategy Associate conducts weekly check-ins with the client's team during the active execution phase. These are structured, not conversational. Each check-in covers three things: what was planned for this week and what actually happened, what the Brand Strategy Associate observed about the quality of implementation versus the planned approach, and what needs to be adjusted or escalated. These notes go into the client portal after every check-in.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">5</div>
//     <div class="step-content">
//       <h4>The Three-Layer Review: Planned vs Executed vs Result</h4>
//       <p>At defined review points in every engagement (typically at 30, 60, and 90 days from execution kickoff), the Brand Strategy Associate prepares a structured review document comparing three things. What was planned: the specific strategy elements and implementation steps that were agreed. What was executed: what the client's team actually did, at what quality, and with what fidelity to the original plan. What the results are: what market response, internal response, and measurable outcomes have appeared as a result of the execution. This three-layer comparison is the input for the Principal Consultant's review.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">6</div>
//     <div class="step-content">
//       <h4>Principal Consultant Review</h4>
//       <p>At each major review point, the Principal Consultant reviews the three-layer document and meets with the client leadership. This is where the strategic mind comes in to assess whether the execution is producing the intended outcome, whether adjustments are needed to the strategy or to the implementation approach, and what the next phase of strategic work should be. The Principal Consultant may validate the current direction, course correct the strategy based on market feedback, or identify a new constraint that has emerged from the execution phase. This review drives the next round of strategic input from the Magsmen team.</p>
//     </div>
//   </div>
// </div>

// <div class="module-divider"></div>

// <div class="section-heading">When the Principal Consultant Directs Strategy</div>
// <p class="body-text">On certain engagements, particularly for complex or high-stakes clients, the Principal Consultant provides the strategic direction directly. This means they come with a clear perspective on where the brand should be positioned, what the primary strategic move should be, and why. The Brand Strategy Associate and Lead Strategist do not simply execute that direction blindly. The process works like this.</p>

// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>Principal Consultant shares the strategic direction</h4>
//       <p>The Principal Consultant communicates the strategic intent: the positioning direction, the rationale, the commercial logic, and the key risks they have identified. This is not a brief to fill in. It is a starting point built from the Principal Consultant's synthesis of the discovery, research, and market understanding.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>The team builds from the direction and adds their insight</h4>
//       <p>The Brand Strategy Associate and Lead Strategist take the Principal Consultant's direction and build the full strategic architecture from it. They do not just fill in the document. They actively bring their own research findings, consumer insights, and competitive observations to enrich and pressure-test the direction. If the team finds evidence that challenges the direction, they raise it. If they have ideas that would strengthen it, they bring them. This is a thinking partnership, not a transcription exercise.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Finalisation together</h4>
//       <p>The Principal Consultant, Lead Strategist, and Brand Strategy Associate review the full strategy document together before it goes to the client. The Principal Consultant approves, adjusts, or redirects. Once the strategy is finalised with the Principal Consultant's approval, it goes to the client through the standard review and approval process.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Execution through the client's operational team</h4>
//       <p>After client approval, the Brand Strategy Associate manages the execution support through the client portal. The Principal Consultant is not in every weekly check-in. The Associate carries the execution support and tracks progress against the finalised plan. The Principal Consultant comes in at the 30, 60, and 90-day reviews to assess the three-layer comparison and provide the next strategic steer.</p>
//     </div>
//   </div>
// </div>

// <div class="callout-box"><p>Strategy that does not reach execution is an expensive opinion. Your job as a Brand Strategy Associate does not end at document delivery. It ends when the strategy is running inside the client's business and producing observable results. The review process is how you close that loop.</p></div>

// <div class="module-divider"></div>

// <div class="section-heading">Document Protocol</div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>All strategy documents follow the Magsmen format.</strong> Montserrat font. Black and white. No decorative elements. Content density of 85 percent or above.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Every deliverable goes through internal review before client delivery.</strong> Brand Strategy Associate completes the draft, Lead Strategist reviews, Head of Operations clears, Founder reviews all positioning and foundational documents.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Feedback is given in writing via ClickUp.</strong> Not verbally. Not via WhatsApp. A written record of every review comment is mandatory.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Internal documents may include pricing.</strong> External client documents must never include internal pricing logic, cost structures, or fee rationale. This distinction is absolute.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Strategy work begins only after the first invoice is paid and the kickoff call is completed.</strong> No exceptions. Partial payment does not qualify.</div></div>

// <div class="section-heading">Client Communication Rules</div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>All external communication is reviewed by the Head of Operations before sending.</strong> This includes emails, WhatsApp messages, and any written communication to clients or prospects.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Brand Strategy Associates do not communicate commercial terms to clients.</strong> All pricing, fee adjustment, and scope change conversations are handled by the Head of Operations or Principal Consultant.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>All client messages are responded to within 1 business day.</strong> If a matter requires more than a day to address properly, Operations acknowledges within 4 hours with a timeline for the full response.</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text"><strong>Side conversations with clients outside the designated client portal or project channel are not permitted.</strong> If a client reaches out on a personal channel with a project question, acknowledge it and redirect to the project channel within 2 hours.</div></div>

// <div class="section-heading">The Knowledge Library</div>
// <p class="body-text">Every completed engagement contributes to the Magsmen Knowledge Library. This is where the firm's accumulated intelligence lives. The test for this system is simple: if every current team member left tomorrow, would a new team have enough documented knowledge to service an existing client competently within 30 days? That is the standard the Knowledge Library is built to achieve.</p>
// <table class="stage-table">
//   <tr><th>Folder</th><th>Contents</th></tr>
//   <tr><td>01 Frameworks and Models</td><td>All proprietary frameworks with usage guides. Any new framework developed in a client engagement must be documented and submitted to the Principal Consultant within 5 days of first use.</td></tr>
//   <tr><td>02 Case Studies</td><td>One document per completed engagement within 30 days of project closure. Anonymised unless written client consent for naming exists. The Brand Strategy Associate on the engagement is responsible for writing it.</td></tr>
//   <tr><td>03 Sector Libraries</td><td>Research files per sector. D2C, FMCG, SaaS, Fintech, Edtech, Mobility, Hospitality, Luxury Consumer. Updated after every relevant client engagement and on a quarterly basis.</td></tr>
//   <tr><td>04 Execution Reviews</td><td>All three-layer review documents (planned vs executed vs result) from every engagement. This is the most valuable data the firm accumulates. It shows what actually works in the real world, not just what looked good in strategy.</td></tr>
//   <tr><td>05 Templates</td><td>All standard templates: strategy document structure, design brief, proposal format, discovery notes, weekly check-in format, three-layer review format, client feedback survey.</td></tr>
// </table>

// ${moduleFooter(9,'I have read and understood Team Protocols and Execution')}
// `; }

// /* ---- MODULE 10: LEGAL DIMENSION ---- */
// function m10() { return `
// <div class="module-eyebrow">Module 10</div>
// <h1 class="module-title">The Legal Dimension for Strategists</h1>
// <p class="module-intro">Magsmen is not only a brand strategy firm. It is a legal-blended consulting practice. This means legal foresight is embedded in every engagement, not added at the end. You do not need to be a lawyer. You need to know enough to identify when a legal issue is present and when to escalate.</p>

// <div class="section-heading">Why Legal Is Brand Strategy</div>
// <p class="body-text">An unregistered trademark is a brand asset that a competitor can take. A founder agreement without IP assignment clauses means the brand the company just built may not legally belong to the company. A celebrity partnership without reputation protection clauses is a crisis with a scheduled arrival date. These are not hypothetical risks. They are recurring realities in the Indian market.</p>
// <p class="body-text">Magsmen integrates legal foresight into every brand engagement because the value of a brand strategy is directly proportional to how well it is protected. A brand that cannot be legally defended is a brand that can be taken.</p>

// <div class="section-heading">Trademark Basics for Strategists</div>
// <p class="body-text">Every strategy team member must understand trademark protection at a practical level. You will encounter trademark questions in naming, brand architecture, and client advisory work.</p>
// <div class="step-list">
//   <div class="step-item">
//     <div class="step-num">1</div>
//     <div class="step-content">
//       <h4>What Trademarks Protect</h4>
//       <p>A trademark protects a brand name, logo, tagline, or other distinctive mark that identifies the source of goods or services. Registration is under the Trade Marks Act, 1999, filed with the Controller General of Patents, Designs and Trade Marks (CGPDTM). Registration gives the owner the exclusive right to use the mark in the registered class of goods or services.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">2</div>
//     <div class="step-content">
//       <h4>Classes of Protection</h4>
//       <p>Trademarks are registered in specific classes from the Nice Classification system (45 classes). A business that only protects its mark in the class of its primary product is vulnerable to competitors registering the same mark in adjacent classes. Part of our brand strategy work includes advising on which classes require protection based on the brand's growth trajectory.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">3</div>
//     <div class="step-content">
//       <h4>Trademark Screening in Naming Engagements</h4>
//       <p>Before any name is recommended to a client, it must be screened against the IP India trademark database (ipindia.gov.in). A name with an existing registered mark in the relevant class cannot be used. A name with a pending application requires careful evaluation. This is not optional.</p>
//     </div>
//   </div>
//   <div class="step-item">
//     <div class="step-num">4</div>
//     <div class="step-content">
//       <h4>Common Names Cannot Be Protected</h4>
//       <p>Descriptive, generic, or geographical names cannot be registered as trademarks in most circumstances. A name like "Best Biryani" cannot be protected. A coined name, a fanciful word, or a distinctive combination can be. This affects naming strategy directly.</p>
//     </div>
//   </div>
// </div>

// <div class="section-heading">IP Advisory in Client Engagements</div>
// <p class="body-text">You are not providing legal advice. You are identifying legal risks and recommending that the client seek formal legal counsel. The distinction matters for liability and professional responsibility. What you can do:</p>
// <div class="info-grid">
//   <div class="info-card">
//     <div class="info-card-label">Flag IP Gaps</div>
//     <div class="info-card-desc">If a client has a brand name, logo, or valuable business process that is not protected, note it in the strategy document and recommend formal IP filing.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Raise Governance Concerns</div>
//     <div class="info-card-desc">If a founder partnership has no IP assignment clauses, or if a content creator relationship has no IP ownership terms, flag it as a strategic vulnerability.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Conduct Basic Screening</div>
//     <div class="info-card-desc">Use the IP India portal to screen proposed names. Document your search and its results. This is research support, not legal opinion.</div>
//   </div>
//   <div class="info-card">
//     <div class="info-card-label">Recognise Crisis Risk</div>
//     <div class="info-card-desc">If a client's brand, endorsement, or public position creates reputational or legal exposure, escalate to the Founder immediately. Do not advise independently on crisis situations with legal dimensions.</div>
//   </div>
// </div>

// <div class="section-heading">Key Indian Laws You Must Know</div>
// <table class="stage-table">
//   <tr><th>Law</th><th>Relevance to Our Work</th></tr>
//   <tr><td>Trade Marks Act, 1999</td><td>Brand name and logo protection. Primary law for naming engagements.</td></tr>
//   <tr><td>Copyright Act, 1957</td><td>Protects original creative work including brand guidelines, strategy documents, and visual identity.</td></tr>
//   <tr><td>Indian Contract Act, 1872</td><td>Governs all client agreements. Understanding the basics of consideration, offer, acceptance, and breach is required.</td></tr>
//   <tr><td>Information Technology Act, 2000</td><td>Governs digital brand protection, domain name disputes, and data handling.</td></tr>
//   <tr><td>Consumer Protection Act, 2019</td><td>Governs advertising claims and product liability. Relevant to any brand communication strategy.</td></tr>
//   <tr><td>DPDP Act, 2023</td><td>Digital Personal Data Protection. Relevant when client strategies involve consumer data collection.</td></tr>
//   <tr><td>Companies Act, 2013</td><td>Relevant to multi-entity brand architecture engagements and corporate governance advisory.</td></tr>
// </table>

// <div class="section-heading">When to Escalate</div>
// <p class="body-text">Escalate to the Founder immediately when any of the following are present in an engagement.</p>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text">A client mentions litigation, a legal dispute, or a court order in the context of the engagement</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text">A naming recommendation involves a mark that appears to be in conflict with an existing registration</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text">A client's business model, product claims, or communication raises potential regulatory compliance questions</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text">A Stature engagement involves a client facing public controversy, media attention, or reputation crisis</div></div>
// <div class="rule-item"><div class="rule-icon"><svg viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="4"/></svg></div><div class="rule-text">Any situation where a client asks for legal advice rather than strategic advisory</div></div>

// <div class="callout-box"><p>The legal-blended dimension of Magsmen's work is a competitive advantage. It is not a compliance function. When you surface a legal risk that the client did not see, you demonstrate a depth of strategic thinking that conventional brand consultants cannot match. Use it proactively, not reactively.</p></div>

// ${moduleFooter(10,'I have read and understood The Legal Dimension')}
// `; }

// /* ---- MODULE 11: ACKNOWLEDGMENT ---- */
// function m11() {
//   const allAcksDone = () => ['ack1','ack2','ack3','ack4','ack5','ack6'].every(id => {
//     const el = document.getElementById(id) as HTMLInputElement | null;
//     return el?.checked === true;
//   });
//   const checkAcks = () => {
//     const submitButton = document.getElementById('btn-final-submit') as HTMLButtonElement | null;
//     if (submitButton) {
//       submitButton.disabled = !allAcksDone();
//     }
//   };
//   setTimeout(() => {
//     ['ack1','ack2','ack3','ack4','ack5','ack6'].forEach(id => {
//       const el = document.getElementById(id);
//       if (el) el.addEventListener('change', checkAcks);
//     });
//   }, 100);
//   const now = new Date();
//   const dateStr = now.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });
//   return `
// <div class="module-eyebrow">Module 11</div>
// <h1 class="module-title">Acknowledgment</h1>
// <p class="module-intro">You have completed all ten substantive modules of the Magsmen Strategy Intelligence Programme. This final module is the formal record of your acknowledgment. Read carefully. Check each box. This record will be submitted to the firm.</p>

// <div class="ack-section">
//   <h3>Proprietary Methodology Acknowledgment</h3>
//   <p>All frameworks, analytical models, research processes, diagnostic systems, engagement structures, and strategic thinking you have encountered in this portal are the exclusive intellectual property of Grofesion Innovations Private Limited, operating as Magsmen Strategy Consultants. This includes the Five-Pillar OTC Diagnostic, the 13-Stage Brand Creation Framework, the Brand Health Index, the MACES System, the Brand Volatility Matrix, the Competitive Gravity Map, the Stature Methodology, the Brand Expresso Framework, the Linkfluence System, the Perception Audit Format, the 5D Consulting Framework, and all other tools, templates, and training content contained in this portal.</p>
//   <p>Your access to these materials is conditional on your employment with Grofesion Innovations Private Limited. No licence to reproduce, distribute, adapt, teach, or commercially use any of this methodology is granted. This obligation survives the conclusion of your employment indefinitely for trade secrets and for five years for all other confidential information, in accordance with the Indian Contract Act, 1872 and the Copyright Act, 1957.</p>
// </div>

// <div class="section-heading">Your Acknowledgment Checklist</div>
// <p class="body-text">Check each box after reading the statement. All six must be checked before you can submit.</p>

// <div class="ack-checklist">
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack1">
//     <label for="ack1">I have read all ten substantive modules of the Magsmen Strategy Intelligence Programme. I understand the firm's identity, services, research process, consumer analysis methodology, analytical frameworks, brand architecture approach, business-integrated brand strategy model, proprietary frameworks, team protocols, and the legal dimension of our work.</label>
//   </div>
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack2">
//     <label for="ack2">I understand that <strong>all content in this portal is proprietary to Grofesion Innovations Private Limited</strong> and is protected under the Copyright Act, 1957, the Information Technology Act, 2000, and the Trade Marks Act, 1999. I will not share, reproduce, or use this content outside of my responsibilities at Magsmen.</label>
//   </div>
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack3">
//     <label for="ack3">I understand that my confidentiality obligations over the contents of this portal <strong>survive the conclusion of my employment</strong> with Grofesion Innovations Private Limited. Post-employment, I will not use any framework, methodology, or strategic approach learned from this portal for commercial purposes without written permission from the Founder.</label>
//   </div>
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack4">
//     <label for="ack4">I understand that <strong>all client information I encounter at Magsmen is strictly confidential</strong>. I will not disclose any client's business, financial, strategic, or personal information to any person outside Magsmen. This obligation applies during and after my employment.</label>
//   </div>
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack5">
//     <label for="ack5">I confirm that I operate under the <strong>authority and oversight of my Lead Strategist, the Head of Operations, and the Founder</strong> in all client-facing and strategy work. I will not make strategic recommendations, communicate commercial terms, or deliver deliverables to clients without the appropriate level of internal review and approval.</label>
//   </div>
//   <div class="ack-check-row">
//     <input type="checkbox" id="ack6">
//     <label for="ack6">I have understood and accept the <strong>team protocols, document standards, escalation procedures, and quality standards</strong> of Magsmen Strategy Consultants. I commit to operating within these standards from my first day of active work at the firm.</label>
//   </div>
// </div>

// <div class="stamp-row">
//   <div class="stamp-field">
//     <div class="stamp-label">Full Name</div>
//     <div class="stamp-value" id="stamp-name">Loading...</div>
//   </div>
//   <div class="stamp-field">
//     <div class="stamp-label">Role</div>
//     <div class="stamp-value" id="stamp-role">Loading...</div>
//   </div>
//   <div class="stamp-field">
//     <div class="stamp-label">Date</div>
//     <div class="stamp-value">${dateStr}</div>
//   </div>
//   <div class="stamp-field">
//     <div class="stamp-label">Status</div>
//     <div class="stamp-value" style="color:var(--violet)">Completing Programme</div>
//   </div>
// </div>

// <div style="margin-top:32px;">
//   <button class="btn-acknowledge" id="btn-final-submit" disabled onclick="acknowledgeModule(11)" style="width:100%;height:52px;font-size:13px;">Submit Acknowledgment and Complete Programme</button>
//   <p style="font-size:11px;color:var(--text-muted);margin-top:12px;text-align:center;">By submitting, you confirm the above acknowledgments are true and complete. This submission is time-stamped and forwarded to the firm's records.</p>
// </div>

// <div style="margin-top:32px;padding:20px;border:1px solid var(--border);font-size:11px;color:var(--text-muted);line-height:1.7;">
//   <strong style="color:var(--black);font-size:10px;letter-spacing:0.06em;text-transform:uppercase;">Legal Notice</strong><br><br>
//   This portal and all its contents are the property of Grofesion Innovations Private Limited. Any unauthorised reproduction, distribution, or commercial use of any part of this portal's contents constitutes a breach of the Indian Copyright Act, 1957 (Section 51), and may attract civil liability under Section 55 of that Act, including injunctive relief, damages, and account of profits. Criminal liability may also arise under the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023. All disputes arising from or related to this portal shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts at Hyderabad, Telangana.
// </div>
// `; }

// /* Stamp fields are set inside the renderModule call via setTimeout in m11 handler */

// /* ============================================================
//    INITIAL READY STATE CHECK
//    (invoked directly from the React mount effect below, since
//    DOMContentLoaded has already fired by the time this component mounts)
//    ============================================================ */
// function initEmailJS() {
//   const emailjs = (window as Window & typeof globalThis & {
//     emailjs?: {
//       init: (publicKey: string) => void;
//     };
//   }).emailjs;

//   if (EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY' && emailjs) {
//     try { emailjs.init(EMAILJS_PUBLIC_KEY); } catch(e) {}
//   }
// }


// export default function MagsmenStrategyPortal() {
//   const rootRef = useRef(null);
//   const didInit = useRef(false);

//   useEffect(() => {
//     if (didInit.current) return;
//     didInit.current = true;

//     // Load Montserrat (matches the original <head> font link)
//     if (!document.getElementById('magsmen-font-link')) {
//       const link = document.createElement('link');
//       link.id = 'magsmen-font-link';
//       link.rel = 'stylesheet';
//       link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap';
//       document.head.appendChild(link);
//     }

//     // Load EmailJS (matches the original <head> script tag)
//     const emailjsScript = document.createElement('script');
//     emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
//     emailjsScript.async = true;
//     emailjsScript.onload = () => { try { initEmailJS(); } catch (e) {} };
//     document.body.appendChild(emailjsScript);

//     /* Expose all handlers referenced by inline onclick="" / onchange=""
//        attributes in the injected HTML below (module content included) */
//     window.handleLogin = handleLogin;
//     window.checkDisclaimerScroll = checkDisclaimerScroll;
//     window.toggleDisclaimerBtn = toggleDisclaimerBtn;
//     window.handleDisclaimerAccept = handleDisclaimerAccept;
//     window.renderModule = renderModule;
//     window.acknowledgeModule = acknowledgeModule;
//     window.prevModule = prevModule;
//     window.copyRecord = copyRecord;
//     window.sendCompletionEmail = sendCompletionEmail;

//     return () => {
//       [
//         'handleLogin', 'checkDisclaimerScroll', 'toggleDisclaimerBtn',
//         'handleDisclaimerAccept', 'renderModule', 'acknowledgeModule',
//         'prevModule', 'copyRecord', 'sendCompletionEmail'
//       ].forEach((k) => {
//         try {
//           delete (window as unknown as Record<string, unknown>)[k];
//         } catch (e) {}
//       });
//     };
//   }, []);

//   return (
//     <>
//       <style>{PORTAL_CSS}</style>
//       <div ref={rootRef} dangerouslySetInnerHTML={{ __html: PORTAL_SHELL_HTML }} />
//     </>
//   );
// }