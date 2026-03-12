import React, { useState } from 'react';

// --- 1. Global Styles (Injecting the custom CSS from your HTML) ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc; /* slate-50 */
    }

    /* Navigation Link Styles */
    .nav-link {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .nav-link.active {
        background-color: #4f46e5; /* Indigo-600 */
        color: #ffffff;
        font-weight: 600;
    }
    .nav-link:not(.active):hover {
        background-color: #374151; /* Gray-700 */
        color: #f3f4f6; /* Gray-100 */
    }

    /* Style for RISHIKA font simulation */
    .font-rishika-1 {
        font-family: serif;
        font-weight: 700;
        font-size: 1.1rem;
        color: #ca8a04; /* Yellow-600 */
    }
    .font-rishika-2 {
        font-family: sans-serif;
        font-weight: 900;
        font-size: 1.25rem;
        color: #c2410c; /* Orange-600 */
        text-transform: uppercase;
    }
  `}</style>
);

export default function TdhProductCommunicationAnalysis() {
  // --- State Management for Navigation ---
  const [activeTab, setActiveTab] = useState('overview-content');

  // Helper function to handle navigation clicks
  const handleNavClick = (targetId: string) => {
    setActiveTab(targetId);
    // Scroll to top on tab change for better UX
    const mainContainer = document.getElementById('main-content-area');
    if(mainContainer) mainContainer.scrollTop = 0;
  };

  return (
    <>
      <GlobalStyles />
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 text-slate-900">
        
        {/* --- Sidebar Navigation --- */}
        <nav className="w-full md:w-72 bg-slate-900 text-slate-200 border-b md:border-b-0 md:border-r border-slate-700 flex-shrink-0">
          <div className="p-5 border-b border-slate-700">
            {/* Logo Placeholder */}
            <img 
              src="https://placehold.co/220x50/0a0a0a/FFFFFF?text=MAGSMEN&font=sans&fw=700" 
              alt="Magsmen Brand Consultants Logo" 
              className="w-48 h-auto mb-2"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/220x50/0a0a0a/FFFFFF?text=MAGSMEN+LOGO';
              }}
            />
            <p className="text-sm text-slate-400">Product Communication Analysis</p>
          </div>
          <ul className="p-3 space-y-2">
            <li>
              <div 
                onClick={() => handleNavClick('overview-content')}
                className={`nav-link flex items-center p-3 rounded-lg ${activeTab === 'overview-content' ? 'active' : ''}`}
              >
                <span className="mr-3 text-lg">📊</span>
                <span>Executive Summary</span>
              </div>
            </li>
            <li>
              <div 
                onClick={() => handleNavClick('tdh-main-content')}
                className={`nav-link flex items-center p-3 rounded-lg ${activeTab === 'tdh-main-content' ? 'active' : ''}`}
              >
                <span className="mr-3 text-lg">🌾</span>
                <span>Tenali Double Horse</span>
              </div>
            </li>
            <li>
              <div 
                onClick={() => handleNavClick('rishika-content')}
                className={`nav-link flex items-center p-3 rounded-lg ${activeTab === 'rishika-content' ? 'active' : ''}`}
              >
                <span className="mr-3 text-lg">🍲</span>
                <span>TDH Foods/Rishika</span>
              </div>
            </li>
            <li>
              <div 
                onClick={() => handleNavClick('millets-content')}
                className={`nav-link flex items-center p-3 rounded-lg ${activeTab === 'millets-content' ? 'active' : ''}`}
              >
                <span className="mr-3 text-lg">🍪</span>
                <span>TDH Millets</span>
              </div>
            </li>
          </ul>
        </nav>

        {/* --- Main Content Area --- */}
        <main id="main-content-area" className="flex-1 p-6 md:p-10 overflow-auto h-screen">

          {/* 1. Overview Panel */}
          {activeTab === 'overview-content' && (
            <div className="content-panel animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Summary: Communication Analysis</h2>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl">
                An analysis of product packaging communication, identifying key insights and strategic opportunities for brand consistency and premium positioning.
              </p>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-center text-indigo-700 mb-6">Analysis Summary by Brand</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center"><span className="text-3xl mr-2">🌾</span> Tenali Double Horse</h4>
                    <h5 className="font-semibold text-slate-600">Key Finding:</h5>
                    <p className="text-sm text-slate-800 mb-3">Communicates trust and clarity but lacks strong premium design cues.</p>
                    <h5 className="font-semibold text-red-600">Key Opportunity:</h5>
                    <p className="text-sm text-slate-800">Elevate premium positioning through design and enforce strict logo consistency across all SKUs.</p>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center"><span className="text-3xl mr-2">🍲</span> TDH Foods/Rishika</h4>
                    <h5 className="font-semibold text-slate-600">Key Finding:</h5>
                    <p className="text-sm text-slate-800 mb-3">Strong emotional connection (nostalgia, authenticity) but suffers from font inconsistency.</p>
                    <h5 className="font-semibold text-red-600">Key Opportunity:</h5>
                    <p className="text-sm text-slate-800">Standardize the 'RISHIKA' brand font and enhance packaging to detail quality (e.g., "preservative-free").</p>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center"><span className="text-3xl mr-2">🍪</span> TDH Millets</h4>
                    <h5 className="font-semibold text-slate-600">Key Finding:</h5>
                    <p className="text-sm text-slate-800 mb-3">Strong health focus but branding is diluted by logo inconsistencies and confusing social media links.</p>
                    <h5 className="font-semibold text-red-600">Key Opportunity:</h5>
                    <p className="text-sm text-slate-800">Enforce logo placement consistency and clarify the brand hierarchy (TDH vs. Millet Marvels).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Tenali Double Horse Panel */}
          {activeTab === 'tdh-main-content' && (
            <div className="content-panel animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Tenali Double Horse</h2>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl">
                Analysis of the core brand's pulses and dals.
              </p>
              <div className="max-w-3xl">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-800">Pulses & Dals</h3>
                  
                  <h4 className="text-lg font-semibold text-indigo-700 mt-4 mb-2">Current Product Communication</h4>
                  <p className="text-slate-700">Simple packaging with "premium" word on label; generic packs. Communicates trust, quality, and clarity for everyday users who know the brand.</p>
                  
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Key Insight & Opportunity</h4>
                    <p className="text-slate-700 mb-4">Premium positioning is not strongly visible through design aesthetics. More importantly, there is significant logo inconsistency across different SKUs, diluting the master brand's strength.</p>
                    
                    {/* Infographic for Inconsistency */}
                    <div className="mt-3 p-3 bg-white rounded-lg border border-red-200">
                      <h5 className="text-sm font-semibold text-slate-700 mb-2">Visualized Issue: Logo Inconsistency</h5>
                      <div className="flex items-center justify-around gap-2 text-center p-4">
                        <div className="p-3 border border-dashed border-red-400 rounded bg-red-50">
                          <span className="font-bold text-slate-700">Logo (SKU A)</span>
                        </div>
                        <span className="text-red-600 text-2xl font-bold">≠</span>
                        <div className="p-3 border border-dashed border-red-400 rounded bg-red-50">
                          <span className="font-bold text-slate-700">Logo (SKU B)</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-red-700 mt-2 font-medium">Inconsistent logo application weakens brand recall.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. TDH Foods/Rishika Panel */}
          {activeTab === 'rishika-content' && (
            <div className="content-panel animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">TDH Foods / Rishika</h2>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl">
                Analysis of the specialty foods line, including Ladoos, Powders, and Mixes.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Ladoos</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Healthy, homemade, rooted; premium-looking packet with an element of old lady (as grandmother).</p>
                  <h4 className="text-md font-semibold text-slate-800 mt-4 mb-2">Key Insight</h4>
                  <p className="text-slate-700">Successfully creates an emotional and nostalgic connection, making it well-identified by consumers.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Powders</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Vibrant packaging with "premium" word; 'Amma' outline is present and consistent.</p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-md font-semibold text-slate-800 mb-2">Key Insight & Opportunity</h4>
                    <p className="text-slate-700 mb-4">Authenticity is well-reflected, but the RISHIKA brand font differs across packages, creating a disjointed brand experience.</p>
                    {/* Infographic for Font Inconsistency */}
                    <div className="mt-3 p-3 bg-white rounded-lg border border-red-200">
                      <h5 className="text-sm font-semibold text-slate-700 mb-2">Visualized Issue: Font Inconsistency</h5>
                      <div className="flex items-center justify-around gap-2 text-center p-4">
                        <div className="p-3 border border-dashed border-red-400 rounded bg-red-50">
                          <span className="font-rishika-1">RISHIKA</span>
                        </div>
                        <span className="text-red-600 text-2xl font-bold">≠</span>
                        <div className="p-3 border border-dashed border-red-400 rounded bg-red-50">
                          <span className="font-rishika-2">RISHIKA</span>
                        </div>
                      </div>
                      <p className="text-xs text-center text-red-700 mt-2 font-medium">Inconsistent font usage for the 'RISHIKA' name.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Pickles</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Showcases homemade, rooted essence with same 'Amma' visual element.</p>
                  <h4 className="text-md font-semibold text-slate-800 mt-4 mb-2">Key Insight & Opportunity</h4>
                  <p className="text-slate-700">Communicates trust & nostalgia. Could be strengthened by adding clear quality call-outs (e.g., "Preservative-Free," "No Artificial Colors") on the pack front.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Cashews, Spreads & Chocolates</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Premium design in a handy can packaging.</p>
                  <h4 className="text-md font-semibold text-slate-800 mt-4 mb-2">Key Insight & Opportunity</h4>
                  <p className="text-slate-700">Has a clear premium feel. Could be enhanced with more product storytelling (e.g., ingredient sourcing, serving suggestions) to justify the premium position.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 lg:col-span-2">
                  <h3 className="text-xl font-semibold text-slate-800">Instant Mixes</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Simple, catchy, premium packaging; product convenience is clearly communicated.</p>
                  <h4 className="text-md font-semibold text-slate-800 mt-4 mb-2">Key Insight</h4>
                  <p className="text-slate-700">Strong on utility and convenience. This is a clear, well-executed communication strategy.</p>
                </div>
              </div>
            </div>
          )}

          {/* 4. TDH Millets Panel */}
          {activeTab === 'millets-content' && (
            <div className="content-panel animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">TDH Millets</h2>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl">
                Analysis of the health-focused millet product line.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Cookies</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Focus on flavour and "superfood" tag, showcases constituents, communicates "Tenali Double Horse Group" brand.</p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-md font-semibold text-slate-800 mb-2">Key Insight & Opportunity</h4>
                    <p className="text-slate-700 mb-4">Appeals to health-conscious consumers, but the redirection to "milletmarvels" socials on the pack front causes brand confusion (TDH vs. Millet Marvels).</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Grains</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Highlights benefits, certifications, and superfoods. Communicates "Tenali Double Horse Group" and unpolished nature.</p>
                  <h4 className="text-md font-semibold text-slate-800 mt-4 mb-2">Key Insight</h4>
                  <p className="text-slate-700">Functional and informative. This is clear and effective communication for the category.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800">Noodles</h3>
                  <h4 className="text-md font-semibold text-indigo-700 mt-4 mb-2">Current Communication</h4>
                  <p className="text-slate-700">Focus on health, "Tenali Double Horse Group" brand, quick readiness, and health benefits.</p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="text-md font-semibold text-slate-800 mb-2">Key Insight & Opportunity</h4>
                    <p className="text-slate-700 mb-4">Logo placement is inconsistent compared to other SKUs, weakening the sub-brand's visual identity.</p>
                    
                    {/* Infographic for Inconsistency */}
                    <div className="mt-3 p-3 bg-white rounded-lg border border-red-200">
                      <h5 className="text-sm font-semibold text-slate-700 mb-2">Visualized Issue: Logo Inconsistency</h5>
                      <div className="flex items-center justify-around gap-2 text-center p-4">
                        <div>
                          <div className="p-3 border border-dashed border-red-400 rounded bg-red-50 w-24">
                            <span className="font-bold text-slate-700 text-sm">Logo (Top Left)</span>
                          </div>
                        </div>
                        <span className="text-red-600 text-2xl font-bold">≠</span>
                        <div>
                          <div className="p-3 border border-dashed border-red-400 rounded bg-red-50 w-24">
                            <span className="font-bold text-slate-700 text-sm">Logo (Center)</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-center text-red-700 mt-2 font-medium">Inconsistent logo placement across SKU packaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
}