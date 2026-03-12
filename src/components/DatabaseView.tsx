import React, { useState, useMemo } from 'react';
import { DatabaseCategoryData, DatabaseEntry } from '../data/database';
import { ExternalLink, Globe, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface DatabaseViewProps {
  data: DatabaseCategoryData;
}

const ITEMS_PER_PAGE = 10;

export default function DatabaseView({ data }: DatabaseViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingFilter, setPricingFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when data or filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [data.id, searchQuery, pricingFilter]);

  const allEntries = useMemo(() => {
    return data.subcategories.flatMap(subcat => 
      subcat.entries.map(entry => ({ ...entry, subcategory: subcat.title }))
    );
  }, [data]);

  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      const matchesSearch = 
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPricing = pricingFilter === 'All' || entry.pricing === pricingFilter;

      return matchesSearch && matchesPricing;
    });
  }, [allEntries, searchQuery, pricingFilter]);

  const totalPages = Math.ceil(filteredEntries.length / ITEMS_PER_PAGE);
  const paginatedEntries = filteredEntries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="h-full w-full overflow-y-auto bg-white dark:bg-zinc-950 p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {data.description}
          </p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              placeholder="Search websites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg leading-5 bg-white dark:bg-zinc-800 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors text-zinc-900 dark:text-zinc-100"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap">Pricing:</span>
            <select
              value={pricingFilter}
              onChange={(e) => setPricingFilter(e.target.value)}
              className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            >
              <option value="All">All</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
              <option value="Freemium">Freemium</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <table className="w-full text-left text-sm text-zinc-600 dark:text-zinc-400">
              <thead className="bg-zinc-50 dark:bg-zinc-900/50 text-xs uppercase text-zinc-500 dark:text-zinc-500 border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Website</th>
                  <th scope="col" className="px-6 py-4 font-medium">Category</th>
                  <th scope="col" className="px-6 py-4 font-medium">Description</th>
                  <th scope="col" className="px-6 py-4 font-medium">Tags</th>
                  <th scope="col" className="px-6 py-4 font-medium w-32">Pricing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900/20">
                {paginatedEntries.length > 0 ? (
                  paginatedEntries.map((entry, eIdx) => (
                    <tr key={eIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <a 
                          href={entry.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700">
                            {entry.iconUrl ? (
                              <img 
                                src={entry.iconUrl} 
                                alt={`${entry.title} icon`} 
                                className="w-full h-full object-cover" 
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                }} 
                              />
                            ) : null}
                            <Globe className={`w-4 h-4 text-zinc-400 ${entry.iconUrl ? 'hidden' : ''}`} />
                          </div>
                          <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                            {entry.title}
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">
                          {entry.subcategory}
                        </span>
                      </td>
                      <td className="px-6 py-4 leading-relaxed">
                        {entry.description}
                      </td>
                      <td className="px-6 py-4">
                        {entry.tags && entry.tags.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {entry.tags.map((tag, idx) => (
                              <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 whitespace-nowrap">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-zinc-400 dark:text-zinc-600 text-xs italic">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          entry.pricing === 'Free' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' 
                            : entry.pricing === 'Paid'
                            ? 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'
                            : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                        }`}>
                          {entry.pricing}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                      No websites found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white dark:bg-zinc-900 px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl sm:px-6">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">
                    Showing <span className="font-medium">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-medium">{Math.min(currentPage * ITEMS_PER_PAGE, filteredEntries.length)}</span> of{' '}
                    <span className="font-medium">{filteredEntries.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-zinc-400 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    
                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                      // Show first, last, current, and adjacent pages
                      if (
                        page === 1 || 
                        page === totalPages || 
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0 ${
                              currentPage === page
                                ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                : 'text-zinc-900 dark:text-zinc-100 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      }
                      
                      // Show ellipsis for gaps
                      if (
                        (page === 2 && currentPage > 3) || 
                        (page === totalPages - 1 && currentPage < totalPages - 2)
                      ) {
                        return (
                          <span key={page} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700">
                            ...
                          </span>
                        );
                      }
                      
                      return null;
                    })}

                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-zinc-400 ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </nav>
                </div>
              </div>
              
              {/* Mobile pagination */}
              <div className="flex flex-1 justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="flex items-center text-sm text-zinc-700 dark:text-zinc-300">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="relative ml-3 inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
