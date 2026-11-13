import React from 'react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Certifications() {
  return (
    <section className="section" id="certificates" aria-labelledby="certs-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="certs-heading">
              <span className="hash">#</span>
              <DecryptedText text="certificates" />
            </h2>
            <div className="section-title-line"></div>
          </div>
        </div>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <TiltCard className="cert-card" key={idx} maxTilt={5} scale={1.015}>
              <div className="cert-badge-tag">{cert.tag}</div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Professional Achievements & Awards (From Resume) */}
        <div className="achievements-section">
          <div className="achievements-section-header">
            <div className="achievements-heading-group">
              <span className="hash">//</span>
              <h3 className="achievements-heading">Honors &amp; Excellence Awards</h3>
            </div>
            <div className="achievements-badge-pill">
              <span className="pill-dot" aria-hidden="true">●</span>
              <span>MERIT_CITATIONS [2025]</span>
            </div>
          </div>

          <div className="achievements-grid">
            {ACHIEVEMENTS.map((item, idx) => (
              <TiltCard className="achievement-card" key={idx} maxTilt={4} scale={1.015}>
                <span className="card-bracket-tl" aria-hidden="true">⌜</span>
                <span className="card-bracket-br" aria-hidden="true">⌟</span>

                <div className="achievement-card-top">
                  <div className={`achievement-emblem-wrap ${item.badgeVariant}`}>
                    {item.type === 'trophy' ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
                        <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" fill="currentColor" fillOpacity="0.2" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.22" />
                      </svg>
                    )}
                  </div>

                  <div className="achievement-header-info">
                    <div className="achievement-badge-row">
                      <span className={`achievement-pill ${item.badgeVariant}`}>
                        {item.badge}
                      </span>
                      <span className="achievement-index-tag">{item.tag}</span>
                    </div>

                    <h4 className="achievement-title">{item.title}</h4>

                    <div className="achievement-meta-row">
                      <span className="achievement-org">{item.company}</span>
                      <span className="achievement-meta-sep">•</span>
                      <span className="achievement-date">{item.date}</span>
                    </div>
                  </div>
                </div>

                <p className="achievement-desc">
                  {item.desc}
                </p>

                <div className="achievement-footer">
                  <span className="achievement-impact">{item.impactTag}</span>
                  <span className="achievement-status-badge">
                    <span className="pill-dot" style={{ fontSize: '0.55rem' }}>●</span>
                    <span>VERIFIED_CITATION</span>
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
