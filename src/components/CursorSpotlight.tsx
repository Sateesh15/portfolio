import React, { useEffect, useState } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let animationFrame: number;
    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const updateSmoothPosition = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setPosition({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(updateSmoothPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    animationFrame = requestAnimationFrame(updateSmoothPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Ambient Large Glow Spotlight */}
      <div
        className="fixed pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '500px',
          height: '500px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Center Precise Dot Cursor */}
      <div
        className={`fixed pointer-events-none z-40 hidden md:block rounded-full transition-transform duration-100 ${
          isClicking
            ? 'scale-150 bg-emerald-400 opacity-90 shadow-[0_0_15px_rgba(52,211,153,0.9)]'
            : 'scale-100 bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Interactive Click Ripple Waves */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed pointer-events-none z-40 rounded-full border border-emerald-400/50 animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%)',
            animationDuration: '600ms',
          }}
        />
      ))}
    </>
  );
};
