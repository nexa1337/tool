import React from 'react';
import type { Ebook } from '../types.ts';
import { Star, Youtube, ShoppingCart, BookUp } from 'lucide-react';

interface EbookCardProps {
  ebook: Ebook;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<Star key={i} style={{clipPath: 'inset(0 50% 0 0)'}} className="w-4 h-4 text-yellow-400 fill-current absolute" />);
      stars.push(<Star key={i+0.5} className="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current" />);
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current" />);
    }
  }
  return <div className="flex items-center relative">{stars}</div>;
};

export const EbookCard: React.FC<EbookCardProps> = ({ ebook }) => {
  const { title, coverImage, rating, price, buyLink, summaryLink, pages, category } = ebook;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden h-full group">
      <div className="relative pt-[133%] bg-gray-100 dark:bg-slate-700">
        <img src={coverImage} alt={`${title} cover`} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">{category}</span>
        <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 flex-grow mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-3 text-sm text-gray-500 dark:text-gray-400">
          <StarRating rating={rating} />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-500 dark:text-gray-400">{pages} pages</span>
          <span className="text-lg font-bold text-gray-800 dark:text-slate-100">${price.toFixed(2)}</span>
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 text-sm">
          <a
            href={summaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            <Youtube size={16} />
            Summary
          </a>
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={16} />
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};