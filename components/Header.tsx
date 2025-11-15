import React, { useState, useEffect } from 'react';
import type { View } from '../App.tsx';
import { BookOpen, Wrench, Github, Sun, Moon, ChevronDown, Menu, X, BookCopy, Database, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { headerNavLinks, categories, ebookCategories, learningCategories } from '../constants.ts';
import { Modal } from './Modal.tsx';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
  setSelectedToolCategory: (category: string) => void;
  setSelectedEbookCategory: (category: string) => void;
  setSelectedLearningCategory: (category: string) => void;
}

interface NavItem {
  name: string;
  view?: View;
  isModal?: boolean;
  isMegaMenu?: boolean;
  children?: NavItem[];
  // For mobile category links
  categoryType?: 'tools' | 'ebooks' | 'learning';
}

const MobileNavItem: React.FC<{ 
  item: NavItem; 
  onAboutClick: () => void; 
  onCategoryClick: (view: View, category: string) => void;
  onViewClick: (view: View) => void;
  closeMenu: () => void; 
}> = ({ item, onAboutClick, onCategoryClick, onViewClick, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (item.children) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (item.isModal) {
      e.preventDefault();
      onAboutClick();
    } else if (item.view) {
      onViewClick(item.view);
    } else if (item.categoryType) {
        const view = item.categoryType;
        onCategoryClick(view, item.name);
    } else {
      closeMenu();
    }
  };

  return (
    <li className="border-b border-gray-200 dark:border-slate-700">
      <a
        href="#"
        onClick={handleClick}
        className="flex items-center justify-between p-4 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
      >
        <span>{item.name}</span>
        {item.children && <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </a>
      {isOpen && item.children && (
        <ul className="pl-4 bg-gray-50 dark:bg-slate-800/50">
          {item.children.map(child => (
            <MobileNavItem 
              key={child.name} 
              item={child} 
              onAboutClick={onAboutClick} 
              onCategoryClick={onCategoryClick}
              onViewClick={onViewClick}
              closeMenu={closeMenu} 
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView, setSelectedToolCategory, setSelectedEbookCategory, setSelectedLearningCategory }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(178);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const visitorTimer = setInterval(() => {
        setVisitorCount(count => {
            const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
            const newCount = count + change;
            return newCount > 50 ? newCount : 50;
        });
    }, 3000);

    return () => {
        clearInterval(timer);
        clearInterval(visitorTimer);
    };
  }, []);

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = currentTime.toLocaleTimeString();

  const commonButtonClasses = 'px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2';
  const activeButtonClasses = 'bg-blue-600 text-white shadow-md';
  const inactiveButtonClasses = 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600';
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleAboutClick = () => {
    closeMobileMenu();
    setIsAboutModalOpen(true);
  }
  
  const handleCategoryClick = (view: View, category: string) => {
    if (view === 'tools') {
      setSelectedToolCategory(category);
    } else if (view === 'ebooks') {
      setSelectedEbookCategory(category);
    } else if (view === 'learning') {
      setSelectedLearningCategory(category);
    }
    setActiveView(view);
  };
  
  const handleMobileViewClick = (view: View) => {
    setActiveView(view);
    closeMobileMenu();
  };

  const mobileNavItems: NavItem[] = [
      { name: 'Mindmap', view: 'roadmap' },
      { name: 'Tools', view: 'tools' },
      { name: 'Ebooks', view: 'ebooks' },
      { name: 'Learning', view: 'learning'},
      {
        name: 'Database',
        children: [
          {
            name: 'Tool Categories',
            children: categories.map(c => ({ name: c.name, categoryType: 'tools' })),
          },
          {
            name: 'Ebook Categories',
            children: ebookCategories.map(c => ({ name: c.name, categoryType: 'ebooks' })),
          },
          {
            name: 'Learning Platforms',
            children: learningCategories.map(c => ({ name: c.name, categoryType: 'learning' })),
          }
        ]
      },
      { name: 'About', isModal: true },
  ];

  const getIconForView = (view: View) => {
    switch (view) {
      case 'roadmap': return <BookOpen size={18} />;
      case 'tools': return <Wrench size={18} />;
      case 'ebooks': return <BookCopy size={18} />;
      case 'learning': return <GraduationCap size={18} />;
      default: return null;
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-8 bg-slate-100 dark:bg-slate-800 z-[60] flex items-center justify-between px-4 sm:px-6 lg:px-8 text-xs text-slate-600 dark:text-slate-400 border-b border-gray-200 dark:border-slate-700">
        <div className="font-medium hidden sm:block">{formattedDate} - {formattedTime}</div>
        <div className="font-medium sm:hidden">{currentTime.toLocaleDateString()}</div>
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span>{visitorCount} Visitors Online</span>
        </div>
      </div>
      <header className="fixed top-8 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-slate-800 dark:text-white">N E X A</span>
                <span className="text-blue-600"> 1337</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-1 bg-gray-200 dark:bg-slate-800 p-1 rounded-xl">
              {headerNavLinks.map(link => {
                if (link.isMegaMenu) {
                  return (
                    <div className="group" key={link.name}>
                      <button className={`${commonButtonClasses} ${inactiveButtonClasses} group-hover:bg-gray-100 dark:group-hover:bg-slate-600`}>
                        <Database size={18} />
                        <span>{link.name}</span>
                        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border dark:border-slate-700 p-8 max-h-[75vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                              <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Tool Categories</h3>
                                <ul className="space-y-2">
                                  {categories.map(cat => (
                                    <li key={cat.name}>
                                      <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick('tools', cat.name); }} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                        <cat.Icon size={18} className="text-gray-400" />
                                        {cat.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Ebook Categories</h3>
                                <ul className="space-y-2">
                                  {ebookCategories.map(cat => (
                                    <li key={cat.name}>
                                      <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick('ebooks', cat.name); }} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                        <cat.Icon size={18} className="text-gray-400" />
                                        {cat.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                               <div>
                                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Learning Platforms</h3>
                                <ul className="space-y-2">
                                  {learningCategories.map(cat => (
                                    <li key={cat.name}>
                                      <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick('learning', cat.name); }} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                                        <cat.Icon size={18} className="text-gray-400" />
                                        {cat.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (link.isModal) {
                  return <button key={link.name} onClick={handleAboutClick} className={`${commonButtonClasses} ${inactiveButtonClasses}`}>{link.name}</button>;
                }
                if (link.view) {
                  return (
                    <button key={link.name} onClick={() => setActiveView(link.view as View)} className={`${commonButtonClasses} ${activeView === link.view ? activeButtonClasses : inactiveButtonClasses}`}>
                      {getIconForView(link.view)}
                      {link.name}
                    </button>
                  );
                }
                return null;
              })}
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle theme">
                {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
              </button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors" aria-label="GitHub Repository">
                <Github className="h-6 w-6" />
              </a>
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[100] bg-white dark:bg-slate-900 md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200 dark:border-slate-700 mt-8">
          <div className="flex items-center">
             <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
             <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold">
                <span className="text-slate-800 dark:text-white">N E X A</span>
                <span className="text-blue-600"> 1337</span>
              </span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
            <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
        <nav className="overflow-y-auto" style={{ height: 'calc(100% - 7rem)' }}>
          <ul className="py-4">
            {mobileNavItems.map(item => (
                <MobileNavItem 
                    key={item.name} 
                    item={item} 
                    onAboutClick={handleAboutClick} 
                    onCategoryClick={(view, cat) => {
                        handleCategoryClick(view, cat);
                        closeMobileMenu();
                    }}
                    onViewClick={handleMobileViewClick}
                    closeMenu={closeMobileMenu} 
                />
            ))}
          </ul>
        </nav>
      </div>

      {/* About Modal */}
      <Modal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)}>
         <div className="p-2">
            <h3 className="text-2xl font-bold mb-4">
               About <span className="text-slate-800 dark:text-white">N E X A</span><span className="text-blue-600"> 1337</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
               N E X A 1337 is a comprehensive tech learning roadmap and tools database. Explore interactive mind maps for various tech careers and discover a curated list of tools and resources, all in one place.
            </p>
         </div>
      </Modal>
    </>
  );
};