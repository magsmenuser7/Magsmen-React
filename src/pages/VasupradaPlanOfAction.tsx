import React from "react";

import magsmennewlogoblackhorizontallandscape from "../../public/assets/magsmen-new-logo-black-horizontal-landscape.png";

export default function VasupradaPlanOfAction() {
  return (
    <div className="poa-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .poa-root {
          --bg: #ffffff;
          --surface: #f6f6f8;
          --border: #e4e4e8;
          --border-strong: #c8c8cc;
          --text-primary: #0a0a0a;
          --text-secondary: #3a3a3a;
          --text-muted: #888888;
          --accent: #7C3AED;
          --accent-dark: #5B21B6;
          --accent-deep: #1A0A2E;
          --accent-light: #EDE9FE;
          --accent-mid: #8B5CF6;
          --gold: #C5A572;
          --gold-light: #fdf6ec;
          --black: #0a0a0a;
          --connector: #c0c0c8;

          font-family: 'Montserrat', sans-serif;
          background: var(--bg);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
        }

        .poa-root * { margin: 0; padding: 0; box-sizing: border-box; }

        .poa-root .page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 44px 80px;
        }

        /* ─── HEADER ─── */
        .poa-root .doc-header {
          margin-bottom: 52px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border-strong);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .poa-root .eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }

        .poa-root .doc-title {
          font-size: 26px;
          font-weight: 900;
          color: var(--black);
          line-height: 1.2;
        }

        .poa-root .doc-right {
          text-align: right;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          line-height: 1.7;
        }

        /* ─── SECTION LABELS ─── */
        .poa-root .section-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .poa-root .divider {
          height: 1px;
          background: var(--border);
          margin: 56px 0;
        }

        /* ═══════════════════════════════════════
           DIAGRAM
        ═══════════════════════════════════════ */

        .poa-root .diagram-wrap {
          position: relative;
        }

        .poa-root .v-connector {
          display: flex;
          justify-content: center;
          padding: 0;
          height: 36px;
          align-items: center;
        }

        .poa-root .v-line {
          width: 2px;
          height: 36px;
          background: var(--connector);
          position: relative;
        }

        .poa-root .v-line::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid var(--connector);
        }

        /* ─ NODE: ENTRY ─ */
        .poa-root .node-entry {
          background: var(--black);
          border-radius: 6px;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .poa-root .node-entry-eyebrow {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 5px;
        }

        .poa-root .node-entry-name {
          font-size: 18px;
          font-weight: 900;
          color: white;
        }

        .poa-root .node-entry-sub {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          margin-top: 4px;
        }

        .poa-root .node-entry-tag {
          font-size: 10px;
          font-weight: 700;
          color: var(--gold);
          background: rgba(197,165,114,0.15);
          border: 1px solid rgba(197,165,114,0.3);
          padding: 6px 14px;
          border-radius: 4px;
          letter-spacing: 0.06em;
        }

        /* ─ NODE: OTC ─ */
        .poa-root .node-otc {
          border: 2px solid var(--accent);
          border-radius: 6px;
          overflow: hidden;
        }

        .poa-root .node-otc-header {
          background: var(--accent);
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .poa-root .node-otc-title {
          font-size: 14px;
          font-weight: 800;
          color: white;
        }

        .poa-root .node-otc-price {
          font-size: 16px;
          font-weight: 900;
          color: var(--gold);
        }

        .poa-root .node-otc-body {
          background: var(--accent-light);
          padding: 12px 24px;
          font-size: 11px;
          font-weight: 600;
          color: var(--accent-dark);
          line-height: 1.6;
        }

        /* ─ OTC DISCOVERY LAYER ─ */
        .poa-root .discovery-layer {
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          overflow: hidden;
        }

        .poa-root .discovery-header {
          background: var(--surface);
          padding: 12px 20px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .poa-root .discovery-badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-light);
          padding: 3px 10px;
          border-radius: 3px;
        }

        .poa-root .discovery-header-text {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .poa-root .discovery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .poa-root .discovery-item {
          padding: 18px 20px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .poa-root .discovery-item:nth-child(3n) { border-right: none; }
        .poa-root .discovery-item:nth-last-child(-n+3) { border-bottom: none; }

        .poa-root .discovery-num {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 6px;
        }

        .poa-root .discovery-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .poa-root .discovery-desc {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* ─ ECOSYSTEM PHASE ─ */
        .poa-root .ecosystem-strip {
          background: var(--black);
          border-radius: 6px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .poa-root .ecosystem-icon {
          width: 36px;
          height: 36px;
          background: rgba(124,58,237,0.2);
          border: 1px solid rgba(124,58,237,0.4);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .poa-root .ecosystem-icon svg {
          width: 18px;
          height: 18px;
        }

        .poa-root .ecosystem-phase {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 3px;
        }

        .poa-root .ecosystem-title {
          font-size: 13px;
          font-weight: 800;
          color: white;
        }

        .poa-root .ecosystem-sub {
          font-size: 10px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          margin-top: 2px;
        }

        /* ─ DECISION NODE ─ */
        .poa-root .decision-wrap {
          display: flex;
          justify-content: center;
        }

        .poa-root .decision-node {
          background: white;
          border: 2px solid var(--gold);
          border-radius: 6px;
          padding: 14px 28px;
          text-align: center;
          min-width: 280px;
          position: relative;
        }

        .poa-root .decision-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 5px;
        }

        .poa-root .decision-question {
          font-size: 14px;
          font-weight: 800;
          color: var(--text-primary);
        }

        /* ─ path cards ─ */
        .poa-root .path-card {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-strong);
        }

        .poa-root .path-header {
          padding: 16px 20px;
        }

        .poa-root .path-a .path-header { background: var(--accent-dark); }
        .poa-root .path-b .path-header { background: var(--accent-deep); }

        .poa-root .path-tag {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 4px;
        }

        .poa-root .path-name {
          font-size: 14px;
          font-weight: 800;
          color: white;
        }

        .poa-root .path-price {
          font-size: 13px;
          font-weight: 700;
          color: var(--gold);
          margin-top: 4px;
        }

        .poa-root .path-body {
          padding: 16px 20px;
          background: var(--surface);
        }

        .poa-root .path-item {
          display: flex;
          gap: 8px;
          margin-bottom: 10px;
          align-items: flex-start;
        }

        .poa-root .path-item:last-child { margin-bottom: 0; }

        .poa-root .path-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }

        .poa-root .path-a .path-dot { background: var(--accent); }
        .poa-root .path-b .path-dot { background: var(--gold); }

        .poa-root .path-item-text {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .poa-root .path-item-text strong {
          font-weight: 700;
          color: var(--text-primary);
        }

        .poa-root .branch-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
          margin-bottom: 8px;
        }

        .poa-root .branch-label.a { background: var(--accent-light); color: var(--accent-dark); }
        .poa-root .branch-label.b { background: #e8e0f8; color: var(--accent-deep); }

        .poa-root .branch-header {
          padding: 12px 0 8px;
          text-align: center;
        }

        /* ─ CONVERGE ─ */
        .poa-root .converge-container {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          gap: 0;
          height: 40px;
        }

        .poa-root .converge-line-left {
          border-bottom: 2px solid var(--connector);
          border-right: 2px solid var(--connector);
          border-bottom-right-radius: 4px;
          margin-top: 0;
        }

        .poa-root .converge-center {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 0;
        }

        .poa-root .converge-center-line {
          width: 2px;
          height: 100%;
          background: var(--connector);
          position: relative;
        }

        .poa-root .converge-center-line::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid var(--connector);
        }

        .poa-root .converge-line-right {
          border-bottom: 2px solid var(--connector);
          border-left: 2px solid var(--connector);
          border-bottom-left-radius: 4px;
        }

        /* ─ OUTCOME NODE ─ */
        .poa-root .node-outcome {
          border: 2px solid var(--accent-dark);
          border-radius: 8px;
          overflow: hidden;
        }

        .poa-root .outcome-header {
          background: var(--accent-dark);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .poa-root .outcome-title {
          font-size: 14px;
          font-weight: 800;
          color: white;
        }

        .poa-root .outcome-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .poa-root .outcome-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: white;
        }

        .poa-root .outcome-item {
          padding: 16px 18px;
          border-right: 1px solid var(--border);
        }

        .poa-root .outcome-item:last-child { border-right: none; }

        .poa-root .outcome-month {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 5px;
        }

        .poa-root .outcome-item-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .poa-root .outcome-item-desc {
          font-size: 10px;
          font-weight: 500;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* ─ LONG TERM NODE ─ */
        .poa-root .node-longterm {
          background: var(--black);
          border-radius: 6px;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .poa-root .longterm-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 5px;
        }

        .poa-root .longterm-title {
          font-size: 15px;
          font-weight: 800;
          color: white;
        }

        .poa-root .longterm-right {
          display: flex;
          gap: 12px;
        }

        .poa-root .lt-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 4px;
          border: 1px solid;
        }

        .poa-root .lt-tag.consulting { border-color: rgba(124,58,237,0.5); color: #a78bfa; background: rgba(124,58,237,0.12); }
        .poa-root .lt-tag.platform { border-color: rgba(197,165,114,0.4); color: var(--gold); background: rgba(197,165,114,0.1); }

        /* ═══════════════════════════════════════
           BUDGET
        ═══════════════════════════════════════ */

        .poa-root .budget-bar {
          display: flex;
          height: 52px;
          border-radius: 6px;
          overflow: hidden;
          gap: 2px;
          margin-bottom: 16px;
        }

        .poa-root .bar-seg {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.04em;
        }

        .poa-root .bar-ip { background: var(--black); width: 32%; }
        .poa-root .bar-brand { background: var(--accent); width: 12%; }
        .poa-root .bar-ops { background: var(--accent-dark); width: 36%; }
        .poa-root .bar-magsmen { background: var(--gold); width: 20%; color: var(--black); }

        .poa-root .budget-legend {
          display: flex;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .poa-root .legend-item { display: flex; align-items: center; gap: 7px; }
        .poa-root .legend-dot { width: 9px; height: 9px; border-radius: 2px; flex-shrink: 0; }
        .poa-root .legend-dot-ip { background: var(--black); }
        .poa-root .legend-dot-brand { background: var(--accent); }
        .poa-root .legend-dot-ops { background: var(--accent-dark); }
        .poa-root .legend-dot-magsmen { background: var(--gold); }
        .poa-root .legend-text { font-size: 11px; font-weight: 600; color: var(--text-secondary); }
        .poa-root .legend-amt { font-size: 11px; font-weight: 800; color: var(--text-primary); }

        .poa-root .budget-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          overflow: hidden;
        }

        .poa-root .budget-table thead th {
          background: var(--black);
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 13px 18px;
          text-align: left;
        }

        .poa-root .budget-table thead th:last-child { text-align: right; }

        .poa-root .budget-table tbody td {
          padding: 13px 18px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }

        .poa-root .budget-table tbody tr:last-child td { border-bottom: none; }

        .poa-root .budget-table tbody tr.sub td { background: var(--surface); }

        .poa-root .budget-table tbody tr.sub td:first-child {
          font-size: 11px;
          color: var(--text-muted);
          padding-left: 32px;
        }

        .poa-root .cat-name {
          font-size: 12px;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .poa-root .cat-tag {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 3px;
        }

        .poa-root .tag-ip { background: #f0f0f0; color: #555; }
        .poa-root .tag-brand { background: var(--accent-light); color: var(--accent); }
        .poa-root .tag-ops { background: #ede9fe; color: var(--accent-dark); }
        .poa-root .tag-mags { background: var(--gold-light); color: #8a6030; }

        .poa-root .amount-main { font-size: 13px; font-weight: 800; color: var(--text-primary); text-align: right; }
        .poa-root .amount-sub { font-size: 12px; font-weight: 600; color: var(--text-secondary); text-align: right; }
        .poa-root .pct { font-size: 10px; font-weight: 600; color: var(--text-muted); text-align: right; }

        .poa-root .budget-table tfoot td {
          background: var(--black);
          color: white;
          font-size: 13px;
          font-weight: 800;
          padding: 15px 18px;
        }

        .poa-root .budget-table tfoot .total-amt {
          text-align: right;
          font-size: 15px;
          font-weight: 900;
          color: var(--gold);
        }

        /* ═══════════════════════════════════════
           MAGSMEN SCOPE
        ═══════════════════════════════════════ */

        .poa-root .magsmen-scope {
          border: 1px solid var(--border-strong);
          border-radius: 8px;
          overflow: hidden;
        }

        .poa-root .scope-head {
          background: var(--accent);
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .poa-root .scope-eyebrow { font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 4px; }
        .poa-root .scope-title { font-size: 15px; font-weight: 800; color: white; }
        .poa-root .scope-price { font-size: 22px; font-weight: 900; color: var(--gold); }

        .poa-root .scope-row {
          display: grid;
          grid-template-columns: 52px 1fr auto;
          align-items: start;
          gap: 14px;
          padding: 18px 24px;
          border-bottom: 1px solid var(--border);
        }

        .poa-root .scope-row:last-child { border-bottom: none; }
        .poa-root .scope-num { font-size: 11px; font-weight: 800; color: var(--accent); letter-spacing: 0.05em; padding-top: 1px; }
        .poa-root .scope-row-title { font-size: 12px; font-weight: 700; color: var(--text-primary); margin-bottom: 3px; }
        .poa-root .scope-row-desc { font-size: 11px; font-weight: 500; color: var(--text-secondary); line-height: 1.6; }
        .poa-root .scope-badge { font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); background: var(--surface); border: 1px solid var(--border); padding: 3px 9px; border-radius: 3px; white-space: nowrap; align-self: flex-start; }

        /* ─ Footer ─ */
        .poa-root .doc-footer {
          margin-top: 52px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .poa-root .footer-left { font-size: 10px; font-weight: 600; color: var(--text-muted); }
        .poa-root .footer-right { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
      `}</style>

      <div className="page">

        {/* Header */}
        <div className="doc-header">
            <div>
                <img src={magsmennewlogoblackhorizontallandscape} alt="Magsmen Logo" className="w-48" />
            </div>
          <div>
            <div className="eyebrow">Magsmen Strategy Consultants · Confidential Internal Planning</div>
            <div className="doc-title">Dr. Vasuprada Kartic<br />Plan of Action + Budget</div>
          </div>
          <div className="doc-right">
            Wellbeing Platform + Corporate Brand<br />
            Phase 1 · FY 2025–26<br />
            Total Investment ₹25,00,000
          </div>
        </div>

        {/* ═══════ SECTION 01: PLAN OF ACTION ═══════ */}
        <div className="section-label">01 — Plan of Action · Diagrammatic Process</div>

        <div className="diagram-wrap">

          {/* ENTRY NODE */}
          <div className="node-entry">
            <div className="node-entry-left">
              <div className="node-entry-eyebrow">Starting Point</div>
              <div className="node-entry-name">Dr. Vasuprada Kartic</div>
              <div className="node-entry-sub">Psychotherapist · Trauma Specialist · Corporate Wellness Authority in Progress</div>
            </div>
            <div className="node-entry-tag">Magsmen Engagement Begins</div>
          </div>

          <div className="v-connector"><div className="v-line"></div></div>

          {/* ECOSYSTEM PHASE */}
          <div className="ecosystem-strip">
            <div className="ecosystem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12h3m12 0h3M12 3v3m0 12v3" />
                <path d="M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
              </svg>
            </div>
            <div className="ecosystem-text">
              <div className="ecosystem-phase">Phase 0 · Pre-Entry Check</div>
              <div className="ecosystem-title">Ecosystem Enabler Feasibility</div>
              <div className="ecosystem-sub">Is the ecosystem ready? Timing, demand signals, platform readiness, and stakeholder alignment assessed before any investment is made.</div>
            </div>
          </div>

          <div className="v-connector"><div className="v-line"></div></div>

          {/* OTC NODE */}
          <div className="node-otc">
            <div className="node-otc-header">
              <div className="node-otc-title">Stage 01 — OTC · One Time Consulting</div>
              <div className="node-otc-price">₹1,00,000</div>
            </div>
            <div className="node-otc-body">
              Magsmen enters with a structured diagnostic before any brand or commercial work begins. Six discovery lenses are applied simultaneously, producing a single decision document — not a research report.
            </div>
          </div>

          <div className="v-connector"><div className="v-line"></div></div>

          {/* DISCOVERY LAYER */}
          <div className="discovery-layer">
            <div className="discovery-header">
              <div className="discovery-badge">OTC Discovery Layer</div>
              <div className="discovery-header-text">Six lenses applied within the OTC engagement</div>
            </div>
            <div className="discovery-grid">

              <div className="discovery-item">
                <div className="discovery-num">01</div>
                <div className="discovery-title">Positioning</div>
                <div className="discovery-desc">Where Dr. Vasuprada currently sits in the market's mind versus where corporate decision-makers need to see her. Gap identified with precision, not assumption.</div>
              </div>

              <div className="discovery-item">
                <div className="discovery-num">02</div>
                <div className="discovery-title">Market Understanding</div>
                <div className="discovery-desc">The corporate wellness landscape in Hyderabad, Bangalore, and relevant geographies. Who is operating, at what price point, with what narrative, and what they are missing.</div>
              </div>

              <div className="discovery-item">
                <div className="discovery-num">03</div>
                <div className="discovery-title">Market Feasibility</div>
                <div className="discovery-desc">Revenue potential across verticals. IT, BFSI, pharma, manufacturing. Corporate training budgets, L&D spend trends, and where genuine procurement intent exists.</div>
              </div>

              <div className="discovery-item">
                <div className="discovery-num">04</div>
                <div className="discovery-title">Market Need and Wants</div>
                <div className="discovery-desc">What corporates say they need versus what they actually buy. The gap between stated interest and real procurement decisions. Where Dr. Vasuprada's offer maps to budget approval.</div>
              </div>

              <div className="discovery-item">
                <div className="discovery-num">05</div>
                <div className="discovery-title">Perception Audit</div>
                <div className="discovery-desc">How Dr. Vasuprada is currently perceived online, in professional networks, and within the corporate wellness category. Existing credibility assets mapped against gaps.</div>
              </div>

              <div className="discovery-item">
                <div className="discovery-num">06</div>
                <div className="discovery-title">Magsmen Compliance Check</div>
                <div className="discovery-desc">IP exposure, trademark risks, brand name vulnerabilities, and structural gaps — reviewed from Magsmen's legal-blended lens before any public-facing brand work begins.</div>
              </div>

            </div>
          </div>

          <div className="v-connector"><div className="v-line"></div></div>

          {/* DECISION */}
          <div className="decision-wrap">
            <div className="decision-node">
              <div className="decision-label">Decision Point · Post OTC</div>
              <div className="decision-question">How does Dr. Vasuprada proceed?</div>
            </div>
          </div>

          {/* BRANCHES */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "16px" }}>

            {/* Path A */}
            <div>
              <div className="branch-header">
                <span className="branch-label a">Path A — Project</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", height: "28px", alignItems: "flex-start" }}>
                <div style={{ width: "2px", height: "28px", background: "var(--connector)", position: "relative" }}>
                  <div style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid var(--connector)" }}></div>
                </div>
              </div>
              <div className="path-card path-a">
                <div className="path-header">
                  <div className="path-tag">Brand Creation · Outcome-Based · 3 Months</div>
                  <div className="path-name">Magsmen Brand Expresso</div>
                  <div className="path-price">₹5,00,000 · OTC Adjusted</div>
                </div>
                <div className="path-body">
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Personal Brand Architecture</strong> — Purpose, positioning, proof points. Built for corporate audiences, not clinical peers.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>LinkedIn Presence Live</strong> — Profile rebuilt, 12-week content planned and seeded, thought leadership engine active.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>B2B Segment Strategy</strong> — Corporate offer structured, pricing architecture defined, collateral ready for CHRO conversations.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Go-to-Market Plan</strong> — Sector sequencing, BD narrative, first conversation scripts, and conversion pathway defined.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Magsmen as Execution Partner</strong> — We stay in the work. Not advisory only. Strategy, content direction, offer refinement, and BD coaching included.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Path B */}
            <div>
              <div className="branch-header">
                <span className="branch-label b">Path B — Retainer</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center", height: "28px", alignItems: "flex-start" }}>
                <div style={{ width: "2px", height: "28px", background: "var(--connector)", position: "relative" }}>
                  <div style={{ position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid var(--connector)" }}></div>
                </div>
              </div>
              <div className="path-card path-b">
                <div className="path-header">
                  <div className="path-tag">Direct Consultant Hire · Post OTC</div>
                  <div className="path-name">Magsmen as Strategic Consultants</div>
                  <div className="path-price">₹12,00,000 Annual · 4 Quarters</div>
                </div>
                <div className="path-body">
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Skip the project structure</strong> — For those ready to move fast. Magsmen hired directly as ongoing consulting partners right after OTC.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Quarterly consulting cycles</strong> — ₹3,00,000 per quarter. Strategy, execution oversight, and market recalibration every 90 days.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Brand, B2B, and platform advisory</strong> — Personal brand growth, corporate deal support, and wellbeing platform brand strategy in one engagement.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>OTC insights as the operating brief</strong> — The OTC output becomes the instruction manual. No repetition. Execution begins from day one of the retainer.</div>
                  </div>
                  <div className="path-item">
                    <div className="path-dot"></div>
                    <div className="path-item-text"><strong>Flexible and adaptive</strong> — Strategy evolves with market response. Not locked to a deliverable list. Locked to outcomes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONVERGE */}
          <div className="converge-container" style={{ marginTop: "20px" }}>
            <div className="converge-line-left"></div>
            <div className="converge-center"><div className="converge-center-line"></div></div>
            <div className="converge-line-right"></div>
          </div>

          <div style={{ height: "12px" }}></div>

          {/* OUTCOME NODE */}
          <div className="node-outcome">
            <div className="outcome-header">
              <div className="outcome-title">3-Month Outcome — What Changes</div>
              <div className="outcome-tag">Both Paths Converge Here</div>
            </div>
            <div className="outcome-grid">
              <div className="outcome-item">
                <div className="outcome-month">Month 1</div>
                <div className="outcome-item-title">Brand Clarity</div>
                <div className="outcome-item-desc">Positioning defined. LinkedIn rebuilt. Corporate narrative active. Dr. Vasuprada is visible to the right audience for the first time.</div>
              </div>
              <div className="outcome-item">
                <div className="outcome-month">Month 2</div>
                <div className="outcome-item-title">B2B Offer Ready</div>
                <div className="outcome-item-desc">Corporate offer tiered and priced. Collateral built. First 3 qualified corporate conversations initiated using the Magsmen GTM narrative.</div>
              </div>
              <div className="outcome-item" style={{ borderRight: "none" }}>
                <div className="outcome-month">Month 3</div>
                <div className="outcome-item-title">Inbound Begins</div>
                <div className="outcome-item-desc">Content and positioning generate interest without manual outreach. The brand works while Dr. Vasuprada is in a session. Pipeline building.</div>
              </div>
            </div>
          </div>

          <div className="v-connector"><div className="v-line"></div></div>

          {/* LONG TERM */}
          <div className="node-longterm">
            <div className="longterm-left">
              <div className="longterm-label">Long-Term Growth Partnership</div>
              <div className="longterm-title">Ongoing Consulting + Wellbeing Platform Scale</div>
            </div>
            <div className="longterm-right">
              <div className="lt-tag consulting">Annual Consulting</div>
              <div className="lt-tag platform">Platform Growth</div>
            </div>
          </div>

        </div>{/* /diagram-wrap */}

        <div className="divider"></div>

        {/* ═══════ SECTION 02: BUDGET ═══════ */}
        <div className="section-label">02 — Budget Allocation · ₹25,00,000</div>

        <div className="budget-section">
          <div className="budget-bar">
            <div className="bar-seg bar-ip">IP · 32%</div>
            <div className="bar-seg bar-brand">Brand</div>
            <div className="bar-seg bar-ops">Operations · 36%</div>
            <div className="bar-seg bar-magsmen">Magsmen · 20%</div>
          </div>
          <div className="budget-legend">
            <div className="legend-item"><div className="legend-dot legend-dot-ip"></div><span className="legend-text">IP Protection</span><span className="legend-amt">&nbsp;₹8L</span></div>
            <div className="legend-item"><div className="legend-dot legend-dot-brand"></div><span className="legend-text">Personal Brand Q1</span><span className="legend-amt">&nbsp;₹3L</span></div>
            <div className="legend-item"><div className="legend-dot legend-dot-ops"></div><span className="legend-text">Operations Runway</span><span className="legend-amt">&nbsp;₹9L</span></div>
            <div className="legend-item"><div className="legend-dot legend-dot-magsmen"></div><span className="legend-text">Magsmen Consulting</span><span className="legend-amt">&nbsp;₹5L</span></div>
          </div>

          <table className="budget-table">
            <thead>
              <tr>
                <th style={{ width: "34%" }}>Allocation Head</th>
                <th>Purpose</th>
                <th style={{ textAlign: "right" }}>Amount</th>
                <th style={{ textAlign: "right" }}>Share</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><div className="cat-name">IP Protection <span className="cat-tag tag-ip">Legal</span></div></td>
                <td>Trademark and patent filings covering brand name, methodology, programme names, and platform identity</td>
                <td className="amount-main">₹8,00,000</td>
                <td className="pct">32%</td>
              </tr>
              <tr className="sub">
                <td>→ Trademark Registration</td>
                <td>Multi-class filing — brand name, logo, programme titles, wellbeing platform name</td>
                <td className="amount-sub">₹4,00,000</td>
                <td className="pct">—</td>
              </tr>
              <tr className="sub">
                <td>→ Patent Filing</td>
                <td>Proprietary therapeutic methodology, training frameworks, and platform process architecture</td>
                <td className="amount-sub">₹4,00,000</td>
                <td className="pct">—</td>
              </tr>

              <tr>
                <td><div className="cat-name">Personal Brand Q1 <span className="cat-tag tag-brand">Brand</span></div></td>
                <td>Quarter 1 brand presence — content creation, content planning, social management across LinkedIn and Instagram</td>
                <td className="amount-main">₹3,00,000</td>
                <td className="pct">12%</td>
              </tr>

              <tr>
                <td><div className="cat-name">Operations Runway <span className="cat-tag tag-ops">Foundation</span></div></td>
                <td>Platform groundwork, BD activities, team coordination, and operational continuity for Phase 1</td>
                <td className="amount-main">₹9,00,000</td>
                <td className="pct">36%</td>
              </tr>
              <tr className="sub">
                <td>→ Platform Foundation</td>
                <td>Technology architecture and design groundwork for the wellbeing platform</td>
                <td className="amount-sub">Included</td>
                <td className="pct">—</td>
              </tr>
              <tr className="sub">
                <td>→ BD and Corporate Outreach</td>
                <td>Direct corporate approach costs, event participation, and first engagement expenses</td>
                <td className="amount-sub">Included</td>
                <td className="pct">—</td>
              </tr>
              <tr className="sub">
                <td>→ Team and Administration</td>
                <td>Staffing, coordination, and overheads for the 3-month phase</td>
                <td className="amount-sub">Included</td>
                <td className="pct">—</td>
              </tr>

              <tr>
                <td><div className="cat-name">Magsmen Consulting <span className="cat-tag tag-mags">Strategy</span></div></td>
                <td>Full consulting engagement — OTC, Brand Expresso project, IP advisory, GTM, and execution partnership</td>
                <td className="amount-main" style={{ color: "var(--accent)" }}>₹5,00,000</td>
                <td className="pct">20%</td>
              </tr>

            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Phase 1 Total · Dr. Vasuprada Kartic Engagement</td>
                <td className="total-amt">₹25,00,000</td>
                <td style={{ textAlign: "right", fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="divider"></div>

        {/* ═══════ SECTION 03: MAGSMEN SCOPE ═══════ */}
        <div className="section-label">03 — What Magsmen Does · ₹5,00,000 Scope</div>

        <div className="magsmen-scope">
          <div className="scope-head">
            <div className="scope-head-left">
              <div className="scope-eyebrow">Magsmen Strategy Consultants · Full Engagement Scope</div>
              <div className="scope-title">OTC + Brand Expresso · Dr. Vasuprada Kartic · Phase 1</div>
            </div>
            <div className="scope-price">₹5,00,000</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">01</div>
            <div>
              <div className="scope-row-title">OTC · One Time Consulting Session</div>
              <div className="scope-row-desc">One structured deep-dive with Sandeep N. Ecosystem enabler feasibility, positioning diagnosis, market intelligence, perception audit, and Magsmen compliance check — all produced as a single decision document within 5 working days.</div>
            </div>
            <div className="scope-badge">₹1L · Entry</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">02</div>
            <div>
              <div className="scope-row-title">Personal Brand Architecture</div>
              <div className="scope-row-desc">Purpose, positioning, promise, and proof points built for a corporate audience. The architecture translates Dr. Vasuprada's 20 years of clinical authority into a narrative that CHROs and L&D heads immediately trust and act on.</div>
            </div>
            <div className="scope-badge">Month 1</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">03</div>
            <div>
              <div className="scope-row-title">B2B Corporate Positioning and GTM</div>
              <div className="scope-row-desc">Which corporate sectors to enter first. What narrative to lead with. The business case for mental wellness framed in corporate language — not clinical language. Go-to-market sequencing with sector prioritisation and BD approach architecture.</div>
            </div>
            <div className="scope-badge">Month 1–2</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">04</div>
            <div>
              <div className="scope-row-title">LinkedIn Strategy and Content Framework</div>
              <div className="scope-row-desc">Profile rebuilt for corporate audiences. Content pillars defined around trauma leadership, corporate wellness ROI, and system-level change. 12-week content plan with topic sequencing, format mix, and publishing cadence handed off to the execution team.</div>
            </div>
            <div className="scope-badge">Month 1–3</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">05</div>
            <div>
              <div className="scope-row-title">Corporate Offer Structure and Pricing</div>
              <div className="scope-row-desc">Tiered corporate service architecture — what Dr. Vasuprada offers, at what price, with what scope. Clear enough for a CHRO to approve in one meeting. Includes training formats, retainer models, and assessment-based engagement tiers.</div>
            </div>
            <div className="scope-badge">Month 2</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">06</div>
            <div>
              <div className="scope-row-title">IP Strategy Advisory</div>
              <div className="scope-row-desc">Identifying what needs trademark protection before it enters the market — brand name, programme names, methodology titles, and wellbeing platform identity. Coordinated with the legal team so every filing has commercial logic behind it.</div>
            </div>
            <div className="scope-badge">Month 1</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">07</div>
            <div>
              <div className="scope-row-title">Wellbeing Platform — Brand Concept and Positioning</div>
              <div className="scope-row-desc">Naming strategy, positioning, and trust architecture for the platform. How to present confidentiality as a brand promise. How to position for both individual users and corporate wellness programmes simultaneously.</div>
            </div>
            <div className="scope-badge">Month 2–3</div>
          </div>

          <div className="scope-row">
            <div className="scope-num">08</div>
            <div>
              <div className="scope-row-title">Execution Oversight · Months 1 to 3</div>
              <div className="scope-row-desc">Magsmen stays in the work. Content direction, offer refinement based on market feedback, BD narrative coaching, and quarterly review at the end of month 3 to calibrate for what comes next. Not advisory only. Execution partnership.</div>
            </div>
            <div className="scope-badge">Month 1–3</div>
          </div>

        </div>

        {/* Footer */}
        <div className="doc-footer">
          <div className="footer-left">Magsmen Strategy Consultants · Grofesion Innovations Pvt. Ltd. · Confidential</div>
          <div className="footer-right">Plan of Action · Dr. Vasuprada Kartic</div>
        </div>

      </div>
    </div>
  );
}