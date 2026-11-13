import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = new FormData();
      payload.append('access_key', PERSONAL_INFO.web3formsAccessKey);
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('subject', `[PORTFOLIO TRANSMISSION] ${formData.subject || 'Security Assessment Inquiry'}`);
      payload.append('message', formData.message);
      payload.append('from_name', `${formData.name} (via Portfolio Contact)`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        onShowToast('[+] TRANSMISSION DELIVERED: Message sent directly to Dushyant\'s terminal.');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Transmission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setSubmitError(err.message || 'Handshake error');
      onShowToast(`[-] TRANSMISSION FAILED: ${err.message || 'Unable to establish link'}`);

      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`Copied ${label}: ${text}`);
    }).catch(() => {
      onShowToast(`Selected ${label}: ${text}`);
    });
  };

  return (
    <section className="section" id="contact" aria-labelledby="contacts-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="contacts-heading">
              <span className="hash">#</span>
              <DecryptedText text="contact" />
            </h2>
            <div className="section-title-line"></div>
          </div>
        </div>

        <div className="contacts-layout">
          
          {/* Left: Inquiries & Interactive Transmission Form */}
          <div className="contacts-info">
            <p>
              I'm interested in cybersecurity consulting, red team engagements, and enterprise infrastructure audits. However, if you have other requests, inquiries, or need a vulnerability assessment, don't hesitate to reach out.
            </p>
            <div className="pgp-notice font-mono">&gt; PGP / Encrypted inquiries welcome.</div>

            <form className="transmission-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="senderName" className="form-label">[OPERATOR_NAME]</label>
                <input 
                  type="text" 
                  id="senderName" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder="Your name / organization" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail" className="form-label">[OPERATOR_EMAIL]</label>
                <input 
                  type="email" 
                  id="senderEmail" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder="your.email@domain.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderSubject" className="form-label">[ENGAGEMENT_SCOPE]</label>
                <input 
                  type="text" 
                  id="senderSubject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder="Web Pentest / Red Team / Security Audit" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderMessage" className="form-label">[TRANSMISSION_PAYLOAD]</label>
                <textarea 
                  id="senderMessage" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form-textarea" 
                  placeholder="Detail your security objective or target scope..." 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>[TRANSMITTING PAYLOAD...]</span>
                ) : submitSuccess ? (
                  <span style={{ color: 'var(--primary-neon)' }}>✓ [TRANSMISSION DELIVERED]</span>
                ) : submitError ? (
                  <span style={{ color: '#ff3366' }}>✕ [TRANSMISSION ERROR - RETRY]</span>
                ) : (
                  <>
                    <span>Send transmission</span>
                    <span className="font-mono">&rarr;</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Terminal Communication Card */}
          <TiltCard className="comms-terminal-card" maxTilt={4} scale={1.01}>
            <div className="comms-header">
              <span className="comms-title">MESSAGE ME HERE</span>
              <span className="comms-badge">SEC_COMMS</span>
            </div>

            <ul className="comms-list">
              {/* Email */}
              <li className="comms-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  onClick={(e) => {
                    // allows click-to-copy or normal compose
                  }}
                  title="Click to copy or compose"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'Email')}
                  className="cli-toggle-btn" 
                  style={{ marginLeft: 'auto', padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                  title="Copy email to clipboard"
                >
                  copy
                </button>
              </li>

              {/* LinkedIn */}
              <li className="comms-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/dushyant-parashar
                </a>
              </li>

              {/* TryHackMe */}
              <li className="comms-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <a href={PERSONAL_INFO.tryhackme} target="_blank" rel="noopener noreferrer">
                  {PERSONAL_INFO.thmRank}
                </a>
              </li>

              {/* Twitter / X */}
              <li className="comms-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer">
                  x.com/HarveY_mr_09
                </a>
              </li>

              {/* Instagram */}
              <li className="comms-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer">
                  instagram.com/dushyant.parashar09
                </a>
              </li>
            </ul>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
