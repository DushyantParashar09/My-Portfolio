import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Hero({ onOpenExploit }) {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Hero Content */}
          <div className="hero-content">
            <h1 className="hero-title" id="hero-title">
              Dushyant is an <br />
              <DecryptedText 
                text="ethical hacker" 
                className="text-neon-green" 
                speed={32}
              /> and <br />
              <DecryptedText 
                text="security engineer" 
                className="text-neon-cyan" 
                speed={35}
              />
            </h1>

            <p className="hero-description">
              He hardens responsive architectures and protects infrastructure where technologies meet adversarial threats. Senior Executive - VAPT at Deloitte.
            </p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary btn-glow-pulse" id="btnContactHero">
                <span>Contact me !!</span>
                <span className="font-mono">&rarr;</span>
              </a>
              <button 
                className="btn btn-secondary btn-cyber-shimmer" 
                onClick={() => onOpenExploit('web_pipeline')}
                id="btnViewExploitsHero"
              >
                <span>View exploits</span>
                <span className="font-mono">&lt;&sim;&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Card: Hacker Photo Frame with 3D Tilt & Laser Scanner */}
          <div className="hero-hacker-wrap">
            <div className="wireframe-bracket-tl pulse-bracket"></div>
            <div className="wireframe-bracket-tr pulse-bracket"></div>
            <div className="wireframe-bracket-bl pulse-bracket"></div>
            <div className="wireframe-bracket-br pulse-bracket"></div>

            <TiltCard className="hero-hacker-card" maxTilt={6} scale={1.015}>
              <div className="hacker-photo-container">
                <img 
                  src={PERSONAL_INFO.heroHackerImg} 
                  alt="Dushyant Parashar Security Workspace" 
                  className="hacker-photo-img" 
                  loading="eager" 
                />
                
                {/* Glowing Laser Scanline Animation */}
                <div className="laser-scanner" aria-hidden="true"></div>

                {/* Side indicator pill with pulsing green dot */}
                <div className="hacker-side-pill" title="System Active">
                  <span className="side-pill-dot"></span>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="hero-hacker-status">
                <div className="status-left-desc">
                  <span className="side-pill-dot" style={{ width: '6px', height: '6px', flexShrink: 0 }}></span>
                  <span>SECURITY_WORKSPACE</span>
                </div>
                <div className="sec-dev-tag font-mono glow-tag">#SEC_DEV</div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
