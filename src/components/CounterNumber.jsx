import React, { useState, useEffect, useRef } from 'react';

/**
 * CounterNumber — Smooth Animated Counter
 * Triggers counting animation when the element scrolls into view.
 */
export default function CounterNumber({
  target,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const startCounting = () => {
    // If target is numeric
    const numericTarget = parseFloat(target);
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const isDecimal = String(target).includes('.');

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * numericTarget;

      if (isDecimal) {
        setCount(current.toFixed(1));
      } else {
        setCount(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <span ref={elementRef} className={`counter-number ${className}`}>
      {prefix}
      {hasAnimated ? count : '0'}
      {suffix}
    </span>
  );
}
