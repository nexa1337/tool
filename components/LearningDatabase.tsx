import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { LearningPlatform, LearningCategory } from '../types.ts';
import { LearningPlatformCard } from './LearningPlatformCard.tsx';
import { Pagination } from './Pagination.tsx';
import { Search, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface LearningDatabaseProps {
  platforms: LearningPlatform[];
  categories: LearningCategory[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ITEMS_PER_PAGE = 12;

const CategoryCarousel: React.FC<{
  category: LearningCategory;
  platforms: LearningPlatform[];
  onViewAll: (category: string) => void;
}> = ({ category, platforms, onViewAll }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const checkScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const buffer = 5;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowPrev(scrollLeft > buffer);
      setShowNext(scrollLeft < scrollWidth - clientWidth - buffer);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    
    const timer = setTimeout(checkScrollButtons, 100);
    
    el.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [platforms]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.9;
      el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <category.Icon className="w-7 h-7 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{category.name}</h2>
        </div>
        <button
          onClick={() => onViewAll(category.name)}
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          aria-label={`View all ${platforms.length} platforms in ${category.name}`}
        >
          View All ({platforms.length})
        </button>
      </div>
      <div className="relative">
         {showPrev && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-full shadow-lg border dark:border-slate-600 transition-opacity hover:bg-white dark:hover:bg-slate-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}
        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {platforms.map((platform, index) => (
            <div key={`${platform.name}-${index}`} className="w-80 flex-shrink-0">
              <LearningPlatformCard platform={platform} />
            </div>
          ))}
        </div>
         {showNext && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-full shadow-lg border dark:border-slate-600 transition-opacity hover:bg-white dark:hover:bg-slate-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
      </div>
    </section>
  );
};

const PlatformGrid: React.FC<{
    platformsToShow: LearningPlatform[];
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    title: string;
    children?: React.ReactNode;
}> = ({ platformsToShow, totalPages, currentPage, onPageChange, title, children }) => (
    <>
      <div className="mb-6">
        {children}
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
      </div>
      {platformsToShow.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {platformsToShow.map((platform, index) => (
              <LearningPlatformCard key={`${platform.name}-${index}`} platform={platform} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <div className="text-center py-16">
            <X size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">No platforms found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </>
);

export const LearningDatabase: React.FC<LearningDatabaseProps> = ({ platforms, categories, selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const filteredPlatforms = useMemo(() => {
    let result = platforms;
    if (searchTerm) {
      return platforms.filter(platform => 
        platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        platform.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } 
    if (selectedCategory !== 'All') {
      return platforms.filter(platform => platform.category === selectedCategory);
    }
    return result; // Should not be reached in grid views, but as a fallback
  }, [platforms, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPlatforms.length / ITEMS_PER_PAGE);
  const paginatedPlatforms = filteredPlatforms.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const isGridView = searchTerm || selectedCategory !== 'All';

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">Learning Platforms</h1>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
        Discover the best places to learn new tech skills. Browse by category or search to find platforms that offer certificates, free courses, and more.
      </p>

      <div className="sticky top-28 bg-sky-50/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 z-40 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search all platforms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white dark:bg-slate-800"
          />
        </div>
      </div>
      
      { isGridView ? (
        searchTerm ? (
            <PlatformGrid
                platformsToShow={paginatedPlatforms}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                title={`Search results for "${searchTerm}"`}
            />
        ) : (
            <PlatformGrid
                platformsToShow={paginatedPlatforms}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                title={selectedCategory}
            >
              <button 
                onClick={() => setSelectedCategory('All')} 
                className="flex items-center gap-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowLeft size={16} />
                Back to All Categories
              </button>
            </PlatformGrid>
        )
      ) : (
        // Category Carousels View
        <div>
          {categories.map(category => {
            const categoryPlatforms = platforms.filter(p => p.category === category.name);
            if (categoryPlatforms.length === 0) return null;
            return (
              <CategoryCarousel 
                key={category.name}
                category={category}
                platforms={categoryPlatforms}
                onViewAll={setSelectedCategory}
              />
            )
          })}
        </div>
      )}
    </div>
  );
};