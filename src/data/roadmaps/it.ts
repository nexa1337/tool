import { createNode, createOrganicEdge, RoadmapData } from '../types';

const itNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'i-start', '🌱 Seed: Helpdesk & IT Support', 'Basics', 
    'The seed of your IT career. Learn hardware, software, and customer service.', 
    'Every IT career starts here. You will fix hardware, reset passwords, and learn how to troubleshoot methodically to plant your roots.', 
    ['Computer Hardware (CPU, RAM)', 'Basic Troubleshooting', 'Ticketing Systems', 'Active Directory Password Resets', 'M365 Admin'], 
    ['ServiceNow', 'Zendesk', 'ADUC'], 
    ['CompTIA A+', 'Google IT Support'], 
    ['Professor Messer A+', 'Kevtech IT Support']
  ),
  createNode(
    'i-lab', '🌿 Sprout: Build an IT Home Lab', 'Basics', 
    'Sprout your practical skills. Set up a safe environment to practice without breaking real servers.', 
    'You cannot learn IT just by reading. You must build a home lab to practice installing operating systems, configuring networks, and breaking things safely.', 
    ['Virtualization Basics', 'Installing Windows Server Evaluation', 'Setting up a basic Domain Controller', 'Creating Virtual Networks'], 
    ['VirtualBox', 'VMware Workstation', 'Proxmox VE', 'TrueNAS'], 
    [], 
    ['NetworkChuck "Build a Home Lab" (YouTube)', 'r/homelab (Reddit)']
  ),
  createNode(
    'i-os', '🪴 Roots: Client Operating Systems', 'Basics', 
    'The roots of user interaction. Mastering the desktop environments users interact with daily.', 
    'You must know how to navigate, configure, and fix Windows, macOS, and Linux at the desktop level to anchor your knowledge.', 
    ['Windows 10/11 Config', 'macOS Admin', 'Linux Desktop Basics', 'Windows Registry', 'OS Imaging (MDT/WDS)'], 
    ['Windows 11', 'macOS', 'MDT'], 
    ['MD-102 Endpoint Administrator'], 
    ['Microsoft Learn', 'Apple Training']
  ),
  createNode(
    'i-net', '🪴 Roots: Networking Fundamentals', 'Core', 
    'The roots connecting everything. The absolute backbone of IT and how data travels.', 
    'This is the most critical bottleneck in IT. You must deeply understand how IP addresses, switches, and routers work.', 
    ['OSI & TCP/IP Models', 'IPv4 Subnetting (CIDR)', 'Routing & Switching', 'DNS & DHCP', 'VLANs'], 
    ['Wireshark', 'Packet Tracer', 'Ping/Traceroute'], 
    ['CompTIA Network+', 'Cisco CCNA'], 
    ['Practical Networking', 'Jeremy\'s IT Lab']
  ),

  // ---------------------------------------------------------
  // TIER 2: PATH DIVERGENCE (SYSTEMS VS NETWORKING)
  // ---------------------------------------------------------

  // --- PATH A: SYSTEMS ADMINISTRATION ---
  createNode(
    'i-sys-win', '🪵 Trunk: Windows Server & AD', 'Core', 
    'The sturdy trunk of enterprise IT. Managing the Microsoft environment.', 
    'Active Directory (AD) is used by 90% of enterprises. Mastering AD, Group Policy, and Windows Server is mandatory.', 
    ['AD DS', 'Group Policy (GPO)', 'DNS/DHCP Server Roles', 'File & Print Services', 'NTFS Permissions'], 
    ['Windows Server 2022', 'RSAT', 'PowerShell'], 
    ['Windows Server Hybrid Admin Associate'], 
    ['Microsoft Learn', 'Server Academy']
  ),
  createNode(
    'i-sys-lin', '🪵 Trunk: Linux Server Admin', 'Core', 
    'The sturdy trunk of the web. Managing the Linux OS that powers the cloud.', 
    'Linux runs the internet. You need to know how to navigate the CLI, manage services, and handle permissions.', 
    ['CLI Navigation', 'User Management', 'Systemd & Services', 'Package Management (APT/YUM)', 'SSH'], 
    ['Ubuntu Server', 'RHEL', 'Vim/Nano'], 
    ['CompTIA Linux+', 'RHCSA (Red Hat Certified System Administrator)'], 
    ['Linux Journey', 'Learn Linux TV']
  ),
  createNode(
    'i-virt', '🍃 Branch: Virtualization & Storage', 'Core', 
    'Branching out into efficiency. Abstracting hardware to run multiple virtual machines.', 
    'Enterprise IT relies on virtualization to save money and scale. Understand hypervisors and shared storage.', 
    ['Type 1 Hypervisors (ESXi, Proxmox)', 'vCenter', 'SAN vs NAS', 'iSCSI & NFS', 'VM Snapshots'], 
    ['VMware vSphere', 'Proxmox', 'TrueNAS'], 
    ['VMware VCTA / VCP-DCV'], 
    ['VMware Hands-on Labs']
  ),
  createNode(
    'i-bdr', '🛡️ Bark: Backup & Disaster Recovery', 'Core', 
    'The protective bark of IT. Ensuring business continuity when hardware fails.', 
    'The most important job of a SysAdmin is making sure data is never lost. Learn the 3-2-1 backup rule.', 
    ['3-2-1 Backup Strategy', 'RPO & RTO', 'Incremental Backups', 'Offsite & Cloud Backups'], 
    ['Veeam', 'Datto', 'Acronis'], 
    ['Veeam VMCE'], 
    ['Veeam University']
  ),

  // --- PATH B: NETWORK ENGINEERING ---
  createNode(
    'i-net-adv', '🌲 Deep Roots: Advanced Routing & Switching', 'Advanced', 
    'Deep roots in connectivity. Designing and managing large-scale corporate networks.', 
    'Moving beyond the basics to dynamic routing protocols and enterprise-grade switching.', 
    ['OSPF & BGP', 'Spanning Tree Protocol (STP)', 'VLAN Trunking Protocol (VTP)', 'High Availability (HSRP/VRRP)'], 
    ['Cisco IOS', 'Juniper Junos', 'GNS3', 'EVE-NG'], 
    ['Cisco CCNP Enterprise'], 
    ['NetworkLessons.com', 'INE']
  ),
  createNode(
    'i-net-sec', '🦅 Predator Defense: Network Security & Firewalls', 'Advanced', 
    'Predator defense for networks. Securing the perimeter and internal traffic.', 
    'Configuring Next-Gen Firewalls (NGFW), VPNs, and Intrusion Prevention Systems.', 
    ['Stateful Firewalls', 'IPsec & SSL VPNs', 'NAT/PAT', 'IDS/IPS Configuration', 'Zero Trust Network Access (ZTNA)'], 
    ['Palo Alto PAN-OS', 'Fortinet FortiGate', 'pfSense'], 
    ['Palo Alto PCNSA', 'Fortinet NSE 4'], 
    ['Palo Alto Beacon', 'Fortinet Training Institute']
  ),
  createNode(
    'i-net-wire', '🕸️ Spiderweb: Enterprise Wireless & SD-WAN', 'Expert', 
    'A spiderweb of connectivity. Managing enterprise wireless and SD-WAN.', 
    'Managing massive Wi-Fi deployments and Software-Defined Wide Area Networks connecting global offices.', 
    ['802.11 Standards', 'Wireless LAN Controllers (WLC)', 'RF Fundamentals', 'SD-WAN Architecture', 'BGP over IPsec'], 
    ['Cisco Meraki', 'Ubiquiti UniFi', 'Aruba', 'Cisco Viptela'], 
    ['CWNA (Certified Wireless Network Administrator)'], 
    ['CWNP Resources', 'Cisco SD-WAN Training']
  ),

  // --- PATH C: CLOUD & DEVOPS ---
  createNode(
    'i-auto', '🍃 Branch: Scripting & Automation', 'Advanced', 
    'Branching into automation. Stop doing things manually and learn to code for IT.', 
    'To move to senior roles, you must automate repetitive tasks using code.', 
    ['PowerShell Scripting', 'Bash Scripting', 'Python for IT', 'REST APIs', 'Task Scheduling (Cron)'], 
    ['PowerShell ISE / VS Code', 'Git', 'Python'], 
    ['PCEP (Python)'], 
    ['Learn Windows PowerShell in a Month of Lunches', 'Automate the Boring Stuff']
  ),
  createNode(
    'i-cloud', '🌴 Exotic Flora: Cloud Computing (AWS/Azure)', 'Advanced', 
    'Exotic flora of modern infrastructure. Moving from on-premise servers to the cloud.', 
    'Understand how to design, deploy, and manage virtual networks and compute instances in the cloud.', 
    ['IaaS, PaaS, SaaS', 'VPCs/VNets', 'Cloud Storage (S3, Blob)', 'Compute (EC2, VMs)', 'IAM'], 
    ['AWS', 'Microsoft Azure', 'GCP'], 
    ['AWS Solutions Architect - Associate', 'Azure Administrator (AZ-104)'], 
    ['Adrian Cantrill AWS', 'John Savill Azure']
  ),
  createNode(
    'i-cont', '🕸️ Spiderweb: Containers & Kubernetes', 'Expert', 
    'A spiderweb of microservices. Docker and Kubernetes for modern application deployment.', 
    'Modern IT infrastructure runs on containers. Learn how to package applications and orchestrate them at scale.', 
    ['Docker Containers', 'Docker Compose', 'Kubernetes Architecture', 'Pods & Deployments', 'Helm Charts'], 
    ['Docker', 'Kubernetes', 'Minikube', 'Helm'], 
    ['CKA (Certified Kubernetes Administrator)'], 
    ['KodeKloud', 'TechWorld with Nana']
  ),
  createNode(
    'i-iac', '🌲 Deep Roots: Infrastructure as Code (IaC)', 'Expert', 
    'Deep roots in automation. Provisioning and managing infrastructure through code.', 
    'Treat your infrastructure like software. Use code to deploy servers and networks consistently.', 
    ['Declarative vs Imperative', 'Terraform State', 'Ansible Playbooks', 'GitOps', 'CI/CD Pipelines'], 
    ['Terraform', 'Ansible', 'GitLab CI / GitHub Actions'], 
    ['HashiCorp Terraform Associate', 'Red Hat Certified Specialist in Ansible'], 
    ['HashiCorp Learn', 'Ansible Docs']
  ),

  // ---------------------------------------------------------
  // NEW TIER: SOFTWARE DEVELOPMENT (FRONTEND, BACKEND, FULL-STACK)
  // ---------------------------------------------------------
  createNode(
    'i-dev-start', '🌱 Seed: Software Development', 'Basics',
    'The seed of software creation. The foundation of building applications and software.',
    'Learn the basics of how the internet works, command line, version control (Git), and basic programming concepts.',
    ['Internet Fundamentals', 'Command Line / CLI', 'Git & GitHub', 'HTTP/HTTPS'],
    ['Git', 'VS Code', 'Terminal'],
    [],
    ['roadmap.sh/frontend', 'roadmap.sh/backend']
  ),

  // --- PATH D: FRONTEND DEVELOPMENT ---
  createNode(
    'i-fe-basics', '🌸 Bloom: Frontend Basics', 'Specialization',
    'Blooming into view. Building the user interface of the web.',
    'Master the core trio of the web: HTML for structure, CSS for styling, and JavaScript for interactivity.',
    ['HTML5 Semantic Tags', 'CSS3 (Flexbox, Grid)', 'JavaScript (ES6+, DOM)', 'Web Accessibility'],
    ['HTML/CSS/JS', 'Figma'],
    [],
    ['MDN Web Docs', 'FreeCodeCamp', 'roadmap.sh/frontend']
  ),
  createNode(
    'i-fe-adv', '🌸 Bloom: Advanced Frontend & Frameworks', 'Advanced',
    'A full bloom of interactivity. Building complex, interactive web applications.',
    'Learn modern frontend frameworks, state management, and build tools to create scalable Single Page Applications (SPAs).',
    ['React / Vue / Angular', 'State Management (Redux, Zustand)', 'Tailwind CSS', 'Vite / Webpack', 'Next.js (SSR/SSG)'],
    ['React', 'Tailwind', 'Next.js'],
    [],
    ['React Official Docs', 'roadmap.sh/frontend']
  ),

  // --- PATH E: BACKEND DEVELOPMENT ---
  createNode(
    'i-be-basics', '🍄 Mycelium: Backend Basics', 'Specialization',
    'The hidden mycelium network. Building the server-side logic and databases.',
    'Learn a backend language, how to interact with databases, and how to build basic APIs.',
    ['Backend Language (Node.js, Python, Go, Java)', 'Relational Databases (PostgreSQL, MySQL)', 'Basic REST APIs', 'Authentication Basics'],
    ['Node.js', 'PostgreSQL', 'Express'],
    [],
    ['roadmap.sh/backend']
  ),
  createNode(
    'i-be-adv', '🍄 Mycelium: Advanced Backend & Architecture', 'Advanced',
    'Expanding the mycelium. Scaling backend systems and advanced data management.',
    'Learn about caching, message brokers, NoSQL databases, and containerization for scalable backend architectures.',
    ['Caching (Redis)', 'Message Brokers (Kafka, RabbitMQ)', 'NoSQL (MongoDB)', 'Docker & Kubernetes', 'CI/CD'],
    ['Redis', 'Docker', 'MongoDB'],
    [],
    ['roadmap.sh/backend']
  ),

  // --- API DESIGN ---
  createNode(
    'i-api', '🕸️ Spiderweb: API Design & Architecture', 'Expert',
    'A spiderweb of data exchange. Designing robust, secure, and scalable APIs.',
    'Master the principles of API design, including different paradigms, security, and documentation.',
    ['REST vs GraphQL vs gRPC', 'API Security (JWT, OAuth, CORS)', 'Rate Limiting & Pagination', 'API Versioning', 'OpenAPI / Swagger'],
    ['Postman', 'Swagger', 'GraphQL'],
    [],
    ['roadmap.sh/api-design', 'REST API Tutorial']
  ),

  // --- PATH F: FULL-STACK DEVELOPMENT ---
  createNode(
    'i-fs', '🍯 Nectar: Full-Stack Development', 'Expert',
    'The sweet nectar of versatility. Mastering both Frontend and Backend development.',
    'Combine your knowledge of user interfaces and server-side logic to build complete, end-to-end web applications.',
    ['End-to-End Application Design', 'Connecting Frontend to Backend APIs', 'Full-Stack Frameworks (Next.js, Nuxt)', 'Database Integration', 'Deployment (Vercel, AWS)'],
    ['Next.js', 'TypeScript', 'Prisma'],
    [],
    ['roadmap.sh/full-stack']
  ),

  // ---------------------------------------------------------
  // TIER 3: THE END GOALS
  // ---------------------------------------------------------
  createNode(
    'i-end-net', '🌳 Canopy: Principal Network Architect', 'Expert', 
    'The canopy of connectivity. Designing global, highly available enterprise networks.', 
    'You design the physical and logical networks that connect data centers, cloud providers, and thousands of users globally.', 
    ['Global WAN Design', 'Datacenter Networking (Spine-Leaf)', 'BGP Peering', 'Network Automation (Python/Ansible)'], 
    ['Cisco ACI', 'Python', 'Ansible'], 
    ['CCIE Enterprise Infrastructure'], 
    ['Real-world Experience']
  ),
  createNode(
    'i-end-cloud', '🌳 Canopy: Cloud / DevOps Architect', 'Expert', 
    'The canopy of the cloud. Designing scalable, fault-tolerant cloud systems.', 
    'You design highly available, secure, and automated cloud environments. You bridge the gap between development and operations.', 
    ['High Availability', 'Disaster Recovery Architecture', 'Cloud Security', 'FinOps (Cost Optimization)', 'Enterprise Architecture'], 
    ['AWS', 'Azure', 'Kubernetes', 'Terraform'], 
    ['AWS Solutions Architect - Professional', 'Azure Solutions Architect Expert'], 
    ['Real-world Experience', 'AWS Architecture Center']
  ),
  createNode(
    'i-end-swe', '🌳 Canopy: Principal Software Engineer', 'Expert',
    'The canopy of software. Leading software architecture and engineering teams.',
    'You design complex, scalable software systems, make high-level architectural decisions, and mentor other engineers.',
    ['System Design', 'Enterprise Architecture', 'Technical Leadership', 'Scalability Patterns'],
    ['System Design Frameworks'],
    [],
    ['Real-world Experience']
  )
];

const itEdges = [
  // Foundations
  createOrganicEdge('i-start', 'i-lab'),
  createOrganicEdge('i-lab', 'i-os'),
  createOrganicEdge('i-os', 'i-net'),

  // Branching to Paths
  createOrganicEdge('i-net', 'i-sys-win'), // To Systems
  createOrganicEdge('i-net', 'i-sys-lin'), // To Systems
  createOrganicEdge('i-net', 'i-net-adv'), // To Network Engineering

  // Systems Path
  createOrganicEdge('i-sys-win', 'i-virt'),
  createOrganicEdge('i-sys-lin', 'i-virt'),
  createOrganicEdge('i-virt', 'i-bdr'),

  // Network Engineering Path
  createOrganicEdge('i-net-adv', 'i-net-sec'),
  createOrganicEdge('i-net-sec', 'i-net-wire'),
  createOrganicEdge('i-net-wire', 'i-end-net'), // End Goal 1

  // Cloud/DevOps Path (Flows from Systems)
  createOrganicEdge('i-bdr', 'i-auto'),
  createOrganicEdge('i-auto', 'i-cloud'),
  createOrganicEdge('i-cloud', 'i-cont'),
  createOrganicEdge('i-cont', 'i-iac'),
  createOrganicEdge('i-iac', 'i-end-cloud'), // End Goal 2

  // Software Dev Foundations
  createOrganicEdge('i-dev-start', 'i-fe-basics'),
  createOrganicEdge('i-dev-start', 'i-be-basics'),

  // Frontend Path
  createOrganicEdge('i-fe-basics', 'i-fe-adv'),
  createOrganicEdge('i-fe-adv', 'i-fs'),

  // Backend Path
  createOrganicEdge('i-be-basics', 'i-be-adv'),
  createOrganicEdge('i-be-adv', 'i-api'),
  createOrganicEdge('i-api', 'i-fs'),

  // Full-Stack to End Goal
  createOrganicEdge('i-fs', 'i-end-swe'),
];

export const itRoadmap: RoadmapData = {
  id: 'it',
  title: 'Information Technology (IT) & Software Dev',
  description: 'A comprehensive guide featuring distinct paths for Systems Administration, Network Engineering, Cloud/DevOps, Frontend, Backend, API Design, and Full-Stack Development with organic growth metaphors.',
  nodes: itNodes,
  edges: itEdges,
};
