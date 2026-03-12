import { createNode, createOrganicEdge, RoadmapData } from '../types';

const designNodes = [
  createNode('ds-ux', '🌱 Seed: UX Design Fundamentals', 'Basics', 'Understanding the user journey.', 'User Experience (UX) is about solving problems. Learn how to research, empathize, and structure information.', ['User Research & Personas', 'Information Architecture', 'Wireframing & User Flows', 'Usability Testing'], ['Miro', 'Balsamiq', 'Optimal Workshop'], ['Google UX Design Certificate'], ['Nielsen Norman Group', 'Don\'t Make Me Think (Book)']),
  createNode('ds-ui', '🌿 Sprout: UI Design & Prototyping', 'Core', 'The visual language of the product.', 'User Interface (UI) focuses on aesthetics, typography, color theory, and interactive prototypes.', ['Color Theory & Contrast', 'Typography & Hierarchy', 'Layout & Grids', 'High-Fidelity Prototyping'], ['Figma', 'Sketch', 'Adobe XD'], [], ['Refactoring UI', 'Figma Community']),
  createNode('ds-sys', '🪴 Roots: Design Systems', 'Advanced', 'Creating scalable, reusable components.', 'A single source of truth for design and development. Building a library of components, tokens, and guidelines.', ['Design Tokens (Colors, Spacing)', 'Component Libraries', 'Documentation (Storybook)', 'Atomic Design Methodology'], ['Figma Variables', 'Storybook', 'Zeroheight'], [], ['Design Systems Handbook', 'Brad Frost: Atomic Design']),
  createNode('ds-acc', '🪵 Trunk: Accessibility & Inclusive Design', 'Expert', 'Designing for everyone.', 'Ensuring digital products are usable by people with disabilities (visual, motor, cognitive).', ['WCAG Guidelines', 'Screen Readers', 'Keyboard Navigation', 'Color Blindness Simulation'], ['Stark (Figma Plugin)', 'WAVE Tool'], ['IAAP CPACC'], ['A11y Project', 'WebAIM'])
];

const designEdges = [
  createOrganicEdge('ds-ux', 'ds-ui'),
  createOrganicEdge('ds-ui', 'ds-sys'),
  createOrganicEdge('ds-sys', 'ds-acc'),
];

export const designRoadmap: RoadmapData = {
  id: 'design',
  title: 'Design',
  description: 'A comprehensive guide to UX/UI Design, Design Systems, and Accessibility with organic growth metaphors.',
  nodes: designNodes,
  edges: designEdges,
};
