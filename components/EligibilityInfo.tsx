
import React, { useState } from 'react';
import Card from './common/Card';
import { answerEligibilityQuestion } from '../services/geminiService';
import Spinner from './common/Spinner';

const EligibilityInfo: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    setError('');
    setAnswer('');

    try {
      const result = await answerEligibilityQuestion(question);
      setAnswer(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Donation Eligibility</h2>
        <p className="text-gray-600 mb-4">
          To ensure the safety of both donors and recipients, everyone must meet certain requirements to donate blood. Below are some of the basic criteria.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Age:</strong> You must be at least 17 years old (16 with parental consent in some states).</li>
          <li><strong>Weight:</strong> You must weigh at least 110 lbs.</li>
          <li><strong>Health:</strong> You must be in good general health and feeling well on the day of donation.</li>
          <li><strong>Travel:</strong> Certain travel destinations may result in a temporary deferral.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          This is not a complete list. For specific eligibility questions, please consult a healthcare professional or use our AI assistant below.
        </p>
      </Card>
      
      <Card>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Have a Question? Ask our AI Assistant!</h3>
        <form onSubmit={handleQuestionSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Can I donate if I have a tattoo?"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-red focus:border-brand-red"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-brand-red text-white font-semibold rounded-md shadow-sm hover:bg-brand-red-dark disabled:bg-gray-400 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Ask'}
          </button>
        </form>
        <div className="mt-6">
          {error && <p className="text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
          {answer && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800 whitespace-pre-wrap">{answer}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EligibilityInfo;
