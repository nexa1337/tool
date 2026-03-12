import { createNode, createOrganicEdge, RoadmapData } from '../types';

const webNodes = [
  createNode('w-git', '🌱 Seed: Git & GitHub', 'Basics', 'Version control and collaboration.', 'The absolute foundation for any developer. Learn how to track changes, branch, merge, and collaborate on code.', ['Commits & Branches', 'Pull Requests', 'Merge Conflicts', 'Git Flow'], ['Git', 'GitHub', 'GitLab'], [], ['Pro Git Book', 'Learn Git Branching']),
  createNode('w-front', '🌿 Sprout: Frontend Development', 'Core', 'The client-side experience.', 'Building the visual and interactive parts of a website using HTML, CSS, JavaScript, and modern frameworks.', ['HTML/CSS/JS', 'Responsive Design', 'Accessibility', 'Frameworks (React/Vue)'], ['VS Code', 'Chrome DevTools', 'Figma'], [], ['Frontend Roadmap', 'MDN Web Docs']),
  createNode('w-back', '🪴 Roots: Backend Development', 'Core', 'The server-side logic.', 'Handling databases, authentication, server logic, and APIs to power the frontend.', ['Server Languages (Node/Python)', 'Databases (SQL/NoSQL)', 'Authentication (JWT/OAuth)', 'Security Basics'], ['Postman', 'Docker', 'Linux'], [], ['Backend Roadmap', 'Node.js Docs']),
  createNode('w-api', '🪵 Trunk: API Design & GraphQL', 'Advanced', 'Connecting systems efficiently.', 'Designing robust APIs using REST principles or GraphQL to fetch exactly the data you need.', ['RESTful Principles', 'GraphQL Queries & Mutations', 'Status Codes', 'Rate Limiting'], ['Swagger', 'Apollo GraphQL', 'Insomnia'], [], ['API Design Roadmap', 'GraphQL.org']),
  createNode('w-full', '🍃 Branch: Full-Stack Development', 'Expert', 'Mastering both ends.', 'Combining frontend and backend skills to build complete, end-to-end web applications independently.', ['System Architecture', 'CI/CD Pipelines', 'Cloud Deployment', 'State Management'], ['Vercel', 'AWS', 'Next.js'], [], ['Full-Stack Roadmap', 'The Odin Project']),
  createNode('w-qa', '🛡️ Bark: QA & Testing', 'Advanced', 'Ensuring software quality.', 'Writing automated tests to catch bugs before they reach production. The protective bark around your code.', ['Unit Testing', 'Integration Testing', 'End-to-End (E2E) Testing', 'Test-Driven Development (TDD)'], ['Jest', 'Cypress', 'Playwright'], ['ISTQB Foundation Level'], ['QA Roadmap', 'Cypress Docs']),
  createNode('w-wp', '🌴 Exotic Flora: WordPress', 'Specialization', 'The world\'s most popular CMS.', 'Powering over 40% of the web. Learn theme development, plugins, and PHP to customize WordPress sites.', ['PHP & MySQL', 'Theme Hierarchy', 'Plugin Development', 'Gutenberg Blocks'], ['LocalWP', 'WP-CLI'], [], ['WordPress Codex', 'WordPress Developer Resources'])
];

const webEdges = [
  createOrganicEdge('w-git', 'w-front'),
  createOrganicEdge('w-git', 'w-back'),
  createOrganicEdge('w-front', 'w-api'),
  createOrganicEdge('w-back', 'w-api'),
  createOrganicEdge('w-api', 'w-full'),
  createOrganicEdge('w-full', 'w-qa'),
  createOrganicEdge('w-front', 'w-wp'),
];

export const webdevRoadmap: RoadmapData = {
  id: 'webdev',
  title: 'Web Development',
  description: 'A comprehensive guide to Web Development, covering Frontend, Backend, Full-Stack, QA, and API Design with organic growth metaphors.',
  nodes: webNodes,
  edges: webEdges,
};
