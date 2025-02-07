import { type ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: ReactElement<LucideIcon>;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps): ReactElement {
  return (
    <div className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-emerald-500/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
