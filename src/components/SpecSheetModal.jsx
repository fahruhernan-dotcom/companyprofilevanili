import React, { useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { vanillaSpecifications } from '../data/specifications';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const SpecSheetModal = ({ isOpen, onClose, onOpenInquiry }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal-backdrop)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)',
        backgroundColor: 'rgba(23, 21, 18, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease-out'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="spec-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        style={{
          width: '100%',
          maxWidth: '760px',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-cinematic)',
          padding: 'clamp(24px, 4vw, 44px)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Spec Header */}
        <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <FileText size={16} style={{ color: 'var(--accent-gold)' }} />
            <span className="overline overline-accent">Technical Quality Dossier</span>
          </div>
          <h3 id="spec-modal-title" className="heading-sub" style={{ margin: 0 }}>
            {brandConfig.fullName} — Export Grade Specification
          </h3>
          <p className="body-small" style={{ marginTop: '6px' }}>
            Official export standards for single-origin Indonesian <em>Vanilla planifolia</em> Andrews.
          </p>
        </div>

        {/* General Biological Profile */}
        <div style={{ backgroundColor: 'var(--bg-surface)', padding: '18px 20px', borderRadius: 'var(--radius-xs)', marginBottom: '24px' }}>
          <span className="overline" style={{ fontSize: '0.7rem', display: 'block', marginBottom: '10px' }}>
            Botanical & Cultivation Profile
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div>
              <span className="body-small" style={{ fontSize: '0.75rem', display: 'block' }}>Species:</span>
              <strong style={{ fontSize: '0.875rem' }}>{vanillaSpecifications.primaryProduct.botanicalName}</strong>
            </div>
            <div>
              <span className="body-small" style={{ fontSize: '0.75rem', display: 'block' }}>Harvest Method:</span>
              <strong style={{ fontSize: '0.875rem' }}>{vanillaSpecifications.primaryProduct.harvestType}</strong>
            </div>
            <div>
              <span className="body-small" style={{ fontSize: '0.75rem', display: 'block' }}>Curing Process:</span>
              <strong style={{ fontSize: '0.875rem' }}>{vanillaSpecifications.primaryProduct.curingMethod}</strong>
            </div>
          </div>
        </div>

        {/* Grades Comparison Table */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
          {vanillaSpecifications.grades.map((grade, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xs)',
                padding: '20px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                  {grade.title}
                </h4>
                <span className="num-label">GRADE 0{idx + 1}</span>
              </div>
              <p className="body-small" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
                <strong>Recommended Applications:</strong> {grade.targetAudience}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {grade.specs.map((item, sIdx) => (
                  <div key={sIdx} style={{ borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
                    <span className="overline" style={{ fontSize: '0.65rem', display: 'block', color: 'var(--text-muted)' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', display: 'block', marginTop: '2px' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Export Safeguards */}
        <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span className="overline" style={{ fontSize: '0.7rem' }}>Export Health & Compliance</span>
          {vanillaSpecifications.certificationsAndEthics.map((cert, cIdx) => (
            <div key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.8125rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>{cert.name}:</strong> <span style={{ color: 'var(--text-secondary)' }}>{cert.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handlePrintOrDownload}
            className="btn btn-secondary"
            style={{ fontSize: '0.75rem' }}
          >
            <Download size={14} />
            <span>Save / Print Datasheet</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="btn btn-primary"
            style={{ fontSize: '0.75rem' }}
          >
            <span>Request Certified Sample Kit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecSheetModal;
