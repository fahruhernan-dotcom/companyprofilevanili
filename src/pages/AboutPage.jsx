import React, { useEffect } from 'react';
import { aboutStory } from '../data/aboutStory';
import { brandConfig } from '../config/brandConfig';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Sparkles,
  TreePine,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  Compass,
  CheckCircle2,
  Calendar,
  ArrowLeft
} from 'lucide-react';

export const AboutPage = ({ onNavigateHome, onOpenInquiry }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `Our Heritage & Purpose — ${brandConfig.brandName}`;
  }, []);

  return (
    <div className="about-page" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* 1. Header Hero Section */}
      <section
        id="about-hero"
        className="section"
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(80px, 12vh, 120px)'
        }}
      >
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div
              className="section-header"
              style={{
                textAlign: 'left',
                maxWidth: '720px',
                marginBottom: 'clamp(1.25rem, 2.5vh, 2rem)'
              }}
            >
              <div
                style={{
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span className="overline overline-accent" style={{ color: 'var(--accent-gold-dark)' }}>
                  {aboutStory.hero.overline}
                </span>
                <span style={{ width: '28px', height: '1.5px', backgroundColor: 'var(--border-gold-dark)', display: 'inline-block' }} />
              </div>
              <h1
                className="heading-section"
                style={{
                  color: 'var(--text-primary)',
                  marginBottom: '14px',
                  lineHeight: 1.15
                }}
              >
                {aboutStory.hero.title}
              </h1>
              <p
                className="body-lead"
                style={{
                  color: 'var(--text-secondary)',
                  margin: 0,
                  fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)',
                  lineHeight: 1.55
                }}
              >
                {aboutStory.hero.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. The Genesis & 3 Directives */}
      <section
        id="genesis"
        className="section"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            
            {/* Left: Genesis Visual Frame in Double-Bezel */}
            <div style={{ gridColumn: 'span 6' }}>
              <ScrollReveal animation="fade-right" delay={80}>
                <div className="double-bezel-outer">
                  <div
                    className="double-bezel-inner img-container"
                    style={{ position: 'relative', aspectRatio: '16/11' }}
                  >
                    <img
                      src={aboutStory.genesis.image}
                      alt="Volcanic mountain rainforest estate where vanilla vines flourish"
                      className="img-hover-zoom"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(23, 21, 18, 0.88)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--border-dark-gold)',
                        color: 'var(--text-inverse-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.6875rem'
                      }}
                    >
                      <Compass size={12} style={{ color: 'var(--accent-gold)' }} />
                      <span>Volcanic Agroforestry Sanctuary</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Genesis Narrative & 3 Directives */}
            <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 2vw, 24px)' }}>
              <ScrollReveal animation="fade-left" delay={120}>
                <span className="overline" style={{ color: 'var(--accent-gold)', marginBottom: '6px', display: 'block', fontSize: '0.75rem' }}>
                  {aboutStory.genesis.headline}
                </span>
                
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 2vw, 1.65rem)',
                    color: 'var(--text-primary)',
                    lineHeight: 1.25,
                    marginBottom: '12px',
                    fontWeight: 500
                  }}
                >
                  "{aboutStory.genesis.quote}"
                </h3>

                <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.55 }}>
                  {aboutStory.genesis.body}
                </p>

                {/* 3 Core Directives List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {aboutStory.directives.map((dir, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        padding: '10px 14px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px'
                      }}
                    >
                      <span className="num-label" style={{ fontSize: '0.6875rem', marginTop: '2px' }}>
                        {dir.number}
                      </span>
                      <div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', margin: '0 0 2px', color: 'var(--text-primary)' }}>
                          {dir.title}
                        </h4>
                        <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.4 }}>
                          {dir.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </ScrollReveal>
            </div>

          </div>

          {/* Living Plantation & Harvest Gallery */}
          <div style={{ marginTop: '56px', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
            <div style={{ maxWidth: '640px', marginBottom: '28px' }}>
              <span className="overline overline-accent" style={{ display: 'block', marginBottom: '8px' }}>
                Equatorial Agroforestry in Practice
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', color: 'var(--text-primary)', margin: 0 }}>
                From High-Canopy Vines to Harvest Selection
              </h3>
            </div>

            <div className="grid-12" style={{ gap: '20px' }}>
              <div style={{ gridColumn: 'span 4' }}>
                <div className="double-bezel-outer" style={{ height: '100%' }}>
                  <div className="double-bezel-inner" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      src="/images/catalog_products/plantation_vine_tree.webp"
                      alt="Living vanilla orchid vine on natural shade trellis"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 10px', backgroundColor: 'rgba(23, 21, 18, 0.88)', color: 'var(--accent-gold)', borderRadius: 'var(--radius-pill)', fontSize: '0.625rem', fontWeight: 600 }}>
                      🌿 Living Vine Plantation
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ gridColumn: 'span 4' }}>
                <div className="double-bezel-outer" style={{ height: '100%' }}>
                  <div className="double-bezel-inner" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      src="/images/catalog_products/plantation_green_pods.webp"
                      alt="Fresh green vanilla pod cluster on vine"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 10px', backgroundColor: 'rgba(23, 21, 18, 0.88)', color: 'var(--accent-gold)', borderRadius: 'var(--radius-pill)', fontSize: '0.625rem', fontWeight: 600 }}>
                      🌱 Mature Green Pod Harvest
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ gridColumn: 'span 4' }}>
                <div className="double-bezel-outer" style={{ height: '100%' }}>
                  <div className="double-bezel-inner" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      src="/images/catalog_products/real_warehouse_sorting.webp"
                      alt="Real hand-picked harvest and warehouse grading"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', padding: '4px 10px', backgroundColor: 'rgba(23, 21, 18, 0.88)', color: 'var(--accent-gold)', borderRadius: 'var(--radius-pill)', fontSize: '0.625rem', fontWeight: 600 }}>
                      ✂️ Hand-Picked Sorting & Grading
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Stewards & Agronomists */}
      <section id="stewards" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              overline="Human Precision"
              title="The Stewards of the Vine"
              subtitle="Where multi-generational botanical intuition converges with uncompromising scientific rigor."
            />
          </ScrollReveal>

          <div className="grid-12" style={{ gap: '16px' }}>
            {aboutStory.stewards.map((steward, sIdx) => (
              <div key={sIdx} style={{ gridColumn: 'span 4' }}>
                <ScrollReveal animation="fade-up" delay={sIdx * 100}>
                  <div className="double-bezel-outer" style={{ height: '100%' }}>
                    <div
                      className="double-bezel-inner"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        padding: '14px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div
                        className="img-container"
                        style={{
                          aspectRatio: '4/3',
                          borderRadius: 'var(--radius-xs)',
                          overflow: 'hidden',
                          marginBottom: '12px',
                          position: 'relative'
                        }}
                      >
                        <img
                          src={steward.image}
                          alt={steward.name}
                          className="img-hover-zoom"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            backgroundColor: 'rgba(23, 21, 18, 0.88)',
                            backdropFilter: 'blur(8px)',
                            color: 'var(--accent-gold)',
                            fontSize: '0.5625rem',
                            padding: '3px 8px',
                            borderRadius: 'var(--radius-pill)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {steward.badge}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', margin: '0 0 2px', color: 'var(--text-primary)' }}>
                        {steward.name}
                      </h3>
                      <p className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.625rem', marginBottom: '6px' }}>
                        {steward.role}
                      </p>
                      <p className="body-small" style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.75rem', lineHeight: 1.45 }}>
                        {steward.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Regenerative Metrics & Sustainability Impact */}
      <section
        id="impact"
        className="section"
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          borderTop: '1px solid var(--border-dark)',
          borderBottom: '1px solid var(--border-dark)'
        }}
      >
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              overline="Ecological Integrity"
              title="Measurable Impact & Transparency"
              subtitle="Real stewardship demands accountability across living soil, farmer equity, and total botanical purity."
              dark={true}
            />
          </ScrollReveal>

          <div className="grid-12" style={{ gap: '16px' }}>
            {aboutStory.sustainabilityMetrics.map((metric, mIdx) => (
              <div key={mIdx} style={{ gridColumn: 'span 3' }}>
                <ScrollReveal animation="fade-up" delay={mIdx * 80}>
                  <div
                    className="double-bezel-outer"
                    style={{
                      borderColor: 'var(--border-dark-gold)'
                    }}
                  >
                    <div
                      className="double-bezel-inner"
                      style={{
                        padding: '20px 16px',
                        backgroundColor: 'var(--bg-dark-surface)',
                        textAlign: 'center',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '2.25rem',
                          fontWeight: 600,
                          color: 'var(--accent-gold)',
                          lineHeight: 1,
                          marginBottom: '8px'
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        className="overline"
                        style={{
                          color: 'var(--text-inverse-primary)',
                          fontSize: '0.6875rem',
                          marginBottom: '6px',
                          fontWeight: 600
                        }}
                      >
                        {metric.label}
                      </div>
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-inverse-secondary)',
                          margin: 0,
                          lineHeight: 1.4
                        }}
                      >
                        {metric.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Heritage Milestones Timeline */}
      <section id="milestones" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              overline="The Journey"
              title="Milestones of Botanical Dedication"
              subtitle="From the first mother vines planted in volcanic soil to supplying Michelin-starred culinary artisans."
            />
          </ScrollReveal>

          <div className="grid-12" style={{ gap: '14px' }}>
            {aboutStory.milestones.map((item, msIdx) => (
              <div key={msIdx} style={{ gridColumn: 'span 3' }}>
                <ScrollReveal animation="fade-up" delay={msIdx * 90}>
                  <div
                    className="double-bezel-outer"
                    style={{ height: '100%' }}
                  >
                    <div
                      className="double-bezel-inner"
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--bg-primary)',
                        height: '100%'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                        <Calendar size={13} style={{ color: 'var(--accent-gold)' }} />
                        <span className="num-label" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-gold)' }}>
                          {item.year}
                        </span>
                      </div>

                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--text-primary)', margin: '0 0 4px' }}>
                        {item.title}
                      </h4>

                      <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: 1.45, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Closing Invitation & Estate Visit */}
      <section
        id="visit"
        className="section"
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          textAlign: 'center'
        }}
      >
        <div className="container-narrow">
          <ScrollReveal animation="fade-up">
            <span className="overline" style={{ color: 'var(--accent-gold)', marginBottom: '10px', display: 'block', fontSize: '0.75rem' }}>
              Direct Partnership & Estate Delegation
            </span>

            <h2
              className="heading-section"
              style={{
                color: 'var(--text-inverse-primary)',
                maxWidth: '720px',
                margin: '0 auto 14px',
                lineHeight: 1.15
              }}
            >
              Experience the Craft at Origin.
            </h2>

            <p
              className="body-lead"
              style={{
                maxWidth: '580px',
                margin: '0 auto 22px',
                color: 'var(--text-inverse-secondary)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)'
              }}
            >
              We welcome master pastry chefs, chocolatier procurement leads, and botanical researchers for private estate delegations and bespoke harvest reservation.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="gold" onClick={onOpenInquiry}>
                Inquire Estate Delegation
              </Button>
              <Button variant="secondary" onClick={onNavigateHome}>
                Explore Vanilla Products
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
