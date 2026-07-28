import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

export default function GroupTransformationRoadmap() {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const exportDiagram = async () => {
    if (!pageRef.current) return;
    setIsExporting(true);

    const scrollWrap = scrollRef.current;
    const origOverflow = scrollWrap ? scrollWrap.style.overflow : null;
    const origWidth = scrollWrap ? scrollWrap.style.width : null;
    
    // 1. Temporarily disable animations so html2canvas doesn't capture invisible/fading elements
    const disableAnimStyle = document.createElement('style');
    disableAnimStyle.innerHTML = '* { animation: none !important; transform: none !important; }';
    document.head.appendChild(disableAnimStyle);

    // 2. Expand the scroll container so html2canvas can 'see' everything
    if (scrollWrap) {
      scrollWrap.style.overflow = 'visible';
      scrollWrap.style.width = scrollWrap.scrollWidth + 'px';
    }

    // 3. Wait a tiny bit for the DOM to register these layout changes
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const canvas = await html2canvas(pageRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
        windowWidth: pageRef.current.scrollWidth, // Ensures full width is captured
      });
      
      const link = document.createElement('a');
      link.download = `group-transformation-roadmap-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      // 4. Restore the original layout and animations
      if (scrollWrap) {
        scrollWrap.style.overflow = origOverflow || 'auto';
        scrollWrap.style.width = origWidth || '';
      }
      document.head.removeChild(disableAnimStyle);
      setIsExporting(false);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap');
          
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Montserrat', sans-serif; background: #ffffff; -webkit-font-smoothing: antialiased; }
          a, a:hover { color: #1B2B5C; }
          ::-webkit-scrollbar { height: 5px; background: #F0F4FA; }
          ::-webkit-scrollbar-thumb { background: #C8D8EC; border-radius: 2px; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          
          .export-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #1B2B5C;
            color: #ffffff;
            border: none;
            border-radius: 3px;
            padding: 10px 18px;
            font-family: 'Montserrat', sans-serif;
            font-size: 9.5px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 100;
            transition: opacity 150ms ease-out;
          }
          .export-btn:hover {
            opacity: 0.8;
          }
        `}
      </style>

      <div 
        id="page-root" 
        ref={pageRef} 
        style={{ minHeight: '100vh', background: '#ffffff', padding: '52px 56px 80px', fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '36px', animation: 'fadeUp 0.35s ease-out both' }}>
          <div style={{ width: '120px', flexShrink: 0 }}></div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '14px' }}>
              <div style={{ width: '28px', height: '1px', background: '#C8D8EC' }}></div>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: '#94A3B8', textTransform: 'uppercase' }}>
                Strategic Advisory · Confidential
              </span>
              <div style={{ width: '28px', height: '1px', background: '#C8D8EC' }}></div>
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#1B2B5C', letterSpacing: '-0.025em', marginBottom: '11px', lineHeight: 1.15 }}>
              Group Transformation Strategy Roadmap
            </h1>
            <p style={{ fontSize: '12.5px', fontWeight: 400, color: '#64748B', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65 }}>
              Each phase builds the foundation for the next. Structure before story. Sequence is non-negotiable.
            </p>
            <div style={{ width: '28px', height: '2px', background: '#1B2B5C', margin: '18px auto 0', borderRadius: '1px' }}></div>
          </div>
          <div style={{ width: '120px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
            <img 
              src="data:image/png;base64,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" 
              alt="Magsmen Strategy Consultants" 
              style={{ width: '120px',opacity: 0.92 }} 
            />
          </div>
        </div>

        {/* Sequential label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '22px' }}>
          <span style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.16em', color: '#B0C0D6', textTransform: 'uppercase' }}>
            Phase Dependency
          </span>
          <svg width="52" height="8" viewBox="0 0 52 8" fill="none">
            <line x1="0" y1="4" x2="44" y2="4" stroke="#C8D8EC" strokeWidth="1" />
            <path d="M38 1.5 L50 4 L38 6.5" stroke="#C8D8EC" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.16em', color: '#B0C0D6', textTransform: 'uppercase' }}>
            Strictly Sequential
          </span>
        </div>

        {/* Diagram */}
        <div data-scroll-container="1" ref={scrollRef} style={{ overflowX: 'auto', paddingBottom: '8px' }}>
          <div id="diagram-flow" style={{ display: 'flex', alignItems: 'stretch', minWidth: 'max-content', gap: 0 }}>

            {/* ═══ PHASE 1 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.06s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 01</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 22h18" />
                  <path d="M3 10h18" />
                  <path d="M12 3L3 10" />
                  <path d="M12 3l9 7" />
                  <line x1="6" y1="10" x2="6" y2="22" />
                  <line x1="10" y1="10" x2="10" y2="22" />
                  <line x1="14" y1="10" x2="14" y2="22" />
                  <line x1="18" y1="10" x2="18" y2="22" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Foundation</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Legal &amp; Holding Structure</div>
              </div>
              <div style={{ padding: '13px 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Decide: Sarket Group vs IARE Group
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Holding company structure
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Regulatory implications
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Coordination with CA &amp; Legal Counsel
                </div>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '9px 11px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic' }}>"Non-negotiable foundation before any branding."</p>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '34px', justifyContent: 'center' }}>
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                <line x1="0" y1="7" x2="22" y2="7" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
                <path d="M16 3.5 L28 7 L16 10.5" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* ═══ PHASE 2 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.12s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 02</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="10" y="2" width="4" height="4" rx="1" />
                  <rect x="2" y="17" width="4" height="4" rx="1" />
                  <rect x="10" y="17" width="4" height="4" rx="1" />
                  <rect x="18" y="17" width="4" height="4" rx="1" />
                  <line x1="12" y1="6" x2="12" y2="11" />
                  <line x1="12" y1="11" x2="4" y2="17" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <line x1="12" y1="11" x2="20" y2="17" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Architecture</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Group Brand Architecture</div>
              </div>
              <div style={{ padding: '13px 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Parent brand strategy
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Brand architecture model
                </div>
                <div style={{ fontSize: '10px', fontWeight: 500, color: '#64748B', background: '#F4F7FC', borderRadius: '2px', padding: '5px 8px', margin: '2px 0', lineHeight: 1.5 }}>
                  IARE · Construction · Manufacturing · Foundation
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Naming architecture
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Brand governance
                </div>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '9px 11px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic' }}>"One architecture governs every entity."</p>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '34px', justifyContent: 'center' }}>
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                <line x1="0" y1="7" x2="22" y2="7" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
                <path d="M16 3.5 L28 7 L16 10.5" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* ═══ PHASE 3 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.18s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 03</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 22,8 12,14 2,8" />
                  <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                  <line x1="22" y1="8" x2="22" y2="13" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Institutional</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Institutional Transformation (IARE)</div>
              </div>
              <div style={{ padding: '13px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#1B2B5C', textTransform: 'uppercase', background: '#EEF3FA', padding: '4px 8px', borderRadius: '2px', display: 'inline-block', marginBottom: '9px' }}>Brand Strategy</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Institutional positioning
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Messaging framework
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Communication architecture
                  </div>
                </div>
                <div style={{ width: '100%', height: '1px', background: '#E2EAF4', marginBottom: '11px' }}></div>
                <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#1B2B5C', textTransform: 'uppercase', background: '#EEF3FA', padding: '4px 8px', borderRadius: '2px', display: 'inline-block', marginBottom: '6px' }}>Institutional Programs</div>
                <div style={{ fontSize: '9.5px', color: '#94A3B8', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.4 }}>Operational initiatives — not branding deliverables.</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Faculty development
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>NPS
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Entrepreneurship
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Guest lectures
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>IP ecosystem
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Business School feasibility
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '34px', justifyContent: 'center' }}>
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                <line x1="0" y1="7" x2="22" y2="7" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
                <path d="M16 3.5 L28 7 L16 10.5" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* ═══ PHASE 4 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.24s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 04</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 22,7 12,12 2,7" />
                  <polyline points="2,12 12,17 22,12" />
                  <polyline points="2,17 12,22 22,17" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Category</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Category Branding</div>
              </div>
              <div style={{ padding: '13px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <div style={{ flex: 1, height: '1px', background: '#E2EAF4' }}></div>
                  <span style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Parallel Branches</span>
                  <div style={{ flex: 1, height: '1px', background: '#E2EAF4' }}></div>
                </div>
                <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#1B2B5C', textTransform: 'uppercase', background: '#EEF3FA', padding: '4px 8px', borderRadius: '2px', display: 'inline-block', marginBottom: '9px' }}>Construction</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Parent brand
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Project branding
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Portfolio identity
                  </div>
                </div>
                <div style={{ width: '100%', height: '1px', background: '#E2EAF4', marginBottom: '11px' }}></div>
                <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#1B2B5C', textTransform: 'uppercase', background: '#EEF3FA', padding: '4px 8px', borderRadius: '2px', display: 'inline-block', marginBottom: '9px' }}>Manufacturing</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Market assessment
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>B2B/B2C positioning
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Brand identity
                  </div>
                  <div style={{ display: 'flex', gap: '7px', fontSize: '10.5px', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#4B6EA8', flexShrink: 0, marginTop: '6px' }}></span>Product architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '34px', justifyContent: 'center' }}>
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                <line x1="0" y1="7" x2="22" y2="7" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
                <path d="M16 3.5 L28 7 L16 10.5" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* ═══ PHASE 5 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.30s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 05</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2 C9.5 5 8.5 8.5 8.5 12s1 7 3.5 10" />
                  <path d="M12 2 C14.5 5 15.5 8.5 15.5 12s-1 7-3.5 10" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Digital</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Digital Presence</div>
              </div>
              <div style={{ padding: '13px 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Websites
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Social media
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Corporate communication
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Digital assets
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Content ecosystem
                </div>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '9px 11px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic' }}>"Execute only after brand identities are finalized."</p>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '34px', justifyContent: 'center' }}>
              <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                <line x1="0" y1="7" x2="22" y2="7" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
                <path d="M16 3.5 L28 7 L16 10.5" stroke="#1B2B5C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.65" />
              </svg>
            </div>

            {/* ═══ PHASE 6 ═══ */}
            <div style={{ width: '236px', flexShrink: 0, display: 'flex', flexDirection: 'column', border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff', animation: 'fadeUp 0.45s ease-out 0.36s both' }}>
              <div style={{ background: '#1B2B5C', padding: '20px 16px 15px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Phase 06</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-3.5 3.6-6.5 8-6.5s8 3 8 6.5" />
                  <polyline points="15,3 17,5 21,1" />
                </svg>
                <div style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>Personal Brand</div>
              </div>
              <div style={{ padding: '14px 15px 11px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3, letterSpacing: '-0.01em' }}>Chairman Personal Brand</div>
              </div>
              <div style={{ padding: '13px 15px', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Thought leadership
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Media presence
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Speaking engagements
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>LinkedIn strategy
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#374151', lineHeight: 1.55 }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1B2B5C', flexShrink: 0, marginTop: '6px' }}></span>Reputation management
                </div>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '9px 11px' }}>
                <p style={{ fontSize: '10px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic' }}>"Built on the credibility of the transformed group."</p>
              </div>
            </div>

          </div>
        </div>

        {/* Engagement Timeline */}
        <div style={{ marginTop: '56px', animation: 'fadeUp 0.45s ease-out 0.4s both' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '12px' }}>
              <div style={{ width: '28px', height: '1px', background: '#C8D8EC' }}></div>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: '#94A3B8', textTransform: 'uppercase' }}>
                Engagement Blueprint · 18-Month Plan
              </span>
              <div style={{ width: '28px', height: '1px', background: '#C8D8EC' }}></div>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1B2B5C', letterSpacing: '-0.02em', marginBottom: '9px', lineHeight: 1.2 }}>
              Where We Begin
            </h2>
            <p style={{ fontSize: '11.5px', color: '#64748B', maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
              Structure before story. Brand before marketing. Every deliverable unlocks the next. IPR strengthening runs through all three phases as a non-negotiable thread.
            </p>
            <div style={{ width: '20px', height: '2px', background: '#1B2B5C', margin: '14px auto 0', borderRadius: '1px' }}></div>
          </div>

          {/* IPR Banner */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#111111', borderRadius: '3px', padding: '12px 20px', marginBottom: '24px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
                Continuous · All 18 Months
              </span>
              <p style={{ fontSize: '10.5px', fontWeight: 600, color: '#ffffff', margin: '3px 0 0', lineHeight: 1.5 }}>
                IPR Strengthening — Trademark registrations, IP assignment across entities, brand name protection, governance documentation. An unregistered trademark is not a legal risk alone. It is a brand asset someone else can take.
              </p>
            </div>
          </div>

          {/* Three phase columns */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>

            {/* Phase 1 */}
            <div style={{ flex: 1, border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff' }}>
              <div style={{ background: '#1B2B5C', padding: '18px 16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Engagement Phase 1</span>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>Months 1 – 3</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.01em' }}>Foundation &amp; Architecture</div>
                <p style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.55)', margin: '6px 0 0', lineHeight: 1.55 }}>The structure that makes every future brand decision defensible.</p>
              </div>
              <div style={{ padding: '14px 15px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#1B2B5C', textTransform: 'uppercase', marginBottom: '9px' }}>Deliverables</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Holding Structure Advisory</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Legal entity design, group naming decision, CA &amp; counsel coordination.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Group Brand Architecture Document</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Parent-to-entity brand model, naming hierarchy, governance framework.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Trademark &amp; IPR Audit</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Vulnerability mapping, registration priority list, IP assignment documentation.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 15px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '7px' }}>Strategic Intent</div>
                <p style={{ fontSize: '9.5px', color: '#374151', lineHeight: 1.65, margin: 0 }}>Growth without structure is noise. Before we name anything, position anything, or build anything visible — the legal and architectural foundation must be secured. This phase answers the question the market never asks but always tests: who actually owns this brand?</p>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '8px 11px' }}>
                <p style={{ fontSize: '9px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>Unlock condition: Holding structure approved. IPR filings initiated. Phase 2 begins.</p>
              </div>
            </div>

            {/* Connector */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '32px', justifyContent: 'center', flexDirection: 'column', gap: '4px' }}>
              <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                <line x1="0" y1="7" x2="20" y2="7" stroke="#1B2B5C" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
                <path d="M14 3.5 L26 7 L14 10.5" stroke="#1B2B5C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
              </svg>
            </div>

            {/* Phase 2 */}
            <div style={{ flex: 1, border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff' }}>
              <div style={{ background: '#243B6E', padding: '18px 16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Engagement Phase 2</span>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>Months 4 – 9</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.01em' }}>Entity Brand Building</div>
                <p style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.55)', margin: '6px 0 0', lineHeight: 1.55 }}>Three verticals. One architecture. Each entity positioned to win in its category.</p>
              </div>
              <div style={{ padding: '14px 15px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#1B2B5C', textTransform: 'uppercase', marginBottom: '9px' }}>Deliverables</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>IARE Institutional Positioning</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Messaging framework, communication architecture, faculty &amp; program narrative.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Construction Parent &amp; Project Brand</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Parent identity, project branding system, portfolio architecture.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Manufacturing Brand Scoping</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Market assessment, B2B/B2C positioning, product architecture direction.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 15px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '7px' }}>Strategic Intent</div>
                <p style={{ fontSize: '9.5px', color: '#374151', lineHeight: 1.65, margin: 0 }}>One architecture now governs three verticals. Each entity gets a brand that earns its own market authority. The construction business stops selling projects. It starts building reputation. The manufacturing vertical stops competing on price. It starts competing on positioning.</p>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#EEF3FA', borderLeft: '2.5px solid #1B2B5C', padding: '8px 11px' }}>
                <p style={{ fontSize: '9px', fontWeight: 600, color: '#1B2B5C', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>Unlock condition: Entity identities approved. Digital brief ready. Phase 3 begins.</p>
              </div>
            </div>

            {/* Connector */}
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, width: '32px', justifyContent: 'center' }}>
              <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                <line x1="0" y1="7" x2="20" y2="7" stroke="#1B2B5C" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
                <path d="M14 3.5 L26 7 L14 10.5" stroke="#1B2B5C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
              </svg>
            </div>

            {/* Phase 3 */}
            <div style={{ flex: 1, border: '1px solid #C8D8EC', borderRadius: '3px', overflow: 'hidden', background: '#ffffff' }}>
              <div style={{ background: '#2E4A8A', padding: '18px 16px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>Engagement Phase 3</span>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '2px', letterSpacing: '0.08em' }}>Months 10 – 18</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.01em' }}>Presence &amp; Reputation</div>
                <p style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.55)', margin: '6px 0 0', lineHeight: 1.55 }}>The brand goes public. The Chairman becomes a voice. The group earns market authority.</p>
              </div>
              <div style={{ padding: '14px 15px', borderBottom: '1px solid #E8EEF6' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#1B2B5C', textTransform: 'uppercase', marginBottom: '9px' }}>Deliverables</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Digital Footprint Per Entity</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Websites, social presence, digital assets, content ecosystem per vertical.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Chairman Stature Engagement</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Thought leadership, LinkedIn strategy, media presence, speaking pipeline.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', background: '#EEF3FA', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#1B2B5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 6 5 9 10 3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#1B2B5C', lineHeight: 1.3 }}>Group Narrative &amp; PR Direction</div>
                      <div style={{ fontSize: '9px', color: '#64748B', lineHeight: 1.5, marginTop: '2px' }}>Unified group story, media positioning, corporate communication architecture.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 15px' }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.14em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '7px' }}>Strategic Intent</div>
                <p style={{ fontSize: '9.5px', color: '#374151', lineHeight: 1.65, margin: 0 }}>The Chairman's personal brand is the most credible asset the group has. But it must be built on the credibility of the transformed group, not ahead of it. This phase launches when the structure is ready to receive the attention it will generate.</p>
              </div>
              <div style={{ margin: '0 12px 12px', borderRadius: '2px', background: '#1B2B5C', padding: '8px 11px' }}>
                <p style={{ fontSize: '9px', fontWeight: 600, color: '#ffffff', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>"The strongest brands do not shout louder. They stand clearer."</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '44px', paddingTop: '20px', borderTop: '1px solid #EEF3FA' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', color: '#1B2B5C', textTransform: 'uppercase', marginBottom: '6px' }}>Magsmen Strategy Consultants</p>
          <p style={{ fontSize: '9px', fontWeight: 500, color: '#94A3B8', letterSpacing: '0.06em' }}>www.magsmen.com &nbsp;·&nbsp; 9044910449 &nbsp;·&nbsp; Andhra Pradesh &nbsp;·&nbsp; Telangana &nbsp;·&nbsp; Australia</p>
          <p style={{ fontSize: '8px', fontWeight: 500, letterSpacing: '0.1em', color: '#C8D8EC', textTransform: 'uppercase', marginTop: '6px' }}>For Strategic Use Only · Confidential</p>
        </div>

      </div>

      {/* Export button */}
      <button 
        id="export-btn" 
        className="export-btn" 
        onClick={exportDiagram} 
        disabled={isExporting}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 1v8M3.5 6l3 3 3-3M1 10v1.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V10" />
        </svg>
        {isExporting ? 'Exporting...' : 'Export PNG'}
      </button>
    </>
  );
}