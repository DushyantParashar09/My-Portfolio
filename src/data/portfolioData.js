import heroHackerPhoto from '../../images/dushyant_hero_photo.png';

export const PERSONAL_INFO = {
  name: "Dushyant Parashar",
  title: "Offensive Security Professional & Security Engineer",
  currentRole: "Senior Executive - VAPT",
  company: "Deloitte India",
  location: "India",
  email: "parashardushyant22@gmail.com",
  github: "https://github.com/DushyantParashar09",
  linkedin: "https://www.linkedin.com/in/dushyant-parashar-069220201/",
  tryhackme: "https://tryhackme.com/p/Mr.Dushyant",
  medium: "https://medium.com/@dushyant0913",
  twitter: "https://x.com/HarveY_mr_09",
  instagram: "https://www.instagram.com/dushyant.parashar09/",
  resumePdf: "Resume-Dushyant-Parashar_updated.pdf",
  cgpa: "8.0",
  college: "Guru Ghasidas Vishwavidyalaya, Bilaspur (B.Tech IT)",
  thmRank: "Top 8% (Level 8 Operator)",
  avatar: "images/dushyant12_cropped-Photoroom.png",
  heroHackerImg: heroHackerPhoto,
  web3formsAccessKey: "11a4389c-ad16-4d89-8ef9-6ad22f883c98",
};

export const EXPERIENCES = [
  {
    company: "Deloitte",
    location: "Bengaluru, India",
    role: "Senior Executive — VAPT",
    period: "Oct 2026 — PRESENT",
    bullets: [
      "Conduct web application, API, and network penetration testing to identify, validate, and assess security vulnerabilities using manual techniques and industry-standard tools.",
      "Assess applications against OWASP Top 10 and industry best practices, focusing on vulnerabilities such as XSS, SQL Injection, IDOR, SSRF, authentication flaws, and access control weaknesses.",
      "Perform vulnerability validation and risk assessment, develop proof-of-concept (PoC) evidence, and determine severity based on business impact and exploitability.",
      "Prepare detailed VAPT reports documenting technical findings, risk ratings, exploitation evidence, and actionable remediation recommendations for enterprise stakeholders."
    ]
  },
  {
    company: "HackElite Pvt Ltd",
    location: "Delhi, India",
    role: "Penetration Tester",
    period: "Dec 2025 — Sep 2026",
    bullets: [
      "Led red team and adversary emulation engagements across web and API targets, simulating attack stages such as initial access, privilege escalation, lateral movement, and persistence.",
      "Performed penetration testing across 50+ Web applications and APIs, identifying critical issues aligned with OWASP Top 10 and MITRE ATT&CK.",
      "Combined automated and manual testing using OWASP ZAP, Nessus, and Burp Suite to validate vulnerabilities such as XSS, SQLi, XXE, CSRF, File Inclusion, and authentication bypass.",
      "Built custom Python scripts to automate reconnaissance and vulnerability validation tasks, improving repeatability and test coverage.",
      "Delivered technical and executive reports with clear risk impact, attack paths, and remediation guidance, supporting retesting after developer fixes."
    ]
  },
  {
    company: "ProTechmanize",
    location: "Thane, India",
    role: "Offensive Security Consultant",
    period: "Jul 2024 — Nov 2025",
    bullets: [
      "Conducted network and infrastructure penetration testing across 100+ internal and external assets, identifying misconfigurations and exploitable attack paths.",
      "Developed automation scripts in Python, PowerShell, and Bash for reconnaissance, enumeration, validation, and post-exploitation support.",
      "Performed packet-level traffic analysis and incident investigation to identify attack patterns, detection gaps, and control weaknesses.",
      "Configured and hardened enterprise firewall and WAF solutions including F5, Fortinet, and Palo Alto, then validated their effectiveness against adversarial techniques.",
      "Awarded Fast Starter Award (Apr 2025) and Star Performer of the Month (Jan 2025) for outstanding performance and reporting excellence."
    ]
  },
  {
    company: "CyberSocial Pvt Ltd",
    location: "India",
    role: "Cyber Security Intern",
    period: "Jul 2022 — Aug 2023",
    bullets: [
      "Gained hands-on experience in penetration testing and adversary simulation through structured labs and attack scenarios.",
      "Conducted OSINT investigations and threat mapping using the MITRE ATT&CK framework.",
      "Supported red team exercises involving reconnaissance, exploitation, and post-exploitation techniques."
    ]
  }
];

export const PROJECTS = [
  {
    id: "web_pipeline",
    category: "offensive appsec",
    target: "TARGET: OWASP_VULN",
    badge: "CVSS 8.8 [HIGH]",
    badgeVerified: "CVE-2024-VERIFIED",
    codeLines: [
      "[+] Payload: ' OR '1'='1' --",
      "[+] WAF bypass: SUCCESSFUL",
      "[+] Data dump: /etc/shadow [P0]"
    ],
    tech: "> Python  Burp  Kali  OWASP",
    title: "Web Hacking & Exploitation Pipeline",
    description: "Automated security testing workflow simulating real-world penetration vectors across enterprise web architectures, assessing against OWASP Top 10 vulnerabilities.",
    liveLink: "https://github.com/DushyantParashar09",
    actionLabel: "Audit >="
  },
  {
    id: "cyber_range",
    category: "infra offensive",
    isRangeHeader: true,
    rangeTitle: "LAB: VIRTUAL_RANGE",
    rangeSub: "pfSense · Suricata · Active Directory",
    tech: "> pfSense  Snort  Kali  VirtualBox",
    title: "Virtual Cyber Range & Sandbox",
    description: "Multi-subnet network environment mimicking enterprise SOC configurations with packet inspection, IDS rules, and isolated honeypots for attack simulation.",
    liveLink: "https://github.com/DushyantParashar09",
    actionLabel: "Report ~>"
  },
  {
    id: "adversary_lab",
    category: "offensive infra",
    target: "MITRE ATT&CK: SIMULATION",
    badge: "TTP_ENGAGED",
    badgeColor: "var(--primary-neon)",
    badgeVerified: "THREAT_ACTOR: APT29/FIN7",
    codeLines: [
      "[!] Privilege Escalation & Persistence",
      "[!] Lateral Movement: Pass-The-Hash",
      "[!] Detection Gap Analysis: VERIFIED"
    ],
    tech: "> Python  PowerShell  BloodHound  Metasploit",
    title: "Adversary Emulation & Attack Simulation",
    description: "Executed full attack lifecycle simulations aligned with MITRE ATT&CK to mirror real-world threat actor TTPs, Active Directory attack paths, and forensic investigation.",
    liveLink: "https://github.com/DushyantParashar09",
    actionLabel: "Dossier ~>"
  },
  {
    id: "learning_portal",
    category: "appsec",
    target: "Full Stack App",
    badge: "SECURE_NODE",
    badgeVerified: "ZERO_TRUST_APP",
    appTitle: "LET'S GROW TOGETHER",
    codeLines: [
      "JWT Auth · RBAC · Encrypted Payloads"
    ],
    tech: "> Node.js  Express  React  MongoDB",
    title: "Community Learning Portal",
    description: "Secure web platform with hardened authentication mechanisms, session isolation, role-based access control, and peer collaboration security architecture.",
    liveLink: "https://github.com/DushyantParashar09",
    actionLabel: "Security >="
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    badge: "[01]",
    skills: ["Python (Automation)", "Java", "Bash Scripting", "SQL / NoSQL", "Windows PowerShell", "JavaScript"]
  },
  {
    title: "Environments",
    badge: "[02]",
    skills: ["Kali Linux OS", "Ubuntu Server", "Parrot Security", "Windows Active Directory", "AWS Cloud", "Cloudflare WAF"]
  },
  {
    title: "Tools & Audit",
    badge: "[03]",
    skills: ["Burp Suite Pro", "Metasploit Framework", "Nmap / Netcat", "Nessus / OWASP ZAP", "SQLmap & Gobuster", "BloodHound & Postman", "Wireshark & TCP/IP"]
  },
  {
    title: "Core Security Domains",
    badge: "[SPECIALTY]",
    skills: ["Web Pentesting (OWASP Top 10)", "API Security Testing", "Threat Actor Emulation", "MITRE ATT&CK Mapping", "Attack Path Analysis", "Vulnerability Mgmt (CVSS)", "Red Team Operations"]
  }
];

export const INFRA_SKILLS = [
  "pfSense Firewalls",
  "Snort / Suricata IDS/IPS",
  "Palo Alto & Fortinet NGFW",
  "F5 WAF Configuration",
  "Network Segmentation",
  "Secure Protocols (SSH, HTTPS, LDAP, SMB)"
];

export const ASTROLABE_SKILLS = [
  {
    id: "web_pentesting",
    vec: "000°_N",
    gridPosition: "top_center",
    angleDeg: 0,
    title: "Offensive Security & AppSec",
    bulletType: "circle",
    bulletColor: "#00ff88",
    badge: "95% [P0]",
    badgeVariant: "green",
    summary: "Web App Pentest • API Security • Red Team • Adversary Emulation",
    subLeft: "VEC: 000°_N",
    subRight: "LATENCY: 12ms",
    subLeftColor: "cyan",
    subRightColor: "cyan",
    category: "APPLICATION SECURITY // OFFENSIVE AUDITS",
    status: "ENGAGED [P0_CRITICAL]",
    proficiency: 95,
    aggregateScore: "95 / 100",
    description: "Deep-dive vulnerability assessment and penetration testing across enterprise web architectures, APIs, and microservices aligned with OWASP Top 10 and MITRE ATT&CK adversary tradecraft.",
    skillsHeading: "OFFENSIVE SECURITY & APPLICATION SECURITY",
    skillsList: [
      "Web Application Penetration Testing",
      "API Security Testing",
      "Red Team Operations",
      "Adversary Emulation",
      "Vulnerability Assessment",
      "Attack Path Analysis",
      "Remediation Verification"
    ],
    toolchain: ["Burp Suite Pro", "OWASP ZAP", "SQLmap", "ffuf", "Postman", "Nuclei", "Arjun", "Browser DevTools"],
    realWorldRole: "Conducted web application and API VAPT across 50+ enterprise systems at Deloitte & HackElite, identifying critical authorization and injection vectors.",
    telemetry: {
      attackVector: "HTTP/HTTPS (L7 OSI)",
      protocol: "TLS 1.3 / REST / GraphQL",
      latency: "12ms",
      riskLevel: "CVSS 9.8 [CRITICAL]"
    }
  },
  {
    id: "burp_suite_pro",
    vec: "045°_NE",
    gridPosition: "top_right",
    angleDeg: 45,
    title: "Security Tools: Web & AppSec",
    bulletType: "square",
    bulletColor: "#38bdf8",
    badge: "P0_SUITE",
    badgeVariant: "cyan",
    summary: "Burp Suite • OWASP ZAP • Postman • SQLmap • Nikto",
    subLeft: "BURP: Proxy",
    subRight: "VEC: 045°_NE",
    subLeftColor: "green",
    subRightColor: "dim",
    category: "PROXY INTERCEPTION // APPLICATION TOOLCHAIN",
    status: "OPERATIONAL // PRIMARY_SUITE",
    proficiency: 96,
    aggregateScore: "96 / 100",
    description: "Enterprise web application security testing and automation tools used for intercepting HTTP/S traffic, automated crawling, custom extension pipelines, and API validation.",
    skillsHeading: "SECURITY TOOLS",
    skillsList: [
      "Burp Suite",
      "OWASP ZAP",
      "Postman",
      "SQLmap",
      "Nikto"
    ],
    toolchain: ["Burp Suite Professional", "OWASP ZAP", "Postman", "SQLmap", "Nikto", "Turbo Intruder", "Logger++", "Autorize"],
    realWorldRole: "Configured custom proxy rules and automated scanner pipelines to detect nuanced authorization vulnerabilities across complex multi-tier banking web portals.",
    telemetry: {
      attackVector: "L7 Application Proxy",
      protocol: "HTTP/1.1, HTTP/2, WebSockets",
      latency: "8ms",
      riskLevel: "ENTERPRISE_STANDARD"
    }
  },
  {
    id: "exploit_dev",
    vec: "090°_E",
    gridPosition: "mid_right",
    angleDeg: 90,
    title: "Attack Techniques: Web & Injection",
    bulletType: "circle",
    bulletColor: "#00ff88",
    badge: "88%",
    badgeVariant: "green",
    summary: "SQLi • XSS • SSRF • IDOR • XXE • CSRF • File Inclusion",
    subLeft: "OWASP: Top 10",
    subRight: "VEC: 090°_E",
    subLeftColor: "cyan",
    subRightColor: "dim",
    category: "EXPLOIT VECTORS // APPLICATION ATTACK CHAINS",
    status: "ACTIVE_VALIDATION",
    proficiency: 88,
    aggregateScore: "88 / 100",
    description: "Identifying, chaining, and verifying high-impact web attack techniques including input injection, server-side request forgery, access control bypasses, and file inclusion flaws.",
    skillsHeading: "ATTACK TECHNIQUES",
    skillsList: [
      "SQL Injection",
      "XSS",
      "SSRF",
      "IDOR",
      "XXE",
      "CSRF",
      "File Inclusion",
      "Authentication Bypass"
    ],
    toolchain: ["Burp Suite Pro", "SQLmap", "Browser DevTools", "Custom Python PoCs", "Postman"],
    realWorldRole: "Formulated chained exploit paths demonstrating how cross-site scripting and IDOR can escalate to full administrative account takeover in corporate portals.",
    telemetry: {
      attackVector: "Application Logic / Payload Injection",
      protocol: "Web Application Stack",
      latency: "< 10ms",
      riskLevel: "CVSS 9.3 [HIGH]"
    }
  },
  {
    id: "nmap_netcat",
    vec: "135°_SE",
    gridPosition: "bottom_right",
    angleDeg: 135,
    title: "Security Tools: Network & Recon",
    bulletType: "square",
    bulletColor: "#00ff88",
    badge: "90%",
    badgeVariant: "green",
    summary: "Nmap • Metasploit • Nessus • Hydra • BloodHound • Gobuster",
    subLeft: "NET_RECON: Active",
    subRight: "VEC: 135°_SE",
    subLeftColor: "cyan",
    subRightColor: "dim",
    category: "NETWORK ENUMERATION // INFRASTRUCTURE RECON",
    status: "DEFENSE_MAPPED",
    proficiency: 90,
    aggregateScore: "90 / 100",
    description: "Port scanning, service fingerprinting, automated vulnerability assessment, directory fuzzing, and Active Directory relationship mapping across large network perimeters.",
    skillsHeading: "SECURITY TOOLS",
    skillsList: [
      "Nmap",
      "Metasploit",
      "Nessus",
      "Hydra",
      "BloodHound",
      "Gobuster"
    ],
    toolchain: ["Nmap", "Metasploit Framework", "Nessus Professional", "Hydra", "BloodHound", "Gobuster"],
    realWorldRole: "Scanned and inventoried 100+ internal and external IP subnets at ProTechmanize, identifying open management services and outdated software builds.",
    telemetry: {
      attackVector: "TCP / UDP Protocol Stack",
      protocol: "L4 Transport Layer (RFC 793/768)",
      latency: "15ms",
      riskLevel: "INFRASTRUCTURE_EXPOSURE"
    }
  },
  {
    id: "threat_modeling",
    vec: "180°_S",
    gridPosition: "bottom_center",
    angleDeg: 180,
    title: "Threat Analysis & Frameworks",
    bulletType: "circle",
    bulletColor: "#38bdf8",
    badge: "92%",
    badgeVariant: "cyan",
    summary: "MITRE ATT&CK • Threat Actor Simulation • OWASP Top 10 • CVSS",
    subLeft: "FRAMEWORK: MITRE",
    subRight: "VEC: 180°_S",
    subLeftColor: "green",
    subRightColor: "cyan",
    category: "THREAT INTELLIGENCE // FRAMEWORKS & ACTOR SIMULATION",
    status: "ENGAGED // MITRE_ATT&CK",
    proficiency: 92,
    aggregateScore: "92 / 100",
    description: "Mapping offensive attack paths to MITRE ATT&CK matrices, simulating adversary Tactics, Techniques, and Procedures (TTPs), and quantifying risk severity with CVSS standards.",
    skillsHeading: "THREAT ANALYSIS & FRAMEWORKS",
    skillsList: [
      "MITRE ATT&CK Mapping",
      "Threat Actor Simulation",
      "Threat Intelligence Analysis",
      "OWASP Top 10",
      "CVSS"
    ],
    toolchain: ["MITRE ATT&CK Navigator", "CVSS v3.1 Calculator", "MISP", "Threat Actor Profiles", "OWASP ASVS"],
    realWorldRole: "Mapped simulated cyber attack campaigns against MITRE ATT&CK enterprise matrices at CyberSocial and Deloitte, identifying detection gaps for blue team defenders.",
    telemetry: {
      attackVector: "Adversary TTP Simulation & Mapping",
      protocol: "Enterprise MITRE ATT&CK Framework",
      latency: "< 5ms",
      riskLevel: "THREAT_SURFACE_MAPPED"
    }
  },
  {
    id: "kali_linux",
    vec: "225°_SW",
    gridPosition: "bottom_left",
    angleDeg: 225,
    title: "Attack Techniques: Host & Infra",
    bulletType: "square",
    bulletColor: "#00ff88",
    badge: "SEC_BOX",
    badgeVariant: "green",
    summary: "Initial Access • Privilege Escalation • Lateral Movement • Persistence",
    subLeft: "HOST_INFRA: Active",
    subRight: "VEC: 225°_SW",
    subLeftColor: "cyan",
    subRightColor: "dim",
    category: "HOST COMPROMISE // PRIVILEGE ESCALATION & LATERAL MOVEMENT",
    status: "DOMINATED // LEVEL_8",
    proficiency: 94,
    aggregateScore: "94 / 100",
    description: "Execution of host compromise techniques: gaining initial foothold, escalating local privileges on Linux and Windows endpoints, establishing persistence, and harvesting credentials.",
    skillsHeading: "ATTACK TECHNIQUES",
    skillsList: [
      "Initial Access",
      "Privilege Escalation",
      "Lateral Movement",
      "Persistence",
      "Credential Harvesting",
      "Authentication Bypass"
    ],
    toolchain: ["Kali Linux OS", "BloodHound", "Mimikatz", "Impacket Suite", "Evil-WinRM", "CrackMapExec", "Chisel"],
    realWorldRole: "Simulated internal adversary lateral movement and privilege escalation in Active Directory lab environments, auditing Kerberos delegations and domain trust misconfigurations.",
    telemetry: {
      attackVector: "RPC / SMB / Kerberos (TCP 88/445)",
      protocol: "Active Directory / NTLM / Kerberos",
      latency: "4ms",
      riskLevel: "CRITICAL_DOMAIN_IMPACT"
    }
  },
  {
    id: "wireshark_tshark",
    vec: "270°_W",
    gridPosition: "mid_left",
    angleDeg: 270,
    title: "Cloud, Networking & Protocols",
    bulletType: "circle",
    bulletColor: "#38bdf8",
    badge: "PACKET",
    badgeVariant: "cyan",
    summary: "AWS • Cloudflare WAF • TCP/IP Suite • Secure Protocols • PCAP Analysis",
    subLeft: "PCAP: Real-time",
    subRight: "VEC: 270°_W",
    subLeftColor: "green",
    subRightColor: "dim",
    category: "CLOUD ARCHITECTURE // PROTOCOLS & PACKET ANALYSIS",
    status: "CONTINUOUS_MONITOR",
    proficiency: 93,
    aggregateScore: "93 / 100",
    description: "Enterprise networking and cloud infrastructure assessment: reviewing AWS architectures, verifying Cloudflare WAF protection, auditing secure network protocols, and packet inspection.",
    skillsHeading: "CLOUD, NETWORKING & PROTOCOLS",
    skillsList: [
      "AWS",
      "Cloudflare WAF",
      "TCP/IP Protocol Suite",
      "Network Architecture & Segmentation",
      "Secure Network Protocols (SSH, HTTPS, SMTP, FTP, LDAP, SMB)",
      "Packet Capture & Analysis"
    ],
    toolchain: ["AWS Management Console", "Cloudflare WAF", "Wireshark", "TShark", "TCPDump", "Zeek"],
    realWorldRole: "Audited network firewall and WAF configuration rules at ProTechmanize, analyzing captured traffic packets to confirm isolation between production and management VLANs.",
    telemetry: {
      attackVector: "Raw Packet Telemetry & Protocol Inspection",
      protocol: "Ethernet / IP / TCP / UDP / DNS / TLS",
      latency: "Real-time Capture",
      riskLevel: "STREAM_INSPECTED"
    }
  },
  {
    id: "python_code",
    vec: "315°_NW",
    gridPosition: "top_left",
    angleDeg: 315,
    title: "Scripting & Programming",
    bulletType: "square",
    bulletColor: "#00ff88",
    badge: "3.12 LIVE",
    badgeVariant: "green",
    summary: "Python (Automation) • Bash/Shell • Windows PowerShell • Java • SQL",
    subLeft: "probe_scanner.py",
    subRight: "VEC: 315°_NW",
    subLeftColor: "cyan",
    subRightColor: "dim",
    category: "EXPLOIT SCRIPTING & OFFENSIVE AUTOMATION",
    status: "ENGAGED // v3.12",
    proficiency: 94,
    aggregateScore: "94 / 100",
    description: "Developing custom automated validation scripts, Proof-of-Concept exploits, high-concurrency network scanners, and shell automation pipelines across multi-platform environments.",
    skillsHeading: "SCRIPTING & PROGRAMMING",
    skillsList: [
      "Python (automation & validation scripts)",
      "Bash/Shell Scripting",
      "Windows PowerShell",
      "Java",
      "SQL"
    ],
    toolchain: ["Python 3.12", "Asyncio / Aiohttp", "Requests / Httpx", "Scapy", "Bash / Zsh", "PowerShell Core"],
    realWorldRole: "Authored probe_scanner.py and custom recon pipelines, accelerating vulnerability discovery and automating repetitive manual audit workflows.",
    telemetry: {
      attackVector: "Custom Socket / HTTP Engine",
      protocol: "TCP/IP Raw Sockets / HTTP / IPC",
      latency: "Sub-millisecond Concurrency",
      riskLevel: "CODE_EXECUTION_ENGINE"
    }
  }
];

export const CERTIFICATIONS = [
  {
    tag: "[IIT]",
    title: "Certified Ethical Hacker (CEH)",
    issuer: "IIT Kharagpur (NPTEL)",
    desc: "Curriculum encompassing buffer overflow exploits, network protocols, cryptography, and penetration methodologies."
  },
  {
    tag: "[THM]",
    title: "TryHackMe Top 8% Rank & Labs",
    issuer: "TryHackMe · Rank Level 8 Operator",
    desc: "Hands-on room conquests covering Privilege Escalation, Active Directory enumeration, Wireshark traffic analysis, and CTFs."
  },
  {
    tag: "[SEC+]",
    title: "CompTIA PenTest+",
    issuer: "TryHackMe / CompTIA Roadmap",
    desc: "Vulnerability scanning, exploitation methodologies, scope management, and enterprise compliance reporting standards."
  },
  {
    tag: "[ISO]",
    title: "ISO/IEC 27001 Lead Implementer",
    issuer: "Information Security",
    desc: "Information Security Management System (ISMS) implementation, risk mitigation matrices, security control audits, and compliance governance."
  },
  {
    tag: "[CLOUD]",
    title: "Cloud Security Certification",
    issuer: "Netskope",
    desc: "Cloud infrastructure defense, Zero Trust network architectures, SASE policies, and enterprise cloud data protection."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "fast_starter",
    type: "trophy",
    badge: "RAPID_IMPACT",
    badgeVariant: "green",
    tag: "[01_HONOR]",
    title: "Fast Starter Award",
    company: "Protechmanize",
    date: "Apr 2025",
    sub: "Protechmanize • Apr 2025",
    impactTag: "SECURITY ASSESSMENTS // RAPID DELIVERY",
    desc: "Recognized for outstanding performance and rapid contribution in security assessments and vulnerability discovery."
  },
  {
    id: "star_performer",
    type: "star",
    badge: "MONTHLY_EXCELLENCE",
    badgeVariant: "amber",
    tag: "[02_HONOR]",
    title: "Star Performer of the Month",
    company: "Protechmanize",
    date: "Jan 2025",
    sub: "Protechmanize • Jan 2025",
    impactTag: "CRITICAL ASSETS // CLIENT DELIVERY",
    desc: "Awarded for excellence in vulnerability assessment, reporting, and client delivery across critical enterprise assets."
  }
];

export const BLOG_POSTS = [
  {
    tag: "[MEDIUM // CRYPTOGRAPHY]",
    date: "April 21, 2022",
    meta: "Medium · 4 min read",
    title: "SECURITY & TRANSPARENCY OF CRYPTOCURRENCY WITH BLOCKCHAIN",
    link: "https://medium.com/@dushyant0913/security-transparency-of-cryptocurrency-with-blockchain-8e029e87aaec",
    excerpt: "Different currencies spread across the world were still a problem for increasing global trade. An in-depth exploration of blockchain architecture, cryptographic validation, and decentralized trust mechanisms."
  }
];

export const EXPLOIT_DATABASE = {
  web_pipeline: {
    title: "VULN_AUDIT // Web Hacking & Automated Validation Pipeline",
    cvss: "8.8 [HIGH] - CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:N",
    target: "Enterprise Microservices / Auth Gateways",
    summary: "Automated vulnerability validation engine developed in Python integrating Burp Suite APIs, SQLmap, and custom headless browser fuzzers. Discovered multi-stage access control weaknesses and second-order injection paths.",
    findings: [
      "IDOR in Tenant User Management permitting cross-tenant authorization escalation.",
      "Time-based blind SQL injection in analytical reporting endpoint.",
      "Cloudflare WAF rule evasion via chunked transfer encoding and Unicode parameter mutation."
    ],
    poc: `[+] TARGET: https://api.corp-gateway.internal/v2/tenants/0x992/query\n[+] PAYLOAD: {"role": "secops_admin", "signature": "' UNION SELECT null, password_hash, token FROM sec_users--"}\n[+] HTTP RESPONSE: 200 OK [JSON Payload Disclosed]\n[+] IMPACT: Complete bypass of RBAC enforcement and tenant data exfiltration`,
    remediation: "Implemented parameterized ORM bindings, strict input validation schema, and automated regression checks in CI/CD before staging deployment."
  },
  cyber_range: {
    title: "INFRA_DOSSIER // Virtual Enterprise Cyber Range & SOC Sandbox",
    cvss: "9.2 [CRITICAL] - Network Infrastructure Hardening",
    target: "Multi-Subnet Enterprise Simulation (pfSense, Suricata, Windows AD)",
    summary: "Engineered realistic virtual cyber range simulating multi-tier enterprise infrastructure with isolated DMZ, corporate internal workstation network, and Active Directory forest.",
    findings: [
      "Evaluated perimeter firewall rules against fragmented TCP packet evasions.",
      "Tuned Suricata IDS signatures to capture covert PowerShell Empire beacons.",
      "Hardened domain controller policies against Kerberoasting and AS-REP roasting."
    ],
    poc: `[#] pfSense Packet Inspection Log:\n[ALERT] 2026-10-24 14:02:11: Suricata SID:2018959 ET POLICY Suspicious PowerShell DownloadString\n[#] Active Directory Audit:\nInvoke-Kerberoast -OutputFormat Hashcat | Export-Csv -NoTypeInformation ./hashes.csv\nCracked TGS hash for Service Principal Name: MSSQLSvc/dc01.corp.local`,
    remediation: "Deployed gMSA (Group Managed Service Accounts), disabled RC4 encryption, and enforced 25+ character service account passwords with Suricata alert webhooks."
  },
  adversary_lab: {
    title: "THREAT_EMULATION // MITRE ATT&CK Adversary Emulation Lab",
    cvss: "ENTERPRISE RED TEAM - Adversary Simulation (APT29 / FIN7)",
    target: "Hybrid Cloud & Active Directory Infrastructure",
    summary: "Conducted simulated adversary campaigns mapped to MITRE ATT&CK tactics covering initial access, privilege escalation, lateral movement, and persistence.",
    findings: [
      "T1078 (Valid Accounts): Initial breach using harvested domain credentials.",
      "T1003 (OS Credential Dumping): LSASS memory extraction via comsvcs.dll mini-dump.",
      "T1550.002 (Pass the Hash): Lateral movement to secondary domain controllers without triggering standard AV."
    ],
    poc: `[+] Adversary Stage: LATERAL_MOVEMENT (T1021.002)\n[+] Tool: BloodHound Attack Path Discovery\nShortest Path to Domain Admin: USER01 -> HELP_DESK -> SERVER_ADMINS -> DOMAIN_ADMIN\n[+] Execution: Impacket psexec.py CORP/Administrator@10.0.1.15 -hashes :8846f7eaee8fb117ad06bdd830b7586c\n[+] Output: Windows PowerShell NT AUTHORITY\\SYSTEM confirmed.`,
    remediation: "Segmented Tier-0 administrative workstations, restricted RDP/SMB traversal across subnets, and implemented Sysmon Event ID 10 alerts for LSASS process access."
  },
  learning_portal: {
    title: "SECURE_DEV // Community Learning Portal Architecture",
    cvss: "FULL STACK SECURITY - Node.js, Express, React, MongoDB",
    target: "Collaborative Web Portal & API Microservices",
    summary: "Designed and engineered secure web platform featuring hardened authentication mechanisms, session isolation, and strict Content Security Policies.",
    findings: [
      "Zero Trust JWT architecture with short-lived tokens and refresh token rotation in HttpOnly SameSite=Strict cookies.",
      "Role-Based Access Control (RBAC) middleware verifying hierarchical resource permissions.",
      "Hardened against NoSQL injection, Stored XSS, and prototype pollution."
    ],
    poc: `[#] Security Header Implementation:\nContent-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';\nStrict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Frame-Options: DENY\nX-Content-Type-Options: nosniff`,
    remediation: "Applied Helmet.js protection, Express rate-limiting, and rigorous mongo-sanitize parameter sanitization."
  }
};
