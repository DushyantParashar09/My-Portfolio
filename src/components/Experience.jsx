import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="experience-heading">
              <span className="hash">#</span>
              <DecryptedText text="experience" />
            </h2>
            <div className="section-title-line"></div>
          </div>
          <a 
            href={PERSONAL_INFO.resumePdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="section-action-link font-mono"
          >
            <span>Download CV</span>
            <span>[PDF]</span>
          </a>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div className="exp-item" key={idx}>
              <div className="exp-node pulse-exp-node" title="Timeline Milestones"></div>
              <TiltCard className="exp-card" maxTilt={3} scale={1.01}>
                <div className="exp-header">
                  <div className="exp-company-role">
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <span>{exp.company}</span>
                      <span className="text-dim">&bull;</span>
                      <span className="text-muted">{exp.location}</span>
                    </div>
                  </div>
                  <div className="exp-period font-mono">{exp.period}</div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </TiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
