import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { validateInquiryForm } from '../utils/validation';
import { X, Send, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';

export const InquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    inquiryType: 'Gourmet Grade A Sourcing',
    volume: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

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
    // Simulate successful inquiry dispatch
    setIsSubmitted(true);
  };

  const whatsappUrl = generateWhatsAppUrl({
    phoneNumber: brandConfig.contact.whatsappNumber,
    brandName: brandConfig.name,
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
        backgroundColor: 'rgba(23, 21, 18, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease-out'
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
          maxWidth: '580px',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-cinematic)',
          padding: 'clamp(24px, 4vw, 40px)',
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
            top: '20px',
            right: '20px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease'
          }}
          aria-label="Close modal"
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          /* Submission Success State */
          <div style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-md)' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold-subtle)',
                color: 'var(--accent-gold)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 className="heading-sub" style={{ marginBottom: '12px' }}>
              Inquiry Dispatched
            </h3>
            <p className="body-regular" style={{ maxWidth: '420px', margin: '0 auto 28px' }}>
              Thank you, {formData.name}. Our procurement concierge has received your request for {formData.company} and will reach out within 24 business hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <MessageCircle size={16} />
                <span>Continue via WhatsApp Concierge</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
                B2B Sourcing Concierge
              </span>
              <h3 id="inquiry-title" className="heading-sub" style={{ marginTop: '6px' }}>
                Procurement & Sample Inquiry
              </h3>
              <p className="body-small" style={{ marginTop: '8px' }}>
                Directly connect with our estate managers for wholesale supply, export specifications, and chef sample kits.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Name & Company Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Full Name *
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
                      padding: '10px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.name ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                  {errors.name && <span style={{ color: '#D9381E', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="company" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Establishment / Business *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Maison de Pâtisserie"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.company ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                  {errors.company && <span style={{ color: '#D9381E', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                </div>
              </div>

              {/* Email & Volume Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="concierge@establishment.com"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      backgroundColor: '#FFFFFF',
                      border: errors.email ? '1px solid #D9381E' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                  {errors.email && <span style={{ color: '#D9381E', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="volume" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                    Estimated Volume
                  </label>
                  <input
                    id="volume"
                    name="volume"
                    type="text"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g. 5 kg sample / 50 kg wholesale"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              {/* Inquiry Type Select */}
              <div>
                <label htmlFor="inquiryType" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Inquiry Category
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  <option value="Gourmet Grade A Sourcing">Gourmet Grade A Whole Beans (Pastry & Culinary)</option>
                  <option value="Extraction Grade B Wholesale">Extraction Grade B Sourcing (Extracts & Brewing)</option>
                  <option value="Chef & Laboratory Sample Kit">Request Verified Sample Kit</option>
                  <option value="Long-term Agricultural Partnership">Direct Plantation Agroforestry Contract</option>
                </select>
              </div>

              {/* Message Notes */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Specific Requirements or Destination Country
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any port of entry requirements, moisture preferences, or custom packaging notes..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Send size={15} />
                  <span>Submit Sourcing Request</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '4px 0' }}>
                  <span style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-light)' }}></span>
                  <span className="overline" style={{ fontSize: '0.65rem' }}>or instant direct channels</span>
                  <span style={{ height: '1px', flex: 1, backgroundColor: 'var(--border-light)' }}></span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '10px 14px' }}
                  >
                    <MessageCircle size={14} style={{ color: '#25D366' }} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${brandConfig.contact.email}?subject=${encodeURIComponent(`Sourcing Inquiry from ${formData.company || 'Client'}`)}`}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '10px 14px' }}
                  >
                    <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
                    <span>Direct Email</span>
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
