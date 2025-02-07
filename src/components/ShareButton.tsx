import { Facebook } from 'lucide-react';

interface ShareButtonProps {
  response: string;
}

export function ShareButton({ response }: ShareButtonProps) {
  const shareOnFacebook = () => {
    const text = `${response.slice(0, 300)}${response.length > 300 ? '...' : ''}`;
    const url = 'https://fetvai.vercel.app';
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <button
      onClick={shareOnFacebook}
      className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg
                hover:bg-[#0C63D4] transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <Facebook className="w-5 h-5" />
      <span>Facebook'ta Paylaş</span>
    </button>
  );
}
