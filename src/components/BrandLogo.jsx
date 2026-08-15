import React from 'react';

/**
 * BrandLogo component that renders the authentic Vanilla Orchid Emblem or Full Vector Logo
 * @param {string} variant - 'emblem' (icon only) | 'full' (with Essence INDONESIA text)
 * @param {number|string} size - width/height in px or CSS units
 * @param {string} className - extra classes
 */
export const BrandLogo = ({
  variant = 'emblem',
  size = 36,
  className = '',
  style = {},
  alt = 'Essence Indonesia Vanilla Logo',
  ...props
}) => {
  const src = variant === 'full' ? '/logo-full.svg' : '/logo-emblem.svg';
  const width = size;
  const height = variant === 'full' ? size : typeof size === 'number' ? (size * (463 / 489)) : size;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`brand-logo brand-logo-${variant} ${className}`.trim()}
      style={{
        display: 'inline-block',
        objectFit: 'contain',
        verticalAlign: 'middle',
        ...style
      }}
      loading="eager"
      {...props}
    />
  );
};

export default BrandLogo;
