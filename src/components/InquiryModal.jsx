import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { validateInquiryForm } from '../utils/validation';
import {
  X,
  Send,
  MessageCircle,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Sparkles,
  ChevronDown,
  FileCheck,
  Clock,
  ArrowRight
} from 'lucide-react';

const VOLUME_PRESETS = [
  { label: '1–5 kg (Sample Kit)', value: 'Evaluation Sample Kit (1 – 5 kg)' },
  { label: '25–100 kg (Trial)', value: 'Commercial Trial Batch (25 – 100 kg)' },
  { label: '250–500 kg (Pallet)', value: 'Wholesale Pallet (250 – 500 kg)' },
  { label: '1 MT+ (FCL Lot)', value: 'Container Commercial Lot (1 MT – 5 MT+)' }
];

export const InquiryModal = ({
  isOpen,
  onClose,
  initialCommodity = 'Indonesian Vanilla — Gourmet Grade A Planifolia'
}) => {
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

  // Lock body scroll and auto-pause all videos when modal is active to free GPU
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Pause all playing videos in the background to free 100% GPU/CPU
      const videos = document.querySelectorAll('video');
      videos.forEach((vid) => {
        if (!vid.paused) {
          vid.dataset.wasPlaying = 'true';
          vid.pause();
        }
      });
    } else {
      document.body.style.overflow = '';
      // Resume videos that were playing before modal opened
      const videos = document.querySelectorAll('video');
      videos.forEach((vid) => {
        if (vid.dataset.wasPlaying === 'true') {
          delete vid.dataset.wasPlaying;
          vid.play().catch(() => {});
        }
      });
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

  const handleSelectVolumePreset = (val) => {
    setFormData((prev) => ({ ...prev, volume: val }));
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
        padding: 'clamp(12px, 3vw, 24px)',
        backgroundColor: 'rgba(14, 12, 10, 0.88)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        willChange: 'opacity',
        animation: 'modalBackdropFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
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
        className="inquiry-modal-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: '12px',
          border: '1px solid rgba(200, 169, 107, 0.3)',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.38), 0 4px 20px rgba(0, 0, 0, 0.12)',
          position: 'relative',
          maxHeight: '92svh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.32s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Modal Top Decorative Accent Bar */}
        <div
          style={{
            height: '3px',
            width: '100%',
            background: 'linear-gradient(90deg, transparent 0%, var(--accent-gold) 50%, transparent 100%)'
          }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            backgroundColor: 'rgba(23, 21, 18, 0.05)',
            border: '1px solid rgba(22, 20, 18, 0.08)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.backgroundColor = 'rgba(200, 169, 107, 0.15)';
            e.currentTarget.style.borderColor = 'var(--accent-gold)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.backgroundColor = 'rgba(23, 21, 18, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(22, 20, 18, 0.08)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={17} />
        </button>

        {/* Scrollable Content Body */}
        <div
          style={{
            padding: 'clamp(20px, 4vw, 32px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {isSubmitted ? (
            /* Submission Success State - Executive Receipt */
            <div style={{ textAlign: 'center', padding: 'clamp(16px, 3vh, 32px) 12px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(200, 169, 107, 0.12)',
                  border: '1px solid rgba(200, 169, 107, 0.35)',
                  color: 'var(--accent-gold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 24px rgba(200, 169, 107, 0.2)'
                }}
              >
                <CheckCircle2 size={32} />
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  Requisition Registered
                </span>
              </div>

              <h3
                className="heading-sub"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 1.95rem)',
                  fontWeight: 400,
                  margin: '0 0 10px 0',
                  color: 'var(--text-primary)'
                }}
              >
                Commercial Export Inquiry Logged
              </h3>

              <p
                style={{
                  maxWidth: '480px',
                  margin: '0 auto 24px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}
              >
                Thank you, <strong>{formData.name}</strong>. Our global export desk has received your specifications for <strong>{formData.company}</strong>. A dedicated trade director will review terms and dispatch formal pricing within 24 business hours.
              </p>

              {/* Summary Dossier Ticket */}
              <div
                style={{
                  maxWidth: '480px',
                  margin: '0 auto 26px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  border: '1px solid rgba(200, 169, 107, 0.25)',
                  padding: '16px 20px',
                  textAlign: 'left',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.75rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Target Commodity</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formData.commodity.split('—')[0]}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Volume Lot</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formData.volume}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Incoterms</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formData.incoterms.split('(')[0].trim()}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Destination</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{formData.destination || 'Global Port (TBD)'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '440px', margin: '0 auto' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '11px 20px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: '8px'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Instant Trade Desk WhatsApp Follow-Up</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '10px 20px',
                    fontSize: '0.8125rem',
                    borderRadius: '8px'
                  }}
                >
                  Close & Return to Dossier
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <div>
              {/* Header Editorial Block */}
              <div style={{ marginBottom: '22px', borderBottom: '1px solid rgba(22, 20, 18, 0.08)', paddingBottom: '18px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Globe size={13} style={{ color: 'var(--accent-gold)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    Global Sourcing Concierge
                  </span>
                </div>

                <h3
                  id="inquiry-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 1.95rem)',
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.15,
                    color: 'var(--text-primary)'
                  }}
                >
                  Commercial Export Quotation
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.84rem',
                    lineHeight: 1.55,
                    marginTop: '8px',
                    marginBottom: 0,
                    color: 'var(--text-secondary)',
                    maxWidth: '560px'
                  }}
                >
                  Direct B2B procurement for Indonesian Vanilla & Value-Added Derivatives. Request allocation contracts, Phytosanitary CoA, and evaluation lots.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* SECTION 1: Client Identity */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                      01
                    </span>
                    <span style={{ height: '1px', width: '12px', backgroundColor: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Counterparty Profile
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                    <div>
                      <label htmlFor="name" className="inquiry-label">
                        Contact Name <span style={{ color: 'var(--accent-gold)' }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jean-Luc Dubois"
                        className={`inquiry-input ${errors.name ? 'is-invalid' : ''}`}
                      />
                      {errors.name && <span className="inquiry-error-text">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor="company" className="inquiry-label">
                        Company / Establishment <span style={{ color: 'var(--accent-gold)' }}>*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Maison de Pâtisserie Ltd"
                        className={`inquiry-input ${errors.company ? 'is-invalid' : ''}`}
                      />
                      {errors.company && <span className="inquiry-error-text">{errors.company}</span>}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Communication & Destination */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                      02
                    </span>
                    <span style={{ height: '1px', width: '12px', backgroundColor: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Communication & Destination
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                    <div>
                      <label htmlFor="email" className="inquiry-label">
                        Corporate Email <span style={{ color: 'var(--accent-gold)' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="procurement@company.com"
                        className={`inquiry-input ${errors.email ? 'is-invalid' : ''}`}
                      />
                      {errors.email && <span className="inquiry-error-text">{errors.email}</span>}
                    </div>

                    <div>
                      <label htmlFor="destination" className="inquiry-label">
                        Destination Country / Port
                      </label>
                      <input
                        id="destination"
                        name="destination"
                        type="text"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g. Rotterdam, Netherlands / Tokyo, Japan"
                        className="inquiry-input"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Trade Commodity & Incoterms */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                      03
                    </span>
                    <span style={{ height: '1px', width: '12px', backgroundColor: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Trade Requisition
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label htmlFor="commodity" className="inquiry-label">
                        Target Commodity
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="commodity"
                          name="commodity"
                          value={formData.commodity}
                          onChange={handleChange}
                          className="inquiry-select"
                        >
                          <option value="Vanilla: Planifolia Beans (Gourmet / Grade A / B / C)">Vanilla: Planifolia Beans (Gourmet / Grade A / B / C)</option>
                          <option value="Vanilla: Tahitensis Beans (Gourmet / Grade A / B / C)">Vanilla: Tahitensis Beans (Gourmet / Grade A / B / C)</option>
                          <option value="Vanilla: Crystallized Vanilla (Frosted Pods, >2.5% Vanillin)">Vanilla: Crystallized Vanilla (Frosted Pods, &gt;2.5% Vanillin)</option>
                          <option value="Vanilla: Pure Vanilla Caviar (30–35% Moisture)">Vanilla: Pure Vanilla Caviar (30–35% Moisture)</option>
                          <option value="Vanilla: Dried Vanilla Seeds (≤10% Moisture)">Vanilla: Dried Vanilla Seeds (≤10% Moisture)</option>
                          <option value="Vanilla: Pure Vanilla Powder (Natural)">Vanilla: Pure Vanilla Powder (Natural)</option>
                          <option value="Vanilla: Vanilla Paste (Natural with Visible Seeds)">Vanilla: Vanilla Paste (Natural with Visible Seeds)</option>
                          <option value="Vanilla: Vanilla Extract (Alcohol / Non-Alcohol 1L)">Vanilla: Vanilla Extract (Alcohol / Non-Alcohol 1L)</option>
                          <option value="Vanilla: Vanilla Essence (Commercial Grade 1L)">Vanilla: Vanilla Essence (Commercial Grade 1L)</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="incoterms" className="inquiry-label">
                        Preferred Incoterms
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="incoterms"
                          name="incoterms"
                          value={formData.incoterms}
                          onChange={handleChange}
                          className="inquiry-select"
                        >
                          <option value="FOB (FOB Semarang / Tanjung Priok / Surabaya)">FOB (FOB Semarang / Tanjung Priok / Surabaya)</option>
                          <option value="CIF (Cost, Insurance & Freight — Destination Port)">CIF (Cost, Insurance & Freight — Destination Port)</option>
                          <option value="EXW (Ex Works Indonesia Warehouse)">EXW (Ex Works Indonesia Warehouse)</option>
                          <option value="Air Courier Express Trial (DHL / FedEx / UPS 5–7 Days)">Air Courier Express Trial (DHL / FedEx / UPS 5–7 Days)</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Volume Requirement & Quick Presets */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label htmlFor="volume" className="inquiry-label" style={{ marginBottom: 0 }}>
                        Estimated Volume Requirement
                      </label>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>Quick Select Presets</span>
                    </div>

                    {/* Volume Quick Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                      {VOLUME_PRESETS.map((preset) => {
                        const isSelected = formData.volume === preset.value;
                        return (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => handleSelectVolumePreset(preset.value)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              fontSize: '0.6875rem',
                              fontFamily: 'var(--font-body)',
                              fontWeight: isSelected ? 600 : 500,
                              cursor: 'pointer',
                              border: isSelected ? '1px solid var(--accent-gold)' : '1px solid rgba(22, 20, 18, 0.12)',
                              backgroundColor: isSelected ? 'rgba(200, 169, 107, 0.14)' : '#FFFFFF',
                              color: isSelected ? 'var(--accent-gold-darker, #8F6F2C)' : 'var(--text-secondary)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ position: 'relative' }}>
                      <select
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="inquiry-select"
                      >
                        <option value="Evaluation Sample Kit (1 – 5 kg)">Evaluation Sample Kit (1 – 5 kg air courier)</option>
                        <option value="Commercial Trial Batch (25 – 100 kg)">Commercial Trial Batch (25 – 100 kg)</option>
                        <option value="Wholesale Pallet (250 – 500 kg)">Wholesale Pallet (250 – 500 kg)</option>
                        <option value="Container Commercial Lot (1 MT – 5 MT+)">Container Commercial Lot (1 MT – 5 MT+)</option>
                        <option value="Annual Supply Contract / Custom Volume">Annual Supply Allocation / Custom Contract</option>
                      </select>
                      <ChevronDown size={14} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Specific Requirements */}
                <div>
                  <label htmlFor="message" className="inquiry-label">
                    Specific Requirements or Target Specifications
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention desired moisture %, pod length, custom vacuum bag size, or specific phytosanitary lab test requirements..."
                    className="inquiry-textarea"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      Vanillin HPLC, Moisture % & Microbiological CoA supplied per export batch.
                    </span>
                  </div>
                </div>

                {/* Trust & Verification Badges */}
                <div
                  style={{
                    backgroundColor: 'rgba(200, 169, 107, 0.06)',
                    border: '1px solid rgba(200, 169, 107, 0.2)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                    <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>Direct Farm Contract</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                    <FileCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>Phytosanitary & CoA</span>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                    <Clock size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>24h Response SLA</span>
                  </div>
                </div>

                {/* Action Controls */}
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="submit"
                    className="btn-submit-quotation"
                    style={{
                      width: '100%',
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: 'var(--accent-gold)',
                      border: '1px solid var(--accent-gold)',
                      borderRadius: '8px',
                      padding: '11px 24px',
                      color: 'var(--bg-dark)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(200, 169, 107, 0.3)',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#DFC182';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(200, 169, 107, 0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(200, 169, 107, 0.3)';
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.99)')}
                    onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
                  >
                    <span>Submit Quotation Request</span>
                    <ArrowRight size={14} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '4px 0' }}>
                    <span style={{ height: '1px', flex: 1, backgroundColor: 'rgba(22, 20, 18, 0.08)' }}></span>
                    <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
                      or direct trade channels
                    </span>
                    <span style={{ height: '1px', flex: 1, backgroundColor: 'rgba(22, 20, 18, 0.08)' }}></span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="direct-channel-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '9px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(22, 20, 18, 0.1)',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#25D366';
                        e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.06)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(22, 20, 18, 0.1)';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#25D366', display: 'inline-block' }} />
                      <MessageCircle size={14} style={{ color: '#25D366' }} />
                      <span>WhatsApp Desk</span>
                    </a>

                    <a
                      href={`mailto:${brandConfig.contact.email}?subject=${encodeURIComponent(`Commercial Sourcing Inquiry — ${formData.company || 'Client'}`)}&body=${encodeURIComponent(`Hello Essence Indonesia Trade Desk,\n\nI would like to request export terms for:\n- Commodity: ${formData.commodity}\n- Company: ${formData.company}\n- Destination: ${formData.destination || 'To be specified'}\n- Incoterms: ${formData.incoterms}\n- Volume: ${formData.volume}\n\nPlease provide quotation and availability.\n\nBest regards,\n${formData.name}`)}`}
                      className="direct-channel-card"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '9px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(22, 20, 18, 0.1)',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-gold)';
                        e.currentTarget.style.backgroundColor = 'rgba(200, 169, 107, 0.08)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(22, 20, 18, 0.1)';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
                      <span>Email Trade Desk</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .inquiry-label {
          display: block;
          font-family: var(--font-body);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 5px;
          color: var(--text-primary);
        }

        .inquiry-input,
        .inquiry-select,
        .inquiry-textarea {
          width: 100%;
          padding: 10px 13px;
          background-color: #FFFFFF;
          border: 1px solid rgba(22, 20, 18, 0.14);
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--text-primary);
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .inquiry-input::placeholder,
        .inquiry-textarea::placeholder {
          color: rgba(22, 20, 18, 0.4);
          font-size: 0.8125rem;
        }

        .inquiry-input:hover,
        .inquiry-select:hover,
        .inquiry-textarea:hover {
          border-color: rgba(22, 20, 18, 0.26);
        }

        .inquiry-input:focus,
        .inquiry-select:focus,
        .inquiry-textarea:focus {
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 3px rgba(200, 169, 107, 0.18);
          background-color: #FFFFFF;
        }

        .inquiry-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          padding-right: 32px;
        }

        .inquiry-input.is-invalid {
          border-color: #D9381E;
          background-color: rgba(217, 56, 30, 0.02);
        }

        .inquiry-input.is-invalid:focus {
          box-shadow: 0 0 0 3px rgba(217, 56, 30, 0.15);
        }

        .inquiry-error-text {
          color: #D9381E;
          font-size: 0.6875rem;
          margin-top: 3px;
          display: block;
          font-weight: 500;
        }

        .inquiry-textarea {
          resize: vertical;
          min-height: 72px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default InquiryModal;
