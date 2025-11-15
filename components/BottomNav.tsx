
import React from 'react';
import type { View } from '../App.tsx';
import { BookOpen, Wrench, BookCopy, GraduationCap } from 'lucide-react';

interface BottomNavProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  const commonButtonClasses = 'flex-1 flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors duration-300';
  const activeButtonClasses = 'text-blue-600';
  const inactiveButtonClasses = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-slate-700 z-50 shadow-t-lg">
      <div className="flex justify-around items-center h-16">
        <button
          onClick={() => setActiveView('roadmap')}
          className={`${commonButtonClasses} ${activeView === 'roadmap' ? activeButtonClasses : inactiveButtonClasses}`}
        >
          <BookOpen size={24} />
          <span className="text-xs font-semibold">Roadmap</span>
        </button>
        <button
          onClick={() => setActiveView('tools')}
          className={`${commonButtonClasses} ${activeView === 'tools' ? activeButtonClasses : inactiveButtonClasses}`}
        >
          <Wrench size={24} />
          <span className="text-xs font-semibold">Tools</span>
        </button>
         <button
          onClick={() => setActiveView('ebooks')}
          className={`${commonButtonClasses} ${activeView === 'ebooks' ? activeButtonClasses : inactiveButtonClasses}`}
        >
          <BookCopy size={24} />
          <span className="text-xs font-semibold">Ebooks</span>
        </button>
        <button
          onClick={() => setActiveView('learning')}
          className={`${commonButtonClasses} ${activeView === 'learning' ? activeButtonClasses : inactiveButtonClasses}`}
        >
          <GraduationCap size={24} />
          <span className="text-xs font-semibold">Learning</span>
        </button>
      </div>
    </nav>
  );
};