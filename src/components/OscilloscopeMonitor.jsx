import React, { useRef, useEffect } from 'react';

/**
 * OscilloscopeMonitor — Panoramic Live RF Telemetry Oscilloscope
 * Renders animated neon sine wave harmonics synced with active skill sectors.
 */
export default function OscilloscopeMonitor({ activeSkill }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = true;

    // Handle crisp canvas rendering across device pixel ratios
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      if (!isRunning) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle oscilloscope grid
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)';
      ctx.lineWidth = 1;

      const gridSpacingX = 40;
      for (let x = 0; x < width; x += gridSpacingX) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      const gridSpacingY = 20;
      for (let y = 0; y < height; y += gridSpacingY) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Center baseline reference
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const centerY = height / 2;
      const speed = activeSkill ? 0.055 : 0.022;
      phaseRef.current += speed;
      const phase = phaseRef.current;

      const freq = activeSkill ? 0.026 : 0.014;
      const amp = activeSkill ? Math.min(26, height * 0.32) : Math.min(13, height * 0.18);
      const harmonicFreq = activeSkill ? 0.065 : 0.028;
      const harmonicAmp = activeSkill ? amp * 0.35 : amp * 0.22;

      // 3. Secondary subtle cyan harmonic trace
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.38)';
      for (let x = 0; x < width; x++) {
        const y =
          centerY +
          Math.sin(x * freq + phase * 0.75) * (amp * 0.7) +
          Math.cos(x * harmonicFreq * 0.5 - phase * 0.45) * harmonicAmp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 4. Primary neon wave trace with glowing shadow
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = activeSkill ? 2 : 1.5;
      ctx.strokeStyle = activeSkill ? '#00ff88' : 'rgba(0, 255, 136, 0.72)';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = activeSkill ? 12 : 5;

      for (let x = 0; x < width; x++) {
        const y =
          centerY +
          Math.sin(x * freq + phase) * amp +
          Math.sin(x * harmonicFreq + phase * 1.35) * harmonicAmp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [activeSkill]);

  return (
    <div className="astrolabe-oscilloscope-container" aria-label="Live RF Telemetry Oscilloscope">
      <div className="oscilloscope-header">
        <div className="oscilloscope-title-group">
          <span className="font-mono text-neon-cyan" style={{ fontSize: '0.75rem', marginRight: '0.35rem' }}>~~~</span>
          <span className="oscilloscope-title">
            PANORAMIC TELEMETRY OSCILLOSCOPE // 2.4GHZ - 5.8GHZ SPECTRUM MONITOR
          </span>
        </div>

        <div className="oscilloscope-metrics">
          <span className="osc-metric">
            PKT_FLUX: <strong className="green">1,842 pps</strong>
          </span>
          <span className="osc-metric">
            SAMPLING: <strong className="cyan">96 kHz</strong>
          </span>
          <span className="osc-metric">
            NOISE_FLOOR: <strong className="dim">-92 dBm</strong>
          </span>
        </div>
      </div>

      <div className="oscilloscope-viewport">
        <canvas ref={canvasRef} className="oscilloscope-wave-canvas" />
        <div className="oscilloscope-signal-badge">
          <span className="signal-dot" aria-hidden="true">●</span>
          <span>
            {activeSkill
              ? `SIGNAL: LOCKED [${activeSkill.title.toUpperCase()}]`
              : 'SIGNAL: STEADY_ENCRYPTED [AES-256-GCM]'}
          </span>
        </div>
      </div>

      <div className="oscilloscope-footer">
        <span className="osc-footer-left">RADIAL_STARS: 08 ACTIVE VECTORS</span>
        <span className="osc-footer-center">CTF TELEMETRY // TRYHACKME TOP 8% AUDITED</span>
        <span className="osc-footer-right">SYSTEM_INTEGRITY: OPTIMAL (100%)</span>
      </div>
    </div>
  );
}

