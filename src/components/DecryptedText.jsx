import React, { useState, useEffect, useRef } from 'react';

/**
 * DecryptedText — Hacker text scramble & decryption effect
 * Cycles through random cyber glyphs before resolving character-by-character.
 */
export default function DecryptedText({
  text,
  speed = 35,
  triggerOnHover = true,
  animateOnMount = true,
  className = '',
  as: Component = 'span',
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const chars = '01#_!<>{}[]/*&~?^=+0x7F';

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const maxIterations = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev =>
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
      }

      iteration += 1 / 2;
    }, speed);
  };

  useEffect(() => {
    if (animateOnMount) {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleMouseEnter = () => {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (triggerOnHover && !isAnimating) {
      scramble();
    }
  };

  const handleClick = () => {
    if (!isAnimating) {
      scramble();
    }
  };

  return (
    <Component
      className={`decrypted-text ${isAnimating ? 'decrypting' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      title="Click or hover to decrypt"
    >
      {displayText}
    </Component>
  );
}
