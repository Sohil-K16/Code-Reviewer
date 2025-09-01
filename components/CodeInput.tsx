import React from 'react';
import { LANGUAGES } from '../constants';
import { LoaderIcon } from './icons/LoaderIcon';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" {...props}>
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const CodeInput: React.FC<CodeInputProps> = ({
  code,
  setCode,
  language,
  setLanguage,
  onSubmit,
  isLoading,
}) => {
  return (
    <div className="bg-surface rounded-lg border border-border-color shadow-lg flex flex-col h-full">
      <div className="p-4 border-b border-border-color flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold text-text-main">Your Code</h2>
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="appearance-none bg-brand-bg border border-border-color rounded-md pl-3 pr-8 py-2 text-text-main focus:ring-2 focus:ring-primary focus:outline-none"
            aria-label="Select programming language"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={`Paste your ${language} code here...`}
          className="w-full h-full bg-surface text-text-main resize-none p-4 font-mono text-sm focus:outline-none placeholder-text-secondary"
          style={{ minHeight: '400px' }}
        />
      </div>
      <div className="p-4 border-t border-border-color">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-primary-hover disabled:bg-gray-600 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary"
        >
          {isLoading ? (
            <>
              <LoaderIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Reviewing...
            </>
          ) : (
            'Review Code'
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeInput;