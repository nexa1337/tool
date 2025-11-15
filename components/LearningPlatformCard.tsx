

import React from 'react';
import type { LearningPlatform, PlatformCategory } from '../types.ts';
import { ExternalLink } from 'lucide-react';

interface LearningPlatformCardProps {
  platform: LearningPlatform;
}

const categoryColors: Record<PlatformCategory, string> = {
  'Free with Certificate': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  'Free without Certificate': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
  'Paid with Certificate': 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
  'Open Courseware': 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
};

export const LearningPlatformCard: React.FC<LearningPlatformCardProps> = ({ platform }) => {
  const { name, description, link, logo, category, tags } = platform;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden h-full group">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-2 rounded-lg flex items-center justify-center w-16 h-16">
              <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">{name}</h3>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[category]}`}>
                {category}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 min-h-[3.5rem]">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-50 dark:bg-slate-800/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 p-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-200"
      >
        <div className="flex items-center justify-center gap-2">
          <span>Visit Platform</span>
          <ExternalLink size={16} />
        </div>
      </a>
    </div>
  );
};