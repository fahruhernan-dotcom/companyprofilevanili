import React, { useState } from 'react';
import { brandConfig } from '../config/brandConfig';
import { vanillaSpecifications } from '../data/specifications';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { FileText, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { PhysicalInspectionGallery } from '../components/PhysicalInspectionGallery';

export const QualitySpecs = ({ onOpenSpecSheet, onOpenInquiry }) => {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(0);
  const currentGrade = vanillaSpecifications.grades[selectedGradeIndex];

  return (
    <section
      id="quality"
      className="section"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="Standards & Assurance"
            title="Quality, by Meticulous Detail"
            subtitle="Clear, verified standards designed for culinary artisans, master chocolatiers, and international procurement teams."
          />
        </ScrollReveal>

        {/* 2-Column Screen-Fit Grid: Left Visual Inspection, Right Spec Table */}
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left Col (5 cols): Dynamic Authentic Specimen Inspection */}
          <div style={{ gridColumn: 'span 5' }}>
            <ScrollReveal animation="fade-right" delay={80}>
              <div className="double-bezel-outer">
                <div
                  className="double-bezel-inner img-container"
                  style={{ position: 'relative', aspectRatio: '4/3', backgroundColor: 'var(--bg-primary)' }}
                >
                  <img
                    key={currentGrade.image}
                    src={currentGrade.image}
                    alt={currentGrade.title}
                    className="img-hover-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    loading="lazy"
                  />

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(23, 21, 18, 0.92)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text-inverse-primary)',
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-xs)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid var(--border-dark-gold)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Award size={13} style={{ color: 'var(--accent-gold)' }} />
                      <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {currentGrade.title.split('(')[0]}
                      </span>
                    </div>
                    <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--accent-gold)' }}>
                      Laboratory Calibrated
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span className="body-small" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Phytosanitary Certified · Strict Export Moisture Control · Sustainable Agroforestry
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Col (7 cols): Grade Switcher & Editorial Spec Table */}
          <div style={{ gridColumn: 'span 7', paddingLeft: 'clamp(0px, 2vw, 20px)' }}>
            <ScrollReveal animation="fade-left" delay={100}>
              
              {/* Grade Selector Switcher */}
              <div className="grade-switcher-bar" style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
                {vanillaSpecifications.grades.map((grade, gIdx) => {
                  const isSelected = gIdx === selectedGradeIndex;
                  return (
                    <button
                      key={gIdx}
                      type="button"
                      onClick={() => setSelectedGradeIndex(gIdx)}
                      className="grade-btn"
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-xs)',
                        border: isSelected ? '1.5px solid var(--accent-gold)' : '1px solid var(--border-light)',
                        backgroundColor: isSelected ? 'var(--bg-primary)' : 'transparent',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: isSelected ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        textAlign: 'left'
                      }}
                    >
                      <span className="num-label" style={{ fontSize: '0.625rem', display: 'block', marginBottom: '2px' }}>
                        {gIdx === 0 ? 'RECOMMENDED CULINARY' : 'WHOLESALE EXTRACTION'}
                      </span>
                      <span className="grade-btn-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', display: 'block' }}>
                        {grade.title.split('(')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Spec Table */}
              <div
                className="double-bezel-outer"
                style={{ marginBottom: '16px' }}
              >
                <div className="double-bezel-inner table-responsive">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {currentGrade.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="spec-row"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '10px 20px',
                          borderBottom: idx < currentGrade.specs.length - 1 ? '1px solid var(--border-light)' : 'none',
                          backgroundColor: idx % 2 === 1 ? 'rgba(239, 233, 223, 0.4)' : 'transparent',
                          alignItems: 'center'
                        }}
                      >
                        <span className="spec-label" style={{ fontSize: '0.8125rem' }}>{spec.label}</span>
                        <span className="spec-value" style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mobile-stack" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  onClick={onOpenInquiry}
                  style={{ flex: 1, minWidth: '180px', justifyContent: 'center' }}
                >
                  Request Specs & Pricing
                </Button>
                
                {onOpenSpecSheet && (
                  <Button
                    variant="secondary"
                    onClick={onOpenSpecSheet}
                    style={{ flex: 1, minWidth: '180px', justifyContent: 'center' }}
                  >
                    <FileText size={16} />
                    <span>Inspect Full Technical Dossier</span>
                  </Button>
                )}
              </div>

            </ScrollReveal>
          </div>

        </div>

        {/* Phase-Gated Physical Inspection Gallery */}
        <PhysicalInspectionGallery />

      </div>

      <style>{`
        @media (max-width: 767px) {
          .grade-btn {
            padding: 8px 10px !important;
          }
          .grade-btn-title {
            font-size: 0.9375rem !important;
          }
          .spec-row {
            padding: 8px 12px !important;
          }
          .spec-label, .spec-value {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default QualitySpecs;
