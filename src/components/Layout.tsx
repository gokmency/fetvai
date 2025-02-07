import { KuranBackground } from './KuranBackground';
import { AppTitle } from './AppTitle';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <KuranBackground opacity={0.2} />
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col min-h-screen relative z-10">
        <div className="flex-1 flex flex-col items-center justify-start gap-8 relative">
          <div className="absolute inset-0 glass rounded-3xl -mx-4 -my-6 z-0 shadow-xl shadow-emerald-900/5" />
          <div className="relative z-10 w-full flex flex-col items-center gap-8 max-w-[90rem] mx-auto">
            <AppTitle />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}