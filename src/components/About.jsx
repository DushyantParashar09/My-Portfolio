import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import CounterNumber from './CounterNumber';

export default function About({ onOpenExploit }) {
  // Dynamic streaming binary telemetry
  const [binaryStream, setBinaryStream] = useState('01001001 01100001 01100011 01101011');

  useEffect(() => {
    const binaryWords = [
      '01001001 01100001 01100011 01101011',
      '01010011 01000101 01000011 01010101',
      '01010110 01000001 01010000 01010100',
      '01001111 01010111 01000001 01010011',
      '01001101 01001001 01010100 01010010',
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % binaryWords.length;
      setBinaryStream(binaryWords[idx]);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="about-heading">
              <span className="hash">#</span>
              <DecryptedText text="about" />
            </h2>
            <div className="section-title-line"></div>
          </div>
        </div>

        <div className="about-layout">
          
          {/* Left: Narrative */}
          <div className="about-narrative">
            <p className="about-lead">
              Hello, i'm <strong className="text-neon-green">Dushyant</strong>!
            </p>
            <p className="about-body">
              I'm an Offensive Security Professional, Penetration Tester &amp; Security Engineer based in India. With a B.Tech in Information Technology from GGV Bilaspur (8.0 CGPA), I specialize in active exploitation simulation, boundary perimeter hardening, and responsive defense architectures.
            </p>
            <p className="about-body">
              Currently serving as <strong>Senior Executive - VAPT at Deloitte</strong>, I systematically evaluate web applications, enterprise APIs, and hybrid networks against the OWASP Top 10 and MITRE ATT&amp;CK frameworks. Certified in Ethical Hacking from IIT Kharagpur and ranking at Level 8 (Top 8%) on TryHackMe, I continuously convert emerging vulnerability intelligence into practical defense playbooks.
            </p>
            <p className="about-body">
              Whether conducting adversary emulation across Active Directory environments or scripting custom Python validation engines, I safeguard critical enterprise systems against real-world threat actors.
            </p>

            <div className="about-actions">
              <a 
                href={PERSONAL_INFO.resumePdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-glow-pulse"
              >
                <span>Download Resume</span>
                <span className="font-mono">[PDF]</span>
              </a>
            </div>
          </div>

          {/* Right: Terminal Dossier Card with Prominent, Visible Portrait Photo & 3D Tilt */}
          <div className="dossier-wrap">
            <div className="dossier-bracket-tl pulse-bracket"></div>
            <div className="dossier-bracket-br pulse-bracket"></div>

            <TiltCard className="dossier-card" maxTilt={6} scale={1.015}>
              {/* Top Header Bar with Binary Code & SecOps Verified Badge */}
              <div className="dossier-header-bar">
                <span className="dossier-binary-text font-mono" title="Live Binary Cipher Feed">
                  {binaryStream}
                </span>
                <span className="secops-pill badge-radar-pulse">SecOps Verified</span>
              </div>

              {/* Terminal Diagnostic Stream */}
              <div className="dossier-cli-output font-mono">
                <div className="cli-prompt text-neon-green">
                  &gt; <DecryptedText text="whoami --verbose" speed={40} />
                </div>
                <div>SECURITY_LEVEL: <span className="text-neon-cyan">08_ACTIVE</span></div>
                <div>ROLE: <span className="text-neon-green">SENIOR_EXECUTIVE_VAPT</span></div>
                <div>ORGANIZATION: <span className="text-white">DELOITTE INDIA</span></div>
                <div>IIT_KHARAGPUR: <span className="text-neon-cyan">CERTIFIED_ETHICAL_HACKER</span></div>
                <div>TRYHACKME: <span className="text-neon-green">TOP_8_PERCENT</span></div>
                <div>INCIDENT_RESPONSE: <span className="text-neon-green">STANDBY_READY</span></div>
              </div>

              {/* Prominent Portrait Display with Radar Wave & Verified Shield Badge */}
              <div className="dossier-avatar-wrap">
                <div className="avatar-portrait-frame radar-frame">
                  <div className="radar-sweep-cone" aria-hidden="true"></div>
                  <img 
                    src={PERSONAL_INFO.avatar} 
                    alt="Dushyant Parashar" 
                    className="avatar-portrait-img" 
                    loading="lazy" 
                  />
                  {/* Green Verified Shield Badge Overlay */}
                  <div className="avatar-shield-badge" title="SecOps Verified Defender">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                </div>
                <h3 className="dossier-name">{PERSONAL_INFO.name}</h3>
                <div className="dossier-location">{PERSONAL_INFO.location}</div>
              </div>

              {/* Animated Stats Row */}
              <div className="dossier-stats-row">
                <div className="stat-item">
                  <div className="stat-item-num">
                    <CounterNumber target="8.0" suffix=" / 10" />
                  </div>
                  <div className="stat-item-label">CGPA / GGV (B.Tech IT)</div>
                </div>
                <div className="stat-item">
                  <div className="stat-item-num">
                    Top <CounterNumber target="8" suffix="%" />
                  </div>
                  <div className="stat-item-label">TryHackMe Level 8</div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
