import { useEffect, useRef } from 'react';

interface Props {
  opacity?: number;
  color?: string;
  scale?: number;
}

export function IslamicBackground({ 
  opacity = 0.03, 
  color = '#1E4D3C',
  scale = 1
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Draw Islamic geometric pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;

      const size = 100 * scale;
      const cols = Math.ceil(canvas.width / size);
      const rows = Math.ceil(canvas.height / size);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * size;
          const y = j * size;

          // Draw star pattern
          ctx.beginPath();
          for (let k = 0; k < 8; k++) {
            const angle = (k * Math.PI) / 4;
            const innerRadius = size * 0.2;
            const outerRadius = size * 0.4;
            
            const startX = x + size/2 + Math.cos(angle) * innerRadius;
            const startY = y + size/2 + Math.sin(angle) * innerRadius;
            const endX = x + size/2 + Math.cos(angle) * outerRadius;
            const endY = y + size/2 + Math.sin(angle) * outerRadius;
            
            if (k === 0) {
              ctx.moveTo(startX, startY);
            } else {
              ctx.lineTo(startX, startY);
            }
            ctx.lineTo(endX, endY);
          }
          ctx.closePath();
          ctx.fill();

          // Draw connecting lines
          ctx.beginPath();
          ctx.arc(x + size/2, y + size/2, size * 0.45, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    drawPattern();
    window.addEventListener('resize', drawPattern);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('resize', drawPattern);
    };
  }, [opacity, color, scale]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}
