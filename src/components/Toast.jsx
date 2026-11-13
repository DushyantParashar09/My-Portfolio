import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="cyber-toast show" role="status" aria-live="polite">
      <span style={{ color: 'var(--primary-neon)', fontWeight: 'bold' }}>[!]</span>
      <span>{message}</span>
    </div>
  );
}
