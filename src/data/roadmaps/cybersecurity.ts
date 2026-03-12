import { createNode, createOrganicEdge, RoadmapData } from '../types';

const cyberNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'c-start', '🌱 Seed: IT & Hardware', 'Basics', 
    'The absolute prerequisite. Like a seed needing soil, you must learn how computers operate before you can secure them.',
    'You cannot secure what you do not understand. Learn CPU architecture, RAM, storage, and basic troubleshooting to plant your roots.',
    ['CPU Architecture', 'Memory Management', 'Storage Types', 'BIOS/UEFI', 'Virtualization Basics'],
    ['VirtualBox', 'VMware Workstation'],
    ['CompTIA A+', 'Google IT Support'],
    ['Professor Messer A+', 'Crucial System Scanner']
  ),
  createNode(
    'c-lab', '🌿 Sprout: Build a Cybersecurity Home Lab', 'Basics', 
    'Sprout your skills by setting up a safe environment to practice hacking and defense.',
    'A home lab is essential for hands-on experience. You can build it using old hardware, a powerful PC with VMs, or cheap cloud instances to safely detonate malware or practice exploits.',
    ['Virtualization (Proxmox, ESXi)', 'Network Segmentation (pfSense)', 'Vulnerable VMs (Metasploitable)', 'Active Directory Lab Setup'],
    ['Proxmox', 'pfSense', 'Security Onion', 'Kali Linux'],
    [],
    ['Building a Virtual Home Lab (YouTube)', 'DetectionLab', 'Automated AD Lab']
  ),
  createNode(
    'c-net', '🪴 Roots: Networking Deep Dive', 'Basics', 
    'The deep roots of cybersecurity. Understanding how data travels is essential for any security professional.',
    'If you do not understand networking, you cannot do cybersecurity. Master the OSI model, IP addressing, and routing to establish a strong foundation.',
    ['OSI & TCP/IP Models', 'IPv4/IPv6 & Subnetting', 'DNS, DHCP, ARP', 'Routing & Switching', 'Common Ports (80, 443, 22)'],
    ['Wireshark', 'Cisco Packet Tracer', 'Nmap', 'Tcpdump'],
    ['CompTIA Network+', 'Cisco CCNA'],
    ['NetworkChuck (YouTube)', 'Practical Networking']
  ),
  createNode(
    'c-os', '🪴 Roots: OS Internals (Linux & Windows)', 'Basics', 
    'Mastering the operating systems that run the world. These roots anchor your understanding of vulnerabilities.',
    'Linux is the hacker\'s OS. Windows is the corporate target. You must know both intimately to understand where vulnerabilities hide.',
    ['Linux CLI', 'File Permissions (chmod/chown)', 'Windows Registry', 'Active Directory (AD)', 'Group Policy (GPO)'],
    ['Ubuntu', 'Kali Linux', 'Windows Server', 'Sysinternals'],
    ['Linux+', 'Windows Server Hybrid Admin'],
    ['OverTheWire (Bandit)', 'TryHackMe AD Basics']
  ),
  createNode(
    'c-script', '🪵 Trunk: Scripting & Automation', 'Basics', 
    'The sturdy trunk of your skillset. Writing code to automate tasks and build custom tools.',
    'Python is the industry standard for custom exploits and automation. Bash/PowerShell are essential for OS tasks. This trunk supports all advanced techniques.',
    ['Python (Requests, Sockets)', 'Bash Scripting', 'PowerShell Scripting', 'Regex', 'Git'],
    ['Python', 'VS Code', 'Git'],
    ['PCEP (Python)'],
    ['Automate the Boring Stuff', 'Codecademy']
  ),
  createNode(
    'c-sec', '🪵 Trunk: Security Fundamentals', 'Core', 
    'The core principles of information security and cryptography, forming the solid wood of your knowledge.',
    'Understand how to evaluate risk, the CIA triad, and the mathematical concepts that keep data secret.',
    ['CIA Triad', 'Symmetric/Asymmetric Encryption', 'Hashing (SHA, MD5)', 'PKI & Certificates', 'IAM (Identity & Access Management)'],
    ['OpenSSL', 'GPG', 'KeePass'],
    ['CompTIA Security+', '(ISC)2 CC'],
    ['Professor Messer Security+', 'Cybrary']
  ),
  createNode(
    'c-ctf', '🍃 Branch: CTFs & Practical Platforms', 'Core', 
    'Branch out and test your skills in real-time Capture The Flag challenges.',
    'CTFs are gamified cybersecurity competitions. They are the best way to learn practical skills in a legal, safe environment before choosing a specialization.',
    ['Jeopardy-style CTFs', 'Web Exploitation', 'Binary Exploitation (Pwn)', 'Cryptography', 'OSINT'],
    ['Burp Suite', 'Ghidra', 'Pwntools', 'Metasploit'],
    ['eJPT (eLearnSecurity Junior Penetration Tester)'],
    ['HackTheBox', 'TryHackMe', 'PicoCTF', 'CTFtime']
  ),

  // ---------------------------------------------------------
  // TIER 2: PATH DIVERGENCE (CHOOSE YOUR SPECIALIZATION)
  // ---------------------------------------------------------

  // --- PATH A: BLUE TEAM (DEFENSE) ---
  createNode(
    'c-soc', '🍃 Branch: SOC Analyst (Tier 1)', 'Specialization', 
    'A vital branch of defense. Monitoring and triage in the Security Operations Center.',
    'Security Operations Center (SOC) Analysts monitor SIEM dashboards, analyze logs, and triage alerts to protect the organization.',
    ['Log Analysis', 'SIEM Query Languages (SPL, KQL)', 'Phishing Analysis', 'Traffic Analysis'],
    ['Splunk', 'ELK Stack', 'QRadar', 'Wazuh'],
    ['CompTIA CySA+', 'BTL1 (Blue Team Level 1)'],
    ['LetsDefend.io', 'CyberDefenders']
  ),
  createNode(
    'c-ir', '🌲 Deep Roots: Incident Response (IR)', 'Advanced', 
    'Deep roots in defense. Reacting to breaches and containing active threats.',
    'When defenses fail, IR steps in to contain the breach, eradicate the attacker, and recover systems.',
    ['IR Lifecycle (PICERL)', 'Memory Acquisition', 'Disk Imaging', 'Ransomware Containment'],
    ['Velociraptor', 'KAPE', 'FTK Imager'],
    ['GCIH (GIAC Certified Incident Handler)', 'EC-Council ECIH'],
    ['SANS Reading Room', 'TryHackMe Cyber Defense']
  ),
  createNode(
    'c-dfir', '🕸️ Spiderweb: Digital Forensics & Malware', 'Expert', 
    'Weaving a spiderweb of investigation. Analyzing digital evidence and reverse engineering.',
    'Deep technical investigation. Analyzing memory dumps, hard drives, and dissecting malware to find IOCs.',
    ['File System Forensics', 'Memory Forensics', 'Static/Dynamic Malware Analysis', 'x86 Assembly'],
    ['Autopsy', 'Volatility', 'Ghidra', 'IDA Pro', 'x64dbg'],
    ['GCFA (GIAC Certified Forensic Analyst)', 'GREM (GIAC Reverse Engineering Malware)'],
    ['13Cubed (YouTube)', 'Practical Malware Analysis']
  ),
  createNode(
    'c-th', '🦅 Predator Defense: Threat Hunting & CTI', 'Expert', 
    'Predator defense. Proactively searching for hidden advanced adversaries.',
    'Assuming breach. Using Cyber Threat Intelligence (CTI) to hunt for APTs that bypassed automated defenses.',
    ['Hypothesis-Driven Hunting', 'YARA Rules', 'MITRE ATT&CK Mapping', 'Threat Actor Profiling'],
    ['MISP', 'OpenCTI', 'Elastic Security'],
    ['eCTHP', 'GCTI (GIAC Cyber Threat Intelligence)'],
    ['Active Countermeasures', 'SANS Threat Hunting']
  ),

  // --- PATH B: RED TEAM (OFFENSE) ---
  createNode(
    'c-vuln', '🍃 Branch: Vulnerability Management', 'Specialization', 
    'Branching into offense. Scanning and identifying system weaknesses.',
    'The bridge to offensive security. Running automated scans to find known CVEs and prioritizing patches.',
    ['Vulnerability Scanning', 'CVSS Scoring', 'Patch Management', 'False Positive Analysis'],
    ['Nessus', 'Qualys', 'OpenVAS'],
    ['CompTIA PenTest+'],
    ['TryHackMe Vulnerability Management']
  ),
  createNode(
    'c-wap', '🍯 Nectar: Web App Penetration Testing', 'Advanced', 
    'The sweet nectar of bug bounties. Hacking websites and web applications legally.',
    'Finding flaws in web code. This is one of the most common and lucrative fields (Bug Bounties).',
    ['OWASP Top 10', 'SQLi & XSS', 'SSRF & CSRF', 'Broken Access Control', 'API Security (REST/GraphQL)'],
    ['Burp Suite', 'OWASP ZAP', 'SQLmap', 'Ffuf'],
    ['eWPT', 'OSWE (Offensive Security Web Expert)'],
    ['PortSwigger Web Security Academy', 'Bugcrowd University']
  ),
  createNode(
    'c-netpen', '🌲 Deep Roots: Network Penetration Testing', 'Advanced', 
    'Deep roots in offensive security. Exploiting corporate networks and Active Directory.',
    'Simulating full-scale cyber attacks. Reconnaissance, scanning, exploitation, and post-exploitation.',
    ['Port Scanning', 'Password Cracking', 'Pivoting & Tunneling', 'Active Directory Exploitation (Kerberoasting)'],
    ['Metasploit', 'CrackMapExec', 'Hashcat', 'BloodHound', 'Responder'],
    ['OSCP (Offensive Security Certified Professional)', 'PNPT (Practical Network Penetration Tester)'],
    ['HackTheBox', 'TCM Security']
  ),
  createNode(
    'c-exp', '🕸️ Spiderweb: Exploit Development', 'Expert', 
    'A complex spiderweb of code. Writing custom code to exploit zero-day vulnerabilities.',
    'The pinnacle of offensive security. Finding new vulnerabilities and writing custom exploit code.',
    ['Buffer Overflows', 'ROP Chains', 'Fuzzing', 'AV/EDR Evasion', 'Shellcode'],
    ['GDB', 'Immunity Debugger', 'Cobalt Strike', 'AFL'],
    ['OSEP', 'OSED', 'OSCE'],
    ['Corelan Team Tutorials', 'Fuzzing.info']
  ),

  // --- PATH C: PURPLE / APPSEC / CLOUD ---
  createNode(
    'c-appsec', '🛡️ Bark: DevSecOps & AppSec', 'Advanced', 
    'The protective bark of software. Integrating security into the development lifecycle.',
    'Shifting security "left". Working with developers to ensure code is secure before it is deployed.',
    ['SAST/DAST', 'SCA', 'CI/CD Pipeline Security', 'Container Security (Docker/K8s)'],
    ['SonarQube', 'Checkmarx', 'Snyk', 'Trivy'],
    ['GWEB', 'CSSLP'],
    ['OWASP DevSecOps Guideline', 'WeHackPurple']
  ),
  createNode(
    'c-cloud', '🌴 Exotic Flora: Cloud Security', 'Expert', 
    'Exotic flora of the modern web. Securing AWS, Azure, and GCP environments.',
    'The modern perimeter. Understanding how to secure cloud infrastructure and complex IAM policies.',
    ['Cloud Misconfigurations', 'AWS IAM / Azure AD', 'S3 Bucket Security', 'Serverless Security', 'IaC Security'],
    ['Pacu', 'ScoutSuite', 'CloudTrail', 'Terraform'],
    ['AWS Security Specialty', 'Azure Security Engineer (AZ-500)', 'CCSP'],
    ['Cloud Academy', 'Flaws.cloud']
  ),

  // --- PATH D: AI RED TEAMING (NEW & MODERN) ---
  createNode(
    'c-ai-fund', '🍃 Branch: AI Security Fundamentals', 'Specialization', 
    'Branching into the future. Understanding how AI models work to secure them.',
    'Before hacking AI, you must understand Large Language Models (LLMs), training data, and inference pipelines.',
    ['LLM Architecture Basics', 'Training vs Inference', 'Vector Databases', 'AI Supply Chain'],
    ['Hugging Face', 'LangChain', 'OpenAI API'],
    [],
    ['roadmap.sh/ai-red-teaming', 'DeepLearning.AI']
  ),
  createNode(
    'c-ai-vuln', '🍯 Nectar: AI Vulnerabilities & Attacks', 'Advanced', 
    'The nectar of modern exploits. Finding vulnerabilities in AI models and LLM applications.',
    'Learning the specific attack vectors against AI systems, including manipulating inputs and poisoning data.',
    ['Prompt Injection (Direct/Indirect)', 'Jailbreaking', 'Data Poisoning', 'Model Inversion & Extraction', 'Adversarial Examples'],
    ['Promptfoo', 'Garak', 'PyRIT'],
    ['Certified AI Security Specialist (CAISS)'],
    ['OWASP Top 10 for LLMs', 'MITRE ATLAS']
  ),
  createNode(
    'c-ai-rt', '🦅 Predator Defense: AI Red Teaming Operations', 'Expert', 
    'Predator defense for AI. Simulating attacks against enterprise AI systems.',
    'Conducting full-scale red team engagements against AI chatbots, agents, and internal ML models to find flaws before deployment.',
    ['Automated Red Teaming', 'AI Agent Exploitation', 'Securing RAG Pipelines', 'Bypassing AI Guardrails'],
    ['Microsoft PyRIT', 'Garak', 'Mindgard'],
    [],
    ['NIST AI RMF', 'AI Village (DEF CON)']
  ),

  // ---------------------------------------------------------
  // TIER 3: THE END GOALS
  // ---------------------------------------------------------
  createNode(
    'c-grc', '🕸️ Spiderweb: Governance, Risk & Compliance (GRC)', 'Expert', 
    'The spiderweb connecting business and security. Policies, audits, and risk management.',
    'Aligning cybersecurity with business objectives. Ensuring compliance with legal frameworks (GDPR, HIPAA).',
    ['Risk Assessments', 'Compliance Frameworks (NIST CSF, ISO 27001)', 'Data Privacy', 'Security Policies'],
    ['Archer GRC', 'AuditBoard', 'OneTrust'],
    ['CISM', 'CISA', 'CRISC'],
    ['ISACA Resources', 'NIST Publications']
  ),
  createNode(
    'c-end', '🌳 Canopy: CISO / Principal Security Architect', 'Expert', 
    'The towering canopy of Cybersecurity leadership and architecture.',
    'You design highly available, secure environments, manage enterprise risk, and lead global security teams.',
    ['Enterprise Architecture', 'Zero Trust', 'Board-Level Communication', 'Budgeting & Strategy'],
    ['Excel', 'PowerPoint', 'Enterprise Architecture Tools'],
    ['CISSP (Certified Information Systems Security Professional)', 'CCISO'],
    ['Real-world Leadership Experience']
  ),
  createNode(
    'c-end-ai', '🌳 Canopy: Principal AI Security Engineer', 'Expert', 
    'The canopy of AI security. Leading the defense and red teaming of enterprise AI systems.',
    'You are the ultimate authority on securing AI models, designing guardrails, and leading AI Red Team engagements.',
    ['AI Security Architecture', 'Enterprise AI Governance', 'Advanced Threat Modeling for ML'],
    ['Python', 'PyTorch', 'Enterprise AI Platforms'],
    [],
    ['Real-world AI Security Experience']
  )
];

const cyberEdges = [
  // Foundations
  createOrganicEdge('c-start', 'c-lab'),
  createOrganicEdge('c-lab', 'c-net'),
  createOrganicEdge('c-net', 'c-os'),
  createOrganicEdge('c-os', 'c-script'),
  createOrganicEdge('c-script', 'c-sec'),
  createOrganicEdge('c-sec', 'c-ctf'),

  // Branching to Paths
  createOrganicEdge('c-ctf', 'c-soc'),    // To Blue
  createOrganicEdge('c-ctf', 'c-vuln'),   // To Red
  createOrganicEdge('c-ctf', 'c-appsec'), // To Purple/AppSec
  createOrganicEdge('c-ctf', 'c-ai-fund'),// To AI Red Teaming

  // Blue Path
  createOrganicEdge('c-soc', 'c-ir'),
  createOrganicEdge('c-ir', 'c-dfir'),
  createOrganicEdge('c-dfir', 'c-th'),

  // Red Path
  createOrganicEdge('c-vuln', 'c-wap'),
  createOrganicEdge('c-wap', 'c-netpen'),
  createOrganicEdge('c-netpen', 'c-exp'),

  // Purple/Cloud Path
  createOrganicEdge('c-appsec', 'c-cloud'),

  // AI Red Teaming Path
  createOrganicEdge('c-ai-fund', 'c-ai-vuln'),
  createOrganicEdge('c-ai-vuln', 'c-ai-rt'),

  // Convergence to Leadership/GRC
  createOrganicEdge('c-th', 'c-grc'),
  createOrganicEdge('c-exp', 'c-grc'),
  createOrganicEdge('c-cloud', 'c-grc'),
  createOrganicEdge('c-grc', 'c-end'),
  
  // AI Convergence
  createOrganicEdge('c-ai-rt', 'c-end-ai'),
];

export const cybersecurityRoadmap: RoadmapData = {
  id: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'A comprehensive guide featuring distinct paths for Blue Team (Defense), Red Team (Offense), Cloud Security, and AI Red Teaming with organic growth metaphors.',
  nodes: cyberNodes,
  edges: cyberEdges,
};
