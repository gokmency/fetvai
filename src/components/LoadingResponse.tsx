import { LoadingDots } from './LoadingDots';

export function LoadingResponse() {
  return (
    <div className="w-full max-w-6xl mx-auto animate-fadeIn">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative p-6 bg-white/90 ring-1 ring-emerald-500/50 rounded-xl">
            <div className="h-24 flex items-center justify-center">
              <LoadingDots />
            </div>
          </div>
        </div>
      </div>

      {/* Book-like Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Page - Verses */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-100/50">
          <div className="h-full flex flex-col">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-emerald-100 rounded w-1/3"></div>
              <div className="space-y-3">
                <div className="h-4 bg-emerald-50 rounded w-3/4"></div>
                <div className="h-4 bg-emerald-50 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Page - Hadiths */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-100/50">
          <div className="h-full flex flex-col">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-blue-100 rounded w-1/3"></div>
              <div className="space-y-3">
                <div className="h-4 bg-blue-50 rounded w-3/4"></div>
                <div className="h-4 bg-blue-50 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
