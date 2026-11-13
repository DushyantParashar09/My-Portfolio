import React from 'react';

export default function Quote() {
  return (
    <section className="quote-section" aria-label="Security Philosophy">
      <div className="container">
        <div className="quote-box">
          <span className="quote-mark left">&ldquo;</span>
          <p className="quote-text">
            Security is not a product, but a continuous empirical process
          </p>
          <div className="quote-author font-mono">
            /* Bruce Schneier &mdash; Security Cryptographer */
          </div>
          <span className="quote-mark right">&rdquo;</span>
        </div>
      </div>
    </section>
  );
}
