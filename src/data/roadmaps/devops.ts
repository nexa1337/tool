import { RoadmapData, createNode, createOrganicEdge } from '../types';

export const devopsRoadmap: RoadmapData = {
  id: 'devops',
  title: 'DevOps & Cloud',
  description: 'A step-by-step guide to DevOps, DevSecOps, Cloud Infrastructure, and Site Reliability Engineering with organic growth metaphors.',
  nodes: [
    createNode('d-1', '🌱 Seed: Linux & OS Fundamentals', 'Basics', 'Master the command line, shell scripting, and OS concepts.', 'Linux is the seed from which all modern infrastructure grows.', ['Bash', 'Process Management', 'File Systems', 'SSH', 'Networking Basics', 'Systemd'], ['Linux', 'Vim/Nano', 'Tmux'], ['Linux Foundation Certified IT Associat', 'CompTIA Linux+'], ['Linux Journey', 'OverTheWire Bandit']),
    createNode('d-2', '🌿 Sprout: Scripting & Automation', 'Basics', 'Learn to automate repetitive tasks using code.', 'Sprouting new capabilities by replacing manual work with scripts.', ['Python', 'Bash', 'Go', 'Regex', 'JSON/YAML Parsing'], ['Python', 'VS Code', 'jq'], [], ['Automate the Boring Stuff', 'Python for DevOps']),
    createNode('d-3', '🪴 Roots: Networking & Security', 'Basics', 'Understand how the internet works and basic security protocols.', 'The deep roots crucial for configuring firewalls, load balancers, and VPCs.', ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'SSL/TLS', 'Firewalls', 'Load Balancing'], ['Wireshark', 'Nmap', 'OpenSSL'], ['Network+', 'CCNA'], ['Practical Networking (YouTube)', 'Cloudflare Learning Center']),
    createNode('d-4', '🪵 Trunk: Version Control (Git)', 'Core', 'Track changes and collaborate on code and infrastructure.', 'The sturdy trunk that supports GitOps, CI/CD, and team collaboration.', ['Git', 'Branching Strategies', 'Pull Requests', 'Merge Conflicts', 'Rebasing'], ['GitHub', 'GitLab', 'Bitbucket'], [], ['Pro Git Book', 'Learn Git Branching']),
    
    createNode('d-5', '🍃 Branch: Containers (Docker)', 'Core', 'Package applications and their dependencies into isolated containers.', 'Standardizes environments from development to production.', ['Dockerfiles', 'Images', 'Volumes', 'Docker Compose', 'Container Security'], ['Docker', 'Podman', 'Buildah'], ['Docker Certified Associate'], ['Docker Documentation', 'Nana Docker Tutorial']),
    createNode('d-6', '🍃 Branch: CI/CD Pipelines', 'Core', 'Automate the testing, building, and deployment of applications.', 'Enables rapid and reliable software delivery.', ['Continuous Integration', 'Continuous Deployment', 'Pipelines', 'Artifact Management'], ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD'], [], ['GitLab CI/CD Docs', 'Jenkins Pipeline Tutorial']),
    
    createNode('d-7', '🌲 Deep Roots: Cloud Providers (AWS/GCP/Azure)', 'Specialization', 'Manage infrastructure on public cloud platforms.', 'The massive root system powering modern tech companies.', ['EC2/Compute', 'S3/Storage', 'IAM', 'VPC', 'Serverless/Lambda'], ['AWS', 'GCP', 'Azure'], ['AWS Solutions Architect Associate', 'Azure Administrator'], ['A Cloud Guru', 'AWS Skill Builder']),
    createNode('d-8', '🌲 Deep Roots: Infrastructure as Code (IaC)', 'Specialization', 'Provision and manage infrastructure using code.', 'Ensures reproducible and version-controlled environments.', ['HCL', 'State Management', 'Modules', 'Providers', 'Drift Detection'], ['Terraform', 'OpenTofu', 'Pulumi', 'CloudFormation'], ['HashiCorp Certified: Terraform Associate'], ['Terraform Up & Running', 'HashiCorp Learn']),
    createNode('d-9', '🌲 Deep Roots: Configuration Management', 'Specialization', 'Automate the configuration of servers and software.', 'Managing the state of thousands of servers simultaneously.', ['Playbooks', 'Roles', 'Inventory', 'Idempotency'], ['Ansible', 'Chef', 'Puppet'], [], ['Ansible for DevOps', 'Jeff Geerling (YouTube)']),
    
    createNode('d-10', '🕸️ Spiderweb: Container Orchestration (Kubernetes)', 'Advanced', 'Manage thousands of containers, scaling, and self-healing.', 'The industry standard for running microservices at scale, weaving a complex web of services.', ['Pods', 'Deployments', 'Services', 'Ingress', 'Helm', 'RBAC'], ['Kubernetes', 'EKS/GKE/AKS', 'Helm', 'Kustomize'], ['CKA', 'CKAD', 'CKS'], ['Kubernetes the Hard Way', 'TechWorld with Nana']),
    createNode('d-11', '🕸️ Spiderweb: Service Mesh', 'Advanced', 'Manage service-to-service communication, observability, and security.', 'Adding a dedicated infrastructure layer for microservice communication.', ['Mutual TLS (mTLS)', 'Traffic Routing', 'Circuit Breaking', 'Observability'], ['Istio', 'Linkerd', 'Consul'], [], ['Istio Documentation', 'Service Mesh Patterns']),
    
    createNode('d-12', '🌴 Exotic Flora: Edge, CDN & Serverless', 'Advanced', 'Optimize content delivery, DNS, and edge computing.', 'Protecting and accelerating web applications at the edge of the network.', ['CDN', 'WAF', 'DDoS Protection', 'Edge Workers', 'Serverless Functions'], ['Cloudflare', 'AWS CloudFront', 'Vercel'], [], ['Cloudflare Workers Docs', 'Serverless Framework']),
    
    createNode('d-13', '🍯 Nectar: Monitoring & Observability', 'Advanced', 'Track system health, logs, and performance metrics.', 'You cannot fix what you cannot see. The sweet nectar of actionable data.', ['Metrics', 'Logs', 'Traces', 'Alerting', 'Dashboards'], ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'OpenTelemetry'], [], ['Site Reliability Engineering Book', 'Prometheus Up & Running']),
    
    createNode('d-14', '🛡️ Bark: DevSecOps', 'Expert', 'Integrate security practices into the DevOps pipeline.', 'Shift-left security to catch vulnerabilities early and protect the trunk.', ['SAST/DAST', 'Container Scanning', 'Secret Management', 'Compliance as Code'], ['SonarQube', 'Trivy', 'HashiCorp Vault', 'OPA'], ['DevSecOps Foundation'], ['OWASP DevSecOps Guideline']),
    createNode('d-15', '🦅 Predator Defense: Chaos Engineering', 'Expert', 'Intentionally breaking systems to find weaknesses before they fail in production.', 'Proactively defending against unexpected outages.', ['Fault Injection', 'Game Days', 'Resiliency Testing'], ['Chaos Mesh', 'Gremlin', 'Chaos Monkey'], [], ['Principles of Chaos Engineering']),
    
    createNode('d-16', '🌳 Canopy: Site Reliability Engineering (SRE)', 'Expert', 'Apply software engineering practices to operations.', 'The canopy overlooking the entire system, focusing on reliability, SLAs, and incident management.', ['SLIs/SLOs/SLAs', 'Error Budgets', 'Incident Response', 'Toil Reduction', 'Postmortems'], ['PagerDuty', 'Blameless'], [], ['Google SRE Book', 'The Phoenix Project']),
  ],
  edges: [
    createOrganicEdge('d-1', 'd-2'),
    createOrganicEdge('d-2', 'd-3'),
    createOrganicEdge('d-3', 'd-4'),
    
    createOrganicEdge('d-4', 'd-5'),
    createOrganicEdge('d-4', 'd-6'),
    
    createOrganicEdge('d-5', 'd-7'),
    createOrganicEdge('d-6', 'd-7'),
    
    createOrganicEdge('d-7', 'd-8'),
    createOrganicEdge('d-7', 'd-9'),
    
    createOrganicEdge('d-5', 'd-10'),
    createOrganicEdge('d-8', 'd-10'),
    
    createOrganicEdge('d-10', 'd-11'),
    createOrganicEdge('d-7', 'd-12'),
    
    createOrganicEdge('d-10', 'd-13'),
    createOrganicEdge('d-11', 'd-13'),
    createOrganicEdge('d-12', 'd-13'),
    
    createOrganicEdge('d-6', 'd-14'),
    createOrganicEdge('d-10', 'd-14'),
    
    createOrganicEdge('d-13', 'd-15'),
    
    createOrganicEdge('d-13', 'd-16'),
    createOrganicEdge('d-14', 'd-16'),
    createOrganicEdge('d-15', 'd-16'),
  ],
};
