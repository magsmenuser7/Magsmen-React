import React, { useState, useRef, useEffect, useMemo } from "react";
import emailjs from '@emailjs/browser';

/* ============================================================
   CONFIG — fill these in with real values before going live
   ============================================================ */
const CFG = {
  EJS_KEY: "-ePIcI6qQCURx5hAM",
  EJS_SVC: "service_9gmlg2q",
  EJS_TSUB: "template_63311it",
  TO_A: "sandeep@magsmen.com",
  TO_B: "ganesh.k@magsmen.com",
  TO_C: "connect@magsmen.com",
  CLAUDE: "YOUR_CLAUDE_API_KEY",
  MUSER: "magsmen",
  MPASS: "Magsmen@APNRT2025",
};

/* ============================================================
   STATIC OPTIONS (unchanged content from the original markup)
   ============================================================ */
const SECTORS = [
  "Agriculture & Food Processing", "Aquaculture & Fisheries", "Manufacturing & Industrial",
  "IT & Technology", "Healthcare & Pharmaceuticals", "Infrastructure & Real Estate",
  "Tourism & Hospitality", "Education & Skill Development", "Energy & Renewables",
  "Retail & Consumer Goods", "Logistics & Supply Chain", "Finance & Fintech",
  "Media & Entertainment", "Defence & Aerospace", "Other",
];
const STAGES = [
  "Ideation — Concept Stage", "Feasibility Study Complete", "Business Plan Ready",
  "Pilot / Proof of Concept", "Revenue Stage — Scale Required", "Expansion Stage",
];
const INVESTMENTS = [
  "Under ₹1 Crore", "₹1 Crore – ₹5 Crore", "₹5 Crore – ₹25 Crore",
  "₹25 Crore – ₹100 Crore", "₹100 Crore – ₹500 Crore", "Above ₹500 Crore",
];
const DEPARTMENTS = [
  "Department of Industries & Commerce", "Department of Information Technology & Electronics",
  "Department of Agriculture & Allied Sciences", "Department of Health, Medical & Family Welfare",
  "Department of Tourism", "Department of Infrastructure & Investment", "Department of Education",
  "Department of Energy, Infrastructure & Investments", "Department of Water Resources",
  "Department of Transport, Roads & Buildings", "Department of Municipal Administration & Urban Development",
  "Department of Finance", "Department of Skill Development & Training", "Department of Fisheries",
  "Department of Housing", "Department of Food & Civil Supplies",
  "Department of Environment, Forests & Science", "Multiple Departments", "Not Sure — Require Guidance",
];
const SUPPORT_TYPES = [
  "Government Policy Support", "Land Allocation", "Financial Support / Grants",
  "Regulatory Clearances", "Public-Private Partnership", "Market Access & Linkages",
  "Export Support", "Skill Development Support", "Technology Transfer",
  "Incubation / Startup Support", "Brand & Market Development", "Other",
] as const;
type SupportType = typeof SUPPORT_TYPES[number];
const SUPPORT_LABELS: Partial<Record<SupportType, string>> = {
  "Public-Private Partnership": "PPP",
  "Market Access & Linkages": "Market Access",
  "Brand & Market Development": "Brand & Market Dev",
};

/* ============================================================
   HELPERS
   ============================================================ */
interface SubmissionFile {
  name: string;
  size: number;
  type: string;
}

type ToastType = "in" | "ok" | "er";

interface Toast {
  id: number;
  msg: string;
  type: ToastType;
}

interface FormErrors {
  [key: string]: boolean;
}

type ValidationFieldId = "n" | "d" | "o" | "e" | "p" | "t" | "sec" | "st" | "sum" | "dpt";

interface ValidationCheck {
  id: ValidationFieldId;
  fn: (v: string) => boolean;
}

type InputFieldRef = React.MutableRefObject<HTMLInputElement | null>;
type SelectFieldRef = React.MutableRefObject<HTMLSelectElement | null>;
type TextAreaFieldRef = React.MutableRefObject<HTMLTextAreaElement | null>;

type FieldRef = InputFieldRef | SelectFieldRef | TextAreaFieldRef;

type ValidationRefMap = Record<ValidationFieldId, FieldRef>;

interface AuditPillar {
  name: string;
  score: number;
  weight: number;
  insight: string;
}

interface AuditResult {
  nvbi: number;
  nvbi_label: string;
  exec_summary: string;
  govt_readiness: string;
  pillars: AuditPillar[];
  strengths: string[];
  gaps: string[];
  rec_90: string[];
  magsmen_opportunity: string;
}

interface ResearchResult {
  opportunity_level: number;
  opportunity_rationale: string;
  market_size: string;
  sector_overview: string;
  govt_priorities: string;
  consumer_landscape: string;
  competitive_landscape: string;
  timing: string;
  key_insights: string[];
  risks: string[];
  strategic_recommendation: string;
}

type BarField = "sector" | "dept";

interface Stats {
  total: number;
  audits: number;
  sectors: number;
  week: number;
}

interface Submission {
  id: string;
  ts: string;
  name: string;
  desig: string;
  org: string;
  email: string;
  phone: string;
  city: string;
  title: string;
  sector: string;
  stage: string;
  invest: string;
  summary: string;
  dept: string;
  support: string[];
  web: string;
  li: string;
  notes: string;
  files: SubmissionFile[];
  audit: AuditResult | null;
  research: ResearchResult | null;
}

type SubmissionPatch = Partial<Submission>;

interface AuditPanelProps {
  s: Submission;
  loading: boolean;
  runAuditNow: () => void;
}

interface ResPanelProps {
  s: Submission;
  loading: boolean;
  runResNow: () => void;
}

type ViewMode = "vf" | "vt" | "vl" | "vd";
type DashPanel = "ov" | "all" | "sec" | "dpt";
type ModalTab = "sub" | "aud" | "res";

interface FormRefs {
  fn: InputFieldRef;
  fd: InputFieldRef;
  fo: InputFieldRef;
  fe: InputFieldRef;
  fp: InputFieldRef;
  fc: InputFieldRef;
  ft: InputFieldRef;
  fsec: SelectFieldRef;
  fst: SelectFieldRef;
  finv: SelectFieldRef;
  fsum: TextAreaFieldRef;
  fdpt: SelectFieldRef;
  fweb: InputFieldRef;
  fli: InputFieldRef;
  fnotes: TextAreaFieldRef;
  lu: InputFieldRef;
  lp: InputFieldRef;
}

function fmtSize(b: number): string {
  return b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : (b / 1024).toFixed(0) + " KB";
}
function getExt(name: string): string {
  return ((name || "").split(".").pop() || "").toUpperCase().slice(0, 4);
}
function fmtDateShort(ts: string | number | Date): string {
  return new Date(ts).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "2-digit" });
}
function fmtDateLong(ts: string | number | Date): string {
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function APNRTPortal() {
  /* view: 'vf' (form) | 'vt' (thank you) | 'vl' (login) | 'vd' (dashboard) */
  const [view, setView] = useState<ViewMode>("vf");

  /* In-memory store, replacing the original localStorage-backed DB
     (browser storage APIs are unavailable in this environment). */
  const [subs, setSubs] = useState<Submission[]>([]);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [supportChecked, setSupportChecked] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>("APNRT-2025-0001");
  const [toasts, setToasts] = useState<Toast[]>([]);

  const [loginErr, setLoginErr] = useState<boolean>(false);
  const [authed, setAuthed] = useState<boolean>(false);

  const [dashPanel, setDashPanel] = useState<DashPanel>("ov");
  const [tsrch, setTsrch] = useState<string>("");
  const [ffs, setFfs] = useState<string>("");
  const [ffd, setFfd] = useState<string>("");

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [curSubId, setCurSubId] = useState<string | null>(null);
  const [modalTab, setModalTab] = useState<ModalTab>("sub");
  const [auditLoading, setAuditLoading] = useState<boolean>(false);
  const [resLoading, setResLoading] = useState<boolean>(false);

  /* ---- EmailJS readiness flag, so we never call .send() before .init() ---- */
  const emailReadyRef = useRef<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const upzoneRef = useRef<HTMLDivElement | null>(null);
  const hdrDateRef = useRef<HTMLDivElement | null>(null);

  const r: FormRefs = {
    fn: useRef<HTMLInputElement>(null), fd: useRef<HTMLInputElement>(null), fo: useRef<HTMLInputElement>(null), fe: useRef<HTMLInputElement>(null), fp: useRef<HTMLInputElement>(null), fc: useRef<HTMLInputElement>(null),
    ft: useRef<HTMLInputElement>(null), fsec: useRef<HTMLSelectElement>(null), fst: useRef<HTMLSelectElement>(null), finv: useRef<HTMLSelectElement>(null), fsum: useRef<HTMLTextAreaElement>(null),
    fdpt: useRef<HTMLSelectElement>(null), fweb: useRef<HTMLInputElement>(null), fli: useRef<HTMLInputElement>(null), fnotes: useRef<HTMLTextAreaElement>(null),
    lu: useRef<HTMLInputElement>(null), lp: useRef<HTMLInputElement>(null),
  };

  /* ============================================================
     EMAILJS INIT — FIX #1
     The component already imports the emailjs npm package at the
     top of the file, so we do NOT need to inject the CDN <script>
     tag as well (that was dead/conflicting code — it created a
     second, unused `window.emailjs` global that this component
     never actually called). We now initialise the imported SDK
     exactly once, on mount, and flag it ready.
     ============================================================ */
  useEffect(() => {
    try {
      if (!CFG.EJS_KEY || CFG.EJS_KEY.startsWith("YOUR")) {
        console.warn("[EmailJS] Public key is missing/placeholder — emails will not send.");
        emailReadyRef.current = false;
        return;
      }
      emailjs.init({ publicKey: CFG.EJS_KEY });
      emailReadyRef.current = true;
    } catch (initErr) {
      console.error("[EmailJS] init() failed:", initErr);
      emailReadyRef.current = false;
    }
  }, []);

  /* Header date, same formatting as original */
  const hdrDate = useMemo(
    () => new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" }),
    []
  );

  useEffect(() => {
    document.body.style.background =
      view === "vl" || view === "vt" ? "var(--header-bg)" : view === "vd" ? "#FFF" : "var(--cream)";
  }, [view]);

  /* ============================================================
     TOASTS
     ============================================================ */
  function toast(msg: string, type: ToastType = "in", dur: number = 4500): void {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), dur);
  }

  /* ============================================================
     FILE UPLOAD
     ============================================================ */
  function addFiles(files: File[]): void {
    setSelectedFiles((prev) => {
      const next = [...prev];
      files.forEach((f) => {
        if (!next.find((x) => x.name === f.name && x.size === f.size)) next.push(f);
      });
      return next;
    });
    setErrors((e) => ({ ...e, efiles: false }));
  }

  function removeFile(i: number): void {
    setSelectedFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  function onFileInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    addFiles(Array.from(e.target.files || []));
    e.target.value = "";
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDragOver(false);
    addFiles(Array.from(e.dataTransfer.files));
  }

  function updateChar(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    const n = e.target.value.trim().length;
    setCharCount(n);
    if (n >= 150) setErrors((er) => ({ ...er, esum: false }));
  }

  function toggleSupport(val: string): void {
    setSupportChecked((prev) => {
      const next = prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val];
      if (next.length > 0) setErrors((e) => ({ ...e, esup: false }));
      return next;
    });
  }

  /* ============================================================
     VALIDATION
     ============================================================ */
  function gv(ref: FieldRef): string {
    return ref.current ? ref.current.value.trim() : "";
  }

  function validate(): boolean {
    const checks: ValidationCheck[] = [
      { id: "n", fn: (v: string) => v.length > 1 },
      { id: "d", fn: (v: string) => v.length > 1 },
      { id: "o", fn: (v: string) => v.length > 1 },
      { id: "e", fn: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: "p", fn: (v: string) => v.length > 6 },
      { id: "t", fn: (v: string) => v.length > 3 },
      { id: "sec", fn: (v: string) => v !== "" },
      { id: "st", fn: (v: string) => v !== "" },
      { id: "sum", fn: (v: string) => v.length >= 150 },
      { id: "dpt", fn: (v: string) => v !== "" },
    ];
    const refMap: ValidationRefMap = {
      n: r.fn, d: r.fd, o: r.fo, e: r.fe, p: r.fp, t: r.ft,
      sec: r.fsec, st: r.fst, sum: r.fsum, dpt: r.fdpt,
    };
    const newErrors: FormErrors = {};
    let ok = true;
    checks.forEach(({ id, fn }) => {
      const bad: boolean = !fn(gv(refMap[id]));
      newErrors["e" + id] = bad;
      if (bad) ok = false;
    });
    if (supportChecked.length === 0) {
      newErrors.esup = true;
      ok = false;
    }
    if (selectedFiles.length === 0) {
      newErrors.efiles = true;
      ok = false;
    }
    setErrors(newErrors);
    return ok;
  }

  /* ============================================================
     AI GENERATION (unchanged prompts / endpoint)
     ============================================================ */
  async function genAudit(s: Submission): Promise<AuditResult | null> {
    if (!CFG.CLAUDE || CFG.CLAUDE.startsWith("YOUR")) return null;
    const prompt = `You are a senior brand strategist at Magsmen Strategy Consultants. Conduct a New Venture Brand Audit using the Magsmen seven-pillar methodology.

SUBMISSION
Member: ${s.name}, ${s.desig} — ${s.org}
Project: ${s.title}
Sector: ${s.sector} | Stage: ${s.stage}
Investment: ${s.invest || "Not specified"}
Department: ${s.dept}
Support: ${s.support.join(", ")}
Summary: ${s.summary}
Files submitted: ${s.files.map((f) => f.name).join(", ") || "None"}
Notes: ${s.notes || "None"}

Rate each pillar 1-5 (1=Critical, 5=Excellent). Calculate NVBI as sum of (score/5*weight) for all pillars.

Return ONLY valid JSON:
{"nvbi":<0-100>,"nvbi_label":"<Market-leading|Competitive|Developing|Critical>","exec_summary":"<3 direct sentences>","govt_readiness":"<2 sentences on readiness for target department>","pillars":[{"name":"Strategy","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Identity","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Culture","score":<1-5>,"weight":10,"insight":"<1-2 sentences>"},{"name":"Experience","score":<1-5>,"weight":20,"insight":"<1-2 sentences>"},{"name":"Communication","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Market","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Governance","score":<1-5>,"weight":10,"insight":"<1-2 sentences>"}],"strengths":["<s1>","<s2>","<s3>"],"gaps":["<g1>","<g2>","<g3>"],"rec_90":["<a1>","<a2>","<a3>"],"magsmen_opportunity":"<specific value Magsmen can add>"}`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": CFG.CLAUDE, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 2000, messages: [{ role: "user", content: prompt }] }),
      });
      if (!res.ok) return null;
      const d = await res.json();
      return JSON.parse((d.content?.[0]?.text || "").replace(/```json|```/g, "").trim());
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async function genResearch(s: Submission): Promise<ResearchResult | null> {
    if (!CFG.CLAUDE || CFG.CLAUDE.startsWith("YOUR")) return null;
    const prompt = `You are a Magsmen Research Intelligence Analyst. Generate an Executive Intelligence Brief for this APNRT submission.

Project: ${s.title} | Sector: ${s.sector} | Dept: ${s.dept}
Summary: ${s.summary}

Return ONLY valid JSON:
{"opportunity_level":<1-10>,"opportunity_rationale":"<one sentence>","market_size":"<size and CAGR>","sector_overview":"<2 paragraphs on this sector in AP and India>","govt_priorities":"<2 sentences on AP govt alignment>","consumer_landscape":"<2 sentences>","competitive_landscape":"<3 sentences naming players>","timing":"<one sentence on market timing>","key_insights":["<i1>","<i2>","<i3>","<i4>"],"risks":["<r1>","<r2>","<r3>"],"strategic_recommendation":"<Magsmen first move — specific and direct>"}`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": CFG.CLAUDE, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1500, messages: [{ role: "user", content: prompt }] }),
      });
      if (!res.ok) return null;
      const d = await res.json();
      return JSON.parse((d.content?.[0]?.text || "").replace(/```json|```/g, "").trim());
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /* ============================================================
     EMAIL SEND — FIX #2, #3, #4
     - No longer silently swallows errors: returns true/false and
       the caller surfaces a toast either way, so submissions that
       fail to email are now VISIBLE instead of looking identical
       to a successful send.
     - Parameter names below are matched EXACTLY to the live
       EmailJS template (see EmailJS dashboard → Email Templates →
       "Contact Us" → Content/Settings tabs): the template body
       references {{name}}, {{email}}, {{phone}}, {{subject}}, and
       {{message}} — NOT the previous to_email/from_name/content/ref
       keys this code used to send. That mismatch was the actual
       root cause of submissions "succeeding" in the UI while no
       email ever arrived: EmailJS received the request but had no
       matching variables to fill into the template.
     - The template's "To Email" field is already hardcoded on the
       EmailJS dashboard to the three recipient addresses
       (comma-separated), so a single emailjs.send() call is
       sufficient — no need to loop per recipient or pass a
       to_email param at all.
     - Logs the real EmailJS error object (e.text / e.message) so
       the actual rejection reason (bad service ID, bad template
       ID, bad public key, blocked origin, etc.) is visible in the
       console instead of an opaque failure.
     ============================================================ */
  async function sendEmail(s: Submission, audit: AuditResult | null): Promise<boolean> {
    if (!CFG.EJS_KEY || CFG.EJS_KEY.startsWith("YOUR")) {
      console.warn("[EmailJS] Skipped send — public key not configured.");
      return false;
    }
    if (!emailReadyRef.current) {
      // Defensive re-init in case the mount-time init failed or ran
      // before the SDK was fully ready.
      try {
        emailjs.init({ publicKey: CFG.EJS_KEY });
        emailReadyRef.current = true;
      } catch (reinitErr) {
        console.error("[EmailJS] Re-init failed:", reinitErr);
        return false;
      }
    }

    const message = [
      `NEW APNRT PROJECT SUBMISSION`,
      `Reference: ${s.id}`,
      `Submitted: ${new Date(s.ts).toLocaleString("en-IN")}`,
      ``,
      `──────────────────────────────`,
      `MEMBER DETAILS`,
      `──────────────────────────────`,
      `Name:          ${s.name}`,
      `Designation:   ${s.desig}`,
      `Organisation:  ${s.org}`,
      `Email:         ${s.email}`,
      `Phone:         ${s.phone}`,
      `City:          ${s.city || "Not provided"}`,
      ``,
      `──────────────────────────────`,
      `PROJECT OVERVIEW`,
      `──────────────────────────────`,
      `Title:         ${s.title}`,
      `Sector:        ${s.sector}`,
      `Stage:         ${s.stage}`,
      `Investment:    ${s.invest || "Not specified"}`,
      ``,
      `Executive Summary:`,
      s.summary,
      ``,
      `──────────────────────────────`,
      `GOVERNMENT INTERFACE`,
      `──────────────────────────────`,
      `Target Department:  ${s.dept}`,
      `Support Required:   ${s.support.join(", ") || "None specified"}`,
      ``,
      `──────────────────────────────`,
      `PROJECT MATERIALS`,
      `──────────────────────────────`,
      `Files Submitted:    ${s.files.length ? s.files.map((f) => f.name).join(", ") : "None"}`,
      `Project Website:    ${s.web || "Not provided"}`,
      `LinkedIn / Social:  ${s.li || "Not provided"}`,
      ``,
      `Additional Notes:`,
      s.notes || "None",
      audit
        ? [
            ``,
            `──────────────────────────────`,
            `MAGSMEN BRAND AUDIT (AUTO-GENERATED)`,
            `──────────────────────────────`,
            `NVBI Score:              ${audit.nvbi}/100 (${audit.nvbi_label})`,
            `Magsmen Opportunity:     ${audit.magsmen_opportunity}`,
          ].join("\n")
        : "",
    ]
      .filter((line) => line !== undefined)
      .join("\n");

    const subject = `[APNRT] ${s.title} — ${s.name}${audit ? " | NVBI " + audit.nvbi : ""}`;

    try {
      await emailjs.send(CFG.EJS_SVC, CFG.EJS_TSUB, {
        name: s.name,
        email: s.email,
        phone: s.phone,
        subject,
        message,
      });
      return true;
    } catch (sendErr: any) {
      const reason =
        sendErr?.text || sendErr?.message || (typeof sendErr === "string" ? sendErr : JSON.stringify(sendErr));
      console.error("[EmailJS] Send failed:", reason);
      return false;
    }
  }

  /* ============================================================
     SUBMIT
     ============================================================ */
  function mkId(): string {
    return `APNRT-${new Date().getFullYear()}-${String(subs.length + 1).padStart(4, "0")}`;
  }

  function patchSub(id: string, updates: SubmissionPatch): void {
    setSubs((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!validate()) {
      formRef.current?.querySelector(".ferr.on")?.closest(".fsec")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setIsProcessing(true);
    try {
      const id = mkId();
      const sub = {
        id,
        ts: new Date().toISOString(),
        name: gv(r.fn), desig: gv(r.fd), org: gv(r.fo), email: gv(r.fe), phone: gv(r.fp), city: gv(r.fc),
        title: gv(r.ft), sector: gv(r.fsec), stage: gv(r.fst), invest: gv(r.finv), summary: gv(r.fsum),
        dept: gv(r.fdpt), support: [...supportChecked], web: gv(r.fweb), li: gv(r.fli), notes: gv(r.fnotes),
        files: selectedFiles.map((f) => ({ name: f.name, size: f.size, type: f.type })),
        audit: null, research: null,
      };
      setSubs((prev) => [sub, ...prev]);
      const [audit, research] = await Promise.all([genAudit(sub), genResearch(sub)]);
      if (audit) patchSub(id, { audit });
      if (research) patchSub(id, { research });

      const emailOk = await sendEmail(sub, audit);
      if (emailOk) {
        toast("Notification email sent to the APNRT/Magsmen team.", "ok");
      } else {
        toast("Submission saved, but the notification email failed to send. Check console for details.", "er", 6000);
      }

      setIsProcessing(false);
      setSubmissionId(id);
      setView("vt");
    } catch (err) {
      console.error(err);
      setIsProcessing(false);
      setSubmissionId(mkId());
      setView("vt");
    }
  }

  /* ============================================================
     AUTH
     ============================================================ */
  function doLogin(): void {
    const u = gv(r.lu);
    const p = r.lp.current ? r.lp.current.value : "";
    if (u === CFG.MUSER && p === CFG.MPASS) {
      setLoginErr(false);
      setAuthed(true);
      setView("vd");
    } else setLoginErr(true);
  }
  function doLogout(): void {
    setAuthed(false);
    if (r.lu.current) r.lu.current.value = "";
    if (r.lp.current) r.lp.current.value = "";
    setView("vf");
  }

  useEffect(() => {
    if (authed && view === "vd") setDashPanel((p) => p);
  }, [authed, view]);

  /* ============================================================
     DASHBOARD DERIVED DATA
     ============================================================ */
  const stats = useMemo<Stats>(() => {
    const weekAgo = Date.now() - 7 * 864e5;
    return {
      total: subs.length,
      audits: subs.filter((s) => s.audit).length,
      sectors: new Set(subs.map((s) => s.sector).filter(Boolean)).size,
      week: subs.filter((s) => new Date(s.ts).getTime() > weekAgo).length,
    };
  }, [subs]);

  function barsFor(field: BarField): Array<[string, number]> {
    const cnt: Record<string, number> = {};
    subs.forEach((s) => {
      if (s[field]) cnt[s[field]] = (cnt[s[field]] || 0) + 1;
    });
    return Object.entries(cnt).sort((a, b) => b[1] - a[1]);
  }

  const sectorOptions = useMemo(() => [...new Set(subs.map((s) => s.sector).filter(Boolean))].sort(), [subs]);
  const deptOptions = useMemo(() => [...new Set(subs.map((s) => s.dept).filter(Boolean))].sort(), [subs]);

  const filteredSubs = useMemo(() => {
    const q = tsrch.toLowerCase();
    return subs.filter((s) => {
      const mq = !q || [s.name, s.title, s.org, s.sector, s.dept].some((f) => f && f.toLowerCase().includes(q));
      return mq && (!ffs || s.sector === ffs) && (!ffd || s.dept === ffd);
    });
  }, [subs, tsrch, ffs, ffd]);

  const curSub: Submission | null = subs.find((s) => s.id === curSubId) || null;

  function openModal(id: string): void {
    setCurSubId(id);
    setModalTab("sub");
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal(): void {
    setModalOpen(false);
    document.body.style.overflow = "";
  }

  async function runAuditNow(): Promise<void> {
    if (!curSub) return;
    setAuditLoading(true);
    const audit = await genAudit(curSub);
    setAuditLoading(false);
    if (audit) {
      patchSub(curSub.id, { audit });
      toast("Brand audit complete", "ok");
    } else toast("Generation failed. Check the Claude API key in CONFIG.", "er");
  }
  async function runResNow(): Promise<void> {
    if (!curSub) return;
    setResLoading(true);
    const research = await genResearch(curSub);
    setResLoading(false);
    if (research) {
      patchSub(curSub.id, { research });
      toast("Market research complete", "ok");
    } else toast("Generation failed. Check the Claude API key in CONFIG.", "er");
  }

  function doExport() {
    if (!subs.length) {
      toast("No submissions to export", "er");
      return;
    }
    const h = ["ID", "Date", "Name", "Designation", "Organisation", "Email", "Phone", "City", "Project", "Sector", "Stage", "Investment", "Department", "Support", "Summary", "Files", "Website", "Notes", "NVBI", "Audit Label", "Audit Ready", "Research Ready"];
    const rows = subs.map((s) =>
      [
        s.id, new Date(s.ts).toLocaleDateString("en-IN"), s.name, s.desig, s.org, s.email, s.phone, s.city || "",
        s.title, s.sector, s.stage, s.invest || "", s.dept, (s.support || []).join("; "), s.summary,
        (s.files || []).map((f) => f.name).join("; "), s.web || "", s.notes || "",
        s.audit ? s.audit.nvbi : "", s.audit ? s.audit.nvbi_label : "", s.audit ? "Yes" : "No", s.research ? "Yes" : "No",
      ]
        .map((v) => `"${String(v || "").replace(/"/g, '""')}"`)
        .join(",")
    );
    const blob = new Blob([[h.join(","), ...rows].join("\n")], { type: "text/csv" });
    const a = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(blob),
      download: `APNRT_${new Date().toISOString().slice(0, 10)}.csv`,
    });
    a.click();
    URL.revokeObjectURL(a.href);
    toast(`Exported ${subs.length} proposals`, "ok");
  }

  const PTITLES = { ov: "Intelligence Overview", all: "All Proposals", sec: "By Sector", dpt: "By Department" };

  /* ============================================================
     RENDER
     ============================================================ */
  return (
    <div>
      <style>{CSS}</style>

      {view === "vf" && (
        <FormView
          hdrDate={hdrDate}
          r={r}
          errors={errors}
          charCount={charCount}
          updateChar={updateChar}
          supportChecked={supportChecked}
          toggleSupport={toggleSupport}
          selectedFiles={selectedFiles}
          removeFile={removeFile}
          fileInputRef={fileInputRef}
          onFileInputChange={onFileInputChange}
          dragOver={dragOver}
          setDragOver={setDragOver}
          onDrop={onDrop}
          formRef={formRef}
          handleSubmit={handleSubmit}
          setView={setView}
        />
      )}

      {view === "vt" && <ThankYouView submissionId={submissionId} />}

      {view === "vl" && (
        <LoginView r={r} loginErr={loginErr} doLogin={doLogin} setView={setView} />
      )}

      {view === "vd" && (
        <DashboardView
          dashPanel={dashPanel}
          setDashPanel={setDashPanel}
          PTITLES={PTITLES}
          stats={stats}
          barsFor={barsFor}
          filteredSubs={filteredSubs}
          subs={subs}
          tsrch={tsrch}
          setTsrch={setTsrch}
          ffs={ffs}
          setFfs={setFfs}
          ffd={ffd}
          setFfd={setFfd}
          sectorOptions={sectorOptions}
          deptOptions={deptOptions}
          openModal={openModal}
          doLogout={doLogout}
          doExport={doExport}
        />
      )}

      {modalOpen && curSub && (
        <ModalView
          sub={curSub}
          modalTab={modalTab}
          setModalTab={setModalTab}
          closeModal={closeModal}
          auditLoading={auditLoading}
          resLoading={resLoading}
          runAuditNow={runAuditNow}
          runResNow={runResNow}
        />
      )}

      {isProcessing && (
        <div id="proc">
          <div className="pcard">
            <div className="p-spin"></div>
            <h3>Submitting your proposal</h3>
            <p>Please wait while we process and securely submit your project to the APNRT team.</p>
          </div>
        </div>
      )}

      <div className="tc">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type}`}>
            {t.msg}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   FORM VIEW
   ============================================================ */
interface FormViewProps {
  hdrDate: string;
  r: FormRefs;
  errors: FormErrors;
  charCount: number;
  updateChar: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  supportChecked: string[];
  toggleSupport: (val: string) => void;
  selectedFiles: File[];
  removeFile: (i: number) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dragOver: boolean;
  setDragOver: React.Dispatch<React.SetStateAction<boolean>>;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setView: React.Dispatch<React.SetStateAction<ViewMode>>;
}
function FormView({
  hdrDate, r, errors, charCount, updateChar, supportChecked, toggleSupport,
  selectedFiles, removeFile, fileInputRef, onFileInputChange, dragOver, setDragOver,
  onDrop, formRef, handleSubmit, setView,
}: FormViewProps) {
  return (
    <div id="vf">
      <header className="site-hdr">
        <div className="hdr-top">
          <div className="hdr-org">APNRT × Magsmen</div>
          <div className="hdr-date">{hdrDate}</div>
        </div>
        <div className="hdr-line"></div>
        <div className="hdr-eyebrow">Member Portal — Project Submission</div>
        <h1 className="hdr-title">
          Project
          <br />
          <em>Repository.</em>
        </h1>
        <p className="hdr-sub">
          Submit your venture. Connect with government.
          <br />
          Scale through Andhra Pradesh.
        </p>
        <div className="hdr-meta">
          <div className="hdr-meta-item">Confidential &amp; Secure</div>
          <div className="hdr-meta-item">CXO Members Only</div>
          <div className="hdr-meta-item">5-Day Response Guarantee</div>
          <div className="hdr-meta-item">Powered by Magsmen Intelligence</div>
        </div>
        <div
          className="scroll-hint"
          onClick={() => document.querySelector(".form-wrap")?.scrollIntoView({ behavior: "smooth" })}
        >
          Scroll to begin
        </div>
      </header>

      <div className="form-wrap">
        <form ref={formRef} id="subform" noValidate onSubmit={handleSubmit}>
          {/* 01 */}
          <div className="fsec">
            <div className="sec-hdr">
              <div className="sec-num">01</div>
              <div className="sec-info">
                <h3>Member Details</h3>
                <p>Tell us who you are and how to reach you</p>
              </div>
            </div>
            <div className="fg c2">
              <div className="ff">
                <label className="lbl">
                  Full Name <span className="r">*</span>
                </label>
                <input ref={r.fn} className={`fi${errors.en ? " err" : ""}`} placeholder="Your full name" autoComplete="name" />
                <span className={`ferr${errors.en ? " on" : ""}`}>Name required</span>
              </div>
              <div className="ff">
                <label className="lbl">
                  Designation <span className="r">*</span>
                </label>
                <input ref={r.fd} className={`fi${errors.ed ? " err" : ""}`} placeholder="e.g. Managing Director, Founder" />
                <span className={`ferr${errors.ed ? " on" : ""}`}>Designation required</span>
              </div>
              <div className="ff">
                <label className="lbl">
                  Organisation <span className="r">*</span>
                </label>
                <input ref={r.fo} className={`fi${errors.eo ? " err" : ""}`} placeholder="Company or organisation name" />
                <span className={`ferr${errors.eo ? " on" : ""}`}>Organisation required</span>
              </div>
              <div className="ff">
                <label className="lbl">
                  Email Address <span className="r">*</span>
                </label>
                <input ref={r.fe} type="email" className={`fi${errors.ee ? " err" : ""}`} placeholder="your@email.com" autoComplete="email" />
                <span className={`ferr${errors.ee ? " on" : ""}`}>Valid email required</span>
              </div>
              <div className="ff">
                <label className="lbl">
                  Phone Number <span className="r">*</span>
                </label>
                <input ref={r.fp} type="tel" className={`fi${errors.ep ? " err" : ""}`} placeholder="+91 98765 43210" autoComplete="tel" />
                <span className={`ferr${errors.ep ? " on" : ""}`}>Phone number required</span>
              </div>
              <div className="ff">
                <label className="lbl">City / Location</label>
                <input ref={r.fc} className="fi" placeholder="e.g. Hyderabad, Singapore, Melbourne" />
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="fsec">
            <div className="sec-hdr">
              <div className="sec-num">02</div>
              <div className="sec-info">
                <h3>Project Overview</h3>
                <p>Define your venture, sector, and stage</p>
              </div>
            </div>
            <div className="fg">
              <div className="ff">
                <label className="lbl">
                  Project / Initiative Title <span className="r">*</span>
                </label>
                <input ref={r.ft} className={`fi${errors.et ? " err" : ""}`} placeholder="Give your project a clear, memorable title" />
                <span className={`ferr${errors.et ? " on" : ""}`}>Project title required</span>
              </div>
              <div className="fg c3">
                <div className="ff">
                  <label className="lbl">
                    Industry Sector <span className="r">*</span>
                  </label>
                  <select ref={r.fsec} className={`fsel${errors.esec ? " err" : ""}`} defaultValue="">
                    <option value="">Select sector</option>
                    {SECTORS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <span className={`ferr${errors.esec ? " on" : ""}`}>Sector required</span>
                </div>
                <div className="ff">
                  <label className="lbl">
                    Project Stage <span className="r">*</span>
                  </label>
                  <select ref={r.fst} className={`fsel${errors.est ? " err" : ""}`} defaultValue="">
                    <option value="">Select stage</option>
                    {STAGES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <span className={`ferr${errors.est ? " on" : ""}`}>Stage required</span>
                </div>
                <div className="ff">
                  <label className="lbl">Investment Required</label>
                  <select ref={r.finv} className="fsel" defaultValue="">
                    <option value="">Select range</option>
                    {INVESTMENTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="ff">
                <label className="lbl">
                  Executive Summary <span className="r">*</span>
                </label>
                <textarea
                  ref={r.fsum}
                  className={`fta${errors.esum ? " err" : ""}`}
                  rows={5}
                  placeholder="Describe your project clearly — what it does, the problem it solves, who benefits, and why now is the right time. Minimum 150 characters."
                  onInput={updateChar}
                ></textarea>
                <div className="char-row">
                  <span className={`ferr${errors.esum !== false ? " on" : ""}`} style={{ display: "inline" }}>
                    Please write at least 150 characters
                  </span>
                  <span className="char-ct">{charCount} / 150 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="fsec">
            <div className="sec-hdr">
              <div className="sec-num">03</div>
              <div className="sec-info">
                <h3>Government Interface</h3>
                <p>Identify the department and support you seek</p>
              </div>
            </div>
            <div className="fg">
              <div className="ff">
                <label className="lbl">
                  Target Government Department <span className="r">*</span>
                </label>
                <select ref={r.fdpt} className={`fsel${errors.edpt ? " err" : ""}`} defaultValue="">
                  <option value="">Select the most relevant department</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <span className={`ferr${errors.edpt ? " on" : ""}`}>Please select a department</span>
              </div>
              <div className="ff">
                <label className="lbl">
                  Type of Support Required <span className="r">*</span>
                </label>
                <div className="fhint" style={{ marginBottom: 16 }}>
                  Select all that apply to your project
                </div>
                <div className="cbg">
                  {SUPPORT_TYPES.map((s) => (
                    <label className="cbi" key={s}>
                      <input
                        type="checkbox"
                        checked={supportChecked.includes(s)}
                        onChange={() => toggleSupport(s)}
                      />
                      <span className="cbl">{SUPPORT_LABELS[s] || s}</span>
                    </label>
                  ))}
                </div>
                <span className={`ferr${errors.esup ? " on" : ""}`} style={{ marginTop: 8 }}>
                  Select at least one type of support
                </span>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="fsec">
            <div className="sec-hdr">
              <div className="sec-num">04</div>
              <div className="sec-info">
                <h3>Project Materials</h3>
                <p>Upload any document that represents your project</p>
              </div>
            </div>
            <div className="fg">
              <div className="ff">
                <div
                  className={`upzone${dragOver ? " drag" : ""}`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                >
                  <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} />
                  <span className="up-arrow">↑</span>
                  <div className="up-title">Drop your project materials here</div>
                  <div className="up-types">
                    Pitch Deck &nbsp;·&nbsp; DPR &nbsp;·&nbsp; Presentation &nbsp;·&nbsp; Video &nbsp;·&nbsp; Report &nbsp;·&nbsp; Business Plan &nbsp;·&nbsp; Any Format
                  </div>
                  <div className="up-note">Multiple files supported &nbsp;·&nbsp; All formats accepted</div>
                </div>
                <div className="file-list">
                  {selectedFiles.map((f, i) => (
                    <div className="fchip" key={f.name + f.size}>
                      <span className="fchip-type">{getExt(f.name)}</span>
                      <span className="fchip-name">{f.name}</span>
                      <button type="button" className="fchip-rm" onClick={() => removeFile(i)} title="Remove">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <span className={`ferr${errors.efiles ? " on" : ""}`} style={{ marginTop: 8 }}>
                  Please upload at least one project file
                </span>
              </div>
              <div className="fg c2">
                <div className="ff">
                  <label className="lbl">Project Website / Link</label>
                  <input ref={r.fweb} type="url" className="fi" placeholder="https://yourproject.com" />
                  <div className="fhint" style={{ marginTop: 6 }}>
                    Website, investor deck link, or any URL
                  </div>
                </div>
                <div className="ff">
                  <label className="lbl">LinkedIn / Social</label>
                  <input ref={r.fli} type="url" className="fi" placeholder="https://linkedin.com/in/yourprofile" />
                </div>
              </div>
              <div className="ff">
                <label className="lbl">Additional Notes</label>
                <textarea ref={r.fnotes} className="fta" rows={3} placeholder="Anything else the APNRT team should know about your project or requirements"></textarea>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="submit-row">
            <div className="submit-note">
              Your proposal will be reviewed by the APNRT management team. You will receive a follow-up within 5 business days via email or phone.
            </div>
            <button type="submit" className="btn-submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit Proposal
            </button>
          </div>
        </form>

        {/* About Section */}
        <div className="about-sec" style={{ margin: "80px -40px 0", padding: "80px 40px" }}>
          <div className="about-top">
            <div className="about-eyebrow">About This Initiative</div>
            <div className="about-line-h"></div>
          </div>
          <div className="about-heading">
            What we are
            <br />
            <span>building together.</span>
          </div>
          <div className="about-grid">
            <div className="about-col">
              <div className="about-col-label">AP Non-Resident Telugu (APNRT)</div>
              <p>
                APNRT is the platform connecting the global Telugu diaspora — leaders, investors, and founders — with the economic growth story of Andhra Pradesh. Members carry the ambition of the state in every market they operate in.
              </p>
              <p>
                This repository gives CXO members a structured, serious channel to submit project proposals directly to government departments. No informal conversations. No lost follow-ups. A system that reflects the quality of the ideas within it.
              </p>
            </div>
            <div className="about-divider"></div>
            <div className="about-col">
              <div className="about-col-label">Magsmen Strategy Consultants</div>
              <p>
                Magsmen is an integrated strategy consulting firm operating across Business, Brand, and Legal. The firm works with founders and corporate decision-makers in AP and Telangana to build brands that are strategically powerful, legally secure, and economically sustainable.
              </p>
              <p>
                As APNRT's strategy partner, Magsmen brings diagnostic intelligence, brand architecture, and consulting rigor to every project that enters this repository. Each submission is assessed, structured, and positioned before government interface.
              </p>
              <a href="https://magsmen.com" target="_blank" rel="noreferrer" className="about-link">
                Visit magsmen.com &nbsp;→
              </a>
            </div>
          </div>
          <div className="about-footer">
            <div className="about-copy">© 2025 APNRT × Magsmen Strategy Consultants. All rights reserved.</div>
            <div className="mgmt-link" onClick={() => setView("vl")}>
              Magsmen Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   THANK YOU VIEW
   ============================================================ */
interface ThankYouViewProps {
  submissionId: string;
}

function ThankYouView({ submissionId }: ThankYouViewProps) {
  return (
    <div id="vt" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div className="ty-wrap">
        <div className="ty-mark">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="ty-kicker">Submission Received</div>
        <h1 className="ty-title">
          Your project
          <br />
          is with us.
        </h1>
        <p className="ty-sub">
          The APNRT management team has been notified. Your proposal will be reviewed and you will receive a follow-up within 5 business days.
        </p>
        <div className="ty-ref">
          <div className="ty-ref-lbl">Submission Reference</div>
          <div className="ty-ref-val">{submissionId}</div>
        </div>
        <div className="ty-steps">
          <div className="ty-step">
            <div className="ty-sn">1</div>
            <div className="ty-st">
              <strong>Notification Sent</strong>The APNRT management and Magsmen team have been notified of your submission.
            </div>
          </div>
          <div className="ty-step">
            <div className="ty-sn">2</div>
            <div className="ty-st">
              <strong>Internal Assessment</strong>Your project will be reviewed internally before government interface.
            </div>
          </div>
          <div className="ty-step">
            <div className="ty-sn">3</div>
            <div className="ty-st">
              <strong>Follow-up</strong>You will be contacted within 5 business days to discuss next steps.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LOGIN VIEW
   ============================================================ */
function LoginView({ r, loginErr, doLogin, setView }: { r: { lu: React.MutableRefObject<HTMLInputElement | null>; lp: React.MutableRefObject<HTMLInputElement | null> }; loginErr: boolean; doLogin: () => void; setView: React.Dispatch<React.SetStateAction<ViewMode>>; }) {
  return (
    <div id="vl" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div className="log-wrap">
        <div className="log-left">
          <div className="log-mark">Magsmen Strategy Consultants</div>
          <div>
            <h2>
              Intelligence
              <br />
              Dashboard
            </h2>
            <p>APNRT Project Repository — Internal access for the Magsmen strategy team only.</p>
          </div>
        </div>
        <div className="log-right">
          <div className="log-f">
            <label className="log-lbl">Username</label>
            <input ref={r.lu} className="log-i" placeholder="Enter username" autoComplete="username" />
          </div>
          <div className="log-f">
            <label className="log-lbl">Password</label>
            <input
              ref={r.lp}
              type="password"
              className="log-i"
              placeholder="Enter password"
              autoComplete="current-password"
              onKeyDown={(e) => {
                if (e.key === "Enter") doLogin();
              }}
            />
          </div>
          <button className="btn-log" onClick={doLogin}>
            Access Dashboard
          </button>
          <div className={`log-err${loginErr ? " on" : ""}`}>Incorrect credentials. Please try again.</div>
          <div className="log-back" onClick={() => setView("vf")}>
            ← Back to Member Portal
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DASHBOARD VIEW
   ============================================================ */
function DashboardView({
  dashPanel, setDashPanel, PTITLES, stats, barsFor, filteredSubs, subs,
  tsrch, setTsrch, ffs, setFfs, ffd, setFfd, sectorOptions, deptOptions,
  openModal, doLogout, doExport,
}: {
  dashPanel: DashPanel;
  setDashPanel: React.Dispatch<React.SetStateAction<DashPanel>>;
  PTITLES: Record<DashPanel, string>;
  stats: Stats;
  barsFor: (field: BarField) => [string, number][];
  filteredSubs: Submission[];
  subs: Submission[];
  tsrch: string;
  setTsrch: React.Dispatch<React.SetStateAction<string>>;
  ffs: string;
  setFfs: React.Dispatch<React.SetStateAction<string>>;
  ffd: string;
  setFfd: React.Dispatch<React.SetStateAction<string>>;
  sectorOptions: string[];
  deptOptions: string[];
  openModal: (id: string) => void;
  doLogout: () => void;
  doExport: () => void;
}) {
  function Bars({ field }: { field: BarField }) {
    const data = barsFor(field);
    if (!data.length) return <div className="te" style={{ padding: 24 }}><p>No submissions yet</p></div>;
    const mx = data[0][1];
    return (
      <div className="bars">
        {data.map(([nm, ct]) => (
          <div className="bri" key={nm}>
            <div className="brn" title={nm}>{nm}</div>
            <div className="brtr"><div className="brfl" style={{ width: `${(ct / mx * 100).toFixed(0)}%` }}></div></div>
            <div className="brct">{ct}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="vd" style={{ display: "flex" }}>
      <aside className="msb">
        <div className="msb-hdr">
          <div className="msb-brand">Magsmen</div>
          <div className="msb-sub">Strategy Consultants</div>
          <div className="msb-tag">APNRT Intelligence</div>
        </div>
        <nav className="mnav">
          <div className="nsl">Dashboard</div>
          <div className={`ni${dashPanel === "ov" ? " on" : ""}`} onClick={() => setDashPanel("ov")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            Overview
          </div>
          <div className="nsl" style={{ marginTop: 8 }}>Proposals</div>
          <div className={`ni${dashPanel === "all" ? " on" : ""}`} onClick={() => setDashPanel("all")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" />
            </svg>
            All Proposals<span className="nbdg">{subs.length}</span>
          </div>
          <div className={`ni${dashPanel === "sec" ? " on" : ""}`} onClick={() => setDashPanel("sec")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            By Sector
          </div>
          <div className={`ni${dashPanel === "dpt" ? " on" : ""}`} onClick={() => setDashPanel("dpt")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            By Department
          </div>
        </nav>
        <div className="msb-ft">
          <button className="btn-out" onClick={doLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      <div className="mmain">
        <div className="mtop">
          <div className="mpgt">{PTITLES[dashPanel]}</div>
          <button className="btn-exp" onClick={doExport}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export CSV
          </button>
        </div>

        <div className="mcont">
          {/* Overview */}
          <div className={`apanel${dashPanel === "ov" ? " on" : ""}`}>
            <div className="stat-strip">
              <div className="stat-item"><div className="stat-n">{stats.total}</div><div className="stat-l">Total Proposals</div></div>
              <div className="stat-item"><div className="stat-n">{stats.audits}</div><div className="stat-l">Brand Audits</div></div>
              <div className="stat-item"><div className="stat-n">{stats.sectors}</div><div className="stat-l">Sectors</div></div>
              <div className="stat-item"><div className="stat-n">{stats.week}</div><div className="stat-l">This Week</div></div>
            </div>
            <div className="pcont">
              <div className="bk-title">Sector Distribution</div>
              <Bars field="sector" />
            </div>
          </div>

          {/* All */}
          <div className={`apanel${dashPanel === "all" ? " on" : ""}`}>
            <div className="pcont">
              <div className="tbar">
                <div className="tsr">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input className="tsri" placeholder="Search proposals, members, organisations…" value={tsrch} onChange={(e) => setTsrch(e.target.value)} />
                </div>
                <div className="tfilts">
                  <select className="tfs" value={ffs} onChange={(e) => setFfs(e.target.value)}>
                    <option value="">All Sectors</option>
                    {sectorOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <select className="tfs" value={ffd} onChange={(e) => setFfd(e.target.value)}>
                    <option value="">All Departments</option>
                    {deptOptions.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ overflowX: "auto" }}>
                <table>
                  <thead>
                    <tr>
                      <th>#</th><th>Member</th><th>Organisation</th><th>Project</th><th>Sector</th>
                      <th>Department</th><th>Files</th><th>Audit</th><th>Research</th><th>Date</th><th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubs.length === 0 ? (
                      <tr>
                        <td colSpan={11}>
                          <div className="te">
                            <div className="te-ico">○</div>
                            <p>No proposals found. Adjust your filters or wait for submissions.</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredSubs.map((s) => {
                        const idx = subs.length - subs.findIndex((x) => x.id === s.id);
                        const dshort = s.dept.length > 22 ? s.dept.slice(0, 20) + "…" : s.dept;
                        const fc = (s.files || []).length;
                        return (
                          <tr key={s.id} onClick={() => openModal(s.id)}>
                            <td style={{ color: "var(--d-ink3)", fontSize: 12, fontVariantNumeric: "tabular-nums" }}>{idx}</td>
                            <td><div className="td-name">{s.name}</div><div className="td-desig">{s.desig}</div></td>
                            <td className="td-org" title={s.org}>{s.org}</td>
                            <td className="td-title" title={s.title}>{s.title}</td>
                            <td><span className="tag sec">{s.sector}</span></td>
                            <td><span className="tag dept" title={s.dept}>{dshort}</span></td>
                            <td style={{ fontSize: 12, color: "var(--d-ink3)" }}>{fc} file{fc !== 1 ? "s" : ""}</td>
                            <td>{s.audit ? <span className="tag ok">Ready</span> : <span className="tag pd">Pending</span>}</td>
                            <td>{s.research ? <span className="tag ok">Ready</span> : <span className="tag pd">Pending</span>}</td>
                            <td style={{ fontSize: 12, color: "var(--d-ink3)", whiteSpace: "nowrap" }}>{fmtDateShort(s.ts)}</td>
                            <td><button className="btn-vw" onClick={(e) => { e.stopPropagation(); openModal(s.id); }}>Open</button></td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sector */}
          <div className={`apanel${dashPanel === "sec" ? " on" : ""}`}>
            <div className="pcont"><div className="bk-title">Proposals by Sector</div><Bars field="sector" /></div>
          </div>

          {/* Dept */}
          <div className={`apanel${dashPanel === "dpt" ? " on" : ""}`}>
            <div className="pcont"><div className="bk-title">Proposals by Government Department</div><Bars field="dept" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MODAL VIEW
   ============================================================ */
interface ModalViewProps {
  sub: Submission;
  modalTab: ModalTab;
  setModalTab: React.Dispatch<React.SetStateAction<ModalTab>>;
  closeModal: () => void;
  auditLoading: boolean;
  resLoading: boolean;
  runAuditNow: () => void;
  runResNow: () => void;
}

function ModalView({ sub, modalTab, setModalTab, closeModal, auditLoading, resLoading, runAuditNow, runResNow }: ModalViewProps) {
  const s = sub;
  return (
    <div id="modal" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="mc">
        <div className="mc-hdr">
          <div>
            <div className="mc-ttl">{s.title}</div>
            <div className="mc-sub">{s.name} — {s.desig} at {s.org}</div>
          </div>
          <button className="mc-cls" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="mtabs">
          <div className={`mtab${modalTab === "sub" ? " on" : ""}`} onClick={() => setModalTab("sub")}>Submission</div>
          <div className={`mtab${modalTab === "aud" ? " on" : ""}`} onClick={() => setModalTab("aud")}>
            Brand Audit <span className={`tp ${s.audit ? "ok" : "pd"}`}>{s.audit ? "Ready" : "Pending"}</span>
          </div>
          <div className={`mtab${modalTab === "res" ? " on" : ""}`} onClick={() => setModalTab("res")}>
            Market Research <span className={`tp ${s.research ? "ok" : "pd"}`}>{s.research ? "Ready" : "Pending"}</span>
          </div>
        </div>

        <div className={`mpanel${modalTab === "sub" ? " on" : ""}`}>
          <SubDetail s={s} />
        </div>
        <div className={`mpanel${modalTab === "aud" ? " on" : ""}`}>
          <AuditPanel s={s} loading={auditLoading} runAuditNow={runAuditNow} />
        </div>
        <div className={`mpanel${modalTab === "res" ? " on" : ""}`}>
          <ResPanel s={s} loading={resLoading} runResNow={runResNow} />
        </div>
      </div>
    </div>
  );
}

function SubDetail({ s }: { s: Submission }) {
  return (
    <div>
      <div className="ds">
        <div className="dst">Reference</div>
        <div className="dg c2">
          <div className="di"><div className="dl">Submission ID</div><div className="dv" style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700 }}>{s.id}</div></div>
          <div className="di"><div className="dl">Submitted</div><div className="dv">{fmtDateLong(s.ts)}</div></div>
        </div>
      </div>
      <div className="ds">
        <div className="dst">Member</div>
        <div className="dg">
          <div className="di"><div className="dl">Name</div><div className="dv">{s.name}</div></div>
          <div className="di"><div className="dl">Designation</div><div className="dv">{s.desig}</div></div>
          <div className="di"><div className="dl">Organisation</div><div className="dv">{s.org}</div></div>
        </div>
        <div className="dg">
          <div className="di"><div className="dl">Email</div><div className="dv"><a href={`mailto:${s.email}`} style={{ color: "var(--d-ink)" }}>{s.email}</a></div></div>
          <div className="di"><div className="dl">Phone</div><div className="dv">{s.phone}</div></div>
          <div className="di"><div className="dl">City</div><div className="dv">{s.city || "—"}</div></div>
        </div>
      </div>
      <div className="ds">
        <div className="dst">Project</div>
        <div className="dg">
          <div className="di"><div className="dl">Sector</div><div className="dv"><span className="tag sec">{s.sector}</span></div></div>
          <div className="di"><div className="dl">Stage</div><div className="dv">{s.stage}</div></div>
          <div className="di"><div className="dl">Investment</div><div className="dv">{s.invest || "—"}</div></div>
        </div>
        <div className="dg c2">
          <div className="di"><div className="dl">Target Department</div><div className="dv">{s.dept}</div></div>
          <div className="di"><div className="dl">Website</div><div className="dv">{s.web ? <a href={s.web} target="_blank" rel="noreferrer" style={{ color: "var(--d-ink)" }}>{s.web}</a> : "—"}</div></div>
        </div>
        <div className="di" style={{ marginTop: 16 }}>
          <div className="dl">Executive Summary</div>
          <div className="dv sm" style={{ marginTop: 6 }}>{s.summary}</div>
        </div>
      </div>
      <div className="ds">
        <div className="dst">Support Required</div>
        <div className="stags">{(s.support || []).map((t) => <span className="stag" key={t}>{t}</span>)}</div>
      </div>
      <div className="ds">
        <div className="dst">Submitted Files</div>
        <div className="files-list">
          {(s.files || []).length
            ? s.files.map((f) => (
                <div className="f-item" key={f.name}>
                  <div className="f-ext">{getExt(f.name)}</div>
                  <div className="f-nm">{f.name}</div>
                  <div className="f-sz">{fmtSize(f.size)}</div>
                </div>
              ))
            : <div style={{ fontSize: 13, color: "var(--d-ink3)" }}>No files recorded</div>}
        </div>
      </div>
      {s.notes && <div className="ds"><div className="dst">Notes</div><div className="dv sm">{s.notes}</div></div>}
      {s.li && <div className="ds"><div className="dst">LinkedIn</div><div className="dv"><a href={s.li} target="_blank" rel="noreferrer" style={{ color: "var(--d-ink)" }}>{s.li}</a></div></div>}
    </div>
  );
}

function AuditPanel({ s, loading, runAuditNow }: AuditPanelProps) {
  if (loading) {
    return (
      <div className="gen-loading">
        <div className="gen-spin"></div>
        <p>Running Magsmen seven-pillar brand audit…<br />Approximately 20 seconds</p>
      </div>
    );
  }
  if (!s.audit) {
    return (
      <div className="pending-state">
        <div className="pending-ico">○</div>
        <div className="pending-title">Brand Audit Not Generated</div>
        <div className="pending-sub">The Magsmen seven-pillar audit was not generated at submission time.</div>
        <button className="btn-gen" onClick={runAuditNow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Generate Brand Audit
        </button>
      </div>
    );
  }
  const a = s.audit;
  return (
    <div>
      <div className="nvbi-block">
        <div className="nvbi-score-wrap">
          <div className="nvbi-score-num">{a.nvbi}</div>
          <div className="nvbi-score-label">/ 100 — NVBI</div>
        </div>
        <div className="nvbi-div"></div>
        <div className="nvbi-exec">
          <div className="nvbi-state">{a.nvbi_label}</div>
          <div className="nvbi-exec-lbl">Executive Assessment</div>
          <div className="nvbi-exec-txt">{a.exec_summary}</div>
        </div>
      </div>
      <div className="dst" style={{ marginBottom: 20 }}>Pillar Assessment</div>
      <div className="pillar-list">
        {a.pillars.map((p) => (
          <div key={p.name}>
            <div className="pillar-row">
              <div className="pillar-name">{p.name}</div>
              <div className="pillar-bar"><div className="pillar-fill" style={{ width: `${(p.score / 5 * 100).toFixed(0)}%` }}></div></div>
              <div className="pillar-score">{p.score} / 5</div>
            </div>
            <div className="pillar-ins">{p.insight}</div>
          </div>
        ))}
      </div>
      <div className="two-col">
        <div className="audit-block"><div className="ab-title">Strengths</div><div className="ab-list">{(a.strengths || []).map((x, i) => <div className="ab-item" key={i}>{x}</div>)}</div></div>
        <div className="audit-block"><div className="ab-title">Gaps to Address</div><div className="ab-list">{(a.gaps || []).map((x, i) => <div className="ab-item" key={i}>{x}</div>)}</div></div>
      </div>
      <div className="dst" style={{ marginBottom: 16 }}>90-Day Recommended Actions</div>
      <div className="rec-list">
        {(a.rec_90 || []).map((rItem, i) => (
          <div className="rec-item" key={i}><div className="rec-n">0{i + 1}</div><div className="rec-t">{rItem}</div></div>
        ))}
      </div>
      <div className="mbox"><div className="mbox-lbl">Magsmen Engagement Opportunity</div><div className="mbox-txt">{a.magsmen_opportunity}</div></div>
      <div className="gov-box"><div className="gov-lbl">Government Readiness</div><div className="gov-txt">{a.govt_readiness}</div></div>
    </div>
  );
}

function ResPanel({ s, loading, runResNow }: ResPanelProps) {
  if (loading) {
    return (
      <div className="gen-loading">
        <div className="gen-spin"></div>
        <p>Running market intelligence research…<br />Approximately 15 seconds</p>
      </div>
    );
  }
  if (!s.research) {
    return (
      <div className="pending-state">
        <div className="pending-ico">○</div>
        <div className="pending-title">Market Research Not Generated</div>
        <div className="pending-sub">Generate market intelligence for this submission now.</div>
        <button className="btn-gen" onClick={runResNow}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Generate Market Research
        </button>
      </div>
    );
  }
  const rd = s.research;
  return (
    <div>
      <div className="opp-row">
        <div><span className="opp-num-big">{rd.opportunity_level}</span><span className="opp-denom"> / 10</span></div>
        <div className="opp-div"></div>
        <div className="opp-meta">
          <div className="opp-label">Opportunity Level</div>
          <div className="opp-rat">{rd.opportunity_rationale}</div>
          <div className="opp-meta-lbl">Market Size</div>
          <div className="opp-meta-val">{rd.market_size}</div>
        </div>
        <div className="opp-div"></div>
        <div className="opp-meta">
          <div className="opp-meta-lbl">Market Timing</div>
          <div className="opp-meta-val" style={{ fontSize: 13, fontWeight: 400, color: "var(--d-ink2)" }}>{rd.timing}</div>
        </div>
      </div>
      <div className="res-sec"><div className="res-sec-ttl">Sector Overview</div><div className="res-sec-txt">{rd.sector_overview}</div></div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
        <div className="res-sec" style={{ marginBottom: 0, paddingBottom: 0, border: "none" }}><div className="res-sec-ttl">Government Priorities</div><div className="res-sec-txt">{rd.govt_priorities}</div></div>
        <div className="res-sec" style={{ marginBottom: 0, paddingBottom: 0, border: "none" }}><div className="res-sec-ttl">Consumer Landscape</div><div className="res-sec-txt">{rd.consumer_landscape}</div></div>
      </div>
      <div className="res-sec"><div className="res-sec-ttl">Competitive Landscape</div><div className="res-sec-txt">{rd.competitive_landscape}</div></div>
      <div className="res-sec">
        <div className="res-sec-ttl">Key Intelligence Insights</div>
        <div className="ins-list">{(rd.key_insights || []).map((x, i) => <div className="ins-item" key={i}><div className="ins-n">0{i + 1}</div><div>{x}</div></div>)}</div>
      </div>
      <div className="res-sec">
        <div className="res-sec-ttl">Risk Factors</div>
        <div className="ins-list">{(rd.risks || []).map((x, i) => <div className="ins-item" key={i}><div className="ins-n" style={{ color: "var(--d-ink3)" }}>0{i + 1}</div><div>{x}</div></div>)}</div>
      </div>
      <div className="strat-block"><div className="strat-lbl">Magsmen Strategic Recommendation</div><div className="strat-txt">{rd.strategic_recommendation}</div></div>
    </div>
  );
}

/* ============================================================
   CSS — same tokens, colors, and layout rules as the original
   ============================================================ */
const CSS = `
:root {
  --ink:      #0C0C0B;
  --ink-2:    #3D3D3C;
  --ink-3:    #7A7A78;
  --ink-4:    #B0AFA9;
  --cream:    #F8F6F2;
  --paper:    #FCFBF9;
  --line:     #E4E0D8;
  --line-2:   #EDE9E3;
  --gold:     #B8924A;
  --gold-2:   #D4A95E;
  --header-bg:#100F0D;

  --d-bg:    #FFFFFF;
  --d-off:   #F7F7F5;
  --d-line:  #E8E8E5;
  --d-line2: #F0F0EE;
  --d-ink:   #0C0C0B;
  --d-ink2:  #4A4A48;
  --d-ink3:  #9A9A97;
  --d-sb:    #0C0C0B;

  --font-display:'Syne',sans-serif;
  --font-body:'DM Sans',sans-serif;
  --font-ops:'Outfit',sans-serif;
}

*,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
body { font-family:var(--font-body); color:var(--ink); background:var(--cream); -webkit-font-smoothing:antialiased; }

.site-hdr { background: var(--header-bg); min-height: 88vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 40px 60px 56px; position: relative; overflow: hidden; }
.hdr-top { position: absolute; top: 0; left: 0; right: 0; padding: 28px 60px; display: flex; align-items: center; justify-content: space-between; }
.hdr-org { font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.35); }
.hdr-date { font-size: 12px; color: rgba(255,255,255,.2); letter-spacing: 0.04em; }
.hdr-line { width: 1px; height: 120px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,.15), transparent); position: absolute; right: 60px; top: 50%; transform: translateY(-50%); }
.hdr-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
.hdr-title { font-family: var(--font-display); font-size: clamp(52px, 7vw, 96px); font-weight: 800; color: #FFFFFF; line-height: 1.0; letter-spacing: -0.03em; margin-bottom: 28px; }
.hdr-title em { font-style: italic; font-weight: 400; color: rgba(255,255,255,.4); }
.hdr-sub { font-size: 17px; font-weight: 300; color: rgba(255,255,255,.5); line-height: 1.65; max-width: 480px; margin-bottom: 40px; }
.hdr-meta { display: flex; align-items: center; gap: 0; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.08); }
.hdr-meta-item { font-size: 12px; color: rgba(255,255,255,.3); letter-spacing: 0.04em; padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,.1); }
.hdr-meta-item:last-child { border-right: none; }
.scroll-hint { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.2); display: flex; align-items: center; gap: 8px; margin-top: 40px; cursor: pointer; transition: color 0.2s; }
.scroll-hint:hover { color: rgba(255,255,255,.5); }
.scroll-hint::before { content: ''; display: block; width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,.3)); }

#vf { min-height: 100vh; }
.form-wrap { background: var(--paper); max-width: 820px; margin: 0 auto; padding: 0 40px 80px; }

.fsec { padding: 64px 0 0; position: relative; }
.fsec + .fsec { border-top: 1px solid var(--line-2); margin-top: 0; padding-top: 64px; }
.sec-hdr { display: flex; align-items: flex-start; gap: 24px; margin-bottom: 40px; }
.sec-num { font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.14em; color: var(--ink-4); text-transform: uppercase; padding-top: 3px; min-width: 32px; }
.sec-info h3 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--ink); margin-bottom: 4px; letter-spacing: -0.02em; }
.sec-info p { font-size: 13px; color: var(--ink-3); font-weight: 300; }

.fg { display: grid; gap: 24px; }
.fg.c2 { grid-template-columns: 1fr 1fr; }
.fg.c3 { grid-template-columns: 1fr 1fr 1fr; }
.ff { display: flex; flex-direction: column; gap: 8px; }
.ff.span2 { grid-column: 1 / -1; }

.lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
.lbl .r { color: #C04040; margin-left: 3px; }
.fi, .fsel, .fta { width: 100%; padding: 14px 0; border: none; border-bottom: 1.5px solid var(--line); background: transparent; font-family: var(--font-body); font-size: 15px; font-weight: 400; color: var(--ink); outline: none; transition: border-color 0.2s; border-radius: 0; min-height: 48px; }
.fi::placeholder, .fta::placeholder { color: var(--ink-4); font-weight: 300; }
.fi:focus, .fsel:focus, .fta:focus { border-bottom-color: var(--ink); }
.fi.err, .fsel.err, .fta.err { border-bottom-color: #C04040; }
.fsel { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23B0AFA9' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0 center; padding-right: 28px; cursor: pointer; }
.fta { resize: none; min-height: 100px; line-height: 1.7; padding: 14px 0; }
.fhint { font-size: 12px; color: var(--ink-4); line-height: 1.5; font-weight: 300; }
.ferr { font-size: 11px; color: #C04040; display: none; font-weight: 500; letter-spacing: 0.02em; }
.ferr.on { display: block; }

.char-row { display: flex; justify-content: space-between; align-items: center; }
.char-ct { font-size: 11px; color: var(--ink-4); }

.cbg { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
.cbi { display: flex; align-items: flex-start; gap: 10px; padding: 14px; border: 1px solid var(--line); cursor: pointer; transition: border-color 0.15s, background 0.15s; user-select: none; }
.cbi:hover { border-color: var(--ink-3); }
.cbi:has(input:checked) { border-color: var(--ink); background: rgba(12,12,11,.03); }
.cbi input { width: 15px; height: 15px; margin-top: 1px; accent-color: var(--ink); flex-shrink: 0; cursor: pointer; }
.cbl { font-size: 13px; color: var(--ink-2); font-weight: 400; line-height: 1.4; }
.cbi:has(input:checked) .cbl { color: var(--ink); font-weight: 500; }

.upzone { border: 1.5px dashed var(--line); padding: 48px 40px; text-align: center; cursor: pointer; position: relative; transition: border-color 0.2s, background 0.2s; background: var(--cream); }
.upzone:hover, .upzone.drag { border-color: var(--ink-2); background: var(--paper); }
.upzone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; z-index: 2; }
.up-arrow { font-size: 28px; color: var(--ink-3); margin-bottom: 12px; display: block; transition: transform 0.2s; }
.upzone:hover .up-arrow { transform: translateY(-4px); }
.up-title { font-family: var(--font-display); font-size: 17px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
.up-types { font-size: 13px; color: var(--ink-3); font-weight: 300; margin-bottom: 4px; }
.up-note { font-size: 11px; color: var(--ink-4); margin-top: 8px; }

.file-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.fchip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--paper); border: 1px solid var(--line); font-size: 12px; font-weight: 500; color: var(--ink-2); max-width: 200px; }
.fchip-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.fchip-rm { color: var(--ink-4); cursor: pointer; font-size: 14px; line-height: 1; flex-shrink: 0; transition: color 0.15s; background: none; border: none; font-family: var(--font-body); }
.fchip-rm:hover { color: var(--ink); }
.fchip-type { font-size: 9px; font-weight: 700; letter-spacing: 0.06em; color: var(--gold); text-transform: uppercase; flex-shrink: 0; }

.submit-row { padding: 56px 0 0; border-top: 1px solid var(--line-2); margin-top: 56px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.submit-note { font-size: 13px; color: var(--ink-3); font-weight: 300; line-height: 1.6; max-width: 380px; }
.btn-submit { display: inline-flex; align-items: center; gap: 12px; background: var(--ink); color: #FFFFFF; border: none; padding: 18px 40px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.04em; cursor: pointer; transition: all 0.2s; white-space: nowrap; min-height: 56px; }
.btn-submit:hover { background: var(--ink-2); transform: translateY(-1px); }
.btn-submit:active { transform: translateY(0); }
.btn-submit svg { width: 16px; height: 16px; }

.about-sec { background: var(--header-bg); padding: 80px 60px; position: relative; }
.about-top { display: flex; align-items: center; gap: 16px; margin-bottom: 56px; }
.about-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
.about-line-h { flex: 1; height: 1px; background: rgba(255,255,255,.1); }
.about-heading { font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 48px; }
.about-heading span { color: rgba(255,255,255,.3); font-weight: 400; }
.about-grid { display: grid; grid-template-columns: 1fr 1px 1fr; gap: 48px; margin-bottom: 64px; }
.about-divider { background: rgba(255,255,255,.08); }
.about-col-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
.about-col p { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.55); line-height: 1.75; margin-bottom: 20px; }
.about-link { font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; text-decoration: none; letter-spacing: 0.04em; display: inline-flex; align-items: center; gap: 8px; transition: gap 0.2s; }
.about-link:hover { gap: 14px; }
.about-footer { padding-top: 32px; border-top: 1px solid rgba(255,255,255,.07); display: flex; align-items: center; justify-content: space-between; }
.about-copy { font-size: 12px; color: rgba(255,255,255,.2); }
.mgmt-link { font-size: 11px; color: rgba(255,255,255,.15); cursor: pointer; letter-spacing: 0.06em; transition: color 0.2s; }
.mgmt-link:hover { color: rgba(255,255,255,.4); }

#vt { min-height: 100vh; background: var(--header-bg); display: flex; align-items: center; justify-content: center; padding: 60px 40px; }
.ty-wrap { max-width: 500px; width: 100%; }
.ty-mark { width: 60px; height: 60px; border: 1.5px solid rgba(255,255,255,.2); display: flex; align-items: center; justify-content: center; margin-bottom: 32px; }
.ty-mark svg { width: 24px; height: 24px; color: #fff; }
.ty-kicker { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
.ty-title { font-family: var(--font-display); font-size: 36px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 16px; }
.ty-sub { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.45); line-height: 1.7; margin-bottom: 40px; }
.ty-ref { padding: 20px 24px; border: 1px solid rgba(255,255,255,.1); margin-bottom: 40px; }
.ty-ref-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: 6px; }
.ty-ref-val { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--gold); letter-spacing: 0.06em; }
.ty-steps { display: flex; flex-direction: column; gap: 16px; }
.ty-step { display: flex; align-items: flex-start; gap: 16px; }
.ty-sn { width: 24px; height: 24px; border: 1px solid rgba(255,255,255,.15); font-size: 11px; font-weight: 600; color: rgba(255,255,255,.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.ty-st { font-size: 13px; color: rgba(255,255,255,.4); font-weight: 300; line-height: 1.6; }
.ty-st strong { color: rgba(255,255,255,.7); font-weight: 500; display: block; margin-bottom: 2px; }

#vl { min-height: 100vh; background: var(--d-ink); display: flex; align-items: center; justify-content: center; padding: 40px; }
.log-wrap { display: grid; grid-template-columns: 1fr 1fr; max-width: 800px; width: 100%; min-height: 480px; border: 1px solid rgba(255,255,255,.08); }
.log-left { background: #1A1A18; padding: 60px; display: flex; flex-direction: column; justify-content: flex-end; }
.log-mark { font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: auto; padding-top: 0; }
.log-left h2 { font-family: var(--font-display); font-size: 32px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 12px; line-height: 1.15; }
.log-left p { font-size: 14px; font-weight: 300; color: rgba(255,255,255,.4); line-height: 1.6; }
.log-right { background: #FFFFFF; padding: 60px; display: flex; flex-direction: column; justify-content: center; gap: 0; }
.log-f { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.log-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #888; }
.log-i { width: 100%; padding: 14px 0; border: none; border-bottom: 1.5px solid #E8E8E5; font-family: var(--font-body); font-size: 15px; color: #0C0C0B; outline: none; background: transparent; transition: border-color 0.2s; min-height: 48px; }
.log-i:focus { border-bottom-color: #0C0C0B; }
.log-i::placeholder { color: #C0C0BC; }
.btn-log { width: 100%; padding: 16px; background: #0C0C0B; color: #FFFFFF; border: none; font-family: var(--font-display); font-size: 13px; font-weight: 700; letter-spacing: 0.06em; cursor: pointer; transition: background 0.2s; margin-top: 8px; min-height: 52px; }
.btn-log:hover { background: #2A2A28; }
.log-err { font-size: 12px; color: #C04040; margin-top: 12px; display: none; }
.log-err.on { display: block; }
.log-back { font-size: 12px; color: #B0B0AC; margin-top: 20px; cursor: pointer; transition: color 0.15s; }
.log-back:hover { color: #0C0C0B; }

#vd { min-height: 100vh; background: var(--d-bg); display: flex; font-family: var(--font-ops); }
.msb { width: 220px; flex-shrink: 0; background: var(--d-sb); display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; }
.msb-hdr { padding: 32px 24px; border-bottom: 1px solid rgba(255,255,255,.06); }
.msb-brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.02em; }
.msb-sub { font-size: 11px; color: rgba(255,255,255,.3); margin-top: 3px; }
.msb-tag { margin-top: 10px; display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.1); padding: 3px 8px; }
.mnav { flex: 1; padding: 20px 12px; }
.nsl { font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,.2); padding: 12px 12px 8px; }
.ni { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; color: rgba(255,255,255,.4); font-size: 13px; font-weight: 400; transition: all 0.15s; border-left: 2px solid transparent; margin-bottom: 1px; user-select: none; }
.ni:hover { color: rgba(255,255,255,.8); }
.ni.on { color: #FFFFFF; border-left-color: #FFFFFF; padding-left: 14px; }
.ni svg { width: 15px; height: 15px; flex-shrink: 0; }
.nbdg { margin-left: auto; font-size: 11px; font-weight: 700; color: rgba(255,255,255,.3); font-variant-numeric: tabular-nums; }
.msb-ft { padding: 16px 12px; border-top: 1px solid rgba(255,255,255,.06); }
.btn-out { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; color: rgba(255,255,255,.3); font-size: 12px; transition: color 0.15s; background: none; border: none; font-family: var(--font-ops); width: 100%; }
.btn-out:hover { color: rgba(255,255,255,.7); }
.btn-out svg { width: 14px; height: 14px; }

.mmain { flex: 1; margin-left: 220px; display: flex; flex-direction: column; }
.mtop { background: #FFFFFF; border-bottom: 1px solid var(--d-line); padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; flex-shrink: 0; }
.mpgt { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.01em; }
.btn-exp { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: 1.5px solid var(--d-line); border-radius: 0; background: white; color: var(--d-ink2); font-family: var(--font-ops); font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; letter-spacing: 0.04em; }
.btn-exp:hover { border-color: var(--d-ink); color: var(--d-ink); }
.btn-exp svg { width: 13px; height: 13px; }

.mcont { flex: 1; overflow-y: auto; }
.apanel { display: none; }
.apanel.on { display: block; }

.stat-strip { display: flex; border-bottom: 1px solid var(--d-line); }
.stat-item { flex: 1; padding: 32px 40px; border-right: 1px solid var(--d-line); }
.stat-item:last-child { border-right: none; }
.stat-n { font-family: var(--font-display); font-size: 48px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px; font-variant-numeric: tabular-nums; }
.stat-l { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--d-ink3); }

.pcont { padding: 40px; }

.bk-title { font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.01em; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
.bk-title::after { content: ''; flex: 1; height: 1px; background: var(--d-line); }
.bars { display: flex; flex-direction: column; gap: 14px; }
.bri { display: flex; align-items: center; gap: 16px; }
.brn { font-size: 12px; color: var(--d-ink2); width: 200px; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.brtr { flex: 1; height: 3px; background: var(--d-line); }
.brfl { height: 100%; background: var(--d-ink); transition: width .6s ease; }
.brct { font-size: 12px; font-weight: 700; color: var(--d-ink); width: 24px; text-align: right; font-variant-numeric: tabular-nums; }

.tbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
.tsr { position: relative; flex: 1; max-width: 300px; }
.tsr svg { position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--d-ink3); }
.tsri { width: 100%; padding: 10px 0 10px 22px; border: none; border-bottom: 1px solid var(--d-line); font-family: var(--font-ops); font-size: 13px; color: var(--d-ink); outline: none; background: transparent; transition: border-color .15s; }
.tsri:focus { border-bottom-color: var(--d-ink); }
.tsri::placeholder { color: var(--d-ink3); }
.tfilts { display: flex; gap: 8px; }
.tfs { padding: 8px 28px 8px 0; border: none; border-bottom: 1px solid var(--d-line); font-family: var(--font-ops); font-size: 12px; color: var(--d-ink2); outline: none; cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239A9A97' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 4px center; background-color: transparent; min-height: 36px; }
.tfs:focus { border-bottom-color: var(--d-ink); }
table { width: 100%; border-collapse: collapse; }
th { padding: 12px 16px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); border-bottom: 1.5px solid var(--d-ink); white-space: nowrap; }
td { padding: 16px; font-size: 13px; color: var(--d-ink2); border-bottom: 1px solid var(--d-line2); vertical-align: middle; }
tbody tr { cursor: pointer; transition: background 0.1s; }
tbody tr:hover td { background: var(--d-off); }
tbody tr:hover td:first-child { border-left: 2px solid var(--d-ink); padding-left: 14px; }
.td-name { font-weight: 600; color: var(--d-ink); font-size: 13px; }
.td-desig { font-size: 11px; color: var(--d-ink3); margin-top: 2px; }
.td-title { font-weight: 500; color: var(--d-ink); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.td-org { max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tag { display: inline-block; padding: 3px 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; }
.tag.sec { background: rgba(0,0,0,.05); color: var(--d-ink2); }
.tag.ok { background: #0C0C0B; color: #FFFFFF; }
.tag.pd { border: 1px solid var(--d-line); color: var(--d-ink3); }
.tag.dept { border: 1px dashed var(--d-line); color: var(--d-ink3); font-size: 9px; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.btn-vw { padding: 6px 14px; border: 1.5px solid var(--d-ink); color: var(--d-ink); font-family: var(--font-ops); font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s; background: transparent; letter-spacing: 0.06em; white-space: nowrap; text-transform: uppercase; }
.btn-vw:hover { background: var(--d-ink); color: #FFFFFF; }
.te { text-align: center; padding: 64px 24px; }
.te-ico { font-size: 32px; margin-bottom: 12px; opacity: .15; }
.te p { font-size: 13px; color: var(--d-ink3); }

#modal { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 500; display: flex; align-items: flex-start; justify-content: center; padding: 40px 20px; overflow-y: auto; backdrop-filter: blur(2px); }
.mc { background: #FFFFFF; width: 100%; max-width: 1040px; border-top: 3px solid var(--d-ink); box-shadow: 0 32px 80px rgba(0,0,0,.25); margin: auto; position: relative; }
.mc-hdr { display: flex; align-items: flex-start; justify-content: space-between; padding: 32px 40px; border-bottom: 1px solid var(--d-line); }
.mc-ttl { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.02em; margin-bottom: 4px; }
.mc-sub { font-size: 13px; color: var(--d-ink3); }
.mc-cls { width: 36px; height: 36px; border: 1.5px solid var(--d-line); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--d-ink3); transition: all .15s; flex-shrink: 0; }
.mc-cls:hover { border-color: var(--d-ink); color: var(--d-ink); }
.mc-cls svg { width: 16px; height: 16px; }

.mtabs { display: flex; padding: 0 40px; border-bottom: 1px solid var(--d-line); gap: 0; }
.mtab { padding: 14px 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: var(--d-ink3); cursor: pointer; border-bottom: 2px solid transparent; transition: all .15s; user-select: none; display: flex; align-items: center; gap: 6px; text-transform: uppercase; }
.mtab:hover { color: var(--d-ink2); }
.mtab.on { color: var(--d-ink); border-bottom-color: var(--d-ink); }
.tp { font-size: 9px; padding: 2px 6px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
.tp.ok { background: #0C0C0B; color: #FFF; }
.tp.pd { border: 1px solid var(--d-line); color: var(--d-ink3); }
.mpanel { display: none; padding: 40px; }
.mpanel.on { display: block; }

.ds { margin-bottom: 32px; }
.dst { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--d-line); }
.dg { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 16px; }
.dg.c2 { grid-template-columns: 1fr 1fr; }
.dl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 4px; }
.dv { font-size: 14px; font-weight: 400; color: var(--d-ink); line-height: 1.5; }
.dv.sm { font-size: 13px; color: var(--d-ink2); line-height: 1.7; }
.stags { display: flex; flex-wrap: wrap; gap: 6px; }
.stag { padding: 4px 10px; border: 1px solid var(--d-line); font-size: 11px; color: var(--d-ink2); font-weight: 500; }
.files-list { display: flex; flex-direction: column; gap: 6px; }
.f-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--d-line2); }
.f-item:last-child { border-bottom: none; }
.f-ext { font-size: 9px; font-weight: 700; letter-spacing: 0.08em; background: var(--d-off); padding: 4px 7px; color: var(--d-ink3); min-width: 36px; text-align: center; }
.f-nm { font-size: 13px; color: var(--d-ink2); }
.f-sz { font-size: 11px; color: var(--d-ink3); margin-left: auto; }

.nvbi-block { display: flex; align-items: flex-start; gap: 40px; padding: 32px 0; border-bottom: 1px solid var(--d-line); margin-bottom: 32px; }
.nvbi-score-num { font-family: var(--font-display); font-size: 80px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.05em; line-height: 1; font-variant-numeric: tabular-nums; }
.nvbi-score-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--d-ink3); margin-top: 4px; }
.nvbi-div { width: 1px; background: var(--d-line); align-self: stretch; flex-shrink: 0; }
.nvbi-exec { flex: 1; }
.nvbi-exec-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 12px; }
.nvbi-exec-txt { font-size: 14px; color: var(--d-ink2); line-height: 1.7; font-weight: 300; }
.nvbi-state { font-size: 24px; font-weight: 700; color: var(--d-ink); margin-bottom: 12px; font-family: var(--font-display); }

.pillar-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
.pillar-row { display: flex; align-items: center; gap: 16px; }
.pillar-name { font-size: 12px; font-weight: 600; color: var(--d-ink2); width: 110px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.04em; }
.pillar-bar { flex: 1; height: 3px; background: var(--d-line); }
.pillar-fill { height: 100%; background: var(--d-ink); transition: width .8s ease; }
.pillar-score { font-size: 12px; font-weight: 700; color: var(--d-ink); width: 36px; text-align: right; font-variant-numeric: tabular-nums; }
.pillar-ins { font-size: 12px; color: var(--d-ink3); line-height: 1.5; margin-top: 4px; padding-left: 126px; }

.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 32px; }
.ab-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid var(--d-line); }
.ab-list { display: flex; flex-direction: column; gap: 10px; }
.ab-item { font-size: 13px; color: var(--d-ink2); line-height: 1.55; padding-left: 14px; position: relative; }
.ab-item::before { content: '—'; position: absolute; left: 0; color: var(--d-ink3); font-size: 11px; }

.rec-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
.rec-item { display: flex; align-items: flex-start; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--d-line2); }
.rec-n { font-family: var(--font-display); font-size: 11px; font-weight: 800; color: var(--d-ink3); min-width: 20px; margin-top: 1px; }
.rec-t { font-size: 13px; color: var(--d-ink2); line-height: 1.6; }

.mbox { border-left: 3px solid var(--d-ink); padding: 20px 24px; background: var(--d-off); margin-bottom: 32px; }
.mbox-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
.mbox-txt { font-size: 14px; color: var(--d-ink); line-height: 1.65; font-weight: 400; }

.gov-box { padding: 20px 0; border-top: 1px solid var(--d-line); }
.gov-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
.gov-txt { font-size: 13px; color: var(--d-ink2); line-height: 1.65; font-weight: 300; }

.pending-state { padding: 64px 0; text-align: center; }
.pending-ico { font-size: 28px; margin-bottom: 16px; opacity: .15; }
.pending-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--d-ink); margin-bottom: 8px; }
.pending-sub { font-size: 13px; color: var(--d-ink3); margin-bottom: 24px; font-weight: 300; }
.btn-gen { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: transparent; border: 1.5px solid var(--d-ink); font-family: var(--font-ops); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--d-ink); cursor: pointer; transition: all .15s; }
.btn-gen:hover { background: var(--d-ink); color: #FFFFFF; }
.btn-gen svg { width: 15px; height: 15px; }
.gen-loading { display: flex; flex-direction: column; align-items: center; padding: 64px 0; gap: 16px; }
.gen-spin { width: 28px; height: 28px; border: 2px solid var(--d-line); border-top-color: var(--d-ink); border-radius: 50%; animation: spin .8s linear infinite; }
.gen-loading p { font-size: 13px; color: var(--d-ink3); }

.opp-row { display: flex; align-items: center; gap: 40px; padding: 32px 0; border-bottom: 1px solid var(--d-line); margin-bottom: 32px; }
.opp-num-big { font-family: var(--font-display); font-size: 64px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.04em; line-height: 1; }
.opp-denom { font-size: 24px; font-weight: 300; color: var(--d-ink3); }
.opp-label { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--d-ink); margin-bottom: 6px; }
.opp-rat { font-size: 13px; color: var(--d-ink3); line-height: 1.5; font-weight: 300; max-width: 300px; }
.opp-div { width: 1px; background: var(--d-line); align-self: stretch; }
.opp-meta-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 4px; margin-top: 12px; }
.opp-meta-val { font-size: 14px; color: var(--d-ink); font-weight: 500; }
.res-sec { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--d-line2); }
.res-sec:last-child { border-bottom: none; }
.res-sec-ttl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
.res-sec-txt { font-size: 13px; color: var(--d-ink2); line-height: 1.7; font-weight: 300; }
.ins-list { display: flex; flex-direction: column; gap: 10px; }
.ins-item { display: flex; align-items: flex-start; gap: 14px; font-size: 13px; color: var(--d-ink2); line-height: 1.55; }
.ins-n { font-size: 11px; font-weight: 800; color: var(--d-ink3); min-width: 16px; margin-top: 1px; font-family: var(--font-display); }
.strat-block { border-top: 2px solid var(--d-ink); padding-top: 24px; margin-top: 32px; }
.strat-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 10px; }
.strat-txt { font-family: var(--font-display); font-size: 18px; font-weight: 600; color: var(--d-ink); line-height: 1.4; letter-spacing: -0.01em; }

#proc { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 999; backdrop-filter: blur(3px); }
.pcard { background: #FFFFFF; padding: 48px; max-width: 360px; width: 90%; text-align: center; }
.p-spin { width: 40px; height: 40px; border: 2.5px solid #E8E8E5; border-top-color: #0C0C0B; border-radius: 50%; animation: spin .8s linear infinite; margin: 0 auto 24px; }
.pcard h3 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: #0C0C0B; margin-bottom: 8px; }
.pcard p { font-size: 13px; color: #9A9A97; line-height: 1.6; font-weight: 300; }

.tc { position: fixed; bottom: 24px; right: 24px; z-index: 2000; display: flex; flex-direction: column; gap: 8px; }
.toast { padding: 14px 20px; font-family: var(--font-ops); font-size: 13px; font-weight: 500; animation: slideIn .25s ease; max-width: 320px; }
.toast.ok { background: #0C0C0B; color: #FFFFFF; }
.toast.er { background: #C04040; color: #FFFFFF; }
.toast.in { background: #3A3A38; color: #FFFFFF; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: none; opacity: 1; } }

@media (max-width: 768px) {
  .site-hdr { padding: 24px; min-height: 70vh; }
  .hdr-top { padding: 20px 24px; }
  .form-wrap { padding: 0 24px 60px; }
  .about-sec { padding: 60px 24px; }
  .about-grid { grid-template-columns: 1fr; }
  .about-divider { display: none; }
  .fg.c2, .fg.c3, .cbg { grid-template-columns: 1fr; }
  .submit-row { flex-direction: column; align-items: flex-start; }
  .btn-submit { width: 100%; justify-content: center; }
  .log-wrap { grid-template-columns: 1fr; }
  .log-left { min-height: 200px; padding: 40px; }
  .msb { display: none; } .mmain { margin-left: 0; }
  .stat-strip { flex-wrap: wrap; }
  .stat-item { min-width: 50%; }
  .dg, .two-col { grid-template-columns: 1fr; }
  .nvbi-block { flex-direction: column; }
}
`;










// import React, { useState, useRef, useEffect, useMemo } from "react";
// import emailjs from '@emailjs/browser';

// /* ============================================================
//    CONFIG — fill these in with real values before going live
//    ============================================================ */
// const CFG = {
//   EJS_KEY: "-ePIcI6qQCURx5hAM",
//   EJS_SVC: "service_9gmlg2q",
//   EJS_TSUB: "template_p0q050i",
//   TO_A: "sandeep@magsmen.com",
//   TO_B: "ganesh.k@magsmen.com",
//   TO_C: "connect@magsmen.com",
//   CLAUDE: "YOUR_CLAUDE_API_KEY",
//   MUSER: "magsmen",
//   MPASS: "Magsmen@APNRT2025",
// };

// /* ============================================================
//    STATIC OPTIONS (unchanged content from the original markup)
//    ============================================================ */
// const SECTORS = [
//   "Agriculture & Food Processing", "Aquaculture & Fisheries", "Manufacturing & Industrial",
//   "IT & Technology", "Healthcare & Pharmaceuticals", "Infrastructure & Real Estate",
//   "Tourism & Hospitality", "Education & Skill Development", "Energy & Renewables",
//   "Retail & Consumer Goods", "Logistics & Supply Chain", "Finance & Fintech",
//   "Media & Entertainment", "Defence & Aerospace", "Other",
// ];
// const STAGES = [
//   "Ideation — Concept Stage", "Feasibility Study Complete", "Business Plan Ready",
//   "Pilot / Proof of Concept", "Revenue Stage — Scale Required", "Expansion Stage",
// ];
// const INVESTMENTS = [
//   "Under ₹1 Crore", "₹1 Crore – ₹5 Crore", "₹5 Crore – ₹25 Crore",
//   "₹25 Crore – ₹100 Crore", "₹100 Crore – ₹500 Crore", "Above ₹500 Crore",
// ];
// const DEPARTMENTS = [
//   "Department of Industries & Commerce", "Department of Information Technology & Electronics",
//   "Department of Agriculture & Allied Sciences", "Department of Health, Medical & Family Welfare",
//   "Department of Tourism", "Department of Infrastructure & Investment", "Department of Education",
//   "Department of Energy, Infrastructure & Investments", "Department of Water Resources",
//   "Department of Transport, Roads & Buildings", "Department of Municipal Administration & Urban Development",
//   "Department of Finance", "Department of Skill Development & Training", "Department of Fisheries",
//   "Department of Housing", "Department of Food & Civil Supplies",
//   "Department of Environment, Forests & Science", "Multiple Departments", "Not Sure — Require Guidance",
// ];
// const SUPPORT_TYPES = [
//   "Government Policy Support", "Land Allocation", "Financial Support / Grants",
//   "Regulatory Clearances", "Public-Private Partnership", "Market Access & Linkages",
//   "Export Support", "Skill Development Support", "Technology Transfer",
//   "Incubation / Startup Support", "Brand & Market Development", "Other",
// ] as const;
// type SupportType = typeof SUPPORT_TYPES[number];
// const SUPPORT_LABELS: Partial<Record<SupportType, string>> = {
//   "Public-Private Partnership": "PPP",
//   "Market Access & Linkages": "Market Access",
//   "Brand & Market Development": "Brand & Market Dev",
// };

// /* ============================================================
//    HELPERS
//    ============================================================ */
// interface SubmissionFile {
//   name: string;
//   size: number;
//   type: string;
// }

// type ToastType = "in" | "ok" | "er";

// interface Toast {
//   id: number;
//   msg: string;
//   type: ToastType;
// }

// interface FormErrors {
//   [key: string]: boolean;
// }

// type ValidationFieldId = "n" | "d" | "o" | "e" | "p" | "t" | "sec" | "st" | "sum" | "dpt";

// interface ValidationCheck {
//   id: ValidationFieldId;
//   fn: (v: string) => boolean;
// }

// type InputFieldRef = React.MutableRefObject<HTMLInputElement | null>;
// type SelectFieldRef = React.MutableRefObject<HTMLSelectElement | null>;
// type TextAreaFieldRef = React.MutableRefObject<HTMLTextAreaElement | null>;

// type FieldRef = InputFieldRef | SelectFieldRef | TextAreaFieldRef;

// type ValidationRefMap = Record<ValidationFieldId, FieldRef>;

// interface AuditPillar {
//   name: string;
//   score: number;
//   weight: number;
//   insight: string;
// }

// interface AuditResult {
//   nvbi: number;
//   nvbi_label: string;
//   exec_summary: string;
//   govt_readiness: string;
//   pillars: AuditPillar[];
//   strengths: string[];
//   gaps: string[];
//   rec_90: string[];
//   magsmen_opportunity: string;
// }

// interface ResearchResult {
//   opportunity_level: number;
//   opportunity_rationale: string;
//   market_size: string;
//   sector_overview: string;
//   govt_priorities: string;
//   consumer_landscape: string;
//   competitive_landscape: string;
//   timing: string;
//   key_insights: string[];
//   risks: string[];
//   strategic_recommendation: string;
// }

// interface EmailSendPayload {
//   to_email: string;
//   subject: string;
//   content: string;
//   ref: string;
// }

// type BarField = "sector" | "dept";

// interface Stats {
//   total: number;
//   audits: number;
//   sectors: number;
//   week: number;
// }

// interface Submission {
//   id: string;
//   ts: string;
//   name: string;
//   desig: string;
//   org: string;
//   email: string;
//   phone: string;
//   city: string;
//   title: string;
//   sector: string;
//   stage: string;
//   invest: string;
//   summary: string;
//   dept: string;
//   support: string[];
//   web: string;
//   li: string;
//   notes: string;
//   files: SubmissionFile[];
//   audit: AuditResult | null;
//   research: ResearchResult | null;
// }

// type SubmissionPatch = Partial<Submission>;

// interface AuditPanelProps {
//   s: Submission;
//   loading: boolean;
//   runAuditNow: () => void;
// }

// interface ResPanelProps {
//   s: Submission;
//   loading: boolean;
//   runResNow: () => void;
// }

// type ViewMode = "vf" | "vt" | "vl" | "vd";
// type DashPanel = "ov" | "all" | "sec" | "dpt";
// type ModalTab = "sub" | "aud" | "res";

// interface FormRefs {
//   fn: InputFieldRef;
//   fd: InputFieldRef;
//   fo: InputFieldRef;
//   fe: InputFieldRef;
//   fp: InputFieldRef;
//   fc: InputFieldRef;
//   ft: InputFieldRef;
//   fsec: SelectFieldRef;
//   fst: SelectFieldRef;
//   finv: SelectFieldRef;
//   fsum: TextAreaFieldRef;
//   fdpt: SelectFieldRef;
//   fweb: InputFieldRef;
//   fli: InputFieldRef;
//   fnotes: TextAreaFieldRef;
//   lu: InputFieldRef;
//   lp: InputFieldRef;
// }

// function fmtSize(b: number): string {
//   return b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : (b / 1024).toFixed(0) + " KB";
// }
// function getExt(name: string): string {
//   return ((name || "").split(".").pop() || "").toUpperCase().slice(0, 4);
// }
// function fmtDateShort(ts: string | number | Date): string {
//   return new Date(ts).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "2-digit" });
// }
// function fmtDateLong(ts: string | number | Date): string {
//   return new Date(ts).toLocaleString("en-IN", {
//     day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
//   });
// }

// /* ============================================================
//    MAIN COMPONENT
//    ============================================================ */
// export default function APNRTPortal() {
//   /* view: 'vf' (form) | 'vt' (thank you) | 'vl' (login) | 'vd' (dashboard) */
//   const [view, setView] = useState<ViewMode>("vf");

//   /* In-memory store, replacing the original localStorage-backed DB
//      (browser storage APIs are unavailable in this environment). */
//   const [subs, setSubs] = useState<Submission[]>([]);

//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const [dragOver, setDragOver] = useState<boolean>(false);
//   const [charCount, setCharCount] = useState<number>(0);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [supportChecked, setSupportChecked] = useState<string[]>([]);
//   const [isProcessing, setIsProcessing] = useState<boolean>(false);
//   const [submissionId, setSubmissionId] = useState<string>("APNRT-2025-0001");
//   const [toasts, setToasts] = useState<Toast[]>([]);

//   const [loginErr, setLoginErr] = useState<boolean>(false);
//   const [authed, setAuthed] = useState<boolean>(false);

//   const [dashPanel, setDashPanel] = useState<DashPanel>("ov");
//   const [tsrch, setTsrch] = useState<string>("");
//   const [ffs, setFfs] = useState<string>("");
//   const [ffd, setFfd] = useState<string>("");

//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [curSubId, setCurSubId] = useState<string | null>(null);
//   const [modalTab, setModalTab] = useState<ModalTab>("sub");
//   const [auditLoading, setAuditLoading] = useState<boolean>(false);
//   const [resLoading, setResLoading] = useState<boolean>(false);

//   const formRef = useRef<HTMLFormElement | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const upzoneRef = useRef<HTMLDivElement | null>(null);
//   const hdrDateRef = useRef<HTMLDivElement | null>(null);

//   const r: FormRefs = {
//     fn: useRef<HTMLInputElement>(null), fd: useRef<HTMLInputElement>(null), fo: useRef<HTMLInputElement>(null), fe: useRef<HTMLInputElement>(null), fp: useRef<HTMLInputElement>(null), fc: useRef<HTMLInputElement>(null),
//     ft: useRef<HTMLInputElement>(null), fsec: useRef<HTMLSelectElement>(null), fst: useRef<HTMLSelectElement>(null), finv: useRef<HTMLSelectElement>(null), fsum: useRef<HTMLTextAreaElement>(null),
//     fdpt: useRef<HTMLSelectElement>(null), fweb: useRef<HTMLInputElement>(null), fli: useRef<HTMLInputElement>(null), fnotes: useRef<HTMLTextAreaElement>(null),
//     lu: useRef<HTMLInputElement>(null), lp: useRef<HTMLInputElement>(null),
//   };

//   /* Load EmailJS SDK the same way the original CDN <script> tag did */
//   useEffect(() => {
//     if ((window as any).emailjs) return;
//     const s = document.createElement("script");
//     s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
//     s.async = true;
//     document.body.appendChild(s);
//   }, []);

//   /* Header date, same formatting as original */
//   const hdrDate = useMemo(
//     () => new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" }),
//     []
//   );

//   useEffect(() => {
//     document.body.style.background =
//       view === "vl" || view === "vt" ? "var(--header-bg)" : view === "vd" ? "#FFF" : "var(--cream)";
//   }, [view]);

//   /* ============================================================
//      TOASTS
//      ============================================================ */
//   function toast(msg: string, type: ToastType = "in", dur: number = 4000): void {
//     const id = Date.now() + Math.random();
//     setToasts((t) => [...t, { id, msg, type }]);
//     setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), dur);
//   }

//   /* ============================================================
//      FILE UPLOAD
//      ============================================================ */
//   function addFiles(files: File[]): void {
//     setSelectedFiles((prev) => {
//       const next = [...prev];
//       files.forEach((f) => {
//         if (!next.find((x) => x.name === f.name && x.size === f.size)) next.push(f);
//       });
//       return next;
//     });
//     setErrors((e) => ({ ...e, efiles: false }));
//   }

//   function removeFile(i: number): void {
//     setSelectedFiles((prev) => prev.filter((_, idx) => idx !== i));
//   }

//   function onFileInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
//     addFiles(Array.from(e.target.files || []));
//     e.target.value = "";
//   }

//   function onDrop(e: React.DragEvent<HTMLDivElement>): void {
//     e.preventDefault();
//     setDragOver(false);
//     addFiles(Array.from(e.dataTransfer.files));
//   }

//   function updateChar(e: React.ChangeEvent<HTMLTextAreaElement>): void {
//     const n = e.target.value.trim().length;
//     setCharCount(n);
//     if (n >= 150) setErrors((er) => ({ ...er, esum: false }));
//   }

//   function toggleSupport(val: string): void {
//     setSupportChecked((prev) => {
//       const next = prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val];
//       if (next.length > 0) setErrors((e) => ({ ...e, esup: false }));
//       return next;
//     });
//   }

//   /* ============================================================
//      VALIDATION
//      ============================================================ */
//   function gv(ref: FieldRef): string {
//     return ref.current ? ref.current.value.trim() : "";
//   }

//   function validate(): boolean {
//     const checks: ValidationCheck[] = [
//       { id: "n", fn: (v: string) => v.length > 1 },
//       { id: "d", fn: (v: string) => v.length > 1 },
//       { id: "o", fn: (v: string) => v.length > 1 },
//       { id: "e", fn: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
//       { id: "p", fn: (v: string) => v.length > 6 },
//       { id: "t", fn: (v: string) => v.length > 3 },
//       { id: "sec", fn: (v: string) => v !== "" },
//       { id: "st", fn: (v: string) => v !== "" },
//       { id: "sum", fn: (v: string) => v.length >= 150 },
//       { id: "dpt", fn: (v: string) => v !== "" },
//     ];
//     const refMap: ValidationRefMap = {
//       n: r.fn, d: r.fd, o: r.fo, e: r.fe, p: r.fp, t: r.ft,
//       sec: r.fsec, st: r.fst, sum: r.fsum, dpt: r.fdpt,
//     };
//     const newErrors: FormErrors = {};
//     let ok = true;
//     checks.forEach(({ id, fn }) => {
//       const bad: boolean = !fn(gv(refMap[id]));
//       newErrors["e" + id] = bad;
//       if (bad) ok = false;
//     });
//     if (supportChecked.length === 0) {
//       newErrors.esup = true;
//       ok = false;
//     }
//     if (selectedFiles.length === 0) {
//       newErrors.efiles = true;
//       ok = false;
//     }
//     setErrors(newErrors);
//     return ok;
//   }

//   /* ============================================================
//      AI GENERATION (unchanged prompts / endpoint)
//      ============================================================ */
//   async function genAudit(s: Submission): Promise<AuditResult | null> {
//     if (!CFG.CLAUDE || CFG.CLAUDE.startsWith("YOUR")) return null;
//     const prompt = `You are a senior brand strategist at Magsmen Strategy Consultants. Conduct a New Venture Brand Audit using the Magsmen seven-pillar methodology.

// SUBMISSION
// Member: ${s.name}, ${s.desig} — ${s.org}
// Project: ${s.title}
// Sector: ${s.sector} | Stage: ${s.stage}
// Investment: ${s.invest || "Not specified"}
// Department: ${s.dept}
// Support: ${s.support.join(", ")}
// Summary: ${s.summary}
// Files submitted: ${s.files.map((f) => f.name).join(", ") || "None"}
// Notes: ${s.notes || "None"}

// Rate each pillar 1-5 (1=Critical, 5=Excellent). Calculate NVBI as sum of (score/5*weight) for all pillars.

// Return ONLY valid JSON:
// {"nvbi":<0-100>,"nvbi_label":"<Market-leading|Competitive|Developing|Critical>","exec_summary":"<3 direct sentences>","govt_readiness":"<2 sentences on readiness for target department>","pillars":[{"name":"Strategy","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Identity","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Culture","score":<1-5>,"weight":10,"insight":"<1-2 sentences>"},{"name":"Experience","score":<1-5>,"weight":20,"insight":"<1-2 sentences>"},{"name":"Communication","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Market","score":<1-5>,"weight":15,"insight":"<1-2 sentences>"},{"name":"Governance","score":<1-5>,"weight":10,"insight":"<1-2 sentences>"}],"strengths":["<s1>","<s2>","<s3>"],"gaps":["<g1>","<g2>","<g3>"],"rec_90":["<a1>","<a2>","<a3>"],"magsmen_opportunity":"<specific value Magsmen can add>"}`;
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "x-api-key": CFG.CLAUDE, "anthropic-version": "2023-06-01" },
//         body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 2000, messages: [{ role: "user", content: prompt }] }),
//       });
//       if (!res.ok) return null;
//       const d = await res.json();
//       return JSON.parse((d.content?.[0]?.text || "").replace(/```json|```/g, "").trim());
//     } catch (e) {
//       console.error(e);
//       return null;
//     }
//   }

//   async function genResearch(s: Submission): Promise<ResearchResult | null> {
//     if (!CFG.CLAUDE || CFG.CLAUDE.startsWith("YOUR")) return null;
//     const prompt = `You are a Magsmen Research Intelligence Analyst. Generate an Executive Intelligence Brief for this APNRT submission.

// Project: ${s.title} | Sector: ${s.sector} | Dept: ${s.dept}
// Summary: ${s.summary}

// Return ONLY valid JSON:
// {"opportunity_level":<1-10>,"opportunity_rationale":"<one sentence>","market_size":"<size and CAGR>","sector_overview":"<2 paragraphs on this sector in AP and India>","govt_priorities":"<2 sentences on AP govt alignment>","consumer_landscape":"<2 sentences>","competitive_landscape":"<3 sentences naming players>","timing":"<one sentence on market timing>","key_insights":["<i1>","<i2>","<i3>","<i4>"],"risks":["<r1>","<r2>","<r3>"],"strategic_recommendation":"<Magsmen first move — specific and direct>"}`;
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", "x-api-key": CFG.CLAUDE, "anthropic-version": "2023-06-01" },
//         body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1500, messages: [{ role: "user", content: prompt }] }),
//       });
//       if (!res.ok) return null;
//       const d = await res.json();
//       return JSON.parse((d.content?.[0]?.text || "").replace(/```json|```/g, "").trim());
//     } catch (e) {
//       console.error(e);
//       return null;
//     }
//   }

//   async function sendEmail(s: Submission, audit: AuditResult | null): Promise<void> {
//     if (!CFG.EJS_KEY || CFG.EJS_KEY.startsWith("YOUR")) return;
//     try {
//       emailjs.init({ publicKey: CFG.EJS_KEY });
//       const body = `APNRT SUBMISSION | Ref: ${s.id}\n${new Date(s.ts).toLocaleString("en-IN")}\n\n${s.name} | ${s.desig} | ${s.org}\n${s.email} | ${s.phone}\n\nPROJECT: ${s.title}\nSector: ${s.sector} | Stage: ${s.stage}\nDepartment: ${s.dept}\nSupport: ${s.support.join(", ")}\nFiles: ${s.files.map((f) => f.name).join(", ")}\n\nSUMMARY\n${s.summary}${audit ? `\n\nNVBI: ${audit.nvbi}/100 (${audit.nvbi_label})\nMagsmen Opportunity: ${audit.magsmen_opportunity}` : ""}`;
//       await emailjs.send(CFG.EJS_SVC, CFG.EJS_TSUB, {
//         to_email: `${CFG.TO_A},${CFG.TO_B},${CFG.TO_C}`,
//         subject: `[APNRT] ${s.title} — ${s.name}${audit ? " | NVBI " + audit.nvbi : ""}`,
//         content: body,
//         ref: s.id,
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   /* ============================================================
//      SUBMIT
//      ============================================================ */
//   function mkId(): string {
//     return `APNRT-${new Date().getFullYear()}-${String(subs.length + 1).padStart(4, "0")}`;
//   }

//   function patchSub(id: string, updates: SubmissionPatch): void {
//     setSubs((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)));
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
//     e.preventDefault();
//     if (!validate()) {
//       formRef.current?.querySelector(".ferr.on")?.closest(".fsec")?.scrollIntoView({ behavior: "smooth", block: "center" });
//       return;
//     }
//     setIsProcessing(true);
//     try {
//       const id = mkId();
//       const sub = {
//         id,
//         ts: new Date().toISOString(),
//         name: gv(r.fn), desig: gv(r.fd), org: gv(r.fo), email: gv(r.fe), phone: gv(r.fp), city: gv(r.fc),
//         title: gv(r.ft), sector: gv(r.fsec), stage: gv(r.fst), invest: gv(r.finv), summary: gv(r.fsum),
//         dept: gv(r.fdpt), support: [...supportChecked], web: gv(r.fweb), li: gv(r.fli), notes: gv(r.fnotes),
//         files: selectedFiles.map((f) => ({ name: f.name, size: f.size, type: f.type })),
//         audit: null, research: null,
//       };
//       setSubs((prev) => [sub, ...prev]);
//       const [audit, research] = await Promise.all([genAudit(sub), genResearch(sub)]);
//       if (audit) patchSub(id, { audit });
//       if (research) patchSub(id, { research });
//       await sendEmail(sub, audit);
//       setIsProcessing(false);
//       setSubmissionId(id);
//       setView("vt");
//     } catch (err) {
//       console.error(err);
//       setIsProcessing(false);
//       setSubmissionId(mkId());
//       setView("vt");
//     }
//   }

//   /* ============================================================
//      AUTH
//      ============================================================ */
//   function doLogin(): void {
//     const u = gv(r.lu);
//     const p = r.lp.current ? r.lp.current.value : "";
//     if (u === CFG.MUSER && p === CFG.MPASS) {
//       setLoginErr(false);
//       setAuthed(true);
//       setView("vd");
//     } else setLoginErr(true);
//   }
//   function doLogout(): void {
//     setAuthed(false);
//     if (r.lu.current) r.lu.current.value = "";
//     if (r.lp.current) r.lp.current.value = "";
//     setView("vf");
//   }

//   useEffect(() => {
//     if (authed && view === "vd") setDashPanel((p) => p);
//   }, [authed, view]);

//   /* ============================================================
//      DASHBOARD DERIVED DATA
//      ============================================================ */
//   const stats = useMemo<Stats>(() => {
//     const weekAgo = Date.now() - 7 * 864e5;
//     return {
//       total: subs.length,
//       audits: subs.filter((s) => s.audit).length,
//       sectors: new Set(subs.map((s) => s.sector).filter(Boolean)).size,
//       week: subs.filter((s) => new Date(s.ts).getTime() > weekAgo).length,
//     };
//   }, [subs]);

//   function barsFor(field: BarField): Array<[string, number]> {
//     const cnt: Record<string, number> = {};
//     subs.forEach((s) => {
//       if (s[field]) cnt[s[field]] = (cnt[s[field]] || 0) + 1;
//     });
//     return Object.entries(cnt).sort((a, b) => b[1] - a[1]);
//   }

//   const sectorOptions = useMemo(() => [...new Set(subs.map((s) => s.sector).filter(Boolean))].sort(), [subs]);
//   const deptOptions = useMemo(() => [...new Set(subs.map((s) => s.dept).filter(Boolean))].sort(), [subs]);

//   const filteredSubs = useMemo(() => {
//     const q = tsrch.toLowerCase();
//     return subs.filter((s) => {
//       const mq = !q || [s.name, s.title, s.org, s.sector, s.dept].some((f) => f && f.toLowerCase().includes(q));
//       return mq && (!ffs || s.sector === ffs) && (!ffd || s.dept === ffd);
//     });
//   }, [subs, tsrch, ffs, ffd]);

//   const curSub: Submission | null = subs.find((s) => s.id === curSubId) || null;

//   function openModal(id: string): void {
//     setCurSubId(id);
//     setModalTab("sub");
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   }
//   function closeModal(): void {
//     setModalOpen(false);
//     document.body.style.overflow = "";
//   }

//   async function runAuditNow(): Promise<void> {
//     if (!curSub) return;
//     setAuditLoading(true);
//     const audit = await genAudit(curSub);
//     setAuditLoading(false);
//     if (audit) {
//       patchSub(curSub.id, { audit });
//       toast("Brand audit complete", "ok");
//     } else toast("Generation failed. Check the Claude API key in CONFIG.", "er");
//   }
//   async function runResNow(): Promise<void> {
//     if (!curSub) return;
//     setResLoading(true);
//     const research = await genResearch(curSub);
//     setResLoading(false);
//     if (research) {
//       patchSub(curSub.id, { research });
//       toast("Market research complete", "ok");
//     } else toast("Generation failed. Check the Claude API key in CONFIG.", "er");
//   }

//   function doExport() {
//     if (!subs.length) {
//       toast("No submissions to export", "er");
//       return;
//     }
//     const h = ["ID", "Date", "Name", "Designation", "Organisation", "Email", "Phone", "City", "Project", "Sector", "Stage", "Investment", "Department", "Support", "Summary", "Files", "Website", "Notes", "NVBI", "Audit Label", "Audit Ready", "Research Ready"];
//     const rows = subs.map((s) =>
//       [
//         s.id, new Date(s.ts).toLocaleDateString("en-IN"), s.name, s.desig, s.org, s.email, s.phone, s.city || "",
//         s.title, s.sector, s.stage, s.invest || "", s.dept, (s.support || []).join("; "), s.summary,
//         (s.files || []).map((f) => f.name).join("; "), s.web || "", s.notes || "",
//         s.audit ? s.audit.nvbi : "", s.audit ? s.audit.nvbi_label : "", s.audit ? "Yes" : "No", s.research ? "Yes" : "No",
//       ]
//         .map((v) => `"${String(v || "").replace(/"/g, '""')}"`)
//         .join(",")
//     );
//     const blob = new Blob([[h.join(","), ...rows].join("\n")], { type: "text/csv" });
//     const a = Object.assign(document.createElement("a"), {
//       href: URL.createObjectURL(blob),
//       download: `APNRT_${new Date().toISOString().slice(0, 10)}.csv`,
//     });
//     a.click();
//     URL.revokeObjectURL(a.href);
//     toast(`Exported ${subs.length} proposals`, "ok");
//   }

//   const PTITLES = { ov: "Intelligence Overview", all: "All Proposals", sec: "By Sector", dpt: "By Department" };

//   /* ============================================================
//      RENDER
//      ============================================================ */
//   return (
//     <div>
//       <style>{CSS}</style>

//       {view === "vf" && (
//         <FormView
//           hdrDate={hdrDate}
//           r={r}
//           errors={errors}
//           charCount={charCount}
//           updateChar={updateChar}
//           supportChecked={supportChecked}
//           toggleSupport={toggleSupport}
//           selectedFiles={selectedFiles}
//           removeFile={removeFile}
//           fileInputRef={fileInputRef}
//           onFileInputChange={onFileInputChange}
//           dragOver={dragOver}
//           setDragOver={setDragOver}
//           onDrop={onDrop}
//           formRef={formRef}
//           handleSubmit={handleSubmit}
//           setView={setView}
//         />
//       )}

//       {view === "vt" && <ThankYouView submissionId={submissionId} />}

//       {view === "vl" && (
//         <LoginView r={r} loginErr={loginErr} doLogin={doLogin} setView={setView} />
//       )}

//       {view === "vd" && (
//         <DashboardView
//           dashPanel={dashPanel}
//           setDashPanel={setDashPanel}
//           PTITLES={PTITLES}
//           stats={stats}
//           barsFor={barsFor}
//           filteredSubs={filteredSubs}
//           subs={subs}
//           tsrch={tsrch}
//           setTsrch={setTsrch}
//           ffs={ffs}
//           setFfs={setFfs}
//           ffd={ffd}
//           setFfd={setFfd}
//           sectorOptions={sectorOptions}
//           deptOptions={deptOptions}
//           openModal={openModal}
//           doLogout={doLogout}
//           doExport={doExport}
//         />
//       )}

//       {modalOpen && curSub && (
//         <ModalView
//           sub={curSub}
//           modalTab={modalTab}
//           setModalTab={setModalTab}
//           closeModal={closeModal}
//           auditLoading={auditLoading}
//           resLoading={resLoading}
//           runAuditNow={runAuditNow}
//           runResNow={runResNow}
//         />
//       )}

//       {isProcessing && (
//         <div id="proc">
//           <div className="pcard">
//             <div className="p-spin"></div>
//             <h3>Submitting your proposal</h3>
//             <p>Please wait while we process and securely submit your project to the APNRT team.</p>
//           </div>
//         </div>
//       )}

//       <div className="tc">
//         {toasts.map((t) => (
//           <div key={t.id} className={`toast ${t.type}`}>
//             {t.msg}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    FORM VIEW
//    ============================================================ */
// interface FormViewProps {
//   hdrDate: string;
//   r: FormRefs;
//   errors: FormErrors;
//   charCount: number;
//   updateChar: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
//   supportChecked: string[];
//   toggleSupport: (val: string) => void;
//   selectedFiles: File[];
//   removeFile: (i: number) => void;
//   fileInputRef: React.RefObject<HTMLInputElement>;
//   onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   dragOver: boolean;
//   setDragOver: React.Dispatch<React.SetStateAction<boolean>>;
//   onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
//   formRef: React.RefObject<HTMLFormElement>;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   setView: React.Dispatch<React.SetStateAction<ViewMode>>;
// }
// function FormView({
//   hdrDate, r, errors, charCount, updateChar, supportChecked, toggleSupport,
//   selectedFiles, removeFile, fileInputRef, onFileInputChange, dragOver, setDragOver,
//   onDrop, formRef, handleSubmit, setView,
// }: FormViewProps) {
//   return (
//     <div id="vf">
//       <header className="site-hdr">
//         <div className="hdr-top">
//           <div className="hdr-org">APNRT × Magsmen</div>
//           <div className="hdr-date">{hdrDate}</div>
//         </div>
//         <div className="hdr-line"></div>
//         <div className="hdr-eyebrow">Member Portal — Project Submission</div>
//         <h1 className="hdr-title">
//           Project
//           <br />
//           <em>Repository.</em>
//         </h1>
//         <p className="hdr-sub">
//           Submit your venture. Connect with government.
//           <br />
//           Scale through Andhra Pradesh.
//         </p>
//         <div className="hdr-meta">
//           <div className="hdr-meta-item">Confidential &amp; Secure</div>
//           <div className="hdr-meta-item">CXO Members Only</div>
//           <div className="hdr-meta-item">5-Day Response Guarantee</div>
//           <div className="hdr-meta-item">Powered by Magsmen Intelligence</div>
//         </div>
//         <div
//           className="scroll-hint"
//           onClick={() => document.querySelector(".form-wrap")?.scrollIntoView({ behavior: "smooth" })}
//         >
//           Scroll to begin
//         </div>
//       </header>

//       <div className="form-wrap">
//         <form ref={formRef} id="subform" noValidate onSubmit={handleSubmit}>
//           {/* 01 */}
//           <div className="fsec">
//             <div className="sec-hdr">
//               <div className="sec-num">01</div>
//               <div className="sec-info">
//                 <h3>Member Details</h3>
//                 <p>Tell us who you are and how to reach you</p>
//               </div>
//             </div>
//             <div className="fg c2">
//               <div className="ff">
//                 <label className="lbl">
//                   Full Name <span className="r">*</span>
//                 </label>
//                 <input ref={r.fn} className={`fi${errors.en ? " err" : ""}`} placeholder="Your full name" autoComplete="name" />
//                 <span className={`ferr${errors.en ? " on" : ""}`}>Name required</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Designation <span className="r">*</span>
//                 </label>
//                 <input ref={r.fd} className={`fi${errors.ed ? " err" : ""}`} placeholder="e.g. Managing Director, Founder" />
//                 <span className={`ferr${errors.ed ? " on" : ""}`}>Designation required</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Organisation <span className="r">*</span>
//                 </label>
//                 <input ref={r.fo} className={`fi${errors.eo ? " err" : ""}`} placeholder="Company or organisation name" />
//                 <span className={`ferr${errors.eo ? " on" : ""}`}>Organisation required</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Email Address <span className="r">*</span>
//                 </label>
//                 <input ref={r.fe} type="email" className={`fi${errors.ee ? " err" : ""}`} placeholder="your@email.com" autoComplete="email" />
//                 <span className={`ferr${errors.ee ? " on" : ""}`}>Valid email required</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Phone Number <span className="r">*</span>
//                 </label>
//                 <input ref={r.fp} type="tel" className={`fi${errors.ep ? " err" : ""}`} placeholder="+91 98765 43210" autoComplete="tel" />
//                 <span className={`ferr${errors.ep ? " on" : ""}`}>Phone number required</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">City / Location</label>
//                 <input ref={r.fc} className="fi" placeholder="e.g. Hyderabad, Singapore, Melbourne" />
//               </div>
//             </div>
//           </div>

//           {/* 02 */}
//           <div className="fsec">
//             <div className="sec-hdr">
//               <div className="sec-num">02</div>
//               <div className="sec-info">
//                 <h3>Project Overview</h3>
//                 <p>Define your venture, sector, and stage</p>
//               </div>
//             </div>
//             <div className="fg">
//               <div className="ff">
//                 <label className="lbl">
//                   Project / Initiative Title <span className="r">*</span>
//                 </label>
//                 <input ref={r.ft} className={`fi${errors.et ? " err" : ""}`} placeholder="Give your project a clear, memorable title" />
//                 <span className={`ferr${errors.et ? " on" : ""}`}>Project title required</span>
//               </div>
//               <div className="fg c3">
//                 <div className="ff">
//                   <label className="lbl">
//                     Industry Sector <span className="r">*</span>
//                   </label>
//                   <select ref={r.fsec} className={`fsel${errors.esec ? " err" : ""}`} defaultValue="">
//                     <option value="">Select sector</option>
//                     {SECTORS.map((s) => (
//                       <option key={s}>{s}</option>
//                     ))}
//                   </select>
//                   <span className={`ferr${errors.esec ? " on" : ""}`}>Sector required</span>
//                 </div>
//                 <div className="ff">
//                   <label className="lbl">
//                     Project Stage <span className="r">*</span>
//                   </label>
//                   <select ref={r.fst} className={`fsel${errors.est ? " err" : ""}`} defaultValue="">
//                     <option value="">Select stage</option>
//                     {STAGES.map((s) => (
//                       <option key={s}>{s}</option>
//                     ))}
//                   </select>
//                   <span className={`ferr${errors.est ? " on" : ""}`}>Stage required</span>
//                 </div>
//                 <div className="ff">
//                   <label className="lbl">Investment Required</label>
//                   <select ref={r.finv} className="fsel" defaultValue="">
//                     <option value="">Select range</option>
//                     {INVESTMENTS.map((s) => (
//                       <option key={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Executive Summary <span className="r">*</span>
//                 </label>
//                 <textarea
//                   ref={r.fsum}
//                   className={`fta${errors.esum ? " err" : ""}`}
//                   rows={5}
//                   placeholder="Describe your project clearly — what it does, the problem it solves, who benefits, and why now is the right time. Minimum 150 characters."
//                   onInput={updateChar}
//                 ></textarea>
//                 <div className="char-row">
//                   <span className={`ferr${errors.esum !== false ? " on" : ""}`} style={{ display: "inline" }}>
//                     Please write at least 150 characters
//                   </span>
//                   <span className="char-ct">{charCount} / 150 min</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 03 */}
//           <div className="fsec">
//             <div className="sec-hdr">
//               <div className="sec-num">03</div>
//               <div className="sec-info">
//                 <h3>Government Interface</h3>
//                 <p>Identify the department and support you seek</p>
//               </div>
//             </div>
//             <div className="fg">
//               <div className="ff">
//                 <label className="lbl">
//                   Target Government Department <span className="r">*</span>
//                 </label>
//                 <select ref={r.fdpt} className={`fsel${errors.edpt ? " err" : ""}`} defaultValue="">
//                   <option value="">Select the most relevant department</option>
//                   {DEPARTMENTS.map((d) => (
//                     <option key={d}>{d}</option>
//                   ))}
//                 </select>
//                 <span className={`ferr${errors.edpt ? " on" : ""}`}>Please select a department</span>
//               </div>
//               <div className="ff">
//                 <label className="lbl">
//                   Type of Support Required <span className="r">*</span>
//                 </label>
//                 <div className="fhint" style={{ marginBottom: 16 }}>
//                   Select all that apply to your project
//                 </div>
//                 <div className="cbg">
//                   {SUPPORT_TYPES.map((s) => (
//                     <label className="cbi" key={s}>
//                       <input
//                         type="checkbox"
//                         checked={supportChecked.includes(s)}
//                         onChange={() => toggleSupport(s)}
//                       />
//                       <span className="cbl">{SUPPORT_LABELS[s] || s}</span>
//                     </label>
//                   ))}
//                 </div>
//                 <span className={`ferr${errors.esup ? " on" : ""}`} style={{ marginTop: 8 }}>
//                   Select at least one type of support
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* 04 */}
//           <div className="fsec">
//             <div className="sec-hdr">
//               <div className="sec-num">04</div>
//               <div className="sec-info">
//                 <h3>Project Materials</h3>
//                 <p>Upload any document that represents your project</p>
//               </div>
//             </div>
//             <div className="fg">
//               <div className="ff">
//                 <div
//                   className={`upzone${dragOver ? " drag" : ""}`}
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                     setDragOver(true);
//                   }}
//                   onDragLeave={() => setDragOver(false)}
//                   onDrop={onDrop}
//                 >
//                   <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} />
//                   <span className="up-arrow">↑</span>
//                   <div className="up-title">Drop your project materials here</div>
//                   <div className="up-types">
//                     Pitch Deck &nbsp;·&nbsp; DPR &nbsp;·&nbsp; Presentation &nbsp;·&nbsp; Video &nbsp;·&nbsp; Report &nbsp;·&nbsp; Business Plan &nbsp;·&nbsp; Any Format
//                   </div>
//                   <div className="up-note">Multiple files supported &nbsp;·&nbsp; All formats accepted</div>
//                 </div>
//                 <div className="file-list">
//                   {selectedFiles.map((f, i) => (
//                     <div className="fchip" key={f.name + f.size}>
//                       <span className="fchip-type">{getExt(f.name)}</span>
//                       <span className="fchip-name">{f.name}</span>
//                       <button type="button" className="fchip-rm" onClick={() => removeFile(i)} title="Remove">
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//                 <span className={`ferr${errors.efiles ? " on" : ""}`} style={{ marginTop: 8 }}>
//                   Please upload at least one project file
//                 </span>
//               </div>
//               <div className="fg c2">
//                 <div className="ff">
//                   <label className="lbl">Project Website / Link</label>
//                   <input ref={r.fweb} type="url" className="fi" placeholder="https://yourproject.com" />
//                   <div className="fhint" style={{ marginTop: 6 }}>
//                     Website, investor deck link, or any URL
//                   </div>
//                 </div>
//                 <div className="ff">
//                   <label className="lbl">LinkedIn / Social</label>
//                   <input ref={r.fli} type="url" className="fi" placeholder="https://linkedin.com/in/yourprofile" />
//                 </div>
//               </div>
//               <div className="ff">
//                 <label className="lbl">Additional Notes</label>
//                 <textarea ref={r.fnotes} className="fta" rows={3} placeholder="Anything else the APNRT team should know about your project or requirements"></textarea>
//               </div>
//             </div>
//           </div>

//           {/* Submit */}
//           <div className="submit-row">
//             <div className="submit-note">
//               Your proposal will be reviewed by the APNRT management team. You will receive a follow-up within 5 business days via email or phone.
//             </div>
//             <button type="submit" className="btn-submit">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <line x1="22" y1="2" x2="11" y2="13" />
//                 <polygon points="22 2 15 22 11 13 2 9 22 2" />
//               </svg>
//               Submit Proposal
//             </button>
//           </div>
//         </form>

//         {/* About Section */}
//         <div className="about-sec" style={{ margin: "80px -40px 0", padding: "80px 40px" }}>
//           <div className="about-top">
//             <div className="about-eyebrow">About This Initiative</div>
//             <div className="about-line-h"></div>
//           </div>
//           <div className="about-heading">
//             What we are
//             <br />
//             <span>building together.</span>
//           </div>
//           <div className="about-grid">
//             <div className="about-col">
//               <div className="about-col-label">AP Non-Resident Telugu (APNRT)</div>
//               <p>
//                 APNRT is the platform connecting the global Telugu diaspora — leaders, investors, and founders — with the economic growth story of Andhra Pradesh. Members carry the ambition of the state in every market they operate in.
//               </p>
//               <p>
//                 This repository gives CXO members a structured, serious channel to submit project proposals directly to government departments. No informal conversations. No lost follow-ups. A system that reflects the quality of the ideas within it.
//               </p>
//             </div>
//             <div className="about-divider"></div>
//             <div className="about-col">
//               <div className="about-col-label">Magsmen Strategy Consultants</div>
//               <p>
//                 Magsmen is an integrated strategy consulting firm operating across Business, Brand, and Legal. The firm works with founders and corporate decision-makers in AP and Telangana to build brands that are strategically powerful, legally secure, and economically sustainable.
//               </p>
//               <p>
//                 As APNRT's strategy partner, Magsmen brings diagnostic intelligence, brand architecture, and consulting rigor to every project that enters this repository. Each submission is assessed, structured, and positioned before government interface.
//               </p>
//               <a href="https://magsmen.com" target="_blank" rel="noreferrer" className="about-link">
//                 Visit magsmen.com &nbsp;→
//               </a>
//             </div>
//           </div>
//           <div className="about-footer">
//             <div className="about-copy">© 2025 APNRT × Magsmen Strategy Consultants. All rights reserved.</div>
//             <div className="mgmt-link" onClick={() => setView("vl")}>
//               Magsmen Management
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    THANK YOU VIEW
//    ============================================================ */
// interface ThankYouViewProps {
//   submissionId: string;
// }

// function ThankYouView({ submissionId }: ThankYouViewProps) {
//   return (
//     <div id="vt" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
//       <div className="ty-wrap">
//         <div className="ty-mark">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//             <polyline points="20 6 9 17 4 12" />
//           </svg>
//         </div>
//         <div className="ty-kicker">Submission Received</div>
//         <h1 className="ty-title">
//           Your project
//           <br />
//           is with us.
//         </h1>
//         <p className="ty-sub">
//           The APNRT management team has been notified. Your proposal will be reviewed and you will receive a follow-up within 5 business days.
//         </p>
//         <div className="ty-ref">
//           <div className="ty-ref-lbl">Submission Reference</div>
//           <div className="ty-ref-val">{submissionId}</div>
//         </div>
//         <div className="ty-steps">
//           <div className="ty-step">
//             <div className="ty-sn">1</div>
//             <div className="ty-st">
//               <strong>Notification Sent</strong>The APNRT management and Magsmen team have been notified of your submission.
//             </div>
//           </div>
//           <div className="ty-step">
//             <div className="ty-sn">2</div>
//             <div className="ty-st">
//               <strong>Internal Assessment</strong>Your project will be reviewed internally before government interface.
//             </div>
//           </div>
//           <div className="ty-step">
//             <div className="ty-sn">3</div>
//             <div className="ty-st">
//               <strong>Follow-up</strong>You will be contacted within 5 business days to discuss next steps.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    LOGIN VIEW
//    ============================================================ */
// function LoginView({ r, loginErr, doLogin, setView }: { r: { lu: React.MutableRefObject<HTMLInputElement | null>; lp: React.MutableRefObject<HTMLInputElement | null> }; loginErr: boolean; doLogin: () => void; setView: React.Dispatch<React.SetStateAction<string>>; }) {
//   return (
//     <div id="vl" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
//       <div className="log-wrap">
//         <div className="log-left">
//           <div className="log-mark">Magsmen Strategy Consultants</div>
//           <div>
//             <h2>
//               Intelligence
//               <br />
//               Dashboard
//             </h2>
//             <p>APNRT Project Repository — Internal access for the Magsmen strategy team only.</p>
//           </div>
//         </div>
//         <div className="log-right">
//           <div className="log-f">
//             <label className="log-lbl">Username</label>
//             <input ref={r.lu} className="log-i" placeholder="Enter username" autoComplete="username" />
//           </div>
//           <div className="log-f">
//             <label className="log-lbl">Password</label>
//             <input
//               ref={r.lp}
//               type="password"
//               className="log-i"
//               placeholder="Enter password"
//               autoComplete="current-password"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") doLogin();
//               }}
//             />
//           </div>
//           <button className="btn-log" onClick={doLogin}>
//             Access Dashboard
//           </button>
//           <div className={`log-err${loginErr ? " on" : ""}`}>Incorrect credentials. Please try again.</div>
//           <div className="log-back" onClick={() => setView("vf")}>
//             ← Back to Member Portal
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    DASHBOARD VIEW
//    ============================================================ */
// function DashboardView({
//   dashPanel, setDashPanel, PTITLES, stats, barsFor, filteredSubs, subs,
//   tsrch, setTsrch, ffs, setFfs, ffd, setFfd, sectorOptions, deptOptions,
//   openModal, doLogout, doExport,
// }: {
//   dashPanel: DashPanel;
//   setDashPanel: React.Dispatch<React.SetStateAction<DashPanel>>;
//   PTITLES: Record<DashPanel, string>;
//   stats: Stats;
//   barsFor: (field: BarField) => [string, number][];
//   filteredSubs: Submission[];
//   subs: Submission[];
//   tsrch: string;
//   setTsrch: React.Dispatch<React.SetStateAction<string>>;
//   ffs: string;
//   setFfs: React.Dispatch<React.SetStateAction<string>>;
//   ffd: string;
//   setFfd: React.Dispatch<React.SetStateAction<string>>;
//   sectorOptions: string[];
//   deptOptions: string[];
//   openModal: (id: string) => void;
//   doLogout: () => void;
//   doExport: () => void;
// }) {
//   function Bars({ field }: { field: BarField }) {
//     const data = barsFor(field);
//     if (!data.length) return <div className="te" style={{ padding: 24 }}><p>No submissions yet</p></div>;
//     const mx = data[0][1];
//     return (
//       <div className="bars">
//         {data.map(([nm, ct]) => (
//           <div className="bri" key={nm}>
//             <div className="brn" title={nm}>{nm}</div>
//             <div className="brtr"><div className="brfl" style={{ width: `${(ct / mx * 100).toFixed(0)}%` }}></div></div>
//             <div className="brct">{ct}</div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div id="vd" style={{ display: "flex" }}>
//       <aside className="msb">
//         <div className="msb-hdr">
//           <div className="msb-brand">Magsmen</div>
//           <div className="msb-sub">Strategy Consultants</div>
//           <div className="msb-tag">APNRT Intelligence</div>
//         </div>
//         <nav className="mnav">
//           <div className="nsl">Dashboard</div>
//           <div className={`ni${dashPanel === "ov" ? " on" : ""}`} onClick={() => setDashPanel("ov")}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
//               <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
//             </svg>
//             Overview
//           </div>
//           <div className="nsl" style={{ marginTop: 8 }}>Proposals</div>
//           <div className={`ni${dashPanel === "all" ? " on" : ""}`} onClick={() => setDashPanel("all")}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
//               <line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" />
//             </svg>
//             All Proposals<span className="nbdg">{subs.length}</span>
//           </div>
//           <div className={`ni${dashPanel === "sec" ? " on" : ""}`} onClick={() => setDashPanel("sec")}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
//             </svg>
//             By Sector
//           </div>
//           <div className={`ni${dashPanel === "dpt" ? " on" : ""}`} onClick={() => setDashPanel("dpt")}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//             </svg>
//             By Department
//           </div>
//         </nav>
//         <div className="msb-ft">
//           <button className="btn-out" onClick={doLogout}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
//             </svg>
//             Sign Out
//           </button>
//         </div>
//       </aside>

//       <div className="mmain">
//         <div className="mtop">
//           <div className="mpgt">{PTITLES[dashPanel]}</div>
//           <button className="btn-exp" onClick={doExport}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
//             </svg>
//             Export CSV
//           </button>
//         </div>

//         <div className="mcont">
//           {/* Overview */}
//           <div className={`apanel${dashPanel === "ov" ? " on" : ""}`}>
//             <div className="stat-strip">
//               <div className="stat-item"><div className="stat-n">{stats.total}</div><div className="stat-l">Total Proposals</div></div>
//               <div className="stat-item"><div className="stat-n">{stats.audits}</div><div className="stat-l">Brand Audits</div></div>
//               <div className="stat-item"><div className="stat-n">{stats.sectors}</div><div className="stat-l">Sectors</div></div>
//               <div className="stat-item"><div className="stat-n">{stats.week}</div><div className="stat-l">This Week</div></div>
//             </div>
//             <div className="pcont">
//               <div className="bk-title">Sector Distribution</div>
//               <Bars field="sector" />
//             </div>
//           </div>

//           {/* All */}
//           <div className={`apanel${dashPanel === "all" ? " on" : ""}`}>
//             <div className="pcont">
//               <div className="tbar">
//                 <div className="tsr">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//                   </svg>
//                   <input className="tsri" placeholder="Search proposals, members, organisations…" value={tsrch} onChange={(e) => setTsrch(e.target.value)} />
//                 </div>
//                 <div className="tfilts">
//                   <select className="tfs" value={ffs} onChange={(e) => setFfs(e.target.value)}>
//                     <option value="">All Sectors</option>
//                     {sectorOptions.map((s) => <option key={s}>{s}</option>)}
//                   </select>
//                   <select className="tfs" value={ffd} onChange={(e) => setFfd(e.target.value)}>
//                     <option value="">All Departments</option>
//                     {deptOptions.map((d) => <option key={d}>{d}</option>)}
//                   </select>
//                 </div>
//               </div>
//               <div style={{ overflowX: "auto" }}>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>#</th><th>Member</th><th>Organisation</th><th>Project</th><th>Sector</th>
//                       <th>Department</th><th>Files</th><th>Audit</th><th>Research</th><th>Date</th><th></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredSubs.length === 0 ? (
//                       <tr>
//                         <td colSpan={11}>
//                           <div className="te">
//                             <div className="te-ico">○</div>
//                             <p>No proposals found. Adjust your filters or wait for submissions.</p>
//                           </div>
//                         </td>
//                       </tr>
//                     ) : (
//                       filteredSubs.map((s) => {
//                         const idx = subs.length - subs.findIndex((x) => x.id === s.id);
//                         const dshort = s.dept.length > 22 ? s.dept.slice(0, 20) + "…" : s.dept;
//                         const fc = (s.files || []).length;
//                         return (
//                           <tr key={s.id} onClick={() => openModal(s.id)}>
//                             <td style={{ color: "var(--d-ink3)", fontSize: 12, fontVariantNumeric: "tabular-nums" }}>{idx}</td>
//                             <td><div className="td-name">{s.name}</div><div className="td-desig">{s.desig}</div></td>
//                             <td className="td-org" title={s.org}>{s.org}</td>
//                             <td className="td-title" title={s.title}>{s.title}</td>
//                             <td><span className="tag sec">{s.sector}</span></td>
//                             <td><span className="tag dept" title={s.dept}>{dshort}</span></td>
//                             <td style={{ fontSize: 12, color: "var(--d-ink3)" }}>{fc} file{fc !== 1 ? "s" : ""}</td>
//                             <td>{s.audit ? <span className="tag ok">Ready</span> : <span className="tag pd">Pending</span>}</td>
//                             <td>{s.research ? <span className="tag ok">Ready</span> : <span className="tag pd">Pending</span>}</td>
//                             <td style={{ fontSize: 12, color: "var(--d-ink3)", whiteSpace: "nowrap" }}>{fmtDateShort(s.ts)}</td>
//                             <td><button className="btn-vw" onClick={(e) => { e.stopPropagation(); openModal(s.id); }}>Open</button></td>
//                           </tr>
//                         );
//                       })
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Sector */}
//           <div className={`apanel${dashPanel === "sec" ? " on" : ""}`}>
//             <div className="pcont"><div className="bk-title">Proposals by Sector</div><Bars field="sector" /></div>
//           </div>

//           {/* Dept */}
//           <div className={`apanel${dashPanel === "dpt" ? " on" : ""}`}>
//             <div className="pcont"><div className="bk-title">Proposals by Government Department</div><Bars field="dept" /></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    MODAL VIEW
//    ============================================================ */
// interface ModalViewProps {
//   sub: Submission;
//   modalTab: ModalTab;
//   setModalTab: React.Dispatch<React.SetStateAction<ModalTab>>;
//   closeModal: () => void;
//   auditLoading: boolean;
//   resLoading: boolean;
//   runAuditNow: () => void;
//   runResNow: () => void;
// }

// function ModalView({ sub, modalTab, setModalTab, closeModal, auditLoading, resLoading, runAuditNow, runResNow }: ModalViewProps) {
//   const s = sub;
//   return (
//     <div id="modal" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
//       <div className="mc">
//         <div className="mc-hdr">
//           <div>
//             <div className="mc-ttl">{s.title}</div>
//             <div className="mc-sub">{s.name} — {s.desig} at {s.org}</div>
//           </div>
//           <button className="mc-cls" onClick={closeModal}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           </button>
//         </div>
//         <div className="mtabs">
//           <div className={`mtab${modalTab === "sub" ? " on" : ""}`} onClick={() => setModalTab("sub")}>Submission</div>
//           <div className={`mtab${modalTab === "aud" ? " on" : ""}`} onClick={() => setModalTab("aud")}>
//             Brand Audit <span className={`tp ${s.audit ? "ok" : "pd"}`}>{s.audit ? "Ready" : "Pending"}</span>
//           </div>
//           <div className={`mtab${modalTab === "res" ? " on" : ""}`} onClick={() => setModalTab("res")}>
//             Market Research <span className={`tp ${s.research ? "ok" : "pd"}`}>{s.research ? "Ready" : "Pending"}</span>
//           </div>
//         </div>

//         <div className={`mpanel${modalTab === "sub" ? " on" : ""}`}>
//           <SubDetail s={s} />
//         </div>
//         <div className={`mpanel${modalTab === "aud" ? " on" : ""}`}>
//           <AuditPanel s={s} loading={auditLoading} runAuditNow={runAuditNow} />
//         </div>
//         <div className={`mpanel${modalTab === "res" ? " on" : ""}`}>
//           <ResPanel s={s} loading={resLoading} runResNow={runResNow} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function SubDetail({ s }: { s: Submission }) {
//   return (
//     <div>
//       <div className="ds">
//         <div className="dst">Reference</div>
//         <div className="dg c2">
//           <div className="di"><div className="dl">Submission ID</div><div className="dv" style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700 }}>{s.id}</div></div>
//           <div className="di"><div className="dl">Submitted</div><div className="dv">{fmtDateLong(s.ts)}</div></div>
//         </div>
//       </div>
//       <div className="ds">
//         <div className="dst">Member</div>
//         <div className="dg">
//           <div className="di"><div className="dl">Name</div><div className="dv">{s.name}</div></div>
//           <div className="di"><div className="dl">Designation</div><div className="dv">{s.desig}</div></div>
//           <div className="di"><div className="dl">Organisation</div><div className="dv">{s.org}</div></div>
//         </div>
//         <div className="dg">
//           <div className="di"><div className="dl">Email</div><div className="dv"><a href={`mailto:${s.email}`} style={{ color: "var(--d-ink)" }}>{s.email}</a></div></div>
//           <div className="di"><div className="dl">Phone</div><div className="dv">{s.phone}</div></div>
//           <div className="di"><div className="dl">City</div><div className="dv">{s.city || "—"}</div></div>
//         </div>
//       </div>
//       <div className="ds">
//         <div className="dst">Project</div>
//         <div className="dg">
//           <div className="di"><div className="dl">Sector</div><div className="dv"><span className="tag sec">{s.sector}</span></div></div>
//           <div className="di"><div className="dl">Stage</div><div className="dv">{s.stage}</div></div>
//           <div className="di"><div className="dl">Investment</div><div className="dv">{s.invest || "—"}</div></div>
//         </div>
//         <div className="dg c2">
//           <div className="di"><div className="dl">Target Department</div><div className="dv">{s.dept}</div></div>
//           <div className="di"><div className="dl">Website</div><div className="dv">{s.web ? <a href={s.web} target="_blank" rel="noreferrer" style={{ color: "var(--d-ink)" }}>{s.web}</a> : "—"}</div></div>
//         </div>
//         <div className="di" style={{ marginTop: 16 }}>
//           <div className="dl">Executive Summary</div>
//           <div className="dv sm" style={{ marginTop: 6 }}>{s.summary}</div>
//         </div>
//       </div>
//       <div className="ds">
//         <div className="dst">Support Required</div>
//         <div className="stags">{(s.support || []).map((t) => <span className="stag" key={t}>{t}</span>)}</div>
//       </div>
//       <div className="ds">
//         <div className="dst">Submitted Files</div>
//         <div className="files-list">
//           {(s.files || []).length
//             ? s.files.map((f) => (
//                 <div className="f-item" key={f.name}>
//                   <div className="f-ext">{getExt(f.name)}</div>
//                   <div className="f-nm">{f.name}</div>
//                   <div className="f-sz">{fmtSize(f.size)}</div>
//                 </div>
//               ))
//             : <div style={{ fontSize: 13, color: "var(--d-ink3)" }}>No files recorded</div>}
//         </div>
//       </div>
//       {s.notes && <div className="ds"><div className="dst">Notes</div><div className="dv sm">{s.notes}</div></div>}
//       {s.li && <div className="ds"><div className="dst">LinkedIn</div><div className="dv"><a href={s.li} target="_blank" rel="noreferrer" style={{ color: "var(--d-ink)" }}>{s.li}</a></div></div>}
//     </div>
//   );
// }

// function AuditPanel({ s, loading, runAuditNow }: AuditPanelProps) {
//   if (loading) {
//     return (
//       <div className="gen-loading">
//         <div className="gen-spin"></div>
//         <p>Running Magsmen seven-pillar brand audit…<br />Approximately 20 seconds</p>
//       </div>
//     );
//   }
//   if (!s.audit) {
//     return (
//       <div className="pending-state">
//         <div className="pending-ico">○</div>
//         <div className="pending-title">Brand Audit Not Generated</div>
//         <div className="pending-sub">The Magsmen seven-pillar audit was not generated at submission time.</div>
//         <button className="btn-gen" onClick={runAuditNow}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <polygon points="5 3 19 12 5 21 5 3" />
//           </svg>
//           Generate Brand Audit
//         </button>
//       </div>
//     );
//   }
//   const a = s.audit;
//   return (
//     <div>
//       <div className="nvbi-block">
//         <div className="nvbi-score-wrap">
//           <div className="nvbi-score-num">{a.nvbi}</div>
//           <div className="nvbi-score-label">/ 100 — NVBI</div>
//         </div>
//         <div className="nvbi-div"></div>
//         <div className="nvbi-exec">
//           <div className="nvbi-state">{a.nvbi_label}</div>
//           <div className="nvbi-exec-lbl">Executive Assessment</div>
//           <div className="nvbi-exec-txt">{a.exec_summary}</div>
//         </div>
//       </div>
//       <div className="dst" style={{ marginBottom: 20 }}>Pillar Assessment</div>
//       <div className="pillar-list">
//         {a.pillars.map((p) => (
//           <div key={p.name}>
//             <div className="pillar-row">
//               <div className="pillar-name">{p.name}</div>
//               <div className="pillar-bar"><div className="pillar-fill" style={{ width: `${(p.score / 5 * 100).toFixed(0)}%` }}></div></div>
//               <div className="pillar-score">{p.score} / 5</div>
//             </div>
//             <div className="pillar-ins">{p.insight}</div>
//           </div>
//         ))}
//       </div>
//       <div className="two-col">
//         <div className="audit-block"><div className="ab-title">Strengths</div><div className="ab-list">{(a.strengths || []).map((x, i) => <div className="ab-item" key={i}>{x}</div>)}</div></div>
//         <div className="audit-block"><div className="ab-title">Gaps to Address</div><div className="ab-list">{(a.gaps || []).map((x, i) => <div className="ab-item" key={i}>{x}</div>)}</div></div>
//       </div>
//       <div className="dst" style={{ marginBottom: 16 }}>90-Day Recommended Actions</div>
//       <div className="rec-list">
//         {(a.rec_90 || []).map((rItem, i) => (
//           <div className="rec-item" key={i}><div className="rec-n">0{i + 1}</div><div className="rec-t">{rItem}</div></div>
//         ))}
//       </div>
//       <div className="mbox"><div className="mbox-lbl">Magsmen Engagement Opportunity</div><div className="mbox-txt">{a.magsmen_opportunity}</div></div>
//       <div className="gov-box"><div className="gov-lbl">Government Readiness</div><div className="gov-txt">{a.govt_readiness}</div></div>
//     </div>
//   );
// }

// function ResPanel({ s, loading, runResNow }) {
//   if (loading) {
//     return (
//       <div className="gen-loading">
//         <div className="gen-spin"></div>
//         <p>Running market intelligence research…<br />Approximately 15 seconds</p>
//       </div>
//     );
//   }
//   if (!s.research) {
//     return (
//       <div className="pending-state">
//         <div className="pending-ico">○</div>
//         <div className="pending-title">Market Research Not Generated</div>
//         <div className="pending-sub">Generate market intelligence for this submission now.</div>
//         <button className="btn-gen" onClick={runResNow}>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <polygon points="5 3 19 12 5 21 5 3" />
//           </svg>
//           Generate Market Research
//         </button>
//       </div>
//     );
//   }
//   const rd = s.research;
//   return (
//     <div>
//       <div className="opp-row">
//         <div><span className="opp-num-big">{rd.opportunity_level}</span><span className="opp-denom"> / 10</span></div>
//         <div className="opp-div"></div>
//         <div className="opp-meta">
//           <div className="opp-label">Opportunity Level</div>
//           <div className="opp-rat">{rd.opportunity_rationale}</div>
//           <div className="opp-meta-lbl">Market Size</div>
//           <div className="opp-meta-val">{rd.market_size}</div>
//         </div>
//         <div className="opp-div"></div>
//         <div className="opp-meta">
//           <div className="opp-meta-lbl">Market Timing</div>
//           <div className="opp-meta-val" style={{ fontSize: 13, fontWeight: 400, color: "var(--d-ink2)" }}>{rd.timing}</div>
//         </div>
//       </div>
//       <div className="res-sec"><div className="res-sec-ttl">Sector Overview</div><div className="res-sec-txt">{rd.sector_overview}</div></div>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
//         <div className="res-sec" style={{ marginBottom: 0, paddingBottom: 0, border: "none" }}><div className="res-sec-ttl">Government Priorities</div><div className="res-sec-txt">{rd.govt_priorities}</div></div>
//         <div className="res-sec" style={{ marginBottom: 0, paddingBottom: 0, border: "none" }}><div className="res-sec-ttl">Consumer Landscape</div><div className="res-sec-txt">{rd.consumer_landscape}</div></div>
//       </div>
//       <div className="res-sec"><div className="res-sec-ttl">Competitive Landscape</div><div className="res-sec-txt">{rd.competitive_landscape}</div></div>
//       <div className="res-sec">
//         <div className="res-sec-ttl">Key Intelligence Insights</div>
//         <div className="ins-list">{(rd.key_insights || []).map((x: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => <div className="ins-item" key={i}><div className="ins-n">0{i + 1}</div><div>{x}</div></div>)}</div>
//       </div>
//       <div className="res-sec">
//         <div className="res-sec-ttl">Risk Factors</div>
//         <div className="ins-list">{(rd.risks || []).map((x: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => <div className="ins-item" key={i}><div className="ins-n" style={{ color: "var(--d-ink3)" }}>0{i + 1}</div><div>{x}</div></div>)}</div>
//       </div>
//       <div className="strat-block"><div className="strat-lbl">Magsmen Strategic Recommendation</div><div className="strat-txt">{rd.strategic_recommendation}</div></div>
//     </div>
//   );
// }

// /* ============================================================
//    CSS — same tokens, colors, and layout rules as the original
//    ============================================================ */
// const CSS = `
// :root {
//   --ink:      #0C0C0B;
//   --ink-2:    #3D3D3C;
//   --ink-3:    #7A7A78;
//   --ink-4:    #B0AFA9;
//   --cream:    #F8F6F2;
//   --paper:    #FCFBF9;
//   --line:     #E4E0D8;
//   --line-2:   #EDE9E3;
//   --gold:     #B8924A;
//   --gold-2:   #D4A95E;
//   --header-bg:#100F0D;

//   --d-bg:    #FFFFFF;
//   --d-off:   #F7F7F5;
//   --d-line:  #E8E8E5;
//   --d-line2: #F0F0EE;
//   --d-ink:   #0C0C0B;
//   --d-ink2:  #4A4A48;
//   --d-ink3:  #9A9A97;
//   --d-sb:    #0C0C0B;

//   --font-display:'Syne',sans-serif;
//   --font-body:'DM Sans',sans-serif;
//   --font-ops:'Outfit',sans-serif;
// }

// *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
// body { font-family:var(--font-body); color:var(--ink); background:var(--cream); -webkit-font-smoothing:antialiased; }

// .site-hdr { background: var(--header-bg); min-height: 88vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 40px 60px 56px; position: relative; overflow: hidden; }
// .hdr-top { position: absolute; top: 0; left: 0; right: 0; padding: 28px 60px; display: flex; align-items: center; justify-content: space-between; }
// .hdr-org { font-family: var(--font-display); font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.35); }
// .hdr-date { font-size: 12px; color: rgba(255,255,255,.2); letter-spacing: 0.04em; }
// .hdr-line { width: 1px; height: 120px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,.15), transparent); position: absolute; right: 60px; top: 50%; transform: translateY(-50%); }
// .hdr-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
// .hdr-title { font-family: var(--font-display); font-size: clamp(52px, 7vw, 96px); font-weight: 800; color: #FFFFFF; line-height: 1.0; letter-spacing: -0.03em; margin-bottom: 28px; }
// .hdr-title em { font-style: italic; font-weight: 400; color: rgba(255,255,255,.4); }
// .hdr-sub { font-size: 17px; font-weight: 300; color: rgba(255,255,255,.5); line-height: 1.65; max-width: 480px; margin-bottom: 40px; }
// .hdr-meta { display: flex; align-items: center; gap: 0; padding-top: 32px; border-top: 1px solid rgba(255,255,255,.08); }
// .hdr-meta-item { font-size: 12px; color: rgba(255,255,255,.3); letter-spacing: 0.04em; padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,.1); }
// .hdr-meta-item:last-child { border-right: none; }
// .scroll-hint { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.2); display: flex; align-items: center; gap: 8px; margin-top: 40px; cursor: pointer; transition: color 0.2s; }
// .scroll-hint:hover { color: rgba(255,255,255,.5); }
// .scroll-hint::before { content: ''; display: block; width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,.3)); }

// #vf { min-height: 100vh; }
// .form-wrap { background: var(--paper); max-width: 820px; margin: 0 auto; padding: 0 40px 80px; }

// .fsec { padding: 64px 0 0; position: relative; }
// .fsec + .fsec { border-top: 1px solid var(--line-2); margin-top: 0; padding-top: 64px; }
// .sec-hdr { display: flex; align-items: flex-start; gap: 24px; margin-bottom: 40px; }
// .sec-num { font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.14em; color: var(--ink-4); text-transform: uppercase; padding-top: 3px; min-width: 32px; }
// .sec-info h3 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--ink); margin-bottom: 4px; letter-spacing: -0.02em; }
// .sec-info p { font-size: 13px; color: var(--ink-3); font-weight: 300; }

// .fg { display: grid; gap: 24px; }
// .fg.c2 { grid-template-columns: 1fr 1fr; }
// .fg.c3 { grid-template-columns: 1fr 1fr 1fr; }
// .ff { display: flex; flex-direction: column; gap: 8px; }
// .ff.span2 { grid-column: 1 / -1; }

// .lbl { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); }
// .lbl .r { color: #C04040; margin-left: 3px; }
// .fi, .fsel, .fta { width: 100%; padding: 14px 0; border: none; border-bottom: 1.5px solid var(--line); background: transparent; font-family: var(--font-body); font-size: 15px; font-weight: 400; color: var(--ink); outline: none; transition: border-color 0.2s; border-radius: 0; min-height: 48px; }
// .fi::placeholder, .fta::placeholder { color: var(--ink-4); font-weight: 300; }
// .fi:focus, .fsel:focus, .fta:focus { border-bottom-color: var(--ink); }
// .fi.err, .fsel.err, .fta.err { border-bottom-color: #C04040; }
// .fsel { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23B0AFA9' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0 center; padding-right: 28px; cursor: pointer; }
// .fta { resize: none; min-height: 100px; line-height: 1.7; padding: 14px 0; }
// .fhint { font-size: 12px; color: var(--ink-4); line-height: 1.5; font-weight: 300; }
// .ferr { font-size: 11px; color: #C04040; display: none; font-weight: 500; letter-spacing: 0.02em; }
// .ferr.on { display: block; }

// .char-row { display: flex; justify-content: space-between; align-items: center; }
// .char-ct { font-size: 11px; color: var(--ink-4); }

// .cbg { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
// .cbi { display: flex; align-items: flex-start; gap: 10px; padding: 14px; border: 1px solid var(--line); cursor: pointer; transition: border-color 0.15s, background 0.15s; user-select: none; }
// .cbi:hover { border-color: var(--ink-3); }
// .cbi:has(input:checked) { border-color: var(--ink); background: rgba(12,12,11,.03); }
// .cbi input { width: 15px; height: 15px; margin-top: 1px; accent-color: var(--ink); flex-shrink: 0; cursor: pointer; }
// .cbl { font-size: 13px; color: var(--ink-2); font-weight: 400; line-height: 1.4; }
// .cbi:has(input:checked) .cbl { color: var(--ink); font-weight: 500; }

// .upzone { border: 1.5px dashed var(--line); padding: 48px 40px; text-align: center; cursor: pointer; position: relative; transition: border-color 0.2s, background 0.2s; background: var(--cream); }
// .upzone:hover, .upzone.drag { border-color: var(--ink-2); background: var(--paper); }
// .upzone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; z-index: 2; }
// .up-arrow { font-size: 28px; color: var(--ink-3); margin-bottom: 12px; display: block; transition: transform 0.2s; }
// .upzone:hover .up-arrow { transform: translateY(-4px); }
// .up-title { font-family: var(--font-display); font-size: 17px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
// .up-types { font-size: 13px; color: var(--ink-3); font-weight: 300; margin-bottom: 4px; }
// .up-note { font-size: 11px; color: var(--ink-4); margin-top: 8px; }

// .file-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
// .fchip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--paper); border: 1px solid var(--line); font-size: 12px; font-weight: 500; color: var(--ink-2); max-width: 200px; }
// .fchip-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// .fchip-rm { color: var(--ink-4); cursor: pointer; font-size: 14px; line-height: 1; flex-shrink: 0; transition: color 0.15s; background: none; border: none; font-family: var(--font-body); }
// .fchip-rm:hover { color: var(--ink); }
// .fchip-type { font-size: 9px; font-weight: 700; letter-spacing: 0.06em; color: var(--gold); text-transform: uppercase; flex-shrink: 0; }

// .submit-row { padding: 56px 0 0; border-top: 1px solid var(--line-2); margin-top: 56px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
// .submit-note { font-size: 13px; color: var(--ink-3); font-weight: 300; line-height: 1.6; max-width: 380px; }
// .btn-submit { display: inline-flex; align-items: center; gap: 12px; background: var(--ink); color: #FFFFFF; border: none; padding: 18px 40px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.04em; cursor: pointer; transition: all 0.2s; white-space: nowrap; min-height: 56px; }
// .btn-submit:hover { background: var(--ink-2); transform: translateY(-1px); }
// .btn-submit:active { transform: translateY(0); }
// .btn-submit svg { width: 16px; height: 16px; }

// .about-sec { background: var(--header-bg); padding: 80px 60px; position: relative; }
// .about-top { display: flex; align-items: center; gap: 16px; margin-bottom: 56px; }
// .about-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); }
// .about-line-h { flex: 1; height: 1px; background: rgba(255,255,255,.1); }
// .about-heading { font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 48px; }
// .about-heading span { color: rgba(255,255,255,.3); font-weight: 400; }
// .about-grid { display: grid; grid-template-columns: 1fr 1px 1fr; gap: 48px; margin-bottom: 64px; }
// .about-divider { background: rgba(255,255,255,.08); }
// .about-col-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
// .about-col p { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.55); line-height: 1.75; margin-bottom: 20px; }
// .about-link { font-family: var(--font-display); font-size: 14px; font-weight: 600; color: #FFFFFF; text-decoration: none; letter-spacing: 0.04em; display: inline-flex; align-items: center; gap: 8px; transition: gap 0.2s; }
// .about-link:hover { gap: 14px; }
// .about-footer { padding-top: 32px; border-top: 1px solid rgba(255,255,255,.07); display: flex; align-items: center; justify-content: space-between; }
// .about-copy { font-size: 12px; color: rgba(255,255,255,.2); }
// .mgmt-link { font-size: 11px; color: rgba(255,255,255,.15); cursor: pointer; letter-spacing: 0.06em; transition: color 0.2s; }
// .mgmt-link:hover { color: rgba(255,255,255,.4); }

// #vt { min-height: 100vh; background: var(--header-bg); display: flex; align-items: center; justify-content: center; padding: 60px 40px; }
// .ty-wrap { max-width: 500px; width: 100%; }
// .ty-mark { width: 60px; height: 60px; border: 1.5px solid rgba(255,255,255,.2); display: flex; align-items: center; justify-content: center; margin-bottom: 32px; }
// .ty-mark svg { width: 24px; height: 24px; color: #fff; }
// .ty-kicker { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
// .ty-title { font-family: var(--font-display); font-size: 36px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 16px; }
// .ty-sub { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.45); line-height: 1.7; margin-bottom: 40px; }
// .ty-ref { padding: 20px 24px; border: 1px solid rgba(255,255,255,.1); margin-bottom: 40px; }
// .ty-ref-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.3); margin-bottom: 6px; }
// .ty-ref-val { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--gold); letter-spacing: 0.06em; }
// .ty-steps { display: flex; flex-direction: column; gap: 16px; }
// .ty-step { display: flex; align-items: flex-start; gap: 16px; }
// .ty-sn { width: 24px; height: 24px; border: 1px solid rgba(255,255,255,.15); font-size: 11px; font-weight: 600; color: rgba(255,255,255,.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
// .ty-st { font-size: 13px; color: rgba(255,255,255,.4); font-weight: 300; line-height: 1.6; }
// .ty-st strong { color: rgba(255,255,255,.7); font-weight: 500; display: block; margin-bottom: 2px; }

// #vl { min-height: 100vh; background: var(--d-ink); display: flex; align-items: center; justify-content: center; padding: 40px; }
// .log-wrap { display: grid; grid-template-columns: 1fr 1fr; max-width: 800px; width: 100%; min-height: 480px; border: 1px solid rgba(255,255,255,.08); }
// .log-left { background: #1A1A18; padding: 60px; display: flex; flex-direction: column; justify-content: flex-end; }
// .log-mark { font-family: var(--font-display); font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: auto; padding-top: 0; }
// .log-left h2 { font-family: var(--font-display); font-size: 32px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 12px; line-height: 1.15; }
// .log-left p { font-size: 14px; font-weight: 300; color: rgba(255,255,255,.4); line-height: 1.6; }
// .log-right { background: #FFFFFF; padding: 60px; display: flex; flex-direction: column; justify-content: center; gap: 0; }
// .log-f { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
// .log-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #888; }
// .log-i { width: 100%; padding: 14px 0; border: none; border-bottom: 1.5px solid #E8E8E5; font-family: var(--font-body); font-size: 15px; color: #0C0C0B; outline: none; background: transparent; transition: border-color 0.2s; min-height: 48px; }
// .log-i:focus { border-bottom-color: #0C0C0B; }
// .log-i::placeholder { color: #C0C0BC; }
// .btn-log { width: 100%; padding: 16px; background: #0C0C0B; color: #FFFFFF; border: none; font-family: var(--font-display); font-size: 13px; font-weight: 700; letter-spacing: 0.06em; cursor: pointer; transition: background 0.2s; margin-top: 8px; min-height: 52px; }
// .btn-log:hover { background: #2A2A28; }
// .log-err { font-size: 12px; color: #C04040; margin-top: 12px; display: none; }
// .log-err.on { display: block; }
// .log-back { font-size: 12px; color: #B0B0AC; margin-top: 20px; cursor: pointer; transition: color 0.15s; }
// .log-back:hover { color: #0C0C0B; }

// #vd { min-height: 100vh; background: var(--d-bg); display: flex; font-family: var(--font-ops); }
// .msb { width: 220px; flex-shrink: 0; background: var(--d-sb); display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; z-index: 100; }
// .msb-hdr { padding: 32px 24px; border-bottom: 1px solid rgba(255,255,255,.06); }
// .msb-brand { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #FFFFFF; letter-spacing: 0.02em; }
// .msb-sub { font-size: 11px; color: rgba(255,255,255,.3); margin-top: 3px; }
// .msb-tag { margin-top: 10px; display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.1); padding: 3px 8px; }
// .mnav { flex: 1; padding: 20px 12px; }
// .nsl { font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,.2); padding: 12px 12px 8px; }
// .ni { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; color: rgba(255,255,255,.4); font-size: 13px; font-weight: 400; transition: all 0.15s; border-left: 2px solid transparent; margin-bottom: 1px; user-select: none; }
// .ni:hover { color: rgba(255,255,255,.8); }
// .ni.on { color: #FFFFFF; border-left-color: #FFFFFF; padding-left: 14px; }
// .ni svg { width: 15px; height: 15px; flex-shrink: 0; }
// .nbdg { margin-left: auto; font-size: 11px; font-weight: 700; color: rgba(255,255,255,.3); font-variant-numeric: tabular-nums; }
// .msb-ft { padding: 16px 12px; border-top: 1px solid rgba(255,255,255,.06); }
// .btn-out { display: flex; align-items: center; gap: 10px; padding: 10px 12px; cursor: pointer; color: rgba(255,255,255,.3); font-size: 12px; transition: color 0.15s; background: none; border: none; font-family: var(--font-ops); width: 100%; }
// .btn-out:hover { color: rgba(255,255,255,.7); }
// .btn-out svg { width: 14px; height: 14px; }

// .mmain { flex: 1; margin-left: 220px; display: flex; flex-direction: column; }
// .mtop { background: #FFFFFF; border-bottom: 1px solid var(--d-line); padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 60px; flex-shrink: 0; }
// .mpgt { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.01em; }
// .btn-exp { display: flex; align-items: center; gap: 8px; padding: 8px 16px; border: 1.5px solid var(--d-line); border-radius: 0; background: white; color: var(--d-ink2); font-family: var(--font-ops); font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; letter-spacing: 0.04em; }
// .btn-exp:hover { border-color: var(--d-ink); color: var(--d-ink); }
// .btn-exp svg { width: 13px; height: 13px; }

// .mcont { flex: 1; overflow-y: auto; }
// .apanel { display: none; }
// .apanel.on { display: block; }

// .stat-strip { display: flex; border-bottom: 1px solid var(--d-line); }
// .stat-item { flex: 1; padding: 32px 40px; border-right: 1px solid var(--d-line); }
// .stat-item:last-child { border-right: none; }
// .stat-n { font-family: var(--font-display); font-size: 48px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px; font-variant-numeric: tabular-nums; }
// .stat-l { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--d-ink3); }

// .pcont { padding: 40px; }

// .bk-title { font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.01em; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
// .bk-title::after { content: ''; flex: 1; height: 1px; background: var(--d-line); }
// .bars { display: flex; flex-direction: column; gap: 14px; }
// .bri { display: flex; align-items: center; gap: 16px; }
// .brn { font-size: 12px; color: var(--d-ink2); width: 200px; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// .brtr { flex: 1; height: 3px; background: var(--d-line); }
// .brfl { height: 100%; background: var(--d-ink); transition: width .6s ease; }
// .brct { font-size: 12px; font-weight: 700; color: var(--d-ink); width: 24px; text-align: right; font-variant-numeric: tabular-nums; }

// .tbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
// .tsr { position: relative; flex: 1; max-width: 300px; }
// .tsr svg { position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--d-ink3); }
// .tsri { width: 100%; padding: 10px 0 10px 22px; border: none; border-bottom: 1px solid var(--d-line); font-family: var(--font-ops); font-size: 13px; color: var(--d-ink); outline: none; background: transparent; transition: border-color .15s; }
// .tsri:focus { border-bottom-color: var(--d-ink); }
// .tsri::placeholder { color: var(--d-ink3); }
// .tfilts { display: flex; gap: 8px; }
// .tfs { padding: 8px 28px 8px 0; border: none; border-bottom: 1px solid var(--d-line); font-family: var(--font-ops); font-size: 12px; color: var(--d-ink2); outline: none; cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239A9A97' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 4px center; background-color: transparent; min-height: 36px; }
// .tfs:focus { border-bottom-color: var(--d-ink); }
// table { width: 100%; border-collapse: collapse; }
// th { padding: 12px 16px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); border-bottom: 1.5px solid var(--d-ink); white-space: nowrap; }
// td { padding: 16px; font-size: 13px; color: var(--d-ink2); border-bottom: 1px solid var(--d-line2); vertical-align: middle; }
// tbody tr { cursor: pointer; transition: background 0.1s; }
// tbody tr:hover td { background: var(--d-off); }
// tbody tr:hover td:first-child { border-left: 2px solid var(--d-ink); padding-left: 14px; }
// .td-name { font-weight: 600; color: var(--d-ink); font-size: 13px; }
// .td-desig { font-size: 11px; color: var(--d-ink3); margin-top: 2px; }
// .td-title { font-weight: 500; color: var(--d-ink); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// .td-org { max-width: 130px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// .tag { display: inline-block; padding: 3px 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; }
// .tag.sec { background: rgba(0,0,0,.05); color: var(--d-ink2); }
// .tag.ok { background: #0C0C0B; color: #FFFFFF; }
// .tag.pd { border: 1px solid var(--d-line); color: var(--d-ink3); }
// .tag.dept { border: 1px dashed var(--d-line); color: var(--d-ink3); font-size: 9px; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
// .btn-vw { padding: 6px 14px; border: 1.5px solid var(--d-ink); color: var(--d-ink); font-family: var(--font-ops); font-size: 11px; font-weight: 700; cursor: pointer; transition: all .15s; background: transparent; letter-spacing: 0.06em; white-space: nowrap; text-transform: uppercase; }
// .btn-vw:hover { background: var(--d-ink); color: #FFFFFF; }
// .te { text-align: center; padding: 64px 24px; }
// .te-ico { font-size: 32px; margin-bottom: 12px; opacity: .15; }
// .te p { font-size: 13px; color: var(--d-ink3); }

// #modal { position: fixed; inset: 0; background: rgba(0,0,0,.6); z-index: 500; display: flex; align-items: flex-start; justify-content: center; padding: 40px 20px; overflow-y: auto; backdrop-filter: blur(2px); }
// .mc { background: #FFFFFF; width: 100%; max-width: 1040px; border-top: 3px solid var(--d-ink); box-shadow: 0 32px 80px rgba(0,0,0,.25); margin: auto; position: relative; }
// .mc-hdr { display: flex; align-items: flex-start; justify-content: space-between; padding: 32px 40px; border-bottom: 1px solid var(--d-line); }
// .mc-ttl { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--d-ink); letter-spacing: -0.02em; margin-bottom: 4px; }
// .mc-sub { font-size: 13px; color: var(--d-ink3); }
// .mc-cls { width: 36px; height: 36px; border: 1.5px solid var(--d-line); background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--d-ink3); transition: all .15s; flex-shrink: 0; }
// .mc-cls:hover { border-color: var(--d-ink); color: var(--d-ink); }
// .mc-cls svg { width: 16px; height: 16px; }

// .mtabs { display: flex; padding: 0 40px; border-bottom: 1px solid var(--d-line); gap: 0; }
// .mtab { padding: 14px 20px; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: var(--d-ink3); cursor: pointer; border-bottom: 2px solid transparent; transition: all .15s; user-select: none; display: flex; align-items: center; gap: 6px; text-transform: uppercase; }
// .mtab:hover { color: var(--d-ink2); }
// .mtab.on { color: var(--d-ink); border-bottom-color: var(--d-ink); }
// .tp { font-size: 9px; padding: 2px 6px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
// .tp.ok { background: #0C0C0B; color: #FFF; }
// .tp.pd { border: 1px solid var(--d-line); color: var(--d-ink3); }
// .mpanel { display: none; padding: 40px; }
// .mpanel.on { display: block; }

// .ds { margin-bottom: 32px; }
// .dst { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid var(--d-line); }
// .dg { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 16px; }
// .dg.c2 { grid-template-columns: 1fr 1fr; }
// .dl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 4px; }
// .dv { font-size: 14px; font-weight: 400; color: var(--d-ink); line-height: 1.5; }
// .dv.sm { font-size: 13px; color: var(--d-ink2); line-height: 1.7; }
// .stags { display: flex; flex-wrap: wrap; gap: 6px; }
// .stag { padding: 4px 10px; border: 1px solid var(--d-line); font-size: 11px; color: var(--d-ink2); font-weight: 500; }
// .files-list { display: flex; flex-direction: column; gap: 6px; }
// .f-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--d-line2); }
// .f-item:last-child { border-bottom: none; }
// .f-ext { font-size: 9px; font-weight: 700; letter-spacing: 0.08em; background: var(--d-off); padding: 4px 7px; color: var(--d-ink3); min-width: 36px; text-align: center; }
// .f-nm { font-size: 13px; color: var(--d-ink2); }
// .f-sz { font-size: 11px; color: var(--d-ink3); margin-left: auto; }

// .nvbi-block { display: flex; align-items: flex-start; gap: 40px; padding: 32px 0; border-bottom: 1px solid var(--d-line); margin-bottom: 32px; }
// .nvbi-score-num { font-family: var(--font-display); font-size: 80px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.05em; line-height: 1; font-variant-numeric: tabular-nums; }
// .nvbi-score-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--d-ink3); margin-top: 4px; }
// .nvbi-div { width: 1px; background: var(--d-line); align-self: stretch; flex-shrink: 0; }
// .nvbi-exec { flex: 1; }
// .nvbi-exec-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 12px; }
// .nvbi-exec-txt { font-size: 14px; color: var(--d-ink2); line-height: 1.7; font-weight: 300; }
// .nvbi-state { font-size: 24px; font-weight: 700; color: var(--d-ink); margin-bottom: 12px; font-family: var(--font-display); }

// .pillar-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
// .pillar-row { display: flex; align-items: center; gap: 16px; }
// .pillar-name { font-size: 12px; font-weight: 600; color: var(--d-ink2); width: 110px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.04em; }
// .pillar-bar { flex: 1; height: 3px; background: var(--d-line); }
// .pillar-fill { height: 100%; background: var(--d-ink); transition: width .8s ease; }
// .pillar-score { font-size: 12px; font-weight: 700; color: var(--d-ink); width: 36px; text-align: right; font-variant-numeric: tabular-nums; }
// .pillar-ins { font-size: 12px; color: var(--d-ink3); line-height: 1.5; margin-top: 4px; padding-left: 126px; }

// .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 32px; }
// .ab-title { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid var(--d-line); }
// .ab-list { display: flex; flex-direction: column; gap: 10px; }
// .ab-item { font-size: 13px; color: var(--d-ink2); line-height: 1.55; padding-left: 14px; position: relative; }
// .ab-item::before { content: '—'; position: absolute; left: 0; color: var(--d-ink3); font-size: 11px; }

// .rec-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
// .rec-item { display: flex; align-items: flex-start; gap: 16px; padding: 14px 0; border-bottom: 1px solid var(--d-line2); }
// .rec-n { font-family: var(--font-display); font-size: 11px; font-weight: 800; color: var(--d-ink3); min-width: 20px; margin-top: 1px; }
// .rec-t { font-size: 13px; color: var(--d-ink2); line-height: 1.6; }

// .mbox { border-left: 3px solid var(--d-ink); padding: 20px 24px; background: var(--d-off); margin-bottom: 32px; }
// .mbox-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
// .mbox-txt { font-size: 14px; color: var(--d-ink); line-height: 1.65; font-weight: 400; }

// .gov-box { padding: 20px 0; border-top: 1px solid var(--d-line); }
// .gov-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
// .gov-txt { font-size: 13px; color: var(--d-ink2); line-height: 1.65; font-weight: 300; }

// .pending-state { padding: 64px 0; text-align: center; }
// .pending-ico { font-size: 28px; margin-bottom: 16px; opacity: .15; }
// .pending-title { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--d-ink); margin-bottom: 8px; }
// .pending-sub { font-size: 13px; color: var(--d-ink3); margin-bottom: 24px; font-weight: 300; }
// .btn-gen { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; background: transparent; border: 1.5px solid var(--d-ink); font-family: var(--font-ops); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--d-ink); cursor: pointer; transition: all .15s; }
// .btn-gen:hover { background: var(--d-ink); color: #FFFFFF; }
// .btn-gen svg { width: 15px; height: 15px; }
// .gen-loading { display: flex; flex-direction: column; align-items: center; padding: 64px 0; gap: 16px; }
// .gen-spin { width: 28px; height: 28px; border: 2px solid var(--d-line); border-top-color: var(--d-ink); border-radius: 50%; animation: spin .8s linear infinite; }
// .gen-loading p { font-size: 13px; color: var(--d-ink3); }

// .opp-row { display: flex; align-items: center; gap: 40px; padding: 32px 0; border-bottom: 1px solid var(--d-line); margin-bottom: 32px; }
// .opp-num-big { font-family: var(--font-display); font-size: 64px; font-weight: 800; color: var(--d-ink); letter-spacing: -0.04em; line-height: 1; }
// .opp-denom { font-size: 24px; font-weight: 300; color: var(--d-ink3); }
// .opp-label { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--d-ink); margin-bottom: 6px; }
// .opp-rat { font-size: 13px; color: var(--d-ink3); line-height: 1.5; font-weight: 300; max-width: 300px; }
// .opp-div { width: 1px; background: var(--d-line); align-self: stretch; }
// .opp-meta-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 4px; margin-top: 12px; }
// .opp-meta-val { font-size: 14px; color: var(--d-ink); font-weight: 500; }
// .res-sec { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid var(--d-line2); }
// .res-sec:last-child { border-bottom: none; }
// .res-sec-ttl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 8px; }
// .res-sec-txt { font-size: 13px; color: var(--d-ink2); line-height: 1.7; font-weight: 300; }
// .ins-list { display: flex; flex-direction: column; gap: 10px; }
// .ins-item { display: flex; align-items: flex-start; gap: 14px; font-size: 13px; color: var(--d-ink2); line-height: 1.55; }
// .ins-n { font-size: 11px; font-weight: 800; color: var(--d-ink3); min-width: 16px; margin-top: 1px; font-family: var(--font-display); }
// .strat-block { border-top: 2px solid var(--d-ink); padding-top: 24px; margin-top: 32px; }
// .strat-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--d-ink3); margin-bottom: 10px; }
// .strat-txt { font-family: var(--font-display); font-size: 18px; font-weight: 600; color: var(--d-ink); line-height: 1.4; letter-spacing: -0.01em; }

// #proc { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 999; backdrop-filter: blur(3px); }
// .pcard { background: #FFFFFF; padding: 48px; max-width: 360px; width: 90%; text-align: center; }
// .p-spin { width: 40px; height: 40px; border: 2.5px solid #E8E8E5; border-top-color: #0C0C0B; border-radius: 50%; animation: spin .8s linear infinite; margin: 0 auto 24px; }
// .pcard h3 { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: #0C0C0B; margin-bottom: 8px; }
// .pcard p { font-size: 13px; color: #9A9A97; line-height: 1.6; font-weight: 300; }

// .tc { position: fixed; bottom: 24px; right: 24px; z-index: 2000; display: flex; flex-direction: column; gap: 8px; }
// .toast { padding: 14px 20px; font-family: var(--font-ops); font-size: 13px; font-weight: 500; animation: slideIn .25s ease; max-width: 320px; }
// .toast.ok { background: #0C0C0B; color: #FFFFFF; }
// .toast.er { background: #C04040; color: #FFFFFF; }
// .toast.in { background: #3A3A38; color: #FFFFFF; }

// @keyframes spin { to { transform: rotate(360deg); } }
// @keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: none; opacity: 1; } }

// @media (max-width: 768px) {
//   .site-hdr { padding: 24px; min-height: 70vh; }
//   .hdr-top { padding: 20px 24px; }
//   .form-wrap { padding: 0 24px 60px; }
//   .about-sec { padding: 60px 24px; }
//   .about-grid { grid-template-columns: 1fr; }
//   .about-divider { display: none; }
//   .fg.c2, .fg.c3, .cbg { grid-template-columns: 1fr; }
//   .submit-row { flex-direction: column; align-items: flex-start; }
//   .btn-submit { width: 100%; justify-content: center; }
//   .log-wrap { grid-template-columns: 1fr; }
//   .log-left { min-height: 200px; padding: 40px; }
//   .msb { display: none; } .mmain { margin-left: 0; }
//   .stat-strip { flex-wrap: wrap; }
//   .stat-item { min-width: 50%; }
//   .dg, .two-col { grid-template-columns: 1fr; }
//   .nvbi-block { flex-direction: column; }
// }
// `;