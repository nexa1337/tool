import React, { useState } from 'react';
import { BookCategory } from '../data/books';
import { Search, BookOpen, ExternalLink, Info, Star, Youtube, ShoppingCart } from 'lucide-react';

interface BookViewProps {
  category: BookCategory;
}

export default function BookView({ category }: BookViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = category.books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{category.title}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{category.description}</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-zinc-100"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {filteredBooks.map((book, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 mb-3 shadow-sm group-hover:shadow-md transition-all">
                  {book.coverImage ? (
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                      <BookOpen className="w-12 h-12 opacity-20" />
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center gap-3">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                    <p className="text-white text-xs font-medium">${book.price}</p>
                    <p className="text-zinc-300 text-xs">{book.pages} pages</p>
                    
                    <div className="flex gap-2 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      {book.buyLink && (
                        <a 
                          href={book.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black p-2 rounded-full hover:scale-110 transition-transform"
                          title="Buy Book"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </a>
                      )}
                      {book.summaryLink && book.summaryLink !== '#' && (
                        <a 
                          href={book.summaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
                          title="Watch Summary"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-tight mb-1" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1" title={book.author}>
                  {book.author}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-zinc-500 dark:text-zinc-400 space-y-4">
            <BookOpen className="w-12 h-12 opacity-20" />
            <p>No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
