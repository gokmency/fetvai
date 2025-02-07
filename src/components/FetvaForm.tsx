import React, { useState } from 'react';
import { SendHorizonal, Loader2 } from 'lucide-react';

interface Props {
  onSubmit: (question: string) => void;
  isLoading: boolean;
}

export function FetvaForm({ onSubmit, isLoading }: Props) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuestion = question.trim();
    if (trimmedQuestion) {
      onSubmit(trimmedQuestion);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-8">

        <div className="w-full space-y-3 animate-slideIn">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Dini veya manevi sorunuzu buraya yazabilirsiniz..."
              className="w-full p-6 bg-white/90 backdrop-blur-sm border-2 border-[var(--primary-light)] rounded-2xl
                       shadow-lg shadow-[var(--primary)]/10 min-h-[180px] focus:ring-2 focus:ring-[var(--primary)]
                       focus:border-[var(--primary)] placeholder:text-[var(--text-secondary)] text-[var(--text-primary)] text-lg
                       transition-all duration-300 resize-none hover:shadow-xl hover:border-[var(--primary)]
                       hover:shadow-[var(--primary)]/20 disabled:bg-gray-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-gray-500">
              {question.length > 0 && (
                <span className="px-2 py-1 rounded-md bg-[var(--primary-light)]/10 text-[var(--primary)] font-medium">
                  {question.length} karakter
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="btn-primary group relative overflow-hidden"
        >
          <span className="flex items-center gap-2">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Yanıt Bekleniyor...
              </>
            ) : (
              <>
                Soru Sor
                <SendHorizonal className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary-light)]/20 
                        group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        </button>
      </div>
    </form>
  );
}