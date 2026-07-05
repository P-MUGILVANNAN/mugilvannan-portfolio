import React, { useState, useRef, type MouseEvent } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation in degrees (default 10)
  scale?: number; // Scale on hover (default 1.02)
  defaultTransform?: string; // Optional default transformation
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.03,
  defaultTransform = "rotateX(0deg) rotateY(0deg)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: `perspective(1000px) ${defaultTransform} scale3d(1, 1, 1)`,
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  });
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: "translate(-50%, -50%)",
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse relative to card top-left
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized position (-0.5 to 0.5)
    const px = x / width - 0.5;
    const py = y / height - 0.5;
    
    // Calculate rotation angles
    const rotateX = -py * maxTilt;
    const rotateY = px * maxTilt;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    // Hover spotlight glow position
    setGlowStyle({
      left: `${x}px`,
      top: `${y}px`,
      opacity: 0.15,
      transition: "opacity 0.15s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) ${defaultTransform} scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });
    setGlowStyle({
      opacity: 0,
      transform: "translate(-50%, -50%)",
      transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden glass-card rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Dynamic spot gradient glow inside the card following mouse */}
      <div
        className="absolute pointer-events-none w-56 h-56 bg-linear-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl -z-10 translate-x-[-50%] translate-y-[-50%]"
        style={glowStyle}
      />
      {children}
    </div>
  );
};
