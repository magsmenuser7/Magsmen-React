// ─── TYPES ────────────────────────────────────────────────────────────────
export type TestimonialItem = {
  quote: string
  who: string
  role: string
}

export type FAQItem = {
  q: string
  a: string
}

export type BlogContent = {
  t: "p" | "h2" | "pq"
  text: string
}

export type BlogItem = {
  id: string
  cat: string
  title: string
  excerpt: string
  date: string
  rt: string
  icon: string
  content: BlogContent[]
}


// ─── FORMSPREE — THREE SEPARATE FORMS ─────────────────────────────────────
// Values come from .env file automatically via Vite

// Form 1 — Contact Form (Contact page + Careers page)
export const CONTACT_FORM_URL = import.meta.env.VITE_FORMSPREE_CONTACT as string

// Form 2 — Popup Assessment Form (auto-appears after 10 seconds)
export const POPUP_FORM_URL = import.meta.env.VITE_FORMSPREE_POPUP as string

// Form 3 — Inline Assessment Form (Brand page + service pages)
export const INLINE_FORM_URL = import.meta.env.VITE_FORMSPREE_INLINE as string

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Sandeep has been an incredible asset to our brand. From introducing a new phase of Tenali Double Horse to managing time effectively and being transparent with us every step of the way, they have truly exceeded expectations.",
    who: "Tenali Double Horse",
    role: "FMCG Brand, Andhra Pradesh"
  },
  {
    quote: "Telugu Foods had a remarkable experience with Sandeep's brand consulting. His tailored approach and practical strategies helped us launch combos across all mediums, increase distribution leads, and boost our brand visibility in less than two months.",
    who: "Telugu Foods",
    role: "Food Processing Brand, Andhra Pradesh"
  },
  {
    quote: "Working with Sandeep and their team was an incredible experience. They introduced us to the concept of brand architecture, which resulted in a new, enhanced strategy for VSB Group.",
    who: "VSB Group",
    role: "Real Estate and Infrastructure Group"
  },
  {
    quote: "We have been associated with Magsmen for two years. They helped our brand Triplex, a pioneer in the detergent market for 30 years, enter the digital space and proposed a digital strategy.",
    who: "Triplex",
    role: "FMCG, Andhra Pradesh"
  },
  {
    quote: "Magsmen guided our brand identity with unmatched insight. They solved challenges effortlessly, offering clarity and solutions. Truly transformed our brand with strategy and execution.",
    who: "Sri Bhramara Township",
    role: "Real Estate, Andhra Pradesh"
  },
  {
    quote: "Magsmen is my go-to for reputation management. Their research and rebranding transformed my brand and strategies. The Maheswari Movies launch shows their creativity.",
    who: "Suma Kanakala",
    role: "Film Actor, Telangana"
  },
]

// ─── FAQS ─────────────────────────────────────────────────────────────────
export const FAQS: FAQItem[] = [
  {
    q: "Is Magsmen right for a business like mine?",
    a: "If your business has a turnover above one crore rupees and you know something is not working with your brand or operations but cannot name the root cause precisely, Magsmen is the right starting point. We have worked with first-generation MSME founders and Fortune 25 organisations. The methodology does not change based on scale. The depth of engagement does."
  },
  {
    q: "What does a first engagement with Magsmen involve?",
    a: "For most founders, the right starting point is a diagnostic conversation followed by the OTC engagement. OTC is a structured session that produces a Five-Pillar Business Audit, a Primary Constraint Identification, a Strategic Direction Summary, a 90-Day Action Roadmap, and a Recommended Next Project."
  },
  {
    q: "What happens after I contact you?",
    a: "Our strategy associate reviews your details within 24 hours and reaches out directly by phone or WhatsApp. Not by email. Not by automated sequence. A direct call from the team."
  },
  {
    q: "Is Magsmen only for AP and Telangana businesses?",
    a: "We are rooted in Andhra Pradesh and Telangana and understand this market from the inside. However, we work with businesses across India. Our primary market is AP and Telangana because we believe this region's founders deserve the same strategic quality as any other market in India."
  },
  {
    q: "What is the difference between Magsmen and a marketing agency?",
    a: "A marketing agency creates campaigns, content, and advertising under a brief. Magsmen builds the strategic architecture that defines what the brief should be. We are consulted before the brief is written. A marketing agency executes after the strategy is set."
  },
  {
    q: "Does Magsmen only work on brand?",
    a: "All three disciplines are addressed within one engagement. Brand architecture, business structuring, and legal brand protection are designed together because decisions in each affect the other two. Our founder is an enrolled advocate."
  },
  {
    q: "What is Stature?",
    a: "Stature is the strategic architecture of an individual's professional identity, reputation, and public standing. It is not personal branding or social media management. Stature serves professionals, founders, celebrities, politicians, and executives who have earned attention and need that attention converted into structured authority."
  },
  {
    q: "How long does an engagement typically take?",
    a: "A Brand Express engagement is 30 to 45 days. A Brand Creation engagement is 16 to 20 weeks. An OTC diagnostic is 2 to 3 weeks. An Advisory Retainer is ongoing, structured around monthly sessions and quarterly reviews."
  },
  {
    q: "How do I know if this is the right investment?",
    a: "The OTC diagnostic answers this question precisely. It tells you what the most important constraint on your growth is and what the right sequence of work to address it is. If further engagement is warranted, the OTC report will say so specifically."
  },
]

// ─── BLOGS ────────────────────────────────────────────────────────────────
export const BLOGS: BlogItem[] = [
  {
    id: "brand-economic-asset",
    cat: "Brand Strategy",
    title: "Brand Is an Economic Asset. Stop Treating It Like a Marketing Budget.",
    excerpt: "Most Indian founders treat brand as an expense. That framing is the root cause of why they can never stop spending on advertising.",
    date: "June 2025",
    rt: "6 min",
    icon: "📊",
    content: [
      { t: "p", text: "There is a calculation every founder eventually runs. How much did I spend on marketing this quarter? How many leads did it produce? Was it worth it?" },
      { t: "p", text: "This calculation is the problem. It treats marketing as the question. Brand is the answer the calculation never reaches." },
      { t: "pq", text: "A brand architectured correctly does three things economically. It commands a price premium. It reduces customer acquisition cost. It creates resilience during volatility. None of these are marketing outcomes." },
      { t: "h2", text: "The Balance Sheet Argument" },
      { t: "p", text: "Businesses in Andhra Pradesh and Telangana that built real market presence did not get there through advertising. They got there because customers trusted them, defended them, and chose them repeatedly." },
      { t: "h2", text: "What This Means for the Founder Making the Decision Today" },
      { t: "p", text: "If your business is growing but you are spending more and more on advertising to maintain that growth, you have a brand problem, not a marketing problem." },
    ]
  },
  {
    id: "legal-is-brand",
    cat: "Legal Brand Protection",
    title: "Legal Protection Is Not a Separate Function. It Is Brand Strategy.",
    excerpt: "An unregistered trademark is a brand asset that someone else can take from you while you are busy building it.",
    date: "May 2025",
    rt: "5 min",
    icon: "🛡️",
    content: [
      { t: "p", text: "Most founders separate brand strategy and legal protection into two different conversations, two different vendors, two different timelines. This separation is not logical. It is expensive." },
      { t: "pq", text: "An unregistered trademark is not just a legal risk. It is a brand asset that someone else can take from you while you are busy building it." },
      { t: "h2", text: "Where the Gap Lives" },
      { t: "p", text: "At Magsmen, brand naming, trademark search, positioning strategy, and filing happen within the same engagement. The name you launch is the name you own." },
    ]
  },
  {
    id: "marketing-trap",
    cat: "Business Growth",
    title: "The Marketing Trap. Why Most Indian Founders Walk Straight Into It.",
    excerpt: "Spend on marketing. Get activity. Feel like something is happening. Repeat next month. The exit is not more marketing.",
    date: "April 2025",
    rt: "7 min",
    icon: "🎯",
    content: [
      { t: "p", text: "Marketing produces visible, measurable, short-term activity. Impressions. Clicks. Leads. Brand investment feels abstract and slow. So founders skip it. This is the marketing trap." },
      { t: "pq", text: "You can escape the marketing trap only by building the brand foundation first. Then marketing becomes amplification of something real rather than a substitute for something missing." },
      { t: "h2", text: "What the Trap Looks Like from the Inside" },
      { t: "p", text: "A founder in Vijayawada was spending eighty thousand rupees a month on Instagram and Facebook advertising. Clicks were coming. Purchases were not. The actual problem was that the brand had no clear positioning." },
    ]
  },
  {
    id: "stature-explained",
    cat: "Stature",
    title: "What Stature Actually Is. And Why Personal Branding Gets It Wrong.",
    excerpt: "Every digital agency offers personal branding. The phrase has been diluted to mean content calendars and headshot photography.",
    date: "March 2025",
    rt: "6 min",
    icon: "⭐",
    content: [
      { t: "p", text: "Visibility without credibility is noise. Credibility without visibility is wasted potential. Most personal branding services give you the first. Stature builds both, in that order." },
      { t: "pq", text: "The individual already has achievement. Stature converts that achievement into authority. The difference between the two is not talent or effort. It is architecture." },
      { t: "h2", text: "What Stature Actually Is" },
      { t: "p", text: "Stature is the strategic architecture of an individual's professional identity, reputation, and public standing." },
    ]
  },
  {
    id: "regional-brand",
    cat: "Regional Business",
    title: "The Guntur Founder Has the Same Right to Brand Architecture as the Bangalore Startup.",
    excerpt: "After eight years across AP and Telangana, regional businesses are not underperforming because they lack ambition. They are underserved.",
    date: "February 2025",
    rt: "5 min",
    icon: "🏗️",
    content: [
      { t: "p", text: "Most brand strategy frameworks were built for Bangalore startups or global multinationals. When a family business in Vijayawada tries to apply those frameworks, the fit is wrong." },
      { t: "pq", text: "The Guntur founder has the same right to brand architecture as the Bangalore startup. Not a simplified version of it. The real thing." },
    ]
  },
  {
    id: "brand-volatility-matrix",
    cat: "Proprietary Framework",
    title: "The Brand Volatility Matrix. Why the Most Dangerous Business Is Not the Failing One.",
    excerpt: "A framework for understanding why Fragile Success is the most urgent and least-recognised position in business.",
    date: "July 2025",
    rt: "8 min",
    icon: "◈",
    content: [
      { t: "p", text: "The businesses that are in the most structural danger are rarely the ones that are failing. They are the ones that grew successfully without building the brand architecture that would allow that success to sustain itself." },
      { t: "pq", text: "The most dangerous belief in business: we have been growing, so we must be doing something right. Growth is evidence the commercial model is working. It is not evidence the brand is architectured." },
    ]
  },
  {
    id: "fragile-success",
    cat: "Strategy",
    title: "Why the Business That Grew Without Structure Is the Most Urgent Client in the Room.",
    excerpt: "The most dangerous business is the one growing through relationships alone, with no brand architecture beneath it.",
    date: "January 2025",
    rt: "6 min",
    icon: "⚠️",
    content: [
      { t: "p", text: "The most dangerous position in business is not failure. It is fragile success. A business that has achieved revenue growth through relationships, hard work, and market timing but has no brand architecture underneath it." },
      { t: "pq", text: "When the founder steps back, the brand has nowhere to stand. The relationships do not transfer. The trust does not transfer." },
    ]
  },
]