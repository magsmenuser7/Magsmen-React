import { useState, useEffect, useRef } from "react"
import { Check } from "lucide-react"
import {
  TESTIMONIALS_DATA,
  FAQS,
  CONTACT_FORM_URL,
  POPUP_FORM_URL,
  INLINE_FORM_URL,
} from "../data/index"
import popupImg from "/assets/your-strategic-journey-to-brand-success-begins-here-3-popup.jpg"

// ─── FORMSPREE CONFIG ─────────────────────────────────────────────────────
// const FORMSPREE_ID = "mkoavvrn"
// const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`


// const POPUP_URL = import.meta.env.VITE_FORMSPREE_POPUP;

// const CONTACT_URL = import.meta.env.VITE_FORMSPREE_CONTACT;

// const INLINE_URL = import.meta.env.VITE_FORMSPREE_INLINE;

// ─── SINGLE SUBMIT HELPER — takes URL as parameter ────────────────────────
async function submitToFormspree(
  url: string,
  payload: Record<string, string>
): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    })
    return res.ok
  } catch (err) {
    console.error("Formspree error:", err)
    return false
  }
}
// ─── COUNTER ──────────────────────────────────────────────────────────────
export function Counter({ target }: { target: string }) {
  const [v, setV] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true
          const num = parseInt(target.replace(/\D/g, "")) || 0
          const steps = 60; let cur = 0
          const t = setInterval(() => {
            cur = Math.min(cur + num / steps, num)
            setV(Math.floor(cur))
            if (cur >= num) clearInterval(t)
          }, 1600 / steps)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  const suf = target.match(/[^\d]+$/)?.[0] || ""
  return <span ref={ref}>{v}{suf}</span>
}

// ─── REVEAL HOOK ──────────────────────────────────────────────────────────
export function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref?.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("on"); obs.unobserve(e.target) } })
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" })
    ref.current.querySelectorAll(".rv,.tl-wrap").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ref])
}

// ─── TIMELINE REVEAL ──────────────────────────────────────────────────────
export function useTimelineReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref?.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("on")
          const items = e.target.querySelectorAll(".tl-item")
          items.forEach((item, i) => setTimeout(() => item.classList.add("node-on"), 200 + i * 160))
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.05 })
    ref.current.querySelectorAll(".tl-wrap").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ref])
}

// ─── TESTIMONIALS BAR ─────────────────────────────────────────────────────
export function TestimonialsBar() {
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

// ─── MEDIA STRIP ──────────────────────────────────────────────────────────
export function MediaStrip() {
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

// ─── CLIENT BAR ───────────────────────────────────────────────────────────
export function ClientBar() {
  const clients = ["Tenali Double Horse","Telugu Foods","Kalanikethan","VSB Group","Suma Kanakala","Rajeev Kanakala","Roshan Kanakala","Shyam Prasad Munagala","Dr. Srujana Abadala","Dr. Mamatha","Triplex","Arjun Sai Exports","Srinivas Narni"]
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

// ─── FAQ SECTION ──────────────────────────────────────────────────────────
interface FAQItem {
  q: string
  a: React.ReactNode
}

interface FAQSectionProps {
  items: FAQItem[]
}

export function FAQSection({ items }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {items.map((f: FAQItem, i: number) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}<span className="faq-icon">+</span>
          </button>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// FORM 1 — CONTACT FORM (Contact page)
// Sends to Formspree: Name, Company, Mobile, Service Interest
// ════════════════════════════════════════════════════════════════════════════
export function ContactForm({ title, sub, context }: { title?: string; sub?: string; context?: string }) {
  const [form, setForm] = useState({ name: "", company: "", mobile: "", email: "", service: context || "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")
  const up = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))
  const valid = form.name.trim().length > 0 && form.mobile.trim().length > 0 && (!form.email.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))

  const submit = async () => {
    if (!valid || status === "sending") return
    setStatus("sending")
    const ok = await submitToFormspree(CONTACT_FORM_URL, {
      _subject: `Contact — ${form.name}`,
      "Form": "Contact Form",
      "Full Name": form.name,
      "Company": form.company || "Not provided",
      "Mobile": form.mobile,
      "Email": form.email || "Not provided",
      "Service Interest": form.service || "Not specified",
    })
    setStatus(ok ? "done" : "error")
  }

if (status === "done") return (
  <div className="form-ok">
    <div className="form-ok-icon">✓</div>
    <h3>Your details have been sent.</h3>
    <p>Our strategy associate will reach out personally within 24 hours.</p>
    <button
      className="bo-sm"
      style={{ marginTop: "1rem" }}
      onClick={() => {
        setStatus("idle")
        setForm({ name: "", email: "", company: "", mobile: "", service: "" })
      }}
    >
      Send another inquiry
    </button>
  </div>
)
  return (
    <div>
      {title && <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: ".35rem" }}>{title}</h3>}
      {sub && <p style={{ fontSize: ".93rem", color: "#555", marginBottom: "2rem", lineHeight: 1.8, fontWeight: 300 }}>{sub}</p>}
      <div className="cform-grid">
        <div className="cfield req">
          <label>Full Name</label>
          <input type="text" placeholder="Your full name" value={form.name} onChange={e => up("name", e.target.value)} />
        </div>
              <div className="cfield">
                  <label>Company</label>
                  <input type="text" placeholder="Your company or brand" value={form.company} onChange={e => up("company", e.target.value)} />
              </div>
              <div className="cfield req">
                  <label>Mobile</label>
                  <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => up("mobile", e.target.value)} />
              </div>

              <div className="cfield req">
                  <label>Email</label>

                  <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => up("email", e.target.value)}
                  />
              </div>
              <div className="cfield">
          <label>How can we help?</label>
          <select value={form.service} onChange={e => up("service", e.target.value)}>
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
      {status === "error" && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 6, padding: "10px 14px", fontSize: "13px", color: "#991B1B", marginBottom: "1rem" }}>
          Something went wrong. Please try again or email us at connect@magsmen.com
        </div>
      )}
      <button className="bf" onClick={submit} disabled={!valid || String(status) === "sending"} style={{ opacity: valid && String(status) !== "sending" ? 1 : .4 }}>
        {String(status) === "sending" ? "Sending..." : "Send details →"}
      </button>
      <p className="form-note">Our strategy associate will reach out to you personally within 24 hours.</p>
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// FORM 2 — INLINE ASSESSMENT FORM (Brand page and other service pages)
// Multi-question with options → contact details → sends to Formspree
// Screenshot 3 and 4
// ════════════════════════════════════════════════════════════════════════════
export function InlineForm({ title, sub, questions }: {
  title: string
  sub: string
  questions: { q: string; opts: string[] }[]
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [stage, setStage] = useState<"q" | "contact">("q")
  const [form, setForm] = useState({ name: "", company: "", mobile: "", email: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const toggle = (qi: number, opt: string) => setAnswers(p => ({ ...p, [qi]: p[qi] === opt ? "" : opt }))
  const allAnswered = questions.every((_, i) => answers[i])
  const upf = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))
  const valid = form.name.trim().length > 0 && form.mobile.trim().length > 0 && form.email.trim().length > 0

  const submit = async () => {
    if (!valid || status === "sending") return
    setStatus("sending")

    const answersPayload = questions.reduce((acc, q, i) => ({
      ...acc,
      [`Q${i + 1}: ${q.q}`]: answers[i] || "Not answered",
    }), {} as Record<string, string>)

const ok = await submitToFormspree(INLINE_FORM_URL, {
  _subject: `Assessment — ${form.name}`,
  "Form": "Inline Assessment Form",
  "Full Name": form.name,
  "Company": form.company || "Not provided",
  "Mobile": form.mobile,
  "Email": form.email,
  ...answersPayload,
})

    setStatus(ok ? "done" : "error")
  }

  if (status === "done") return (
    <div className="iform">
      <div className="form-ok">
        <div className="form-ok-icon">✓</div>
        <h3>We have received your answers.</h3>
        <p>Our strategy associate will reach out personally within 24 hours to discuss the right engagement for your situation.</p>
        <button className="bo-sm" style={{ marginTop: "1rem" }} onClick={() => { setStatus("idle"); setStage("q"); setAnswers({}); setForm({ name: "", company: "", mobile: "", email: "" }) }}>
          Start over
        </button>
      </div>
    </div>
  )

  return (
    <div className="iform">
      {/* ── STAGE 1: Questions (Screenshot 3) ── */}
      {stage === "q" && (
        <>
          <h3 className="iform-h">{title}</h3>
          <p className="iform-sub">{sub}</p>
          {questions.map((q, qi) => (
            <div key={qi} className="iform-q">
              <div className="iform-qh">{q.q}</div>
              <div className="iform-opts">
                {q.opts.map((opt, oi) => (
                  <div
                    key={oi}
                    className={`iform-opt${answers[qi] === opt ? " sel" : ""}`}
                    onClick={() => toggle(qi, opt)}
                  >
                    <div className="iform-cb">
                      {answers[qi] === opt && <Check size={11} color="#fff" strokeWidth={3} />}
                    </div>
                    <span className="iform-ot">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="bf"
            onClick={() => setStage("contact")}
            disabled={!allAnswered}
            style={{ opacity: allAnswered ? 1 : .4 }}
          >
            Continue →
          </button>
        </>
      )}

      {/* ── STAGE 2: Contact Details (Screenshot 4) ── */}
      {stage === "contact" && (
        <>
          <h3 className="iform-h">One last step</h3>
          <p className="iform-sub" style={{ color: "var(--gold, #888)" }}>
            Our strategy associate will reach out personally within 24 hours.
          </p>
          <div className="cform-grid">
            <div className="cfield req">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" value={form.name} onChange={e => upf("name", e.target.value)} />
            </div>
            <div className="cfield req">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" value={form.email} onChange={e => upf("email", e.target.value)} />
            </div>
            <div className="cfield">
              <label>Company</label>
              <input type="text" placeholder="Your company" value={form.company} onChange={e => upf("company", e.target.value)} />
            </div>
            <div className="cfield req">
              <label>Mobile</label>
              <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => upf("mobile", e.target.value)} />
            </div>
            
          </div>
          {status === "error" && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 6, padding: "10px 14px", fontSize: "13px", color: "#991B1B", marginBottom: "1rem" }}>
              Something went wrong. Please try again or email us at connect@magsmen.com
            </div>
          )}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button
              className="bf"
              onClick={submit}
              disabled={!valid || String(status) === "sending"}
              style={{ opacity: valid && String(status) !== "sending" ? 1 : .4 }}
            >
              {String(status) === "sending" ? "Sending..." : "Send my answers →"}
            </button>
            <button className="bo-sm" onClick={() => setStage("q")}>Back</button>
          </div>
          <p className="form-note">Our strategy associate will reach out personally within 24 hours.</p>
        </>
      )}
    </div>
  )
}

// ─── HERO STATEMENT ───────────────────────────────────────────────────────
const STMTS = [
  [{ t: "Your business grew.", w: 300, i: true }, { t: "Your brand did not.", w: 900, i: false }, { t: "That gap is the problem.", w: 300, i: false }],
  [{ t: "Every rupee spent on advertising", w: 300, i: true }, { t: "before you built your brand", w: 900, i: false }, { t: "amplified confusion, not clarity.", w: 300, i: false }],
  [{ t: "A name without a trademark", w: 300, i: false }, { t: "is an asset someone else can take.", w: 900, i: false }, { t: "Most founders discover this after it is gone.", w: 300, i: true }],
  [{ t: "Your business runs when you are there.", w: 300, i: true }, { t: "That is not a business.", w: 900, i: false }, { t: "That is a job with a logo.", w: 300, i: false }],
  [{ t: "Your competitor did not outspend you.", w: 300, i: false }, { t: "They out-positioned you.", w: 900, i: false }, { t: "There is a difference. It is structural.", w: 300, i: true }],
  [{ t: "Diagnosis before strategy.", w: 900, i: false }, { t: "Strategy before marketing.", w: 300, i: false }, { t: "Marketing after everything else. In that exact order.", w: 300, i: true }],
]

export function StatementHero() {
  const [stmts] = useState(() => [...STMTS].sort(() => Math.random() - .5).slice(0, 5))
  const [cur, setCur] = useState(0)
  const [phase, setPhase] = useState<"visible" | "entering" | "exiting">("visible")

  useEffect(() => {
    const iv = setInterval(() => {
      setPhase("exiting")
      setTimeout(() => {
        setCur(c => (c + 1) % stmts.length)
        setPhase("entering")
        requestAnimationFrame(() => requestAnimationFrame(() => setPhase("visible")))
      }, 380)
    }, 5000)
    return () => clearInterval(iv)
  }, [stmts.length])

  const goTo = (i: number) => {
    if (i === cur) return
    setPhase("exiting")
    setTimeout(() => {
      setCur(i); setPhase("entering")
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("visible")))
    }, 320)
  }

  const stmt = stmts[cur]
  return (
    <>
      <div className="hero-stmt-wrap">
        <div className={`hero-stmt ${phase}`}>
          {stmt.map((line, i) => (
            <div key={i} className="stmt-line">
              <span className="stmt-inner">
                <span className={line.i ? "stmt-w300i" : line.w === 900 ? "stmt-w900" : "stmt-w300"}>{line.t}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="stmt-dots">
        {stmts.map((_, i) => (
          <div key={i} className={`stmt-dot${i === cur ? " active" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// FORM 3 — POPUP ASSESSMENT FORM (Screenshot 1)
// 4-question quiz → personal details → recommendation → sends to Formspree
// ════════════════════════════════════════════════════════════════════════════
const POPUP_QS = [
  { q: "What best describes your business?", opts: ["A growing regional brand (3 to 15 years old)", "A family business ready for the next chapter", "A new venture being built from scratch", "An established business needing repositioning"] },
  { q: "What is your primary challenge?", opts: ["My brand is not clearly defined or differentiated", "My business needs structural and operational clarity", "My brand is not legally protected", "All of these. I need integrated advisory"] },
  { q: "What outcome matters most?", opts: ["Build a brand that becomes a recognisable asset", "Create a business structure that runs without me", "Protect what I have built legally", "Scale with a clear strategic foundation"] },
  { q: "When are you looking to begin?", opts: ["Immediately. This is urgent", "Within the next 1 to 3 months", "Planning for later this year", "Just exploring right now"] },
]

function getRecommendation(answers: Record<number, string>) {
  const q2 = answers[1] || ""
  if (q2.includes("All of these")) return { label: "Strategic Partner", desc: "You need integrated advisory across brand, business, and legal. The Strategic Partner model is built for exactly this." }
  if (q2.includes("legally")) return { label: "OTC — Legal Brand Protection Focus", desc: "Your most urgent priority is protecting what you have built. An OTC session focused on legal brand protection is the right first step." }
  if (q2.includes("structural")) return { label: "OTC — Business Structuring Focus", desc: "Your business needs structural clarity. An OTC engagement will diagnose the gaps and produce a clear framework." }
  return { label: "Brand Advisory Retainer", desc: "An ongoing Advisory Retainer would give your business the strategic counsel and accountability to make real progress." }
}

export function PopupForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [stage, setStage] = useState<"quiz" | "contact" | "done">("quiz")
  const [form, setForm] = useState({ name: "", company: "", mobile: "", email: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")

  const rec = getRecommendation(answers)
  const selOpt = (opt: string) => setAnswers(p => ({ ...p, [step]: opt }))
  const upf = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))
  const valid = form.name.trim().length > 0 && form.mobile.trim().length > 0

  const handleNext = () => {
    if (step < POPUP_QS.length - 1) setStep(s => s + 1)
    else setStage("contact")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid || status === "sending") return
    setStatus("sending")

    const answersPayload = POPUP_QS.reduce((acc, q, i) => ({
      ...acc,
      [`Q${i + 1}: ${q.q}`]: answers[i] || "Not answered",
    }), {} as Record<string, string>)

const ok = await submitToFormspree(POPUP_FORM_URL, {
  _subject: `Popup — ${form.name}`,
  "Form": "Popup Assessment Form",
  "Full Name": form.name,
  "Company": form.company || "Not provided",
  "Mobile": form.mobile,
  "Email": form.email,
  "Recommended Engagement": rec.label,
  ...answersPayload,
})

    if (ok) {
      setStage("done")
      setStatus("idle")
    } else {
      setStatus("error")
    }
  }

  const q = POPUP_QS[step]

  return (
    <div className="pop-ov" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="pop-box">
        {/* Left image panel */}
        <div className="pop-image-side">
          <img src={popupImg} alt="Magsmen — GCC Leadership Conclave" />
        </div>

        {/* Right content panel */}
        <div className="pop-content-side">
          <button className="pop-close" onClick={onClose}>✕</button>

          {/* ── DONE STATE ── */}
          {stage === "done" && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, background: "#0A0A0A", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", marginBottom: "1.5rem" }}>✓</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: ".5rem" }}>Details sent.</h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6, marginBottom: "1.5rem" }}>Our strategy associate will reach out personally within 24 hours.</p>
              <button className="bo-sm" onClick={onClose}>Close</button>
            </div>
          )}

          {/* ── QUIZ STAGE (Screenshot 1) ── */}
          {stage === "quiz" && (
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="pop-badge">Find your starting point</div>
              <h2 className="pop-h">Four questions to understand your situation</h2>
              <p className="pop-p">Answer these and we will recommend the right engagement.</p>

              {/* Progress dots */}
              <div className="pop-prog">
                {POPUP_QS.map((_, i) => <div key={i} className={`pop-dot${i <= step ? " done" : ""}`} />)}
              </div>

              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: ".75rem" }}>
                  Question {step + 1} of {POPUP_QS.length}
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.25rem", color: "#111", lineHeight: 1.3 }}>{q.q}</div>

                {/* Radio-style options */}
                <div style={{ display: "flex", flexDirection: "column", gap: ".6rem" }}>
                  {q.opts.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => selOpt(opt)}
                      style={{
                        display: "flex", alignItems: "center", gap: "1rem",
                        padding: "12px 16px", border: `1.5px solid ${answers[step] === opt ? "#0A0A0A" : "#E5E7EB"}`,
                        borderRadius: 8, cursor: "pointer",
                        background: answers[step] === opt ? "#F8F8F8" : "#fff",
                        transition: "border-color .15s, background .15s",
                      }}
                    >
                      {/* Radio circle */}
                      <div style={{
                        width: 20, height: 20, borderRadius: "50%",
                        border: `2px solid ${answers[step] === opt ? "#0A0A0A" : "#D1D5DB"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, transition: "border-color .15s",
                      }}>
                        {answers[step] === opt && (
                          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#0A0A0A" }} />
                        )}
                      </div>
                      <span style={{ fontSize: "14px", fontWeight: 400, color: "#111" }}>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <button
                  type="button"
                  className="bf"
                  style={{ width: "100%", justifyContent: "center", opacity: answers[step] ? 1 : .4 }}
                  disabled={!answers[step]}
                  onClick={handleNext}
                >
                  {step < POPUP_QS.length - 1 ? "Next Step →" : "See Recommendation →"}
                </button>
                <button type="button" className="pop-skip" onClick={onClose}>
                  Skip and explore the website
                </button>
              </div>
            </form>
          )}

          {/* ── CONTACT STAGE after quiz ── */}
          {stage === "contact" && (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div className="pop-badge">Based on your answers</div>
              <h2 className="pop-h">Our recommendation</h2>

              {/* Recommendation box */}
              <div className="pop-rec">
                <div className="pop-rec-lbl">Recommended engagement</div>
                <div className="pop-rec-h">{rec.label}</div>
                <p className="pop-rec-p">{rec.desc}</p>
              </div>

              <p style={{ fontSize: ".93rem", color: "#4b5563", marginTop: "1.5rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                Leave your details and our strategy associate will reach out personally.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexGrow: 1 }}>
                <div className="cfield req">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={e => upf("name", e.target.value)} required />
                </div>
                <div className="cfield req">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => upf("email", e.target.value)} required />
                </div>
                <div className="cfield">
                  <label>Company</label>
                  <input type="text" placeholder="Your company or brand" value={form.company} onChange={e => upf("company", e.target.value)} />
                </div>
                <div className="cfield req">
                  <label>Mobile</label>
                  <input type="tel" placeholder="+91 98765 43210" value={form.mobile} onChange={e => upf("mobile", e.target.value)} required />
                </div>
              </div>

              {status === "error" && (
                <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 6, padding: "10px 14px", fontSize: "13px", color: "#991B1B", margin: "1rem 0" }}>
                  Something went wrong. Please email connect@magsmen.com directly.
                </div>
              )}

              <div style={{ marginTop: "1.5rem" }}>
                <button
                  type="submit"
                  className="bf"
                  style={{ width: "100%", justifyContent: "center", opacity: valid && status !== "sending" ? 1 : .4 }}
                  disabled={!valid || status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send details →"}
                </button>
                <button type="button" className="pop-skip" onClick={() => setStage("quiz")}>
                  Back to questions
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
