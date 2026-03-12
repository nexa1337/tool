import { createNode, createOrganicEdge, RoadmapData } from '../types';

const langNodes = [
  createNode('l-html', '🌱 Seed: HTML & CSS', 'Basics', 'The visual foundation of the web.', 'Every web developer starts here. HTML provides structure, and CSS provides styling.', ['Semantic HTML', 'CSS Flexbox & Grid', 'Responsive Design', 'Accessibility'], ['VS Code', 'Chrome DevTools'], [], ['MDN Web Docs', 'CSS-Tricks']),
  createNode('l-shell', '🌿 Sprout: Shell/Bash', 'Basics', 'The developer environment.', 'Mastering the command line is essential for any platform.', ['Bash Scripting', 'File Permissions', 'Piping & Redirection', 'SSH'], ['Terminal', 'Bash', 'Zsh'], [], ['Missing Semester (MIT)', 'Linux Command Line']),
  createNode('l-js', '🪴 Roots: JavaScript & TypeScript', 'Core', 'The interactive layer of the web.', 'JavaScript adds behavior to the web. TypeScript adds static typing for safer, scalable code.', ['ES6+ Syntax', 'DOM Manipulation', 'Promises & Async/Await', 'TypeScript Interfaces & Types'], ['Node.js', 'TypeScript Compiler'], [], ['javascript.info', 'TypeScript Handbook']),
  createNode('l-node', '🪵 Trunk: Node.js & SQL', 'Core', 'Data and server runtime.', 'Node.js allows JS on the server. SQL is the universal language of relational databases.', ['Event Loop', 'Express.js', 'Relational Databases', 'Joins & Indexes'], ['PostgreSQL', 'MySQL', 'npm'], [], ['Node.js Docs', 'SQLBolt']),
  createNode('l-py', '🍃 Branch: Python & Ruby', 'Specialization', 'Versatile scripting and backend languages.', 'Python is king for AI/Data and great for backend. Ruby is famous for developer happiness.', ['Python OOP', 'List Comprehensions', 'Ruby Blocks & Procs', 'Scripting'], ['Python', 'Ruby', 'Jupyter'], [], ['Automate the Boring Stuff', 'Ruby in 20 Minutes']),
  createNode('l-java', '🍃 Branch: Java & PHP', 'Specialization', 'Enterprise and classic web.', 'Java powers massive enterprise systems. PHP still powers a huge portion of the web.', ['JVM', 'Object-Oriented Design', 'PHP Sessions', 'Composer'], ['IntelliJ IDEA', 'PHPStorm'], ['Oracle Certified Professional'], ['Java Tutorials', 'PHP The Right Way']),
  createNode('l-cpp', '🌲 Deep Roots: C++ & Rust', 'Expert', 'High-performance systems programming.', 'When memory management and speed are critical. Rust adds memory safety without garbage collection.', ['Pointers & Memory', 'Rust Ownership & Borrowing', 'Concurrency', 'Systems Programming'], ['GCC', 'Cargo', 'Valgrind'], [], ['LearnCpp', 'The Rust Book']),
  createNode('l-go', '🍯 Nectar: Golang', 'Advanced', 'Modern concurrency and cloud.', 'Go is designed by Google for simple, high-performance concurrent programming, heavily used in cloud infrastructure.', ['Goroutines', 'Channels', 'Interfaces', 'Go Modules'], ['Go Compiler'], [], ['A Tour of Go', 'Go by Example']),
  createNode('l-mobile', '🌴 Exotic Flora: Kotlin & Swift UI', 'Specialization', 'Mobile ecosystems.', 'Kotlin is the modern standard for Android. Swift UI is Apple\'s declarative framework for iOS/macOS.', ['Kotlin Coroutines', 'Swift UI Views', 'State Management', 'Mobile Lifecycles'], ['Android Studio', 'Xcode'], [], ['Kotlin Koans', '100 Days of SwiftUI'])
];

const langEdges = [
  createOrganicEdge('l-html', 'l-js'),
  createOrganicEdge('l-shell', 'l-js'),
  createOrganicEdge('l-js', 'l-node'),
  createOrganicEdge('l-node', 'l-py'),
  createOrganicEdge('l-node', 'l-java'),
  createOrganicEdge('l-shell', 'l-cpp'),
  createOrganicEdge('l-node', 'l-go'),
  createOrganicEdge('l-java', 'l-mobile'),
];

export const languagesRoadmap: RoadmapData = {
  id: 'languages',
  title: 'Languages & Platforms',
  description: 'A comprehensive guide to programming languages and platforms, from web basics to systems programming with organic growth metaphors.',
  nodes: langNodes,
  edges: langEdges,
};
