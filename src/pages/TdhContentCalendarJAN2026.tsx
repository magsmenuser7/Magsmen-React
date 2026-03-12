import React, { useState } from 'react';
import logo01 from "/assets/banners/logo-01.svg";  

// --- 1. Styles (Injecting EXACT CSS from HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    body { font-family: 'Inter', sans-serif; background-color: #f9fafb; }
    
    .tab-active { border-bottom: 2px solid #059669; color: #059669; }
    .glass-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }

    /* Overriding text-lg to match HTML max-width constraint */
    .text-lg-constrained {
        font-size: 1.125rem; /* Tailwind text-lg equivalent */
        line-height: 1.75rem;
        max-width: 900px !important;
    }

    @media (max-width: 768px) {
        .tdh-main-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }
        .tdh-mobile-view {
            margin-top: 25px !important;
            margin-bottom: 25px !important;
        }
    }
  `}</style>
);

// --- 2. Data Content (Full Data from HTML) ---

const pulsesData = [
  { date: "Jan 1 (Thu)", type: "Reel", desc: <i>"Year changes, but some tastes stay the same." Fast cuts of a calendar flipping and TDH Urad Dal.</i>, focus: "Urad Dal" },
  { date: "Jan 2 (Fri)", type: "Reel", desc: "Steaming idlis served in a warm morning kitchen. A focus on soft, healthy breakfasts made with love.", focus: "Idly Ravva" },
  { date: "Jan 5 (Mon)", type: "Carousel", desc: '"5 small tips to make idlis softer every time" featuring Urad Gota subtly.', focus: "Urad Gota" },
  { date: "Jan 7 (Wed)", type: "Video", desc: "The Working Mom's Chutney Hack: Roasted Gram (Putnalu) and Peanut quick fix.", focus: "Putnalu" },
  { date: "Jan 9 (Fri)", type: "Reel", desc: "Cinematic slow motion: Cleaning the kitchen, soaking grains in brass vessels. Grandmother's quality check.", focus: "Toor Dal, Urad Gota" },
  { date: "Jan 12 (Mon)", type: "Carousel", desc: "What makes good Urad Gota different? Explaining grain quality and consistency in a homely tone.", focus: "Urad Gota" },
  { date: "Jan 14 (Wed)", type: "Reel", desc: "Sankranti Feast: Banana leaf shot with Rice, Toor Dal Sambar, Garelu, and festive Payasam.", focus: "All Pulses" },
  { date: "Jan 15 (Thu)", type: "Reel", desc: "Kanuma Special: Spicy Chicken Curry or Mutton Pulusu paired with Urad Gota Garelu.", focus: "Urad Gota" },
  { date: "Jan 16 (Fri)", type: "Reel", desc: "Post-festival comfort: Simple Muddapappu (Plain Toor Dal) with Avakaya and Rice.", focus: "Toor Dal" },
  { date: "Jan 19 (Mon)", type: "Carousel", desc: "Simple Pottu Pappu chutney recipe for busy days. Minimal steps, maximum comfort.", focus: "Pottu Pappu" },
  { date: "Jan 21 (Wed)", type: "Reel", desc: "The sound of Tadka: Husked Urad Split spluttering in oil for a vegetable fry.", focus: "Husked Urad Split" },
  { date: "Jan 23 (Fri)", type: "Static", desc: 'Close-ups of grain texture. VO: "What we bring into our kitchen matters."', focus: "All Pulses" },
  { date: "Jan 26 (Mon)", type: "Reel", desc: "Republic Day: Food Flag using Carrot (Orange), Idly/Urad (White), and Chutney (Green).", focus: "All Pulses" },
  { date: "Jan 28 (Wed)", type: "Reel", desc: 'The "Squish Test": Showing the sponge-like bounce of an idli made with TDH Idly Ravva.', focus: "Idly Ravva" },
];

const foodsData = [
  { date: "Jan 1 (Fri)", type: "Reel", desc: "New Year party scene: Friends laughing with Papad crunch and Sunnundalu bites.", focus: "Papad, Sunnundalu" },
  { date: "Jan 5 (Mon)", type: "Static", desc: "Bright background: Rishika Papads next to a gaming controller or TV remote.", focus: "Papad" },
  { date: "Jan 6 (Tue)", type: "Carousel", desc: '"Junk vs. Gem" – Comparing fried chips to the healthy goodness of Sunnundalu.', focus: "Sunnundalu" },
  { date: "Jan 8 (Thu)", type: "Reel", desc: "Unboxing Rishika Sunnundalu. Slow motion break to show ghee and jaggery texture.", focus: "Sunnundalu" },
  { date: "Jan 12 (Mon)", type: "Reel", desc: "Emotional hook: Kids away from home arriving and enjoying TDH Rishika snacks.", focus: "All Foods" },
  { date: "Jan 14 (Wed)", type: "Static", desc: "Bhogi Mantalu (Bonfire) background. Family sharing traditional Sunnundalu treats.", focus: "Sunnundalu" },
  { date: "Jan 15 (Thu)", type: "Reel", desc: "Sankranti vibes: A big family gathering with Papad and Sunnundalu as highlights.", focus: "Papad, Sunnundalu" },
  { date: "Jan 19 (Mon)", type: "Static", desc: 'Relatable meme: "Me trying to work" vs. "My brain thinking about Sunnundalu."', focus: "Sunnundalu" },
  { date: "Jan 21 (Wed)", type: "Reel", desc: "Nostalgia: Kids in a classroom secretly eating Sunnundalu.", focus: "Sunnundalu" },
  { date: "Jan 26 (Mon)", type: "Static", desc: 'Republic Day Special: "Snacks that feel like home." Desi snacks, Indian pride.', focus: "All Foods" },
  { date: "Jan 28 (Wed)", type: "Carousel", desc: "Fun facts about Sunnundalu: Protein, energy, and deep-rooted tradition.", focus: "Sunnundalu" },
  { date: "Jan 30 (Fri)", type: "Reel", desc: 'Engagement Challenge: "Tag the friend who finishes all the Sunnundalu!"', focus: "Sunnundalu" },
];

const milletsData = [
  { date: "Jan 1 (Fri)", type: "Reel", desc: '"New Year. Better Habits." Introducing Millet Noodles/Pasta for a healthy reset.', focus: "Noodles, Pasta" },
  { date: "Jan 2 (Sat)", type: "Reel", desc: "Morning routine: Workout, shower, and a clean Millet Pasta meal.", focus: "Pasta" },
  { date: "Jan 5 (Mon)", type: "Reel", desc: '"Myth: Healthy Food is Boring." Contrast a sad salad with vibrant Schezwan Millet Noodles.', focus: "Noodles, Pasta" },
  { date: "Jan 8 (Fri)", type: "Reel", desc: "Work desk aesthetic: A plate of Millet Cookies and coffee. Focus on the crunch.", focus: "Cookies" },
  { date: "Jan 12 (Mon)", type: "Reel", desc: "Gen Z terrace vibes: Young friends laughing and eating Millet Pasta.", focus: "Pasta" },
  { date: "Jan 14 (Wed)", type: "Reel", desc: "Modern kitchen setup: Millet Pasta baskets with festive sugarcane and marigolds.", focus: "Pasta" },
  { date: "Jan 15 (Thu)", type: "Animation", desc: '"Burn the Bad Habits": Throwing Maida and Palm Oil into Bhogi fire; Millet Marvels rises.', focus: "All Millets" },
  { date: "Jan 19 (Mon)", type: "Carousel", desc: "5-minute healthy dinner ideas for busy youth using Millet Noodles.", focus: "Noodles" },
  { date: "Jan 21 (Wed)", type: "Reel", desc: "Fitness focus: Gym weights followed by nutritional info (Protein/Calcium) of Millets.", focus: "All Millets" },
  { date: "Jan 26 (Mon)", type: "Static", desc: '"Strong Body, Strong Nation." Clean Indian food for modern health pride.', focus: "All Millets" },
  { date: "Jan 28 (Wed)", type: "Carousel", desc: "Fun Millet facts: Visual guide to the versatility of Millets in modern cooking.", focus: "All Millets" },
];

export default function TdhContentCalendarJAN2026() {
  const [activeTab, setActiveTab] = useState<'pulses' | 'foods' | 'millets'>('pulses');

  // Helper to render table based on active data
  const renderTableRows = (data: typeof pulsesData) => {
    return data.map((item, index) => (
      <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap font-medium">{item.date}</td>
        <td className="px-6 py-4">{item.type}</td>
        <td className="px-6 py-4">{item.desc}</td>
        <td className="px-6 py-4 text-emerald-700 font-medium">{item.focus}</td>
      </tr>
    ));
  };

  return (
    <div className="p-4 md:p-8 bg-[#f9fafb] min-h-screen font-sans">
      <GlobalStyles />
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="max-w-6xl mb-8 tdh-main-header flex items-center justify-between">
          <div className="tdh-main-wrapper order-2 lg:order-1">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">TDH Content Calendar Jan 2026</h1>
            <p className="mt-2 text-gray-600 text-lg-constrained">
              This month, we are exploring the intersection of <span className="text-emerald-600 font-semibold">tradition and modern health</span>. 
              From the festive warmth of Sankranti to the resolution driven focus on Millets, our content bridges the gap between heritage flavors and a vibrant, healthy lifestyle.
            </p>
          </div>

        <div className="tdh-mobile-view order-1 lg:order-2">
            <img 
              src={logo01} 
              alt="magsmen-new-logo" 
              width="120" 
              height="120" 
              onError={(e) => {
                // Fallback if image path is missing in React env
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6 space-x-8 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('pulses')} 
            className={`pb-3 text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'pulses' ? 'tab-active' : 'text-gray-500 hover:text-emerald-600'}`}
          >
            Pulses & Dals
          </button>
          <button 
            onClick={() => setActiveTab('foods')} 
            className={`pb-3 text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'foods' ? 'tab-active' : 'text-gray-500 hover:text-emerald-600'}`}
          >
            TDH Foods
          </button>
          <button 
            onClick={() => setActiveTab('millets')} 
            className={`pb-3 text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'millets' ? 'tab-active' : 'text-gray-500 hover:text-emerald-600'}`}
          >
            TDH Millets
          </button>
        </div>

        {/* Content Tables */}
        <div className="glass-card rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Pulses Table */}
          {activeTab === 'pulses' && (
            <div className="block overflow-x-auto animate-fade-in">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Description</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {renderTableRows(pulsesData)}
                </tbody>
              </table>
            </div>
          )}

          {/* Foods Table */}
          {activeTab === 'foods' && (
            <div className="block overflow-x-auto animate-fade-in">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Description</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {renderTableRows(foodsData)}
                </tbody>
              </table>
            </div>
          )}

          {/* Millets Table */}
          {activeTab === 'millets' && (
            <div className="block overflow-x-auto animate-fade-in">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Description</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {renderTableRows(milletsData)}
                </tbody>
              </table>
            </div>
          )}

        </div>

        <footer className="mt-8 text-center text-gray-400 text-xs">
          © 2026 TDH Content Group • Internal Strategy Document
        </footer>

      </div>
    </div>
  );
}