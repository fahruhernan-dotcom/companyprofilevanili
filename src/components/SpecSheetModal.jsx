import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { planifoliaGradesMatrix, tahitensisGradesMatrix, vanillaProducts } from '../data/vanilla/specifications';
import { exportPolicy } from '../data/vanilla/exportPolicy';
import { X, Printer, FileText, CheckCircle2, ShieldCheck, Sparkles, Box, Layers, Globe, Clock, Package } from 'lucide-react';

export const SpecSheetModal = ({ isOpen, onClose, onOpenInquiry }) => {
  const modalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('planifolia');

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

  const tabs = [
    { id: 'planifolia', label: 'Vanilla Planifolia' },
    { id: 'tahitensis', label: 'Vanilla Tahitensis' },
    { id: 'derivatives', label: 'Derivative Products' },
    { id: 'policy', label: 'Export Policy & Capacity' }
  ];

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
        backgroundColor: 'rgba(15, 13, 11, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
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
        id="printable-spec-sheet"
        style={{
          width: '100%',
          maxWidth: '920px',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-cinematic)',
          padding: 'clamp(24px, 3.5vw, 36px)',
          position: 'relative',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <X size={18} />
        </button>

        {/* Spec Header */}
        <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <FileText size={15} style={{ color: 'var(--accent-gold)' }} />
            <span className="overline overline-accent" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
              Official Export Technical Specification Dossier
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 id="spec-modal-title" className="heading-sub" style={{ margin: 0, fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)' }}>
                {brandConfig.brandName} — All Product Specifications
              </h3>
              <p className="body-small" style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Authoritative parameters for single-origin Indonesian Vanilla Planifolia, Tahitensis, and Derivatives.
              </p>
            </div>
            <span className="overline" style={{ color: 'var(--text-muted)', fontSize: '0.6875rem' }}>
              Source: Official Catalog Ref 0905.10
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '12px',
            marginBottom: '20px'
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                  backgroundColor: isActive ? 'var(--accent-gold)' : 'transparent',
                  color: isActive ? 'var(--bg-dark)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: Vanilla Planifolia Matrix */}
        {activeTab === 'planifolia' && (
          <div>
            <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="overline" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                Vanilla Planifolia (Vanilla Planifolia Andrews)
              </span>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Origin: Indonesia · HS Code: 0905.10</span>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '20px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Grade / Product</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Length</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Weight</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Moisture</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Condition</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Aroma</th>
                  </tr>
                </thead>
                <tbody>
                  {planifoliaGradesMatrix.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < planifoliaGradesMatrix.length - 1 ? '1px solid var(--border-light)' : 'none', backgroundColor: idx % 2 === 1 ? 'rgba(239, 233, 223, 0.3)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.product}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{item.size}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{item.weight}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--accent-gold)', fontWeight: 600 }}>{item.moisture}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{item.condition}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{item.aroma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Vanilla Tahitensis Matrix */}
        {activeTab === 'tahitensis' && (
          <div>
            <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="overline" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                Vanilla Tahitensis (Vanilla Tahitensis J.W. Moore)
              </span>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Origin: Indonesia / New Guinea · HS Code: 0905.10</span>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: '20px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Grade / Product</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Length</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Weight</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Moisture</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Condition</th>
                    <th style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>Aroma</th>
                  </tr>
                </thead>
                <tbody>
                  {tahitensisGradesMatrix.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < tahitensisGradesMatrix.length - 1 ? '1px solid var(--border-light)' : 'none', backgroundColor: idx % 2 === 1 ? 'rgba(239, 233, 223, 0.3)' : 'transparent' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.product}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{item.size}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-primary)' }}>{item.weight}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--accent-gold)', fontWeight: 600 }}>{item.moisture}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{item.condition}</td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-secondary)' }}>{item.aroma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: Derivative Products */}
        {activeTab === 'derivatives' && (
          <div>
            <div style={{ marginBottom: '14px' }}>
              <span className="overline" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                Vanilla Derivative Products Catalog
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '14px', marginBottom: '20px' }}>
              {vanillaProducts.slice(2).map((prod) => (
                <div
                  key={prod.id}
                  style={{
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'var(--bg-surface)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', margin: 0, color: 'var(--text-primary)' }}>
                      {prod.name}
                    </h4>
                    <span style={{ fontSize: '0.625rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                      {prod.packaging}
                    </span>
                  </div>
                  <p className="body-small" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {prod.bestUse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Export Policy & Capacity */}
        {activeTab === 'policy' && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span className="overline" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                Export Standard & Commercial Order Policy
              </span>
              <p className="body-small" style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>
                Direct B2B commercial terms, monthly supply capacities, and freight lead times.
              </p>
            </div>

            {/* Capacity Table */}
            <div style={{ marginBottom: '18px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
              <div style={{ padding: '8px 12px', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-light)', fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Production Capacity (Per Month & Harvest Season)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', padding: '12px' }}>
                {exportPolicy.capacities.map((cap, cIdx) => (
                  <div key={cIdx} style={{ padding: '8px 10px', backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{cap.product}</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{cap.monthly}</div>
                    <div style={{ fontSize: '0.625rem', color: 'var(--accent-gold)' }}>{cap.seasonal}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solid vs Liquid Formats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
              {exportPolicy.categories.map((cat, idx) => (
                <div key={idx} style={{ padding: '14px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)', backgroundColor: 'var(--bg-surface)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <Box size={14} style={{ color: 'var(--accent-gold)' }} />
                    <strong style={{ fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{cat.category}</strong>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    <strong>Packaging:</strong> {cat.packaging}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    MOQ: {cat.moq}
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping & Freight Matrix */}
            <div style={{ padding: '14px', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)', backgroundColor: '#FFFFFF', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong>Shipping Terms:</strong> {exportPolicy.terms.shippingTerms}</div>
              <div><strong>Port of Loading:</strong> {exportPolicy.terms.portOfLoading}</div>
              <div><strong>Lead Time:</strong> {exportPolicy.terms.leadTime}</div>
              <div><strong>Air Freight (Trial Orders):</strong> {exportPolicy.terms.airFreight}</div>
              <div><strong>Private Label:</strong> {exportPolicy.terms.labeling}</div>
            </div>
          </div>
        )}

        {/* Action Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '18px', marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            type="button"
            onClick={handlePrintOrDownload}
            className="btn btn-secondary"
            style={{ fontSize: '0.75rem', padding: '9px 16px' }}
          >
            <Printer size={14} />
            <span>Print / Save PDF Dossier</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="btn btn-primary"
            style={{ fontSize: '0.75rem', padding: '9px 18px' }}
          >
            <Sparkles size={13} />
            <span>Request Sample Kit Allocation</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-spec-sheet, #printable-spec-sheet * {
            visibility: visible;
          }
          #printable-spec-sheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            max-width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SpecSheetModal;
