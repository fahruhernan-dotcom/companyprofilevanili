import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  icon = true,
  className = '',
  type = 'button',
  ariaLabel,
  disabled = false,
  ...props
}) => {
  const baseClass = `btn-agency btn-agency-${variant} ${className}`.trim();

  const content = (
    <>
      <span className="btn-agency-text">{children}</span>
      {icon && (
        <span className="btn-agency-icon-wrapper" aria-hidden="true">
          <ArrowUpRight size={14} strokeWidth={2} className="btn-agency-icon" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        onClick={onClick}
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
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
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
