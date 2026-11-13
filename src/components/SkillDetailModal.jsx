import React, { useEffect } from 'react';

/**
 * SkillDetailModal — Compact Holographic Hover Dialogue Box
 * Rendered when hovering or selecting a skill sector on the Cyber Astrolabe HUD.
 */
export default function SkillDetailModal({
  skill,
  onClose,
  onMouseEnter,
  onMouseLeave
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!skill) return null;

  return (
    <div
      className="astrolabe-compact-dialog-wrap"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="dialog"
      aria-modal="true"
      aria-label={`${skill.title} Telemetry Details`}
    >
      <div className="astrolabe-compact-dialog-box">
        {/* Holographic Corner Accents */}
        <span className="cdialog-corner top-left" aria-hidden="true">┌</span>
        <span className="cdialog-corner top-right" aria-hidden="true">┐</span>
        <span className="cdialog-corner bottom-left" aria-hidden="true">└</span>
        <span className="cdialog-corner bottom-right" aria-hidden="true">┘</span>

        {/* Dialog Header */}
        <div className="cdialog-header">
          <div className="cdialog-header-left">
            <span
              className="cdialog-bullet"
              style={{ color: skill.bulletColor }}
              aria-hidden="true"
            >
              {skill.bulletType === 'circle' ? '●' : '■'}
            </span>
            <h3 className="cdialog-title">{skill.title}</h3>
          </div>

          <div className="cdialog-header-right">
            <button
              type="button"
              className="cdialog-close-btn"
              onClick={onClose}
              aria-label="Close dialogue"
            >
              ×
            </button>
          </div>
        </div>

        {/* Dialog Subbar */}
        <div className="cdialog-subbar">
          <span className="cdialog-category">{skill.category}</span>
        </div>

        {/* Dialog Split Body (2-Column Grid) */}
        <div className="cdialog-split-body">
          {/* Left Column: Proficiency, Description & Telemetry */}
          <div className="cdialog-col-left">
            <div className="cdialog-meter-section">
              <div className="cdialog-meter-labels">
                <span className="cdialog-meter-label">PROFICIENCY INDEX</span>
                <span className="cdialog-meter-score mono green">
                  PRO_GRADE: <strong className="cyan">{skill.proficiency}%</strong>
                </span>
              </div>
              <div className="cdialog-meter-bar">
                <div
                  className="cdialog-meter-fill"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>

            <p className="cdialog-desc">{skill.description}</p>
          </div>

          {/* Right Column: Skills from Resume using box/chip styling */}
          <div className="cdialog-col-right">
            <div>
              <div className="cdialog-sec-title">// {skill.skillsHeading || 'CORE SKILLS'}</div>
              <div className="cdialog-chips">
                {(skill.skillsList || []).map((item, idx) => (
                  <span key={idx} className="cdialog-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

