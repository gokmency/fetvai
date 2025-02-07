import { useRef } from 'react';
import { BookMarked, Download } from 'lucide-react';
import { ShareButton } from './ShareButton';
import type { FetvaResponse } from '../types';
import { generatePDF } from '../utils/pdf';

interface Props {
  response: FetvaResponse;
}

export function FetvaResponse({ response }: Props) {
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSave = async () => {
    if (!responseRef.current) return;
    
    try {
      await generatePDF(response, responseRef.current);
    } catch (error) {
      alert('PDF kaydedilirken bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div ref={responseRef} className="w-full max-w-6xl mx-auto animate-fadeIn">
      {/* Guidance Section */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative p-6 bg-white/90 ring-1 ring-emerald-500/50 rounded-xl">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
              {response.guidance}
            </p>
          </div>
        </div>
      </div>

      {/* Book-like Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Page - Verses */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-100/50 animate-slideIn"
             style={{ animationDelay: '0.2s' }}>
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 sticky top-0 bg-white/80 backdrop-blur-lg py-4 z-10">
              <BookMarked className="w-6 h-6 text-emerald-600" />
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                İlgili Ayetler
              </span>
            </h2>
            <div className="space-y-6 flex-grow">
              {response.verses.map((verse, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-sm
                           border border-emerald-100/50 hover:shadow-md transition-all duration-300
                           hover:scale-[1.02] hover:bg-gradient-to-br hover:from-emerald-100 hover:to-white
                           group"
                >
                  <p className="text-right mb-4 font-arabic text-2xl leading-loose text-emerald-950">
                    {verse.arabic}
                  </p>
                  <p className="text-gray-700 mb-3 text-lg leading-relaxed">{verse.turkish}</p>
                  <div className="text-sm">
                    <p className="font-medium text-emerald-600">{verse.reference}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Page - Hadiths */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100/50 animate-slideIn"
             style={{ animationDelay: '0.4s' }}>
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 sticky top-0 bg-white/80 backdrop-blur-lg py-4 z-10">
              <BookMarked className="w-6 h-6 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Hadisler
              </span>
            </h2>
            <div className="space-y-6 flex-grow">
              {response.hadiths.map((hadith, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm
                           border border-blue-100/50 hover:shadow-md transition-all duration-300
                           hover:scale-[1.02] hover:bg-gradient-to-br hover:from-blue-100 hover:to-white
                           group"
                >
                  <p className="text-right mb-4 font-arabic text-2xl leading-loose text-blue-950">
                    {hadith.arabic}
                  </p>
                  <p className="text-gray-700 mb-3 text-lg leading-relaxed">{hadith.turkish}</p>
                  <div className="text-sm">
                    <p className="font-medium text-blue-600">{hadith.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleSave}
          className="btn-primary flex items-center gap-3 group relative overflow-hidden"
        >
          <span className="flex items-center gap-2">
            <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            PDF Olarak Kaydet
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary-light)]/20 
                        group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        </button>
        <ShareButton response={response.guidance} />
      </div>
    </div>
  );
}