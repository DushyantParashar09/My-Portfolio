import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CliTerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const outputEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const COMMAND_HANDLERS = {
    help: () => ({
      text: `Available Terminal Commands:
  - whoami       : Operator identity, credentials, and affiliations
  - skills       : Offensive security skillset & tool categorization
  - projects     : Catalog of offensive security & infrastructure projects
  - exp          : Professional work history (Deloitte, HackElite, Protechmanize)
  - certs        : Validated cybersecurity certifications
  - blogs        : Security publications and Medium writeups
  - contact      : Encrypted transmission coordinates
  - cat resume   : Download / view latest executive resume (PDF)
  - nmap [host]  : Run realistic service vulnerability scan
  - clear        : Clear terminal output screen
  - matrix       : Toggle matrix visual pulse
  - exit         : Close interactive shell`,
      type: 'system'
    }),

    whoami: () => ({
      text: `OPERATOR IDENTITY:
  Name        : ${PERSONAL_INFO.name}
  Current Role: ${PERSONAL_INFO.currentRole} @ ${PERSONAL_INFO.company} )
  Specialty   : Web, API, Network Pentesting & Adversary Emulation
  Education   : B.Tech in IT - ${PERSONAL_INFO.college} (${PERSONAL_INFO.cgpa} CGPA)
  Rank        : TryHackMe ${PERSONAL_INFO.thmRank}
  Status      : [ACTIVE_DEFENDER // RED_TEAM_OPERATOR]`,
      type: 'highlight'
    }),

    skills: () => ({
      text: `CORE SKILLS (from Resume):
  [Offensive Sec & AppSec]  : Web App Pentesting, API Security, Red Team, Adversary Emulation, Attack Path Analysis
  [Attack Techniques]       : Initial Access, PrivEsc, Lateral Movement, Persistence, Credential Harvesting, SQLi, XSS, SSRF, IDOR, XXE
  [Threat Analysis & Stds]  : MITRE ATT&CK Mapping, Threat Actor Simulation, Threat Intel Analysis, OWASP Top 10, CVSS
  [Security Tools]          : Burp Suite, Metasploit, Nmap, Nessus, SQLmap, Nikto, Hydra, OWASP ZAP, Postman, BloodHound, Gobuster
  [Scripting & Programming] : Python (Automation & Validation), Bash/Shell, Windows PowerShell, Java, SQL
  [Cloud, Network & Proto]  : AWS, Cloudflare WAF, TCP/IP Suite, Network Segmentation, SSH, HTTPS, SMTP, Packet Analysis`,
      type: 'system'
    }),

    projects: () => ({
      text: `PORTFOLIO HIGHLIGHTS:
  [01] Web Hacking & Exploitation Pipeline  (Python, Burp Suite, Kali, OWASP)
  [02] Virtual Cyber Range & Sandbox        (pfSense, Suricata, Active Directory)
  [03] Adversary Emulation & Simulation Lab (MITRE ATT&CK, BloodHound, Metasploit)
  [04] Enterprise Red Team Sandbox V2       (Palo Alto, Snort, Network Segmentation)
  [05] Community Learning Portal            (Node.js, Express, React, Hardened Auth)
  * Click project cards or type 'cat resume' for full technical audits.`,
      type: 'system'
    }),

    exp: () => ({
      text: `CAREER CHRONOLOGY:
  [Oct 2026 - PRES] Deloitte (Bengaluru) - Senior Executive - VAPT
                    Web/API/Network Pentesting, OWASP Top 10, PoC validation, stakeholder reports.
  [Dec 2025 - Sep 2026] HackElite Pvt Ltd (Delhi) - Penetration Tester
                    50+ Web apps & APIs pentested, red team emulation, Python automation.
  [Jul 2024 - Nov 2025] ProTechmanize (Thane) - Offensive Security Consultant
                    100+ infrastructure assets audited, firewall/WAF hardening, won 2 excellence awards.
  [Jul 2022 - Aug 2023] CyberSocial Pvt Ltd - Cyber Security Intern
                    OSINT investigations, MITRE ATT&CK mapping, hands-on lab exercises.`,
      type: 'system'
    }),

    certs: () => ({
      text: `CERTIFICATION LEDGER:
  [CEH]       Certified Ethical Hacker - IIT Kharagpur (NPTEL)
  [THM]       CompTIA PenTest+ & Jr Penetration Tester - TryHackMe Top 8%
  [SEC+]      CompTIA PenTest+ Certification Roadmap
  [ISO27001]  ISO/IEC 27001 Lead Implementer - Information Security
  [NETSKOPE]  Cloud Security Certification - Netskope`,
      type: 'system'
    }),

    blogs: () => ({
      text: `PUBLICATIONS & WRITEUPS:
  [01] SECURITY & TRANSPARENCY OF CRYPTOCURRENCY WITH BLOCKCHAIN (Medium)
       https://medium.com/@dushyant0913/security-transparency-of-cryptocurrency-with-blockchain-8e029e87aaec
  * Full feed available on Medium: ${PERSONAL_INFO.medium}`,
      type: 'system'
    }),

    contact: () => ({
      text: `COMMUNICATION CHANNELS:
  Email    : ${PERSONAL_INFO.email}
  LinkedIn : ${PERSONAL_INFO.linkedin}
  Twitter  : ${PERSONAL_INFO.twitter}
  Instagram: ${PERSONAL_INFO.instagram}
  TryHackMe: ${PERSONAL_INFO.tryhackme}`,
      type: 'highlight'
    }),

    'cat resume': () => {
      window.open(PERSONAL_INFO.resumePdf, '_blank');
      return {
        text: `[+] Initiating transmission: Opening ${PERSONAL_INFO.resumePdf}...`,
        type: 'highlight'
      };
    },

    nmap: (args) => {
      const target = args[0] || 'target.corp.internal';
      return {
        text: `Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toISOString()}
Initiating SYN Stealth Scan against ${target} [10.0.8.24]
Nmap scan report for ${target} (10.0.8.24)
Host is up (0.0012s latency).
PORT     STATE SERVICE       VERSION
22/tcp   open  ssh           OpenSSH 8.9p1 Ubuntu 3ubuntu0.4
80/tcp   open  http          nginx 1.18.0 (Ubuntu)
443/tcp  open  ssl/https     nginx 1.18.0
8080/tcp open  http-proxy    Traefik API Gateway
Service detection performed. 4 open ports found.
[+] Security Advisory: Port 8080 lacks strict mutual TLS enforcement.`,
        type: 'system'
      };
    },

    matrix: () => {
      document.body.classList.toggle('matrix-pulse');
      return {
        text: `[+] Matrix pulse mode toggled.`,
        type: 'highlight'
      };
    },

    clear: () => {
      setHistory([]);
      return null;
    },

    exit: () => {
      onClose();
      return null;
    }
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      const raw = inputVal.trim();
      setInputVal('');
      if (!raw) return;

      const newHistory = [...history, { text: `operator@secops:~$ ${raw}`, type: 'prompt' }];

      const parts = raw.split(' ');
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      if (raw.toLowerCase() === 'cat resume') {
        const res = COMMAND_HANDLERS['cat resume']();
        newHistory.push(res);
      } else if (COMMAND_HANDLERS[cmd]) {
        const res = COMMAND_HANDLERS[cmd](args);
        if (res) newHistory.push(res);
      } else {
        newHistory.push({
          text: `Command not recognized: '${cmd}'. Type 'help' for available instructions.`,
          type: 'error'
        });
      }

      setHistory(newHistory);
    }
  };

  return (
    <div 
      className="modal-overlay active" 
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cliTerminalTitle"
    >
      <div className="modal-window" style={{ maxWidth: '820px' }}>
        <div className="modal-header">
          <div className="modal-title" id="cliTerminalTitle">
            <span>[TERMINAL_SESSION: 0x7F_EMERALD]</span> &mdash; zsh /bin/bash (secops)
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close terminal">&times;</button>
        </div>
        
        <div className="cli-body">
          <div className="cli-output-line system font-mono">
            {`[+] INITIALIZING SECOPS TERMINAL v2.4 (Matrix Emerald Architecture)...
[+] AUTHENTICATED: operator@secops-node01 [LEVEL_08_OP]
[+] TARGET CONTEXT: Dushyant Parashar Security Operations Portfolio
[*] Type 'help' to review operational commands, or 'cat resume' for CV file.
------------------------------------------------------------------------`}
          </div>

          {history.map((item, idx) => (
            <div key={idx} className={`cli-output-line ${item.type}`}>
              {item.text}
            </div>
          ))}

          <div ref={outputEndRef} />

          <div className="cli-input-row font-mono">
            <span className="cli-prompt-symbol">operator@secops:~$</span>
            <input 
              ref={inputRef}
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleInputSubmit}
              className="cli-input" 
              placeholder="type 'help', 'whoami', 'exp', 'certs'..." 
              autoComplete="off" 
              spellCheck="false" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
