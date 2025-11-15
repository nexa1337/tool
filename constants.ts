import type { RoadmapNode, Tool, Category, Ebook, EbookCategory, LearningPlatform, LearningCategory, PlatformCategory } from './types.ts';
import { 
    Code, GitBranch, Terminal, Database, Cloud, Bot, Cpu, 
    Network, Shield, PenTool, BrainCircuit, BarChart, Gamepad,
    Palette, Clapperboard, DraftingCompass, Wind, Mic, Film,
    BookOpen, MousePointerClick, ShoppingCart, Server, Monitor, 
    Smartphone, Search, KeyRound, Lock, Bug, FlaskConical, Braces,
    BookCopy, Award, BookOpenCheck, CreditCard, DownloadCloud, GraduationCap
} from 'lucide-react';

export const domainColors: Record<string, { color: string; textColor: string; }> = {
    'CyberSecurity': { color: '#ef4444', textColor: 'text-red-500' },
    'Full Stack Dev': { color: '#f97316', textColor: 'text-orange-500' },
    'Back-End Dev': { color: '#eab308', textColor: 'text-yellow-500' },
    'Apps dev': { color: '#3b82f6', textColor: 'text-blue-500' },
    'Low-Code/No-Code': { color: '#ec4899', textColor: 'text-pink-500' },
    'Data Science': { color: '#8b5cf6', textColor: 'text-purple-500' },
    'Artificial Intelligence': { color: '#22c55e', textColor: 'text-green-500' },
    'Machine Learning': { color: '#06b6d4', textColor: 'text-cyan-500' },
    'DevOps': { color: '#64748b', textColor: 'text-slate-500' },
    'Cloud Computing': { color: '#1d4ed8', textColor: 'text-blue-700' },
    'Networking': { color: '#059669', textColor: 'text-emerald-600' },
    'Operating Systems': { color: '#4f46e5', textColor: 'text-indigo-600' },
    'Programming Languages': { color: '#d946ef', textColor: 'text-fuchsia-500' },
};

export const headerNavLinks: {
  name: string;
  view?: 'roadmap' | 'tools' | 'ebooks' | 'learning';
  isMegaMenu?: boolean;
  isModal?: boolean;
}[] = [
  { name: 'Mindmap', view: 'roadmap' },
  { name: 'Tools', view: 'tools' },
  { name: 'Ebooks', view: 'ebooks' },
  { name: 'Learning', view: 'learning' },
  { name: 'Database', isMegaMenu: true },
  { name: 'About', isModal: true },
];


export const generalRoadmapData: RoadmapNode = {
  name: 'COMPUTER',
  color: '#1e293b',
  children: [
    {
      name: 'Programming Languages',
      color: domainColors['Programming Languages'].color,
      children: [
        { name: 'Python', color: '#306998', details: 'Versatile language for web dev, data science, AI.' },
        { name: 'JavaScript', color: '#F0DB4F', details: 'The language of the web, for frontend and backend.' },
        { name: 'Java', color: '#e52d2f', details: 'Enterprise-level applications, Android development.' },
        { name: 'C++', color: '#004482', details: 'Performance-critical applications, game development.' },
        { name: 'C#', color: '#68217A', details: 'Windows applications, game development with Unity.' },
        { name: 'Ruby', color: '#A91401', details: 'Known for the Ruby on Rails framework, rapid web dev.' },
        { name: 'Shell Scripting', color: '#4EAA25', details: 'Automating tasks in Unix/Linux environments.' },
      ]
    },
    {
      name: 'Web Development',
      color: domainColors['Full Stack Dev'].color,
      children: [
        {
          name: 'Frontend',
          color: '#61DBFB',
          children: [
            { name: 'HTML/CSS', level: 'Beginner', color: '#e34c26' },
            { name: 'JavaScript', level: 'Beginner', color: '#f0db4f' },
            { name: 'React', level: 'Intermediate', color: '#61dafb' },
            { name: 'Vue', level: 'Intermediate', color: '#41b883' },
            { name: 'Angular', level: 'Intermediate', color: '#dd1b16' },
          ]
        },
        {
          name: 'Backend',
          color: domainColors['Back-End Dev'].color,
          children: [
            { name: 'Node.js', level: 'Intermediate', color: '#68a063' },
            { name: 'Django (Python)', level: 'Intermediate', color: '#092e20' },
            { name: 'Ruby on Rails', level: 'Intermediate', color: '#cc0000' },
            { name: 'Databases (SQL/NoSQL)', level: 'Intermediate', color: '#00758f' },
          ]
        },
        { name: 'Full Stack', color: domainColors['Full Stack Dev'].color, details: 'Mastery of both frontend and backend technologies.' }
      ]
    },
    {
      name: 'Cybersecurity',
      color: domainColors['CyberSecurity'].color,
      children: [
        { 
          name: 'Fundamentals', 
          level: 'Beginner',
          color: '#f43f5e',
          certifications: [
            { name: 'CompTIA Security+', url: '#' },
            { name: 'CompTIA Network+', url: '#' },
          ]
        },
        { 
          name: 'Penetration Testing',
          level: 'Intermediate',
          color: '#be123c',
          certifications: [
            { name: 'OSCP', url: '#' },
            { name: 'CompTIA PenTest+', url: '#' },
          ]
        },
        { name: 'Digital Forensics', level: 'Advanced', color: '#881337' },
      ]
    },
    {
      name: 'Operating Systems',
      color: domainColors['Operating Systems'].color,
      children: [
        { name: 'Windows', color: '#00a4ef' },
        { name: 'Linux', color: '#FCC624' },
        { name: 'Android', color: '#a4c639' },
        { name: 'macOS', color: '#000000' },
      ]
    },
    {
      name: 'Networking',
      color: domainColors['Networking'].color,
      certifications: [
          { name: 'Cisco CCNA', url: '#' },
          { name: 'CompTIA Network+', url: '#' },
      ],
      children: [
        { name: 'OSI Model', level: 'Beginner', color: '#059669' },
        { name: 'Routing & Switching', level: 'Intermediate', color: '#047857' },
        { name: 'Network Security', level: 'Advanced', color: '#065f46' },
      ]
    },
    {
      name: 'Data Science & AI/ML',
      color: domainColors['Data Science'].color,
      children: [
        { name: 'Data Analysis', color: domainColors['Data Science'].color, children: [{ name: 'Pandas, NumPy', color: '#150458' }] },
        { name: 'Machine Learning', color: domainColors['Machine Learning'].color, children: [{ name: 'Scikit-learn, TensorFlow', color: '#ff6f00' }] },
        { name: 'Artificial Intelligence', color: domainColors['Artificial Intelligence'].color, details: 'Developing intelligent systems and agents.' },
      ]
    },
    {
      name: 'Cloud Computing',
      color: domainColors['Cloud Computing'].color,
      certifications: [
        { name: 'AWS Certified Solutions Architect', url: '#' },
        { name: 'Microsoft Certified: Azure Administrator', url: '#' },
      ],
      children: [
        { name: 'AWS', color: '#FF9900' },
        { name: 'Azure', color: '#0089D6' },
        { name: 'Google Cloud', color: '#4285F4' },
      ]
    },
    {
      name: 'DevOps',
      color: domainColors['DevOps'].color,
      children: [
        { name: 'CI/CD', level: 'Intermediate', color: '#6b7280', children: [{ name: 'Jenkins, GitLab CI', color: '#D24939' }] },
        { name: 'Containerization', level: 'Intermediate', color: '#4b5563', children: [{ name: 'Docker, Kubernetes', color: '#0db7ed' }] },
        { name: 'Infrastructure as Code', level: 'Advanced', color: '#374151', children: [{ name: 'Terraform, Ansible', color: '#623ce4' }] },
      ]
    },
  ]
};

export const cybersecurityRoadmapData: RoadmapNode = {
  name: 'CyberSecurity',
  color: '#1e293b',
  children: [
    {
      name: 'Level 0 - Bug Bounty',
      color: '#4b5563',
      children: [
        {
          name: 'CS50',
          color: '#f59e0b',
          children: [
            { name: 'Web Technologies', color: '#0ea5e9', details: 'Learn HTML, CSS, JavaScript, and server-side languages.' },
            { name: 'Computer Science', color: '#0ea5e9', details: 'Understand fundamental concepts of computing.' },
            { name: 'Cryptography', color: '#0ea5e9', details: 'Basics of encryption, decryption, and secure communication.' },
          ],
        },
        { name: 'A+', color: '#f59e0b', children: [{ name: 'CompTIA A+', color: '#0ea5e9', details: 'Core IT skills across devices and operating systems.' }] },
        {
          name: 'Programming',
          color: '#f59e0b',
          children: [
            { name: 'Python', color: '#14b8a6', details: 'Essential for scripting, automation, and exploit development.' },
            { name: 'Ruby', color: '#14b8a6', details: 'Useful for web exploitation, especially with Metasploit.' },
            { name: 'Shell Scripting', color: '#14b8a6', details: 'Automating tasks and navigating Linux/Unix systems.' },
          ],
        },
        {
          name: 'Operating System',
          color: '#d97706',
          children: [
            { name: 'Windows', color: '#a855f7', details: 'Understanding Windows architecture and security.' },
            { name: 'Linux', color: '#a855f7', details: 'Crucial for most security tools and servers.' },
            { name: 'Android', color: '#a855f7', details: 'Mobile security and penetration testing.' },
          ],
        },
        {
          name: 'Networking',
          color: '#ca8a04',
          children: [
            { name: 'Cisco CCNA', color: '#ef4444', details: 'Foundation in network installation, operations, and troubleshooting.' },
            { name: 'CompTIA Network+', color: '#ef4444', details: 'Core networking concepts and skills.' },
          ],
        },
        { name: 'Security+', color: '#854d0e', children: [{ name: 'CompTIA Security+', color: '#78716c', details: 'Baseline cybersecurity skills and knowledge.' }] },
        { name: 'MSCA', color: '#854d0e', children: [{ name: 'Microsoft Certified Solutions Associate', color: '#78716c', details: 'Skills in managing Windows Server environments.' }] },
      ],
    },
    {
      name: 'Level 1 - JUNIOR PENETRATION TESTER',
      color: '#10b981',
      children: [
        { name: 'EJPT', color: '#059669', children: [{ name: 'eLearnSecurity Junior Penetration Tester', color: '#22c55e', details: 'Hands-on penetration testing skills.' }] },
        { name: 'PENTEST+', color: '#059669', children: [{ name: 'CompTIA Pentest+', color: '#22c55e', details: 'Covers the entire pen testing process.' }] },
        { name: 'OSCP', color: '#059669', children: [{ name: 'Offensive Security Certified Professional', color: '#22c55e', details: 'Highly respected, hands-on certification.' }] },
      ],
    },
    {
      name: 'Level 2 - PENETRATION TESTER',
      color: '#dc2626',
      children: [
        { name: 'AWAE', color: '#9333ea', children: [{ name: 'Advanced Web Attacks and Exploitation', color: '#14b8a6', details: 'Focuses on white box web app pen testing.' }] },
        { name: 'OSCE', color: '#9333ea', children: [{ name: 'Offensive Security Certified Expert', color: '#14b8a6', details: 'Advanced exploit development.' }] },
        { name: 'GIAC GPEN', color: '#9333ea', children: [{ name: 'Global Information Assurance Certification', color: '#14b8a6', details: 'In-depth penetration testing methodologies.' }] },
      ],
    },
    {
      name: 'Level 3 - RED TEAM',
      color: '#ef4444',
      children: [
        { name: 'CRTP/CRTE', color: '#f97316', children: [{ name: 'Certified Red Team Professional/Expert', color: '#78716c', details: 'Active Directory exploitation and red teaming.' }] },
        { name: 'OSEP', color: '#f97316', children: [{ name: 'Offensive Security Experienced Penetration Tester', color: '#78716c', details: 'Advanced penetration testing and adversary simulation.' }] },
        { name: 'CEH', color: '#f97316', children: [{ name: 'Certified Ethical Hacker', color: '#78716c', details: 'Broad knowledge of ethical hacking.' }] },
        { name: 'CISSP', color: '#f97316', children: [{ name: 'Certified Information Systems Security Professional', color: '#78716c', details: 'High-level security management and policy.' }] },
      ],
    },
    {
      name: 'CTF',
      color: '#f97316',
      children: [
        { name: 'Hack The Box', color: '#d8b4fe', details: 'Online platform to test and advance your skills in penetration testing and cybersecurity.' },
        { name: 'Exploit3rs', color: '#d8b4fe', details: 'CTF practice challenges.' },
        { name: 'Try Hack Me', color: '#d8b4fe', details: 'Gamified learning platform for cybersecurity.' },
        { name: 'Over The Wire', color: '#d8b4fe', details: 'Wargames to learn and practice security concepts.' },
        { name: 'Root Me', color: '#d8b4fe', details: 'A platform to train your hacking skills.' },
        { name: 'Pico CTF', color: '#d8b4fe', details: 'A free computer security game for beginners.' },
        { name: 'CTF learn', color: '#d8b4fe', details: 'An ethical hacking platform that enables you to learn by solving challenges.' },
        { name: 'Hacker101 CTF', color: '#d8b4fe', details: 'CTF from HackerOne, focused on web security.' },
        { name: 'WeChall', color: '#d8b4fe', details: 'A challenge site aggregator.' },
        { name: 'CTFTime', color: '#d8b4fe', details: 'A calendar for upcoming CTF events.' },
      ],
    },
  ],
};


export const categories: Category[] = [
    { name: 'Development', Icon: Code },
    { name: 'Graphic Design', Icon: Palette },
    { name: 'Video Editing', Icon: Clapperboard },
    { name: 'No-Code/App Builders', Icon: MousePointerClick },
    { name: '3D Design', Icon: DraftingCompass },
    { name: 'AI Image Generators', Icon: BrainCircuit },
    { name: 'AI Video Generators', Icon: Film },
    { name: 'AI Writing Tools', Icon: PenTool },
    { name: 'AI Voice Generators', Icon: Mic },
    { name: 'Web Hosting', Icon: Server },
    { name: 'Game Development', Icon: Gamepad },
];

export const tools: Tool[] = [
    { name: 'VS Code', description: 'A powerful, free code editor.', link: 'https://code.visualstudio.com/', category: 'Development', status: 'Free', tags: ['IDE', 'Editor'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'Git', description: 'Version control system.', link: 'https://git-scm.com/', category: 'Development', status: 'Free', tags: ['VCS'], logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Canva', description: 'Easy-to-use graphic design tool.', link: 'https://www.canva.com/', category: 'Graphic Design', status: 'Freemium', tags: ['Design', 'UI'], logo: 'https://logo.clearbit.com/canva.com' },
    { name: 'Figma', description: 'Collaborative interface design tool.', link: 'https://www.figma.com/', category: 'Graphic Design', status: 'Freemium', tags: ['UI', 'UX', 'Prototyping'], logo: 'https://logo.clearbit.com/figma.com' },
    { name: 'DaVinci Resolve', description: 'Professional video editing software.', link: 'https://www.blackmagicdesign.com/products/davinciresolve', category: 'Video Editing', status: 'Freemium', tags: ['Editing', 'Color Grading'], logo: 'https://logo.clearbit.com/blackmagicdesign.com' },
    { name: 'CapCut', description: 'Free all-in-one video editor.', link: 'https://www.capcut.com/', category: 'Video Editing', status: 'Free', tags: ['Mobile', 'Desktop'], logo: 'https://logo.clearbit.com/capcut.com' },
    { name: 'Bubble', description: 'Build web apps without code.', link: 'https://bubble.io/', category: 'No-Code/App Builders', status: 'Premium', tags: ['No-Code', 'Web App'], logo: 'https://logo.clearbit.com/bubble.io' },
    { name: 'Blender', description: 'Free and open source 3D creation suite.', link: 'https://www.blender.org/', category: '3D Design', status: 'Free', tags: ['3D', 'Animation'], logo: 'https://logo.clearbit.com/blender.org' },
    { name: 'Midjourney', description: 'AI image generator via Discord.', link: 'https://www.midjourney.com/', category: 'AI Image Generators', status: 'Premium', tags: ['AI', 'Image'], logo: 'https://logo.clearbit.com/midjourney.com' },
    { name: 'Stable Diffusion', description: 'Open source text-to-image model.', link: 'https://stability.ai/', category: 'AI Image Generators', status: 'Free', tags: ['AI', 'Image', 'Open Source'], logo: 'https://logo.clearbit.com/stability.ai' },
    { name: 'RunwayML', description: 'AI-powered video generation and editing.', link: 'https://runwayml.com/', category: 'AI Video Generators', status: 'Freemium', tags: ['AI', 'Video'], logo: 'https://logo.clearbit.com/runwayml.com' },
    { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', link: 'https://www.copy.ai/', category: 'AI Writing Tools', status: 'Freemium', tags: ['AI', 'Writing', 'Marketing'], logo: 'https://logo.clearbit.com/copy.ai' },
    { name: 'Jasper', description: 'AI Content Platform for businesses.', link: 'https://www.jasper.ai/', category: 'AI Writing Tools', status: 'Premium', tags: ['AI', 'Writing', 'Content'], logo: 'https://logo.clearbit.com/jasper.ai' },
    { name: 'ElevenLabs', description: 'AI voice synthesis and cloning.', link: 'https://elevenlabs.io/', category: 'AI Voice Generators', status: 'Freemium', tags: ['AI', 'Voice', 'TTS'], logo: 'https://logo.clearbit.com/elevenlabs.io' },
    { name: 'Vercel', description: 'Platform for frontend developers.', link: 'https://vercel.com/', category: 'Web Hosting', status: 'Freemium', tags: ['Hosting', 'Serverless'], logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/vercel-icon.png' },
    { name: 'Netlify', description: 'Deploy modern web projects.', link: 'https://www.netlify.com/', category: 'Web Hosting', status: 'Freemium', tags: ['Hosting', 'JAMstack'], logo: 'https://logo.clearbit.com/netlify.com' },
    { name: 'Unity', description: 'Real-time 3D development platform.', link: 'https://unity.com/', category: 'Game Development', status: 'Freemium', tags: ['Game Engine', '3D'], logo: 'https://logo.clearbit.com/unity.com' },
    { name: 'Unreal Engine', description: 'Advanced real-time 3D creation tool.', link: 'https://www.unrealengine.com/', category: 'Game Development', status: 'Free', tags: ['Game Engine', '3D', 'AAA'], logo: 'https://logo.clearbit.com/unrealengine.com' },
];

export const ebookCategories: EbookCategory[] = [
  { name: 'Programming', Icon: Code },
  { name: 'Cybersecurity', Icon: Shield },
  { name: 'AI/ML', Icon: BrainCircuit },
  { name: 'UI/UX Design', Icon: Palette },
  { name: 'DevOps', Icon: GitBranch },
  { name: 'Cloud Computing', Icon: Cloud },
];

export const ebooks: Ebook[] = [
  {
    title: 'Clean Code',
    coverImage: 'https://placehold.co/300x400/0ea5e9/ffffff?text=Clean+Code',
    rating: 4.7,
    price: 35.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 464,
    category: 'Programming',
  },
  {
    title: 'The Pragmatic Programmer',
    coverImage: 'https://placehold.co/300x400/8b5cf6/ffffff?text=Pragmatic+Programmer',
    rating: 4.8,
    price: 42.50,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 352,
    category: 'Programming',
  },
  {
    title: 'The Hacker Playbook 3',
    coverImage: 'https://placehold.co/300x400/ef4444/ffffff?text=Hacker+Playbook',
    rating: 4.6,
    price: 29.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 356,
    category: 'Cybersecurity',
  },
  {
    title: 'Designing Data-Intensive Applications',
    coverImage: 'https://placehold.co/300x400/22c55e/ffffff?text=Data-Intensive+Apps',
    rating: 4.9,
    price: 55.00,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 616,
    category: 'AI/ML',
  },
  {
    title: 'Don\'t Make Me Think, Revisited',
    coverImage: 'https://placehold.co/300x400/f97316/ffffff?text=Don\'t+Make+Me+Think',
    rating: 4.5,
    price: 25.00,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 216,
    category: 'UI/UX Design',
  },
  {
    title: 'The Phoenix Project',
    coverImage: 'https://placehold.co/300x400/64748b/ffffff?text=Phoenix+Project',
    rating: 4.7,
    price: 22.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 442,
    category: 'DevOps',
  },
  {
    title: 'Cloud Native Patterns',
    coverImage: 'https://placehold.co/300x400/3b82f6/ffffff?text=Cloud+Native',
    rating: 4.4,
    price: 49.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 408,
    category: 'Cloud Computing',
  },
  {
    title: 'Code Complete 2',
    coverImage: 'https://placehold.co/300x400/16a34a/ffffff?text=Code+Complete+2',
    rating: 4.8,
    price: 45.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 960,
    category: 'Programming',
  },
  {
    title: 'The Art of Invisibility',
    coverImage: 'https://placehold.co/300x400/4f46e5/ffffff?text=Art+of+Invisibility',
    rating: 4.5,
    price: 19.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 320,
    category: 'Cybersecurity',
  },
  {
    title: 'Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow',
    coverImage: 'https://placehold.co/300x400/ca8a04/ffffff?text=Hands-On+ML',
    rating: 4.8,
    price: 69.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 856,
    category: 'AI/ML',
  },
  {
    title: 'The Design of Everyday Things',
    coverImage: 'https://placehold.co/300x400/be185d/ffffff?text=Design+of+Everyday+Things',
    rating: 4.7,
    price: 18.00,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 368,
    category: 'UI/UX Design',
  },
  {
    title: 'Site Reliability Engineering',
    coverImage: 'https://placehold.co/300x400/0891b2/ffffff?text=SRE',
    rating: 4.6,
    price: 41.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 552,
    category: 'DevOps',
  },
  {
    title: 'AWS Certified Solutions Architect Official Study Guide',
    coverImage: 'https://placehold.co/300x400/fb923c/ffffff?text=AWS+Study+Guide',
    rating: 4.5,
    price: 38.50,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 624,
    category: 'Cloud Computing',
  },
  {
    title: 'Introduction to Algorithms',
    coverImage: 'https://placehold.co/300x400/7c3aed/ffffff?text=CLRS',
    rating: 4.7,
    price: 99.99,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 1312,
    category: 'Programming',
  },
  {
    title: 'Metasploit: The Penetration Tester\'s Guide',
    coverImage: 'https://placehold.co/300x400/b91c1c/ffffff?text=Metasploit',
    rating: 4.4,
    price: 34.95,
    buyLink: '#',
    summaryLink: 'https://www.youtube.com',
    pages: 328,
    category: 'Cybersecurity',
  },
];


export const learningCategories: LearningCategory[] = [
  { name: 'Free with Certificate', Icon: Award },
  { name: 'Free without Certificate', Icon: BookOpenCheck },
  { name: 'Paid with Certificate', Icon: CreditCard },
  { name: 'Open Courseware', Icon: DownloadCloud },
];

export const learningPlatforms: LearningPlatform[] = [
    { name: 'freeCodeCamp', description: 'Learn to code for free. Build projects. Earn certifications.', link: 'https://www.freecodecamp.org/', logo: 'https://logo.clearbit.com/freecodecamp.org', category: 'Free with Certificate', tags: ['Web Dev', 'Data Science', 'Python'] },
    { name: 'Google Digital Garage', description: 'Free online courses from Google to develop new skills.', link: 'https://learndigital.withgoogle.com/digitalgarage/', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Google_Digital_Garage_logo.svg/1200px-Google_Digital_Garage_logo.svg.png', category: 'Free with Certificate', tags: ['Digital Marketing', 'Career', 'Data'] },
    { name: 'The Odin Project', description: 'A free open source coding curriculum that can be taken online.', link: 'https://www.theodinproject.com/', logo: 'https://logo.clearbit.com/theodinproject.com', category: 'Free with Certificate', tags: ['Full Stack', 'Ruby on Rails', 'JavaScript'] },
    { name: 'Khan Academy', description: 'Free online courses, lessons & practice.', link: 'https://www.khanacademy.org/', logo: 'https://logo.clearbit.com/khanacademy.org', category: 'Free without Certificate', tags: ['Math', 'Science', 'CS'] },
    { name: 'YouTube', description: 'Vast collection of free tutorials on virtually any topic.', link: 'https://www.youtube.com/', logo: 'https://logo.clearbit.com/youtube.com', category: 'Free without Certificate', tags: ['Tutorials', 'Lectures', 'All Topics'] },
    { name: 'Udemy', description: 'Online courses on a wide variety of topics.', link: 'https://www.udemy.com/', logo: 'https://logo.clearbit.com/udemy.com', category: 'Paid with Certificate', tags: ['Programming', 'Design', 'Business'] },
    { name: 'Coursera', description: 'Learn online and earn valuable credentials from top universities.', link: 'https://www.coursera.org/', logo: 'https://logo.clearbit.com/coursera.org', category: 'Paid with Certificate', tags: ['University', 'Degrees', 'Data Science'] },
    { name: 'Pluralsight', description: 'Technology workforce development company that helps solve problems.', link: 'https://www.pluralsight.com/', logo: 'https://logo.clearbit.com/pluralsight.com', category: 'Paid with Certificate', tags: ['IT Ops', 'Cybersecurity', 'Software Dev'] },
    { name: 'Udacity', description: 'Learn the latest tech skills to prepare for a career in tech.', link: 'https://www.udacity.com/', logo: 'https://logo.clearbit.com/udacity.com', category: 'Paid with Certificate', tags: ['AI', 'Cloud', 'Robotics'] },
    { name: 'edX', description: 'Access 2000 free online courses from 140 leading institutions worldwide.', link: 'https://www.edx.org/', logo: 'https://logo.clearbit.com/edx.org', category: 'Paid with Certificate', tags: ['CS', 'Engineering', 'Humanities'] },
    { name: 'MIT OpenCourseWare', description: 'A web-based publication of virtually all MIT course content.', link: 'https://ocw.mit.edu/', logo: 'https://ocw.mit.edu/images/logo-ocw-v2.png', category: 'Open Courseware', tags: ['MIT', 'Engineering', 'Science'] },
    { name: 'Stanford Online', description: 'A collection of free courses and educational resources from Stanford.', link: 'https://online.stanford.edu/free-courses', logo: 'https://logo.clearbit.com/stanford.edu', category: 'Open Courseware', tags: ['Stanford', 'CS', 'Health'] },
];