import React, { useState, useRef, useEffect } from 'react';
import { ASTROLABE_SKILLS } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import SkillDetailModal from './SkillDetailModal';
import OscilloscopeMonitor from './OscilloscopeMonitor';

/**
 * Skills — Cyber Astrolabe HUD & Concentric Defense Orbits
 * Features interactive 360° concentric orbit telemetry, 8 radial vector skill sectors,
 * compact hover-expandable holographic dialogue box that auto-collapses on mouse out,
 * and live telemetry oscilloscope.
 */
export default function Skills() {
  const [activeSkillId, setActiveSkillId] = useState(null);
  const closeTimerRef = useRef(null);

  const activeSkill = ASTROLABE_SKILLS.find(s => s.id === activeSkillId) || null;

  // Handle card mouse enter -> immediately activate
  const handleCardMouseEnter = (id) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveSkillId(id);
  };

  // Handle card mouse leave -> short 160ms bridge window to allow moving into dialogue box
  const handleCardMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveSkillId(null);
    }, 160);
  };

  // Cursor entered dialogue box -> keep it open
  const handleDialogueMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  // Cursor left dialogue box -> auto collapse immediately
  const handleDialogueMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveSkillId(null);
    }, 120);
  };

  // Mobile/touch or click toggle
  const handleCardClick = (id) => {
    setActiveSkillId(prev => (prev === id ? null : id));
  };

  const handleCloseModal = () => {
    setActiveSkillId(null);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Map skill IDs to their exact positions in the 3x3 radial grid
  const getSkillByGrid = (gridPos) => {
    return ASTROLABE_SKILLS.find(s => s.gridPosition === gridPos);
  };

  const topCenter = getSkillByGrid('top_center'); // 000°_N Web Pentesting
  const topRight = getSkillByGrid('top_right');   // 045°_NE Burp Suite Pro
  const midRight = getSkillByGrid('mid_right');   // 090°_E Exploit Dev & Ghidra
  const bottomRight = getSkillByGrid('bottom_right'); // 135°_SE Nmap & Netcat
  const bottomCenter = getSkillByGrid('bottom_center'); // 180°_S Threat Modeling
  const bottomLeft = getSkillByGrid('bottom_left'); // 225°_SW Kali Linux
  const midLeft = getSkillByGrid('mid_left');     // 270°_W Wireshark & TShark
  const topLeft = getSkillByGrid('top_left');     // 315°_NW Scripting & Programming

  return (
    <section className="section astrolabe-section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        
        {/* Section Header */}
        <div className="astrolabe-section-header">
          <div className="section-title-group">
            <h2 className="section-title" id="skills-heading">
              <span className="hash">#</span>
              <DecryptedText text="skills" />
            </h2>
            <div className="section-title-line" />
          </div>

          <div className="astrolabe-header-pill">
            <span className="pill-dot" />
            <span className="pill-text">ASTROLABE_ORBIT: RADIAL_HUD | 360° DEF_MATRIX</span>
          </div>
        </div>

        {/* Outer Sci-Fi Astrolabe HUD Frame */}
        <div className="astrolabe-hud-frame">
          
          {/* Frame Corner Accents */}
          <span className="hud-corner top-left">┌</span>
          <span className="hud-corner top-right">┐</span>
          <span className="hud-corner bottom-left">└</span>
          <span className="hud-corner bottom-right">┘</span>

          {/* HUD Top Status Bar */}
          <div className="hud-top-bar">
            <div className="hud-subcore-label">
              [ASTROLABE_SYS_CORE // REF_360_GEO_POLAR]
            </div>

            <div className="hud-header-content">
              <div className="hud-main-title">
                <span className="hud-title-dot" />
                <span className="hud-title-text">
                  01 // CYBER ASTROLABE HUD &amp; CONCENTRIC DEFENSE ORBITS
                </span>
              </div>

              <div className="hud-status-badges">
                <span className="hud-badge-defense">[ORBITAL_DEFENSE: ENGAGED]</span>
                <span className="hud-badge-pill cyan">POLAR_RAD: 320PX</span>
                <span className="hud-badge-pill green">SYNC: 100%_ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Astrolabe Radial Arena (Concentric Orbits + 8 Vector Cards) */}
          <div className="astrolabe-arena">

            {/* Background SVG Radar with Concentric Circles, Radial Axes & Laser Connectors */}
            <div className="astrolabe-radar-background" aria-hidden="true">
              <svg 
                className="astrolabe-radar-svg" 
                viewBox="0 0 800 800" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="radar-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="astrolabe-sweep-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity="0" />
                    <stop offset="70%" stopColor="#00ff88" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#00ff88" stopOpacity="0.32" />
                  </linearGradient>
                </defs>

                {/* Outer Concentric Orbit Rings */}
                <circle cx="400" cy="400" r="370" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                <circle cx="400" cy="400" r="340" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" strokeDasharray="4 8" />
                
                {/* Main 280px Orbit Rings */}
                <circle cx="400" cy="400" r="280" stroke="rgba(0, 255, 136, 0.25)" strokeWidth="1.2" />
                <circle cx="400" cy="400" r="280" stroke="rgba(0, 255, 136, 0.55)" strokeWidth="1.6" strokeDasharray="16 28" className="orbit-rotate-cw" />
                
                {/* Mid & Inner Rings */}
                <circle cx="400" cy="400" r="200" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 6" className="orbit-rotate-ccw" />
                <circle cx="400" cy="400" r="145" stroke="rgba(0, 255, 136, 0.28)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="400" cy="400" r="106" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" strokeDasharray="4 4" />

                {/* Radial Crosshairs */}
                <line x1="400" y1="25" x2="400" y2="775" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="25" y1="400" x2="775" y2="400" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="135" y1="135" x2="665" y2="665" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 5" />
                <line x1="135" y1="665" x2="665" y2="135" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 5" />

                {/* Rotating Conical Radar Sweep Wedge */}
                <g className="astrolabe-svg-sweep-group">
                  <path
                    d="M 400 400 L 400 120 A 280 280 0 0 1 598 202 Z"
                    fill="url(#astrolabe-sweep-grad)"
                  />
                  <line
                    x1="400"
                    y1="400"
                    x2="598"
                    y2="202"
                    stroke="#00ff88"
                    strokeWidth="2"
                    filter="url(#radar-glow)"
                  />
                </g>

                {/* Laser Connector Lines & Orbit Anchor Nodes for the 8 Sectors */}
                {ASTROLABE_SKILLS.map((skill) => {
                  const rad = (skill.angleDeg - 90) * (Math.PI / 180);
                  const nodeX = 400 + 280 * Math.cos(rad);
                  const nodeY = 400 + 280 * Math.sin(rad);

                  // Outer endpoint pointing towards the card
                  const outX = 400 + 355 * Math.cos(rad);
                  const outY = 400 + 355 * Math.sin(rad);

                  const isActive = activeSkillId === skill.id;

                  return (
                    <g key={skill.id} className={`radar-node-group ${isActive ? 'active-vector' : ''}`}>
                      {/* Laser Connector Line to Sector Card */}
                      <line
                        x1={nodeX}
                        y1={nodeY}
                        x2={outX}
                        y2={outY}
                        stroke={isActive ? skill.bulletColor : 'rgba(0, 255, 136, 0.28)'}
                        strokeWidth={isActive ? '1.8' : '1'}
                        strokeDasharray={isActive ? 'none' : '3 4'}
                        filter={isActive ? 'url(#radar-glow)' : undefined}
                      />

                      {/* Anchor Orbit Node */}
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r={isActive ? 6 : 4.5}
                        fill={skill.bulletColor}
                        filter="url(#node-glow)"
                        className={isActive ? 'node-pulse-active' : ''}
                      />
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r={isActive ? 12 : 8}
                        stroke={skill.bulletColor}
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity={isActive ? 0.9 : 0.45}
                        className="spin-wireframe"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 3x3 Radial Grid containing the 8 Vector Skill Cards & Center Nexus */}
            <div className="astrolabe-grid">
              
              {/* Row 1: Top-Left (315°_NW), Top-Center (000°_N), Top-Right (045°_NE) */}
              <div className="grid-cell pos-top-left">
                {topLeft && (
                  <VectorSkillCard
                    skill={topLeft}
                    isActive={activeSkillId === topLeft.id}
                    onMouseEnter={() => handleCardMouseEnter(topLeft.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(topLeft.id)}
                  />
                )}
              </div>

              <div className="grid-cell pos-top-center">
                {topCenter && (
                  <VectorSkillCard
                    skill={topCenter}
                    isActive={activeSkillId === topCenter.id}
                    onMouseEnter={() => handleCardMouseEnter(topCenter.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(topCenter.id)}
                  />
                )}
              </div>

              <div className="grid-cell pos-top-right">
                {topRight && (
                  <VectorSkillCard
                    skill={topRight}
                    isActive={activeSkillId === topRight.id}
                    onMouseEnter={() => handleCardMouseEnter(topRight.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(topRight.id)}
                  />
                )}
              </div>

              {/* Row 2: Mid-Left (270°_W), Center Nexus Core, Mid-Right (090°_E) */}
              <div className="grid-cell pos-mid-left">
                {midLeft && (
                  <VectorSkillCard
                    skill={midLeft}
                    isActive={activeSkillId === midLeft.id}
                    onMouseEnter={() => handleCardMouseEnter(midLeft.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(midLeft.id)}
                  />
                )}
              </div>

              {/* Center Nexus Core Hub */}
              <div className="grid-cell pos-center-nexus">
                <div className="nexus-core-pod" tabIndex={0} role="region" aria-label="Defense Astrolabe Nexus Core">
                  <div className="nexus-rotating-ring" />
                  <div className="nexus-inner-badge">
                    <span className="nexus-tag">[NEXUS_CORE]</span>
                    <div className="nexus-ops-indicator">
                      <span className="ops-dot">●</span>
                      <span className="ops-label">EMPIRICAL_OPS</span>
                    </div>
                    <h3 className="nexus-title">DEFENSE ASTROLABE</h3>
                    <p className="nexus-subtitle">R-360 Threat Hardening</p>
                    <div className="nexus-score-badge">
                      <span className="nexus-score-num">89.4</span>
                      <span className="nexus-score-div">/</span>
                      <span className="nexus-score-total">100 AGGREGATE</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-cell pos-mid-right">
                {midRight && (
                  <VectorSkillCard
                    skill={midRight}
                    isActive={activeSkillId === midRight.id}
                    onMouseEnter={() => handleCardMouseEnter(midRight.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(midRight.id)}
                  />
                )}
              </div>

              {/* Row 3: Bottom-Left (225°_SW), Bottom-Center (180°_S), Bottom-Right (135°_SE) */}
              <div className="grid-cell pos-bottom-left">
                {bottomLeft && (
                  <VectorSkillCard
                    skill={bottomLeft}
                    isActive={activeSkillId === bottomLeft.id}
                    onMouseEnter={() => handleCardMouseEnter(bottomLeft.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(bottomLeft.id)}
                  />
                )}
              </div>

              <div className="grid-cell pos-bottom-center">
                {bottomCenter && (
                  <VectorSkillCard
                    skill={bottomCenter}
                    isActive={activeSkillId === bottomCenter.id}
                    onMouseEnter={() => handleCardMouseEnter(bottomCenter.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(bottomCenter.id)}
                  />
                )}
              </div>

              <div className="grid-cell pos-bottom-right">
                {bottomRight && (
                  <VectorSkillCard
                    skill={bottomRight}
                    isActive={activeSkillId === bottomRight.id}
                    onMouseEnter={() => handleCardMouseEnter(bottomRight.id)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => handleCardClick(bottomRight.id)}
                  />
                )}
              </div>

            </div>

            {/* Compact Holographic Dialogue Box rendered at center of astrolabe arena */}
            {activeSkill && (
              <SkillDetailModal
                skill={activeSkill}
                onClose={handleCloseModal}
                onMouseEnter={handleDialogueMouseEnter}
                onMouseLeave={handleDialogueMouseLeave}
              />
            )}

          </div>

          {/* Bottom Oscilloscope Telemetry Monitor */}
          <OscilloscopeMonitor activeSkill={activeSkill} />

        </div>

      </div>
    </section>
  );
}

/**
 * VectorSkillCard — Individual Radial Skill Sector Card
 */
function VectorSkillCard({
  skill,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick
}) {
  return (
    <TiltCard
      className={`vector-skill-card ${isActive ? 'is-active' : ''}`}
      maxTilt={5}
      scale={1.02}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`${skill.title} details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span className="card-bracket-tl" aria-hidden="true">⌜</span>
      <span className="card-bracket-br" aria-hidden="true">⌟</span>

      <div className="vcard-header">
        <div className="vcard-title-group">
          <span 
            className="vcard-bullet" 
            style={{ color: skill.bulletColor }}
            aria-hidden="true"
          >
            {skill.bulletType === 'circle' ? '●' : '■'}
          </span>
          <span className="vcard-title">{skill.title}</span>
        </div>
      </div>

      <p className="vcard-summary">{skill.summary}</p>

      <div className="vcard-footer">
        <span className={`vcard-sub-left ${skill.subLeftColor}`}>
          {skill.subLeft}
        </span>
        <span className={`vcard-sub-right ${skill.subRightColor}`}>
          {skill.subRight}
        </span>
      </div>
    </TiltCard>
  );
}
