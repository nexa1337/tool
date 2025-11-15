import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Ebook, EbookCategory } from '../types.ts';
import { EbookCard } from './EbookCard.tsx';
import { Pagination } from './Pagination.tsx';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EbooksDatabaseProps {
  ebooks: Ebook[];
  categories: EbookCategory[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ITEMS_PER_PAGE = 8;

export const EbooksDatabase: React.FC<EbooksDatabaseProps> = ({ ebooks, categories, selectedCategory, setSelectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const checkScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    
    const timeoutId = setTimeout(checkScrollButtons, 100);
    window.addEventListener('resize', checkScrollButtons);
    el.addEventListener('scroll', checkScrollButtons);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkScrollButtons);
      el.removeEventListener('scroll', checkScrollButtons);
    };
  }, [categories]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredEbooks = useMemo(() => {
    return ebooks.filter(ebook => {
      const matchesCategory = selectedCategory === 'All' || ebook.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
                            ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ebook.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [ebooks, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredEbooks.length / ITEMS_PER_PAGE);
  const paginatedEbooks = filteredEbooks.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">Ebooks Library</h1>
      <p className="text-center text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
        Browse our curated collection of essential tech ebooks. Filter by category or search to find your next read.
      </p>

      <div className="sticky top-28 bg-sky-50/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 z-40 mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for ebooks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white dark:bg-slate-800"
          />
        </div>
        
        <div className="relative">
          <button onClick={() => handleScroll('left')} className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white dark:bg-slate-700 rounded-full shadow-md border dark:border-slate-600 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed`} disabled={!showPrev}>
            <ChevronLeft size={20} />
          </button>
          <div ref={scrollContainerRef} className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600'}`}
              >
              All
              </button>
              {categories.map(category => (
              <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${selectedCategory === category.name ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600'}`}
              >
                  <category.Icon size={16} />
                  {category.name}
              </button>
              ))}
          </div>
          <button onClick={() => handleScroll('right')} className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white dark:bg-slate-700 rounded-full shadow-md border dark:border-slate-600 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed`} disabled={!showNext}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {paginatedEbooks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedEbooks.map((ebook, index) => (
              <EbookCard key={`${ebook.title}-${index}`} ebook={ebook} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="text-center py-16">
            <X size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">No ebooks found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};