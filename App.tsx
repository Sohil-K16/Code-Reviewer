
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import CodeInput from './components/CodeInput';
import FeedbackDisplay from './components/FeedbackDisplay';
import { reviewCode } from './services/geminiService';
import { LANGUAGES } from './constants';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [language, setLanguage] = useState<string>(LANGUAGES[0].value);
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleReview = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to review.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setFeedback('');

    try {
      const result = await reviewCode(code, language);
      setFeedback(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to get code review. ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [code, language]);

  return (
    <div className="min-h-screen bg-brand-bg font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <CodeInput
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            onSubmit={handleReview}
            isLoading={isLoading}
          />
        </div>
        <div className="flex flex-col">
           <FeedbackDisplay
            feedback={feedback}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
