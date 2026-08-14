import React, { useRef, useEffect, useState } from 'react';

export const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (animation) {
      case 'fade-up':
        return 'translateY(28px)';
      case 'fade-down':
        return 'translateY(-28px)';
      case 'fade-left':
        return 'translateX(28px)';
      case 'fade-right':
        return 'translateX(-28px)';
      case 'zoom-in':
        return 'scale(0.96)';
      default:
        return 'translateY(28px)';
    }
  };

  const dynamicStyles = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform'
  };

  return (
    <Component
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'is-revealed' : ''} ${className}`.trim()}
      style={dynamicStyles}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
