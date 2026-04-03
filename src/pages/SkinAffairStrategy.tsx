import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Radar, Doughnut } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

const SkinAffairSelect = () => {
  // Utility for label wrapping (keeping your logic)
  const wrapLabel = (label: string, maxLength = 16): string | string[] => {
    if (label.length <= maxLength) return label;
    const words = label.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    words.forEach((word) => {
      if ((currentLine + word).length > maxLength && currentLine !== '') {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    });
    if (currentLine.trim() !== '') lines.push(currentLine.trim());
    return lines;
  };

  // Radar Chart Data
  const radarData = {
    labels: [
      'Minimal Elegance',
      'Unapologetic Luxury',
      'Emotional Connection',
      'Clinical Purity',
      'Flawless Perfection',
      'Warm Hospitality',
    ].map((l) => wrapLabel(l)),
    datasets: [
      {
        label: 'ELVA',
        data: [9, 6, 5, 9, 6, 5],
        backgroundColor: 'rgba(129, 178, 154, 0.2)',
        borderColor: '#81B29A',
        pointBackgroundColor: '#81B29A',
        borderWidth: 2,
      },
      {
        label: '24 KAY',
        data: [5, 10, 4, 8, 10, 4],
        backgroundColor: 'rgba(212, 175, 55, 0.2)',
        borderColor: '#D4AF37',
        pointBackgroundColor: '#D4AF37',
        borderWidth: 2,
      },
      {
        label: 'BELLO',
        data: [6, 5, 9, 5, 6, 10],
        backgroundColor: 'rgba(224, 122, 95, 0.2)',
        borderColor: '#E07A5F',
        pointBackgroundColor: '#E07A5F',
        borderWidth: 2,
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: [
      'Status Driven (24 Kay)',
      'Serenity Driven (Elva)',
      'Connection Driven (Bello)',
    ].map((l) => wrapLabel(l)),
    datasets: [
      {
        data: [35, 30, 35],
        backgroundColor: ['#D4AF37', '#81B29A', '#E07A5F'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: { family: 'Inter' },
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans antialiased text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h3 className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase mb-2">
            Magsmen Brand Consultants
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-4">
            Skin Affair Select
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Strategic Nomenclature & Identity Positioning Infographic
          </p>
        </header>

        {/* Strategic Objective */}
        <section className="mb-16 bg-white rounded-2xl shadow-md p-8 md:p-12 border-t-4 border-[#D4AF37]">
          <h2 className="text-2xl font-serif font-semibold mb-4 text-[#1A1A1A]">The Strategic Objective</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The goal of this nomenclature exploration is to define a powerful sub-brand that elevates the core "Skin Affair" identity. The selected name must operate as a distinct business asset, communicating premium positioning, emotional resonance, and a clear clinical outcome. All proposed options are designed to utilize the suffix: <span className="font-semibold italic">A Skin Affair Select</span>.
          </p>
        </section>

        {/* Routes Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-semibold text-[#1A1A1A] mb-4">The Three Brand Routes</h2>
            <p className="text-gray-600 text-lg">
              We have developed three distinct nomenclature routes. Each name drives a unique consumer perception, altering how the patient feels before, during, and after their clinical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ELVA */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-1 border-b-4 border-[#81B29A]">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">ELVA</h3>
              <p className="text-sm font-semibold tracking-wide text-[#81B29A] uppercase mb-4">Soft Power & Minimal Elegance</p>
              <p className="text-gray-600 mb-6">European minimalism, gentle beauty, and understated luxury. Focuses on clarity, balance, and weightless, radiant skin.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center"><span className="text-[#81B29A] mr-2">▪</span> Light & Purity</li>
                <li className="flex items-center"><span className="text-[#81B29A] mr-2">▪</span> Refined Approach</li>
                <li className="flex items-center"><span className="text-[#81B29A] mr-2">▪</span> Effortless Beauty</li>
              </ul>
            </div>

            {/* 24 KAY */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-1 border-b-4 border-[#D4AF37]">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">24 KAY</h3>
              <p className="text-sm font-semibold tracking-wide text-[#D4AF37] uppercase mb-4">The Gold Standard of Care</p>
              <p className="text-gray-600 mb-6">The absolute highest standard of pure, flawless, and indulgent skin care. Mirrors the brilliance and value of pure gold.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center"><span className="text-[#D4AF37] mr-2">▪</span> Supreme Purity</li>
                <li className="flex items-center"><span className="text-[#D4AF37] mr-2">▪</span> Transformative Luxury</li>
                <li className="flex items-center"><span className="text-[#D4AF37] mr-2">▪</span> Flawless Perfection</li>
              </ul>
            </div>

            {/* BELLO */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-1 border-b-4 border-[#E07A5F]">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">BELLO</h3>
              <p className="text-sm font-semibold tracking-wide text-[#E07A5F] uppercase mb-4">Warmth, Welcome & Outcome</p>
              <p className="text-gray-600 mb-6">Grace, intention, and celebration. A name that greets the patient and doubles as the ultimate clinical outcome.</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center"><span className="text-[#E07A5F] mr-2">▪</span> The Ultimate Greeting</li>
                <li className="flex items-center"><span className="text-[#E07A5F] mr-2">▪</span> Paradigm Shift in Care</li>
                <li className="flex items-center"><span className="text-[#E07A5F] mr-2">▪</span> Destination = Result</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-semibold text-[#1A1A1A] mb-4">Data Analytics: Brand Positioning</h2>
            <p className="text-gray-600 text-lg">
              To make an informed decision, we must quantify the qualitative nature of these names.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-6 h-[500px] flex flex-col">
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">Brand Dimension Matrix</h3>
              <p className="text-sm text-gray-600 mb-6">Weighted emphasis across core dimensions.</p>
              <div className="flex-grow">
                <Radar 
                    data={radarData} 
                    options={{
                        ...commonOptions,
                        scales: {
                            r: {
                                angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                                grid: { color: 'rgba(0, 0, 0, 0.1)' },
                                pointLabels: { font: { family: 'Inter', size: 11 }, color: '#1A1A1A' },
                                ticks: { display: false },
                                min: 0,
                                max: 10
                            }
                        }
                    }} 
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 h-[500px] flex flex-col">
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">Psychological Driver Alignment</h3>
              <p className="text-sm text-gray-600 mb-6">Strategic paths: Status, Serenity, or Connection.</p>
              <div className="flex-grow">
                <Doughnut 
                    data={doughnutData} 
                    options={{...commonOptions, cutout: '70%'}} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1A1A1A] text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-6">Strategic Conclusion & Next Steps</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            The final nomenclature decision shapes the entire visual identity and patient experience.
          </p>
          <button className="inline-block px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg">
            Initiate Phase 2: Visual Identity
          </button>
        </section>
      </div>
    </div>
  );
};

export default SkinAffairSelect;