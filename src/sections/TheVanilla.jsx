import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import vanillaLinenImg from '../assets/images/vanilla_linen_cloth.jpg';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, Info } from 'lucide-react';

export const TheVanilla = ({ onOpenSpecSheet, onOpenInquiry }) => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [activeFlavor, setActiveFlavor] = useState('rum');

  const hotspots = [
    {
      id: 1,
      top: '28%',
      left: '35%',
      title: 'Dense Vanillin Glaze',
      desc: 'Natural essential oils and vanillin concentrate on the surface through traditional sun-curing.'
    },
    {
      id: 2,
      top: '52%',
      left: '60%',
      title: 'Plump Caviar Mass',
      desc: 'Abundant interior seed cavity yielding dense visual speckling and intense culinary aromatic release.'
    },
    {
      id: 3,
      top: '74%',
      left: '80%',
      title: 'Supple Pliability',
      desc: 'Optimal 30–35% moisture allows smooth slicing without brittle cracking or dryness.'
    }
  ];

  const flavorNotes = {
    rum: {
      name: 'Dark Rum & Bourbon Warmth',
      description: 'Deep, rich molasses undertones developed through 90 days of slow wooden box sweating.'
    },
    floral: {
      name: 'Equatorial Floral High Notes',
      description: 'Delicate botanical sweetness characteristic of Indonesian volcanic high-canopy shade.'
    },
    woody: {
      name: 'Balsamic & Cedar Resonance',
      description: 'Enduring woody base notes that hold structural integrity in high-heat culinary baking.'
    },
    cream: {
      name: 'Buttery Custard Sweetness',
      description: 'Smooth, rounded vanillin that blossoms into rich dairy, gelato, and ganache preparations.'
    }
  };

  return (
    <section id="the-vanilla" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="The Single-Origin Bean"
            title="Anatomy of Exceptional Vanilla"
            subtitle="Explore the physical characteristics and rich aromatic architecture of our Grade A Vanilla Planifolia."
          />
        </ScrollReveal>

        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Col 1-6: Artisanal Bundle with Interactive Hotspots & Double-Bezel Architecture */}
          <div style={{ gridColumn: 'span 6' }}>
            <ScrollReveal animation="fade-right">
              {/* Outer Shell (Doppelrand) */}
              <div className="double-bezel-outer" style={{ position: 'relative' }}>
                {/* Inner Core */}
                <div
                  className="double-bezel-inner img-container"
                  style={{ position: 'relative', aspectRatio: '16/11' }}
                >
                  <img
                    src={vanillaLinenImg}
                    alt="Artisanal Indonesian vanilla pods on natural organic linen cloth"
                    className="img-hover-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />

                  {/* Interactive Hotspot Pins with Edge-Aware Tooltips */}
                  {hotspots.map((spot) => {
                    const leftVal = parseFloat(spot.left);
                    const alignClass = leftVal > 65 ? 'hotspot-pin-right' : leftVal < 30 ? 'hotspot-pin-left' : '';
                    return (
                      <div
                        key={spot.id}
                        className={`hotspot-pin ${alignClass} ${activeHotspot === spot.id ? 'active' : ''}`}
                        style={{ top: spot.top, left: spot.left }}
                        onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                        onMouseEnter={() => setActiveHotspot(spot.id)}
                        onMouseLeave={() => setActiveHotspot(null)}
                        role="button"
                        tabIndex={0}
                        aria-label={spot.title}
                      >
                        <Info size={14} />
                        <div className="hotspot-tooltip">
                          <strong style={{ fontSize: '0.75rem', display: 'block', color: 'var(--accent-gold)', marginBottom: '4px' }}>
                            {spot.title}
                          </strong>
                          <span style={{ fontSize: '0.75rem', lineHeight: 1.4, display: 'block' }}>
                            {spot.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="body-small" style={{ fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem' }}>
                  <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                  <span>Tap pins to inspect bean anatomy</span>
                </span>
                <span className="overline" style={{ fontSize: '0.625rem' }}>
                  Species: Vanilla planifolia
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Col 7-12: Sensory Profile & Interactive Flavor Note Explorer */}
          <div
            style={{
              gridColumn: 'span 6',
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

              {/* Dynamic Flavor Card Display */}
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-light)',
                  marginBottom: '18px',
                  minHeight: '74px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="overline" style={{ fontSize: '0.65rem', display: 'block', color: 'var(--accent-gold)', marginBottom: '3px' }}>
                  {flavorNotes[activeFlavor].name}
                </span>
                <p className="body-small" style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.8125rem' }}>
                  {flavorNotes[activeFlavor].description}
                </p>
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
                    {brandConfig.claims.grade}
                  </span>
                </div>

                <div>
                  <span className="overline" style={{ fontSize: '0.625rem', display: 'block', color: 'var(--text-muted)' }}>
                    Length & Moisture
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {brandConfig.claims.length} · {brandConfig.claims.moisture}
                  </span>
                </div>
              </div>

              {/* Action Buttons with Button-in-Button Architecture */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
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
    </section>
  );
};

export default TheVanilla;
