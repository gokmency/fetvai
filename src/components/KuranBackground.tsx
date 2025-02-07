interface Props {
  opacity?: number;
  className?: string;
}

export function KuranBackground({ 
  opacity = 0.15,
  className = ''
}: Props) {
  return (
    <div className={`fixed inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}>
      {/* Main Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/HdQZZyY/quran-bg.jpg')`,
          opacity,
          backgroundBlendMode: 'soft-light'
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white/90 to-emerald-50/80"
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
}
