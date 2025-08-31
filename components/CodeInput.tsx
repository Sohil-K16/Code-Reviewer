
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
      <div className="p-4 border-b border-border-color flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-main">Your Code</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-brand-bg border border-border-color rounded-md px-3 py-1 text-text-secondary focus:ring-2 focus:ring-primary focus:outline-none"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-grow p-1">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={`// Paste your ${language} code here...`}
          className="w-full h-full bg-surface text-text-main resize-none p-3 font-mono text-sm focus:outline-none"
          style={{ minHeight: '400px' }}
        />
      </div>
      <div className="p-4 border-t border-border-color">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed"
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
