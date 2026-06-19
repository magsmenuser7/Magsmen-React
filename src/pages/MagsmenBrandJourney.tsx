import React, { useState, useRef, useCallback } from "react";
import magsmenlogohorizontal from '/assets/banners/magsmen-logo-white-horizontal.png';

import newlogoblack from "/assets/magsmen-new-logo-black.png";


/* ============================================================
   FORMSPREE
   Replace with your own endpoint if this ever changes.
   ============================================================ */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqevwnk";

/* ============================================================
   DATA — copied verbatim from the original HTML (IND, STAGES, DLVS)
   ============================================================ */

const IND = {
  food: {
    label: "Food and Beverage",
    intro:
      "In food and beverage, everyone is competing for shelf space and attention at the same time. The brands that win do not win on taste alone. They win on story, trust, and positioning. Before Magsmen designs a single label or chooses a colour for your brand, the team needs to understand exactly where your product sits in the market and why a consumer should choose it over the alternatives right next to it.",
    notes: {
      "01": "This first conversation covers your recipe story, your sourcing philosophy, your production model, and the specific customer you imagine opening your product for the first time.",
      "02": "Magsmen maps the food and beverage category in your space, from mass market players to premium artisan brands, to find where genuine whitespace exists for your product.",
      "03": "Before any strategy is committed to, Magsmen confirms that your production capacity, supply chain, and quality systems can consistently deliver the experience your brand will promise.",
      "04": "Your brand's positioning is defined here: who it is for, what it promises, and why no competitor in your category can make exactly that same promise.",
      "05": "Every product, every price point, and every packaging format is structured so your range reinforces the brand rather than diluting it.",
      "06": "Before a single label gets designed, you review the complete strategy and confirm it in writing.",
      "07": "Your logo, label system, packaging design, and visual language are all built as a direct translation of the strategy, not because they look nice in isolation.",
      "08": "Your brand name, logo, and packaging elements are screened for trademark conflicts before any money goes into print production.",
      "09": "How your brand writes on pack, on social media, and in every customer facing moment is defined and documented here.",
      "10": "Your production, logistics, and retail infrastructure are confirmed ready to deliver what the brand is promising before the brand goes public.",
      "11": "Your team understands what the brand stands for and how to represent it in every single interaction with a customer.",
      "12": "Which channels, which audiences, in what sequence, and with what budget. Your market entry is planned precisely before a single post goes live.",
      "13": "30, 60, and 90 days after launch, Magsmen returns to review performance and refine the strategy based on real market feedback.",
    },
  },
  fashion: {
    label: "Fashion and Apparel",
    intro:
      "Fashion is one of the most perception driven industries in the world. A garment is rarely bought for function alone. It is bought for identity, aspiration, and belonging. The brand you build must communicate a world your customer wants to be part of. That world is defined by strategy, not by aesthetic impulse alone.",
    notes: {
      "01": "Magsmen begins by understanding your design philosophy, your manufacturing model, your target customer, and the aesthetic world you are trying to create.",
      "02": "The fashion landscape is mapped from fast fashion to luxury to identify territory that is both authentic to your brand and commercially viable for you to own.",
      "03": "Production capacity, sizing systems, fulfilment infrastructure, and returns processes are all confirmed before the positioning is finalised.",
      "04": "The aesthetic territory you will own, the customer archetype you speak to, and the emotional promise your brand makes are defined precisely here.",
      "05": "Your collection architecture, categories, price points, and hero pieces are structured to tell a coherent brand story from the first item to the last.",
      "06": "Strategy is confirmed in writing before any design work begins. No exceptions.",
      "07": "Your logo, typography, label system, lookbook direction, and the consistent visual language across every touchpoint are built here.",
      "08": "Your brand name and mark are screened for trademark conflicts across textile and apparel classes before you invest in production.",
      "09": "How your brand communicates on tags, on social, in lookbooks, and in every piece of customer facing copy is defined here.",
      "10": "Sourcing, production, packaging, and fulfilment are all confirmed aligned with the brand experience you are promising.",
      "11": "Everyone representing your brand, from customer service to studio staff, understands and speaks its language consistently.",
      "12": "Platform strategy, editorial or influencer approach, sequencing, and targets are all planned before execution begins.",
      "13": "Post launch performance is reviewed and the strategy is adjusted based on what the market is telling you.",
    },
  },
  wellness: {
    label: "Health, Wellness and Beauty",
    intro:
      "Wellness and beauty are trust industries. Customers put these products on their skin, in their bodies, and into their daily rituals. The brands they choose are the ones they believe in, not just the ones they see first. Building that belief requires more than a clean logo and a good ingredient list. It requires a brand positioned with honesty and communicated with complete consistency.",
    notes: {
      "01": "Your formulation story, your clinical or artisan credentials, and the transformation your product creates are all understood before strategy begins.",
      "02": "The wellness and beauty category is mapped from mass to clinical to luxury to identify where your brand can hold a credible and distinctive position.",
      "03": "Formulation integrity, certifications, regulatory compliance, and supply chain reliability are confirmed before any brand promises are made public.",
      "04": "The specific benefit you own, the trust mechanism that makes it credible, and the audience for whom it is designed are all defined precisely.",
      "05": "Your product range and pricing are structured so every item reinforces the master brand rather than fragmenting it.",
      "06": "Strategy is confirmed before any visual work begins.",
      "07": "Your logo, colour palette, and packaging design direction form a visual system that communicates trust and efficacy simultaneously.",
      "08": "Your brand name, product names, and logo mark are cleared for trademark conflicts before production investment begins.",
      "09": "Your brand voice, whether clinical and credible or warm and personal, is defined and applied consistently across all channels.",
      "10": "Regulatory compliance, certifications, and fulfilment infrastructure are all confirmed before launch authorisation.",
      "11": "Your team understands the brand's claims, values, and communication standards completely.",
      "12": "Your market entry, whether direct to consumer, retail, or clinic channel, is sequenced and structured before launch.",
      "13": "Post launch awareness, trial, and retention are tracked and the strategy is refined based on the data.",
    },
  },
  tech: {
    label: "Technology and SaaS",
    intro:
      "In technology, the product is often invisible and the brand is everything a customer can see and feel before they sign up. A SaaS brand that cannot communicate its value clearly and memorably will lose to a competitor that can, even if the product is technically superior. Clarity is the competitive advantage in this category.",
    notes: {
      "01": "Your product's core value, the problem it solves, your ideal customer profile, and the story that brought you to build this are all mapped before anything else.",
      "02": "The competitive SaaS landscape, pricing models, and messaging strategies are analysed to find the positioning gap your product can credibly and durably own.",
      "03": "Your product feature set, support infrastructure, and customer success process are confirmed capable of supporting the brand promise.",
      "04": "The single most important idea your brand must own in the mind of your target user is defined with precision here.",
      "05": "Pricing tiers, feature architecture, and product packaging are structured so the brand logic is coherent from free trial to enterprise.",
      "06": "Strategy is confirmed before any visual or messaging work begins.",
      "07": "Your logo, website visual direction, and the brand assets needed for product and marketing are built here.",
      "08": "Your brand name, domain, and mark are screened for trademark and IP conflicts.",
      "09": "The words that convert on landing pages, in onboarding, and in sales conversations form your messaging framework.",
      "10": "Product experience, support, and onboarding are confirmed aligned with what the brand is promising.",
      "11": "Founders, sales team, and support staff are all aligned on how to speak about the brand consistently.",
      "12": "Community strategy, paid channels, content, and PR form your launch plan with measurable targets.",
      "13": "User data is reviewed and messaging, positioning, or channel strategy is refined based on what is actually working.",
    },
  },
  education: {
    label: "Education and Training",
    intro:
      "Education brands carry extraordinary weight because they carry trust. When a parent enrols a child or a professional invests in a course, they are staking something more than money. They are staking the future. The brand you build must deserve that level of trust and communicate it clearly before the first enrolment decision is made.",
    notes: {
      "01": "Your pedagogy, curriculum, learning outcomes, and the transformation you are promising every student are understood completely before strategy begins.",
      "02": "The education landscape in your segment is mapped to identify where you can hold a distinctive and credible position.",
      "03": "Faculty quality, curriculum depth, infrastructure, and student support systems are verified as capable of delivering on the brand's promise consistently.",
      "04": "The learning outcome you own, the audience you serve, and why your approach is meaningfully different are defined precisely.",
      "05": "Courses, programmes, and fee architecture are structured to tell a coherent brand story.",
      "06": "Strategy is confirmed before any creative work begins.",
      "07": "Your logo and brand system are built to communicate trust and academic credibility simultaneously.",
      "08": "Your brand name and marks are cleared for trademark conflicts.",
      "09": "How you speak to students, parents, and institutions forms a communication framework built for your specific context.",
      "10": "Admissions processes, faculty alignment, and delivery infrastructure are confirmed ready before launch.",
      "11": "Teachers, admissions staff, and counsellors all understand and represent the brand consistently.",
      "12": "Your admissions cycle launch or new programme rollout is given a structured go to market approach.",
      "13": "Enrolment data and brand perception are reviewed and the strategy is refined.",
    },
  },
  retail: {
    label: "Retail and E-commerce",
    intro:
      "Retail is a margin business disguised as a product business. The brands that survive and grow are the ones that build enough emotional pull to justify their price without constant discounting. That pull is not accidental. It is built through clear positioning, a coherent visual identity, and a consistent experience at every customer touchpoint.",
    notes: {
      "01": "Your product category, buying model, target customer, and the shopping experience you are trying to create are the starting point for everything.",
      "02": "The competitive retail landscape is mapped and your brand's memorable, returnable position is identified.",
      "03": "Supply chain, inventory model, and fulfilment infrastructure are confirmed capable of supporting the brand experience before strategy is finalised.",
      "04": "The reason a customer should choose you over every other option available to them is defined precisely.",
      "05": "Product range, pricing architecture, and brand portfolio are structured so everything is coherent.",
      "06": "Strategy is confirmed before any visual or store design work begins.",
      "07": "Your visual identity, retail environment direction, and e-commerce visual system are built here.",
      "08": "Brand names and marks are cleared for trademark conflicts.",
      "09": "How your brand speaks in store, online, in packaging, and in every customer communication is defined here.",
      "10": "Store experience, customer service standards, and digital infrastructure are confirmed aligned with the brand.",
      "11": "Store staff and customer service teams are trained on the brand.",
      "12": "Store opening, platform launch, or campaign is given a structured go to market strategy.",
      "13": "Sales, retention, and brand recall are tracked and the strategy is refined.",
    },
  },
  realestate: {
    label: "Real Estate and Construction",
    intro:
      "Real estate is one of the highest stakes purchase decisions a person will ever make. The brand attached to a project carries enormous weight. Buyers are not just choosing a property. They are choosing who to trust with the most significant investment of their lives. That trust is built or destroyed by the brand before a single site visit happens.",
    notes: {
      "01": "Your project's vision, positioning intent, target buyer profile, and the lifestyle promise you are building are the foundation before strategy begins.",
      "02": "The real estate market in your geography and segment is mapped and your premium, defensible position is identified.",
      "03": "Construction quality, amenities, legal clearances, and delivery timeline are confirmed capable of supporting the brand promise.",
      "04": "The single promise that distinguishes your development from everything around it is defined precisely.",
      "05": "Unit configurations, pricing architecture, and phasing plan are aligned with the brand positioning.",
      "06": "Strategy is confirmed before any sales material or branding work begins.",
      "07": "Project name, logo, visual system, site hoardings, and sales centre environment are built as a complete brand system.",
      "08": "Your brand name and project marks are screened for trademark and RERA compliance.",
      "09": "Narrative, tone, and messaging hierarchy for every sales touchpoint form your communication strategy.",
      "10": "Sales team, site experience, and customer journey from enquiry to handover are confirmed ready.",
      "11": "Your sales team is trained to represent the brand consistently and credibly in every conversation.",
      "12": "Pre launch campaign, channel partner strategy, and launch event are planned with structure.",
      "13": "Inquiry volume, conversion rates, and brand recall are tracked and the strategy is adjusted.",
    },
  },
  finance: {
    label: "Finance and Fintech",
    intro:
      "Financial brands are built on one thing above all else: trust. A customer giving you access to their money needs to believe in you completely before they have any evidence to support that belief. That belief is built by brand. Clarity, consistency, and a compelling story are not optional in this industry. They are the product itself.",
    notes: {
      "01": "Your financial product or service model, your regulatory framework, your target customer, and the specific financial problem you solve are mapped first.",
      "02": "Banks, NBFCs, fintech platforms, and insurance providers are all mapped and the territory you can credibly occupy is identified.",
      "03": "Compliance infrastructure, technology stack, and service delivery capability are confirmed before the brand promise is finalised.",
      "04": "Your trust mechanism, your audience, and the promise that no competitor can make exactly this way are defined here.",
      "05": "Product or service range, pricing model, and customer tiers are structured in alignment with the brand.",
      "06": "Strategy is confirmed in writing before any visual or communication work begins.",
      "07": "Your visual identity is built with trust, clarity, and accessibility as the primary brief.",
      "08": "Your brand name and marks are cleared for trademark conflicts and regulatory naming guidelines.",
      "09": "How you explain complex financial products in plain, honest language forms your communication framework.",
      "10": "Regulatory compliance, customer onboarding, and service infrastructure are confirmed ready.",
      "11": "Relationship managers, digital support, and front line staff are all aligned on the brand.",
      "12": "Your product launch or brand rollout is given a structured and compliant go to market strategy.",
      "13": "Customer acquisition, trust metrics, and NPS are tracked and the strategy is refined.",
    },
  },
  hospitality: {
    label: "Hospitality and Tourism",
    intro:
      "Hospitality is memory making at scale. Every guest interaction, from booking to checkout, is a brand moment. The brands that earn loyalty are the ones where the promise made before arrival matches and ideally exceeds the experience delivered on the ground. That alignment begins with brand strategy, not with service training.",
    notes: {
      "01": "Your property's character, target guest profile, and the experience you want to be known for are understood completely before strategy begins.",
      "02": "The hospitality landscape in your category and region is mapped and the territory your property can credibly and distinctively claim is identified.",
      "03": "Physical infrastructure, service standards, and staffing model are confirmed capable of delivering on the brand promise consistently.",
      "04": "The specific experience promise that will make guests choose you over everything available to them is defined here.",
      "05": "Room categories, package architecture, and food and beverage offering are structured in alignment with the brand.",
      "06": "Strategy is confirmed before any visual or communication work begins.",
      "07": "Your logo, signage system, digital presence, and collateral are built with the guest experience as the design brief.",
      "08": "Your brand name and marks are cleared for trademark conflicts.",
      "09": "How the brand speaks in booking communications, in room materials, on social, and to the press is defined here.",
      "10": "Pre opening operations, staff training, and guest journey systems are confirmed aligned with the brand.",
      "11": "Your entire team, from front desk to housekeeping, understands and lives the brand in every interaction.",
      "12": "Media outreach, travel trade strategy, social launch, and review platform activation are all planned.",
      "13": "Occupancy, review scores, and brand recall are tracked and the strategy is refined.",
    },
  },
  manufacturing: {
    label: "Manufacturing and Industrial",
    intro:
      "Manufacturing brands are underbranded by default, which creates significant opportunity for the first company in a category to build a brand that buyers remember and specify by name. Moving from commodity supplier to trusted brand is one of the most commercially significant transformations a manufacturing business can make.",
    notes: {
      "01": "Your product range, manufacturing capabilities, customer base, and the problems your products solve better than any alternative are the starting point.",
      "02": "The competitive landscape in your category is mapped and where your capabilities create a genuine differentiation opportunity is identified.",
      "03": "Production consistency, quality controls, and delivery infrastructure are confirmed capable of supporting the brand promise.",
      "04": "Your specific claim of superiority, your proof points, and the customer segment for whom this matters most are defined precisely.",
      "05": "Product range, pricing tiers, and key account strategy are aligned with the brand.",
      "06": "Strategy is confirmed before any visual or communication work begins.",
      "07": "Your logo, product labelling, catalogue design, exhibition materials, and digital presence are built as a complete system.",
      "08": "Your brand name and marks are cleared for trademark conflicts across relevant industrial classes.",
      "09": "How you speak to procurement managers, engineers, distributors, and institutional buyers is defined here.",
      "10": "Sales team, distributor network, and aftersales infrastructure are confirmed aligned with the brand promise.",
      "11": "Sales and technical teams represent the brand consistently in every customer interaction.",
      "12": "Trade press, exhibition strategy, dealer activation, and digital presence form your launch plan.",
      "13": "Specification wins, distributor engagement, and buyer brand recall are tracked.",
    },
  },
  consulting: {
    label: "Consulting and Professional Services",
    intro:
      "In professional services, the brand is inseparable from the people delivering the work. Clients are not buying a product they can evaluate before purchase. They are buying confidence in your judgment. That confidence is built through perception: how you are positioned, how you communicate, and how consistently you show up across every interaction.",
    notes: {
      "01": "Your area of expertise, your service model, your ideal client profile, and the transformation you create are all understood before a single recommendation is made.",
      "02": "The professional services landscape in your category is mapped and where your expertise can claim distinctive, credible territory is identified.",
      "03": "Service delivery model, team capacity, and client management processes are confirmed capable of supporting the brand promise.",
      "04": "The specific expertise you are known for, the audience you serve, and the proof that makes it credible are defined precisely.",
      "05": "Service offering, engagement models, and fee architecture are aligned with the brand.",
      "06": "Strategy is confirmed before any communication or identity work begins.",
      "07": "Your logo, presentation templates, proposal design, and digital presence are built to communicate authority and trust.",
      "08": "Your brand name and marks are cleared for trademark conflicts.",
      "09": "Your thought leadership framework and how you communicate expertise through content, speaking, and proposals are defined here.",
      "10": "Proposal process, onboarding experience, and client management systems are confirmed aligned.",
      "11": "Every person in your firm represents the brand consistently in pitches, conversations, and delivery.",
      "12": "Speaking engagements, content strategy, referral activation, and digital presence form your positioning launch plan.",
      "13": "Enquiry quality, conversion rates, and target client brand recall are tracked and the strategy is refined.",
    },
  },
  healthcare: {
    label: "Healthcare and Pharma",
    intro:
      "Healthcare brands operate in the most trust critical environment that exists. Patients, caregivers, and medical professionals need to believe in your brand before they will act on it. The consequence of a weak brand is not just a missed sale. It is a missed patient. Building that trust requires clarity, consistency, and compliance in equal measure.",
    notes: {
      "01": "Your clinical offering, patient or physician target, regulatory environment, and the health outcome your brand is built around are mapped first.",
      "02": "The competitive landscape across your therapeutic area or service category is analysed and your credible, distinctive position is identified.",
      "03": "Clinical quality, regulatory compliance, and service infrastructure are confirmed before any brand promises are made public.",
      "04": "The outcome you own, the trust mechanism, and the audience for whom this matters most are defined here.",
      "05": "Service range or product portfolio is structured in alignment with the brand and the regulatory framework.",
      "06": "Strategy is confirmed in writing before any visual or communication work begins.",
      "07": "Your visual identity is built with trust and accessibility as the primary brief.",
      "08": "Your brand name and marks are cleared for trademark conflicts and regulatory naming guidelines.",
      "09": "How you speak to patients, caregivers, and medical professionals with clarity and compliance is defined here.",
      "10": "Clinical quality systems, regulatory approvals, and patient experience infrastructure are confirmed ready.",
      "11": "Clinical and administrative teams understand and represent the brand in every patient interaction.",
      "12": "Your launch or expansion is given a compliant, structured go to market strategy.",
      "13": "Patient acquisition, retention, and satisfaction scores are tracked and the strategy is refined.",
    },
  },
  media: {
    label: "Media and Entertainment",
    intro:
      "In media and entertainment, the brand is the content and the content is the brand. Audiences follow creators and platforms they believe in. Belief is built through a consistent identity, a clear point of view, and a voice that is unmistakably yours. Building that identity requires the same strategic rigour as building any other kind of brand.",
    notes: {
      "01": "Your content vision, format and platform strategy, your audience, and the cultural space you are trying to occupy are mapped before strategy begins.",
      "02": "The media landscape in your category is mapped and where your brand can hold a distinctive, ownable position is identified.",
      "03": "Production model, content pipeline, and distribution infrastructure are confirmed capable of sustaining the brand promise over time.",
      "04": "The point of view you own, the audience you serve, and the emotional territory your content occupies are defined precisely.",
      "05": "Content formats, programming architecture, and monetisation model are aligned with the brand.",
      "06": "Strategy is confirmed before any visual or creative direction work begins.",
      "07": "Your logo, channel art, and the complete visual language of your brand are built here.",
      "08": "Your brand name and marks are cleared for trademark and IP conflicts.",
      "09": "Your editorial voice, tone guidelines, and communication framework across every platform you publish on are defined here.",
      "10": "Production workflow, platform publishing systems, and community management are confirmed aligned.",
      "11": "Your creative and production team are aligned on the brand in every piece of content produced.",
      "12": "Platform strategy, audience seeding, PR, and content sequencing form your launch plan.",
      "13": "Audience growth, engagement rates, and brand recall are tracked and the strategy is refined.",
    },
  },
};

const STAGES = [
  { n: "01", p: "r", pl: "Research", nm: "We start by listening", obj: "Before recommending anything, we sit with you to understand your vision, your customers, and the gap you see in the market.", gate: "We do not move forward until we have understood your business completely. Not just the surface but the intent behind it." },
  { n: "02", p: "r", pl: "Research", nm: "We study your market honestly", obj: "We analyse every major competitor in your space, map their positioning, study their pricing, and look for the territory that is genuinely open.", gate: "The research is complete only when we can clearly identify where your brand can stand without being easily displaced." },
  { n: "03", p: "r", pl: "Research", nm: "We confirm the business can support the brand", obj: "There is no point building a premium brand if your operations cannot deliver a premium experience. We confirm what you can do matches what you will promise.", gate: "If there are operational gaps, we identify them here before they become brand failures after launch." },
  { n: "04", p: "s", pl: "Strategy", nm: "We decide exactly where your brand stands", obj: "Positioning answers who this is for, what it does, why it is different, and why anyone should believe that. Built on evidence, not intuition.", gate: "You will not see a logo or a colour palette until this is confirmed in writing. This is the foundation everything else is built on." },
  { n: "05", p: "s", pl: "Strategy", nm: "We align your products and pricing to the brand", obj: "Products, pricing, and range structure are all brand decisions. A premium brand with mass market pricing sends a confusing signal.", gate: "Every product and price point must have a strategic reason for existing within the brand." },
  { n: "06", p: "s", pl: "Strategy", nm: "You review and confirm the strategy", obj: "Before any design work begins, we present the complete strategy. You ask questions, push back, and confirm in writing.", gate: "Nothing visual is created until written confirmation is received. That is a hard rule with no exceptions." },
  { n: "07", p: "i", pl: "Identity", nm: "We build your visual and verbal identity", obj: "Your logo, colours, typography, and imagery are all built as a direct translation of the strategy, not because they look nice in isolation.", gate: "Every identity element must be traceable to the positioning. If we cannot explain the decision, it is not made." },
  { n: "08", p: "i", pl: "Identity", nm: "We protect your brand legally", obj: "Your brand name and logo are assets. Before you invest in printing or signage, we screen for trademark conflicts and coordinate the filing process.", gate: "No brand enters the market without legal clearance. This step is not optional." },
  { n: "09", p: "i", pl: "Identity", nm: "We define exactly how your brand speaks", obj: "Your brand needs a voice as consistent as its visual identity. Tone, language, and messages are defined for every channel.", gate: "Every channel, every message, and every word must follow from the same communication architecture." },
  { n: "10", p: "e", pl: "Execution", nm: "We confirm operations match the brand promise", obj: "A brand that promises quality but cannot deliver it is not a brand. It is a liability. We close the gap before your customer ever sees the brand.", gate: "If operations are not ready, the launch is not authorised. The brand must be deliverable before it is launchable." },
  { n: "11", p: "e", pl: "Execution", nm: "We prepare your team to represent the brand", obj: "Every person who interacts with a customer is a brand moment. We conduct orientation and produce a Brand Handbook for your team.", gate: "Launch does not proceed until key team members have attended the orientation. A brand launch without internal alignment begins drifting immediately." },
  { n: "12", p: "l", pl: "Launch", nm: "We plan how your brand enters the market", obj: "Which channels, which audiences, in what sequence, with what messaging, against what targets. Your market entry is planned with precision.", gate: "Launch strategy and performance benchmarks are confirmed in writing before any campaign execution begins." },
  { n: "13", p: "l", pl: "Launch", nm: "We review what the market tells us and adjust", obj: "30, 60, and 90 days after launch, we return to review, analyse, and make the strategic adjustments your brand needs to keep growing.", gate: "This is the stage most brands skip and it is precisely what separates brands that hold from brands that drift." },
];

const DLVS = {
  "01": ["Founder Intent Document", "Business Model Map", "Early Constraint and Risk Register"],
  "02": ["Category Map with all major players by positioning", "Competitive Positioning Matrix", "Consumer Insight Summary", "Opportunity Gap Analysis"],
  "03": ["Feasibility Assessment Report", "Operational Readiness Checklist", "Risk Adjusted Positioning Note"],
  "04": ["Positioning Statement, single and precise", "Brand Architecture Document", "Audience Definition", "Competitive Differentiation Map"],
  "05": ["Product Architecture Framework", "Pricing Strategy Recommendation", "Value Proposition Hierarchy"],
  "06": ["Strategic Alignment Presentation", "Written Client Confirmation required before proceeding"],
  "07": ["Logo System including primary, secondary, and monogram", "Colour Palette and Typography System", "Imagery Direction Guide", "Visual Identity Guidelines"],
  "08": ["Trademark Availability Screening Report", "IP Advisory Note", "Trademark Filing Coordination"],
  "09": ["Message Ladder from brand promise to channel messaging", "Tone of Voice Guidelines", "Content Framework by Channel"],
  "10": ["Operational Readiness Audit", "Gap Closure Action Plan", "Pre Launch Compliance Checklist"],
  "11": ["Brand Handbook, production ready", "Brand Orientation Session", "Session Summary distributed within 48 hours"],
  "12": ["Launch Strategy Document", "Campaign Sequencing Plan", "Launch Performance Benchmarks"],
  "13": ["Post Launch Audit Reports at 30, 60, and 90 days", "Adjustment Confirmation Log", "Perception Performance Analysis"],
};

const STAGE_TXT = {
  idea: "entering the market from scratch",
  early: "in its early stages",
  grown: "ready to scale",
  reposition: "repositioning for the next chapter",
};

const STAGE_MAP = {
  idea: "Idea stage, not yet launched",
  early: "Early stage, launched but not branded",
  grown: "Growing, needs stronger brand to scale",
  reposition: "Established, needs repositioning",
};

const WHY_CARDS = [
  { n: "01", h: "No stage is optional", b: "Every stage in this process protects something specific. Stage 02 prevents strategy built on assumption. Stage 08 prevents trademark conflict after launch. The sequence is the quality control and skipping any part of it creates a vulnerability in the brand." },
  { n: "02", h: "Strategy before identity", b: "Your logo is built in Stage 07. Your positioning is built in Stage 04. A logo designed before a strategy exists is decoration, not branding. At Magsmen, identity is always a translation of strategy and never a substitute for it." },
  { n: "03", h: "Every stage has a gate", b: "No stage advances until the previous one is confirmed complete. This single discipline prevents the most common brand failure: building on an unconfirmed foundation. The gate is what makes the whole system trustworthy." },
];

/* ============================================================
   LOGO (inline SVG, used in onboarding left panel / nav / footer)
   ============================================================ */
function LogoMark({ stroke1 = "#7C3AED", stroke2 = "#c4b5fd", size = 20 }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" width={size} height={size}>
      <path d="M3 26L15 5L27 26" stroke={stroke1} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 26L15 12L22 26" stroke={stroke2} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================================================
   STYLES — ported 1:1 from the original <style> block.
   Using a single injected <style> tag keeps every original
   selector, value, and breakpoint intact.
   ============================================================ */
const CSS = `
.mg-root{font-family:'DM Sans',sans-serif;background:#fff;color:#1A1A2E;overflow-x:hidden}
.mg-root *{box-sizing:border-box}
.mg-root{--v:#4B0082;--vm:#6B21A8;--vb:#7C3AED;--vl:#EDE9FE;--vxl:#F5F3FF;--white:#FFFFFF;--off:#FAFAFA;--char:#1A1A2E;--body:#374151;--muted:#6B7280;--border:#E5E7EB;--bv:rgba(124,58,237,0.14);}
.mg-root html{scroll-behavior:smooth}

/* TOAST */
.mg-toast{position:fixed;top:20px;right:20px;z-index:9999;background:var(--v);border-radius:8px;padding:14px 18px;display:none;align-items:center;gap:10px;box-shadow:0 8px 32px rgba(75,0,130,0.25);max-width:300px}
.mg-toast.show{display:flex}
.mg-t-ic{width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;flex-shrink:0}
.mg-t-tx{font-size:12px;color:#fff;line-height:1.5}

/* ONBOARD */
.mg-s-ob{min-height:100vh;background:#fff;display:flex;align-items:center;justify-content:center;padding:32px 16px}
.mg-ob-shell{display:grid;grid-template-columns:1fr 1fr;max-width:860px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(75,0,130,0.1)}
.mg-ob-l{background:var(--v);padding:48px 40px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
.mg-ob-l::before{content:'';position:absolute;right:-50px;top:-50px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,0.05)}
.mg-ob-l::after{content:'';position:absolute;left:20px;bottom:-60px;width:150px;height:150px;border-radius:50%;background:rgba(255,255,255,0.04)}
.mg-ob-logo{display:flex;align-items:center;gap:10px;margin-bottom:36px;position:relative;z-index:1}
.mg-ob-wm{font-size:13px;font-weight:600;letter-spacing:.2em;color:#fff;text-transform:uppercase}
.mg-ob-wsub{font-size:9px;letter-spacing:.25em;color:rgba(255,255,255,0.45);text-transform:uppercase;margin-top:1px}
.mg-ob-l h2{font-family:'Cormorant Garamond',serif;font-size:36px;font-weight:300;color:#fff;line-height:1.15;margin-bottom:12px;position:relative;z-index:1}
.mg-ob-l h2 em{font-style:italic;color:#c4b5fd}
.mg-ob-rule{width:32px;height:1px;background:rgba(255,255,255,0.3);margin-bottom:16px;position:relative;z-index:1}
.mg-ob-l p{font-size:14px;font-weight:300;color:rgba(255,255,255,0.55);line-height:1.75;position:relative;z-index:1}
.mg-ob-points{margin-top:28px;display:flex;flex-direction:column;gap:12px;position:relative;z-index:1}
.mg-ob-pt{display:flex;align-items:flex-start;gap:10px}
.mg-ob-pt-dot{width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:#c4b5fd;flex-shrink:0;margin-top:1px}
.mg-ob-pt-txt{font-size:13px;font-weight:300;color:rgba(255,255,255,0.65);line-height:1.5}

.mg-ob-r{background:#fff;padding:40px 36px;display:flex;flex-direction:column;justify-content:center}
.mg-ob-r h3{font-size:16px;font-weight:600;color:var(--char);margin-bottom:6px}
.mg-ob-r p{font-size:13px;font-weight:300;color:var(--muted);margin-bottom:24px;line-height:1.6}
.mg-fgrp{margin-bottom:14px}
.mg-fgrp label{display:block;font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--vb);margin-bottom:6px}
.mg-fgrp input,.mg-fgrp select{width:100%;padding:11px 14px;border:1px solid var(--border);border-radius:6px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:var(--char);background:#fff;outline:none;transition:border-color .2s,box-shadow .2s;appearance:none}
.mg-fgrp input::placeholder{color:#CBD5E0}
.mg-fgrp input:focus,.mg-fgrp select:focus{border-color:var(--vb);box-shadow:0 0 0 3px rgba(124,58,237,0.08)}
.mg-frow{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.mg-consent-row{display:flex;align-items:flex-start;gap:8px;margin-bottom:16px}
.mg-consent-row input[type=checkbox]{width:15px;height:15px;flex-shrink:0;margin-top:2px;accent-color:var(--vb)}
.mg-consent-row span{font-size:11px;font-weight:300;color:var(--muted);line-height:1.6}
.mg-consent-row a{color:var(--vb)}
.mg-ob-btn{width:100%;padding:13px;background:var(--v);color:#fff;border:none;border-radius:6px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:background .2s}
.mg-ob-btn:hover{background:var(--vm)}
.mg-ob-btn:disabled{background:var(--vb);cursor:not-allowed;opacity:.75}
.mg-ob-err{color:#DC2626;font-size:12px;margin-top:8px;min-height:16px}

/* NAV */
.mg-nav{position:sticky;top:0;z-index:100;background:#fff;border-bottom:1px solid var(--border);padding:0 28px;height:58px;display:flex;align-items:center;justify-content:space-between}
.mg-nav-l{display:flex;align-items:center;gap:8px}
.mg-nav-wm{font-size:12px;font-weight:600;letter-spacing:.18em;color:var(--char);text-transform:uppercase}
.mg-nav-div{width:1px;height:16px;background:var(--border);margin:0 10px}
.mg-nav-who{font-size:13px;font-weight:300;font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--vb)}
.mg-nav-btn{padding:7px 16px;border:1.5px solid var(--v);border-radius:4px;color:var(--v);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;background:transparent;transition:all .2s}
.mg-nav-btn:hover{background:var(--v);color:#fff}

/* HERO */
.mg-hero{background:#fff;padding:64px 28px 72px;text-align:center;border-bottom:1px solid var(--border);position:relative}
.mg-hero::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80px;height:3px;background:var(--v);border-radius:3px 3px 0 0}
.mg-hero-inner{max-width:640px;margin:0 auto}
.mg-hero-badge{display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 10px;border:1px solid var(--bv);border-radius:20px;background:var(--vxl);margin-bottom:24px}
.mg-hero-dot{width:6px;height:6px;border-radius:50%;background:var(--vb);animation:mg-pulse 2s infinite}
@keyframes mg-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.mg-hero-badge span{font-size:11px;font-weight:500;letter-spacing:.1em;color:var(--vm);text-transform:uppercase}
.mg-hero h1{font-family:'Cormorant Garamond',serif;font-size:50px;font-weight:300;color:var(--char);line-height:1.1;margin-bottom:10px}
.mg-hero h1 em{font-style:italic;color:var(--v)}
.mg-hero-name{font-family:'Cormorant Garamond',serif;font-size:18px;font-style:italic;font-weight:300;color:var(--muted);margin-bottom:20px}
.mg-hero-rule{width:36px;height:2px;background:var(--v);margin:0 auto 20px;border-radius:2px}
.mg-hero-sub{font-size:15px;font-weight:300;color:var(--muted);line-height:1.8;max-width:480px;margin:0 auto}

/* INTRO */
.mg-intro{background:var(--off);padding:52px 28px;border-bottom:1px solid var(--border)}
.mg-intro-inner{max-width:660px;margin:0 auto;text-align:center}
.mg-intro-kicker{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--vm);margin-bottom:14px}
.mg-intro h2{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:400;color:var(--char);margin-bottom:16px}
.mg-intro p{font-size:15px;font-weight:300;color:var(--body);line-height:1.85;margin-bottom:12px}

/* PHASES */
.mg-phases{background:#fff;padding:18px 28px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;border-bottom:1px solid var(--border);position:sticky;top:58px;z-index:90}
.mg-ph-lbl{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.mg-pill{padding:6px 14px;border-radius:20px;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border:1.5px solid;transition:all .2s}
.mg-pill-all{background:var(--v);border-color:var(--v);color:#fff}
.mg-pill-r{background:#EFF6FF;border-color:#BFDBFE;color:#1E40AF}
.mg-pill-s{background:#F0FDF4;border-color:#BBF7D0;color:#14532D}
.mg-pill-i{background:var(--vxl);border-color:#DDD6FE;color:#5B21B6}
.mg-pill-e{background:#FFFBEB;border-color:#FDE68A;color:#78350F}
.mg-pill-l{background:#FEF2F2;border-color:#FECACA;color:#7F1D1D}
.mg-pill.mg-dim{opacity:.25;pointer-events:none}

/* STAGES */
.mg-stages-wrap{background:#fff;padding:40px 20px 64px;max-width:840px;margin:0 auto}

.mg-stage-row{display:grid;grid-template-columns:64px 1fr;transition:opacity .25s}
.mg-stage-row.mg-hidden{opacity:.1;pointer-events:none}

.mg-sl{display:flex;flex-direction:column;align-items:center;position:relative;padding-top:20px}
.mg-sl::after{content:'';position:absolute;left:50%;top:62px;bottom:0;width:1px;background:var(--border);transform:translateX(-.5px)}
.mg-stage-row:last-child .mg-sl::after{display:none}

.mg-snum{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;border:1.5px solid;background:#fff;transition:all .25s;position:relative;z-index:1;cursor:pointer;flex-shrink:0}
.mg-snum.mg-r{color:#1E40AF;border-color:#BFDBFE}
.mg-snum.mg-s{color:#14532D;border-color:#BBF7D0}
.mg-snum.mg-i{color:#5B21B6;border-color:#DDD6FE}
.mg-snum.mg-e{color:#78350F;border-color:#FDE68A}
.mg-snum.mg-l{color:#7F1D1D;border-color:#FECACA}
.mg-snum.mg-open.mg-r{background:#1E40AF;color:#fff;border-color:#1E40AF}
.mg-snum.mg-open.mg-s{background:#14532D;color:#fff;border-color:#14532D}
.mg-snum.mg-open.mg-i{background:#5B21B6;color:#fff;border-color:#5B21B6}
.mg-snum.mg-open.mg-e{background:#78350F;color:#fff;border-color:#78350F}
.mg-snum.mg-open.mg-l{background:#7F1D1D;color:#fff;border-color:#7F1D1D}

.mg-sr{padding:14px 0 26px 20px;border-bottom:1px solid var(--border)}
.mg-stage-row:last-child .mg-sr{border-bottom:none}

.mg-stag{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:3px 9px;border-radius:20px;display:inline-block;margin-bottom:6px}
.mg-stag-r{background:#EFF6FF;color:#1E40AF}
.mg-stag-s{background:#F0FDF4;color:#14532D}
.mg-stag-i{background:var(--vxl);color:#5B21B6}
.mg-stag-e{background:#FFFBEB;color:#78350F}
.mg-stag-l{background:#FEF2F2;color:#7F1D1D}

.mg-sname{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:400;color:var(--char);cursor:pointer;line-height:1.2;margin-bottom:5px}
.mg-sname:hover{color:var(--vm)}
.mg-sobj{font-size:13.5px;color:var(--body);font-weight:300;line-height:1.6;margin-bottom:10px}

.mg-stog{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--vb)}
.mg-stog-ic{transition:transform .2s;display:inline-block;font-style:normal;font-size:14px}

.mg-sbody{overflow:hidden;max-height:0;transition:max-height .38s ease}
.mg-sbody.mg-open{max-height:700px}

.mg-sdetail{padding:18px 0 4px;border-top:1px solid var(--border);margin-top:12px}
.mg-sdetail p{font-size:14px;line-height:1.85;color:var(--body);font-weight:300;margin-bottom:16px}

.mg-dlv-label{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.mg-dlvs{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
.mg-dlv{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--body);font-weight:400;line-height:1.55}
.mg-dlv-dot{width:18px;height:18px;border-radius:50%;background:var(--vxl);border:1.5px solid var(--bv);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0}
.mg-dlv-dot svg{width:8px;height:8px}

.mg-gate{font-size:13px;color:var(--body);line-height:1.7;padding:12px 16px;background:var(--vxl);border-left:3px solid var(--vb);border-radius:0 6px 6px 0;margin-top:4px}
.mg-gate strong{font-weight:600;color:var(--v)}

/* WHY SECTION */
.mg-why{background:var(--v);padding:72px 28px}
.mg-why-inner{max-width:820px;margin:0 auto;text-align:center}
.mg-why-kicker{font-size:10px;font-weight:600;letter-spacing:.2em;color:#c4b5fd;text-transform:uppercase;margin-bottom:14px}
.mg-why h2{font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:300;color:#fff;margin-bottom:8px}
.mg-why h2 em{font-style:italic;color:#c4b5fd}
.mg-why-sub{font-size:14px;font-weight:300;color:rgba(255,255,255,0.5);margin-bottom:48px;line-height:1.7}
.mg-why-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:48px}
.mg-wc{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-top:3px solid #c4b5fd;border-radius:8px;padding:28px 22px;text-align:left}
.mg-wc-n{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:300;color:#c4b5fd;line-height:1;margin-bottom:10px}
.mg-wc-h{font-size:14px;font-weight:600;color:#fff;margin-bottom:10px}
.mg-wc-b{font-size:13px;font-weight:300;color:rgba(255,255,255,0.55);line-height:1.75}
.mg-stats{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid rgba(255,255,255,0.12);border-radius:8px;overflow:hidden}
.mg-stat{padding:28px;text-align:center;border-right:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04)}
.mg-stat:last-child{border-right:none}
.mg-stat-n{display:block;font-family:'Cormorant Garamond',serif;font-size:44px;font-weight:300;color:#c4b5fd}
.mg-stat-l{display:block;font-size:11px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:6px}

/* CTA */
.mg-cta-sec{background:#fff;padding:72px 28px;border-top:1px solid var(--border)}
.mg-cta-inner{max-width:520px;margin:0 auto;text-align:center}
.mg-cta-kicker{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--vm);margin-bottom:16px}
.mg-cta-sec h2{font-family:'Cormorant Garamond',serif;font-size:36px;font-weight:300;font-style:italic;color:var(--char);margin-bottom:12px}
.mg-cta-sec p{font-size:15px;font-weight:300;color:var(--muted);line-height:1.8;margin-bottom:32px}
.mg-cta-actions{display:flex;flex-direction:column;align-items:center;gap:12px}
.mg-cta-primary{padding:14px 44px;background:var(--v);color:#fff;border:none;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;border-radius:6px;transition:background .2s}
.mg-cta-primary:hover{background:var(--vm)}
.mg-cta-links{display:flex;gap:20px;align-items:center;flex-wrap:wrap;justify-content:center}
.mg-cta-link{font-size:13px;font-weight:500;color:var(--vm);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:5px}
.mg-cta-link:hover{color:var(--v)}

/* CONTACT STRIP */
.mg-contact-strip{background:var(--vxl);border-top:1px solid var(--bv);border-bottom:1px solid var(--bv);padding:18px 28px;display:flex;align-items:center;justify-content:center;gap:36px;flex-wrap:wrap}
.mg-cs-item{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:400;color:var(--vm)}
.mg-cs-icon{opacity:.7;flex-shrink:0}

/* FOOTER */
.mg-foot{background:var(--off);border-top:1px solid var(--border);padding:36px 28px;text-align:center}
.mg-foot-logo{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:10px}
.mg-foot-wm{font-size:13px;font-weight:600;letter-spacing:.18em;color:var(--char);text-transform:uppercase}
.mg-foot-wsub{font-size:9px;letter-spacing:.25em;color:var(--vm);text-transform:uppercase;margin-top:2px}
.mg-foot-rule{width:36px;height:2px;background:var(--v);margin:14px auto;border-radius:2px}
.mg-foot p{font-size:11px;color:var(--muted);line-height:1.9;letter-spacing:.04em}

@media(max-width:640px){
  .mg-ob-shell{grid-template-columns:1fr}.mg-ob-l{display:none}
  .mg-hero h1{font-size:34px}.mg-why-cards,.mg-stats{grid-template-columns:1fr}
  .mg-frow{grid-template-columns:1fr}.mg-stat{border-right:none;border-bottom:1px solid rgba(255,255,255,0.1)}
}
`;

/* ============================================================
   COMPONENT
   ============================================================ */
export default function MagsmenBrandJourney() {
  // screen: 'onboard' | 'main'
  const [screen, setScreen] = useState("onboard");

  // form state
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState<keyof typeof STAGE_MAP | "">("");
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // personalised data once journey begins
  const [data, setData] = useState(null); // IND[industry] entry
  const [personName, setPersonName] = useState("");
  const [personBrand, setPersonBrand] = useState("");
  const [personStage, setPersonStage] = useState<keyof typeof STAGE_MAP | "">("");
  const mailtoRef = useRef("");

  // toast
  const [toast, setToast] = useState({ show: false, msg: "" });
  const toastTimer = useRef(null);

  // stage filter + open/closed accordion state
  const [filter, setFilter] = useState("all");
  const [openStages, setOpenStages] = useState({});

  const showToast = useCallback((msg) => {
    setToast({ show: true, msg });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast({ show: false, msg: "" }), 6000);
  }, []);

  const begin = useCallback(async () => {
    const nm = name.trim();
    const em = email.trim();
    const ind = industry;
    const stg = stage;

    if (!nm) {
      setError("Please enter your name.");
      return;
    }
    if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!ind) {
      setError("Please select your industry.");
      return;
    }
    if (!stg) {
      setError("Please select your current stage.");
      return;
    }
    setError("");

    const br = brand.trim() || "your brand";
    const d = IND[ind] || IND.consulting;

    const subj = encodeURIComponent("New Lead via Brand Journey Tool: " + nm + " | " + br);
    const body = encodeURIComponent(
      "Name: " + nm +
      "\nBrand: " + br +
      "\nEmail: " + em +
      "\nPhone: " + (phone || "Not provided") +
      "\nIndustry: " + d.label +
      "\nBusiness Stage: " + (STAGE_MAP[stg] || stg) +
      "\n\nThis person used the personalised brand journey tool on the Magsmen website and consented to be contacted."
    );
    mailtoRef.current = "mailto:connect@magsmen.com?subject=" + subj + "&body=" + body;

    // Submit the lead to Formspree. The journey still unlocks even if this
    // fails (e.g. offline), so a flaky network never blocks the person from
    // seeing their personalised content — we just surface a quiet error.
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nm,
          brand: br,
          email: em,
          phone: phone || "Not provided",
          industry: d.label,
          businessStage: STAGE_MAP[stg] || stg,
          consent: consent ? "Yes" : "No",
          _subject: "New Lead via Brand Journey Tool: " + nm + " | " + br,
        }),
      });

      if (res.ok) {
        if (consent) {
          showToast(nm + ", your details have been sent to the Magsmen team. They will be in touch soon.");
        }
      } else {
        showToast("We couldn't reach our server, but here is your brand journey. Please contact Magsmen directly using the details below.");
      }
    } catch (err) {
      showToast("We couldn't reach our server, but here is your brand journey. Please contact Magsmen directly using the details below.");
    } finally {
      setSubmitting(false);
    }

    setData(d);
    setPersonName(nm);
    setPersonBrand(br);
    setPersonStage(stg);
    setScreen("main");
    window.scrollTo(0, 0);
  }, [name, email, industry, stage, brand, phone, consent, showToast]);

  const toggleStage = useCallback((n) => {
    setOpenStages((prev) => ({ ...prev, [n]: !prev[n] }));
  }, []);

  const ctaGo = useCallback(() => {
    if (mailtoRef.current) window.location.href = mailtoRef.current;
    else window.location.href = "mailto:connect@magsmen.com";
  }, []);

  const stgTxt = STAGE_TXT[personStage] || "";

  return (
    <div className="mg-root">
      <style>{CSS}</style>

      {/* TOAST */}
      <div className={"mg-toast" + (toast.show ? " show" : "")}>
        <div className="mg-t-ic">✓</div>
        <div className="mg-t-tx">{toast.msg || "Details sent to Magsmen"}</div>
      </div>

      {screen === "onboard" && (
        <div className="mg-s-ob">
          <div className="mg-ob-shell">
            <div className="mg-ob-l">
              <div className="mg-ob-logo">
               
                <div>
                  <img src={magsmenlogohorizontal} alt="Magsmen" className="w-52" />
                   {/* <LogoMark stroke1="#c4b5fd" stroke2="rgba(196,181,253,0.5)" size={28} />
                  <div className="mg-ob-wm">Magsmen</div>
                  <div className="mg-ob-wsub">Brand Consultants</div> */}
                </div>
              </div>
              <h2>
                Your brand journey,
                <br />
                <em>personalised for you</em>
              </h2>
              <div className="mg-ob-rule"></div>
              <p>
                Tell us about yourself and we will walk you through exactly how Magsmen builds
                brands in your industry, in plain language with no jargon.
              </p>
              <div className="mg-ob-points">
                <div className="mg-ob-pt">
                  <div className="mg-ob-pt-dot">13</div>
                  <div className="mg-ob-pt-txt">Stages explained in your context</div>
                </div>
                <div className="mg-ob-pt">
                  <div className="mg-ob-pt-dot">✓</div>
                  <div className="mg-ob-pt-txt">Every deliverable, clearly listed</div>
                </div>
                <div className="mg-ob-pt">
                  <div className="mg-ob-pt-dot">✓</div>
                  <div className="mg-ob-pt-txt">Industry specific language throughout</div>
                </div>
              </div>
            </div>

            <div className="mg-ob-r">
              <h3>Let us personalise this for you</h3>
              <p>Takes less than a minute. No commitment required.</p>

              <div className="mg-frow">
                <div className="mg-fgrp">
                  <label>Your first name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Priya"
                    maxLength={32}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mg-fgrp">
                  <label>Brand or business name</label>
                  <input
                    type="text"
                    placeholder="e.g. Aura Organics"
                    maxLength={40}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
              </div>

              <div className="mg-fgrp">
                <label>Email address *</label>
                <input
                  type="email"
                  placeholder="you@yourbusiness.com"
                  maxLength={80}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mg-frow">
                <div className="mg-fgrp">
                  <label>Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    maxLength={20}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mg-fgrp">
                  <label>Your industry *</label>
                  <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option value="">Select industry</option>
                    <option value="food">Food and Beverage</option>
                    <option value="fashion">Fashion and Apparel</option>
                    <option value="wellness">Health, Wellness and Beauty</option>
                    <option value="tech">Technology and SaaS</option>
                    <option value="education">Education and Training</option>
                    <option value="retail">Retail and E-commerce</option>
                    <option value="realestate">Real Estate and Construction</option>
                    <option value="finance">Finance and Fintech</option>
                    <option value="hospitality">Hospitality and Tourism</option>
                    <option value="manufacturing">Manufacturing and Industrial</option>
                    <option value="consulting">Consulting and Professional Services</option>
                    <option value="healthcare">Healthcare and Pharma</option>
                    <option value="media">Media and Entertainment</option>
                  </select>
                </div>
              </div>

              <div className="mg-fgrp">
                <label>Where are you right now? *</label>
                <select value={stage} onChange={(e) => setStage(e.target.value)}>
                  <option value="">Select one</option>
                  <option value="idea">Still an idea, not yet launched</option>
                  <option value="early">Early stage, launched but not branded properly</option>
                  <option value="grown">Growing and need a stronger brand to scale</option>
                  <option value="reposition">Established and need to reposition or rebrand</option>
                </select>
              </div>

              <div className="mg-consent-row">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span>
                  I am happy for Magsmen to receive my details and reach out to discuss building my
                  brand. <a href="#">Privacy policy</a>.
                </span>
              </div>

              <div className="mg-ob-err">{error}</div>
              <button className="mg-ob-btn" onClick={begin} disabled={submitting}>
                {submitting ? "Sending..." : "Show me my brand journey"}
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === "main" && data && (
        <div className="mg-s-main">
          <nav className="mg-nav">
            <div className="mg-nav-l">
              <img src={newlogoblack} alt="Magsmen Logo" className="w-14"  />
              {/* <LogoMark stroke1="#7C3AED" stroke2="#c4b5fd" size={20} />
              <span className="mg-nav-wm">Magsmen</span> */}
              <span className="mg-nav-div"></span>
              <span className="mg-nav-who">{personName}'s brand journey</span>
            </div>
            <button
              className="mg-nav-btn"
              onClick={() =>
                document.getElementById("mg-cta-sec")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start the conversation
            </button>
          </nav>

          <section className="mg-hero">
            <div className="mg-hero-inner">
              <div className="mg-hero-badge">
                <span className="mg-hero-dot"></span>
                <span>{data.label} · Personalised for {personName}</span>
              </div>
              <h1>
                How Magsmen will build
                <br />
                <em>{personBrand}</em>
              </h1>
              <p className="mg-hero-name">A personalised journey for {personName} · {data.label}</p>
              <div className="mg-hero-rule"></div>
              <p className="mg-hero-sub">
                13 stages. No shortcuts. Here is exactly what each one means for a{" "}
                {data.label.toLowerCase()} business {stgTxt}.
              </p>
            </div>
          </section>

          <section className="mg-intro">
            <div className="mg-intro-inner">
              <div className="mg-intro-kicker">Brand Creation · {data.label}</div>
              <h2>Before we design anything, we understand everything.</h2>
              <p>{data.intro}</p>
              <p>
                Most agencies start with a logo. Magsmen starts with strategy. The two are
                connected but one must always come before the other. That sequence is what makes a
                brand hold.
              </p>
            </div>
          </section>

          <div className="mg-phases">
            <span className="mg-ph-lbl">View by phase</span>
            <button
              className={"mg-pill mg-pill-all" + (filter !== "all" ? " mg-dim" : "")}
              onClick={() => setFilter("all")}
            >
              All 13 stages
            </button>
            <button
              className={"mg-pill mg-pill-r" + (filter !== "all" && filter !== "r" ? " mg-dim" : "")}
              onClick={() => setFilter("r")}
            >
              Research
            </button>
            <button
              className={"mg-pill mg-pill-s" + (filter !== "all" && filter !== "s" ? " mg-dim" : "")}
              onClick={() => setFilter("s")}
            >
              Strategy
            </button>
            <button
              className={"mg-pill mg-pill-i" + (filter !== "all" && filter !== "i" ? " mg-dim" : "")}
              onClick={() => setFilter("i")}
            >
              Identity
            </button>
            <button
              className={"mg-pill mg-pill-e" + (filter !== "all" && filter !== "e" ? " mg-dim" : "")}
              onClick={() => setFilter("e")}
            >
              Execution
            </button>
            <button
              className={"mg-pill mg-pill-l" + (filter !== "all" && filter !== "l" ? " mg-dim" : "")}
              onClick={() => setFilter("l")}
            >
              Launch
            </button>
          </div>

          <div className="mg-stages-wrap">
            {STAGES.map((s) => {
              const note = data.notes[s.n] || s.obj;
              const isOpen = !!openStages[s.n];
              const hidden = filter !== "all" && s.p !== filter;
              return (
                <div
                  key={s.n}
                  className={"mg-stage-row" + (hidden ? " mg-hidden" : "")}
                >
                  <div className="mg-sl">
                    <div
                      className={"mg-snum mg-" + s.p + (isOpen ? " mg-open" : "")}
                      onClick={() => toggleStage(s.n)}
                    >
                      {s.n}
                    </div>
                  </div>
                  <div className="mg-sr">
                    <span className={"mg-stag mg-stag-" + s.p}>{s.pl}</span>
                    <div className="mg-sname" onClick={() => toggleStage(s.n)}>
                      {s.nm}
                    </div>
                    <div className="mg-sobj">{s.obj}</div>
                    <button className="mg-stog" onClick={() => toggleStage(s.n)}>
                      <em className="mg-stog-ic">{isOpen ? "×" : "+"}</em>&nbsp;What this means for
                      you
                    </button>
                    <div className={"mg-sbody" + (isOpen ? " mg-open" : "")}>
                      <div className="mg-sdetail">
                        <p>{note}</p>
                        <div className="mg-dlv-label">What Magsmen produces at this stage</div>
                        <div className="mg-dlvs">
                          {(DLVS[s.n] || []).map((d, idx) => (
                            <div className="mg-dlv" key={idx}>
                              <div className="mg-dlv-dot">
                                <svg viewBox="0 0 10 10" fill="none">
                                  <polyline
                                    points="2,5.5 4.5,8 8,3"
                                    stroke="#7C3AED"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mg-gate">
                          <strong>Stage gate: </strong>
                          {s.gate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="mg-why">
            <div className="mg-why-inner">
              <div className="mg-why-kicker">Why this process exists</div>
              <h2>
                Built to protect <em>your investment</em>
              </h2>
              <p className="mg-why-sub">
                Three principles that protect your investment in {personBrand}.
              </p>
              <div className="mg-why-cards">
                {WHY_CARDS.map((c) => (
                  <div className="mg-wc" key={c.n}>
                    <div className="mg-wc-n">{c.n}</div>
                    <div className="mg-wc-h">{c.h}</div>
                    <div className="mg-wc-b">{c.b}</div>
                  </div>
                ))}
              </div>
              <div className="mg-stats">
                <div className="mg-stat">
                  <span className="mg-stat-n">13</span>
                  <span className="mg-stat-l">Stages. Zero optional.</span>
                </div>
                <div className="mg-stat">
                  <span className="mg-stat-n">12 to 20</span>
                  <span className="mg-stat-l">Weeks. Full engagement.</span>
                </div>
                <div className="mg-stat">
                  <span className="mg-stat-n">100%</span>
                  <span className="mg-stat-l">Structured. No guesswork.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mg-cta-sec" id="mg-cta-sec">
            <div className="mg-cta-inner">
              <div className="mg-cta-kicker">Ready when you are</div>
              <h2>Let us build {personBrand} the right way.</h2>
              <p>
                Start with a single conversation. Magsmen will ask the right questions, give you
                honest answers, and tell you exactly what building {personBrand} would look like as
                a full engagement.
              </p>
              <div className="mg-cta-actions">
                <button className="mg-cta-primary" onClick={ctaGo}>
                  Start a conversation with Magsmen
                </button>
                <div className="mg-cta-links">
                  <button
                    className="mg-cta-link"
                    onClick={() =>
                      window.open(
                        "https://wa.me/919044910449?text=Hi+Magsmen,+I+went+through+your+brand+creation+framework+and+would+like+to+have+a+conversation.",
                        "_blank"
                      )
                    }
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    className="mg-cta-link"
                    onClick={() =>
                      (window.location.href =
                        "mailto:connect@magsmen.com?subject=Brand Creation Enquiry")
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,12 2,6" />
                    </svg>
                    Email us
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="mg-contact-strip">
            <span className="mg-cs-item">
              <svg
                className="mg-cs-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +91 90449 10449
            </span>
            <span className="mg-cs-item">
              <svg
                className="mg-cs-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              connect@magsmen.com
            </span>
            <span className="mg-cs-item">
              <svg
                className="mg-cs-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              www.magsmen.com
            </span>
          </div>

          <footer className="mg-foot">
            <div className="mg-foot-logo">
              
              <div>
                <img src={newlogoblack} alt="Magsmen Logo" className="w-14 mx-auto"  />
                {/* <LogoMark stroke1="#7C3AED" stroke2="#c4b5fd" size={22} />
                <div className="mg-foot-wm">Magsmen</div>
                <div className="mg-foot-wsub">Brand Consultants</div> */}
              </div>
            </div>
            <div className="mg-foot-rule"></div>
            <p>
              Strategy · Branding · Growth
              <br />
              © 2025 Grofession Innovations Private Limited. All rights reserved.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}