import { createNode, createOrganicEdge, RoadmapData } from '../types';

const frameworkNodes = [
  createNode('f-react', '🌱 Seed: React & Vue', 'Basics', 'Component-based UI libraries.', 'The foundation of modern frontend development. React is the industry standard, while Vue offers a highly approachable alternative.', ['JSX/Templates', 'Components & Props', 'State & Lifecycle', 'Hooks/Composition API'], ['Vite', 'React DevTools', 'Vue DevTools'], [], ['React Docs', 'Vue.js Guide']),
  createNode('f-angular', '🌿 Sprout: Angular', 'Core', 'Enterprise frontend framework.', 'A complete, opinionated framework by Google. Uses TypeScript by default and includes routing, state, and HTTP clients out of the box.', ['TypeScript', 'Dependency Injection', 'RxJS & Observables', 'Directives'], ['Angular CLI'], [], ['Angular Docs', 'Tour of Heroes']),
  createNode('f-next', '🪴 Roots: Next.js', 'Core', 'Full-stack React framework.', 'Extends React with Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes for production-ready apps.', ['App Router', 'Server Components', 'Data Fetching', 'Image Optimization'], ['Vercel', 'Next.js CLI'], [], ['Next.js Learn', 'Vercel Docs']),
  createNode('f-django', '🪵 Trunk: Django & Ruby on Rails', 'Advanced', 'Monolithic MVC frameworks.', 'Batteries-included backend frameworks that prioritize developer speed. Django uses Python, Rails uses Ruby.', ['MVC/MVT Architecture', 'ORM (Object-Relational Mapping)', 'Authentication', 'Admin Panels'], ['Django Admin', 'Rails Console'], [], ['Django Girls Tutorial', 'Rails Guides']),
  createNode('f-laravel', '🍃 Branch: Laravel', 'Advanced', 'The PHP ecosystem giant.', 'An elegant PHP web framework with expressive syntax, robust ORM (Eloquent), and a massive ecosystem.', ['Eloquent ORM', 'Blade Templates', 'Artisan CLI', 'Routing & Middleware'], ['Composer', 'Artisan', 'Laravel Sail'], [], ['Laracasts', 'Laravel Docs']),
  createNode('f-spring', '🌳 Canopy: Spring Boot & ASP.NET Core', 'Expert', 'Enterprise backend titans.', 'The heavyweights of corporate software. Spring Boot (Java) and ASP.NET Core (C#) power the world\'s largest APIs and microservices.', ['Dependency Injection', 'Entity Framework / Hibernate', 'Microservices Architecture', 'Security & JWT'], ['IntelliJ IDEA', 'Visual Studio'], ['Spring Professional', 'Microsoft Certified: Azure Developer'], ['Spring Guides', 'Microsoft Learn ASP.NET'])
];

const frameworkEdges = [
  createOrganicEdge('f-react', 'f-next'),
  createOrganicEdge('f-react', 'f-angular'),
  createOrganicEdge('f-next', 'f-django'),
  createOrganicEdge('f-django', 'f-laravel'),
  createOrganicEdge('f-laravel', 'f-spring'),
];

export const frameworksRoadmap: RoadmapData = {
  id: 'frameworks',
  title: 'Frameworks',
  description: 'A guide to the most popular frontend and backend frameworks, from React to Spring Boot with organic growth metaphors.',
  nodes: frameworkNodes,
  edges: frameworkEdges,
};
