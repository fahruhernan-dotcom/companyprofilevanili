import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { validateInquiryForm } from '../utils/validation';
import { X, Send, MessageCircle, Mail, CheckCircle2, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export const InquiryModal = ({ isOpen, onClose, initialCommodity = 'Indonesian Vanilla — Gourmet Grade A Planifolia' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    commodity: initialCommodity,
    destination: '',
    incoterms: 'FOB (Free on Board - Indonesia)',
    volume: 'Commercial Trial Batch (25 – 100 kg)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

  // Sync initialCommodity if passed
  useEffect(() => {
    if (initialCommodity) {
      setFormData((prev) => ({ ...prev, commodity: initialCommodity }));
    }
  }, [initialCommodity]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setIsSubmitted(true);
  };

  const whatsappUrl = generateWhatsAppUrl({
    phoneNumber: brandConfig.contact.whatsappNumber,
    brandName: brandConfig.brandName,
    formData
  });

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
        backgroundColor: 'rgba(15, 13, 11, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-cinematic)',
          padding: 'clamp(24px, 4vw, 36px)',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
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

        {isSubmitted ? (
          /* Submission Success State */
          <div style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-md)' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold-subtle)',
                color: 'var(--accent-gold)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <CheckCircle2 size={34} />
            </div>
            <h3 className="heading-sub" style={{ marginBottom: '12px' }}>
              Commercial Inquiry Dispatched
            </h3>
            <p className="body-regular" style={{ maxWidth: '460px', margin: '0 auto 28px', color: 'var(--text-secondary)' }}>
              Thank you, <strong>{formData.name}</strong>. Our global export desk has logged your request for <strong>{formData.company}</strong> ({formData.commodity}) and will respond with formal quotation terms within 24 business hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={16} />
                <span>Instant Trade Desk WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            <div style={{ marginBottom: '22px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Globe size={13} style={{ color: 'var(--accent-gold)' }} />
                <span className="overline overline-accent" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
                  Global Sourcing Concierge
                </span>
              </div>
              <h3 id="inquiry-title" className="heading-sub" style={{ margin: 0, fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)' }}>
                Commercial Export Quotation
              </h3>
              <p className="body-small" style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                Direct B2B procurement for Indonesian Vanilla & Selected Green Coffee. Request allocation contracts, Phytosanitary CoA, and evaluation lots.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Name & Company Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Contact Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jean-Luc Dubois"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.name ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                  {errors.name && <span style={{ color: '#D9381E', fontSize: '0.6875rem', marginTop: '3px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="company" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Company / Establishment *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Maison de Pâtisserie Ltd"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.company ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                  {errors.company && <span style={{ color: '#D9381E', fontSize: '0.6875rem', marginTop: '3px', display: 'block' }}>{errors.company}</span>}
                </div>
              </div>

              {/* Email & Destination Country Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="procurement@company.com"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.email ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                  {errors.email && <span style={{ color: '#D9381E', fontSize: '0.6875rem', marginTop: '3px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="destination" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Destination Country / Port
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Rotterdam, Netherlands / Tokyo, Japan"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Commodity & Incoterms Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                <div>
                  <label htmlFor="commodity" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Target Commodity
                  </label>
                  <select
                    id="commodity"
                    name="commodity"
                    value={formData.commodity}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  >
                    <option value="Vanilla Planifolia — Gourmet / Grade A">Vanilla: Planifolia Beans (Gourmet / Grade A / B / C)</option>
                    <option value="Vanilla Tahitensis — Gourmet / Grade A">Vanilla: Tahitensis Beans (Gourmet / Grade A / B / C)</option>
                    <option value="Crystallized Vanilla — Frosted Pods">Vanilla: Crystallized Vanilla (Frosted Pods, &gt;2.5% Vanillin)</option>
                    <option value="Vanilla Caviar — Pure Seed Mass">Vanilla: Pure Vanilla Caviar (30–35% Moisture)</option>
                    <option value="Dried Vanilla Seeds — Low Moisture">Vanilla: Dried Vanilla Seeds (≤10% Moisture)</option>
                    <option value="Vanilla Powder — 100% Pure Natural">Vanilla: Pure Vanilla Powder (Natural)</option>
                    <option value="Vanilla Paste — Natural with Specks">Vanilla: Vanilla Paste (Natural with Visible Seeds)</option>
                    <option value="Vanilla Extract — Alcohol / Non-Alcohol">Vanilla: Vanilla Extract (Alcohol / Non-Alcohol 1L)</option>
                    <option value="Vanilla Essence — Food Grade">Vanilla: Vanilla Essence (Commercial Grade 1L)</option>
                    <option value="Selected Indonesian Green Coffee">Coffee: Selected Indonesian Green Coffee</option>
                    <option value="Custom Mixed Allocation">Custom Multi-Commodity Allocation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="incoterms" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Preferred Incoterms
                  </label>
                  <select
                    id="incoterms"
                    name="incoterms"
                    value={formData.incoterms}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  >
                    <option value="FOB Semarang / Tanjung Priok">FOB (FOB Semarang / Tanjung Priok / Surabaya)</option>
                    <option value="CIF (Cost, Insurance & Freight)">CIF (Port of Destination)</option>
                    <option value="EXW (Ex Works Indonesia)">EXW (Ex Works Indonesia)</option>
                    <option value="Air Courier Trial (DHL / FedEx / UPS 5-7 Days)">Air Courier Express Trial (DHL / FedEx / UPS 5–7 Days)</option>
                  </select>
                </div>
              </div>

              {/* Volume Requirement */}
              <div>
                <label htmlFor="volume" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Estimated Volume Requirement
                </label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                >
                  <option value="Evaluation Sample Kit (1 – 5 kg)">Evaluation Sample Kit (1 – 5 kg air courier)</option>
                  <option value="Commercial Trial Batch (25 – 100 kg)">Commercial Trial Batch (25 – 100 kg)</option>
                  <option value="Wholesale Pallet (250 – 500 kg)">Wholesale Pallet (250 – 500 kg)</option>
                  <option value="Container Commercial Lot (1 MT – 5 MT+)">Container Commercial Lot (1 MT – 5 MT+)</option>
                  <option value="Annual Supply Contract / Custom Volume">Annual Supply Allocation / Custom</option>
                </select>
              </div>

              {/* Message Notes */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Specific Requirements or Target Specifications
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention desired moisture %, pod length, custom vacuum bag size, or specific phytosanitary lab test requirements..."
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-primary)',
                    resize: 'vertical',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '11px 20px', fontSize: '0.8125rem' }}
                >
                  <Send size={14} />
                  <span>Submit Commercial Quotation Request</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '2px 0' }}>
                  <span style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-light)' }}></span>
                  <span className="overline" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>or direct trade channels</span>
                  <span style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-light)' }}></span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '8px 12px', justifyContent: 'center' }}
                  >
                    <MessageCircle size={14} style={{ color: '#25D366' }} />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href={`mailto:${brandConfig.contact.email}?subject=${encodeURIComponent(`Commercial Sourcing Inquiry — ${formData.company || 'Client'}`)}&body=${encodeURIComponent(`Hello Essence Indonesia Trade Desk,\n\nI would like to request export terms for:\n- Commodity: ${formData.commodity}\n- Company: ${formData.company}\n- Destination: ${formData.destination || 'To be specified'}\n- Incoterms: ${formData.incoterms}\n- Volume: ${formData.volume}\n\nPlease provide quotation and availability.\n\nBest regards,\n${formData.name}`)}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '8px 12px', justifyContent: 'center' }}
                  >
                    <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>Email Desk</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default InquiryModal;
