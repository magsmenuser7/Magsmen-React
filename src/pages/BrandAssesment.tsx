import React, { useState } from 'react';
import { ChevronDown, Check, Mail, Phone, Globe } from 'lucide-react';
 import emailjs from '@emailjs/browser';

interface IndustryData {
  label: string;
  intro: string;
  notes: Record<string, string>;
}
 
interface StageData {
  n: string;
  p: string;
  pl: string;
  nm: string;
  obj: string;
  gate: string;
}
 
interface DeliverableData {
  [key: string]: string[];
}
 
const IND: Record<string, IndustryData> = {
  food: {
    label: "Food and Beverage",
    intro: "In food and beverage, everyone is competing for shelf space and attention at the same time. The brands that win do not win on taste alone. They win on story, trust, and positioning. Before Magsmen designs a single label or chooses a colour for your brand, the team needs to understand exactly where your product sits in the market and why a consumer should choose it over the alternatives right next to it.",
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
      "13": "30, 60, and 90 days after launch, Magsmen returns to review performance and refine the strategy based on real market feedback."
    }
  },
  fashion: {
    label: "Fashion and Apparel",
    intro: "Fashion is one of the most perception driven industries in the world. A garment is rarely bought for function alone. It is bought for identity, aspiration, and belonging. The brand you build must communicate a world your customer wants to be part of. That world is defined by strategy, not by aesthetic impulse alone.",
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
      "13": "Post launch performance is reviewed and the strategy is adjusted based on what the market is telling you."
    }
  },
  wellness: {
    label: "Health, Wellness and Beauty",
    intro: "Wellness and beauty are trust industries. Customers put these products on their skin, in their bodies, and into their daily rituals. The brands they choose are the ones they believe in, not just the ones they see first. Building that belief requires more than a clean logo and a good ingredient list. It requires a brand positioned with honesty and communicated with complete consistency.",
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
      "13": "Post launch awareness, trial, and retention are tracked and the strategy is refined based on the data."
    }
  },
  tech: {
    label: "Technology and SaaS",
    intro: "In technology, the product is often invisible and the brand is everything a customer can see and feel before they sign up. A SaaS brand that cannot communicate its value clearly and memorably will lose to a competitor that can, even if the product is technically superior. Clarity is the competitive advantage in this category.",
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
      "13": "User data is reviewed and messaging, positioning, or channel strategy is refined based on what is actually working."
    }
  },
  education: {
    label: "Education and Training",
    intro: "Education brands carry extraordinary weight because they carry trust. When a parent enrols a child or a professional invests in a course, they are staking something more than money. They are staking the future. The brand you build must deserve that level of trust and communicate it clearly before the first enrolment decision is made.",
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
      "13": "Enrolment data and brand perception are reviewed and the strategy is refined."
    }
  },
  retail: {
    label: "Retail and E-commerce",
    intro: "Retail is a margin business disguised as a product business. The brands that survive and grow are the ones that build enough emotional pull to justify their price without constant discounting. That pull is not accidental. It is built through clear positioning, a coherent visual identity, and a consistent experience at every customer touchpoint.",
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
      "13": "Sales, retention, and brand recall are tracked and the strategy is refined."
    }
  },
  realestate: {
    label: "Real Estate and Construction",
    intro: "Real estate is one of the highest stakes purchase decisions a person will ever make. The brand attached to a project carries enormous weight. Buyers are not just choosing a property. They are choosing who to trust with the most significant investment of their lives. That trust is built or destroyed by the brand before a single site visit happens.",
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
      "13": "Inquiry volume, conversion rates, and brand recall are tracked and the strategy is adjusted."
    }
  },
  finance: {
    label: "Finance and Fintech",
    intro: "Financial brands are built on one thing above all else: trust. A customer giving you access to their money needs to believe in you completely before they have any evidence to support that belief. That belief is built by brand. Clarity, consistency, and a compelling story are not optional in this industry. They are the product itself.",
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
      "13": "Customer acquisition, trust metrics, and NPS are tracked and the strategy is refined."
    }
  },
  hospitality: {
    label: "Hospitality and Tourism",
    intro: "Hospitality is memory making at scale. Every guest interaction, from booking to checkout, is a brand moment. The brands that earn loyalty are the ones where the promise made before arrival matches and ideally exceeds the experience delivered on the ground. That alignment begins with brand strategy, not with service training.",
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
      "13": "Occupancy, review scores, and brand recall are tracked and the strategy is refined."
    }
  },
  manufacturing: {
    label: "Manufacturing and Industrial",
    intro: "Manufacturing brands are underbranded by default, which creates significant opportunity for the first company in a category to build a brand that buyers remember and specify by name. Moving from commodity supplier to trusted brand is one of the most commercially significant transformations a manufacturing business can make.",
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
      "13": "Specification wins, distributor engagement, and buyer brand recall are tracked."
    }
  },
  consulting: {
    label: "Consulting and Professional Services",
    intro: "In professional services, the brand is inseparable from the people delivering the work. Clients are not buying a product they can evaluate before purchase. They are buying confidence in your judgment. That confidence is built through perception: how you are positioned, how you communicate, and how consistently you show up across every interaction.",
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
      "13": "Enquiry quality, conversion rates, and target client brand recall are tracked and the strategy is refined."
    }
  },
  healthcare: {
    label: "Healthcare and Pharma",
    intro: "Healthcare brands operate in the most trust critical environment that exists. Patients, caregivers, and medical professionals need to believe in your brand before they will act on it. The consequence of a weak brand is not just a missed sale. It is a missed patient. Building that trust requires clarity, consistency, and compliance in equal measure.",
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
      "13": "Patient acquisition, retention, and satisfaction scores are tracked and the strategy is refined."
    }
  },
  media: {
    label: "Media and Entertainment",
    intro: "In media and entertainment, the brand is the content and the content is the brand. Audiences follow creators and platforms they believe in. Belief is built through a consistent identity, a clear point of view, and a voice that is unmistakably yours. Building that identity requires the same strategic rigour as building any other kind of brand.",
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
      "13": "Audience growth, engagement rates, and brand recall are tracked and the strategy is refined."
    }
  }
};
 
const STAGES: StageData[] = [
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
  { n: "13", p: "l", pl: "Launch", nm: "We review what the market tells us and adjust", obj: "30, 60, and 90 days after launch, we return to review, analyse, and make the strategic adjustments your brand needs to keep growing.", gate: "This is the stage most brands skip and it is precisely what separates brands that hold from brands that drift." }
];
 
const DLVS: DeliverableData = {
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
  "13": ["Post Launch Audit Reports at 30, 60, and 90 days", "Adjustment Confirmation Log", "Perception Performance Analysis"]
};
 
const BrandAssesment: React.FC = () => {
  const [showMain, setShowMain] = useState(false);
  const [expandedStage, setExpandedStage] = useState<string | null>(null);
  const [filterPhase, setFilterPhase] = useState<string>('all');
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });
 
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    phone: '',
    industry: '',
    stage: '',
    consent: false
  });
 
  const [errors, setErrors] = useState<string>('');
  const [userData, setUserData] = useState({ name: '', brand: '', industry: '', stage: '' });
 
  const showToastMessage = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 6000);
  };
 
  const handleBegin = async () => {
  const newErrors: string[] = [];

  if (!formData.name.trim()) newErrors.push('Please enter your name.');
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    newErrors.push('Please enter a valid email address.');
  if (!formData.industry) newErrors.push('Please select your industry.');
  if (!formData.stage) newErrors.push('Please select your current stage.');

  if (newErrors.length > 0) {
    setErrors(newErrors[0]);
    return;
  }

  try {
    // 🔥 EMAILJS CALL
    await emailjs.send(
      'service_kg4syyc',     // replace
      'template_lr0rx5d',    // replace
      {
        name: formData.name,
        brand: formData.brand || 'N/A',
        email: formData.email,
        phone: formData.phone || 'N/A',
        industry: formData.industry,
        stage: formData.stage
      },
      'tQ8edXl0r_tbtMiT2'      // replace
    );

    // UI updates after success
    setUserData({
      name: formData.name,
      brand: formData.brand || 'your brand',
      industry: formData.industry,
      stage: formData.stage
    });

    showToastMessage(`${formData.name}, your details have been sent successfully.`);
    setShowMain(true);
    setErrors('');
    window.scrollTo(0, 0);

  } catch (error) {
    console.error('EmailJS Error:', error);
    setErrors('Something went wrong. Please try again.');
  }
};
 
  const toggleStage = (stageNum: string) => {
    setExpandedStage(expandedStage === stageNum ? null : stageNum);
  };
 
  const getPhaseColor = (phase: string) => {
    const colors: Record<string, string> = {
      r: 'text-blue-700',
      s: 'text-green-700',
      i: 'text-purple-700',
      e: 'text-amber-700',
      l: 'text-red-700'
    };
    return colors[phase] || 'text-purple-700';
  };
 
  const getPhaseTagColor = (phase: string) => {
    const colors: Record<string, string> = {
      r: 'bg-blue-50 text-blue-700 border-blue-200',
      s: 'bg-green-50 text-green-700 border-green-200',
      i: 'bg-purple-50 text-purple-700 border-purple-200',
      e: 'bg-amber-50 text-amber-700 border-amber-200',
      l: 'bg-red-50 text-red-700 border-red-200'
    };
    return colors[phase] || 'bg-purple-50 text-purple-700';
  };
 
  const getCircleColor = (phase: string) => {
    const colors: Record<string, string> = {
      r: 'border-blue-200 text-blue-700 group-hover:bg-blue-700 group-hover:text-white',
      s: 'border-green-200 text-green-700 group-hover:bg-green-700 group-hover:text-white',
      i: 'border-purple-200 text-purple-700 group-hover:bg-purple-700 group-hover:text-white',
      e: 'border-amber-200 text-amber-700 group-hover:bg-amber-700 group-hover:text-white',
      l: 'border-red-200 text-red-700 group-hover:bg-red-700 group-hover:text-white'
    };
    return colors[phase] || 'border-purple-200 text-purple-700';
  };
 
  const industryLabel = IND[formData.industry]?.label || formData.industry;

const stgMap: Record<string, string> = {
  idea: 'Still an idea, not yet launched',
  early: 'Early stage, launched but not branded properly',
  growing: 'Growing and need a stronger brand to scale',
  established: 'Established and need to reposition or rebrand'

};
const stageLabel = stgMap[formData.stage] || formData.stage;

const industryData = IND[userData.industry] || {
  label: userData.industry || 'Your industry',
  intro: '',
  notes: {}
};
 
  const getStageText = () => {
    const stageTexts: Record<string, string> = {
      idea: 'entering the market from scratch',
      early: 'in its early stages',
      grown: 'ready to scale',
      reposition: 'repositioning for the next chapter'
    };
    return stageTexts[userData.stage] || '';
  };
 
  if (showMain) {
    return (
      <div className="min-h-screen bg-white">
        {/* Toast */}
        {toast.show && (
          <div className="fixed top-5 right-5 z-50 bg-purple-800 rounded-lg p-3.5 flex items-center gap-2.5 shadow-lg max-w-xs animate-in fade-in">
            <div className="w-5.5 h-5.5 rounded-full bg-white bg-opacity-15 flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
              ✓
            </div>
            <div className="text-xs text-white leading-relaxed">{toast.message}</div>
          </div>
        )}
 
        {/* Nav */}
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-7 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-32 mt-4">
            <img src="/assets/blacklogohorizontal.png"/>
            </div>
            <div className="w-px h-4 bg-gray-200 mx-2.5"></div>
            <span className="text-sm italic font-light text-purple-700">{userData.name}'s brand journey</span>
          </div>
          <button onClick={() => document.getElementById('cta-sec')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-1.5 border-1.5 border-purple-800 text-purple-800 text-xs font-bold tracking-widest uppercase rounded cursor-pointer hover:bg-purple-800 hover:text-white transition-all">
            Start the conversation
          </button>
        </nav>
 
        {/* Hero */}
        <section className="bg-white py-16 px-7 text-center border-b border-gray-200 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-purple-800 rounded-t-md"></div>
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-purple-900 border-opacity-15 rounded-full bg-purple-50 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-700 animate-pulse"></div>
              <span className="text-xs font-medium tracking-widest text-purple-900 uppercase">{industryData.label} · Personalised for {userData.name}</span>
            </div>
            <h1 className="font-serif text-5xl font-light text-gray-900 leading-tight mb-2.5">
              How Magsmen will build<br/><em className="italic text-purple-800">{userData.brand}</em>
            </h1>
            <p className="font-serif text-lg italic font-light text-gray-500 mb-5">A personalised journey for {userData.name} · {industryData.label}</p>
            <div className="w-9 h-0.5 bg-purple-800 rounded mx-auto mb-5"></div>
            <p className="text-base font-light text-gray-500 leading-relaxed max-w-xl mx-auto">
              13 stages. No shortcuts. Here is exactly what each one means for a {industryData.label.toLowerCase()} business {getStageText()}.
            </p>
          </div>
        </section>
 
        {/* Intro */}
        <section className="bg-gray-50 py-14 px-7 border-b border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest text-purple-900 uppercase mb-3.5">Brand Creation · {industryData.label}</div>
            <h2 className="font-serif text-3xl font-normal text-gray-900 mb-4">Before we design anything, we understand everything.</h2>
            <p className="text-base font-light text-gray-700 leading-relaxed mb-3">{industryData.intro}</p>
            <p className="text-base font-light text-gray-700 leading-relaxed">Most agencies start with a logo. Magsmen starts with strategy. The two are connected but one must always come before the other. That sequence is what makes a brand hold.</p>
          </div>
        </section>
 
        {/* Phases Filter */}
        <div className="sticky top-14 z-40 bg-white px-7 py-4.5 flex flex-wrap gap-2 border-b border-gray-200">
          <span className="text-xs font-bold tracking-widest mt-5 mb-5 text-gray-500 uppercase mr-1">View by phase</span>
          <button onClick={() => setFilterPhase('all')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 'all' ? 'bg-purple-800 border-purple-800 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'}`}>
            All 13 stages
          </button>
          <button onClick={() => setFilterPhase('r')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 'r' ? 'bg-blue-700 border-blue-700 text-white' : 'bg-blue-50 border-blue-200 text-blue-700 hover:border-blue-300'}`}>
            Research
          </button>
          <button onClick={() => setFilterPhase('s')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 's' ? 'bg-green-700 border-green-700 text-white' : 'bg-green-50 border-green-200 text-green-700 hover:border-green-300'}`}>
            Strategy
          </button>
          <button onClick={() => setFilterPhase('i')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 'i' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-purple-50 border-purple-200 text-purple-700 hover:border-purple-300'}`}>
            Identity
          </button>
          <button onClick={() => setFilterPhase('e')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 'e' ? 'bg-amber-700 border-amber-700 text-white' : 'bg-amber-50 border-amber-200 text-amber-700 hover:border-amber-300'}`}>
            Execution
          </button>
          <button onClick={() => setFilterPhase('l')} className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-pointer border-1.5 transition-all ${filterPhase === 'l' ? 'bg-red-700 border-red-700 text-white' : 'bg-red-50 border-red-200 text-red-700 hover:border-red-300'}`}>
            Launch
          </button>
        </div>
 
        {/* Stages */}
        <div className="bg-white py-16 px-5 max-w-3xl mx-auto">
          {STAGES.map(stage => (
            <div key={stage.n} className={`grid grid-cols-[64px_1fr] gap-0 transition-opacity ${filterPhase !== 'all' && filterPhase !== stage.p ? 'opacity-10 pointer-events-none' : 'opacity-100'}`}>
              <div className="flex flex-col items-center relative pt-5">
                <div className={`group w-10 h-10 rounded-full border-1.5 flex items-center justify-center text-xs font-bold cursor-pointer transition-all ${getCircleColor(stage.p)} ${expandedStage === stage.n ? `${stage.p === 'r' ? 'bg-blue-700' : stage.p === 's' ? 'bg-green-700' : stage.p === 'i' ? 'bg-purple-700' : stage.p === 'e' ? 'bg-amber-700' : 'bg-red-700'} text-white` : ''}`} onClick={() => toggleStage(stage.n)}>
                  {stage.n}
                </div>
                {stage.n !== '13' && <div className="absolute left-1/2 top-16 bottom-0 w-px bg-gray-200 transform -translate-x-0.5"></div>}
              </div>
 
              <div className="py-3.5 px-5 pb-6 border-b border-gray-200 last:border-b-0">
                <div className={`text-xs font-bold tracking-widest uppercase px-2 py-0.75 rounded-full inline-block mb-1.5 ${getPhaseTagColor(stage.p)}`}>
                  {stage.pl}
                </div>
                <div className={`font-serif text-xl font-normal text-gray-900 cursor-pointer leading-snug mb-1 hover:${getPhaseColor(stage.p)}`} onClick={() => toggleStage(stage.n)}>
                  {stage.nm}
                </div>
                <div className="text-sm text-gray-700 font-light leading-relaxed mb-2.5">{stage.obj}</div>
 
                <button onClick={() => toggleStage(stage.n)} className={`bg-none border-none p-0 cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-purple-700 hover:text-purple-900`}>
                  <span className={`inline-block transition-transform ${expandedStage === stage.n ? 'rotate-90' : ''}`}>
                    {expandedStage === stage.n ? '×' : '+'}
                  </span>
                  What this means for you
                </button>
 
                {expandedStage === stage.n && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm leading-relaxed text-gray-700 font-light mb-4">
                      {industryData.notes[stage.n] || stage.obj}
                    </p>
 
                    <div className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2.5">What Magsmen produces at this stage</div>
                    <div className="flex flex-col gap-2 mb-4">
                      {(DLVS[stage.n] || []).map((dlv, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-normal leading-relaxed">
                          <div className="w-4.5 h-4.5 rounded-full bg-purple-50 border-1.5 border-purple-900 border-opacity-15 flex items-center justify-center flex-shrink-0 mt-0">
                            <svg className="w-2 h-2" viewBox="0 0 10 10" fill="none"><polyline points="2,5.5 4.5,8 8,3" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span>{dlv}</span>
                        </div>
                      ))}
                    </div>
 
                    <div className="text-sm text-gray-700 font-light leading-relaxed p-4 bg-purple-50 border-l-3 border-purple-700 rounded-r">
                      <strong className="font-semibold text-purple-800">Stage gate: </strong>
                      {stage.gate}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
 
        {/* Why Section */}
        <section className="bg-purple-800 py-20 px-7">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-3.5">Why this process exists</div>
            <h2 className="font-serif text-4xl font-light text-white mb-2">
              Built to protect <em className="italic text-purple-300">your investment</em>
            </h2>
            <p className="text-sm font-light text-white text-opacity-50 mb-12 leading-relaxed">Three principles that make this process different.</p>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { n: '01', h: 'No stage is optional', b: 'Every stage in this process protects something specific. Stage 02 prevents strategy built on assumption. Stage 08 prevents trademark conflict after launch. The sequence is the quality control and skipping any part of it creates a vulnerability in the brand.' },
                { n: '02', h: 'Strategy before identity', b: 'Your logo is built in Stage 07. Your positioning is built in Stage 04. A logo designed before a strategy exists is decoration, not branding. At Magsmen, identity is always a translation of strategy and never a substitute for it.' },
                { n: '03', h: 'Every stage has a gate', b: 'No stage advances until the previous one is confirmed complete. This single discipline prevents the most common brand failure: building on an unconfirmed foundation. The gate is what makes the whole system trustworthy.' }
              ].map(card => (
                <div key={card.n} className="bg-purple-700 bg-opacity-6 border border-white border-opacity-10 border-t-4 border-t-purple-300 rounded-lg p-7 text-left ">
                  <div className="font-serif text-4xl font-light text-white leading-none mb-2.5">{card.n}</div>
                  <div className="text-sm font-bold text-white mb-2.5">{card.h}</div>
                  <div className="text-sm font-light text-white text-opacity-55 leading-relaxed">{card.b}</div>
                </div>
              ))}
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-3 border border-white border-opacity-15 rounded-lg overflow-hidden">
              <div className="px-7 py-7 text-center border-r border-white border-opacity-10 bg-purple-700 bg-opacity-4 last:border-r-0">
                <span className="block font-serif text-5xl font-light text-purple-300">13</span>
                <span className="block text-xs font-medium tracking-widest text-white text-opacity-35 uppercase mt-1.5">Stages. Zero optional.</span>
              </div>
              <div className="px-7 py-7 text-center border-r border-white border-opacity-10 bg-purple-700 bg-opacity-4 last:border-r-0">
                <span className="block font-serif text-5xl font-light text-purple-300">12 to 20</span>
                <span className="block text-xs font-medium tracking-widest text-white text-opacity-35 uppercase mt-1.5">Weeks. Full engagement.</span>
              </div>
              <div className="px-7 py-7 text-center bg-purple-700 bg-opacity-4">
                <span className="block font-serif text-5xl font-light text-purple-300">100%</span>
                <span className="block text-xs font-medium tracking-widest text-white text-opacity-35 uppercase mt-1.5">Structured. No guesswork.</span>
              </div>
            </div>
          </div>
        </section>
 
        {/* CTA Section */}
        <section id="cta-sec" className="bg-white py-20 px-7 border-t border-gray-200">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest text-purple-900 uppercase mb-4">Ready when you are</div>
            <h2 className="font-serif text-4xl font-light italic text-gray-900 mb-3">Let us build {userData.brand} the right way.</h2>
            <p className="text-base font-light text-gray-500 leading-relaxed mb-8">
              Start with a single conversation. Magsmen will ask the right questions, give you honest answers, and tell you exactly what building {userData.brand} would look like as a full engagement.
            </p>
 
            <div className="flex flex-col items-center gap-3">
              <button onClick={() => window.location.href = 'mailto:connect@magsmen.com'} className="px-11 py-3.5 bg-purple-800 text-white text-xs font-bold tracking-widest uppercase rounded cursor-pointer hover:bg-purple-900 transition-all">
                Start a conversation with Magsmen
              </button>
              <div className="flex gap-5 flex-wrap justify-center">
                <button onClick={() => window.open('https://wa.me/919044910449?text=Hi+Magsmen,+I+went+through+your+brand+creation+framework+and+would+like+to+have+a+conversation.', '_blank')} className="text-sm font-medium text-purple-900 bg-none border-none cursor-pointer flex items-center gap-1.5 hover:text-purple-800">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </button>
                <button onClick={() => window.location.href = 'mailto:connect@magsmen.com?subject=Brand Creation Enquiry'} className="text-sm font-medium text-purple-900 bg-none border-none cursor-pointer flex items-center gap-1.5 hover:text-purple-800">
                  <Mail width={14} height={14} />
                  Email us
                </button>
              </div>
            </div>
          </div>
        </section>
 
        {/* Contact Strip */}
        <div className="bg-purple-50 border-y border-purple-900 border-opacity-15 py-4.5 px-7 flex flex-wrap gap-9 items-center justify-center">
          <span className="flex items-center gap-2 text-sm font-normal text-purple-900">
            <Phone width={16} height={16} className="opacity-70" />
            +91 90449 10449
          </span>
          <span className="flex items-center gap-2 text-sm font-normal text-purple-900">
            <Mail width={16} height={16} className="opacity-70" />
            connect@magsmen.com
          </span>
          <span className="flex items-center gap-2 text-sm font-normal text-purple-900">
            <Globe width={16} height={16} className="opacity-70" />
            www.magsmen.com
          </span>
        </div>
 
        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-9 px-7 text-center">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            
            <img className="h-16 w-50" src="/assets/blacklogohorizontal.png"/>
          </div>
          <div className="w-9 h-0.5 bg-purple-800 rounded mx-auto my-3.5"></div>
          <p className="text-xs text-gray-500 leading-relaxed tracking-wider">
            Strategy · Branding · Growth<br/>© 2025 Grofession Innovations Private Limited. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-8 px-4">
      {/* Toast */}
      {toast.show && (
        <div className="fixed top-5 right-5 z-50 bg-purple-800 rounded-lg p-3.5 flex items-center gap-2.5 shadow-lg max-w-xs animate-in fade-in">
          <div className="w-5.5 h-5.5 rounded-full bg-white bg-opacity-15 flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
            ✓
          </div>
          <div className="text-xs text-white leading-relaxed">{toast.message}</div>
        </div>
      )}
 
      {/* Onboarding Shell */}
<div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

  {/* LEFT */}
  <div className="bg-[#5B0A91] p-16 flex flex-col justify-center relative overflow-hidden hidden md:flex">
    
    {/* circles */}
    <div className="absolute -top-24 right-[-80px] w-[320px] h-[320px] rounded-full bg-white/10"></div>
    <div className="absolute -bottom-24 left-[-60px] w-[260px] h-[260px] rounded-full bg-white/10"></div>

    {/* logo */}
    <div className="flex items-center gap-3 mb-12">

      <div className="h-20 w-80 ml-[-10px] mb-[-40px]">
      <img src="/assets/Artboard 1 copy 272x-8 (1).png"/>
      </div>
    </div>

    {/* heading */}
    <h2 className="text-[44px] leading-tight text-white font-serif mb-3">
      Your brand journey,
      <br />
      <span className="italic text-purple-300">personalised for you</span>
    </h2>

    <div className="w-8 h-[1px] bg-white/40 mb-6"></div>

    {/* desc */}
    <p className="text-white/70 text-[15px] leading-relaxed mb-10 max-w-md">
      Tell us about yourself and we will walk you through exactly how Magsmen builds brands in your industry, in plain language with no jargon.
    </p>

    {/* bullets */}
    <div className="space-y-5 text-white/80 text-sm">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 text-xs text-purple-300">13</span>
        <p>Stages explained in your context</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 text-xs text-purple-300">✓</span>
        <p>Every deliverable, clearly listed</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 text-xs text-purple-300">✓</span>
        <p>Industry specific language throughout</p>
      </div>
    </div>
  </div>

  {/* RIGHT */}
  <div className="bg-[#F5F5F7] p-14 flex flex-col justify-center">

    <h3 className="text-xl font-semibold text-gray-900 mb-1">
      Let us personalise this for you
    </h3>
    <p className="text-gray-500 text-sm mb-8">
      Takes less than a minute. No commitment required.
    </p>

    <div className="space-y-6">

      {/* row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
            Your first name *
          </label>
          <input
            type="text"
            placeholder="e.g. Priya"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full h-[48px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
          />
        </div>

        <div>
          <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
            Brand or business name
          </label>
          <input
            type="text"
            placeholder="e.g. Aura Organics"
            value={formData.brand}
            onChange={(e) => setFormData({...formData, brand: e.target.value})}
            className="w-full h-[48px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
          />
        </div>
      </div>

      {/* email */}
      <div>
        <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
          Email address *
        </label>
        <input
          type="email"
          placeholder="you@yourbusiness.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full h-[48px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
        />
      </div>

      {/* row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full h-[48px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
          />
        </div>

        <div>
          <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
            Your industry *
          </label>
          <select
  value={formData.industry}
  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
>
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

      {/* stage */}
      <div>
        <label className="block text-[11px] tracking-[0.15em] text-[#6C2BD9] font-semibold uppercase mb-2">
          Where are you right now? *
        </label>
        <select
  value={formData.stage}
  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
  className="w-full h-[52px] px-4 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:border-[#6C2BD9]"
>
  <option value="">Select one</option>
  <option value="idea">Still an idea, not yet launched</option>
  <option value="early">Early stage, launched but not branded properly</option>
  <option value="growing">Growing and need a stronger brand to scale</option>
  <option value="established">Established and need to reposition or rebrand</option>
</select>
      </div>

      {/* checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          className="mt-1 accent-[#6C2BD9]"
        />
        <p className="text-sm text-gray-600 leading-relaxed">
          I am happy for Magsmen to receive my details and reach out to discuss building my brand.{" "}
          <span className="text-[#6C2BD9] underline cursor-pointer">Privacy policy</span>.
        </p>
      </div>

      {/* button */}
      <button
        onClick={handleBegin}
        className="w-full h-[56px] rounded-xl bg-[#5B0A91] text-white text-sm font-semibold tracking-[0.12em] hover:opacity-95 transition"
      >
        SHOW ME MY BRAND JOURNEY
      </button>

    </div>
  </div>
</div>
    </div>
  );
};
 
export default BrandAssesment;