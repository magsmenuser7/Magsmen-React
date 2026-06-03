import React, { FormEvent, useState } from 'react';
import {
    Presentation,
    Target,
    AlertTriangle,
    ShieldCheck,
    Info,
    Quote,
    CheckCircle2,
    XCircle,
    Star,
    Phone,
    Mail,
    Globe,
    HelpCircle,
    Menu,
    ChevronRight,
    Loader2,
    AlertCircle,
    LayoutDashboard
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// Local user data type for simple auth handling
type UserData = {
    email: string;
    name?: string;
    password?: string;
};





const TABS = [
    { id: 'exec-brief', label: 'Executive Brief', sub: 'Overview', icon: Presentation },
    { id: 'imperatives', label: 'Strategic Imperatives', sub: 'Core Decisions', icon: Target },
    { id: 'risk', label: 'Risk & Exposure', sub: 'Financial Impact', icon: AlertTriangle },
    { id: 'solution', label: 'The Magsmen Solution', sub: 'The Proposal', icon: ShieldCheck },
    { id: 'about', label: 'About Magsmen', sub: 'Firm Profile', icon: Info }
];

const ExecBrief = () => (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8 md:mb-10">
            <span className="text-[#8041F9] font-bold tracking-wider text-xs md:text-sm uppercase">01 / The Situation</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight leading-tight">Strategy without governance is just a document.</h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-3xl leading-relaxed">
                Magsmen identified Sorvet's foundational gaps: generic positioning, unclear distribution, unproven differentiation, invisible digital presence, and unsustainable unit economics. The path to address them is clear, but bridging the gap requires an embedded partnership. Magsmen have introduced a new capability: the <strong className="text-slate-800">Magsmen Intelligent Council</strong>, a structured advisory layer that brings industry leaders and domain specialists into the client relationship at the moments that require it most. That development is directly relevant to Sorvet's situation.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Context (Data)</h3>
                <p className="text-lg md:text-xl font-semibold text-slate-800 mb-3">The ice cream category in India is hyper-active.</p>
                <p className="text-slate-600 text-sm">Noto is backed. Hocco is capitalised. Amul continues rapid expansion. The window for Sorvet to establish a defensible position is currently open.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Problem (Why it matters)</h3>
                <p className="text-lg md:text-xl font-semibold text-slate-800 mb-3">Every week of indecision narrows your market window.</p>
                <p className="text-slate-600 text-sm">Sorvet is facing high-stakes decisions (model commitment, pricing, retail agreements). Making these decisions without seasoned counsel exposes the brand to catastrophic equity loss and trapped working capital.</p>
            </div>
        </div>

        <div className="mt-6 bg-slate-900 p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
            <h3 className="text-xs md:text-sm font-bold text-[#8041F9] uppercase tracking-wider mb-2 relative z-10">The Insight & Implication (So What?)</h3>
            <p className="text-xl md:text-2xl font-medium text-white mb-4 leading-snug relative z-10">What Sorvet needs now is not more strategy documents. It needs a senior mind in its corner as every major decision gets made - <span className="text-[#8041F9] underline decoration-[#8041F9]/50 underline-offset-4">before</span> it gets made, not after.</p>
            <p className="text-slate-400 text-sm relative z-10">Action Required: Shift from a project-based diagnostic to the <strong className="text-white">Magsmen Advisory Partner</strong> model, bringing industry leaders and domain specialists into the relationship at the exact moments of execution.</p>
        </div>
    </div>
);

const Imperatives = () => (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8 md:mb-10">
            <span className="text-[#8041F9] font-bold tracking-wider text-xs md:text-sm uppercase">02 / The Decisions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight leading-tight">The 6 High-Stakes Imperatives</h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-3xl">These are the core decision categories Sorvet will face in the next 12 months. Every single one carries massive exposure if made in isolation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {/* Imperative 1 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-800">1. Consumer Identification & Gen Z</h3>
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Habit Formation</span>
                </div>
                <div className="text-sm text-slate-600 space-y-2 flex-grow">
                    <p>Market trends show that Gen-Z is spending 75% of their salary on clean food and health. Considering this aspect, Sorvet Ice Cream needs strong positioning and product discovery.</p>
                    <p>Simultaneously, the secondary audience (the affordable segment) must be captured through volume-driven accessibility without diluting this core brand promise.</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> If an Indian brand compromises on quality or lacks transparent communication, Gen Z will walk away, and the secondary market will only buy on discount. Legacy equity will not save you.</p>
                </div>
            </div>

            {/* Imperative 2 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-slate-800">2. Positioning & Transparency</h3>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Positioning: Where your brand sits in the customer's mind.</p>
                    </div>
                    <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Brand Equity</span>
                </div>
                <div className="text-sm text-slate-600 space-y-2 flex-grow">
                    <p>Establishing distinctive identity. Using radical transparency as a pillar to combat category-wide adulteration trust issues. It is not what you do, but what they feel.</p>
                    <p>Gen-Z is increasingly vocal about globally standard brands where a brand intentionally communicates clear, clean, and in-depth products. There is no excuse as there was earlier; if it is an Indian brand, there is no compromise on product quality. They are more ruthless than any generation before. Legacy brands image doesn't impact them.</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> Trust is the currency of food brands. Transparency is your differentiator, not just a label requirement.</p>
                </div>
            </div>

            {/* Imperative 3 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-800">3. Dual-Layer Distribution Strategy</h3>
                    <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Channel Strategy</span>
                </div>
                <p className="text-sm text-slate-600 flex-grow">Creating two distinct communication approaches. One focuses on margins, trust, and steady supply for retailers and trade partners. The other focuses on creating brand pull and desire directly for the end consumers.</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> Misaligned messaging fails twice: you either lose the shelf space or you fail to drive off-the-shelf purchases.</p>
                </div>
            </div>

            {/* Imperative 4 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-base md:text-lg font-bold text-slate-800">4. Pricing & Positioning Hold</h3>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Price Anchor: The initial price a customer associates with you.</p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Margin Defense</span>
                </div>
                <p className="text-sm text-slate-600 flex-grow">Resisting retailer pressure for price reductions. Protecting the premium positioning of the brand. Once lowered, it is nearly impossible to raise without losing trust.</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> One concession becomes a permanent price anchor. Two years of premium positioning unravels in one negotiation.</p>
                </div>
            </div>

            {/* Imperative 5 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-800">5. Retailer Agreements & Brand Protection</h3>
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Legal / IP</span>
                </div>
                <p className="text-sm text-slate-600 flex-grow">Impulse retail runs on retailer power. Signing agreements without brand protection clauses covering name use, freezer allocation, and product standards exposes the brand.</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> Sign blind, and your brand is diluted before you build the leverage to protect it. Exposure: Legal and margin risk.</p>
                </div>
            </div>

            {/* Imperative 6 */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base md:text-lg font-bold text-slate-800">6. Influencer & Brand Associations</h3>
                    <span className="bg-pink-50 text-pink-600 px-2 py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap ml-2">Reputation Risk</span>
                </div>
                <p className="text-sm text-slate-600 flex-grow">Early associations define category perception. A wrong endorsement, a brand that later faces controversy, or a personality whose audience does not match your positioning, creates lasting damage.</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-800"><span className="text-[#8041F9]">So What?</span> Damage here is slow and expensive to undo. Every association needs scrutiny before commitment.</p>
                </div>
            </div>

        </div>
    </div>
);

const RiskMatrix = () => (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <span className="text-[#8041F9] font-bold tracking-wider text-xs md:text-sm uppercase">03 / The Financial Reality</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight leading-tight">The Cost of Absence</h2>
                <p className="text-base md:text-lg text-slate-600 mt-4 max-w-2xl">Most founders calculate what advisory costs. They rarely calculate what the absence of advisory costs.</p>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-xl text-left md:text-right w-full md:w-auto">
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mb-1">Cost of Mid-Level Brand Manager</p>
                <p className="text-xl md:text-2xl font-bold">₹15L - 20L <span className="text-sm font-normal text-slate-400">/ yr</span></p>
            </div>
        </div>

        {/* Mobile-friendly table alternative: Card based layout for small screens, Table for md+ */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-5 text-sm font-bold text-slate-800 uppercase tracking-wider w-1/4">The Situation</th>
                        <th className="p-5 text-sm font-bold text-red-600 uppercase tracking-wider w-1/3 border-l border-slate-200 bg-red-50/30">Without Advisory (The Risk)</th>
                        <th className="p-5 text-sm font-bold text-[#8041F9] uppercase tracking-wider w-1/3 border-l border-slate-200 bg-[#8041F9]/5">With Magsmen (The Mitigation)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr>
                        <td className="p-5 font-semibold text-slate-800">Wrong Pricing Decision</td>
                        <td className="p-5 text-sm text-slate-600 border-l border-slate-200">First discount sets permanent price anchor. Premium positioning eroded within weeks.</td>
                        <td className="p-5 text-sm text-slate-800 font-medium border-l border-slate-200">Every pricing decision reviewed against positioning before it goes public.</td>
                    </tr>
                    <tr>
                        <td className="p-5 font-semibold text-slate-800">Retailer Agreement w/o Clauses</td>
                        <td className="p-5 text-sm text-slate-600 border-l border-slate-200">Brand name misused. Freezer space lost to competitors. Legal recovery is slow and costly.</td>
                        <td className="p-5 text-sm text-slate-800 font-medium border-l border-slate-200">Advisory Plus reviews agreements before signing. Brand protection clauses built in.</td>
                    </tr>
                    <tr>
                        <td className="p-5 font-semibold text-slate-800">Wrong Influencer or Association</td>
                        <td className="p-5 text-sm text-slate-600 border-l border-slate-200">Controversy damages brand by association. Early loyal customers disengage.</td>
                        <td className="p-5 text-sm text-slate-800 font-medium border-l border-slate-200">Every endorsement is reviewed before commitment. The Intelligent Council provides industry context.</td>
                    </tr>
                    <tr>
                        <td className="p-5 font-semibold text-slate-800">Wrong Hire in Brand Role</td>
                        <td className="p-5 text-sm text-slate-600 border-l border-slate-200">Communication tone shifts. Positioning undone over months. Team lacks direction.</td>
                        <td className="p-5 text-sm text-slate-800 font-medium border-l border-slate-200">Hiring brief reviewed. Role defined against what the brand <em className="text-[#8041F9]">actually</em> needs.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Mobile Card View for Risk Table */}
        <div className="md:hidden space-y-4">
            {[
                { title: "Wrong Pricing Decision", risk: "First discount sets permanent price anchor. Premium positioning eroded within weeks.", mit: "Every pricing decision reviewed against positioning before it goes public." },
                { title: "Retailer Agreement w/o Clauses", risk: "Brand name misused. Freezer space lost to competitors. Legal recovery is slow and costly.", mit: "Advisory Plus reviews agreements before signing. Brand protection clauses built in." },
                { title: "Wrong Influencer or Association", risk: "Controversy damages brand by association. Early loyal customers disengage.", mit: "Every endorsement is reviewed before commitment. The Intelligent Council provides industry context." },
                { title: "Wrong Hire in Brand Role", risk: "Communication tone shifts. Positioning undone over months. Team lacks direction.", mit: "Hiring brief reviewed. Role defined against what the brand actually needs." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-50 p-3 border-b border-slate-200">
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                    </div>
                    <div className="p-3 bg-red-50/30 border-b border-slate-100">
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Risk</p>
                        <p className="text-sm text-slate-600">{item.risk}</p>
                    </div>
                    <div className="p-3 bg-[#8041F9]/5">
                        <p className="text-xs font-bold text-[#8041F9] uppercase tracking-wider mb-1">Mitigation</p>
                        <p className="text-sm text-slate-800 font-medium">{item.mit}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8 flex items-start gap-4 p-5 md:p-6 bg-slate-800 text-white rounded-xl">
            <Info className="w-8 h-8 text-[#8041F9] flex-shrink-0 mt-1" />
            <div>
                <p className="font-medium text-base md:text-lg">The Ultimate "So What?"</p>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">Quality strategic counsel is not an expense. It is protection from expensive mistakes. One wrong decision costs exponentially more than a full year of advisory.</p>
            </div>
        </div>
    </div>
);

const Solution = () => (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8 md:mb-10 text-center">
            <span className="text-[#8041F9] font-bold tracking-wider text-xs md:text-sm uppercase">04 / Partnership Architecture</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight leading-tight">Three Ways to Work With Magsmen</h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Sorvet is at the point of signing significant agreements carrying brand risk. The base tier is insufficient. We recommend the <strong className="text-slate-900">Advisory Partner Plus</strong>.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:opacity-70 hover:opacity-100 transition-opacity order-2 md:order-1">
                <h3 className="text-lg font-bold text-slate-800">Advisory Partner</h3>
                <p className="text-3xl font-black text-slate-900 mt-4">₹8,00,000 <span className="text-sm font-normal text-slate-500">/yr</span></p>
                <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">₹2,192 per day</p>

                <ul className="mt-8 space-y-4 flex-1">
                    <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Business & Brand advisory</li>
                    <li className="flex items-center gap-3 text-sm text-slate-400 line-through"><XCircle className="w-5 h-5 text-slate-300" /> Legal advisory</li>
                    <li className="flex items-center gap-3 text-sm text-slate-400 line-through"><XCircle className="w-5 h-5 text-slate-300" /> Document review</li>
                    <li className="flex items-center gap-3 text-sm text-slate-400 line-through"><XCircle className="w-5 h-5 text-slate-300" /> Intelligent Council access</li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500">
                    Response: 24 hours<br />Structure: ₹4L + ₹4L
                </div>
            </div>

            {/* Tier 2 (Recommended) */}
            <div className="bg-slate-900 rounded-2xl border-2 border-[#8041F9] p-6 md:p-8 flex flex-col relative md:-translate-y-4 shadow-2xl order-1 md:order-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8041F9] text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase shadow-lg whitespace-nowrap">Recommended</div>

                <h3 className="text-xl font-bold text-white mt-2 md:mt-0">Advisory Partner Plus</h3>
                <p className="text-4xl font-black text-white mt-4">₹10,00,000 <span className="text-sm font-normal text-slate-400">/yr + GST</span></p>
                <p className="text-sm text-[#8041F9] font-medium tracking-wide mt-1">₹2,740 per day (₹82,200/mo)</p>

                <ul className="mt-8 space-y-4 flex-1">
                    <li className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-[#8041F9]" /> Business & Brand advisory</li>
                    <li className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-[#8041F9]" /> Legal advisory</li>
                    <li className="flex items-center gap-3 text-sm text-slate-200"><CheckCircle2 className="w-5 h-5 text-[#8041F9]" /> Up to 6 document reviews/yr</li>
                    <li className="flex items-start gap-3 text-sm text-white font-semibold bg-white/10 p-2 -mx-2 rounded"><Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" /> <span className="pt-0.5">Intelligent Council access</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-slate-300">
                    Response: 1 activation/yr (24h)<br />Structure: ₹5L + ₹5L (Month 6)
                </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:opacity-70 hover:opacity-100 transition-opacity order-3">
                <h3 className="text-lg font-bold text-slate-800">Strategic Partner</h3>
                <p className="text-3xl font-black text-slate-900 mt-4">₹12,50,000 <span className="text-sm font-normal text-slate-500">/yr</span></p>
                <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">₹3,425 per day</p>

                <ul className="mt-8 space-y-4 flex-1">
                    <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Business, Brand & Legal</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Unlimited document review</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Intelligent Council access</li>
                    <li className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 className="w-5 h-5 text-green-500" /> Direct, priority access</li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100 text-sm text-slate-500">
                    Response: Priority (Same day)<br />Structure: ₹6L + ₹6.5L
                </div>
            </div>
        </div>

        {/* Intelligent Council Spotlight */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-slate-900">The Intelligent Council</h3>
                    <p className="text-sm text-slate-600 mt-2">Curated group of industry leaders, academic advisors, and domain specialists.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['Retail & Organised Trade', 'IP & Legal', 'Real Estate', 'Agri & Food', 'Healthcare & Pharma', 'Education & Institutional', 'Manufacturing', 'Technology & Digital', 'Academic Advisors'].map((tag, i) => (
                            <span key={i} className="text-[10px] md:text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="md:w-2/3 md:border-l border-slate-200 md:pl-8">
                    <p className="text-base md:text-lg text-slate-800 italic">"The Council does not give generic advice. It gives the insight of people who have sat on the other side of your most consequential tables and know exactly how those decisions are made."</p>

                    <div className="mt-6 bg-slate-50 p-4 md:p-5 rounded-xl border border-slate-200">
                        <p className="text-[10px] md:text-xs font-bold text-[#8041F9] uppercase tracking-wider mb-2">Case in Point - Retail & Organised Trade</p>
                        <p className="font-semibold text-slate-900">Uma Maheswara Rao - Chairman, GV Mall</p>
                        <p className="text-sm text-slate-600 mt-1">Group turnover exceeding ₹3,000 crore. Decades of experience in organised retail, mall economics, vendor negotiation, and category placement. When Sorvet faces a mall entry or a distribution play in organised retail, he is available to join the advisory conversation for specific intelligence from the buyer's perspective.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* ROI & Next Steps */}
        <div className="mt-8 bg-[#8041F9]/10 border border-[#8041F9]/20 rounded-xl p-6 text-center shadow-sm">
            <p className="text-base md:text-lg text-slate-800">ROI if one wrong decision is prevented: <span className="font-black text-xl md:text-2xl text-[#8041F9] ml-2">4x to 33x return</span></p>
        </div>

        <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">How to Begin</h3>
            <p className="text-sm text-slate-600 mb-6">There is no separate onboarding period. Magsmen already understands Sorvet's diagnostic and competitive context. The engagement starts the moment the decision is made.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative pt-8">
                    <span className="absolute top-0 left-5 -translate-y-1/2 bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">01</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Confirm the Tier</h4>
                    <p className="text-xs text-slate-600">Advisory Partner Plus is recommended. We walk through decisions coming in the next 90 days before commitment.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative pt-8">
                    <span className="absolute top-0 left-5 -translate-y-1/2 bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">02</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Sign Agreement</h4>
                    <p className="text-xs text-slate-600">A one-page engagement letter confirming scope, response commitments, and payment terms. Clear and direct.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative pt-8">
                    <span className="absolute top-0 left-5 -translate-y-1/2 bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">03</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">First Call (48 Hrs)</h4>
                    <p className="text-xs text-slate-600">A structured priority review mapping every live decision against the strategic foundation already built.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative pt-8">
                    <span className="absolute top-0 left-5 -translate-y-1/2 bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">04</span>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Monthly Cadence</h4>
                    <p className="text-xs text-slate-600">Regular reviews tracking brand performance and outcomes. Ad hoc advisory available between reviews.</p>
                </div>
            </div>
        </div>

        {/* Final Strategic Question */}
        <div className="mt-12 bg-slate-900 text-white p-6 md:p-12 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
                <HelpCircle className="w-64 h-64 md:w-96 md:h-96" />
            </div>
            <h3 className="text-[#8041F9] font-bold tracking-wider text-xs md:text-sm uppercase mb-4 relative z-10">One question before you decide</h3>
            <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mb-6 relative z-10">Look at the next 90 days. Write down every decision Sorvet will make about its brand, distribution, agreements, and team that you are not yet fully certain about. The distributor you are about to approach. The retailer agreement on the table. The flavour portfolio you are considering. The hire you are planning.</p>
            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-3xl relative z-10">Add up what happens if two of those decisions go wrong. Not in money alone, in time, momentum, and the market perception that forms before you can correct it.</p>
            <div className="border-l-4 border-[#8041F9] pl-4 md:pl-6 py-2 relative z-10">
                <p className="text-xl md:text-3xl font-bold text-white leading-tight">Now compare that number to ₹2,740 per day.<br /><span className="text-[#8041F9]">That is the answer.</span></p>
            </div>
            <p className="mt-8 text-sm md:text-base text-slate-400 max-w-2xl relative z-10">Magsmen Advisory Partner is for founders who have built something real and want to make sure every next decision compounds what they have built rather than diluting it. Sorvet has built something real.</p>
        </div>
    </div>
);

const About = () => (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">Clear Vision. Calm Approach. Bold Moves.</h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-3xl mx-auto">We don't just build brands. We build brands that perform. We define the strategic direction, build the brand system, and enable implementation. This is where strategy becomes everyday practice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">The Magsmen Ecosystem</h3>
                <p className="text-[10px] md:text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">One ecosystem. Multiple solutions. One direction.</p>
                <ul className="space-y-4">
                    <li>
                        <strong className="text-slate-800 text-sm">Magsmen Brand Consultants</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Strategy and brand consulting (the core).</p>
                    </li>
                    <li>
                        <strong className="text-slate-800 text-sm">MIBBS (mibbs.ai)</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Budget Smarter, Grow Faster. AI-powered brand budget allocation tool.</p>
                    </li>
                    <li>
                        <strong className="text-slate-800 text-sm">InTalks Podcast</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Leaders, Legends & Lessons. 90M+ views, 30+ episodes, 100K+ community.</p>
                    </li>
                    <li>
                        <strong className="text-slate-800 text-sm">SanStrategies</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Brand Strategy, Business Intelligence, Legal & Compliance education.</p>
                    </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[10px] md:text-xs text-slate-500">Parent Company: <strong className="text-slate-800">Grofessors Innovations Pvt Ltd</strong></p>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-800">
                <h3 className="text-lg font-bold border-b border-slate-700 pb-3 mb-4 text-[#8041F9]">Where Magsmen Sits</h3>
                <p className="text-sm text-slate-300 leading-relaxed">Magsmen sits between the brand and all its execution partners. <strong className="text-white">We are the strategy layer.</strong></p>
                <p className="text-sm text-slate-300 leading-relaxed mt-2">Beneath us, specialized agencies handle:</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">A: Advertising</div>
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">B: PR</div>
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">C: Software/Web/IT</div>
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">D: Digital Marketing</div>
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">E: Product/Legal</div>
                    <div className="bg-white/10 p-2 rounded text-[10px] md:text-xs">F: Offline Media</div>
                </div>
                <p className="text-sm font-bold text-[#8041F9] mt-6 text-center">Magsmen orchestrates these.</p>
            </div>
        </div>

        {/* Mobile-friendly table alternative for Services */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">Core Services</h3>
        <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-12">
            <table className="w-full text-left text-sm bg-white">
                <thead className="bg-slate-50 text-slate-600">
                    <tr>
                        <th className="p-4 font-bold border-b">Service</th>
                        <th className="p-4 font-bold border-b">Description</th>
                        <th className="p-4 font-bold border-b whitespace-nowrap">Timeframe</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr><td className="p-4 font-semibold">Brand Consulting</td><td className="p-4 text-xs">Full brand strategy - positioning, differentiation, competitive strategy.</td><td className="p-4 text-xs font-medium">Ongoing</td></tr>
                    <tr><td className="p-4 font-semibold">Personal Brand</td><td className="p-4 text-xs">Image assessment, CSR, challenge management for influencers/CEOs.</td><td className="p-4 text-xs font-medium">Custom</td></tr>
                    <tr><td className="p-4 font-semibold">Corporate Rebranding</td><td className="p-4 text-xs">Values, vision, mission realignment. Fresh, relevant identity.</td><td className="p-4 text-xs font-medium">Project-based</td></tr>
                    <tr><td className="p-4 font-semibold">Brand Expresso</td><td className="p-4 text-xs">90-day brand transformation - identity, presence, and market standout.</td><td className="p-4 text-xs font-medium">90 days</td></tr>
                    <tr><td className="p-4 font-semibold">Brand Creation</td><td className="p-4 text-xs">Complete brand from zero - naming, identity, pricing strategy, launch.</td><td className="p-4 text-xs font-medium">90 days</td></tr>
                    <tr><td className="p-4 font-semibold">LinkFluence</td><td className="p-4 text-xs">LinkedIn consulting for CEOs, brands, NGOs, companies.</td><td className="p-4 text-xs font-medium">Ongoing</td></tr>
                    <tr><td className="p-4 font-semibold">One-Time Consulting</td><td className="p-4 text-xs">Brand check, find the problem, give the right solution.</td><td className="p-4 text-xs font-medium">One-time</td></tr>
                </tbody>
            </table>
        </div>

        {/* Mobile Services List */}
        <div className="md:hidden space-y-3 mb-10">
            {[
                { n: 'Brand Consulting', d: 'Full strategy - positioning, differentiation.', t: 'Ongoing' },
                { n: 'Personal Brand', d: 'Image assessment, CSR for CEOs/Influencers.', t: 'Custom' },
                { n: 'Brand Expresso', d: '90-day transformation & market standout.', t: '90 days' },
                { n: 'Brand Creation', d: 'Complete brand from zero.', t: '90 days' },
                { n: 'One-Time Consulting', d: 'Brand check, find problem, give solution.', t: 'One-time' }
            ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-800 text-sm">{s.n}</h4>
                        <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-600">{s.t}</span>
                    </div>
                    <p className="text-xs text-slate-600">{s.d}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Market Proof</h3>
                <div className="flex gap-4 mb-6">
                    <div className="bg-[#8041F9]/10 border border-[#8041F9]/20 text-[#8041F9] px-4 py-3 rounded-lg text-center flex-1">
                        <p className="text-2xl font-black flex items-center justify-center">4.9<Star className="w-5 h-5 fill-amber-500 text-amber-500 ml-1 pb-0.5" /></p>
                        <p className="text-[10px] md:text-xs font-bold uppercase mt-1 text-slate-800">Google (133 Reviews)</p>
                    </div>
                    <div className="bg-[#8041F9]/10 border border-[#8041F9]/20 text-[#8041F9] px-4 py-3 rounded-lg text-center flex-1">
                        <p className="text-2xl font-black">75%</p>
                        <p className="text-[10px] md:text-xs font-bold uppercase mt-1 text-slate-800">Willing to Refer</p>
                    </div>
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-2">Brands Created</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">Navyora, AshvaDheer, Richfelix, Flavroots, LVL UP, Svatri Ghee, The Pure Ghee & Co, Melo Weds, Nutown, Romont, Quinq, MEYU, AURAVE, Alanati Ruchulu, Garthapuri, Palette.</p>

                <h4 className="font-bold text-slate-800 text-sm mb-2 mt-4">Industry Collaborations</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">AP Non-Resident Telugu Society (NRT), ASCI, Disney+ Hotstar, VIT-AP University, Indian Red Cross Society.</p>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Selected Case Studies</h3>
                <ul className="space-y-3">
                    <li className="text-sm"><strong className="text-slate-800 block md:inline">Tenali Double Horse:</strong> Repositioned for pan-India, US market entry.</li>
                    <li className="text-sm"><strong className="text-slate-800 block md:inline">Chakrasiddh:</strong> From elite-only to trusted holistic healing centre.</li>
                    <li className="text-sm"><strong className="text-slate-800 block md:inline">MR Constructions:</strong> Market-leading real estate via experience redesign.</li>
                    <li className="text-sm"><strong className="text-slate-800 block md:inline">Cargill:</strong> Rural brand strategy for Fortune 25 in vannamei feed.</li>
                    <li className="text-sm"><strong className="text-slate-800 block md:inline">LVLUP (GV Mall):</strong> Premium fashion for Tier 3/4 cities.</li>
                </ul>
            </div>
        </div>

        {/* Footer / Contact */}
        <div className="bg-slate-900 text-white p-6 md:p-12 rounded-2xl text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">When clarity leads, brands win.</h2>
            <p className="text-sm md:text-base text-slate-400 mb-8">To begin, contact Magsmen directly.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm">
                <a href="tel:+919044910449" className="flex items-center gap-2 hover:text-[#8041F9] transition-colors"><Phone className="w-5 h-5" /> +91 90449 10449</a>
                <a href="mailto:connect@magsmen.com" className="flex items-center gap-2 hover:text-[#8041F9] transition-colors"><Mail className="w-5 h-5" /> connect@magsmen.com</a>
                <a href="https://www.magsmen.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#8041F9] transition-colors"><Globe className="w-5 h-5" /> www.magsmen.com</a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 text-[10px] md:text-xs text-slate-500 flex flex-col md:flex-row justify-center gap-2 md:gap-4">
                <span>HQ: Brodipet, Guntur, AP</span>
                <span className="hidden md:inline">•</span>
                <span>Corp: Madhapur, Hyderabad, TS</span>
                <span className="hidden md:inline">•</span>
                <span>Global: Rowville, VIC, AUS</span>
            </div>
        </div>
    </div>
);

export default function SorvetAdvisoryProposal() {
    const [activeTab, setActiveTab] = useState('exec-brief');


    const renderContent = () => {
        switch (activeTab) {
            case 'exec-brief': return <ExecBrief />;
            case 'imperatives': return <Imperatives />;
            case 'risk': return <RiskMatrix />;
            case 'solution': return <Solution />;
            case 'about': return <About />;
            default: return <ExecBrief />;
        }
    };




    // Authentication / Registration state
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);



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
        <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 font-sans selection:bg-[#8041F9]/30 selection:text-[#8041F9]">

            {/* Desktop Sidebar */}
            <aside className="w-64 bg-[#0B1120] text-white flex-col justify-between hidden md:flex border-r border-slate-800 shadow-xl z-20 relative">
                <div>
                    <div className="p-6 pb-2">
                        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">MAGSMEN</h1>
                        <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Strategic Analysis</p>
                    </div>

                    <nav className="mt-6 flex flex-col gap-2 px-4">
                        {TABS.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${isActive ? 'bg-[#8041F9] text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                                    <div className="text-left">
                                        <span className="block">{tab.label}</span>
                                        <span className={`block text-[9px] mt-0.5 ${isActive ? 'text-white/70' : 'text-slate-500'}`}>{tab.sub}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-6 border-t border-slate-800 text-[10px] text-slate-500">
                    <p className="font-semibold text-slate-300 mb-1">Clear Vision. Calm Approach. Bold Moves.</p>
                    <p>Confidential & Proprietary</p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

                {/* Mobile Header */}
                <header className="md:hidden bg-[#0B1120] text-white p-4 flex justify-between items-center z-20 shadow-md">
                    <div>
                        <h1 className="text-lg font-bold tracking-tight">MAGSMEN</h1>
                        <p className="text-[9px] text-slate-400 uppercase tracking-widest">Sorvet Advisory</p>
                    </div>
                </header>

                {/* Mobile Horizontal Scroll Nav */}
                <div className="md:hidden bg-[#1E293B] overflow-x-auto flex whitespace-nowrap p-2 gap-2 z-20 shadow-inner border-b border-slate-800 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${isActive ? 'bg-[#8041F9] text-white shadow-sm' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Scrollable Content Container */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 pb-24 scroll-smooth">
                    {renderContent()}
                </div>
            </main>

            {/* Global styles for hiding scrollbar specifically on the mobile nav (Fallback for Tailwind inline) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
        </div>
    );
}