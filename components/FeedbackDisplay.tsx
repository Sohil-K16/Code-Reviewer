import React from 'react';
import { LoaderIcon } from './icons/LoaderIcon';

interface FeedbackDisplayProps {
  feedback: string;
  isLoading: boolean;
  error: string | null;
}

const CodeBlockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10 9.5 5.5 14l4.5 4.5" />
        <path d="M14 18.5 18.5 14l-4.5-4.5" />
        <path d="M13 3 10 21" />
    </svg>
);


const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
  feedback,
  isLoading,
  error,
}) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-text-secondary">
          <LoaderIcon className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-lg">Analyzing your code...</p>
          <p className="text-sm">This might take a moment.</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="p-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center text-red-400">
            <h3 className="font-semibold text-lg mb-2 text-red-300">An Error Occurred</h3>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      );
    }
    if (feedback) {
      return (
        <div className="p-4 text-text-main text-sm">
          <pre className="whitespace-pre-wrap break-words font-mono bg-brand-bg p-4 rounded-md">{feedback}</pre>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center h-full text-text-secondary p-8 text-center">
        <CodeBlockIcon className="w-16 h-16 mb-4 text-border-color" />
        <h3 className="font-semibold text-lg text-text-main">AI Feedback</h3>
        <p className="max-w-xs mx-auto">Submit your code on the left to receive an expert review from Gemini.</p>
      </div>
    );
  };

  return (
    <div className="bg-surface rounded-lg border border-border-color shadow-lg flex flex-col h-full">
      <div className="p-4 border-b border-border-color">
        <h2 className="text-lg font-semibold text-text-main">AI Review</h2>
      </div>
      <div className="flex-grow overflow-y-auto" style={{ minHeight: '400px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default FeedbackDisplay;