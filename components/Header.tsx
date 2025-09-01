import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-surface border-b border-border-color shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <SparklesIcon className="h-8 w-8 text-primary" />
          <h1 className="ml-3 text-2xl font-semibold text-text-main tracking-tight">
            Gemini Code Reviewer
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;