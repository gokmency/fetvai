import { useState } from 'react';
import { getFetva } from '../services/gemini';
import { handleFetvaError } from '../utils/error';
import type { FetvaResponse } from '../types';

export function useFetva() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<FetvaResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const askQuestion = async (question: string, retry = false) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError(null);
    
    if (retry) {
      setRetryCount(prev => prev + 1);
    } else {
      setRetryCount(0);
    }

    if (retryCount >= 3) {
      setError('Üzgünüz, şu anda yanıt üretemiyoruz. Lütfen daha sonra tekrar deneyin.');
      setIsLoading(false);
      return;
    }
    
    try {
      const result = await getFetva(question);
      try {
        const parsed = JSON.parse(result);
        setResponse(parsed);
        setError(null);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        if (retryCount < 3) {
          // Automatically retry on parse error
          setTimeout(() => askQuestion(question, true), 1000);
        } else {
          throw new Error('Yanıt formatı geçersiz. Lütfen tekrar deneyiniz.');
        }
      }
    } catch (error) {
      const errorMessage = handleFetvaError(error);
      setError(errorMessage);
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    response,
    error,
    askQuestion
  };
}