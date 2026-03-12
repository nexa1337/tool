import { createNode, createOrganicEdge, RoadmapData } from '../types';

const csNodes = [
  // ---------------------------------------------------------
  // TIER 1: THE FOUNDATION (START HERE)
  // ---------------------------------------------------------
  createNode(
    'cs-start', '🌱 Seed: Programming Basics', 'Basics', 
    'The seed of computer science. Learn how to write code.', 
    'Before diving into theory, you must know how to code. Choose one language (Python, C++, or Java) and master its syntax and logic to plant your roots.', 
    ['Variables & Data Types', 'Control Structures (if, loops)', 'Functions & Scope', 'Object-Oriented Programming (OOP)'], 
    ['Python', 'Java', 'C++'], 
    ['PCEP (Python)'], 
    ['CS50 (Harvard)', 'Codecademy', 'freeCodeCamp']
  ),
  createNode(
    'cs-lab', '🌿 Sprout: Build a CS Dev Lab', 'Basics', 
    'Sprout your development environment. Set up a local workspace to write, compile, and test your code efficiently.', 
    'A computer scientist needs a proper laboratory. Learn how to use an IDE, manage versions of your code with Git, and navigate the terminal.', 
    ['IDE Setup', 'Version Control (Git & GitHub)', 'Command Line Interface (CLI)', 'Linux Environment (WSL or VM)', 'Docker Basics'], 
    ['VS Code', 'IntelliJ', 'Git', 'Terminal/Bash', 'Docker'], 
    [], 
    ['GitHub Guides', 'Missing Semester of Your CS Education (MIT)']
  ),
  createNode(
    'cs-math', '🪴 Roots: Discrete Math & Logic', 'Core', 
    'The logical roots. The mathematical foundations required for advanced CS topics.', 
    'Computer Science is applied mathematics. Discrete math teaches you the logic behind algorithms, cryptography, and databases.', 
    ['Boolean Algebra', 'Set Theory', 'Graph Theory', 'Combinatorics', 'Probability'], 
    [], 
    [], 
    ['MIT OpenCourseWare', 'TrevTutor (YouTube)']
  ),
  createNode(
    'cs-dsa', '🪴 Roots: Data Structures & Algorithms', 'Core', 
    'The algorithmic roots. Learn how to organize data and solve problems efficiently.', 
    'This is the most important class in a CS degree. It is the core of technical interviews and writing performant code.', 
    ['Arrays, Linked Lists, Stacks, Queues', 'Trees (Binary, AVL) & Graphs', 'Hash Tables', 'Sorting & Searching', 'Big-O Notation'], 
    ['LeetCode', 'HackerRank'], 
    [], 
    ['CLRS (Book)', 'NeetCode', 'GeeksforGeeks']
  ),
  createNode(
    'cs-arch', '🪵 Trunk: Computer Architecture & OS', 'Core', 
    'The sturdy trunk of computing. Understand how software interacts with hardware.', 
    'How does code turn into electrical signals? Learn about CPU design, memory hierarchies, and how Operating Systems manage resources.', 
    ['Digital Logic & Gates', 'Memory Hierarchy (Cache, RAM)', 'Assembly Language', 'Process Management', 'Multithreading & Concurrency'], 
    ['C', 'Linux', 'Logisim'], 
    [], 
    ['Nand to Tetris', 'OSTEP (Book)']
  ),
  createNode(
    'cs-netdb', '🪵 Trunk: Networks & Databases', 'Core', 
    'The trunk of data flow. How computers communicate and store data persistently.', 
    'The internet is a giant distributed system. Learn the protocols that make the web work and how to design database schemas.', 
    ['OSI & TCP/IP Models', 'HTTP, DNS, TCP/UDP', 'Relational Databases (SQL)', 'ACID Properties', 'Indexing & Query Optimization'], 
    ['Wireshark', 'PostgreSQL', 'MySQL'], 
    ['AWS Certified Cloud Practitioner'], 
    ['Computer Networking: A Top-Down Approach', 'SQLBolt']
  ),
  createNode(
    'cs-swe', '🍃 Branch: Software Engineering & Code Review', 'Core', 
    'Branching into teamwork. Writing clean, maintainable, and collaborative code.', 
    'Transition from writing code for yourself to writing code for a team. Learn testing, CI/CD, and code review best practices.', 
    ['Code Review Etiquette', 'Static Analysis & Linting', 'Unit & Integration Testing', 'CI/CD Pipelines', 'Agile & Scrum'], 
    ['GitHub Actions', 'SonarQube', 'Jest/JUnit', 'ESLint'], 
    [], 
    ['roadmap.sh/code-review-best-practices', 'Clean Code (Book)']
  ),

  // ---------------------------------------------------------
  // TIER 2: PATH DIVERGENCE (CHOOSE YOUR SPECIALIZATION)
  // ---------------------------------------------------------

  // --- PATH A: FRONTEND / WEB ENGINEERING ---
  createNode(
    'cs-fe1', '🌸 Bloom: Frontend Fundamentals', 'Specialization', 
    'Blooming into the frontend. Building the user interfaces of the web.', 
    'Learn the core trio of the web. This is about creating responsive, accessible, and interactive user experiences.', 
    ['HTML5 Semantic Tags', 'CSS3 (Flexbox, Grid, Animations)', 'JavaScript (ES6+, DOM Manipulation)', 'Web Accessibility (a11y)', 'Responsive Design'], 
    ['HTML/CSS/JS', 'Figma', 'Chrome DevTools'], 
    [], 
    ['MDN Web Docs', 'Frontend Masters', 'CSS-Tricks']
  ),
  createNode(
    'cs-fe2', '🌸 Bloom: Modern Frontend Frameworks', 'Advanced', 
    'A full bloom of web apps. Building complex Single Page Applications (SPAs).', 
    'Vanilla JS is rarely used for large apps. Master a modern component-based framework and state management.', 
    ['React / Vue / Angular', 'Component Lifecycle', 'State Management (Redux, Zustand)', 'Routing', 'API Integration (Fetch, Axios)'], 
    ['React', 'Vue.js', 'Redux', 'Vite'], 
    [], 
    ['React Official Docs', 'Epic React by Kent C. Dodds']
  ),
  createNode(
    'cs-fe3', '🍯 Nectar: Advanced Web & Performance', 'Expert', 
    'The nectar of performance. Server-side rendering, web vitals, and build tools.', 
    'Optimizing apps for speed and SEO. Understanding how bundlers work under the hood.', 
    ['Next.js / Nuxt.js (SSR/SSG)', 'Core Web Vitals', 'Webpack / Rollup', 'WebSockets', 'PWA (Progressive Web Apps)'], 
    ['Next.js', 'Webpack', 'Lighthouse'], 
    [], 
    ['Next.js Learn', 'Web.dev']
  ),

  // --- PATH B: BACKEND, SOFTWARE DESIGN & ARCHITECTURE ---
  createNode(
    'cs-be1', '🍄 Mycelium: Backend & APIs', 'Specialization', 
    'The hidden mycelium. Building the server-side logic and APIs.', 
    'Handling business logic, authentication, and communicating with databases securely.', 
    ['RESTful API Design', 'GraphQL', 'Authentication (JWT, OAuth)', 'ORM/Query Builders', 'Middleware'], 
    ['Node.js/Express', 'Python/Django', 'Java/Spring Boot', 'Go'], 
    ['AWS Certified Developer - Associate'], 
    ['Backend Roadmap (roadmap.sh)', 'MDN Express Tutorial']
  ),
  createNode(
    'cs-design', '🍄 Mycelium: Software Design & Architecture', 'Advanced', 
    'Expanding the mycelium. Structuring codebases for long-term maintainability.', 
    'Writing code that survives changing requirements. Mastering design patterns and architectural principles.', 
    ['SOLID Principles', 'GoF Design Patterns', 'Domain-Driven Design (DDD)', 'Hexagonal / Clean Architecture', 'Event-Driven Architecture'], 
    ['UML', 'PlantUML', 'Structurizr'], 
    [], 
    ['roadmap.sh/software-design-architecture', 'Design Patterns (Refactoring.guru)']
  ),
  createNode(
    'cs-sysdesign', '🕸️ Spiderweb: System Design & Scalability', 'Expert', 
    'A spiderweb of scalability. Designing distributed systems that handle massive scale.', 
    'How do you build a system for millions of users? Learn caching, load balancing, and database sharding.', 
    ['CAP Theorem', 'Load Balancing & API Gateways', 'Caching Strategies (Redis)', 'Message Brokers (Kafka/RabbitMQ)', 'Database Sharding & Replication'], 
    ['Redis', 'Apache Kafka', 'Nginx', 'Kubernetes'], 
    ['AWS Certified Solutions Architect - Professional'], 
    ['roadmap.sh/system-design', 'ByteByteGo', 'Designing Data-Intensive Applications']
  ),

  // --- PATH C: LOW-LEVEL / SYSTEMS ENGINEERING ---
  createNode(
    'cs-sys1', '🌲 Deep Roots: Systems Programming', 'Specialization', 
    'Deep roots in performance. Writing high-performance, memory-safe code.', 
    'Building operating systems, game engines, or high-frequency trading platforms where every microsecond counts.', 
    ['C / C++ / Rust', 'Manual Memory Management', 'Pointers & References', 'Memory Safety (Rust Ownership)', 'Multithreading'], 
    ['C++', 'Rust', 'Valgrind', 'GDB'], 
    [], 
    ['The Rust Programming Language (Book)', 'LearnCpp.com']
  ),
  createNode(
    'cs-sys2', '🕸️ Spiderweb: Compilers & Embedded Systems', 'Expert', 
    'A spiderweb of low-level logic. Translating code to machine instructions or running on bare metal.', 
    'Understanding Lexical Analysis, Parsing, and Code Generation. Or writing code for microcontrollers with strict constraints.', 
    ['Lexical Analysis & Parsing', 'Abstract Syntax Trees (AST)', 'LLVM', 'RTOS (Real-Time Operating Systems)', 'Hardware Interfacing'], 
    ['LLVM', 'Flex/Bison', 'FreeRTOS'], 
    [], 
    ['Dragon Book (Compilers)', 'Crafting Interpreters']
  ),

  // --- PATH D: TECHNICAL WRITING & DEVREL ---
  createNode(
    'cs-tw', '🛡️ Bark: Technical Writing', 'Specialization', 
    'The protective bark of documentation. Explaining complex technical concepts clearly.', 
    'Great software needs great documentation. Learn how to write API docs, tutorials, and manage docs-as-code.', 
    ['Diátaxis Framework (Tutorials, How-to, Reference, Explanation)', 'Docs-as-Code', 'Markdown & MDX', 'OpenAPI / Swagger', 'Information Architecture'], 
    ['Docusaurus', 'Swagger', 'Hugo', 'MkDocs'], 
    [], 
    ['roadmap.sh/technical-writer', 'Google Technical Writing Courses']
  ),
  createNode(
    'cs-devrel', '🌴 Exotic Flora: Developer Relations (DevRel)', 'Advanced', 
    'Exotic flora of community. Building communities and advocating for developers.', 
    'Bridging the gap between the company and the developer community through content, speaking, and feedback.', 
    ['Developer Experience (DX)', 'Community Building & Management', 'Public Speaking & CFPs', 'SDK & Library Development', 'Technical Content Creation'], 
    ['Discord/Slack', 'GitHub Discussions', 'OBS Studio'], 
    [], 
    ['roadmap.sh/devrel', 'DevRel.net', 'Mary Thengvall\'s Business Value of DevRel']
  ),

  // ---------------------------------------------------------
  // TIER 3: THE END GOALS
  // ---------------------------------------------------------
  createNode(
    'cs-end-fe', '🌳 Canopy: Principal Frontend Engineer', 'Expert', 
    'The canopy of user experience. Leading UI architecture and design systems.', 
    'You design massive, scalable frontend architectures, build company-wide design systems, and optimize web performance.', 
    ['Micro-frontends', 'Design Systems', 'WebAssembly (Wasm)', 'Frontend Infrastructure'], 
    ['Storybook', 'WebAssembly', 'Monorepos (Turborepo)'], 
    [], 
    ['Real-world Experience', 'Patterns.dev']
  ),
  createNode(
    'cs-end-arch', '🌳 Canopy: Principal Software Architect', 'Expert', 
    'The canopy of software design. Designing scalable, fault-tolerant software architectures.', 
    'You design complex systems, mentor developers, make high-level architectural decisions, and solve the hardest technical problems.', 
    ['Enterprise System Design', 'Scalability Patterns', 'Database Internals', 'Cloud Architecture', 'Technical Leadership'], 
    ['AWS/GCP/Azure', 'System Design Frameworks'], 
    ['AWS Certified Solutions Architect - Professional'], 
    ['roadmap.sh/software-architect', 'Grokking the System Design Interview']
  ),
  createNode(
    'cs-end-devrel', '🌳 Canopy: Head of DevRel / Staff Tech Writer', 'Expert', 
    'The canopy of developer advocacy. Leading developer experience and community strategy.', 
    'You define the developer journey, lead teams of advocates and writers, and shape the product based on community feedback.', 
    ['DevRel Strategy & Metrics', 'Developer Journey Mapping', 'Cross-functional Leadership', 'Ecosystem Growth'], 
    ['Analytics Tools', 'CRM'], 
    [], 
    ['Real-world Experience']
  )
];

const csEdges = [
  // Foundations
  createOrganicEdge('cs-start', 'cs-lab'),
  createOrganicEdge('cs-lab', 'cs-math'),
  createOrganicEdge('cs-math', 'cs-dsa'),
  createOrganicEdge('cs-dsa', 'cs-arch'),
  createOrganicEdge('cs-arch', 'cs-netdb'),
  createOrganicEdge('cs-netdb', 'cs-swe'),

  // Branching to Paths
  createOrganicEdge('cs-swe', 'cs-fe1'),  // To Frontend
  createOrganicEdge('cs-swe', 'cs-be1'),  // To Backend & Architecture
  createOrganicEdge('cs-swe', 'cs-sys1'), // To Systems
  createOrganicEdge('cs-swe', 'cs-tw'),   // To Tech Writing & DevRel

  // Frontend Path
  createOrganicEdge('cs-fe1', 'cs-fe2'),
  createOrganicEdge('cs-fe2', 'cs-fe3'),
  createOrganicEdge('cs-fe3', 'cs-end-fe'), // End Goal 1

  // Backend & Architecture Path
  createOrganicEdge('cs-be1', 'cs-design'),
  createOrganicEdge('cs-design', 'cs-sysdesign'),
  createOrganicEdge('cs-sysdesign', 'cs-end-arch'), // End Goal 2

  // Systems Path
  createOrganicEdge('cs-sys1', 'cs-sys2'),
  createOrganicEdge('cs-sys2', 'cs-end-arch'), // Systems also leads to Software Architect

  // Tech Writing & DevRel Path
  createOrganicEdge('cs-tw', 'cs-devrel'),
  createOrganicEdge('cs-devrel', 'cs-end-devrel'), // End Goal 3
];

export const csRoadmap: RoadmapData = {
  id: 'cs',
  title: 'Computer Science & Software Engineering',
  description: 'A comprehensive guide featuring distinct paths for Frontend, Backend/Architecture, Low-Level Systems, and DevRel/Technical Writing with organic growth metaphors.',
  nodes: csNodes,
  edges: csEdges,
};
