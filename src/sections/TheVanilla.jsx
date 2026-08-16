import React, { useState, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import vanillaLinenImg from '../assets/images/vanilla_linen_cloth.webp';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, Info, Play, RotateCcw } from 'lucide-react';

export const TheVanilla = ({ onOpenSpecSheet, onOpenInquiry }) => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [activeFlavor, setActiveFlavor] = useState('rum');
  const [activeVideoMode, setActiveVideoMode] = useState(null); // 'caviar' | 'pliability' | null

  const caviarVideoRef = useRef(null);
  const pliabilityVideoRef = useRef(null);

  const hotspots = [
    {
      id: 1,
      top: '39%',
      left: '28%',
      title: 'Dense Vanillin Glaze',
      desc: 'Natural essential oils and vanillin concentrate on the glossy outer surface through traditional sun-curing.',
      videoMode: null
    },
    {
      id: 2,
      top: '50%',
      left: '40%',
      title: 'Plump Caviar Mass',
      desc: 'Abundant interior seed cavity yielding dense visual speckling and intense culinary aromatic release.',
      videoMode: 'caviar'
    },
    {
      id: 3,
      top: '58%',
      left: '74%',
      title: 'Supple Pliability',
      desc: 'Optimal 30–35% moisture allows smooth slicing and bending without brittle cracking or dryness.',
      videoMode: 'pliability'
    }
  ];

  const handleHotspotClick = (spot) => {
    if (spot.videoMode) {
      const mode = spot.videoMode;
      const targetVideo = mode === 'caviar' ? caviarVideoRef.current : pliabilityVideoRef.current;
      
      setActiveVideoMode(mode);
      setActiveHotspot(spot.id);

      if (targetVideo) {
        targetVideo.currentTime = 0;
        targetVideo.play().catch(() => {});
      }
    } else {
      setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
    }
  };

  const handleBackToAnatomy = () => {
    setActiveVideoMode(null);
    setActiveHotspot(null);
    if (caviarVideoRef.current) {
      caviarVideoRef.current.pause();
    }
    if (pliabilityVideoRef.current) {
      pliabilityVideoRef.current.pause();
    }
  };

  const flavorNotes = {
    rum: {
      name: 'Dark Rum & Bourbon Warmth',
      description: 'Deep, rich molasses undertones developed through 90 days of slow wooden box sweating.',
      scores: [
        { label: 'Molasses & Warmth', score: 95 },
        { label: 'Vanillin Potency', score: 92 },
        { label: 'Balsamic Depth', score: 85 }
      ]
    },
    floral: {
      name: 'Equatorial Floral High Notes',
      description: 'Delicate botanical sweetness characteristic of Indonesian volcanic high-canopy shade.',
      scores: [
        { label: 'Floral Sweetness', score: 94 },
        { label: 'Aromatic Lift', score: 90 },
        { label: 'Vanillin Potency', score: 84 }
      ]
    },
    woody: {
      name: 'Balsamic & Cedar Resonance',
      description: 'Enduring woody base notes that hold structural integrity in high-heat culinary baking.',
      scores: [
        { label: 'Cedar & Woody Core', score: 96 },
        { label: 'Oven Heat Stability', score: 92 },
        { label: 'Earthy Resonance', score: 88 }
      ]
    },
    cream: {
      name: 'Buttery Custard Sweetness',
      description: 'Smooth, rounded vanillin that blossoms into rich dairy, gelato, and ganache preparations.',
      scores: [
        { label: 'Cream & Dairy Blossom', score: 96 },
        { label: 'Round Sweet Finish', score: 94 },
        { label: 'Caviar Visual Release', score: 90 }
      ]
    }
  };

  return (
    <section id="vanilla" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="The Single-Origin Bean"
            title="Anatomy of Exceptional Vanilla"
            subtitle="Explore the physical characteristics and rich aromatic architecture of our Grade A Vanilla Planifolia."
          />
        </ScrollReveal>

        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Col 1-7: Artisanal Bundle with Hardware-Accelerated Smooth Morphing Video Engine */}
          <div style={{ gridColumn: 'span 7' }}>
            <ScrollReveal animation="fade-right">
              {/* Outer Shell (Doppelrand) */}
              <div className="double-bezel-outer" style={{ position: 'relative' }}>
                {/* Inner Core */}
                <div
                  className="double-bezel-inner"
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    backgroundColor: '#171512'
                  }}
                >
                  {/* LAYER 1: BASE HIGH-RES PHOTO & INTERACTIVE HOTSPOT PINS */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: activeVideoMode ? 1 : 4,
                      transition: 'opacity 0.45s ease',
                      opacity: activeVideoMode ? 0 : 1,
                      pointerEvents: activeVideoMode ? 'none' : 'auto'
                    }}
                  >
                    <img
                      src={vanillaLinenImg}
                      alt="Artisanal Indonesian vanilla pods on natural organic linen cloth"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />

                    {/* Hotspot Pins */}
                    {hotspots.map((spot) => {
                      const leftVal = parseFloat(spot.left);
                      const alignClass = leftVal > 65 ? 'hotspot-pin-right' : leftVal < 30 ? 'hotspot-pin-left' : '';
                      const hasVideo = !!spot.videoMode;
                      return (
                        <div
                          key={spot.id}
                          className={`hotspot-pin ${alignClass} ${activeHotspot === spot.id ? 'active' : ''}`}
                          style={{
                            top: spot.top,
                            left: spot.left
                          }}
                          onClick={() => handleHotspotClick(spot)}
                          onMouseEnter={() => !activeVideoMode && setActiveHotspot(spot.id)}
                          onMouseLeave={() => !activeVideoMode && setActiveHotspot(null)}
                          role="button"
                          tabIndex={0}
                          aria-label={spot.title}
                        >
                          {hasVideo ? <Play size={11} fill="currentColor" /> : <Info size={14} />}
                          <div className="hotspot-tooltip">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                              <strong style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                                {spot.title}
                              </strong>
                              {hasVideo && (
                                <span style={{ fontSize: '0.625rem', backgroundColor: 'rgba(200, 169, 107, 0.2)', padding: '2px 6px', borderRadius: '4px', color: 'var(--accent-gold)' }}>
                                  ▶ Slomo
                                </span>
                              )}
                            </div>
                            <span style={{ fontSize: '0.75rem', lineHeight: 1.4, display: 'block', marginBottom: hasVideo ? '6px' : 0 }}>
                              {spot.desc}
                            </span>
                            {hasVideo && (
                              <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)', display: 'block', fontWeight: 600 }}>
                                Click pin to inspect 1080p macro video ↗
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* LAYER 2: 100% UNOBSTRUCTED CAVIAR SLOMO VIDEO (Point 2) */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: activeVideoMode === 'caviar' ? 10 : 2,
                      transition: 'opacity 0.45s cubic-bezier(0.2, 0.9, 0.3, 1), transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1)',
                      opacity: activeVideoMode === 'caviar' ? 1 : 0,
                      transform: activeVideoMode === 'caviar' ? 'scale(1)' : 'scale(0.96)',
                      pointerEvents: activeVideoMode === 'caviar' ? 'auto' : 'none'
                    }}
                  >
                    <video
                      ref={caviarVideoRef}
                      src="/videos/vanilla_slomo_macro_texture.mp4"
                      preload="metadata"
                      muted
                      playsInline
                      loop={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />

                    {/* Minimalist Icon-Only Back Button */}
                    <button
                      type="button"
                      onClick={handleBackToAnatomy}
                      aria-label="Back to Anatomy View"
                      title="Back to Anatomy View"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '32px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(23, 21, 18, 0.85)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '50%',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--accent-gold)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                        padding: 0
                      }}
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                  {/* LAYER 3: 100% UNOBSTRUCTED PLIABILITY SLOMO VIDEO (Point 3) */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: activeVideoMode === 'pliability' ? 10 : 3,
                      transition: 'opacity 0.45s cubic-bezier(0.2, 0.9, 0.3, 1), transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1)',
                      opacity: activeVideoMode === 'pliability' ? 1 : 0,
                      transform: activeVideoMode === 'pliability' ? 'scale(1)' : 'scale(0.96)',
                      pointerEvents: activeVideoMode === 'pliability' ? 'auto' : 'none'
                    }}
                  >
                    <video
                      ref={pliabilityVideoRef}
                      src="/videos/vanilla_slomo_smooth_1080p.mp4"
                      preload="metadata"
                      muted
                      playsInline
                      loop={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />

                    {/* Minimalist Icon-Only Back Button */}
                    <button
                      type="button"
                      onClick={handleBackToAnatomy}
                      aria-label="Back to Anatomy View"
                      title="Back to Anatomy View"
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        width: '32px',
                        height: '32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(23, 21, 18, 0.85)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        borderRadius: '50%',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--accent-gold)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                        padding: 0
                      }}
                    >
                      <RotateCcw size={14} />
                    </button>
                  </div>

                </div>
              </div>
              
              {/* Dynamic Clean Editorial Inspection Box (Enclosed Card) */}
              <div
                className="vanilla-info-box"
                style={{
                  marginTop: '12px',
                  backgroundColor: 'var(--bg-surface)',
                  border: (activeVideoMode || activeHotspot === 1) ? '1px solid var(--border-gold)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '12px 14px',
                  transition: 'all 0.3s ease'
                }}
              >
                {activeVideoMode === 'caviar' ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                        <strong style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          Plump Caviar Mass
                        </strong>
                      </div>
                      <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                        1080p Slomo Inspection
                      </span>
                    </div>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.8125rem', lineHeight: 1.45 }}>
                      Abundant interior seed cavity yielding dense visual speckling and intense culinary aromatic release.
                    </p>
                  </div>
                ) : activeVideoMode === 'pliability' ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                        <strong style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          Supple Pliability
                        </strong>
                      </div>
                      <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                        30%–35% Moisture
                      </span>
                    </div>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.8125rem', lineHeight: 1.45 }}>
                      Optimal moisture balance allows smooth culinary slicing and bending without brittle cracking.
                    </p>
                  </div>
                ) : activeHotspot === 1 ? (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                        <strong style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          Dense Vanillin Glaze
                        </strong>
                      </div>
                      <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                        Natural Essential Oils
                      </span>
                    </div>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.8125rem', lineHeight: 1.45 }}>
                      Natural essential oils and vanillin concentrate on the glossy outer surface through traditional sun-curing.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                    <span className="body-small" style={{ fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                      <span>Tap pins to inspect bean anatomy in live 1080p motion</span>
                    </span>
                    <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                      Species: Vanilla planifolia
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Col 7-12: Sensory Profile & Interactive Flavor Note Explorer */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 'clamp(0px, 3vw, 32px)'
            }}
          >
            <ScrollReveal animation="fade-left" delay={100}>
              <span className="overline overline-accent" style={{ marginBottom: '8px', display: 'block' }}>
                Sensory Architecture & Tasting Notes
              </span>

              <h3 className="heading-sub" style={{ marginBottom: '12px', fontSize: 'clamp(1.4rem, 2vw, 1.85rem)' }}>
                Warm, Balsamic, & Profoundly Aromatic
              </h3>

              <p className="body-regular" style={{ marginBottom: '18px', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Our beans are cured slowly for 90 days to retain high internal caviar mass and concentrated vanillin oils.
              </p>

              {/* Interactive Flavor Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                {[
                  { id: 'rum', label: 'Dark Rum Warmth' },
                  { id: 'floral', label: 'Floral High Notes' },
                  { id: 'woody', label: 'Balsamic Cedar' },
                  { id: 'cream', label: 'Custard Cream' }
                ].map((note) => (
                  <button
                    key={note.id}
                    type="button"
                    className={`flavor-pill ${activeFlavor === note.id ? 'active' : ''}`}
                    onClick={() => setActiveFlavor(note.id)}
                    style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                  >
                    <span className="flavor-dot" />
                    <span>{note.label}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Flavor Card Display with Visual Spectrum Meters */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-light)',
                  marginBottom: '18px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="overline" style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>
                    {flavorNotes[activeFlavor].name}
                  </span>
                  <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>90-Day Wooden Box Cured</span>
                </div>

                <p className="body-small" style={{ margin: '0 0 14px 0', color: 'var(--text-primary)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {flavorNotes[activeFlavor].description}
                </p>

                {/* Visual Aromatic Intensity Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
                  {flavorNotes[activeFlavor].scores.map((s, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', minWidth: '130px' }}>
                        {s.label}
                      </span>
                      <div style={{ flex: 1, height: '4px', backgroundColor: 'var(--bg-primary)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${s.score}%`,
                            backgroundColor: 'var(--accent-gold)',
                            borderRadius: '2px',
                            transition: 'width 0.4s ease'
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-primary)', minWidth: '32px', textAlign: 'right' }}>
                        {s.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spec Matrix Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  backgroundColor: 'var(--bg-surface)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-xs)',
                  marginBottom: '20px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div>
                  <span className="overline" style={{ fontSize: '0.625rem', display: 'block', color: 'var(--text-muted)' }}>
                    Standard Grade
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {brandConfig.claims?.grade || 'Gourmet / Grade A'}
                  </span>
                </div>

                <div>
                  <span className="overline" style={{ fontSize: '0.625rem', display: 'block', color: 'var(--text-muted)' }}>
                    Length & Moisture
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {brandConfig.claims?.length || '13 – 21 cm'} · {brandConfig.claims?.moisture || '30% – 35%'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mobile-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Button variant="primary" onClick={onOpenInquiry} style={{ padding: '4px 6px 4px 18px', minHeight: '42px', fontSize: '0.75rem' }}>
                  Inquire Harvest Sourcing
                </Button>

                <Button variant="secondary" onClick={onOpenSpecSheet} style={{ padding: '4px 6px 4px 18px', minHeight: '42px', fontSize: '0.75rem' }}>
                  Inspect Technical Dossier
                </Button>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .hotspot-tooltip {
            display: none !important;
          }
          .vanilla-legend-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          .flavor-pill {
            padding: 5px 10px !important;
            font-size: 0.6875rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TheVanilla;
