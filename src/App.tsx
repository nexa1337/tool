/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { roadmaps, RoadmapCategory } from './data/roadmaps';
import { databaseCategories } from './data/database';
import { bookCategories } from './data/books';
import RoadmapGraph from './components/RoadmapGraph';
import DatabaseView from './components/DatabaseView';
import BookView from './components/BookView';
import AboutView from './components/AboutView';
import { 
  ShieldCheck, 
  Server, 
  Code2, 
  BrainCircuit, 
  Cpu,
  Link,
  Menu,
  X,
  Gamepad2,
  Smartphone,
  CloudCog,
  Languages,
  Layers,
  Globe,
  Database,
  PenTool,
  Briefcase,
  CheckCircle,
  Box,
  Bot,
  Palette,
  Users,
  Share2,
  BookOpen,
  Terminal,
  Braces,
  Video,
  Blocks,
  LayoutTemplate,
  Image as ImageIcon,
  Sparkles,
  Type,
  MonitorSmartphone,
  Building,
  Receipt,
  Mic,
  Zap,
  MessageSquareText,
  MessageSquare,
  Wand2,
  Presentation,
  PenBox,
  Network,
  Compass,
  Archive,
  Cloud,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Target,
  MessageCircle,
  FlaskConical,
  Moon,
  Library,
  Shield,
  Layout,
  Infinity as InfinityIcon,
  Sun,
  ChevronDown,
  ChevronRight,
  Map,
  Info,
  ExternalLink,
  Eye
} from 'lucide-react';
import { FaWolfPackBattalion } from 'react-icons/fa';
import { useEffect } from 'react';

type ViewState = { type: 'roadmap'; id: RoadmapCategory } | { type: 'database'; id: string } | { type: 'book'; id: string } | { type: 'about' };

const navItems: { id: RoadmapCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'cybersecurity', label: 'Cybersecurity', icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 'it', label: 'Information Tech', icon: <Server className="w-5 h-5" /> },
  { id: 'cs', label: 'Computer Science', icon: <Code2 className="w-5 h-5" /> },
  { id: 'ai', label: 'Artificial Intelligence', icon: <BrainCircuit className="w-5 h-5" /> },
  { id: 'iot', label: 'Internet of Things', icon: <Cpu className="w-5 h-5" /> },
  { id: 'blockchain', label: 'Blockchain', icon: <Link className="w-5 h-5" /> },
  { id: 'game', label: 'Game Development', icon: <Gamepad2 className="w-5 h-5" /> },
  { id: 'mobile', label: 'Mobile Development', icon: <Smartphone className="w-5 h-5" /> },
  { id: 'devops', label: 'DevOps & Cloud', icon: <CloudCog className="w-5 h-5" /> },
  { id: 'languages', label: 'Languages / Platforms', icon: <Languages className="w-5 h-5" /> },
  { id: 'frameworks', label: 'Frameworks', icon: <Layers className="w-5 h-5" /> },
  { id: 'webdev', label: 'Web Development', icon: <Globe className="w-5 h-5" /> },
  { id: 'databases', label: 'Databases', icon: <Database className="w-5 h-5" /> },
  { id: 'design', label: 'Design', icon: <PenTool className="w-5 h-5" /> },
  { id: 'management', label: 'Management', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'best-practices', label: 'Best Practices', icon: <CheckCircle className="w-5 h-5" /> },
  { id: '3d-design', label: '3D Design & Graphics', icon: <Box className="w-5 h-5" /> },
];

const databaseNavItems: { id: string; label: string; icon: React.ReactNode }[] = [
  { id: 'accounts', label: 'Accounts', icon: <Users className="w-5 h-5" /> },
  { id: 'social-media', label: 'Social Media', icon: <Share2 className="w-5 h-5" /> },
  { id: 'learn-english', label: 'Learn English', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'ai-ide-core', label: 'AI IDE Core', icon: <Terminal className="w-5 h-5" /> },
  { id: 'development', label: 'Development', icon: <Braces className="w-5 h-5" /> },
  { id: 'graphic-design', label: 'Graphic Design', icon: <PenTool className="w-5 h-5" /> },
  { id: 'video-editing', label: 'Video Editing', icon: <Video className="w-5 h-5" /> },
  { id: 'no-code-app-builder', label: 'No-CodeApp Builder', icon: <Blocks className="w-5 h-5" /> },
  { id: 'builder-site-ai', label: 'Builder Site AI', icon: <LayoutTemplate className="w-5 h-5" /> },
  { id: '3d-design-db', label: '3D Design', icon: <Box className="w-5 h-5" /> },
  { id: 'illustrations', label: 'Illustrations', icon: <ImageIcon className="w-5 h-5" /> },
  { id: 'ai-image-generate', label: 'AI Image Generate', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'copywriting', label: 'Copywriting', icon: <Type className="w-5 h-5" /> },
  { id: 'mockups', label: 'Mockups', icon: <MonitorSmartphone className="w-5 h-5" /> },
  { id: 'bim-objects', label: 'BIM objects', icon: <Building className="w-5 h-5" /> },
  { id: 'invoice', label: 'Invoice', icon: <Receipt className="w-5 h-5" /> },
  { id: 'ai-voice-generator', label: 'AI Voice Generator', icon: <Mic className="w-5 h-5" /> },
  { id: 'ai-business-plan', label: 'AI Business Plan', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'ai-automation-tools', label: 'AI Automation Tools', icon: <Zap className="w-5 h-5" /> },
  { id: 'ai-manychat-bot-tools', label: 'AI ManyChat Bot Tools', icon: <MessageSquareText className="w-5 h-5" /> },
  { id: 'ai-chat-gpt-tools', label: 'AI Chat-Gpt Tools', icon: <MessageSquare className="w-5 h-5" /> },
  { id: 'ai-art-generator-tools', label: 'AI Art Generator Tools', icon: <Wand2 className="w-5 h-5" /> },
  { id: 'ai-beautiful-presentations-tools', label: 'AI Beautiful Presentations Tools', icon: <Presentation className="w-5 h-5" /> },
  { id: 'ai-content-creation-tools', label: 'AI Content Creation Tools', icon: <PenBox className="w-5 h-5" /> },
  { id: 'workflow-visualization-tools', label: 'Workflow Visualization Tools', icon: <Network className="w-5 h-5" /> },
  { id: 'explorer', label: 'Explorer', icon: <Compass className="w-5 h-5" /> },
  { id: 'others', label: 'Others', icon: <Archive className="w-5 h-5" /> },
  { id: 'free-links', label: 'Free Links', icon: <Link className="w-5 h-5" /> },
  { id: 'games', label: 'Ps4/Ps3/Pc Games', icon: <Gamepad2 className="w-5 h-5" /> },
  { id: 'ai-agent-hosting', label: 'AI Agent Hosting', icon: <Cloud className="w-5 h-5" /> },
];

const learningPlatformsNavItems: { id: string; label: string; icon: React.ReactNode }[] = [
  { id: 'learning-platforms', label: 'Learning Platforms', icon: <GraduationCap className="w-5 h-5" /> },
];

const bookNavItems: { id: string; label: string; icon: React.ReactNode }[] = [
  { id: 'personal-development', label: 'Personal Development', icon: <TrendingUp className="w-5 h-5" /> },
  { id: 'business-finance', label: 'Business & Finance', icon: <DollarSign className="w-5 h-5" /> },
  { id: 'sales-mastery', label: 'Sales Mastery', icon: <Target className="w-5 h-5" /> },
  { id: 'communication-skills', label: 'Communication Skills', icon: <MessageCircle className="w-5 h-5" /> },
  { id: 'science-knowledge', label: 'Science & Knowledge', icon: <FlaskConical className="w-5 h-5" /> },
  { id: 'islamic-studies', label: 'Islamic Studies', icon: <Moon className="w-5 h-5" /> },
  { id: 'other-fields', label: 'Other Fields', icon: <Library className="w-5 h-5" /> },
  { id: 'programming', label: 'Programming', icon: <Code2 className="w-5 h-5" /> },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
  { id: 'ai-ml', label: 'AI/ML', icon: <BrainCircuit className="w-5 h-5" /> },
  { id: 'ui-ux-design', label: 'UI/UX Design', icon: <Layout className="w-5 h-5" /> },
  { id: 'devops', label: 'DevOps', icon: <InfinityIcon className="w-5 h-5" /> },
  { id: 'cloud-computing', label: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
];

export default function App() {
  const [activeView, setActiveView] = useState<ViewState>({ type: 'roadmap', id: 'cybersecurity' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });
  const [openSections, setOpenSections] = useState({
    roadmaps: true,
    database: false,
    learning: false,
    books: false,
    howToUse: false
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Generate fake clicks between 50k and 250k
  const generateFakeClicks = () => (Math.floor(Math.random() * (250 - 50 + 1) + 50) + (Math.random() * 0.9)).toFixed(1) + 'k';
  const [fakeClicks] = useState({
    main: generateFakeClicks(),
    portfolio: generateFakeClicks(),
    tool: generateFakeClicks(),
    store: generateFakeClicks()
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  const openOnlySection = (section: keyof typeof openSections) => {
    setOpenSections({
      roadmaps: section === 'roadmaps',
      database: section === 'database',
      learning: section === 'learning',
      books: section === 'books',
      howToUse: section === 'howToUse'
    });
    setIsSidebarOpen(true);
  };

  return (
    <div className="flex h-[100dvh] w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl transform transition-all">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                {/* @ts-ignore */}
              <FaWolfPackBattalion className="w-6 h-6 text-blue-500" />
                N E X A 1337 Links
              </h2>
              <button onClick={() => setIsPopupOpen(false)} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <a href="https://nexa1337.github.io/nexa1337" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                  <span className="font-medium text-sm">N E X A 1337</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 flex items-center gap-1"><Eye className="w-3 h-3"/> {fakeClicks.main}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </div>
              </a>
              
              <a href="https://nexa1337.github.io/Owner" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  <span className="font-medium text-sm">Portfolio</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 flex items-center gap-1"><Eye className="w-3 h-3"/> {fakeClicks.portfolio}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </div>
              </a>

              <a href="https://nexa1337.github.io/tool" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                  <span className="font-medium text-sm">Tool</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 flex items-center gap-1"><Eye className="w-3 h-3"/> {fakeClicks.tool}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </div>
              </a>

              <a href="https://nexa1337.github.io/digitalstore" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <Box className="w-5 h-5 text-zinc-400 group-hover:text-purple-500 transition-colors" />
                  <span className="font-medium text-sm">Digital Store</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 flex items-center gap-1"><Eye className="w-3 h-3"/> {fakeClicks.store}</span>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="text-zinc-900 dark:text-white relative">
              {/* @ts-ignore */}
              <FaWolfPackBattalion className="w-8 h-8 animate-glitch" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">N E X A 1337</h1>
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest animate-flash">TOOL</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors hidden lg:block"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-6 pb-24 lg:pb-6">
          <div className="space-y-1">
            <button
              onClick={() => {
                setActiveView({ type: 'about' });
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-4 ${
                activeView.type === 'about'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <div className={`${activeView.type === 'about' ? 'text-blue-500' : ''}`}>
                <Info className="w-5 h-5" />
              </div>
              About Us
            </button>
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => toggleSection('roadmaps')}
              className="w-full flex items-center justify-between px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              <span>Roadmaps</span>
              {openSections.roadmaps ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openSections.roadmaps && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView({ type: 'roadmap', id: item.id });
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView.type === 'roadmap' && activeView.id === item.id
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <div className={`${activeView.type === 'roadmap' && activeView.id === item.id ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                  {item.icon}
                </div>
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => toggleSection('database')}
              className="w-full flex items-center justify-between px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              <span>Database</span>
              {openSections.database ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openSections.database && databaseNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView({ type: 'database', id: item.id });
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView.type === 'database' && activeView.id === item.id
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <div className={`${activeView.type === 'database' && activeView.id === item.id ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>
                  {item.icon}
                </div>
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => toggleSection('learning')}
              className="w-full flex items-center justify-between px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              <span>Learning Platforms</span>
              {openSections.learning ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openSections.learning && learningPlatformsNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView({ type: 'database', id: item.id });
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView.type === 'database' && activeView.id === item.id
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <div className={`${activeView.type === 'database' && activeView.id === item.id ? 'text-amber-600 dark:text-amber-400' : ''}`}>
                  {item.icon}
                </div>
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            <button 
              onClick={() => toggleSection('books')}
              className="w-full flex items-center justify-between px-3 mb-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
            >
              <span>Books</span>
              {openSections.books ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            {openSections.books && bookNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView({ type: 'book', id: item.id });
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeView.type === 'book' && activeView.id === item.id
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <div className={`${activeView.type === 'book' && activeView.id === item.id ? 'text-indigo-600 dark:text-indigo-400' : ''}`}>
                  {item.icon}
                </div>
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/50 overflow-hidden">
            <button 
              onClick={() => toggleSection('howToUse')}
              className="w-full p-4 flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-500" />
                How to use
              </span>
              {openSections.howToUse ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
            </button>
            {openSections.howToUse && (
              <div className="px-4 pb-4 pt-2">
                <ul className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed space-y-2 list-disc pl-4">
                  <li><strong>Roadmaps:</strong> Scroll to zoom, drag to pan. Click nodes to explore detailed learning paths.</li>
                  <li><strong>Database:</strong> Browse categorized resources, tools, and links for various fields.</li>
                  <li><strong>Learning & Books:</strong> Access curated educational content and reading materials.</li>
                  <li><strong>About Us:</strong> View our company stats, smart charts, and strategic roadmap.</li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="text-center text-[10px] text-zinc-500 dark:text-zinc-400 mt-2">
            &copy; 2026 <button onClick={() => setIsPopupOpen(true)} className="hover:text-blue-500 dark:hover:text-blue-400 font-semibold transition-colors">N E X A 1337</button>. All rights reserved.
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-30">
          <div className="flex items-center gap-2">
            <div className="text-zinc-900 dark:text-white relative">
              {/* @ts-ignore */}
              <FaWolfPackBattalion className="w-6 h-6 animate-glitch" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight leading-tight">N E X A 1337</span>
              <span className="text-[8px] text-zinc-500 font-mono uppercase tracking-widest animate-flash leading-tight">TOOL</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={toggleSidebar}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-0 lg:p-6 overflow-hidden pb-20 lg:pb-6">
          {activeView.type === 'about' ? (
            <AboutView />
          ) : activeView.type === 'roadmap' ? (
            <RoadmapGraph roadmap={roadmaps[activeView.id as RoadmapCategory]} />
          ) : activeView.type === 'book' ? (
            <BookView category={bookCategories[activeView.id]} />
          ) : (
            <DatabaseView data={databaseCategories[activeView.id]} />
          )}
        </div>

        {/* Mobile Bottom Navbar */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 z-40 flex items-center justify-around p-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <button 
            onClick={() => openOnlySection('roadmaps')} 
            className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Map className="w-5 h-5" />
            <span className="text-[10px] font-medium">Roadmaps</span>
          </button>
          <button 
            onClick={() => openOnlySection('database')} 
            className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Database className="w-5 h-5" />
            <span className="text-[10px] font-medium">Database</span>
          </button>
          
          <div className="relative -top-6">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 w-14 h-14 rounded-full shadow-lg border-4 border-zinc-100 dark:border-zinc-950 transition-transform hover:scale-105 active:scale-95"
            >
              {/* @ts-ignore */}
              <FaWolfPackBattalion className="w-7 h-7 animate-glitch" />
            </button>
          </div>

          <button 
            onClick={() => openOnlySection('learning')} 
            className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-[10px] font-medium">Learning</span>
          </button>
          <button 
            onClick={() => openOnlySection('books')} 
            className="flex flex-col items-center gap-1 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Library className="w-5 h-5" />
            <span className="text-[10px] font-medium">Books</span>
          </button>
        </nav>
      </main>
    </div>
  );
}
