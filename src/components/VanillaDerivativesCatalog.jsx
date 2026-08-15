import React, { useState } from 'react';
import { vanillaProducts } from '../data/vanilla/specifications';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, Box, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const VanillaDerivativesCatalog = ({ onOpenSpecSheet, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: `All Products (${vanillaProducts.length})` },
    { id: 'Whole Vanilla Beans', label: 'Vanilla Beans' },
    { id: 'Derivatives & Concentrates', label: 'Caviar & Powder' },
    { id: 'Liquid & Extracts', label: 'Pastes & Extracts' },
    { id: 'Commercial Flavoring', label: 'Essence' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? vanillaProducts
    : vanillaProducts.filter(p => p.category === activeCategory || (activeCategory === 'Whole Vanilla Beans' && p.category.includes('Specialty')));

  return (
    <section
      id="derivatives-catalog"
      className="section"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'clamp(60px, 8vh, 90px)',
        paddingBottom: 'clamp(60px, 8vh, 90px)'
      }}
    >
      <div className="container">
        <ScrollReveal animation="fade-up">
          <div style={{ maxWidth: '720px', marginBottom: 'clamp(32px, 5vh, 48px)' }}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '8px' }}>
              Official Product Portfolio
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                margin: '0 0 14px 0'
              }}
            >
              Indonesian Vanilla & Value-Added Derivatives
            </h2>
            <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
              Direct B2B supply from whole cured pods to gourmet caviar, pure pastes, cold-extracted essences, and crystalline vanilla. 100% natural and export-certified.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px'
          }}
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                  backgroundColor: isActive ? 'var(--accent-gold)' : 'var(--bg-surface)',
                  color: isActive ? 'var(--bg-dark)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(18px, 2.5vw, 28px)',
            alignItems: 'stretch'
          }}
        >
          {filteredProducts.map((prod, idx) => (
            <ScrollReveal key={prod.id} animation="fade-up" delay={idx * 60}>
              <div
                className="double-bezel-outer"
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div
                  className="double-bezel-inner"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '16px',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  {/* Product Image Frame */}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      borderRadius: 'var(--radius-xs)',
                      overflow: 'hidden',
                      marginBottom: '14px',
                      backgroundColor: 'var(--bg-primary)'
                    }}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      loading="lazy"
                      className="img-hover-zoom"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        backgroundColor: 'rgba(23, 21, 18, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--accent-gold)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {prod.badge}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(23, 21, 18, 0.88)',
                        color: '#FFF',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '0.5625rem',
                        fontFamily: 'monospace'
                      }}
                    >
                      HS {prod.hsCode}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.2rem',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                          margin: '0 0 6px 0',
                          lineHeight: 1.2
                        }}
                      >
                        {prod.name}
                      </h3>

                      <p
                        className="body-small"
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.75rem',
                          lineHeight: 1.5,
                          marginBottom: '12px'
                        }}
                      >
                        {prod.bestUse}
                      </p>
                    </div>

                    {/* Metadata Tags */}
                    <div>
                      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Packaging:</span>
                          <strong style={{ color: 'var(--text-primary)' }}>{prod.packaging}</strong>
                        </div>
                        {prod.vanillinContent && prod.vanillinContent !== 'Available Upon Inquiry' && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Vanillin:</span>
                            <strong style={{ color: 'var(--accent-gold)' }}>{prod.vanillinContent}</strong>
                          </div>
                        )}
                      </div>

                      {/* Direct Inquire Action Button */}
                      <button
                        type="button"
                        onClick={onOpenInquiry}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          padding: '7px 12px',
                          fontSize: '0.6875rem',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <span>Inquire This Lot</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Footer */}
        <div style={{ marginTop: '36px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={onOpenSpecSheet}
            className="btn btn-secondary"
            style={{ fontSize: '0.75rem', padding: '9px 18px' }}
          >
            <FileText size={13} />
            <span>Open Complete Technical Dossier & Grading Matrix</span>
          </button>

          <button
            type="button"
            onClick={onOpenInquiry}
            className="btn btn-primary"
            style={{ fontSize: '0.75rem', padding: '9px 20px' }}
          >
            <Sparkles size={13} />
            <span>Inquire for Lot Allocation & Pricing</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VanillaDerivativesCatalog;
