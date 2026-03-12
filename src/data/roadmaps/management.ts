import { createNode, createOrganicEdge, RoadmapData } from '../types';

const managementNodes = [
  createNode(
    'm-tw', '🌱 Seed: Technical Writer', 'Basics', 
    'The foundation of clear communication.', 
    'Technical writers bridge the gap between complex technology and users through clear documentation. They create tutorials, how-to guides, and API references.', 
    ['Diátaxis Framework', 'Markdown/MDX', 'API Documentation', 'Information Architecture'], 
    ['Docusaurus', 'Swagger', 'Git'], 
    [], 
    ['Google Technical Writing', 'roadmap.sh/technical-writer']
  ),
  createNode(
    'm-pm', '🌿 Sprout: Product Manager', 'Core', 
    'Guiding the product vision.', 
    'Product Managers define the "what" and "why" of a product, prioritizing features based on user needs, market research, and business goals.', 
    ['Agile/Scrum', 'User Research', 'Product Roadmapping', 'A/B Testing', 'Stakeholder Management'], 
    ['Jira', 'Figma', 'Mixpanel'], 
    ['Certified Scrum Product Owner (CSPO)'], 
    ['Inspired (Book)', 'roadmap.sh/product-manager']
  ),
  createNode(
    'm-devrel', '🪴 Roots: Developer Relations', 'Core', 
    'Building developer communities.', 
    'DevRel advocates for developers, creates technical content, and fosters community engagement to drive adoption of developer tools.', 
    ['Public Speaking', 'Community Management', 'Technical Content Creation', 'Developer Experience (DX)'], 
    ['OBS Studio', 'Discord/Slack', 'GitHub Discussions'], 
    [], 
    ['DevRel.net', 'roadmap.sh/devrel']
  ),
  createNode(
    'm-em', '🪵 Trunk: Engineering Manager', 'Advanced', 
    'Leading engineering teams.', 
    'Engineering Managers focus on people, processes, and delivery. They ensure the team is healthy, productive, and aligned with business objectives.', 
    ['1-on-1s', 'Performance Reviews', 'Agile Delivery', 'Hiring & Onboarding', 'Conflict Resolution'], 
    ['Jira', 'Confluence', 'Lattice'], 
    [], 
    ['The Manager\'s Path (Book)', 'roadmap.sh/engineering-manager']
  ),
  createNode(
    'm-arch', '🌳 Canopy: Software Architect', 'Expert', 
    'Designing scalable systems.', 
    'Software Architects make high-level design choices, dictate technical standards, and design scalable, resilient systems for the entire organization.', 
    ['System Design', 'Microservices', 'Cloud Architecture', 'Trade-off Analysis', 'Technical Leadership'], 
    ['AWS/GCP/Azure', 'Draw.io', 'Structurizr'], 
    ['AWS Certified Solutions Architect - Professional'], 
    ['Designing Data-Intensive Applications', 'roadmap.sh/software-architect']
  )
];

const managementEdges = [
  createOrganicEdge('m-tw', 'm-devrel'),
  createOrganicEdge('m-pm', 'm-em'),
  createOrganicEdge('m-devrel', 'm-em'),
  createOrganicEdge('m-em', 'm-arch'),
];

export const managementRoadmap: RoadmapData = {
  id: 'management',
  title: 'Management & Leadership',
  description: 'A comprehensive guide to tech leadership roles, from Technical Writing and Product Management to Engineering Management and Software Architecture with organic growth metaphors.',
  nodes: managementNodes,
  edges: managementEdges,
};
