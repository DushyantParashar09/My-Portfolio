import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Projects({ onOpenExploit }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'offensive', label: 'Offensive Security' },
    { id: 'infra', label: 'Infrastructure & Range' },
    { id: 'appsec', label: 'AppSec & Full Stack' },
  ];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <section className="section" id="works" aria-labelledby="projects-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="projects-heading">
              <span className="hash">#</span>
              <DecryptedText text="works" />
            </h2>
            <div className="section-title-line"></div>
          </div>
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="section-action-link font-mono"
          >
            <span>View all</span>
            <span>&sim;&sim;&sim;&gt;</span>
          </a>
        </div>

        {/* Filter Chips */}
        <div className="project-filter-bar" role="tablist" aria-label="Filter projects">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
              role="tab"
              aria-selected={activeFilter === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <TiltCard className="project-card" key={project.id} maxTilt={5} scale={1.012}>
              {project.isRangeHeader ? (
                <div className="card-terminal-header">
                  <div className="card-range-header">
                    <svg className="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <div style={{ fontWeight: 700, color: 'var(--text-white)', letterSpacing: '0.05em' }}>
                      {project.rangeTitle}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                      {project.rangeSub}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card-terminal-header">
                  <div className="target-badge-row">
                    <span className="badge-target">{project.target}</span>
                    <span 
                      className="badge-cvss" 
                      style={project.badgeColor ? { color: project.badgeColor, background: 'rgba(0,255,136,0.12)' } : {}}
                    >
                      {project.badge}
                    </span>
                  </div>
                  {project.appTitle && (
                    <div style={{ fontWeight: 700, color: 'var(--text-white)', fontSize: '0.85rem', margin: '0.15rem 0' }}>
                      {project.appTitle}
                    </div>
                  )}
                  {project.codeLines && project.codeLines.map((line, lIdx) => (
                    <div className="terminal-line-code" key={lIdx}>{line}</div>
                  ))}
                  <span className="badge-verified">{project.badgeVerified}</span>
                </div>
              )}

              <div className="card-content">
                <div className="project-tech-tags">{project.tech}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-card-action"
                  >
                    Live &lt;&sim;&gt;
                  </a>
                  <button 
                    className="btn-card-action highlight" 
                    onClick={() => onOpenExploit(project.id)}
                  >
                    {project.actionLabel}
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
