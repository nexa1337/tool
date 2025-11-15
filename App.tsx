
import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { MindMap } from './components/MindMap.tsx';
import { ToolsDatabase } from './components/ToolsDatabase.tsx';
import { generalRoadmapData, cybersecurityRoadmapData, tools, categories, domainColors, ebooks, ebookCategories, learningPlatforms, learningCategories } from './constants.ts';
import { Legend } from './components/Legend.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { Footer } from './components/Footer.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { ChevronDown } from 'lucide-react';
import { EbooksDatabase } from './components/EbooksDatabase.tsx';
import { LearningDatabase } from './components/LearningDatabase.tsx';

export type View = 'roadmap' | 'tools' | 'ebooks' | 'learning';
type Roadmap = 'general' | 'cybersecurity';

const roadmapOptions = {
  general: { label: 'General Tech Roadmap', data: generalRoadmapData },
  cybersecurity: { label: 'Cybersecurity Roadmap', data: cybersecurityRoadmapData },
};

const AppContent: React.FC = () => {
  const [view, setView] = useState<View>('roadmap');
  const [activeRoadmap, setActiveRoadmap] = useState<Roadmap>('cybersecurity');
  const [selectedToolCategory, setSelectedToolCategory] = useState<string>('All');
  const [selectedEbookCategory, setSelectedEbookCategory] = useState<string>('All');
  const [selectedLearningCategory, setSelectedLearningCategory] = useState<string>('All');


  return (
    <div className="min-h-screen bg-sky-50 dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header 
        activeView={view} 
        setActiveView={setView} 
        setSelectedToolCategory={setSelectedToolCategory}
        setSelectedEbookCategory={setSelectedEbookCategory}
        setSelectedLearningCategory={setSelectedLearningCategory}
      />
      <main className="p-4 md:p-8 pt-32 md:pt-36 pb-24 md:pb-8">
        {view === 'roadmap' && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">Tech Career Roadmap</h1>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <select 
                  value={activeRoadmap} 
                  onChange={(e) => setActiveRoadmap(e.target.value as Roadmap)}
                  className="appearance-none bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg font-semibold text-slate-700 dark:text-slate-200 py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="general">General Tech</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-6 max-w-3xl mx-auto">
              An interactive guide to navigate through various tech careers. Click on nodes to expand and collapse paths.
            </p>
            <Legend domainColors={domainColors} />
            <div className="w-full h-[75vh] md:h-[80vh] bg-w hite dark:bg-slate-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
               <MindMap data={roadmapOptions[activeRoadmap].data} key={activeRoadmap} />
            </div>
          </>
        )}
        {view === 'tools' && (
          <ToolsDatabase 
            tools={tools} 
            categories={categories}
            selectedCategory={selectedToolCategory}
            setSelectedCategory={setSelectedToolCategory}
          />
        )}
        {view === 'ebooks' && (
          <EbooksDatabase
            ebooks={ebooks}
            categories={ebookCategories}
            selectedCategory={selectedEbookCategory}
            setSelectedCategory={setSelectedEbookCategory}
          />
        )}
         {view === 'learning' && (
          <LearningDatabase
            platforms={learningPlatforms}
            categories={learningCategories}
            selectedCategory={selectedLearningCategory}
            setSelectedCategory={setSelectedLearningCategory}
          />
        )}
      </main>
      <BottomNav activeView={view} setActiveView={setView} />
      <Footer setActiveView={setView} />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
)


export default App;