import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

const sanitizeUrl = (url) => {
  if (!url) return '';
  const trimmed = String(url).trim();
  if (/^(javascript|vbscript|data):/i.test(trimmed)) {
    return '#';
  }
  return trimmed;
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon = true,
  className = '',
  type = 'button',
  ariaLabel,
  disabled = false,
  target,
  rel,
  style = {},
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-agency-sm' : size === 'lg' ? 'btn-agency-lg' : '';
  const baseClass = `btn-agency btn-agency-${variant} ${sizeClass} ${className}`.trim();

  // Render Icon inside the bubble
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) {
      return <span className="btn-agency-icon-wrapper" aria-hidden="true">{icon}</span>;
    }
    if (variant === 'whatsapp') {
      return (
        <span className="btn-agency-icon-wrapper" aria-hidden="true">
          <MessageCircle size={size === 'sm' ? 12 : 14} strokeWidth={2.2} />
        </span>
      );
    }
    return (
      <span className="btn-agency-icon-wrapper" aria-hidden="true">
        <ArrowUpRight size={size === 'sm' ? 12 : 14} strokeWidth={2} className="btn-agency-icon" />
      </span>
    );
  };

  const content = (
    <>
      <span className="btn-agency-text">{children}</span>
      {renderIcon()}
    </>
  );

  if (href) {
    return (
      <a
        href={sanitizeUrl(href)}
        className={baseClass}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        style={style}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      style={style}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
