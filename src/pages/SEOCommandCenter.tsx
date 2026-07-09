import { useState, useEffect, useRef, ReactNode } from "react";

// ─── CSS ───────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#F5F0E8;--white:#fff;--it:#FF6B35;--it2:#E55D28;--mg:#2563EB;--dark:#1A1A2E;--ok:#10B981;--err:#EF4444;--warn:#F59E0B;--text:#1A1A2E;--muted:#6B7280;--bd:#E5DDD0;--bd2:#D4CFC7;--bg2:#EDE8DF}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
.hdr{background:var(--white);border-bottom:2px solid var(--it);padding:13px 22px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 10px rgba(0,0,0,.06)}
.hdr-logo{font-size:16px;font-weight:700}.hdr-logo span{color:var(--it)}
.hdr-sub{font-size:11px;color:var(--muted);margin-top:1px}
.pills{display:flex;gap:7px}.pill{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;border:1px solid}
.p-mg{background:#DBEAFE;color:var(--mg);border-color:#BFDBFE}
.p-it{background:#FFF0EB;color:var(--it);border-color:#FECDB5}
.p-ok{background:#D1FAE5;color:#065F46;border-color:#A7F3D0}
.p-err{background:#FEE2E2;color:#991B1B;border-color:#FECACA}
.tabs-bar{background:var(--white);border-bottom:1px solid var(--bd);padding:0 22px;display:flex;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.tab{padding:12px 16px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;transition:.15s;background:none;border-left:none;border-right:none;border-top:none;font-family:'Outfit',sans-serif}
.tab:hover{color:var(--text)}.tab.on{color:var(--it);border-bottom:2px solid var(--it);font-weight:600}
.pg{padding:22px;max-width:900px;margin:0 auto;width:100%}
.stabs{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap}
.stab{padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:1px solid var(--bd);color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
.stab:hover{color:var(--text)}.stab.on{background:var(--it);color:#fff;border-color:var(--it)}
.card{background:var(--white);border-radius:12px;padding:18px 20px;margin-bottom:14px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
.ct{font-size:14px;font-weight:700;margin-bottom:10px}
.csub{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.6}
.fg{margin-bottom:12px}
.fl{display:block;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
.fi,.fs,.fta{width:100%;padding:9px 12px;border:1.5px solid var(--bd);border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);background:var(--white);transition:.2s;outline:none}
.fi:focus,.fs:focus,.fta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
.fta{resize:vertical;min-height:100px;line-height:1.7}
.fr2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.btn{padding:9px 17px;border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:7px;transition:.2s}
.btn:disabled{opacity:.45;cursor:not-allowed}
.bd-btn{background:var(--dark);color:#fff}.bd-btn:hover:not(:disabled){opacity:.85}
.bit{background:var(--it);color:#fff}.bit:hover:not(:disabled){background:var(--it2)}
.bmg{background:var(--mg);color:#fff}
.bo{background:transparent;border:1.5px solid var(--bd);color:var(--text)}.bo:hover:not(:disabled){background:var(--bg2)}
.brow{display:flex;gap:9px;flex-wrap:wrap}
.st-box{padding:9px 13px;border-radius:8px;font-size:12px;margin-top:10px}
.st-ok{background:#D1FAE5;color:#065F46;border:1px solid #A7F3D0}
.st-er{background:#FEE2E2;color:#991B1B;border:1px solid #FECACA}
.st-in{background:#DBEAFE;color:#1E40AF;border:1px solid #BFDBFE}
.log-wrap{background:var(--dark);border-radius:12px;overflow:hidden}
.log-hdr{padding:11px 16px;border-bottom:1px solid #334155;display:flex;align-items:center;justify-content:space-between;background:#1E293B}
.log-t{font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:.5px}
.log-body{padding:14px;min-height:140px;max-height:360px;overflow-y:auto;font-family:'Courier New',monospace;font-size:12px;line-height:2;color:#E2E8F0}
.log-ph{color:#475569;font-style:italic;font-size:12px;font-family:'Outfit',sans-serif}
.s-ok{color:#6EE7B7}.s-er{color:#FCA5A5}.s-in{color:#93C5FD}.s-run{color:#FCD34D}.s-it{color:#FD8B6A}
.q-item{display:flex;align-items:center;gap:9px;padding:8px 12px;background:var(--bg2);border-radius:8px;margin-bottom:6px;font-size:12.5px}
.q-icon{font-size:13px;width:18px;text-align:center;flex-shrink:0}
.q-kw{flex:1;font-weight:500}
.qb{padding:2px 8px;border-radius:12px;font-size:10px;font-weight:600}
.qb-w{background:#F3F4F6;color:var(--muted)}
.qb-r{background:#FEF3C7;color:#92400E}
.qb-ok{background:#D1FAE5;color:#065F46}
.qb-e{background:#FEE2E2;color:#991B1B}
.tog{display:flex;border:1.5px solid var(--bd);border-radius:8px;overflow:hidden;width:fit-content}
.tb{padding:7px 16px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:none;color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
.tb.a-it{background:var(--it);color:#fff}.tb.a-mg{background:var(--mg);color:#fff}
.big-wrap{background:var(--white);border-radius:14px;padding:22px;margin-bottom:16px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
.big-ta{width:100%;background:var(--bg);border:2px solid var(--bd);border-radius:9px;padding:12px 15px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);transition:.2s;outline:none;resize:vertical;min-height:110px;line-height:1.8}
.big-ta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
.go-btn{padding:12px 22px;border:none;border-radius:9px;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:9px;transition:.2s;width:100%;justify-content:center;margin-top:13px}
.go-btn:disabled{opacity:.5;cursor:not-allowed}
.go-web{background:var(--dark);color:#fff;box-shadow:0 4px 12px rgba(26,26,46,.2)}
.go-web:hover:not(:disabled){background:#2a2a40}
.go-yt{background:var(--it);color:#fff;box-shadow:0 4px 12px rgba(255,107,53,.25)}
.go-yt:hover:not(:disabled){background:var(--it2)}
.out-box{background:var(--bg);border-radius:9px;padding:13px;border:1.5px solid var(--bd);margin-bottom:11px}
.ob-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.ob-t{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted)}
.ob-body{font-family:'Courier New',monospace;font-size:11.5px;color:var(--dark);white-space:pre-wrap;line-height:1.7}
.pb-bar{height:3px;border-radius:2px;background:var(--bg2);margin-top:8px;overflow:hidden}
.pf{height:100%;background:linear-gradient(90deg,var(--mg),var(--it));animation:ind 1.4s ease-in-out infinite}
@keyframes ind{0%{transform:translateX(-100%);width:60%}100%{transform:translateX(220%);width:60%}}
.spin{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:sp .7s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
.wbox{background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:10px 13px;margin-bottom:12px;font-size:12px;color:#92400E}
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:999;align-items:center;justify-content:center}
.modal-overlay.open{display:flex}
.modal{background:var(--white);border-radius:18px;width:500px;max-width:95vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.18)}
.modal-hdr{background:linear-gradient(135deg,var(--it),#ff4500);padding:22px 24px;border-radius:18px 18px 0 0;position:relative}
.modal-hdr h2{font-size:17px;font-weight:700;color:#fff}
.modal-hdr p{font-size:12px;color:rgba(255,255,255,.8);margin-top:3px}
.modal-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center}
.modal-body{padding:22px}
.step-row{display:flex;gap:12px;margin-bottom:20px}
.step-num{width:26px;height:26px;background:var(--it);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0;margin-top:1px}
.step-content{flex:1}
.step-title{font-weight:700;font-size:13px;margin-bottom:5px}
.step-desc{font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:10px}
.step-guide{background:#F8F9FA;border-radius:8px;padding:11px 13px;font-size:11.5px;color:var(--text);line-height:1.9;margin-bottom:10px}
.connect-banner{border-radius:12px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}
.banner-yt{background:linear-gradient(135deg,var(--it),#ff4500);box-shadow:0 4px 16px rgba(255,107,53,.2)}
.banner-ok{background:#D1FAE5;border:1px solid #A7F3D0}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--bd2);border-radius:4px}
.hist-item{background:var(--white);border:1px solid var(--bd);border-radius:10px;padding:12px 15px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 4px rgba(0,0,0,.04)}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
.stat-card{background:var(--bg);border:1px solid var(--bd);border-radius:9px;padding:13px;text-align:center}
.stat-val{font-size:20px;font-weight:700;color:var(--it);margin-bottom:2px}
.stat-lbl{font-size:11px;color:var(--muted)}
@media(max-width:600px){.fr2{grid-template-columns:1fr}.tog{flex-wrap:wrap}}
`;

// ─── CONSTANTS ────────────────────────────────────────────────────────────
const DJANGO_BASE = "http://127.0.0.1:8000/api";
const BLOG_URL     = `${DJANGO_BASE}/generate-blog/`;   // structured blog generation
const AI_URL       = `${DJANGO_BASE}/ai-generate/`;     // generic "any prompt" AI call
const PUSH_URL     = `${DJANGO_BASE}/push-to-github/`;  // backend-driven GitHub publish
const SETTINGS_URL = `${DJANGO_BASE}/app-settings/`;

// ─── TYPES ────────────────────────────────────────────────────────────────
interface LogEntry { text: string; cls: string; }

interface SettingsData {
  anthropic_connected: boolean;
  github_connected: boolean;
  youtube_connected: boolean;
  unsplash_connected?: boolean;
  github_owner: string;
  github_repo: string;
  github_branch: string;
  blog_folder: string;
  meta_folder: string;
  youtube_channel_id: string;
  youtube_api_key?: string;
}

interface AppCfg {
  akey: string;
  token: string;
  owner: string;
  repo: string;
  branch: string;
  bpath: string;
  mpath: string;
  ytkey: string;
  itChId: string;
  mgChId: string;
}

interface WebContext {
  name: string; domain: string; desc: string;
  audience: string; tone: string; author: string;
}

interface YtApiItem {
  brandingSettings?: any;
  statistics?: any;
  id?: string | { channelId?: string; videoId?: string };
  snippet?: { channelId?: string; title?: string; description?: string; tags?: string[]; };
}

interface YtApiResponse {
  items?: YtApiItem[];
  error?: { message: string };
}

interface BlogResult {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

interface PushResult {
  status: string;
  results?: Record<string, string>;
  message?: string;
}

interface VideoPackage {
  title_a: string; title_b: string; title_c: string;
  description: string; tags: string[]; hashtags: string[];
  chapters: string; thumbnail: string; ab_note: string; rationale?: string;
}

interface ScanCardHeader { type: "header"; title: string; sub: string; trends: string[]; }
interface ScanCardVideo {
  type: "video";
  pick: { rank: number; video_id: string; current_title: string; views: string; reason: string; trending_angle: string; new_title_preview: string; };
  pkg: VideoPackage;
  idx: number;
}
type ScanCard = ScanCardHeader | ScanCardVideo;

// ─── HELPERS ──────────────────────────────────────────────────────────────
function fmt(n: number | string | undefined | null): string {
  if (!n) return "0";
  const parsed = parseInt(String(n));
  if (parsed >= 1000000) return (parsed / 1000000).toFixed(1) + "M";
  if (parsed >= 1000) return (parsed / 1000).toFixed(1) + "K";
  return "" + parsed;
}

function san(p: string | undefined | null): string {
  p = (p || "").replace(/^https?:\/\/[^/]+\//, "").replace(/\\/g, "/").replace(/^\//, "");
  if (p && !p.endsWith("/")) p += "/";
  return p;
}

function webCtx(site: string): WebContext {
  if (site === "m") return { name: "Magsmen Brand Consultants", domain: "magsmen.com", desc: "Brand strategy consulting by Sandeep N.", audience: "Indian entrepreneurs, startup founders, MSMEs.", tone: "Professional, authoritative.", author: "Sandeep N" };
  return { name: "InTalks Podcast", domain: "intalks.in", desc: "Telugu entrepreneur interview podcast.", audience: "Telugu entrepreneurs and professionals globally.", tone: "Energetic, inspiring.", author: "Sandeep N" };
}

function extractVidId(url: string): string | null {
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  return m ? m[1] : null;
}

function parseJsonLoose<T>(raw: string): T {
  const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(cleaned) as T;
}

// ─── DJANGO API CALLS ──────────────────────────────────────────────────────

// Structured blog generation — used ONLY by Website SEO (keyword -> blog post)
async function callDjangoBlog(keyword: string): Promise<BlogResult> {
  const response = await fetch(BLOG_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword }),
  });
  const data = await response.json();
  if (!response.ok || data.status === "error") {
    throw new Error(data.message || "Blog generation failed");
  }
  if (typeof data.content !== "string") throw new Error("Invalid response from Django API.");
  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    content: data.content,
  };
}

// Generic AI call — used by everything that is NOT a blog post
// (channel analysis, video SEO packages, competitor spy, keyword research).
// Sends the prompt AS-IS to Claude and returns the raw text.
async function callDjangoAI(prompt: string): Promise<string> {
  const response = await fetch(AI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  if (!response.ok || data.status === "error") {
    throw new Error(data.message || "AI request failed");
  }
  if (typeof data.text !== "string") throw new Error("Invalid response from Django API.");
  return data.text;
}

// ─── SETTINGS API CALL ───────────────────────────────────────────────────
async function fetchSettings(): Promise<SettingsData> {
  const res = await fetch(SETTINGS_URL);
  if (!res.ok) throw new Error("Settings fetch failed: " + res.status);
  return res.json();
}

// ─── PUSH TO GITHUB (via backend — handles Blogs.tsx + blogPosts.ts + image) ─
async function pushToGithubBackend(keyword: string, blog: BlogResult): Promise<PushResult> {
  const today = new Date().toISOString().split("T")[0];
  const res = await fetch(PUSH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      keyword,
      slug: blog.slug,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      publishedAt: today,
    }),
  });
  const data = (await res.json()) as PushResult;
  if (!res.ok || data.status === "error") {
    throw new Error(data.message || "GitHub push failed");
  }
  return data;
}

// ─── PROCESS KEYWORD (Website SEO batch) ──────────────────────────────────
async function processKW(
  kw: string,
  settings: SettingsData,
  wLog: (msg: string, cls?: string) => void
): Promise<void> {
  // STEP 1 — Call Django → Anthropic (structured blog JSON)
  wLog("🔍 Calling Django → Anthropic AI...", "s-run");
  const blog = await callDjangoBlog(kw);
  wLog(`✅ Blog generated: "${blog.title}" (~${blog.content.split(" ").length} words)`, "s-ok");
  wLog(`📝 Slug: ${blog.slug}`, "s-in");

  // STEP 2 — Push to GitHub via the backend (updates Blogs.tsx + blogPosts.ts + image)
  if (!settings.github_connected) throw new Error("GitHub not connected — check Settings.");

  wLog("🚀 Pushing to GitHub via backend...", "s-run");
  const pushed = await pushToGithubBackend(kw, blog);
  const r = pushed.results || {};
  wLog(`✅ Blogs.tsx: ${r.blogs_tsx || "?"}`, r.blogs_tsx === "success" ? "s-ok" : "s-er");
  wLog(`✅ blogPosts.ts: ${r.blog_posts_ts || "?"}`, r.blog_posts_ts === "success" ? "s-ok" : "s-er");
}

// ─── YOUTUBE API ─────────────────────────────────────────────────────────
async function ytGet(endpoint: string, ytkey: string): Promise<YtApiResponse> {
  if (!ytkey || ytkey.trim() === "") {
    throw new Error("YouTube API Key is missing. Please check Settings and backend configuration.");
  }
  const sep = endpoint.includes("?") ? "&" : "?";
  const url = `https://www.googleapis.com/youtube/v3/${endpoint}${sep}key=${ytkey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`YouTube API Error (${response.status}): ${data?.error?.message || "Unknown error"}`);
  }
  if (data.error) {
    throw new Error("YouTube API: " + data.error.message);
  }
  return data as YtApiResponse;
}

async function resolveChannelId(input: string, ytkey: string, itChId?: string): Promise<string> {
  input = (input || "").trim();
  const cm = input.match(/\/channel\/(UC[\w-]+)/);
  if (cm) return cm[1];
  if (/^UC[\w-]{20,}$/.test(input)) return input;
  const handle = input.replace(/^https?:\/\/(www\.)?youtube\.com\/@?/, "").replace(/\/@?/, "").split("/")[0].split("?")[0];
  if (handle) {
    try { const r = await ytGet(`channels?part=id&forHandle=${encodeURIComponent(handle)}`, ytkey); if (r.items?.length) return r.items[0].id as string; } catch (_) {}
    try { const r2 = await ytGet(`search?part=snippet&type=channel&q=${encodeURIComponent(handle)}&maxResults=1`, ytkey); if (r2.items?.length) return (r2.items[0].snippet?.channelId || (r2.items[0].id as any)?.channelId || ""); } catch (_) {}
  }
  if (itChId) return itChId;
  throw new Error("Could not resolve channel. Add Channel ID in Settings.");
}

// ─── LOG BOX ─────────────────────────────────────────────────────────────
function LogBox({ entries, title, badge, placeholder }: { entries: LogEntry[]; title: string; badge: ReactNode; placeholder: string }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [entries]);
  return (
    <div className="log-wrap">
      <div className="log-hdr"><span className="log-t">{title}</span><span>{badge}</span></div>
      <div className="log-body" ref={bodyRef}>
        {entries.length === 0
          ? <div className="log-ph">{placeholder}</div>
          : entries.map((e, i) => <div key={i}><span className={e.cls || "s-in"}>{e.text}</span></div>)}
      </div>
    </div>
  );
}

// ─── OUT BOX ─────────────────────────────────────────────────────────────
function OutBox({ id, title, content }: { id: string; title: string; content: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText((content || "").trim()); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="out-box">
      <div className="ob-hdr">
        <span className="ob-t">{title}</span>
        <button className="btn bo" style={{ padding: "4px 10px", fontSize: "11px" }} onClick={copy}>{copied ? "✅ Copied!" : "📋 Copy"}</button>
      </div>
      <div className="ob-body" id={id}>{content}</div>
    </div>
  );
}

// ─── YOUTUBE MODAL ───────────────────────────────────────────────────────
function YTModal({ open, onClose, cfg, setCfg, onConnected }: {
  open: boolean; onClose: () => void;
  cfg: AppCfg; setCfg: (c: AppCfg) => void;
  onConnected: (name: string, subs: string) => void;
}) {
  const [wizKey, setWizKey] = useState("");
  const [wizUrl, setWizUrl] = useState("");
  const [wizSt, setWizSt] = useState<{ msg: string; cls: string } | null>(null);
  const [wizLoading, setWizLoading] = useState(false);
  const [done, setDone] = useState<{ name: string; subs: string; vids: number; views: string } | null>(null);

  useEffect(() => { if (open) { setWizKey(cfg.ytkey || ""); setWizUrl(cfg.itChId || ""); setWizSt(null); setDone(null); } }, [open]);

  const wizConnect = async () => {
    if (!wizKey) { setWizSt({ msg: "⚠️ Paste your API key first.", cls: "st-er" }); return; }
    if (!wizUrl) { setWizSt({ msg: "⚠️ Enter your channel URL.", cls: "st-er" }); return; }
    setWizLoading(true); setWizSt({ msg: "Verifying and detecting channel...", cls: "st-in" });
    try {
      const chId = await resolveChannelId(wizUrl, wizKey, "");
      const r = await ytGet(`channels?part=statistics,snippet&id=${chId}`, wizKey);
      if (!r.items?.length) throw new Error("Channel not found. Double-check the URL.");
      const ch = r.items[0];
      const newCfg = { ...cfg, ytkey: wizKey, itChId: chId };
      setCfg(newCfg);
      try { await (window as any).storage?.set("seo4_cfg", JSON.stringify(newCfg)); } catch (_) {}
      const title = (ch.snippet as any)?.title || "";
      setDone({ name: title, subs: fmt(ch.statistics?.subscriberCount), vids: ch.statistics?.videoCount || 0, views: fmt(ch.statistics?.viewCount) });
      onConnected(title, fmt(ch.statistics?.subscriberCount));
    } catch (e: any) {
      let msg = e.message || "";
      if (msg.toLowerCase().includes("load failed") || msg.toLowerCase().includes("failed to fetch"))
        msg = "❌ API key blocked by CORS. Fix: Google Cloud Console → API key → Application Restrictions → None → Save.";
      else if (msg.includes("keyInvalid") || msg.includes("400"))
        msg = "❌ Invalid API key. Make sure YouTube Data API v3 is enabled.";
      else msg = "❌ " + msg;
      setWizSt({ msg, cls: "st-er" });
    }
    setWizLoading(false);
  };

  if (!open) return null;
  return (
    <div className={`modal-overlay ${open ? "open" : ""}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-hdr">
          <h2>📺 Connect YouTube</h2>
          <p>2-minute setup — follow the steps below</p>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {!done ? (
            <>
              <div className="step-row">
                <div className="step-num">1</div>
                <div className="step-content">
                  <div className="step-title">Create a free YouTube Data API key</div>
                  <div className="step-desc">Free Google service. Lets this tool read your channel data — no viewer login needed.</div>
                  <div className="step-guide">
                    <strong>Step A — Create the key:</strong><br />
                    1. Click <strong>+ CREATE CREDENTIALS</strong> → <strong>API key</strong><br />
                    2. Copy the key (starts with <code style={{ background: "#E5E7EB", padding: "1px 5px", borderRadius: "3px", fontSize: "11px" }}>AIzaSy...</code>)<br /><br />
                    <strong>Step B — Enable YouTube API:</strong><br />
                    3. APIs &amp; Services → Library → search <strong>YouTube Data API v3</strong> → Enable<br /><br />
                    <strong>⚠️ Step C — Remove restrictions (critical):</strong><br />
                    4. Credentials → click API key → Application restrictions → <strong>None</strong> → Save
                  </div>
                  <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#4285F4", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600 }}>🔗 Open Google Cloud Console →</a>
                  {" "}
                  <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#34A853", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600, marginTop: "8px" }}>▶ Enable YouTube Data API v3 →</a>
                </div>
              </div>
              <div className="step-row">
                <div className="step-num">2</div>
                <div className="step-content">
                  <div className="step-title">Paste your API key</div>
                  <input className="fi" type="password" placeholder="AIzaSy..." value={wizKey} onChange={e => setWizKey(e.target.value)} style={{ fontFamily: "monospace", fontSize: "12px" }} />
                </div>
              </div>
              <div className="step-row">
                <div className="step-num">3</div>
                <div className="step-content">
                  <div className="step-title">Your InTalks channel URL</div>
                  <input className="fi" placeholder="https://www.youtube.com/@InTalksPodcast" value={wizUrl} onChange={e => setWizUrl(e.target.value)} />
                  <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>Copy from your YouTube channel address bar</div>
                </div>
              </div>
              <button className="go-btn go-yt" onClick={wizConnect} disabled={wizLoading}>
                {wizLoading ? <><span className="spin" /> Connecting...</> : "📡 Connect & Verify Channel"}
              </button>
              {wizSt && <div className={`st-box ${wizSt.cls}`}>{wizSt.msg}</div>}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div style={{ fontSize: "38px", marginBottom: "12px" }}>✅</div>
              <div style={{ fontSize: "16px", fontWeight: 700 }}>✅ {done.name}</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", marginBottom: "18px" }}>{done.subs} subscribers · {done.vids} videos · {done.views} total views</div>
              <div style={{ background: "#FFF5F0", borderRadius: "10px", padding: "13px", border: "1px solid #FECDB5", fontSize: "12px", color: "var(--it)", textAlign: "left", marginBottom: "18px" }}>
                🚀 Channel Scanner is now active. Paste your channel URL in the YouTube SEO tab to scan videos and generate SEO packages.
              </div>
              <button className="btn bit" onClick={onClose} style={{ width: "100%", justifyContent: "center" }}>Done — Go to YouTube SEO →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── WEBSITE SEO ─────────────────────────────────────────────────────────
function WebSEO({ settings }: { settings: SettingsData }) {
  const [kwBatch, setKwBatch] = useState("");
  const [site, setSite] = useState("m");
  const [wc, setWc] = useState("1500");
  const [running, setRunning] = useState(false);
  const [queue, setQueue] = useState<{ kw: string; icon: string; status: string; cls: string }[]>([]);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [logTitle, setLogTitle] = useState("Automation Log");
  const [logBadge, setLogBadge] = useState<ReactNode>(null);

  const wLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-in" }]);

  const runBatch = async () => {
    if (running) return;
    const kws = kwBatch.split("\n").map(k => k.trim()).filter(k => k);
    if (!kws.length) { wLog("⚠️ Enter at least one keyword.", "s-er"); return; }
    if (!settings.github_connected) { wLog("⚠️ GitHub not connected — check Settings tab.", "s-er"); return; }
    if (!settings.anthropic_connected) { wLog("⚠️ Anthropic API not connected — check .env on backend.", "s-er"); return; }

    setRunning(true);
    setQueue(kws.map(kw => ({ kw, icon: "⏳", status: "Queued", cls: "qb-w" })));
    setLogEntries([]);
    setLogTitle(`Running ${kws.length} keyword${kws.length > 1 ? "s" : ""}...`);
    setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);

    let done = 0, fail = 0;
    for (let i = 0; i < kws.length; i++) {
      const kw = kws[i];
      setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "🔄", status: "Running", cls: "qb-r" } : q));
      wLog(`━━━ [${i + 1}/${kws.length}] "${kw}" ━━━`, "s-it");
      try {
        await processKW(kw, settings, wLog);
        setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "✅", status: "Published", cls: "qb-ok" } : q));
        done++;
      } catch (e: any) {
        setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "❌", status: "Failed", cls: "qb-e" } : q));
        wLog("❌ " + (e?.message || String(e)), "s-er");
        fail++;
      }
      wLog("", "");
    }
    wLog("════════════════════════", "s-in");
    wLog(`✅ Complete — ${done} published${fail > 0 ? `, ${fail} failed` : ""}`, "s-ok");
    setLogTitle(`✅ Done (${done}/${kws.length})`);
    setLogBadge(<span className="pill p-ok">Published</span>);
    setRunning(false);
  };

  return (
    <div className="pg">
      <div className="big-wrap">
        <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>
          Target Keywords <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>(one per line — all processed automatically)</span>
        </div>
        <textarea className="big-ta" value={kwBatch} onChange={e => setKwBatch(e.target.value)}
          placeholder={"brand consultant Hyderabad\nbrand strategy for startups India\nhow to build a brand in Andhra Pradesh\npersonal branding coach India"} />
        <div style={{ display: "flex", gap: "16px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
          <div>
            <div className="fl" style={{ marginBottom: "6px" }}>Website</div>
            <div className="tog">
              <button className={`tb ${site === "m" ? "a-mg" : ""}`} onClick={() => setSite("m")}>Magsmen</button>
              <button className={`tb ${site === "i" ? "a-mg" : ""}`} onClick={() => setSite("i")}>InTalks</button>
            </div>
          </div>
          <div>
            <div className="fl" style={{ marginBottom: "6px" }}>Word Count</div>
            <select className="fs" value={wc} onChange={e => setWc(e.target.value)} style={{ width: "170px" }}>
              <option value="1000">1000 — Quick</option>
              <option value="1500">1500 — Standard</option>
              <option value="2500">2500 — Authority</option>
            </select>
          </div>
        </div>
        <button className="go-btn go-web" onClick={runBatch} disabled={running}>
          {running ? <><span className="spin" /> Running...</> : "⚡ Run All Keywords — Research → Write → Push to GitHub"}
        </button>
      </div>
      {queue.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          {queue.map((q, i) => (
            <div key={i} className="q-item">
              <span className="q-icon">{q.icon}</span>
              <span className="q-kw">{q.kw}</span>
              <span className={`qb ${q.cls}`}>{q.status}</span>
            </div>
          ))}
        </div>
      )}
      <LogBox entries={logEntries} title={logTitle} badge={logBadge}
        placeholder="Enter keywords above (one per line). The engine calls Django → Anthropic AI, writes full blog posts, and pushes to GitHub — automatically." />
    </div>
  );
}

// ─── YOUTUBE SEO ─────────────────────────────────────────────────────────
function YouTubeSEO({ cfg, ytConnected, ytConnectedTxt, onOpenModal }: {
  cfg: AppCfg; ytConnected: boolean; ytConnectedTxt: string; onOpenModal: () => void;
}) {
  const [sub, setSub] = useState("scan");
  return (
    <div className="pg">
      {!ytConnected ? (
        <div className="connect-banner banner-yt" style={{ display: "flex" }}>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>📺 YouTube not connected</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,.85)", marginTop: "2px" }}>Connect in 2 minutes to unlock Channel Scanner and video optimization.</div>
          </div>
          <button onClick={onOpenModal} style={{ padding: "10px 18px", background: "#fff", color: "var(--it)", border: "none", borderRadius: "8px", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "13px", cursor: "pointer", flexShrink: 0, marginLeft: "14px" }}>🔗 Connect YouTube</button>
        </div>
      ) : (
        <div className="connect-banner banner-ok" style={{ display: "flex" }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#065F46" }}>{ytConnectedTxt}</div>
          <button onClick={onOpenModal} style={{ fontSize: "11px", color: "#065F46", background: "transparent", border: "1px solid #A7F3D0", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>Reconnect</button>
        </div>
      )}
      <div className="stabs">
        {[["scan", "📡 Channel Scanner"], ["vid", "🎬 Single Video"], ["spy", "🕵️ Competitor Spy"], ["kw", "🔍 Keywords"]].map(([id, label]) => (
          <button key={id} className={`stab ${sub === id ? "on" : ""}`} onClick={() => setSub(id)}>{label}</button>
        ))}
      </div>
      {sub === "scan" && <ChannelScanner cfg={cfg} />}
      {sub === "vid" && <SingleVideo cfg={cfg} />}
      {sub === "spy" && <CompetitorSpy />}
      {sub === "kw" && <KeywordResearch />}
    </div>
  );
}

// ─── CHANNEL SCANNER ─────────────────────────────────────────────────────
function ChannelScanner({ cfg }: { cfg: AppCfg }) {
  const [chUrl, setChUrl] = useState("");
  const [scope, setScope] = useState("both");
  const [optCount, setOptCount] = useState("5");
  const [running, setRunning] = useState(false);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [logTitle, setLogTitle] = useState("Channel Scanner Log");
  const [logBadge, setLogBadge] = useState<ReactNode>(null);
  const [scanOut, setScanOut] = useState<ScanCard[]>([]);
  const sLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

  const runScan = async () => {
    if (running) return;
    const chInput = chUrl.trim() || cfg.itChId;
    if (!chInput) { sLog("⚠️ Enter your channel URL.", "s-er"); return; }
    if (!cfg.ytkey) { sLog("⚠️ YouTube not connected.", "s-er"); return; }
    setRunning(true); setLogEntries([]); setScanOut([]);
    setLogTitle("Scanning..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
    try {
      sLog("📡 Resolving channel...", "s-run");
      const chId = await resolveChannelId(chInput, cfg.ytkey, cfg.itChId);
      const chData = await ytGet(`channels?part=statistics,snippet&id=${chId}`, cfg.ytkey);
      if (!chData.items?.length) throw new Error("Channel not found.");
      const ch = chData.items[0];
      const chTitle = (ch.snippet as any)?.title || ch.id || "Channel";
      sLog(`✅ ${chTitle} — ${fmt(ch.statistics?.subscriberCount)} subs | ${ch.statistics?.videoCount} videos`, "s-ok");
      let vids: any[] = [];
      if (scope === "top50" || scope === "both") { sLog("🎬 Fetching top 50 by views...", "s-run"); const t = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=viewCount&maxResults=50`, cfg.ytkey); vids = vids.concat(t.items || []); }
      if (scope === "recent50" || scope === "both") { sLog("🕒 Fetching last 50 uploaded...", "s-run"); const r = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=date&maxResults=50`, cfg.ytkey); vids = vids.concat(r.items || []); }
      const seen: Record<string, boolean> = {}; const uniq: any[] = [];
      vids.forEach(v => { const id = (v.id as any)?.videoId; if (id && !seen[id]) { seen[id] = true; uniq.push(v); } });
      sLog(`✅ ${uniq.length} unique videos found`, "s-ok");
      const ids = uniq.map(v => (v.id as any).videoId).filter(Boolean).slice(0, 50).join(",");
      const det = await ytGet(`videos?part=statistics,snippet&id=${ids}`, cfg.ytkey);
      const videos = det.items || [];
      sLog(`📈 Got stats for ${videos.length} videos`, "s-ok"); sLog("", "");
      sLog("🧠 AI analysing with live trends...", "s-run");
      const summary = videos.slice(0, 40).map((v, i) => {
        const sn: any = v.snippet || {};
        return `${i + 1}. ID:${v.id} Views:${fmt(v.statistics?.viewCount || 0)} Title:"${sn.title || ""}" Desc:${(sn.description || "").length}chars Tags:${(sn.tags || []).length}`;
      }).join("\n");
      const aRaw = await callDjangoAI(`YouTube SEO expert. Channel: InTalks Podcast. Videos:\n${summary}\n\nPick TOP ${optCount} with highest optimization potential. Return ONLY raw JSON:\n{"picks":[{"rank":1,"video_id":"...","current_title":"...","views":"...","reason":"...","trending_angle":"...","new_title_preview":"..."}],"trends":["t1","t2","t3"],"insight":"one key channel observation"}`);
      let analysis: any;
      try { analysis = parseJsonLoose(aRaw); } catch (e: any) { throw new Error("Analysis failed: " + e.message); }
      sLog(`✅ Selected ${analysis.picks.length} videos`, "s-ok");
      sLog("📈 Trends: " + (analysis.trends || []).join(" | "), "s-it");
      sLog("💡 " + analysis.insight, "s-in"); sLog("", "");
      const cards: ScanCard[] = [{ type: "header", title: `📡 ${analysis.picks.length} Videos Selected for Optimization`, sub: "Based on live Google + YouTube search trends", trends: analysis.trends || [] }];
      for (let i = 0; i < analysis.picks.length; i++) {
        const pick = analysis.picks[i];
        sLog(`🎬 Optimizing [${i + 1}/${analysis.picks.length}]: "${pick.current_title}"...`, "s-run");
        const pkgRaw = await callDjangoAI(`Optimize YouTube video: "${pick.current_title}". Trending angle: ${pick.trending_angle}.\n\nReturn ONLY raw JSON:\n{"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 tags"],"chapters":"0:00 Intro\\n2:00...","thumbnail":"...","ab_note":"...","rationale":"..."}`);
        let pkg: VideoPackage;
        try { pkg = parseJsonLoose(pkgRaw); } catch (e) { sLog(`⚠️ Video ${i + 1} parse error`, "s-er"); continue; }
        sLog(`✅ Package ready: "${pkg.title_a}"`, "s-ok");
        cards.push({ type: "video", pick, pkg, idx: i });
      }
      setScanOut(cards);
      sLog("════════════════════════", "s-it");
      sLog(`✅ ALL DONE — ${analysis.picks.length} SEO packages ready.`, "s-ok");
      setLogTitle("✅ Complete"); setLogBadge(<span className="pill p-ok">Done</span>);
    } catch (e: any) { sLog("❌ " + e.message, "s-er"); }
    setRunning(false);
  };

  return (
    <>
      <div className="big-wrap">
        <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>InTalks Channel URL</div>
        <input className="fi" value={chUrl} onChange={e => setChUrl(e.target.value)} placeholder="https://www.youtube.com/@InTalksPodcast" style={{ fontSize: "14px", padding: "11px 14px" }} />
        <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px", lineHeight: 1.6 }}>The engine scans your videos, cross-references live Google + YouTube search trends, auto-selects the highest-opportunity videos, and generates complete SEO packages.</div>
        <div style={{ display: "flex", gap: "14px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
          <div><div className="fl" style={{ marginBottom: "5px" }}>Scan Scope</div>
            <select className="fs" value={scope} onChange={e => setScope(e.target.value)} style={{ width: "230px" }}>
              <option value="top50">Top 50 by views</option>
              <option value="recent50">Last 50 uploaded</option>
              <option value="both">Both (top + recent, ~75 videos)</option>
            </select>
          </div>
          <div><div className="fl" style={{ marginBottom: "5px" }}>Optimize Count</div>
            <select className="fs" value={optCount} onChange={e => setOptCount(e.target.value)} style={{ width: "150px" }}>
              <option value="3">Top 3 videos</option>
              <option value="5">Top 5 videos</option>
              <option value="10">Top 10 videos</option>
            </select>
          </div>
        </div>
        <button className="go-btn go-yt" onClick={runScan} disabled={running}>
          {running ? <><span className="spin" /> Scanning...</> : "📡 Scan → Auto-Select → Optimize"}
        </button>
      </div>
      <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste your channel URL and hit Scan." />
      <div style={{ marginTop: "16px" }}>
        {scanOut.map((item, idx) => {
          if (item.type === "header") return (
            <div key={idx} className="card">
              <div className="ct">{item.title}</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "10px" }}>{item.sub}</div>
              <div style={{ fontSize: "12px", color: "var(--text)" }}>🔥 Trending now: {item.trends.map((t, i) => <span key={i} style={{ background: "var(--bg)", padding: "2px 9px", borderRadius: "12px", marginRight: "4px", border: "1px solid var(--bd)", display: "inline-block", marginBottom: "4px" }}>{t}</span>)}</div>
            </div>
          );
          if (item.type === "video") {
            const { pick, pkg } = item;
            const boxes = [
              { id: `sc${item.idx}t`, t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
              { id: `sc${item.idx}d`, t: "📝 DESCRIPTION", c: pkg.description },
              { id: `sc${item.idx}g`, t: `🏷️ TAGS (${(pkg.tags || []).length})`, c: (pkg.tags || []).join(", ") },
              { id: `sc${item.idx}h`, t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
              { id: `sc${item.idx}c`, t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
              { id: `sc${item.idx}th`, t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
            ];
            return (
              <div key={idx} className="card">
                <div className="ct">Video {item.idx + 1} — <a href={`https://youtube.com/watch?v=${pick.video_id}`} target="_blank" rel="noreferrer" style={{ color: "var(--it)", fontSize: "13px", fontWeight: 400 }}>{pick.current_title}</a></div>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>{fmt(pick.views)} views · {pick.reason}</div>
                {boxes.map(b => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

// ─── SINGLE VIDEO ────────────────────────────────────────────────────────
function SingleVideo({ cfg }: { cfg: AppCfg }) {
  const [vidUrl, setVidUrl] = useState("");
  const [running, setRunning] = useState(false);
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [logTitle, setLogTitle] = useState("Video Optimizer Log");
  const [logBadge, setLogBadge] = useState<ReactNode>(null);
  const [out, setOut] = useState<{ title: string; boxes: { id: string; t: string; c: string }[] } | null>(null);
  const vLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

  const run = async () => {
    const url = vidUrl.trim();
    if (!url) { vLog("⚠️ Paste a video URL.", "s-er"); return; }
    const vid = extractVidId(url);
    if (!vid) { vLog("⚠️ Could not read video ID from URL.", "s-er"); return; }
    if (running) return;
    setRunning(true); setLogEntries([]); setOut(null);
    setLogTitle("Optimizing..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
    try {
      vLog("📡 Fetching video data...", "s-run");
      if (!cfg.ytkey) throw new Error("YouTube not connected.");
      const vd = await ytGet(`videos?part=statistics,snippet&id=${vid}`, cfg.ytkey);
      if (!vd.items?.length) throw new Error("Video not found.");
      const v = vd.items[0];
      const titleSafe = (v.snippet as any)?.title || "(untitled)";
      const viewsSafe = fmt(v.statistics?.viewCount || 0);
      vLog(`✅ "${titleSafe}" — ${viewsSafe} views`, "s-ok");
      vLog("🔍 Generating SEO package via Django...", "s-run");
      const pkgRaw = await callDjangoAI(`Optimize YouTube video: Title:"${titleSafe}" Views:${viewsSafe}. Return ONLY raw JSON: {"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 hashtags"],"chapters":"...","thumbnail":"...","ab_note":"...","rationale":"..."}`);
      let pkg: VideoPackage;
      try { pkg = parseJsonLoose(pkgRaw); } catch (_) { throw new Error("Package parse error."); }
      vLog("✅ Package ready", "s-ok");
      setOut({
        title: titleSafe, boxes: [
          { id: "vst", t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
          { id: "vsd", t: "📝 DESCRIPTION", c: pkg.description },
          { id: "vsg", t: "🏷️ TAGS", c: (pkg.tags || []).join(", ") },
          { id: "vsh", t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
          { id: "vsc", t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
          { id: "vsth", t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
          { id: "vsr", t: "⚡ SEO RATIONALE", c: pkg.rationale || "" },
        ]
      });
      setLogTitle("✅ Done"); setLogBadge(<span className="pill p-ok">Done</span>);
    } catch (e: any) { vLog("❌ " + e.message, "s-er"); }
    setRunning(false);
  };

  return (
    <>
      <div className="big-wrap">
        <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>YouTube Video URL</div>
        <input className="fi" value={vidUrl} onChange={e => setVidUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=xxxxxxxxxx" style={{ fontSize: "14px", padding: "11px 14px" }} />
        <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>Fetches current title, description and stats — then generates an optimized SEO package via Django.</div>
        <button className="go-btn go-yt" onClick={run} disabled={running}>
          {running ? <><span className="spin" /> Optimizing...</> : "🎬 Optimize This Video"}
        </button>
      </div>
      <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste any video URL to optimize it." />
      {out && (
        <div style={{ marginTop: "16px" }}>
          <div className="card">
            <div className="ct">✅ {out.title}</div>
            {out.boxes.map(b => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
          </div>
        </div>
      )}
    </>
  );
}

// ─── COMPETITOR SPY ───────────────────────────────────────────────────────
function CompetitorSpy() {
  const [running, setRunning] = useState(false);
  const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
  const [out, setOut] = useState<string | null>(null);

  const run = async () => {
    setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
    try {
      const r = await callDjangoAI("Deep YouTube competitor analysis for InTalks Podcast (Telugu entrepreneur interviews, Sandeep N) vs Raw Talks with VK and Telugu Connects. Deliver: subscriber stats comparison, top performing videos, content gaps, keyword opportunities, 10 video ideas to outperform them.");
      setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
    } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
    setRunning(false);
  };

  return (
    <>
      <div className="card">
        <div className="ct">🕵️ Competitor Intelligence</div>
        <div className="csub">Deep analysis of Raw Talks with VK and Telugu Connects — what they rank for, their content gaps, and 10 video ideas to beat them.</div>
        <div className="fr2" style={{ marginBottom: "14px" }}>
          <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Raw Talks with VK</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu interview / talk show</div></div>
          <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Telugu Connects</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu business content</div></div>
        </div>
        <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Analysing...</> : "🕵️ Run Competitor Analysis"}</button>
        {running && <div className="pb-bar"><div className="pf" /></div>}
        {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
      </div>
      {out && <OutBox id="spy-txt" title="Competitor Intelligence Report" content={out} />}
    </>
  );
}

// ─── KEYWORD RESEARCH ────────────────────────────────────────────────────
function KeywordResearch() {
  const [seed, setSeed] = useState("");
  const [focus, setFocus] = useState("i");
  const [running, setRunning] = useState(false);
  const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
  const [out, setOut] = useState<string | null>(null);

  const run = async () => {
    const s = seed.trim() || "Telugu entrepreneur business";
    setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
    const c = focus === "i" ? "InTalks Podcast (Telugu entrepreneur podcast, global Telugu diaspora)" : "Magsmen Brand Consultants (brand strategy, India)";
    try {
      const r = await callDjangoAI(`Cross-reference YouTube + Google search patterns for "${c}" seed: "${s}". Provide: HIGH priority (10), MEDIUM (10), LONG-TAIL (10), TRENDING NOW (5), SEASONAL. Each: demand H/M/L, competition H/M/L, content angle. Focus 2026 Indian market.`);
      setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
    } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
    setRunning(false);
  };

  return (
    <>
      <div className="card">
        <div className="ct">🔍 YouTube + Google Keyword Research</div>
        <div className="csub">Cross-references what people search on YouTube AND Google for Telugu entrepreneur / brand strategy content globally.</div>
        <div className="fg"><label className="fl">Seed Topic</label><input className="fi" value={seed} onChange={e => setSeed(e.target.value)} placeholder="Telugu entrepreneur, brand strategy India, startup Hyderabad..." /></div>
        <div style={{ marginBottom: "13px" }}>
          <div className="fl" style={{ marginBottom: "6px" }}>Focus</div>
          <div className="tog">
            <button className={`tb ${focus === "i" ? "a-it" : ""}`} onClick={() => setFocus("i")}>InTalks (Telugu)</button>
            <button className={`tb ${focus === "m" ? "a-mg" : ""}`} onClick={() => setFocus("m")}>Magsmen (Brand)</button>
          </div>
        </div>
        <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Searching...</> : "🔍 Find Keywords"}</button>
        {running && <div className="pb-bar"><div className="pf" /></div>}
        {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
      </div>
      {out && <OutBox id="kwr-txt" title="Keyword Intelligence" content={out} />}
    </>
  );
}

// ─── HISTORY ─────────────────────────────────────────────────────────────
function History({ hist }: { hist: any[] }) {
  return (
    <div className="pg">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "13px" }}>
        <h2 style={{ fontSize: "16px", fontWeight: 700 }}>Published Content</h2>
        <span style={{ fontSize: "12px", color: "var(--muted)" }}>{hist.length} item{hist.length !== 1 ? "s" : ""}</span>
      </div>
      {hist.length === 0
        ? <div style={{ color: "var(--muted)", fontSize: "13px", padding: "14px 0" }}>Nothing yet. Run Website SEO or YouTube SEO to get started.</div>
        : hist.map((h: any, i: number) => {
          const icon = h.type === "youtube" ? "📺" : "🌐";
          const pc = h.type === "youtube" ? "p-it" : (h.site === "m" ? "p-mg" : "p-it");
          const pn = h.type === "youtube" ? "YouTube" : (h.site === "m" ? "Magsmen" : "InTalks");
          return (
            <div key={i} className="hist-item">
              <div>
                <div style={{ fontWeight: 600, fontSize: "13px" }}>{icon} {h.title}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{h.date}{h.path ? " · " + h.path : ""}</div>
              </div>
              <span className={`pill ${pc}`}>{pn}</span>
            </div>
          );
        })}
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────────────────────
function Settings({ cfg, setCfg, settings, loadSettings }: {
  cfg: AppCfg; setCfg: (c: AppCfg) => void;
  settings: SettingsData; loadSettings: () => void;
}) {
  const [local, setLocal] = useState<AppCfg>({ ...cfg });
  const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);

  useEffect(() => { setLocal({ ...cfg }); }, [cfg]);

  const save = () => {
    const newCfg = { ...local, bpath: san(local.bpath) || "src/blogs/", mpath: san(local.mpath) || "src/pages/" };
    setLocal(newCfg); setCfg(newCfg);
    setSt({ msg: "✅ Saved!", cls: "st-ok" });
  };

  const testGH = async () => {
    if (!local.token || !local.owner || !local.repo) { setSt({ msg: "⚠️ Fill all fields and save.", cls: "st-er" }); return; }
    setSt({ msg: "Testing...", cls: "st-in" });
    try {
      const r = await fetch(`https://api.github.com/repos/${local.owner}/${local.repo}`, { headers: { Authorization: "Bearer " + local.token } });
      if (r.ok) { const d = await r.json(); setSt({ msg: `✅ Connected: ${d.full_name} (${d.visibility})`, cls: "st-ok" }); }
      else setSt({ msg: `❌ ${r.status}: ${r.statusText}`, cls: "st-er" });
    } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
  };

  const f = (k: keyof AppCfg, v: string) => setLocal(p => ({ ...p, [k]: v }));

  return (
    <div className="pg">
      {/* Backend config status — read from Django .env via /api/settings/ */}
      <div className="card">
        <div className="ct">🖥️ Backend Configuration Status</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <span className={`pill ${settings.anthropic_connected ? "p-ok" : "p-err"}`}>{settings.anthropic_connected ? "✅ Anthropic Connected" : "❌ Anthropic Missing"}</span>
          <span className={`pill ${settings.github_connected ? "p-ok" : "p-err"}`}>{settings.github_connected ? "✅ GitHub Connected" : "❌ GitHub Missing"}</span>
          <span className={`pill ${settings.youtube_connected ? "p-ok" : "p-err"}`}>{settings.youtube_connected ? "✅ YouTube Connected" : "❌ YouTube Missing"}</span>
        </div>
        {settings.github_connected && (
          <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.8 }}>
            <strong>GitHub:</strong> {settings.github_owner}/{settings.github_repo} @ {settings.github_branch}<br />
            <strong>Blog Folder:</strong> {settings.blog_folder} &nbsp;|&nbsp; <strong>Meta Folder:</strong> {settings.meta_folder}<br />
            {settings.youtube_channel_id && <><strong>YouTube Channel ID:</strong> {settings.youtube_channel_id}</>}
          </div>
        )}
        <button className="btn bo" onClick={loadSettings} style={{ marginTop: "12px", fontSize: "12px" }}>🔄 Refresh Backend Status</button>
      </div>

      {/* Frontend GitHub token — OPTIONAL, only needed if you want a manual fallback.
          Publishing now happens through the backend push-to-github endpoint, which
          uses GITHUB_TOKEN from the server .env — this section is not required for
          normal operation anymore. */}
      <div className="card">
        <div className="ct">🤖 Anthropic API Key</div>
        <div className="wbox">⚠️ Configured in backend .env — no need to enter here. Status shown above.</div>
        <div className="fg"><label className="fl">API Key (optional override)</label><input className="fi" type="password" value={local.akey || ""} onChange={e => f("akey", e.target.value)} placeholder="sk-ant-... (leave blank to use backend)" /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get key →</a></div></div>
      </div>
      <div className="card">
        <div className="ct">🔗 GitHub <span style={{ fontSize: "12px", fontWeight: 400, color: "var(--muted)" }}>(optional — publishing already works via the backend)</span></div>
        <div className="wbox">⚠️ Publishing runs through your Django backend using GITHUB_TOKEN from its .env. You only need to fill this in if you want to test a direct token here.</div>
        <div className="fg"><label className="fl">Personal Access Token</label><input className="fi" type="password" value={local.token || ""} onChange={e => f("token", e.target.value)} placeholder="ghp_..." /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Generate token (repo scope) →</a></div></div>
        <div className="fr2">
          <div className="fg"><label className="fl">Owner</label><input className="fi" value={local.owner || settings.github_owner || ""} onChange={e => f("owner", e.target.value)} /></div>
          <div className="fg"><label className="fl">Repository</label><input className="fi" value={local.repo || settings.github_repo || ""} onChange={e => f("repo", e.target.value)} /></div>
        </div>
        <div className="fr2">
          <div className="fg"><label className="fl">Branch</label><input className="fi" value={local.branch || settings.github_branch || ""} onChange={e => f("branch", e.target.value)} /></div>
          <div className="fg"><label className="fl">Blog Folder</label><input className="fi" value={local.bpath || settings.blog_folder || ""} onChange={e => f("bpath", e.target.value)} /></div>
        </div>
        <div className="fg"><label className="fl">Meta Folder</label><input className="fi" value={local.mpath || settings.meta_folder || ""} onChange={e => f("mpath", e.target.value)} /></div>
      </div>
      <div className="card">
        <div className="ct">📺 YouTube <span style={{ fontSize: "12px", fontWeight: 400, color: "var(--muted)" }}>(auto-filled from backend, or use the Connect button on YouTube tab)</span></div>
        <div className="fg"><label className="fl">YouTube Data API Key</label><input className="fi" type="password" value={local.ytkey || ""} onChange={e => f("ytkey", e.target.value)} placeholder="AIzaSy..." /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get free API key →</a></div></div>
        <div className="fr2">
          <div className="fg"><label className="fl">InTalks Channel ID</label><input className="fi" value={local.itChId || settings.youtube_channel_id || ""} onChange={e => f("itChId", e.target.value)} placeholder="UCxxxxxxxxxxxxx" /></div>
          <div className="fg"><label className="fl">Magsmen Channel ID</label><input className="fi" value={local.mgChId || ""} onChange={e => f("mgChId", e.target.value)} placeholder="UCxxxxxxxxxxxxx" /></div>
        </div>
      </div>
      <div className="brow">
        <button className="btn bit" onClick={save}>💾 Save Frontend Settings</button>
        <button className="btn bo" onClick={testGH}>🔌 Test GitHub</button>
      </div>
      {st && <div className={`st-box ${st.cls}`} style={{ marginTop: "12px" }}>{st.msg}</div>}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────
export default function SEOCommandCenter() {
  const [tab, setTab] = useState("web");
  const [cfg, setCfg] = useState<AppCfg>({
    akey: "", token: "", owner: "magsmenuser7", repo: "Magsmen-React",
    branch: "main", bpath: "src/blogs/", mpath: "src/pages/",
    ytkey: "", itChId: "", mgChId: ""
  });
  const [settings, setSettings] = useState<SettingsData>({
    anthropic_connected: false, github_connected: false, youtube_connected: false,
    github_owner: "", github_repo: "", github_branch: "main",
    blog_folder: "src/blogs/", meta_folder: "src/pages/", youtube_channel_id: ""
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [ytConnected, setYtConnected] = useState(false);
  const [ytConnectedTxt, setYtConnectedTxt] = useState("✅ YouTube connected");
  const [ghPillOk, setGhPillOk] = useState(false);
  const [ytPillOk, setYtPillOk] = useState(false);
  const [hist, setHist] = useState<any[]>([]);

  // Load backend settings on mount
  const loadSettings = async () => {
    try {
      const data = await fetchSettings();
      setSettings(data);
      // Auto-fill cfg from backend settings if empty — INCLUDING the YouTube
      // key, which the original code fetched but never actually applied.
      setCfg(prev => ({
        ...prev,
        owner: prev.owner || data.github_owner,
        repo: prev.repo || data.github_repo,
        branch: prev.branch || data.github_branch,
        bpath: prev.bpath || data.blog_folder,
        mpath: prev.mpath || data.meta_folder,
        itChId: prev.itChId || data.youtube_channel_id,
        ytkey: prev.ytkey || data.youtube_api_key || "",
      }));
      setGhPillOk(data.github_connected);
      if (data.youtube_connected && data.youtube_api_key) {
        setYtPillOk(true);
        setYtConnected(true);
        setYtConnectedTxt("✅ YouTube connected — channel ready");
      }
    } catch (e) {
      console.error("Settings load failed:", e);
    }
  };

  useEffect(() => { loadSettings(); }, []);

  const updatePills = (c: AppCfg) => {
    setGhPillOk(!!(c.token && c.repo) || settings.github_connected);
    setYtPillOk(!!(c.ytkey && c.itChId));
  };

  const handleCfgChange = (newCfg: AppCfg) => {
    setCfg(newCfg);
    if (newCfg.ytkey && newCfg.itChId) { setYtConnected(true); setYtConnectedTxt("✅ YouTube connected — channel ready"); setYtPillOk(true); }
    updatePills(newCfg);
  };

  const handleConnected = (name: string, subs: string) => {
    setYtConnected(true);
    setYtConnectedTxt(`✅ ${name} connected (${subs} subs)`);
    setYtPillOk(true);
    setModalOpen(false);
  };

  const TABS = [["web", "⚡ Website SEO"], ["yt", "📺 YouTube SEO"], ["hist", "📋 History"], ["cfg", "⚙️ Settings"]];

  return (
    <>
      <style>{css}</style>
      <div className="hdr">
        <div>
          <div className="hdr-logo">⚡ SEO Automation <span>Engine</span></div>
          <div className="hdr-sub">Magsmen + InTalks — Keyword in. Published out.</div>
        </div>
        <div className="pills">
          <span className="pill p-mg">Magsmen</span>
          <span className="pill p-it">InTalks</span>
          <span className="pill" style={ghPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
            {ghPillOk ? <span style={{ color: "#065F46" }}>✅ {cfg.repo || settings.github_repo}</span> : "⚠ GitHub"}
          </span>
          <span className={`pill ${ytPillOk ? "p-ok" : ""}`} style={ytPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
            {ytPillOk ? "✅ YouTube" : "⚠ YouTube"}
          </span>
        </div>
      </div>

      <div className="tabs-bar">
        {TABS.map(([id, label]) => (
          <button key={id} className={`tab ${tab === id ? "on" : ""}`} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>

      <YTModal open={modalOpen} onClose={() => setModalOpen(false)} cfg={cfg} setCfg={handleCfgChange} onConnected={handleConnected} />

      {tab === "web" && <WebSEO settings={settings} />}
      {tab === "yt" && <YouTubeSEO cfg={cfg} ytConnected={ytConnected} ytConnectedTxt={ytConnectedTxt} onOpenModal={() => setModalOpen(true)} />}
      {tab === "hist" && <History hist={hist} />}
      {tab === "cfg" && <Settings cfg={cfg} setCfg={handleCfgChange} settings={settings} loadSettings={loadSettings} />}
    </>
  );
}




































// import { useState, useEffect, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction } from "react";

// // ─── CSS ───────────────────────────────────────────────────────────────────
// const css = `
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
// *{margin:0;padding:0;box-sizing:border-box}
// :root{--bg:#F5F0E8;--white:#fff;--it:#FF6B35;--it2:#E55D28;--mg:#2563EB;--dark:#1A1A2E;--ok:#10B981;--err:#EF4444;--warn:#F59E0B;--text:#1A1A2E;--muted:#6B7280;--bd:#E5DDD0;--bd2:#D4CFC7;--bg2:#EDE8DF}
// body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
// .hdr{background:var(--white);border-bottom:2px solid var(--it);padding:13px 22px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 10px rgba(0,0,0,.06)}
// .hdr-logo{font-size:16px;font-weight:700}.hdr-logo span{color:var(--it)}
// .hdr-sub{font-size:11px;color:var(--muted);margin-top:1px}
// .pills{display:flex;gap:7px}.pill{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;border:1px solid}
// .p-mg{background:#DBEAFE;color:var(--mg);border-color:#BFDBFE}
// .p-it{background:#FFF0EB;color:var(--it);border-color:#FECDB5}
// .p-ok{background:#D1FAE5;color:#065F46;border-color:#A7F3D0}
// .p-err{background:#FEE2E2;color:#991B1B;border-color:#FECACA}
// .tabs-bar{background:var(--white);border-bottom:1px solid var(--bd);padding:0 22px;display:flex;box-shadow:0 1px 4px rgba(0,0,0,.04)}
// .tab{padding:12px 16px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;transition:.15s;background:none;border-left:none;border-right:none;border-top:none;font-family:'Outfit',sans-serif}
// .tab:hover{color:var(--text)}.tab.on{color:var(--it);border-bottom:2px solid var(--it);font-weight:600}
// .pg{padding:22px;max-width:900px;margin:0 auto;width:100%}
// .stabs{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap}
// .stab{padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:1px solid var(--bd);color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
// .stab:hover{color:var(--text)}.stab.on{background:var(--it);color:#fff;border-color:var(--it)}
// .card{background:var(--white);border-radius:12px;padding:18px 20px;margin-bottom:14px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
// .ct{font-size:14px;font-weight:700;margin-bottom:10px}
// .csub{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.6}
// .fg{margin-bottom:12px}
// .fl{display:block;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
// .fi,.fs,.fta{width:100%;padding:9px 12px;border:1.5px solid var(--bd);border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);background:var(--white);transition:.2s;outline:none}
// .fi:focus,.fs:focus,.fta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
// .fta{resize:vertical;min-height:100px;line-height:1.7}
// .fr2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
// .btn{padding:9px 17px;border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:7px;transition:.2s}
// .btn:disabled{opacity:.45;cursor:not-allowed}
// .bd-btn{background:var(--dark);color:#fff}.bd-btn:hover:not(:disabled){opacity:.85}
// .bit{background:var(--it);color:#fff}.bit:hover:not(:disabled){background:var(--it2)}
// .bmg{background:var(--mg);color:#fff}
// .bo{background:transparent;border:1.5px solid var(--bd);color:var(--text)}.bo:hover:not(:disabled){background:var(--bg2)}
// .brow{display:flex;gap:9px;flex-wrap:wrap}
// .st-box{padding:9px 13px;border-radius:8px;font-size:12px;margin-top:10px}
// .st-ok{background:#D1FAE5;color:#065F46;border:1px solid #A7F3D0}
// .st-er{background:#FEE2E2;color:#991B1B;border:1px solid #FECACA}
// .st-in{background:#DBEAFE;color:#1E40AF;border:1px solid #BFDBFE}
// .log-wrap{background:var(--dark);border-radius:12px;overflow:hidden}
// .log-hdr{padding:11px 16px;border-bottom:1px solid #334155;display:flex;align-items:center;justify-content:space-between;background:#1E293B}
// .log-t{font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:.5px}
// .log-body{padding:14px;min-height:140px;max-height:360px;overflow-y:auto;font-family:'Courier New',monospace;font-size:12px;line-height:2;color:#E2E8F0}
// .log-ph{color:#475569;font-style:italic;font-size:12px;font-family:'Outfit',sans-serif}
// .s-ok{color:#6EE7B7}.s-er{color:#FCA5A5}.s-in{color:#93C5FD}.s-run{color:#FCD34D}.s-it{color:#FD8B6A}
// .q-item{display:flex;align-items:center;gap:9px;padding:8px 12px;background:var(--bg2);border-radius:8px;margin-bottom:6px;font-size:12.5px}
// .q-icon{font-size:13px;width:18px;text-align:center;flex-shrink:0}
// .q-kw{flex:1;font-weight:500}
// .qb{padding:2px 8px;border-radius:12px;font-size:10px;font-weight:600}
// .qb-w{background:#F3F4F6;color:var(--muted)}
// .qb-r{background:#FEF3C7;color:#92400E}
// .qb-ok{background:#D1FAE5;color:#065F46}
// .qb-e{background:#FEE2E2;color:#991B1B}
// .tog{display:flex;border:1.5px solid var(--bd);border-radius:8px;overflow:hidden;width:fit-content}
// .tb{padding:7px 16px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:none;color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
// .tb.a-it{background:var(--it);color:#fff}.tb.a-mg{background:var(--mg);color:#fff}
// .big-wrap{background:var(--white);border-radius:14px;padding:22px;margin-bottom:16px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
// .big-ta{width:100%;background:var(--bg);border:2px solid var(--bd);border-radius:9px;padding:12px 15px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);transition:.2s;outline:none;resize:vertical;min-height:110px;line-height:1.8}
// .big-ta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
// .go-btn{padding:12px 22px;border:none;border-radius:9px;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:9px;transition:.2s;width:100%;justify-content:center;margin-top:13px}
// .go-btn:disabled{opacity:.5;cursor:not-allowed}
// .go-web{background:var(--dark);color:#fff;box-shadow:0 4px 12px rgba(26,26,46,.2)}
// .go-web:hover:not(:disabled){background:#2a2a40}
// .go-yt{background:var(--it);color:#fff;box-shadow:0 4px 12px rgba(255,107,53,.25)}
// .go-yt:hover:not(:disabled){background:var(--it2)}
// .out-box{background:var(--bg);border-radius:9px;padding:13px;border:1.5px solid var(--bd);margin-bottom:11px}
// .ob-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
// .ob-t{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted)}
// .ob-body{font-family:'Courier New',monospace;font-size:11.5px;color:var(--dark);white-space:pre-wrap;line-height:1.7}
// .pb-bar{height:3px;border-radius:2px;background:var(--bg2);margin-top:8px;overflow:hidden}
// .pf{height:100%;background:linear-gradient(90deg,var(--mg),var(--it));animation:ind 1.4s ease-in-out infinite}
// @keyframes ind{0%{transform:translateX(-100%);width:60%}100%{transform:translateX(220%);width:60%}}
// .spin{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:sp .7s linear infinite}
// @keyframes sp{to{transform:rotate(360deg)}}
// .wbox{background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:10px 13px;margin-bottom:12px;font-size:12px;color:#92400E}
// .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:999;align-items:center;justify-content:center}
// .modal-overlay.open{display:flex}
// .modal{background:var(--white);border-radius:18px;width:500px;max-width:95vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.18)}
// .modal-hdr{background:linear-gradient(135deg,var(--it),#ff4500);padding:22px 24px;border-radius:18px 18px 0 0;position:relative}
// .modal-hdr h2{font-size:17px;font-weight:700;color:#fff}
// .modal-hdr p{font-size:12px;color:rgba(255,255,255,.8);margin-top:3px}
// .modal-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center}
// .modal-body{padding:22px}
// .step-row{display:flex;gap:12px;margin-bottom:20px}
// .step-num{width:26px;height:26px;background:var(--it);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0;margin-top:1px}
// .step-content{flex:1}
// .step-title{font-weight:700;font-size:13px;margin-bottom:5px}
// .step-desc{font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:10px}
// .step-guide{background:#F8F9FA;border-radius:8px;padding:11px 13px;font-size:11.5px;color:var(--text);line-height:1.9;margin-bottom:10px}
// .connect-banner{border-radius:12px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}
// .banner-yt{background:linear-gradient(135deg,var(--it),#ff4500);box-shadow:0 4px 16px rgba(255,107,53,.2)}
// .banner-ok{background:#D1FAE5;border:1px solid #A7F3D0}
// ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--bd2);border-radius:4px}
// .hist-item{background:var(--white);border:1px solid var(--bd);border-radius:10px;padding:12px 15px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 4px rgba(0,0,0,.04)}
// .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
// .stat-card{background:var(--bg);border:1px solid var(--bd);border-radius:9px;padding:13px;text-align:center}
// .stat-val{font-size:20px;font-weight:700;color:var(--it);margin-bottom:2px}
// .stat-lbl{font-size:11px;color:var(--muted)}
// @media(max-width:600px){.fr2{grid-template-columns:1fr}.tog{flex-wrap:wrap}}
// `;

// // ─── CONSTANTS ────────────────────────────────────────────────────────────
// const DJANGO_BASE = "http://127.0.0.1:8000/api";
// const BLOG_URL    = `${DJANGO_BASE}/generate-blog/`;
// const SETTINGS_URL = `${DJANGO_BASE}/settings/`;

// // ─── TYPES ────────────────────────────────────────────────────────────────
// interface LogEntry { text: string; cls: string; }

// interface SettingsData {
//   anthropic_connected: boolean;
//   github_connected: boolean;
//   youtube_connected: boolean;
//   github_owner: string;
//   github_repo: string;
//   github_branch: string;
//   blog_folder: string;
//   meta_folder: string;
//   youtube_channel_id: string;
// }

// interface AppCfg {
//   akey: string;
//   token: string;
//   owner: string;
//   repo: string;
//   branch: string;
//   bpath: string;
//   mpath: string;
//   ytkey: string;
//   itChId: string;
//   mgChId: string;
// }

// interface WebContext {
//   name: string; domain: string; desc: string;
//   audience: string; tone: string; author: string;
// }

// interface GitHubContentResponse { sha: string; }

// interface YtApiItem {
//   brandingSettings?: any;
//   statistics?: any;
//   id?: string | { channelId?: string; videoId?: string };
//   snippet?: { channelId?: string; title?: string; description?: string; tags?: string[]; };
// }

// interface YtApiResponse {
//   items?: YtApiItem[];
//   error?: { message: string };
// }

// interface DjangoBlogResponse {
//   blog: string;
//   message?: string;
//   status?: string;
// }

// interface VideoPackage {
//   title_a: string; title_b: string; title_c: string;
//   description: string; tags: string[]; hashtags: string[];
//   chapters: string; thumbnail: string; ab_note: string; rationale?: string;
// }

// interface ScanCardHeader { type: "header"; title: string; sub: string; trends: string[]; }
// interface ScanCardVideo {
//   type: "video";
//   pick: { rank: number; video_id: string; current_title: string; views: string; reason: string; trending_angle: string; new_title_preview: string; };
//   pkg: VideoPackage;
//   idx: number;
// }
// type ScanCard = ScanCardHeader | ScanCardVideo;

// // ─── HELPERS ──────────────────────────────────────────────────────────────
// function fmt(n: number | string | undefined | null): string {
//   if (!n) return "0";
//   const parsed = parseInt(String(n));
//   if (parsed >= 1000000) return (parsed / 1000000).toFixed(1) + "M";
//   if (parsed >= 1000) return (parsed / 1000).toFixed(1) + "K";
//   return "" + parsed;
// }

// function san(p: string | undefined | null): string {
//   p = (p || "").replace(/^https?:\/\/[^/]+\//, "").replace(/\\/g, "/").replace(/^\//, "");
//   if (p && !p.endsWith("/")) p += "/";
//   return p;
// }

// function webCtx(site: string): WebContext {
//   if (site === "m") return { name: "Magsmen Brand Consultants", domain: "magsmen.com", desc: "Brand strategy consulting by Sandeep N.", audience: "Indian entrepreneurs, startup founders, MSMEs.", tone: "Professional, authoritative.", author: "Sandeep N" };
//   return { name: "InTalks Podcast", domain: "intalks.in", desc: "Telugu entrepreneur interview podcast.", audience: "Telugu entrepreneurs and professionals globally.", tone: "Energetic, inspiring.", author: "Sandeep N" };
// }

// function extractVidId(url: string): string | null {
//   const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
//   return m ? m[1] : null;
// }

// // ─── DJANGO BLOG API CALL (single source of truth) ───────────────────────
// async function callDjangoBlog(keyword: string): Promise<string> {
//   debugger;
//   const response = await fetch(BLOG_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ keyword: keyword })
//   });
//   const data = await response.json() as DjangoBlogResponse;
//   if (!response.ok) throw new Error(data.message || "Blog generation failed");
//   if (typeof data.blog !== "string") throw new Error("Invalid response from Django API.");
//   return data.blog;
// }

// // ─── SETTINGS API CALL ───────────────────────────────────────────────────
// // async function fetchSettings(): Promise<SettingsData> {
// //   const res = await fetch(SETTINGS_URL);
// //   if (!res.ok) throw new Error("Settings fetch failed: " + res.status);
// //   return res.json();
// // }

// async function fetchSettings(): Promise<SettingsData> {

//   console.log("SETTINGS_URL =", SETTINGS_URL);

//   try {
//     const res = await fetch(SETTINGS_URL);

//     console.log("Status =", res.status);
//     console.log("OK =", res.ok);

//     if (!res.ok) {
//       throw new Error("Settings fetch failed: " + res.status);
//     }

//     const data = await res.json();

//     console.log("Settings Data =", data);

//     return data;

//   } catch (err) {
//     console.error("Fetch Error:", err);
//     throw err;
//   }
// }




// // ─── GITHUB PUSH ─────────────────────────────────────────────────────────
// async function ghPush(path: string, content: string, msg: string, token: string, owner: string, repo: string, branch: string): Promise<boolean> {
//   try {
//     const enc = btoa(unescape(encodeURIComponent(content)));
//     let sha: string | null = null;
//     try {
//       const ck = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, { headers: { Authorization: "Bearer " + token } });
//       if (ck.ok) { const dd = (await ck.json()) as GitHubContentResponse; sha = dd.sha; }
//     } catch (_) {}
//     const body: any = { message: msg, content: enc, branch };
//     if (sha) body.sha = sha;
//     const r = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
//       method: "PUT",
//       headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
//       body: JSON.stringify(body)
//     });
//     return r.ok;
//   } catch (_) { return false; }
// }

// // ─── PROCESS KEYWORD ─────────────────────────────────────────────────────
// async function processKW(
//   kw: string,
//   settings: SettingsData,
//   wLog: (msg: string, cls?: string) => void
// ): Promise<void> {
//   // STEP 1 — Call Django → Anthropic
//   wLog("🔍 Calling Django → Anthropic AI...", "s-run");
//   const blog = await callDjangoBlog(kw);
//   wLog(`✅ Blog generated (~${blog.split(" ").length} words)`, "s-ok");

//   // STEP 2 — Slug
//   const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").substring(0, 60);
//   wLog(`📝 Slug: ${slug}`, "s-in");

//   // STEP 3 — GitHub push
//   if (!settings.github_connected) throw new Error("GitHub not connected — check Settings.");

//   wLog("🚀 Pushing to GitHub...", "s-run");
//   const today = new Date().toISOString().split("T")[0];
//   const bpath = san(settings.blog_folder) + today + "-" + slug + ".mdx";

//   // GitHub token is stored in env on backend, we push via backend or direct
//   // Here we use direct push with token from settings (backend-verified)
//   // Since backend has token in .env, we call a push endpoint OR use frontend cfg token
//   // For now we indicate success — actual push needs cfg.token from Settings tab
//   const pushed = await ghPush(
//     bpath, blog, "[SEO] " + kw,
//     "", // token not exposed to frontend from settings endpoint for security
//     settings.github_owner, settings.github_repo, settings.github_branch
//   );

//   if (!pushed) {
//     wLog("⚠️ GitHub push skipped — add token in Settings tab for direct push", "s-er");
//   } else {
//     wLog("✅ Pushed → " + bpath, "s-ok");
//   }
// }

// // ─── YOUTUBE API ─────────────────────────────────────────────────────────

// async function ytGet(
//   endpoint: string,
//   ytkey: string
// ): Promise<YtApiResponse> {
// debugger;
//   console.log("========== YouTube API ==========");
//   console.log("Endpoint:", endpoint);
//   console.log("YouTube API Key:", ytkey);

//   if (!ytkey || ytkey.trim() === "") {
//     throw new Error(
//       "YouTube API Key is missing. Please check Settings and backend configuration."
//     );
//   }

//   const sep = endpoint.includes("?") ? "&" : "?";

//   const url = `https://www.googleapis.com/youtube/v3/${endpoint}${sep}key=${ytkey}`;

//   console.log("Request URL:", url);

//   const response = await fetch(url);

//   console.log("HTTP Status:", response.status);

//   const data = await response.json();

//   console.log("YouTube Response:", data);

//   if (!response.ok) {
//     throw new Error(
//       `YouTube API Error (${response.status}): ${data?.error?.message || "Unknown error"}`
//     );
//   }

//   if (data.error) {
//     throw new Error("YouTube API: " + data.error.message);
//   }

//   return data as YtApiResponse;
// }


// // async function ytGet(endpoint: string, ytkey: string): Promise<YtApiResponse> {
// //   if (!ytkey) throw new Error("YouTube not connected.");
// //   const sep = endpoint.includes("?") ? "&" : "?";
// //   const r = await fetch(`https://www.googleapis.com/youtube/v3/${endpoint}${sep}key=${ytkey}`);
// //   const d = await r.json() as YtApiResponse;
// //   if (d.error) throw new Error("YouTube API: " + d.error.message);
// //   return d;
// // }

// async function resolveChannelId(input: string, ytkey: string, itChId?: string): Promise<string> {
//   input = (input || "").trim();
//   const cm = input.match(/\/channel\/(UC[\w-]+)/);
//   if (cm) return cm[1];
//   if (/^UC[\w-]{20,}$/.test(input)) return input;
//   const handle = input.replace(/^https?:\/\/(www\.)?youtube\.com\/@?/, "").replace(/\/@?/, "").split("/")[0].split("?")[0];
//   if (handle) {
//     try { const r = await ytGet(`channels?part=id&forHandle=${encodeURIComponent(handle)}`, ytkey); if (r.items?.length) return r.items[0].id as string; } catch (_) {}
//     try { const r2 = await ytGet(`search?part=snippet&type=channel&q=${encodeURIComponent(handle)}&maxResults=1`, ytkey); if (r2.items?.length) return (r2.items[0].snippet?.channelId || (r2.items[0].id as any)?.channelId || ""); } catch (_) {}
//   }
//   if (itChId) return itChId;
//   throw new Error("Could not resolve channel. Add Channel ID in Settings.");
// }

// // ─── LOG BOX ─────────────────────────────────────────────────────────────
// function LogBox({ entries, title, badge, placeholder }: { entries: LogEntry[]; title: string; badge: ReactNode; placeholder: string }) {
//   const bodyRef = useRef<HTMLDivElement>(null);
//   useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [entries]);
//   return (
//     <div className="log-wrap">
//       <div className="log-hdr"><span className="log-t">{title}</span><span>{badge}</span></div>
//       <div className="log-body" ref={bodyRef}>
//         {entries.length === 0
//           ? <div className="log-ph">{placeholder}</div>
//           : entries.map((e, i) => <div key={i}><span className={e.cls || "s-in"}>{e.text}</span></div>)}
//       </div>
//     </div>
//   );
// }

// // ─── OUT BOX ─────────────────────────────────────────────────────────────
// function OutBox({ id, title, content }: { id: string; title: string; content: string }) {
//   const [copied, setCopied] = useState(false);
//   const copy = () => { navigator.clipboard.writeText((content || "").trim()); setCopied(true); setTimeout(() => setCopied(false), 2000); };
//   return (
//     <div className="out-box">
//       <div className="ob-hdr">
//         <span className="ob-t">{title}</span>
//         <button className="btn bo" style={{ padding: "4px 10px", fontSize: "11px" }} onClick={copy}>{copied ? "✅ Copied!" : "📋 Copy"}</button>
//       </div>
//       <div className="ob-body" id={id}>{content}</div>
//     </div>
//   );
// }

// // ─── YOUTUBE MODAL ───────────────────────────────────────────────────────
// function YTModal({ open, onClose, cfg, setCfg, onConnected }: {
//   open: boolean; onClose: () => void;
//   cfg: AppCfg; setCfg: (c: AppCfg) => void;
//   onConnected: (name: string, subs: string) => void;
// }) {
//   const [wizKey, setWizKey] = useState("");
//   const [wizUrl, setWizUrl] = useState("");
//   const [wizSt, setWizSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [wizLoading, setWizLoading] = useState(false);
//   const [done, setDone] = useState<{ name: string; subs: string; vids: number; views: string } | null>(null);

//   useEffect(() => { if (open) { setWizKey(cfg.ytkey || ""); setWizUrl(cfg.itChId || ""); setWizSt(null); setDone(null); } }, [open]);

//   const wizConnect = async () => {
//     if (!wizKey) { setWizSt({ msg: "⚠️ Paste your API key first.", cls: "st-er" }); return; }
//     if (!wizUrl) { setWizSt({ msg: "⚠️ Enter your channel URL.", cls: "st-er" }); return; }
//     setWizLoading(true); setWizSt({ msg: "Verifying and detecting channel...", cls: "st-in" });
//     try {
//       const chId = await resolveChannelId(wizUrl, wizKey, "");
//       const r = await ytGet(`channels?part=statistics,snippet&id=${chId}`, wizKey);
//       if (!r.items?.length) throw new Error("Channel not found. Double-check the URL.");
//       const ch = r.items[0];
//       const newCfg = { ...cfg, ytkey: wizKey, itChId: chId };
//       setCfg(newCfg);
//       try { await (window as any).storage?.set("seo4_cfg", JSON.stringify(newCfg)); } catch (_) {}
//       const title = (ch.snippet as any)?.title || "";
//       setDone({ name: title, subs: fmt(ch.statistics?.subscriberCount), vids: ch.statistics?.videoCount || 0, views: fmt(ch.statistics?.viewCount) });
//       onConnected(title, fmt(ch.statistics?.subscriberCount));
//     } catch (e: any) {
//       let msg = e.message || "";
//       if (msg.toLowerCase().includes("load failed") || msg.toLowerCase().includes("failed to fetch"))
//         msg = "❌ API key blocked by CORS. Fix: Google Cloud Console → API key → Application Restrictions → None → Save.";
//       else if (msg.includes("keyInvalid") || msg.includes("400"))
//         msg = "❌ Invalid API key. Make sure YouTube Data API v3 is enabled.";
//       else msg = "❌ " + msg;
//       setWizSt({ msg, cls: "st-er" });
//     }
//     setWizLoading(false);
//   };

//   if (!open) return null;
//   return (
//     <div className={`modal-overlay ${open ? "open" : ""}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
//       <div className="modal">
//         <div className="modal-hdr">
//           <h2>📺 Connect YouTube</h2>
//           <p>2-minute setup — follow the steps below</p>
//           <button className="modal-close" onClick={onClose}>✕</button>
//         </div>
//         <div className="modal-body">
//           {!done ? (
//             <>
//               <div className="step-row">
//                 <div className="step-num">1</div>
//                 <div className="step-content">
//                   <div className="step-title">Create a free YouTube Data API key</div>
//                   <div className="step-desc">Free Google service. Lets this tool read your channel data — no viewer login needed.</div>
//                   <div className="step-guide">
//                     <strong>Step A — Create the key:</strong><br />
//                     1. Click <strong>+ CREATE CREDENTIALS</strong> → <strong>API key</strong><br />
//                     2. Copy the key (starts with <code style={{ background: "#E5E7EB", padding: "1px 5px", borderRadius: "3px", fontSize: "11px" }}>AIzaSy...</code>)<br /><br />
//                     <strong>Step B — Enable YouTube API:</strong><br />
//                     3. APIs &amp; Services → Library → search <strong>YouTube Data API v3</strong> → Enable<br /><br />
//                     <strong>⚠️ Step C — Remove restrictions (critical):</strong><br />
//                     4. Credentials → click API key → Application restrictions → <strong>None</strong> → Save
//                   </div>
//                   <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#4285F4", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600 }}>🔗 Open Google Cloud Console →</a>
//                   {" "}
//                   <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#34A853", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600, marginTop: "8px" }}>▶ Enable YouTube Data API v3 →</a>
//                 </div>
//               </div>
//               <div className="step-row">
//                 <div className="step-num">2</div>
//                 <div className="step-content">
//                   <div className="step-title">Paste your API key</div>
//                   <input className="fi" type="password" placeholder="AIzaSy..." value={wizKey} onChange={e => setWizKey(e.target.value)} style={{ fontFamily: "monospace", fontSize: "12px" }} />
//                 </div>
//               </div>
//               <div className="step-row">
//                 <div className="step-num">3</div>
//                 <div className="step-content">
//                   <div className="step-title">Your InTalks channel URL</div>
//                   <input className="fi" placeholder="https://www.youtube.com/@InTalksPodcast" value={wizUrl} onChange={e => setWizUrl(e.target.value)} />
//                   <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>Copy from your YouTube channel address bar</div>
//                 </div>
//               </div>
//               <button className="go-btn go-yt" onClick={wizConnect} disabled={wizLoading}>
//                 {wizLoading ? <><span className="spin" /> Connecting...</> : "📡 Connect & Verify Channel"}
//               </button>
//               {wizSt && <div className={`st-box ${wizSt.cls}`}>{wizSt.msg}</div>}
//             </>
//           ) : (
//             <div style={{ textAlign: "center", padding: "10px 0" }}>
//               <div style={{ fontSize: "38px", marginBottom: "12px" }}>✅</div>
//               <div style={{ fontSize: "16px", fontWeight: 700 }}>✅ {done.name}</div>
//               <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", marginBottom: "18px" }}>{done.subs} subscribers · {done.vids} videos · {done.views} total views</div>
//               <div style={{ background: "#FFF5F0", borderRadius: "10px", padding: "13px", border: "1px solid #FECDB5", fontSize: "12px", color: "var(--it)", textAlign: "left", marginBottom: "18px" }}>
//                 🚀 Channel Scanner is now active. Paste your channel URL in the YouTube SEO tab to scan videos and generate SEO packages.
//               </div>
//               <button className="btn bit" onClick={onClose} style={{ width: "100%", justifyContent: "center" }}>Done — Go to YouTube SEO →</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── WEBSITE SEO ─────────────────────────────────────────────────────────
// function WebSEO({ cfg, settings }: { cfg: AppCfg; settings: SettingsData }) {
//   const [kwBatch, setKwBatch] = useState("");
//   const [site, setSite] = useState("m");
//   const [wc, setWc] = useState("1500");
//   const [running, setRunning] = useState(false);
//   const [queue, setQueue] = useState<{ kw: string; icon: string; status: string; cls: string }[]>([]);
//   const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
//   const [logTitle, setLogTitle] = useState("Automation Log");
//   const [logBadge, setLogBadge] = useState<ReactNode>(null);

//   const wLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-in" }]);

//   const runBatch = async () => {
//     debugger;
//     if (running) return;
//     const kws = kwBatch.split("\n").map(k => k.trim()).filter(k => k);
//     if (!kws.length) { wLog("⚠️ Enter at least one keyword.", "s-er"); return; }
//     if (!settings.github_connected) { wLog("⚠️ GitHub not connected — check Settings tab.", "s-er"); return; }
//     if (!settings.anthropic_connected) { wLog("⚠️ Anthropic API not connected — check .env on backend.", "s-er"); return; }

//     setRunning(true);
//     setQueue(kws.map(kw => ({ kw, icon: "⏳", status: "Queued", cls: "qb-w" })));
//     setLogEntries([]);
//     setLogTitle(`Running ${kws.length} keyword${kws.length > 1 ? "s" : ""}...`);
//     setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);

//     let done = 0, fail = 0;
//     for (let i = 0; i < kws.length; i++) {
//       const kw = kws[i];
//       setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "🔄", status: "Running", cls: "qb-r" } : q));
//       wLog(`━━━ [${i + 1}/${kws.length}] "${kw}" ━━━`, "s-it");
//       try {
//         await processKW(kw, settings, wLog);

//         // If cfg has token, also push directly from frontend
//         if (cfg.token && cfg.owner && cfg.repo) {
//           const today = new Date().toISOString().split("T")[0];
//           const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").substring(0, 60);
//           const bpath = san(cfg.bpath || settings.blog_folder) + today + "-" + slug + ".mdx";
//           wLog("🔄 Re-pushing with frontend token...", "s-run");
//           const blog = await callDjangoBlog(kw);
//           const ok = await ghPush(bpath, blog, "[SEO] " + kw, cfg.token, cfg.owner, cfg.repo, cfg.branch || settings.github_branch);
//           wLog(ok ? "✅ Pushed → " + bpath : "⚠️ Push failed — verify token in Settings", ok ? "s-ok" : "s-er");
//         }

//         setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "✅", status: "Published", cls: "qb-ok" } : q));
//         done++;
//       } catch (e: any) {
//         setQueue(p => p.map((q, j) => j === i ? { ...q, icon: "❌", status: "Failed", cls: "qb-e" } : q));
//         wLog("❌ " + (e?.message || String(e)), "s-er");
//         fail++;
//       }
//       wLog("", "");
//     }
//     wLog("════════════════════════", "s-in");
//     wLog(`✅ Complete — ${done} published${fail > 0 ? `, ${fail} failed` : ""}`, "s-ok");
//     setLogTitle(`✅ Done (${done}/${kws.length})`);
//     setLogBadge(<span className="pill p-ok">Published</span>);
//     setRunning(false);
//   };

//   return (
//     <div className="pg">
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>
//           Target Keywords <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>(one per line — all processed automatically)</span>
//         </div>
//         <textarea className="big-ta" value={kwBatch} onChange={e => setKwBatch(e.target.value)}
//           placeholder={"brand consultant Hyderabad\nbrand strategy for startups India\nhow to build a brand in Andhra Pradesh\npersonal branding coach India"} />
//         <div style={{ display: "flex", gap: "16px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
//           <div>
//             <div className="fl" style={{ marginBottom: "6px" }}>Website</div>
//             <div className="tog">
//               <button className={`tb ${site === "m" ? "a-mg" : ""}`} onClick={() => setSite("m")}>Magsmen</button>
//               <button className={`tb ${site === "i" ? "a-mg" : ""}`} onClick={() => setSite("i")}>InTalks</button>
//             </div>
//           </div>
//           <div>
//             <div className="fl" style={{ marginBottom: "6px" }}>Word Count</div>
//             <select className="fs" value={wc} onChange={e => setWc(e.target.value)} style={{ width: "170px" }}>
//               <option value="1000">1000 — Quick</option>
//               <option value="1500">1500 — Standard</option>
//               <option value="2500">2500 — Authority</option>
//             </select>
//           </div>
//         </div>
//         <button className="go-btn go-web" onClick={runBatch} disabled={running}>
//           {running ? <><span className="spin" /> Running...</> : "⚡ Run All Keywords — Research → Write → Push to GitHub"}
//         </button>
//       </div>
//       {queue.length > 0 && (
//         <div style={{ marginBottom: "14px" }}>
//           {queue.map((q, i) => (
//             <div key={i} className="q-item">
//               <span className="q-icon">{q.icon}</span>
//               <span className="q-kw">{q.kw}</span>
//               <span className={`qb ${q.cls}`}>{q.status}</span>
//             </div>
//           ))}
//         </div>
//       )}
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge}
//         placeholder="Enter keywords above (one per line). The engine calls Django → Anthropic AI, writes full blog posts, and pushes to GitHub — automatically." />
//     </div>
//   );
// }

// // ─── YOUTUBE SEO ─────────────────────────────────────────────────────────
// function YouTubeSEO({ cfg, ytConnected, ytConnectedTxt, onOpenModal }: {
//   cfg: AppCfg; ytConnected: boolean; ytConnectedTxt: string; onOpenModal: () => void;
// }) {
//   const [sub, setSub] = useState("scan");
//   return (
//     <div className="pg">
//       {!ytConnected ? (
//         <div className="connect-banner banner-yt" style={{ display: "flex" }}>
//           <div>
//             <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>📺 YouTube not connected</div>
//             <div style={{ fontSize: "12px", color: "rgba(255,255,255,.85)", marginTop: "2px" }}>Connect in 2 minutes to unlock Channel Scanner and video optimization.</div>
//           </div>
//           <button onClick={onOpenModal} style={{ padding: "10px 18px", background: "#fff", color: "var(--it)", border: "none", borderRadius: "8px", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "13px", cursor: "pointer", flexShrink: 0, marginLeft: "14px" }}>🔗 Connect YouTube</button>
//         </div>
//       ) : (
//         <div className="connect-banner banner-ok" style={{ display: "flex" }}>
//           <div style={{ fontSize: "13px", fontWeight: 600, color: "#065F46" }}>{ytConnectedTxt}</div>
//           <button onClick={onOpenModal} style={{ fontSize: "11px", color: "#065F46", background: "transparent", border: "1px solid #A7F3D0", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>Reconnect</button>
//         </div>
//       )}
//       <div className="stabs">
//         {[["scan", "📡 Channel Scanner"], ["vid", "🎬 Single Video"], ["spy", "🕵️ Competitor Spy"], ["kw", "🔍 Keywords"]].map(([id, label]) => (
//           <button key={id} className={`stab ${sub === id ? "on" : ""}`} onClick={() => setSub(id)}>{label}</button>
//         ))}
//       </div>
//       {sub === "scan" && <ChannelScanner cfg={cfg} />}
//       {sub === "vid" && <SingleVideo cfg={cfg} />}
//       {sub === "spy" && <CompetitorSpy cfg={cfg} />}
//       {sub === "kw" && <KeywordResearch cfg={cfg} />}
//     </div>
//   );
// }

// // ─── CHANNEL SCANNER ─────────────────────────────────────────────────────
// function ChannelScanner({ cfg }: { cfg: AppCfg }) {
//   const [chUrl, setChUrl] = useState("");
//   const [scope, setScope] = useState("both");
//   const [optCount, setOptCount] = useState("5");
//   const [running, setRunning] = useState(false);
//   const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
//   const [logTitle, setLogTitle] = useState("Channel Scanner Log");
//   const [logBadge, setLogBadge] = useState<ReactNode>(null);
//   const [scanOut, setScanOut] = useState<ScanCard[]>([]);
//   const sLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

//   const runScan = async () => {
//     if (running) return;
//     const chInput = chUrl.trim() || cfg.itChId;
//     if (!chInput) { sLog("⚠️ Enter your channel URL.", "s-er"); return; }
//     if (!cfg.ytkey) { sLog("⚠️ YouTube not connected.", "s-er"); return; }
//     setRunning(true); setLogEntries([]); setScanOut([]);
//     setLogTitle("Scanning..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
//     try {
//       sLog("📡 Resolving channel...", "s-run");
//       const chId = await resolveChannelId(chInput, cfg.ytkey, cfg.itChId);
//       const chData = await ytGet(`channels?part=statistics,snippet&id=${chId}`, cfg.ytkey);
//       if (!chData.items?.length) throw new Error("Channel not found.");
//       const ch = chData.items[0];
//       const chTitle = (ch.snippet as any)?.title || ch.id || "Channel";
//       sLog(`✅ ${chTitle} — ${fmt(ch.statistics?.subscriberCount)} subs | ${ch.statistics?.videoCount} videos`, "s-ok");
//       let vids: any[] = [];
//       if (scope === "top50" || scope === "both") { sLog("🎬 Fetching top 50 by views...", "s-run"); const t = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=viewCount&maxResults=50`, cfg.ytkey); vids = vids.concat(t.items || []); }
//       if (scope === "recent50" || scope === "both") { sLog("🕒 Fetching last 50 uploaded...", "s-run"); const r = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=date&maxResults=50`, cfg.ytkey); vids = vids.concat(r.items || []); }
//       const seen: Record<string, boolean> = {}; const uniq: any[] = [];
//       vids.forEach(v => { const id = (v.id as any)?.videoId; if (id && !seen[id]) { seen[id] = true; uniq.push(v); } });
//       sLog(`✅ ${uniq.length} unique videos found`, "s-ok");
//       const ids = uniq.map(v => (v.id as any).videoId).filter(Boolean).slice(0, 50).join(",");
//       const det = await ytGet(`videos?part=statistics,snippet&id=${ids}`, cfg.ytkey);
//       const videos = det.items || [];
//       sLog(`📈 Got stats for ${videos.length} videos`, "s-ok"); sLog("", "");
//       sLog("🧠 AI analysing with live trends...", "s-run");
//       const summary = videos.slice(0, 40).map((v, i) => {
//         const sn: any = v.snippet || {};
//         return `${i + 1}. ID:${v.id} Views:${fmt(v.statistics?.viewCount || 0)} Title:"${sn.title || ""}" Desc:${(sn.description || "").length}chars Tags:${(sn.tags || []).length}`;
//       }).join("\n");
//       const aRaw = await callDjangoBlog(`YouTube SEO expert. Channel: InTalks Podcast. Videos:\n${summary}\n\nPick TOP ${optCount} with highest optimization potential. Return ONLY raw JSON:\n{"picks":[{"rank":1,"video_id":"...","current_title":"...","views":"...","reason":"...","trending_angle":"...","new_title_preview":"..."}],"trends":["t1","t2","t3"],"insight":"one key channel observation"}`);
//       let analysis: any;
//       try { analysis = JSON.parse(aRaw.replace(/```json|```/g, "").trim()); } catch (e: any) { throw new Error("Analysis failed: " + e.message); }
//       sLog(`✅ Selected ${analysis.picks.length} videos`, "s-ok");
//       sLog("📈 Trends: " + (analysis.trends || []).join(" | "), "s-it");
//       sLog("💡 " + analysis.insight, "s-in"); sLog("", "");
//       const cards: ScanCard[] = [{ type: "header", title: `📡 ${analysis.picks.length} Videos Selected for Optimization`, sub: "Based on live Google + YouTube search trends", trends: analysis.trends || [] }];
//       for (let i = 0; i < analysis.picks.length; i++) {
//         const pick = analysis.picks[i];
//         sLog(`🎬 Optimizing [${i + 1}/${analysis.picks.length}]: "${pick.current_title}"...`, "s-run");
//         const pkgRaw = await callDjangoBlog(`Optimize YouTube video: "${pick.current_title}". Trending angle: ${pick.trending_angle}.\n\nReturn ONLY raw JSON:\n{"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 tags"],"chapters":"0:00 Intro\\n2:00...","thumbnail":"...","ab_note":"...","rationale":"..."}`);
//         let pkg: VideoPackage;
//         try { pkg = JSON.parse(pkgRaw.replace(/```json|```/g, "").trim()); } catch (e) { sLog(`⚠️ Video ${i + 1} parse error`, "s-er"); continue; }
//         sLog(`✅ Package ready: "${pkg.title_a}"`, "s-ok");
//         cards.push({ type: "video", pick, pkg, idx: i });
//       }
//       setScanOut(cards);
//       sLog("════════════════════════", "s-it");
//       sLog(`✅ ALL DONE — ${analysis.picks.length} SEO packages ready.`, "s-ok");
//       setLogTitle("✅ Complete"); setLogBadge(<span className="pill p-ok">Done</span>);
//     } catch (e: any) { sLog("❌ " + e.message, "s-er"); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>InTalks Channel URL</div>
//         <input className="fi" value={chUrl} onChange={e => setChUrl(e.target.value)} placeholder="https://www.youtube.com/@InTalksPodcast" style={{ fontSize: "14px", padding: "11px 14px" }} />
//         <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px", lineHeight: 1.6 }}>The engine scans your videos, cross-references live Google + YouTube search trends, auto-selects the highest-opportunity videos, and generates complete SEO packages.</div>
//         <div style={{ display: "flex", gap: "14px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
//           <div><div className="fl" style={{ marginBottom: "5px" }}>Scan Scope</div>
//             <select className="fs" value={scope} onChange={e => setScope(e.target.value)} style={{ width: "230px" }}>
//               <option value="top50">Top 50 by views</option>
//               <option value="recent50">Last 50 uploaded</option>
//               <option value="both">Both (top + recent, ~75 videos)</option>
//             </select>
//           </div>
//           <div><div className="fl" style={{ marginBottom: "5px" }}>Optimize Count</div>
//             <select className="fs" value={optCount} onChange={e => setOptCount(e.target.value)} style={{ width: "150px" }}>
//               <option value="3">Top 3 videos</option>
//               <option value="5">Top 5 videos</option>
//               <option value="10">Top 10 videos</option>
//             </select>
//           </div>
//         </div>
//         <button className="go-btn go-yt" onClick={runScan} disabled={running}>
//           {running ? <><span className="spin" /> Scanning...</> : "📡 Scan → Auto-Select → Optimize"}
//         </button>
//       </div>
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste your channel URL and hit Scan." />
//       <div style={{ marginTop: "16px" }}>
//         {scanOut.map((item, idx) => {
//           if (item.type === "header") return (
//             <div key={idx} className="card">
//               <div className="ct">{item.title}</div>
//               <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "10px" }}>{item.sub}</div>
//               <div style={{ fontSize: "12px", color: "var(--text)" }}>🔥 Trending now: {item.trends.map((t, i) => <span key={i} style={{ background: "var(--bg)", padding: "2px 9px", borderRadius: "12px", marginRight: "4px", border: "1px solid var(--bd)", display: "inline-block", marginBottom: "4px" }}>{t}</span>)}</div>
//             </div>
//           );
//           if (item.type === "video") {
//             const { pick, pkg } = item;
//             const boxes = [
//               { id: `sc${item.idx}t`, t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
//               { id: `sc${item.idx}d`, t: "📝 DESCRIPTION", c: pkg.description },
//               { id: `sc${item.idx}g`, t: `🏷️ TAGS (${(pkg.tags || []).length})`, c: (pkg.tags || []).join(", ") },
//               { id: `sc${item.idx}h`, t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
//               { id: `sc${item.idx}c`, t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
//               { id: `sc${item.idx}th`, t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
//             ];
//             return (
//               <div key={idx} className="card">
//                 <div className="ct">Video {item.idx + 1} — <a href={`https://youtube.com/watch?v=${pick.video_id}`} target="_blank" rel="noreferrer" style={{ color: "var(--it)", fontSize: "13px", fontWeight: 400 }}>{pick.current_title}</a></div>
//                 <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>{fmt(pick.views)} views · {pick.reason}</div>
//                 {boxes.map(b => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </>
//   );
// }

// // ─── SINGLE VIDEO ────────────────────────────────────────────────────────
// function SingleVideo({ cfg }: { cfg: AppCfg }) {
//   const [vidUrl, setVidUrl] = useState("");
//   const [running, setRunning] = useState(false);
//   const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
//   const [logTitle, setLogTitle] = useState("Video Optimizer Log");
//   const [logBadge, setLogBadge] = useState<ReactNode>(null);
//   const [out, setOut] = useState<{ title: string; boxes: { id: string; t: string; c: string }[] } | null>(null);
//   const vLog = (text: string, cls?: string) => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

//   const run = async () => {
//     const url = vidUrl.trim();
//     if (!url) { vLog("⚠️ Paste a video URL.", "s-er"); return; }
//     const vid = extractVidId(url);
//     if (!vid) { vLog("⚠️ Could not read video ID from URL.", "s-er"); return; }
//     if (running) return;
//     setRunning(true); setLogEntries([]); setOut(null);
//     setLogTitle("Optimizing..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
//     try {
//       vLog("📡 Fetching video data...", "s-run");
//       if (!cfg.ytkey) throw new Error("YouTube not connected.");
//       const vd = await ytGet(`videos?part=statistics,snippet&id=${vid}`, cfg.ytkey);
//       if (!vd.items?.length) throw new Error("Video not found.");
//       const v = vd.items[0];
//       const titleSafe = (v.snippet as any)?.title || "(untitled)";
//       const viewsSafe = fmt(v.statistics?.viewCount || 0);
//       vLog(`✅ "${titleSafe}" — ${viewsSafe} views`, "s-ok");
//       vLog("🔍 Generating SEO package via Django...", "s-run");
//       const pkgRaw = await callDjangoBlog(`Optimize YouTube video: Title:"${titleSafe}" Views:${viewsSafe}. Return ONLY raw JSON: {"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 hashtags"],"chapters":"...","thumbnail":"...","ab_note":"...","rationale":"..."}`);
//       let pkg: VideoPackage;
//       try { pkg = JSON.parse(pkgRaw.replace(/```json|```/g, "").trim()); } catch (_) { throw new Error("Package parse error."); }
//       vLog("✅ Package ready", "s-ok");
//       setOut({
//         title: titleSafe, boxes: [
//           { id: "vst", t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
//           { id: "vsd", t: "📝 DESCRIPTION", c: pkg.description },
//           { id: "vsg", t: "🏷️ TAGS", c: (pkg.tags || []).join(", ") },
//           { id: "vsh", t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
//           { id: "vsc", t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
//           { id: "vsth", t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
//           { id: "vsr", t: "⚡ SEO RATIONALE", c: pkg.rationale || "" },
//         ]
//       });
//       setLogTitle("✅ Done"); setLogBadge(<span className="pill p-ok">Done</span>);
//     } catch (e: any) { vLog("❌ " + e.message, "s-er"); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>YouTube Video URL</div>
//         <input className="fi" value={vidUrl} onChange={e => setVidUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=xxxxxxxxxx" style={{ fontSize: "14px", padding: "11px 14px" }} />
//         <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>Fetches current title, description and stats — then generates an optimized SEO package via Django.</div>
//         <button className="go-btn go-yt" onClick={run} disabled={running}>
//           {running ? <><span className="spin" /> Optimizing...</> : "🎬 Optimize This Video"}
//         </button>
//       </div>
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste any video URL to optimize it." />
//       {out && (
//         <div style={{ marginTop: "16px" }}>
//           <div className="card">
//             <div className="ct">✅ {out.title}</div>
//             {out.boxes.map(b => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // ─── COMPETITOR SPY ───────────────────────────────────────────────────────
// function CompetitorSpy({ cfg }: { cfg: AppCfg }) {
//   const [running, setRunning] = useState(false);
//   const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [out, setOut] = useState<string | null>(null);

//   const run = async () => {
//     setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
//     try {
//       const r = await callDjangoBlog("Deep YouTube competitor analysis for InTalks Podcast (Telugu entrepreneur interviews, Sandeep N) vs Raw Talks with VK and Telugu Connects. Deliver: subscriber stats comparison, top performing videos, content gaps, keyword opportunities, 10 video ideas to outperform them.");
//       setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
//     } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="card">
//         <div className="ct">🕵️ Competitor Intelligence</div>
//         <div className="csub">Deep analysis of Raw Talks with VK and Telugu Connects — what they rank for, their content gaps, and 10 video ideas to beat them.</div>
//         <div className="fr2" style={{ marginBottom: "14px" }}>
//           <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Raw Talks with VK</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu interview / talk show</div></div>
//           <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Telugu Connects</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu business content</div></div>
//         </div>
//         <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Analysing...</> : "🕵️ Run Competitor Analysis"}</button>
//         {running && <div className="pb-bar"><div className="pf" /></div>}
//         {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
//       </div>
//       {out && <OutBox id="spy-txt" title="Competitor Intelligence Report" content={out} />}
//     </>
//   );
// }

// // ─── KEYWORD RESEARCH ────────────────────────────────────────────────────
// function KeywordResearch({ cfg }: { cfg: AppCfg }) {
//   const [seed, setSeed] = useState("");
//   const [focus, setFocus] = useState("i");
//   const [running, setRunning] = useState(false);
//   const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [out, setOut] = useState<string | null>(null);

//   const run = async () => {
//     const s = seed.trim() || "Telugu entrepreneur business";
//     setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
//     const c = focus === "i" ? "InTalks Podcast (Telugu entrepreneur podcast, global Telugu diaspora)" : "Magsmen Brand Consultants (brand strategy, India)";
//     try {
//       const r = await callDjangoBlog(`Cross-reference YouTube + Google search patterns for "${c}" seed: "${s}". Provide: HIGH priority (10), MEDIUM (10), LONG-TAIL (10), TRENDING NOW (5), SEASONAL. Each: demand H/M/L, competition H/M/L, content angle. Focus 2026 Indian market.`);
//       setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
//     } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="card">
//         <div className="ct">🔍 YouTube + Google Keyword Research</div>
//         <div className="csub">Cross-references what people search on YouTube AND Google for Telugu entrepreneur / brand strategy content globally.</div>
//         <div className="fg"><label className="fl">Seed Topic</label><input className="fi" value={seed} onChange={e => setSeed(e.target.value)} placeholder="Telugu entrepreneur, brand strategy India, startup Hyderabad..." /></div>
//         <div style={{ marginBottom: "13px" }}>
//           <div className="fl" style={{ marginBottom: "6px" }}>Focus</div>
//           <div className="tog">
//             <button className={`tb ${focus === "i" ? "a-it" : ""}`} onClick={() => setFocus("i")}>InTalks (Telugu)</button>
//             <button className={`tb ${focus === "m" ? "a-mg" : ""}`} onClick={() => setFocus("m")}>Magsmen (Brand)</button>
//           </div>
//         </div>
//         <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Searching...</> : "🔍 Find Keywords"}</button>
//         {running && <div className="pb-bar"><div className="pf" /></div>}
//         {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
//       </div>
//       {out && <OutBox id="kwr-txt" title="Keyword Intelligence" content={out} />}
//     </>
//   );
// }

// // ─── HISTORY ─────────────────────────────────────────────────────────────
// function History({ hist }: { hist: any[] }) {
//   return (
//     <div className="pg">
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "13px" }}>
//         <h2 style={{ fontSize: "16px", fontWeight: 700 }}>Published Content</h2>
//         <span style={{ fontSize: "12px", color: "var(--muted)" }}>{hist.length} item{hist.length !== 1 ? "s" : ""}</span>
//       </div>
//       {hist.length === 0
//         ? <div style={{ color: "var(--muted)", fontSize: "13px", padding: "14px 0" }}>Nothing yet. Run Website SEO or YouTube SEO to get started.</div>
//         : hist.map((h: any, i: number) => {
//           const icon = h.type === "youtube" ? "📺" : "🌐";
//           const pc = h.type === "youtube" ? "p-it" : (h.site === "m" ? "p-mg" : "p-it");
//           const pn = h.type === "youtube" ? "YouTube" : (h.site === "m" ? "Magsmen" : "InTalks");
//           return (
//             <div key={i} className="hist-item">
//               <div>
//                 <div style={{ fontWeight: 600, fontSize: "13px" }}>{icon} {h.title}</div>
//                 <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{h.date}{h.path ? " · " + h.path : ""}</div>
//               </div>
//               <span className={`pill ${pc}`}>{pn}</span>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// // ─── SETTINGS ────────────────────────────────────────────────────────────
// function Settings({ cfg, setCfg, settings, loadSettings }: {
//   cfg: AppCfg; setCfg: (c: AppCfg) => void;
//   settings: SettingsData; loadSettings: () => void;
// }) {
//   const [local, setLocal] = useState<AppCfg>({ ...cfg });
//   const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);

//   useEffect(() => { setLocal({ ...cfg }); }, [cfg]);

//   const save = () => {
//     const newCfg = { ...local, bpath: san(local.bpath) || "src/blogs/", mpath: san(local.mpath) || "src/pages/" };
//     setLocal(newCfg); setCfg(newCfg);
//     setSt({ msg: "✅ Saved!", cls: "st-ok" });
//   };

//   const testGH = async () => {
//     if (!local.token || !local.owner || !local.repo) { setSt({ msg: "⚠️ Fill all fields and save.", cls: "st-er" }); return; }
//     setSt({ msg: "Testing...", cls: "st-in" });
//     try {
//       const r = await fetch(`https://api.github.com/repos/${local.owner}/${local.repo}`, { headers: { Authorization: "Bearer " + local.token } });
//       if (r.ok) { const d = await r.json(); setSt({ msg: `✅ Connected: ${d.full_name} (${d.visibility})`, cls: "st-ok" }); }
//       else setSt({ msg: `❌ ${r.status}: ${r.statusText}`, cls: "st-er" });
//     } catch (e: any) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//   };

//   const f = (k: keyof AppCfg, v: string) => setLocal(p => ({ ...p, [k]: v }));

//   return (
//     <div className="pg">
//       {/* Backend config status — read from Django .env via /api/settings/ */}
//       <div className="card">
//         <div className="ct">🖥️ Backend Configuration Status</div>
//         <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//           <span className={`pill ${settings.anthropic_connected ? "p-ok" : "p-err"}`}>{settings.anthropic_connected ? "✅ Anthropic Connected" : "❌ Anthropic Missing"}</span>
//           <span className={`pill ${settings.github_connected ? "p-ok" : "p-err"}`}>{settings.github_connected ? "✅ GitHub Connected" : "❌ GitHub Missing"}</span>
//           <span className={`pill ${settings.youtube_connected ? "p-ok" : "p-err"}`}>{settings.youtube_connected ? "✅ YouTube Connected" : "❌ YouTube Missing"}</span>
//         </div>
//         {settings.github_connected && (
//           <div style={{ marginTop: "12px", fontSize: "12px", color: "var(--muted)", lineHeight: 1.8 }}>
//             <strong>GitHub:</strong> {settings.github_owner}/{settings.github_repo} @ {settings.github_branch}<br />
//             <strong>Blog Folder:</strong> {settings.blog_folder} &nbsp;|&nbsp; <strong>Meta Folder:</strong> {settings.meta_folder}<br />
//             {settings.youtube_channel_id && <><strong>YouTube Channel ID:</strong> {settings.youtube_channel_id}</>}
//           </div>
//         )}
//         <button className="btn bo" onClick={loadSettings} style={{ marginTop: "12px", fontSize: "12px" }}>🔄 Refresh Backend Status</button>
//       </div>

//       {/* Frontend GitHub token for direct push */}
//       <div className="card">
//         <div className="ct">🤖 Anthropic API Key</div>
//         <div className="wbox">⚠️ Configured in backend .env — no need to enter here. Status shown above.</div>
//         <div className="fg"><label className="fl">API Key (optional override)</label><input className="fi" type="password" value={local.akey || ""} onChange={e => f("akey", e.target.value)} placeholder="sk-ant-... (leave blank to use backend)" /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get key →</a></div></div>
//       </div>
//       <div className="card">
//         <div className="ct">🔗 GitHub (Frontend Token for Direct Push)</div>
//         <div className="fg"><label className="fl">Personal Access Token</label><input className="fi" type="password" value={local.token || ""} onChange={e => f("token", e.target.value)} placeholder="ghp_..." /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Generate token (repo scope) →</a></div></div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">Owner</label><input className="fi" value={local.owner || settings.github_owner || ""} onChange={e => f("owner", e.target.value)} /></div>
//           <div className="fg"><label className="fl">Repository</label><input className="fi" value={local.repo || settings.github_repo || ""} onChange={e => f("repo", e.target.value)} /></div>
//         </div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">Branch</label><input className="fi" value={local.branch || settings.github_branch || ""} onChange={e => f("branch", e.target.value)} /></div>
//           <div className="fg"><label className="fl">Blog Folder</label><input className="fi" value={local.bpath || settings.blog_folder || ""} onChange={e => f("bpath", e.target.value)} /></div>
//         </div>
//         <div className="fg"><label className="fl">Meta Folder</label><input className="fi" value={local.mpath || settings.meta_folder || ""} onChange={e => f("mpath", e.target.value)} /></div>
//       </div>
//       <div className="card">
//         <div className="ct">📺 YouTube <span style={{ fontSize: "12px", fontWeight: 400, color: "var(--muted)" }}>(or use the Connect button on YouTube tab)</span></div>
//         <div className="fg"><label className="fl">YouTube Data API Key</label><input className="fi" type="password" value={local.ytkey || ""} onChange={e => f("ytkey", e.target.value)} placeholder="AIzaSy..." /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get free API key →</a></div></div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">InTalks Channel ID</label><input className="fi" value={local.itChId || settings.youtube_channel_id || ""} onChange={e => f("itChId", e.target.value)} placeholder="UCxxxxxxxxxxxxx" /></div>
//           <div className="fg"><label className="fl">Magsmen Channel ID</label><input className="fi" value={local.mgChId || ""} onChange={e => f("mgChId", e.target.value)} placeholder="UCxxxxxxxxxxxxx" /></div>
//         </div>
//       </div>
//       <div className="brow">
//         <button className="btn bit" onClick={save}>💾 Save Frontend Settings</button>
//         <button className="btn bo" onClick={testGH}>🔌 Test GitHub</button>
//       </div>
//       {st && <div className={`st-box ${st.cls}`} style={{ marginTop: "12px" }}>{st.msg}</div>}
//     </div>
//   );
// }

// // ─── APP ─────────────────────────────────────────────────────────────────
// export default function SEOCommandCenter() {
//   const [tab, setTab] = useState("web");
//   const [cfg, setCfg] = useState<AppCfg>({
//     akey: "", token: "", owner: "magsmenuser7", repo: "Magsmen-React",
//     branch: "main", bpath: "src/blogs/", mpath: "src/pages/",
//     ytkey: "", itChId: "", mgChId: ""
//   });
//   const [settings, setSettings] = useState<SettingsData>({
//     anthropic_connected: false, github_connected: false, youtube_connected: false,
//     github_owner: "", github_repo: "", github_branch: "main",
//     blog_folder: "src/blogs/", meta_folder: "src/pages/", youtube_channel_id: ""
//   });
//   const [modalOpen, setModalOpen] = useState(false);
//   const [ytConnected, setYtConnected] = useState(false);
//   const [ytConnectedTxt, setYtConnectedTxt] = useState("✅ YouTube connected");
//   const [ghPillOk, setGhPillOk] = useState(false);
//   const [ytPillOk, setYtPillOk] = useState(false);
//   const [hist, setHist] = useState<any[]>([]);

//   // Load backend settings on mount
//   const loadSettings = async () => {
//     try {
//       const data = await fetchSettings();
//       setSettings(data);
//       // Auto-fill cfg from backend settings if empty
//       setCfg(prev => ({
//         ...prev,
//         owner: prev.owner || data.github_owner,
//         repo: prev.repo || data.github_repo,
//         branch: prev.branch || data.github_branch,
//         bpath: prev.bpath || data.blog_folder,
//         mpath: prev.mpath || data.meta_folder,
//         itChId: prev.itChId || data.youtube_channel_id,
//       }));
//       setGhPillOk(data.github_connected);
//       if (data.youtube_connected) { setYtPillOk(true); setYtConnected(true); setYtConnectedTxt("✅ YouTube connected — channel ready"); }
//     } catch (e) {
//       console.error("Settings load failed:", e);
//     }
//   };

//   useEffect(() => { loadSettings(); }, []);

//   const updatePills = (c: AppCfg) => {
//     setGhPillOk(!!(c.token && c.repo) || settings.github_connected);
//     setYtPillOk(!!(c.ytkey && c.itChId));
//   };

//   const handleCfgChange = (newCfg: AppCfg) => {
//     setCfg(newCfg);
//     if (newCfg.ytkey && newCfg.itChId) { setYtConnected(true); setYtConnectedTxt("✅ YouTube connected — channel ready"); setYtPillOk(true); }
//     updatePills(newCfg);
//   };

//   const handleConnected = (name: string, subs: string) => {
//     setYtConnected(true);
//     setYtConnectedTxt(`✅ ${name} connected (${subs} subs)`);
//     setYtPillOk(true);
//     setModalOpen(false);
//   };

//   const TABS = [["web", "⚡ Website SEO"], ["yt", "📺 YouTube SEO"], ["hist", "📋 History"], ["cfg", "⚙️ Settings"]];

//   return (
//     <>
//       <style>{css}</style>
//       <div className="hdr">
//         <div>
//           <div className="hdr-logo">⚡ SEO Automation <span>Engine</span></div>
//           <div className="hdr-sub">Magsmen + InTalks — Keyword in. Published out.</div>
//         </div>
//         <div className="pills">
//           <span className="pill p-mg">Magsmen</span>
//           <span className="pill p-it">InTalks</span>
//           <span className="pill" style={ghPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
//             {ghPillOk ? <span style={{ color: "#065F46" }}>✅ {cfg.repo || settings.github_repo}</span> : "⚠ GitHub"}
//           </span>
//           <span className={`pill ${ytPillOk ? "p-ok" : ""}`} style={ytPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
//             {ytPillOk ? "✅ YouTube" : "⚠ YouTube"}
//           </span>
//         </div>
//       </div>

//       <div className="tabs-bar">
//         {TABS.map(([id, label]) => (
//           <button key={id} className={`tab ${tab === id ? "on" : ""}`} onClick={() => setTab(id)}>{label}</button>
//         ))}
//       </div>

//       <YTModal open={modalOpen} onClose={() => setModalOpen(false)} cfg={cfg} setCfg={handleCfgChange} onConnected={handleConnected} />

//       {tab === "web" && <WebSEO cfg={cfg} settings={settings} />}
//       {tab === "yt" && <YouTubeSEO cfg={cfg} ytConnected={ytConnected} ytConnectedTxt={ytConnectedTxt} onOpenModal={() => setModalOpen(true)} />}
//       {tab === "hist" && <History hist={hist} />}
//       {tab === "cfg" && <Settings cfg={cfg} setCfg={handleCfgChange} settings={settings} loadSettings={loadSettings} />}
//     </>
//   );
// }












// import { useState, useEffect, useRef, useCallback, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction } from "react";

// // ─── CSS ───────────────────────────────────────────────────────────────────
// const css = `
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
// *{margin:0;padding:0;box-sizing:border-box}
// :root{--bg:#F5F0E8;--white:#fff;--it:#FF6B35;--it2:#E55D28;--mg:#2563EB;--dark:#1A1A2E;--ok:#10B981;--err:#EF4444;--warn:#F59E0B;--text:#1A1A2E;--muted:#6B7280;--bd:#E5DDD0;--bd2:#D4CFC7;--bg2:#EDE8DF}
// body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
// .hdr{background:var(--white);border-bottom:2px solid var(--it);padding:13px 22px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 10px rgba(0,0,0,.06)}
// .hdr-logo{font-size:16px;font-weight:700}.hdr-logo span{color:var(--it)}
// .hdr-sub{font-size:11px;color:var(--muted);margin-top:1px}
// .pills{display:flex;gap:7px}.pill{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;border:1px solid}
// .p-mg{background:#DBEAFE;color:var(--mg);border-color:#BFDBFE}
// .p-it{background:#FFF0EB;color:var(--it);border-color:#FECDB5}
// .p-ok{background:#D1FAE5;color:#065F46;border-color:#A7F3D0}
// .p-err{background:#FEE2E2;color:#991B1B;border-color:#FECACA}
// .tabs-bar{background:var(--white);border-bottom:1px solid var(--bd);padding:0 22px;display:flex;box-shadow:0 1px 4px rgba(0,0,0,.04)}
// .tab{padding:12px 16px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;transition:.15s;background:none;border-left:none;border-right:none;border-top:none;font-family:'Outfit',sans-serif}
// .tab:hover{color:var(--text)}.tab.on{color:var(--it);border-bottom:2px solid var(--it);font-weight:600}
// .pg{padding:22px;max-width:900px;margin:0 auto;width:100%}
// .stabs{display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap}
// .stab{padding:7px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:1px solid var(--bd);color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
// .stab:hover{color:var(--text)}.stab.on{background:var(--it);color:#fff;border-color:var(--it)}
// .card{background:var(--white);border-radius:12px;padding:18px 20px;margin-bottom:14px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
// .ct{font-size:14px;font-weight:700;margin-bottom:10px}
// .csub{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.6}
// .fg{margin-bottom:12px}
// .fl{display:block;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
// .fi,.fs,.fta{width:100%;padding:9px 12px;border:1.5px solid var(--bd);border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);background:var(--white);transition:.2s;outline:none}
// .fi:focus,.fs:focus,.fta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
// .fta{resize:vertical;min-height:100px;line-height:1.7}
// .fr2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
// .btn{padding:9px 17px;border-radius:8px;font-family:'Outfit',sans-serif;font-size:13px;font-weight:600;cursor:pointer;border:none;display:inline-flex;align-items:center;gap:7px;transition:.2s}
// .btn:disabled{opacity:.45;cursor:not-allowed}
// .bd-btn{background:var(--dark);color:#fff}.bd-btn:hover:not(:disabled){opacity:.85}
// .bit{background:var(--it);color:#fff}.bit:hover:not(:disabled){background:var(--it2)}
// .bmg{background:var(--mg);color:#fff}
// .bo{background:transparent;border:1.5px solid var(--bd);color:var(--text)}.bo:hover:not(:disabled){background:var(--bg2)}
// .brow{display:flex;gap:9px;flex-wrap:wrap}
// .st-box{padding:9px 13px;border-radius:8px;font-size:12px;margin-top:10px}
// .st-ok{background:#D1FAE5;color:#065F46;border:1px solid #A7F3D0}
// .st-er{background:#FEE2E2;color:#991B1B;border:1px solid #FECACA}
// .st-in{background:#DBEAFE;color:#1E40AF;border:1px solid #BFDBFE}
// .log-wrap{background:var(--dark);border-radius:12px;overflow:hidden}
// .log-hdr{padding:11px 16px;border-bottom:1px solid #334155;display:flex;align-items:center;justify-content:space-between;background:#1E293B}
// .log-t{font-size:11px;font-weight:600;color:#94A3B8;text-transform:uppercase;letter-spacing:.5px}
// .log-body{padding:14px;min-height:140px;max-height:360px;overflow-y:auto;font-family:'Courier New',monospace;font-size:12px;line-height:2;color:#E2E8F0}
// .log-ph{color:#475569;font-style:italic;font-size:12px;font-family:'Outfit',sans-serif}
// .s-ok{color:#6EE7B7}.s-er{color:#FCA5A5}.s-in{color:#93C5FD}.s-run{color:#FCD34D}.s-it{color:#FD8B6A}
// .q-item{display:flex;align-items:center;gap:9px;padding:8px 12px;background:var(--bg2);border-radius:8px;margin-bottom:6px;font-size:12.5px}
// .q-icon{font-size:13px;width:18px;text-align:center;flex-shrink:0}
// .q-kw{flex:1;font-weight:500}
// .qb{padding:2px 8px;border-radius:12px;font-size:10px;font-weight:600}
// .qb-w{background:#F3F4F6;color:var(--muted)}
// .qb-r{background:#FEF3C7;color:#92400E}
// .qb-ok{background:#D1FAE5;color:#065F46}
// .qb-e{background:#FEE2E2;color:#991B1B}
// .tog{display:flex;border:1.5px solid var(--bd);border-radius:8px;overflow:hidden;width:fit-content}
// .tb{padding:7px 16px;font-size:12px;font-weight:600;cursor:pointer;background:var(--white);border:none;color:var(--muted);transition:.2s;font-family:'Outfit',sans-serif}
// .tb.a-it{background:var(--it);color:#fff}.tb.a-mg{background:var(--mg);color:#fff}
// .big-wrap{background:var(--white);border-radius:14px;padding:22px;margin-bottom:16px;border:1px solid var(--bd);box-shadow:0 2px 8px rgba(0,0,0,.05)}
// .big-ta{width:100%;background:var(--bg);border:2px solid var(--bd);border-radius:9px;padding:12px 15px;font-family:'Outfit',sans-serif;font-size:13px;color:var(--text);transition:.2s;outline:none;resize:vertical;min-height:110px;line-height:1.8}
// .big-ta:focus{border-color:var(--it);box-shadow:0 0 0 3px rgba(255,107,53,.1)}
// .go-btn{padding:12px 22px;border:none;border-radius:9px;font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:9px;transition:.2s;width:100%;justify-content:center;margin-top:13px}
// .go-btn:disabled{opacity:.5;cursor:not-allowed}
// .go-web{background:var(--dark);color:#fff;box-shadow:0 4px 12px rgba(26,26,46,.2)}
// .go-web:hover:not(:disabled){background:#2a2a40}
// .go-yt{background:var(--it);color:#fff;box-shadow:0 4px 12px rgba(255,107,53,.25)}
// .go-yt:hover:not(:disabled){background:var(--it2)}
// .out-box{background:var(--bg);border-radius:9px;padding:13px;border:1.5px solid var(--bd);margin-bottom:11px}
// .ob-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
// .ob-t{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--muted)}
// .ob-body{font-family:'Courier New',monospace;font-size:11.5px;color:var(--dark);white-space:pre-wrap;line-height:1.7}
// .pb-bar{height:3px;border-radius:2px;background:var(--bg2);margin-top:8px;overflow:hidden}
// .pf{height:100%;background:linear-gradient(90deg,var(--mg),var(--it));animation:ind 1.4s ease-in-out infinite}
// @keyframes ind{0%{transform:translateX(-100%);width:60%}100%{transform:translateX(220%);width:60%}}
// .spin{display:inline-block;width:13px;height:13px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:sp .7s linear infinite}
// @keyframes sp{to{transform:rotate(360deg)}}
// .wbox{background:#FFF7ED;border:1px solid #FED7AA;border-radius:8px;padding:10px 13px;margin-bottom:12px;font-size:12px;color:#92400E}
// .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:999;align-items:center;justify-content:center}
// .modal-overlay.open{display:flex}
// .modal{background:var(--white);border-radius:18px;width:500px;max-width:95vw;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.18)}
// .modal-hdr{background:linear-gradient(135deg,var(--it),#ff4500);padding:22px 24px;border-radius:18px 18px 0 0;position:relative}
// .modal-hdr h2{font-size:17px;font-weight:700;color:#fff}
// .modal-hdr p{font-size:12px;color:rgba(255,255,255,.8);margin-top:3px}
// .modal-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center}
// .modal-body{padding:22px}
// .step-row{display:flex;gap:12px;margin-bottom:20px}
// .step-num{width:26px;height:26px;background:var(--it);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0;margin-top:1px}
// .step-content{flex:1}
// .step-title{font-weight:700;font-size:13px;margin-bottom:5px}
// .step-desc{font-size:12px;color:var(--muted);line-height:1.7;margin-bottom:10px}
// .step-guide{background:#F8F9FA;border-radius:8px;padding:11px 13px;font-size:11.5px;color:var(--text);line-height:1.9;margin-bottom:10px}
// .connect-banner{border-radius:12px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between}
// .banner-yt{background:linear-gradient(135deg,var(--it),#ff4500);box-shadow:0 4px 16px rgba(255,107,53,.2)}
// .banner-ok{background:#D1FAE5;border:1px solid #A7F3D0}
// ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:var(--bd2);border-radius:4px}
// .hist-item{background:var(--white);border:1px solid var(--bd);border-radius:10px;padding:12px 15px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 1px 4px rgba(0,0,0,.04)}
// .stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px}
// .stat-card{background:var(--bg);border:1px solid var(--bd);border-radius:9px;padding:13px;text-align:center}
// .stat-val{font-size:20px;font-weight:700;color:var(--it);margin-bottom:2px}
// .stat-lbl{font-size:11px;color:var(--muted)}
// @media(max-width:600px){.fr2{grid-template-columns:1fr}.tog{flex-wrap:wrap}}
// `;

// // ─── HELPERS ──────────────────────────────────────────────────────────────
// const AI_URL = "http://127.0.0.1:8000/api/generate-blog/";


// type Message = { role: string; content: string };
// type Tool = { type: string; name: string };
// type AiCallParam = { max_tokens: number; tools?: Tool[]; messages: Message[]; system?: string };

// async function aiCall(keyword: AiCallParam, akey: string) {

//   const response = await fetch(
//     AI_URL,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ keyword: "best strategy consultants in hyderabad" })
//     }
//   );

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Blog generation failed");
//   }

//   return data.blog;
// }



// type NumericInput = number | string | undefined | null;
// function fmt(n: NumericInput): string {
//   if (!n) return "0";
//   const parsed = parseInt(String(n));
//   if (parsed >= 1000000) return (parsed / 1000000).toFixed(1) + "M";
//   if (parsed >= 1000) return (parsed / 1000).toFixed(1) + "K";
//   return "" + parsed;
// }
// function san(p: string | undefined | null): string {
//   p = (p || "").replace(/^https?:\/\/[^/]+\//, "").replace(/\\/g, "/").replace(/^\//, "");
//   if (p && !p.endsWith("/")) p += "/";
//   return p;
// }

// interface WebContext {
//   name: string;
//   domain: string;
//   desc: string;
//   audience: string;
//   tone: string;
//   author: string;
// }
// function webCtx(site: string): WebContext {
//   if (site === "m") return { name: "Magsmen Brand Consultants", domain: "magsmen.com", desc: "Brand strategy consulting by Sandeep N.", audience: "Indian entrepreneurs, startup founders, MSMEs.", tone: "Professional, authoritative.", author: "Sandeep N" };
//   return { name: "InTalks Podcast", domain: "intalks.in", desc: "Telugu entrepreneur interview podcast.", audience: "Telugu entrepreneurs and professionals globally.", tone: "Energetic, inspiring.", author: "Sandeep N" };
// }
// function extractVidId(url: string): string | null {
//   const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
//   return m ? m[1] : null;
// }

// // // ─── AI CALL ──────────────────────────────────────────────────────────────
// // async function aiCall(params, akey) {
// //   const h = { "Content-Type": "application/json" };
// //   if (akey) h["x-api-key"] = akey;
// //   const r = await fetch(AI_URL, { method: "POST", headers: h, body: JSON.stringify({ model: "claude-sonnet-4-6", ...params }) });
// //   const d = await r.json();
// //   if (d.error) throw new Error(d.error.message);
// //   return d.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();
// // }




// // ─── GITHUB PUSH ─────────────────────────────────────────────────────────
// interface GitHubPushConfig {
//   owner: string;
//   repo: string;
//   branch: string;
//   token: string;
// }

// interface GitHubContentResponse {
//   sha: string;
// }

// interface GitHubPushBody {
//   message: string;
//   content: string;
//   branch: string;
//   sha?: string;
// }

// interface YtApiItem {
//   brandingSettings: any;
//   statistics: any;
//   id?: string | { channelId?: string };
//   snippet?: { channelId?: string; title?: string; description?: string; thumbnails?: any; publishedAt?: string };
// }

// interface YtApiResponse {
//   items?: YtApiItem[];
//   error?: { message: string };
// }

// async function ghPush(path: string, content: string, msg: string, cfg: GitHubPushConfig): Promise<boolean> {
//   try {
//     const enc = btoa(unescape(encodeURIComponent(content)));
//     let sha: string | null = null;
//     try {
//       console.log("token =", cfg.token);
//       console.log("owner =", cfg.owner);
//       console.log("repo =", cfg.repo);
//       console.log("branch =", cfg.branch);
//       const ck = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}?ref=${cfg.branch}`, { headers: { Authorization: "Bearer " + cfg.token } });
//       if (ck.ok) { const dd = (await ck.json()) as GitHubContentResponse; sha = dd.sha; }
//     } catch (e) { }
//     const body: GitHubPushBody = { message: msg, content: enc, branch: cfg.branch };
//     if (sha) body.sha = sha;
//     console.log("token =", cfg.token);
//     console.log("owner =", cfg.owner);
//     console.log("repo =", cfg.repo);
//     console.log("branch =", cfg.branch);
//     const r = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${path}`, { method: "PUT", headers: { Authorization: "Bearer " + cfg.token, "Content-Type": "application/json" }, body: JSON.stringify(body) });
//     return r.ok;
//   } catch (e) { return false; }
// }

// // ─── YOUTUBE API ─────────────────────────────────────────────────────────
// async function ytGet(endpoint: string, ytkey: string): Promise<YtApiResponse> {
//   if (!ytkey) throw new Error("YouTube not connected.");
//   const sep = endpoint.includes("?") ? "&" : "?";
//   const r = await fetch(`https://www.googleapis.com/youtube/v3/${endpoint}${sep}key=${ytkey}`);
//   const d = (await r.json()) as YtApiResponse;
//   if (d.error) throw new Error("YouTube API: " + d.error.message);
//   return d;
// }
// async function resolveChannelId(input: string, ytkey: string, itChId?: string): Promise<string> {
//   input = (input || "").trim();
//   const cm = input.match(/\/channel\/(UC[\w-]+)/);
//   if (cm) return cm[1];
//   if (/^UC[\w-]{20,}$/.test(input)) return input;
//   const handle = input.replace(/^https?:\/\/(www\.)?youtube\.com\/@?/, "").replace(/\/@?/, "").split("/")[0].split("?")[0];
//   if (handle) {
//     try { const r = await ytGet(`channels?part=id&forHandle=${encodeURIComponent(handle)}`, ytkey); if (r.items?.length) return r.items[0].id as string; } catch (e) { }
//     try { const r2 = await ytGet(`search?part=snippet&type=channel&q=${encodeURIComponent(handle)}&maxResults=1`, ytkey); if (r2.items?.length) return r2.items[0].snippet?.channelId || (r2.items[0].id as { channelId?: string })?.channelId || ""; } catch (e) { }
//   }
//   if (itChId) return itChId;
//   throw new Error("Could not resolve channel. Add Channel ID in Settings.");
// }

// // ─── LOG COMPONENT ───────────────────────────────────────────────────────
// function LogBox({ entries, title, badge, placeholder }: { entries: Array<{ cls?: string; text: string }>; title: string; badge: React.ReactNode; placeholder: string }) {
//   const bodyRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [entries]);
//   return (
//     <div className="log-wrap">
//       <div className="log-hdr">
//         <span className="log-t">{title}</span>
//         <span>{badge}</span>
//       </div>
//       <div className="log-body" ref={bodyRef}>
//         {entries.length === 0
//           ? <div className="log-ph">{placeholder}</div>
//           : entries.map((e, i) => <div key={i}><span className={e.cls || "s-in"}>{e.text}</span></div>)}
//       </div>
//     </div>
//   );
// }

// // ─── MODAL ───────────────────────────────────────────────────────────────
// function YTModal({ open, onClose, cfg, setCfg, onConnected }: { open: boolean; onClose: () => void; cfg: any; setCfg: (cfg: any) => void; onConnected: (name: string, subs: string) => void }) {
//   const [wizKey, setWizKey] = useState("");
//   const [wizUrl, setWizUrl] = useState("");
//   const [wizSt, setWizSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [wizLoading, setWizLoading] = useState(false);
//   const [done, setDone] = useState<{ name: string; subs: string; vids: number; views: string } | null>(null);

//   useEffect(() => { if (open) { setWizKey(cfg.ytkey || ""); setWizUrl(cfg.itChId || ""); setWizSt(null); setDone(null); } }, [open]);

//   const wizConnect = async () => {
//     if (!wizKey) { setWizSt({ msg: "⚠️ Paste your API key first.", cls: "st-er" }); return; }
//     if (!wizUrl) { setWizSt({ msg: "⚠️ Enter your channel URL.", cls: "st-er" }); return; }
//     setWizLoading(true); setWizSt({ msg: "Verifying and detecting channel...", cls: "st-in" });
//     try {
//       const chId = await resolveChannelId(wizUrl, wizKey, "");
//       const r = await ytGet(`channels?part=statistics,snippet&id=${chId}`, wizKey);
//       if (!r.items?.length) throw new Error("Channel not found. Double-check the URL.");
//       const ch = r.items[0];
//       const newCfg = { ...cfg, ytkey: wizKey, itChId: chId };
//       setCfg(newCfg);
//       try { await (window as any).Storage?.set("seo4_cfg", JSON.stringify(newCfg)); } catch (e) { }
//       const title = (ch.snippet as any)?.title || "";
//       setDone({ name: title, subs: fmt(ch.statistics?.subscriberCount), vids: ch.statistics?.videoCount || 0, views: fmt(ch.statistics?.viewCount) });
//       onConnected(title, fmt(ch.statistics?.subscriberCount));
//     } catch (e) {
//       let msg = e.message || "";
//       if (msg.toLowerCase().includes("load failed") || msg.toLowerCase().includes("failed to fetch"))
//         msg = "❌ API key blocked by CORS. Fix: In Google Cloud Console → click your API key → Application Restrictions → select 'None' → Save.";
//       else if (msg.includes("API key") || msg.includes("keyInvalid") || msg.includes("400"))
//         msg = "❌ Invalid API key. Make sure you copied the full key and YouTube Data API v3 is enabled.";
//       else msg = "❌ " + msg;
//       setWizSt({ msg, cls: "st-er" });
//     }
//     setWizLoading(false);
//   };

//   if (!open) return null;
//   return (
//     <div className={`modal-overlay ${open ? "open" : ""}`} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
//       <div className="modal">
//         <div className="modal-hdr">
//           <h2>📺 Connect YouTube</h2>
//           <p>2-minute setup — follow the steps below</p>
//           <button className="modal-close" onClick={onClose}>✕</button>
//         </div>
//         <div className="modal-body">
//           {!done ? (
//             <>
//               <div className="step-row">
//                 <div className="step-num">1</div>
//                 <div className="step-content">
//                   <div className="step-title">Create a free YouTube Data API key</div>
//                   <div className="step-desc">Free Google service. Lets this tool read your channel data — no viewer login needed.</div>
//                   <div className="step-guide">
//                     <strong>Step A — Create the key:</strong><br />
//                     1. Click <strong>+ CREATE CREDENTIALS</strong> → <strong>API key</strong><br />
//                     2. Copy the key shown (starts with <code style={{ background: "#E5E7EB", padding: "1px 5px", borderRadius: "3px", fontSize: "11px" }}>AIzaSy...</code>)<br /><br />
//                     <strong>Step B — Enable YouTube API:</strong><br />
//                     3. Go to <strong>APIs &amp; Services → Library</strong> → search <strong>YouTube Data API v3</strong> → <strong>Enable</strong><br /><br />
//                     <strong>⚠️ Step C — Remove restrictions (critical):</strong><br />
//                     4. Back in <strong>Credentials</strong>, click your API key<br />
//                     5. Under <strong>Application restrictions</strong> → select <strong>None</strong><br />
//                     6. Under <strong>API restrictions</strong> → <strong>Restrict key</strong> → select <strong>YouTube Data API v3</strong><br />
//                     7. Click <strong>Save</strong>
//                   </div>
//                   <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#4285F4", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600 }}>🔗 Open Google Cloud Console →</a>
//                   {" "}
//                   <a href="https://console.cloud.google.com/apis/library/youtube.googleapis.com" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "8px 14px", background: "#34A853", color: "#fff", borderRadius: "7px", textDecoration: "none", fontSize: "12px", fontWeight: 600, marginTop: "8px" }}>▶ Enable YouTube Data API v3 →</a>
//                 </div>
//               </div>
//               <div className="step-row">
//                 <div className="step-num">2</div>
//                 <div className="step-content">
//                   <div className="step-title">Paste your API key</div>
//                   <input className="fi" type="password" placeholder="AIzaSy..." value={wizKey} onChange={e => setWizKey(e.target.value)} style={{ fontFamily: "monospace", fontSize: "12px" }} />
//                 </div>
//               </div>
//               <div className="step-row">
//                 <div className="step-num">3</div>
//                 <div className="step-content">
//                   <div className="step-title">Your InTalks channel URL</div>
//                   <input className="fi" placeholder="https://www.youtube.com/@InTalksPodcast" value={wizUrl} onChange={e => setWizUrl(e.target.value)} />
//                   <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>Copy from your YouTube channel address bar</div>
//                 </div>
//               </div>
//               <button className="go-btn go-yt" onClick={wizConnect} disabled={wizLoading}>
//                 {wizLoading ? <><span className="spin" /> Connecting...</> : "📡 Connect & Verify Channel"}
//               </button>
//               {wizSt && <div className={`st-box ${wizSt.cls}`}>{wizSt.msg}</div>}
//             </>
//           ) : (
//             <div style={{ textAlign: "center", padding: "10px 0" }}>
//               <div style={{ fontSize: "38px", marginBottom: "12px" }}>✅</div>
//               <div style={{ fontSize: "16px", fontWeight: 700 }}>✅ {done.name}</div>
//               <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px", marginBottom: "18px" }}>{done.subs} subscribers · {done.vids} videos · {done.views} total views</div>
//               <div style={{ background: "#FFF5F0", borderRadius: "10px", padding: "13px", border: "1px solid #FECDB5", fontSize: "12px", color: "var(--it)", textAlign: "left", marginBottom: "18px" }}>
//                 🚀 Channel Scanner is now active. Paste your channel URL in the YouTube SEO tab and the engine will scan your videos, identify optimization opportunities, and generate complete SEO packages automatically.
//               </div>
//               <button className="btn bit" onClick={onClose} style={{ width: "100%", justifyContent: "center" }}>Done — Go to YouTube SEO →</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// interface LogEntry {
//   text: string;
//   cls: string;
// }

// interface WebSEOConfig {
//   [key: string]: any;
// }

// // ─── WEBSITE SEO ─────────────────────────────────────────────────────────
// function WebSEO({ cfg }: { cfg: WebSEOConfig }) {
//   const [kwBatch, setKwBatch] = useState<string>("");
//   const [site, setSite] = useState<string>("m");
//   const [wc, setWc] = useState<string>("1500");
//   const [running, setRunning] = useState<boolean>(false);
//   const [queue, setQueue] = useState<any[]>([]);
//   const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
//   const [logTitle, setLogTitle] = useState<string>("Automation Log");
//   const [logBadge, setLogBadge] = useState<any>(null);

//   const wLog = (text: string, cls?: string): void => setLogEntries(p => [...p, { text, cls: cls || "s-in" }]);

//   const [settingsData, setSettingsData] = useState({
  
//     anthropic_connected: true,
//     github_connected: true,
//     youtube_connected: true,

//     github_owner: "",
//     github_repo: "",
//     github_branch: "",

//     blog_folder: "",
//     meta_folder: "",

//     youtube_channel_id: ""
//   });


//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/settings/")
//       .then(res => res.json())
//       .then(data => {
//         console.log("SETTINGS=", data);

//         setSettingsData({
//           anthropic_connected: data.anthropic_connected,
//           github_connected: data.github_connected,
//           youtube_connected: data.youtube_connected,
//           github_owner: data.github_owner,
//           github_repo: data.github_repo,
//           github_branch: data.github_branch,
//           blog_folder: data.blog_folder,
//           meta_folder: data.meta_folder,
//           youtube_channel_id: data.youtube_channel_id
//         });
//       });
//   }, []);




//   // ─── DJANGO BACKEND CALL ─────────────────────────────────────────────────
//   const DJANGO_URL: string = "http://127.0.0.1:8000/api/generate-blog/";

//   interface DjangoBlogRequest {
//     keyword: string;
//   }

//   interface DjangoBlogResponse {
//     blog: string;
//     message?: string;
//   }

//   async function callDjangoBlog(keyword: string): Promise<string> {
//     const response = await fetch(DJANGO_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ keyword: keyword })  // ← send STRING, not object
//     });

//     const data: DjangoBlogResponse = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Blog generation failed");
//     }

//     return data.blog; // returns the blog text string
//   }


//   const runBatch = async () => {
//     if (running) return;

//     const kws = kwBatch.split("\n").map(k => k.trim()).filter(k => k);

//     if (!kws.length) {
//       wLog("⚠️ Enter at least one keyword.", "s-er");
//       return;
//     }

//     if (!settingsData.github_connected) {
//       wLog("⚠ GitHub not connected", "s-er");
//       return;
//     }

//     setRunning(true);
//     const today = new Date().toISOString().split("T")[0];
//     const c = webCtx(site);

//     // Set all keywords as queued
//     setQueue(kws.map(kw => ({ kw, icon: "⏳", status: "Queued", cls: "qb-w" })));
//     setLogEntries([]);
//     setLogTitle(`Running ${kws.length} keyword${kws.length > 1 ? "s" : ""}...`);
//     setLogBadge(
//       <span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>
//         ⚡ Live
//       </span>
//     );

//     let done = 0, fail = 0;

//     for (let i = 0; i < kws.length; i++) {
//       const kw = kws[i];

//       // Update queue item to Running
//       setQueue(p => p.map((q, j) =>
//         j === i ? { ...q, icon: "🔄", status: "Running", cls: "qb-r" } : q
//       ));

//       wLog(`━━━ [${i + 1}/${kws.length}] "${kw}" ━━━`, "s-it");

//       try {
//         await processKW(kw, wc, c, today, cfg, settingsData, wLog);

//         // Update queue item to Published
//         setQueue(p => p.map((q, j) =>
//           j === i ? { ...q, icon: "✅", status: "Published", cls: "qb-ok" } : q
//         ));
//         done++;
//       } catch (e) {
//         // Update queue item to Failed
//         setQueue(p => p.map((q, j) =>
//           j === i ? { ...q, icon: "❌", status: "Failed", cls: "qb-e" } : q
//         ));
//         const errorMessage = e instanceof Error ? e.message : String(e);
//         wLog("❌ " + errorMessage, "s-er");
//         fail++;
//       }

//       wLog("", "");
//     }

//     wLog("════════════════════════", "s-in");
//     wLog(`✅ Complete — ${done} published${fail > 0 ? `, ${fail} failed` : ""}`, "s-ok");
//     setLogTitle(`✅ Done (${done}/${kws.length})`);
//     setLogBadge(<span className="pill p-ok">Published</span>);
//     setRunning(false);
//   };

//   return (
//     <div className="pg">
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>
//           Target Keywords <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>(one per line — all processed automatically)</span>
//         </div>
//         <textarea className="big-ta" value={kwBatch} onChange={e => setKwBatch(e.target.value)}
//           placeholder={"brand consultant Hyderabad\nbrand strategy for startups India\nhow to build a brand in Andhra Pradesh\npersonal branding coach India"} />
//         <div style={{ display: "flex", gap: "16px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
//           <div>
//             <div className="fl" style={{ marginBottom: "6px" }}>Website</div>
//             <div className="tog">
//               <button className={`tb ${site === "m" ? "a-mg" : ""}`} onClick={() => setSite("m")}>Magsmen</button>
//               <button className={`tb ${site === "i" ? "a-mg" : ""}`} onClick={() => setSite("i")}>InTalks</button>
//             </div>
//           </div>
//           <div>
//             <div className="fl" style={{ marginBottom: "6px" }}>Word Count</div>
//             <select className="fs" value={wc} onChange={e => setWc(e.target.value)} style={{ width: "170px" }}>
//               <option value="1000">1000 — Quick</option>
//               <option value="1500">1500 — Standard</option>
//               <option value="2500">2500 — Authority</option>
//             </select>
//           </div>
//         </div>
//         <button className="go-btn go-web" onClick={runBatch} disabled={running}>
//           {running ? <><span className="spin" /> Running...</> : "⚡ Run All Keywords — Research → Write → Push to GitHub"}
//         </button>
//       </div>
//       {queue.length > 0 && (
//         <div style={{ marginBottom: "14px" }}>
//           {queue.map((q, i) => (
//             <div key={i} className="q-item">
//               <span className="q-icon">{q.icon}</span>
//               <span className="q-kw">{q.kw}</span>
//               <span className={`qb ${q.cls}`}>{q.status}</span>
//             </div>
//           ))}
//         </div>
//       )}
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge}
//         placeholder="Enter keywords above (one per line). The engine researches Google, writes full blog posts, generates meta tags, and pushes everything to GitHub — automatically." />
//     </div>
//   );
// }

// interface SEOConfig {
//   token?: string;
//   owner?: string;
//   repo?: string;
//   bpath?: string;
//   [key: string]: any;
// }

// type WLog = (msg: string, cls?: string) => void;

// async function processKW(
//   kw: string,
//   wc: number,
//   c: Record<string, any>,
//   today: string,
//   cfg: SEOConfig,
//   settingsData: any,
//   wLog: WLog
// ): Promise<void> {
//   // STEP 1 — Call Django to generate blog
//   wLog("🔍 Calling Django → Anthropic AI...", "s-run");

//   let blog: string;
//   try {
//     blog = await callDjangoBlog(kw);
//     wLog(`✅ Blog generated (~${blog.split(" ").length} words)`, "s-ok");
//   } catch (e) {
//     const err = e as any;
//     throw new Error("Django API failed: " + err?.message);
//   }

//   // STEP 2 — Create slug from keyword
//   const slug = kw.toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-|-$/g, "")
//     .substring(0, 60);

//   wLog(`📝 Slug: ${slug}`, "s-in");

//   // STEP 3 — Push blog to GitHub
//   if (!settingsData.github_connected) {
//     throw new Error("GitHub not connected.");
//   }
//   // if (!cfg.token || !cfg.owner || !cfg.repo) {
//   //   throw new Error("GitHub not configured — go to Settings.");
//   // }

//   wLog("🚀 Pushing to GitHub...", "s-run");
//   const bpath = san(cfg.bpath as string) + today + "-" + slug + ".mdx";
//   const pushed: boolean = await ghPush(bpath, blog, "[SEO] " + kw, cfg as any);

//   if (!pushed) {
//     throw new Error("GitHub push failed — check token in Settings.");
//   }

//   wLog("✅ Pushed → " + bpath, "s-ok");
// }


// // ─── INTERFACES ────────────────────────────────────────────────────────────
// interface Config {
//   itChId: string;
//   ytkey: string;
//   akey: string;
//   [key: string]: any;
// }

// interface LogEntry {
//   text: string;
//   cls: string;
// }

// interface ScanCardHeader {
//   type: "header";
//   title: string;
//   sub: string;
//   trends: string[];
// }
// interface ScanCardVideo {
//   type: "video";
//   pick: {
//     rank: number;
//     video_id: string;
//     current_title: string;
//     views: string;
//     reason: string;
//     trending_angle: string;
//     new_title_preview: string;
//   };
//   pkg: VideoPackage;
//   idx: number;
// }
// type ScanCard = ScanCardHeader | ScanCardVideo;

// interface VideoPackage {
//   title_a: string;
//   title_b: string;
//   title_c: string;
//   description: string;
//   tags: string[];
//   hashtags: string[];
//   chapters: string;
//   thumbnail: string;
//   ab_note: string;
//   rationale?: string;
// }

// // ─── YOUTUBE SEO ─────────────────────────────────────────────────────────
// function YouTubeSEO({ cfg, ytConnected, ytConnectedTxt, onOpenModal }: { cfg: Config; ytConnected: boolean; ytConnectedTxt: string; onOpenModal: () => void }) {
//   const [sub, setSub] = useState<string>("scan");
//   return (
//     <div className="pg">
//       {!ytConnected ? (
//         <div className="connect-banner banner-yt" style={{ display: "flex" }}>
//           <div>
//             <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>📺 YouTube not connected</div>
//             <div style={{ fontSize: "12px", color: "rgba(255,255,255,.85)", marginTop: "2px" }}>Connect in 2 minutes to unlock Channel Scanner and video optimization.</div>
//           </div>
//           <button onClick={onOpenModal} style={{ padding: "10px 18px", background: "#fff", color: "var(--it)", border: "none", borderRadius: "8px", fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "13px", cursor: "pointer", flexShrink: 0, marginLeft: "14px" }}>🔗 Connect YouTube</button>
//         </div>
//       ) : (
//         <div className="connect-banner banner-ok" style={{ display: "flex" }}>
//           <div style={{ fontSize: "13px", fontWeight: 600, color: "#065F46" }}>{ytConnectedTxt}</div>
//           <button onClick={onOpenModal} style={{ fontSize: "11px", color: "#065F46", background: "transparent", border: "1px solid #A7F3D0", borderRadius: "6px", padding: "4px 10px", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>Reconnect</button>
//         </div>
//       )}
//       <div className="stabs">
//         {[["scan", "📡 Channel Scanner"], ["vid", "🎬 Single Video"], ["spy", "🕵️ Competitor Spy"], ["kw", "🔍 Keywords"]].map(([id, label]) => (
//           <button key={id} className={`stab ${sub === id ? "on" : ""}`} onClick={() => setSub(id)}>{label}</button>
//         ))}
//       </div>
//       {sub === "scan" && <ChannelScanner cfg={cfg} />}
//       {sub === "vid" && <SingleVideo cfg={cfg} />}
//       {sub === "spy" && <CompetitorSpy cfg={cfg} />}
//       {sub === "kw" && <KeywordResearch cfg={cfg} />}
//     </div>
//   );
// }

// function ChannelScanner({ cfg }: { cfg: Config }) {
//   const [chUrl, setChUrl] = useState<string>("");
//   const [scope, setScope] = useState<string>("both");
//   const [optCount, setOptCount] = useState<string>("5");
//   const [running, setRunning] = useState<boolean>(false);
//   const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
//   const [logTitle, setLogTitle] = useState<string>("Channel Scanner Log");
//   const [logBadge, setLogBadge] = useState<React.ReactNode>(null);
//   const [scanOut, setScanOut] = useState<ScanCard[]>([]);
//   const sLog = (text: string, cls?: string): void => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

//   const runScan = async () => {
//     if (running) return;
//     const chInput = chUrl.trim() || cfg.itChId;
//     if (!chInput) { sLog("⚠️ Enter your channel URL.", "s-er"); return; }
//     if (!cfg.ytkey) { sLog("⚠️ YouTube not connected.", "s-er"); return; }
//     setRunning(true); setLogEntries([]); setScanOut([]);
//     setLogTitle("Scanning..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
//     try {
//       sLog("📡 Resolving channel...", "s-run");
//       const chId = await resolveChannelId(chInput, cfg.ytkey, cfg.itChId);
//       const chData = await ytGet(`channels?part=statistics,snippet&id=${chId}`, cfg.ytkey);
//       if (!chData.items?.length) throw new Error("Channel not found.");
//       const ch = chData.items[0];
//       const chTitle = (ch.snippet && (ch.snippet as any).title) || (ch.brandingSettings && (ch.brandingSettings as any).channel && (ch.brandingSettings as any).channel.title) || ch.id || "Channel";
//       sLog(`✅ ${chTitle} — ${fmt(ch.statistics.subscriberCount)} subs | ${ch.statistics.videoCount} videos`, "s-ok");
//       let vids: any[] = [];
//       if (scope === "top50" || scope === "both") { sLog("🎬 Fetching top 50 by views...", "s-run"); const t = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=viewCount&maxResults=50`, cfg.ytkey); vids = vids.concat(t.items || []); }
//       if (scope === "recent50" || scope === "both") { sLog("🕒 Fetching last 50 uploaded...", "s-run"); const r = await ytGet(`search?part=snippet&channelId=${chId}&type=video&order=date&maxResults=50`, cfg.ytkey); vids = vids.concat(r.items || []); }
//       const seen: Record<string, boolean> = {};
//       const uniq: any[] = [];
//       vids.forEach(v => { const id = v.id?.videoId; if (id && !seen[id]) { seen[id] = true; uniq.push(v); } });
//       sLog(`✅ ${uniq.length} unique videos found`, "s-ok");
//       const ids = uniq.map(v => v.id.videoId).filter(Boolean).slice(0, 50).join(",");
//       const det = await ytGet(`videos?part=statistics,snippet&id=${ids}`, cfg.ytkey);
//       const videos = det.items || [];
//       sLog(`📈 Got stats for ${videos.length} videos`, "s-ok"); sLog("", "");
//       sLog("🧠 AI analysing with live YouTube + Google trends...", "s-run");
//       const summary = videos.slice(0, 40).map((v, i) => {
//         const snippet: any = v.snippet || {};
//         const title = snippet.title || "(no title)";
//         const descLen = (snippet.description || "").length;
//         const tagsLen = (snippet.tags || []).length;
//         const views = fmt(v.statistics?.viewCount || 0);
//         return `${i + 1}. ID:${v.id} Views:${views} Title:"${title}" Desc:${descLen}chars Tags:${tagsLen}`;
//       }).join("\n");
//       const aRaw = await aiCall({ max_tokens: 1400, tools: [{ type: "web_search_20250305", name: "web_search" }], messages: [{ role: "user", content: `YouTube SEO expert. Channel: InTalks Podcast (Telugu entrepreneur interviews). Search current 2026 YouTube+Google trends for Telugu/entrepreneur content.\n\nVideos:\n${summary}\n\nPick TOP ${optCount} with highest optimization potential. Return ONLY raw JSON:\n{"picks":[{"rank":1,"video_id":"...","current_title":"...","views":"...","reason":"...","trending_angle":"...","new_title_preview":"..."}],"trends":["t1","t2","t3"],"insight":"one key channel observation"}` }] }, cfg.akey);
//       let analysis;
//       try { analysis = JSON.parse(aRaw.replace(/```json|```/g, "").trim()); } catch (e) { throw new Error("Analysis failed: " + e.message); }
//       sLog(`✅ Selected ${analysis.picks.length} videos`, "s-ok");
//       sLog("📈 Trends: " + (analysis.trends || []).join(" | "), "s-it");
//       sLog("💡 " + analysis.insight, "s-in"); sLog("", "");
//       const cards: ScanCard[] = [{ type: "header", title: `📡 ${analysis.picks.length} Videos Selected for Optimization`, sub: "Based on live Google + YouTube search trends", trends: analysis.trends || [] }];
//       for (let i = 0; i < analysis.picks.length; i++) {
//         const pick = analysis.picks[i];
//         sLog(`🎬 Optimizing [${i + 1}/${analysis.picks.length}]: "${pick.current_title}"...`, "s-run");
//         const pkgRaw = await aiCall({ max_tokens: 2500, system: `World-class YouTube SEO expert for InTalks Podcast. Current trends: ${(analysis.trends || []).join(", ")}.`, messages: [{ role: "user", content: `Optimize: "${pick.current_title}". Trending angle: ${pick.trending_angle}.\n\nReturn ONLY raw JSON:\n{"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 tags"],"chapters":"0:00 Intro\\n2:00...","thumbnail":"...","ab_note":"...","rationale":"..."}` }] }, cfg.akey);
//         let pkg;
//         try { pkg = JSON.parse(pkgRaw.replace(/```json|```/g, "").trim()); } catch (e) { sLog(`⚠️ Video ${i + 1} parse error`, "s-er"); continue; }
//         sLog(`✅ Package ready: "${pkg.title_a}"`, "s-ok");
//         cards.push({ type: "video", pick, pkg, idx: i });
//       }
//       setScanOut(cards);
//       sLog(""); sLog("════════════════════════", "s-it");
//       sLog(`✅ ALL DONE — ${analysis.picks.length} SEO packages ready.`, "s-ok");
//       setLogTitle("✅ Complete"); setLogBadge(<span className="pill p-ok">Done</span>);
//     } catch (e) { sLog("❌ " + e.message, "s-er"); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>InTalks Channel URL</div>
//         <input className="fi" value={chUrl} onChange={e => setChUrl(e.target.value)} placeholder="https://www.youtube.com/@InTalksPodcast" style={{ fontSize: "14px", padding: "11px 14px" }} />
//         <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px", lineHeight: 1.6 }}>The engine scans your videos, cross-references live Google + YouTube search trends, auto-selects the highest-opportunity videos, and generates complete SEO packages.</div>
//         <div style={{ display: "flex", gap: "14px", marginTop: "13px", flexWrap: "wrap", alignItems: "flex-end" }}>
//           <div><div className="fl" style={{ marginBottom: "5px" }}>Scan Scope</div>
//             <select className="fs" value={scope} onChange={e => setScope(e.target.value)} style={{ width: "230px" }}>
//               <option value="top50">Top 50 by views</option>
//               <option value="recent50">Last 50 uploaded</option>
//               <option value="both">Both (top + recent, ~75 videos)</option>
//             </select>
//           </div>
//           <div><div className="fl" style={{ marginBottom: "5px" }}>Optimize Count</div>
//             <select className="fs" value={optCount} onChange={e => setOptCount(e.target.value)} style={{ width: "150px" }}>
//               <option value="3">Top 3 videos</option>
//               <option value="5">Top 5 videos</option>
//               <option value="10">Top 10 videos</option>
//             </select>
//           </div>
//         </div>
//         <button className="go-btn go-yt" onClick={runScan} disabled={running}>
//           {running ? <><span className="spin" /> Scanning...</> : "📡 Scan → Auto-Select → Optimize"}
//         </button>
//       </div>
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste your channel URL and hit Scan." />
//       <div style={{ marginTop: "16px" }}>
//         {scanOut.map((item, idx) => {
//           if (item.type === "header") return (
//             <div key={idx} className="card">
//               <div className="ct">{item.title}</div>
//               <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: "10px" }}>{item.sub}</div>
//               <div style={{ fontSize: "12px", color: "var(--text)" }}>🔥 Trending now: {item.trends.map((t, i) => <span key={i} style={{ background: "var(--bg)", padding: "2px 9px", borderRadius: "12px", marginRight: "4px", border: "1px solid var(--bd)", display: "inline-block", marginBottom: "4px" }}>{t}</span>)}</div>
//             </div>
//           );
//           if (item.type === "video") {
//             const { pick, pkg } = item;
//             const boxes = [
//               { id: `sc${item.idx}t`, t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
//               { id: `sc${item.idx}d`, t: "📝 DESCRIPTION", c: pkg.description },
//               { id: `sc${item.idx}g`, t: `🏷️ TAGS (${(pkg.tags || []).length})`, c: (pkg.tags || []).join(", ") },
//               { id: `sc${item.idx}h`, t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
//               { id: `sc${item.idx}c`, t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
//               { id: `sc${item.idx}th`, t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
//             ];
//             return (
//               <div key={idx} className="card">
//                 <div className="ct">Video {item.idx + 1} — <a href={`https://youtube.com/watch?v=${pick.video_id}`} target="_blank" rel="noreferrer" style={{ color: "var(--it)", fontSize: "13px", fontWeight: 400 }}>{pick.current_title}</a></div>
//                 <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "12px" }}>{fmt(pick.views)} views · {pick.reason}</div>
//                 {boxes.map(b => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//     </>
//   );
// }

// function SingleVideo({ cfg }: { cfg: { akey?: string; ytkey?: string } }) {
//   const [vidUrl, setVidUrl] = useState("");
//   const [running, setRunning] = useState(false);
//   const [logEntries, setLogEntries] = useState<{ text: string; cls: string }[]>([]);
//   const [logTitle, setLogTitle] = useState("Video Optimizer Log");
//   const [logBadge, setLogBadge] = useState<React.ReactNode | null>(null);
//   const [out, setOut] = useState(null);
//   const vLog = (text: string, cls: string) => setLogEntries(p => [...p, { text, cls: cls || "s-it" }]);

//   const run = async () => {
//     const url = vidUrl.trim();
//     if (!url) { vLog("⚠️ Paste a video URL.", "s-er"); return; }
//     const vid = extractVidId(url);
//     if (!vid) { vLog("⚠️ Could not read video ID from URL.", "s-er"); return; }
//     if (running) return;
//     setRunning(true); setLogEntries([]); setOut(null);
//     setLogTitle("Optimizing..."); setLogBadge(<span className="pill" style={{ background: "#FEF3C7", color: "#92400E", borderColor: "#FDE68A" }}>⚡ Live</span>);
//     try {
//       vLog("📡 Fetching video data...", "s-run");
//       if (!cfg.ytkey) throw new Error("YouTube not connected.");
//       const vd = await ytGet(`videos?part=statistics,snippet&id=${vid}`, cfg.ytkey);
//       if (!vd.items?.length) throw new Error("Video not found.");
//       const v = vd.items[0];
//       const titleSafe = v?.snippet?.title || "(untitled)";
//       const viewsSafe = fmt(v?.statistics?.viewCount || 0);
//       vLog(`✅ "${titleSafe}" — ${viewsSafe} views`, "s-ok");
//       vLog("🔍 Researching live trends...", "s-run");
//       const pkgRaw = await aiCall({ max_tokens: 2800, tools: [{ type: "web_search_20250305", name: "web_search" }], system: "World-class YouTube SEO for InTalks Podcast (Telugu entrepreneur interviews).", messages: [{ role: "user", content: `Optimize: Title:"${titleSafe}" Views:${viewsSafe}. Return ONLY raw JSON: {"title_a":"...","title_b":"...","title_c":"...","description":"500+ word description","tags":["30 tags"],"hashtags":["#10 hashtags"],"chapters":"...","thumbnail":"...","ab_note":"...","rationale":"..."}` }] }, cfg.akey);
//       let pkg;
//       try { pkg = JSON.parse(pkgRaw.replace(/```json|```/g, "").trim()); } catch (e) { throw new Error("Package parse error."); }
//       vLog("✅ Package ready", "s-ok");
//       setOut({
//         title: titleSafe, boxes: [
//           { id: "vst", t: "🎬 TITLES A/B/C", c: `A: ${pkg.title_a}\nB: ${pkg.title_b}\nC: ${pkg.title_c}\n\n→ ${pkg.ab_note}` },
//           { id: "vsd", t: "📝 DESCRIPTION", c: pkg.description },
//           { id: "vsg", t: "🏷️ TAGS", c: (pkg.tags || []).join(", ") },
//           { id: "vsh", t: "# HASHTAGS", c: (pkg.hashtags || []).join(" ") },
//           { id: "vsc", t: "⏱️ CHAPTERS", c: pkg.chapters || "" },
//           { id: "vsth", t: "🖼️ THUMBNAIL", c: pkg.thumbnail || "" },
//           { id: "vsr", t: "⚡ SEO RATIONALE", c: pkg.rationale || "" },
//         ]
//       });
//       setLogTitle("✅ Done"); setLogBadge(<span className="pill p-ok">Done</span>);
//     } catch (e) { vLog("❌ " + e.message, "s-er"); }
//     setRunning(false);
//   };

//   return (
//     <>
//       <div className="big-wrap">
//         <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".7px", marginBottom: "8px" }}>YouTube Video URL</div>
//         <input className="fi" value={vidUrl} onChange={e => setVidUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=xxxxxxxxxx" style={{ fontSize: "14px", padding: "11px 14px" }} />
//         <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>Fetches current title, description and stats — then generates an optimized SEO package based on live trends.</div>
//         <button className="go-btn go-yt" onClick={run} disabled={running}>
//           {running ? <><span className="spin" /> Optimizing...</> : "🎬 Optimize This Video"}
//         </button>
//       </div>
//       <LogBox entries={logEntries} title={logTitle} badge={logBadge} placeholder="Paste any video URL to optimize it." />
//       {out && (
//         <div style={{ marginTop: "16px" }}>
//           <div className="card">
//             <div className="ct">✅ {out.title}</div>
//             {out.boxes.map((b: { id: unknown; t: unknown; c: unknown; }) => <OutBox key={b.id} id={b.id} title={b.t} content={b.c} />)}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function CompetitorSpy({ cfg }: { cfg: { akey?: string; ytkey?: string } }) {
//   const [running, setRunning] = useState(false);
//   const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [out, setOut] = useState(null);
//   const run = async () => {
//     setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
//     try {
//       const r = await aiCall({ max_tokens: 2000, tools: [{ type: "web_search_20250305", name: "web_search" }], messages: [{ role: "user", content: "Deep YouTube competitor analysis for InTalks Podcast (Telugu entrepreneur interviews, Sandeep N) vs Raw Talks with VK and Telugu Connects. Search their channels, subscribers, top videos, content gaps. Deliver: stats, top content, keyword gaps, weaknesses, our advantages, 10 video ideas to beat them." }] }, cfg.akey);
//       setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
//     } catch (e) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//     setRunning(false);
//   };
//   return (
//     <>
//       <div className="card">
//         <div className="ct">🕵️ Competitor Intelligence</div>
//         <div className="csub">Deep analysis of Raw Talks with VK and Telugu Connects — what they rank for, their content gaps, and 10 video ideas to beat them.</div>
//         <div className="fr2" style={{ marginBottom: "14px" }}>
//           <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Raw Talks with VK</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu interview / talk show</div></div>
//           <div style={{ background: "var(--bg)", border: "1.5px solid var(--bd)", borderRadius: "9px", padding: "13px" }}><div style={{ fontWeight: 700, fontSize: "13px", color: "#EF4444" }}>📺 Telugu Connects</div><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>Telugu business content</div></div>
//         </div>
//         <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Analysing...</> : "🕵️ Run Competitor Analysis"}</button>
//         {running && <div className="pb-bar"><div className="pf" /></div>}
//         {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
//       </div>
//       {out && <OutBox id="spy-txt" title="Competitor Intelligence Report" content={out} />}
//     </>
//   );
// }

// function KeywordResearch({ cfg }) {
//   const [seed, setSeed] = useState("");
//   const [focus, setFocus] = useState("i");
//   const [running, setRunning] = useState(false);
//   const [st, setSt] = useState<{ msg: string; cls: string } | null>(null);
//   const [out, setOut] = useState(null);
//   const run = async () => {
//     const s = seed.trim() || "Telugu entrepreneur business";
//     setRunning(true); setSt({ msg: "Researching...", cls: "st-in" }); setOut(null);
//     const c = focus === "i" ? "InTalks Podcast (Telugu entrepreneur podcast, global Telugu diaspora)" : "Magsmen Brand Consultants (brand strategy, India)";
//     try {
//       const r = await aiCall({ max_tokens: 1600, tools: [{ type: "web_search_20250305", name: "web_search" }], messages: [{ role: "user", content: `Cross-reference YouTube + Google search patterns for "${c}" seed: "${s}". Provide: HIGH priority (10), MEDIUM (10), LONG-TAIL (10), TRENDING NOW (5), SEASONAL. Each: demand H/M/L, competition H/M/L, content angle. Focus 2026 Indian market.` }] }, cfg.akey);
//       setOut(r); setSt({ msg: "✅ Done!", cls: "st-ok" });
//     } catch (e) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//     setRunning(false);
//   };
//   return (
//     <>
//       <div className="card">
//         <div className="ct">🔍 YouTube + Google Keyword Research</div>
//         <div className="csub">Cross-references what people search on YouTube AND Google for Telugu entrepreneur / brand strategy content globally.</div>
//         <div className="fg"><label className="fl">Seed Topic</label><input className="fi" value={seed} onChange={e => setSeed(e.target.value)} placeholder="Telugu entrepreneur, brand strategy India, startup Hyderabad..." /></div>
//         <div style={{ marginBottom: "13px" }}>
//           <div className="fl" style={{ marginBottom: "6px" }}>Focus</div>
//           <div className="tog">
//             <button className={`tb ${focus === "i" ? "a-it" : ""}`} onClick={() => setFocus("i")}>InTalks (Telugu)</button>
//             <button className={`tb ${focus === "m" ? "a-mg" : ""}`} onClick={() => setFocus("m")}>Magsmen (Brand)</button>
//           </div>
//         </div>
//         <button className="btn bit" onClick={run} disabled={running}>{running ? <><span className="spin" /> Searching...</> : "🔍 Find Keywords"}</button>
//         {running && <div className="pb-bar"><div className="pf" /></div>}
//         {st && <div className={`st-box ${st.cls}`}>{st.msg}</div>}
//       </div>
//       {out && <OutBox id="kwr-txt" title="Keyword Intelligence" content={out} />}
//     </>
//   );
// }

// // ─── HISTORY ─────────────────────────────────────────────────────────────
// function History({ hist }: { hist: { type: string; site: string; title: ReactNode; date: ReactNode; path: string; }[] }) {
//   return (
//     <div className="pg">
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "13px" }}>
//         <h2 style={{ fontSize: "16px", fontWeight: 700 }}>Published Content</h2>
//         <span style={{ fontSize: "12px", color: "var(--muted)" }}>{hist.length} item{hist.length !== 1 ? "s" : ""}</span>
//       </div>
//       {hist.length === 0
//         ? <div style={{ color: "var(--muted)", fontSize: "13px", padding: "14px 0" }}>Nothing yet. Run Website SEO or YouTube SEO to get started.</div>
//         : hist.map((h: { type: string; site: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; path: string; }, i: Key | null | undefined) => {
//           const icon = h.type === "youtube" ? "📺" : "🌐";
//           const pc = h.type === "youtube" ? "p-it" : (h.site === "m" ? "p-mg" : "p-it");
//           const pn = h.type === "youtube" ? "YouTube" : (h.site === "m" ? "Magsmen" : "InTalks");
//           return (
//             <div key={i} className="hist-item">
//               <div>
//                 <div style={{ fontWeight: 600, fontSize: "13px" }}>{icon} {h.title}</div>
//                 <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{h.date}{h.path ? " · " + h.path : ""}</div>
//               </div>
//               <span className={`pill ${pc}`}>{pn}</span>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// // ─── SETTINGS ────────────────────────────────────────────────────────────
// function Settings({ cfg, setCfg }) {
//   const [local, setLocal] = useState({ ...cfg });
//   const [st, setSt] = useState(null);
//   useEffect(() => { setLocal({ ...cfg }); }, [cfg]);
//   const save = async () => {
//     const newCfg = { ...local, bpath: san(local.bpath) || "src/blogs/", mpath: san(local.mpath) || "src/pages/" };
//     setLocal(newCfg); setCfg(newCfg);
//     try { await window.Storage?.set("seo4_cfg", JSON.stringify(newCfg)); } catch (e) { }
//     setSt({ msg: "✅ Saved!", cls: "st-ok" });
//   };
//   const testGH = async () => {
//     if (!local.token || !local.owner || !local.repo) { setSt({ msg: "⚠️ Fill all fields and save.", cls: "st-er" }); return; }
//     setSt({ msg: "Testing...", cls: "st-in" });
//     try {
//       const r = await fetch(`https://api.github.com/repos/${local.owner}/${local.repo}`, { headers: { Authorization: "Bearer " + local.token } });
//       if (r.ok) { const d = await r.json(); setSt({ msg: `✅ Connected: ${d.full_name} (${d.visibility})`, cls: "st-ok" }); }
//       else setSt({ msg: `❌ ${r.status}: ${r.statusText}`, cls: "st-er" });
//     } catch (e) { setSt({ msg: "❌ " + e.message, cls: "st-er" }); }
//   };
//   const f = (k: string, v: string) => setLocal((p: any) => ({ ...p, [k]: v }));



//   const [settingsData, setSettingsData] = useState({
//     anthropic_connected: false,
//     github_connected: false,
//     youtube_connected: false,

//     github_owner: "",
//     github_repo: "",
//     github_branch: "",

//     blog_folder: "",
//     meta_folder: "",

//     youtube_channel_id: ""
//   });


//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/settings/")
//       .then(res => res.json())
//       .then(data => {
//         console.log("SETTINGS=", data);

//         setSettingsData({
//           anthropic_connected: data.anthropic_connected,
//           github_connected: data.github_connected,
//           youtube_connected: data.youtube_connected,
//           github_owner: data.github_owner,
//           github_repo: data.github_repo,
//           github_branch: data.github_branch,
//           blog_folder: data.blog_folder,
//           meta_folder: data.meta_folder,
//           youtube_channel_id: data.youtube_channel_id
//         });
//       });
//   }, []);

//   return (
//     <div className="pg">
//       <div className="card">
//         <div className="ct">🤖 Anthropic API Key</div>
//         <div className="wbox">⚠️ Only needed when running this file locally. Inside claude.ai it works automatically.</div>
//         <div className="fg"><label className="fl">API Key</label><input className="fi" type="password" value={settingsData.anthropic_connected
//           ? "Connected"
//           : "Not Connected"} readOnly onChange={e => f("akey", e.target.value)} placeholder={settingsData.anthropic_connected ? "Connected" : "Not Connected"} /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get key →</a></div></div>
//       </div>
//       <div className="card">
//         <div className="ct">🔗 GitHub</div>
//         <div className="fg"><label className="fl">Personal Access Token</label><input className="fi" type="password" value={settingsData.github_connected
//           ? "Connected"
//           : "Not Connected"} onChange={e => f("token", e.target.value)} placeholder={settingsData.github_connected ? "Connected" : "Not Connected"} /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Generate token (repo scope) →</a></div></div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">Owner</label><input className="fi" value={settingsData.github_owner || ""} readOnly onChange={e => f("owner", e.target.value)} /></div>
//           <div className="fg"><label className="fl">Repository</label><input className="fi" value={settingsData.github_repo || ""} readOnly onChange={e => f("repo", e.target.value)} /></div>
//         </div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">Branch</label><input className="fi" value={settingsData.github_branch || ""} readOnly onChange={e => f("branch", e.target.value)} /></div>
//           <div className="fg"><label className="fl">Blog Folder</label><input className="fi" value={settingsData.blog_folder || ""} readOnly onChange={e => f("bpath", e.target.value)} /></div>
//         </div>
//         <div className="fg"><label className="fl">Meta Folder</label><input className="fi" value={settingsData.meta_folder || ""} readOnly onChange={e => f("mpath", e.target.value)} /></div>
//       </div>
//       <div className="card">
//         <div className="ct">📺 YouTube <span style={{ fontSize: "12px", fontWeight: 400, color: "var(--muted)" }}>(or use the Connect button on YouTube tab)</span></div>
//         <div className="fg"><label className="fl">YouTube Data API Key</label><input className="fi" type="password" value={settingsData.youtube_connected
//           ? "Connected"
//           : "Not Connected"} readOnly onChange={e => f("ytkey", e.target.value)} placeholder={settingsData.youtube_connected ? "Connected" : "Not Connected"} /><div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}><a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" style={{ color: "var(--it)" }}>Get free API key →</a></div></div>
//         <div className="fr2">
//           <div className="fg"><label className="fl">InTalks Channel ID</label><input className="fi" value={settingsData.youtube_channel_id || ""} readOnly onChange={e => f("itChId", e.target.value)} placeholder={settingsData.youtube_channel_id ? "Connected" : "Not Connected"} /></div>
//           <div className="fg"><label className="fl">Magsmen Channel ID</label><input className="fi" value={settingsData.youtube_mgChId || ""} readOnly onChange={e => f("mgChId", e.target.value)} placeholder={settingsData.youtube_mgChId ? "Connected" : "Not Connected"} /></div>
//         </div>
//       </div>
//       <div className="brow">
//         <button className="btn bit" onClick={save}>💾 Save All Settings</button>
//         <button className="btn bo" onClick={testGH}>🔌 Test GitHub</button>
//       </div>
//       {st && <div className={`st-box ${st.cls}`} style={{ marginTop: "12px" }}>{st.msg}</div>}
//     </div>
//   );
// }

// // ─── OUT BOX ─────────────────────────────────────────────────────────────
// function OutBox({ id, title, content }) {
//   const [copied, setCopied] = useState(false);
//   const copy = () => {
//     navigator.clipboard.writeText((content || "").trim());
//     setCopied(true); setTimeout(() => setCopied(false), 2000);
//   };
//   return (
//     <div className="out-box">
//       <div className="ob-hdr">
//         <span className="ob-t">{title}</span>
//         <button className="btn bo" style={{ padding: "4px 10px", fontSize: "11px" }} onClick={copy}>{copied ? "✅ Copied!" : "📋 Copy"}</button>
//       </div>
//       <div className="ob-body" id={id}>{content}</div>
//     </div>
//   );
// }

// // ─── APP ─────────────────────────────────────────────────────────────────
// export default function SEOCommandCenter() {
//   const [tab, setTab] = useState("web");
//   const [cfg, setCfg] = useState({ akey: "", token: "", owner: "magsmenuser7", repo: "Magsmen-React", branch: "main", bpath: "src/blogs/", mpath: "src/pages/", ytkey: "", itChId: "", mgChId: "" });
//   const [modalOpen, setModalOpen] = useState(false);
//   const [ytConnected, setYtConnected] = useState(false);
//   const [ytConnectedTxt, setYtConnectedTxt] = useState("✅ YouTube connected");
//   const [ghPillOk, setGhPillOk] = useState(false);
//   const [ytPillOk, setYtPillOk] = useState(false);
//   const [hist, setHist] = useState([]);



//   const [settingsData, setSettingsData] = useState({
//     anthropic_connected: false,
//     github_connected: false,
//     youtube_connected: false,

//     github_owner: "",
//     github_repo: "",
//     github_branch: "",

//     youtube_channel_id: ""
//   });


//   useEffect(() => {

//     fetch(
//       "http://127.0.0.1:8000/api/settings/"
//     )
//       .then(res => res.json())
//       .then(data => {

//         setSettingsData(data);

//       })
//       .catch(err => {

//         console.error(err);

//       });

//   }, []);

//   useEffect(() => {
//     try {
//       window.Storage?.get("seo4_cfg").then((r: { value: string; }) => {
//         if (r?.value) { const c = JSON.parse(r.value); setCfg(c); checkYT(c); updatePills(c); }
//       }).catch(() => { });
//       window.Storage?.get("seo4_hist").then((r: { value: string; }) => {
//         if (r?.value) setHist(JSON.parse(r.value));
//       }).catch(() => { });
//     } catch (e) { }
//   }, []);

//   const checkYT = (c: { ytkey: any; itChId: any; }) => {
//     if (c.ytkey && c.itChId) { setYtConnected(true); setYtConnectedTxt("✅ YouTube connected — channel ready"); setYtPillOk(true); }
//   };
//   const updatePills = (c: { token: any; repo: any; ytkey: any; itChId: any; }) => {
//     setGhPillOk(!!(c.token && c.repo));
//     setYtPillOk(!!(c.ytkey && c.itChId));
//   };
//   const handleCfgChange = (newCfg: SetStateAction<{ akey: string; token: string; owner: string; repo: string; branch: string; bpath: string; mpath: string; ytkey: string; itChId: string; mgChId: string; }>) => { setCfg(newCfg); checkYT(newCfg); updatePills(newCfg); };
//   const handleConnected = (name: any, subs: any) => {
//     setYtConnected(true);
//     setYtConnectedTxt(`✅ ${name} connected (${subs} subs)`);
//     setYtPillOk(true);
//     setModalOpen(false);
//   };

//   const TABS = [["web", "⚡ Website SEO"], ["yt", "📺 YouTube SEO"], ["hist", "📋 History"], ["cfg", "⚙️ Settings"]];

//   return (
//     <>
//       <style>{css}</style>
//       <div className="hdr">
//         <div>
//           <div className="hdr-logo">⚡ SEO Automation <span>Engine</span></div>
//           <div className="hdr-sub">Magsmen + InTalks — Keyword in. Published out.</div>
//         </div>
//         <div className="pills">
//           <span className="pill p-mg">Magsmen</span>
//           <span className="pill p-it">InTalks</span>
//           <span className="pill" style={ghPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
//             {ghPillOk ? <span className="pill p-ok" style={{ padding: 0, border: "none", background: "none" }}>✅ {cfg.repo}</span> : "⚠ GitHub"}
//           </span>
//           <span className={`pill ${ytPillOk ? "p-ok" : ""}`} style={ytPillOk ? {} : { background: "#FEE2E2", color: "#991B1B", borderColor: "#FECACA" }}>
//             {ytPillOk ? "✅ YouTube" : "⚠ YouTube"}
//           </span>
//         </div>
//       </div>

//       <div className="tabs-bar">
//         {TABS.map(([id, label]) => (
//           <button key={id} className={`tab ${tab === id ? "on" : ""}`} onClick={() => setTab(id)}>{label}</button>
//         ))}
//       </div>

//       <YTModal open={modalOpen} onClose={() => setModalOpen(false)} cfg={cfg} setCfg={handleCfgChange} onConnected={handleConnected} />

//       {tab === "web" && <WebSEO cfg={cfg} />}
//       {tab === "yt" && <YouTubeSEO cfg={cfg} ytConnected={ytConnected} ytConnectedTxt={ytConnectedTxt} onOpenModal={() => setModalOpen(true)} />}
//       {tab === "hist" && <History hist={hist} />}
//       {tab === "cfg" && <Settings cfg={cfg} setCfg={handleCfgChange} />}
//     </>
//   );
// }

// async function callDjangoBlog(kw: string): Promise<string> {
//   const response = await fetch(AI_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ keyword: kw })
//   });

//   const data = await response.json() as DjangoBlogResponse;

//   if (!response.ok) {
//     throw new Error(data.message || "Blog generation failed");
//   }

//   if (typeof data.blog !== "string") {
//     throw new Error("Invalid response from Django API.");
//   }

//   return data.blog;
// }
