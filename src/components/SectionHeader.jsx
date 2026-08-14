import React from 'react';

export const SectionHeader = ({
  overline,
  title,
  subtitle,
  align = 'left',
  className = '',
  light = false,
  dark = false,
  inverse = false
}) => {
  const isCenter = align === 'center';
  const isDarkTheme = dark || light || inverse;

  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: align,
        maxWidth: isCenter ? '820px' : '720px',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
        marginBottom: 'clamp(1.25rem, 2.5vh, 2rem)'
      }}
    >
      {overline && (
        <div
          style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCenter ? 'center' : 'flex-start',
            gap: '10px'
          }}
        >
          <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
            {overline}
          </span>
          <span
            style={{
              width: '28px',
              height: '1px',
              backgroundColor: isDarkTheme ? 'var(--border-dark-gold)' : 'var(--border-gold)',
              display: 'inline-block'
            }}
          />
        </div>
      )}

      {title && (
        <h2
          className="heading-section"
          style={{
            color: isDarkTheme ? 'var(--text-inverse-primary)' : 'var(--text-primary)',
            marginBottom: subtitle ? '14px' : '0',
            lineHeight: 1.15
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className="body-lead"
          style={{
            color: isDarkTheme ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)',
            margin: '0 auto',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)',
            lineHeight: 1.55
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
