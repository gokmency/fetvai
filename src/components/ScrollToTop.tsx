import { type ReactElement, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop(): ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="fixed bottom-8 right-8 p-4 bg-emerald-600 text-white rounded-full shadow-lg
                hover:bg-emerald-700 transition-all duration-300 z-50
                animate-bounce-slow"
      onClick={scrollToTop}
      aria-label="Yukarı Çık"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
