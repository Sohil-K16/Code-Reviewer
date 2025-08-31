
import React from 'react';
import { LoaderIcon } from './icons/LoaderIcon';

interface FeedbackDisplayProps {
  feedback: string;
  isLoading: boolean;
  error: string | null;
}

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
        <div className="flex items-center justify-center h-full text-red-400">
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 text-center">
            <h3 className="font-bold text-lg mb-2">An Error Occurred</h3>
            <p>{error}</p>
          </div>
        </div>
      );
    }
    if (feedback) {
      return (
        <div className="prose prose-invert prose-sm md:prose-base max-w-none p-4 font-mono">
            <pre className="whitespace-pre-wrap break-words">{feedback}</pre>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center h-full text-text-secondary p-8 text-center">
        <div className="w-16 h-16 bg-brand-bg rounded-lg border-2 border-dashed border-border-color mb-4"></div>
        <h3 className="font-semibold text-lg text-text-main">Code Review Feedback</h3>
        <p>Your AI-powered code analysis will appear here.</p>
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
