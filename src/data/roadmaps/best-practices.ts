import { createNode, createOrganicEdge, RoadmapData } from '../types';

const bpNodes = [
  createNode(
    'bp-code', '🌱 Seed: Code Review Best Practices', 'Basics', 
    'The foundation of code quality.', 
    'Learn how to give and receive constructive feedback, enforce coding standards, and use static analysis tools to maintain a healthy codebase.', 
    ['Constructive Feedback', 'PR Etiquette', 'Static Analysis', 'Automated Testing', 'Code Readability'], 
    ['SonarQube', 'ESLint', 'GitHub Actions'], 
    [], 
    ['Google Code Review Guidelines', 'roadmap.sh/code-review-best-practices']
  ),
  createNode(
    'bp-aws', '🌿 Sprout: AWS Best Practices', 'Core', 
    'Cloud architecture and security.', 
    'Mastering the AWS Well-Architected Framework, implementing IAM least privilege, and optimizing costs in the cloud.', 
    ['Well-Architected Framework', 'IAM Least Privilege', 'Cost Optimization', 'VPC Security', 'High Availability'], 
    ['AWS IAM', 'AWS Cost Explorer', 'AWS Trusted Advisor'], 
    ['AWS Certified Cloud Practitioner'], 
    ['AWS Well-Architected', 'roadmap.sh/aws']
  ),
  createNode(
    'bp-api', '🪴 Roots: API Security Best Practices', 'Core', 
    'Securing communication channels.', 
    'Protecting APIs from common vulnerabilities, implementing robust authentication, and rate limiting to prevent abuse.', 
    ['OAuth 2.0 / JWT', 'Rate Limiting & Throttling', 'Input Validation', 'CORS Configuration', 'HTTPS/TLS'], 
    ['Postman', 'OWASP ZAP'], 
    [], 
    ['OWASP API Security Top 10', 'roadmap.sh/api-security-best-practices']
  ),
  createNode(
    'bp-fe', '🪵 Trunk: Frontend Performance', 'Advanced', 
    'Optimizing the user experience.', 
    'Ensuring fast load times, smooth interactions, and excellent Core Web Vitals for web applications.', 
    ['Core Web Vitals (LCP, FID, CLS)', 'Lazy Loading & Code Splitting', 'Image Optimization', 'Minification & Compression', 'Caching Strategies'], 
    ['Lighthouse', 'Chrome DevTools', 'Webpack/Vite'], 
    [], 
    ['Web.dev', 'roadmap.sh/frontend-performance-best-practices']
  ),
  createNode(
    'bp-be', '🌳 Canopy: Backend Performance', 'Expert', 
    'Scaling server-side operations.', 
    'Optimizing databases, implementing caching layers, and handling high concurrency to ensure backend systems remain responsive under load.', 
    ['Database Indexing & Query Optimization', 'Caching (Redis/Memcached)', 'Connection Pooling', 'Asynchronous Processing', 'Load Balancing'], 
    ['Redis', 'pg_stat_statements', 'New Relic'], 
    [], 
    ['High Performance MySQL', 'roadmap.sh/backend-performance-best-practices']
  )
];

const bpEdges = [
  createOrganicEdge('bp-code', 'bp-aws'),
  createOrganicEdge('bp-aws', 'bp-api'),
  createOrganicEdge('bp-api', 'bp-fe'),
  createOrganicEdge('bp-api', 'bp-be'),
];

export const bestPracticesRoadmap: RoadmapData = {
  id: 'best-practices',
  title: 'Best Practices',
  description: 'A guide to industry best practices covering Code Reviews, AWS, API Security, and Full-Stack Performance with organic growth metaphors.',
  nodes: bpNodes,
  edges: bpEdges,
};
