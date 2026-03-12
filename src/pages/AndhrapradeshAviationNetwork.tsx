import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// --- 1. Chart Registration ---
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// --- 2. Types & Data ---
interface Airport {
  name: string;
  code: string;
  city: string;
  domestic: string[];
  international: string[];
  airlines: string[];
}

const apAirportsData: Airport[] = [
  {
    name: "Visakhapatnam International Airport",
    code: "VTZ",
    city: "Visakhapatnam",
    domestic: ["Hyderabad", "Bengaluru", "Chennai", "Delhi", "Mumbai", "Kolkata", "Pune", "Vijayawada", "Tirupati", "Port Blair"],
    international: ["Singapore", "Kuala Lumpur"],
    airlines: ["IndiGo", "Air India", "Air India Express", "SpiceJet", "Akasa Air", "Scoot", "AirAsia"]
  },
  {
    name: "Vijayawada International Airport",
    code: "VGA",
    city: "Vijayawada",
    domestic: ["Hyderabad", "Bengaluru", "Chennai", "Delhi", "Tirupati", "Visakhapatnam", "Mumbai", "Shirdi"],
    international: ["Sharjah", "Kuwait"],
    airlines: ["IndiGo", "Air India", "Air India Express"]
  },
  {
    name: "Tirupati International Airport",
    code: "TIR",
    city: "Tirupati",
    domestic: ["Hyderabad", "Bengaluru", "Chennai", "Vijayawada", "Visakhapatnam", "Delhi", "Belagavi", "Kolhapur", "Kalaburagi"],
    international: [],
    airlines: ["IndiGo", "Air India", "SpiceJet", "Star Air", "Alliance Air"]
  },
  {
    name: "Rajahmundry Airport",
    code: "RJA",
    city: "Rajahmundry",
    domestic: ["Hyderabad", "Bengaluru", "Chennai"],
    international: [],
    airlines: ["IndiGo"]
  },
  {
    name: "Kadapa Airport",
    code: "CDP",
    city: "Kadapa",
    domestic: ["Hyderabad", "Chennai", "Bengaluru", "Vijayawada"],
    international: [],
    airlines: ["IndiGo"]
  },
  {
    name: "Kurnool Airport",
    code: "KJB",
    city: "Kurnool",
    domestic: ["Bengaluru", "Chennai", "Visakhapatnam"],
    international: [],
    airlines: ["IndiGo"]
  }
];

export default function AviationDashboard() {
  // --- State ---
  const [selectedAirportCode, setSelectedAirportCode] = useState<string>("VTZ");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [airportFilter, setAirportFilter] = useState<string>("all");

  // --- Helpers ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Metrics Calculation ---
  const metrics = useMemo(() => {
    const allDests = new Set<string>();
    const allAirlines = new Set<string>();
    let intlCount = 0;

    apAirportsData.forEach(a => {
      a.domestic.forEach(d => allDests.add(d));
      a.international.forEach(i => allDests.add(i));
      a.airlines.forEach(al => allAirlines.add(al));
      intlCount += a.international.length;
    });

    return {
      totalAirports: apAirportsData.length,
      totalRoutes: allDests.size,
      totalAirlines: allAirlines.size,
      totalIntl: intlCount
    };
  }, []);

  // --- Chart Data Preparation ---
  const barChartData = {
    labels: apAirportsData.map(a => a.city),
    datasets: [
      {
        label: 'Domestic Destinations',
        data: apAirportsData.map(a => a.domestic.length),
        backgroundColor: '#3b82f6', // blue-500
        borderRadius: 4,
      },
      {
        label: 'International Destinations',
        data: apAirportsData.map(a => a.international.length),
        backgroundColor: '#14b8a6', // teal-500
        borderRadius: 4,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
    },
    plugins: {
      legend: { position: 'top' as const },
    },
  };

  const airlineCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    apAirportsData.forEach(a => {
      a.airlines.forEach(al => {
        counts[al] = (counts[al] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const donutChartData = {
    labels: Object.keys(airlineCounts),
    datasets: [
      {
        data: Object.values(airlineCounts),
        backgroundColor: [
          '#3b82f6', '#14b8a6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#6366f1'
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'right' as const },
    },
  };

  // --- Filter Logic ---
  const selectedAirport = apAirportsData.find(a => a.code === selectedAirportCode);

  const filteredTableData = apAirportsData.filter(airport => {
    // 1. Dropdown Filter
    if (airportFilter !== 'all' && airport.name !== airportFilter) return false;

    // 2. Search Text Filter
    const domString = airport.domestic.join(', ');
    const intlString = airport.international.join(', ');
    const airlineString = airport.airlines.join(', ');
    const searchableText = `${airport.name} ${domString} ${intlString} ${airlineString}`.toLowerCase();
    
    if (searchTerm && !searchableText.includes(searchTerm.toLowerCase())) return false;

    return true;
  });

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      
      {/* Navigation / Header */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">
                AP Wings <span className="text-teal-500 text-sm font-normal ml-2">Connectivity Dashboard</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => scrollToSection('overview')} className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">Overview</button>
              <button onClick={() => scrollToSection('airports')} className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">Airports</button>
              <button onClick={() => scrollToSection('datagrid')} className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">Data Grid</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* Introduction */}
        <section id="intro" className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Andhra Pradesh Aviation Network</h1>
          <p className="text-slate-600 text-lg">
            Explore the air connectivity of Andhra Pradesh. This interactive report provides detailed insights into destinations, operating airlines, and the domestic versus international reach of the state's six operational airports.
          </p>
        </section>

        {/* Key Metrics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Operational Airports</p>
            <p className="text-3xl font-bold text-blue-900">{metrics.totalAirports}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total Unique Routes</p>
            <p className="text-3xl font-bold text-blue-900">{metrics.totalRoutes}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Active Airlines</p>
            <p className="text-3xl font-bold text-blue-900">{metrics.totalAirlines}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">International Connections</p>
            <p className="text-3xl font-bold text-teal-600">{metrics.totalIntl}</p>
          </div>
        </section>

        {/* Overview Visualization Section */}
        <section id="overview" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-900">Connectivity Volume by Airport</h2>
              <p className="text-sm text-slate-500 mt-1">Comparing the total number of unique destinations (Domestic & International) accessible from each airport. Visakhapatnam and Vijayawada act as the primary gateways.</p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-full max-w-[600px] h-[300px] md:h-[350px]">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-900">Airline Network Share</h2>
              <p className="text-sm text-slate-500 mt-1">Distribution of routes operated by major airlines across the state. This highlights the dominance of specific carriers in regional connectivity.</p>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-full max-w-[600px] h-[300px] md:h-[350px]">
                <Doughnut data={donutChartData} options={donutChartOptions} />
              </div>
            </div>
          </div>
        </section>

        {/* Airport Explorer Section */}
        <section id="airports" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Airport Details Explorer</h2>
            <p className="text-slate-600 mt-2">Select an airport card below to view its specific connectivity profile, domestic reach, and international links.</p>
          </div>

          {/* Airport Selection Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {apAirportsData.map((airport) => (
              <div 
                key={airport.code}
                onClick={() => setSelectedAirportCode(airport.code)}
                className={`cursor-pointer bg-white p-4 rounded-lg border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${selectedAirportCode === airport.code ? 'border-blue-500 ring-2 ring-blue-100' : 'border-slate-200 hover:border-blue-400'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg transition-colors ${selectedAirportCode === airport.code ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                  {airport.code}
                </div>
                <h3 className="font-medium text-slate-800 text-sm">{airport.city}</h3>
              </div>
            ))}
          </div>

          {/* Detail View (Dynamic) */}
          {selectedAirport && (
            <div className="bg-white rounded-xl border border-blue-100 shadow-lg p-6 transition-all duration-300 animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">{selectedAirport.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                    {selectedAirport.code}
                  </span>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-4 text-sm">
                  <div className="text-center">
                    <span className="block font-bold text-slate-900 text-lg">{selectedAirport.domestic.length}</span>
                    <span className="text-slate-500">Domestic</span>
                  </div>
                  <div className="text-center border-l border-slate-200 pl-4">
                    <span className="block font-bold text-teal-600 text-lg">{selectedAirport.international.length}</span>
                    <span className="text-slate-500">International</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Domestic Destinations
                  </h4>
                  <div className="bg-slate-50 rounded-lg p-4 h-64 overflow-y-auto border border-slate-200 custom-scrollbar">
                    <ul className="space-y-2 text-sm text-slate-700">
                      {selectedAirport.domestic.length > 0 ? (
                        selectedAirport.domestic.map((dest, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-blue-500 mr-2">&#8226;</span> {dest}
                          </li>
                        ))
                      ) : (
                        <li className="text-slate-400 italic">No domestic routes listed</li>
                      )}
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span> International Destinations
                  </h4>
                  <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-y-auto border border-slate-200 mb-4 custom-scrollbar">
                    <ul className="space-y-2 text-sm text-slate-700">
                      {selectedAirport.international.length > 0 ? (
                        selectedAirport.international.map((dest, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-teal-500 mr-2">&#8226;</span> {dest}
                          </li>
                        ))
                      ) : (
                        <li className="text-slate-400 italic">No international routes</li>
                      )}
                    </ul>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Operating Airlines</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAirport.airlines.map((airline, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        {airline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Comprehensive Data Grid Section */}
        <section id="datagrid" className="space-y-6 pt-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Comprehensive Route Data</h2>
            <p className="text-slate-600 mt-2">
              Full dataset in the requested format. Use the search bar to filter by destination or airline.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search destination, airport, or airline..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-400 text-lg">&#128269;</span>
              </div>
            </div>
            <div className="flex gap-2">
              <select 
                value={airportFilter}
                onChange={(e) => setAirportFilter(e.target.value)}
                className="bg-white border border-slate-300 text-slate-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Airports</option>
                {apAirportsData.map(a => (
                  <option key={a.code} value={a.name}>{a.city} ({a.code})</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Airport Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Domestic Destinations</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">International Destinations</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Airline Name</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredTableData.length > 0 ? (
                  filteredTableData.map((airport) => (
                    <tr key={airport.code} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{airport.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div className="max-w-xs break-words">{airport.domestic.join(', ')}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div className="max-w-xs break-words">{airport.international.length > 0 ? airport.international.join(', ') : 'None'}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <div className="max-w-xs break-words italic">{airport.airlines.join(', ')}</div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-slate-500">No matching records found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center text-sm text-slate-500 px-2">
            <span>Showing {filteredTableData.length} airport records</span>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 AP Aviation Analysis Dashboard. Generated from synthesized connectivity reports.</p>
        </div>
      </footer>
    </div>
  );
}