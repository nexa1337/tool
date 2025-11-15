import React from 'react';
import type { View } from '../App.tsx';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  setActiveView: (view: View) => void;
}

// Dummy components for App Store and Play Store icons
const AppStoreIcon = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="5" fill="black"/>
        <path d="M21.57,14.24a4.3,4.3,0,0,0-3.35,1.7,4.8,4.8,0,0,0-1.2,3.42,4.68,4.68,0,0,0,1.7,3.68,4.23,4.23,0,0,0,2.85,1.08,4.52,4.52,0,0,0,3.31-1.46L24,20.2a2,2,0,0,1-1.39-.5,1.76,1.76,0,0,1-.53-1.32,1.79,1.79,0,0,1,.55-1.34,2,2,0,0,1,1.35-.49,3.84,3.84,0,0,1,1.48.3V14.53A4.2,4.2,0,0,0,21.57,14.24Zm.37-3.4A3.49,3.49,0,0,0,18.5,8.71,3.61,3.61,0,0,0,16.27,11,3.56,3.56,0,0,0-1.12,2.7,3.65,3.65,0,0,0,1.17,2.79,3.5,3.5,0,0,0,2.43,1.1,3.42,3.42,0,0,0,3.42-3.46A3.45,3.45,0,0,0,21.94,10.84Z" fill="white"/>
        <text x="40" y="18" fontFamily="Arial, sans-serif" fontSize="8" fill="white">Download on the</text>
        <text x="40" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">App Store</text>
    </svg>
);

const PlayStoreIcon = () => (
    <svg width="135" height="40" viewBox="0 0 135 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect width="135" height="40" rx="5" fill="black"/>
        <path d="M25.79,20,13.23,7.41a1.2,1.2,0,0,1,.85-2.05L24.3,11.2a10.6,10.6,0,0,1,0,17.6L14.08,34.64a1.2,1.2,0,0,1-.85-2.05Z" fill="#00ffc2"/>
        <path d="M13.23,32.59,10.5,29.86a1.18,1.18,0,0,1,0-1.67L22.28,16.41a1.19,1.19,0,0,0,0-1.68L10.5,2.94A1.18,1.18,0,0,1,10.5,1.27l2.73-2.73a1.2,1.2,0,0,1,1.69,0L28.16,11.77a1.19,1.19,0,0,1,0,1.68L14.92,26.68a1.2,1.2,0,0,1-1.69,0Z" transform="translate(-1.47 5.5)" fill="#00e4ff"/>
        <path d="M10.5,1.27a1.18,1.18,0,0,0-1.67,0L6.1,3.95a1.18,1.18,0,0,0,0,1.67l7.8,7.8a1.18,1.18,0,0,1,0,1.67l-7.8,7.8a1.18,1.18,0,0,0,0,1.67l2.73,2.73a1.18,1.18,0,0,0,1.67,0l13.24-13.23a1.19,1.19,0,0,0,0-1.68Z" transform="translate(1.47 5.5)" fill="#ff3366"/>
        <text x="45" y="18" fontFamily="Arial, sans-serif" fontSize="8" fill="white">GET IT ON</text>
        <text x="45" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white">Google Play</text>
    </svg>
);


export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  const handleNavClick = (view: View) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
               <BookOpen className="h-7 w-7 md:h-8 md:w-8 text-blue-600" />
               <span className="ml-3 text-xl md:text-2xl font-bold">
                <span className="text-slate-800 dark:text-white">N E X A</span>
                <span className="text-blue-600"> 1337</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your ultimate guide to navigating the tech world.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
                <li><a href="#" onClick={handleNavClick('roadmap')} className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Roadmap</a></li>
                <li><a href="#" onClick={handleNavClick('tools')} className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tools Database</a></li>
                <li><a href="#" onClick={handleNavClick('ebooks')} className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Ebooks</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div className="md:justify-self-center">
            <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Github /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Twitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin /></a>
            </div>
          </div>
           <div className="md:justify-self-end">
             <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Get the App</h4>
             <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center gap-4">
                <a href="#"><AppStoreIcon /></a>
                <a href="#"><PlayStoreIcon /></a>
             </div>
           </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} N E X A 1337. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};