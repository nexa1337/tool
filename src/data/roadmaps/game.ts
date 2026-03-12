import { RoadmapData, createNode, createOrganicEdge } from '../types';

export const gameRoadmap: RoadmapData = {
  id: 'game',
  title: 'Game Development',
  description: 'A comprehensive guide to becoming a Game Developer, covering client-side, server-side, and backend game development with organic growth metaphors.',
  nodes: [
    createNode('g-1', '🌱 Seed: Programming Fundamentals', 'Basics', 'Learn C++, C#, or Rust. Understand memory management, OOP, and data structures.', 'The foundation of all game development. Without a strong grasp of programming concepts, building complex game logic is impossible.', ['C++', 'C#', 'Rust', 'Data Structures', 'Algorithms', 'Memory Management'], ['Visual Studio', 'Rider', 'CLion'], ['CS50', 'C++ Institute Certifications'], ['Learn C++ (learncpp.com)', 'Game Programming Patterns']),
    createNode('g-2', '🪴 Roots: Math & Physics', 'Basics', 'Linear algebra, trigonometry, vectors, matrices, and basic physics concepts.', 'Essential for 3D graphics, movement, collision detection, and simulating realistic environments.', ['Vectors', 'Matrices', 'Quaternions', 'Kinematics', 'Trigonometry', 'Calculus Basics'], ['Desmos', 'GeoGebra'], [], ['3D Math Primer for Graphics and Game Development', 'Khan Academy Linear Algebra']),
    createNode('g-3', '🌿 Sprout: 2D Game Development', 'Core', 'Start small by building 2D games to understand the game loop and basic mechanics.', 'Mastering 2D concepts like sprites, tilemaps, and simple physics before jumping into 3D.', ['Sprites', 'Tilemaps', '2D Collisions', 'Game Loop', 'Parallax Scrolling'], ['Godot', 'GameMaker', 'Unity 2D'], [], ['GameMaker Tutorials', 'Godot 2D Documentation']),
    createNode('g-4', '🪵 Trunk: Game Engines', 'Core', 'Master a commercial game engine to build games efficiently.', 'Choose an engine based on your goals (2D vs 3D, mobile vs PC/Console). The engine is the trunk that supports all your game features.', ['Unity', 'Unreal Engine', 'Godot', 'Entity Component System (ECS)', 'Scene Management'], ['Unity', 'Unreal', 'Godot'], ['Unity Certified Associate', 'Unreal Engine Certification'], ['Unity Learn', 'Unreal Online Learning']),
    createNode('g-5', '🍃 Branch: Client-Side Development', 'Specialization', 'Focus on gameplay programming, UI, animation, and player input.', 'Building the actual game the player interacts with. This is the visible part of the tree.', ['Gameplay Logic', 'UI/UX', 'Animation State Machines', 'Input Handling', 'Audio Integration'], ['FMOD', 'Wwise', 'Input System'], [], ['Game Feel by Steve Swink', 'GDC Vault']),
    createNode('g-6', '🍯 Nectar: Animations & VFX', 'Advanced', 'Bringing the game to life with particle systems, shaders, and skeletal animation.', 'The sweet nectar that attracts players: visual polish and "juice".', ['Particle Systems', 'Skeletal Animation', 'Inverse Kinematics (IK)', 'Post-Processing'], ['Niagara (Unreal)', 'VFX Graph (Unity)', 'Blender'], [], ['Real-Time VFX resources', 'SimonTrumpler Blog']),
    createNode('g-7', '🌲 Deep Roots: Graphics & Rendering', 'Advanced', 'Shaders, lighting, rendering pipelines, and GPU programming.', 'Making the game look beautiful and run fast by talking directly to the GPU.', ['HLSL/GLSL', 'Vulkan', 'DirectX', 'OpenGL', 'Ray Tracing', 'Compute Shaders'], ['RenderDoc', 'Pix', 'Nsight'], [], ['LearnOpenGL', 'Scratchapixel', 'GPU Gems']),
    createNode('g-8', '🍃 Branch: Server-Side Game Dev', 'Specialization', 'Authoritative servers, state synchronization, and multiplayer networking.', 'Building the backend logic for multiplayer games. The unseen roots connecting players.', ['TCP/UDP', 'State Sync', 'Client Prediction', 'Lag Compensation', 'Replication'], ['Photon', 'Unreal Dedicated Server', 'Mirror', 'FishNet'], [], ['Glenn Fiedler\'s Networked Physics', 'Gaffer On Games']),
    createNode('g-9', '🛡️ Bark: Multiplayer & Backend Services', 'Specialization', 'Matchmaking, leaderboards, player accounts, and microservices.', 'The infrastructure that protects and supports the game outside of the core loop.', ['REST APIs', 'WebSockets', 'Databases', 'Matchmaking', 'Authentication'], ['AWS GameLift', 'PlayFab', 'Nakama', 'Docker', 'Redis'], ['AWS Certified Developer'], ['PlayFab Documentation', 'Nakama Heroic Labs']),
    createNode('g-10', '🦅 Predator Defense: Anti-Cheat & Security', 'Expert', 'Protecting your game from hackers, aimbots, and memory injection.', 'Defending the game ecosystem from malicious actors.', ['Memory Obfuscation', 'Server-Side Validation', 'Encryption', 'Reverse Engineering Basics'], ['Easy Anti-Cheat', 'BattlEye'], [], ['Game Hacking Academy', 'Reverse Engineering for Beginners']),
    createNode('g-11', '🕸️ Spiderweb: Game AI', 'Advanced', 'Pathfinding, behavior trees, finite state machines, and utility AI.', 'Making non-player characters (NPCs) smart and challenging, weaving complex webs of behavior.', ['A* Pathfinding', 'NavMeshes', 'Behavior Trees', 'FSMs', 'Utility AI', 'GOAP'], ['Unreal Behavior Trees', 'NodeCanvas'], [], ['Programming Game AI by Example', 'AI and Games (YouTube)']),
    createNode('g-12', '🌴 Exotic Flora: AR/VR Development', 'Specialization', 'Building immersive experiences for Virtual and Augmented Reality.', 'Exploring new, exotic mediums of interaction and gameplay.', ['Stereoscopic Rendering', 'Spatial Audio', 'Hand Tracking', 'Locomotion Mechanics'], ['OpenXR', 'Meta Quest SDK', 'ARCore', 'ARKit'], [], ['Oculus Developer Hub', 'Unity XR Interaction Toolkit']),
    createNode('g-13', '🕸️ Spiderweb: Performance & Profiling', 'Expert', 'Memory optimization, CPU/GPU profiling, and multithreading.', 'Ensuring the game runs at a smooth 60+ FPS across all target hardware.', ['Memory Pools', 'Data-Oriented Design (ECS)', 'Multithreading', 'Garbage Collection Tuning'], ['RenderDoc', 'Pix', 'VTune', 'Superluminal'], [], ['Handmade Hero', 'CppCon Talks on Performance']),
    createNode('g-14', '🌳 Canopy: Custom Engine Development', 'Expert', 'Building your own game engine from scratch.', 'The ultimate test of game development knowledge, towering over the rest.', ['Windowing', 'Input Systems', 'Custom Renderers', 'Physics Engines', 'Asset Pipelines'], ['SDL2', 'GLFW', 'Vulkan', 'DirectX 12'], [], ['Game Engine Architecture by Jason Gregory', 'Hazel Engine (The Cherno)']),
  ],
  edges: [
    createOrganicEdge('g-1', 'g-2'),
    createOrganicEdge('g-2', 'g-3'),
    createOrganicEdge('g-3', 'g-4'),
    
    // Branches from Engine
    createOrganicEdge('g-4', 'g-5'), // Client
    createOrganicEdge('g-4', 'g-8'), // Server
    createOrganicEdge('g-4', 'g-7'), // Graphics
    createOrganicEdge('g-4', 'g-12'), // AR/VR
    
    // Client extensions
    createOrganicEdge('g-5', 'g-6'), // Animations
    createOrganicEdge('g-5', 'g-11'), // AI
    
    // Server extensions
    createOrganicEdge('g-8', 'g-9'), // Backend
    createOrganicEdge('g-9', 'g-10'), // Anti-cheat
    
    // Convergence to Profiling
    createOrganicEdge('g-7', 'g-13'),
    createOrganicEdge('g-11', 'g-13'),
    createOrganicEdge('g-6', 'g-13'),
    
    // Canopy
    createOrganicEdge('g-13', 'g-14'),
  ],
};
