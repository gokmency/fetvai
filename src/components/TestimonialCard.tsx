import { type ReactElement } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, title, content, image }: TestimonialProps): ReactElement {
  return (
    <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-4 h-4 text-white" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
}
