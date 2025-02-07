import { type ReactElement } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: ReactElement<LucideIcon>;
  label: string;
  value: string;
}

export function StatCard({ icon, label, value }: StatCardProps): ReactElement {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100/50">
      <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-4xl font-bold text-gray-900 mb-2">{value}</h4>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
