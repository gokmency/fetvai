import { BookHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AppTitle() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
      <BookHeart className="w-8 h-8 text-emerald-600" />
      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
        Fetv.ai
      </span>
    </Link>
  );
}
